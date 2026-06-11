const CAREER_START_DATE = new Date(2022, 11, 1);

function calculateExperienceYears(startDate, currentDate = new Date()) {
  let completedMonths =
    (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
    currentDate.getMonth() -
    startDate.getMonth();

  if (currentDate.getDate() < startDate.getDate()) {
    completedMonths -= 1;
  }

  return Math.floor((completedMonths / 12) * 10) / 10;
}

export const experienceYears = calculateExperienceYears(CAREER_START_DATE);
export const experienceLabel = `${experienceYears}+`;

export const portfolioData = {
  personal: {
    name: "Govind Maithil",
    title: "Frontend Developer / React Developer",
    description:
      "I build scalable, responsive, and modern web applications using React.js, Node.js, JavaScript, TypeScript, Tailwind CSS, SCSS, and REST APIs.",
    email: "govindmaithilrtn@gmail.com",
    phone: "+91 8602443526",
    location: "India",
    linkedin: "linkedin.com/in/govind-maithil-30a20816a",
    github: "github.com/govindrtn",
    profileImage: `${import.meta.env.BASE_URL}govind-profile.png`,
  },

  about: {
    title: "About Me",
    description: `I am a Frontend Developer / React Developer with ${experienceLabel} years of experience building scalable, responsive, and user-friendly web applications. I have worked on product-based projects across healthcare, real estate, employee benefits, insurance, group management, and policy management domains.`,
    highlights: [
      "Reusable UI component development",
      "API integration",
      "Node.js and Express.js backend development",
      "Responsive web design",
      "Dashboard and admin panel development",
      "Healthcare, insurance, employee benefits, and real estate projects",
      "Cross-browser compatible UI",
      "Performance optimization",
    ],
  },

  stats: [
    { label: "Years Experience", value: experienceLabel },
    { label: "React.js Specialist", value: "React" },
    { label: "Domain Experience", value: "Healthcare" },
    { label: "Responsive Web Apps", value: "Mobile" },
  ],

  experience: [
    {
      id: 1,
      company: "Thynksight Technology Pvt Ltd",
      role: "Frontend Developer / React Developer",
      duration: "Mar 2026 – Present",
      project: "MyBenefits360",
      description:
        "Working on MyBenefits360, an employee benefits and insurance platform focused on group management, policy management, company profile setup, corporate branding, portal login, and login options.",
      responsibilities: [
        "Developed responsive frontend modules using React.js",
        "Built and maintained company profile and group management screens",
        "Worked on corporate branding configuration screens",
        "Developed portal login and login options UI",
        "Worked on policy management related modules",
        "Created reusable UI components for scalable development",
        "Integrated REST APIs with frontend screens",
        "Improved UI consistency and responsive behavior",
      ],
      modules: [
        "Company Profile",
        "Corporate Branding",
        "Portal Login",
        "Login Options",
        "Policy Management",
        "Group Management",
      ],
    },
    {
      id: 2,
      company: "Mantra Labs",
      role: "Frontend Developer",
      duration: "Dec 2022 – Feb 2026",
      projects: ["Connect2Clinic Web Portal", "Property Share Dashboard"],
      description:
        "Worked on product-based projects in healthcare and real estate domains. Developed responsive dashboards, reusable components, API-integrated modules, and optimized frontend performance.",
      responsibilities: [
        "Built and maintained dashboards and modules using React.js and TypeScript",
        "Developed responsive healthcare web applications",
        "Designed reusable components to improve development speed",
        "Integrated REST APIs",
        "Implemented SCSS-based styling",
        "Worked with QA teams for debugging and issue resolution",
        "Improved UI performance and user experience",
      ],
    },
  ],

  projects: [
    {
      id: 4,
      name: "Silver Gym Management System",
      domain: "Fitness / Full-Stack Web Application",
      description:
        "A full-stack gym management application for managing members, memberships, payments, and secure role-based access.",
      features: [
        "Admin dashboard",
        "Member management",
        "Membership and payment tracking",
        "Secure login and role-based access",
        "Responsive user interface",
        "REST API integration",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST API",
        "JWT",
      ],
      link: "https://govindrtn.github.io/Gym-Website-/",
      codeLink: null,
      demoCredentials: {
        username: "admin@silvergym.com",
        password: "admin123",
      },
    },
    {
      id: 1,
      name: "MyBenefits360",
      domain: "Employee Benefits / Insurance",
      description:
        "A modern employee benefits and insurance management platform focused on group setup, company profile, branding, policy management, and portal access configuration.",
      features: [
        "Company Profile Management",
        "Corporate Branding",
        "Portal Login Configuration",
        "Login Options",
        "Group Management",
        "Policy Management",
        "Responsive dashboard UI",
        "API-integrated frontend screens",
      ],
      technologies: [
        "React.js",
        "Vite",
        "Tailwind CSS",
        "JavaScript",
        "TypeScript",
        "REST API",
      ],
      link: null,
      codeLink: null,
    },
    {
      id: 2,
      name: "Connect2Clinic Web Portal",
      domain: "Healthcare",
      description:
        "A healthcare web platform with patient dashboard, appointment scheduling, clinic workflows, and responsive web modules.",
      features: [
        "Patient dashboard",
        "Appointment scheduling",
        "Healthcare workflow management",
        "Responsive web UI",
        "API integration",
        "Reusable components",
      ],
      technologies: ["React.js", "TypeScript", "SCSS", "REST API", "Git"],
      link: null,
      codeLink: null,
    },
    {
      id: 3,
      name: "Property Share Dashboard",
      domain: "Real Estate",
      description:
        "A real estate investment dashboard built with modular React components, responsive UI design, and API integration.",
      features: [
        "Dashboard modules",
        "Real estate investment UI",
        "Modular React components",
        "Responsive layout",
        "API integration",
      ],
      technologies: ["React.js", "TypeScript", "SCSS", "REST API"],
      link: null,
      codeLink: null,
    },
  ],

  skills: {
    frontend: [
      "React.js",
      "JavaScript ES6+",
      "TypeScript",
      "HTML5",
      "CSS3",
      "SCSS",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Web Design",
    ],
    stateAndArch: [
      "Component-Based Architecture",
      "Reusable Components",
      "Redux",
      "Redux Toolkit",
      "Context API",
      "Props and State Management",
      "Form Handling",
      "Validation",
    ],
    apiAndTools: [
      "REST API Integration",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "Axios",
      "Git",
      "GitHub",
      "Git Desktop",
      "VS Code",
      "Postman",
      "Agile Development",
    ],
    other: [
      "Debugging",
      "Code Optimization",
      "Cross-Browser Compatibility",
      "Performance Optimization",
      "UI Bug Fixing",
      "Team Collaboration",
    ],
  },

  services: [
    { name: "Business Website Development", icon: "Globe" },
    { name: "Portfolio Website", icon: "Briefcase" },
    { name: "Admin Dashboard", icon: "LayoutDashboard" },
    { name: "CRM Dashboard", icon: "Users" },
    { name: "Stock Management System", icon: "Package" },
    { name: "Billing System UI", icon: "FileText" },
    { name: "Gym Website", icon: "Dumbbell" },
    { name: "Landing Page", icon: "Rocket" },
    { name: "React.js Web Application", icon: "Code" },
    { name: "Responsive UI Development", icon: "Smartphone" },
  ],

  education: {
    degree: "B.Tech – Electronics & Communication Engineering",
    college: "SIRT, Bhopal",
    university: "RGPV University",
    duration: "2017 – 2021",
  },

  requirementTypes: [
    "Business Website",
    "Portfolio Website",
    "Dashboard",
    "CRM",
    "Stock Management System",
    "Billing System",
    "Gym Website",
    "Other Custom Requirement",
  ],

  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/govind-maithil-30a20816a",
      icon: "Linkedin",
    },
    {
      name: "GitHub",
      url: "https://github.com/govindrtn",
      icon: "Github",
    },
    {
      name: "Email",
      url: "mailto:govindmaithilrtn@gmail.com",
      icon: "Mail",
    },
  ],
};
