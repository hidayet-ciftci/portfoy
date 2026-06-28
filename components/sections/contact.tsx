"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social-icons";
import { personalInfo } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/effects/fade-in";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: null,
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    value: "hidayetciftci",
    href: personalInfo.github,
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "hidayet-ciftci",
    href: personalInfo.linkedin,
  },
];

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio Contact from ${formState.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="scroll-mt-20 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect"
          description="Open to junior full-stack roles, internships, and collaborative projects."
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
                      Name
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
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm text-zinc-400"
                    >
                      Email
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
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm text-zinc-400"
                    >
                      Message
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
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Send className="h-4 w-4" />
                    {submitted ? "Opening email client..." : "Send message"}
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
