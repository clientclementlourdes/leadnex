"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  Radio,
  Award,
  Users,
  ArrowRight,
  Plus,
  ShieldCheck,
  TrendingUp,
  FileText
} from "lucide-react";

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

const itemVars: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const services = [
  {
    id: "01",
    title: "Media Management",
    tag: "Digital Ecosystem",
    description: "Compelling storytelling across print and digital platforms designed for institutional impact.",
    icon: <Radio size={18} />,
    metrics: ["Cross-Platform Sync", "Narrative Control"],
  },
  {
    id: "02",
    title: "Public Platforms",
    tag: "Legacy Building",
    description: "Strategic support for receiving valuable awards and high-level recognition within your industry.",
    icon: <Award size={18} />,
    metrics: ["Award Strategy", "Vetted Pedigree"],
  },
  {
    id: "03",
    title: "Recognition",
    tag: "Public Command",
    description: "Presenting community-centric narratives to influential audiences and key regional decision-makers.",
    icon: <Users size={18} />,
    metrics: ["Stakeholder Alignment", "Public Trust"],
  },
  {
    id: "04",
    title: "Public Profile Documentation",
    tag: "Archival Authority",
    description: "Formalizing your professional journey through meticulous record-keeping and high-authority biographical assets.",
    icon: <FileText size={18} />, // Changed icon for variety
    metrics: ["Historical Accuracy", "Asset Longevity"],
  },
];
const LeadNexBranding = () => {
  // Replace with your actual form trigger logic
  const openContactForm = () => console.log("Form Opened");

  return (
    <main className="bg-[#F8F8F8] text-zinc-900 font-sans selection:bg-[#dc2626] selection:text-white antialiased overflow-x-hidden">
      
      {/* --- 1. HERO: THE BRANDING BRIEFING --- */}
      <section className="relative w-full pt-16 pb-20 md:pt-32 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-10 md:space-y-14"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4">
              <div className="h-[1px] w-8 bg-[#dc2626]" />
              <span className="text-[#dc2626] text-[10px] font-bold uppercase tracking-[0.5em]">
                Strategic Identity / LN_26
              </span>
            </motion.div>

            <div className="relative">
              <motion.h1
                variants={maskReveal}
                className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tight text-zinc-900 leading-[0.85] uppercase"
              >
                Personal <br />
                <span className="italic font-extralight text-zinc-300 block mt-2">
                  Branding.
                </span>
              </motion.h1>
            </div>

            <div className="grid md:grid-cols-5 gap-8 items-start">
              <motion.p
                variants={fadeInUp}
                className="md:col-span-3 text-zinc-500 text-base md:text-lg font-light leading-relaxed border-l border-zinc-100 pl-6"
              >
                We transition regional personalities into respected national voices. 
                Through precision storytelling and institutional positioning, we build 
                the narrative architecture for long-term influence.
              </motion.p>

              <motion.div variants={fadeInUp} className="md:col-span-2 pt-2 self-center">
                <button 
                  onClick={openContactForm}
                  className="group relative px-8 py-4 bg-zinc-900 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-[#dc2626] transition-all duration-500 rounded-sm"
                >
                  Request Consultation
                </button>
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-x-16 gap-y-8 pt-12 border-t border-zinc-100/60"
            >
              {[
                { label: "Positioning", value: "Long-Term Growth" },
                { label: "Narrative", value: "Verified Records" },
                { label: "Network", value: "Global Reach" },
              ].map((stat, i) => (
                <div key={i} className="group">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-zinc-400 font-semibold mb-2 group-hover:text-[#dc2626] transition-colors">
                    // {stat.label}
                  </p>
                  <div className="text-xs text-zinc-900 font-bold uppercase tabular-nums">
                    {stat.value}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative group">
              <div className="relative overflow-hidden bg-zinc-100 rounded-sm aspect-[4/5] z-10 shadow-2xl transition-transform duration-700 group-hover:-translate-y-2">
                {/* Replace with actual image path */}
                <div className="w-full h-full bg-slate-200 bg-[url('https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80')] bg-cover bg-center transition-transform duration-[2.5s] scale-110 group-hover:scale-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent opacity-80" />
                <div className="absolute top-6 left-6 flex flex-col gap-1">
                    <span className="text-[8px] font-mono text-white/50 uppercase tracking-[0.3em]">LeadNex.Ref_</span>
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">Protocol_Identity</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 -right-4 bg-zinc-900 p-5 z-20 flex items-center justify-between group-hover:bg-[#dc2626] transition-colors duration-500">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-white animate-pulse" />
                    <p className="text-[9px] font-black text-white/90 uppercase tracking-[0.2em]">Confidential</p>
                  </div>
                  <p className="text-[10px] text-white/60 font-light max-w-[180px] leading-tight group-hover:text-white/90 transition-colors">
                    Institutional recognition for <strong>Tier-1</strong> influencers.
                  </p>
                </div>
                <ArrowUpRight className="text-white opacity-20" size={32} />
              </div>
              <div className="absolute top-8 left-8 -right-4 -bottom-4 border border-zinc-200 -z-0 pointer-events-none group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 2. ARCHITECTURAL GRID --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-between items-end mb-16 border-b border-zinc-200 pb-8"
          >
            <motion.h2 variants={itemVars} className="text-4xl font-bold uppercase tracking-tighter">
              Service Pillars
            </motion.h2>
            <motion.span variants={itemVars} className="text-zinc-400 text-[10px] font-mono">
              03 CORE UNITS // 2026_EDITION
            </motion.span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col justify-between p-8 bg-white border border-zinc-100 rounded shadow-sm hover:shadow-xl hover:border-[#dc2626]/20 transition-all duration-500 min-h-[400px]"
              >
                <div className="space-y-8">
                  <div className="flex justify-between items-center">
                    <span className="size-10 rounded-full border border-zinc-100 flex items-center justify-center text-[#dc2626]">
                      {service.icon}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-300">MOD_{service.id}</span>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold uppercase tracking-tighter group-hover:text-[#dc2626] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zinc-500 text-sm font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-50 space-y-4">
                  {service.metrics.map((m, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-[9px] font-bold uppercase text-zinc-400 tracking-widest">{m}</span>
                      <Plus size={10} className="text-zinc-200" />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. APPROACH: BLACK-BOX --- */}
      <section className="bg-zinc-950 py-32 text-white overflow-hidden relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center"
        >
          <div className="space-y-12 relative z-10">
            <motion.div
              initial={{ rotate: -45, scale: 0 }}
              whileInView={{ rotate: 0, scale: 1 }}
              className="size-12 bg-[#dc2626] flex items-center justify-center"
            >
              <FileText className="text-white" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-5xl font-light leading-tight tracking-tight italic"
            >
              &quot;Identity is not discovered; it is{" "}
              <span className="text-[#dc2626] not-italic font-bold">engineered</span> through verified credibility.&quot;
            </motion.p>
          </div>

          <div className="grid gap-1 border-l border-zinc-800 pl-10">
            {[
              { icon: <TrendingUp size={16}/>, label: "Growth", val: "Long-term positioning over viral spikes." },
              { icon: <Users size={16}/>, label: "Community", val: "Stories that resonate within communities." },
              { icon: <ShieldCheck size={16}/>, label: "Trust", val: "Building credibility through verified records." },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="py-6 border-b border-zinc-900 group"
              >
                <div className="flex items-center gap-2 mb-1">
                    <span className="text-[#dc2626]">{stat.icon}</span>
                    <p className="text-zinc-600 text-[9px] font-bold uppercase tracking-widest">{stat.label}</p>
                </div>
                <p className="text-xl font-light group-hover:text-[#dc2626] transition-colors duration-300">
                  {stat.val}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* --- 4. THE MONOLITHIC CTA --- */}
      <section className="py-24 bg-white px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-5xl mx-auto text-center cursor-pointer group"
          onClick={openContactForm}
        >
          <motion.div whileHover={{ y: -5 }} className="relative">
            <motion.span
              initial={{ letterSpacing: "0.2em" }}
              whileInView={{ letterSpacing: "1.2em" }}
              transition={{ duration: 1 }}
              className="text-[#dc2626] text-[10px] font-bold uppercase mb-8 block"
            >
              Initialize Legacy
            </motion.span>

            <h2 className="text-6xl md:text-[10rem] font-bold tracking-tighter uppercase leading-[0.8] mb-12 select-none">
              Build Your <br />
              <span
                className="text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.1)] group-hover:text-[#dc2626] transition-all duration-700"
                style={{ WebkitTextStroke: "1px #e4e4e7" }}
              >
                Stature.
              </span>
            </h2>

            <div className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.1, backgroundColor: "#dc2626", borderColor: "#dc2626" }}
                className="size-24 rounded-full border border-zinc-200 flex items-center justify-center group-hover:shadow-2xl transition-all duration-500"
              >
                <ArrowRight className="group-hover:text-white transition-colors" size={32} />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
};

const ArrowUpRight = ({ className, size }: { className?: string, size: number }) => (
    <svg 
        className={className} 
        width={size} height={size} 
        viewBox="0 0 24 24" fill="none" 
        stroke="currentColor" strokeWidth="1.5"
    >
        <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export default LeadNexBranding;