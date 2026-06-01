"use client";

import { Briefcase, FileImage } from "lucide-react";
import { internships } from "@/lib/portfolio-data";
import { GlowCard } from "./GlowCard";
import { RevealItem, RevealStagger } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

function SkillTag({ children }: { children: string }) {
  return (
    <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-slate-300">
      {children}
    </span>
  );
}

export function InternshipTimeline() {
  return (
    <section id="experience" className="ai-section relative z-[2]">
      <div className="ai-container max-w-4xl">
        <SectionTitle icon={Briefcase} subtitle="Hands-on industry experience across web development and machine learning.">
          Internship Experience
        </SectionTitle>

        <div className="relative">
          <div className="absolute left-[11px] md:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/60 via-cyan-500/30 to-transparent" />

          <RevealStagger className="space-y-8">
            {internships.map((item) => (
              <RevealItem key={`${item.title}-${item.organization}`} className="relative pl-10 md:pl-12">
                <div className="absolute left-0 md:left-[-1px] top-6 w-[22px] h-[22px] rounded-full border-2 border-emerald-400 bg-slate-950 shadow-[0_0_16px_rgba(16,185,129,0.5)]" />

                <GlowCard glow="cyan">
                  <div className="p-6 sm:p-7">
                    <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-emerald-400/90 text-sm font-medium mb-1">{item.organization}</p>
                    <p className="text-slate-500 text-xs font-mono mb-4">{item.duration}</p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-5">{item.description}</p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {item.skills.map((skill) => (
                        <SkillTag key={skill}>{skill}</SkillTag>
                      ))}
                    </div>

                    {item.certificate && (
                      <a
                        href={item.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 text-slate-200 hover:border-emerald-500/40 hover:text-emerald-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300"
                      >
                        <FileImage className="w-4 h-4" />
                        View Certificate
                      </a>
                    )}
                  </div>
                </GlowCard>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}
