"use client";

import { BookOpen, ExternalLink } from "lucide-react";
import { publication } from "@/lib/portfolio-data";
import { GlowCard } from "./GlowCard";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

export function ResearchPublication() {
  return (
    <section id="publication" className="ai-section relative z-[2]">
      <div className="ai-container max-w-4xl">
        <SectionTitle
          icon={BookOpen}
          subtitle="Peer-reviewed chapter on medical image synthesis and tumor-centric translation."
        >
          Research Publication
        </SectionTitle>

        <Reveal>
          <GlowCard glow="violet" className="max-w-4xl mx-auto">
            <div className="p-7 sm:p-9">
              <p className="text-xs uppercase tracking-[0.2em] font-mono text-violet-300/70 mb-3">
                {publication.publisher}
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold text-white leading-snug tracking-tight mb-4">
                {publication.title}
              </h3>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6 max-w-3xl">
                {publication.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {publication.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full border border-violet-500/25 bg-violet-500/10 text-violet-200/90"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-white/5 border border-violet-400/30 text-white hover:border-violet-400/50 hover:shadow-[0_0_28px_rgba(139,92,246,0.3)] transition-all duration-300"
              >
                View Publication
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </GlowCard>
        </Reveal>
      </div>
    </section>
  );
}
