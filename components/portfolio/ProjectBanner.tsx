"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ProjectBannerId } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

type BannerProps = {
  theme: ProjectBannerId;
  className?: string;
};

const themes: Record<
  ProjectBannerId,
  { from: string; via: string; to: string; accent: string; pattern: "neural" | "mesh" | "waves" | "grid" | "pulse" | "orbit" | "flow" | "nodes" }
> = {
  "rag-resume": { from: "#10b981", via: "#06b6d4", to: "#0f172a", accent: "#34d399", pattern: "neural" },
  "neuro-rag": { from: "#8b5cf6", via: "#22d3ee", to: "#0f172a", accent: "#a78bfa", pattern: "mesh" },
  "mri-ct": { from: "#22d3ee", via: "#6366f1", to: "#020617", accent: "#67e8f9", pattern: "waves" },
  readmission: { from: "#f59e0b", via: "#10b981", to: "#0f172a", accent: "#fbbf24", pattern: "pulse" },
  logistics: { from: "#3b82f6", via: "#06b6d4", to: "#0f172a", accent: "#60a5fa", pattern: "grid" },
  counselling: { from: "#a78bfa", via: "#ec4899", to: "#0f172a", accent: "#c4b5fd", pattern: "flow" },
  swiggy: { from: "#f97316", via: "#ef4444", to: "#0f172a", accent: "#fb923c", pattern: "orbit" },
  music: { from: "#ec4899", via: "#8b5cf6", to: "#0f172a", accent: "#f472b6", pattern: "nodes" },
};

