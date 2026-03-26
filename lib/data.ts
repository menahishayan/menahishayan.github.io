import rawProjects from "../cms/open_source.json";
import rawTalks from "../cms/talks/index.json";

export type Talk = {
  title: string;
  description: string;
  date: string;
  location: string;
  link: string;
  video?: string;
  embed?: string;
  image?: string;
  isHidden?: boolean;
};

export type TalkDetails = {
  talkTitle: string;
  synopsis: string;
  topics: string[];
  keyPoints: string[];
  projectLink?: string;
  projectInstall?: string;
};

export type OpenSourceProject = {
  title: string;
  content?: string;
  url: string;
  image?: string;
  org: string;
  repo_name: string;
  slug: string;
  stars: number;
  forks: number;
  tech_stack: string[];
  role: string;
  learn_more_label?: string;
};

export type WorkExperience = {
  company: string;
  role: string;
  period: string;
  location: string;
  color: string;
  metrics: { value: string; label: string }[];
  highlights: string[];
  link?: string;
};

export type Achievement = {
  value: string;
  label: string;
  sublabel: string;
};

export type MarqueeItem = {
  text: string;
  isStat?: boolean;
};

// Talks from CMS
const allTalks = rawTalks as Talk[];
export const talks: Talk[] = allTalks.filter((t) => !t.isHidden);
export const featuredTalk: Talk = talks[0]; // React Summit 2025
export const pastTalks: Talk[] = talks.slice(1);

// Open Source from CMS, sorted by stars
export const openSourceProjects: OpenSourceProject[] = (rawProjects as OpenSourceProject[]).sort((a, b) => b.stars - a.stars);

// Work Experience (defined inline since work_exp.json is empty)
export const workExperience: WorkExperience[] = [
  {
    company: "T-Mobile",
    role: "AI Product Manager",
    period: "May 2025 — Aug 2025",
    location: "Bellevue, WA",
    color: "#E91E8C",
    metrics: [
      { value: "63%", label: "Reduction in insurance support escalations QoQ" },
      { value: "+6", label: "NPS & CSAT improvement across 100k+ scores" },
    ],
    highlights: [
      "Led UX research strategy and AI product vision for T-Life — T-Mobile's flagship consumer app serving millions of subscribers",
      "Redesigned Protection 360 insurance experience, driving a 17% friction reduction in key user flows",
      "Architected cross-team CMS pipeline that cut content time-to-launch by 8x",
    ],
    link: "https://t-mobile.com",
  },
  {
    company: "Zenduty",
    role: "Founding Engineer (SWE II)",
    period: "Nov 2021 — Aug 2024",
    location: "Bengaluru, India",
    color: "#00A8FF",
    metrics: [
      { value: "11.2x", label: "ARR growth over 2.5 years" },
      { value: "23%", label: "Boost in sign-up conversions" },
    ],
    highlights: [
      "Joined as first engineering hire; shaped the entire frontend architecture from zero to production scale",
      "Led a 5-person frontend engineering team building React and React Native systems at scale",
      "Increased net profit margin by 20% through targeted technical and product optimizations",
    ],
    link: "https://zenduty.com",
  },
  {
    company: "Next Up",
    role: "Co-Founder & CTO",
    period: "Nov 2019 — Oct 2021",
    location: "Bengaluru, India",
    color: "#7B61FF",
    metrics: [{ value: "660%", label: "ROI on educational SaaS product" }],
    highlights: [
      "Co-founded an ed-tech venture from zero and grew it to a 20+ person company",
      "Built and led engineering and product teams to deliver scalable educational SaaS with 660% ROI",
    ],
  },
];

// Achievements
export const achievements: Achievement[] = [
  {
    value: "#27",
    label: "International Rank",
    sublabel: "Top 1% — UNSW Australia Computer Skills",
  },
  {
    value: "#1",
    label: "National Rank",
    sublabel: "Engineering Project Exhibition — TTIT",
  },
  {
    value: "2021",
    label: "IEEE Publication",
    sublabel: "Bringing Common Devices to the Information Era",
  },
];

