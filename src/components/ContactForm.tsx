"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowRight,
  ShieldCheck,
  Mail,
  User,
  Phone,
  Briefcase,
  FileText,
  Loader2,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { showErrorAlert, showSuccessAlert } from "@/utils/notifications";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactForm = ({ isOpen, onClose }: PopupProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    service: "Political Leadership",
    description: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const services = [
    "Political Leadership",
    "Executive Presence",
    "Global Diplomacy",
    "Crisis Advisory",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const templateParams = {
        user_name: formData.name,
        user_email: formData.email,
        user_contact: formData.contact,
        selected_service: formData.service,
        message: formData.description || "No description provided.",
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      showSuccessAlert(
        "Inquiry Submitted!",
        "We've received your submission. Check your email for confirmation."
      );

      setFormData({
        name: "",
        email: "",
        contact: "",
        service: "Political Leadership",
        description: "",
      });

      setTimeout(() => onClose(), 2000);
    } catch (err: any) {
      console.error("[CONTACT_FORM_EMAILJS_ERROR]", err);
      showErrorAlert(
        "Submission Error",
        "The system was unable to process your request. Please try again shortly or contact support if the issue persists."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 sm:px-6">
          {/* Backdrop with Heavy Blur and clean tint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-zinc-900/40 backdrop-blur-xl"
          />

          {/* Form Container (Professional Light Theme) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 20 }}
            transition={{ type: "spring", damping: 30, stiffness: 350 }}
            className="relative w-full max-w-2xl bg-white border border-zinc-200 shadow-2xl rounded-xl overflow-hidden"
          >
            {/* Premium Design Accent Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ec1313] to-transparent" />

            {/* Header Section */}
            <div className="p-6 md:p-8 border-b border-zinc-100 flex justify-between items-start bg-zinc-50/70">
              <div>
                <span className="text-[#ec1313] text-xs font-bold uppercase tracking-widest block mb-1">
                  Get Started
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-900">
                  Request an Advisory Session
                </h2>
                <p className="text-sm text-zinc-500 mt-1.5">
                  Fill out the details below to connect with our experts.
                </p>
              </div>
              <button
                type="button"
                title="Close Form"
                onClick={onClose}
                className="p-2 hover:bg-zinc-200/60 rounded-full transition-colors text-zinc-400 hover:text-zinc-600 dynamic-touch"
              >
                <X size={20} />
              </button>
            </div>

            {/* Form Body */}
            <form
              onSubmit={handleSubmit}
              className="p-6 md:p-8 space-y-6 max-h-[75vh] overflow-y-auto custom-scrollbar"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-0.5">
                    Full Name
                  </label>
                  <div className="relative">
                    <User
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                      size={16}
                    />
                    <input
                      required
                      type="text"
                      value={formData.name}
                      className="w-full bg-white border border-zinc-200 rounded-lg p-3.5 pl-12 text-sm text-zinc-900 focus:border-[#ec1313] focus:ring-4 focus:ring-[#ec1313]/10 outline-none transition-all placeholder:text-zinc-400 font-medium"
                      placeholder="e.g. John Doe"
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                </div>

                {/* Contact */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-0.5">
                    Contact
                  </label>
                  <div className="relative">
                    <Phone
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                      size={16}
                    />
                    <input
                      required
                      type="tel"
                      value={formData.contact}
                      className="w-full bg-white border border-zinc-200 rounded-lg p-3.5 pl-12 text-sm text-zinc-900 focus:border-[#ec1313] focus:ring-4 focus:ring-[#ec1313]/10 outline-none transition-all placeholder:text-zinc-400 font-medium"
                      placeholder="+91..."
                      onChange={(e) =>
                        setFormData({ ...formData, contact: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Email & Service Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Email */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-0.5">
                    Email
                  </label>
                  <div className="relative">
                    <Mail
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                      size={16}
                    />
                    <input
                      required
                      type="email"
                      value={formData.email}
                      className="w-full bg-white border border-zinc-200 rounded-lg p-3.5 pl-12 text-sm text-zinc-900 focus:border-[#ec1313] focus:ring-4 focus:ring-[#ec1313]/10 outline-none transition-all placeholder:text-zinc-400 font-medium"
                      placeholder="Official Email"
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                {/* Service Select */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-0.5">
                    Target Service
                  </label>
                  <div className="relative">
                    <Briefcase
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                      size={16}
                    />
                    <select
                      title="Select Services"
                      value={formData.service}
                      className="w-full bg-white border border-zinc-200 rounded-lg p-3.5 pl-12 pr-10 text-sm text-zinc-900 focus:border-[#ec1313] focus:ring-4 focus:ring-[#ec1313]/10 outline-none transition-all cursor-pointer font-medium appearance-none bg-[url('data:image/svg+xml;bs4,')] bg-no-repeat"
                      style={{
                        backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%2371717a' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`,
                        backgroundPosition: "right 1rem center",
                        backgroundSize: "1.25rem",
                      }}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                    >
                      {services.map((s) => (
                        <option key={s} value={s} className="text-zinc-900 bg-white">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <div className="flex justify-between items-center ml-0.5">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                    Description
                  </label>
                  <span className="text-[9px] text-zinc-400 font-mono tracking-widest uppercase italic">
                    Optional
                  </span>
                </div>
                <div className="relative">
                  <FileText
                    className="absolute left-4 top-4 text-zinc-400"
                    size={16}
                  />
                  <textarea
                    rows={4}
                    value={formData.description}
                    className="w-full bg-white border border-zinc-200 rounded-lg p-3.5 pl-12 text-sm text-zinc-900 focus:border-[#ec1313] focus:ring-4 focus:ring-[#ec1313]/10 outline-none transition-all placeholder:text-zinc-400 resize-none font-sans leading-relaxed"
                    placeholder="Provide a high-level overview of your requirements..."
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Action Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-14 rounded-lg bg-[#ec1313] hover:bg-[#c11010] disabled:bg-[#ec1313]/50 disabled:cursor-not-allowed text-white text-xs font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-all duration-200 group shadow-lg shadow-[#ec1313]/10 active:scale-[0.99]"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending Inquiry...
                  </>
                ) : (
                  <>
                    Submit Request
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactForm;