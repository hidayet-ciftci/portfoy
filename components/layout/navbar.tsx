"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { useI18n } from "@/lib/i18n/context";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { useTheme } from "@/components/theme/theme-provider";

export function Navbar() {
  const { t } = useI18n();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = t.nav.links.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [t.nav.links]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/5 bg-[#030712]/80 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label={t.nav.mainNav}
      >
        <a
          href="#"
          className="group flex items-center gap-2 font-mono text-sm font-semibold text-zinc-100"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20 transition group-hover:bg-emerald-500/20">
            HC
          </span>
          <span className="hidden sm:inline">
            {personalInfo.name.split(" ")[0]}
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {t.nav.links.map((link) => {
            const id = link.href.replace("#", "");
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm transition-colors",
                    activeSection === id
                      ? "text-emerald-400"
                      : "text-zinc-400 hover:text-zinc-100",
                  )}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? t.nav.lightMode : t.nav.darkMode}
            className="rounded-lg p-2 text-zinc-400 hover:bg-white/5 hover:text-zinc-100"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
          <Button asChild size="sm" variant="outline">
            <a href="#contact">{t.nav.getInTouch}</a>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? t.nav.lightMode : t.nav.darkMode}
            className="rounded-lg p-2 text-zinc-400 hover:bg-white/5 hover:text-zinc-100"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
          <button
            type="button"
            className="rounded-lg p-2 text-zinc-400 hover:bg-white/5 hover:text-zinc-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-white/5 bg-[#030712]/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {t.nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-lg px-4 py-3 text-sm text-zinc-300 hover:bg-white/5"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Button asChild className="w-full" variant="outline">
                  <a href="#contact" onClick={() => setMobileOpen(false)}>
                    {t.nav.getInTouch}
                  </a>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
