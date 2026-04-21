// "use client";

// import React from "react";
// import { motion, Variants } from "framer-motion";
// import Image from "next/image";
// import { ArrowRight, Mail, LucideIcon, Check } from "lucide-react";
// import Link from "next/link";

// import { leadNexStats, specializations } from "@/config";
// import Button from "@/ui/button";
// import { useContactForm } from "./ContextProvider";
// import { useRouter } from "next/navigation";
// import NavLink from "@/ui/NavLink";

// // -------- Animation Orchestration --------
// const container: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//       delayChildren: 0.3,
//     },
//   },
// };

// const faderUp: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
//   },
// };

// const revealMask: Variants = {
//   hidden: { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
//   visible: {
//     clipPath: "inset(0% 0% 0% 0%)",
//     opacity: 1,
//     transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
//   },
// };

// export default function Home() {
//   const { openContactForm } = useContactForm();
//   const router = useRouter();

//   return (
//     <main className="w-full min-h-screen bg-white font-sans overflow-x-hidden selection:bg-(--color-primary) selection:text-white">
//       {/* 1. Hero Section */}
//       <section className="relative w-full mx-auto px-0 sm:px-4 sm:pt-4 pb-20 md:pb-24">
//         <motion.div
//           variants={container}
//           initial="hidden"
//           animate="visible"
//           className="relative overflow-hidden sm:rounded-2xl bg-zinc-950 min-h-screen sm:min-h-[95vh] flex flex-col justify-center md:justify-end"
//         >
//           {/* Background & Scrim Layer */}
//           <div className="absolute inset-0 z-0 group">
//             <Image
//               src="/images/hero.webp"
//               alt="Strategic Leadership"
//               fill
//               priority
//               className="object-cover opacity-50 md:opacity-60 transition-transform duration-[7s] group-hover:scale-105"
//             />
//             {/* Adjusted Scrims for better mobile readability */}
//             <div className="absolute inset-0 bg-linear-to-b md:bg-linear-to-r from-zinc-950 via-zinc-950/70 md:via-zinc-950/60 to-transparent" />
//             <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent" />
//           </div>

//           <div className="relative z-10 p-6 md:p-16 lg:p-20 space-y-8 md:space-y-10">
//             {/* Unit Identification Label */}
//             <motion.div
//               variants={faderUp}
//               className="flex items-center gap-3 md:gap-4"
//             >
//               <span className="h-px w-8 md:w-12 bg-[#ec1313]" />
//               <span className="text-white text-[8px] md:text-[10px] font-bold uppercase tracking-[0.4em] md:tracking-[0.6em]">
//                 Global Leadership Initiative / 2026
//               </span>
//             </motion.div>

//             {/* Responsive Heading Strategy */}
//             <motion.h1
//               variants={revealMask}
//               className="text-white text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-[0.9] md:leading-[0.85] uppercase"
//             >
//               Lead with <br className="hidden sm:block" />
//               <span className="italic font-extralight text-zinc-500 block sm:inline-block sm:mt-2">
//                 Authority.
//               </span>
//             </motion.h1>

//             <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
//               {/* Paragraph: Wider on mobile, specific width on desktop */}
//               <motion.p
//                 variants={faderUp}
//                 className="text-zinc-400 text-base md:text-xl max-w-2xl md:max-w-xl font-light leading-relaxed border-l-2 md:border-l border-[#ec1313]/50 md:border-[#ec1313]/30 pl-5 md:pl-6"
//               >
//                 LeadNex develops driven individuals into confident, capable
//                 leaders. We turn ambition into real leadership through
//                 uncompromising excellence.
//               </motion.p>

//               {/* CTA Group */}
//               <motion.div
//                 variants={faderUp}
//                 className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8 pt-2 md:pt-4"
//               >
//                 <Button
//                   label="Request Executive Briefing"
//                   onClick={openContactForm}
//                 />

