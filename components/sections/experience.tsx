"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/effects/fade-in";

export function ExperienceSection() {
  const { t } = useI18n();

  return (
    <section
      id="experience"
      className="scroll-mt-20 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t.experience.eyebrow}
          title={t.experience.title}
          description={t.experience.description}
        />

        <div className="relative">
          <div
            className="absolute left-[19px] top-2 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-emerald-500/50 via-emerald-500/20 to-transparent sm:block"
            aria-hidden
          />

          <div className="space-y-8">
            {t.experience.items.map((job, index) => (
              <FadeIn key={job.id} delay={index * 0.08}>
                <article className="relative flex gap-6 sm:gap-8">
                  <div className="relative z-10 hidden shrink-0 sm:block">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-500/30 bg-[#030712] ring-4 ring-emerald-500/10">
                      <Briefcase className="h-4 w-4 text-emerald-400" />
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="flex-1 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-emerald-500/20 hover:bg-white/[0.05]"
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-zinc-100">
                          {job.role}
                        </h3>
                        <p className="text-emerald-400">{job.company}</p>
                      </div>
                      <time className="shrink-0 font-mono text-sm text-zinc-500">
                        {job.period}
                      </time>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {job.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-sm leading-relaxed text-zinc-400"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  </motion.div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
