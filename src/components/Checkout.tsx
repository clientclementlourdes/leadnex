// components/checkout/CheckoutSection.tsx
"use client";

import { useState } from "react";
import { CreditCard } from "lucide-react";
import { useRazorpay } from "@/hooks/useRazorpay";
import Button from "@/ui/button";

export const CheckoutSection = () => {
  const [loading, setLoading] = useState(false);
  const { processPayment } = useRazorpay();

  const handlePayment = async () => {
    setLoading(true);
    try {
      // 1. Create Order on Server
      const res = await fetch("/api/razorpay/order", { method: "POST" });
      const orderData = await res.json();

      // 2. Open Razorpay Modal
      await processPayment({
        amount: orderData.amount,
        currency: orderData.currency,
        order_id: orderData.id,
        name: "Acme Web Services",
        description: "Payment for Website Design",
        prefill: {
          email: "user@example.com",
        }
      });
    } catch (error) {
      console.error("Payment failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 border border-zinc-800 rounded-lg bg-zinc-950">
      <h3 className="text-white mb-4">Complete Purchase</h3>
      <Button
        label="Pay Now" 
        Icon={CreditCard} 
        variant="primary" 
        size="lg" 
        isLoading={loading}
        onClick={handlePayment}
        className="w-full"
      />
    </div>
  );
};