//                 <NavLink
//                   href="/about_us"
//                   label="View Our Impact"
//                   variant="ghost"
//                   Icon={ArrowRight}
//                 />
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       </section>
//       {/* 2. SERVICES SECTION */}
//       <section className="px-6 py-20 md:py-24 max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="mb-16 md:mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-10 md:gap-16 border-b border-zinc-100 pb-12 md:pb-16">
//           <div className="max-w-4xl">
//             {/* Label */}
//             <span className="text-[#ec1313] text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] block mb-4 md:mb-6">
//               Capabilities
//             </span>

//             {/* Heading */}
//             <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.1] md:leading-[1.05]">
//               Forging the Next <br className="hidden md:block" />
//               Generation of Leaders.
//             </h2>
//           </div>

//           {/* Metadata Block */}
//           <div className="max-w-sm w-full space-y-4 md:space-y-6 lg:pb-2">
//             <div className="flex items-center gap-4">
//               <span className="text-lg md:text-xl font-light text-zinc-400 italic tracking-widest whitespace-nowrap">
//                 Est. 2026
//               </span>
//               <div className="h-px flex-1 bg-zinc-200" />
//             </div>

//             <p className="text-zinc-500 text-base md:text-sm leading-relaxed max-w-[280px] md:max-w-full">
//               Practical, high-impact development pathways designed for clarity,
//               confidence, and character.
//             </p>
//           </div>
//         </div>

//         {/* Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-10 lg:gap-12">
//           {specializations.map((spec, index) => (
//             <motion.div
//               key={spec.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }} // Staggered entry
//             >
//               <ServiceCard {...spec} />
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* 3. Expertise section*/}
//       <section className="relative overflow-hidden border-y border-zinc-100 bg-zinc-50 px-6 py-20 md:py-24">
//         {/* Architectural Grid Background - Responsive Opacity */}
//         <div
//           className="pointer-events-none absolute inset-0 opacity-[0.03] md:opacity-[0.04]"
//           style={{
//             backgroundImage: `radial-gradient(#ec1313 0.75px, transparent 0.75px)`,
//             backgroundSize: "clamp(24px, 4vw, 32px) clamp(24px, 4vw, 32px)",
//           }}
//         />

//         <div className="relative z-10 mx-auto max-w-7xl">
//           <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-24">
//             {/* Video - Centered on mobile, offset on desktop */}
//             <div className="group relative w-full max-w-sm md:max-w-md lg:w-1/2">
//               {/* Structural Accent Frame - Hidden on smallest screens to prevent horizontal overflow */}
//               <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 h-full w-full border border-zinc-200 transition-transform duration-700 group-hover:-translate-x-2 group-hover:translate-y-2 hidden sm:block" />

//               <div className="relative aspect-3/4 overflow-hidden border border-zinc-200 bg-white shadow-xl md:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]">
//                 <video
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                   className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
//                 >
//                   <source
//                     src="/videos/transformation_beyond_theory.mp4"
//                     type="video/mp4"
//                   />
//                 </video>
//                 <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
//               </div>

//               {/* Performance Badge - Scaled down for mobile */}
//               <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 bg-[#ec1313] p-6 md:p-10 shadow-2xl">
//                 <p className="text-3xl md:text-5xl font-black italic leading-none tracking-tighter text-white">
//                   100%
//                 </p>
//                 <p className="mt-1 md:mt-2 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
//                   Commitment
//                 </p>
//               </div>
//             </div>

//             {/* Text Content Block */}
//             <div className="flex-1 w-full lg:pl-10">
//               <header className="mb-8 md:mb-10 text-left">
//                 <span className="mb-4 md:mb-6 block text-[10px] font-bold uppercase tracking-[0.4em] text-[#ec1313] md:text-xs">
//                   The LeadNex Method
//                 </span>
//                 {/* Fluid Heading: prevant text-8xl from overflowing small screens */}
//                 <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[0.95] md:leading-[0.9] tracking-tighter text-zinc-900">
//                   Transformation <br className="hidden sm:block" />
//                   <span className="font-light italic text-zinc-300">
//                     beyond
//                   </span>{" "}
//                   <span className="text-zinc-900">theory.</span>
//                 </h3>
//               </header>

