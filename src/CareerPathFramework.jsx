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
};

const LEVELS = ["IC2", "IC3", "IC4", "IC5", "IC6"];
const LEVEL_LABELS = {
  IC2: "Entry",
  IC3: "Developing",
  IC4: "Senior",
  IC5: "Staff",
  IC6: "Principal",
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
  const [expandedSections, setExpandedSections] = useState({
    technicalSkills: true,
    deliveryAndImpact: true,
    collaboration: false,
    growthMindset: false,
  });
  const [ratings, setRatings] = useState({});

  const getRatingKey = (sectionKey, itemIndex) =>
    `${selectedDepartment}/${selectedRole}/${selectedLevel}/${sectionKey}/${itemIndex}`;

  const handleRating = (sectionKey, itemIndex, value) => {
    const key = getRatingKey(sectionKey, itemIndex);
    setRatings(prev => ({ ...prev, [key]: prev[key] === value ? 0 : value }));
  };

  const dept = POSITIONS[selectedDepartment];
  const role = dept.roles[selectedRole];
  const levelData = role.levels[selectedLevel];

  const toggleSection = (key) => {
    setExpandedSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleDeptChange = (d) => {
    setSelectedDepartment(d);
    const firstRole = Object.keys(POSITIONS[d].roles)[0];
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

        {/* Role chips */}
        <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
          {Object.entries(dept.roles).map(([key, val]) => (
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
          {LEVELS.map((lvl, i) => (
            <button
              key={lvl}
              className={`level-btn ${selectedLevel === lvl ? "active" : ""}`}
              onClick={() => setSelectedLevel(lvl)}
              style={selectedLevel === lvl ? { borderColor: role.color, color: role.color } : {}}
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
          {LEVELS.map((lvl, i) => {
            const isActive = lvl === selectedLevel;
            const isPast = LEVELS.indexOf(lvl) < LEVELS.indexOf(selectedLevel);
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
        {selectedLevel !== "IC6" && (
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
                Next level: {LEVELS[LEVELS.indexOf(selectedLevel) + 1]} — {LEVEL_LABELS[LEVELS[LEVELS.indexOf(selectedLevel) + 1]]}
              </div>
              <div style={{ fontSize: 12, color: "var(--text-dim)", marginTop: 4 }}>
                Review the next level's requirements to plan your growth path.
              </div>
            </div>
            <button
              onClick={() => setSelectedLevel(LEVELS[LEVELS.indexOf(selectedLevel) + 1])}
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
              View {LEVELS[LEVELS.indexOf(selectedLevel) + 1]} →
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
