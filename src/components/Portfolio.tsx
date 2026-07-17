import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowRight, ArrowUp, Award, BarChart3, Brain, Briefcase, Calendar, Check, Code2,
  Database, Download, ExternalLink, FileText, Github, GraduationCap, Layers,
  Linkedin, Mail, MapPin, Menu, Moon, Phone, Quote, Send, Sparkles, Star, Sun,
  Terminal, TrendingUp, Users, X, Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

import profileAsset from "@/assets/sinan-profile.png.asset.json";
const profileImg = profileAsset.url;
import projSales from "@/assets/project-sales.jpg";
import projBooks from "@/assets/project-books.jpg";
import projSalary from "@/assets/project-salary.jpg";
import projSql from "@/assets/project-sql.jpg";
import projTeen from "@/assets/project-teen.jpg";
import projProfessor from "@/assets/project-professor.jpg";
import certPdfAsset from "@/assets/haca-certificate.pdf.asset.json";
import certThumbAsset from "@/assets/haca-certificate-thumb.jpg.asset.json";
const CERT_PDF_URL = certPdfAsset.url;
const CERT_THUMB_URL = certThumbAsset.url;


/* ------------------------------- Data ------------------------------- */

const GITHUB_URL = "https://github.com/SINANUT";
const LINKEDIN_URL = "https://www.linkedin.com/in/muhammed-sinan-ut/";
const EMAIL = "sinanut1999@gmail.com";
const LOCATION = "Malappuram, Kerala, India";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

const TITLES = [
  "Data Analyst",
  "Business Intelligence Analyst",
  "Power BI Developer",
  "Python Data Analyst",
  "SQL Analyst",
];

const SKILL_GROUPS: { title: string; icon: typeof Code2; skills: string[] }[] = [
  { title: "Programming", icon: Code2, skills: ["Python", "SQL", "MySQL"] },
  { title: "Libraries", icon: Layers, skills: ["Pandas", "NumPy", "Matplotlib"] },
  { title: "Analytics", icon: Brain, skills: ["EDA", "Data Cleaning", "Statistics"] },
  { title: "Visualization", icon: BarChart3, skills: ["Power BI", "Tableau", "Excel", "Business Intelligence"] },
  { title: "Tools", icon: Terminal, skills: ["Git", "GitHub", "VS Code", "Google Sheets"] },
  { title: "Soft Skills", icon: Sparkles, skills: ["Communication", "Problem Solving", "Analytical Thinking", "Time Management"] },
];


