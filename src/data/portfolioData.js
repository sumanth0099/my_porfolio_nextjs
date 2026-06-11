export const portfolioData = {
  name: "Tetala Sumanth Reddy",
  role: "Full Stack Developer (MERN / Next.js)",
  email: "tetalasumanthreddy@gmail.com",
  phone: "9542152699",
  location: "East Godavari, Andhra Pradesh, India",
  linkedin: "https://www.linkedin.com/in/sumanth-reddy-tetala-359232291/",
  github: "https://github.com/sumanth0099",
  profileImage: "/profile.png",
  
  about: {
    bio1: `Hi, I'm Sumanth Reddy Tetala, a final-year Computer Science student and Full-Stack Developer passionate about building scalable, user-focused web applications. I specialize in the MERN stack and PostgreSQL, with experience developing complete applications from frontend interfaces to backend services and database design.`,                                           
    bio2:`I enjoy solving complex problems using Java and regularly practice Data Structures and Algorithms on coding platforms. My projects span SaaS applications, AI-powered tools, real-time collaborative systems, data-intensive applications, and browser extensions. I am constantly exploring new technologies, improving my development skills, and building projects that solve real-world problems.`,
  },

  education: [
    {
      degree: "B.Tech 4th Year CSE",
      institution: "Aditya College of Engineering and Technology",
      years: "2023 - 2027",
      grade: "8.45 CGPA",
      current: true
    },
    {
      degree: "Intermediate",
      institution: "Aditya Junior College Mandapeta",
      years: "2021 - 2023",
      grade: "9.47 CGPA"
    },
    {
      degree: "10th Class",
      institution: "TAR School",
      years: "2021",
      grade: "9.5 GPA"
    }
  ],

  skills: [
    { name: "ReactJS", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "ExpressJS", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "SQL", category: "Database" },
    { name: "Java", category: "Language" },
    { name: "C Language", category: "Language" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Docker", category: "DevOps" },
    { name: "Zustand", category: "State Management" }
  ],

  projects: [
    {
      title: "Multi-Tenant SaaS Platform",
      description: "Project and task management system with organization-level user management, project tracking, role-based access control, and secure tenant data isolation.",
      tech: ["React", "Node.js", "Express", "PostgreSQL"],
      github: "https://github.com/sumanth0099/Multi-Tenant-SaaS-Platform-with-Project-Task-Management"
    },
    {
      title: "Video Streaming Platform",
      description: "Custom video streaming platform with adaptive bitrate playback, manual quality switching, keyboard shortcuts, watch progress persistence, and HLS-based media streaming.",
      tech: ["React", "Vite", "HLS.js", "Docker", "AWS S3"],
      link:"https://video-streaming-platform-with-hls-c-sepia.vercel.app/",
      github: "https://github.com/sumanth0099/video-streaming-platform-with-hls-custom-controls-and-cdn-integration"
    },
    {
      title: "Document Site",
      description: "A high-performance, multi-language documentation platform built with Next.js App Router, ISR, next-intl, FlexSearch, and Docker.",
      tech: ["Next.js", "Docker", "FlexSearch"],
      link: "https://docs-search-zeta.vercel.app/",
      github: "https://github.com/sumanth0099/docs-search"
    },
    {
      title: "Blog platform",
      description: "A static, SEO-friendly blog platform built using Next.js with MDX support. Leverages Static Site Generation (SSG).",
      tech: ["Next.js", "MDX", "SSG"],
      link: "https://blogplatform-nextjs-project.vercel.app/",
      github: "https://github.com/sumanth0099/blogplatform-nextjs-project"
    },
    {
      title: "Local AI Email Auto-Responder",
      description: "Privacy-focused AI-powered email auto-responder built with n8n and Ollama, featuring automated email replies, local LLM inference, loop prevention, and Docker-based deployment.",
      tech: ["n8n", "Ollama", "Docker", "IMAP", "SMTP"],
      demo:"https://drive.google.com/file/d/14iMxqtI0RnsezAIoa5rzJZreCaWnRgpJ/view?usp=sharing",
      github: "https://github.com/sumanth0099/Local_AI_Email_Auto-Responder_with_n8n_and_Ollama"
    },
    {
      title: "Productivity Suite Chrome Extension",
      description: "A production-ready Chrome Extension featuring Tab Session Manager, Website Blocker, Persistent Notes, and Custom New Tab dashboard.",
      tech: ["React", "Zustand", "Manifest V3"],
      demo:"https://drive.google.com/file/d/1r9FR0FXsk7VE95g8785nIMxsJ-vzB8LA/view?usp=sharing",
      github: "https://github.com/sumanth0099/Production-Ready-Chrome-Extension-Productivity-Suite-with-Manifest-V3"
    },
    {
      title: "Financial Data Grid",
      description: "A high-performance React data grid capable of rendering 1,000,000 transaction records with smooth scrolling, sorting, and filtering.",
      tech: ["React 19", "Vite", "Zustand"],
      link: "https://financial-data-grid-with-1-million.vercel.app/",
      github: "https://github.com/sumanth0099/Financial-Data-Grid-with-1-Million-Row-Virtualization"
    },
    
    {
      title: "Real-Time Collaborative Whiteboard",
      description: "Multiple users can draw on the same whiteboard simultaneously. Cursors and drawings are synchronized instantly via WebSockets. Auto-loads last saved state.",
      tech: ["React", "Node.js", "WebSockets"],
      link: "https://sumanth0099-real-time-collaborative.onrender.com/",
      github: "https://github.com/sumanth0099/Real-Time-Collaborative-Whiteboard"
    },
    {
      title: "Prompt Router",
      description: "A production-ready AI assistant that automatically classifies user intent and routes each message to a specialised expert persona.",
      tech: ["Node.js", "Express", "Groq Llama"],
      link: "https://prompt-router-3r83.onrender.com/",
      github: "https://github.com/sumanth0099/prompt_Router"
    },
    {
      title: "My Data Explorer",
      description: "High-performance data visualization app built with React, Web Workers, and Zustand. Supports large CSV/JSON uploads (50k+ rows).",
      tech: ["React", "Zustand", "Web Workers"],
      link: "https://my-data-explorer.vercel.app/",
      github: "https://github.com/sumanth0099/my-data-explorer"
    },
    {
      title: "Multi-Step Registration Form",
      description: "A React-based multi-step registration form with validation, localStorage persistence, and smooth step transitions.",
      tech: ["React", "React Hook Form", "Zod", "Framer Motion"],
      link: "https://multi-step-form-xi-three.vercel.app/",
      github: "https://github.com/sumanth0099/multi-step-form"
    },
    {
      title: "Payment Gateway + Hosted Checkout",
      description: "A Dockerized payment gateway simulation (UPI + Card) that lets merchants create orders and customers complete payments.",
      tech: ["Node.js", "Express", "PostgreSQL", "React", "Docker"],
      github: "https://github.com/sumanth0099/Payment-Gateway-with-Multi-Method-Processing-and-Hosted-Checkout"
    },
    {
      title: "Payment Gateway Async",
      description: "A simplified asynchronous payment gateway system with webhook handling, retries, dashboard, and checkout SDK.",
      tech: ["Node.js", "Bull", "Redis", "PostgreSQL"],
      github: "https://github.com/sumanth0099/Payment-gateway-async"
    },
    {
      title: "Digital Restaurant Menu",
      description: "Digital Restaurant Menu built with React.js that simulates a real restaurant website, showcasing menu items with a user-friendly interface.",
      tech: ["React"],
      github: "https://github.com/sumanth0099/digital_restaurent_menu"
    },
    {
      title: "Rich Text Editor Component",
      description: "A feature-rich, interactive Rich Text Editor component built with React, focusing on advanced local state management with useReducer.",
      tech: ["React", "Vitest", "Testing Library"],
      link: "https://rich-text-editor-component-with-adv.vercel.app/",
      github: "https://github.com/sumanth0099/Rich-Text-Editor-Component-with-Advanced-Local-State"
    },
    {
      title: "Weather Monitor",
      description: "Real-time weather application that uses API integration to display accurate, location-based weather conditions.",
      tech: ["API Integration", "JavaScript"],
      github: "https://github.com/sumanth0099/my-data-explorer"
    },
    {
      title: "Image Gallery",
      description: "Made using public API which searches for images for the key entered by user.",
      tech: ["API Integration", "JavaScript"],
      github: "https://github.com/sumanth0099/Image_Gallery"
    },
    {
      title: "Emoji Flow",
      description: "Random emoji images appear wherever the cursor goes using eventListeners.",
      tech: ["JavaScript", "DOM"],
      link: "https://sumanth0099.github.io/Emoji_Flow/emoji_.html",
      github: "https://github.com/sumanth0099/Emoji_Flow"
    },
    {
      title: "Catch the Slide",
      description: "A fun game where the user aims to click a sliding box that moves away when hovered.",
      tech: ["JavaScript", "CSS"],
      link: "https://sumanth0099.github.io/Catch_the_slide/Random_Position.html",
      github: "https://github.com/sumanth0099/Catch_the_slide"
    },
    {
      title: "Password Generator",
      description: "Generate a random password with user-specified characters and length, including a copy feature.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://sumanth0099.github.io/Password_Generator/Generate.html",
      github: "https://github.com/sumanth0099/Password_Generator"
    },
    {
      title: "Basic Calculator",
      description: "A standard functioning calculator building using frontend web technologies.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://sumanth0099.github.io/Calculator/Calculator.html",
      github: "https://github.com/sumanth0099/Calculator"
    },
    {
      title: "StopWatch",
      description: "A functioning digital stopwatch simulator.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://sumanth0099.github.io/StopWatch/StopWatch.html",
      github: "https://github.com/sumanth0099/StopWatch"
    },
    {
      title: "Random Dog Picture Generator",
      description: "Uses a public API to fetch and display random images of dogs upon button click.",
      tech: ["API Integration", "JavaScript"],
      link: "https://sumanth0099.github.io/Random_picture_of_dog/Random_Dog.html",
      github: "https://github.com/sumanth0099/Random_picture_of_dog"
    }
  ],

  certifications: [
    {
      title: "Red Hat Certified System Administrator (RHCSA)",
      link: "https://drive.google.com/file/d/1wujXejRYMQQEWF38Cm_2r6Bs1R7BrYoQ/view?usp=sharing"
    },
    {
      title: "Java Certified Foundations Associate (Oracle)",
      link: "https://drive.google.com/file/d/1t6tmkFIWQB-hgQbjX7rIGrITcSPVE8A1/view?usp=sharing"
    },
    {
      title: "CLA - Programming Essentials in C",
      link: "https://drive.google.com/file/d/1GsX5rlD-rt1mEMslKwkUz2v2IXfinIfY/view?usp=sharing"
    },
    {
      title: "IT Specialist in HTML & CSS (Certiport)",
      link: "https://drive.google.com/file/d/1Q5FCTqyjzDGFkkM-tkZmI2dkujGy2CdR/view?usp=sharing"
    },
    {
      title: "SQL Intermediate (HackerRank)",
      link: "https://drive.google.com/file/d/1qEnQ9baVuuDCMsb4dFK6BZjm01T5d4m0/view?usp=sharing"
    },
    {
      title: "Operating Systems Basics (Cisco)",
      link: "https://drive.google.com/file/d/13aj6n0qKaVDF-eqNzVgshjc4SzypbrsK/view?usp=drive_link"
    },
    {
      title: "Problem Solving Basic (HackerRank)",
      link: "https://drive.google.com/file/d/1SOI0OmLaX16ilCR9nAo1rAYSu9dbaM54/view?usp=drive_link"
    },
    {
      title: "Intro to Computer Networking (Simplilearn)",
      link: "https://drive.google.com/file/d/1oWLVx7tex7r2PDt9RJvqdLKxaM0L8z_k/view?usp=drive_link"
    },
    {
      title: "Docker Essential Training (LinkedIn)",
      link: "https://drive.google.com/file/d/1ccxPIVYc5O7op1rt6XCwt-MYZGY4acg2/view?usp=drive_link"
    },
    {
      title: "React Essential Training (LinkedIn)",
      link: "https://drive.google.com/file/d/1_dC7cUkQrhIomrHdI8paMZPFtnN_mDwu/view?usp=sharing"
    },
    {
      title: "500 Difficulty Rating (CodeChef)",
      link: "https://drive.google.com/file/d/17csln671JmjisflxsaZWJq0zUHnWBxx-/view?usp=sharing"
    }
  ],

  codingProfiles: [
    { platform: "LeetCode", link: "https://leetcode.com/u/tetalasumanthreddy/", detail: "200+ Problems Solved" },
    { platform: "GFG", link: "https://www.geeksforgeeks.org/profile/sumanthitsme31?tab=activity", detail: "100+ Problems Solved" },
    { platform: "CodeChef", link: "https://www.codechef.com/users/sumanthitsme31", detail: "200+ Problems Solved" },
    { platform: "HackerRank", link: "https://www.hackerrank.com/profile/sumanthitsme31", detail: "Java 3 star, C lang 3 star, SQL 3 star, Python 1 star" }
  ]
};
