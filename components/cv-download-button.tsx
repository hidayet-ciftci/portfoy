"use client";

import { personalInfo } from "@/lib/data";
import { useI18n } from "@/lib/i18n/context";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CvDownloadButtonProps extends ButtonProps {
  children?: React.ReactNode;
}

export function CvDownloadButton({
  children,
  className,
  ...props
}: CvDownloadButtonProps) {
  const { t } = useI18n();

  const handleDownload = () => {
    const lines: string[] = [
      personalInfo.name.toUpperCase(),
      t.personal.title,
      `${t.personal.location} | ${personalInfo.email} | ${personalInfo.phone}`,
      `${personalInfo.linkedin} | ${personalInfo.github}`,
      "",
      t.cv.sections.summary,
      ...t.about.summary.map((s) => `- ${s}`),
      "",
      t.cv.sections.education,
      `${t.education.school} — ${t.education.degree}`,
      `${t.education.gpaLabel}: ${t.education.gpa} | ${t.education.period}`,
      "",
      t.cv.sections.experience,
      ...t.experience.items.flatMap((job) => [
        `${job.role} | ${job.company} | ${job.period}`,
        ...job.highlights.map((h) => `  • ${h}`),
        `  ${t.cv.sections.technologies}: ${job.technologies.join(", ")}`,
        "",
      ]),
      t.cv.sections.projects,
      ...t.projects.items.flatMap((p) => [
        `${p.title} (${p.period})`,
        p.description,
        ...p.highlights.map((h) => `  • ${h}`),
        `  ${t.cv.sections.technologies}: ${p.technologies.join(", ")}`,
        "",
      ]),
      ...t.aiProjects.items.flatMap((p) => [
        `${p.title} (${p.period})`,
        p.description,
        ...p.highlights.map((h) => `  • ${h}`),
        `  ${t.cv.sections.technologies}: ${p.technologies.join(", ")}`,
        "",
      ]),
      t.cv.sections.skills,
      ...t.skills.categories.map(
        (cat) => `${cat.title}: ${cat.skills.map((s) => s.name).join(", ")}`
      ),
      "",
      t.cv.sections.languages,
      ...t.languages.map((l) => `${l.name}: ${l.level}`),
      "",
      t.cv.sections.certificates,
      ...t.certificates.items.map((c) => `- ${c}`),
      "",
      t.cv.sections.interests,
      t.interests.join(", "),
    ];

    const content = lines.join("\n");
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = t.cv.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <Button
      type="button"
      onClick={handleDownload}
      className={cn(className)}
      {...props}
    >
      {children ?? t.hero.downloadCv}
    </Button>
  );
}
