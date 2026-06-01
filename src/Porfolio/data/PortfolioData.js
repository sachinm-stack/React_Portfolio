const portfolioData = {
  profile: {
    name: "Sachin M",
    title: "Full Stack Developer",
    bio: "Passionate Full Stack Developer skilled in React.js, Python, Django, MySQL, and REST API development.",
    email: "sachinmeganathan698@gmail.com",
    phone: "7502155570",
    location: "Bangalore, Karnataka",
    image: "",
  },

  education: [
    {
      id: 1,
      school: "Besant Technologies",
      degree: "Python Full Stack Development",
      year: "2025 - 2026",
      gpa: "Completed",
      details:
        "Completed training in React.js, Python, Django, HTML, CSS, JavaScript, MySQL, PostgreSQL, and real-world projects.",
    },
    {
      id: 2,
      school: "Bangalore University / SFS College",
      degree: "Bachelor of Computer Applications",
      year: "2022 - 2025",
      gpa: "71.12%",
      details:
        "Focused on web development, programming, database management, and software development.",
    },
    {
      id: 3,
      school: "PMHS School",
      degree: "Higher Secondary Education - Computer Application",
      year: "2020 - 2022",
      gpa: "75.17%",
      details:
        "Studied computer application fundamentals and programming basics.",
    },
  ],

  skills: [
    {
      id: 1,
      category: "Frontend",
      items: [
        "React.js",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "Tailwind CSS",
      ],
    },
    {
      id: 2,
      category: "Backend",
      items: ["Python", "Django", "MySQL", "PostgreSQL", "REST APIs"],
    },
    {
      id: 3,
      category: "Tools",
      items: ["Git", "GitHub", "Postman", "VS Code", "Vite"],
    },
    {
      id: 4,
      category: "Soft Skills",
      items: [
        "Problem Solving",
        "Team Collaboration",
        "Adaptability",
        "Time Management",
      ],
    },
  ],

  projects: {
    completed: [
      {
        id: 1,
        name: "TMDB Movie Web Application",
        description:
          "Responsive movie web application using React.js and TMDB API with popular movies, trending movies, TV shows, and search features.",
        technologies: ["React.js", "Vite", "TMDB API", "CSS"],
        image: "🎬",
        link: "#",
        year: "2026",
      },
      {
        id: 2,
        name: "Online Test Creation System",
        description:
          "Backend system using Django and PostgreSQL for creating and managing online tests with JWT authentication.",
        technologies: ["Python", "Django", "PostgreSQL", "JWT", "Postman"],
        image: "📝",
        link: "#",
        year: "2026",
      },
      {
        id: 3,
        name: "Institute Enquiry Management System",
        description:
          "Desktop application for managing student enquiries with form validation and database storage.",
        technologies: ["Python", "Tkinter", "MySQL"],
        image: "🏫",
        link: "#",
        year: "2025",
      },
      {
        id: 4,
        name: "CRM Web Application",
        description:
          "Customer relationship management system with CRUD operations for managing customer details.",
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        image: "📊",
        link: "#",
        year: "2025",
      },
      {
        id: 5,
        name: "Weather Forecasting Application",
        description:
          "Desktop weather forecasting application that fetches real-time weather data using API integration and displays temperature, humidity, wind speed, and weather conditions.",
        technologies: [
          "Python",
          "Tkinter",
          "OpenWeather API",
          "Requests",
          "JSON",
        ],
        image: "🌦️",
        link: "#",
        year: "2026",
      },
      {
        id: 6,
        name: "CRM Dashboard",
        description:
          "Interactive CRM dashboard built with React.js featuring lead management, statistics cards, charts, filtering, and responsive user interface.",
        technologies: ["React.js", "JavaScript", "CSS", "JSON"],
        image: "📈",
        link: "#",
        year: "2026",
      },
      {
        id: 7,
        name: "To-Do List Application",
        description:
          "Task management application with add, edit, delete, and mark-as-completed functionality using JavaScript DOM manipulation and local storage.",
        technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
        image: "✅",
        link: "#",
        year: "2025",
      },
      {
        id: 8,
        name: "Number Guessing Game",
        description:
          "Interactive game where the system automatically generates a random number and the player must guess it in the fewest attempts using hints and score tracking.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "🎯",
        link: "#",
        year: "2025",
      },
    ],

    working: [
      {
        id: 9,
        name: "AI Resume Analyzer",
        description:
          "Currently working on a resume analyzer that checks ATS score, keywords, skills matching, and gives improvement suggestions.",
        technologies: ["React.js", "Python", "Django", "AI"],
        image: "🤖",
        link: "#",
        year: "In Progress",
      },
      {
        id: 10,
        name: "Job Tracker Application",
        description:
          "Currently building an application to track job applications, interview status, company details, and follow-up reminders.",
        technologies: ["React.js", "Django", "MySQL", "REST API"],
        image: "📌",
        link: "#",
        year: "In Progress",
      },
    ],
  },

  experience: [
    {
      id: 1,
      company: "Besant Technologies",
      position: "Full Stack Developer Intern",
      duration: "Nov 2025 - Mar 2026",
      description:
        "Developed full-stack web applications using React.js, Python, Django, and MySQL.",
    },
    {
      id: 2,
      company: "RSR Technologies",
      position: "Web Developer Intern",
      duration: "Apr 2025 - May 2025",
      description:
        "Worked on website layouts, page designs, debugging, and updating PHP/MySQL code.",
    },
    {
      id: 3,
      company: "Envision Group",
      position: "Web Developer Intern",
      duration: "Dec 2024 - Mar 2025",
      description:
        "Contributed to frontend and backend development and improved UI/UX performance.",
    },
  ],

  contact: {
    email: "sachinmeganathan698@gmail.com",
    phone: "7502155570",
    location: "Bangalore, Karnataka",
    social: [
      {
        platform: "GitHub",
        url: "https://github.com/sachinm-stack",
        icon: "🐙",
      },
      {
        platform: "LinkedIn",
        url: "#",
        icon: "💼",
      },
      {
        platform: "Portfolio",
        url: "#",
        icon: "🌐",
      },
    ],
  },
};

export default portfolioData;