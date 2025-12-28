export interface Technology {
    slug: string;
    category: string;
    title: string;
    heroTitle: string;
    heroDescription: string;
    features: { title: string; description: string; icon: string }[];
    useCases: string[];
}

export const technologies: Technology[] = [
    // Frontend
    {
        slug: "react-js",
        category: "Frontend",
        title: "React.js Development",
        heroTitle: "Build Interactive UIs with React.js",
        heroDescription: "Leverage the power of React to build fast, scalable, and interactive user interfaces for web and mobile applications.",
        features: [
            { title: "Component-Based", description: "Reusable components for faster development and easier maintenance.", icon: "🧩" },
            { title: "Virtual DOM", description: "High-performance rendering ensures a smooth user experience.", icon: "⚡" },
            { title: "Rich Ecosystem", description: "Access to a vast library of tools and extensions.", icon: "🌐" },
            { title: "SEO Friendly", description: "Capable of server-side rendering for better search engine visibility.", icon: "🔍" }
        ],
        useCases: ["Single Page Applications (SPAs)", "E-commerce Platforms", "Social Media Dashboards", "Data Visualization Tools"]
    },
    {
        slug: "angular",
        category: "Frontend",
        title: "Angular Development",
        heroTitle: "Enterprise-Grade Applications with Angular",
        heroDescription: "A comprehensive framework for building robust, scalable, and maintainable enterprise-level web applications.",
        features: [
            { title: "Two-Way Binding", description: "Real-time synchronization between model and view.", icon: "🔄" },
            { title: "Dependency Injection", description: "Modular development and easy testing.", icon: "💉" },
            { title: "TypeScript Support", description: "Strong typing for fewer bugs and better tooling.", icon: "TS" },
            { title: "MVC Architecture", description: "Structured code organization for complex apps.", icon: "🏗️" }
        ],
        useCases: ["Enterprise Web Apps", "Progressive Web Apps (PWAs)", "Dynamic Content Sites", "Large Scale Portals"]
    },
    {
        slug: "vue-js",
        category: "Frontend",
        title: "Vue.js Development",
        heroTitle: "Versatile and Performant Vue.js Apps",
        heroDescription: "The progressive JavaScript framework that is approachable, versatile, and performant.",
        features: [
            { title: "Reactive System", description: "Efficient and automatic DOM updates.", icon: "⚡" },
            { title: "Lightweight", description: "Small bundle size for faster load times.", icon: "🪶" },
            { title: "Easy Integration", description: "Can be easily integrated into existing projects.", icon: "🔌" },
            { title: "Flexible", description: "Scale from a library to a full-featured framework.", icon: "📏" }
        ],
        useCases: ["Interactive Prototypes", "Single Page Apps", "User Interfaces", "MVP Development"]
    },
    {
        slug: "next-js",
        category: "Frontend",
        title: "Next.js Development",
        heroTitle: "Production-Ready React Framework",
        heroDescription: "Build superfast, SEO-friendly React applications with server-side rendering and static site generation.",
        features: [
            { title: "Hybrid Rendering", description: "Choose between SSG and SSR on a per-page basis.", icon: "🖥️" },
            { title: "Image Optimization", description: "Automatic image optimization for performant (Core Web Vitals) loading.", icon: "🖼️" },
            { title: "Zero Config", description: "Automatic compilation and bundling.", icon: "⚙️" },
            { title: "API Routes", description: "Build API endpoints directly within your Next.js app.", icon: "🛣️" }
        ],
        useCases: ["SEO-Heavy Websites", "E-commerce Stores", "Marketing Sites", "SaaS Platforms"]
    },
    {
        slug: "tailwind-css",
        category: "Frontend",
        title: "Tailwind CSS Integration",
        heroTitle: "Rapid UI Development with Tailwind CSS",
        heroDescription: "A utility-first CSS framework for rapidly building custom, modern designs without leaving your HTML.",
        features: [
            { title: "Utility-First", description: "Style elements directly in your markup.", icon: "🛠️" },
            { title: "Responsive Design", description: "Easily build complex responsive layouts.", icon: "📱" },
            { title: "Customizable", description: "Fully configurable to match your design system.", icon: "🎨" },
            { title: "Small Bundle", description: "Purges unused CSS for tiny production files.", icon: "📦" }
        ],
        useCases: ["Custom Design Systems", "Modern Web Apps", "Landing Pages", "Prototypes"]
    },

    // Backend
    {
        slug: "node-js",
        category: "Backend",
        title: "Node.js Development",
        heroTitle: "Scalable Network Applications with Node.js",
        heroDescription: "Build fast, scalable network applications with Chrome's V8 JavaScript engine.",
        features: [
            { title: "Event-Driven", description: "Non-blocking I/O model for high concurrency.", icon: "🎟️" },
            { title: "Full Stack JS", description: "Use JavaScript on both frontend and backend.", icon: "💻" },
            { title: "Fast Execution", description: "Built on V8 engine for incredible speed.", icon: "🚀" },
            { title: "Huge NPM Registry", description: "Access to the world's largest software registry.", icon: "📚" }
        ],
        useCases: ["Real-time Chat Apps", "Streaming Services", "REST APIs", "Microservices"]
    },
    {
        slug: "python",
        category: "Backend",
        title: "Python Development",
        heroTitle: "Powerful and Versatile Python Solutions",
        heroDescription: "From web development to data science, Python offers readability, efficiency, and a massive ecosystem.",
        features: [
            { title: "Readability", description: "Clear and concise syntax for maintainable code.", icon: "📖" },
            { title: "Versatility", description: "Great for web, AI, data analysis, and scripting.", icon: "🐍" },
            { title: "Standard Library", description: "Batteries-included philosophy.", icon: "🔋" },
            { title: "Community Support", description: "One of the largest developer communities in the world.", icon: "🌍" }
        ],
        useCases: ["Django/Flask Web Apps", "Data Analysis", "Machine Learning Backends", "Automation Scripts"]
    },
    {
        slug: "go-golang",
        category: "Backend",
        title: "Go (Golang) Development",
        heroTitle: "High-Performance Systems with Go",
        heroDescription: "Build reliable, simple, and efficient software with Google's open-source programming language.",
        features: [
            { title: "Concurrency", description: "Native support for concurrent programming.", icon: "🚦" },
            { title: "Fast Compilation", description: "Compiles to machine code instantly.", icon: "⚡" },
            { title: "Simplicity", description: "Minimalist syntax makes it easy to learn and read.", icon: "✨" },
            { title: "Strong Typing", description: "Statically typed for safety and performance.", icon: "🛡️" }
        ],
        useCases: ["Cloud-Native Aps", "Microservices", "Distributed Systems", "Network Tools"]
    },
    {
        slug: "java",
        category: "Backend",
        title: "Java Development",
        heroTitle: "Robust Enterprise Solutions with Java",
        heroDescription: "The gold standard for secure, reliable, and scalable enterprise application development.",
        features: [
            { title: "Platform Independent", description: "Write Once, Run Anywhere (WORA).", icon: "☕" },
            { title: "Security", description: "Advanced security features for enterprise needs.", icon: "🔒" },
            { title: "Multithreading", description: "Robust support for concurrent execution.", icon: "🧵" },
            { title: "Mature Ecosystem", description: "Decades of libraries and frameworks (Spring, Hibernate).", icon: "🌳" }
        ],
        useCases: ["Banking Systems", "Enterprise Apps", "Android Apps", "Big Data Processing"]
    },
    {
        slug: "dot-net-core",
        category: "Backend",
        title: ".NET Core Development",
        heroTitle: "Cross-Platform Development with .NET Core",
        heroDescription: "A free, cross-platform, open-source developer platform for building many different types of applications.",
        features: [
            { title: "Cross-Platform", description: "Run on Windows, Linux, and macOS.", icon: "🖥️" },
            { title: "High Performance", description: "One of the fastest web frameworks available.", icon: "🏎️" },
            { title: "Unified Platform", description: "One platform for cloud, mobile, and web.", icon: "☁️" },
            { title: "Modern Language", description: "C# is a modern, expressive, and safe language.", icon: "#️⃣" }
        ],
        useCases: ["Enterprise Web Apps", "Cloud Services", "IoT Applications", "Desktop Apps"]
    },

    // AI & ML
    {
        slug: "openai-api",
        category: "AI & ML",
        title: "OpenAI API Integration",
        heroTitle: "Next-Gen AI with OpenAI API",
        heroDescription: "Integrate state-of-the-art language models like GPT-4 into your applications for natural language understanding and generation.",
        features: [
            { title: "GPT-4 Access", description: "Use the most advanced LLMs available.", icon: "🧠" },
            { title: "Natural Language", description: "Understand and generate human-like text.", icon: "🗣️" },
            { title: "Code Generation", description: "Automate coding tasks and suggestions.", icon: "💻" },
            { title: "Embeddings", description: "Semantic search and clustering capabilities.", icon: "🔍" }
        ],
        useCases: ["Chatbots & Assistants", "Content Generation", "Semantic Search", "Data Extraction"]
    },
    {
        slug: "tensorflow",
        category: "AI & ML",
        title: "TensorFlow Solutions",
        heroTitle: "Machine Learning at Scale with TensorFlow",
        heroDescription: "An end-to-end open-source platform for machine learning, from research to production.",
        features: [
            { title: "Flexible", description: "Deploy anywhere: server, edge, or web.", icon: "🤸" },
            { title: "Ecosystem", description: "TFX for production pipelines, Lite for mobile.", icon: "🌐" },
            { title: "Community", description: "Massive community and resource library.", icon: "👥" },
            { title: "Research to Prod", description: "Seamless transition from model training to deployment.", icon: "🚀" }
        ],
        useCases: ["Image Recognition", "Predictive Analytics", "NLP Models", "Recommendation Systems"]
    },
    {
        slug: "pytorch",
        category: "AI & ML",
        title: "PyTorch Development",
        heroTitle: "Deep Learning Research & Production",
        heroDescription: "An open source machine learning framework that accelerates the path from research prototyping to production deployment.",
        features: [
            { title: "Dynamic Graphs", description: "Intuitive and flexible model building.", icon: "📈" },
            { title: "Python First", description: "Deep integration with Python ecosystem.", icon: "🐍" },
            { title: "Distributed Training", description: "Scale seamlessly across multiple GPUs.", icon: "🖥️" },
            { title: "TorchServe", description: "Easy deployment of models in production.", icon: "📡" }
        ],
        useCases: ["Computer Vision", "Natural Language Processing", "Generative AI", "Research Projects"]
    },
    {
        slug: "langchain",
        category: "AI & ML",
        title: "LangChain Integration",
        heroTitle: "Building Applications with LLMs via LangChain",
        heroDescription: "A framework for developing applications powered by language models, enabling context-aware and reasoning applications.",
        features: [
            { title: "Chains", description: "Chain together multiple model calls.", icon: "🔗" },
            { title: "Agents", description: "LLMs that determine actions to take.", icon: "🤖" },
            { title: "Memory", description: "Persist state between calls.", icon: "🧠" },
            { title: "Retrieval", description: "Connect LLMs to your custom data.", icon: "📂" }
        ],
        useCases: ["Document Analysis", "Q&A Systems", "Autonomous Agents", "Personal Assistants"]
    },
    {
        slug: "computer-vision",
        category: "AI & ML",
        title: "Computer Vision Solutions",
        heroTitle: "See the World with Computer Vision",
        heroDescription: "Teach computers to interpret and understand the visual world using digital images from cameras and videos.",
        features: [
            { title: "Object Detection", description: "Identify and locate objects in images.", icon: "📦" },
            { title: "Face Recognition", description: "Secure authentication and identification.", icon: "👤" },
            { title: "OCR", description: "Extract text from images and documents.", icon: "📝" },
            { title: "Video Analytics", description: "Real-time analysis of video streams.", icon: "📹" }
        ],
        useCases: ["Security & Surveillance", "Quality Control", "Medical Imaging", "Autonomous Vehicles"]
    }
];
