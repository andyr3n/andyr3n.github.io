/**
 * All site content lives here. Edit this file to update the portfolio.
 * Wrap text in **double asterisks** to emphasise it (metrics, key nouns).
 */

export const profile = {
  name: 'Andy Ren',
  role: 'Software Engineer',
  location: 'Burnaby, BC · Canada',
  focus: ['Backend', 'Integrations', 'Internal tools'],
  headline:
    'Sole engineer behind the data sync for 82 retail stores. 10M+ records and counting.',
  summary:
    'At **QE Home | Quilts ETC** I own backend integrations, data pipelines, and internal tools end to end, working directly with the operations staff who use them. I like unglamorous, high-leverage problems: reverse-engineering vendor APIs, migrating millions of records safely, and shipping tools that hundreds of people rely on every day.',
  email: 'andyren2001@gmail.com',
  github: 'https://github.com/andyr3n',
  linkedin: 'https://www.linkedin.com/in/andyren01/',
  // PDF lives in /public. BASE_URL keeps it working on sub-path deploys (GitHub Pages project sites).
  resumeUrl: `${import.meta.env.BASE_URL}Andy_Ren_Resume.pdf`,
  openTo: 'Open to Software Engineer roles · new grad / early career',
}

export const stats = [
  { value: '10M+', label: 'records synced to date' },
  { value: '82', label: 'retail stores integrated' },
  { value: '~980K', label: 'customer records migrated' },
  { value: '250+', label: 'internal users supported' },
]

export type Role = {
  title: string
  period: string
  bullets: string[]
}

export type Job = {
  company: string
  location: string
  url?: string
  stack: string[]
  roles: Role[]
}

export const experience: Job[] = [
  {
    company: 'QE Home | Quilts ETC',
    location: 'Burnaby, BC',
    stack: [
      'Python',
      'Django',
      'Celery',
      'RabbitMQ',
      'Oracle',
      'SQL Server',
      'React',
      'REST APIs',
    ],
    roles: [
      {
        title: 'Software Engineer (Forward Deployed)',
        period: 'Aug 2025 – Present',
        bullets: [
          'Own the **Retail Pro Prism integration** end to end: designed and built Django/Celery/RabbitMQ middleware that syncs customer, inventory, document, and transfer-order data between Prism’s Oracle backend and internal SQL Server systems for **82 retail stores**, running **~550 sync jobs** and processing **~50K records/day** (10M+ to date).',
          'Migrated **~980K customer records** into Prism by mass-generating ~1M JSON import files with automated 7-Zip batching, replacing a manual per-record import process.',
          'Designed and shipped the **purchase order planner** with the 12 PO managers who use it, gathering requirements and iterating on their feedback to plan ~20 POs/month against a 14K-SKU catalog, including an ETA calendar and FOB shipping-cost logic; migrated **1,388 legacy POs** (12K line items) and retired the spreadsheet workflow.',
          'Reverse-engineered Prism’s sparsely documented REST API (seated vs. non-seated session auth, custom API user provisioning) and Oracle schema to build transfer-order and inventory integrations the vendor does not support, including a nightly auto-ship job pushing **~2,000 transfer orders/month**.',
          'Wrote stored procedures and bulk data operations against production Oracle and SQL Server databases, including forensics and cleanup on a **1.17M-row** inventory min/max table (115K audited row changes).',
          'Sole engineer embedded with operations staff: gather requirements directly from the people who use the tools, ship, and support internal tooling for **250+ users** (~200 monthly active) without a dedicated PM or QA function.',
        ],
      },
      {
        title: 'Software Developer Co-op (Full-stack)',
        period: 'May 2023 – Dec 2023',
        bullets: [
          'Built the internal web app’s **authentication system** end to end (Django backend, React frontend, self-serve password recovery), eliminating manual password resets by IT for store staff.',
          'Built the original purchase order creation workflow and PO ETA calendar that the current planner grew out of.',
        ],
      },
    ],
  },
]

export type Project = {
  name: string
  tagline: string
  period: string
  status?: string
  featured?: boolean
  stack: string[]
  bullets: string[]
  links?: { label: string; href: string }[]
}

export const projects: Project[] = [
  {
    name: 'Ante',
    tagline: 'An iOS app where screen time is a currency earned by exercise.',
    period: '2026 – Present',
    status: 'TestFlight-ready',
    featured: true,
    stack: [
      'React Native (Expo)',
      'TypeScript',
      'Family Controls',
      'DeviceActivity',
      'ManagedSettings',
      'HealthKit',
      'Jest',
    ],
    bullets: [
      'Entirely **on-device** (no backend, account, or analytics): distracting apps stay shielded until a verified HealthKit workout or gym check-in earns minutes, spent in 15-minute blocks. The app and three Screen Time extensions share an **append-only ledger** through an App Group container.',
      'Designed the unlock economy around iOS’s declarative enforcement limits (no app code runs when a blocked app opens; usage is observable only at pre-armed thresholds; events can fire late or drop) using **prepaid tranches**, cumulative-minute event names for reconciliation, and guard thresholds so a dropped event leaks at most one block.',
      'Ledger, tranche planning, reconciliation, DST-safe day boundaries, streaks, and health-to-minutes conversion live in **pure, Jest-tested TypeScript modules**; deterministic transaction IDs make double taps and racing syncs idempotent. Verified on device that shields survive force-quit; Family Controls distribution entitlement granted.',
    ],
    links: [
      // TODO: add repo / TestFlight links when public.
    ],
  },
  {
    name: 'TesMiles',
    tagline: 'CRA-compliant mileage logger for Tesla drivers.',
    period: '2026 – Present',
    status: 'In development',
    stack: ['React Native (Expo)', 'Django REST Framework', 'Celery', 'MQTT', 'Claude API'],
    bullets: [
      'Ingests **Tesla Fleet Telemetry over MQTT** to log trips automatically and generate audit-ready CRA mileage reports for self-employed drivers.',
      'Receipt capture is parsed with the **Claude API** and attached to trips for expense tracking.',
    ],
  },
  {
    name: 'Spots Map',
    tagline: 'Full-stack location-sharing web app.',
    period: 'Feb 2025 – Mar 2025',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Mapbox', 'JWT'],
    bullets: [
      'Mark and share places on an interactive **Mapbox** map, with JWT/bcrypt authentication and a REST API backed by MongoDB.',
    ],
    links: [
      // TODO: add repo / live demo links.
    ],
  },
]

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'SQL (T-SQL, Oracle SQL)', 'Java', 'Kotlin'],
  },
  {
    group: 'Backend & Data',
    items: [
      'Django',
      'Django REST Framework',
      'Celery',
      'RabbitMQ',
      'Node.js / Express',
      'SQL Server',
      'Oracle',
      'MongoDB',
      'REST API integration',
      'ETL & data migration',
    ],
  },
  {
    group: 'Frontend & Mobile',
    items: ['React', 'React Native (Expo)', 'Tailwind CSS', 'Bootstrap', 'iOS Screen Time APIs'],
  },
  {
    group: 'Tools',
    items: ['Git', 'Linux', 'MQTT', 'Firebase', 'Jest'],
  },
]

export const education = [
  {
    school: 'Simon Fraser University',
    degree: 'BSc, Computer Science',
    period: 'Graduated May 2025',
    location: 'Burnaby, BC',
  },
]

export const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
