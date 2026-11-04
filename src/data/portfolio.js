import { Calendar, Ticket, ShoppingBag } from 'lucide-react';

export const projects = [
    {
        id: 1,
        title: "Eventure",
        subtitle: "Event Management Platform",
        icon: Calendar,
        gradient: "from-purple-500 to-indigo-600",
        description: "Full-stack platform using React, Node.js, Express, and MongoDB. Features role-based dashboards, JWT auth, and Stripe integration.",
        tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"]
    },
    {
        id: 2,
        title: "Local Event Finder",
        subtitle: "Ticketing & Discovery",
        icon: Ticket,
        gradient: "from-pink-500 to-rose-500",
        description: "Event discovery app with secure ticketing, admin panel, and social sharing features.",
        tech: ["React", "JWT", "Stripe", "Cloud Deployment"]
    },
    {
        id: 3,
        title: "Market Place App",
        subtitle: "Student E-commerce",
        icon: ShoppingBag,
        gradient: "from-amber-400 to-orange-500",
        description: "Marketplace for students with real-time chat, role-based interfaces, and business support.",
        tech: ["React", "PHP", "HTML/CSS"]
    }
];

export const experience = [
    {
        id: 1,
        title: "Testing Engineer",
        subtitle: "Wiwynn | Present",
        img: "https://www.wiwynn.com/hubfs/Open_Graph/open_graph_logo.png",
        description: "Enterprise server validation across CPU, GPU, memory, storage, and networking in rack-scale data center environments.",
        highlights: [
            "CPU, GPU, memory, and storage validation on enterprise server platforms",
            "High-speed networking, NIC bring-up, and rack-scale interconnect testing",
            "Hardware management, power distribution, and BMC-level diagnostics",
            "System-level troubleshooting and root-cause analysis with engineering and quality teams"
        ],
        tech: ["Server Validation", "GPUs", "Networking", "Diagnostics", "Data Centers"]
    },
    {
        id: 2,
        title: "Software Engineer",
        subtitle: "EPAM Systems | July 2022 - Nov 2023",
        img: "https://mma.prnewswire.com/media/2223594/EPAM_Logo.jpg?p=facebook",
        description: "Enterprise React and Java delivery with REST APIs, notifications, and Agile collaboration.",
        highlights: [
            "React for component-driven enterprise UIs and client-side state",
            "Java services and REST API integration across backend workflows",
            "Notification and event-driven messaging for production systems",
            "Agile delivery with engineering, QA, and product stakeholders"
        ],
        tech: ["React", "Java", "REST APIs", "Agile"]
    },
    {
        id: 3,
        title: "Software Engineer Intern",
        subtitle: "EPAM Systems | Jan 2022 - Jun 2022",
        img: "https://mma.prnewswire.com/media/2223594/EPAM_Logo.jpg?p=facebook",
        description: "Angular and JavaScript front-end architecture, routing, and UI performance.",
        highlights: [
            "Angular for modular UI architecture and client-side routing",
            "JavaScript and React for interactive user-management flows",
            "UI/UX refinement focused on navigation, accessibility, and load performance"
        ],
        tech: ["Angular", "JavaScript", "React", "UI Architecture"]
    },
    {
        id: 4,
        title: "Web Developer Intern",
        subtitle: "Sparks Foundation | Jun 2021 - Jul 2021",
        img: "https://media.licdn.com/dms/image/v2/C560BAQFgHU3sTF4LfQ/company-logo_200_200/company-logo_200_200/0/1631365213896?e=2147483647&v=beta&t=9TJaIfOOSISboGyTfR4ajtkoD2OL1uFdBDOwXJuUPGc",
        description: "Python and Django on an MVC stack with data-driven dashboards.",
        highlights: [
            "Python and Django for server-rendered MVC web applications",
            "Relational data models and transactional request handling",
            "Interactive dashboards for operational and financial reporting"
        ],
        tech: ["Python", "Django", "MVC", "SQL"]
    }
];

export const languages = [
    { id: 1, title: "Python", img: "https://img.icons8.com/color/48/python--v1.png" },
    { id: 2, title: "JavaScript", img: "https://img.icons8.com/color/48/javascript--v1.png" },
    { id: 3, title: "Java", img: "https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png" },
    { id: 4, title: "C", img: "https://img.icons8.com/color/48/c-programming.png" },
];

export const webSkills = [
    { id: 1, title: "HTML5", img: "https://img.icons8.com/color/48/html-5--v1.png" },
    { id: 2, title: "CSS3", img: "https://img.icons8.com/color/48/css3.png" },
    { id: 3, title: "Sass", img: "https://img.icons8.com/color/48/sass.png" },
    { id: 4, title: "Bootstrap", img: "https://img.icons8.com/color/48/bootstrap.png" },
    { id: 5, title: "React.js", img: "https://img.icons8.com/office/40/react.png" },
    { id: 6, title: "Angular.js", img: "https://img.icons8.com/color/48/angularjs.png" },
    { id: 7, title: "Node.js", img: "https://img.icons8.com/fluency/48/node-js.png" },
    { id: 8, title: "Django", img: "https://img.icons8.com/color/48/django.png" },
    { id: 9, title: "REST API", img: "https://img.icons8.com/color/48/api-settings.png" },
    { id: 10, title: "React Hooks", img: "https://img.icons8.com/office/40/react.png" }, // Reusing React icon
    { id: 11, title: "JSON", img: "https://img.icons8.com/color/48/json--v1.png" },
];

export const tools = [
    { id: 1, title: "MySQL", img: "https://img.icons8.com/color/48/mysql-logo.png" },
    { id: 2, title: "PostgreSQL", img: "https://img.icons8.com/color/48/postgreesql.png" },
    { id: 3, title: "Firebase", img: "https://img.icons8.com/color/48/firebase.png" },
    { id: 4, title: "Git", img: "https://img.icons8.com/color/48/git.png" },
    { id: 5, title: "VS Code", img: "https://img.icons8.com/color/48/visual-studio-code-2019.png" },
    { id: 6, title: "JIRA", img: "https://img.icons8.com/color/48/jira.png" },
    { id: 7, title: "Postman", img: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png" },
    { id: 8, title: "Confluence", img: "https://img.icons8.com/fluency/48/confluence.png" },
];

export const practices = [
    { id: 1, title: "Agile", img: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-agile-agile-development-flaticons-lineal-color-flat-icons-3.png" },
    { id: 2, title: "SDLC", img: "https://img.icons8.com/color/48/development-skill.png" },
    { id: 3, title: "MVC", img: "https://img.icons8.com/color/48/code.png" },
];

export const education = [
    {
        id: 1,
        title: "Masters in Computer Science",
        subtitle: "University of Texas at Arlington | 2024 - 2025",
        img: "https://images.seeklogo.com/logo-png/45/1/uta-the-university-of-texas-at-arlington-logo-png_seeklogo-454092.png",
        description: "Graduate coursework in software engineering, AI/ML, databases, and cloud systems. GPA: 3.6/4.0",
        highlights: [
            "Software engineering: design patterns, system design, and production-quality application architecture",
            "Artificial intelligence and machine learning: models, evaluation, and applied ML workflows",
            "Database systems: relational modeling, query optimization, and data consistency",
            "Cloud computing: scalable services, distributed systems, and deployment fundamentals"
        ],
        tech: ["Software Engineering", "AI / ML", "Databases", "Cloud Computing"]
    }
];
