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
        title: "Software Engineer",
        subtitle: "EPAM Systems | July 2022 - Nov 2023",
        img: "https://mma.prnewswire.com/media/2223594/EPAM_Logo.jpg?p=facebook",
        description: "Developed Maternity Leave Request Portal. Integrated external APIs and implemented notification systems. Collaborated in Agile.",
        tech: ["React", "Java", "APIs"]
    },
    {
        id: 2,
        title: "Software Engineer Intern",
        subtitle: "EPAM Systems | Jan 2022 - Jun 2022",
        img: "https://mma.prnewswire.com/media/2223594/EPAM_Logo.jpg?p=facebook",
        description: "Built User Management System with Angular. Optimized UI/UX and routing.",
        tech: ["Angular", "JavaScript", "React"]
    },
    {
        id: 3,
        title: "Web Developer Intern",
        subtitle: "Sparks Foundation | Jun 2021 - Jul 2021",
        img: "https://media.licdn.com/dms/image/v2/C560BAQFgHU3sTF4LfQ/company-logo_200_200/company-logo_200_200/0/1631365213896?e=2147483647&v=beta&t=9TJaIfOOSISboGyTfR4ajtkoD2OL1uFdBDOwXJuUPGc",
        description: "Built Bank Management System using Django. Created interactive financial dashboards.",
        tech: ["Python", "Django", "MVC"]
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
        description: "Specializing in Software Engineering, Artificial Intelligence, and Database Systems. GPA: 3.6/4.0",
        tech: ["AI", "Machine Learning", "Cloud Computing"]
    }
];