//               <div className="mb-10 md:mb-12 max-w-xl space-y-5 md:space-y-6">
//                 <p className="text-lg md:text-2xl font-light leading-relaxed text-zinc-600">
//                   We don’t just teach—we build{" "}
//                   <span className="font-medium text-zinc-900 underline decoration-[#ec1313]/30 decoration-2 underline-offset-4">
//                     presence
//                   </span>{" "}
//                   and sharpen strategic thinking.
//                 </p>
//                 <p className="text-sm md:text-base leading-relaxed text-zinc-500">
//                   Through immersion in political leadership and English
//                   excellence, we develop the next generation of global
//                   decision-makers.
//                 </p>
//               </div>

//               {/* Stats */}
//               <div className="grid grid-cols-3 gap-4 md:gap-8 border-t border-zinc-200 pt-10 md:pt-12">
//                 {leadNexStats.map((stat) => (
//                   <StatItem
//                     key={stat.id}
//                     value={stat.value}
//                     label={stat.label}
//                     mobileLabel={stat.mobileLabel}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="px-6 py-20 md:py-24 max-w-7xl mx-auto">
//         <div className="bg-zinc-950 rounded-2xl md:rounded-3xl p-8 sm:p-10 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative shadow-2xl border border-white/5">
//           {/* Animated Radial Background - More refined for mobile viewports */}
//           <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-[radial-gradient(circle_at_top_right,#ec131315,transparent_70%)] pointer-events-none" />
//           <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#ec1313]/5 blur-[100px] rounded-full pointer-events-none" />

//           <div className="relative z-10 text-center lg:text-left max-w-2xl">
//             <motion.span
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               className="text-[#ec1313] text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] block mb-4 md:mb-6"
//             >
//               JOIN LEADNEX
//             </motion.span>

//             <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-6 md:mb-8 tracking-tighter leading-[1.1] md:leading-tight">
//               The Future of <br />
//               <span className="italic font-extralight text-zinc-400">
//                 Indian Leadership.
//               </span>
//             </h2>

//             <p className="text-zinc-400 text-sm md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0 font-light">
//               Join a new generation of individuals preparing to lead with
//               clarity, confidence, and conviction.
//             </p>
//           </div>

//           {/* CTA Group */}
//           <div className="relative z-10 flex flex-col items-center gap-8 w-full lg:w-auto">
//             <div className="w-full sm:w-auto group">
//               <Button
//                 label="Join Leadnex"
//                 onClick={openContactForm}
//                 className="w-full sm:w-72 h-16 text-base font-semibold tracking-wide justify-center bg-[#ec1313] hover:bg-white hover:text-black transition-all duration-500 rounded-full shadow-[0_0_40px_-10px_rgba(236,19,19,0.3)]"
//               />
//             </div>

//             <div className="flex items-center gap-4 opacity-60">
//               <div className="h-px w-8 bg-zinc-800" />
//               <p className="text-zinc-500 text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-medium whitespace-nowrap">
//                 Confidentiality Guaranteed
//               </p>
//               <div className="h-px w-8 bg-zinc-800" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 4. Supporting Women Section */}
//       <section className="relative overflow-hidden bg-white border-t border-zinc-100">
//         <Link
//           href="/kumari_pickles"
//           className="group flex flex-col lg:flex-row min-h-[500px] md:min-h-[600px] lg:min-h-[700px] items-stretch"
//         >
//           {/* 1. Media Block - Using aspect ratio control for mobile vs desktop */}
//           <div className="w-full lg:w-1/2 relative overflow-hidden bg-zinc-100 order-1 lg:order-1">
//             <div className="aspect-4/3 sm:aspect-video lg:h-full lg:aspect-auto">
//               <Image
//                 src="/images/supporting_women.webp"
//                 alt="Community Initiative"
//                 fill
//                 sizes="(max-width: 1024px) 100vw, 50vw"
//                 className="object-cover transition-transform duration-[4s] ease-out group-hover:scale-105"
//               />
//               {/* Editorial Gradients - Adds depth for mobile text overlay potential */}
//               <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-40 lg:hidden" />
//               <div className="absolute inset-0 bg-black/5 pointer-events-none" />
//             </div>
//           </div>

