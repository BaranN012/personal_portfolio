import {
    mobile,
    backend,
    dataeng,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    coderschool,
    apollo,
    headstarter,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Data Analyst",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Data Engineer",
        icon: dataeng,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Technical Analyst Manager",
        company_name: "Apollo Urgent Care/Carolina Primary Care",
        icon: apollo,
        iconBg: "#383E56",
        date: "May 2021 - August 2023",
        points: [
            "Implemented and maintained adherence to HIPAA regulations for managing protected health information (PHI), leveraging data security best practices.",
            "Stakeholder Collaboration: Facilitated cross-functional collaboration with physicians, clinical staff, payers, and other stakeholders to resolve complex medical billing and coding issues using data-driven solutions.",
            "Financial Analysis: Utilized data analytics tools to develop and interpret financial metrics, assessing the firm’s fiscal health and performance.",
            "Billing Cycle Optimization: Conducted advanced analysis of billing cycle data, employing statistical methods and data visualization techniques to support strategic decision-making and operational improvements.",
            "Reporting and Metrics: Engineered automated reporting systems to generate and visualize key performance indicators (KPIs) such as days in accounts receivable and denial rates, enhancing data accessibility and decision-making efficiency.",
        ],
    }, 
    {   
        title: "Coding Instructor",
        company_name: "The Coder School",
        icon: coderschool,
        iconBg: "#E6DEDD",
        date: "May 2024 - August 2024",
        points: [
            "Led AI and Python Camps: Delivered engaging, hands-on AI and Python coding camps for middle and high school students, fostering a strong foundation in machine learning concepts and programming skills.",
            "Curriculum Development: Designed and implemented structured lesson plans, covering core AI algorithms, Python syntax, data manipulation, and real-world applications, tailored to various skill levels.",
            "Project-Based Learning: Guided students through project-based learning experiences, enabling them to build AI models, develop Python applications, and solve complex problems, enhancing their critical thinking and coding abilities.",
            "Mentorship and Support: Provided personalized mentorship, offering feedback and support to students, ensuring they grasped key concepts and achieved their learning objectives.",
            "Integration with Software Engineering Practices: Introduced students to industry-standard tools and best practices in software engineering and data science, preparing them for future academic and career opportunities in technology.",
        ],
    },
    {
        title: "Software Engineering Fellow",
        company_name: "Headstarter AI",
        icon: headstarter,
        iconBg: "#E6DEDD",
        date: "July 2024 - Present",
        points: [
            "AI Project Development: Engaged in building and deploying 5 innovative AI projects, applying cutting-edge techniques in machine learning and data science.",
            "Hackathon Participation: Competed in high-stakes hackathons, showcasing problem-solving skills and collaborative teamwork.",
            "Startup Growth Initiative: Spearheading a final project to drive significant user engagement by achieving 1,000 people on the waitlist, 1,000 new accounts created, or generating $1,000 in revenue.",
            "Skills Enhancement: Advanced expertise in AI vision systems, personal branding, and interview preparation through targeted learning and practical experience.",
            "Networking and Presentation: Strengthened professional connections and presentation skills, preparing for future career opportunities in the tech industry.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };
