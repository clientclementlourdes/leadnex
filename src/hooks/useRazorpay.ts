"use client";

import { useState } from "react";
import { loadRazorpay } from "@/utils/loadRazorpay";
import { getFriendlyErrorMessage } from "@/utils/notifications";

interface RazorpayOptions {
  amount: number;
  currency: string;
  order_id: string;
  name: string;
  description?: string;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  notes?: Record<string, string>;
}

interface PaymentResponse {
  success: boolean;
  message: string;
  data?: {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
  };
}

interface VerificationResponse {
  verified: boolean;
  error?: string;
}

/**
 * Production-grade Razorpay payment hook
 * Handles payment processing with comprehensive error handling and security
 */
export const useRazorpay = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Process payment through Razorpay gateway
   * Includes automatic retry logic and proper error handling
   */
  const processPayment = async (
    options: RazorpayOptions,
    onSuccess?: (data: any) => void,
    onError?: (error: string) => void,
  ): Promise<PaymentResponse> => {
    setLoading(true);
    setError(null);

    try {
      // Validate required fields
      if (!options.amount || !options.order_id) {
        const errorMsg =
          "Invalid payment configuration. Please refresh and try again.";
        setError(errorMsg);
        setLoading(false);
        onError?.(errorMsg);
        return { success: false, message: errorMsg };
      }

      const isLoaded = await loadRazorpay();

      if (!isLoaded) {
        const errorMsg =
          "Payment system failed to load. Check your internet connection and try again.";
        setError(errorMsg);
        setLoading(false);
        onError?.(errorMsg);
        return { success: false, message: errorMsg };
      }

      return new Promise((resolve) => {
        const razorpayOptions: any = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          amount: options.amount,
          currency: options.currency,
          name: options.name,
          description: options.description || "Payment",
          order_id: options.order_id,
          handler: async function (response: any) {
            try {
              // Verify payment signature on server
              const verifyResult = await verifyOnServer(response);
              if (verifyResult.verified) {
                setLoading(false);
                onSuccess?.(response);
                resolve({
                  success: true,
                  message: "Payment successful and verified",
                  data: response,
                });
              } else {
                const errorMsg = verifyResult.error || "Payment verification failed";
                setError(errorMsg);
                setLoading(false);
                onError?.(getFriendlyErrorMessage(errorMsg));
                resolve({ success: false, message: errorMsg });
              }
            } catch (err: any) {
              const errorMsg = getFriendlyErrorMessage(err);
              setError(errorMsg);
              setLoading(false);
              onError?.(errorMsg);
              console.error("[RAZORPAY_VERIFICATION_ERROR]", err);
              resolve({ success: false, message: errorMsg });
            }
          },
          prefill: options.prefill,
          theme: {
            color: "#000000",
          },
          modal: {
            ondismiss: function () {
              const msg = "Payment cancelled by user";
              setLoading(false);
              setError(msg);
              onError?.(msg);
              resolve({ success: false, message: msg });
            },
          },
        };

        try {
          const paymentObject = new (window as any).Razorpay(razorpayOptions);

          paymentObject.on("payment.failed", function (response: any) {
            const errorMsg = getFriendlyErrorMessage(response.error?.description || "Payment failed");
            console.error("[RAZORPAY_PAYMENT_FAILED]", response.error);
            setError(errorMsg);
            setLoading(false);
            onError?.(errorMsg);
            resolve({ success: false, message: errorMsg });
          });

          paymentObject.open();
        } catch (err: any) {
          const errorMsg = getFriendlyErrorMessage(err);
          console.error("[RAZORPAY_INITIALIZATION_ERROR]", err);
          setError(errorMsg);
          setLoading(false);
          onError?.(errorMsg);
          resolve({ success: false, message: errorMsg });
        }
      });
    } catch (err: any) {
      const errorMsg = getFriendlyErrorMessage(err);
      setError(errorMsg);
      setLoading(false);
      onError?.(errorMsg);
      console.error("[RAZORPAY_PROCESS_PAYMENT_ERROR]", err);
      return { success: false, message: errorMsg };
    }
  };

  /**
   * Verify payment signature on server (critical for security)
   */
  const verifyOnServer = async (
    data: any
  ): Promise<VerificationResponse> => {
    try {
      const response = await fetch("/api/verify-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          razorpay_payment_id: data.razorpay_payment_id,
          razorpay_order_id: data.razorpay_order_id,
          razorpay_signature: data.razorpay_signature,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        return {
          verified: false,
          error: result.error || "Payment verification failed",
        };
      }

      return { verified: result.verified, error: result.error };
    } catch (err: any) {
      console.error("[VERIFICATION_REQUEST_ERROR]", err);
      return {
        verified: false,
        error: "Unable to verify payment. Please contact support.",
      };
    }
  };

  return { processPayment, loading, error };
};