// Rich talk details keyed by talk title (for modal + SEO content)
export const talkDetailsMap: Record<string, TalkDetails> = {
  "React Summit 2025": {
    talkTitle: "React Beyond the Browser",
    synopsis:
      "Exploring how React can power experiences far beyond the traditional web browser — from enterprise productivity suites to physical hardware. This talk reframes React as a universal UI language for any surface with a screen.",
    topics: [
      "Office JavaScript APIs — building Word & Outlook plugins with React + OpenAI",
      "Rendering React on Raspberry Pi SPI displays (320×240 LCD)",
      "Framebuffer mirroring, rendering latency, and embedded UI constraints",
      "React inside AR/VR engines and immersive computing environments",
      "LVGL and automotive infotainment system possibilities",
    ],
    keyPoints: [
      "React's component model is environment-agnostic — it adapts to any rendering layer",
      "With the right bridge, React becomes a universal UI language for productivity, hardware, and immersive computing",
      "Developers already have the skills; the only limit is the rendering target",
    ],
  },
  "TheGeekConf Berlin": {
    talkTitle: "The Secret Sauce of Great Design Systems",
    synopsis:
      "What makes a design system truly effective? Not the visual design — the Developer Experience. This talk unpacks the hidden layer that determines whether a design library gets adopted, scaled, or quietly abandoned.",
    topics: [
      "Common DX pitfalls that kill adoption of well-designed libraries",
      "Semantics, consistency, and standardization as trust signals",
      "Primitives vs abstractions — planning flexibility without clutter",
      "The Three W's and an H: purpose-driven design workflow",
      "CLI scaffolding, customization hooks, and better defaults as DX tooling",
      "Documentation, accessibility, and community feedback loops",
    ],
    keyPoints: [
      "A library's ergonomics matter as much as its visual design",
      "Clear semantics and strict consistency drive faster onboarding and lower maintenance",
      "Libraries must plan for extensibility without overwhelming the base API",
      "Tooling and versioned documentation build long-term developer trust",
    ],
  },
  "Talent500 React-n-Roll": {
    talkTitle: "Home Screen Widgets with React Native",
    synopsis:
      "Widgets are one of the most powerful tools for mobile app retention — but React Native doesn't support them out of the box. This talk covers the full journey from limitation to production-ready widget implementation.",
    topics: [
      "Why home screen widgets dramatically improve app engagement and retention",
      "React Native's current limitations with native widget APIs",
      "Bridging native widget functionality via Custom Native Modules",
      "Structuring project code to keep widget logic clean and isolated",
      "Refresh intervals, data syncing strategies, and build configuration challenges",
      "DX considerations: testing, debugging, and hot reload limitations",
    ],
    keyPoints: [
      "Native modules enable full control over platform-specific widget APIs",
      "Clean code separation for widget logic is essential for maintainability",
      "Widgets require platform-specific optimizations and conditional build logic",
      "Good DX practices make widget support scalable and repeatable across teams",
    ],
  },
  "FOSS United": {
    talkTitle: "HomeScript — Command Line Control of Your Home",
    synopsis:
      "HomeScript is a Python-based CLI tool that brings full HomeKit automation to your terminal — no Apple Home app required. This talk covers the motivation, architecture, and the open source journey of making smart home accessible from the command line.",
    topics: [
      "The motivation for CLI-based smart home control over app-based UIs",
      "HomeScript architecture and integration with HomeBridge APIs",
      "EasyMatch: fuzzy accessory name matching for a friction-free CLI UX",
      "RGB lighting control, brightness, hue, and grouped device actions",
      "Automating routines with cron jobs and shell scripts",
      "Packaging as a Python module with a public API layer",
    ],
    keyPoints: [
      "HomeScript enables full smart home control from terminal or automation scripts",
      "Supports RGB lighting, grouped device actions, and a full Python API",
      "Lightweight, open source, and actively maintained",
      "Designed for extensibility — suited for developers, power users, and tinkerers",
    ],
    projectLink: "https://github.com/menahishayan/homescript",
    projectInstall: "pip install homescript",
  },
  "React India 2023": {
    talkTitle: "Home Screen Widgets with React Native",
    synopsis:
      "Bridging JavaScript and native layers to unlock home screen widget support in React Native apps — grounded in both technical implementation and the larger context of user engagement and platform capabilities.",
    topics: [
      "What home screen widgets offer for app engagement and daily retention",
      "Limitations of React Native core for widget rendering",
      "Native Modules and interfacing with iOS and Android widget APIs",
      "Structuring widget code for cross-platform reuse and maintainability",
      "Real-world widget examples: toggles, status indicators, live previews",
      "Debugging challenges, hot reload limitations, and CI considerations",
    ],
    keyPoints: [
      "Widgets are a powerful but underutilized engagement surface in React Native",
      "Implementation requires writing and maintaining native code bridged via JS",
      "Careful architectural decisions keep the codebase clean and modular",
      "Investing in DX abstractions makes widget development repeatable at scale",
    ],
  },
  "React Bangalore": {
    talkTitle: "Production-Grade Monorepos",
    synopsis:
      "Not just the why behind monorepos — but the how. This talk covers the technical nuances, tooling decisions, and team workflows that separate a healthy monorepo from a maintenance nightmare.",
    topics: [
      "Trade-offs between multi-repo and monorepo setups for frontend teams",
      "Yarn Workspaces for dependency management across packages",
      "Structuring shared code: utils, types, and cross-platform modules",
      "Pain points: entangled files, linter configs, TS/JS interop, bundler quirks",
      "Case studies: where monorepos improved DX — and where they didn't",
      "Criteria for when NOT to use a monorepo",
    ],
    keyPoints: [
      "Monorepos improve visibility, tooling, and coordination — when done right",
      "Thoughtful structure and clear ownership boundaries are essential",
      "Developer productivity gains depend on how well edge cases are handled",
      "Not every team benefits from a monorepo — context and scale matter",
    ],
  },
  GeekyAnts: {
    talkTitle: "Monorepos in the Real World",
    synopsis:
      "A deep dive into building monorepos for mixed-platform environments where React and React Native coexist — focusing on lessons learned while scaling codebases across web and mobile teams in production.",
    topics: [
      "Core tooling: Yarn Workspaces, Lerna, and when each helps or hurts",
      "Handling cross-platform modules, shared business logic, and design tokens",
      "Tightly coupled modules across packages — how to untangle them",
      "Shared TypeScript configs, linting setups, and scoped dependencies",
      "Bundler quirks when packaging for web and native simultaneously",
      "Cultural side of monorepos: ownership models and review workflows",
    ],
    keyPoints: [
      "Monorepos are powerful, but bring real coordination overhead",
      "Tooling alone isn't enough — structure, convention, and documentation matter more",
      "Cross-platform packages require careful abstraction and standardization",
      "Effective monorepos scale both code and team culture if executed thoughtfully",
    ],
  },
  "GeekyAnts Podcast": {
    talkTitle: "Scaling Engineering Teams & Cross-Platform Development",
    synopsis:
      "A podcast conversation on scaling engineering teams, building developer-first tools, and the future of cross-platform development in the React ecosystem — drawing from experience as a founding engineer.",
    topics: [
      "Insights from scaling a SaaS engineering team from 0 to production",
      "Building developer-first tools and internal platforms",
      "The future of React and React Native cross-platform convergence",
      "Lessons from leading frontend architecture decisions at Zenduty",
    ],
    keyPoints: [
      "Team culture and tooling investment compound over time",
      "Developer experience is a product decision, not just an engineering one",
      "Cross-platform React Native requires deliberate architectural choices",
    ],
  },
};

