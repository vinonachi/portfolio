"use client";

import { CalendarDays, FileImage } from "lucide-react";
import { participationEvents } from "@/lib/portfolio-data";
import { GlowCard } from "./GlowCard";
import { RevealItem, RevealStagger } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

export function ParticipationSection() {
  return (
    <section id="participation" className="ai-section relative z-[2] bg-white/[0.02]">
      <div className="ai-container max-w-6xl">
        <SectionTitle
          icon={CalendarDays}
          subtitle="Hackathons, research days, exhibitions, and community engagement."
        >
          Research & Technical Participation
        </SectionTitle>

        <RevealStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {participationEvents.map((event) => (
            <RevealItem key={event.title}>
              <GlowCard glow="emerald" className="h-full">
                <div className="p-5 sm:p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-base font-semibold text-white leading-snug">{event.title}</h3>
                      <p className="text-slate-500 text-sm mt-1">{event.tag}</p>
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-white/5">
                    <a
                      href={event.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 text-slate-200 hover:border-emerald-500/40 hover:text-emerald-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all"
                    >
                      <FileImage className="w-4 h-4" />
                      View Certificate
                    </a>
                  </div>
                </div>
              </GlowCard>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
