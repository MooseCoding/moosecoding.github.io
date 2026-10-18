export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectFigure = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  dates: string;
  tools: string[];
  group: "Projects" | "Clubs";
  pinned?: boolean;
};

export type Experience = {
  title: string;
  place: string;
  dates: string;
  bullets: string[];
};

export type Skills = {
  category: string;
  items: string[];
};

export type ResumeEducation = {
  school: string;
  degree: string;
  dates: string;
  location: string;
  coursework: string;
};

export type ResumeJob = {
  title: string;
  place: string;
  dates: string;
  bullets: string[];
};

export type ResumeProject = {
  title: string;
  dates: string;
  tools: string[];
  bullets: string[];
};

export type ResumeClub = {
  title: string;
  text: string;
};

const heroDegrees = ["B.S. Aerospace Engineering", "B.S. Physics"] as const;
const heroSchool = "Georgia Tech";

export const site = {
  name: "Christopher Fontana",
  nickname: "Topher",
  subtitle: `${heroDegrees.join(" and ")}, ${heroSchool}`,
  location: "Atlanta, GA",
  bio:
    "I run CFD on UAV wings in ANSYS Fluent and OpenFOAM, and I write C++ for flight control and embedded firmware.",
  hiringHeadline:
    "Georgia Tech aerospace and physics student, graduating May 2029, looking for a summer internship in flight software and simulation.",
  hiringContact:
    "Summer internship in flight software and simulation. topherfontana@gmail.com",

  hero: {
    degrees: heroDegrees,
    school: heroSchool,
    statusLine: "Atlanta. Expected May 2029.",
  },

  links: {
    email: "topherfontana@gmail.com",
    github: "https://github.com/moosecoding",
    linkedin: "https://www.linkedin.com/in/christopher-fontana-469b35359",
    resume: "/resume.pdf",
  },

  footer: {
    footerText: "Atlanta / Georgia Tech",
  },

  nav: [
    { label: "Projects", href: "/#projects" },
    { label: "Experience", href: "/#experience" },
    { label: "Skills", href: "/#skills" },
    { label: "Contact", href: "/#contact" },
  ],
} as const;

export const resume = {
  education: [
    {
      school: "Georgia Institute of Technology",
      degree: "B.S. Aerospace Engineering, B.S. Physics",
      dates: "Expected May 2029",
      location: "Atlanta, GA",
      coursework:
        "Statistical Mechanics, Differential Equations, Classical Mechanics, Electrostatics",
    },
  ] satisfies ResumeEducation[],
  experience: [
    {
      title: "Makerspace Technical Assistant",
      place: "Florida Gulf Coast University, Ft. Myers, FL",
      dates: "Aug 2025 – May 2026",
      bullets: [
        "Operated Bambu Lab X1C and Prusa MK3S+ printers, a laser cutter, a vinyl cutter, and a desktop CNC mill for student and research jobs.",
        "Calibrated those machines, did preventive maintenance between jobs, and certified 10+ students a semester on the laser cutter.",
      ],
    },
    {
      title: "STEM Camp Counselor",
      place: "Edison and Ford Winter Estates, Ft. Myers, FL",
      dates: "Summers 2022 – 2026",
      bullets: [
        "Ran CAD, FDM, and microcontroller build challenges, and helped students debug failed prints, wiring, and joints.",
      ],
    },
  ] satisfies ResumeJob[],
  projects: [
    {
      title: "UAV Wing Aerodynamic Analysis",
      dates: "Aug 2026 – Present",
      tools: ["SOLIDWORKS", "ANSYS Fluent", "OpenFOAM"],
      bullets: [
        "Designed a UAV wing in SOLIDWORKS and ran the same geometry in ANSYS Fluent and OpenFOAM across angles of attack and freestream speeds.",
        "Compared CL, CD, stall, and maximum L/D between the two solvers.",
      ],
    },
    {
      title: "Iron",
      dates: "2024 – 2026",
      tools: ["Rust"],
      bullets: [
        "Wrote a Rust interpreter with a lexer, parser, evaluator, classes, and method dispatch.",
        "Built a standard library that runs programs with objects and I/O.",
      ],
    },
    {
      title: "Apex Pathing",
      dates: "March–August 2026",
      tools: ["TypeScript", "Next.js", "Java", "Kotlin"],
      bullets: [
        "Led the dev team on an open-source FTC path-planning and kinematics library and reviewed the changes they landed in the SDK.",
      ],
    },
    {
      title: "Familyr (HackGT 13)",
      dates: "Sep 2025",
      tools: ["Next.js", "Supabase", "Postgres", "Google Calendar API"],
      bullets: [
        "Built the Next.js frontend and the Supabase/Postgres backend: schema, APIs, chat, and two-way Google Calendar sync.",
        "Events pulled from chat require consent and opt-out. Private messages stay out of the health reports.",
      ],
    },
  ] satisfies ResumeProject[],
  skills: [
    {
      category: "Programming",
      items: ["C++", "Rust", "TypeScript", "Java", "Kotlin"],
    },
    {
      category: "CAD",
      items: ["SOLIDWORKS"],
    },
    {
      category: "Manufacturing",
      items: ["FDM Printing", "Laser Cutting", "CNC Milling"],
    },
    {
      category: "Simulation",
      items: ["ANSYS Fluent", "OpenFOAM"],
    },
    {
      category: "Tools",
      items: ["Next.js", "Supabase", "Postgres", "ArduPilot"],
    },
  ] satisfies Skills[],
  clubs: [
    {
      title: "GT Supersonics",
      text: "Software. Writing C++ for an ArduPilot flight-control rewrite for aircraft approaching supersonic speed. Helping Ground, Controls, and Navigation turn their protocols into code on that stack.",
    },
    {
      title: "RoboJackets RoboCup",
      text: "Firmware. Writing C++ drivers for the club's new electrical stack, and moving the older Rust firmware into that C++ codebase.",
    },
    {
      title: "RoboJackets Outreach",
      text: "Volunteer at FTC Robot in 30 Hours, where I helped about 50 people with robot design. Working on silicone molding to cut part cost for FRC Robot in 30 Hours.",
    },
  ] satisfies ResumeClub[],
};

