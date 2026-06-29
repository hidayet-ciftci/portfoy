import type { Dictionary } from "../types";

export const tr: Dictionary = {
  meta: {
    title: "Hidayet Çiftçi | Junior Full Stack Developer",
    description:
      "Hidayet Çiftçi'nin portföyü — React, Next.js, ASP.NET Core ve Hybrid RAG ile yapay zeka destekli uygulamalarda uzmanlaşan Junior Full Stack Developer.",
  },
  nav: {
    links: [
      { label: "Hakkımda", href: "#about" },
      { label: "Deneyim", href: "#experience" },
      { label: "Yetenekler", href: "#skills" },
      { label: "Projeler", href: "#projects" },
      { label: "Yapay Zeka", href: "#ai-projects" },
      { label: "Staj Yolculuğu", href: "#internship" },
      { label: "Eğitim", href: "#education" },
      { label: "İletişim", href: "#contact" },
    ],
    getInTouch: "İletişime geç",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
    mainNav: "Ana navigasyon",
  },
  hero: {
    greeting: "Merhaba, ben",
    tagline:
      "React ve Next.js ön yüzlerinden ASP.NET Core arka uçlarına ve Hybrid RAG ile yapay zeka destekli sistemlere kadar ölçeklenebilir web ve mobil uygulamalar geliştiriyorum.",
    viewWork: "Projelerimi gör",
    downloadCv: "CV İndir",
    scrollToAbout: "Hakkımda bölümüne kaydır",
    githubLabel: "GitHub",
    linkedinLabel: "LinkedIn",
    githubAria: "GitHub profilini ziyaret et",
    linkedinAria: "LinkedIn profilini ziyaret et",
  },
  about: {
    eyebrow: "Hakkımda",
    title: "Baştan sona düşünülmüş yazılımlar geliştiriyorum",
    description:
      "Ön yüz, arka uç ve yapay zeka destekli sistemlerde staj deneyimine sahip Bilgisayar Mühendisliği mezunu.",
    summary: [
      "Kurumsal web ve mobil uygulama geliştirme alanında staj deneyimine sahip Bilgisayar Mühendisliği mezunuyum.",
      "React, Next.js, React Native, ASP.NET Core, PostgreSQL ve Node.js kullanarak hem ön yüz hem arka uç geliştirme deneyimim bulunuyor.",
      "Son dönemde Hybrid RAG sistemleri, Ollama, Qdrant, Redis, BullMQ ve LLM entegrasyonları içeren yapay zeka destekli uygulamalara odaklandım.",
      "Ölçeklenebilir, sürdürülebilir ve kullanıcı odaklı yazılımlar geliştirmeyi seviyor, sürekli yeni teknolojiler öğreniyorum.",
    ],
    tags: ["React", "Next.js", "ASP.NET Core", "PostgreSQL", "Hybrid RAG"],
    currently: "Şu an",
    education: "Eğitim",
    languages: "Diller",
    interests: "İlgi Alanları",
    internshipsCompleted: "Tamamlanan staj",
    gpaLabel: "GANO",
  },
  experience: {
    eyebrow: "Deneyim",
    title: "Profesyonel yolculuğum",
    description:
      "Kurumsal web, mobil ve full-stack geliştirme alanındaki staj deneyimlerim.",
    items: [
      {
        id: "ramsey",
        role: "Full Stack Developer Uzun Dönem Stajyeri",
        company: "Gürmen Teknoloji / Ramsey",
        period: "Şub 2026 – May 2026",
        highlights: [
          "ASP.NET Core ve PostgreSQL ile Entity Framework Core kullanarak arka uç servisleri geliştirdim.",
          "N-Katmanlı Mimari, Repository Pattern, JWT kimlik doğrulama ve rol tabanlı yetkilendirme uyguladım.",
          "RabbitMQ, Hangfire, FluentValidation ve Serilog loglama entegre ettim.",
          "Redux Toolkit ve REST API entegrasyonu ile React Native (Expo) ekranları geliştirdim.",
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
        role: "Frontend Developer Stajyeri",
        company: "NDM Software",
        period: "Haz 2025 – Ağu 2025",
        highlights: [
          "Next.js, React ve yeniden kullanılabilir UI bileşenleri ile duyarlı web arayüzleri geliştirdim.",
          "Arka uç REST API'lerini entegre ettim ve kullanıcı odaklı sayfalar oluşturdum.",
          "React Native (Expo) ile mobil ekranlar ve dosya tabanlı yönlendirme geliştirdim.",
          "Git, GitHub, Jira ve Postman ile ekip çalışması yaptım.",
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
        role: "Frontend Developer Stajyeri",
        company: "Innoventures",
        period: "Kas 2024 – Ara 2024",
        highlights: [
          "React ve TypeScript ile Hava Durumu Uygulaması geliştirdim.",
          "Tailwind CSS, TanStack Query ve Context API ile duyarlı UI oluşturdum.",
          "Uluslararasılaştırma (i18n) ve Chart.js görselleştirmeleri uyguladım.",
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
        role: "Frontend Developer Stajyeri",
        company: "Extramus — İtalya (Erasmus)",
        period: "Tem 2024 – Eki 2024",
        highlights: [
          "REST API entegrasyonlu duyarlı İK Platformu geliştirdim.",
          "CRUD işlemleri ve kimlik doğrulama akışları uyguladım.",
          "Uluslararası bir ekipte çalıştım ve İngilizce demo sunumları yaptım.",
        ],
        technologies: ["React", "JavaScript", "Axios", "REST API", "Git"],
      },
    ],
  },
  skills: {
    eyebrow: "Teknik Yetenekler",
    title: "Kullandığım teknolojiler",
    description:
      "Alanlara göre gruplandırılmış — ön yüz framework'lerinden yapay zeka altyapısına.",
    disclaimer:
      "Yeterlilik seviyeleri staj ve kişisel proje deneyimlerimi yansıtır — abartılı bir öz değerlendirme değildir.",
    categories: [
      {
        title: "Ön Yüz",
        skills: [
          { name: "React", level: 88 },
          { name: "Next.js", level: 85 },
          { name: "React Native", level: 82 },
          { name: "TypeScript", level: 85 },
          { name: "Tailwind CSS", level: 90 },
        ],
      },
      {
        title: "Arka Uç",
        skills: [
          { name: "ASP.NET Core", level: 80 },
          { name: "Node.js / Express", level: 78 },
          { name: "REST API", level: 88 },
          { name: "JWT Auth", level: 82 },
          { name: "C#", level: 78 },
        ],
      },
      {
        title: "Veritabanları",
        skills: [
          { name: "PostgreSQL", level: 80 },
          { name: "MongoDB", level: 75 },
          { name: "Qdrant", level: 72 },
        ],
      },
      {
        title: "Yapay Zeka",
        skills: [
          { name: "Hybrid RAG", level: 78 },
          { name: "Ollama / LLM", level: 75 },
          { name: "Redis / BullMQ", level: 72 },
          { name: "Embeddings", level: 74 },
        ],
      },
      {
        title: "Araçlar & Mimari",
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
    eyebrow: "Öne Çıkan Projeler",
    title: "Seçilmiş çalışmalar",
    description:
      "Kurumsal sistemler, gömülü savunma teknolojisi ve full-stack uygulamalar.",
    items: [
      {
        id: "vehicle-service",
        title: "Kurumsal Araç Servis Yönetim Sistemi",
        period: "Nis 2026 – May 2026",
        description:
          "Ramsey / Gürmen Teknoloji stajında geliştirilen full-stack kurumsal sistem — araç yönetimi, servis kayıtları ve mobil uygulama.",
        highlights: [
          "Kullanıcı yetkilendirme ve rol yönetimi",
          "Araç ve servis kaydı yönetimi",
          "ASP.NET Core arka uç API",
          "React Native mobil uygulama",
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
        title: "Teknofest Hava Savunma Sistemi",
        period: "Şub 2025 – Ağu 2025",
        description:
          "Gerçek zamanlı nesne algılama, gömülü sistem entegrasyonu ve Raspberry Pi üzerinde bilgisayarlı görü ile otonom savunma projesi.",
        highlights: [
          "Python ve OpenCV ile gerçek zamanlı nesne algılama",
          "Raspberry Pi ve Arduino entegrasyonu",
          "Otonom ve manuel hedefleme modları",
          "Servo motor kontrolü ve gömülü sistem geliştirme",
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
    eyebrow: "Yapay Zeka Projeleri",
    title: "Akıllı sistemler & RAG",
    description:
      "LLM entegrasyonları, vektör arama ve production-grade yapay zeka pipeline'ları üzerine son odak noktam.",
    items: [
      {
        id: "ai-education",
        title: "Yapay Zeka Destekli Eğitim Yönetim Sistemi",
        period: "Kas 2025 – May 2026",
        description:
          "Admin, Öğretmen ve Öğrenci rollerine sahip full-stack eğitim platformu — Hybrid RAG destekli yapay zeka chatbot, doküman işleme ve otomatik sınav oluşturma.",
        highlights: [
          "BM25 retrieval ve cross-encoder reranker ile Hybrid RAG",
          "Ollama entegrasyonu ve Qdrant vektör veritabanı",
          "Redis ile BullMQ arka plan işleri",
          "PDF işleme, chunking ve semantik arama",
          "Rol tabanlı kimlik doğrulama ve sınav oluşturma",
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
    eyebrow: "Staj Yolculuğu",
    title: "Erasmus'tan kurumsal geliştirmeye",
    description:
      "Dört stajlık süreçte ilerleyen bir yol — uluslararası iş birliğinden kurumsal full-stack geliştirmeye.",
    steps: [
      {
        company: "Extramus",
        location: "İtalya (Erasmus)",
        period: "Tem – Eki 2024",
        focus: "React ile uluslararası İK platformu",
      },
      {
        company: "Innoventures",
        location: "Türkiye",
        period: "Kas – Ara 2024",
        focus: "React ve Chart.js ile hava durumu uygulaması",
      },
      {
        company: "NDM Software",
        location: "Türkiye",
        period: "Haz – Ağu 2025",
        focus: "Next.js web ve React Native mobil",
      },
      {
        company: "Ramsey / Gürmen Teknoloji",
        location: "Türkiye",
        period: "Şub – May 2026",
        focus: "ASP.NET Core arka uç ve mobil stack",
      },
    ],
  },
  education: {
    eyebrow: "Eğitim",
    title: "Akademik geçmiş",
    description:
      "Bilgisayar mühendisliğinde güçlü GANO ve sürekli pratik öğrenme.",
    school: "Karabük Üniversitesi",
    degree: "Bilgisayar Mühendisliği Lisans Derecesi",
    gpa: "3.19 / 4.00",
    period: "Eyl 2021 – Haz 2026",
    gpaLabel: "GANO",
    outOf: "4.00 üzerinden",
  },
  certificates: {
    eyebrow: "Sertifikalar",
    title: "Belgeler & sertifikalar",
    description: "Resmi eğitimler ve uluslararası deneyim belgeleri.",
    items: [
      "Erasmus Katılım Sertifikası",
      "İngilizce CEFR B2",
      "ASP.NET Core Web API",
      "Full Stack Web Development Bootcamp",
    ],
  },
  github: {
    eyebrow: "Açık Kaynak",
    title: "GitHub aktivitesi",
    description: "GitHub'daki kodlama aktivitem ve katkılarım.",
    loading: "Katkılar yükleniyor...",
  },
  contact: {
    eyebrow: "İletişim",
    title: "Hadi konuşalım",
    description:
      "Junior full-stack pozisyonları, stajlar ve iş birliği projelerine açığım.",
    labels: {
      email: "E-posta",
      phone: "Telefon",
      location: "Konum",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    form: {
      name: "Ad:",
      subject: "Konu: ",
      introName: "Selamlar, Ben",
      message: "Mesaj: ",
      namePlaceholder: "Adınız",
      subjectPlaceholder: "Tanışma Fırsatı",
      messagePlaceholder: "Projeniz veya fırsatınız hakkında bilgi verin...",
      send: "Mesaj gönder",
      sending: "E-posta istemcisi açılıyor...",
      subjectPrefix: "Portföy İletişim —",
    },
  },
  footer: {
    githubAria: "GitHub profili",
    linkedinAria: "LinkedIn profili",
    emailAria: "E-posta gönder",
  },
  cv: {
    filename: "Hidayet-Ciftci-CV.txt",
    sections: {
      summary: "PROFESYONEL ÖZET",
      education: "EĞİTİM",
      experience: "İŞ DENEYİMİ",
      projects: "PROJELER",
      skills: "TEKNİK YETENEKLER",
      languages: "DİLLER",
      certificates: "SERTİFİKALAR",
      interests: "İLGİ ALANLARI",
      technologies: "Teknolojiler",
    },
  },
  personal: {
    title: "Junior Full Stack Developer",
    location: "Manisa, Türkiye",
  },
  languages: [
    { name: "Türkçe", level: "Ana Dil" },
    { name: "İngilizce", level: "B2" },
  ],
  interests: ["Futbol", "Satranç", "Seyahat", "Kitap Okuma", "Film İzleme"],
};
