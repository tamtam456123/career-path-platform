import { useState } from "react";

const POSITIONS = {
  engineering: {
    label: "Engineering",
    roles: {
      frontend: {
        label: "Frontend Engineer",
        icon: "◈",
        color: "#E8553A",
        levels: {
          IC2: {
            title: "Junior Frontend Engineer",
            yoe: "0–2 years",
            summary: "Builds UI components under guidance, learning the codebase and team workflows.",
            technicalSkills: [
              "Solid grasp of HTML, CSS, and JavaScript fundamentals",
              "Basic working knowledge of React.js and component-based architecture",
              "Understanding of responsive design principles and cross-browser compatibility",
              "Familiarity with version control (Git) and basic CLI usage",
              "Can implement designs from Figma/design specs with guidance",
              "Basic understanding of TypeScript syntax and type annotations",
              "CI/CD basics — understands pipelines, reads build output, and follows deployment steps",
            ],
            deliveryAndImpact: [
              "Completes well-defined tickets and small bug fixes with detailed instructions",
              "Delivers UI components that meet acceptance criteria under supervision",
              "Follows established code patterns and project conventions",
              "Participates in code reviews as a reviewer (learning) and submits clean PRs",
            ],
            collaboration: [
              "Asks clear questions and communicates blockers early",
              "Pairs with more experienced engineers to learn codebase patterns",
              "Documents learnings and shares knowledge within the team",
            ],
            growthMindset: [
              "Actively seeks feedback on PRs and iterates quickly",
              "Invests time in learning React ecosystem, TypeScript, and modern CSS",
              "Shows curiosity about how frontend connects to backend and product goals",
              "Uses AI-assisted coding tools (e.g., GitHub Copilot, Cursor) to accelerate learning and development",
            ],
          },
          IC3: {
            title: "Mid-Level Frontend Engineer",
            yoe: "2–4 years",
            summary: "Independently delivers features end-to-end, contributing to architecture discussions.",
            technicalSkills: [
              "React.js and Next.js — component architecture, routing, SSR/SSG, and state management",
              "TypeScript — writes type-safe, maintainable code across the codebase",
              "GraphQL — data fetching, query structuring, and basic schema understanding",
              "Core web performance concepts: lazy loading, code splitting, and Core Web Vitals",
              "Familiar with WebSockets for real-time communication features",
              "Testing: Jest, React Testing Library, and basic end-to-end testing (Cypress)",
              "Implements designs from Figma accurately and with attention to accessibility basics",
              "Basic deployment: understands build pipelines, environment configs, and release processes",
              "CI/CD — runs and monitors pipelines, understands deployment steps end-to-end",
            ],
            deliveryAndImpact: [
              "Independently delivers medium-sized features from spec to deployment",
              "Identifies and resolves bugs and performance issues in frontend code",
              "Writes clean, well-tested code and participates constructively in code reviews",
            ],
            collaboration: [
              "Works closely with backend engineers to align on API contracts and integration points",
              "Collaborates with product managers to understand requirements and clarify scope",
              "Works with designers to implement UI accurately and flags feasibility concerns early",
              "Communicates blockers and progress clearly within the team",
              "Supports onboarding of new team members where applicable",
            ],
            growthMindset: [
              "Actively seeks feedback on PRs and iterates quickly",
              "Invests time in learning the React ecosystem, TypeScript, and modern CSS",
              "Shows curiosity about how frontend connects to backend and product goals",
              "Integrates AI-assisted coding tools (e.g., GitHub Copilot, Cursor) into daily workflow",
              "Actively uses AI for learning, debugging, and exploring new patterns",
            ],
          },
          IC4: {
            title: "Senior Frontend Engineer",
            yoe: "4–7 years",
            summary: "Owns frontend architecture for major product areas, mentors others, and drives quality standards.",
            technicalSkills: [
              "React.js and Next.js — advanced component architecture, rendering strategies, and scalable patterns",
              "TypeScript at an advanced level — solves complex design challenges through the type system",
              "GraphQL schema design and API contracts",
              "Client-side caching strategies and data normalization",
              "Diagnoses complex bottlenecks and optimizes large-scale applications for speed and responsiveness",
              "WebSockets, real-time data, and complex state management at scale",
              "CI/CD pipelines, automated testing strategies, and deployment workflows",
              "Uses AI-assisted coding tools effectively to accelerate development and improve code quality",
            ],
            deliveryAndImpact: [
              "Owns and delivers complex features with minimal guidance",
              "Architects frontend solutions for new products and major features",
              "Sets and enforces code quality standards across the team",
              "Drives measurable improvements in application performance and reliability",
            ],
            collaboration: [
              "Mentors junior and mid-level engineers — structured feedback, pair programming, and growth plans",
              "Effectively translates between technical and non-technical stakeholders",
              "Fosters a collaborative culture and shared engineering standards within the team",
            ],
            growthMindset: [
              "Strong ownership mindset — full accountability for the frontend areas they work on",
              "Moves fast and prioritizes shipping impact over perfect solutions",
              "Focused on impact — ensures work directly contributes to product and business outcomes",
              "Creative and solution-driven, navigating tough challenges head-on",
              "Brings external best practices and new approaches into the team",
            ],
          },
          IC5: {
            title: "Staff Frontend Engineer",
            yoe: "7+ years",
            summary: "Defines the frontend vision across multiple products, sets the technical bar for the organization.",
            technicalSkills: [
              "Broad expertise in React.js and Next.js — architectural patterns, performance, and scalable system design",
              "TypeScript at an expert level — complex type system design and standards across large codebases",
              "GraphQL — schema design, federation, and client-side patterns at scale",
              "WebSockets and real-time systems — architecture, scaling, and reliability",
              "Proven track record diagnosing and solving complex performance bottlenecks at scale",
              "Fluent in different architectural paradigms — micro-frontends, monorepos, and platform design",
              "Security, caching, and edge computing patterns for frontend at scale",
              "CI/CD at a platform level — owns frontend build tooling, release processes, and deployment infrastructure",
              "Uses AI tooling to multiply team output and drive engineering efficiency",
            ],
            deliveryAndImpact: [
              "Directly shapes and builds new products from conception to launch",
              "Sets the technical standard for the entire frontend organization",
              "Directly impacts company-wide results through technical excellence and implementation of product strategy",
              "Champions performance and quality across all frontend systems",
            ],
            collaboration: [
              "Mentors and grows engineers across the org — fosters a culture of high standards and continuous learning",
              "Partners with product, design, and leadership to align technical direction with business goals",
              "Drives cross-team technical initiatives and ensures architectural coherence",
              "Recognised as the engineering authority for frontend across the company",
              "Brings in external best practices and represents the company in the engineering community",
            ],
            growthMindset: [
              "Continuously pushes the boundaries of what frontend engineering can achieve at the company",
              "Impact-obsessed — hands-on product thinker who builds and optimizes at scale",
              "Deeply curious and driven to build and improve across the entire frontend platform",
              "Influences engineering direction and brings in industry-level best practices",
              "Uses AI and modern tooling to multiply team output and accelerate innovation",
            ],
          },
          IC6: {
            title: "Principal Frontend Engineer",
            yoe: "10+ years",
            summary: "Recognized expert shaping the company's frontend strategy and influencing the broader engineering culture.",
            technicalSkills: [
              "Specialised expertise across the full frontend domain — architecture, performance, DX, accessibility",
              "Defines technical standards and governance for all frontend engineering",
              "Evaluates and introduces new technologies with a strategic, long-term lens",
              "Deep understanding of how frontend systems interact with infrastructure, data, and product at scale",
            ],
            deliveryAndImpact: [
              "Materially impacts the success of the entire engineering function",
              "Drives multi-quarter technical initiatives that transform product capabilities",
              "Owns the frontend technical roadmap — balances innovation with stability",
              "Shapes hiring bar and interview standards for frontend engineering",
            ],
            collaboration: [
              "Operates as a trusted advisor to engineering leadership and C-level stakeholders",
              "Mentors Staff engineers and shapes the next generation of senior technical leaders",
              "Represents the company externally — talks, open source, community engagement",
            ],
            growthMindset: [
              "Continuously redefines what excellence looks like for the organization",
              "Balances deep technical expertise with broad strategic thinking",
              "Drives cultural change across engineering — sets norms for quality, speed, and innovation",
            ],
          },
        },
      },
      backend: {
        label: "Backend Engineer",
        icon: "⬡",
        color: "#2A7F62",
        levels: {
          IC2: {
            title: "Junior Backend Engineer",
            yoe: "0–2 years",
            summary: "Learns backend fundamentals, implements small services and fixes under supervision.",
            technicalSkills: [
              "Basic proficiency in Node.js (NestJS/Express) or Python (FastAPI/Django)",
              "Understanding of REST API design principles and HTTP fundamentals",
              "Basic SQL knowledge (PostgreSQL, MySQL) and simple query writing",
              "Familiarity with Git, basic CI/CD concepts, and development workflows",
              "Understanding of basic data structures, algorithms, and design patterns",
              "Awareness of containerization basics (Docker)",
            ],
            deliveryAndImpact: [
              "Implements well-scoped API endpoints and bug fixes with clear instructions",
              "Writes basic unit tests for assigned work",
              "Follows established service patterns and coding conventions",
              "Delivers tasks within estimated timelines with regular check-ins",
            ],
            collaboration: [
              "Communicates blockers and progress clearly to the team",
              "Asks thoughtful questions to understand system context",
              "Participates in code reviews as a learning reviewer",
            ],
            growthMindset: [
              "Actively learns the codebase, infrastructure, and domain",
              "Seeks feedback and iterates on code quality",
              "Explores backend concepts beyond immediate tasks (databases, caching, messaging)",
              "Uses AI-assisted tools to accelerate learning and development (e.g., GitHub Copilot, Cursor)",
            ],
          },
          IC3: {
            title: "Mid-Level Backend Engineer",
            yoe: "2–4 years",
            summary: "Independently designs and delivers backend services, owns features end-to-end.",
            technicalSkills: [
              "Node.js/TypeScript and/or Python (FastAPI) — builds backend services and APIs with clean, maintainable code",
              "Relational databases (PostgreSQL, MySQL) — schema design, queries, and indexing basics",
              "NoSQL databases (MongoDB, Redis) — understands when and how to apply them",
              "RESTful API design — proper error handling, validation, and versioning",
              "GraphQL API implementation — queries, mutations, and resolver patterns",
              "Hands-on working experience with Docker and basic CI/CD pipeline configuration",
              "Monitoring and logging fundamentals (e.g., Datadog, Grafana) — reads dashboards and sets up basic alerts",
              "Cloud platforms (AWS or GCP) — understanding of core services and environment setup",
              "Integrates AI-assisted coding tools into daily development workflow",
            ],
            deliveryAndImpact: [
              "Owns defined slices of services end-to-end — from API design to deployment",
              "Independently delivers medium-complexity features with appropriate test coverage",
              "Identifies and resolves performance issues and bugs proactively",
            ],
            collaboration: [
              "Collaborates with frontend engineers on API design and integration",
              "Works with data teams on data requirements and schemas",
              "Syncs with product managers to understand requirements and scope",
              "Participates in architectural discussions and contributes informed opinions",
              "Documents work and supports team onboarding",
            ],
            growthMindset: [
              "Identifies opportunities to improve code quality, test coverage, and development workflows",
              "Stays current with backend ecosystem developments and best practices",
              "Seeks ownership of larger service areas and more complex problems",
              "Uses AI-assisted coding tools to accelerate development and problem-solving",
            ],
          },
          IC4: {
            title: "Senior Backend Engineer",
            yoe: "4–7 years",
            summary: "Designs scalable backend systems, drives reliability, and mentors the team.",
            technicalSkills: [
              "Proficient in Node.js/TypeScript and Python — designs and delivers services for production-scale systems",
              "Applies best practices in database design, indexing, and query optimization (PostgreSQL, MySQL)",
              "Applied use of service-oriented architecture and microservice patterns — API gateway, service mesh",
              "Practical and consistent application of caching (Redis), rate limiting, and connection pooling",
              "Monitoring, alerting, and SLO/SLI definition",
              "CI/CD pipelines — owns and improves deployment workflows for backend services",
              "Uses AI-assisted coding tools to accelerate development and improve code quality",
            ],
            deliveryAndImpact: [
              "Architects and delivers complex backend services end-to-end with minimal guidance",
              "Drives observability, performance, and reliability across backend systems",
              "Makes key technical decisions — schema design, service boundaries, data flow patterns",
              "Sets coding standards and review practices that elevate team quality",
            ],
            collaboration: [
              "Mentors junior and mid-level engineers",
              "Leads architectural discussions and drives decision-making on technical direction",
              "Partners with product and data teams to translate business needs into technical solutions",
            ],
            growthMindset: [
              "Highly technical mindset with a consistent drive to improve",
              "Comfortable with ambiguity and maintains a high bar for quality",
              "Focused on impact — ensures technical decisions serve business and product outcomes",
              "Uses AI-assisted tools to accelerate delivery and improve code quality",
            ],
          },
          IC5: {
            title: "Staff Backend Engineer",
            yoe: "7+ years",
            summary: "Defines backend platform strategy, drives cross-team technical initiatives, and shapes engineering culture.",
            technicalSkills: [
              "Designs and evolves the backend platform architecture across multiple products and services",
              "Expert in distributed systems — consistency models, partitioning, fault tolerance, event sourcing",
              "Deep cloud infrastructure expertise (GCP/AWS) — cost optimization, security, auto-scaling",
              "Drives data platform decisions — pipelines, warehousing, real-time processing",
              "Sets standards for API design, service contracts, and inter-service communication",
              "Expert in modern cloud and automation practices — Terraform, K8s, GitOps",
              "Practical knowledge of multiple JavaScript runtimes and their trade-offs (Node.js, Deno, Bun)",
              "TypeScript at scale — defines standards and manages complexity across large codebases",
              "Uses AI tooling to focus on architecture, scale, and high-impact engineering decisions",
            ],
            deliveryAndImpact: [
              "Shapes the next generation of backend and data platform — connecting APIs, pipelines, and infrastructure",
              "Directly impacts company-wide results through platform reliability and scalability",
              "Drives multi-quarter initiatives that transform engineering capabilities",
              "Sets the technical bar for the backend organization",
            ],
            collaboration: [
              "Provides technical leadership across teams",
              "Mentors senior engineers and helps grow future technical leaders",
              "Partners with leadership to align technical strategy with business goals",
              "Creates structure, clarity, and shared standards across engineering",
            ],
            growthMindset: [
              "AI-enabled mindset — uses automation and AI tooling to focus on architecture, scale, and high-impact technical work",
              "Continuously raises the bar for engineering excellence across the organization",
              "Focused on impact — shapes technical decisions that drive company-wide results",
              "Brings in external best practices and elevates engineering standards org-wide",
            ],
          },
          IC6: {
            title: "Principal Backend Engineer",
            yoe: "10+ years",
            summary: "Recognized expert setting the company's backend strategy and influencing the broader tech community.",
            technicalSkills: [
              "Specialised expertise across backend systems, infrastructure, data platforms, and security",
              "Defines technical governance and standards for all backend engineering",
              "Evaluates and introduces architectural paradigms with long-term strategic impact",
              "Deep understanding of system economics — cost, performance, reliability trade-offs at scale",
            ],
            deliveryAndImpact: [
              "Materially impacts the success of the engineering function and company",
              "Owns the backend technical roadmap and long-term platform vision",
              "Shapes hiring standards and technical interview bar for backend engineering",
              "Drives transformational projects that redefine product capabilities",
            ],
            collaboration: [
              "Trusted advisor to engineering leadership and C-level stakeholders",
              "Mentors Staff engineers and shapes the senior technical leadership pipeline",
              "Represents the company externally — architecture talks, open source, community",
            ],
            growthMindset: [
              "Continuously redefines engineering excellence standards",
              "Balances deep systems thinking with broad business strategy",
              "Drives cultural norms for quality, speed, and innovation across engineering",
            ],
          },
        },
      },
      fullstack: {
        label: "Fullstack Engineer",
        icon: "◉",
        color: "#5B4FCF",
        levels: {
          IC2: {
            title: "Junior Fullstack Engineer",
            yoe: "0–2 years",
            summary: "Builds features across frontend and backend under guidance, learning full product delivery.",
            technicalSkills: [
              "Basic proficiency in React.js/Next.js and Node.js/Python",
              "Understanding of REST API design and basic database operations (SQL)",
              "Familiarity with TypeScript, Git, and development tooling",
              "Can implement simple features touching both frontend UI and backend logic",
              "Basic understanding of deployment processes and environments",
              "Awareness of authentication, authorization, and security fundamentals",
            ],
            deliveryAndImpact: [
              "Completes well-defined full-stack tickets — from UI to API to database",
              "Delivers small features and bug fixes with detailed guidance",
              "Follows established patterns across the full stack",
              "Minimal but growing impact on product delivery",
            ],
            collaboration: [
              "Communicates progress and blockers across frontend and backend domains",
              "Pairs with specialists to deepen knowledge in both areas",
              "Participates in sprint rituals and code reviews",
            ],
            growthMindset: [
              "Actively builds breadth across the stack while identifying strengths",
              "Seeks feedback from both frontend and backend peers",
              "Explores product thinking — understands how features serve users",
            ],
          },
          IC3: {
            title: "Mid-Level Fullstack Engineer",
            yoe: "2–4 years",
            summary: "Independently delivers features end-to-end, from UI to backend to deployment.",
            technicalSkills: [
              "Proficient in React.js/Next.js (frontend) and Node.js or Python (backend)",
              "Strong TypeScript skills across the stack",
              "Experience with relational databases (PostgreSQL), NoSQL (MongoDB/Redis), and GraphQL",
              "Can design and implement APIs, handle data modeling, and build responsive UIs",
              "Working knowledge of Docker, CI/CD, and cloud platforms (AWS/GCP)",
              "Understands testing strategies across frontend and backend",
            ],
            deliveryAndImpact: [
              "Owns and delivers medium-complexity features across the full stack",
              "Takes full ownership of projects: scope, architecture, implementation, and deployment",
              "Identifies and resolves issues proactively across layers",
              "Moderate impact on product velocity and quality",
            ],
            collaboration: [
              "Collaborates effectively with designers, product managers, and specialist engineers",
              "Contributes informed opinions in architectural and product discussions",
              "Helps bridge understanding between frontend and backend teams",
            ],
            growthMindset: [
              "Develops deeper expertise in one area while maintaining breadth",
              "Proactively improves code quality and developer workflows",
              "Product-minded — thinks about user impact, not just implementation",
            ],
          },
          IC4: {
            title: "Senior Fullstack Engineer",
            yoe: "4–7 years",
            summary: "Architects and delivers complex product features end-to-end, driving quality and mentoring the team.",
            technicalSkills: [
              "Expert across the stack — React/Next.js, Node.js/Python, databases, infrastructure",
              "Designs scalable architectures spanning frontend, backend, and data layers",
              "Advanced performance optimization across all layers of the stack",
              "Experience with microservices, event-driven systems, and real-time features",
              "Proficient with cloud infrastructure, IaC, and deployment automation",
              "Strong understanding of security, auth patterns, and compliance requirements",
            ],
            deliveryAndImpact: [
              "Builds core product features end-to-end — from idea to production",
              "Takes full ownership: scope, architecture, testing, deployment, and monitoring",
              "Drives measurable improvements in product quality and engineering velocity",
              "Significant impact on product outcomes and team capability",
            ],
            collaboration: [
              "Mentors engineers and drives a culture of ownership and quality",
              "Leads architectural discussions and aligns technical decisions with product goals",
              "Bridges technical and non-technical stakeholders with clear communication",
            ],
            growthMindset: [
              "High-ownership builder with an intense, intrinsic motivation to win",
              "Comfortable with ambiguity, fast decisions, and a high bar for quality",
              "Product-minded — cares deeply about user impact and business outcomes",
            ],
          },
          IC5: {
            title: "Staff Fullstack Engineer",
            yoe: "7+ years",
            summary: "Defines product and platform architecture, drives cross-team initiatives, and shapes engineering standards.",
            technicalSkills: [
              "Designs end-to-end system architectures across multiple products",
              "Deep expertise in both frontend and backend platforms — sets the standard in both",
              "Expert in distributed systems, data pipelines, and cloud infrastructure at scale",
              "Drives platform-level decisions — shared services, libraries, tooling, DX",
              "Evaluates and introduces technologies with a strategic, long-term lens",
            ],
            deliveryAndImpact: [
              "Shapes new product launches from zero to one — architecture, stack, and team setup",
              "Directly impacts company-wide results through product and platform excellence",
              "Sets the technical bar across the full stack for the engineering org",
              "Drives multi-quarter technical initiatives that unlock new capabilities",
            ],
            collaboration: [
              "Technical leadership across teams — aligns engineering with business strategy",
              "Mentors senior engineers and cultivates the next generation of tech leads",
              "Partners with product leadership on technical feasibility, trade-offs, and roadmap",
            ],
            growthMindset: [
              "Relentless dedication to engineering excellence and product impact",
              "Shapes engineering culture — sets norms for speed, quality, and ownership",
              "Drives innovation and challenges the status quo across the organization",
            ],
          },
          IC6: {
            title: "Principal Fullstack Engineer",
            yoe: "10+ years",
            summary: "Recognized expert defining the company's product engineering strategy across all layers.",
            technicalSkills: [
              "Specialised expertise spanning frontend, backend, data, and infrastructure",
              "Defines technical governance and engineering standards across the company",
              "Deep understanding of system economics and architectural trade-offs at scale",
            ],
            deliveryAndImpact: [
              "Materially impacts the success of the engineering function and business outcomes",
              "Owns the product engineering technical roadmap and long-term vision",
              "Shapes hiring standards and the technical excellence bar for the org",
            ],
            collaboration: [
              "Trusted advisor to engineering leadership and C-level stakeholders",
              "Mentors Staff engineers and shapes senior technical leadership",
              "Represents the company externally in the engineering community",
            ],
            growthMindset: [
              "Defines what excellence looks like for fullstack engineering at Almedia",
              "Balances hands-on technical depth with strategic organizational thinking",
            ],
          },
        },
      },
      ai_fullstack: {
        label: "AI Fullstack Engineer",
        icon: "◆",
        color: "#C2185B",
        levels: {
          IC2: {
            title: "Junior AI Fullstack Engineer",
            yoe: "0–2 years",
            summary: "Integrates AI APIs into applications under guidance, building foundational AI engineering skills.",
            technicalSkills: [
              "Basic proficiency in Node.js or Python and a frontend framework (React)",
              "Can integrate AI APIs (OpenAI, Anthropic, etc.) into existing applications",
              "Understanding of prompting fundamentals and basic prompt engineering",
              "Familiarity with REST APIs, databases, and full-stack development basics",
              "Basic understanding of AI concepts — LLMs, embeddings, token management",
              "Can use current AI tools (Copilot, ChatGPT, Claude) effectively for development",
            ],
            deliveryAndImpact: [
              "Implements AI-powered features from clear specifications",
              "Integrates AI APIs into existing workflows with guidance",
              "Delivers small AI-augmented tools and features",
              "Follows established patterns for AI integration and error handling",
            ],
            collaboration: [
              "Communicates clearly with both technical and non-technical stakeholders",
              "Works with business teams to understand where AI can add value",
              "Shares learnings about AI tools and capabilities with the team",
            ],
            growthMindset: [
              "Strong curiosity and learning mindset, especially around AI developments",
              "Actively experiments with new AI models, tools, and approaches",
              "Stays current with the rapidly evolving AI landscape",
            ],
          },
          IC3: {
            title: "Mid-Level AI Fullstack Engineer",
            yoe: "2–4 years",
            summary: "Independently builds AI-powered tools and products, bridging engineering with business workflows.",
            technicalSkills: [
              "Strong production experience with Node.js or Python and React/Next.js",
              "Proficient in integrating and orchestrating multiple AI APIs and services",
              "Good prompting skills — designs effective prompts, manages context windows, handles edge cases",
              "Experience with n8n or similar automation/orchestration tools",
              "Familiarity with agentic and system-thinking approaches for AI solutions",
              "Can work across multiple systems and data sources, making sense of fragmented data",
              "Understanding of vector databases, RAG patterns, and embedding pipelines",
            ],
            deliveryAndImpact: [
              "Develops and maintains full-stack applications with integrated AI capabilities",
              "Builds and iterates on internal tools and products that automate business workflows",
              "Translates business needs into AI-powered technical solutions and iterates on them",
              "Moderate impact on operational efficiency through AI-driven improvements",
            ],
            collaboration: [
              "Collaborates with business teams (marketing, UA, operations) to identify AI opportunities",
              "Understands stakeholder workflows and suggests AI-driven improvements",
              "Communicates AI capabilities and limitations clearly to non-technical partners",
            ],
            growthMindset: [
              "Proactive approach — goes to people, understands their work, suggests improvements",
              "Comfortable with ambiguity and evolving requirements in the AI space",
              "Engineering-first mindset with the ability to understand business context",
            ],
          },
          IC4: {
            title: "Senior AI Fullstack Engineer",
            yoe: "4–7 years",
            summary: "Designs AI-integrated systems, drives AI strategy for products, and mentors the team.",
            technicalSkills: [
              "Expert in full-stack AI application architecture — frontend, backend, AI orchestration layer",
              "Deep knowledge of LLM integration patterns — routing, fallbacks, streaming, caching, evaluation",
              "Designs agentic systems with tool use, memory, and multi-step reasoning",
              "Experience with ML pipeline basics — fine-tuning, evaluation, A/B testing AI features",
              "Proficient in cloud AI services (GCP Vertex AI, AWS Bedrock) and deployment patterns",
              "Strong understanding of AI safety, cost optimization, and reliability at scale",
            ],
            deliveryAndImpact: [
              "Architects AI-powered products and internal tools from concept to production",
              "Drives measurable business impact through AI-enabled automation and decision-making",
              "Sets standards for AI integration quality, testing, and monitoring",
              "Significant impact on how AI is leveraged across the organization",
            ],
            collaboration: [
              "Mentors engineers in AI best practices and helps upskill the team",
              "Partners with product and business leadership to define AI strategy",
              "Bridges data science, engineering, and business teams effectively",
            ],
            growthMindset: [
              "Stays at the cutting edge of AI developments and brings innovations to the org",
              "Thinks strategically about AI's role in the product and business",
              "Drives the team toward AI-first thinking and modern development practices",
            ],
          },
          IC5: {
            title: "Staff AI Fullstack Engineer",
            yoe: "7+ years",
            summary: "Defines the company's AI engineering strategy, builds foundational AI platforms, and drives org-wide adoption.",
            technicalSkills: [
              "Defines and evolves the AI platform architecture — orchestration, evaluation, deployment, monitoring",
              "Expert in multi-agent systems, complex AI workflows, and production AI reliability",
              "Deep understanding of ML/AI model selection, fine-tuning, and evaluation frameworks",
              "Designs AI-native product architectures that fundamentally change how the company operates",
              "Expert in cost, latency, and quality trade-offs for AI systems at scale",
            ],
            deliveryAndImpact: [
              "Drives company-wide AI transformation through platform and tooling investments",
              "Shapes new AI-native products from zero to one",
              "Directly impacts business results through AI-driven operational improvements",
              "Sets the technical bar for AI engineering across the organization",
            ],
            collaboration: [
              "Provides technical leadership on AI across all teams",
              "Partners with C-level leadership to shape AI strategy and investment",
              "Mentors senior engineers and grows AI engineering capability org-wide",
            ],
            growthMindset: [
              "Recognised internally as the go-to authority on AI engineering",
              "Drives cultural shift toward AI-enabled workflows across all functions",
              "Continuously pushes the boundaries of what AI can do for the business",
            ],
          },
          IC6: {
            title: "Principal AI Fullstack Engineer",
            yoe: "10+ years",
            summary: "Recognized expert defining the company's AI engineering vision and influencing the broader AI community.",
            technicalSkills: [
              "Specialised expertise across AI systems, ML infrastructure, and product engineering",
              "Defines AI technical governance, ethics guidelines, and quality standards",
              "Deep understanding of AI research trends and their practical applications",
            ],
            deliveryAndImpact: [
              "Materially impacts company success through AI strategy and platform decisions",
              "Owns the AI engineering roadmap and long-term technical vision",
              "Shapes the company's competitive advantage through AI innovation",
            ],
            collaboration: [
              "Trusted advisor to leadership on all AI-related technical decisions",
              "External thought leader — talks, publications, open-source contributions in AI",
            ],
            growthMindset: [
              "Defines what AI engineering excellence looks like for the company and industry",
              "Balances deep AI expertise with broad business and product strategy",
            ],
          },
        },
      },
    },
  },
  data: {
    label: "Data",
    roles: {
      data_scientist: {
        label: "Data Scientist",
        icon: "△",
        color: "#00838F",
        levels: {
          IC2: {
            title: "Junior Data Scientist",
            yoe: "0–2 years",
            summary: "Performs structured analyses and builds basic models under guidance.",
            technicalSkills: [
              "Proficiency in Python and SQL for data analysis and manipulation",
              "Understanding of statistical fundamentals — probability, regression, hypothesis testing",
              "Can build and evaluate basic ML models (classification, regression, clustering)",
              "Experience with data manipulation libraries (Pandas, NumPy, Scikit-learn)",
              "Basic data visualization skills (Matplotlib, Seaborn, or similar)",
              "Familiarity with Jupyter notebooks and reproducible analysis workflows",
              "Basic understanding of A/B testing methodology",
            ],
            deliveryAndImpact: [
              "Performs well-scoped analyses and delivers insights with clear guidance",
              "Builds basic ML models for defined business problems",
              "Delivers clean, documented analysis notebooks",
              "Minimal but growing impact on data-driven decision-making",
            ],
            collaboration: [
              "Works with senior data scientists to understand problem framing and approach",
              "Communicates analysis results in a clear, structured manner",
              "Participates in team discussions and knowledge-sharing sessions",
            ],
            growthMindset: [
              "Actively learns ML techniques, statistical methods, and domain knowledge",
              "Seeks feedback on analysis approach and model design",
              "Explores the business context — understands how data supports decisions",
            ],
          },
          IC3: {
            title: "Mid-Level Data Scientist",
            yoe: "2–4 years",
            summary: "Independently designs experiments, builds ML models, and delivers actionable insights.",
            technicalSkills: [
              "Strong statistical knowledge — A/B tests, causal inference, Bayesian methods, regression",
              "Proficient in building, deploying, and evaluating ML models for real-world problems",
              "Experience with cloud platforms (GCP preferred) — BigQuery, Vertex AI, or equivalent",
              "Solid data engineering awareness — data pipelines, feature engineering, ETL processes",
              "Working knowledge of model deployment patterns — APIs, batch inference, monitoring",
              "Experience with experiment design, measurement plans, and statistical significance",
              "Good communication skills — can present complex findings clearly and concisely",
            ],
            deliveryAndImpact: [
              "Identifies ML opportunities and works with stakeholders to realize business value",
              "Delivers end-to-end ML models — from data exploration to deployment",
              "Applies rigorous statistical methodology to experiment design and analysis",
              "Moderate impact on product decisions and user understanding through data insights",
            ],
            collaboration: [
              "Collaborates with product managers, engineers, and UA channel managers",
              "Translates business questions into well-framed data science problems",
              "Partners with data engineers to ensure clean, reliable data for experimentation",
            ],
            growthMindset: [
              "Develops depth in a specialty — causal inference, ML systems, or experimental design",
              "Proactively identifies high-value data opportunities for the business",
              "Stays current with data science techniques and industry best practices",
            ],
          },
          IC4: {
            title: "Senior Data Scientist",
            yoe: "4–7 years",
            summary: "Leads data science projects, builds production ML systems, and drives data-informed strategy.",
            technicalSkills: [
              "Extensive experience developing and leading ML projects and small teams",
              "Expertise in building, deploying, measuring, and maintaining production ML models",
              "Deep statistical knowledge and rigorous experimental methodology",
              "Strong understanding of data engineering workflows — DBT, Airflow, K8s",
              "Proficiency in Python, SQL, and cloud platforms (GCP preferred) with Terraform",
              "Experience with causal inference, measurement frameworks, and growth analytics",
              "Can architect end-to-end ML solutions from data pipelines to model serving",
            ],
            deliveryAndImpact: [
              "Leads complex ML projects from problem definition to production deployment",
              "Builds measurement plans, learns, and iterates to drive results",
              "Applies solid statistical best practices across model development and evaluation",
              "Significant impact on product strategy and business decisions through data insights",
            ],
            collaboration: [
              "Mentors junior data scientists and helps shape team practices",
              "Drives clarity, creates structure, and brings stakeholders on board",
              "Excellent communication and leadership skills — influences cross-functional decisions",
              "Partners with engineering to seamlessly integrate models into production systems",
            ],
            growthMindset: [
              "Combines measurement rigour with builder instincts",
              "Takes ambiguous, high-stakes questions and builds data infrastructure to answer them",
              "Proactively identifies gaps in data capabilities and drives improvements",
            ],
          },
          IC5: {
            title: "Staff Data Scientist",
            yoe: "7+ years",
            summary: "Shapes data science strategy, builds foundational data capabilities, and drives cross-functional leadership.",
            technicalSkills: [
              "Deep expertise across ML, statistics, causal inference, and experimental design",
              "Robust experience with modern data stack — DBT, Airflow, K8s, Terraform, BigQuery",
              "Designs data science platforms and shared tooling that scale across the organization",
              "Expert in multiple ML domains — recommendation systems, NLP, optimization, forecasting",
              "Deep understanding of how data science intersects with product, marketing, and operations",
            ],
            deliveryAndImpact: [
              "Shapes how the company understands users, optimises incentives, and makes decisions",
              "Builds foundations of scalable, data-informed decision-making across the organization",
              "Combines hands-on modelling with cross-functional leadership for high-impact results",
              "Directly impacts company-wide strategy through data-driven insights and systems",
            ],
            collaboration: [
              "Provides data science leadership across multiple teams and product areas",
              "Partners with executive leadership to define data strategy and investment priorities",
              "Mentors senior data scientists and grows the team's capabilities",
              "Drives alignment between data science, engineering, and business goals",
            ],
            growthMindset: [
              "Zero-to-one specialist — loves ambiguity and turning raw ideas into revenue-generating systems",
              "Continuously raises the bar for analytical rigour and ML excellence",
              "Shapes the data culture of the entire organization",
            ],
          },
          IC6: {
            title: "Principal Data Scientist",
            yoe: "10+ years",
            summary: "Recognized expert defining the company's data science vision and influencing the broader data community.",
            technicalSkills: [
              "Specialised expertise across ML, statistics, data platforms, and AI systems",
              "Defines data science governance, methodology standards, and quality frameworks",
              "Deep understanding of emerging ML/AI research and practical industry applications",
            ],
            deliveryAndImpact: [
              "Materially impacts company success through data strategy and analytical systems",
              "Owns the data science roadmap and long-term analytical vision",
              "Transforms the company's competitive advantage through data innovation",
            ],
            collaboration: [
              "Trusted advisor to leadership on all data-related strategic decisions",
              "External thought leader — publications, talks, industry contributions",
            ],
            growthMindset: [
              "Defines what data science excellence looks like for the company",
              "Bridges deep analytical expertise with broad business and product strategy",
            ],
          },
        },
      },
      data_analyst: {
        label: "Data Analyst",
        icon: "□",
        color: "#E65100",
        levels: {
          IC2: {
            title: "Junior Data Analyst",
            yoe: "0–2 years",
            summary: "Performs structured data analysis under guidance, building foundational analytical skills.",
            technicalSkills: [
              "Proficiency in SQL for querying and manipulating data",
              "Basic Python or R skills for data analysis and scripting",
              "Experience with data visualization tools (Looker, Tableau, or Google Data Studio)",
              "Understanding of basic statistics — averages, distributions, correlation, significance",
              "Familiarity with spreadsheet tools (Google Sheets, Excel) for ad-hoc analysis",
              "Can work with BigQuery or similar data warehouse for querying large datasets",
              "Basic understanding of A/B test interpretation",
            ],
            deliveryAndImpact: [
              "Builds dashboards and reports from clear specifications",
              "Performs well-scoped analyses and delivers structured insights",
              "Maintains and updates existing reports and data documentation",
              "Minimal but growing impact on team's data-driven decisions",
            ],
            collaboration: [
              "Works with senior analysts to understand stakeholder needs and context",
              "Presents findings in a clear, structured format to immediate team",
              "Asks good questions to clarify analysis requirements",
            ],
            growthMindset: [
              "Actively learns SQL, data visualization, and the business domain (AdTech, UA, user behavior)",
              "Seeks feedback on analysis quality and communication",
              "Explores data proactively — looks for patterns beyond the immediate ask",
            ],
          },
          IC3: {
            title: "Mid-Level Data Analyst",
            yoe: "2–4 years",
            summary: "Independently delivers analyses, designs dashboards, and drives data-informed decisions for stakeholders.",
            technicalSkills: [
              "Advanced SQL — complex joins, window functions, CTEs, performance optimization",
              "Proficient in Python for data analysis, automation, and statistical testing",
              "Designs and builds self-service dashboards and reporting systems",
              "Strong understanding of A/B testing, statistical significance, and experiment analysis",
              "Experience with data modeling and ETL/ELT concepts (DBT awareness)",
              "Can work with event data, user funnels, cohort analysis, and retention metrics",
              "Familiarity with creative performance data and UA channel metrics",
            ],
            deliveryAndImpact: [
              "Independently identifies, scopes, and delivers analytical projects",
              "Gathers and analyzes performance data to derive actionable insights",
              "Sets up and executes A/B tests and experiments to optimize performance",
              "Moderate impact on product, marketing, and UA strategy through data insights",
            ],
            collaboration: [
              "Partners with product managers, marketers, and UA channel managers directly",
              "Translates complex data findings into clear recommendations for stakeholders",
              "Proactively surfaces data insights that drive business decisions",
            ],
            growthMindset: [
              "Develops deeper expertise in a domain — UA, creative analytics, product analytics, or monetization",
              "Proactively improves data quality, documentation, and analytical workflows",
              "Seeks to understand the 'why' behind the numbers, not just the 'what'",
            ],
          },
          IC4: {
            title: "Senior Data Analyst",
            yoe: "4–7 years",
            summary: "Leads analytical strategy for a domain, mentors analysts, and drives data culture.",
            technicalSkills: [
              "Expert SQL skills and advanced Python for analytical workflows and automation",
              "Designs measurement frameworks and KPI definitions for product areas",
              "Deep understanding of experimentation methodology and causal analysis",
              "Experience with data modeling, data quality frameworks, and governance",
              "Can build and maintain analytical infrastructure — automated pipelines, self-service tools",
              "Proficient with BigQuery, Looker/Tableau, and the modern data stack (DBT, Airflow)",
              "Understanding of ML concepts sufficient to collaborate with data scientists",
            ],
            deliveryAndImpact: [
              "Owns analytical strategy for a major product area or business function",
              "Defines KPIs, measurement frameworks, and success criteria for key initiatives",
              "Delivers high-impact analyses that directly influence strategic decisions",
              "Significant impact on business outcomes through data-driven strategy",
            ],
            collaboration: [
              "Mentors junior and mid-level analysts — builds team capability and quality standards",
              "Trusted analytical partner for senior stakeholders and leadership",
              "Drives data literacy and self-service analytics across the organization",
              "Leads cross-functional analytical projects with clear communication",
            ],
            growthMindset: [
              "Proactively identifies gaps in data capabilities and drives improvements",
              "Shapes how the team approaches analysis, experimentation, and measurement",
              "Stays current with analytics best practices and AdTech industry trends",
            ],
          },
          IC5: {
            title: "Staff Data Analyst",
            yoe: "7+ years",
            summary: "Defines the company's analytics strategy, builds analytical platforms, and drives data-informed culture.",
            technicalSkills: [
              "Defines analytics standards, data models, and governance across the organization",
              "Designs scalable self-service analytics platforms and tooling",
              "Expert in advanced analytical techniques — causal inference, predictive modeling, segmentation",
              "Deep understanding of the AdTech ecosystem, UA economics, and user behavior at scale",
            ],
            deliveryAndImpact: [
              "Directly influences product, rewards, marketing, and UA strategies through analytics",
              "Builds analytical foundations that scale with the company's growth",
              "Directly impacts company-wide strategy and decision-making quality",
              "Sets the bar for analytical rigor and insight quality across the org",
            ],
            collaboration: [
              "Provides analytical leadership across multiple teams and domains",
              "Partners with executive leadership on strategic measurement and decision frameworks",
              "Mentors senior analysts and grows the analytical capability of the organization",
            ],
            growthMindset: [
              "Shapes the data culture and analytical maturity of the company",
              "Continuously raises the bar for data-driven decision-making",
              "Bridges deep analytical expertise with business strategy and product vision",
            ],
          },
          IC6: {
            title: "Principal Data Analyst",
            yoe: "10+ years",
            summary: "Recognized expert defining the company's analytical vision and measurement philosophy.",
            technicalSkills: [
              "Specialised expertise across analytics, data platforms, and business intelligence",
              "Defines analytical governance and quality standards for the company",
              "Deep understanding of measurement economics and attribution at scale",
            ],
            deliveryAndImpact: [
              "Materially impacts company success through analytical strategy",
              "Owns the analytics roadmap and long-term measurement vision",
              "Transforms competitive advantage through data-driven insights",
            ],
            collaboration: [
              "Trusted advisor to C-level on all analytics and measurement decisions",
              "External thought leader in AdTech analytics and measurement",
            ],
            growthMindset: [
              "Defines what analytical excellence looks like at Almedia",
              "Balances deep analytical expertise with broad strategic thinking",
            ],
          },
        },
      },
    },
  },
  product: {
    label: "Product",
    hasTeams: true,
    teams: {
      product_management: {
        label: "Product Management",
        icon: "◈",
        color: "#6366F1",
        roles: {
          product_manager: {
            label: "Product Manager",
            levels: {
              IC2: {
                title: "Junior Product Manager",
                summary: "Supports product delivery with structured requirements and clear communication across engineering and design.",
                technicalSkills: [
                  "Writes user stories and acceptance criteria with guidance from senior PMs",
                  "Tracks feature work in Jira from scoping through release",
                  "Understands core product metrics: DAU, retention, conversion, and funnel drop-off",
                  "Creates basic dashboards in Amplitude or Looker to monitor feature adoption",
                  "Familiar with A/B testing concepts and can interpret basic experiment results",
                ],
                deliveryAndImpact: [
                  "Completes clearly defined product tasks with regular check-ins",
                  "Supports release processes including QA coordination and release notes",
                  "Documents feature decisions and their rationale in a structured way",
                ],
                collaboration: [
                  "Works closely with engineering and design on defined feature areas",
                  "Participates in sprint planning and provides clear requirements",
                  "Communicates progress and blockers clearly within the team",
                  "Supports onboarding of new team members where applicable",
                ],
                growthMindset: [
                  "Learns from senior PMs through shadowing and regular 1:1s",
                  "Builds product intuition through data exploration and user research",
                  "Studies analytics tools used at Almedia (Amplitude, Hex, Looker)",
                  "Uses AI tools to accelerate documentation and research tasks",
                ],
              },
              IC3: {
                title: "Product Manager",
                summary: "Independently drives features end-to-end from discovery to launch, with clear ownership of outcomes.",
                technicalSkills: [
                  "Writes complete PRDs: problem statement, user stories, edge cases, and success metrics",
                  "Designs and runs A/B tests: hypothesis, setup, analysis, and decision",
                  "Analyses product data independently using Amplitude and basic SQL",
                  "Maintains a feature roadmap for a defined product area with clear prioritisation logic",
                  "Understands technical architecture well enough to make informed trade-off decisions",
                ],
                deliveryAndImpact: [
                  "Independently delivers features from discovery through launch and post-launch iteration",
                  "Defines measurable success metrics before launch and tracks them rigorously",
                  "Ships features on schedule with clear stakeholder communication throughout",
                  "Iterates based on post-launch data and structured user feedback",
                ],
                collaboration: [
                  "Works with engineering to scope features and negotiate technical constraints",
                  "Collaborates with product design on user flows and UX decisions",
                  "Designs experiments in close collaboration with the data team",
                  "Presents feature updates and decisions to stakeholders with clear context",
                ],
                growthMindset: [
                  "Proactively identifies product problems through data analysis and user signals",
                  "Develops deep understanding of Almedia's users and their motivations",
                  "Uses AI tools for faster research, documentation, and experiment analysis",
                  "Seeks feedback on product decisions and iterates based on outcomes",
                ],
              },
              IC4: {
                title: "Senior Product Manager",
                summary: "Owns a product area with full accountability for outcomes, cross-functional leadership, and measurable business impact.",
                technicalSkills: [
                  "Defines quarterly OKRs for a product area and tracks progress with clear data",
                  "Runs complex multi-variant experiments and draws clear decisions from ambiguous data",
                  "Deep working knowledge of product analytics stack: Amplitude, Hex, Looker, SQL",
                  "Translates technical complexity into clear product trade-offs for engineering and leadership",
                  "Designs product solutions that span multiple teams and system boundaries",
                ],
                deliveryAndImpact: [
                  "Owns a product area with measurable business impact across a quarter",
                  "Drives features that move key metrics: retention, revenue, and user engagement",
                  "Delivers complex cross-functional projects on time and within scope",
                  "Makes prioritisation decisions backed by clear data, user evidence, and business context",
                ],
                collaboration: [
                  "Mentors IC2/IC3 PMs through structured feedback and product reviews",
                  "Partners with engineering leads on architecture decisions that affect the product",
                  "Presents roadmap and product bets to leadership with confidence and clarity",
                  "Aligns marketing, operations, and engineering on go-to-market and launch plans",
                ],
                growthMindset: [
                  "Develops product intuition from consistent user research and data review",
                  "Challenges assumptions with evidence before committing to solutions",
                  "Brings external product best practices into the team",
                  "Full accountability for product outcomes, not just output",
                ],
              },
              IC5: {
                title: "Staff Product Manager",
                summary: "Defines product strategy across multiple areas, builds frameworks that scale, and drives company-level impact.",
                technicalSkills: [
                  "Defines product strategy across multiple product areas with a clear long-term vision",
                  "Deep expertise in growth mechanics: acquisition, engagement, monetisation, and retention loops",
                  "Architects product frameworks and decision-making processes that scale across the PM team",
                  "Designs measurement infrastructure to evaluate product quality and business outcomes",
                  "Shapes data tooling requirements and drives adoption of product analytics standards",
                ],
                deliveryAndImpact: [
                  "Drives company-level product bets with significant and measurable revenue impact",
                  "Defines and owns product OKRs at a business unit level with full accountability",
                  "Sets the product quality bar and delivery standards for the organisation",
                  "Accelerates team velocity through clear frameworks and reduced decision-making friction",
                ],
                collaboration: [
                  "Partners with C-level leadership on product direction and strategic priorities",
                  "Mentors senior product managers and accelerates their growth",
                  "Represents the product perspective in engineering architecture discussions",
                  "Builds relationships with external partners relevant to product integrations",
                ],
                growthMindset: [
                  "Stays ahead of industry trends and brings innovative approaches into Almedia",
                  "Drives product culture and standards across engineering and business functions",
                  "Uses AI tooling to drive faster insights and shorter product decision cycles",
                  "Every decision traced to business outcomes — impact-obsessed",
                ],
              },
              M4: {
                title: "Product Lead",
                summary: "Leads a small PM team with accountability for domain outcomes, while staying close to product execution.",
                technicalSkills: [
                  "Deep product craft: coaches PMs on discovery, experimentation, and delivery",
                  "Sets product metrics standards and OKR-setting methodology for the team",
                  "Proficient in product analytics tools and ensures team-wide data literacy",
                  "Understands technical systems at a level that enables credible trade-off discussions with engineering",
                ],
                deliveryAndImpact: [
                  "Leads 2-4 PMs delivering business outcomes across a product domain",
                  "Owns quarterly OKRs for the product domain with full accountability for results",
                  "Removes blockers for the team and ensures reliable delivery of product commitments",
                  "Identifies risks early and adjusts plans to protect team commitments",
                ],
                collaboration: [
                  "Manages performance, feedback cycles, and career development for PMs",
                  "Partners with the engineering manager counterpart to align team priorities",
                  "Represents the product team in leadership discussions",
                  "Aligns stakeholders across product, engineering, design, and business teams",
                ],
                growthMindset: [
                  "Builds a strong product culture and high bar for quality within the team",
                  "Develops PM talent through structured feedback, career frameworks, and growth plans",
                  "Models full ownership — accountable for team outcomes, not just process",
                  "Continuously improves how the team works, not just what it delivers",
                ],
              },
              M5: {
                title: "Head of Product",
                summary: "Accountable for product outcomes across a business unit, with a strong focus on strategy and team development.",
                technicalSkills: [
                  "Defines product vision and 12-month roadmap for a business unit",
                  "Sets product methodology, processes, and decision-making standards for the function",
                  "Expert in growth, monetisation, and user engagement mechanics at scale",
                  "Understands the full technical landscape to set ambitious but achievable product strategy",
                ],
                deliveryAndImpact: [
                  "Accountable for business unit product outcomes and contributes to P&L discussions",
                  "Drives multi-quarter strategic product initiatives that define company direction",
                  "Improves team productivity and product quality systematically through process and tooling",
                  "Delivers product bets that meaningfully move company-level metrics",
                ],
                collaboration: [
                  "Manages multiple Product Leads and develops them as managers and leaders",
                  "Works directly with CEO/COO on strategic product priorities",
                  "Aligns product, engineering, marketing, and data functions around shared goals",
                  "Represents product externally with key partners and at industry events where relevant",
                ],
                growthMindset: [
                  "Shapes product organisation culture and the hiring bar for PMs",
                  "Raises product standards company-wide through frameworks and example",
                  "Brings strategic outside perspective and challenges internal assumptions",
                  "Focused on building a sustainable, high-performing product function",
                ],
              },
              M6: {
                title: "VP / Director of Product",
                summary: "Defines and owns company-wide product strategy, builds the product organisation, and drives transformational outcomes.",
                technicalSkills: [
                  "Owns company-wide product strategy, roadmap, and investment priorities",
                  "Defines the product operating model and ensures it scales with company growth",
                  "Deep understanding of competitive landscape, market dynamics, and user trends",
                  "Sets technical and product investment priorities in partnership with the CTO",
                ],
                deliveryAndImpact: [
                  "Responsible for all product outcomes at company level",
                  "Drives transformational product strategy that creates durable competitive advantage",
                  "Builds and scales the product organisation to meet company ambitions",
                  "Product decisions directly impact company valuation and revenue trajectory",
                ],
                collaboration: [
                  "Works with board, investors, and C-suite on product strategy and roadmap",
                  "Manages all product leaders and shapes the product leadership pipeline",
                  "Shapes product hiring standards and compensation philosophy across the function",
                  "External face of product: conferences, partnerships, and industry relationships",
                ],
                growthMindset: [
                  "Continuously redefines what great product looks like at Almedia",
                  "Shapes the company's product culture and standards across all functions",
                  "Influences the broader AdTech and mobile product community",
                  "Every decision traced to company-level outcomes — uncompromising on impact",
                ],
              },
            },
          },
        },
      },
      product_design: {
        label: "Product Design",
        icon: "✦",
        color: "#EC4899",
        roles: {
          product_designer: {
            label: "Product Designer",
            levels: {
              IC3: {
                title: "Product Designer",
                summary: "Owns design for defined features, produces high-quality UX flows, and collaborates closely with product and engineering.",
                technicalSkills: [
                  "Proficient in Figma — creates wireframes, prototypes, and production-ready designs",
                  "Understands UX principles and applies them to flows, information architecture, and interaction design",
                  "Conducts basic user research: usability tests, user interviews, and synthesis",
                  "Works within an existing design system and contributes components where needed",
                  "Understands technical constraints and adjusts designs based on engineering feedback",
                ],
                deliveryAndImpact: [
                  "Independently owns design for medium-complexity features from brief to handoff",
                  "Delivers design work on time and with clear documentation for engineering",
                  "Iterates quickly based on feedback from product, engineering, and user research",
                  "Contributes to improved UX quality and reduced time-to-clarity for engineering",
                ],
                collaboration: [
                  "Works closely with product managers to understand requirements and user problems",
                  "Collaborates with engineering to ensure design feasibility and accurate implementation",
                  "Presents design work with clear rationale and responds to critique constructively",
                  "Participates in design critiques and contributes to team design quality",
                ],
                growthMindset: [
                  "Develops craft through deliberate practice and peer feedback",
                  "Stays current with UX and design trends relevant to mobile and web products",
                  "Uses AI design tools to accelerate exploration and prototyping",
                  "Seeks to understand user behaviour through data and qualitative research",
                ],
              },
              IC4: {
                title: "Senior Product Designer",
                summary: "Leads design for complex product areas, shapes design standards, and mentors junior designers.",
                technicalSkills: [
                  "Expert Figma user — creates complex prototypes, manages component libraries, and documents design decisions",
                  "Designs end-to-end product experiences including onboarding, core flows, and edge cases",
                  "Leads user research initiatives: recruits participants, conducts sessions, synthesises insights",
                  "Maintains and extends the design system to ensure scalability and consistency",
                  "Deep understanding of accessibility standards and applies them throughout the design process",
                ],
                deliveryAndImpact: [
                  "Owns design for complex product areas spanning multiple features and user journeys",
                  "Produces design work that measurably improves user metrics (engagement, conversion, task success)",
                  "Drives design quality reviews and raises the bar for the team",
                  "Delivers consistent, production-ready work with minimal back-and-forth in engineering",
                ],
                collaboration: [
                  "Mentors IC3 designers through structured critique and hands-on guidance",
                  "Partners with senior PMs to shape product direction from a design perspective",
                  "Advocates for the user in cross-functional discussions with product and engineering",
                  "Drives alignment on design decisions across multiple stakeholders",
                ],
                growthMindset: [
                  "Brings external design best practices from leading consumer products into the team",
                  "Develops deep knowledge of Almedia's users through ongoing research",
                  "Ownership mindset — accountable for the quality of user experience in their product area",
                  "Uses AI design tools to explore more options in less time",
                ],
              },
              IC5: {
                title: "Staff Product Designer",
                summary: "Defines design strategy and standards across the product, shapes the design system, and influences product direction.",
                technicalSkills: [
                  "Owns and evolves the design system: component architecture, documentation, and adoption across teams",
                  "Defines design principles and quality standards for the product organisation",
                  "Expert in interaction design, information architecture, and motion design",
                  "Uses qualitative and quantitative data to drive design decisions at scale",
                  "Shapes the design tooling stack and process for the design function",
                ],
                deliveryAndImpact: [
                  "Drives design excellence across multiple product areas simultaneously",
                  "Creates design frameworks that improve consistency and reduce design time for the team",
                  "Has measurable influence on product metrics through design improvements",
                  "Defines the product's visual and interaction language across all surfaces",
                ],
                collaboration: [
                  "Partners with the Head of Product and engineering leadership on strategic design decisions",
                  "Mentors senior designers and shapes the design team culture",
                  "Represents design in company-level product strategy discussions",
                  "Works with external design contractors and sets quality standards for their work",
                ],
                growthMindset: [
                  "Continuously raises the design bar and challenges the team to do better",
                  "Brings an industry-wide perspective on design trends and best practices",
                  "Deeply curious about users — drives research culture across the product team",
                  "Impact-obsessed — measures design outcomes, not just design output",
                ],
              },
              M4: {
                title: "Lead Product Designer",
                summary: "Leads the design team, owns design quality across the product, and develops designers.",
                technicalSkills: [
                  "Expert across all aspects of product design: UX, visual design, prototyping, and research",
                  "Manages and evolves the design system with a focus on scalability",
                  "Defines design quality criteria and review processes for the team",
                  "Deep understanding of how design decisions impact engineering velocity and product metrics",
                ],
                deliveryAndImpact: [
                  "Leads a team of 2-5 designers with accountability for design quality across the product",
                  "Ensures consistent, high-quality design delivery across all product areas",
                  "Manages design resources and timelines across multiple concurrent projects",
                  "Drives improvement in design-to-engineering handoff quality and velocity",
                ],
                collaboration: [
                  "Manages designer performance, growth plans, and career development",
                  "Partners with Product Lead and engineering manager to align on priorities",
                  "Represents design in cross-functional leadership discussions",
                  "Recruits and onboards new designers to meet team standards",
                ],
                growthMindset: [
                  "Builds a strong design culture with a high bar for craft and user empathy",
                  "Develops designers through structured feedback and creative challenges",
                  "Stays current with design best practices and tools and introduces improvements",
                  "Accountable for team design outcomes and business impact",
                ],
              },
              M5: {
                title: "Head of Product Design",
                summary: "Defines design strategy for the company and builds a world-class design function.",
                technicalSkills: [
                  "Defines the company's design vision, principles, and long-term design strategy",
                  "Sets design methodology, process, and tooling standards for the function",
                  "Expert understanding of how design intersects with product, engineering, and business goals",
                  "Deep knowledge of user research methods and how to build a research-informed design culture",
                ],
                deliveryAndImpact: [
                  "Accountable for design quality and design team productivity across all products",
                  "Drives transformational UX improvements that create competitive differentiation",
                  "Builds and scales the design organisation to match company growth",
                  "Design decisions measurably contribute to key business metrics",
                ],
                collaboration: [
                  "Works directly with the VP of Product and CTO on product design strategy",
                  "Manages all design leads and shapes the design leadership pipeline",
                  "External representative for Almedia's design: community, recruitment, and partnerships",
                  "Drives design culture across all functions — not just within the design team",
                ],
                growthMindset: [
                  "Redefines what great design looks like at Almedia",
                  "Attracts and retains top design talent through strong culture and mentorship",
                  "Influences the product design community through example and external contribution",
                  "Design and business outcomes are inseparable — holds both to the same standard",
                ],
              },
            },
          },
        },
      },
      qa: {
        label: "QA Engineering",
        icon: "✓",
        color: "#F59E0B",
        roles: {
          qa_engineer: {
            label: "QA Engineer",
            levels: {
              IC2: {
                title: "Junior QA Engineer",
                summary: "Executes test cases, identifies bugs, and supports quality processes under guidance.",
                technicalSkills: [
                  "Executes manual test cases and documents results clearly",
                  "Understands basic software testing concepts: unit, integration, and end-to-end tests",
                  "Familiar with bug tracking in Jira: writing clear reproduction steps and severity ratings",
                  "Basic knowledge of browser DevTools for inspecting behaviour and network requests",
                  "Awareness of testing frameworks (Cypress, Jest) and how automated tests work",
                ],
                deliveryAndImpact: [
                  "Runs test cases for defined features and reports bugs with clear reproduction steps",
                  "Supports release sign-off processes by verifying acceptance criteria",
                  "Maintains test case documentation for assigned feature areas",
                ],
                collaboration: [
                  "Works closely with product managers and engineers to understand requirements",
                  "Communicates bugs and blockers clearly with reproducible steps",
                  "Participates in sprint ceremonies and contributes to quality discussions",
                ],
                growthMindset: [
                  "Learns testing fundamentals through practice and peer feedback",
                  "Develops understanding of the product and user flows through hands-on testing",
                  "Uses AI tools to generate test cases and spot edge cases faster",
                ],
              },
              IC3: {
                title: "QA Engineer",
                summary: "Independently owns test coverage for product areas and contributes to test automation.",
                technicalSkills: [
                  "Designs test plans covering functional, regression, edge case, and non-functional requirements",
                  "Writes and maintains automated end-to-end tests using Cypress or Playwright",
                  "Performs API testing using Postman or equivalent tools",
                  "Basic scripting skills (JavaScript or Python) for test automation",
                  "CI/CD integration — ensures test suites run on every deployment pipeline",
                ],
                deliveryAndImpact: [
                  "Independently owns test coverage for defined product areas",
                  "Reduces regression bugs reaching production through systematic test coverage",
                  "Delivers reliable test automation that runs in CI without maintenance burden",
                  "Contributes to faster release cycles through efficient quality processes",
                ],
                collaboration: [
                  "Works with engineers to define testability requirements during feature planning",
                  "Collaborates with product managers on acceptance criteria and edge case coverage",
                  "Participates in retrospectives and suggests quality process improvements",
                ],
                growthMindset: [
                  "Continuously improves test coverage and automation quality",
                  "Stays current with testing tools and methodologies",
                  "Uses AI tools to generate test cases and identify coverage gaps",
                  "Proactively identifies and flags quality risks before they reach production",
                ],
              },
              IC4: {
                title: "Senior QA Engineer",
                summary: "Leads quality strategy for product areas, builds robust test automation, and raises team quality standards.",
                technicalSkills: [
                  "Designs and implements scalable test automation frameworks",
                  "Performance and load testing: identifies bottlenecks before release",
                  "Security testing fundamentals: knows common attack vectors and how to test for them",
                  "Deep knowledge of CI/CD pipelines and how to optimise test execution for speed and reliability",
                  "Defines quality metrics and dashboards to track defect rates and test coverage",
                ],
                deliveryAndImpact: [
                  "Owns quality strategy and test coverage for a major product area",
                  "Measurably reduces production defects and time-to-detection for bugs",
                  "Drives test automation that scales with the product without growing maintenance overhead",
                  "Sets quality standards and review processes that improve team-wide output",
                ],
                collaboration: [
                  "Mentors IC2/IC3 QA engineers through structured review and pair testing",
                  "Partners with engineering leads on testing strategy and CI/CD optimisation",
                  "Advocates for testability and quality in product and engineering planning",
                  "Presents quality metrics and risk assessments to product and engineering leadership",
                ],
                growthMindset: [
                  "Raises the quality bar through systemic improvements, not just finding more bugs",
                  "Brings external testing best practices into the team",
                  "Uses AI tools to accelerate test generation and regression triage",
                  "Ownership mindset — accountable for product quality in their area",
                ],
              },
              IC5: {
                title: "Staff QA Engineer",
                summary: "Defines quality strategy across the organisation and builds quality tooling and infrastructure.",
                technicalSkills: [
                  "Defines quality strategy, tooling, and automation standards across the engineering organisation",
                  "Architects scalable test infrastructure that works across multiple products and teams",
                  "Expert in performance, security, and reliability testing at scale",
                  "Shapes CI/CD pipelines with quality gates that maintain release velocity",
                  "Defines and tracks quality KPIs that connect testing activities to business outcomes",
                ],
                deliveryAndImpact: [
                  "Drives quality improvements that reduce production incidents and increase user trust",
                  "Builds quality infrastructure that scales with the company's growth",
                  "Enables faster release cycles without sacrificing reliability",
                  "Quality decisions directly contribute to product retention and revenue metrics",
                ],
                collaboration: [
                  "Partners with engineering leadership on quality architecture and standards",
                  "Mentors senior QA engineers and shapes the QA function's culture",
                  "Influences product and engineering planning with quality-first thinking",
                  "External contributor to QA and testing community discussions",
                ],
                growthMindset: [
                  "Redefines what quality engineering looks like at Almedia",
                  "Stays at the forefront of testing tools, AI-assisted QA, and quality automation",
                  "Impact-obsessed — measures quality in terms of user experience and business outcomes",
                  "Builds a culture where quality is everyone's responsibility",
                ],
              },
            },
          },
        },
      },
    },
  },
  operations: {
    label: "Operations",
    hasTeams: true,
    teams: {
      finance: {
        label: "Finance",
        icon: "◉",
        color: "#10B981",
        roles: {
          finance_manager: {
            label: "Finance Manager",
            levels: {
              IC2: {
                title: "Junior Finance / Working Student",
                summary: "Supports finance operations, data entry, and reporting under supervision.",
                technicalSkills: [
                  "Proficient in Google Sheets and Excel for financial data entry and basic modelling",
                  "Understands double-entry bookkeeping fundamentals and basic accounting concepts",
                  "Familiar with accounts payable and receivable processes",
                  "Can prepare basic financial reports and reconciliation summaries",
                  "Basic knowledge of German accounting standards (HGB) awareness",
                ],
                deliveryAndImpact: [
                  "Processes invoices, expense reports, and payment runs accurately and on time",
                  "Supports month-end closing tasks with accurate data entry",
                  "Maintains organised financial records in compliance with internal standards",
                ],
                collaboration: [
                  "Coordinates with vendors and internal stakeholders on payment and invoice queries",
                  "Communicates discrepancies and open items clearly to senior Finance colleagues",
                  "Supports the Finance team during audits and compliance reviews",
                ],
                growthMindset: [
                  "Actively learns financial processes, tools, and accounting standards",
                  "Develops understanding of how finance connects to business operations",
                  "Uses AI and automation tools to reduce manual data processing tasks",
                ],
              },
              IC3: {
                title: "Finance Manager",
                summary: "Independently manages financial operations including AP/AR, reporting, and month-end closing.",
                technicalSkills: [
                  "Manages accounts payable and receivable accurately with minimal supervision",
                  "Prepares monthly and quarterly financial statements in line with HGB",
                  "Handles tax filings accurately and on time (VAT, corporate tax)",
                  "Proficient in financial management tools (e.g., DATEV, Xero, or equivalent)",
                  "Builds financial models and scenario analyses for operational decisions",
                ],
                deliveryAndImpact: [
                  "Delivers reliable monthly close with accurate books and clear variance explanations",
                  "Ensures all financial activities comply with HGB and internal control standards",
                  "Identifies and implements process improvements that reduce close time or error rate",
                  "Provides timely and accurate financial data to support business decisions",
                ],
                collaboration: [
                  "Works with leadership to prepare budget vs. actuals reporting",
                  "Coordinates with external auditors, tax advisors, and banking partners",
                  "Partners with People & Talent on payroll processes and employee expense management",
                  "Communicates financial health clearly to non-finance stakeholders",
                ],
                growthMindset: [
                  "Identifies opportunities to automate or improve financial workflows",
                  "Stays current with German accounting and tax regulatory changes",
                  "Uses AI tools to accelerate reconciliation and financial analysis tasks",
                  "Proactively surfaces financial risks and opportunities to the business",
                ],
              },
              IC4: {
                title: "Senior Finance Manager",
                summary: "Owns complex financial reporting and compliance, builds forecasting models, and partners closely with leadership.",
                technicalSkills: [
                  "Expert in financial planning and analysis (FP&A): budgeting, forecasting, and scenario modelling",
                  "Deep knowledge of HGB and IFRS accounting standards",
                  "Designs and implements internal controls and financial processes",
                  "Advanced financial modelling: cash flow forecasting, unit economics, and investor-ready reporting",
                  "Manages equity tracking and cap table administration (VSOP/ESOP)",
                ],
                deliveryAndImpact: [
                  "Delivers accurate and insightful financial reporting that directly informs strategic decisions",
                  "Manages company cash flow with a clear view of runway and risk",
                  "Leads annual budgeting and quarterly reforecast processes",
                  "Identifies tax optimisation opportunities that reduce liabilities",
                ],
                collaboration: [
                  "Trusted finance partner for CEO, COO, and department heads",
                  "Works with external auditors and manages the annual audit process",
                  "Advises on financial implications of business decisions including hiring, pricing, and M&A",
                  "Represents finance in board reporting and investor communications",
                ],
                growthMindset: [
                  "Proactively improves financial systems and reporting quality",
                  "Challenges the business to make financially sound decisions",
                  "Brings best practices from high-growth companies into Almedia's finance function",
                  "Develops deep understanding of the AdTech business model and its economics",
                ],
              },
              IC5: {
                title: "Lead Finance Manager",
                summary: "Leads the Finance function, owns financial strategy, and ensures Almedia's financial health at scale.",
                technicalSkills: [
                  "Owns the company's financial strategy: capital allocation, funding rounds, and financial planning",
                  "Expert in international accounting, transfer pricing, and multi-entity financial management",
                  "Designs the finance technology stack and ensures systems scale with company growth",
                  "Deep expertise in investor reporting, KPI definition, and board-level financial communication",
                  "Manages relationships with banks, investors, and financial service providers",
                ],
                deliveryAndImpact: [
                  "Accountable for the financial health and transparency of Almedia",
                  "Leads fundraising processes and manages investor relationships",
                  "Enables fast company growth by ensuring financial infrastructure scales reliably",
                  "Financial decisions directly contribute to company runway, valuation, and growth",
                ],
                collaboration: [
                  "Partners with CEO/COO on company strategy and capital allocation",
                  "Manages and develops the Finance team",
                  "Works with legal, people, and operations on cross-functional financial matters",
                  "External face of Finance with investors, banks, and advisors",
                ],
                growthMindset: [
                  "Builds a Finance function that enables rather than restricts fast company growth",
                  "Continuously raises financial reporting quality and strategic insight",
                  "Shapes the financial culture of the company",
                  "Obsessed with financial transparency and data accuracy",
                ],
              },
            },
          },
        },
      },
      b2b_marketing: {
        label: "B2B Marketing",
        icon: "◆",
        color: "#F97316",
        roles: {
          marketing_manager: {
            label: "B2B Marketing Manager",
            levels: {
              IC3: {
                title: "B2B Marketing Manager",
                summary: "Executes B2B marketing campaigns and supports advertiser acquisition and retention efforts.",
                technicalSkills: [
                  "Creates and manages B2B marketing content: case studies, one-pagers, presentations, and email campaigns",
                  "Proficient in marketing automation tools (e.g., HubSpot, Mailchimp, or equivalent)",
                  "Understands the AdTech and mobile gaming advertiser landscape",
                  "Manages social media channels (LinkedIn) and tracks engagement metrics",
                  "Basic knowledge of SEO, paid media, and event marketing logistics",
                ],
                deliveryAndImpact: [
                  "Executes marketing campaigns that generate qualified leads for the sales team",
                  "Manages event logistics end-to-end: trade shows, webinars, and partner events",
                  "Produces marketing materials that clearly communicate Almedia's value proposition",
                  "Tracks campaign performance and reports on marketing attribution to pipeline",
                ],
                collaboration: [
                  "Works closely with sales and partnerships teams to align marketing with revenue goals",
                  "Coordinates with design and content teams for marketing asset production",
                  "Syncs with product on messaging for new features and launches",
                  "Communicates event and campaign plans clearly to internal stakeholders",
                ],
                growthMindset: [
                  "Develops understanding of advertiser needs and buying behaviour",
                  "Stays current with B2B marketing best practices and AdTech industry trends",
                  "Uses AI tools to produce content faster and test messaging more effectively",
                  "Proactively identifies new marketing channels and content opportunities",
                ],
              },
              IC4: {
                title: "Senior B2B Marketing Manager",
                summary: "Leads marketing initiatives for key regions or segments, with clear contribution to advertiser pipeline.",
                technicalSkills: [
                  "Designs and executes integrated B2B marketing programmes: content, events, email, and paid",
                  "Builds marketing attribution models to track campaign ROI and pipeline contribution",
                  "Expert in the mobile gaming advertiser market: key players, buying cycles, and decision-makers",
                  "Manages regional marketing strategies (e.g., APAC, DACH, US) tailored to local market needs",
                  "Proficient in CRM and marketing analytics (Salesforce, HubSpot, Google Analytics)",
                ],
                deliveryAndImpact: [
                  "Drives a measurable portion of the advertiser pipeline through owned marketing channels",
                  "Launches campaigns that increase brand awareness among target advertiser segments",
                  "Manages marketing budgets with clear ROI accountability",
                  "Delivers events and campaigns on time, within budget, and with measurable outcomes",
                ],
                collaboration: [
                  "Serves as the marketing partner for regional sales and partnerships leads",
                  "Collaborates with the Creative team on brand-consistent campaign assets",
                  "Works with Product on co-marketing opportunities and product launch messaging",
                  "Presents marketing performance and pipeline contribution to leadership",
                ],
                growthMindset: [
                  "Challenges marketing assumptions with data and structured experimentation",
                  "Brings new marketing approaches from adjacent industries into the B2B strategy",
                  "Uses AI tools for faster content creation and campaign optimisation",
                  "Ownership mindset — accountable for marketing contribution to revenue, not just activity",
                ],
              },
              M4: {
                title: "Global B2B Marketing Lead",
                summary: "Leads the B2B Marketing function with accountability for global pipeline contribution and team development.",
                technicalSkills: [
                  "Defines B2B marketing strategy across channels, geographies, and buyer segments",
                  "Expert in demand generation, account-based marketing (ABM), and brand positioning",
                  "Builds and manages the marketing technology stack for efficiency and scale",
                  "Deep knowledge of the global mobile advertising market and key advertiser categories",
                  "Sets marketing KPI frameworks and reporting standards for the function",
                ],
                deliveryAndImpact: [
                  "Accountable for marketing's contribution to advertiser pipeline and revenue growth",
                  "Leads the global marketing calendar with clear priorities and budget allocation",
                  "Drives brand awareness among target advertisers at scale",
                  "Marketing outcomes directly support company growth targets",
                ],
                collaboration: [
                  "Manages and develops the B2B Marketing team",
                  "Partners with VP of Sales and Head of Partnerships on go-to-market strategy",
                  "Works with the CEO and COO on brand positioning and external communications",
                  "Manages agency and vendor relationships for marketing execution",
                ],
                growthMindset: [
                  "Builds a marketing function that punches above its weight for company size",
                  "Develops team members and creates a culture of experimentation and impact",
                  "Stays at the forefront of B2B marketing trends, especially in AdTech",
                  "Holds marketing to measurable business outcomes, not vanity metrics",
                ],
              },
            },
          },
        },
      },
      legal: {
        label: "Legal",
        icon: "⊡",
        color: "#6B7280",
        roles: {
          legal_counsel: {
            label: "Legal Counsel",
            levels: {
              IC4: {
                title: "Legal Counsel",
                summary: "Provides legal support across commercial, regulatory, and corporate matters with increasing independence.",
                technicalSkills: [
                  "Drafts, reviews, and negotiates commercial contracts: MSAs, NDAs, data processing agreements",
                  "Working knowledge of GDPR and data protection requirements relevant to AdTech",
                  "Understands German and EU corporate law for a GmbH structure",
                  "Familiar with employment law requirements for a scaling company",
                  "Knowledge of IP protection and trademark management",
                ],
                deliveryAndImpact: [
                  "Provides accurate and timely legal support to commercial and operational teams",
                  "Reviews contracts quickly without creating bottlenecks for business development",
                  "Reduces legal risk through clear templates and internal legal guidelines",
                  "Manages the legal inbox and prioritises work based on business urgency",
                ],
                collaboration: [
                  "Acts as the primary legal contact for the Sales, Partnerships, and People teams",
                  "Works with external legal counsel on complex or specialised matters",
                  "Communicates legal risks in plain language to non-legal stakeholders",
                  "Supports leadership on regulatory and compliance questions",
                ],
                growthMindset: [
                  "Develops depth in AdTech-specific legal topics: privacy, ad fraud, platform liability",
                  "Continuously improves legal templates and processes to reduce turnaround time",
                  "Uses AI legal tools to accelerate contract review and research",
                  "Proactive — identifies legal risks before they become problems",
                ],
              },
              IC5: {
                title: "General Counsel",
                summary: "Leads the legal function, manages all legal risk, and advises leadership on strategic and regulatory matters.",
                technicalSkills: [
                  "Expert in commercial law, GDPR, corporate governance, and employment law for high-growth tech companies",
                  "Manages fundraising legal processes: term sheets, SHA, and investor rights agreements",
                  "Oversees IP portfolio, trademark registrations, and software licensing",
                  "Experience with international expansion legal requirements across EU and APAC markets",
                  "Manages legal entity structure and regulatory compliance across multiple jurisdictions",
                ],
                deliveryAndImpact: [
                  "Accountable for legal risk management across all company functions",
                  "Enables fast business decisions without creating legal bottlenecks",
                  "Leads legal aspects of fundraising, M&A, and major partnerships",
                  "Legal function scales with company growth without a proportional increase in headcount",
                ],
                collaboration: [
                  "Trusted advisor to the CEO, COO, and board on legal and regulatory strategy",
                  "Manages external legal counsel relationships and controls legal spend",
                  "Educates internal teams on legal requirements in practical, actionable terms",
                  "Works with investors, regulators, and external partners on legal matters",
                ],
                growthMindset: [
                  "Builds a lean, efficient legal function that enables rather than restricts growth",
                  "Stays ahead of regulatory changes affecting the AdTech industry globally",
                  "Shapes legal risk culture across the company",
                  "Holds legal outcomes — not just legal effort — to a high standard",
                ],
              },
            },
          },
        },
      },
    },
  },
  people_talent: {
    label: "People & Talent",
    hasTeams: true,
    teams: {
      people_operations: {
        label: "People Operations",
        icon: "◎",
        color: "#8B5CF6",
        roles: {
          people_ops_partner: {
            label: "People Operations Partner",
            levels: {
              IC2: {
                title: "People Operations Coordinator",
                summary: "Supports HR administration, onboarding, and workplace operations under guidance.",
                technicalSkills: [
                  "Manages employee data in HRIS (e.g., Personio) accurately and with attention to detail",
                  "Supports onboarding and offboarding processes: documentation, equipment, and system access",
                  "Administers employee benefits, time tracking, and payroll inputs",
                  "Familiar with German employment law basics: contracts, working hours, leave entitlements",
                  "Coordinates office logistics: supplies, events, and workplace maintenance",
                ],
                deliveryAndImpact: [
                  "Processes HR administration tasks accurately and on time",
                  "Ensures smooth onboarding for new starters with all equipment and access ready on Day 1",
                  "Maintains organised and up-to-date employee records",
                ],
                collaboration: [
                  "Acts as first point of contact for employee HR queries",
                  "Works with Finance on payroll inputs and expense reports",
                  "Coordinates with IT for equipment setup and system access",
                  "Supports the People team during company events and engagement activities",
                ],
                growthMindset: [
                  "Develops knowledge of employment law and HR processes",
                  "Improves HR workflows and templates to reduce admin burden",
                  "Uses AI and automation tools to handle repetitive HR tasks faster",
                ],
              },
              IC3: {
                title: "People Operations Partner",
                summary: "Independently manages HR processes, employee relations, and HR system integrity.",
                technicalSkills: [
                  "Manages full employee lifecycle in HRIS: hiring, changes, leave, and offboarding",
                  "Working knowledge of German employment law: contracts, dismissals, and works council requirements",
                  "Designs and improves onboarding programmes to accelerate new hire productivity",
                  "Handles employee relations issues with appropriate sensitivity and legal awareness",
                  "Proficient in payroll processing and works closely with external payroll provider",
                ],
                deliveryAndImpact: [
                  "Ensures HR processes run reliably and employees experience them as smooth and professional",
                  "Manages complex employee lifecycle events: promotions, contract changes, departures",
                  "Reduces time-to-productivity for new hires through structured onboarding",
                  "Maintains HR data accuracy for payroll, compliance, and reporting",
                ],
                collaboration: [
                  "Serves as the trusted HR contact for employees across all departments",
                  "Works with managers on performance management and disciplinary processes",
                  "Partners with Finance on payroll and with Legal on employment law questions",
                  "Supports recruitment teams with offer letter preparation and pre-boarding",
                ],
                growthMindset: [
                  "Identifies and implements improvements to HR processes and systems",
                  "Develops expertise in employment law and HR best practices",
                  "Uses AI tools to improve HR documentation and policy drafting",
                  "Proactively identifies people risks and escalates appropriately",
                ],
              },
              IC4: {
                title: "Senior People Operations Partner",
                summary: "Leads complex HR programmes, advises managers on people matters, and drives HR system and process excellence.",
                technicalSkills: [
                  "Expert in German employment law including works council negotiations and collective agreements",
                  "Designs and implements performance management frameworks and compensation review processes",
                  "Manages HR analytics: attrition, headcount, and engagement metrics",
                  "Leads DEI initiatives with measurable goals and structured action plans",
                  "Expert HRIS administrator: builds workflows, reporting, and integrations",
                ],
                deliveryAndImpact: [
                  "Owns complex people programmes with clear business impact: performance cycles, engagement surveys",
                  "Measurably improves retention through targeted people initiatives",
                  "Delivers HR projects on time and communicates outcomes clearly to leadership",
                  "Sets people data standards that enable reliable business reporting",
                ],
                collaboration: [
                  "Trusted advisor for managers on complex employee relations situations",
                  "Partners with senior leadership on organisational design and team structure",
                  "Works with external legal counsel on employment disputes and regulatory queries",
                  "Influences people strategy through data and structured recommendations",
                ],
                growthMindset: [
                  "Challenges the status quo in HR practice and brings innovative approaches",
                  "Uses data to make the case for people investments",
                  "Brings external HR best practices from high-growth companies",
                  "Ownership mindset — accountable for people outcomes, not just HR process compliance",
                ],
              },
              M4: {
                title: "Lead People Operations",
                summary: "Leads the People Operations function with accountability for all HR processes and employee experience.",
                technicalSkills: [
                  "Expert across all HR domains: employment law, compensation, HRIS, and employee relations",
                  "Designs people strategy and HR operating model for a fast-scaling company",
                  "Builds people analytics capabilities to drive data-informed people decisions",
                  "Expert in organisational design principles and how to structure teams for growth",
                  "Manages vendor relationships: payroll providers, benefits brokers, HRIS platforms",
                ],
                deliveryAndImpact: [
                  "Accountable for all People Operations outcomes including compliance, employee experience, and HR efficiency",
                  "Scales HR infrastructure to support rapid headcount growth without quality loss",
                  "Drives measurable improvements in retention, engagement, and time-to-productivity",
                  "People Operations enables rather than slows down the business",
                ],
                collaboration: [
                  "Manages and develops the People Operations team",
                  "Partners with VP of People & Talent on people strategy",
                  "Works with all department heads on org design, headcount planning, and people risk",
                  "Represents People Ops in leadership discussions and drives people agenda",
                ],
                growthMindset: [
                  "Builds a people function that scales with the company without losing quality",
                  "Develops the team and creates a culture of continuous HR improvement",
                  "Holds people outcomes to business standards — attrition, engagement, and manager effectiveness",
                  "Brings external people ops best practices into Almedia",
                ],
              },
              M5: {
                title: "VP of People & Talent",
                summary: "Owns the company's people strategy, culture, and talent function at the highest level.",
                technicalSkills: [
                  "Defines company-wide people strategy: culture, organisation design, compensation philosophy, and talent development",
                  "Expert in building and scaling people functions in high-growth tech companies",
                  "Deep knowledge of executive compensation, equity structures, and board-level people topics",
                  "Designs talent development programmes that build leadership capability at scale",
                  "Understands international HR requirements across all Almedia geographies",
                ],
                deliveryAndImpact: [
                  "Accountable for all people outcomes: culture health, retention, talent density, and leadership development",
                  "Builds the people infrastructure that enables Almedia to scale 2-5x in headcount",
                  "Drives cultural initiatives that make Almedia a top destination for exceptional talent",
                  "People decisions directly contribute to company growth, performance, and valuation",
                ],
                collaboration: [
                  "Trusted advisor to the CEO and board on people strategy and culture",
                  "Manages all People & Talent leaders and shapes the function's leadership pipeline",
                  "External face of Almedia's people brand: employer branding, talks, and HR community",
                  "Drives alignment between people strategy and business objectives",
                ],
                growthMindset: [
                  "Redefines what great people practice looks like at Almedia",
                  "Attracts and retains exceptional people leaders and builds a strong team",
                  "Shapes Almedia's culture deliberately and holds leadership to high people standards",
                  "Impact measured by business outcomes — great culture enables great results",
                ],
              },
            },
          },
        },
      },
      talent_acquisition: {
        label: "Talent Acquisition",
        icon: "◈",
        color: "#06B6D4",
        roles: {
          ta_partner: {
            label: "Talent Acquisition Partner",
            levels: {
              IC2: {
                title: "Talent Sourcer / TA Coordinator",
                summary: "Supports the recruitment process through sourcing, scheduling, and candidate coordination.",
                technicalSkills: [
                  "Sources candidates on LinkedIn Recruiter and GitHub using Boolean search techniques",
                  "Manages interview scheduling across multiple hiring managers and candidates",
                  "Tracks candidates and pipeline status accurately in the ATS (Ashby)",
                  "Writes compelling outreach messages that achieve above-average response rates",
                  "Understands the basics of the roles being hired for (tech, growth, or operations)",
                ],
                deliveryAndImpact: [
                  "Consistently delivers a pipeline of qualified candidates for open roles",
                  "Keeps candidates warm and informed throughout the process to protect offer acceptance rate",
                  "Manages scheduling without delays that slow down hiring timelines",
                ],
                collaboration: [
                  "Works closely with TA Partners on active searches",
                  "Coordinates with hiring managers on interview logistics",
                  "Communicates candidate status clearly to the team",
                ],
                growthMindset: [
                  "Develops understanding of the roles being recruited for and the business context",
                  "Continuously tests and improves outreach messaging for higher response rates",
                  "Uses AI tools to source candidates faster and personalise outreach at scale",
                ],
              },
              IC3: {
                title: "Talent Acquisition Manager",
                summary: "Owns full-cycle recruiting for defined roles, manages candidate experience, and hits hiring targets.",
                technicalSkills: [
                  "Runs full-cycle recruiting: sourcing, screening, interview coordination, offer, and close",
                  "Designs role-specific sourcing strategies for competitive talent markets",
                  "Interviews candidates effectively using structured behavioural and competency frameworks",
                  "Manages pipeline data in the ATS with accurate forecasting and reporting",
                  "Understands compensation benchmarking and works within defined salary bands",
                ],
                deliveryAndImpact: [
                  "Closes roles within agreed time-to-hire targets with qualified candidates",
                  "Maintains a strong candidate experience with high offer acceptance rates",
                  "Contributes to a healthy pipeline with clear capacity and velocity metrics",
                  "Reduces external agency dependency through direct sourcing effectiveness",
                ],
                collaboration: [
                  "Partners closely with hiring managers to align on requirements and candidate standards",
                  "Works with the People Operations team on offer preparation and pre-boarding",
                  "Communicates pipeline health and risks clearly to hiring managers and TA Lead",
                  "Provides structured feedback to candidates to protect Almedia's employer brand",
                ],
                growthMindset: [
                  "Continuously improves sourcing quality and candidate conversion rates",
                  "Develops deep understanding of the talent markets for roles they recruit",
                  "Uses AI tools for personalised outreach and faster candidate research",
                  "Proactively identifies and engages passive candidates before roles open",
                ],
              },
              IC4: {
                title: "Senior Talent Acquisition Partner",
                summary: "Leads recruiting for senior and critical roles, builds talent networks, and improves TA process quality.",
                technicalSkills: [
                  "Expert at recruiting senior and leadership roles in competitive talent markets",
                  "Builds and maintains talent pipelines for critical roles before they become urgent",
                  "Designs structured interview processes with clear evaluation rubrics",
                  "Advanced compensation negotiation and candidate closing techniques",
                  "Uses data to identify sourcing channel effectiveness and optimise TA spend",
                ],
                deliveryAndImpact: [
                  "Consistently closes senior and specialist roles with high-quality hires",
                  "Reduces time-to-hire for critical roles through proactive talent pipeline management",
                  "Contributes measurably to Almedia's talent quality and density",
                  "Manages relationships with candidates who may not be ready now but are right for the future",
                ],
                collaboration: [
                  "Acts as a strategic partner to senior leadership on hiring strategy",
                  "Mentors junior TA team members through structured feedback and process coaching",
                  "Works with HR on market compensation data and competitive offer positioning",
                  "Represents Almedia at talent events and industry meetups to build employer brand",
                ],
                growthMindset: [
                  "Proactively builds talent networks before roles are open",
                  "Challenges hiring managers on requirements that unnecessarily narrow the candidate pool",
                  "Uses AI tools for smarter sourcing, faster research, and better candidate matching",
                  "Obsessed with quality of hire — measures TA success through outcomes, not just placements",
                ],
              },
              M4: {
                title: "Lead Talent Acquisition",
                summary: "Leads a TA team with accountability for hiring targets, team performance, and process quality.",
                technicalSkills: [
                  "Expert recruiter across all functions: tech, growth, operations, and leadership",
                  "Defines sourcing strategies, channel mix, and agency management standards",
                  "Builds TA reporting and analytics: time-to-hire, offer acceptance, source quality, and cost per hire",
                  "Designs interview frameworks and hiring manager enablement programmes",
                  "Manages ATS configuration and workflow optimisation",
                ],
                deliveryAndImpact: [
                  "Accountable for team hiring targets across assigned functions",
                  "Drives consistent quality of hire through structured processes and evaluation standards",
                  "Reduces cost per hire through direct sourcing excellence",
                  "TA function scales with company growth without proportional headcount increase",
                ],
                collaboration: [
                  "Manages and develops TA team members through regular coaching and feedback",
                  "Partners with department heads on quarterly hiring plans and critical role prioritisation",
                  "Works with the VP of People & Talent on TA strategy and team structure",
                  "Manages external agency relationships and controls agency spend",
                ],
                growthMindset: [
                  "Builds a TA team culture focused on quality, speed, and candidate experience",
                  "Introduces data-driven TA practices and holds the team to measurable outcomes",
                  "Stays current with TA tools, sourcing techniques, and employer branding trends",
                  "Models a high-bar approach to talent assessment across the company",
                ],
              },
            },
          },
        },
      },
      it_security: {
        label: "IT & Security",
        icon: "⬡",
        color: "#374151",
        roles: {
          it_admin: {
            label: "IT & Security Administrator",
            levels: {
              IC3: {
                title: "IT & Security Administrator",
                summary: "Manages company IT infrastructure, device management, and security compliance.",
                technicalSkills: [
                  "Manages macOS and Windows endpoints using MDM tools (e.g., Jamf, Kandji, Intune)",
                  "Administers SaaS tools: Google Workspace, Slack, Notion, and access provisioning",
                  "Implements and maintains identity and access management (IAM) processes",
                  "Basic knowledge of network security, VPN setup, and office network management",
                  "Supports incident response for security events: phishing, data leaks, and access issues",
                ],
                deliveryAndImpact: [
                  "Ensures all employees have reliable access to systems and equipment on their first day",
                  "Responds to IT support requests within agreed SLA and resolves issues effectively",
                  "Maintains device security posture through MDM policies and software update enforcement",
                  "Documents IT processes clearly for consistency and handover",
                ],
                collaboration: [
                  "Acts as the primary IT contact for all employees across locations",
                  "Works with People Ops on onboarding/offboarding IT requirements",
                  "Partners with Finance on software licence management and vendor invoicing",
                  "Communicates security risks and required actions to employees in plain language",
                ],
                growthMindset: [
                  "Proactively identifies and closes security gaps before they become incidents",
                  "Stays current with IT security threats and defensive best practices",
                  "Uses automation and AI tools to reduce manual IT administration tasks",
                  "Develops deeper security expertise to grow into a security-first IT role",
                ],
              },
              IC4: {
                title: "Senior IT & Security Administrator",
                summary: "Leads IT infrastructure and security initiatives, ensures compliance, and builds scalable IT systems.",
                technicalSkills: [
                  "Expert in endpoint management, IAM, and SaaS administration at scale",
                  "Implements security frameworks: SOC 2, ISO 27001, or equivalent",
                  "Manages vulnerability scanning, penetration testing coordination, and security audits",
                  "Designs zero-trust network architecture and access control policies",
                  "Leads IT procurement, asset lifecycle management, and vendor evaluation",
                ],
                deliveryAndImpact: [
                  "Delivers a secure, reliable IT infrastructure that scales with company headcount growth",
                  "Achieves and maintains security compliance certifications",
                  "Reduces IT support tickets through proactive tooling and self-service enablement",
                  "Security incidents are detected quickly and resolved with minimal business impact",
                ],
                collaboration: [
                  "Advises leadership on IT security risks and required investments",
                  "Works with Engineering on cloud security standards and access control",
                  "Manages IT vendors and negotiates contracts for cost-effective tooling",
                  "Trains employees on security awareness and best practices",
                ],
                growthMindset: [
                  "Proactively hardens security posture without restricting employee productivity",
                  "Brings external IT and security best practices from high-growth tech companies",
                  "Uses AI and automation for security monitoring and anomaly detection",
                  "Ownership mindset — accountable for IT and security outcomes, not just uptime",
                ],
              },
            },
          },
        },
      },
    },
  },
  growth: {
    label: "Growth",
    hasTeams: true,
    teams: {
      ai_operations: {
        label: "AI Operations",
        icon: "◆",
        color: "#7C3AED",
        roles: {
          ai_ops_manager: {
            label: "AI Operations Manager",
            levels: {
              IC2: {
                title: "Junior AI Operations Engineer",
                summary: "Supports the build and maintenance of AI-powered tools and automation workflows under guidance.",
                technicalSkills: [
                  "Basic proficiency in Python or Node.js for scripting and API integration",
                  "Can integrate AI APIs (OpenAI, Anthropic, Google Gemini) into simple workflows",
                  "Familiar with automation tools (e.g., n8n, Zapier, or Make) for workflow orchestration",
                  "Basic understanding of prompt engineering and how LLMs process instructions",
                  "Can use AI tools (Copilot, Claude, ChatGPT) effectively for development and research",
                ],
                deliveryAndImpact: [
                  "Implements defined AI automation tasks with clear specifications",
                  "Maintains existing AI workflows and fixes issues reported by business users",
                  "Documents AI tools and workflows for non-technical users",
                ],
                collaboration: [
                  "Works with business stakeholders to understand workflow requirements",
                  "Communicates progress and blockers clearly to senior team members",
                  "Shares learnings about new AI tools and capabilities with the team",
                ],
                growthMindset: [
                  "Actively experiments with new AI models, tools, and APIs",
                  "Stays current with the rapidly evolving AI landscape",
                  "Develops Python and integration engineering skills through hands-on projects",
                  "Curious about how AI can solve real business problems across all functions",
                ],
              },
              IC3: {
                title: "AI Operations Manager",
                summary: "Independently designs and builds AI-powered tools that automate business workflows and create measurable efficiency.",
                technicalSkills: [
                  "Proficient in Python or Node.js for building production-ready AI integrations",
                  "Designs multi-step AI workflows using orchestration tools (n8n, LangChain, or custom)",
                  "Strong prompting skills: designs effective system prompts, manages context, and handles edge cases reliably",
                  "Integrates AI into existing business tools: CRM, data platforms, and internal systems",
                  "Understanding of vector databases, RAG pipelines, and embedding-based retrieval",
                ],
                deliveryAndImpact: [
                  "Builds AI tools that save measurable hours per week for business teams",
                  "Delivers AI integrations that are reliable, documented, and maintained post-launch",
                  "Translates vague business problems into defined AI solutions and iterates based on feedback",
                  "Reduces operational costs or accelerates processes through targeted AI automation",
                ],
                collaboration: [
                  "Works closely with business teams (marketing, UA, operations) to identify automation opportunities",
                  "Communicates AI capabilities and limitations clearly to non-technical stakeholders",
                  "Documents AI workflows so they can be maintained and improved by others",
                  "Partners with engineering on integrations that require backend support",
                ],
                growthMindset: [
                  "Goes to stakeholders proactively — understands their workflows and suggests improvements",
                  "Comfortable with ambiguity and evolving requirements in AI-first projects",
                  "Continuously experiments with new AI models and approaches to improve output quality",
                  "Develops engineering depth to build more complex and reliable AI systems",
                ],
              },
              IC4: {
                title: "Senior AI Operations Manager",
                summary: "Leads AI-powered automation across the business, sets architectural standards, and drives measurable operational impact.",
                technicalSkills: [
                  "Expert in full-stack AI application development: frontend, backend, and AI orchestration layers",
                  "Designs agentic systems with tool use, memory, and multi-step reasoning capabilities",
                  "Deep knowledge of LLM integration patterns: routing, fallbacks, streaming, caching, and evaluation",
                  "Experience with RAG architectures, fine-tuning workflows, and AI evaluation frameworks",
                  "Proficient in cloud AI services (GCP Vertex AI, AWS Bedrock) and deployment patterns",
                ],
                deliveryAndImpact: [
                  "Architects AI-powered products and internal tools from concept to production",
                  "Drives measurable business impact through AI-enabled automation and decision-making",
                  "Sets standards for AI integration quality, reliability, and evaluation",
                  "Significant and measurable contribution to operational efficiency and revenue",
                ],
                collaboration: [
                  "Mentors junior AI engineers and upskills the broader team on AI best practices",
                  "Partners with product and business leadership to define the AI roadmap",
                  "Bridges data science, engineering, and business teams on AI initiatives",
                  "Influences how all teams think about and use AI in their daily work",
                ],
                growthMindset: [
                  "Stays at the cutting edge of AI developments and brings innovations into Almedia",
                  "Drives an AI-first culture across the company: every team should work smarter with AI",
                  "Uses AI to build AI — meta-level efficiency in how the function operates",
                  "Impact-obsessed: every AI initiative must be tied to a measurable business outcome",
                ],
              },
              IC5: {
                title: "AI Operations Lead",
                summary: "Defines Almedia's AI strategy and builds the AI infrastructure that enables the company to scale its intelligence.",
                technicalSkills: [
                  "Defines and evolves Almedia's AI platform architecture: orchestration, evaluation, and deployment",
                  "Expert in multi-agent systems, complex AI workflows, and production AI reliability at scale",
                  "Deep understanding of model selection, fine-tuning, evaluation frameworks, and cost optimisation",
                  "Designs AI-native workflows that fundamentally change how business functions operate",
                  "Expert in cost, latency, and quality trade-offs for AI systems at company scale",
                ],
                deliveryAndImpact: [
                  "Drives company-wide AI transformation through platform investments and tooling",
                  "Shapes new AI-native products and processes from zero to production",
                  "AI initiatives directly impact business results — revenue, cost reduction, and speed",
                  "Sets the technical bar for AI engineering across all functions",
                ],
                collaboration: [
                  "Provides technical leadership on AI across all business teams",
                  "Partners with C-level leadership to shape AI strategy and priorities",
                  "Mentors senior AI engineers and grows AI capability organisation-wide",
                  "Represents Almedia in the external AI engineering community",
                ],
                growthMindset: [
                  "Recognised internally as the go-to authority on AI engineering and strategy",
                  "Drives cultural shift toward AI-enabled workflows across all functions",
                  "Continuously pushes the boundaries of what AI can do for the business",
                  "Uses AI to multiply team capacity — one person with the right AI stack = ten",
                ],
              },
              M4: {
                title: "Head of AI Operations",
                summary: "Leads the AI Operations team and owns Almedia's AI transformation strategy.",
                technicalSkills: [
                  "Deep hands-on AI engineering expertise across orchestration, integration, and evaluation",
                  "Defines AI technology stack, tooling standards, and engineering quality bar",
                  "Expert in building and scaling AI teams in a fast-moving environment",
                  "Understands AI cost economics and builds systems that are efficient at scale",
                  "Tracks the external AI landscape and makes timely decisions on model and tool adoption",
                ],
                deliveryAndImpact: [
                  "Accountable for AI Operations team output and company-wide AI transformation progress",
                  "Delivers AI initiatives that measurably change how Almedia operates and scales",
                  "Builds an AI infrastructure that gives Almedia a durable operational advantage",
                  "AI outcomes are measured in business results, not tool adoption metrics",
                ],
                collaboration: [
                  "Manages and develops the AI Operations team",
                  "Partners with CEO/COO on AI investment priorities and strategy",
                  "Drives AI adoption across all departments through enablement and tooling",
                  "External voice for Almedia's AI capabilities and approach",
                ],
                growthMindset: [
                  "Builds a team that moves faster than the AI landscape evolves",
                  "Challenges every function to think AI-first in how they work",
                  "Holds AI outcomes to rigorous business standards — not novelty, but impact",
                  "Develops AI leaders who can own major AI initiatives independently",
                ],
              },
            },
          },
        },
      },
    },
  },
};

