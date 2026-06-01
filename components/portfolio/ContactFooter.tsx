"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { contact } from "@/lib/portfolio-data";
import { GlowCard } from "./GlowCard";
import { Reveal, RevealStagger, RevealItem } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

const socialLinks = [
  { href: `mailto:${contact.email}`, icon: Mail, label: "Email", value: contact.email },
  { href: contact.linkedin, icon: Linkedin, label: "LinkedIn", value: "Connect on LinkedIn" },
  { href: contact.github, icon: Github, label: "GitHub", value: "View repositories" },
];

function SocialIcon({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: typeof Mail;
  label: string;
}) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      whileHover={{ scale: 1.12, y: -4 }}
      whileTap={{ scale: 0.95 }}
      className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 text-slate-300 hover:text-emerald-300 hover:border-emerald-500/40 hover:shadow-[0_0_24px_rgba(16,185,129,0.35)] transition-colors"
    >
      <Icon className="w-5 h-5" />
    </motion.a>
  );
}

export function ContactFooter() {
  return (
    <>
      <section id="contact" className="ai-section relative z-[2]">
        <div className="ai-container max-w-4xl">
          <SectionTitle subtitle="Let's connect for collaborations, internships, and AI research opportunities.">
            Get In Touch
          </SectionTitle>

          <RevealStagger className="grid sm:grid-cols-2 gap-4 mb-10">
            {socialLinks.map((link) => (
              <RevealItem key={link.label}>
                <GlowCard hoverLift={false}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-6 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-shadow">
                      <link.icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs uppercase tracking-wider">{link.label}</p>
                      <p className="text-white text-sm font-medium group-hover:text-emerald-300 transition-colors truncate max-w-[200px] sm:max-w-none">
                        {link.value}
                      </p>
                    </div>
                  </a>
                </GlowCard>
              </RevealItem>
            ))}

            <RevealItem>
              <GlowCard hoverLift={false}>
                <a href={`tel:${contact.phone}`} className="flex items-center gap-4 p-6 group">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider">Phone</p>
                    <p className="text-white text-sm font-medium group-hover:text-emerald-300 transition-colors">
                      {contact.phone}
                    </p>
                  </div>
                </a>
              </GlowCard>
            </RevealItem>

            <RevealItem>
              <GlowCard hoverLift={false}>
                <div className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider">Location</p>
                    <p className="text-white text-sm font-medium">{contact.location}</p>
                  </div>
                </div>
              </GlowCard>
            </RevealItem>
          </RevealStagger>

          <Reveal className="flex justify-center gap-4">
            {socialLinks.map((link) => (
              <SocialIcon key={link.label} href={link.href} icon={link.icon} label={link.label} />
            ))}
            <SocialIcon href={`tel:${contact.phone}`} icon={Phone} label="Phone" />
          </Reveal>
        </div>
      </section>

      <footer className="relative z-[2] border-t border-white/5 py-8">
        <div className="ai-container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Vinothini. Crafted with AI-driven design.
            </p>
            <div className="flex gap-4">
              <SocialIcon href={contact.linkedin} icon={Linkedin} label="LinkedIn" />
              <SocialIcon href={contact.github} icon={Github} label="GitHub" />
              <SocialIcon href={`mailto:${contact.email}`} icon={Mail} label="Email" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
