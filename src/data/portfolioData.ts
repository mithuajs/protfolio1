export interface SkillItem {
  id: string;
  name: string;
  category: 'Frontend' | 'Styling & UI' | 'Backend & Tools';
  level: 'Core Stack' | 'Advanced' | 'Proficient';
  summary: string;
  codeSymbol: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Web Apps' | 'Dashboards' | 'Utilities';
  year: string;
  tagline: string;
  goal: string;
  description: string;
  features: string[];
  stack: string[];
  githubUrl: string;
  featured?: boolean;
  mockupType:
    | 'grocery'
    | 'student'
    | 'weather'
    | 'ecommerce'
    | 'password'
    | 'todo'
    | 'chat';
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const PROFILE = {
  name: 'Md. Mobasher Hosen Mithu',
  shortName: 'Mithu',
  role: 'Frontend Developer',
  location: 'Sylhet, Bangladesh',
  email: 'mdmobasherhossenmithu1@gmail.com',
  tagline: 'Building Modern, Responsive & User-Friendly Web Applications.',
  aboutSummary:
    'I am a passionate Frontend Developer and Computer Science & Technology student. I love creating modern, responsive, and user-friendly web applications. My goal is to become a professional Full-Stack Developer and Software Engineer.',
  aboutExtended:
    'Focused on component-driven architecture, crisp visual hierarchy, and reliable browser performance. Every interface I build balances accessible markup with fluid motion so products feel fast across mobile, tablet, and desktop screens.',
  typingRoles: [
    'Frontend Developer',
    'React.js Specialist',
    'Next.js Builder',
    'UI Systems Crafter',
    'Aspiring Full-Stack Engineer',
  ],
  socials: {
    github: 'https://github.com/mithuajs',
    facebook: 'https://www.facebook.com/mdmobasher.hossen.mithu.423',
  },
  education: {
    degree: 'Diploma in Engineering',
    department: 'Computer Science & Technology (CST)',
    institution: 'Sylhet Government Polytechnic Institute',
    country: 'Bangladesh',
    highlights: [
      'Core foundations in Data Structures, Algorithms & Object-Oriented Programming',
      'Web Application Design, Responsive Systems & Database Management (DBMS)',
      'Software Engineering Workflows, Version Control & Client-Server Architecture',
    ],
  },
};

export const SKILLS: SkillItem[] = [
  {
    id: 'html5',
    name: 'HTML5',
    category: 'Frontend',
    level: 'Core Stack',
    summary: 'Semantic landmarks, accessible forms, and SEO-friendly document structure.',
    codeSymbol: '<>',
  },
  {
    id: 'css3',
    name: 'CSS3',
    category: 'Styling & UI',
    level: 'Core Stack',
    summary: 'Modern Grid, Flexbox, custom properties, and GPU-composited transitions.',
    codeSymbol: '{}',
  },
  {
    id: 'javascript',
    name: 'JavaScript ES6+',
    category: 'Frontend',
    level: 'Core Stack',
    summary: 'Async/await, modular patterns, DOM orchestration, and clean state logic.',
    codeSymbol: 'JS',
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'Styling & UI',
    level: 'Core Stack',
    summary: 'Utility-first design tokens, dark/light theming, and responsive layouts.',
    codeSymbol: 'TW',
  },
  {
    id: 'react',
    name: 'React.js',
    category: 'Frontend',
    level: 'Advanced',
    summary: 'Reusable hooks, component composition, and predictable UI state flows.',
    codeSymbol: '⚛',
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'Frontend',
    level: 'Proficient',
    summary: 'App Router pages, SSR/SSG optimization, and structured full-stack routing.',
    codeSymbol: 'NX',
  },
  {
    id: 'firebase',
    name: 'Firebase',
    category: 'Backend & Tools',
    level: 'Proficient',
    summary: 'Authentication, Firestore real-time collections, and cloud hosting setup.',
    codeSymbol: 'FB',
  },
  {
    id: 'git',
    name: 'Git',
    category: 'Backend & Tools',
    level: 'Advanced',
    summary: 'Clean branching workflows, commit hygiene, and conflict resolution.',
    codeSymbol: 'GT',
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'Backend & Tools',
    level: 'Advanced',
    summary: 'Repository management, pull requests, and collaborative code reviews.',
    codeSymbol: 'GH',
  },
  {
    id: 'rest-api',
    name: 'REST API',
    category: 'Backend & Tools',
    level: 'Advanced',
    summary: 'Typed fetch pipelines, error boundaries, pagination, and state caching.',
    codeSymbol: 'API',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'grocery-billing',
    title: 'Grocery Shop Billing System',
    category: 'Web Apps',
    year: '2026',
    featured: true,
    tagline: 'Fast point-of-sale billing terminal with live cart math and print-ready receipts.',
    goal: 'Eliminate manual ledger calculation delays for retail counters by delivering instant item search, automatic tax/discount computation, and printable invoice output.',
    description:
      'A responsive retail POS and billing interface designed for grocery stores. Staff can scan or add inventory items, adjust quantities in real time, apply percentage discounts, and generate formatted customer receipts in seconds.',
    features: [
      'Real-time item lookup, unit quantity controls, and subtotal/VAT breakdown',
      'One-click printable receipt layout with tabular numerical alignment',
      'Daily sales summary and quick-add inventory presets',
    ],
    stack: ['React.js', 'JavaScript ES6+', 'Tailwind CSS'],
    githubUrl: 'https://github.com/mithuajs',
    mockupType: 'grocery',
  },
  {
    id: 'student-dashboard',
    title: 'Student Dashboard',
    category: 'Dashboards',
    year: '2026',
    tagline: 'Academic command center tracking attendance, semester GPA, and course schedules.',
    goal: 'Give polytechnic and university students a unified overview of academic progress, upcoming assignment deadlines, and attendance thresholds.',
    description:
      'An analytical student portal combining clean data visualizations with daily class timetables, module completion progress, and exam notice feeds.',
    features: [
      'Interactive semester GPA trend and attendance rate metrics',
      'Subject-wise progress cards and assignment deadline tracker',
      'Responsive sidebar navigation adapted for tablet and mobile viewports',
    ],
    stack: ['React.js', 'Tailwind CSS', 'REST API'],
    githubUrl: 'https://github.com/mithuajs',
    mockupType: 'student',
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    category: 'Web Apps',
    year: '2025',
    tagline: 'Location-aware meteorological forecast with hourly curves and atmospheric metrics.',
    goal: 'Present live weather conditions, multi-day projections, and air metrics from REST endpoints inside a calm, glanceable glassmorphic interface.',
    description:
      'A sleek weather forecasting web app consuming real-time REST API data. Features instant city search, temperature unit switching (°C / °F), humidity, wind velocity, and 5-day outlook cards.',
    features: [
      'Live city search with recent location quick-switchers',
      'Hourly temperature curve and UV / wind / humidity telemetry',
      'Graceful loading skeletons and offline/invalid-city error states',
    ],
    stack: ['JavaScript ES6+', 'REST API', 'CSS3'],
    githubUrl: 'https://github.com/mithuajs',
    mockupType: 'weather',
  },
  {
    id: 'ecommerce-website',
    title: 'E-Commerce Website',
    category: 'Web Apps',
    year: '2026',
    tagline: 'Modern storefront featuring category filtering, product quick-view, and slide-over cart.',
    goal: 'Create a high-conversion shopping experience with frictionless product discovery, variant selection, and persistent cart management.',
    description:
      'A full storefront frontend built with reusable product cards, live price & category filters, interactive variant selectors, and a responsive slide-over shopping bag.',
    features: [
      'Multi-criteria category & price range filtering with instant UI updates',
      'Slide-over cart drawer with quantity updates and order total summary',
      'Product detail modal with gallery switching and wishlist persistence',
    ],
    stack: ['Next.js', 'React.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/mithuajs',
    mockupType: 'ecommerce',
  },
  {
    id: 'password-generator',
    title: 'Password Generator',
    category: 'Utilities',
    year: '2025',
    tagline: 'Cryptographic-grade credential builder with live entropy strength meter.',
    goal: 'Help users craft high-entropy passwords effortlessly with transparent strength feedback and zero server storage.',
    description:
      'A precision security utility using browser Web Crypto randomness to generate customizable passwords with length sliders, character-set toggles, and instant clipboard copy.',
    features: [
      'Configurable length (8–64 chars) and symbol/number/case constraints',
      'Real-time entropy and crack-resistance strength indicator',
      'One-click copy to clipboard with instant visual confirmation',
    ],
    stack: ['JavaScript ES6+', 'HTML5', 'Tailwind CSS'],
    githubUrl: 'https://github.com/mithuajs',
    mockupType: 'password',
  },
  {
    id: 'todo-app',
    title: 'Todo App',
    category: 'Utilities',
    year: '2025',
    tagline: 'Focused task manager with priority lanes, status filters, and local persistence.',
    goal: 'Keep daily engineering tasks organized without clutter through keyboard-friendly entry and clean completion tracking.',
    description:
      'A lightweight productivity application featuring priority tags, active/completed filtering, inline task editing, and persistent browser storage.',
    features: [
      'Instant task creation, inline editing, and priority categorization',
      'Filter tabs for All, Active, and Completed items with live counts',
      'Automatic LocalStorage sync so tasks survive browser refreshes',
    ],
    stack: ['React.js', 'CSS3', 'HTML5'],
    githubUrl: 'https://github.com/mithuajs',
    mockupType: 'todo',
  },
  {
    id: 'chat-application',
    title: 'Chat Application',
    category: 'Web Apps',
    year: '2026',
    tagline: 'Real-time messaging workspace backed by Firebase Authentication and Firestore.',
    goal: 'Connect users in instant topic channels with live message synchronization, clean timestamps, and responsive mobile threads.',
    description:
      'A real-time web messaging application leveraging Firebase for user authentication and live message streams inside a modern split-pane chat layout.',
    features: [
      'Real-time Firestore message stream with automatic scroll anchoring',
      'User authentication flow and active channel switching',
      'Responsive thread drawer for mobile and desktop screens',
    ],
    stack: ['React.js', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/mithuajs',
    mockupType: 'chat',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    number: '01.',
    title: 'Responsive Frontend Development',
    description:
      'Pixel-accurate, mobile-first interfaces built with semantic HTML5, modern CSS3, and Tailwind CSS that adapt seamlessly from 375px phones to 1440px+ displays.',
    deliverables: ['Semantic Markup', 'Fluid Grid Systems', 'Cross-Browser QA'],
  },
  {
    number: '02.',
    title: 'React & Next.js Web Applications',
    description:
      'Modular, component-driven web applications engineered with React.js and Next.js for clean state management, fast route transitions, and long-term maintainability.',
    deliverables: ['Reusable Components', 'State Architecture', 'Performance Tuning'],
  },
  {
    number: '03.',
    title: 'Modern UI/UX & Glassmorphic Design',
    description:
      'Cohesive design systems featuring intentional typography, light/dark theme parity, accessible contrast ratios, and purposeful micro-interactions.',
    deliverables: ['Design Tokens', 'Dark & Light Themes', 'Interactive Prototypes'],
  },
  {
    number: '04.',
    title: 'REST API & Firebase Integration',
    description:
      'Connecting frontend interfaces to live REST APIs and Firebase services including authentication, real-time databases, and resilient loading/error handling.',
    deliverables: ['API Consumption', 'Firebase Auth & Data', 'Clean Error States'],
  },
];
