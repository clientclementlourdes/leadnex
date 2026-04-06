// hooks/useRazorpay.ts
import { loadRazorpay } from "@/utils/loadRazorpay";

interface RazorpayOptions {
  amount: number;
  currency: string;
  order_id: string;
  name: string;
  description?: string;
  callback_url?: string;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
}

export const useRazorpay = () => {
  const processPayment = async (options: RazorpayOptions) => {
    const isLoaded = await loadRazorpay();

    if (!isLoaded) {
      alert("Razorpay SDK failed to load. Check your connection.");
      return;
    }

    const razorpayOptions: any = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Use env variable
      amount: options.amount,
      currency: options.currency,
      name: options.name,
      description: options.description || "Service Payment",
      order_id: options.order_id,
      handler: function (response: any) {
        // This is where you call your backend to verify the signature
        console.log("Payment Success:", response.razorpay_payment_id);
        verifyOnServer(response);
      },
      prefill: options.prefill,
      theme: {
        color: "#000000", // Keep it minimal/pro
      },
    };

    const paymentObject = new (window as any).Razorpay(razorpayOptions);
    paymentObject.open();
    
    paymentObject.on("payment.failed", function (response: any) {
      console.error("Payment Failed:", response.error.description);
    });
  };

  const verifyOnServer = async (data: any) => {
    // API call to your Next.js API route
    await fetch("/api/verify-payment", {
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  return { processPayment };
};