"use client";

import { motion } from "framer-motion";
import { Bot, Brain, Database, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/effects/fade-in";

const aiIcons = [Brain, Bot, Database, Sparkles];

export function AiProjectsSection() {
  const { t } = useI18n();

  return (
    <section
      id="ai-projects"
      className="scroll-mt-20 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t.aiProjects.eyebrow}
          title={t.aiProjects.title}
          description={t.aiProjects.description}
        />

        {t.aiProjects.items.map((project, index) => (
          <FadeIn key={project.id} delay={index * 0.1}>
            <motion.article
              whileHover={{ scale: 1.005 }}
              transition={{ duration: 0.25 }}
              className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5 p-8 sm:p-10"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(52,211,153,0.08)_0%,_transparent_60%)]" />

              <div className="relative">
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  {aiIcons.map((Icon, i) => (
                    <div
                      key={i}
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/20"
                    >
                      <Icon className="h-5 w-5 text-emerald-400" />
                    </div>
                  ))}
                  <span className="ml-auto font-mono text-sm text-zinc-500">
                    {project.period}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-zinc-50 sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {project.highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-4"
                    >
                      <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <p className="text-sm text-zinc-400">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </div>
            </motion.article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
