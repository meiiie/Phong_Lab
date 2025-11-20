// Technology Stack Data - VMU Student Research Lab
// Dữ liệu công nghệ sử dụng trong lab

export const techStack = [
  // Frontend Technologies
  {
    id: "tech-001",
    name: "React",
    category: "Frontend",
    logo: "/tech-logos/react.svg",
    description: "Thư viện JavaScript để xây dựng giao diện người dùng",
    website: "https://reactjs.org",
    usedInProjects: ["project-001", "project-002", "project-004"],
    proficiencyLevel: "Advanced",
    learningResources: [
      { title: "Official Docs", link: "https://reactjs.org/docs" },
      { title: "Lab Tutorial", link: "/resources/react-guide" }
    ]
  },
  {
    id: "tech-002",
    name: "Next.js",
    category: "Frontend",
    logo: "/tech-logos/nextjs.svg",
    description: "Framework React cho production với SSR và SSG",
    website: "https://nextjs.org",
    usedInProjects: ["project-004"],
    proficiencyLevel: "Advanced",
    learningResources: [
      { title: "Official Docs", link: "https://nextjs.org/docs" }
    ]
  },
  {
    id: "tech-003",
    name: "Vue.js",
    category: "Frontend",
    logo: "/tech-logos/vue.svg",
    description: "Progressive JavaScript framework",
    website: "https://vuejs.org",
    usedInProjects: ["project-003"],
    proficiencyLevel: "Intermediate",
    learningResources: [
      { title: "Official Docs", link: "https://vuejs.org/guide" }
    ]
  },
  
  // Backend Technologies
  {
    id: "tech-004",
    name: "Node.js",
    category: "Backend",
    logo: "/tech-logos/nodejs.svg",
    description: "JavaScript runtime cho backend development",
    website: "https://nodejs.org",
    usedInProjects: ["project-002", "project-004", "project-006"],
    proficiencyLevel: "Advanced",
    learningResources: [
      { title: "Official Docs", link: "https://nodejs.org/docs" }
    ]
  },
  {
    id: "tech-005",
    name: "Python",
    category: "Backend",
    logo: "/tech-logos/python.svg",
    description: "Ngôn ngữ lập trình đa năng, mạnh về AI/ML",
    website: "https://python.org",
    usedInProjects: ["project-001", "project-003", "project-005"],
    proficiencyLevel: "Advanced",
    learningResources: [
      { title: "Official Docs", link: "https://docs.python.org" }
    ]
  },
  {
    id: "tech-006",
    name: "FastAPI",
    category: "Backend",
    logo: "/tech-logos/fastapi.svg",
    description: "Modern Python web framework cho APIs",
    website: "https://fastapi.tiangolo.com",
    usedInProjects: ["project-003"],
    proficiencyLevel: "Intermediate",
    learningResources: [
      { title: "Official Docs", link: "https://fastapi.tiangolo.com" }
    ]
  },
  
  // AI/ML Technologies
  {
    id: "tech-007",
    name: "TensorFlow",
    category: "AI/ML",
    logo: "/tech-logos/tensorflow.svg",
    description: "Open-source machine learning framework",
    website: "https://tensorflow.org",
    usedInProjects: ["project-001"],
    proficiencyLevel: "Advanced",
    learningResources: [
      { title: "Official Docs", link: "https://tensorflow.org/docs" },
      { title: "Lab Tutorial", link: "/resources/tensorflow-guide" }
    ]
  },
  {
    id: "tech-008",
    name: "PyTorch",
    category: "AI/ML",
    logo: "/tech-logos/pytorch.svg",
    description: "Deep learning framework với dynamic computation graphs",
    website: "https://pytorch.org",
    usedInProjects: ["project-003"],
    proficiencyLevel: "Advanced",
    learningResources: [
      { title: "Official Docs", link: "https://pytorch.org/docs" }
    ]
  },
  {
    id: "tech-009",
    name: "Scikit-learn",
    category: "AI/ML",
    logo: "/tech-logos/sklearn.svg",
    description: "Machine learning library cho Python",
    website: "https://scikit-learn.org",
    usedInProjects: ["project-001"],
    proficiencyLevel: "Intermediate",
    learningResources: [
      { title: "Official Docs", link: "https://scikit-learn.org/stable" }
    ]
  },
  
  // Database Technologies
  {
    id: "tech-010",
    name: "PostgreSQL",
    category: "Database",
    logo: "/tech-logos/postgresql.svg",
    description: "Advanced open-source relational database",
    website: "https://postgresql.org",
    usedInProjects: ["project-001", "project-003", "project-004"],
    proficiencyLevel: "Advanced",
    learningResources: [
      { title: "Official Docs", link: "https://postgresql.org/docs" }
    ]
  },
  {
    id: "tech-011",
    name: "MongoDB",
    category: "Database",
    logo: "/tech-logos/mongodb.svg",
    description: "NoSQL document database",
    website: "https://mongodb.com",
    usedInProjects: ["project-002", "project-006"],
    proficiencyLevel: "Intermediate",
    learningResources: [
      { title: "Official Docs", link: "https://docs.mongodb.com" }
    ]
  },
  {
    id: "tech-012",
    name: "Redis",
    category: "Database",
    logo: "/tech-logos/redis.svg",
    description: "In-memory data structure store",
    website: "https://redis.io",
    usedInProjects: ["project-004"],
    proficiencyLevel: "Intermediate",
    learningResources: [
      { title: "Official Docs", link: "https://redis.io/docs" }
    ]
  },
  
  // DevOps Technologies
  {
    id: "tech-013",
    name: "Docker",
    category: "DevOps",
    logo: "/tech-logos/docker.svg",
    description: "Platform cho containerization",
    website: "https://docker.com",
    usedInProjects: ["project-001", "project-005"],
    proficiencyLevel: "Advanced",
    learningResources: [
      { title: "Official Docs", link: "https://docs.docker.com" }
    ]
  },
  {
    id: "tech-014",
    name: "Kubernetes",
    category: "DevOps",
    logo: "/tech-logos/kubernetes.svg",
    description: "Container orchestration platform",
    website: "https://kubernetes.io",
    usedInProjects: ["project-005"],
    proficiencyLevel: "Intermediate",
    learningResources: [
      { title: "Official Docs", link: "https://kubernetes.io/docs" }
    ]
  },
  {
    id: "tech-015",
    name: "Git",
    category: "DevOps",
    logo: "/tech-logos/git.svg",
    description: "Distributed version control system",
    website: "https://git-scm.com",
    usedInProjects: ["project-001", "project-002", "project-003", "project-004", "project-005", "project-006"],
    proficiencyLevel: "Advanced",
    learningResources: [
      { title: "Official Docs", link: "https://git-scm.com/doc" }
    ]
  },
  
  // Hardware/IoT Technologies
  {
    id: "tech-016",
    name: "Arduino",
    category: "Hardware",
    logo: "/tech-logos/arduino.svg",
    description: "Open-source electronics platform",
    website: "https://arduino.cc",
    usedInProjects: ["project-002"],
    proficiencyLevel: "Intermediate",
    learningResources: [
      { title: "Official Docs", link: "https://docs.arduino.cc" }
    ]
  },
  {
    id: "tech-017",
    name: "Raspberry Pi",
    category: "Hardware",
    logo: "/tech-logos/raspberry-pi.svg",
    description: "Single-board computer cho IoT projects",
    website: "https://raspberrypi.org",
    usedInProjects: ["project-002"],
    proficiencyLevel: "Intermediate",
    learningResources: [
      { title: "Official Docs", link: "https://raspberrypi.org/documentation" }
    ]
  },
  {
    id: "tech-018",
    name: "MQTT",
    category: "Hardware",
    logo: "/tech-logos/mqtt.svg",
    description: "Lightweight messaging protocol cho IoT",
    website: "https://mqtt.org",
    usedInProjects: ["project-002"],
    proficiencyLevel: "Intermediate",
    learningResources: [
      { title: "Official Docs", link: "https://mqtt.org/documentation" }
    ]
  }
];

// Technology categories
export const techCategories = [
  "Frontend",
  "Backend",
  "AI/ML",
  "Database",
  "DevOps",
  "Hardware"
];

// Proficiency levels
export const proficiencyLevels = {
  Beginner: "Cơ bản",
  Intermediate: "Trung bình",
  Advanced: "Nâng cao"
};

// Get technologies by category
export const getTechByCategory = (category) => {
  return techStack.filter(tech => tech.category === category);
};

// Get technology by ID
export const getTechById = (id) => {
  return techStack.find(tech => tech.id === id);
};

// Get technologies used in a project
export const getTechByProject = (projectId) => {
  return techStack.filter(tech => 
    tech.usedInProjects.includes(projectId)
  );
};

// Get most used technologies (top N)
export const getMostUsedTech = (count = 5) => {
  return techStack
    .sort((a, b) => b.usedInProjects.length - a.usedInProjects.length)
    .slice(0, count);
};
