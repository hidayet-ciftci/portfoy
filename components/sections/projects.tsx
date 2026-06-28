"use client";

import { motion } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/effects/fade-in";

export function ProjectsSection() {
  const { t } = useI18n();

  return (
    <section id="projects" className="scroll-mt-20 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          description={t.projects.description}
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {t.projects.items.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-emerald-500/25 hover:bg-white/[0.05]"
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-emerald-500/5 blur-2xl transition group-hover:bg-emerald-500/10" />

                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/20">
                    <FolderGit2 className="h-6 w-6 text-emerald-400" />
                  </div>
                  <span className="font-mono text-xs text-zinc-500">
                    {project.period}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-zinc-100">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {project.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm text-zinc-500"
                    >
                      <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500/60" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
