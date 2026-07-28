export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const contactInfo = {
  email: 'muneebatariq239@gmail.com',
  phone: '03185646482',
  github: 'https://github.com/MuneebaTariq67',
  linkedin: 'https://www.linkedin.com/in/muneeba-tariq',
}

export const typingRoles = [
  'Computer Science Student',
  'Software Developer',
  'Python Developer',
  'Problem Solver',
  'Distributed Systems Enthusiast',
]

export const stats = [
  { label: 'Projects Completed', value: 6, suffix: '+' },
  { label: 'Programming Languages', value: 3, suffix: '' },
  { label: 'Technologies Learned', value: 12, suffix: '+' },
  { label: 'Current Semester', value: 6, suffix: 'th' },
]

export const aboutPoints = [
  'Passionate about software engineering and clean architecture',
  'Focused on backend development and distributed systems',
  'Strong foundation in data structures and algorithms',
  'Quick learner who enjoys picking up modern technologies',
  'Effective team collaborator with solid communication',
  'Reliable time management and attention to detail',
]

export type Skill = { name: string; icon: string; color: string }
export type SkillCategory = { title: string; skills: Skill[] }

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML5', icon: '/tech/html5.svg', color: '#E34F26' },
      { name: 'CSS3', icon: '/tech/css3.svg', color: '#1572B6' },
      { name: 'JavaScript', icon: '/tech/javascript.svg', color: '#F7DF1E' },
      { name: 'React.js', icon: '/tech/react.svg', color: '#61DAFB' },
      { name: 'Bootstrap', icon: '/tech/bootstrap.svg', color: '#7952B3' },
      { name: 'Tailwind CSS', icon: '/tech/tailwindcss.svg', color: '#06B6D4' },
    ],
  },
  {
    title: 'Mobile Development',
    skills: [
      { name: 'Flutter', icon: '/tech/flutter.svg', color: '#02569B' },
      { name: 'Dart', icon: '/tech/dart.svg', color: '#0175C2' },
    ],
  },
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C++', icon: '/tech/cplusplus.svg', color: '#00599C' },
      { name: 'Java', icon: '/tech/java.svg', color: '#E76F00' },
      { name: 'Python', icon: '/tech/python.svg', color: '#3776AB' },
    ],
  },
  {
    title: 'Databases & Tools',
    skills: [
      { name: 'MySQL', icon: '/tech/mysql.svg', color: '#4479A1' },
      { name: 'Git', icon: '/tech/git.svg', color: '#F05032' },
      { name: 'VS Code', icon: '/tech/vscode.svg', color: '#007ACC' },
    ],
  },
]

export type Project = {
  title: string
  description: string
  image: string
  tech: string[]
  features: string[]
  github: string
  demo: string
}

export const projects: Project[] = [
  {
    title: 'Distributed Web Crawler',
    description:
      'A scalable, fault-tolerant crawler that distributes URL fetching across workers using Dask to index the web efficiently.',
    image: '/images/web_crawler.jpeg',
    tech: ['Python', 'Dask', 'SQL'],
    features: ['Parallel fetching', 'URL deduplication', 'Fault-tolerant storage'],
    github: 'https://github.com/MuneebaTariq67/Distributed_Web_Crawler_Dask',
    demo: 'https://github.com/MuneebaTariq67/Distributed_Web_Crawler_Dask',
  },
  {
    title: 'Fluff And Tie Scrunchies App',
    description:
      'Developed a mobile e-commerce application for Fluff N Tie, a scrunchie and hair accessories brand, using React Native and Expo..',
    image: '/images/Fluff and Tie Scrunchies .jpeg',
    tech: ['Flutter', 'Dart'],
    features: ['Cross-platform UI', 'Responsive layouts', 'Modern widgets'],
    github: 'https://github.com/MuneebaTariq67/Mobile-App-Development',
    demo: 'https://github.com/MuneebaTariq67/Mobile-App-Development',
  },
  {
    title: 'Library Management System',
    description:
      'A system to manage book records, member registrations and issue/return tracking with fines, built on OOP principles.',
    image: '/images/library management system.jpeg',
    tech: ['C++', 'OOP', 'DBMS'],
    features: ['Book catalog', 'Issue/return tracking', 'Fine management'],
    github: 'https://github.com/MuneebaTariq67/Library-Management-System-',
    demo: 'https://github.com/MuneebaTariq67/Library-Management-System-',
  },
  {
    title: 'Student Attandance Managemnet System ',
    description:
      'Developed a Student Attendance Management System as an Object-Oriented Programming and Database Management System project to manage and organize student attendance records efficiently..',
   
        image: '/images/Student_Attandance_Management_System.jpeg',

    tech: ['SQL', 'MySQL', 'DBMS'],
    features: ['Normalized schemas', 'Complex queries', 'Reporting'],
    github: 'https://github.com/MuneebaTariq67/database-management-systems',
    demo: 'https://github.com/MuneebaTariq67/database-management-systems',
  },
  {
    title: 'Data Grapgh Project',
    description:
      'The project focuses on representing and organizing data in a graph structure, providing a practical understanding of how relationships and connections between different data elements can be modeled and managed.s.',
    image: '/images/dsa.jpeg',
    tech: ['C++', 'DSA'],
    features: ['Core data structures', 'Sorting & searching', 'Algorithm analysis'],
    github: 'https://github.com/MuneebaTariq67/DSA',
    demo: 'https://github.com/MuneebaTariq67/DSA',
  }
]

export const timeline = [
  {
    title: 'BS Computer Science',
    org: 'Fatima Jinnah Women University',
    period: '2022 — Present',
    description:
      'Pursuing a Bachelor of Science in Computer Science with a focus on software engineering, distributed systems and algorithms.',
  },
  {
    title: 'Intermediate (Pre-Engineering)',
    org: 'Higher Secondary School',
    period: '2020 — 2022',
    description:
      'Completed intermediate education with strong grades in mathematics, physics and computer science.',
  },
  {
    title: 'Matriculation (Science)',
    org: 'Secondary School',
    period: '2018 — 2020',
    description:
      'Built a solid academic foundation in science and mathematics with distinction.',
  },
]

export const whyHireMe = [
  {
    title: 'Problem Solving',
    description: 'I break complex problems into clean, efficient and testable solutions.',
  },
  { title: 'Quick Learner', description: 'I pick up new tools and frameworks fast and apply them well.' },
  { title: 'Communication', description: 'Clear, honest and proactive communication across teams.' },
  { title: 'Teamwork', description: 'I collaborate effectively and contribute to shared goals.' },
  { title: 'Clean Code', description: 'Readable, maintainable and well-documented codebases.' },
  { title: 'Attention to Detail', description: 'Careful, quality-first engineering from design to ship.' },
  { title: 'Adaptability', description: 'Comfortable in fast-changing startup environments.' },
]

