"use client";

import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useAnimationFrame,
} from "framer-motion";

let gridIdCounter = 0;

interface GridBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  blobColors?: {
    topRight?: string;
    topRightSecondary?: string;
    bottomLeft?: string;
  };
}

export const GridBackground = ({
  children,
  className,
  blobColors,
}: GridBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(`grid-pattern-${++gridIdCounter}`);
  const patternId = idRef.current;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);

  useAnimationFrame(() => {
    gridOffsetX.set((gridOffsetX.get() + 0.5) % 40);
    gridOffsetY.set((gridOffsetY.get() + 0.5) % 40);
  });

  const maskImage = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  const tr = blobColors?.topRight ?? "rgba(0,102,255,0.3)";
  const trSec = blobColors?.topRightSecondary ?? "rgba(0,82,204,0.2)";
  const bl = blobColors?.bottomLeft ?? "rgba(0,102,255,0.2)";

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={cn("relative w-full overflow-hidden", className)}
    >
      <div className="absolute inset-0 z-0 opacity-[0.04]">
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} patternId={patternId + "-bg"} />
      </div>
      <motion.div
        className="absolute inset-0 z-0 opacity-30"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} patternId={patternId + "-fg"} />
      </motion.div>

      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute right-[-20%] top-[-20%] w-[40%] h-[40%] rounded-full blur-[120px]"
          style={{ backgroundColor: tr }}
        />
        <div
          className="absolute right-[10%] top-[-10%] w-[20%] h-[20%] rounded-full blur-[100px]"
          style={{ backgroundColor: trSec }}
        />
        <div
          className="absolute left-[-10%] bottom-[-20%] w-[40%] h-[40%] rounded-full blur-[120px]"
          style={{ backgroundColor: bl }}
        />
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
};

const GridPattern = ({
  offsetX,
  offsetY,
  patternId,
}: {
  offsetX: ReturnType<typeof useMotionValue<number>>;
  offsetY: ReturnType<typeof useMotionValue<number>>;
  patternId: string;
}) => {
  return (
    <svg className="w-full h-full">
      <defs>
        <motion.pattern
          id={patternId}
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          x={offsetX}
          y={offsetY}
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-muted-foreground"
          />
        </motion.pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
};

export { GridPattern };
