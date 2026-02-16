export const siteConfig = {
  name: "Alex Shen",
  title: "Alex Shen",
  description:
    "Founding Engineer at Scam AI. Building things at the intersection of ML and full-stack engineering.",
  url: "https://alexshen.dev",
  tagline: "Founding Engineer at Scam AI",
  email: "alex@get-reality.com",
  github: "https://github.com/shenxingy",
  linkedin: "https://linkedin.com/in/alexshenxy",
};

export interface Project {
  name: string;
  description: string;
  shortDescription: string;
  tech: string[];
  url?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    name: "Scam AI",
    shortDescription: "AI-powered scam detection and prevention platform",
    description:
      "Building the core ML infrastructure and full-stack platform for real-time scam detection. Designing and deploying models that process millions of signals daily to protect users from fraud.",
    tech: ["Python", "PyTorch", "FastAPI", "React", "PostgreSQL"],
    url: "https://get-reality.com",
  },
  {
    name: "FactorySIM",
    shortDescription: "Multi-agent simulation for manufacturing optimization",
    description:
      "A multi-agent simulation framework for modeling and optimizing manufacturing workflows. Uses reinforcement learning to discover efficient production schedules and resource allocation strategies.",
    tech: ["Python", "PyTorch", "Multi-Agent RL", "Simulation"],
  },
  {
    name: "MealMates",
    shortDescription: "Social meal planning and recipe sharing app",
    description:
      "A social platform connecting people through shared meals. Features collaborative meal planning, recipe sharing, and group dining coordination with real-time updates.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
  },
  {
    name: "Duke Duber",
    shortDescription: "Campus ride-sharing platform for Duke University",
    description:
      "A ride-sharing platform built for the Duke University community. Matches riders and drivers with smart routing, real-time tracking, and integrated payment processing.",
    tech: ["React Native", "Node.js", "Firebase", "Google Maps API"],
  },
  {
    name: "VoxBlink-CN",
    shortDescription: "Large-scale Chinese audio-visual speaker dataset",
    description:
      "Contributed to building a large-scale Chinese audio-visual speaker recognition dataset. Developed data collection pipelines and quality assurance tools for processing thousands of hours of video.",
    tech: ["Python", "FFmpeg", "Data Pipelines", "Computer Vision"],
  },
  {
    name: "RTVis",
    shortDescription: "Real-time data visualization toolkit",
    description:
      "A toolkit for building real-time interactive data visualizations. Supports streaming data sources, customizable chart types, and WebSocket-based live updates.",
    tech: ["TypeScript", "D3.js", "WebSocket", "Canvas API"],
  },
];
