"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Mail,
  CheckCircle2,
  Link as LinkIcon,
  LucideIcon,
  Orbit,
} from "lucide-react";
import Link from "next/link";

import Button from "@/ui/button"; // Assuming your existing UI component
import { useContactForm } from "./ContextProvider";
import { specializations } from "@/config";
import { CheckoutButton } from "@/components/CheckoutButton";
import { useRouter } from "next/navigation";

// -------- Animation Orchestration --------
const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const faderUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function LeadNexLanding() {
  const { openContactForm } = useContactForm();

  return (
    <main className="w-full min-h-screen bg-white font-sans overflow-x-hidden selection:bg-zinc-900 selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-x-hidden px-4 py-12 sm:px-6 md:py-20 lg:py-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-24"
        >
          {/* Left Side: Content */}
          <div className="relative z-10 order-2 flex flex-col space-y-6 md:space-y-10 lg:order-1">
            {/* Subheading Label */}
            <motion.div variants={faderUp} className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#ec1313]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#ec1313] md:text-xs">
                Est. 2023 / Leadership Initiative
              </span>
            </motion.div>

            {/* Main Heading - Tailored to keep text strictly single-line */}
            <motion.h1
              variants={faderUp}
              className="whitespace-nowrap text-4xl font-black leading-none tracking-tighter text-[#ec1313] xs:text-5xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl 2xl:text-[7.5vw] uppercase"
            >
              Lead
              <span className="italic font-extralight text-zinc-400">Nex.</span>
            </motion.h1>

            <motion.p
              variants={faderUp}
              className="max-w-xl text-lg font-medium italic leading-relaxed text-zinc-500 md:text-xl lg:text-2xl"
            >
              Guiding emerging young leaders in political, professional, and
              academic spaces through uncompromising excellence.
            </motion.p>

            <motion.div variants={faderUp} className="pt-4">
              <button
                onClick={openContactForm}
                className="group relative w-full overflow-hidden rounded-full bg-[#ec1313] px-10 py-5 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-zinc-950 sm:w-auto md:py-6"
              >
                <span className="relative z-10">
                  Request Confidential Consultation
                </span>
                <div className="absolute inset-0 translate-y-full bg-zinc-950 transition-transform duration-300 group-hover:translate-y-0" />
              </button>
            </motion.div>
          </div>

          {/* Right Side: Visual Aspect-Ratio Container */}
          <motion.div
            variants={faderUp}
            className="relative z-10 order-1 lg:order-2"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[#ec1313]/10 bg-zinc-100 sm:aspect-square lg:aspect-[3/4]">
              <Image
                src="/images/hero.webp"
                alt="Strategic Leadership"
                fill
                priority
                className="object-cover opacity-90 transition-transform duration-[10s] ease-out hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            <div
              className="absolute -bottom-6 -right-6 -z-10 h-32 w-32 opacity-20"
              style={{
                backgroundImage: `radial-gradient(#ec1313 1px, transparent 0)`,
                backgroundSize: "16px 16px",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Global Background Texture */}
        <div
          className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #ec1313 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </section>

      {/* 2. AREAS OF WORK */}
      <section className="px-6 py-24 max-w-7xl mx-auto" id="work">
        <div className="mb-20 border-l-2 border-[#ec1313] pl-8">
          <span className="text-[#ec1313] text-xs font-bold uppercase tracking-[0.4em] block mb-4">
            Capabilities
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 uppercase">
            Areas of{" "}
            <span className="italic font-extralight text-zinc-400">Work.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {specializations.map((item) => (
            <WorkCard
              key={item.id}
              id={item.id}
              title={item.title}
              desc={item.desc}
              Icon={item.icon}
              href={item.sourcePath}
              originalPrice={item.originalPrice}
              currentPrice={item.currentPrice}
              amount={item.amount}
            />
          ))}
        </div>
      </section>

      {/* 3. FOUNDER SECTION */}
      <section
        className="bg-zinc-50 border-y border-zinc-100 py-16 md:py-24 px-6 overflow-hidden"
        id="about"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="relative w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[320px] xs:max-w-[400px] md:max-w-[500px] group">
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-full h-full border border-zinc-200 group-hover:-translate-x-1 group-hover:translate-y-1 transition-transform duration-700 ease-out" />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-100 shadow-2xl z-10"
              >
                <Image
                  src="/images/visionary.webp"
                  alt="John Majel P - Founder & CEO"
                  fill
                  priority
                  className="object-cover transition-all duration-1000 ease-in-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>

              <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-[#ec1313] p-4 md:p-6 text-white shadow-xl z-20 min-w-[160px] md:min-w-[200px]">
                <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.4em] leading-none mb-1 md:mb-2 opacity-80">
                  Founder
                </p>
                <p className="text-xl md:text-2xl font-black italic tracking-tighter">
                  John Majel P
                  <span className="not-italic text-zinc-900">.</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left mt-8 lg:mt-0">
            <span className="text-[#ec1313] text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] block">
              The Visionary
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter text-zinc-900 leading-[1.1]">
              A Legacy of{" "}
              <span className="italic font-extralight text-zinc-300 block sm:inline">
                Mentorship.
              </span>
            </h2>

            <p className="text-lg md:text-xl text-zinc-500 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
              LeadNex was founded by{" "}
              <strong className="text-zinc-950 font-medium">
                John Majel P
              </strong>
              , a University Gold Medallist and competitive exams trainer with
              extensive experience shaping civil service aspirants and
              professionals.
            </p>

            <div className="pt-4">
              <Link
                href="https://linkedin.com"
                className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-900 group"
              >
                <span className="border-b border-[#ec1313]/30 group-hover:border-[#ec1313] transition-all">
                  Verify Credentials
                </span>
                <LinkIcon size={14} className="text-[#ec1313]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CURRENT ENGAGEMENTS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-zinc-950 rounded-3xl p-8 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_top_right,#ec131310,transparent_70%)]" />

          <h2 className="text-white text-3xl md:text-5xl font-bold mb-16 tracking-tighter">
            Current{" "}
            <span className="italic font-extralight text-zinc-500">
              Engagements.
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 relative z-10">
            {" "}
            {[
              "Regular educational and career guidance sessions in institutions across India",
              "Mentorship for students & young professionals",
              "Branding and rebranding of Social Media Influencers",
              "Confidential engagements with emerging political voices",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start sm:items-center gap-4 sm:gap-6 group"
              >
                {/* Icon Container: Slightly smaller on mobile so it doesn't crowd the text */}
                <div className="size-8 sm:size-10 shrink-0 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#ec1313] group-hover:border-[#ec1313] transition-all duration-500 mt-1 sm:mt-0">
                  <CheckCircle2
                    size={16}
                    className="text-[#ec1313] group-hover:text-white sm:hidden"
                  />
                  <CheckCircle2
                    size={18}
                    className="text-[#ec1313] group-hover:text-white hidden sm:block"
                  />
                </div>

                {/* Text: Scales from base size on mobile to large on desktop */}
                <p className="text-zinc-400 text-base sm:text-lg font-light group-hover:text-white transition-colors leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOOTER / CONTACT */}
      <section className="py-24 px-6 border-t border-zinc-100 bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <div className="inline-block p-4 rounded-full bg-zinc-50 border border-zinc-100 relative">
            <Mail size={24} className="text-[#ec1313]" />
            <span className="absolute top-0 right-0 flex h-3 w-3">
              <span className="animate-ping absolute h-full w-full rounded-full bg-[#ec1313] opacity-75"></span>
              <span className="relative rounded-full h-3 w-3 bg-[#ec1313]"></span>
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-900">
            Ready to{" "}
            <span className="italic font-extralight text-[#ec1313]">
              Step Forward.
            </span>
          </h2>

          <p className="text-zinc-500 text-lg font-light leading-relaxed">
            Individuals and institutions seeking high-impact consultation may
            request a briefing.
          </p>

          <Button
            label="Request Confidential Consultation"
            onClick={openContactForm}
            className="w-full sm:w-auto bg-zinc-950 hover:bg-[#ec1313] text-white transition-all duration-500 rounded-full px-12 h-16 text-xs font-bold tracking-widest uppercase"
          />

          <div className="pt-12 flex flex-col items-center gap-6 opacity-40">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-zinc-300" />
              <Orbit size={16} />
              <p className="text-[9px] font-bold uppercase tracking-[0.4em]">
                Reach out through our official channels
              </p>
              <div className="h-px w-8 bg-zinc-300" />
            </div>
            <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest">
              <Link
                href="mailto:contact@leadnex.com"
                className="hover:text-[#ec1313]"
              >
                Gmail
              </Link>
              <Link href="#" className="hover:text-[#ec1313]">
                LinkedIn
              </Link>
              <Link
                href="https://www.instagram.com/leadnex_?igsh=MW9lcjMwOWhob3g0dA=="
                className="hover:text-[#ec1313]"
              >
                Instagram
              </Link>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-400">
                Corporate Governance & Regulatory Compliance
              </p>
              <p className="text-[9px] leading-relaxed text-zinc-400 max-w-md">
                LeadNex is a registered enterprise under the Government of India
                – MSME
                <span className="mx-2 text-zinc-300">|</span>
                Udyam Registration No.{" "}
                <span className="text-zinc-500 font-mono">
                  UDYAM-TN-09-0064012
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/** * SUB-COMPONENTS */

interface WorkCardProps {
  id: string;
  title: string;
  desc: string;
  Icon: LucideIcon;
  href: string;
  originalPrice: string;
  currentPrice: string;
  amount: number;
}

function WorkCard({ id, title, desc, Icon, href, originalPrice, currentPrice, amount }: WorkCardProps) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(href);
  };

  return (
    <motion.div
      onClick={handleCardClick}
      whileHover={{ y: -5 }}
      className="group p-10 bg-white border border-zinc-100 relative h-full flex flex-col overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] cursor-pointer"
    >
      <div className="absolute left-0 top-0 h-full w-[2px] bg-[#ec1313] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

      <div className="flex justify-between items-start mb-8">
        <div className="size-12 rounded-lg bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:text-[#ec1313] transition-colors duration-500">
          <Icon size={24} strokeWidth={1.5} />
        </div>
        <div className="text-zinc-200 group-hover:text-[#ec1313] transition-colors duration-500">
          <ArrowRight
            size={20}
            className="-rotate-45 group-hover:rotate-0 transition-transform duration-500"
          />
        </div>
      </div>

      <div className="flex-grow">
        <h3 className="text-xl font-bold text-zinc-900 uppercase tracking-tight mb-4">
          {title}
          <span className="text-[#ec1313]">.</span>
        </h3>

        <p className="text-sm text-zinc-500 font-light leading-relaxed italic mb-6">
          {desc}
        </p>
      </div>

      {/* Pricing Strikethrough Display Container */}
      <div className="mb-6 pt-4 border-t border-zinc-100 flex flex-col items-start gap-1">
        <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
          Exclusive Access Fee
        </span>
        <div className="flex items-baseline gap-3">
          <span className="text-2xl font-black text-zinc-950 tracking-tight">
            {currentPrice}
          </span>
          <span className="text-sm font-medium text-zinc-400 line-through opacity-70">
            {originalPrice}
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center gap-2 mt-auto">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 group-hover:text-zinc-900 transition-colors">
          Learn More
        </span>
        {/* Stopped propagation so clicking button doesn't trigger card routing */}
        <div onClick={(e) => e.stopPropagation()}>
          <CheckoutButton
            courseId={id}
            amount={amount}
            courseName={title}
            description={desc}
            size="sm"
          />
        </div>
      </div>
    </motion.div>
  );
}