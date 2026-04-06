"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X } from "lucide-react";

import { navigations } from "@/config";
import Button from "@/ui/button";
import { useContactForm } from "@/app/ContextProvider";

// 1. Immutable Design Tokens
const THEME = {
  TRANSITION: "transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)",
  MAX_WIDTH: "max-w-7xl",
  MOBILE_BREAKPOINT: 1024,
};

const STACKING_CONTEXT = {
  HEADER: "z-[200]",
  MOBILE_NAV: "z-[150]",
  CONTROLS: "z-[210]", // Ensures toggle is always interactive
};

// 2. Framer Motion Orchestration
const overlayVariants: Variants = {
  hide: { opacity: 0, x: "100%" },
  show: { 
    opacity: 1, 
    x: 0,
    transition: { type: "spring", damping: 25, stiffness: 200 } 
  },
  exit: { 
    opacity: 0, 
    x: "100%",
    transition: { ease: "easeInOut", duration: 0.3 } 
  }
};

const staggerItem: Variants = {
  hide: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, ease: "easeOut" }
  })
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const pathname = usePathname();
  const { openContactForm } = useContactForm();

  // Memoized Theme Detection
  const isHome = pathname === "/";
  const isLightMode = useMemo(() => !isHome || isScrolled || isOpen, [isHome, isScrolled, isOpen]);

  // Optimized Handlers
  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  // Performance-friendly Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.scrollY > 20;
      if (isScrolled !== scrollThreshold) setIsScrolled(scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  // Lock Body Scroll on Menu Open (Accessibility)
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 w-full ${STACKING_CONTEXT.HEADER} ${THEME.TRANSITION} ${
          isLightMode 
            ? "bg-white/90 backdrop-blur-xl border-b border-zinc-100 shadow-sm" 
            : "bg-transparent border-transparent"
        }`}
      >
        <div className={`flex items-center justify-between px-6 mx-auto ${THEME.MAX_WIDTH} ${THEME.TRANSITION} ${
          isHome && !isScrolled ? "h-20 lg:h-28" : "h-16 lg:h-20"
        }`}>
          
          {/* BRANDING: Prevent Layout Shift with fixed aspect ratio container */}
          <div className={`relative ${STACKING_CONTEXT.CONTROLS}`}>
            <Link href="/" aria-label="LeadNex Home" onClick={closeMenu}>
              <div className="relative w-28 lg:w-40 h-12">
                <Image
                  src={isLightMode ? "/images/logo_black.webp" : "/images/logo_white.webp"}
                  alt="" // Decorative since text is in aria-label
                  fill
                  className={`object-contain ${THEME.TRANSITION}`}
                  sizes="(max-width: 1024px) 112px, 160px"
                  priority // Critical for LCP
                />
              </div>
            </Link>
          </div>

          {/* DESKTOP NAVIGATION: Semantic <nav> with high-fidelity typography */}
          <div className="flex items-center gap-8">
            <nav className="hidden lg:flex items-center gap-8" role="navigation">
              {navigations.map((item) => (
                <Link
                  key={item.id}
                  href={item.url}
                  className={`text-[11px] font-semibold uppercase tracking-[0.25em] transition-all hover:text-[#ec1313] active:scale-95 ${
                    isLightMode ? "text-zinc-900" : "text-white"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            {/* CTA BLOCK */}
            <div className="hidden lg:block">
              <Button 
                onClick={openContactForm} 
                label="Consult Now" 
                size="sm" 
                className="bg-[#ec1313] text-white hover:bg-zinc-900 shadow-xl shadow-red-500/10"
              />
            </div>

            {/* MOBILE INTERFACE TRIGGER */}
            <button
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className={`lg:hidden relative ${STACKING_CONTEXT.CONTROLS} h-11 w-11 flex items-center justify-center rounded-full transition-all active:scale-90 ${
                isOpen
                  ? "bg-zinc-900 text-white" 
                  : isLightMode 
                    ? "bg-zinc-100 text-zinc-900" 
                    : "bg-white/10 text-white backdrop-blur-md"
              }`}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE OVERLAY: Senior Editorial Design */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={overlayVariants}
            initial="hide"
            animate="show"
            exit="exit"
            className={`fixed inset-0 bg-white ${STACKING_CONTEXT.MOBILE_NAV} lg:hidden flex flex-col`}
          >
            {/* Safe Area Spacer */}
            <div className="h-24" />

            <div className="flex-1 flex flex-col justify-between p-8 pt-4 overflow-y-auto">
              <nav className="flex flex-col gap-6">
                <span className="text-[#ec1313] text-[10px] font-black uppercase tracking-[0.4em]">Index</span>
                {navigations.map((item, i) => (
                  <motion.div key={item.id} custom={i} variants={staggerItem}>
                    <Link
                      href={item.url}
                      onClick={closeMenu}
                      className="text-5xl font-black text-zinc-900 uppercase tracking-tighter leading-none hover:text-[#ec1313] transition-colors"
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Utility Section */}
              <div className="space-y-10 border-t border-zinc-100 pt-10">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-zinc-400 text-[9px] font-bold uppercase tracking-widest mb-2">Inquiries</p>
                    <p className="text-zinc-900 font-bold text-sm">+91 9655784312</p>
                  </div>
                  <div>
                    <p className="text-zinc-400 text-[9px] font-bold uppercase tracking-widest mb-2">Office</p>
                    <p className="text-zinc-900 font-bold text-sm">Chanakyapuri, ND</p>
                  </div>
                </div>
                
                <Button
                  label="Start Your Campaign"
                  size="lg"
                  className="w-full h-16 bg-[#ec1313] text-white text-xs tracking-widest font-black uppercase"
                  onClick={() => { closeMenu(); openContactForm(); }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}