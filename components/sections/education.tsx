"use client";

import { Award, GraduationCap } from "lucide-react";
import { certificates, education } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/effects/fade-in";
import { Card, CardContent } from "@/components/ui/card";

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-20 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Education"
          title="Academic background"
          description="Foundation in computer engineering with strong GPA and continuous practical learning."
        />

        <FadeIn>
          <Card className="overflow-hidden border-emerald-500/15">
            <CardContent className="flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 ring-1 ring-emerald-500/20">
                  <GraduationCap className="h-7 w-7 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-zinc-100">
                    {education.school}
                  </h3>
                  <p className="mt-1 text-zinc-400">{education.degree}</p>
                  <p className="mt-2 font-mono text-sm text-zinc-500">
                    {education.period}
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-6 py-4 text-center">
                <p className="text-xs font-medium uppercase tracking-wider text-emerald-400">
                  GPA
                </p>
                <p className="mt-1 text-3xl font-bold text-zinc-100">
                  {education.gpa.split(" ")[0]}
                </p>
                <p className="text-sm text-zinc-500">out of 4.00</p>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}

export function CertificatesSection() {
  return (
    <section
      id="certificates"
      className="scroll-mt-20 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Certificates"
          title="Credentials & certifications"
          description="Formal training and international experience credentials."
        />

        <StaggerContainer className="grid gap-4 sm:grid-cols-2">
          {certificates.map((cert) => (
            <StaggerItem key={cert}>
              <Card className="transition hover:border-emerald-500/20">
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10">
                    <Award className="h-5 w-5 text-emerald-400" />
                  </div>
                  <p className="font-medium text-zinc-200">{cert}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
