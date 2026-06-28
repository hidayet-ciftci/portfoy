export const personalInfo = {
  name: "Hidayet Çiftçi",
  title: "Junior Full Stack Developer",
  location: "Manisa, Turkey",
  email: "hidayetcft@gmail.com",
  phone: "+90 545 832 53 48",
  linkedin: "https://linkedin.com/in/hidayet-ciftci",
  github: "https://github.com/hidayetciftci",
  githubUsername: "hidayetciftci",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "AI Work", href: "#ai-projects" },
  { label: "Journey", href: "#internship" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const summary = [
  "Computer Engineering graduate with internship experience in enterprise web and mobile application development.",
  "Experienced across frontend and backend using React, Next.js, React Native, ASP.NET Core, PostgreSQL, and Node.js.",
  "Recently focused on AI-powered applications — Hybrid RAG systems, Ollama, Qdrant, Redis, BullMQ, and LLM integrations.",
  "Passionate about building scalable, maintainable, and user-focused software while continuously learning.",
];

export const experience = [
  {
    id: "ramsey",
    role: "Full Stack Developer Intern",
    company: "Ramsey / Gürmen Teknoloji",
    period: "Feb 2026 – May 2026",
    sortDate: "2026-02",
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
    sortDate: "2025-06",
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
    sortDate: "2024-11",
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
    sortDate: "2024-07",
    highlights: [
      "Developed a responsive HR Platform with REST API integration.",
      "Implemented CRUD operations and authentication flows.",
      "Collaborated in an international team and presented demos in English.",
    ],
    technologies: ["React", "JavaScript", "Axios", "REST API", "Git"],
  },
];

export const skillCategories = [
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
];

export const featuredProjects = [
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
    featured: true,
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
    featured: true,
  },
];

export const aiProjects = [
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
    featured: true,
  },
];

export const internshipJourney = [
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
];

export const education = {
  school: "Karabük University",
  degree: "Bachelor's Degree in Computer Engineering",
  gpa: "3.19 / 4.00",
  period: "Sep 2021 – Jun 2026",
};

export const certificates = [
  "Erasmus Participation Certificate",
  "English CEFR B2",
  "ASP.NET Core Web API",
  "Full Stack Web Development Bootcamp",
];

export const languages = [
  { name: "Turkish", level: "Native" },
  { name: "English", level: "B2" },
];

export const interests = [
  "Football",
  "Chess",
  "Traveling",
  "Reading Books",
  "Watching Movies",
];
