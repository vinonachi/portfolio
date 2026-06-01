"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Brain,
  Code2,
  GraduationCap,
  Star,
} from "lucide-react";
import { projects, interests, skillCategories } from "@/lib/portfolio-data";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { InternshipTimeline } from "@/components/portfolio/InternshipTimeline";
import { ParticipationSection } from "@/components/portfolio/ParticipationSection";
import { CertificationGrid } from "@/components/portfolio/CertificationGrid";
import { AchievementsSection } from "@/components/portfolio/AchievementsSection";
import { ContactFooter } from "@/components/portfolio/ContactFooter";
import { SectionTitle } from "@/components/portfolio/SectionTitle";
import { GlowCard } from "@/components/portfolio/GlowCard";
import { RevealItem, RevealStagger } from "@/components/portfolio/Reveal";
import { fadeIn, fadeInUp } from "@/components/portfolio/motion";

function SplitMaskText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        animate={isInView ? { y: 0 } : { y: "100%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      >
        {text}
      </motion.div>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1 text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/25 rounded-full">
      {children}
    </span>
  );
}

function SkillBar({ skill, level }: { skill: string; level: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-3">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-slate-300 text-sm font-medium">{skill}</span>
        <span className="text-xs text-slate-500 font-mono">{level}/5</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level * 20}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full"
        />
      </div>
    </div>
  );
}

function TimelineItem({
  title,
  subtitle,
  date,
  children,
}: {
  title: string;
  subtitle: string;
  date: string;
  children?: React.ReactNode;
}) {
  return (
    <GlowCard glow="emerald" hoverLift={false}>
      <div className="p-5 sm:p-6">
        <p className="text-emerald-400/90 text-sm font-mono mb-2">{date}</p>
        <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
        <p className="text-slate-400 text-sm mb-3">{subtitle}</p>
        {children}
      </div>
    </GlowCard>
  );
}

export default function Portfolio() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <div className="min-h-screen text-white relative z-[2]">
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[28rem] h-[28rem] bg-emerald-500/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[24rem] h-[24rem] bg-cyan-500/10 rounded-full blur-[120px]" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(148,163,184,0.35) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(148,163,184,0.35) 1px, transparent 1px)`,
            backgroundSize: "56px 56px",
          }}
        />

        <div className="relative z-10 ai-container py-24 sm:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-400/80 font-mono mb-6">
              AI · Data · Research
            </p>
            <SplitMaskText
              text="Vinothini"
              className="text-5xl sm:text-7xl md:text-8xl font-bold mb-4 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent"
            />
            <SplitMaskText
              text="AI & Data Analytics Enthusiast"
              className="text-lg sm:text-2xl text-emerald-400/90 mb-8 font-medium"
            />

            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate={isHeroInView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Building intelligent digital solutions with Machine Learning, Deep Learning, RAG
              systems, and modern web technologies.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isHeroInView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap justify-center gap-2 mb-10"
            >
              {interests.map((interest, index) => (
                <motion.span
                  key={interest}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 + index * 0.04 }}
                  className="px-3 py-1.5 glass-surface rounded-full text-xs sm:text-sm text-slate-300"
                >
                  {interest}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isHeroInView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href="#projects"
                className="px-8 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] transition-shadow"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-xl font-semibold text-sm glass-surface hover:border-emerald-500/30 transition-colors"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="w-6 h-10 rounded-full border border-white/20 flex justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-emerald-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="ai-section relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 flex justify-center">
          <div className="w-[32rem] h-[32rem] bg-emerald-500/10 rounded-full blur-[120px] -translate-y-1/2" />
        </div>
        <div className="ai-container max-w-4xl relative z-[1]">
          <SectionTitle
            centered
            icon={Brain}
            subtitle="Research-driven builder at the intersection of AI and product design."
          >
            About Me
          </SectionTitle>
          <RevealStagger className="flex justify-center">
            <RevealItem className="w-full max-w-3xl">
              <GlowCard glow="emerald" hoverLift={false} className="mx-auto">
                <div className="p-8 sm:p-10 text-center">
                  <p className="text-xs uppercase tracking-[0.25em] font-mono text-emerald-400/80 mb-5">
                    AI · Data · Research
                  </p>
                  <p className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-4">
                    Hi, I&apos;m{" "}
                    <span className="font-semibold bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                      Vinothini
                    </span>
                    — an AI & Data Analytics enthusiast passionate about building intelligent digital
                    solutions.
                  </p>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
                    I combine creativity, research, and engineering to develop impactful AI-driven
                    applications using Machine Learning, Deep Learning, RAG systems, and modern web
                    technologies for real-world problems.
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {["Machine Learning", "Deep Learning", "RAG Systems", "Healthcare AI", "Web Development"].map(
                      (focus) => (
                        <span
                          key={focus}
                          className="px-3 py-1.5 text-xs rounded-full bg-white/5 border border-emerald-500/20 text-slate-300 hover:border-emerald-500/40 hover:text-emerald-300 transition-colors"
                        >
                          {focus}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </GlowCard>
            </RevealItem>
          </RevealStagger>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="ai-section bg-white/[0.02]">
        <div className="ai-container max-w-4xl">
          <SectionTitle icon={GraduationCap}>Education</SectionTitle>
          <RevealStagger className="space-y-4">
            <RevealItem>
              <TimelineItem
                title="Postgraduate Programme in Artificial Intelligence & Machine Learning"
                subtitle="Advanced Learning"
                date="Currently Pursuing"
              >
                <div className="flex flex-wrap gap-2">
                  <Badge>Generative AI</Badge>
                  <Badge>Advanced ML</Badge>
                  <Badge>NLP</Badge>
                  <Badge>RAG Systems</Badge>
                </div>
              </TimelineItem>
            </RevealItem>
            <RevealItem>
              <TimelineItem
                title="Bachelor of Science in Computer Science"
                subtitle="Sri Ramachandra Institute of Higher Education and Research"
                date="2022 – 2025"
              >
                <p className="text-slate-500 text-sm mb-2">
                  Specialized in Artificial Intelligence, Machine Learning, and Data Analytics
                </p>
                <Badge>CGPA: 8.9</Badge>
              </TimelineItem>
            </RevealItem>
          </RevealStagger>
        </div>
      </section>

      <InternshipTimeline />

      {/* Projects */}
      <section id="projects" className="ai-section bg-white/[0.02]">
        <div className="ai-container max-w-7xl">
          <SectionTitle icon={Code2} subtitle="Selected AI, ML, and full-stack builds with GitHub and live demos.">
            Projects
          </SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr items-stretch">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="ai-section">
        <div className="ai-container max-w-6xl">
          <SectionTitle icon={Star}>Skills</SectionTitle>
          <RevealStagger className="grid md:grid-cols-2 gap-5">
            {skillCategories.map((category) => (
              <RevealItem key={category.title}>
                <GlowCard hoverLift={false}>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
                    {category.skills.map((skill) => (
                      <SkillBar key={skill.name} skill={skill.name} level={skill.level} />
                    ))}
                  </div>
                </GlowCard>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <AchievementsSection />
      <ParticipationSection />
      <CertificationGrid />
      <ContactFooter />
    </div>
  );
}
