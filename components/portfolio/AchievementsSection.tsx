"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { ExternalLink, FileImage, Trophy } from "lucide-react";
import { achievements, publication } from "@/lib/portfolio-data";
import { GlowCard } from "./GlowCard";
import { Reveal, RevealItem, RevealStagger } from "./Reveal";
import { SectionTitle } from "./SectionTitle";
import { cn } from "@/lib/utils";

const variantStyles = {
  emerald: {
    icon: "text-emerald-400",
    iconBg: "bg-emerald-500/15 border-emerald-500/25",
    glow: "emerald" as const,
    counter: "text-emerald-400",
  },
  amber: {
    icon: "text-amber-400",
    iconBg: "bg-amber-500/15 border-amber-500/25",
    glow: "amber" as const,
    counter: "text-amber-400",
  },
  cyan: {
    icon: "text-cyan-400",
    iconBg: "bg-cyan-500/15 border-cyan-500/25",
    glow: "cyan" as const,
    counter: "text-cyan-400",
  },
};

function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 80, damping: 20 });
  const [display, setDisplay] = useState(`0${suffix}`);

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => setDisplay(`${Math.round(v)}${suffix}`));
    return () => unsub();
  }, [spring, suffix]);

  return <span ref={ref}>{display}</span>;
}

export function AchievementsSection() {
  return (
    <section id="achievements" className="ai-section relative z-[2] bg-white/[0.02]">
      <div className="ai-container max-w-5xl">
        <SectionTitle icon={Trophy} subtitle="Academic excellence, research recognition, and published work.">
          Achievements
        </SectionTitle>

        <RevealStagger className="grid md:grid-cols-2 gap-5">
          {achievements.map((item) => {
            const styles = variantStyles[item.variant];
            return (
              <RevealItem
                key={item.title + item.subtitle}
                className={cn(item.variant === "cyan" && "md:col-span-2")}
              >
                <GlowCard glow={styles.glow} className="h-full">
                  <div className="p-6 sm:p-7">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={cn(
                          "w-14 h-14 rounded-xl border flex items-center justify-center shrink-0",
                          styles.iconBg
                        )}
                      >
                        <Trophy className={cn("w-7 h-7", styles.icon)} />
                      </div>
                      <div>
                        {item.stat && (
                          <p className={cn("text-4xl font-bold tabular-nums mb-1", styles.counter)}>
                            <AnimatedCounter value={item.stat.value} suffix={item.stat.suffix} />
                          </p>
                        )}
                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                        <p className="text-slate-400 text-sm">{item.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.description}</p>

                    {item.variant === "cyan" && (
                      <a
                        href={publication.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-cyan-500/10 border border-cyan-500/30 text-cyan-200 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)] transition-all"
                      >
                        View Publication
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}

                    {item.certificate && (
                      <a
                        href={item.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 hover:border-amber-500/40 hover:text-amber-300 transition-all"
                      >
                        <FileImage className="w-4 h-4" />
                        View Certificate
                      </a>
                    )}
                  </div>
                </GlowCard>
              </RevealItem>
            );
          })}
        </RevealStagger>

        <Reveal delay={0.15} className="mt-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { label: "Research Awards", value: 2 },
              { label: "Publications", value: 1 },
              { label: "CGPA", value: 8.9, decimal: true },
            ].map((stat) => (
              <div key={stat.label} className="glass-surface rounded-xl p-4">
                <p className="text-2xl sm:text-3xl font-bold text-emerald-400 tabular-nums">
                  {stat.decimal ? stat.value : <AnimatedCounter value={stat.value as number} />}
                </p>
                <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
