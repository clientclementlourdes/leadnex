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
} from "lucide-react";

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
    tag: "Academic Vision",
    description:
      "Inspiring students in India to pursue a fuller life with real joy and purpose, moving beyond just academic metrics.",
    icon: <School size={20} />,
    metrics: [
      { label: "Reach", value: "Pan-India" },
      { label: "Focus", value: "Holistic Growth" },
    ],
  },
  {
    id: "02",
    title: "Education & Career",
    tag: "Strategic Guidance",
    description:
      "Bringing clarity amidst intense competition. We put the best interests of the student at the core of every decision.",
    icon: <Compass size={20} />,
    metrics: [
      { label: "Clarity", value: "High" },
      { label: "Impact", value: "Direct" },
    ],
    featured: true,
  },
  {
    id: "03",
    title: "Corporate Leadership",
    tag: "Professional Balance",
    description:
      "Practical realities and professional-personal life balance. Dynamic delivery designed for deeper engagement with modern teams.",
    icon: <Building2 size={20} />,
    metrics: [
      { label: "Type", value: "Executive" },
      { label: "Outcome", value: "Retention" },
    ],
  },
];

const LeadNexSessionsPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const watermarkX = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <main
      ref={containerRef}
      className="bg-white text-zinc-900 font-sans selection:bg-[#ec1313] selection:text-white antialiased overflow-x-hidden"
    >
      {/* --- HERO SECTION --- */}
      <section className="relative w-full pt-28 pb-20 md:pt-32 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <motion.div
          style={{ x: watermarkX }}
          className="absolute top-10 right-10 text-zinc-50 font-black text-[12vw] select-none pointer-events-none leading-none uppercase z-0"
        >
          VISION_26
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-10 md:space-y-14"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4">
              <span className="text-[#ec1313] text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] block border-l-2 border-[#ec1313] pl-4">
                Guidance & Motivational Sessions
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                variants={maskReveal}
                className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter text-zinc-900 leading-[0.85] uppercase"
              >
                Focussed <br />
                <span className="italic font-light text-zinc-400">Growth.</span>
              </motion.h1>
            </div>

            <motion.p
              variants={fadeInUp}
              className="text-zinc-500 text-base md:text-xl font-light leading-relaxed max-w-xl"
            >
              LeadNex offers guidance and motivational sessions designed for students and young professionals who are at a crossroads in life and career decisions.
            </motion.p>

            <div className="space-y-12">
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-1 sm:grid-cols-3 gap-10 pt-8 border-t border-zinc-100"
              >
                {[
                  { label: "Deployment", value: "India & Beyond" },
                  { label: "Focus", value: "Student Success" },
                  { label: "Method", value: "Strategic Joy" },
                ].map((stat, i) => (
                  <div key={i} className="relative pl-6 group">
                    <motion.div
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ delay: 0.6 + i * 0.1, duration: 0.8 }}
                      className="absolute left-0 top-0 h-full w-[1px] bg-zinc-200 group-hover:bg-[#ec1313] transition-colors"
                    />
                    <p className="text-[9px] uppercase tracking-widest text-zinc-400 font-bold mb-1">
                      {stat.label}
                    </p>
                    <div className="text-xs text-zinc-900 font-bold uppercase">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeInUp}>
                <button className="group relative flex items-center gap-4 bg-zinc-900 text-white px-8 py-5 font-bold uppercase text-xs tracking-widest hover:bg-[#ec1313] transition-all duration-500">
                  Request Engagement
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute inset-0 border border-zinc-200 translate-x-6 translate-y-6 z-0" />
            <div className="relative z-10 aspect-[4/5] bg-zinc-100 overflow-hidden shadow-2xl group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtlC8ZP5SAxdhC046BqLNZi9709UY3fnKkdHyvxB0uqNfWRspVmRm21Gi4Z1-uHO0kZcgxLprB11XmTrwEenM_sbQvaBN4L-u9MeNjZfyz2iLdHgyYSaXXgRyKw3tf33N0UZEW842tJ65xON8m0Y2NScv1lgvzh-OaHfjfnJGoLxZtXhOjEJEU_QjWAPrAu-QKDN_-1_Wfp-q3bR-jzNv51Qw9KUypTl0mCjB-W5kimwV4cRkIMguzFCvF0vsFABg7rb6yZuNv9lE"
                alt="Guidance Session"
                className="w-full h-full object-cover transition-all duration-[3s] scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles size={14} className="text-white animate-pulse" />
                  <p className="text-[10px] font-black text-white uppercase tracking-[0.3em]">
                    Active Session
                  </p>
                </div>
                <p className="text-[11px] font-light text-white/70 italic max-w-[200px]">
                  "Clarity is the precursor to impact."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SPEAKER BIO SECTION --- */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 lg:gap-24 items-center">
          {/* Content Column - Taking 5/12 of the grid for better whitespace balance */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="md:col-span-7 lg:col-span-5 space-y-10"
          >
            <div className="space-y-4">
              <span className="inline-block text-[#ec1313] text-xs font-bold uppercase tracking-[0.4em] border-b border-[#ec1313]/20 pb-2">
                The Visionary
              </span>
              <h2 className="text-6xl font-extrabold tracking-tight text-zinc-900 uppercase leading-none">
                John Majel P
              </h2>
            </div>

            <p className="text-zinc-600 font-normal leading-relaxed text-xl max-w-xl">
              Founder & CEO of LeadNex, is an accomplished competitive exams trainer and am{" "}
              <span className="text-zinc-900 font-medium">
                University Gold Medallist
              </span>{" "}
              with extensive experience mentoring students and civil services aspirants.
            </p>

            <div className="pt-4">
              <a
                href="#"
                className="inline-flex items-center gap-4 text-zinc-900 font-bold text-xs uppercase tracking-[0.2em] group"
              >
                <div className="p-2 bg-zinc-100 rounded-full group-hover:bg-[#ec1313]/10 transition-colors">
                  <Linkedin className="text-[#ec1313]" size={20} />
                </div>
                <span className="border-b border-transparent group-hover:border-zinc-900 transition-all pb-1">
                  LinkedIn Profile
                </span>
              </a>
            </div>
          </motion.div>

          {/* Image Column - Taking 7/12 for visual impact */}
          <div className="md:col-span-5 lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-3/4 w-full max-w-[500px] ml-auto overflow-hidden bg-zinc-100 shadow-2xl"
            >
              <Image
                src="/images/john_majel_p.webp"
                width={1024}
                height={1536}
                priority
                className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
                alt="John Majel P - Founder & CEO"
              />
              {/* Subtle Decorative Accent */}
              <div className="absolute inset-0 pointer-events-none" />
            </motion.div>

            {/* Background Element for "Senior" Depth */}
            <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-zinc-50 -z-10 border border-zinc-100" />
          </div>
        </div>
      </section>

      {/* --- TACTICAL MAP (ENGAGEMENT AREAS) --- */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#ec1313] text-[10px] font-black uppercase tracking-[0.5em]"
            >
              Areas of Operation
            </motion.span>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8, ease: easing }}
                className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-zinc-900"
              >
                Tactical Map
              </motion.h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {engagementPhases.map((phase, idx) => (
              <PhaseCard key={phase.id} phase={phase} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* --- IMPACT QUOTE --- */}
      <section className="py-32 bg-zinc-900 text-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <p className="text-3xl md:text-5xl font-light italic leading-tight text-zinc-300">
            "Success is not just about reaching the destination; it’s about the{" "}
            <span className="text-white font-bold">clarity and purpose</span>{" "}
            you carry through the journey."
          </p>
          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-[#ec1313]" />
            <span className="uppercase tracking-[0.4em] text-xs font-bold">
              — John Majel P
            </span>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-48 bg-white px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="initial"
            whileHover="hover"
            className="cursor-pointer group"
          >
            <motion.span
              variants={{
                initial: { letterSpacing: "0.6em" },
                hover: { letterSpacing: "1.2em", color: "#ec1313" },
              }}
              className="text-[#ec1313] text-[10px] font-bold uppercase mb-12 block transition-all duration-700"
            >
              Initiate Deployment
            </motion.span>

            <h2 className="text-6xl md:text-[9rem] font-bold tracking-tighter uppercase leading-[0.8] mb-16 text-zinc-900">
              Transform <br />
              <span
                className="text-white group-hover:text-zinc-50 transition-all duration-1000"
                style={{ WebkitTextStroke: "1px #e4e4e7" }}
              >
                The Future.
              </span>
            </h2>

            <div className="flex justify-center">
              <motion.div
                variants={{
                  initial: { scale: 1 },
                  hover: {
                    scale: 1.1,
                    backgroundColor: "#ec1313",
                    borderColor: "#ec1313",
                  },
                }}
                className="size-24 rounded-full border border-zinc-200 flex items-center justify-center group-hover:shadow-[0_0_50px_rgba(236,19,19,0.3)] transition-all duration-700"
              >
                <ArrowRight
                  className="text-zinc-900 group-hover:text-white transition-colors duration-500"
                  size={32}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

const PhaseCard = ({ phase, idx }: any) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: idx * 0.1, duration: 1, ease: "easeOut" }} // Standardized easing
      className={`group flex flex-col p-10 md:p-12 transition-all duration-700 min-h-[400px] border border-zinc-100
        ${
          phase.featured
            ? "bg-[#ec1313] text-white border-[#ec1313] shadow-2xl"
            : "bg-white text-zinc-900 hover:border-[#ec1313]/20"
        }`}
    >
      <div className="flex flex-col h-full">
        {/* Top Section: Icon Only */}
        <div
          className={`mb-12 ${
            phase.featured
              ? "text-white"
              : "text-zinc-300 group-hover:text-[#ec1313] transition-colors duration-500"
          }`}
        >
          {phase.icon}
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight leading-none">
            {phase.title}
          </h3>
          <p
            className={`text-sm md:text-base font-light leading-relaxed max-w-[280px] ${
              phase.featured
                ? "text-zinc-100/90"
                : "text-zinc-500"
            }`}
          >
            {phase.description}
          </p>
        </div>

        {/* Visual Spacer to maintain card height intent */}
        <div className="mt-auto pt-10">
          <div 
            className={`h-[1px] w-12 transition-all duration-700 ${
              phase.featured ? "bg-white/30" : "bg-zinc-100 group-hover:w-20 group-hover:bg-[#ec1313]/30"
            }`} 
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LeadNexSessionsPage;
