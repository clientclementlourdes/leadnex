// app/api/razorpay/order/route.ts
import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

/**
 * POST /api/razorpay/order
 * Create a Razorpay payment order
 * 
 * Production-grade with comprehensive validation and security
 */
export async function POST(request: NextRequest) {
  try {
    // Validate environment variables
    if (!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      console.error("[RAZORPAY_CONFIG_ERROR] Missing credentials");
      return NextResponse.json(
        { error: "Payment system misconfigured. Please contact support." },
        { status: 500 }
      );
    }

    // Parse and validate request body
    let requestBody = {};
    try {
      requestBody = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid request format" },
        { status: 400 }
      );
    }

    // Extract and validate amount
    const rawAmount = (requestBody as any)?.amount;
    
    // Validate amount is a number
    if (rawAmount === undefined || rawAmount === null) {
      return NextResponse.json(
        { error: "Amount is required" },
        { status: 400 }
      );
    }

    if (typeof rawAmount !== "number" || !Number.isFinite(rawAmount)) {
      return NextResponse.json(
        { error: "Invalid amount format" },
        { status: 400 }
      );
    }

    // Validate amount range (100 paise = ₹1, maximum ₹1,00,000)
    const MIN_AMOUNT = 100; // 100 paise = ₹1
    const MAX_AMOUNT = 10000000; // 10,000,000 paise = ₹1,00,000
    
    if (rawAmount < MIN_AMOUNT) {
      return NextResponse.json(
        { error: `Amount must be at least ₹1 (minimum 100 paise)` },
        { status: 400 }
      );
    }

    if (rawAmount > MAX_AMOUNT) {
      return NextResponse.json(
        { error: `Amount cannot exceed ₹1,00,000` },
        { status: 400 }
      );
    }
console.log(process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, process.env.RAZORPAY_KEY_SECRET)
    // Initialize Razorpay instance
    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const currency = "INR";
    const receipt = `receipt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Log order creation attempt
    console.log(`[ORDER_CREATION] Amount: ${rawAmount}, Currency: ${currency}`);
    // Create order via Razorpay API
    const order = await razorpay.orders.create({
      amount: Math.round(rawAmount),
      currency,
      receipt,
      notes: {
        project: "leadnex",
        timestamp: new Date().toISOString(),
      },
    });

    console.log(`[ORDER_CREATED] Order ID: ${order.id}`);

    // Return order details to frontend (only necessary fields)
    return NextResponse.json(
      {
        id: order.id,
        amount: order.amount,
        currency: order.currency,
        status: order.status,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("[ORDER_CREATION_ERROR]", {
      message: error.message,
      statusCode: error.statusCode,
      description: error.description,
      code: error.code,
      details: error,
    });

    // Handle Razorpay API errors
    if (error.statusCode === 401 || error.code === 'RAZORPAY_ERROR_UNAUTHORIZED') {
      console.error("[RAZORPAY_AUTH_ERROR]", {
        message: "Invalid Razorpay credentials",
        suggestion: "Check your RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET in .env.local",
        keyIdConfigured: !!process.env.RAZORPAY_KEY_ID,
        keySecretConfigured: !!process.env.RAZORPAY_KEY_SECRET,
      });
      return NextResponse.json(
        { error: "Payment system authentication failed. Please contact support." },
        { status: 500 }
      );
    }

    if (error.statusCode) {
      // Don't expose internal Razorpay error details
      const statusCode =
        error.statusCode >= 400 && error.statusCode < 500 ? 400 : 500;
      return NextResponse.json(
        { error: "Failed to process payment. Please try again." },
        { status: statusCode }
      );
    }

    return NextResponse.json(
      { error: "Server error occurred. Please contact support." },
      { status: 500 }
    );
  }
}