//           {/* 2. Content Block - Strategic Padding for better "Breathability" */}
//           <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 sm:p-12 md:p-20 lg:p-24 bg-white order-2 lg:order-2">
//             {/* Label with dynamic tracking */}
//             <motion.span
//               initial={{ opacity: 0, x: -10 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               className="text-[#ec1313] text-[9px] md:text-xs font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] mb-6 md:mb-8"
//             >
//               Lineage & Impact
//             </motion.span>

//             {/* Heading: Tighter leading on mobile, expansive on desktop */}
//             <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-zinc-900 mb-6 md:mb-10 leading-[1.1]">
//               Supporting Women. <br className="hidden sm:block" />
//               <span className="italic font-extralight text-zinc-400 group-hover:text-[#ec1313] transition-colors duration-700 ease-in-out">
//                 Strengthening Families.
//               </span>
//             </h2>

//             <p className="text-zinc-500 text-base md:text-xl font-light leading-relaxed mb-8 md:mb-12 max-w-md border-l border-zinc-100 pl-6 md:pl-0 md:border-none">
//               LeadNex creates sustainable pathways by converting traditional
//               craftsmanship into professional financial independence.
//             </p>

//             {/* Interactive Link Component */}
//             <div className="inline-flex items-center gap-4 text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-900 group-hover:gap-6 transition-all duration-500">
//               <span className="relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#ec1313] group-hover:after:w-full after:transition-all after:duration-500">
//                 View the Initiative
//               </span>
//               <div className="p-2 rounded-full bg-zinc-50 group-hover:bg-[#ec1313] group-hover:text-white transition-colors duration-500">
//                 <ArrowRight
//                   size={16}
//                   className="transition-transform duration-500 group-hover:translate-x-1"
//                 />
//               </div>
//             </div>
//           </div>
//         </Link>
//       </section>

//       {/* 5. Newsletter */}
//       <section className="px-6 py-20 md:py-24 max-w-7xl mx-auto bg-white border-t border-zinc-100">
//         <div className="max-w-3xl mx-auto text-center">
//           {/* Integrated Icon with Floating Animation */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             className="flex justify-center mb-8 md:mb-12"
//           >
//             <div className="relative p-4 rounded-full bg-zinc-50 border border-zinc-100">
//               <Mail size={28} strokeWidth={1} className="text-[#ec1313]" />
//               {/* Active Ping Indicator */}
//               <div className="absolute top-3 right-3 flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ec1313] opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ec1313]"></span>
//               </div>
//             </div>
//           </motion.div>

//           <header className="mb-8 md:mb-12">
//             <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-zinc-900 leading-[1.1]">
//               Leadership Insights. <br className="hidden sm:block" />
//               <span className="text-[#ec1313] italic font-extralight">
//                 Delivered.
//               </span>
//             </h2>

//             <p className="text-zinc-500 text-sm md:text-xl font-light max-w-xl mx-auto leading-relaxed px-4">
//               Weekly briefings on strategic development and political
//               excellence—designed for those ready to step forward and lead.
//             </p>
//           </header>

