# 📂 Cấu Trúc Dự Án

Tài liệu này giải thích chi tiết về cấu trúc thư mục và file trong dự án VMU 70 Năm Kỷ Niệm.

## 📋 Mục Lục

- [Tổng Quan](#tổng-quan)
- [Thư Mục Chính](#thư-mục-chính)
- [Components](#components)
- [Data Files](#data-files)
- [Styling](#styling)
- [Configuration](#configuration)

## 🌳 Tổng Quan

```
vmu-70-nam/
├── 📁 .next/                 # Next.js build output (auto-generated)
├── 📁 .vscode/               # VS Code settings
├── 📁 node_modules/          # Dependencies (auto-generated)
├── 📁 public/                # Static assets
├── 📁 src/                   # Source code
├── 📄 .gitignore            # Git ignore rules
├── 📄 jsconfig.json         # JavaScript config
├── 📄 next.config.mjs       # Next.js config
├── 📄 package.json          # Dependencies
├── 📄 README.md             # Main documentation
├── 📄 CONTRIBUTING.md       # Contributing guide
├── 📄 SETUP.md              # Setup guide
├── 📄 CHANGELOG.md          # Version history
└── 📄 PROJECT-STRUCTURE.md  # This file
```

## 📁 Thư Mục Chính

### `/public` - Static Assets

```
public/
├── images/                   # Hình ảnh
│   ├── hero/                # Hero section images
│   │   ├── hero-bg.jpg
│   │   └── hero-overlay.png
│   ├── projects/            # Project images
│   │   ├── project-1.jpg
│   │   ├── project-2.jpg
│   │   └── ...
│   ├── team/                # Team member photos
│   │   ├── member-1.jpg
│   │   ├── member-2.jpg
│   │   └── ...
│   ├── tech/                # Tech stack icons
│   │   ├── react.svg
│   │   ├── nextjs.svg
│   │   └── ...
│   └── vmu-logo.png         # VMU logo
└── fonts/                   # Custom fonts (if any)
    └── custom-font.woff2
```

**Quy tắc:**
- Tất cả static files phải đặt trong `/public`
- Truy cập bằng absolute path: `/images/hero/hero-bg.jpg`
- Optimize images trước khi commit (WebP, JPEG)

### `/src` - Source Code

```
src/
├── app/                     # Next.js App Router
├── components/              # React components
└── data/                    # Data files
```

## 📱 App Router (`/src/app`)

Next.js 15 sử dụng App Router với file-based routing.

```
src/app/
├── page.js                  # Landing page (/)
├── layout.js                # Root layout
├── globals.css              # Global styles
├── lab-theme.css            # Lab theme variables
├── google-minimal.css       # Google-style minimal
├── index.css                # Landing page styles
├── preloader.css            # Preloader styles
└── contact/                 # Contact page (/contact)
    ├── page.js
    └── contact.css
```

### `page.js` - Landing Page

**Sections:**
1. Preloader
2. Navigation
3. Hero Lab
4. Stats
5. Research Projects
6. Team
7. Tech Stack
8. CTA
9. Footer

**Key Features:**
- GSAP animations
- Smooth scrolling
- Responsive design
- Particle effects

### `layout.js` - Root Layout

```javascript
export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
```

### Styling Files

#### `globals.css`
- Global resets
- Base typography
- Common utilities
- Section styles

#### `lab-theme.css`
- CSS variables
- Color palette
- Typography scale
- Spacing system

#### `google-minimal.css`
- Google-inspired styles
- Minimal design patterns
- Clean sections

## 🧩 Components (`/src/components`)

### Component Structure

Mỗi component có cấu trúc:

```
ComponentName/
├── ComponentName.jsx        # Component logic
├── ComponentName.css        # Component styles
└── index.js                 # Export (optional)
```

### Navigation Components

```
components/
├── Nav/                     # Main navigation
│   ├── Nav.jsx
│   └── Nav.css
└── ConditionalFooter/       # Footer
    ├── ConditionalFooter.jsx
    └── ConditionalFooter.css
```

#### `Nav.jsx`
- Responsive navigation
- Mobile menu
- Smooth scroll links

### UI Components

```
components/
├── AnimatedButton/          # Animated button
│   ├── AnimatedButton.jsx
│   └── AnimatedButton.css
└── CounterAnimation/        # Counter animation
    └── CounterAnimation.jsx
```

#### `AnimatedButton.jsx`

**Props:**
```javascript
{
  text: string,           // Button text
  href: string,           // Link URL
  variant: string,        // 'primary' | 'secondary'
  onClick: function       // Click handler
}
```

**Usage:**
```javascript
<AnimatedButton
  text="Tham Gia Ngay"
  href="/contact"
  variant="primary"
/>
```

### Lab Components (`/src/components/lab`)

```
components/lab/
├── HeroLab/                 # Hero section
│   ├── HeroLab.jsx
│   └── HeroLab.css
├── ParticleCanvas/          # Particle animation
│   └── ParticleCanvas.jsx
├── ProjectCard/             # Project card
│   ├── ProjectCard.jsx
│   └── ProjectCard.css
├── ProjectsGrid/            # Projects grid
│   ├── ProjectsGrid.jsx
│   └── ProjectsGrid.css
├── TeamMemberCard/          # Team member card
│   ├── TeamMemberCard.jsx
│   └── TeamMemberCard.css
├── TeamGrid/                # Team grid
│   ├── TeamGrid.jsx
│   └── TeamGrid.css
├── TechIcon/                # Tech icon
│   ├── TechIcon.jsx
│   └── TechIcon.css
└── TechStackGrid/           # Tech stack grid
    ├── TechStackGrid.jsx
    └── TechStackGrid.css
```

#### `HeroLab.jsx`

**Props:**
```javascript
{
  title: string,              // Hero title
  tagline: string,            // Tagline
  mission: string,            // Mission statement
  ctaLabel: string,           // Primary CTA text
  ctaLink: string,            // Primary CTA link
  ctaSecondaryLabel: string,  // Secondary CTA text
  ctaSecondaryLink: string,   // Secondary CTA link
  particleCount: number,      // Number of particles
  particleColor: string,      // Particle color
  showPreloader: boolean      // Show preloader
}
```

#### `ProjectCard.jsx`

**Props:**
```javascript
{
  project: {
    id: number,
    title: string,
    description: string,
    area: string,
    status: 'ongoing' | 'completed',
    techStack: string[],
    teamSize: number,
    image: string
  }
}
```

#### `TeamMemberCard.jsx`

**Props:**
```javascript
{
  member: {
    id: number,
    name: string,
    role: string,
    major: string,
    interests: string[],
    projects: number,
    publications: number,
    photo: string,
    social: {
      github: string,
      linkedin: string,
      email: string
    }
  }
}
```

#### `TechIcon.jsx`

**Props:**
```javascript
{
  name: string,           // Tech name
  icon: string,           // Icon (emoji or component)
  color: string,          // Icon color
  description: string     // Description
}
```

## 📊 Data Files (`/src/data`)

### `research-projects.js`

```javascript
export const researchProjects = [
  {
    id: 1,
    title: "AI-Powered Maritime Navigation",
    description: "Phát triển hệ thống điều hướng thông minh...",
    area: "AI & Machine Learning",
    status: "ongoing",
    techStack: ["Python", "TensorFlow", "OpenCV"],
    teamSize: 4,
    startDate: "2024-01",
    image: "/images/projects/project-1.jpg"
  },
  // ...
];

export const researchAreas = [
  "AI & Machine Learning",
  "Web Development",
  "Mobile Development",
  "IoT & Embedded Systems",
  "Data Science"
];
```

### `team-members.js`

```javascript
export const teamMembers = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    role: "Team Lead",
    major: "Công nghệ thông tin",
    year: 4,
    interests: ["AI", "Web Development"],
    projects: 5,
    publications: 2,
    photo: "/images/team/member-1.jpg",
    social: {
      github: "https://github.com/username",
      linkedin: "https://linkedin.com/in/username",
      email: "email@example.com"
    }
  },
  // ...
];
```

### `tech-stack.js`

```javascript
export const techStack = {
  "Frontend": [
    {
      name: "React",
      icon: "⚛️",
      color: "#61DAFB",
      description: "UI Library for building interfaces"
    },
    // ...
  ],
  "Backend": [
    // ...
  ],
  "Tools": [
    // ...
  ]
};
```

### `publications.js`

```javascript
export const publications = [
  {
    id: 1,
    title: "Paper Title",
    authors: ["Author 1", "Author 2"],
    conference: "Conference Name",
    year: 2024,
    doi: "10.1234/example",
    pdf: "/papers/paper-1.pdf"
  },
  // ...
];
```

## 🎨 Styling Architecture

### CSS Organization

```
Specificity Hierarchy:
1. globals.css          # Base styles
2. lab-theme.css        # Theme variables
3. google-minimal.css   # Google-style overrides
4. Component.css        # Component-specific styles
```

### CSS Variables (`lab-theme.css`)

```css
:root {
  /* Colors */
  --primary-blue: #0074D9;
  --primary-dark: #003B73;
  --primary-teal: #00A896;
  
  /* Grays */
  --gray-900: #202124;
  --gray-700: #5f6368;
  --gray-300: #e8eaed;
  --gray-100: #f8f9fa;
  
  /* Typography */
  --font-primary: 'Be Vietnam Pro', 'Inter', sans-serif;
  --font-mono: 'DM Mono', monospace;
  
  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 48px;
  --spacing-3xl: 64px;
  
  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.1);
}
```

### Component CSS Pattern

```css
/* Block */
.component-name {
  /* Layout */
  display: flex;
  position: relative;
  
  /* Box Model */
  width: 100%;
  padding: var(--spacing-lg);
  margin: 0 auto;
  
  /* Visual */
  background: var(--gray-100);
  border: 1px solid var(--gray-300);
  border-radius: var(--radius-md);
  
  /* Typography */
  font-size: 1rem;
  color: var(--gray-900);
  
  /* Animation */
  transition: all 0.2s ease;
}

/* Element */
.component-name__element {
  /* Styles */
}

/* Modifier */
.component-name--variant {
  /* Styles */
}

/* State */
.component-name:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

/* Responsive */
@media (max-width: 768px) {
  .component-name {
    padding: var(--spacing-md);
  }
}
```

## ⚙️ Configuration Files

### `jsconfig.json`

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**Usage:**
```javascript
// Instead of
import Nav from '../../components/Nav/Nav';

// Use
import Nav from '@/components/Nav/Nav';
```

### `next.config.mjs`

```javascript
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['example.com'],
  },
};

export default nextConfig;
```

### `package.json`

```json
{
  "name": "vmu-70-nam-kiniem",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

## 📝 File Naming Conventions

### Components
- **React Components**: `PascalCase.jsx`
  - Example: `HeroLab.jsx`, `ProjectCard.jsx`

### Styles
- **CSS Files**: `kebab-case.css` hoặc `PascalCase.css`
  - Example: `hero-lab.css` hoặc `HeroLab.css`

### Data Files
- **Data Files**: `kebab-case.js`
  - Example: `research-projects.js`, `team-members.js`

### Pages
- **Next.js Pages**: `page.js`, `layout.js`
  - Example: `app/page.js`, `app/contact/page.js`

## 🔍 Import Order

```javascript
// 1. React imports
import React, { useState, useEffect } from 'react';

// 2. Next.js imports
import Image from 'next/image';
import Link from 'next/link';

// 3. Third-party libraries
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 4. Components
import Nav from '@/components/Nav/Nav';
import HeroLab from '@/components/lab/HeroLab/HeroLab';

// 5. Data
import { researchProjects } from '@/data/research-projects';

// 6. Styles
import './page.css';
```

## 📚 Best Practices

### Component Organization
1. Một component = một file
2. Mỗi component có CSS riêng
3. Props được document rõ ràng
4. Default props được định nghĩa

### Data Management
1. Data tách biệt khỏi components
2. Sử dụng constants cho enums
3. Validate data trước khi sử dụng

### Styling
1. Sử dụng CSS variables
2. Mobile-first approach
3. BEM-like naming convention
4. Avoid inline styles

### Performance
1. Lazy load images
2. Code splitting
3. Minimize bundle size
4. Optimize animations

---

## 📞 Liên Hệ

Nếu có câu hỏi về cấu trúc dự án:

- **GitHub Issues**: [Link]
- **Slack**: #vmu-70-nam
- **Email**: dev@vmu.edu.vn

---

Made with ❤️ by The Wiii Lab
