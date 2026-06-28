"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/effects/fade-in";

export function InternshipSection() {
  const { t } = useI18n();

  return (
    <section
      id="internship"
      className="scroll-mt-20 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t.internship.eyebrow}
          title={t.internship.title}
          description={t.internship.description}
        />

        <div className="relative mt-4">
          <div
            className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent lg:block"
            aria-hidden
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.internship.steps.map((step, index) => (
              <FadeIn key={step.company} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center transition hover:border-emerald-500/25 lg:text-left"
                >
                  <div className="mx-auto mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-zinc-950 lg:mx-0">
                    {index + 1}
                  </div>

                  <p className="font-mono text-xs text-emerald-400">{step.period}</p>
                  <h3 className="mt-2 font-semibold text-zinc-100">{step.company}</h3>

                  <p className="mt-1 flex items-center justify-center gap-1 text-xs text-zinc-500 lg:justify-start">
                    <MapPin className="h-3 w-3" />
                    {step.location}
                  </p>

                  <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-400">
                    {step.focus}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
