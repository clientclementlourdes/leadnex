"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  Variants,
} from "framer-motion";
import {
  School,
  Compass,
  Building2,
  Linkedin,
  ArrowRight,
  Sparkles,
  MessageSquare,
  Tag,
} from "lucide-react";
import { CheckoutButton } from "@/components/CheckoutButton";

// --- ANIMATION CONFIG ---
const easing = [0.16, 1, 0.3, 1] as const;
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

const engagementPhases = [
  {
    id: "01",
    title: "Institutional Talks",
    description:
      "LeadNex regularly conducts sessions in educational institutions across India, at both school and college levels, inspiring students to pursue a fuller life — the one with real joy and purpose, and without regrets about what could have been.",
    icon: <School size={24} />,
  },
  {
    id: "02",
    title: "Education & Career",
    description:
      "The current generation faces intense competition and often unrealistic expectations from family and society when deciding on education and career choices. LeadNex helps bring clarity amidst these pressures, placing the best interests of the student at the core and guiding them toward well-informed decisions.",
    icon: <Compass size={24} />,
    featured: true,
  },
  {
    id: "03",
    title: "Corporate Leadership",
    description:
      "LeadNex avoids the clichés and stereotypes associated with motivational talks and instead focuses on the practical realities employees struggle to balance in their professional and personal lives. Recognising the uniqueness of each audience, the sessions are dynamic and may be adapted during delivery to encourage deeper engagement and meaningful outcomes.",
    icon: <Building2 size={24} />,
  },
];

/**
 * Pricing configuration for Guidance & Motivational Sessions package
 * Discount: 44% OFF (₹9,000 → ₹5,000)
 */
const PROGRAM_PRICING = {
  originalPrice: "₹9,000",
  currentPrice: "₹5,000",
  discountPercent: "44% OFF",
};

