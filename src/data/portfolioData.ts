import type { DeveloperProfile, NavItem } from '../types/portfolio';

export const NAV_ITEMS: readonly NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const PORTFOLIO_DATA: DeveloperProfile = {
  name: 'Jorald Allen M. Sevilla',
  displayName: 'Jorald',
  nickname: 'mrjamsss',
  role: 'Web Systems Technology Student & Aspiring Full-Stack Developer',
  studentStatus: '4th Year College Student',
  specialization: 'Web Systems Technology',
  institution: 'Nueva Ecija University of Science and Technology (NEUST)',
  college: 'College of Information and Communications Technology (CICT)',
  location: 'Nueva Ecija, Philippines',
  availability: 'Available for OJT / Internships & Web Projects',
  
  headline: 'Building digital experiences through code.',
  
  heroBio: "I'm a Web Systems Technology student passionate about building modern, functional, and user-focused web applications.",
  
  aboutBio: "I am a 4th-year Web Systems Technology student at NEUST CICT with a deep passion for understanding how end-to-end digital solutions come together. From architecting relational databases and writing server-side APIs to crafting sleek, responsive user interfaces, I love turning practical problems into structured, reliable software. I am continuously exploring modern development patterns, clean architecture, and intuitive UI design to build applications that deliver real value to users.",
  
  aboutFocusAreas: [
    'Full-stack development',
    'Modern frontend development',
    'Backend systems & REST APIs',
    'Database-driven applications',
    'Mobile/web technologies',
    'Web Systems architecture',
  ],

  email: 'joraldsevilla69@gmail.com',

  stats: [
    {
      value: '4th Year',
      label: 'College Student',
      subtext: 'NEUST - CICT',
    },
    {
      value: 'Web Systems',
      label: 'Specialization',
      subtext: 'Information Technology',
    },
    {
      value: 'Full-Stack',
      label: 'Core Focus',
      subtext: 'Client & Server Architecture',
    },
    {
      value: 'Always Learning',
      label: 'Continuous Growth',
      subtext: 'Exploring New Tech',
    },
  ],

  socials: [
    {
      platform: 'facebook',
      label: 'Facebook',
      url: 'https://www.facebook.com/jamsigop',
      handle: 'Jorald Allen Sevilla',
    },
    {
      platform: 'github',
      label: 'GitHub',
      url: 'https://github.com/mrjamsss',
      handle: '@mrjamsss',
    },
    {
      platform: 'email',
      label: 'Email',
      url: 'mailto:joraldsevilla69@gmail.com',
      handle: 'joraldsevilla69@gmail.com',
    },
  ],

  skillCategories: [
    {
      id: 'frontend',
      title: 'Frontend Development',
      description: 'Crafting responsive, dynamic, and accessible interfaces.',
      skills: [
        { name: 'HTML5', tag: 'Semantic' },
        { name: 'CSS3', tag: 'Responsive' },
        { name: 'JavaScript', tag: 'ES6+' },
        { name: 'React', tag: 'SPA / Hooks' },
        { name: 'Next.js', tag: 'Full-Stack React' },
        { name: 'Tailwind CSS', tag: 'Utility-First' },
        { name: 'Ionic Angular', tag: 'Mobile / Cross-Platform' },
      ],
    },
    {
      id: 'backend',
      title: 'Backend Systems',
      description: 'Designing server-side logic, API endpoints, and system workflows.',
      skills: [
        { name: 'PHP', tag: 'Server-Side' },
        { name: 'Laravel', tag: 'MVC / Eloquent' },
        { name: 'Node.js', tag: 'Runtime / Express' },
      ],
    },
    {
      id: 'programming',
      title: 'Core Programming',
      description: 'Algorithmic thinking, object-oriented concepts, and computational foundations.',
      skills: [
        { name: 'C++', tag: 'Systems / OOP' },
        { name: 'Java', tag: 'Enterprise OOP' },
      ],
    },
    {
      id: 'database',
      title: 'Database & Environment',
      description: 'Structuring normalized relational schemas and version control.',
      skills: [
        { name: 'MySQL', tag: 'Relational DB' },
        { name: 'Git / GitHub', tag: 'Version Control' },
        { name: 'RESTful APIs', tag: 'Integration' },
        { name: 'Vite', tag: 'Tooling' },
      ],
    },
  ],

  projects: [
    {
      id: 'project-solo',
      title: 'Project SOLO',
      category: 'Full-Stack Management System',
      tagline: 'Solo Parent Information Management & Identification Platform',
      description:
        'A solo parent information management system designed to streamline applications, assessment, document management, notifications, and identification processes. Solves local community record keeping by providing structured application tracking and secure digital verification.',
      technologies: ['Laravel', 'PHP', 'React', 'MySQL', 'Tailwind CSS'],
      githubUrl: 'https://github.com/mrjamsss/project-solo',
      liveUrl: 'https://project-solo.demo',
      featured: true,
      highlightMetrics: [
        'Document verification workflow',
        'Automated status notifications',
        'Role-based access control',
      ],
    },
    {
      id: 'pawtner',
      title: 'PAWtner',
      category: 'Mobile / Web Concept & UI/UX',
      tagline: 'Pet Travel & Owner Companion Experience',
      description:
        'A pet travel concept focused on making travel more convenient, comfortable, and accessible for pets and their owners. Features pet-friendly transit route guides, accommodation filters, and essential health checklist tracking.',
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'UI/UX Design'],
      githubUrl: 'https://github.com/mrjamsss/pawtner',
      liveUrl: 'https://pawtner-travel.demo',
      featured: true,
      highlightMetrics: [
        'Interactive route planning',
        'Pet-friendly filter directory',
        'Owner companion checklist',
      ],
    },
    {
      id: 'ontrack',
      title: 'OnTrack',
      category: 'Academic Operations Platform',
      tagline: 'Web-Based OJT Process & Log Management System',
      description:
        'A web-based system concept designed to support OJT-related processes and information management. Helps students and university coordinators log hours, track supervisor evaluations, submit compliance documents, and monitor completion milestones.',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
      githubUrl: 'https://github.com/mrjamsss/ontrack-ojt',
      liveUrl: 'https://ontrack-system.demo',
      featured: true,
      highlightMetrics: [
        'Daily time record logger',
        'Milestone & requirement monitor',
        'Coordinator approval dashboard',
      ],
    },
  ],

  education: [
    {
      degree: 'Bachelor of Science in Information Technology',
      specialization: 'Web Systems Technology',
      institution: 'Nueva Ecija University of Science and Technology (NEUST)',
      collegeDepartment: 'College of Information and Communications Technology (CICT)',
      period: '2022 — Present (4th Year)',
      statusBadge: 'Current Academic Standing',
      description:
        'Rigorous coursework focused on web architectures, database management, systems integration, client-server programming, and software engineering methodologies.',
      highlights: [
        'Specializing in Web Systems Technology and enterprise web architecture',
        'Core coursework: Advanced Web Systems, Database Administration, Systems Integration & Architecture',
        'Active participant in academic software engineering projects and technical presentations',
      ],
    },
  ],

  experiences: [
    {
      role: 'Student Developer / Project Lead',
      organization: 'Academic Capstone & Coursework Teams (NEUST CICT)',
      period: '2023 — Present',
      type: 'academic',
      description:
        'Led and collaborated in multi-student development teams for web systems, managing database design in MySQL, backend controllers in Laravel/PHP, and user interfaces.',
      highlights: [
        'Designed database schemas and normalization structures for real-world scenarios',
        'Coordinated frontend integration with backend REST endpoints and form validation',
        'Presented project architectures and system demonstrations for departmental evaluations',
      ],
    },
    {
      role: 'Student Member',
      organization: 'College of Information and Communications Technology (CICT)',
      period: '2022 — Present',
      type: 'organization',
      description:
        'Active student participant in collegiate technology seminars, developer workshops, and department programming showcases.',
      highlights: [
        'Participated in department tech symposiums on emerging web frameworks and cloud computing',
        'Collaborated with peers on coding challenges, algorithms, and practical debugging sessions',
      ],
    },
  ],
};
