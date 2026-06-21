"use client";

import { useState } from "react";
import { Loader2, CreditCard } from "lucide-react";
import { useRazorpay } from "@/hooks/useRazorpay";
import Button from "@/ui/button";
import {
  showErrorAlert,
  showSuccessAlert,
  getFriendlyErrorMessage,
} from "@/utils/notifications";

interface CheckoutButtonProps {
  courseId: string;
  amount: number;
  courseName: string;
  description?: string;
  label?: string;
  size: "xs" | "sm" | "md" | "lg";
  className?: string;
  prefillEmail?: string;
  onSuccess?: (paymentId: string) => void;
}

/**
 * Production-grade checkout button component
 * Shows payment alerts and handles payment flow with proper error messages
 */
export const CheckoutButton = ({
  courseId,
  amount,
  courseName,
  description = "Service Enrollment Payment",
  label,
  size,
  className,
  prefillEmail = "user@example.com",
  onSuccess,
}: CheckoutButtonProps) => {
  const { processPayment, loading } = useRazorpay();

  const handlePayment = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    // Validate amount
    if (!amount || amount <= 0) {
      showErrorAlert("Invalid Amount", "The payment amount is invalid. Please contact support.");
      return;
    }

    // Convert raw amount safely to lowest denominational subunit (Paise)
    const processedSubunitAmount = Math.round(amount * 100);

    try {
      // 1. Create Order on Server
      const orderRes = await fetch("/api/razorpay/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: processedSubunitAmount,
          courseId: courseId,
        }),
      });

      if (!orderRes.ok) {
        const errorData = await orderRes.json();
        showErrorAlert(
          "Order Creation Failed",
          getFriendlyErrorMessage(errorData.error || "Failed to create payment order")
        );
        return;
      }

      const orderData = await orderRes.json();

      // 2. Open Razorpay Modal and handle payment
      const result = await processPayment(
        {
          amount: orderData.amount,
          currency: orderData.currency,
          order_id: orderData.id,
          name: courseName,
          description: description,
          prefill: {
            email: prefillEmail,
          },
          notes: {
            courseId: courseId,
          },
        },
        (successData) => {
          // Show success toast with payment reference
          showSuccessAlert(
            "Payment Successful!",
            `Your enrollment is confirmed. Reference ID: ${successData.razorpay_payment_id}`
          );
          if (onSuccess) onSuccess(successData.razorpay_payment_id);
        },
        (errorMsg) => {
          // Error toast is shown automatically in useRazorpay
          console.error(`[CHECKOUT_MODAL_FAILURE] Order ID: ${orderData.id}`, errorMsg);
          showErrorAlert(errorMsg);
        }
      );

      // Additional error check
      if (!result.success) {
        showErrorAlert(
          "Payment Failed",
          getFriendlyErrorMessage(result.message)
        );
      }
    } catch (err: any) {
      console.error("[CHECKOUT_FLOW_ERROR]", err);
      showErrorAlert(
        "Payment Processing Error",
        getFriendlyErrorMessage(err) || 
        "An unexpected error occurred during payment initialization. Please try again."
      );
    }
  };

  return (
    <Button
      label={loading ? "Processing Securely..." : label || "Buy now"}
      variant="primary"
      size={size}
      Icon={loading ? Loader2 : CreditCard}
      isLoading={loading}
      onClick={handlePayment}
      disabled={loading}
      className={className}
    />
  );
};
