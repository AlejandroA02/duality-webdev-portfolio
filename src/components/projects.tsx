"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useCallback, useState, useEffect } from "react";
import Image from "next/image";

interface Project {
  name: string;
  description: string;
  tags: string[];
  image: string;
  video?: string;
  videoClassName?: string;
  url?: string;
}

const projects: Project[] = [
  {
    name: "Forged",
    description:
      "An automotive restoration atelier — cinematic hero, bold typography, and a premium craft-first identity.",
    tags: ["Landing Page", "Cinematic Design", "Automotive", "Responsive"],
    image: "/videos/forged-thumb.jpg",
    video: "/videos/forged.mp4",
    url: "https://forged-nine.vercel.app",
  },
  {
    name: "Mainline",
    description:
      "Industrial-grade plumbing precision — dark cinematic aesthetic, brick textures, and a bold 3-step process.",
    tags: ["Landing Page", "Dark Theme", "Industrial", "Responsive"],
    image: "/videos/mainline-thumb.jpg",
    video: "/videos/mainline.mp4",
    videoClassName: "widescreen",
    url: "https://mainline-one.vercel.app",
  },
  {
    name: "Elara",
    description:
      "A premium aesthetics & wellness clinic — glassmorphism UI, animated blob backgrounds, and elegant booking flows.",
    tags: ["Landing Page", "Glassmorphism", "Animations", "Responsive"],
    image: "/videos/elara-thumb.jpg",
    video: "/videos/elara.mp4",
    videoClassName: "widescreen",
    url: "https://elara-ashy.vercel.app",
  },
  {
    name: "VOID Scroll",
    description:
      "An immersive scroll experience — words falling through 3D space, parallax depth, and cinematic motion.",
    tags: ["Scroll Animation", "3D Parallax", "GSAP", "Interactive"],
    image: "/videos/void-scroll-thumb.jpg",
    video: "/videos/void-scroll.mp4",
    url: "https://demo-void-scroll.vercel.app",
  },
  {
    name: "Atelier",
    description:
      "A refined architecture studio site — editorial layouts, floor plan reveals, and elegant scroll transitions.",
    tags: ["Editorial Layout", "Scroll Transitions", "Luxury Aesthetic", "Responsive"],
    image: "/videos/atelier-poster.png",
    video: "/videos/atelier.mp4",
    videoClassName: "widescreen",
    url: "https://demo-arch-studio.vercel.app",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = index % 2 === 0;
  const isWidescreen = project.videoClassName === "widescreen";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, []);

  // Container sizing based on mode
  const containerClass = isWidescreen
    ? "md:w-[520px] lg:w-[580px] aspect-video"
    : "md:w-[420px] lg:w-[480px] aspect-square";

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group flex flex-col gap-6 md:flex-row md:items-center md:gap-16 ${
        isLeft ? "" : "md:flex-row-reverse"
      }`}
    >
      {/* Preview card */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative block w-full shrink-0 overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer shadow-lg shadow-black/5 ${containerClass}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={project.image}
          alt={project.name}
          fill
          className={`object-cover transition-all duration-[800ms] ease-out ${
            project.video ? "md:group-hover:scale-[1.05] md:group-hover:opacity-0" : ""
          }`}
          sizes="(max-width: 768px) 100vw, 480px"
        />

        {/* Video layer — only on desktop */}
        {project.video && !isMobile && (
          <video
            ref={videoRef}
            src={project.video}
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          />
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />

        {/* View project pill — always visible on mobile, hover on desktop */}
        <div className="absolute bottom-4 right-4 md:bottom-5 md:right-5 md:opacity-0 md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0 transition-all duration-500">
          <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm text-[#0A0A0A] px-3 py-1.5 md:px-4 md:py-2 rounded-full">
            <span className="text-[9px] md:text-[10px] font-mono tracking-[0.1em] uppercase font-medium">
              View Project
            </span>
            <svg
              className="w-3 h-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 17L17 7M17 7H7M17 7v10"
              />
            </svg>
          </div>
        </div>
      </a>

      {/* Project info */}
      <div className={`flex-1 flex flex-col ${isLeft ? "md:items-start md:text-left" : "md:items-end md:text-right"}`}>
        <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#0066FF] mb-3 md:mb-4">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="text-2xl md:text-4xl font-bold text-[#0A0A0A] tracking-tight">
          {project.name}
        </h3>
        <p className="mt-2 md:mt-3 text-[#737373] text-sm md:text-base font-light leading-relaxed max-w-sm">
          {project.description}
        </p>

        {/* Tags */}
        <div className={`mt-4 md:mt-5 flex gap-1.5 md:gap-2 flex-wrap ${isLeft ? "" : "md:justify-end"}`}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] md:text-[10px] font-mono tracking-[0.12em] uppercase text-[#737373] border border-[#E5E5E5] px-2.5 py-1 md:px-3.5 md:py-1.5 rounded-full whitespace-nowrap hover:border-[#0066FF] hover:text-[#0066FF] transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section id="work" className="relative bg-[#FAFAFA] py-16 md:py-40">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <div ref={headRef} className="mb-12 md:mb-32">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={headInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="block text-[11px] font-mono tracking-[0.3em] uppercase text-[#0066FF] mb-8"
          >
            01 — Selected Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-[4rem] lg:text-[5rem] font-bold leading-[1] tracking-[-0.03em] text-[#0A0A0A] max-w-4xl"
          >
            Unforgettable Work,{" "}
            <span className="bg-gradient-to-r from-[#0066FF] to-[#0052CC] bg-clip-text text-transparent">
              Distinctly Ours
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 md:mt-8 text-[#737373] text-lg font-light max-w-xl leading-relaxed"
          >
            Each project reflects the strategy, craft, and attention to detail
            we bring from the first sketch to the final deploy. Nothing is
            rushed. Everything is intentional.
          </motion.p>
        </div>

        {/* Alternating project cards */}
        <div className="flex flex-col gap-14 md:gap-36">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
