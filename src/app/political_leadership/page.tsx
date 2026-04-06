"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  ShieldCheck,
  BarChart3,
  Users2,
  Lock,
  Scale,
  Fingerprint,
  Mail,
  ArrowRight,
  Layout,
  LucideIcon,
} from "lucide-react";
import Button from "@/ui/button";
import { useContactForm } from "../ContextProvider";

/**
 * ANIMATION CONFIGURATION
 */
const easing = [0.19, 1, 0.22, 1] as const;
const smoothTransition = { duration: 1.2, ease: easing };

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: smoothTransition },
};

const maskReveal: Variants = {
  hidden: { clipPath: "inset(0 0 100% 0)", y: 40 },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    y: 0,
    transition: { duration: 1.5, ease: easing },
  },
};

const handleInvitation = () => console.log("Invitation Triggered");

// 1. Define a clear interface for your data
interface Pillar {
  icon: LucideIcon; // Component reference, not element
  title: string;
  desc: string;
  tag: string;
}

const pillars: Pillar[] = [
  {
    icon: Layout,
    title: "Fortnightly Strategic",
    desc: "Receive a curated analysis of global and regional political developments every two weeks. This brief cuts through the noise.",
    tag: "INTELLIGENCE_BRIEF",
  },
  {
    icon: BarChart3,
    title: "Candidate-Specific",
    desc: "Bespoke dossiers tailored to your specific constituency and political arena. We deploy data-driven insights to map sentiment.",
    tag: "INTELLIGENCE_REPORTS",
  },
  {
    icon: Users2,
    title: "Strategic Advisory",
    desc: "One-on-one high-stakes consultation with senior LeadNex strategists. Designed to stress-test your policy platforms.",
    tag: "EXECUTIVE_SESSIONS",
  },
];

