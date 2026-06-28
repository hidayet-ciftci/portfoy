"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social-icons";
import { personalInfo } from "@/lib/data";
import { useI18n } from "@/lib/i18n/context";
import { Button } from "@/components/ui/button";
import { CvDownloadButton } from "@/components/cv-download-button";

export function HeroSection() {
  const { t } = useI18n();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="mb-4 font-mono text-sm text-emerald-400">
            {t.hero.greeting}
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-6xl lg:text-7xl">
            {personalInfo.name.split(" ")[0]}{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-300 bg-clip-text text-transparent">
              {personalInfo.name.split(" ").slice(1).join(" ")}
            </span>
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-zinc-300 sm:text-3xl lg:text-4xl">
            {t.personal.title}
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
            {t.hero.tagline}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-zinc-500">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-emerald-500/70" aria-hidden />
              {t.personal.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="h-4 w-4 text-emerald-500/70" aria-hidden />
              {personalInfo.email}
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="h-4 w-4 text-emerald-500/70" aria-hidden />
              {personalInfo.phone}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button asChild size="lg">
            <a href="#projects">{t.hero.viewWork}</a>
          </Button>
          <CvDownloadButton size="lg" variant="outline">
            <Download className="h-4 w-4" />
            {t.hero.downloadCv}
          </CvDownloadButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex items-center gap-4"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-zinc-300 transition hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:text-emerald-300"
            aria-label={t.hero.githubAria}
          >
            <GitHubIcon className="h-4 w-4" />
            {t.hero.githubLabel}
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-zinc-300 transition hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:text-emerald-300"
            aria-label={t.hero.linkedinAria}
          >
            <LinkedInIcon className="h-4 w-4" />
            {t.hero.linkedinLabel}
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500 transition hover:text-emerald-400"
        aria-label={t.hero.scrollToAbout}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.a>
    </section>
  );
}
