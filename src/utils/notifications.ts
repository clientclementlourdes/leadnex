/**
 * Production-grade notification service
 * Uses Sonner for modern toast notifications
 * Handles user-friendly alerts for payment and form interactions
 */

import { toast } from "sonner";

export enum AlertType {
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
  INFO = "info",
}

interface NotificationOptions {
  duration?: number; // auto-dismiss in milliseconds (3000 = default, 0 = no auto-dismiss)
  action?: {
    label: string;
    onClick: () => void;
  };
  description?: string;
}

/**
 * Show user-friendly notification using Sonner toast
 * Modern, non-intrusive notifications with animations
 */
export const showNotification = (
  message: string,
  type: AlertType = AlertType.INFO,
  options: NotificationOptions = {},
) => {
  const { duration = 3000, action, description } = options;

  // Sonner handles auto-dismiss with duration
  const toastOptions = {
    duration,
    action: action
      ? {
          label: action.label,
          onClick: action.onClick,
        }
      : undefined,
    description: description,
  };

  switch (type) {
    case AlertType.ERROR:
      toast.error(message, toastOptions);
      console.error(`[PAYMENT_ERROR] ${message}`);
      break;

    case AlertType.SUCCESS:
      toast.success(message, toastOptions);
      console.log(`[PAYMENT_SUCCESS] ${message}`);
      break;

    case AlertType.WARNING:
      toast.warning(message, toastOptions);
      console.warn(`[PAYMENT_WARNING] ${message}`);
      break;

    case AlertType.INFO:
      toast.info(message, toastOptions);
      console.info(`[PAYMENT_INFO] ${message}`);
      break;
  }
};

/**
 * Show error notification with standardized format
 */
export const showErrorAlert = (message: string, description?: string) => {
  showNotification(message, AlertType.ERROR, {
    duration: 5000, // Errors stay longer
    description,
  });
};

/**
 * Show success notification with standardized format
 */
export const showSuccessAlert = (message: string, description?: string) => {
  showNotification(message, AlertType.SUCCESS, {
    duration: 3000,
    description,
  });
};

/**
 * Show warning notification with standardized format
 */
export const showWarningAlert = (message: string, description?: string) => {
  showNotification(message, AlertType.WARNING, {
    duration: 4000,
    description,
  });
};

/**
 * Show info notification
 */
export const showInfoAlert = (message: string, description?: string) => {
  showNotification(message, AlertType.INFO, {
    duration: 3000,
    description,
  });
};

/**
 * Show a promise-based toast (useful for async operations)
 */
export const showPromiseToast = <T>(
  promise: Promise<T>,
  {
    loading,
    success,
    error,
  }: {
    loading: string;
    success: string | ((data: T) => string);
    error: string | ((error: Error) => string);
  },
) => {
  return toast.promise(promise, {
    loading,
    success: (data) =>
      typeof success === "function" ? success(data) : success,
    error: (err) => (typeof error === "function" ? error(err as Error) : error),
  });
};

/**
 * User-friendly error message mapping
 * Converts technical errors to customer-friendly messages
 */
export const getFriendlyErrorMessage = (error: any): string => {
  if (typeof error === "string") return error;

  if (error?.message) {
    const msg = error.message.toLowerCase();

    // Network errors
    if (msg.includes("network") || msg.includes("fetch"))
      return "Network connection failed. Please check your internet and try again.";

    // Payment gateway errors
    if (msg.includes("razorpay") || msg.includes("gateway"))
      return "Payment gateway is temporarily unavailable. Please try again in a moment.";

    // Verification errors
    if (msg.includes("verify") || msg.includes("signature"))
      return "Payment verification failed. This is secure and your account was not charged.";

    // Server errors
    if (msg.includes("500") || msg.includes("server"))
      return "Server error occurred. Please contact support or try again later.";

    // Order creation errors
    if (msg.includes("order"))
      return "Failed to create payment order. Please try again.";

    // Generic fallback
    return error.message;
  }

  return "An unexpected error occurred. Please try again or contact support.";
};
