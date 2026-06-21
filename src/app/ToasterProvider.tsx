"use client";

import { Toaster } from "sonner";

/**
 * Sonner Toaster Provider
 * Wrap the app with this component to enable modern toast notifications
 */
export function ToasterProvider() {
  return (
    <Toaster
      position="top-right"
      richColors
      expand
      visibleToasts={3}
      closeButton
      theme="light"
      toastOptions={{
        classNames: {
          toast: "bg-white border border-zinc-200 shadow-lg rounded-lg",
          description: "text-zinc-600 text-sm",
          actionButton: "bg-zinc-900 text-white hover:bg-zinc-800",
          cancelButton: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200",
          error: "bg-red-50 border-red-200",
          success: "bg-emerald-50 border-emerald-200",
          warning: "bg-amber-50 border-amber-200",
          info: "bg-blue-50 border-blue-200",
        },
        style: {
          borderRadius: "8px",
          padding: "16px",
        },
      }}
    />
  );
}