export const experience: Experience[] = [
  {
    title: "Makerspace Technical Assistant",
    place: "Florida Gulf Coast University, Ft. Myers",
    dates: "Aug 2025 to May 2026",
    bullets: [
      "Operated Bambu Lab X1C and Prusa MK3S+ printers, a laser cutter, a vinyl cutter, and a desktop CNC mill for student and research jobs.",
      "Calibrated those machines, did preventive maintenance between jobs, and certified 10+ students a semester on the laser cutter.",
    ],
  },
  {
    title: "STEM Camp Counselor",
    place: "Edison and Ford Winter Estates, Ft. Myers",
    dates: "Summers 2022 to 2026",
    bullets: [
      "Ran CAD, FDM, and microcontroller build challenges, and helped students debug failed prints, wiring, and joints.",
    ],
  },
];

export const skills: Skills[] = [
  {
    category: "Programming",
    items: ["C++", "Rust", "TypeScript", "Java", "Kotlin"],
  },
  {
    category: "Simulation",
    items: ["ANSYS Fluent", "OpenFOAM"],
  },
  {
    category: "CAD",
    items: ["SOLIDWORKS", "Onshape", "FreeCAD"],
  },
  {
    category: "Manufacturing",
    items: [
      "FDM Printing",
      "Laser Cutting",
      "Vinyl Cutting",
      "CNC Milling",
      "Silicone Molding",
    ],
  },
  {
    category: "Tools",
    items: [
      "Git",
      "Linux",
      "Next.js",
      "Supabase",
      "Postgres",
      "ArduPilot",
      "Microcontrollers",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "uav-wing",
    title: "UAV Wing",
    summary:
      "SOLIDWORKS UAV wing run in Fluent and OpenFOAM. I compared CL, CD, stall, and L/D across angle of attack and speed.",
    role: "",
    dates: "Aug 2026 to present",
    tools: ["SOLIDWORKS", "ANSYS Fluent", "OpenFOAM"],
    group: "Projects",
    pinned: true,
  },
  {
    slug: "iron",
    title: "Iron",
    summary:
      "A Rust interpreter with a lexer, parser, evaluator, classes, method dispatch, and a standard library for objects and I/O.",
    role: "",
    dates: "2024 to 2026",
    tools: ["Rust"],
    group: "Projects",
    pinned: true,
  },
  {
    slug: "apex-pathing",
    title: "Apex Pathing",
    summary:
      "Open-source FTC path planning. I lead the dev team and review the code they land in the SDK.",
    role: "Lead",
    dates: "March 2026 to August 2026",
    tools: ["TypeScript", "Next.js", "Java", "Kotlin"],
    group: "Projects",
  },
  {
    slug: "gt-supersonics",
    title: "GT Supersonics",
    summary:
      "C++ on an ArduPilot flight-control rewrite for aircraft approaching supersonic speed, plus protocol work for Ground, Controls, and Navigation.",
    role: "Software",
    dates: "",
    tools: ["C++", "ArduPilot"],
    group: "Clubs",
    pinned: true,
  },
  {
    slug: "robocup-firmware",
    title: "RoboJackets RoboCup",
    summary:
      "C++ drivers for the club's new electrical stack, and a migration of the older Rust firmware to C++.",
    role: "Firmware",
    dates: "",
    tools: ["C++", "Rust"],
    group: "Clubs",
  },
  {
    slug: "robojackets-outreach",
    title: "RoboJackets Outreach",
    summary:
      "Volunteer at FTC Robot in 30 Hours, helping about 50 people with robot design. Silicone molding to cut part cost for FRC Robot in 30 Hours.",
    role: "Volunteer",
    dates: "",
    tools: ["Silicone Molding"],
    group: "Clubs",
  },
];
