import { Experience, Project, SkillCategory, SocialLink } from './types';

export const PERSONAL_INFO = {
  name: "Basweshwar Madhavrao Gubge",
  role: "Sr. Software Developer",
  email: "basweshwargubge1902@gmail.com",
  phone: "+91 8530617353",
  location: "Pune, India",
  summary: "Senior Software Developer with strong expertise in React Native, ReactJS, TypeScript, JavaScript ES6+, .NET Web API, MVC.NET, and MySQL. Experienced in developing and deploying cross-platform mobile applications, architecting scalable backend systems, and delivering end-to-end product solutions. Proven ability to lead development teams, manage full SDLC, optimize application performance, and build secure APIs. Hands-on experience with N8N workflows, App Store/Play Store publishing."
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/basweshwar-gubge-1340952b1", icon: "Linkedin" },
  { platform: "GitHub", url: "https://github.com/Basweshwar1999", icon: "Github" },
  { platform: "Email", url: `mailto:${PERSONAL_INFO.email}`, icon: "Mail" },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: "botmatic",
    role: "Sr. Software Developer",
    company: "Botmatic Solution Pvt Ltd",
    period: "Feb 2023 – Present",
    location: "Kharadi, Pune, India",
    coverImg: new URL('./Assets/botmatic.png', import.meta.url).href,
    points: [
      "Lead the Mobile application team and AI development team.",
      "Successfully developed and deployed four end-to-end mobile applications.",
      "Honored as a Top Performer for best performance and learning new technologies.",
      "Started the company's AI development function by building an optimized Invoice OCR agent.",
      "Formed and led a 3-intern AI team, driving architecture, training, and delivery.",
      "Developed 4 AI agents (Data Cleaning, Data Validation, Data Cubes, Invoice OCR) with major accuracy and efficiency improvements.",
      "Implemented reusable AI workflows that reduced manual efforts and boosted data quality across the organization."
    ]
  },
  {
    id: "kamjritztex",
    role: "React Developer (Freelance)",
    company: "Kamjritztex IT Solutions",
    period: "Freelance",
    location: "Kharadi, Pune, India",
    coverImg: new URL('./Assets/kamjri.png', import.meta.url).href,
    points: [
      "Successfully developed End-to-end application Texsmartly (HRMS and CRM Application).",
      "Optimized app performance of Jdrivex for both platforms, ensuring a seamless user experience."
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "myvyay",
    title: "MyVyay - Expense Management",
    category: "Mobile",
    description: "An expense management app supporting multiple languages, invoice generation, and geolocation.",
    techStack: ["React Native", "JavaScript", "MySQL", "Firebase"],
    points: [
      "Features: Multiple languages, Invoice generation, PDF Generation via Doc Scanner, Chat functionality, Background Services, Geolocation Tracking.",
      "Solved real-time client issues on urgent basis."
    ],
    links: [
      { label: "Website", url: "https://myvyay.com/", type: "web" },
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.vyay", type: "android" },
      { label: "App Store", url: "https://apps.apple.com/in/app/myvyay/id6474442788", type: "ios" }
    ],
      coverImg: new URL('./Assets/Videos/myvyay cover image.jpeg', import.meta.url).href,
      source: 'company',
          // video: "https://drive.google.com/file/d/1HWbPtSgKlPcOy9w9zjgg35Vyq2ISPwZj/view?usp=sharing"
    video: new URL('https://drive.google.com/file/d/1HWbPtSgKlPcOy9w9zjgg35Vyq2ISPwZj/view?usp=sharing', import.meta.url).href

  },
  {
    id: "cfirst",
    title: "Claim My Shares (CFirst)",
    category: "Web",
    description: "Platform enabling seamless digital claims for unclaimed shares with a secure admin portal.",
    techStack: ["React Native", "ReactJS", "TypeScript", ".NET Web API", "MySQL", "Figma"],
    points: [
      "Led platform end-to-end. Built secure .NET Web APIs with strong validation.",
      "Developed Admin Portal for user management, KYC verification, and payments.",
      "Delivered an internal SMS Listener module in one day to automate Indian Post delivery tracking."
    ],
    links: [
        { label: "Website", url: "https://claimmyshares.com/", type: "web" },
        { label: "Android App", url: "https://play.google.com/store/apps/details?id=com.claimmyshares", type: "android" },
        { label: "iOS App", url: "https://apps.apple.com/in/app/cfirst/id6742400738", type: "ios" },
        { label: "Admin Portal", url: "http://13.126.125.20:8088/", type: "admin" }
    ],
      coverImg: new URL('./Assets/Videos/image.png', import.meta.url).href,
      source: 'company',
          // video: "https://drive.google.com/file/d/1HWbPtSgKlPcOy9w9zjgg35Vyq2ISPwZj/view?usp=sharing"
    video: new URL('https://drive.google.com/file/d/1HWbPtSgKlPcOy9w9zjgg35Vyq2ISPwZj/view?usp=sharing', import.meta.url).href

  },
  {
    id: "mybridge",
    title: "MyBridge (HRMS)",
    category: "Web",
    description: "Comprehensive HRMS platform covering Web, Mobile, Backend, and Database layers.",
    techStack: ["React Native", "JavaScript", ".NET Core", "MySQL", "Figma"],
    points: [
      "Lead end-to-end architecture and development.",
      "Acted as Scrum Master: planned sprints, assigned tasks, and tracked progress.",
      "Managed product deliveries and client customizations."
    ],
    links: [
        { label: "Website", url: "https://mybridgehr.com/", type: "web" },
        { label: "Android App", url: "https://play.google.com/store/apps/details?id=com.mybridgehr", type: "android" },
        { label: "iOS App", url: "https://apps.apple.com/in/app/mybridgehr/id6742400748", type: "ios" }
    ],
      coverImg: new URL('./Assets/Videos/mybridge.png', import.meta.url).href,
      source: 'company',
          // video: "https://drive.google.com/file/d/1HWbPtSgKlPcOy9w9zjgg35Vyq2ISPwZj/view?usp=sharing"
    video: new URL('https://drive.google.com/file/d/1HWbPtSgKlPcOy9w9zjgg35Vyq2ISPwZj/view?usp=sharing', import.meta.url).href

  },
  {
    id: "ai_agents",
    title: "Enterprise AI Agents",
    category: "AI",
    description: "Suite of AI agents for data processing and OCR.",
    techStack: ["MVC.NET", "JavaScript", "MySQL", "C#"],
    points: [
      "Developed agents for Data Cleaning, Validation, Data Cubes, and Invoice OCR.",
      "Deployed API projects on IIS server.",
      "Employed C# for server-side logic."
    ],
    links: [],
      coverImg: new URL('./Assets/Videos/fintech2.jpg', import.meta.url).href,
      source: 'company',
          // video: "https://drive.google.com/file/d/1HWbPtSgKlPcOy9w9zjgg35Vyq2ISPwZj/view?usp=sharing"
    video: new URL('https://drive.google.com/file/d/1HWbPtSgKlPcOy9w9zjgg35Vyq2ISPwZj/view?usp=sharing', import.meta.url).href


  },
  
  {
    id: "blood_bank",
    title: "Blood Bank App",
    category: "Mobile",
    description: "Android application for blood donation and request fulfillment with admin and patient login.",
    techStack: ["Java", "Android Studio"],
    points: ["Login access for admin and patients.", "Facilitates blood donation and requests."],
    links: [
        { label: "View Code", url: "https://github.com/Basweshwar1999/Blood-bank-app-project", type: "github" }
    ],
    coverImg: new URL('./Assets/Videos/blood bank cover image.jpeg', import.meta.url).href,
    source: 'personal',
        // video: "https://drive.google.com/file/d/1HWbPtSgKlPcOy9w9zjgg35Vyq2ISPwZj/view?usp=sharing"
    video: new URL('https://drive.google.com/file/d/1HWbPtSgKlPcOy9w9zjgg35Vyq2ISPwZj/view?usp=sharing', import.meta.url).href

  },
  {
    id: "flight_booking",
    title: "Flight Booking App",
    category: "Mobile",
    description: "flight booking application b y using the free API for flight data.",
    techStack: ["React Native", "Hibernate", "JavaScript", "MySQL"],
    points: ["Integrated free API for real-time flight data.", "JSP-based backend for data processing."],
    links: [
        { label: "View Code", url: "https://github.com/Basweshwar1999/BookMyFlight", type: "github" }
    ],
    coverImg: new URL('./Assets/Videos/flight booking cover image.jpeg', import.meta.url).href,
    source: 'personal',
    // video: "https://drive.google.com/file/d/1HWbPtSgKlPcOy9w9zjgg35Vyq2ISPwZj/view?usp=sharing"
    video: new URL('https://drive.google.com/file/d/1HWbPtSgKlPcOy9w9zjgg35Vyq2ISPwZj/view?usp=sharing', import.meta.url).href
  },
   {
    id: "MyKaryam",
    title: "Mykaryam Application",
    category: "Web&Mobile",
    description: "Real-time Task management application to handle daily tasks.",
    techStack: ["React Native", "ReactJS", "JavaScript", "MySQL" , ".NET Web API"],
    points: ["MyKaryam is a task management application that allows users to create, assign, and track tasks in real-time. It features user authentication, task categorization, priority setting, and deadline reminders.", "Users can create, assign, and track tasks in real-time, making it easy to stay organized and on top of their tasks.", "The application includes features such as user authentication, task categorization, priority setting, and deadline reminders, making it a useful tool for managing daily tasks."],
    links: [
        { label: "View Code", url: "https://github.com/Basweshwar1999/MyKaryam", type: "github" }
    ],
    coverImg: new URL('./Assets/Videos/mykaryam_cover.png', import.meta.url).href,
    source: 'personal',
        // video: "https://drive.google.com/file/d/1HWbPtSgKlPcOy9w9zjgg35Vyq2ISPwZj/view?usp=sharing"
    video: new URL('https://drive.google.com/file/d/1HWbPtSgKlPcOy9w9zjgg35Vyq2ISPwZj/view?usp=sharing', import.meta.url).href

  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Frontend & Mobile",
    skills: ["ReactJS", "React Native", "TypeScript", "JavaScript (ES6+)", "Redux", "HTML/CSS"]
  },
  {
    category: "Backend & API",
    skills: [".NET Web API", "MVC.NET", "ASP.NET Core", "C#", "Node.js"]
  },
  {
    category: "AI & Automation",
    skills: ["N8N Workflows", "AI Agent Creation", "Webhook Integration", "OCR"]
  },
  {
    category: "Database & Tools",
    skills: ["MySQL", "Git", "VS Code", "Visual Studio", "Xcode", "Android Studio", "Postman", "Figma"]
  }
];

