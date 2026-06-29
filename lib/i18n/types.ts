export type Locale = "tr" | "en";

export const locales: Locale[] = ["tr", "en"];
export const defaultLocale: Locale = "tr";
export const LOCALE_STORAGE_KEY = "portfolio-locale";

export interface NavLink {
  label: string;
  href: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface InternshipStep {
  company: string;
  location: string;
  period: string;
  focus: string;
}

export interface LanguageItem {
  name: string;
  level: string;
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    links: NavLink[];
    getInTouch: string;
    openMenu: string;
    closeMenu: string;
    mainNav: string;
  };
  hero: {
    greeting: string;
    tagline: string;
    viewWork: string;
    downloadCv: string;
    scrollToAbout: string;
    githubLabel: string;
    linkedinLabel: string;
    githubAria: string;
    linkedinAria: string;
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    summary: string[];
    tags: string[];
    currently: string;
    education: string;
    languages: string;
    interests: string;
    internshipsCompleted: string;
    gpaLabel: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    description: string;
    items: ExperienceItem[];
  };
  skills: {
    eyebrow: string;
    title: string;
    description: string;
    disclaimer: string;
    categories: SkillCategory[];
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    items: ProjectItem[];
  };
  aiProjects: {
    eyebrow: string;
    title: string;
    description: string;
    items: ProjectItem[];
  };
  internship: {
    eyebrow: string;
    title: string;
    description: string;
    steps: InternshipStep[];
  };
  education: {
    eyebrow: string;
    title: string;
    description: string;
    school: string;
    degree: string;
    gpa: string;
    period: string;
    gpaLabel: string;
    outOf: string;
  };
  certificates: {
    eyebrow: string;
    title: string;
    description: string;
    items: string[];
  };
  github: {
    eyebrow: string;
    title: string;
    description: string;
    loading: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    labels: {
      email: string;
      phone: string;
      location: string;
      github: string;
      linkedin: string;
    };
    form: {
      name: string;
      subject: string;
      introName: string;
      message: string;
      namePlaceholder: string;
      subjectPlaceholder: string;
      messagePlaceholder: string;
      send: string;
      sending: string;
      subjectPrefix: string;
    };
  };
  footer: {
    githubAria: string;
    linkedinAria: string;
    emailAria: string;
  };
  cv: {
    filename: string;
    sections: {
      summary: string;
      education: string;
      experience: string;
      projects: string;
      skills: string;
      languages: string;
      certificates: string;
      interests: string;
      technologies: string;
    };
  };
  personal: {
    title: string;
    location: string;
  };
  languages: LanguageItem[];
  interests: string[];
}
