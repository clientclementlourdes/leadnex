"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MessageSquare,
  LineChart,
  GraduationCap,
  ArrowRight,
  Quote,
  Zap,
  ShieldCheck,
  Landmark,
} from "lucide-react";
import Button from "@/ui/button";
import { useContactForm } from "../ContextProvider";

// No changes to data structure
const milestones = [
  {
    year: "2023 - PRESENT",
    role: "Founding Partner, Varma & Associates",
    description:
      "Architect of narrative strategy for three major regional parties during high-stakes state assembly elections.",
  },
  {
    year: "2018 - 2022",
    role: "Head of Communication, National Alliance",
    description:
      "Orchestrated the 'Voice of People' campaign, a digital-first mobilization reaching 200M+ verified voters.",
  },
  {
    year: "2015",
    role: "Lead Trainer, Global Leadership Inst.",
    description:
      "Engineered the 'Executive Prestige' curriculum adopted by Fortune 500 CEOs and diplomatic corps.",
  },
];

export default function Page() {
  const { openContactForm } = useContactForm();

  return (
    <main className="w-full min-h-screen bg-white overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative h-[90vh] min-h-[700px] lg:h-screen w-full overflow-hidden bg-white">
        {/* 1. Cinematic Background Layer */}
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="/images/about_us_banner.webp"
            alt="John Majel"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[90%_center] md:object-right grayscale brightness-90 contrast-[1.05]"
          />
        </motion.div>

        {/* 2. Sophisticated Gradient Masking */}
        {/* Desktop: Strong left-to-right fade to protect text readability */}
        <div className="absolute inset-0 z-10 bg-linear-to-r from-white via-white/90 sm:via-white/40 to-transparent" />
        {/* Mobile: Bottom-up fade to ensure the face isn't covered by text */}
        <div className="absolute inset-0 z-10 bg-linear-to-t from-white via-white/20 to-transparent lg:hidden" />

        {/* 3. Content Layer */}
        <div className="relative z-20 h-full flex flex-col justify-end pb-16 md:pb-24 lg:pb-32 px-6 sm:px-12 lg:px-24">
          <div className="max-w-[1440px] mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            >
              {/* Label with brand accent */}
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 48 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="h-px bg-[#ec1313]"
                />
                <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.6em] text-[#ec1313]">
                  The Principal Advisor
                </span>
              </div>

              {/* Dynamic Name Heading */}
              <h1 className="text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] font-bold text-zinc-900 mb-10 tracking-tighter uppercase leading-[0.8] md:leading-[0.75]">
                John <br />
                Majel
              </h1>

              <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 md:gap-16 items-start lg:items-center">
                {/* Bio Quote */}
                <div className="lg:col-span-7 border-l-2 border-zinc-900 pl-8 max-w-lg">
                  <p className="text-zinc-600 text-lg md:text-2xl font-light italic tracking-tight leading-relaxed">
                    &quot;Engineering the frequency of power through articulate
                    leadership and strategic narrative architecture.&quot;
                  </p>
                </div>

                {/* Action Trigger */}
                <div className="lg:col-span-5 flex flex-col items-start lg:items-end gap-6 w-full">
                  <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-[0.4em] lg:text-right">
                    Direct Access Protocol
                  </span>

                  <button
                    onClick={openContactForm}
                    className="group relative flex items-center justify-between w-full sm:w-auto gap-12 bg-zinc-950 py-6 px-10 rounded-full transition-all duration-700 hover:bg-[#ec1313] hover:shadow-2xl hover:shadow-[#ec1313]/30"
                  >
                    <span className="text-white font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase">
                      Secure Engagement
                    </span>
                    <div className="size-10 rounded-full bg-white/10 text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#ec1313] transition-all duration-500 transform group-hover:rotate-[-45deg]">
                      <ArrowRight size={20} />
                    </div>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. STRATEGIC PROFILE */}
      <section className="px-6 py-20 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Left Column: Heading & Branding */}
            <div className="lg:col-span-7 space-y-8 md:space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <span className="text-(--color-primary) text-[9px] md:text-[10px] font-bold uppercase tracking-[0.5em] md:tracking-[0.6em] whitespace-nowrap">
                  Strategic Profile
                </span>
                <div className="h-px flex-1 bg-zinc-100 hidden sm:block" />
              </motion.div>

              <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter uppercase text-zinc-900 leading-[0.95] md:leading-[0.9] mb-4">
                The Ghost <br />
                <span className="text-zinc-300 italic font-extralight text-4xl sm:text-5xl md:text-7xl">
                  Architect of
                </span>{" "}
                <br />
                Power.
              </h2>

              {/* Accent Bar - Responsive width */}
              <div className="h-1.5 md:h-2 w-16 md:w-24 bg-(--color-primary)" />
            </div>

            {/* Right Column: Bio & Stats */}
            <div className="lg:col-span-5 flex flex-col justify-end lg:pt-24 space-y-10 md:space-y-14">
              <p className="text-zinc-600 text-xl md:text-2xl font-light leading-relaxed max-w-lg">
                John Majel doesn&apos;t just train leaders; he reconstructs the
                <span className="text-zinc-900 font-normal italic">
                  {" "}
                  psychological infrastructure{" "}
                </span>
                of influence. In the high-stakes corridors of New Delhi, he is
                the silent hand behind the most persuasive public addresses.
              </p>

              {/* Stats Grid: Integrated with the bio flow */}
              <div className="grid grid-cols-2 gap-8 md:gap-12 pt-10 border-t border-zinc-100">
                <div className="space-y-1">
                  <p className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tighter">
                    98%
                  </p>
                  <p className="text-[9px] md:text-[10px] text-zinc-400 uppercase tracking-widest font-bold leading-tight">
                    Retention <br className="md:hidden" /> Rate
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tighter">
                    Top 1%
                  </p>
                  <p className="text-[9px] md:text-[10px] text-zinc-400 uppercase tracking-widest font-bold leading-tight">
                    Global <br className="md:hidden" /> Strategists
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DOSSIER */}
      <section className="px-6 py-20 md:py-24 max-w-7xl mx-auto bg-white border-b border-zinc-100">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 bg-zinc-50 p-10 rounded-3xl border border-zinc-100 space-y-8">
            <div className="size-16 rounded-2xl bg-zinc-900 flex items-center justify-center">
              <Zap className="text-[#ec1313]" size={30} />
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-zinc-900">
              The Advisory Blueprint
            </h3>
            <p className="text-zinc-500 font-light text-sm leading-relaxed">
              Custom-engineered solutions for high-net-worth individuals,
              political figures, and C-Suite executives requiring total
              narrative control.
            </p>
            <div className="space-y-4 pt-4">
              {[
                "Confidential Briefing",
                "Voice Biometrics",
                "Persona Scaling",
              ].map((t) => (
                <div
                  key={t}
                  className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-zinc-400"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ec1313]" /> {t}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col justify-center space-y-10">
            <Quote className="text-[#ec1313]/10" size={80} />
            <p className="text-2xl md:text-3xl font-light text-zinc-900 leading-tight tracking-tight italic">
              &quot;We operate in the shadows of public perception, ensuring
              that when the spotlight hits, the resonance is absolute and the
              authority is unquestioned.&quot;
            </p>
            <div className="flex items-center gap-6 pt-6">
              <Button
                label="Request Private Inquiry"
                onClick={openContactForm}
              />
              <span className="text-[10px] text-zinc-400 uppercase tracking-[0.3em]">
                Confidentiality Assured
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STRATEGY */}
      <section className="px-6 py-20 md:py-24 bg-white text-zinc-900 border-b border-zinc-100 scroll-mt-16 md:scroll-mt-28 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header: Dynamic Alignment */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-10">
            <div className="max-w-2xl">
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-[#ec1313] text-[9px] md:text-[10px] font-bold uppercase tracking-[0.5em] block mb-6 md:mb-8"
              >
                Strategy & Methodology
              </motion.span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9] text-zinc-900">
                The Sovereign <br />
                <span className="italic font-extralight text-zinc-400">
                  Method.
                </span>
              </h2>
            </div>

            <p className="text-zinc-400 text-sm md:text-base font-light max-w-[280px] border-l-2 border-[#ec1313]/20 pl-6 italic leading-relaxed">
              Articulating the future through a blend of heritage and modern
              psychological tactics.
            </p>
          </div>

          {/* The Aristotle Grid: Ethos, Pathos, Logos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-200 border border-zinc-200 rounded-2xl md:rounded-3xl overflow-hidden">
            {[
              {
                title: "Ethos",
                description:
                  "Rooting your narrative in timeless values that resonate across generations.",
                icon: <Landmark size={24} strokeWidth={1.5} />,
                ref: "01_Authority",
              },
              {
                title: "Pathos",
                description:
                  "Mastering the emotional frequency of your audience to drive decisive action.",
                icon: <Zap size={24} strokeWidth={1.5} />,
                ref: "02_Resonance",
              },
              {
                title: "Logos",
                description:
                  "Deploying iron-clad logic and strategic data to dismantle opposition.",
                icon: <ShieldCheck size={24} strokeWidth={1.5} />,
                ref: "03_Structure",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 md:p-12 lg:p-16 group hover:bg-zinc-950 transition-all duration-700 relative overflow-hidden"
              >
                {/* Subtle Background Number - Senior Polish */}
                <span className="absolute -bottom-4 -right-2 text-[12rem] font-black text-zinc-50 opacity-[0.03] group-hover:opacity-[0.05] group-hover:text-white transition-all duration-700 pointer-events-none">
                  {idx + 1}
                </span>

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-12">
                    <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-400 group-hover:bg-[#ec1313] group-hover:text-white transition-all duration-700">
                      {item.icon}
                    </div>
                    <span className="text-[8px] font-mono text-zinc-300 uppercase tracking-widest group-hover:text-zinc-500 transition-colors">
                      //{item.ref}
                    </span>
                  </div>

                  <h4 className="font-bold text-3xl mb-4 tracking-tighter uppercase text-zinc-900 group-hover:text-white transition-colors">
                    {item.title}
                    <span className="text-[#ec1313]">.</span>
                  </h4>

                  <p className="text-base text-zinc-500 group-hover:text-zinc-400 leading-relaxed font-light transition-colors">
                    {item.description}
                  </p>

                  {/* Interactive Progress Line */}
                  <div className="mt-12 h-px w-full bg-zinc-100 group-hover:bg-zinc-800 transition-colors relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-0 bg-[#ec1313] group-hover:w-full transition-all duration-1000 ease-out" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="px-6 py-20 md:py-24 text-center bg-zinc-50 text-zinc-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-125 h-125 bg-[#ec1313]/5 blur-[120px] rounded-full -mr-64 -mt-64" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-[9rem] font-bold mb-10 tracking-tighter uppercase leading-[0.8]">
            Initiate <br /> <span className="text-(--color-primary)">Brief.</span>
          </h2>
          <p className="text-zinc-400 mb-14 max-w-md mx-auto font-light text-lg italic">
            &ldquo;Selection is restricted to four high-impact placements per
            election cycle.&quot;
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button
              label="Request Private Inquiry"
              size="lg"
              onClick={openContactForm}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
