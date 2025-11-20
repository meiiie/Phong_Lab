# 🔬 VMU Student Research Lab

**Lab Nghiên Cứu Khoa Học Sinh Viên - Trường Đại học Hàng hải Việt Nam**

Website chính thức của Lab Nghiên Cứu Khoa Học Sinh Viên VMU - nơi sinh viên CNTT thực hiện nghiên cứu, phát triển dự án, và đổi mới sáng tạo.

![VMU Research Lab](public/images/lab-hero.png)

---

## 📋 Giới Thiệu

VMU Student Research Lab là phòng lab nghiên cứu khoa học dành cho sinh viên Công Nghệ Thông Tin tại Trường Đại học Hàng hải Việt Nam. Lab được thành lập nhằm:

- 🎯 Tạo môi trường nghiên cứu chuyên nghiệp cho sinh viên
- 💡 Khuyến khích đổi mới sáng tạo và phát triển công nghệ
- 🤝 Kết nối sinh viên với các dự án thực tế
- 📚 Nâng cao kỹ năng nghiên cứu khoa học
- 🌐 Xây dựng cộng đồng CNTT VMU

---

## ✨ Tính Năng Website

### 🏠 Landing Page
- **Neo-futuristic Hero**: Particle effects với thiết kế hiện đại
- **Research Projects**: Showcase các dự án nghiên cứu đang thực hiện
- **Team Members**: Giới thiệu đội ngũ nghiên cứu viên
- **Tech Stack**: Công nghệ và công cụ sử dụng trong lab
- **Publications**: Bài báo và công trình khoa học

### 📱 Responsive Design
- Tối ưu cho mọi thiết bị (Desktop, Tablet, Mobile)
- Google-inspired minimal design
- Maritime + Tech color scheme

### 🎨 Animations
- GSAP-powered smooth animations
- Particle canvas effects
- Scroll-triggered animations
- Smooth page transitions

---

## 🛠 Tech Stack

### Frontend Framework
- **Next.js 15.4.6** - React framework với App Router
- **React 19.1.0** - UI library
- **CSS Modules** - Component-scoped styling

### Animation & Effects
- **GSAP 3.13.0** - Professional animation library
- **Lenis 1.3.8** - Smooth scrolling
- **Split Type 0.3.4** - Text animation effects

### UI Components
- **Heroicons 2.2.0** - Icon library
- **React Icons 5.5.0** - Additional icons

### Performance
- **Critters 0.0.20** - Critical CSS inlining
- **Next View Transitions 0.3.4** - Smooth page transitions

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x hoặc cao hơn
- npm hoặc pnpm

### Installation

```bash
# Clone repository
git clone https://github.com/vmu-research-lab/website.git
cd website

# Install dependencies
npm install

# Run development server
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem website.

---

## 📁 Project Structure

```
vmu-research-lab/
├── docs/                    # Documentation
├── public/                  # Static assets
│   └── images/             # Images
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── page.js        # Landing page
│   │   ├── globals.css    # Global styles
│   │   └── lab-theme.css  # Lab theme
│   ├── components/         # React components
│   │   ├── Nav/           # Navigation
│   │   └── lab/           # Lab-specific components
│   │       ├── HeroLab/
│   │       ├── ProjectCard/
│   │       ├── TeamMemberCard/
│   │       └── ...
│   └── data/              # Data files
│       ├── research-projects.js
│       ├── team-members.js
│       └── tech-stack.js
├── package.json
└── README.md
```

---

## 🎨 Design System

### Color Palette

```css
/* Primary Colors - Maritime + Tech */
--primary-blue: #0074D9;      /* VMU Blue */
--primary-dark: #003B73;      /* Deep Ocean */
--primary-teal: #00A896;      /* Tech Accent */

/* Google-Style Grays */
--gray-900: #202124;          /* Headings */
--gray-700: #5f6368;          /* Body text */
--gray-300: #e8eaed;          /* Borders */
--gray-100: #f8f9fa;          /* Backgrounds */
```

### Typography

```css
/* Headings - Clean & Modern */
h2 {
  font-family: 'Be Vietnam Pro', 'Inter', sans-serif;
  font-size: 2.5rem;
  font-weight: 400;
  color: #202124;
  letter-spacing: -0.01em;
}

