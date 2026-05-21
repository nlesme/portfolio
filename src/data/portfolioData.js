import imgDevFinder from "../assets/devfinder.png";
import imgBridalStore from "../assets/bridalstore.png";

export const skills = [
    { name: 'HTML',              category: 'Frontend', icon: '🏗️', description: 'Creating clean, semantic page structure for accessible and organized websites.' },
    { name: 'CSS',               category: 'Frontend', icon: '🎨', description: 'Styling responsive layouts, cards, forms, navigation bars, and modern UI sections.' },
    { name: 'JavaScript',        category: 'Frontend', icon: '⚡', description: 'Working with DOM logic, arrays, functions, events, API data, and interactive behavior.' },
    { name: 'React',             category: 'Frontend', icon: '⚛️', description: 'Building reusable components, managing state, rendering lists, handling forms, and working with routes.' },
    { name: 'CSS Modules',       category: 'Frontend', icon: '🧩', description: 'Writing component-based styles while keeping CSS organized and easier to maintain.' },
    { name: 'Vite',              category: 'Tools',    icon: '🚀', description: 'Creating and running modern React projects with a fast development workflow.' },
    { name: 'Git & GitHub',      category: 'Tools',    icon: '🔀', description: 'Managing project versions, organizing repositories, and publishing code online.' },
    { name: 'Node.js & Express', category: 'Backend',  icon: '🖥️', description: 'Creating basic REST API routes, handling requests, and connecting frontend apps with backend logic.' },
    { name: 'Prisma',            category: 'Backend',  icon: '🔷', description: 'Working with database models, migrations, and queries in a more structured way.' },
    { name: 'PostgreSQL',        category: 'Database', icon: '🗄️', description: 'Designing relational tables and storing structured business data for web applications.' },
    { name: 'Figma',             category: 'Design',   icon: '✏️', description: 'Reading designs, planning layouts, and using visual references to build better interfaces.' },
  ];
   
  export const categories = ['All', 'Frontend', 'Tools', 'Backend', 'Database', 'Design'];

  export const projects = [
    {
      img: imgDevFinder,
      title: "GitHub devfinder",
      description:
        "A React-based web app designed to help users quickly search and explore GitHub profiles. It connects to the GitHub API and presents developer information in a simple, friendly, and responsive interface. This project helped me strengthen my skills in React components, API requests, routing, conditional rendering, search functionality, and UI organization.",
      tech: ["React", "HTML", "CSS Modules", "API GitHub"],
      live: "https://github-devfinder-project.netlify.app/",
      repo: "https://github.com/nlesme/github-devfinder",
      highlight: true,
    },
    {
      img: imgBridalStore,
      title: "Bridal Store Sales Dashboard",
      description:
        "A full-stack sales dashboard built for a bridal store to manage online orders, refunds, and KPI reporting. It supports CSV imports and period-based insights by month, quarter, semester, year, and source.",
      tech: ["React", "HTML", "CSS Modules", "Node.js", "Express", "Prisma", "PotgreSQL"],
      live: "https://drive.google.com/file/d/1jVdbclcMRgoo38yhVxuD-KKwOVt4_p2i/view?usp=sharing",
      repo: "https://github.com/nlesme/bridal-store",
      highlight: true,
    }

  ];

  export const links = [
    { icon: '📧', label: 'Email',   sub: 'nlesme244@email.com',       href: 'mailto:nlesme244@email.com' },
    { icon: '🐙', label: 'GitHub',  sub: 'github.com/nlesme',      href: 'https://github.com/nlesme' },
    { icon: '💼', label: 'LinkedIn',sub: 'https://www.linkedin.com/in/norbelis-lesme-596077246/', href: 'https://www.linkedin.com/in/norbelis-lesme-596077246/' },
  ]