"use client";

import { useMemo, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social-icons";
import { personalInfo } from "@/lib/data";
import { useI18n } from "@/lib/i18n/context";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/effects/fade-in";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ContactSection() {
  const { t } = useI18n();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const contactLinks = useMemo(
    () => [
      {
        icon: Mail,
        label: t.contact.labels.email,
        value: personalInfo.email,
        href: `mailto:${personalInfo.email}`,
      },
      {
        icon: Phone,
        label: t.contact.labels.phone,
        value: personalInfo.phone,
        href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
      },
      {
        icon: MapPin,
        label: t.contact.labels.location,
        value: t.personal.location,
        href: null,
      },
      {
        icon: GitHubIcon,
        label: t.contact.labels.github,
        value: personalInfo.githubUsername,
        href: personalInfo.github,
      },
      {
        icon: LinkedInIcon,
        label: t.contact.labels.linkedin,
        value: "hidayet-ciftci",
        href: personalInfo.linkedin,
      },
    ],
    [t]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `${t.contact.form.subjectPrefix} ${formState.name}`
    );
    const body = encodeURIComponent(
      `${t.contact.form.name}: ${formState.name}\n${t.contact.form.email}: ${formState.email}\n\n${formState.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="scroll-mt-20 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          description={t.contact.description}
          align="center"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <FadeIn>
            <div className="space-y-4">
              {contactLinks.map((item) => {
                const content = (
                  <Card className="transition hover:border-emerald-500/20">
                    <CardContent className="flex items-center gap-4 p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10">
                        <item.icon className="h-5 w-5 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-500">{item.label}</p>
                        <p className="font-medium text-zinc-200">{item.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <Card className="border-emerald-500/10">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm text-zinc-400"
                    >
                      {t.contact.form.name}
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-zinc-100 outline-none transition focus:border-emerald-500/40 focus:ring-2 focus:ring-emerald-500/20"
                      placeholder={t.contact.form.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm text-zinc-400"
                    >
                      {t.contact.form.email}
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-zinc-100 outline-none transition focus:border-emerald-500/40 focus:ring-2 focus:ring-emerald-500/20"
                      placeholder={t.contact.form.emailPlaceholder}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm text-zinc-400"
                    >
                      {t.contact.form.message}
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-zinc-100 outline-none transition focus:border-emerald-500/40 focus:ring-2 focus:ring-emerald-500/20"
                      placeholder={t.contact.form.messagePlaceholder}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Send className="h-4 w-4" />
                    {submitted ? t.contact.form.sending : t.contact.form.send}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
