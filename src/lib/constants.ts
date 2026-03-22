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
  scholar: "https://scholar.google.com/citations?user=jVOQ8D0AAAAJ&hl=en",
};

export interface ProjectCategory {
  id: string;
  label: string;
  labelZh: string;
}

export const projectCategories: ProjectCategory[] = [
  { id: "product", label: "Apps & Products", labelZh: "应用与产品" },
  { id: "tooling", label: "Open Source", labelZh: "开源工具" },
  { id: "research", label: "Research", labelZh: "学术研究" },
  { id: "course", label: "Course Projects", labelZh: "课程项目" },
];

export interface Project {
  name: string;
  description: string;
  shortDescription: string;
  descriptionZh?: string;
  shortDescriptionZh?: string;
  tech: string[];
  url?: string;
  github?: string;
  blogSlug?: string;
  year?: string;
  category?: string;
}

export const projects: Project[] = [
  {
    name: "H1B Compass",
    shortDescription: "Interactive map for finding H1B worksites by DOL prevailing wage",
    shortDescriptionZh: "按 DOL 工资要求筛选 H1B 工作地点的交互地图",
    description:
      "Built during H1B lottery season when I needed to find eligible worksites — but the official DOL website offers no useful filtering. Enter your salary, job category, and wage level: the map instantly highlights which metro areas qualify, colored by your wage surplus. Add a drive-zone filter to narrow results to areas within a given radius of any city.",
    descriptionZh:
      "H1B 抽签季，我需要找符合 DOL 工资要求的工作地点，但官网几乎无法有效筛选。于是做了这个工具：输入薪资、职位类别和工资等级，地图立即高亮所有符合条件的都市区，并按薪资盈余着色。还可以设定驾车范围，聚焦特定城市周边的区域。",
    tech: ["Next.js", "React", "Leaflet", "Tailwind", "Vercel"],
    url: "https://h1b.alexshen.dev",
    github: "https://github.com/shenxingy/h1b-compass",
    blogSlug: "h1b-compass",
    year: "2026",
    category: "product",
  },
  {
    name: "InkWeave",
    shortDescription: "Notes-first AI structuring tool for bilingual knowledge workers",
    shortDescriptionZh: "以笔记为核心的双语 AI 文档结构化工具",
    description:
      "Every AI meeting tool follows the same pattern: transcript → summary. InkWeave is different — your notes capture your thinking, the transcript fills the gaps, and Claude synthesizes them into a structured document that reflects how you reason. Built for bilingual (Chinese + English) meetings, with real-time transcription, speaker diarization, 10+ output templates, and cross-meeting Q&A.",
    descriptionZh:
      "所有 AI 会议工具都遵循同一套路：转录 → 摘要。InkWeave 不同——你的笔记记录你的思路，转录稿填补空白，Claude 将两者合成为一份反映你思维方式的结构化文档。专为中英双语会议设计，支持实时转录、说话人分离、10+ 输出模板和跨会议问答。",
    tech: ["Next.js", "FastAPI", "Whisper", "Claude", "Vditor", "Docker"],
    url: "https://inkweave.alexshen.dev",
    blogSlug: "inkweave",
    year: "2026",
    category: "product",
  },
  {
    name: "Scam AI",
    shortDescription: "Opinionated landing page for an AI security company — many iterations",
    shortDescriptionZh: "AI 安全公司的有风格 Landing Page，历经多次迭代",
    description:
      "Multiple complete redesigns chasing one goal: a landing page that doesn't look like every other AI startup. Experiments with Bento grids, dark hero sections, newsletter CMS, problem-first narrative, and hero video — learning what actually converts versus what just looks good in Figma.",
    descriptionZh:
      "多次完整重设计，目标只有一个：做出有辨识度的 AI 安全公司官网。历经 Bento 网格、暗色 Hero、Newsletter CMS、问题先行叙事等多种尝试，摸清了什么真正有效、什么只是在 Figma 里好看。",
    tech: ["Next.js", "Tailwind", "Framer Motion", "Neon", "Vercel"],
    url: "https://scam.ai",
    github: "https://github.com/aptxaptx/scamai-landing",
    blogSlug: "scamai-landing",
    year: "2025",
    category: "product",
  },
  {
    name: "Claude Code Kit",
    shortDescription: "Productivity toolkit for Claude Code power users",
    shortDescriptionZh: "Claude Code 高级用户生产力工具包",
    description:
      "A collection of scripts, hooks, and workflows that supercharge Claude Code for autonomous and team-based development. Includes commit automation, session handoff, parallel agent orchestration, and project documentation rituals.",
    descriptionZh:
      "一套脚本、钩子和工作流，让 Claude Code 在自主开发和团队协作场景中大幅提效。包括提交自动化、会话交接、并行 Agent 编排和项目文档规范。",
    tech: ["Shell", "TypeScript", "Claude Code", "Next.js"],
    github: "https://github.com/shenxingy/claude-code-kit",
    blogSlug: "claude-code-kit",
    year: "2026",
    category: "tooling",
  },
  {
    name: "AI AP Manager",
    shortDescription: "AI-native accounts payable automation for manufacturing enterprises",
    shortDescriptionZh: "面向制造业的 AI 应付账款自动化平台",
    description:
      "End-to-end AP automation: invoice ingestion, OCR extraction, 2/3/4-way PO matching, exception handling, and approval workflows. A deterministic rule engine owns every approve/reject decision — Claude handles OCR correction, policy parsing, and exception narration.",
    descriptionZh:
      "端到端应付账款自动化：发票录入、OCR 提取、二/三/四路采购订单匹配、异常处理与审批工作流。确定性规则引擎掌管每一个审批决策；Claude 负责 OCR 纠正、政策解析与异常说明。",
    tech: ["FastAPI", "Next.js", "Claude", "PostgreSQL", "Docker"],
    github: "https://github.com/shenxingy/ai-ap-manager",
    year: "2026",
    category: "product",
  },
  {
    name: "MealMates",
    shortDescription: "Social meal planning and recipe sharing app",
    shortDescriptionZh: "社交化餐食规划与食谱分享应用",
    description:
      "A social platform connecting people through shared meals. Features collaborative meal planning, recipe sharing, and real-time updates built on a modern monorepo stack — React Native (Expo) for mobile, Next.js for web, tRPC for typesafe APIs end-to-end.",
    descriptionZh:
      "通过共同用餐连接人与人的社交平台。支持协作式餐食规划、食谱分享和实时更新，基于 Monorepo 架构：React Native (Expo) 移动端，Next.js Web 端，tRPC 全链路类型安全。",
    tech: ["Turborepo", "tRPC", "Expo", "Drizzle", "Supabase"],
    github: "https://github.com/shenxingy/MealMates",
    year: "2025",
    category: "product",
  },
  {
    name: "LocalRAG",
    shortDescription: "Local-first RAG with memo-priority and chain-of-thought conflict resolution",
    shortDescriptionZh: "本地优先 RAG，支持备忘录优先与思维链冲突解决",
    description:
      "A fully local RAG system with a \"memo-first\" strategy — when an authoritative memo conflicts with other documents, the system prioritizes it. Chain-of-thought prompting guides the LLM through conflict resolution. Runs on Ollama with ChromaDB vector search; no data leaves the device.",
    descriptionZh:
      "完全本地化的 RAG 系统，实现「权威备忘录优先」策略——备忘录与其他文档冲突时，系统优先采信备忘录。思维链提示引导 LLM 完成冲突裁定。运行于 Ollama，ChromaDB 向量检索，数据不离设备。",
    tech: ["Python", "LangChain", "ChromaDB", "Ollama"],
    github: "https://github.com/shenxingy/LocalRag",
    year: "2025",
    category: "tooling",
  },
  {
    name: "VoxBlink CN",
    shortDescription: "Large-scale Chinese audio-visual speaker dataset",
    shortDescriptionZh: "大规模中文视听说话人数据集",
    description:
      "Contributed to building a large-scale Chinese audio-visual speaker recognition dataset. Developed data collection pipelines and quality assurance tools for processing thousands of hours of video.",
    descriptionZh:
      "参与构建大规模中文视听说话人识别数据集。开发数据采集管道和质量保障工具，处理数千小时视频数据。",
    tech: ["Python", "FFmpeg", "Data Pipelines", "Computer Vision"],
    github: "https://github.com/shenxingy/VoxBlink-CN",
    year: "2025",
    category: "research",
  },
  {
    name: "CDN Multi-Metric Selection",
    shortDescription: "CDN server selection research — multi-metric scoring beats RTT-only baselines",
    shortDescriptionZh: "CDN 服务器选择研究 — 多指标评分优于纯 RTT 基准",
    description:
      "Duke research project: demonstrates that combining RTT, TTFB, and packet loss in a lightweight composite score consistently improves CDN server selection over RTT-only baselines. Validated on RIPE Atlas and M-Lab real-world datasets.",
    descriptionZh:
      "Duke 研究项目：将 RTT、TTFB 与丢包率组合为轻量复合评分，证明多指标 CDN 服务器选择持续优于单纯 RTT 方案。在 RIPE Atlas 和 M-Lab 真实数据集上验证。",
    tech: ["Python", "RIPE Atlas", "M-Lab", "scikit-learn"],
    github: "https://github.com/shenxingy/cdn-multimetric-selection",
    year: "2025",
    category: "research",
  },
  {
    name: "RTVis",
    shortDescription: "Research trend visualization — co-occurrence networks, citation charts, word frequency races",
    shortDescriptionZh: "学术趋势可视化 — 合作网络、引用图表、词频竞赛",
    description:
      "Research Trend Visualization toolkit: upload an academic dataset and explore author co-occurrence networks, citation bar charts, word frequency races, and field theme rivers. Helps researchers orient in a new field before starting a project. Open-source with Docker deploy.",
    descriptionZh:
      "学术趋势可视化工具包：上传学术数据集，探索作者合作网络、引用柱状图、词频竞赛与领域主题河流图。帮助研究者在开始新项目前快速了解领域全貌。开源，支持 Docker 部署。",
    tech: ["Python", "Plotly", "Pandas", "Docker"],
    github: "https://github.com/RTVis/RTVis",
    year: "2023",
    category: "tooling",
  },
  {
    name: "FactorySIM",
    shortDescription: "Factory builder game — place mines, factories, and drone ports to optimize resource flow",
    shortDescriptionZh: "工厂建造游戏 — 放置矿山、工厂与无人机港，优化资源流转",
    description:
      "A factory builder game: place mines, factories, storage facilities, and drone ports, connect them with paths, and watch resources flow. Built as a Duke course project with a CLI core, libGDX GUI client, and server-backed save/load.",
    descriptionZh:
      "工厂建造游戏：放置矿山、工厂、仓库与无人机港并连接路径，观察资源自动流转。Duke 课程项目，包含命令行核心、libGDX 图形客户端和服务端存档。",
    tech: ["Java", "libGDX", "Gradle", "Client-Server"],
    github: "https://github.com/factorysim-duke/factorysim",
    year: "2025",
    category: "course",
  },
];