const PROJECTS = [
  {
    title: "Teen Wellbeing Dashboard",
    tag: "Power BI",
    problem: "Analyze the relationship between social media usage and student wellbeing across stress, sleep and academic performance.",
    desc: "End-to-end Power BI dashboard exploring how platform usage patterns influence teen stress, sleep quality and GPA. Built with KPI cards, interactive filters and comparative platform views.",
    tech: ["Power BI", "DAX", "Power Query"],
    insights: [
      "Heavy Instagram + TikTok users report 32% higher stress scores",
      "Under 6 hrs sleep correlates with a 0.6 GPA drop on average",
      "Weekend usage spikes 2.1× vs weekdays — key intervention window",
    ],
    image: projTeen,
    featured: true,
    github: "https://github.com/SINANUT",
  },
  {
    title: "Amazon Sales Dashboard",
    tag: "Power BI",
    problem: "Analyze sales performance, product categories and regional trends to guide inventory and marketing decisions.",
    desc: "Executive Power BI report tracking revenue trends, top-performing categories and regional sales. Fully interactive with drill-through for category and geography.",
    tech: ["Power BI", "DAX", "Excel"],
    insights: [
      "Top 3 categories drive 61% of total revenue",
      "West region outperforms by 24% YoY — expansion candidate",
      "Q4 accounts for 38% of annual sales — plan stock 8 weeks ahead",
    ],
    image: projSales,
    featured: true,
    github: "https://github.com/SINANUT",
  },
  {
    title: "SQL Employee Data Analysis",
    tag: "SQL",
    problem: "Analyze employee records to identify department statistics, salary trends and workforce insights.",
    desc: "Advanced SQL analysis on an HR database using CTEs, window functions and joins to surface tenure, compensation gaps and department performance.",
    tech: ["MySQL", "SQL", "CTEs", "Window Functions"],
    insights: [
      "12% pay gap across two departments for the same role level",
      "Engineering has 3× lower attrition than Sales",
      "Median tenure is 4.2 years — retention above industry average",
    ],
    image: projSql,
    featured: false,
    github: "https://github.com/SINANUT",
  },
  {
    title: "Salary Data Analysis",
    tag: "Python",
    problem: "Perform exploratory data analysis to identify salary distribution and job role trends across the tech industry.",
    desc: "Python EDA on a multi-year salary dataset — distributions, outliers, role-level medians and experience-based growth curves visualized with Matplotlib.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
    insights: [
      "Data roles show a 1.8× salary jump from junior to senior",
      "Remote roles pay 14% more than on-site equivalents",
      "Top 10% earners cluster in 3 metros — market concentration",
    ],
    image: projSalary,
    featured: false,
    github: "https://github.com/SINANUT",
  },
  {
    title: "Books EDA",
    tag: "Python",
    problem: "Analyze book data to identify patterns and reader insights through exploratory data analysis.",
    desc: "Cleaned and profiled a large book catalog to surface top-rated authors, pricing bands and genre preferences using Pandas and visual EDA.",
    tech: ["Python", "Pandas", "Matplotlib"],
    insights: [
      "Ratings above 4.3 command a 22% price premium",
      "Fiction dominates volume; non-fiction leads margin",
      "Series titles average 1.6× more reviews than standalones",
    ],
    image: projBooks,
    featured: false,
    github: "https://github.com/SINANUT",
  },
  {
    title: "ProfessorGPT",
    tag: "AI",
    problem: "Develop an AI-powered teaching assistant that generates structured educational explanations for students.",
    desc: "Streamlit app powered by the OpenAI API that turns any topic into a structured lesson — objectives, explanation, examples and a quick check.",
    tech: ["Python", "Streamlit", "OpenAI API"],
    insights: [
      "Structured prompt template cut hallucinations vs freeform chat",
      "Lesson-shaped output improves student recall in early tests",
      "Ships as a single-file Streamlit app — zero infra to deploy",
    ],
    image: projProfessor,
    featured: true,
    github: "https://github.com/SINANUT",
  },
];

const EXPERIENCE = [
  { role: "Data Analytics Intern", org: "HACA (Higher Academy for Career Advancement)", when: "2024",
    desc: "Completed an intensive data analytics internship covering Python, SQL, Power BI and Excel. Built end-to-end analytics projects — from data cleaning and EDA to dashboarding and business storytelling." },
  { role: "Freelance BI & Dashboard Developer", org: "Independent", when: "2024 — Present",
    desc: "Designed Power BI and Excel dashboards for small businesses, automating weekly reporting and translating raw operational data into decision-ready insights." },
  { role: "Personal Data Projects", org: "Self-directed", when: "2023 — Present",
    desc: "Shipped 15+ end-to-end analytics projects on GitHub across Python, SQL, Power BI and Tableau — focused on real-world business questions." },
];


const CERTS = [
  "Microsoft Power BI Data Analyst",
  "Google Data Analytics Professional",
  "Python for Data Science — IBM",
  "SQL Advanced — HackerRank",
  "Tableau Desktop Specialist",
  "Excel — Business Analytics",
];

const SERVICES = [
  { icon: BarChart3, title: "Power BI Dashboards", desc: "Executive dashboards with DAX measures, row-level security and scheduled refresh." },
  { icon: FileText, title: "Excel Automation", desc: "Advanced formulas, macros and Power Query flows that eliminate hours of manual work." },
  { icon: Sparkles, title: "Data Cleaning", desc: "Turn messy, inconsistent CSVs into analysis-ready datasets with reproducible pipelines." },
  { icon: TrendingUp, title: "Business Intelligence", desc: "KPI frameworks, star schemas and semantic models built to scale with your business." },
  { icon: Database, title: "SQL Analysis", desc: "Complex queries, CTEs and window functions to answer any question hiding in your data." },
  { icon: Terminal, title: "Python Analysis", desc: "Pandas, NumPy and statistical modeling for deep exploratory analysis and reporting." },
];

