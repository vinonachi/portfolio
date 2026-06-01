"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/lib/portfolio-data";
import { GlowCard } from "./GlowCard";
import { ProjectBanner } from "./ProjectBanner";
import { cn } from "@/lib/utils";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2.5 py-1 text-[11px] font-medium font-mono bg-white/5 text-emerald-300/90 border border-emerald-500/20 rounded-full">
      {children}
    </span>
  );
}

function ActionButton({
  href,
  label,
  icon: Icon,
  variant,
}: {
  href: string;
  label: string;
  icon: typeof Github;
  variant: "github" | "live";
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300",
        "border backdrop-blur-md",
        variant === "github"
          ? "bg-white/5 border-white/10 text-slate-200 hover:border-emerald-500/40 hover:text-emerald-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]"
          : "bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border-emerald-500/30 text-emerald-200 hover:shadow-[0_0_24px_rgba(16,185,129,0.35)]"
      )}
    >
      <Icon className="w-3.5 h-3.5" />
      {label}
    </motion.a>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ProjectIcon = project.icon;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const hasGithub = Boolean(project.github);
  const hasLive = Boolean(project.live);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 48 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <GlowCard className="h-full overflow-hidden" glow="emerald">
        <ProjectBanner theme={project.bannerId} />
        <div className="p-6 sm:p-7 h-full flex flex-col">
          <div className="flex items-start justify-between gap-4 mb-5 -mt-1">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center backdrop-blur-sm">
              <ProjectIcon className="w-6 h-6 text-emerald-400" />
            </div>
            {project.featured && (
              <span className="text-[10px] uppercase tracking-widest font-semibold text-emerald-400/80 border border-emerald-500/30 px-2 py-1 rounded-full">
                Featured
              </span>
            )}
          </div>

          <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 tracking-tight">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">{project.description}</p>

          {project.features.length > 0 && (
            <div className="mb-4">
              <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-2">Features</p>
              <div className="flex flex-wrap gap-1.5">
                {project.features.map((f) => (
                  <span key={f} className="text-xs text-slate-300 bg-white/5 px-2 py-1 rounded-md">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-5 pt-4 border-t border-white/5">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          {(hasGithub || hasLive) && (
            <div className="flex flex-wrap gap-3 mt-auto">
              {hasGithub && (
                <ActionButton href={project.github!} label="GitHub" icon={Github} variant="github" />
              )}
              {hasLive && (
                <ActionButton href={project.live!} label="Live Project" icon={ExternalLink} variant="live" />
              )}
            </div>
          )}
        </div>
      </GlowCard>
    </motion.div>
  );
}
