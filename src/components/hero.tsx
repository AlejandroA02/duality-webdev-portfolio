"use client";

import { motion } from "framer-motion";
import { GridBackground } from "@/components/ui/the-infinite-grid";

export function Hero() {
  return (
    <section id="hero" className="relative">
      <GridBackground
        className="min-h-screen flex items-center justify-center bg-[#0A0A0A] text-white"
        blobColors={{
          topRight: "rgba(0,102,255,0.15)",
          topRightSecondary: "rgba(0,82,204,0.1)",
          bottomLeft: "rgba(0,102,255,0.08)",
        }}
      >
        {/* Giant Ψ watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
          aria-hidden
        >
          <span
            className="text-[30vw] md:text-[25vw] leading-none text-white/[0.02]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Ψ
          </span>
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 pt-28 pb-20 md:pt-0 md:pb-0 min-h-screen justify-center">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] sm:tracking-[0.3em] uppercase text-white/40 border border-white/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full whitespace-nowrap">
              Web Development Studio — Miami, FL
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2.5rem,8vw,6.5rem)] font-bold leading-[0.95] tracking-[-0.03em] max-w-5xl"
          >
            We build websites
            <br />
            <span className="bg-gradient-to-r from-[#0066FF] to-[#0052CC] bg-clip-text text-transparent">
              that define brands
            </span>
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 md:mt-8 text-base md:text-lg text-white/50 font-light max-w-xl leading-relaxed"
          >
            Precision-engineered digital experiences for companies that
            refuse to blend in.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#work"
              className="group relative px-8 py-3.5 bg-[#0066FF] text-white text-sm font-medium tracking-wide rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,102,255,0.3)]"
            >
              <span className="relative z-10">View Our Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF] to-[#0052CC] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 border border-white/15 text-white/70 text-sm font-medium tracking-wide rounded-sm hover:border-white/30 hover:text-white transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          >
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-white/25">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent"
            />
          </motion.div>
        </div>
      </GridBackground>
    </section>
  );
}
