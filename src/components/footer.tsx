"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GridBackground } from "@/components/ui/the-infinite-grid";

export function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden">
      <GridBackground
        className="bg-[#0A0A0A] text-white"
        blobColors={{
          topRight: "rgba(0,102,255,0.15)",
          topRightSecondary: "rgba(0,82,204,0.1)",
          bottomLeft: "rgba(0,102,255,0.08)",
        }}
      >
        {/* Subtle gradient accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-[#0066FF]/40 to-transparent z-20" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-28 md:py-40">
          {/* CTA */}
          <div className="text-center mb-20 md:mb-28">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="block text-[11px] font-mono tracking-[0.3em] uppercase text-[#0066FF] mb-8"
            >
              02 — Contact
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="text-4xl md:text-[4.5rem] font-bold leading-[1] tracking-[-0.03em] max-w-3xl mx-auto"
            >
              Have a project?
              <br />
              <span className="bg-gradient-to-r from-[#0066FF] to-[#0052CC] bg-clip-text text-transparent">
                Let&apos;s talk.
              </span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10"
            >
              <a
                href="mailto:ops@dualitylabs.ai"
                className="inline-flex items-center gap-3 px-10 py-4 bg-[#0066FF] text-white text-sm font-medium tracking-wide rounded-sm hover:shadow-[0_0_40px_rgba(0,102,255,0.3)] transition-all duration-300 group"
              >
                ops@dualitylabs.ai
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Footer bar */}
          <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2.5">
              <span
                className="text-xl text-white/60"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Ψ
              </span>
              <span className="text-[11px] font-mono tracking-[0.2em] text-white/40">
                DUALITY LABS
              </span>
            </div>
            <span className="text-[11px] font-mono tracking-wider text-white/25">
              © 2026 Duality Labs — Miami, FL
            </span>
          </div>
        </div>
      </GridBackground>
    </section>
  );
}