export const SYSTEM_INSTRUCTION = `
You are an AI assistant for Basweshwar Madhavrao Gubge's portfolio website. 
Your goal is to answer questions about Basweshwar's professional background, skills, and projects based strictly on the following resume data.

RESUME DATA:
Name: ${PERSONAL_INFO.name}
Role: ${PERSONAL_INFO.role}
Summary: ${PERSONAL_INFO.summary}

Experience:
${EXPERIENCE_DATA.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.points.join('. ')}`).join('\n')}

Projects:
${PROJECTS_DATA.map(p => `- ${p.title} (${p.category}): ${p.description}. Tech: ${p.techStack.join(', ')}. Details: ${p.points?.join(' ')}`).join('\n')}

Skills:
${SKILLS_DATA.map(s => `- ${s.category}: ${s.skills.join(', ')}`).join('\n')}

Education:
- B.Tech in IT (8.04 CGPA), Dr. Babasaheb Ambedkar Technological University (2020-2023)
- Diploma in IT (86.69%), Government Polytechnic, Nanded (2017-2020)

Interests: World Affairs, Photography, Travelling.

Tone: Professional, enthusiastic, and concise. 
If asked about contact info, provide: ${PERSONAL_INFO.email}.
If asked a question not related to his professional life, politely steer the conversation back to his skills or projects.
`;