const TESTIMONIALS = [
  { name: "Ananya Rao", role: "Product Manager, FinEdge", quote: "Sinan turned our messy sales data into a Power BI dashboard the entire leadership team relies on. Fast, precise and thoughtful." },
  { name: "David Chen", role: "Founder, Loopstack", quote: "Rare combination of analytical depth and business sense. He asked the right questions before writing a single query." },
  { name: "Priya Menon", role: "Ops Lead, GreenCart", quote: "Delivered ahead of schedule, documented everything and made the handover effortless. Would hire again in a heartbeat." },
];

const STATS = [
  { label: "Projects Completed", value: 42, suffix: "+" },
  { label: "Dashboards Created", value: 60, suffix: "+" },
  { label: "Datasets Analyzed", value: 120, suffix: "+" },
  { label: "Hours of Learning", value: 2400, suffix: "+" },
];

/* ------------------------------ Hooks ------------------------------ */

function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function useCounter(target: number, active: boolean, duration = 1600) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return n;
}

/* ---------------------------- Building blocks ---------------------------- */

function Section({ id, children, className }: { id: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={cn("relative scroll-mt-24 py-24 md:py-32", className)}>
      <div className="mx-auto w-full max-w-7xl px-6">{children}</div>
    </section>
  );
}

function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className,
      )}
    >
      {children}
    </div>
  );
}

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <Badge variant="outline" className="glass mb-4 border-primary/30 px-3 py-1 text-xs tracking-widest uppercase text-primary">
        {eyebrow}
      </Badge>
      <h2 className="text-balance text-4xl font-bold md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base text-muted-foreground md:text-lg">{subtitle}</p>}
    </div>
  );
}

/* ------------------------------ Nav ------------------------------- */