const LEVELS = ["IC2", "IC3", "IC4", "IC5", "IC6"];
const LEVEL_LABELS = {
  IC2: "Junior",
  IC3: "Mid-Level",
  IC4: "Senior",
  IC5: "Staff",
  IC6: "Principal",
  M4: "Lead",
  M5: "Head of",
  M6: "Director",
};

const SECTION_LABELS = {
  technicalSkills: "Technical Skills",
  deliveryAndImpact: "Delivery & Impact",
  collaboration: "Collaboration & Communication",
  growthMindset: "Growth Mindset & Culture",
};

const SECTION_ICONS = {
  technicalSkills: "⚙",
  deliveryAndImpact: "▲",
  collaboration: "◎",
  growthMindset: "↗",
};

export default function CareerPathFramework() {
  const [selectedDepartment, setSelectedDepartment] = useState("engineering");
  const [selectedRole, setSelectedRole] = useState("frontend");
  const [selectedLevel, setSelectedLevel] = useState("IC3");
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [expandedSections, setExpandedSections] = useState({
    technicalSkills: true,
    deliveryAndImpact: true,
    collaboration: false,
    growthMindset: false,
  });
  const [ratings, setRatings] = useState({});

  const getRatingKey = (sectionKey, itemIndex) =>
    `${selectedDepartment}/${selectedTeam || 'default'}/${selectedRole}/${selectedLevel}/${sectionKey}/${itemIndex}`;

  const handleRating = (sectionKey, itemIndex, value) => {
    const key = getRatingKey(sectionKey, itemIndex);
    setRatings(prev => ({ ...prev, [key]: prev[key] === value ? 0 : value }));
  };

  const dept = POSITIONS[selectedDepartment];
  const roles = dept.hasTeams
    ? (selectedTeam && dept.teams[selectedTeam] ? dept.teams[selectedTeam].roles : Object.values(dept.teams)[0].roles)
    : dept.roles;
  const role = roles[selectedRole] || Object.values(roles)[0];

  const availableLevels = Object.keys(role.levels);
  const effectiveLevel = availableLevels.includes(selectedLevel) ? selectedLevel : availableLevels[0];
  const levelData = role.levels[effectiveLevel];

  const toggleSection = (key) => {
    setExpandedSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleDeptChange = (d) => {
    setSelectedDepartment(d);
    const deptData = POSITIONS[d];
    if (deptData.hasTeams) {
      const firstTeam = Object.keys(deptData.teams)[0];
      setSelectedTeam(firstTeam);
      const firstRole = Object.keys(deptData.teams[firstTeam].roles)[0];
      setSelectedRole(firstRole);
    } else {
      setSelectedTeam(null);
      const firstRole = Object.keys(deptData.roles)[0];
      setSelectedRole(firstRole);
    }
    setSelectedLevel("IC3");
  };

  const handleTeamChange = (t) => {
    setSelectedTeam(t);
    const team = POSITIONS[selectedDepartment].teams[t];
    const firstRole = Object.keys(team.roles)[0];
    setSelectedRole(firstRole);
    setSelectedLevel("IC3");
  };

  const handleRoleChange = (r) => {
    setSelectedRole(r);
    setSelectedLevel("IC3");
  };

  return (
    <div>

      {/* Header */}
      <div style={{ padding: "32px 24px 0", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
          <span style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: role.color,
            fontFamily: "'JetBrains Mono', monospace",
          }}>Almedia Tech</span>
          <span style={{ width: 32, height: 1, background: "var(--border)" }}></span>
          <span style={{
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            color: "var(--text-dim)",
          }}>Career Progression Framework</span>
        </div>
        <h1 style={{
          fontSize: 28,
          fontWeight: 700,
          marginTop: 16,
          letterSpacing: -0.5,
          lineHeight: 1.2,
        }}>Career Path Explorer</h1>
        <p style={{
          color: "var(--text-muted)",
          fontSize: 14,
          marginTop: 8,
          lineHeight: 1.6,
          maxWidth: 600,
        }}>
          Explore what's expected at each level — from technical skills to impact and collaboration.
          Mapped to Almedia's IC2–IC6 framework with Personio-ready descriptions.
        </p>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px 24px 48px" }}>
        {/* Department tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
          {Object.entries(POSITIONS).map(([key, val]) => (
            <button
              key={key}
              className={`dept-tab ${selectedDepartment === key ? "active" : ""}`}
              onClick={() => handleDeptChange(key)}
            >
              {val.label}
            </button>
          ))}
        </div>

        {/* Team selector — only for departments with teams */}
        {dept.hasTeams && (
          <div style={{ display: "flex", gap: 6, marginBottom: 12, flexWrap: "wrap" }}>
            {Object.entries(dept.teams).map(([key, team]) => (
              <button
                key={key}
                className={`role-chip ${selectedTeam === key ? "active" : ""}`}
                onClick={() => handleTeamChange(key)}
                style={selectedTeam === key ? { borderColor: team.color, color: team.color } : {}}
              >
                <span style={{ marginRight: 6 }}>{team.icon}</span>
                {team.label}
              </button>
            ))}
          </div>
        )}

        {/* Role chips */}
        <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
          {Object.entries(roles).map(([key, val]) => (
            <button
              key={key}
              className={`role-chip ${selectedRole === key ? "active" : ""}`}
              onClick={() => handleRoleChange(key)}
              style={selectedRole === key ? { borderColor: val.color, color: val.color } : {}}
            >
              <span style={{ marginRight: 6 }}>{val.icon}</span>
              {val.label}
            </button>
          ))}
        </div>

        {/* Level selector */}
        <div style={{
          display: "flex",
          gap: 6,
          marginBottom: 28,
          background: "var(--surface)",
          padding: 6,
          borderRadius: 14,
          border: "1px solid var(--border)",
        }}>
          {availableLevels.map((lvl) => (
            <button
              key={lvl}
              className={`level-btn ${effectiveLevel === lvl ? "active" : ""}`}
              onClick={() => setSelectedLevel(lvl)}
              style={effectiveLevel === lvl ? { borderColor: role.color, color: role.color } : {}}
            >
              <span className="code">{lvl}</span>
              <span className="label">{LEVEL_LABELS[lvl]}</span>
            </button>
          ))}
        </div>

        {/* Level context bar */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginBottom: 24,
          padding: "16px 20px",
          background: `linear-gradient(135deg, ${role.color}12, ${role.color}06)`,
          border: `1px solid ${role.color}30`,
          borderRadius: 12,
        }}>
          <div style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            background: `${role.color}18`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 22,
            flexShrink: 0,
          }}>
            {role.icon}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 17, fontWeight: 600, color: "var(--text)" }}>
              {levelData.title}
            </div>
            <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 2 }}>
              {levelData.summary}
            </div>
          </div>
        </div>

        {/* Level progress visualization */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          marginBottom: 24,
          padding: "0 4px",
        }}>
          {availableLevels.map((lvl) => {
            const isActive = lvl === effectiveLevel;
            const isPast = availableLevels.indexOf(lvl) < availableLevels.indexOf(effectiveLevel);
            return (
              <div key={lvl} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                <div style={{
                  height: 4,
                  width: "100%",
                  borderRadius: 2,
                  background: isActive ? role.color : isPast ? `${role.color}60` : "var(--border)",
                  transition: "all 0.3s",
                }}></div>
              </div>
            );
          })}
        </div>

        {/* Skill sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {Object.entries(SECTION_LABELS).map(([key, label]) => {
            const items = levelData[key];
            const isOpen = expandedSections[key];
            return (
              <div key={key}>
                <div
                  className={`section-header ${isOpen ? "open" : ""}`}
                  onClick={() => toggleSection(key)}
                >
                  <span style={{ fontSize: 16, color: role.color }}>{SECTION_ICONS[key]}</span>
                  <span style={{ flex: 1, fontSize: 14, fontWeight: 600, color: "var(--text)" }}>
                    {label}
                  </span>
                  <span style={{
                    fontSize: 11,
                    color: "var(--text-dim)",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}>
                    {items.length} items
                  </span>
                  <span style={{
                    fontSize: 16,
                    color: "var(--text-dim)",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s",
                  }}>▾</span>
                </div>
                {isOpen && (
                  <div className="section-body">
                    {items.map((item, i) => {
                      const ratingKey = getRatingKey(key, i);
                      const currentRating = ratings[ratingKey] || 0;
                      return (
                        <div key={i} className="skill-item">
                          <span className="skill-bullet" style={{ background: role.color }}></span>
                          <span style={{ flex: 1 }}>{item}</span>
                          <div className="skill-rating">
                            {[1, 2, 3, 4].map(r => (
                              <button
                                key={r}
                                className={`rating-btn ${r <= currentRating ? "filled" : ""}`}
                                style={r <= currentRating ? { background: role.color, borderColor: role.color } : {}}
                                onClick={(e) => { e.stopPropagation(); handleRating(key, i, r); }}
                                title={["Beginner", "Familiar", "Proficient", "Expert"][r - 1]}
                              />
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Next level nudge */}
        {availableLevels.indexOf(effectiveLevel) < availableLevels.length - 1 && (
          <div style={{
            marginTop: 28,
            padding: "18px 20px",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-muted)" }}>
                Next level: {availableLevels[availableLevels.indexOf(effectiveLevel) + 1]} — {LEVEL_LABELS[availableLevels[availableLevels.indexOf(effectiveLevel) + 1]]}
              </div>
              <div style={{ fontSize: 12, color: "var(--text-dim)", marginTop: 4 }}>
                Review the next level's requirements to plan your growth path.
              </div>
            </div>
            <button
              onClick={() => setSelectedLevel(availableLevels[availableLevels.indexOf(effectiveLevel) + 1])}
              style={{
                padding: "8px 20px",
                borderRadius: 8,
                border: `1px solid ${role.color}`,
                background: "transparent",
                color: role.color,
                cursor: "pointer",
                fontSize: 13,
                fontWeight: 600,
                fontFamily: "inherit",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { e.target.style.background = `${role.color}15`; }}
              onMouseLeave={(e) => { e.target.style.background = "transparent"; }}
            >
              View {availableLevels[availableLevels.indexOf(effectiveLevel) + 1]} →
            </button>
          </div>
        )}

        {/* Footer note */}
        <div style={{
          marginTop: 32,
          padding: "14px 18px",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: 10,
          fontSize: 12,
          color: "var(--text-dim)",
          lineHeight: 1.6,
        }}>
          <strong style={{ color: "var(--text-muted)" }}>Note:</strong> This framework maps to Almedia's Personio levels
          (IC2 Entry → IC6 Principal). Years of experience are indicative, not prescriptive — progression is based on
          demonstrated skills, impact, and ownership. Tech stack references reflect current Almedia standards
          (React, Next.js, TypeScript, Node.js, Python, FastAPI, GCP, BigQuery, etc.) derived from open positions as of 2025/2026.
        </div>
      </div>
    </div>
  );
}
