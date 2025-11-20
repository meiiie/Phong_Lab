# 🤝 Hướng Dẫn Đóng Góp

Cảm ơn bạn đã quan tâm đến việc đóng góp cho dự án VMU 70 Năm Kỷ Niệm! Tài liệu này sẽ hướng dẫn bạn quy trình làm việc và các quy tắc cần tuân thủ.

## 📋 Mục Lục

- [Quy Trình Làm Việc](#quy-trình-làm-việc)
- [Coding Standards](#coding-standards)
- [Git Workflow](#git-workflow)
- [Component Guidelines](#component-guidelines)
- [Testing](#testing)
- [Pull Request Process](#pull-request-process)

## 🔄 Quy Trình Làm Việc

### 1. Setup Development Environment

```bash
# Clone repository
git clone https://github.com/your-org/vmu-70-nam.git
cd vmu-70-nam

# Install dependencies
npm install

# Chạy development server
npm run dev
```

### 2. Tạo Branch Mới

```bash
# Tạo branch từ main
git checkout main
git pull origin main
git checkout -b feature/ten-tinh-nang

# Hoặc cho bug fix
git checkout -b fix/ten-bug
```

### 3. Làm Việc Trên Branch

- Commit thường xuyên với message rõ ràng
- Test kỹ trước khi push
- Đảm bảo code chạy không lỗi

### 4. Push và Tạo Pull Request

```bash
git push origin feature/ten-tinh-nang
```

Sau đó tạo Pull Request trên GitHub.

## 💻 Coding Standards

### JavaScript/React

#### Naming Conventions

```javascript
// Components: PascalCase
const HeroSection = () => { ... }

// Functions: camelCase
const handleClick = () => { ... }

// Constants: UPPER_SNAKE_CASE
const API_BASE_URL = "https://api.example.com"

// Files: kebab-case hoặc PascalCase
// hero-section.js hoặc HeroSection.jsx
```

#### Component Structure

```javascript
'use client'; // Nếu cần client-side

import React from 'react';
import './ComponentName.css';

/**
 * Component description
 * @param {Object} props - Component props
 */
const ComponentName = ({ prop1, prop2 }) => {
  // Hooks
  const [state, setState] = useState(null);
  
  // Effects
  useEffect(() => {
    // Effect logic
  }, []);
  
  // Handlers
  const handleEvent = () => {
    // Handler logic
  };
  
  // Render
  return (
    <div className="component-name">
      {/* JSX */}
    </div>
  );
};

export default ComponentName;
```

### CSS

#### Class Naming (BEM-like)

```css
/* Block */
.project-card { }

/* Element */
.project-card-title { }
.project-card-description { }

/* Modifier */
.project-card--featured { }
```

#### Style Organization

```css
/* 1. Layout */
.component {
  display: flex;
  position: relative;
}

/* 2. Box Model */
.component {
  width: 100%;
  padding: 24px;
  margin: 0 auto;
}

/* 3. Visual */
.component {
  background: #ffffff;
  border: 1px solid #e8eaed;
  border-radius: 8px;
}

/* 4. Typography */
.component {
  font-size: 1rem;
  color: #202124;
}

/* 5. Animation */
.component {
  transition: all 0.2s ease;
}
```

#### Google-Style Guidelines

```css
/* ✅ DO: Minimal, clean styles */
.card {
  background: #ffffff;
  border: 1px solid #e8eaed;
  border-radius: 8px;
  padding: 24px;
}

/* ❌ DON'T: Decorative elements */
.card::before {
  content: '';
  background: linear-gradient(...);
  /* Tránh pseudo-elements không cần thiết */
}

/* ✅ DO: Subtle hover effects */
.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

/* ❌ DON'T: Quá nhiều animation */
.card:hover {
  transform: scale(1.1) rotate(5deg);
  /* Tránh animation phức tạp */
}
```

### Colors

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

/* Semantic Colors */
--success: #34A853;
--warning: #FBBC04;
--error: #EA4335;
```

### Typography

```css
/* Headings - Google Style */
h1, h2, h3 {
  font-family: 'Be Vietnam Pro', 'Inter', sans-serif;
  font-weight: 400;
  color: #202124;
  letter-spacing: -0.01em;
}

h2 {
  font-size: 2.5rem;
  line-height: 1.2;
}

/* Body Text */
p {
  font-size: 1.125rem;
  line-height: 1.6;
  color: #5f6368;
}
```

## 🌿 Git Workflow

### Branch Naming

```
feature/ten-tinh-nang    # Tính năng mới
fix/ten-bug              # Sửa bug
hotfix/ten-bug-gap      # Sửa bug khẩn cấp
refactor/ten-phan        # Refactor code
docs/cap-nhat-tai-lieu   # Cập nhật tài liệu
```

### Commit Messages

```bash
# Format
<type>: <subject>

# Types
feat:     Tính năng mới
fix:      Sửa bug
docs:     Cập nhật tài liệu
style:    Format code (không ảnh hưởng logic)
refactor: Refactor code
test:     Thêm/sửa tests
chore:    Cập nhật build, dependencies

# Examples
feat: thêm section timeline cho trang chủ
fix: sửa lỗi responsive trên mobile
docs: cập nhật README với hướng dẫn deployment
style: format code theo prettier
refactor: tối ưu component ProjectCard
```

### Commit Best Practices

```bash
# ✅ DO: Commit nhỏ, tập trung
git commit -m "feat: thêm component HeroSection"
git commit -m "style: cập nhật màu sắc theo brand guidelines"

# ❌ DON'T: Commit quá lớn
git commit -m "update everything"

# ✅ DO: Commit thường xuyên
# Commit sau mỗi tính năng nhỏ hoàn thành

# ❌ DON'T: Commit quá ít
# Tránh commit 1 lần cho cả ngày làm việc
```

## 🧩 Component Guidelines

### Tạo Component Mới

1. **Tạo folder component**

```
src/components/ComponentName/
├── ComponentName.jsx
├── ComponentName.css
└── index.js (optional)
```

2. **Component template**

```javascript
'use client';

import React from 'react';
import './ComponentName.css';

/**
 * ComponentName - Mô tả ngắn gọn
 * 
 * @param {string} title - Tiêu đề
 * @param {string} description - Mô tả
 * @param {Function} onClick - Handler khi click
 */
const ComponentName = ({ 
  title = "Default Title",
  description,
  onClick 
}) => {
  return (
    <div className="component-name">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

export default ComponentName;
```

3. **CSS template**

```css
.component-name {
  /* Layout */
  display: flex;
  flex-direction: column;
  gap: 16px;
  
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

/* Responsive */
@media (max-width: 768px) {
  .component-name {
    padding: 16px;
  }
}
```

### Props Validation

```javascript
// Sử dụng PropTypes hoặc TypeScript
import PropTypes from 'prop-types';

ComponentName.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  onClick: PropTypes.func
};

ComponentName.defaultProps = {
  description: '',
  onClick: () => {}
};
```

## 🧪 Testing

### Manual Testing Checklist

Trước khi tạo Pull Request, kiểm tra:

- [ ] Component hiển thị đúng trên desktop (1920px)
- [ ] Component hiển thị đúng trên tablet (768px)
- [ ] Component hiển thị đúng trên mobile (375px)
- [ ] Không có lỗi console
- [ ] Không có warning trong terminal
- [ ] Animations hoạt động mượt mà
- [ ] Links và buttons hoạt động đúng
- [ ] Images load đúng
- [ ] Text không bị overflow

### Browser Testing

Test trên các trình duyệt:

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

## 📝 Pull Request Process

### 1. Chuẩn Bị Pull Request

```bash
# Đảm bảo code mới nhất
git checkout main
git pull origin main
git checkout feature/your-branch
git rebase main

# Kiểm tra lỗi
npm run lint

# Test build
npm run build
```

### 2. Tạo Pull Request

**Title Format:**
```
[TYPE] Short description

Examples:
[FEAT] Thêm section timeline
[FIX] Sửa lỗi responsive menu
[DOCS] Cập nhật README
```

**Description Template:**

```markdown
## 📝 Mô Tả

Mô tả ngắn gọn về thay đổi

## 🎯 Mục Đích

Giải thích tại sao cần thay đổi này

## 🔧 Thay Đổi

- Thêm component X
- Cập nhật style Y
- Sửa bug Z

## 📸 Screenshots

(Nếu có thay đổi UI)

## ✅ Checklist

- [ ] Code đã được test
- [ ] Responsive trên mobile/tablet
- [ ] Không có lỗi console
- [ ] Documentation đã cập nhật
- [ ] Commit messages rõ ràng
```

### 3. Code Review

- Đợi ít nhất 1 reviewer approve
- Giải quyết tất cả comments
- Update code theo feedback
- Re-request review nếu cần

### 4. Merge

- Squash commits nếu có quá nhiều commits nhỏ
- Merge vào main
- Xóa branch sau khi merge

## 🚫 Common Mistakes

### ❌ Tránh

```javascript
// Hardcode values
const API_URL = "https://api.example.com";

// Inline styles
<div style={{ color: 'red' }}>Text</div>

// Console.log trong production
console.log('Debug info');

// Unused imports
import { something } from 'library'; // không dùng

// Magic numbers
setTimeout(() => {}, 3000); // 3000 là gì?
```

### ✅ Nên Làm

```javascript
// Use environment variables
const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Use CSS classes
<div className="error-text">Text</div>

// Remove debug code
// console.log('Debug info');

// Remove unused imports
// import { something } from 'library';

// Use constants
const ANIMATION_DURATION = 3000; // 3 seconds
setTimeout(() => {}, ANIMATION_DURATION);
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [GSAP Documentation](https://greensock.com/docs/)
- [Google Material Design](https://material.io/design)

## 💬 Liên Hệ

Nếu có câu hỏi, liên hệ:

- **Team Lead**: [email]
- **Slack**: #vmu-70-nam
- **GitHub Issues**: [Link to issues]

---

Cảm ơn bạn đã đóng góp cho dự án! 🎉
