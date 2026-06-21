// app/api/verify-payment/route.ts
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

/**
 * POST /api/verify-payment
 * Verify Razorpay payment signature (CRITICAL for security)
 *
 * This endpoint verifies the HMAC-SHA256 signature returned by Razorpay
 * to ensure payment data hasn't been tampered with
 */
export async function POST(request: NextRequest) {
  try {
    // Validate environment variable
    if (!process.env.RAZORPAY_KEY_SECRET) {
      console.error("[VERIFY_CONFIG_ERROR] Missing RAZORPAY_KEY_SECRET");
      return NextResponse.json(
        { error: "Payment verification system misconfigured", verified: false },
        { status: 500 },
      );
    }

    // Parse request body
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid request format", verified: false },
        { status: 400 },
      );
    }

    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = body;

    // Validate all required fields are present and non-empty strings
    if (
      !razorpay_payment_id ||
      !razorpay_order_id ||
      !razorpay_signature ||
      typeof razorpay_payment_id !== "string" ||
      typeof razorpay_order_id !== "string" ||
      typeof razorpay_signature !== "string"
    ) {
      console.warn(
        "[VERIFY_INVALID_FIELDS] Missing or invalid payment verification fields",
      );
      return NextResponse.json(
        {
          error: "Missing required payment verification fields",
          verified: false,
        },
        { status: 400 },
      );
    }

    // Validate field formats (basic sanity checks)
    if (
      razorpay_payment_id.length === 0 ||
      razorpay_order_id.length === 0 ||
      razorpay_signature.length === 0 ||
      razorpay_signature.length !== 64 // HMAC-SHA256 produces 64 hex characters
    ) {
      console.warn(
        "[VERIFY_INVALID_FORMAT] Payment fields have invalid format",
      );
      return NextResponse.json(
        { error: "Invalid payment data format", verified: false },
        { status: 400 },
      );
    }

    // Create signature for verification
    // Algorithm: HMAC-SHA256(order_id|payment_id, KEY_SECRET)
    const message = `${razorpay_order_id}|${razorpay_payment_id}`;

    try {
      const generatedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
        .update(message)
        .digest("hex");

      // Use timing-safe comparison to prevent timing attacks
      // First ensure both signatures are the same length before comparing
      const isSignatureValid =
        generatedSignature.length === razorpay_signature.length &&
        crypto.timingSafeEqual(
          Buffer.from(generatedSignature),
          Buffer.from(razorpay_signature),
        );

      if (!isSignatureValid) {
        console.warn(
          `[VERIFY_SIGNATURE_MISMATCH] Order: ${razorpay_order_id}, Payment: ${razorpay_payment_id}`,
        );
        return NextResponse.json(
          {
            error:
              "Payment signature verification failed. Payment may be fraudulent.",
            verified: false,
          },
          { status: 400 },
        );
      }

      // Signature is valid
      console.log(
        `[VERIFY_SUCCESS] Payment verified. Order: ${razorpay_order_id}, Payment: ${razorpay_payment_id}`,
      );

      return NextResponse.json(
        {
          verified: true,
          message: "Payment verified successfully",
          razorpay_payment_id,
          razorpay_order_id,
        },
        { status: 200 },
      );
    } catch (hashError: any) {
      console.error(
        "[VERIFY_SIGNATURE_ERROR] Hash generation failed",
        hashError,
      );
      return NextResponse.json(
        { error: "Payment verification failed", verified: false },
        { status: 500 },
      );
    }
  } catch (error: any) {
    console.error("[VERIFY_PAYMENT_ERROR]", {
      message: error.message,
      stack: error.stack,
    });
    return NextResponse.json(
      {
        error: "Internal server error during payment verification",
        verified: false,
      },
      { status: 500 },
    );
  }
}
