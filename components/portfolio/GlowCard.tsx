"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type GlowCardProps = {
  children: React.ReactNode;
  className?: string;
  glow?: "emerald" | "cyan" | "amber" | "violet";
  hoverLift?: boolean;
};

const glowMap = {
  emerald: "from-emerald-500/50 via-cyan-500/30 to-violet-500/40",
  cyan: "from-cyan-500/50 via-emerald-500/30 to-blue-500/40",
  amber: "from-amber-500/50 via-orange-500/30 to-emerald-500/30",
  violet: "from-violet-500/50 via-fuchsia-500/30 to-cyan-500/40",
};

export function GlowCard({
  children,
  className,
  glow = "emerald",
  hoverLift = true,
}: GlowCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={hoverLift ? { y: -6 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={cn("group relative rounded-2xl p-[1px]", className)}
    >
      <div
        className={cn(
          "absolute -inset-px rounded-2xl bg-gradient-to-br opacity-0 blur-sm transition-opacity duration-500",
          glowMap[glow],
          hovered && "opacity-100"
        )}
      />
      <div className="relative h-full rounded-2xl glass-surface overflow-hidden">
        <div
          className={cn(
            "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 bg-gradient-to-br",
            glowMap[glow],
            "mix-blend-soft-light",
            hovered && "opacity-30"
          )}
        />
        {children}
      </div>
    </motion.div>
  );
}
