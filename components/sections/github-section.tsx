"use client";

import dynamic from "next/dynamic";
import { useI18n } from "@/lib/i18n/context";
import { personalInfo } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/effects/fade-in";
import { GitHubIcon } from "@/components/icons/social-icons";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
    loading: () => <GitHubCalendarLoading />,
  }
);

function GitHubCalendarLoading() {
  const { t } = useI18n();
  return (
    <div className="flex h-32 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
      <p className="text-sm text-zinc-500">{t.github.loading}</p>
    </div>
  );
}

export function GitHubSection() {
  const { t } = useI18n();

  return (
    <section id="github" className="scroll-mt-20 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t.github.eyebrow}
          title={t.github.title}
          description={t.github.description}
        />

        <FadeIn>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-zinc-400 transition hover:text-emerald-400"
              >
                <GitHubIcon className="h-4 w-4" />
                @{personalInfo.githubUsername}
              </a>
            </div>

            <div className="github-calendar overflow-x-auto">
              <GitHubCalendar
                username={personalInfo.githubUsername}
                colorScheme="dark"
                blockSize={12}
                blockMargin={4}
                fontSize={12}
                theme={{
                  dark: ["#0f172a", "#064e3b", "#047857", "#059669", "#34d399"],
                }}
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