// Marquee items for stats banner
export const marqueeItems: MarqueeItem[] = [
  { text: "63% Support Escalation Reduction", isStat: true },
  { text: "React Summit · Amsterdam 2025" },
  { text: "11.2x ARR Growth at Zenduty", isStat: true },
  { text: "TheGeekConf · Berlin 2024" },
  { text: "+6 NPS & CSAT Improvement", isStat: true },
  { text: "React India · Goa 2023" },
  { text: "13+ Conference Talks", isStat: true },
  { text: "FOSS United · Bengaluru 2023" },
  { text: "#27 International Rank · UNSW Top 1%", isStat: true },
  { text: "React Bangalore · 2023" },
  { text: "#1 National Engineering Rank · TTIT", isStat: true },
  { text: "GeekyAnts · Bengaluru 2023" },
  { text: "IEEE Published · 2021", isStat: true },
  { text: "Northeastern University · MS Eng. Management" },
];

// Author links
export const author = {
  name: "Shayan Menahi",
  github: "https://github.com/menahishayan",
  twitter: "https://twitter.com/MenahiShayan",
  linkedin: "https://linkedin.com/in/menahi-shayan",
  gitnation: "https://gitnation.com/contents/react-beyond-the-browser",
  sessionize: "https://sessionize.com/menahishayan/",
  instagram: "https://instagram.com/menahishayan",
  film: "film.menahishayan.com",
  email: "hello@menahishayan.com",
};

// Tweet IDs for testimonials section
export const TWEET_IDS = {
  default: [
    "1733528780470472814",
    "1662553680946814976",
    "1667553441902907392",
    "1733525972526539250",
    "1770667573090332881",
    "1805576752795685143",
    "1661715387032178688",
    "1667723941966934016",
    "1710269029837930508",
  ],
  more: [
    "1828433343865872650",
    "1709897728539734437",
    "1731659530704998598",
    "1711459338106396679",
    "1710592617925562802",
    "1677216200089284609",
    "1662413521123164161",
    "1733426626770452933",
    "1693152558435754189",
    "1770513609153560866",
    "1813906449589780548",
  ],
};