/* Body Text */
p {
  font-size: 1.125rem;
  line-height: 1.6;
  color: #5f6368;
}
```

### Spacing

```css
/* Sections */
section {
  padding: 120px 0;
}

/* Container */
.container {
  max-width: 1200px;
  padding: 0 24px;
}
```

---

## 📝 Content Management

### Adding Research Projects

Edit `src/data/research-projects.js`:

```javascript
export const researchProjects = [
  {
    id: 1,
    title: "Project Title",
    description: "Brief description",
    area: "AI & Machine Learning",
    status: "ongoing", // or "completed"
    techStack: ["Python", "TensorFlow"],
    teamSize: 3,
    startDate: "2024-01",
    image: "/images/projects/project-1.jpg"
  },
  // Add more projects...
];
```

### Adding Team Members

Edit `src/data/team-members.js`:

```javascript
export const teamMembers = [
  {
    id: 1,
    name: "Member Name",
    role: "Team Lead", // or "Researcher", "Developer"
    major: "Computer Science",
    year: 3,
    interests: ["AI", "Web Development"],
    projects: 2,
    publications: 1,
    photo: "/images/team/member-1.jpg",
    social: {
      github: "https://github.com/username",
      linkedin: "https://linkedin.com/in/username",
      email: "email@vmu.edu.vn"
    }
  },
  // Add more members...
];
```

### Adding Technologies

Edit `src/data/tech-stack.js`:

```javascript
export const techStack = {
  "Frontend": [
    {
      name: "React",
      icon: "⚛️",
      color: "#61DAFB",
      description: "UI Library"
    },
    // Add more...
  ],
  // More categories...
};
```

---

## 🔧 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

### Component Guidelines

#### Creating New Components

```javascript
'use client';

import React from 'react';
import './ComponentName.css';

const ComponentName = ({ prop1, prop2 }) => {
  return (
    <div className="component-name">
      {/* Component content */}
    </div>
  );
};

export default ComponentName;
```

#### Styling Guidelines

```css
/* Component styles */
.component-name {
  /* Layout */
  display: flex;
  
  /* Box Model */
  padding: 24px;
  
  /* Visual */
  background: #ffffff;
  border: 1px solid #e8eaed;
  border-radius: 8px;
  
  /* Animation */
  transition: all 0.2s ease;
}

.component-name:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}
```

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production
vercel --prod
```

### Manual Deployment

```bash
# Build
npm run build

# The output will be in .next/ folder
# Deploy this folder to your hosting service
```

---

## 📚 Documentation

Xem thêm documentation chi tiết trong folder `docs/`:

- **[CONTRIBUTING.md](docs/CONTRIBUTING.md)** - Hướng dẫn đóng góp
- **[SETUP.md](docs/SETUP.md)** - Hướng dẫn cài đặt chi tiết
- **[PROJECT-STRUCTURE.md](docs/PROJECT-STRUCTURE.md)** - Cấu trúc dự án

---

## 🤝 Contributing

Chúng tôi hoan nghênh mọi đóng góp! Xem [CONTRIBUTING.md](docs/CONTRIBUTING.md) để biết thêm chi tiết.

### Quick Contribution Guide

1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## 📞 Contact

### VMU Student Research Lab

- **Website**: https://lab.vmu.edu.vn
- **Email**: research.lab@vmu.edu.vn
- **Location**: Trường Đại học Hàng hải Việt Nam, Hải Phòng

### Social Media

- **Facebook**: [VMU Research Lab](https://facebook.com/vmu.research.lab)
- **GitHub**: [VMU Research Lab](https://github.com/vmu-research-lab)
- **LinkedIn**: [VMU Research Lab](https://linkedin.com/company/vmu-research-lab)

---

## 📄 License

Copyright © 2025 VMU Student Research Lab

---

## 🙏 Acknowledgments

- **Trường Đại học Hàng hải Việt Nam** - Support và tài trợ
- **Khoa Công Nghệ Thông Tin** - Hỗ trợ học thuật
- **All Lab Members** - Đóng góp và phát triển

---

Made with ❤️ by VMU Student Research Lab Team
