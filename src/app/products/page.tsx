"use client";

import { useState } from "react";
import {
  Brain,
  GraduationCap,
  ArrowRight,
  CreditCard,
  Loader2,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRazorpay } from "@/hooks/useRazorpay";
import { operationalBadges, products } from "@/config";

const resources = [
  {
    id: "RES_01",
    title: "Executive Presence Toolkit",
    category: "Strategic Asset",
    ref: "REF_EP_01",
    price: 5000,
    desc: "A comprehensive framework for mastering influential leadership and corporate diction.",
    icon: <Brain className="w-8 h-8 md:w-10 md:h-10 stroke-[1]" />,
  },
  {
    id: "RES_02",
    title: "Leadership Masterclass",
    category: "Intellectual Property",
    ref: "REF_LM_90",
    price: 15000,
    desc: "A ninety-day intensive curriculum designed for high-potential leadership transformation.",
    icon: <GraduationCap className="w-8 h-8 md:w-10 md:h-10 stroke-[1]" />,
  },
];

export default function ReservePantry() {
  const { processPayment } = useRazorpay();
  const [activeId, setActiveId] = useState<string | null>(null);

  const handlePurchase = async (item: any) => {
    setActiveId(item.id);
    try {
      // 1. Create Order on Server with specific item info
      const res = await fetch("/api/razorpay/order", {
        method: "POST",
        body: JSON.stringify({ productId: item.id, amount: item.price }),
      });
      const orderData = await res.json();

      // 2. Open Razorpay Modal
      await processPayment({
        amount: orderData.amount,
        currency: orderData.currency,
        order_id: orderData.id,
        name: "The Reserve Pantry",
        description: `Acquiring: ${item.name || item.title}`,
        prefill: {
          email: "client@reserve.com",
        },
        // theme: { color: "#ec1313" }
      });
    } catch (error) {
      console.error("Transaction failed", error);
    } finally {
      setActiveId(null);
    }
  };

  return (
    <main className="w-full min-h-screen bg-white overflow-x-hidden selection:bg-(--color-primary) selection:text-white">
      {/* 1. PANTRY HEADER */}
      <div className="pt-8 md:pt-16" />

      {/* 2. PANTRY CONTENT */}
      <section className="px-6 py-20 md:py-24 max-w-7xl mx-auto">
        {/* Header: Grid-to-Flex transition for mobile alignment */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 items-start lg:items-end border-b border-zinc-100 pb-12 md:pb-20">
          <div className="lg:col-span-8 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="h-px w-10 bg-(--color-primary)" />
              <span className="text-(--color-primary) text-[9px] md:text-[10px] font-bold uppercase tracking-[0.6em]">
                Strategic Provisions
              </span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-[0.9] uppercase text-zinc-900">
              The <br />
              <span className="italic font-extralight text-zinc-400 text-3xl sm:text-5xl md:text-7xl">
                Reserve Pantry.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pb-2">
            <p className="text-zinc-500 text-sm md:text-base font-light leading-relaxed italic border-l-2 md:border-l border-[#ec1313]/20 pl-6 max-w-sm">
              A curated selection of artisanal goods meeting the highest
              standards of Indian heritage and culinary excellence.
            </p>
          </div>
        </div>

        {/* Product Grid: 1 Col Mobile, 2 Col Tablet, 3 Col Desktop (Senior Scale) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16 mt-16 md:mt-24">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col"
            >
              {/* Image Container: Aspect ratio optimized for product display */}
              <div className="relative aspect-3/2 overflow-hidden bg-zinc-50 border border-zinc-100 mb-6">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-all duration-1000 group-hover:scale-105"
                />

                {/* Mobile Overlay: Hidden on touch devices unless active, or replaced by a dedicated action button */}
                <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-all duration-500 hidden md:flex items-center justify-center">
                  <button
                    onClick={() => handlePurchase(product)}
                    disabled={activeId === product.id}
                    className="bg-white text-zinc-950 px-8 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-[#ec1313] hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 flex items-center gap-3"
                  >
                    {activeId === product.id ? (
                      <Loader2 className="animate-spin w-3 h-3" />
                    ) : (
                      <CreditCard size={14} />
                    )}
                    Purchase Entry
                  </button>
                </div>
              </div>

              {/* Product Metadata Area */}
              <div className="flex flex-col flex-grow space-y-3">
                <div className="flex justify-between items-start">
                  <h4 className="text-xs md:text-sm font-bold tracking-widest uppercase text-zinc-900 group-hover:text-[#ec1313] transition-colors">
                    {product.name}
                  </h4>
                  <span className="text-[10px] font-mono text-zinc-300">
                    PRV_{product.id.toString().padStart(3, "0")}
                  </span>
                </div>

                <div className="flex flex-col gap-1 border-l border-zinc-100 pl-4">
                  <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-medium">
                    {product.type}
                  </p>
                  <p className="text-[9px] text-[#ec1313] font-bold uppercase tracking-[0.2em]">
                    Origin: {product.origin}
                  </p>
                </div>
              </div>

              {/* Responsive Checkout Link: Mobile-first ergonomic touch area */}
              <div className="mt-6 pt-4 border-t border-zinc-50">
                <button
                  onClick={() => handlePurchase(product)}
                  className="w-full group/btn flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-zinc-900 transition-colors"
                >
                  <span
                    className={
                      activeId === product.id
                        ? "text-[#ec1313]"
                        : "text-zinc-400 group-hover/btn:text-[#ec1313]"
                    }
                  >
                    {activeId === product.id
                      ? "Processing Securely..."
                      : "Quick Checkout"}
                  </span>
                  <div
                    className={`transition-transform duration-300 ${activeId === product.id ? "rotate-45" : "group-hover/btn:translate-x-1"}`}
                  >
                    {activeId === product.id ? (
                      <Loader2 className="animate-spin w-3 h-3 text-[#ec1313]" />
                    ) : (
                      "→"
                    )}
                  </div>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. DIGITAL ASSETS */}
      <section className="px-6 py-20 md:py-24 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto">
          {/* Header: Centered on mobile, but maintains strong visual weight */}
          <div className="mb-16 md:mb-24 flex flex-col items-center text-center space-y-4">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[#ec1313] text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] md:tracking-[0.5em]"
            >
              Intel & Advancement
            </motion.span>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase text-zinc-900 leading-[1.1]">
              Digital{" "}
              <span className="italic font-extralight text-zinc-400">
                Assets.
              </span>
            </h3>
          </div>

          {/* Grid Strategy: 1 Col on mobile/tablet, 2 Col on Large Desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {resources.map((res, index) => (
              <motion.div
                key={res.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white p-8 md:p-12 lg:p-14 border border-zinc-200 hover:border-[#ec1313]/30 transition-all duration-700 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle Vertical Accent - Senior Detail */}
                <div className="absolute left-0 top-0 h-full w-[2px] bg-zinc-100 group-hover:bg-[#ec1313] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

                {/* Top Metadata Row */}
                <div className="flex justify-between items-start mb-10 md:mb-16">
                  <div className="text-zinc-900 group-hover:text-[#ec1313] transition-all duration-500 transform group-hover:scale-110">
                    {res.icon}
                  </div>
                  <span className="text-[9px] md:text-[10px] font-mono text-zinc-300 uppercase tracking-widest bg-zinc-50 px-2 py-1 rounded">
                    {res.ref}
                  </span>
                </div>

                <div className="flex flex-col flex-grow">
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#ec1313] mb-3">
                    {res.category}
                  </span>
                  <h4 className="text-2xl md:text-4xl font-black tracking-tighter uppercase mb-4 text-zinc-900 leading-tight">
                    {res.title}
                  </h4>
                  <p className="text-zinc-500 text-sm md:text-base font-light leading-relaxed mb-10 max-w-md">
                    {res.desc}
                  </p>

                  {/* Action Area: Pushed to the bottom */}
                  <div className="mt-auto pt-8 border-t border-zinc-100">
                    <button
                      onClick={() => handlePurchase(res)}
                      disabled={activeId === res.id}
                      className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-900 group/btn relative overflow-hidden"
                    >
                      {activeId === res.id ? (
                        <div className="flex items-center gap-3 text-[#ec1313]">
                          <span>Processing Access</span>
                          <Loader2 className="animate-spin" size={14} />
                        </div>
                      ) : (
                        <div className="flex items-center gap-4">
                          <span className="relative z-10">Acquire Access</span>
                          <div className="p-2 rounded-full bg-zinc-50 group-hover/btn:bg-[#ec1313] group-hover/btn:text-white transition-all duration-500">
                            <ArrowRight
                              size={14}
                              className="group-hover/btn:translate-x-1 transition-transform"
                            />
                          </div>
                        </div>
                      )}
                    </button>
                  </div>
                </div>

                {/* Decorative Corner Asset - "Senior" branding touch */}
                <div className="absolute -bottom-6 -right-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none">
                  {res.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OPERATIONAL STANDARDS */}
      <section className="px-6 py-20 md:py-24 max-w-7xl mx-auto border-t border-zinc-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-24">
          {operationalBadges.map(({icon: Icon, title, desc}, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.15,
                duration: 0.8,
                ease: [0.21, 0.45, 0.32, 0.9],
              }}
              className="group flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
            >
              {/* Icon: Softened background with brand-color interaction */}
              <div className="relative">
                <div className="text-zinc-400 group-hover:text-[#ec1313] p-5 rounded-full bg-zinc-50 border border-zinc-100 transition-all duration-500 group-hover:bg-white group-hover:shadow-lg group-hover:shadow-zinc-200/50">
                  <Icon size={22} strokeWidth={1} />
                </div>
                {/* Decorative Dot: Hidden on mobile to keep it clean */}
                <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-[#ec1313] opacity-0 group-hover:opacity-100 transition-opacity hidden lg:block" />
              </div>

              <div className="space-y-4 max-w-[260px] lg:max-w-none">
                <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] text-zinc-900 group-hover:text-[#ec1313] transition-colors">
                  {title}
                </h4>

                {/* Animated Accent Line */}
                <div className="h-[1px] w-8 bg-zinc-200 mx-auto lg:mx-0 group-hover:w-16 group-hover:bg-[#ec1313] transition-all duration-700" />

                <p className="text-sm text-zinc-500 leading-relaxed font-light italic lg:not-italic">
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
