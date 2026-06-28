"use client";

import {
  certificates,
  education,
  experience,
  featuredProjects,
  aiProjects,
  interests,
  languages,
  personalInfo,
  summary,
  skillCategories,
} from "@/lib/data";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function generateCvText(): string {
  const lines: string[] = [
    personalInfo.name.toUpperCase(),
    personalInfo.title,
    `${personalInfo.location} | ${personalInfo.email} | ${personalInfo.phone}`,
    `${personalInfo.linkedin} | ${personalInfo.github}`,
    "",
    "PROFESSIONAL SUMMARY",
    ...summary.map((s) => `- ${s}`),
    "",
    "EDUCATION",
    `${education.school} — ${education.degree}`,
    `GPA: ${education.gpa} | ${education.period}`,
    "",
    "WORK EXPERIENCE",
    ...experience.flatMap((job) => [
      `${job.role} | ${job.company} | ${job.period}`,
      ...job.highlights.map((h) => `  • ${h}`),
      `  Technologies: ${job.technologies.join(", ")}`,
      "",
    ]),
    "PROJECTS",
    ...featuredProjects.flatMap((p) => [
      `${p.title} (${p.period})`,
      p.description,
      ...p.highlights.map((h) => `  • ${h}`),
      `  Technologies: ${p.technologies.join(", ")}`,
      "",
    ]),
    ...aiProjects.flatMap((p) => [
      `${p.title} (${p.period})`,
      p.description,
      ...p.highlights.map((h) => `  • ${h}`),
      `  Technologies: ${p.technologies.join(", ")}`,
      "",
    ]),
    "TECHNICAL SKILLS",
    ...skillCategories.map(
      (cat) => `${cat.title}: ${cat.skills.map((s) => s.name).join(", ")}`
    ),
    "",
    "LANGUAGES",
    ...languages.map((l) => `${l.name}: ${l.level}`),
    "",
    "CERTIFICATES",
    ...certificates.map((c) => `- ${c}`),
    "",
    "INTERESTS",
    interests.join(", "),
  ];

  return lines.join("\n");
}

interface CvDownloadButtonProps extends ButtonProps {
  children?: React.ReactNode;
}

export function CvDownloadButton({
  children,
  className,
  ...props
}: CvDownloadButtonProps) {
  const handleDownload = () => {
    const content = generateCvText();
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Hidayet-Ciftci-CV.txt";
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
      {children ?? "Download CV"}
    </Button>
  );
}
