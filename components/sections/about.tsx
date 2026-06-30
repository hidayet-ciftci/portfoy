"use client";

import { useI18n } from "@/lib/i18n/context";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/effects/fade-in";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Sparkles } from "lucide-react";

export function AboutSection() {
  const { t } = useI18n();

  return (
    <section id="about" className="scroll-mt-20 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-5">
          <FadeIn className="lg:col-span-3">
            <SectionHeading
              eyebrow={t.about.eyebrow}
              title={t.about.title}
              description={t.about.description}
            />
            <div className="space-y-4 text-base leading-relaxed text-zinc-400">
              {t.about.summary.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {t.about.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-2" delay={0.15}>
            <Card className="h-full border-emerald-500/10">
              <CardContent className="space-y-6 p-6">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-emerald-400">
                    {t.about.currently}
                  </p>
                  <p className="mt-1 font-semibold text-zinc-100">
                    {t.personal.title}
                  </p>
                  <p className="text-sm text-zinc-500">{t.personal.location}</p>
                </div>

                <div>
                  <p className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-zinc-500">
                    <GraduationCap className="h-3.5 w-3.5" />
                    {t.about.education}
                  </p>
                  <p className="font-medium text-zinc-200">
                    {t.education.school}
                  </p>
                  <p className="text-sm text-zinc-400">{t.education.degree}</p>
                  <p className="text-sm text-zinc-500">
                    {t.about.gpaLabel} {t.education.gpa} · {t.education.period}
                  </p>
                </div>

                <div>
                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-500">
                    {t.about.languages}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {t.languages.map((lang) => (
                      <Badge key={lang.name} variant="outline">
                        {lang.name} — {lang.level}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-zinc-500">
                    <Sparkles className="h-3.5 w-3.5" />
                    {t.about.interests}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {t.interests.map((item) => (
                      <Badge key={item} variant="secondary">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-1 text-xs font-medium uppercase tracking-wider text-zinc-500">
                    {t.about.internshipsCompleted}
                  </p>
                  <p className="text-2xl font-bold text-emerald-400">
                    {t.experience.items.length}
                  </p>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
