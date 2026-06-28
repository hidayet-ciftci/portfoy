"use client";

import {
  education,
  experience,
  interests,
  languages,
  personalInfo,
  summary,
} from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/effects/fade-in";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Sparkles } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="Building thoughtful software, end to end"
          description="Computer Engineering graduate with hands-on internship experience across frontend, backend, and AI-powered systems."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <FadeIn className="lg:col-span-3">
            <div className="space-y-4 text-base leading-relaxed text-zinc-400">
              {summary.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {["React", "Next.js", "ASP.NET Core", "PostgreSQL", "Hybrid RAG"].map(
                (tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                )
              )}
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-2" delay={0.15}>
            <Card className="h-full border-emerald-500/10">
              <CardContent className="space-y-6 p-6">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-emerald-400">
                    Currently
                  </p>
                  <p className="mt-1 font-semibold text-zinc-100">
                    {personalInfo.title}
                  </p>
                  <p className="text-sm text-zinc-500">{personalInfo.location}</p>
                </div>

                <div>
                  <p className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-zinc-500">
                    <GraduationCap className="h-3.5 w-3.5" />
                    Education
                  </p>
                  <p className="font-medium text-zinc-200">{education.school}</p>
                  <p className="text-sm text-zinc-400">{education.degree}</p>
                  <p className="text-sm text-zinc-500">
                    GPA {education.gpa} · {education.period}
                  </p>
                </div>

                <div>
                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-500">
                    Languages
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {languages.map((lang) => (
                      <Badge key={lang.name} variant="outline">
                        {lang.name} — {lang.level}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-zinc-500">
                    <Sparkles className="h-3.5 w-3.5" />
                    Interests
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((item) => (
                      <Badge key={item} variant="secondary">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-1 text-xs font-medium uppercase tracking-wider text-zinc-500">
                    Internships completed
                  </p>
                  <p className="text-2xl font-bold text-emerald-400">
                    {experience.length}
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
