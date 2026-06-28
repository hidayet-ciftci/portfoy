import { BackgroundEffects } from "@/components/effects/background-effects";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { AiProjectsSection } from "@/components/sections/ai-projects";
import { InternshipSection } from "@/components/sections/internship";
import {
  EducationSection,
  CertificatesSection,
} from "@/components/sections/education";
import { GitHubSection } from "@/components/sections/github-section";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <BackgroundEffects />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <AiProjectsSection />
        <InternshipSection />
        <EducationSection />
        <CertificatesSection />
        <GitHubSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
