"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const projects = [
  {
    name: "Meridian Finance",
    description:
      "A fintech dashboard reimagined with clarity and speed — real-time data, zero clutter.",
    tags: ["Web Development", "UI/UX", "Dashboard"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=900&fit=crop&q=80",
  },
  {
    name: "Coastal Realty",
    description:
      "Luxury real estate listings with immersive property tours and map-based search.",
    tags: ["Web Development", "E-Commerce", "Maps Integration"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=900&fit=crop&q=80",
  },
  {
    name: "Nōm Kitchen",
    description:
      "An elevated restaurant brand — online ordering, reservations, and editorial content.",
    tags: ["Web Design", "Development", "CMS Integration"],
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&h=900&fit=crop&q=80",
  },
  {
    name: "Artisan Collective",
    description:
      "A curated e-commerce marketplace connecting independent makers with global buyers.",
    tags: ["E-Commerce", "Custom Theme", "Web Development"],
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=900&h=900&fit=crop&q=80",
  },
  {
    name: "Pulse Health",
    description:
      "Telehealth platform with HIPAA-compliant video, scheduling, and patient portals.",
    tags: ["Web Application", "UI/UX", "Development"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&h=900&fit=crop&q=80",
  },
  {
    name: "Vox Media Hub",
    description:
      "A content-first platform built for speed — editorial tools and blazing-fast delivery.",
    tags: ["Web Development", "CMS", "Performance"],
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=900&h=900&fit=crop&q=80",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = index % 2 === 0;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group flex flex-col gap-8 md:flex-row md:items-center md:gap-16 ${
        isLeft ? "" : "md:flex-row-reverse"
      }`}
    >
      {/* Square preview card */}
      <div className="relative w-full md:w-[420px] lg:w-[480px] shrink-0 aspect-square overflow-hidden rounded-3xl cursor-pointer shadow-lg shadow-black/5">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.05]"
          sizes="(max-width: 768px) 100vw, 480px"
        />
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* View project pill on hover */}
        <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
          <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm text-[#0A0A0A] px-4 py-2 rounded-full">
            <span className="text-[10px] font-mono tracking-[0.1em] uppercase font-medium">
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
      </div>

      {/* Project info — sits on the opposite side */}
      <div className={`flex-1 flex flex-col ${isLeft ? "md:items-start md:text-left" : "md:items-end md:text-right"}`}>
        <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#0066FF] mb-4">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] tracking-tight">
          {project.name}
        </h3>
        <p className="mt-3 text-[#737373] text-base font-light leading-relaxed max-w-sm">
          {project.description}
        </p>

        {/* Tags */}
        <div className={`mt-5 flex gap-2 flex-wrap ${isLeft ? "" : "md:justify-end"}`}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono tracking-[0.12em] uppercase text-[#737373] border border-[#E5E5E5] px-3.5 py-1.5 rounded-full whitespace-nowrap hover:border-[#0066FF] hover:text-[#0066FF] transition-colors duration-300"
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
    <section id="work" className="relative bg-[#FAFAFA] py-28 md:py-40">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <div ref={headRef} className="mb-20 md:mb-32">
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
        <div className="flex flex-col gap-24 md:gap-36">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