//           {/* Form */}
//           <div className="max-w-lg mx-auto">
//             <form
//               onSubmit={(e) => e.preventDefault()}
//               className="relative group flex flex-col sm:flex-row items-stretch gap-2"
//             >
//               <input
//                 className="w-full sm:flex-1 h-12 bg-zinc-200 border border-zinc-300 rounded-md px-6 text-xs uppercase tracking-widest outline-none focus:border-zinc-400 transition-all placeholder:text-zinc-400"
//                 placeholder="Official Email Address"
//                 type="email"
//                 required
//               />
//               <Button
//                 label="Subscribe"
//                 className="text-[10px] font-bold tracking-[0.2em]"
//               />
//             </form>

//             {/* 3. Privacy Protocol */}
//             <div className="mt-8 flex items-center justify-center gap-4 opacity-40">
//               <div className="h-[1px] w-6 md:w-10 bg-zinc-300" />
//               <p className="text-[8px] md:text-[9px] text-zinc-500 uppercase tracking-[0.3em] font-bold whitespace-nowrap">
//                 Protocol: Strictly Confidential
//               </p>
//               <div className="h-[1px] w-6 md:w-10 bg-zinc-300" />
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// /** * SUB-COMPONENTS */

// interface ServiceCardProps {
//   title: string;
//   icon: LucideIcon;
//   desc: string;
//   imagePath: string;
//   sourcePath: string;
// }

// const ServiceCard = ({
//   title,
//   icon: Icon,
//   desc,
//   imagePath,
//   sourcePath,
// }: ServiceCardProps) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       className="group relative bg-white border border-zinc-100 rounded overflow-hidden transition-all duration-500"
//     >
//       {/* 1. Technical Image Header */}
//       <div className="h-64 relative overflow-hidden bg-zinc-100 rounded-t">
//         <motion.div
//           className="w-full h-full"
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
//         >
//           <Image
//             alt={title}
//             src={imagePath}
//             fill
//             className="object-cover transition-all duration-700"
//           />
//           {/* Subtle Red Gradient Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
//         </motion.div>
//       </div>

//       <div className="p-8 relative">
//         {/* 2. Asymmetric Accent Line */}
//         <div className="absolute left-0 top-0 h-full w-[1px] bg-zinc-100 group-hover:bg-[#ec1313] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />

//         {/* 3. Minimalist Icon & Title */}
//         <div className="flex items-start justify-between mb-6">
//           <div className="text-zinc-400 group-hover:text-[#ec1313] transition-colors duration-300">
//             <Icon size={24} strokeWidth={1} />
//           </div>
//         </div>

//         <h4 className="text-xl font-bold mb-4 tracking-tight text-zinc-900 uppercase leading-none">
//           {title}
//           <span className="text-[#ec1313]">.</span>
//         </h4>

//         <p className="text-zinc-500 text-sm font-light leading-relaxed mb-8 line-clamp-2 italic">
//           {desc}
//         </p>

//         {/* 4. Refined Action Link */}
//         <a
//           href={sourcePath}
//           className="relative inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-900"
//         >
//           <span className="relative z-10">Explore More</span>
//           <div className="size-8 rounded-full border border-zinc-100 flex items-center justify-center group-hover:bg-[#ec1313] group-hover:border-[#ec1313] group-hover:text-white transition-all duration-500">
//             <ArrowRight size={14} />
//           </div>
//         </a>
//       </div>
//     </motion.div>
//   );
// };

// interface StatItemProps {
//   value: string;
//   label: string;
//   mobileLabel?: string;
// }

// function StatItem({ value, label, mobileLabel }: StatItemProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 15 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       className="space-y-1 md:space-y-2 border-l border-zinc-100 pl-4 md:pl-0 md:border-l-0"
//     >
//       <p className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 flex items-baseline">
//         {value}
//         {/* Sub-indicator for context */}
//         <span className="text-[#ec1313] text-lg ml-0.5">+</span>
//       </p>

//       <p className="text-[8px] md:text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em] leading-tight">
//         <span className="hidden md:inline">{label}</span>
//         <span className="md:hidden">{mobileLabel || label}</span>
//       </p>