const LeadNexSessions = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax watermark: Reduced intensity on mobile for better performance
  const watermarkX = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <main
      ref={containerRef}
      className="bg-white text-zinc-900 font-sans selection:bg-[#ec1313] selection:text-white antialiased overflow-x-hidden"
    >
      {/* --- HERO SECTION --- */}
      <section className="relative w-full pt-20 pb-16 md:pt-32 md:pb-32 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto overflow-hidden">
        {/* Responsive Watermark: Hidden on smallest screens to prevent layout shifting */}
        <motion.div
          style={{ x: watermarkX }}
          className="absolute top-10 right-4 md:right-10 text-zinc-50 font-black text-[18vw] md:text-[12vw] select-none pointer-events-none leading-none uppercase z-0 opacity-50 md:opacity-100"
        >
          LEADNEX
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 lg:gap-24 items-center relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-8 md:space-y-12"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4">
              <span className="text-[#ec1313] text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] block border-l-2 border-[#ec1313] pl-4">
                Guidance & Motivational Sessions
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                variants={maskReveal}
                className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-zinc-900 leading-[0.9] md:leading-[0.85] uppercase"
              >
                Guided <br />
                <span className="italic font-light text-zinc-400">Purpose.</span>
              </motion.h1>
            </div>

            <motion.p
              variants={fadeInUp}
              className="text-zinc-500 text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-xl"
            >
              LeadNex offers guidance and motivational sessions designed for
              students and young professionals who are at a crossroads in life
              and career decisions.
            </motion.p>

            {/* Pricing & Conversion Stack */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 text-left"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">
                    Enrollment Access Fee
                  </span>
                  <span className="text-[9px] bg-[#ec1313]/10 text-[#ec1313] font-extrabold px-1.5 py-0.5 rounded flex items-center gap-1">
                    <Tag size={8} /> {PROGRAM_PRICING.discountPercent}
                  </span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-black text-zinc-950 tracking-tight">
                    {PROGRAM_PRICING.currentPrice}
                  </span>
                  <span className="text-base font-medium text-zinc-400 line-through opacity-70">
                    {PROGRAM_PRICING.originalPrice}
                  </span>
                </div>
              </div>

              <div className="shrink-0">
                <CheckoutButton
                  courseId="GUIDANCE_MOTIVATION"
                  amount={5000}
                  courseName="Guidance & Motivational Sessions Package"
                  description="Professional guidance and motivational program for students and young professionals"
                  size="sm"
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative px-4 sm:px-0"
          >
            <div className="absolute inset-0 border border-zinc-200 translate-x-3 translate-y-3 md:translate-x-6 md:translate-y-6 z-0" />
            <div className="relative z-10 aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] bg-zinc-100 overflow-hidden shadow-2xl group">
              <img
                src="/images/guidance&Motivation.webp"
                alt="Guidance Session"
                className="w-full h-full object-cover transition-all duration-[3s] scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles size={14} className="text-white animate-pulse" />
                  <p className="text-[10px] font-black text-white uppercase tracking-[0.3em]">
                    Active Impact
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SPEAKER BIO SECTION --- */}
      <section className="py-20 md:py-32 px-4 sm:px-8 lg:px-12 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-7 lg:col-span-5 space-y-8 md:space-y-10 order-2 md:order-1"
          >
            <div className="space-y-4 text-center md:text-left">
              <span className="inline-block text-[#ec1313] text-xs font-bold uppercase tracking-[0.4em] border-b border-[#ec1313]/20 pb-2">
                The Speaker
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 uppercase leading-none">
                John Majel P
              </h2>
            </div>

            <p className="text-zinc-600 font-normal leading-relaxed text-lg lg:text-xl max-w-xl text-center md:text-left mx-auto md:mx-0">
              The Founder and CEO of LeadNex, is an accomplished competitive
              exams trainer and a{" "}
              <span className="text-zinc-900 font-medium">
                University Gold Medallist
              </span>{" "}
              with extensive experience mentoring students and civil services
              aspirants.
            </p>

            <div className="pt-4 flex justify-center md:justify-start">
              <a
                href="#"
                className="inline-flex items-center gap-4 text-zinc-900 font-bold text-xs uppercase tracking-[0.2em] group"
              >
                <div className="p-2 bg-zinc-100 rounded-full group-hover:bg-[#ec1313]/10 transition-colors">
                  <Linkedin className="text-[#ec1313]" size={20} />
                </div>
                <span className="border-b border-transparent group-hover:border-zinc-900 transition-all pb-1">
                  Connect on LinkedIn
                </span>
              </a>
            </div>
          </motion.div>

          <div className="md:col-span-5 lg:col-span-7 relative order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[3/2] w-full max-w-[450px] md:max-w-[600px] md:ml-auto overflow-hidden bg-zinc-100 shadow-2xl mx-auto"
            >
              <Image
                src="/images/speaker.webp"
                width={1080}
                height={704}
                className="w-full h-full object-cover"
                alt="John Majel P - Founder & CEO"
                quality={100}
                priority
              />
            </motion.div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-white -z-10 border border-zinc-100 hidden lg:block" />
          </div>
        </div>
      </section>

      {/* --- ENGAGEMENT AREAS --- */}
      <section className="py-20 md:py-32 px-4 sm:px-8 lg:px-12 bg-white" id="engagement">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24 text-center md:text-left">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#ec1313] text-[10px] font-black uppercase tracking-[0.5em]"
            >
              Tailored Impact
            </motion.span>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8, ease: easing }}
                className="text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tighter text-zinc-900"
              >
                Engagement Areas
              </motion.h2>
            </div>
          </div>

          {/* Senior Responsive Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {engagementPhases.map((phase, idx) => (
              <PhaseCard key={phase.id} phase={phase} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="relative overflow-hidden bg-zinc-50 py-24 md:py-40 px-6 border-t border-zinc-100">
      {/* Structural Design Accents: Subtle background grid detail */}
      <div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
      
      <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* Decorative Brand Header Emblem */}
        <div className="flex justify-center mb-8">
          <div className="relative size-14 md:size-16 rounded-full bg-white flex items-center justify-center shadow-sm border border-zinc-200/80">
            <div className="absolute inset-0 rounded-full bg-[#ec1313]/5 animate-ping opacity-75" />
            <MessageSquare size={22} className="text-[#ec1313] relative z-10" />
          </div>
        </div>

        {/* High-Fidelity Typography Header */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase leading-[0.95] text-zinc-900 mb-6 px-4">
          Request a <br className="hidden sm:block" />
          <span
            className="text-transparent block sm:inline transition-all duration-700 select-none selection:bg-[#ec1313]/20"
            style={{ WebkitTextStroke: "1.5px #18181b" }}
          >
            Consultation.
          </span>
        </h2>

        {/* Clean, Descriptive Body Copy */}
        <p className="max-w-xl mx-auto text-sm md:text-base text-zinc-600 font-medium leading-relaxed mb-12 px-2">
          Institutions and organisations interested in hosting sessions or high-impact talks 
          may request a strategic consultation session with LeadNex execution teams.
        </p>

        {/* Interactive Call-To-Action Wrapper */}
        <div className="flex justify-center">
          <motion.a
            href="#consultation-form" // Update with your actual routing/form anchor element
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-4 px-8 py-4 md:px-10 md:py-5 rounded-full border border-zinc-900 bg-zinc-950 text-white shadow-md relative overflow-hidden group cursor-pointer transition-shadow duration-500 hover:shadow-[0_20px_40px_rgba(236,19,19,0.15)]"
          >
            {/* Slide-in Background Layer Fill on Hover */}
            <motion.div 
              variants={{
                initial: { y: "100%" },
                hover: { y: "0%" }
              }}
              transition={{ type: "spring", damping: 25, stiffness: 120 }}
              className="absolute inset-0 bg-[#ec1313] z-0"
            />

            {/* CTA Label Copy */}
            <span className="relative z-10 text-xs font-bold uppercase tracking-widest text-white transition-colors duration-300">
              Request Engagement
            </span>

            {/* Micro-interaction Animated Icon Anchor */}
            <motion.div
              variants={{
                initial: { x: 0 },
                hover: { x: 4 }
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative z-10 text-white"
            >
              <ArrowRight size={16} strokeWidth={2.5} />
            </motion.div>
          </motion.a>
        </div>
      </div>
    </section>
    </main>
  );
};

const PhaseCard = ({ phase, idx }: any) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const isFeatured = phase.featured;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      whileHover={{ y: -8 }}
      transition={{
        opacity: { duration: 0.8, delay: idx * 0.1 },
        y: { duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] },
        default: { duration: 0.5 },
      }}
      className={`group p-8 md:p-10 relative h-full flex flex-col overflow-hidden transition-all duration-500 border
        ${
          isFeatured
            ? "bg-[#ec1313] border-[#ec1313] shadow-[0_20px_50px_-10px_rgba(236,19,19,0.3)] sm:scale-105 z-10"
            : "bg-white border-zinc-100 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)]"
        }`}
    >
      {!isFeatured && (
        <div className="absolute left-0 top-0 h-full w-[2px] bg-[#ec1313] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
      )}

      <div className="mb-6 md:mb-8">
        <div
          className={`size-12 rounded-lg flex items-center justify-center transition-colors duration-500
          ${
            isFeatured
              ? "bg-white/10 text-white"
              : "bg-zinc-50 text-zinc-400 group-hover:text-[#ec1313] group-hover:bg-[#ec1313]/5"
          }`}
        >
          {React.isValidElement(phase.icon) &&
            React.cloneElement(phase.icon as React.ReactElement)}
        </div>
      </div>

      <div className="flex-grow">
        <h3
          className={`text-lg md:text-xl font-bold uppercase tracking-tight mb-4 leading-tight
          ${isFeatured ? "text-white" : "text-zinc-900"}
        `}
        >
          {phase.title}
          <span className={isFeatured ? "text-white/50" : "text-[#ec1313]"}>
            .
          </span>
        </h3>

        <p
          className={`text-sm font-light leading-relaxed italic
          ${isFeatured ? "text-zinc-100/80" : "text-zinc-500"}
        `}
        >
          {phase.description}
        </p>
      </div>

      <div className="mt-8 md:mt-12">
        <div
          className={`h-[1px] w-8 transition-all duration-700 
          ${
            isFeatured
              ? "bg-white/20 group-hover:w-16"
              : "bg-zinc-100 group-hover:bg-[#ec1313]/40 group-hover:w-16"
          }
        `}
        />
      </div>
    </motion.div>
  );
};

export default LeadNexSessions;