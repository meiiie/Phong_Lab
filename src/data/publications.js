// Publications Data - VMU Student Research Lab
// Dữ liệu các công trình nghiên cứu đã công bố

export const publications = [
  {
    id: "pub-001",
    title: "Deep Learning Approaches for Maritime Route Optimization: A Case Study in Vietnamese Waters",
    titleVi: "Các Phương Pháp Deep Learning cho Tối Ưu Hóa Tuyến Đường Hàng Hải: Nghiên Cứu Trường Hợp tại Vùng Biển Việt Nam",
    authors: ["Nguyễn Văn A", "Trần Thị B", "TS. Nguyễn Văn Hải"],
    venue: "IEEE International Conference on Maritime Technology",
    venueShort: "IEEE ICMT 2024",
    year: 2024,
    type: "conference",
    abstract: "This paper presents a novel deep reinforcement learning approach for optimizing maritime shipping routes in Vietnamese waters. Our method combines real-time AIS data with weather forecasting to reduce fuel consumption by up to 15% while maintaining delivery schedules.",
    abstractVi: "Bài báo này trình bày một phương pháp deep reinforcement learning mới để tối ưu hóa tuyến đường vận chuyển hàng hải tại vùng biển Việt Nam. Phương pháp của chúng tôi kết hợp dữ liệu AIS thời gian thực với dự báo thời tiết để giảm tiêu thụ nhiên liệu lên đến 15% trong khi vẫn duy trì lịch trình giao hàng.",
    keywords: ["Deep Learning", "Route Optimization", "Maritime", "Reinforcement Learning"],
    doi: "10.1109/ICMT.2024.12345",
    pdfLink: "/publications/pub-001.pdf",
    externalLink: "https://ieeexplore.ieee.org/document/12345",
    citationCount: 5,
    relatedProjects: ["project-001"]
  },
  {
    id: "pub-002",
    title: "IoT-Based Smart Port Management System: Implementation and Evaluation",
    titleVi: "Hệ Thống Quản Lý Cảng Biển Thông Minh Dựa Trên IoT: Triển Khai và Đánh Giá",
    authors: ["Lê Văn C", "Phạm Thị D", "ThS. Trần Thị Lan"],
    venue: "Vietnam Journal of Computer Science",
    venueShort: "VJCS",
    year: 2024,
    type: "journal",
    abstract: "We present a comprehensive IoT-based system for smart port management that integrates RFID tracking, real-time monitoring, and predictive analytics. Field trials at Hai Phong Port demonstrated a 30% reduction in container search time and improved operational efficiency.",
    abstractVi: "Chúng tôi trình bày một hệ thống toàn diện dựa trên IoT cho quản lý cảng biển thông minh, tích hợp tracking RFID, giám sát thời gian thực và phân tích dự đoán. Thử nghiệm thực địa tại Cảng Hải Phòng cho thấy giảm 30% thời gian tìm kiếm container và cải thiện hiệu quả vận hành.",
    keywords: ["IoT", "Smart Port", "RFID", "Port Management"],
    doi: "10.1007/s40595-024-0123",
    pdfLink: "/publications/pub-002.pdf",
    externalLink: "https://link.springer.com/article/10.1007/s40595-024-0123",
    citationCount: 3,
    relatedProjects: ["project-002"]
  },
  {
    id: "pub-003",
    title: "Cybersecurity Framework for Smart Ship Systems: Threats and Countermeasures",
    titleVi: "Khung Bảo Mật Mạng cho Hệ Thống Tàu Thông Minh: Các Mối Đe Dọa và Biện Pháp Đối Phó",
    authors: ["Phan Văn L", "Đinh Thị M", "TS. Nguyễn Văn Hải"],
    venue: "Hội nghị An ninh mạng Việt Nam",
    venueShort: "VNCS 2024",
    year: 2024,
    type: "conference",
    abstract: "This paper analyzes cybersecurity threats facing modern smart ship systems and proposes a comprehensive security framework combining intrusion detection, encryption, and AI-based anomaly detection. Our system achieved 95% detection rate in simulated attack scenarios.",
    abstractVi: "Bài báo này phân tích các mối đe dọa an ninh mạng đối với hệ thống tàu thông minh hiện đại và đề xuất một khung bảo mật toàn diện kết hợp phát hiện xâm nhập, mã hóa và phát hiện bất thường dựa trên AI. Hệ thống của chúng tôi đạt tỷ lệ phát hiện 95% trong các kịch bản tấn công mô phỏng.",
    keywords: ["Cybersecurity", "Smart Ships", "Intrusion Detection", "Maritime Security"],
    doi: null,
    pdfLink: "/publications/pub-003.pdf",
    externalLink: null,
    citationCount: 1,
    relatedProjects: ["project-005"]
  }
];

// Publication types
export const publicationTypes = {
  conference: "Hội nghị",
  journal: "Tạp chí",
  workshop: "Workshop",
  thesis: "Luận văn"
};

// Get publications by year
export const getPublicationsByYear = (year) => {
  return publications.filter(pub => pub.year === year);
};

// Get publications by type
export const getPublicationsByType = (type) => {
  return publications.filter(pub => pub.type === type);
};

// Get publication by ID
export const getPublicationById = (id) => {
  return publications.find(pub => pub.id === id);
};

// Get recent publications
export const getRecentPublications = (count = 3) => {
  return publications
    .sort((a, b) => b.year - a.year)
    .slice(0, count);
};

// Format citation (APA style)
export const formatCitationAPA = (pub) => {
  const authors = pub.authors.join(", ");
  return `${authors} (${pub.year}). ${pub.title}. ${pub.venue}.${pub.doi ? ` https://doi.org/${pub.doi}` : ''}`;
};

// Format citation (IEEE style)
export const formatCitationIEEE = (pub) => {
  const authors = pub.authors.map((author, index) => {
    if (index === pub.authors.length - 1 && pub.authors.length > 1) {
      return `and ${author}`;
    }
    return author;
  }).join(", ");
  return `${authors}, "${pub.title}," ${pub.venueShort}, ${pub.year}.${pub.doi ? ` doi: ${pub.doi}` : ''}`;
};

// Format citation (BibTeX)
export const formatCitationBibTeX = (pub) => {
  const key = `${pub.authors[0].split(' ').pop().toLowerCase()}${pub.year}`;
  return `@${pub.type}{${key},
  title={${pub.title}},
  author={${pub.authors.join(" and ")}},
  ${pub.type === 'journal' ? 'journal' : 'booktitle'}={${pub.venue}},
  year={${pub.year}}${pub.doi ? `,\n  doi={${pub.doi}}` : ''}
}`;
};