export default function PoliticalMentorshipPage() {
  const { openContactForm } = useContactForm();

  const programStats = [
    { label: "Intake", value: "Highly Selective" },
    { label: "Format", value: ["Bespoke", "Advisory"] },
    { label: "Security", value: "Iron-Clad" },
  ];

  return (
    <main className="relative w-full min-h-screen bg-white text-zinc-900 antialiased selection:bg-[#ec1313] selection:text-white font-sans overflow-clip">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full pt-12 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left"
          >
            <motion.span
              variants={fadeInUp}
              className="text-[#ec1313] text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] block"
            >
              Exclusive Programme
            </motion.span>

            <div className="overflow-hidden">
              <motion.h1
                variants={maskReveal}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-zinc-900 leading-[0.95] md:leading-none uppercase"
              >
                Political <br />
                <span className="italic font-light text-zinc-400">
                  Programme.
                </span>
              </motion.h1>
            </div>

            <motion.p
              variants={fadeInUp}
              className="text-zinc-500 text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              LeadNex provides tailored mentorship to equip high-potential
              leaders with the insights, strategies, and foresight needed to
              navigate complex political landscapes.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 sm:grid-cols-3 gap-12 pt-6 border-t border-zinc-100"
            >
              {programStats.map((stat, i) => (
                <div key={i} className="relative pl-6 group">
                  {/* Minimal Vertical Accent Line */}
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{
                      delay: 0.5 + i * 0.1,
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1], // Custom sleek cubic-bezier
                    }}
                    className="absolute left-0 top-0 h-full w-[1px] bg-zinc-200 origin-top group-hover:bg-red-600 transition-colors duration-500"
                  />

                  <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-medium mb-1">
                    {stat.label}
                  </p>

                  <div className="flex flex-wrap items-baseline text-sm text-zinc-900">
                    {Array.isArray(stat.value) ? (
                      stat.value.map((v, idx) => (
                        <span key={idx} className="flex items-center">
                          {v}
                          {idx < stat.value.length - 1 && (
                            <span className="mx-2 h-3 w-[1px] bg-zinc-200 rotate-[20deg]" />
                          )}
                        </span>
                      ))
                    ) : (
                      <span className="font-medium">{stat.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

            <Button label="Request Invitation" className="mt-4" />
          </motion.div>

          {/* Hero Image - Responsive Visibility */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: easing }}
            className="lg:col-span-5 relative mt-12 lg:mt-0 flex items-center justify-center"
          >
            {/* --- DECORATIVE ELEMENTS START --- */}

            {/* 1. Large Background Watermark */}
            <span className="absolute -top-12 -right-8 text-[12rem] font-black text-zinc-50 select-none pointer-events-none z-0 hidden lg:block">
              LN
            </span>

            {/* 2. Red Accent Glow/Blur */}
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-red-500/10 blur-[100px] rounded-full" />

            {/* 3. Geometric Dot Grid */}
            <div
              className="absolute -top-6 -right-6 w-32 h-32 opacity-20 z-0"
              style={{
                backgroundImage:
                  "radial-gradient(#ec1313 1px, transparent 1px)",
                backgroundSize: "12px 12px",
              }}
            />

            {/* 4. Thin Border Frame (Offset) */}
            <div className="absolute inset-0 border border-zinc-200 translate-x-4 translate-y-4 rounded z-0" />

            {/* --- DECORATIVE ELEMENTS END --- */}

            <div className="relative z-10 w-full aspect-[4/5] sm:aspect-video lg:aspect-[4/5] bg-zinc-100 rounded overflow-hidden shadow-2xl">
              <img
                alt="Strategic Leadership"
                className="w-full h-full object-cover transition-all duration-[3s] hover:scale-105"
                src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Minimal Bottom Content */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                  <p className="text-[10px] font-bold text-white/90 uppercase tracking-[0.2em]">
                    Live Status
                  </p>
                </div>
                <p className="text-sm font-light text-white/80 max-w-[280px] leading-relaxed">
                  Advising high-potential candidates across 14 key
                  constituencies.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- FRAMEWORK SECTION --- */}
      <section id="Framework" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header with Mono Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-zinc-200 pb-8 gap-4"
          >
            <div>
              <span className="text-[#ec1313] text-[10px] font-bold uppercase tracking-[0.4em] block mb-2">
                The Framework
              </span>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-zinc-900">
                Core Engagement{" "}
                <span className="text-zinc-400 italic font-light">Pillars</span>
              </h2>
            </div>
            <span className="text-zinc-400 text-[10px] font-mono bg-zinc-50 px-3 py-1 border border-zinc-100">
              0{pillars.length} PILLARS // STRATEGIC_V1
            </span>
          </motion.div>

          {/* Grid System */}
          <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: idx * 0.1,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex flex-col justify-between p-8 bg-white border border-zinc-100 rounded shadow-sm hover:shadow-xl hover:border-[#ec1313]/20 transition-all duration-500 min-h-[400px] relative overflow-hidden"
              >
                <div className="space-y-8">
                  <div className="flex justify-between items-center">
                    <div className="size-10 border border-zinc-100 rounded-full flex items-center justify-center text-zinc-400 group-hover:text-[#ec1313] group-hover:border-[#ec1313]/20 transition-colors duration-500">
                      <pillar.icon
                        size={18}
                        strokeWidth={2}
                        className="text-[#ec1313]"
                      />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-300">
                      MOD_{idx + 1}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold uppercase tracking-tighter group-hover:text-[#ec1313] transition-colors leading-none">
                      {pillar.title}
                    </h3>
                    <p className="text-zinc-500 text-sm font-light leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Stats/Metrics section to match Blueprint */}
                <div className="pt-6 border-t border-zinc-50 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold uppercase text-zinc-400 tracking-widest">
                      Focus
                    </span>
                    <span className="text-xs font-mono font-bold text-zinc-700">
                      {pillar.tag}
                    </span>
                  </div>

                  {/* CTA Button styled like the Blueprint look */}
                  <button className="w-full mt-4 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-zinc-900 group-hover:text-[#ec1313] transition-all">
                    <span>Explore Pillar</span>
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ADVANTAGE SECTION --- */}
      <section
        id="Advantage"
        className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 relative">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32 text-center lg:text-left">
                <span className="text-[#ec1313] text-[10px] font-bold uppercase tracking-[0.4em] block mb-6">
                  Strategic Merit
                </span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 uppercase leading-[0.9] mb-8">
                  Why Leaders <br className="hidden lg:block" />
                  <span className="italic font-light text-zinc-400">
                    Choose LeadNex
                  </span>
                </h2>
                <p className="text-zinc-500 text-sm font-light leading-relaxed max-w-xs mx-auto lg:mx-0">
                  Our advantage is built on a foundation of absolute discretion
                  and on-the-ground reality.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 relative mt-12 lg:mt-0">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-100 hidden md:block" />
              <div className="space-y-12 md:space-y-0">
                {[
                  {
                    icon: <Lock />,
                    title: "Iron-Clad Confidentiality",
                    text: "Strict privacy protocols ensuring all engagements remain off the record.",
                    stat: "100% Secure",
                  },
                  {
                    icon: <Scale />,
                    title: "Radical Objectivity",
                    text: "Hard-hitting, unbiased analysis free from partisan leanings.",
                    stat: "Non-Partisan",
                  },
                  {
                    icon: <Fingerprint />,
                    title: "Ground-Validated Intel",
                    text: "Insights verified through localized human intelligence networks.",
                    stat: "Field-Verified",
                  },
                  {
                    icon: <ShieldCheck />,
                    title: "Institutional Experience",
                    text: "Decades of combined expertise advising global corporate boards.",
                    stat: "Elite Advisory",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, ...smoothTransition }}
                    className="group relative md:pl-16 md:pb-16 last:pb-0"
                  >
                    <div className="absolute left-[-4px] top-2 size-2 rounded-full bg-zinc-200 group-hover:bg-[#ec1313] transition-all hidden md:block" />
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="text-[#ec1313] bg-zinc-50 p-3 rounded-xl group-hover:bg-[#ec1313] group-hover:text-white transition-all duration-500">
                          {React.cloneElement(
                            item.icon as React.ReactElement<{ size: number }>,
                            { size: 20 },
                          )}
                        </div>
                        <h4 className="text-lg md:text-xl font-bold text-zinc-900 uppercase">
                          {item.title}
                        </h4>
                      </div>
                      <span className="w-fit text-[9px] font-mono font-bold tracking-widest text-zinc-400 bg-zinc-50 px-3 py-1 rounded-full">
                        {item.stat}
                      </span>
                    </div>
                    <p className="text-zinc-500 font-light leading-relaxed text-sm md:text-base">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="px-6 py-12 md:py-32 max-w-7xl mx-auto">
        <div className="bg-zinc-950 rounded-2xl md:rounded-3xl p-8 md:p-24 flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16 overflow-hidden relative shadow-2xl">
          {/* Shield Background Icon */}
          <div className="absolute -right-16 md:-right-10 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
            <svg
              width="400"
              height="400"
              viewBox="0 0 24 24"
              fill="white"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>

          {/* Existing Gradient Overlay */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-[#ec1313]/10 to-transparent pointer-events-none" />

          <div className="relative z-10 text-center lg:text-left">
            <span className="text-[#ec1313] text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] block mb-4 md:mb-6">
              JOIN LEADNEX
            </span>

            <h2 className="text-white text-3xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tighter leading-tight">
              Secure Your <br />
              <span className="italic font-light opacity-90">
                Political Future.
              </span>
            </h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Spaces are severely limited to ensure the highest caliber of
              personalized advisory.
            </p>
          </div>

          <div className="relative z-10 flex flex-col items-center gap-6 w-full lg:w-auto">
            <Button
              label="Join Leadnex"
              onClick={openContactForm}
              className="w-full sm:w-64 h-14 text-sm justify-center"
            />
            <div className="flex items-center gap-3">
              <div className="h-px w-6 bg-zinc-800" />
              <p className="text-zinc-500 text-[9px] uppercase tracking-[0.3em] font-medium">
                Confidentiality Guaranteed
              </p>
              <div className="h-px w-6 bg-zinc-800" />
            </div>
          </div>
        </div>
      </section>

      {/* --- NEWSLETTER --- */}
      <section className="px-4 py-32 bg-white border-t border-zinc-200">
        <div className="max-w-2xl mx-auto text-center">
          {/* 1. Refined Icon: Subtle and integrated */}
          <div className="flex justify-center mb-10">
            <div className="relative">
              <Mail size={32} strokeWidth={1} className="text-[#ec1313]" />
              <div className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ec1313] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ec1313]"></span>
              </div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-zinc-900">
            Leadership Insights.
            <span className="text-[#ec1313]"> Delivered.</span>
          </h2>

          <p className="text-zinc-500 text-base md:text-lg font-light max-w-lg mx-auto mb-12 leading-relaxed">
            Weekly insights on leadership, political development, communication
            skills, and personal growth — designed for individuals who are ready
            to step forward and lead.
          </p>

          {/* 2. Professional Form: Minimalist lines instead of heavy boxes */}
          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                className="w-full sm:flex-1 h-12 bg-zinc-200 border border-zinc-300 rounded-md px-6 text-xs uppercase tracking-widest outline-none focus:border-zinc-400 transition-all placeholder:text-zinc-400"
                placeholder="Official Email Address"
                type="email"
                required
              />
              <Button
                label="Subscribe"
                className="text-[10px] font-bold tracking-[0.2em]"
              />
            </div>

            {/* 3. Privacy Note: Sophisticated styling */}
            <div className="mt-6 flex items-center justify-center gap-4 opacity-50">
              <div className="h-px w-4 bg-zinc-700" />
              <p className="text-[9px] text-zinc-500 uppercase tracking-[0.2em] font-medium">
                Protocol: Strictly Confidential
              </p>
              <div className="h-px w-4 bg-zinc-700" />
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
