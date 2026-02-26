export const siteConfig = {
  name: "Alex Shen",
  title: "Alex Shen",
  description:
    "Founding Engineer at Scam AI. Building things at the intersection of ML and full-stack engineering.",
  url: "https://alexshen.dev",
  tagline: "Founding Engineer at Scam AI",
  email: "alex@get-reality.com",
  github: "https://github.com/shenxingy",
  linkedin: "https://www.linkedin.com/in/xingyu-shen-duke/",
};

export interface Project {
  name: string;
  description: string;
  shortDescription: string;
  descriptionZh?: string;
  shortDescriptionZh?: string;
  tech: string[];
  url?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    name: "Scam AI",
    shortDescription: "AI-powered scam detection and prevention platform",
    shortDescriptionZh: "AI 驱动的诈骗检测与防范平台",
    description:
      "Building the core ML infrastructure and full-stack platform for real-time scam detection. Designing and deploying models that process millions of signals daily to protect users from fraud.",
    descriptionZh:
      "构建核心 ML 基础设施与全栈平台，实现实时诈骗检测。设计并部署每日处理数百万信号的模型，保护用户免受欺诈侵害。",
    tech: ["Python", "PyTorch", "FastAPI", "React", "PostgreSQL"],
    url: "https://scam.ai",
    github: "https://github.com/scamai",
  },
  {
    name: "claude-code-kit",
    shortDescription: "Productivity toolkit for Claude Code power users",
    shortDescriptionZh: "Claude Code 高级用户生产力工具包",
    description:
      "A collection of scripts, hooks, and workflows that supercharge Claude Code for autonomous and team-based development. Includes commit automation, session handoff, parallel agent orchestration, and project documentation rituals.",
    descriptionZh:
      "一套脚本、钩子和工作流，让 Claude Code 在自主开发和团队协作场景中大幅提效。包括提交自动化、会话交接、并行 Agent 编排和项目文档规范。",
    tech: ["Shell", "TypeScript", "Claude Code", "Next.js"],
    github: "https://github.com/shenxingy/claude-code-kit",
  },
  {
    name: "MealMates",
    shortDescription: "Social meal planning and recipe sharing app",
    shortDescriptionZh: "社交化餐食规划与食谱分享应用",
    description:
      "A social platform connecting people through shared meals. Features collaborative meal planning, recipe sharing, and real-time updates built on a modern monorepo stack.",
    descriptionZh:
      "通过共同用餐连接人与人的社交平台。支持协作式餐食规划、食谱分享和实时更新，基于现代 Monorepo 架构构建。",
    tech: ["Turborepo", "tRPC", "Expo", "Drizzle", "Supabase"],
  },
  {
    name: "LocalRag",
    shortDescription: "Local-first RAG pipeline for private document Q&A",
    shortDescriptionZh: "本地优先的私有文档问答 RAG 管道",
    description:
      "A fully local retrieval-augmented generation system for querying private documents. Runs entirely on-device with no data leaving the machine — uses local embeddings, vector search, and an LLM backend.",
    descriptionZh:
      "完全本地化的检索增强生成系统，用于查询私有文档。数据不离设备，使用本地嵌入、向量检索和本地 LLM 后端。",
    tech: ["Python", "LlamaIndex", "Ollama", "FAISS"],
    github: "https://github.com/shenxingy/local-rag",
  },
  {
    name: "VoxBlink-CN",
    shortDescription: "Large-scale Chinese audio-visual speaker dataset",
    shortDescriptionZh: "大规模中文视听说话人数据集",
    description:
      "Contributed to building a large-scale Chinese audio-visual speaker recognition dataset. Developed data collection pipelines and quality assurance tools for processing thousands of hours of video.",
    descriptionZh:
      "参与构建大规模中文视听说话人识别数据集。开发数据采集管道和质量保障工具，处理数千小时视频数据。",
    tech: ["Python", "FFmpeg", "Data Pipelines", "Computer Vision"],
  },
  {
    name: "FactorySIM",
    shortDescription: "Multi-agent simulation for manufacturing optimization",
    shortDescriptionZh: "多智能体制造优化仿真框架",
    description:
      "A multi-agent simulation framework for modeling and optimizing manufacturing workflows. Uses reinforcement learning to discover efficient production schedules and resource allocation strategies.",
    descriptionZh:
      "用于建模和优化制造工作流程的多智能体仿真框架。利用强化学习探索高效的生产调度和资源分配策略。",
    tech: ["Python", "PyTorch", "Multi-Agent RL", "Simulation"],
  },
];