function NeuralPattern({ accent, reduced }: { accent: string; reduced?: boolean }) {
  const nodes: [number, number][] = [
    [20, 50], [45, 30], [70, 55], [85, 35],
    [30, 75], [55, 65], [75, 80],
  ];
  const lines = nodes.flatMap(([x, y], i) =>
    nodes.slice(i + 1).map(([x2, y2], j) => ({ x, y, x2, y2, key: `${i}-${j}` }))
  );
  return (
    <g opacity="0.85">
      {lines.map(({ x, y, x2, y2, key }) =>
        reduced ? (
          <line key={key} x1={x} y1={y} x2={x2} y2={y2} stroke={accent} strokeWidth="0.3" strokeOpacity="0.35" />
        ) : (
          <motion.line
            key={key}
            x1={x}
            y1={y}
            x2={x2}
            y2={y2}
            stroke={accent}
            strokeWidth="0.3"
            strokeOpacity="0.35"
            animate={{ strokeOpacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        )
      )}
      {nodes.map(([x, y], i) =>
        reduced ? (
          <circle key={i} cx={x} cy={y} r="2.5" fill={accent} opacity="0.75" />
        ) : (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r="2.5"
            fill={accent}
            animate={{ r: [2, 3.2, 2], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
          />
        )
      )}
    </g>
  );
}

function MeshPattern({ accent }: { accent: string }) {
  return (
    <g opacity="0.7">
      {[15, 35, 55, 75].map((y, row) =>
        [15, 35, 55, 75, 90].map((x, col) => (
          <motion.rect
            key={`${row}-${col}`}
            x={x - 1}
            y={y - 1}
            width="2"
            height="2"
            fill={accent}
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 2.5, delay: (row + col) * 0.15, repeat: Infinity }}
          />
        ))
      )}
    </g>
  );
}

function WavesPattern({ accent }: { accent: string }) {
  return (
    <g fill="none" stroke={accent} strokeWidth="0.6" opacity="0.6">
      {[30, 50, 70].map((y, i) => (
        <motion.path
          key={i}
          d={`M0 ${y} Q25 ${y - 8} 50 ${y} T100 ${y}`}
          animate={{ d: [`M0 ${y} Q25 ${y - 8} 50 ${y} T100 ${y}`, `M0 ${y} Q25 ${y + 8} 50 ${y} T100 ${y}`, `M0 ${y} Q25 ${y - 8} 50 ${y} T100 ${y}`] }}
          transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </g>
  );
}

function GridPattern({ accent }: { accent: string }) {
  return (
    <g stroke={accent} strokeWidth="0.25" opacity="0.4">
      {Array.from({ length: 8 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 14} y1="0" x2={i * 14} y2="100" />
      ))}
      {Array.from({ length: 6 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 18} x2="100" y2={i * 18} />
      ))}
      <motion.circle
        cx="50"
        cy="50"
        r="18"
        fill="none"
        stroke={accent}
        strokeWidth="0.5"
        animate={{ r: [16, 22, 16], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </g>
  );
}

function PulsePattern({ accent }: { accent: string }) {
  return (
    <g opacity="0.75">
      {[0, 1, 2].map((i) => (
        <motion.ellipse
          key={i}
          cx="50"
          cy="50"
          rx="35"
          ry="12"
          fill="none"
          stroke={accent}
          strokeWidth="0.5"
          animate={{ rx: [20 + i * 8, 40 + i * 8, 20 + i * 8], opacity: [0.6, 0.15, 0.6] }}
          transition={{ duration: 3.5, delay: i * 0.6, repeat: Infinity }}
        />
      ))}
    </g>
  );
}

function FlowPattern({ accent }: { accent: string }) {
  return (
    <g fill="none" stroke={accent} strokeWidth="0.5" opacity="0.55">
      <motion.path
        d="M0 60 C30 20, 70 80, 100 40"
        animate={{ strokeDashoffset: [0, 20] }}
        strokeDasharray="4 6"
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />
      <motion.path
        d="M0 40 C40 70, 60 10, 100 65"
        animate={{ strokeDashoffset: [20, 0] }}
        strokeDasharray="4 6"
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
      />
    </g>
  );
}

function OrbitPattern({ accent }: { accent: string }) {
  return (
    <g opacity="0.8">
      <motion.circle
        cx="50"
        cy="50"
        r="22"
        fill="none"
        stroke={accent}
        strokeWidth="0.4"
        strokeDasharray="3 5"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "50px 50px" }}
      />
      <motion.circle
        cx="72"
        cy="50"
        r="4"
        fill={accent}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </g>
  );
}

function NodesPattern({ accent }: { accent: string }) {
  const bars = [25, 40, 55, 70, 85];
  return (
    <g opacity="0.75">
      {bars.map((x, i) => (
        <motion.rect
          key={x}
          x={x}
          y="30"
          width="3"
          height="40"
          rx="1.5"
          fill={accent}
          animate={{ height: [20, 45, 28], y: [40, 27, 36] }}
          transition={{ duration: 1.2, delay: i * 0.15, repeat: Infinity, repeatType: "reverse" }}
        />
      ))}
    </g>
  );
}

export function ProjectBanner({ theme, className }: BannerProps) {
  const reduced = useReducedMotion();
  const t = themes[theme];

  return (
    <div
      className={cn(
        "relative h-36 sm:h-40 w-full overflow-hidden rounded-t-2xl border-b border-white/[0.06]",
        className
      )}
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <defs>
          <linearGradient id={`bg-${theme}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={t.from} stopOpacity="0.55" />
            <stop offset="50%" stopColor={t.via} stopOpacity="0.35" />
            <stop offset="100%" stopColor={t.to} stopOpacity="0.95" />
          </linearGradient>
          <radialGradient id={`glow-${theme}`} cx="50%" cy="30%" r="60%">
            <stop offset="0%" stopColor={t.accent} stopOpacity="0.45" />
            <stop offset="100%" stopColor={t.to} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100" height="100" fill={`url(#bg-${theme})`} />
        <rect width="100" height="100" fill={`url(#glow-${theme})`} />
        {t.pattern === "neural" && <NeuralPattern accent={t.accent} reduced={!!reduced} />}
        {t.pattern === "mesh" && <MeshPattern accent={t.accent} />}
        {t.pattern === "waves" && <WavesPattern accent={t.accent} />}
        {t.pattern === "grid" && <GridPattern accent={t.accent} />}
        {t.pattern === "pulse" && <PulsePattern accent={t.accent} />}
        {t.pattern === "flow" && <FlowPattern accent={t.accent} />}
        {t.pattern === "orbit" && <OrbitPattern accent={t.accent} />}
        {t.pattern === "nodes" && <NodesPattern accent={t.accent} />}
      </svg>

      {reduced ? (
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
      ) : (
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"
          animate={{ opacity: [0.85, 0.95, 0.85] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.15),transparent_40%)]" />
    </div>
  );
}
