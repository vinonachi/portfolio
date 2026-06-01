"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { fadeInUp, viewportOnce } from "./motion";

export function SectionTitle({
  children,
  icon: Icon,
  subtitle,
  centered = false,
}: {
  children: React.ReactNode;
  icon?: LucideIcon;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ duration: 0.6 }}
      className="mb-10 md:mb-12"
    >
      <div
        className={
          centered
            ? "flex flex-col items-center text-center gap-4"
            : "flex items-start gap-4"
        }
      >
        {Icon && (
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center shrink-0 shadow-[0_0_24px_rgba(16,185,129,0.15)]">
            <Icon className="w-6 h-6 text-emerald-400" />
          </div>
        )}
        <div className={centered ? "max-w-2xl" : undefined}>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">{children}</h2>
          {subtitle && (
            <p
              className={`mt-2 text-slate-400 text-sm sm:text-base ${centered ? "mx-auto" : "max-w-2xl"}`}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
