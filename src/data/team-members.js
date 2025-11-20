// Team Members Data - VMU Student Research Lab
// Dữ liệu thành viên phòng lab

export const teamMembers = [
  {
    id: "member-001",
    name: "TS. Nguyễn Văn Hải",
    slug: "nguyen-van-hai",
    role: "Lab Director",
    photo: "/team/director.jpg",
    email: "nvhai@vmu.edu.vn",
    phone: "+84 xxx xxx xxx",
    major: "Công Nghệ Thông Tin",
    researchInterests: [
      "Artificial Intelligence",
      "Machine Learning",
      "Maritime Technology"
    ],
    bio: "Tiến sĩ Công nghệ Thông tin, chuyên gia về AI và Machine Learning trong lĩnh vực hàng hải. Hơn 15 năm kinh nghiệm nghiên cứu và giảng dạy.",
    skills: ["Python", "TensorFlow", "Research Management"],
    projects: ["project-001", "project-003"],
    publications: ["pub-001", "pub-003"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/nguyenvanhai",
      researchgate: "https://researchgate.net/profile/nguyen-van-hai"
    },
    achievements: [
      "Giải thưởng Nhà khoa học trẻ VMU 2023",
      "10+ bài báo quốc tế"
    ],
    joinDate: "2020-09-01"
  },
  {
    id: "member-002",
    name: "ThS. Trần Thị Lan",
    slug: "tran-thi-lan",
    role: "Faculty Advisor",
    photo: "/team/advisor-1.jpg",
    email: "ttlan@vmu.edu.vn",
    phone: "+84 xxx xxx xxx",
    major: "Hệ Thống Thông Tin",
    researchInterests: [
      "IoT",
      "Smart Systems",
      "Web Development"
    ],
    bio: "Thạc sĩ Hệ thống Thông tin, chuyên về IoT và Smart Systems. Hướng dẫn nhiều dự án nghiên cứu sinh viên thành công.",
    skills: ["Node.js", "IoT", "System Design"],
    projects: ["project-002", "project-004"],
    publications: ["pub-002"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/tranthilan",
      github: "https://github.com/tranthilan"
    },
    achievements: [
      "Giảng viên xuất sắc VMU 2023",
      "5+ dự án sinh viên đạt giải"
    ],
    joinDate: "2021-03-01"
  },
  {
    id: "member-003",
    name: "Nguyễn Văn A",
    slug: "nguyen-van-a",
    role: "Student Researcher",
    photo: "/team/student-1.jpg",
    email: "nguyenvana@student.vmu.edu.vn",
    studentId: "2021XXXX",
    major: "Công Nghệ Thông Tin",
    graduationYear: 2025,
    researchInterests: [
      "Machine Learning",
      "Computer Vision",
      "Maritime AI"
    ],
    bio: "Sinh viên năm 4 ngành CNTT, đam mê nghiên cứu về AI và ứng dụng vào lĩnh vực hàng hải. Thành viên tích cực của lab từ năm 2023.",
    skills: ["Python", "TensorFlow", "React", "Docker"],
    projects: ["project-001"],
    publications: ["pub-001"],
    socialLinks: {
      github: "https://github.com/nguyenvana",
      linkedin: "https://linkedin.com/in/nguyenvana"
    },
    achievements: [
      "Giải Nhất Cuộc thi AI Challenge 2024",
      "Học bổng Nghiên cứu Khoa học 2023-2024"
    ],
    joinDate: "2023-09-01"
  },
  {
    id: "member-004",
    name: "Trần Thị B",
    slug: "tran-thi-b",
    role: "Student Researcher",
    photo: "/team/student-2.jpg",
    email: "tranthib@student.vmu.edu.vn",
    studentId: "2021YYYY",
    major: "Công Nghệ Thông Tin",
    graduationYear: 2025,
    researchInterests: [
      "Data Science",
      "Machine Learning",
      "Optimization"
    ],
    bio: "Sinh viên năm 4, chuyên về Data Science và tối ưu hóa. Đam mê phân tích dữ liệu và xây dựng mô hình ML.",
    skills: ["Python", "Pandas", "Scikit-learn", "SQL"],
    projects: ["project-001"],
    publications: ["pub-001"],
    socialLinks: {
      github: "https://github.com/tranthib",
      linkedin: "https://linkedin.com/in/tranthib"
    },
    achievements: [
      "Top 10 Data Science Competition 2024"
    ],
    joinDate: "2023-09-01"
  },
  {
    id: "member-005",
    name: "Lê Văn C",
    slug: "le-van-c",
    role: "Student Researcher",
    photo: "/team/student-3.jpg",
    email: "levanc@student.vmu.edu.vn",
    studentId: "2020ZZZZ",
    major: "Hệ Thống Thông Tin",
    graduationYear: 2024,
    researchInterests: [
      "IoT",
      "Embedded Systems",
      "Smart Cities"
    ],
    bio: "Sinh viên năm cuối, chuyên về IoT và Embedded Systems. Leader của dự án Smart Port Management.",
    skills: ["Arduino", "Node.js", "MQTT", "React"],
    projects: ["project-002"],
    publications: ["pub-002"],
    socialLinks: {
      github: "https://github.com/levanc",
      linkedin: "https://linkedin.com/in/levanc"
    },
    achievements: [
      "Giải Nhất Cuộc thi KHKT VMU 2024",
      "Best IoT Project Award 2024"
    ],
    joinDate: "2022-09-01"
  },
  {
    id: "member-006",
    name: "Phạm Thị D",
    slug: "pham-thi-d",
    role: "Student Researcher",
    photo: "/team/student-4.jpg",
    email: "phamthid@student.vmu.edu.vn",
    studentId: "2021AAAA",
    major: "Công Nghệ Thông Tin",
    graduationYear: 2025,
    researchInterests: [
      "Web Development",
      "UI/UX Design",
      "Frontend"
    ],
    bio: "Sinh viên năm 4, đam mê thiết kế và phát triển web. Chuyên về Frontend và UI/UX.",
    skills: ["React", "Next.js", "Tailwind CSS", "Figma"],
    projects: ["project-002", "project-004"],
    publications: [],
    socialLinks: {
      github: "https://github.com/phamthid",
      portfolio: "https://phamthid.dev"
    },
    achievements: [
      "Best UI/UX Design Award 2023"
    ],
    joinDate: "2023-03-01"
  },
  {
    id: "member-007",
    name: "Hoàng Văn E",
    slug: "hoang-van-e",
    role: "Research Member",
    photo: "/team/member-5.jpg",
    email: "hoangvane@student.vmu.edu.vn",
    studentId: "2022BBBB",
    major: "Công Nghệ Thông Tin",
    graduationYear: 2026,
    researchInterests: [
      "Blockchain",
      "Distributed Systems",
      "Security"
    ],
    bio: "Sinh viên năm 3, đam mê công nghệ Blockchain và bảo mật. Tham gia nhiều dự án về smart contracts.",
    skills: ["Solidity", "Web3.js", "Node.js", "Security"],
    projects: ["project-003"],
    publications: [],
    socialLinks: {
      github: "https://github.com/hoangvane",
      linkedin: "https://linkedin.com/in/hoangvane"
    },
    achievements: [
      "Hackathon Blockchain Winner 2024"
    ],
    joinDate: "2023-09-01"
  },
  {
    id: "member-008",
    name: "Ngô Thị F",
    slug: "ngo-thi-f",
    role: "Research Member",
    photo: "/team/member-6.jpg",
    email: "ngothif@student.vmu.edu.vn",
    studentId: "2022CCCC",
    major: "Hệ Thống Thông Tin",
    graduationYear: 2026,
    researchInterests: [
      "Mobile Development",
      "Flutter",
      "Cross-platform"
    ],
    bio: "Sinh viên năm 3, chuyên về phát triển ứng dụng di động. Đam mê tạo ra các ứng dụng có trải nghiệm người dùng tốt.",
    skills: ["Flutter", "Dart", "Firebase", "UI/UX"],
    projects: ["project-004"],
    publications: [],
    socialLinks: {
      github: "https://github.com/ngothif",
      portfolio: "https://ngothif.dev"
    },
    achievements: [
      "Best Mobile App Award 2024"
    ],
    joinDate: "2023-09-01"
  },
  {
    id: "member-009",
    name: "Đặng Văn G",
    slug: "dang-van-g",
    role: "Research Member",
    photo: "/team/member-7.jpg",
    email: "dangvang@student.vmu.edu.vn",
    studentId: "2021DDDD",
    major: "Công Nghệ Thông Tin",
    graduationYear: 2025,
    researchInterests: [
      "DevOps",
      "Cloud Computing",
      "CI/CD"
    ],
    bio: "Sinh viên năm 4, chuyên về DevOps và Cloud. Đam mê tự động hóa và tối ưu quy trình phát triển.",
    skills: ["Docker", "Kubernetes", "AWS", "Jenkins"],
    projects: ["project-002"],
    publications: [],
    socialLinks: {
      github: "https://github.com/dangvang",
      linkedin: "https://linkedin.com/in/dangvang"
    },
    achievements: [
      "AWS Certified Solutions Architect"
    ],
    joinDate: "2022-09-01"
  },
  {
    id: "member-010",
    name: "Vũ Thị H",
    slug: "vu-thi-h",
    role: "Research Member",
    photo: "/team/member-8.jpg",
    email: "vuthih@student.vmu.edu.vn",
    studentId: "2022EEEE",
    major: "Công Nghệ Thông Tin",
    graduationYear: 2026,
    researchInterests: [
      "Natural Language Processing",
      "Chatbots",
      "AI"
    ],
    bio: "Sinh viên năm 3, đam mê xử lý ngôn ngữ tự nhiên. Nghiên cứu về chatbot và AI conversation.",
    skills: ["Python", "NLP", "TensorFlow", "Transformers"],
    projects: ["project-001"],
    publications: [],
    socialLinks: {
      github: "https://github.com/vuthih",
      linkedin: "https://linkedin.com/in/vuthih"
    },
    achievements: [
      "NLP Competition Runner-up 2024"
    ],
    joinDate: "2023-09-01"
  },
  {
    id: "member-011",
    name: "Bùi Văn I",
    slug: "bui-van-i",
    role: "Research Member",
    photo: "/team/member-9.jpg",
    email: "buivani@student.vmu.edu.vn",
    studentId: "2021FFFF",
    major: "Hệ Thống Thông Tin",
    graduationYear: 2025,
    researchInterests: [
      "Big Data",
      "Data Engineering",
      "Analytics"
    ],
    bio: "Sinh viên năm 4, chuyên về Big Data và Data Engineering. Đam mê xây dựng data pipeline.",
    skills: ["Spark", "Hadoop", "Python", "SQL"],
    projects: ["project-003"],
    publications: [],
    socialLinks: {
      github: "https://github.com/buivani",
      linkedin: "https://linkedin.com/in/buivani"
    },
    achievements: [
      "Data Engineering Certification"
    ],
    joinDate: "2022-09-01"
  },
  {
    id: "member-012",
    name: "Lý Thị K",
    slug: "ly-thi-k",
    role: "Research Member",
    photo: "/team/member-10.jpg",
    email: "lythik@student.vmu.edu.vn",
    studentId: "2022GGGG",
    major: "Công Nghệ Thông Tin",
    graduationYear: 2026,
    researchInterests: [
      "Game Development",
      "Unity",
      "VR/AR"
    ],
    bio: "Sinh viên năm 3, đam mê phát triển game và công nghệ VR/AR. Tham gia nhiều dự án game indie.",
    skills: ["Unity", "C#", "Blender", "VR"],
    projects: ["project-004"],
    publications: [],
    socialLinks: {
      github: "https://github.com/lythik",
      portfolio: "https://lythik.itch.io"
    },
    achievements: [
      "Indie Game Showcase 2024"
    ],
    joinDate: "2023-09-01"
  }
];

// Member roles
export const memberRoles = {
  "Lab Director": "Giám đốc Lab",
  "Faculty Advisor": "Giảng viên Hướng dẫn",
  "Student Researcher": "Thành viên Nghiên cứu",
  "Research Member": "Thành viên Nghiên cứu",
  "Alumni": "Cựu thành viên"
};

// Get members by role
export const getMembersByRole = (role) => {
  return teamMembers.filter(member => member.role === role);
};

// Get member by slug
export const getMemberBySlug = (slug) => {
  return teamMembers.find(member => member.slug === slug);
};

// Get members by research interest
export const getMembersByInterest = (interest) => {
  return teamMembers.filter(member => 
    member.researchInterests.some(i => 
      i.toLowerCase().includes(interest.toLowerCase())
    )
  );
};
