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
} from "lucide-react";

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

  const services = [
    "Political Leadership",
    "Executive Presence",
    "Global Diplomacy",
    "Crisis Advisory",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Strategic Dossier Dispatched:", formData);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-200 flex items-center justify-center px-6">
          {/* Backdrop with Heavy Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-zinc-950/90 backdrop-blur-2xl"
          />

          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-zinc-900 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {/* Design Accent Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#ec1313] to-transparent" />

            {/* Header: Identity Section */}
            <div className="p-8 md:p-10 border-b border-white/5 flex justify-between items-start bg-zinc-900/50">
              <div>
                <span className="text-[#ec1313] text-[9px] font-bold uppercase tracking-[0.5em] block mb-2">
                  Protocol: Engagement
                </span>
                <h2 className="text-3xl font-bold tracking-tighter text-white uppercase leading-none">
                  Initiate Advisory
                </h2>
              </div>
              <button
                title="Close Form"
                onClick={onClose}
                className="p-2 hover:bg-white/5 rounded-full transition-colors text-zinc-600 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Form Body */}
            <form
              onSubmit={handleSubmit}
              className="p-8 md:p-10 space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold ml-1">
                    Identity
                  </label>
                  <div className="relative">
                    <User
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600"
                      size={14}
                    />
                    <input
                      required
                      type="text"
                      className="w-full bg-zinc-950 border border-zinc-800 p-4 pl-12 text-sm text-white focus:border-[#ec1313]/50 outline-none transition-all placeholder:text-zinc-700"
                      placeholder="Full Name"
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                </div>

                {/* Contact */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold ml-1">
                    Secure Line
                  </label>
                  <div className="relative">
                    <Phone
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600"
                      size={14}
                    />
                    <input
                      required
                      type="tel"
                      className="w-full bg-zinc-950 border border-zinc-800 p-4 pl-12 text-sm text-white focus:border-[#ec1313]/50 outline-none transition-all placeholder:text-zinc-700"
                      placeholder="+91..."
                      onChange={(e) =>
                        setFormData({ ...formData, contact: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Email & Service Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold ml-1">
                    Email
                  </label>
                  <div className="relative">
                    <Mail
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600"
                      size={14}
                    />
                    <input
                      required
                      type="email"
                      className="w-full bg-zinc-950 border border-zinc-800 p-4 pl-12 text-sm text-white focus:border-[#ec1313]/50 outline-none transition-all placeholder:text-zinc-700"
                      placeholder="Official Email"
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold ml-1">
                    Target
                  </label>
                  <div className="relative">
                    <Briefcase
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600"
                      size={14}
                    />
                    <select
                      title="Select Services"
                      className="w-full bg-zinc-950 border border-zinc-800 p-4 pl-12 text-sm text-white appearance-none focus:border-[#ec1313]/50 outline-none transition-all cursor-pointer"
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                    >
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Description: Briefing Note (Optional) */}
              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">
                    Briefing Note
                  </label>
                  <span className="text-[8px] text-zinc-700 font-mono tracking-widest uppercase italic">
                    Optional
                  </span>
                </div>
                <div className="relative">
                  <FileText
                    className="absolute left-4 top-5 text-zinc-600"
                    size={14}
                  />
                  <textarea
                    rows={4}
                    className="w-full bg-zinc-950 border border-zinc-800 p-4 pl-12 text-sm text-white focus:border-[#ec1313]/50 outline-none transition-all placeholder:text-zinc-700 resize-none font-mono leading-relaxed"
                    placeholder="Provide a high-level overview of your requirements..."
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Privacy Protocol Footer */}
              <div className="flex items-start gap-4 p-5 bg-zinc-950/50 border border-white/5 rounded-sm">
                <ShieldCheck className="text-[#ec1313] shrink-0" size={18} />
                <p className="text-[10px] text-zinc-500 font-light leading-relaxed">
                  LeadNex adheres to a
                  <span className="text-zinc-200"> zero-retention policy</span>{" "}
                  for sensitive inquiries. Data is encrypted and dispatched
                  directly to senior partner oversight.
                </p>
              </div>

              {/* Submit Action */}
              <button
                type="submit"
                className="w-full h-16 bg-[#ec1313] hover:bg-[#c11010] text-white text-[10px] font-bold uppercase tracking-[0.4em] flex items-center justify-center gap-3 transition-all duration-300 group shadow-lg shadow-[#ec1313]/10"
              >
                Dispatch Dossier
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactForm;