//       {/* Decorative Progress Bar - Senior Detail */}
//       <div className="h-[2px] w-8 bg-zinc-100 overflow-hidden rounded-full mt-2">
//         <motion.div
//           initial={{ width: 0 }}
//           whileInView={{ width: "100%" }}
//           transition={{ duration: 1, delay: 0.5 }}
//           className="h-full bg-[#ec1313]/40"
//         />
//       </div>
//     </motion.div>
//   );
// }


"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Mail, CheckCircle2, Link as LinkIcon, ShieldCheck } from "lucide-react";
import Link from "next/link";

import Button from "@/ui/button"; // Assuming your existing UI component
import { useContactForm } from "./ContextProvider";

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
      <section className="relative w-full mx-auto px-4 pt-4 pb-20 md:pb-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative overflow-hidden rounded-2xl bg-zinc-950 min-h-[85vh] flex flex-col justify-center items-center text-center p-6 md:p-20"
        >
          {/* Background Texture */}
          <div className="absolute inset-0 z-0 opacity-40">
            <div 
              className="absolute inset-0" 
              style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #ec1313 1px, transparent 0)`, backgroundSize: '40px 40px' }} 
            />
            <div className="absolute inset-0 bg-linear-to-b from-zinc-950 via-transparent to-zinc-950" />
          </div>

          <div className="relative z-10 max-w-5xl space-y-8">
            <motion.div variants={faderUp} className="flex justify-center items-center gap-3">
              <span className="h-px w-10 bg-[#ec1313]" />
              <span className="text-white text-[10px] font-bold uppercase tracking-[0.6em]">
                Est. 2026 / Leadership Initiative
              </span>
              <span className="h-px w-10 bg-[#ec1313]" />
            </motion.div>

            <motion.h1 
              variants={faderUp}
              className="text-white text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.85] uppercase"
            >
              Lead<span className="italic font-extralight text-zinc-500">Nex.</span>
            </motion.h1>

            <motion.p 
              variants={faderUp}
              className="text-zinc-400 text-lg md:text-2xl max-w-2xl mx-auto font-light leading-relaxed italic"
            >
              Guiding emerging young leaders in political, professional, and academic spaces through uncompromising excellence.
            </motion.p>

            <motion.div variants={faderUp} className="pt-8">
              <Button 
                label="Request Confidential Consultation" 
                onClick={openContactForm}
                className="bg-[#ec1313] hover:bg-white hover:text-zinc-950 transition-all duration-500 rounded-full px-10 py-6 text-sm font-bold tracking-widest uppercase"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 2. AREAS OF WORK */}
      <section className="px-6 py-24 max-w-7xl mx-auto" id="work">
        <div className="mb-20 border-l-2 border-[#ec1313] pl-8">
          <span className="text-[#ec1313] text-xs font-bold uppercase tracking-[0.4em] block mb-4">
            Capabilities
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 uppercase">
            Areas of <span className="italic font-extralight text-zinc-400">Work.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <WorkCard 
            title="Political Mentorship"
            desc="Confidential, founder-led programme for emerging political leaders seeking strategic advice and structural presence."
          />
          <WorkCard 
            title="Personal Branding"
            desc="Amplifying the voices of public personalities and influencers striving to reach the next level of global recognition."
          />
          <WorkCard 
            title="Strategic Guidance"
            desc="Customized sessions for individuals navigating critical life and career decisions in academic or corporate environments."
          />
        </div>
      </section>

      {/* 3. FOUNDER SECTION */}
      <section className="bg-zinc-50 border-y border-zinc-100 py-24 px-6" id="about">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="relative w-full lg:w-1/2 aspect-square max-w-md group">
            <div className="absolute -bottom-6 -left-6 w-full h-full border border-zinc-200 group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform duration-700" />
            <div className="relative h-full w-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 bg-zinc-200">
               {/* Replace with actual founder image */}
               <div className="w-full h-full bg-zinc-300 animate-pulse" /> 
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#ec1313] p-6 text-white">
              <p className="text-xs font-bold uppercase tracking-widest leading-none">Founder</p>
              <p className="text-2xl font-black italic tracking-tighter">John Majel P.</p>
            </div>
          </div>

          <div className="flex-1 space-y-8">
            <span className="text-[#ec1313] text-xs font-bold uppercase tracking-[0.4em] block">
              The Visionary
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-900 leading-tight">
              A Legacy of <span className="italic font-extralight text-zinc-300">Mentorship.</span>
            </h2>
            <p className="text-xl text-zinc-500 font-light leading-relaxed">
              LeadNex was founded by <strong className="text-zinc-950 font-medium">John Majel P</strong>, a University Gold Medallist and competitive exams trainer with extensive experience shaping civil service aspirants and professionals.
            </p>
            <Link 
              href="https://linkedin.com" 
              className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-900 group"
            >
              <span className="border-b border-[#ec1313]/30 group-hover:border-[#ec1313] transition-all">Verify Credentials</span>
              <LinkIcon size={14} className="text-[#ec1313]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. CURRENT ENGAGEMENTS (Bento-style list) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-zinc-950 rounded-3xl p-8 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_top_right,#ec131310,transparent_70%)]" />
          
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-16 tracking-tighter">
            Current <span className="italic font-extralight text-zinc-500">Engagements.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
            {[
              "Institutional career guidance sessions across India",
              "Direct mentorship for young professionals",
              "Global branding for Social Media Influencers",
              "Confidential political advisory roles"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-6 group">
                <div className="size-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#ec1313] group-hover:border-[#ec1313] transition-all duration-500">
                  <CheckCircle2 size={18} className="text-[#ec1313] group-hover:text-white" />
                </div>
                <p className="text-zinc-400 text-lg font-light group-hover:text-white transition-colors">
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
            Ready to <span className="italic font-extralight text-[#ec1313]">Step Forward.</span>
          </h2>
          
          <p className="text-zinc-500 text-lg font-light leading-relaxed">
            Individuals and institutions seeking high-impact consultation may request a briefing.
          </p>

          <Button 
            label="Request Confidential Consultation" 
            onClick={openContactForm}
            className="w-full sm:w-auto bg-zinc-950 hover:bg-[#ec1313] text-white transition-all duration-500 rounded-full px-12 h-16 text-xs font-bold tracking-widest uppercase"
          />

          <div className="pt-12 flex flex-col items-center gap-6 opacity-40">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-zinc-300" />
              <ShieldCheck size={16} />
              <p className="text-[9px] font-bold uppercase tracking-[0.4em]">Protocol: Strictly Confidential</p>
              <div className="h-px w-8 bg-zinc-300" />
            </div>
            <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest">
              <Link href="mailto:contact@leadnex.com" className="hover:text-[#ec1313]">Gmail</Link>
              <Link href="#" className="hover:text-[#ec1313]">LinkedIn</Link>
              <Link href="#" className="hover:text-[#ec1313]">Instagram</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/** * SUB-COMPONENTS */

function WorkCard({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group p-10 bg-white border border-zinc-100 relative overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)]"
    >
      <div className="absolute left-0 top-0 h-full w-[2px] bg-[#ec1313] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
      
      <div className="mb-8 text-zinc-300 group-hover:text-[#ec1313] transition-colors duration-500">
        <div className="size-12 rounded-lg bg-zinc-50 flex items-center justify-center">
          <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
        </div>
      </div>

      <h3 className="text-xl font-bold text-zinc-900 uppercase tracking-tight mb-4">
        {title}<span className="text-[#ec1313]">.</span>
      </h3>
      
      <p className="text-sm text-zinc-500 font-light leading-relaxed italic mb-8">
        {desc}
      </p>

      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 group-hover:text-zinc-900 transition-colors">
        Learn More
      </span>
    </motion.div>
  );
}