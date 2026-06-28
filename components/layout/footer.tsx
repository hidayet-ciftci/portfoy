"use client";

import { personalInfo } from "@/lib/data";
import { useI18n } from "@/lib/i18n/context";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social-icons";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#030712]/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6 lg:px-8">
        <div className="text-center sm:text-left">
          <p className="font-semibold text-zinc-200">{personalInfo.name}</p>
          <p className="mt-1 text-sm text-zinc-500">
            {t.personal.title} · {t.personal.location}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition hover:text-emerald-400"
            aria-label={t.footer.githubAria}
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition hover:text-emerald-400"
            aria-label={t.footer.linkedinAria}
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-zinc-500 transition hover:text-emerald-400"
            aria-label={t.footer.emailAria}
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <p className="text-sm text-zinc-600">
          © {year} {personalInfo.name.split(" ")[0]}.
        </p>
      </div>
    </footer>
  );
}
