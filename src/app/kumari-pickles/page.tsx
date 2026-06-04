"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, ArrowRight, ExternalLink } from "lucide-react";
import { artisans } from "@/config";
import Button from "@/ui/button";
import { useContactForm } from "../ContextProvider";

export default function KumariArtisans() {
  const { openContactForm } = useContactForm();
  return (
    <main className="min-h-screen bg-white text-zinc-900 selection:bg-(--color-primary) selection:text-white overflow-x-hidden">
      {/* 1. PANTRY HEADER */}
      <div className="pt-8 md:pt-16" />
      
      {/* 1. EDITORIAL HEADER */}
      <section className="relative px-6 py-20 md:py-24 max-w-7xl mx-auto border-b border-zinc-100">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-8 items-start lg:items-end">
          {/* Left Column: The Narrative Hook */}
          <div className="lg:col-span-8 space-y-8 md:space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="h-[1px] w-12 bg-[#ec1313]" />
              <span className="text-[#ec1313] text-[9px] md:text-[11px] font-bold uppercase tracking-[0.5em] md:tracking-[0.7em]">
                Social Impact Report 2026
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.85] md:leading-[0.8] uppercase text-zinc-900">
              The Women <br />
              <span className="italic font-extralight text-zinc-300 block mt-2 sm:mt-0">
                Behind the Jar.
              </span>
            </h2>
          </div>

          {/* Right Column: The Philosophical Core */}
          <div className="lg:col-span-4 lg:pb-6">
            <div className="relative p-8 md:p-10 bg-zinc-50 border border-zinc-100 rounded-2xl lg:rounded-none lg:bg-transparent lg:border-none lg:p-0">
              {/* Decorative Quote Mark for Mobile Context */}
              <span className="absolute top-4 left-4 text-4xl text-zinc-200 font-serif lg:hidden">
                “
              </span>

              <p className="text-zinc-600 text-lg md:text-xl font-light leading-relaxed max-w-sm italic lg:not-italic lg:border-l lg:border-zinc-200 lg:pl-10">
                Our mission extends beyond the product. We are building a
                framework of{" "}
                <span className="text-zinc-900 font-normal">
                  economic sovereignty
                </span>
                for women artisans across India—reclaiming the narrative of
                heritage through labor.
              </p>

              {/* Mobile-only CTA or Link */}
              <div className="mt-8 lg:hidden">
                <button className="text-[10px] font-bold uppercase tracking-widest text-[#ec1313] border-b border-[#ec1313] pb-1">
                  Read Full Report →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Background Visual Anchor (Optional Senior Polish) */}
        <div className="absolute top-0 right-0 -z-10 opacity-[0.03] select-none pointer-events-none hidden xl:block">
          <span className="text-[25rem] font-black leading-none text-zinc-900">
            IMPACT
          </span>
        </div>
      </section>

      {/* 2. ARCHITECTURAL FEED */}
      <section className="px-6 py-20 md:py-24 max-w-7xl mx-auto border-x border-zinc-50">
        {artisans.map((artisan) => (
          <div
            key={artisan.id}
            className="grid lg:grid-cols-12 border-b border-zinc-100 group overflow-hidden"
          >
            {/* Visual Column */}
            <div className="lg:col-span-5 relative h-[400px] sm:h-[500px] lg:h-auto overflow-hidden lg:border-r border-zinc-100">
              <Image
                src={artisan.imageUrl}
                alt={artisan.name}
                fill
                className="object-cover group-hover:scale-105 transition-all duration-[2s] ease-out"
              />
              {/* Refined Red Tint on Hover */}
              <div className="absolute inset-0 bg-[#ec1313]/0 group-hover:bg-[#ec1313]/5 transition-colors duration-1000" />

              <div className="absolute top-6 left-6 md:top-8 md:left-8">
                <span className="bg-white/90 backdrop-blur-sm border border-zinc-200 text-zinc-900 text-[9px] font-mono px-3 py-1 uppercase tracking-widest">
                  {artisan.id}
                </span>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-7 p-8 sm:p-12 md:p-20 flex flex-col justify-center bg-white relative">
              {/* Vertical Accent Line (Desktop Only) */}
              <div className="absolute left-0 top-1/4 h-1/2 w-[1px] bg-zinc-100 group-hover:bg-[#ec1313] transition-colors duration-700 hidden lg:block" />

              <div className="space-y-8 md:space-y-10">
                <div className="space-y-2">
                  <span className="text-[#ec1313] text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] block">
                    {artisan.role}
                  </span>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-none">
                    {artisan.name}
                  </h2>
                </div>

                <div className="relative">
                  <Quote className="absolute -top-8 -left-4 md:-left-10 size-10 md:size-16 text-zinc-50 group-hover:text-zinc-100 transition-colors" />
                  <p className="text-xl sm:text-2xl md:text-3xl font-light text-zinc-600 leading-snug tracking-tight italic relative z-10">
                    "{artisan.quote}"
                  </p>
                </div>

                <div className="pt-8 border-t border-zinc-50 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-1">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-zinc-400 font-bold">
                      Protocol Impact
                    </p>
                    <p className="text-sm font-bold text-zinc-900 uppercase">
                      {artisan.impact}
                    </p>
                  </div>
                  <div className="flex items-end sm:justify-end">
                    <button className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 hover:text-[#ec1313] transition-all group/link">
                      Read Dossier{" "}
                      <ArrowRight
                        size={14}
                        className="group-hover/link:translate-x-2 transition-transform"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 3. MONOLITHIC CTA */}
      <section className="px-6 py-20 md:py-24 text-center bg-zinc-50/50">
        <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
          <div className="space-y-4">
            <span className="text-(--color-primary) text-[10px] font-bold uppercase tracking-[0.5em] block">
              Support the Sovereignty
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-zinc-900 leading-[0.9] uppercase">
              Invest in the <br />
              <span className="text-(--color-primary) italic font-light">Craft.</span>
            </h2>
          </div>

          <p className="text-zinc-500 text-base md:text-xl font-light leading-relaxed max-w-xl mx-auto">
            Every purchase is a direct investment in the economic independence
            of master artisans. Align your consumption with your values.
          </p>

          <div className="pt-6">
            <Button
              label="Explore the Collection"
              onClick={openContactForm}
              size="lg"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
