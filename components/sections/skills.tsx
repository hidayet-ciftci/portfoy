"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/context";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/effects/fade-in";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-sm">
        <span className="text-zinc-300">{name}</span>
        <span className="font-mono text-zinc-500">{level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400"
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  const { t } = useI18n();

  return (
    <section id="skills" className="scroll-mt-20 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t.skills.eyebrow}
          title={t.skills.title}
          description={t.skills.description}
        />

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.skills.categories.map((category) => (
            <StaggerItem key={category.title}>
              <Card className="h-full transition hover:border-emerald-500/20">
                <CardHeader className="pb-4">
                  <CardTitle className="text-base">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                    />
                  ))}
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.2}>
          <p className="mt-8 text-center text-sm text-zinc-600">
            {t.skills.disclaimer}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
