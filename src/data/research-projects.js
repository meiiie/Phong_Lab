// Research Projects Data - VMU Student Research Lab
// Dữ liệu các dự án nghiên cứu của sinh viên

export const researchProjects = [
  {
    id: "project-001",
    title: "Hệ Thống Tối Ưu Hóa Tuyến Đường Hàng Hải Bằng AI",
    slug: "ai-maritime-route-optimization",
    description: "Phát triển thuật toán machine learning để tối ưu hóa tuyến đường vận chuyển hàng hải, giảm tiêu thụ nhiên liệu và thời gian giao hàng.",
    thumbnail: "/research/maritime-ai-thumb.jpg",
    images: [
      "/research/maritime-ai-1.jpg",
      "/research/maritime-ai-2.jpg"
    ],
    researchArea: "AI/ML",
    status: "ongoing",
    startDate: "2024-01-15",
    endDate: null,
    techStack: ["Python", "TensorFlow", "Docker", "PostgreSQL", "React"],
    teamMembers: ["Nguyễn Văn A", "Trần Thị B"],
    objectives: [
      "Giảm 15% tiêu thụ nhiên liệu",
      "Tối ưu thời gian giao hàng",
      "Dự đoán thời tiết và điều kiện biển"
    ],
    methodology: "Deep reinforcement learning với dữ liệu thời gian thực từ AIS và dự báo thời tiết",
    outcomes: [
      "Giảm 12% chi phí nhiên liệu trong thử nghiệm",
      "Bài báo được chấp nhận tại IEEE Maritime Conference 2024"
    ],
    publications: ["pub-001"],
    githubRepo: "https://github.com/vmu-lab/maritime-ai",
    demoLink: null
  },
  {
    id: "project-002",
    title: "Ứng Dụng Quản Lý Cảng Biển Thông Minh",
    slug: "smart-port-management",
    description: "Xây dựng hệ thống IoT và web application để quản lý hoạt động cảng biển, theo dõi container và tối ưu logistics.",
    thumbnail: "/research/smart-port-thumb.jpg",
    images: [
      "/research/smart-port-1.jpg",
      "/research/smart-port-2.jpg"
    ],
    researchArea: "IoT",
    status: "completed",
    startDate: "2023-09-01",
    endDate: "2024-06-30",
    techStack: ["Node.js", "MongoDB", "React", "Arduino", "MQTT"],
    teamMembers: ["Lê Văn C", "Phạm Thị D", "Hoàng Văn E"],
    objectives: [
      "Tự động hóa tracking container",
      "Giảm thời gian xử lý hàng hóa",
      "Cảnh báo sớm sự cố"
    ],
    methodology: "Kết hợp IoT sensors, RFID tracking và real-time dashboard",
    outcomes: [
      "Giảm 30% thời gian tìm kiếm container",
      "Triển khai thử nghiệm tại Cảng Hải Phòng",
      "Giải Nhất Cuộc thi Khoa học Kỹ thuật VMU 2024"
    ],
    publications: ["pub-002"],
    githubRepo: "https://github.com/vmu-lab/smart-port",
    demoLink: "https://demo.vmu-lab.com/smart-port"
  },
  {
    id: "project-003",
    title: "Hệ Thống Cảnh Báo Sóng Thần Dựa Trên Deep Learning",
    slug: "tsunami-warning-system",
    description: "Nghiên cứu và phát triển mô hình deep learning để dự đoán và cảnh báo sớm sóng thần dựa trên dữ liệu địa chấn và hải dương học.",
    thumbnail: "/research/tsunami-warning-thumb.jpg",
    images: [
      "/research/tsunami-warning-1.jpg"
    ],
    researchArea: "AI/ML",
    status: "ongoing",
    startDate: "2024-03-01",
    endDate: null,
    techStack: ["Python", "PyTorch", "FastAPI", "PostgreSQL", "Vue.js"],
    teamMembers: ["Đỗ Văn F", "Ngô Thị G"],
    objectives: [
      "Dự đoán sóng thần với độ chính xác >90%",
      "Cảnh báo sớm trước 15-30 phút",
      "Tích hợp với hệ thống cảnh báo quốc gia"
    ],
    methodology: "LSTM và CNN kết hợp với dữ liệu lịch sử và real-time seismic data",
    outcomes: [
      "Đạt 87% độ chính xác trong thử nghiệm",
      "Đang trong quá trình nghiên cứu và cải tiến"
    ],
    publications: [],
    githubRepo: "https://github.com/vmu-lab/tsunami-warning",
    demoLink: null
  },
  {
    id: "project-004",
    title: "Platform E-Learning Cho Đào Tạo Hàng Hải",
    slug: "maritime-elearning-platform",
    description: "Xây dựng nền tảng học trực tuyến chuyên biệt cho ngành hàng hải với VR/AR simulation và gamification.",
    thumbnail: "/research/elearning-thumb.jpg",
    images: [
      "/research/elearning-1.jpg",
      "/research/elearning-2.jpg",
      "/research/elearning-3.jpg"
    ],
    researchArea: "Web Development",
    status: "ongoing",
    startDate: "2023-11-01",
    endDate: null,
    techStack: ["Next.js", "Three.js", "WebXR", "PostgreSQL", "Redis"],
    teamMembers: ["Vũ Văn H", "Bùi Thị I", "Trương Văn K"],
    objectives: [
      "Tạo môi trường học tập tương tác",
      "Simulation thực tế với VR/AR",
      "Gamification để tăng engagement"
    ],
    methodology: "Progressive Web App với WebXR API và 3D simulation",
    outcomes: [
      "500+ sinh viên đăng ký sử dụng",
      "Tích hợp 20+ bài học simulation",
      "Đang mở rộng thêm tính năng"
    ],
    publications: [],
    githubRepo: "https://github.com/vmu-lab/maritime-elearning",
    demoLink: "https://demo.vmu-lab.com/elearning"
  },
  {
    id: "project-005",
    title: "Hệ Thống Bảo Mật Mạng Cho Tàu Thông Minh",
    slug: "ship-cybersecurity",
    description: "Nghiên cứu và triển khai giải pháp bảo mật mạng cho hệ thống điều khiển tàu thông minh, phòng chống tấn công mạng.",
    thumbnail: "/research/cybersecurity-thumb.jpg",
    images: [
      "/research/cybersecurity-1.jpg"
    ],
    researchArea: "Cybersecurity",
    status: "completed",
    startDate: "2023-06-01",
    endDate: "2024-05-31",
    techStack: ["Python", "Wireshark", "Snort", "Docker", "Kubernetes"],
    teamMembers: ["Phan Văn L", "Đinh Thị M"],
    objectives: [
      "Phát hiện và ngăn chặn tấn công mạng",
      "Mã hóa truyền thông giữa các hệ thống",
      "Audit và monitoring real-time"
    ],
    methodology: "Intrusion Detection System (IDS) kết hợp với AI anomaly detection",
    outcomes: [
      "Phát hiện 95% các cuộc tấn công trong thử nghiệm",
      "Bài báo xuất sắc tại Hội nghị An ninh mạng Việt Nam 2024",
      "Đang được xem xét triển khai thực tế"
    ],
    publications: ["pub-003"],
    githubRepo: "https://github.com/vmu-lab/ship-cybersecurity",
    demoLink: null
  },
  {
    id: "project-006",
    title: "Ứng Dụng Mobile Hỗ Trợ Ngư Dân",
    slug: "fisherman-support-app",
    description: "Phát triển ứng dụng mobile giúp ngư dân tra cứu thông tin thời tiết, giá cá, và kết nối với thị trường.",
    thumbnail: "/research/fisherman-app-thumb.jpg",
    images: [
      "/research/fisherman-app-1.jpg",
      "/research/fisherman-app-2.jpg"
    ],
    researchArea: "Web Development",
    status: "completed",
    startDate: "2023-03-01",
    endDate: "2023-12-31",
    techStack: ["React Native", "Firebase", "Node.js", "MongoDB"],
    teamMembers: ["Lý Văn N", "Mai Thị O"],
    objectives: [
      "Cung cấp thông tin thời tiết real-time",
      "Kết nối ngư dân với thị trường",
      "Hỗ trợ quản lý chuyến đánh bắt"
    ],
    methodology: "Mobile-first design với offline-first architecture",
    outcomes: [
      "2000+ lượt tải xuống",
      "Được Sở Nông nghiệp Hải Phòng quan tâm",
      "Giải Ba Cuộc thi Ứng dụng Phục vụ Cộng đồng 2023"
    ],
    publications: [],
    githubRepo: "https://github.com/vmu-lab/fisherman-app",
    demoLink: "https://demo.vmu-lab.com/fisherman-app"
  }
];

// Research areas for filtering
export const researchAreas = [
  "AI/ML",
  "Web Development",
  "IoT",
  "Cybersecurity",
  "Data Science"
];

// Project statuses
export const projectStatuses = {
  ongoing: "Đang thực hiện",
  completed: "Hoàn thành",
  planning: "Đang lên kế hoạch"
};

// Get projects by research area
export const getProjectsByArea = (area) => {
  return researchProjects.filter(project => project.researchArea === area);
};

// Get projects by status
export const getProjectsByStatus = (status) => {
  return researchProjects.filter(project => project.status === status);
};

// Get project by slug
export const getProjectBySlug = (slug) => {
  return researchProjects.find(project => project.slug === slug);
};

// Get recent projects (last 3)
export const getRecentProjects = (count = 3) => {
  return researchProjects
    .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
    .slice(0, count);
};
