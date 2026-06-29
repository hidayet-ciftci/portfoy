import type { Dictionary } from "../types";

export const en: Dictionary = {
  meta: {
    title: "Hidayet Çiftçi | Junior Full Stack Developer",
    description:
      "Portfolio of Hidayet Çiftçi — Junior Full Stack Developer specializing in React, Next.js, ASP.NET Core, and AI-powered applications with Hybrid RAG.",
  },
  nav: {
    links: [
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "AI Work", href: "#ai-projects" },
      { label: "Journey", href: "#internship" },
      { label: "Education", href: "#education" },
      { label: "Contact", href: "#contact" },
    ],
    getInTouch: "Get in touch",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mainNav: "Main navigation",
  },
  hero: {
    greeting: "Hi, my name is",
    tagline:
      "I build scalable web & mobile applications — from React and Next.js frontends to ASP.NET Core backends and AI-powered systems with Hybrid RAG.",
    viewWork: "View my work",
    downloadCv: "Download CV",
    scrollToAbout: "Scroll to about section",
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",
    githubAria: "Visit GitHub profile",
    linkedinAria: "Visit LinkedIn profile",
  },
  about: {
    eyebrow: "About Me",
    title: "Building thoughtful software, end to end",
    description:
      "Computer Engineering graduate with hands-on internship experience across frontend, backend, and AI-powered systems.",
    summary: [
      "Computer Engineering graduate with internship experience in enterprise web and mobile application development.",
      "Experienced across frontend and backend using React, Next.js, React Native, ASP.NET Core, PostgreSQL, and Node.js.",
      "Recently focused on AI-powered applications — Hybrid RAG systems, Ollama, Qdrant, Redis, BullMQ, and LLM integrations.",
      "Passionate about building scalable, maintainable, and user-focused software while continuously learning.",
    ],
    tags: ["React", "Next.js", "ASP.NET Core", "PostgreSQL", "Hybrid RAG"],
    currently: "Currently",
    education: "Education",
    languages: "Languages",
    interests: "Interests",
    internshipsCompleted: "Internships completed",
    gpaLabel: "GPA",
  },
  experience: {
    eyebrow: "Experience",
    title: "Professional journey",
    description:
      "Internship experience across enterprise web, mobile, and full-stack development.",
    items: [
      {
        id: "ramsey",
        role: "Full Stack Developer Intern",
        company: "Ramsey / Gürmen Teknoloji",
        period: "Feb 2026 – May 2026",
        highlights: [
          "Developed backend services with ASP.NET Core and PostgreSQL using Entity Framework Core.",
          "Applied N-Tier Architecture, Repository Pattern, JWT auth, and role-based authorization.",
          "Integrated RabbitMQ, Hangfire, FluentValidation, and Serilog logging.",
          "Built React Native (Expo) screens with Redux Toolkit and REST API integration.",
        ],
        technologies: [
          "ASP.NET Core",
          "C#",
          "PostgreSQL",
          "JWT",
          "RabbitMQ",
          "Hangfire",
          "React Native",
          "Redux Toolkit",
        ],
      },
      {
        id: "ndm",
        role: "Frontend Developer Intern",
        company: "NDM Software",
        period: "Jun 2025 – Aug 2025",
        highlights: [
          "Built responsive web interfaces with Next.js, React, and reusable UI components.",
          "Integrated backend REST APIs and developed user-focused pages.",
          "Created mobile screens with React Native (Expo) and file-based routing.",
          "Collaborated using Git, GitHub, Jira, and Postman.",
        ],
        technologies: [
          "Next.js",
          "React",
          "React Native",
          "Expo",
          "TypeScript",
          "REST API",
        ],
      },
      {
        id: "innoventures",
        role: "Frontend Developer Intern",
        company: "Innoventures",
        period: "Nov 2024 – Dec 2024",
        highlights: [
          "Developed a Weather Application with React and TypeScript.",
          "Built responsive UI with Tailwind CSS, TanStack Query, and Context API.",
          "Implemented internationalization (i18n) and Chart.js visualizations.",
        ],
        technologies: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "TanStack Query",
          "Chart.js",
        ],
      },
      {
        id: "extramus",
        role: "Frontend Developer Intern",
        company: "Extramus — Italy (Erasmus)",
        period: "Jul 2024 – Oct 2024",
        highlights: [
          "Developed a responsive HR Platform with REST API integration.",
          "Implemented CRUD operations and authentication flows.",
          "Collaborated in an international team and presented demos in English.",
        ],
        technologies: ["React", "JavaScript", "Axios", "REST API", "Git"],
      },
    ],
  },
  skills: {
    eyebrow: "Technical Skills",
    title: "Technologies I work with",
    description:
      "Grouped by domain — from frontend frameworks to AI infrastructure.",
    disclaimer:
      "Proficiency levels reflect practical experience from internships and personal projects — not self-assessment inflation.",
    categories: [
      {
        title: "Frontend",
        skills: [
          { name: "React", level: 88 },
          { name: "Next.js", level: 85 },
          { name: "React Native", level: 82 },
          { name: "TypeScript", level: 85 },
          { name: "Tailwind CSS", level: 90 },
        ],
      },
      {
        title: "Backend",
        skills: [
          { name: "ASP.NET Core", level: 80 },
          { name: "Node.js / Express", level: 78 },
          { name: "REST API", level: 88 },
          { name: "JWT Auth", level: 82 },
          { name: "C#", level: 78 },
        ],
      },
      {
        title: "Databases",
        skills: [
          { name: "PostgreSQL", level: 80 },
          { name: "MongoDB", level: 75 },
          { name: "Qdrant", level: 72 },
        ],
      },
      {
        title: "AI & Data",
        skills: [
          { name: "Hybrid RAG", level: 78 },
          { name: "Ollama / LLM", level: 75 },
          { name: "Redis / BullMQ", level: 72 },
          { name: "Embeddings", level: 74 },
        ],
      },
      {
        title: "Tools & Architecture",
        skills: [
          { name: "Git / GitHub", level: 90 },
          { name: "N-Tier Architecture", level: 78 },
          { name: "Repository Pattern", level: 80 },
          { name: "Figma", level: 70 },
        ],
      },
    ],
  },
  projects: {
    eyebrow: "Featured Projects",
    title: "Selected work",
    description:
      "Enterprise systems, embedded defense tech, and full-stack applications.",
    items: [
      {
        id: "vehicle-service",
        title: "Enterprise Vehicle Service Management System",
        period: "Apr 2026 – May 2026",
        description:
          "Full-stack enterprise system developed during internship at Ramsey / Gürmen Teknoloji — vehicle management, service records, and mobile app.",
        highlights: [
          "User authorization & role management",
          "Vehicle & service record management",
          "ASP.NET Core backend API",
          "React Native mobile application",
        ],
        technologies: [
          "ASP.NET Core",
          "PostgreSQL",
          "Entity Framework Core",
          "JWT",
          "React Native",
          "Expo",
        ],
      },
      {
        id: "teknofest",
        title: "Teknofest Air Defense System",
        period: "Feb 2025 – Aug 2025",
        description:
          "Autonomous defense project with real-time object detection, embedded systems integration, and computer vision on Raspberry Pi.",
        highlights: [
          "Real-time object detection with Python & OpenCV",
          "Raspberry Pi & Arduino integration",
          "Autonomous and manual targeting modes",
          "Servo motor control & embedded development",
        ],
        technologies: [
          "Python",
          "OpenCV",
          "Arduino",
          "Raspberry Pi",
          "Computer Vision",
        ],
      },
    ],
  },
  aiProjects: {
    eyebrow: "AI Projects",
    title: "Intelligent systems & RAG",
    description:
      "Recent focus on LLM integrations, vector search, and production-grade AI pipelines.",
    items: [
      {
        id: "ai-education",
        title: "AI Powered Education Management System",
        period: "Nov 2025 – May 2026",
        description:
          "Full-stack education platform with Admin, Teacher, and Student roles — featuring an AI chatbot with Hybrid RAG, document processing, and automatic exam generation.",
        highlights: [
          "Hybrid RAG with BM25 retrieval & cross-encoder reranker",
          "Ollama integration & Qdrant vector database",
          "BullMQ background jobs with Redis",
          "PDF processing, chunking & semantic search",
          "Role-based authentication & exam generation",
        ],
        technologies: [
          "Next.js",
          "Express.js",
          "MongoDB",
          "Ollama",
          "Qdrant",
          "Redis",
          "BullMQ",
          "TypeScript",
        ],
      },
    ],
  },
  internship: {
    eyebrow: "Internship Journey",
    title: "From Erasmus to enterprise",
    description:
      "A progressive path through four internships — from international collaboration to full-stack enterprise development.",
    steps: [
      {
        company: "Extramus",
        location: "Italy (Erasmus)",
        period: "Jul – Oct 2024",
        focus: "International HR platform with React",
      },
      {
        company: "Innoventures",
        location: "Turkey",
        period: "Nov – Dec 2024",
        focus: "Weather app with React & Chart.js",
      },
      {
        company: "NDM Software",
        location: "Turkey",
        period: "Jun – Aug 2025",
        focus: "Next.js web & React Native mobile",
      },
      {
        company: "Ramsey / Gürmen Teknoloji",
        location: "Turkey",
        period: "Feb – May 2026",
        focus: "ASP.NET Core backend & mobile stack",
      },
    ],
  },
  education: {
    eyebrow: "Education",
    title: "Academic background",
    description:
      "Foundation in computer engineering with strong GPA and continuous practical learning.",
    school: "Karabük University",
    degree: "Bachelor's Degree in Computer Engineering",
    gpa: "3.19 / 4.00",
    period: "Sep 2021 – Jun 2026",
    gpaLabel: "GPA",
    outOf: "out of 4.00",
  },
  certificates: {
    eyebrow: "Certificates",
    title: "Credentials & certifications",
    description: "Formal training and international experience credentials.",
    items: [
      "Erasmus Participation Certificate",
      "English CEFR B2",
      "ASP.NET Core Web API",
      "Full Stack Web Development Bootcamp",
    ],
  },
  github: {
    eyebrow: "Open Source",
    title: "GitHub activity",
    description: "My coding activity and contributions on GitHub.",
    loading: "Loading contributions...",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's connect",
    description:
      "Open to junior full-stack roles, internships, and collaborative projects.",
    labels: {
      email: "Email",
      phone: "Phone",
      location: "Location",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    form: {
      name: "Name:",
      introName: "Hello, I am",
      subject: "subject: ",
      message: "Message:",
      namePlaceholder: "Your name",
      subjectPlaceholder: "Meeting for a project",
      messagePlaceholder: "Tell me about your project or opportunity...",
      send: "Send message",
      sending: "Opening email client...",
      subjectPrefix: "Portfolio Contact from",
    },
  },
  footer: {
    githubAria: "GitHub profile",
    linkedinAria: "LinkedIn profile",
    emailAria: "Send email",
  },
  cv: {
    filename: "Hidayet-Ciftci-CV.txt",
    sections: {
      summary: "PROFESSIONAL SUMMARY",
      education: "EDUCATION",
      experience: "WORK EXPERIENCE",
      projects: "PROJECTS",
      skills: "TECHNICAL SKILLS",
      languages: "LANGUAGES",
      certificates: "CERTIFICATES",
      interests: "INTERESTS",
      technologies: "Technologies",
    },
  },
  personal: {
    title: "Junior Full Stack Developer",
    location: "Manisa, Turkey",
  },
  languages: [
    { name: "Turkish", level: "Native" },
    { name: "English", level: "B2" },
  ],
  interests: [
    "Football",
    "Chess",
    "Traveling",
    "Reading Books",
    "Watching Movies",
  ],
};