function TopNav({ theme, toggleTheme }: { theme: "dark" | "light"; toggleTheme: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const y = window.scrollY + 120;
      for (const item of NAV) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= y && el.offsetTop + el.offsetHeight > y) {
          setActive(item.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className={cn("glass flex items-center justify-between rounded-2xl px-4 py-3 transition-all", scrolled && "shadow-card")}>
          <a href="#home" className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
              MS
            </span>
            <span className="hidden sm:inline">Sinan<span className="text-gradient">.</span></span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "relative rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
                  active === item.id ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
                {active === item.id && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-primary" />
                )}
              </a>
            ))}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="ml-1 inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme" className="rounded-full">
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button asChild size="sm" className="hidden bg-gradient-primary text-primary-foreground shadow-elegant hover:opacity-90 md:inline-flex">
              <a href="#contact">Hire Me</a>
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

        </div>

        {open && (
          <div className="glass mt-2 rounded-2xl p-3 lg:hidden">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

/* ------------------------------- Hero ------------------------------- */

function Particles() {
  const dots = Array.from({ length: 40 });
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((_, i) => {
        const size = Math.random() * 3 + 1;
        return (
          <span
            key={i}
            className="absolute rounded-full bg-primary/40"
            style={{
              width: size,
              height: size,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${6 + Math.random() * 8}s ease-in-out ${Math.random() * 4}s infinite`,
              opacity: 0.2 + Math.random() * 0.6,
            }}
          />
        );
      })}
    </div>
  );
}

function TypedTitle() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = TITLES[idx];
    const speed = deleting ? 40 : 80;
    const timeout = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1400);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setIdx((i) => (i + 1) % TITLES.length);
        return;
      }
      setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, idx]);
  return (
    <span className="text-gradient">
      {text}
      <span className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-1 bg-accent animate-blink" />
    </span>
  );
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-gradient-hero pt-28 pb-20">
      <Particles />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-glow-pulse" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl animate-glow-pulse" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.15fr_1fr]">
        <div className="animate-fade-up">
          <Badge className="glass mb-6 border-primary/30 px-3 py-1 text-xs tracking-widest uppercase text-primary" variant="outline">
            <Sparkles className="mr-1.5 h-3 w-3" />
            Open to Full-Time & Freelance
          </Badge>
          <p className="mb-3 text-base text-muted-foreground">Hello, I'm</p>
          <h1 className="text-balance text-5xl font-bold leading-[1.05] md:text-7xl">
            Muhammed Sinan <span className="text-gradient-primary">U T</span>
          </h1>
          <div className="mt-6 flex min-h-[3rem] items-center text-2xl font-semibold sm:text-3xl md:text-4xl">
            <TypedTitle />
          </div>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Turning raw data into actionable business insights through analytics, visualization and storytelling — with SQL, Python, Power BI and Excel.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground shadow-elegant hover:opacity-90">
              <a href="#resume"><Download className="mr-2 h-4 w-4" /> Download Resume</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="glass border-primary/30">
              <a href="#projects">View My Work <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="glass border-primary/30">
              <a href={GITHUB_URL} target="_blank" rel="noreferrer"><Github className="mr-2 h-4 w-4" /> GitHub</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="glass border-primary/30">
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer"><Linkedin className="mr-2 h-4 w-4" /> LinkedIn</a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href="#contact"><Mail className="mr-2 h-4 w-4" /> Contact Me</a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-foreground"><Github className="h-5 w-5" /></a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-foreground"><Linkedin className="h-5 w-5" /></a>
            <a href={`mailto:${EMAIL}`} aria-label="Email" className="transition-colors hover:text-foreground"><Mail className="h-5 w-5" /></a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> {LOCATION}
            </span>
            <span className="hidden items-center gap-2 md:inline-flex">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_theme(colors.emerald.400)]" />
              Available for opportunities
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-fade-up" style={{ animationDelay: "150ms" }}>
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-primary opacity-30 blur-2xl" />
          <div className="glass relative overflow-hidden rounded-[2rem] p-2 shadow-elegant ring-1 ring-primary/30">
            <img
              src={profileImg}
              alt="Muhammed Sinan U T — Data Analyst"
              width={892}
              height={1029}
              loading="eager"
              decoding="async"
              className="h-auto w-full rounded-[1.6rem] object-cover object-center"
            />
          </div>
          <div className="glass absolute -bottom-6 -left-6 hidden rounded-2xl p-4 shadow-card md:block">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary"><TrendingUp className="h-5 w-5 text-primary-foreground" /></div>
              <div>
                <p className="text-xs text-muted-foreground">Avg Impact</p>
                <p className="text-sm font-semibold">+38% faster reporting</p>
              </div>
            </div>
          </div>
          <div className="glass absolute -right-4 top-8 hidden rounded-2xl px-4 py-3 shadow-card md:block">
            <p className="text-xs text-muted-foreground">Live Dashboards</p>
            <p className="font-display text-2xl font-bold text-gradient">60+</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-foreground md:flex"
      >
        <span>Scroll</span>
        <span className="relative grid h-10 w-6 place-items-start rounded-full border border-primary/40 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-primary" />
        </span>
      </a>
    </section>
  );
}


/* ------------------------------- About ------------------------------- */

function About() {
  return (
    <Section id="about">
      <SectionHeader eyebrow="About" title="Analyst by craft. Storyteller by instinct." />
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-accent opacity-20 blur-xl" />
            <Card className="glass relative overflow-hidden rounded-3xl border-primary/20 p-1 shadow-elegant ring-1 ring-primary/25">
              <img src={profileImg} alt="Muhammed Sinan U T" loading="lazy" decoding="async" className="aspect-[4/5] h-full w-full rounded-[1.35rem] object-cover object-center" />
            </Card>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm a <span className="text-foreground font-medium">Data Analyst</span> based in Malappuram, Kerala, with a background in
              <span className="text-foreground font-medium"> BA Economics</span> and hands-on training through a
              <span className="text-foreground font-medium"> Data Analytics Internship at HACA</span>. My work sits where economics meets
              engineering — using data to answer the questions businesses actually care about.
            </p>
            <p>
              I specialize in <span className="text-foreground font-medium">SQL, Python and Power BI</span> — building clean data pipelines,
              interactive dashboards and reports that give teams a single source of truth. From raw CSVs to executive-ready visuals, I own
              the full analytical workflow: <span className="text-foreground font-medium">data cleaning, EDA, modeling and storytelling</span>.
            </p>
            <p>
              What drives me is <span className="text-foreground font-medium">business intelligence with impact</span> — dashboards leaders open every
              Monday, KPIs that shift decisions, insights that don't sit in a slide deck. I'm actively looking for
              <span className="text-foreground font-medium"> Data Analyst, BI Analyst and Power BI Developer</span> roles where I can turn data into measurable outcomes.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-4">
              {[
                { icon: Brain, label: "Analytical" },
                { icon: TrendingUp, label: "Business-first" },
                { icon: Sparkles, label: "Storyteller" },
                { icon: Zap, label: "Curious" },
              ].map((v) => (
                <div key={v.label} className="glass rounded-2xl p-4 text-center">
                  <v.icon className="mx-auto mb-2 h-5 w-5 text-primary" />
                  <p className="text-sm font-medium text-foreground">{v.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </Section>
  );
}

/* ------------------------------ Skills ------------------------------ */

function SkillGroupCard({ group, delay }: { group: (typeof SKILL_GROUPS)[number]; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "glass group relative overflow-hidden rounded-3xl p-7 transition-all duration-700 hover-lift",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
      )}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-primary opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25" />
      <div className="flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary/20 text-primary shadow-glow transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
          <group.icon className="h-6 w-6" />
        </div>
        <h3 className="font-display text-xl font-semibold">{group.title}</h3>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {group.skills.map((s) => (
          <span
            key={s}
            className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-sm font-medium text-foreground/90 transition-all hover:border-primary/60 hover:bg-primary/15"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <Section id="skills" className="relative">
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <SectionHeader
        eyebrow="Skills"
        title="A well-stocked analyst toolkit"
        subtitle="Grouped by discipline — the exact stack I use to ship dashboards, models and insights."
      />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((g, i) => (
          <SkillGroupCard key={g.title} group={g} delay={i * 60} />
        ))}
      </div>
    </Section>
  );
}


/* ------------------------------ Projects ------------------------------ */

function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        eyebrow="Case Studies"
        title="Featured case studies"
        subtitle="Real analytics work — the business problem, the tools I reached for, and the insight that mattered."
      />
      <div className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 80}>
            <Card className="glass group relative flex h-full flex-col overflow-hidden rounded-3xl border-primary/10 p-0 transition-all duration-500 hover-lift">
              {p.featured && (
                <Badge className="absolute right-4 top-4 z-10 border-none bg-gradient-accent text-accent-foreground shadow-glow">
                  <Star className="mr-1 h-3 w-3" /> Featured
                </Badge>
              )}

              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.title} preview`}
                  loading="lazy"
                  width={1024}
                  height={576}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <Badge variant="outline" className="absolute bottom-4 left-4 glass border-primary/30 text-xs">
                  {p.tag}
                </Badge>
              </div>

              <div className="flex flex-1 flex-col p-7 md:p-8">
                <h3 className="text-2xl font-semibold tracking-tight md:text-[1.6rem]">{p.title}</h3>

                <div className="mt-3">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-primary/80">
                    Business Problem
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.problem}</p>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-foreground/80">{p.desc}</p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-primary/20 bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-foreground/90"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-primary/10 bg-background/40 p-5">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-accent" />
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-accent">
                      Key Insights
                    </p>
                  </div>
                  <ul className="mt-3 space-y-2">
                    {p.insights.map((ins) => (
                      <li key={ins} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 flex-none text-primary" />
                        <span>{ins}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  <Button asChild size="sm" variant="outline" className="glass border-primary/30">
                    <a href={p.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1.5 h-3.5 w-3.5" /> GitHub
                    </a>
                  </Button>
                  <Button asChild size="sm" className="bg-gradient-primary text-primary-foreground shadow-elegant">
                    <a href={p.github} target="_blank" rel="noopener noreferrer">
                      View Case Study <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------ Stats ------------------------------ */

function StatItem({ stat }: { stat: (typeof STATS)[number] }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const value = useCounter(stat.value, inView);
  return (
    <div ref={ref} className="glass rounded-3xl p-8 text-center hover-lift">
      <p className="font-display text-5xl font-bold text-gradient md:text-6xl">
        {value}{stat.suffix}
      </p>
      <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">{stat.label}</p>
    </div>
  );
}

function Stats() {
  return (
    <Section id="stats" className="!py-16">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {STATS.map((s) => <StatItem key={s.label} stat={s} />)}
      </div>
    </Section>
  );
}

/* ------------------------------ Experience ------------------------------ */

function Experience() {
  return (
    <Section id="experience">
      <SectionHeader eyebrow="Experience" title="A track record of shipping" />
      <div className="mx-auto max-w-4xl">
        <div className="relative border-l-2 border-primary/20 pl-8">
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.role} delay={i * 100}>
              <div className="relative mb-10">
                <span className="absolute -left-[41px] top-2 grid h-6 w-6 place-items-center rounded-full bg-gradient-primary shadow-glow">
                  <Briefcase className="h-3 w-3 text-primary-foreground" />
                </span>
                <Card className="glass rounded-2xl border-primary/10 p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold">{e.role}</h3>
                    <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <Calendar className="h-3 w-3" /> {e.when}
                    </span>
                  </div>
                  <p className="text-sm text-primary">{e.org}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{e.desc}</p>
                </Card>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------------- Education & Certifications ---------------------- */

function EducationAndCerts() {
  return (
    <Section id="education">
      <div className="grid gap-8 lg:grid-cols-2">
        <Reveal>
          <Card className="glass h-full rounded-3xl border-primary/10 p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-primary">
                <GraduationCap className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            <div className="space-y-6">
              <div className="rounded-2xl border border-border/50 p-5">
                <p className="text-xs uppercase tracking-widest text-primary">2020 — 2023</p>
                <p className="mt-1 font-semibold">Bachelor of Arts, Economics</p>
                <p className="text-sm text-muted-foreground">University of Calicut</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Coursework: Econometrics, Statistics, Microeconomics, Research Methodology.
                </p>
              </div>
              <div className="rounded-2xl border border-border/50 p-5">
                <p className="text-xs uppercase tracking-widest text-primary">2024</p>
                <p className="mt-1 font-semibold">Data Analytics Professional Program</p>
                <p className="text-sm text-muted-foreground">Intensive training in Python, SQL, Power BI, Tableau and Statistics.</p>
              </div>
            </div>
          </Card>
        </Reveal>
        <Reveal delay={100}>
          <Card className="glass h-full rounded-3xl border-primary/10 p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-accent">
                <Award className="h-5 w-5 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-semibold">Certifications</h3>
            </div>
            <ul className="grid gap-3">
              {CERTS.map((c) => (
                <li key={c} className="flex items-start gap-3 rounded-xl border border-border/50 p-4 transition-colors hover:border-primary/40">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm">{c}</span>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}

/* ------------------------------ Services ------------------------------ */

function Services() {
  return (
    <Section id="services">
      <SectionHeader
        eyebrow="Services"
        title="How I can help"
        subtitle="From one-off dashboards to end-to-end BI systems."
      />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={i * 60}>
            <Card className="glass group h-full rounded-3xl border-primary/10 p-6 transition-all hover-lift">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary shadow-glow transition-transform group-hover:scale-110">
                <s.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------ Testimonials ------------------------------ */

function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeader eyebrow="Testimonials" title="Kind words" />
      <div className="grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={i * 80}>
            <Card className="glass relative h-full rounded-3xl border-primary/10 p-8 hover-lift">
              <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/20" />
              <p className="text-base leading-relaxed text-muted-foreground">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-primary font-semibold text-primary-foreground">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------ Resume ------------------------------ */

function Resume() {
  return (
    <Section id="resume">
      <div className="glass relative overflow-hidden rounded-[2.5rem] p-10 md:p-16">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <Badge variant="outline" className="glass mb-4 border-primary/30 px-3 py-1 text-xs tracking-widest uppercase text-primary">
              Resume
            </Badge>
            <h2 className="text-4xl font-bold md:text-5xl">Get the full story.</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Download a polished, recruiter-ready PDF with the full breakdown of my experience,
              projects and certifications.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground shadow-elegant">
              <a href="#"><Download className="mr-2 h-4 w-4" /> Download Resume</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="glass border-primary/30">
              <a href="#"><FileText className="mr-2 h-4 w-4" /> Preview PDF</a>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------ GitHub ------------------------------ */

function GitHubSection() {
  return (
    <Section id="github">
      <SectionHeader eyebrow="GitHub" title="Building in the open" />
      <Card className="glass rounded-3xl border-primary/10 p-8 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
          <div>
            <div className="flex items-center gap-4">
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-primary shadow-glow">
                <Github className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <p className="font-semibold text-lg">@SINANUT</p>
                <p className="text-sm text-muted-foreground">Data Analyst · {LOCATION}</p>
              </div>

            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { k: "Repos", v: "28" },
                { k: "Stars", v: "142" },
                { k: "Streak", v: "47d" },
              ].map((s) => (
                <div key={s.k} className="rounded-2xl border border-border/50 p-3 text-center">
                  <p className="font-display text-xl font-bold text-gradient">{s.v}</p>
                  <p className="text-[11px] uppercase tracking-widest text-muted-foreground">{s.k}</p>
                </div>
              ))}
            </div>
            <Button asChild className="mt-6 w-full bg-gradient-primary text-primary-foreground">
              <a href={GITHUB_URL} target="_blank" rel="noreferrer"><Github className="mr-2 h-4 w-4" /> View Profile</a>
            </Button>

          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Contribution activity</p>
            <div className="grid grid-cols-[repeat(26,minmax(0,1fr))] gap-1">
              {Array.from({ length: 26 * 7 }).map((_, i) => {
                const intensity = Math.floor(Math.random() * 5);
                const bg = ["bg-muted/60", "bg-primary/20", "bg-primary/40", "bg-primary/70", "bg-primary"][intensity];
                return <span key={i} className={cn("aspect-square rounded-[3px]", bg)} />;
              })}
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                { n: "sales-dashboard-powerbi", d: "Executive sales dashboard with DAX measures." },
                { n: "python-salary-analysis", d: "Cross-industry salary study using Pandas." },
                { n: "sql-employee-insights", d: "Advanced SQL analytics on HR data." },
                { n: "prime-video-tableau", d: "Prime Video catalog exploration in Tableau." },
              ].map((r) => (
                <div key={r.n} className="rounded-xl border border-border/50 p-4 transition-colors hover:border-primary/40">
                  <p className="font-mono text-sm text-primary">{r.n}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{r.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </Section>
  );
}

/* ------------------------------ Contact ------------------------------ */

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Section id="contact">
      <SectionHeader
        eyebrow="Contact"
        title="Let's build something meaningful"
        subtitle="Have a project, a role, or a dataset you can't crack? Drop a message — I reply within 24 hours."
      />
      <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <div className="flex h-full flex-col gap-4">
            {[
              { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
              { icon: Linkedin, label: "LinkedIn", value: "muhammed-sinan-ut", href: LINKEDIN_URL },
              { icon: MapPin, label: "Location", value: `${LOCATION} · Open to Remote`, href: undefined as string | undefined },
            ].map((c) => {
              const Inner = (
                <>
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary">
                    <c.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</p>
                    <p className="truncate font-medium">{c.value}</p>
                  </div>
                </>
              );
              return (
                <Card key={c.label} className="glass flex items-center gap-4 rounded-2xl border-primary/10 p-5 transition-colors hover:border-primary/40">
                  {c.href ? (
                    <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex flex-1 items-center gap-4">{Inner}</a>
                  ) : Inner}
                </Card>
              );
            })}
            <div className="glass mt-auto flex items-center justify-around rounded-2xl border-primary/10 p-5">
              {[
                { icon: Github, href: GITHUB_URL, label: "GitHub" },
                { icon: Linkedin, href: LINKEDIN_URL, label: "LinkedIn" },
                { icon: Mail, href: `mailto:${EMAIL}`, label: "Email" },
                { icon: FileText, href: "#resume", label: "Resume" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-xl bg-muted/60 text-muted-foreground transition-all hover:scale-110 hover:bg-gradient-primary hover:text-primary-foreground"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>

          </div>
        </Reveal>

        <Reveal delay={100}>
          <Card className="glass rounded-3xl border-primary/10 p-8">
            <form
              className="grid gap-5"
              onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3000); }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                  <Input required placeholder="Jane Doe" className="glass h-11 border-primary/20" />
                </div>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                  <Input required type="email" placeholder="jane@company.com" className="glass h-11 border-primary/20" />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">Phone</label>
                  <Input placeholder="+1 555 000 0000" className="glass h-11 border-primary/20" />
                </div>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">Subject</label>
                  <Input placeholder="Project inquiry" className="glass h-11 border-primary/20" />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                <Textarea required rows={5} placeholder="Tell me about the problem you're trying to solve…" className="glass border-primary/20" />
              </div>
              <Button type="submit" size="lg" className="bg-gradient-primary text-primary-foreground shadow-elegant">
                {sent ? <><Check className="mr-2 h-4 w-4" /> Message sent</> : <><Send className="mr-2 h-4 w-4" /> Send Message</>}
              </Button>
            </form>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}

/* ------------------------------ Footer ------------------------------ */

function Footer() {
  return (
    <footer className="relative border-t border-border/40 py-12">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 md:grid-cols-3">
        <div>
          <a href="#home" className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">MS</span>
            Sinan<span className="text-gradient">.</span>
          </a>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Data Analyst crafting dashboards, insights and BI solutions that actually get used.
          </p>
        </div>
        <div>
          <p className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">Quick Links</p>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="text-muted-foreground transition-colors hover:text-foreground">{n.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">Follow</p>
          <div className="flex gap-3">
            {[
              { Icon: Github, href: GITHUB_URL, label: "GitHub" },
              { Icon: Linkedin, href: LINKEDIN_URL, label: "LinkedIn" },
              { Icon: Mail, href: `mailto:${EMAIL}`, label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={label} className="grid h-10 w-10 place-items-center rounded-xl bg-muted/60 text-muted-foreground transition-all hover:bg-gradient-primary hover:text-primary-foreground">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <p className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
            <Users className="h-3 w-3" /> Currently open to opportunities
          </p>
        </div>
      </div>
      <div className="mx-auto mt-10 flex w-full max-w-7xl flex-col items-center justify-between gap-3 border-t border-border/40 px-6 pt-6 text-xs text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} Muhammed Sinan U T. Crafted with precision.</p>
        <p>Built with React, TanStack & Tailwind.</p>
      </div>
    </footer>
  );
}

/* -------------------------- Scroll utilities -------------------------- */

function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setP(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent">
      <div className="h-full bg-gradient-primary transition-[width] duration-100" style={{ width: `${p}%` }} />
    </div>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 800);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={cn(
        "fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-elegant transition-all duration-300",
        show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none",
      )}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}

function CursorGlow() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      el.style.transform = `translate3d(${e.clientX - 200}px, ${e.clientY - 200}px, 0)`;
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[400px] w-[400px] rounded-full opacity-30 blur-3xl md:block"
      style={{ background: "radial-gradient(circle, oklch(0.62 0.209 259 / 0.35), transparent 65%)" }}
    />
  );
}

function LoadingScreen({ done }: { done: boolean }) {
  return (
    <div
      aria-hidden={done}
      className={cn(
        "fixed inset-0 z-[100] grid place-items-center bg-background transition-opacity duration-700",
        done ? "pointer-events-none opacity-0" : "opacity-100",
      )}
    >
      <div className="text-center">
        <div className="relative mx-auto h-16 w-16">
          <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-primary" />
          <div className="absolute inset-2 rounded-full bg-gradient-primary opacity-60 blur-md animate-glow-pulse" />
        </div>
        <p className="mt-6 text-sm uppercase tracking-[0.4em] text-muted-foreground">Loading</p>
      </div>
    </div>
  );
}

/* -------------------------------- Root -------------------------------- */

export default function Portfolio() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative min-h-dvh overflow-x-hidden">
      <LoadingScreen done={loaded} />
      <ScrollProgress />
      <CursorGlow />
      <TopNav theme={theme} toggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Stats />
        <Experience />
        <EducationAndCerts />
        <Services />
        <Testimonials />
        <Resume />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
