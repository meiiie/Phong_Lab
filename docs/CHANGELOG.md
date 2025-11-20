# 📝 Changelog

Tất cả các thay đổi quan trọng của dự án sẽ được ghi lại trong file này.

Format dựa trên [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
và dự án tuân theo [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-01-20

### 🎉 Initial Release

Phiên bản đầu tiên của website kỷ niệm 70 năm VMU với thiết kế Google-inspired minimal.

### ✨ Added

#### Landing Page
- **Hero Section**: Neo-futuristic hero với particle effects
- **Stats Section**: Hiển thị thống kê về VMU (70 năm, 1956, 50+ chuyên ngành, 25K+ cựu sinh viên)
- **Research Projects Section**: Grid hiển thị các dự án nghiên cứu với filter
- **Team Section**: Grid hiển thị đội ngũ Lab nghiên cứu
- **Tech Stack Section**: Hiển thị công nghệ sử dụng với icons
- **CTA Section**: Call-to-action đơn giản

#### Components
- `HeroLab`: Hero section với particle canvas
- `ParticleCanvas`: Canvas animation với particles
- `ProjectCard`: Card hiển thị dự án nghiên cứu
- `ProjectsGrid`: Grid layout cho projects với filter
- `TeamMemberCard`: Card hiển thị thành viên team
- `TeamGrid`: Grid layout cho team members
- `TechIcon`: Icon component cho tech stack
- `TechStackGrid`: Grid layout cho tech stack
- `Nav`: Navigation component
- `AnimatedButton`: Button với animations
- `CounterAnimation`: Counter animation cho stats
- `ConditionalFooter`: Footer component

#### Styling
- **Google-inspired Design**: Thiết kế tối giản như Google
- **Maritime Colors**: Màu xanh biển (#0074D9, #003B73, #00A896)
- **Clean Typography**: Font Be Vietnam Pro với font-weight 400
- **Minimal Cards**: Border radius 8px, subtle shadows
- **Responsive Design**: Hoạt động tốt trên mọi thiết bị

#### Data
- `research-projects.js`: Data cho dự án nghiên cứu
- `team-members.js`: Data cho thành viên team
- `tech-stack.js`: Data cho tech stack
- `publications.js`: Data cho bài báo khoa học

#### Documentation
- `README.md`: Tài liệu chính của dự án
- `CONTRIBUTING.md`: Hướng dẫn đóng góp
- `SETUP.md`: Hướng dẫn cài đặt chi tiết
- `CHANGELOG.md`: File này

### 🎨 Design System

#### Colors
```css
/* Primary Colors - Maritime + Tech */
--primary-blue: #0074D9;
--primary-dark: #003B73;
--primary-teal: #00A896;

/* Google-Style Grays */
--gray-900: #202124;  /* Headings */
--gray-700: #5f6368;  /* Body text */
--gray-300: #e8eaed;  /* Borders */
--gray-100: #f8f9fa;  /* Backgrounds */
```

#### Typography
- **Headings**: Be Vietnam Pro, 400 weight, 2.5rem
- **Body**: 1.125rem, line-height 1.6
- **Letter spacing**: -0.01em

#### Spacing
- **Section padding**: 120px vertical
- **Container max-width**: 1200px
- **Container padding**: 24px horizontal

### 🛠 Technical Stack

#### Core
- Next.js 15.4.6
- React 19.1.0
- Node.js 18+

#### Animation
- GSAP 3.13.0
- Lenis 1.3.8 (smooth scrolling)
- Split Type 0.3.4

#### UI
- Heroicons 2.2.0
- React Icons 5.5.0

### 📦 Dependencies

```json
{
  "@gsap/react": "^2.1.2",
  "@heroicons/react": "^2.2.0",
  "critters": "^0.0.20",
  "gsap": "^3.13.0",
  "lenis": "^1.3.8",
  "next": "15.4.6",
  "next-view-transitions": "^0.3.4",
  "react": "19.1.0",
  "react-dom": "19.1.0",
  "react-icons": "^5.5.0",
  "split-type": "^0.3.4"
}
```

### 🗑️ Removed

- Các file markdown cũ không cần thiết:
  - `PROJECT-ANALYSIS-HOLIHU.md`
  - `CHANGES-SUMMARY.md`
  - `COLOR-UPDATES.md`
  - `VMU-70-YEARS-KNOWLEDGE-BASE.md`
  - `PROJECT-PROGRESS.md`
  - `README-VIMARU.md`
  - `README-70-NAM-VMU.md`
  - `RESTORE-FEATURES-PLAN.md`
  - `ke-hoach.md`

- Decorative elements không cần thiết:
  - Floating orbs
  - Gradient animations
  - Complex pseudo-elements
  - Animated backgrounds

### 🔧 Configuration

#### Next.js Config
```javascript
// next.config.mjs
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};
```

#### Path Aliases
```json
// jsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### 🌐 Deployment

- **Platform**: Vercel
- **URL**: https://kiniem70nam.vmu.holihu.online
- **Auto-deploy**: Enabled on push to main

---

## [Unreleased]

### 🚧 Planned Features

- [ ] Trang About
- [ ] Trang Research (chi tiết dự án)
- [ ] Trang Team (chi tiết thành viên)
- [ ] Trang Publications
- [ ] Trang Gallery
- [ ] Trang Events/Timeline
- [ ] Blog/News section
- [ ] Search functionality
- [ ] Multi-language support (EN/VI)
- [ ] Dark mode
- [ ] Admin dashboard

### 🔮 Future Improvements

- [ ] Add unit tests
- [ ] Add E2E tests
- [ ] Improve SEO
- [ ] Add analytics
- [ ] Optimize images
- [ ] Add sitemap
- [ ] Add robots.txt
- [ ] Improve accessibility (WCAG 2.1 AA)

---

## Version History

### Version Format

```
[MAJOR.MINOR.PATCH] - YYYY-MM-DD

MAJOR: Breaking changes
MINOR: New features (backward compatible)
PATCH: Bug fixes (backward compatible)
```

### Types of Changes

- **Added**: Tính năng mới
- **Changed**: Thay đổi trong tính năng hiện có
- **Deprecated**: Tính năng sẽ bị loại bỏ
- **Removed**: Tính năng đã bị loại bỏ
- **Fixed**: Bug fixes
- **Security**: Security fixes

---

## Contact

- **Team**: The Wiii Lab
- **Email**: dev@vmu.edu.vn
- **Website**: https://kiniem70nam.vmu.holihu.online

---

Made with ❤️ by The Wiii Lab for VMU 70th Anniversary
