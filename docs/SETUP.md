# 🚀 Hướng Dẫn Cài Đặt Chi Tiết

Tài liệu này hướng dẫn chi tiết cách cài đặt và cấu hình môi trường phát triển cho dự án VMU 70 Năm Kỷ Niệm.

## 📋 Mục Lục

- [Yêu Cầu Hệ Thống](#yêu-cầu-hệ-thống)
- [Cài Đặt Node.js](#cài-đặt-nodejs)
- [Cài Đặt Dự Án](#cài-đặt-dự-án)
- [Cấu Hình IDE](#cấu-hình-ide)
- [Troubleshooting](#troubleshooting)

## 💻 Yêu Cầu Hệ Thống

### Phần Mềm Cần Thiết

- **Node.js**: 18.x hoặc cao hơn
- **npm**: 9.x hoặc cao hơn (đi kèm với Node.js)
- **Git**: Phiên bản mới nhất
- **Code Editor**: VS Code (khuyến nghị)

### Hệ Điều Hành

- Windows 10/11
- macOS 10.15 hoặc cao hơn
- Linux (Ubuntu 20.04 hoặc cao hơn)

## 📦 Cài Đặt Node.js

### Windows

1. Tải Node.js từ [nodejs.org](https://nodejs.org/)
2. Chọn phiên bản LTS (Long Term Support)
3. Chạy file installer và làm theo hướng dẫn
4. Kiểm tra cài đặt:

```bash
node --version
npm --version
```

### macOS

**Sử dụng Homebrew (khuyến nghị):**

```bash
# Cài đặt Homebrew (nếu chưa có)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Cài đặt Node.js
brew install node

# Kiểm tra
node --version
npm --version
```

**Hoặc tải từ nodejs.org:**

1. Tải Node.js từ [nodejs.org](https://nodejs.org/)
2. Chạy file .pkg và làm theo hướng dẫn

### Linux (Ubuntu/Debian)

```bash
# Cập nhật package list
sudo apt update

# Cài đặt Node.js và npm
sudo apt install nodejs npm

# Kiểm tra
node --version
npm --version
```

## 🔧 Cài Đặt Dự Án

### Bước 1: Clone Repository

```bash
# Clone từ GitHub
git clone https://github.com/your-org/vmu-70-nam.git

# Di chuyển vào thư mục dự án
cd vmu-70-nam
```

### Bước 2: Cài Đặt Dependencies

```bash
# Sử dụng npm
npm install

# Hoặc sử dụng pnpm (nhanh hơn)
npm install -g pnpm
pnpm install
```

**Lưu ý:** Quá trình cài đặt có thể mất 2-5 phút tùy vào tốc độ internet.

### Bước 3: Chạy Development Server

```bash
npm run dev
```

Server sẽ chạy tại: [http://localhost:3000](http://localhost:3000)

### Bước 4: Kiểm Tra

Mở trình duyệt và truy cập:
- **Landing Page**: http://localhost:3000
- **Contact Page**: http://localhost:3000/contact

## 🛠 Cấu Hình IDE

### Visual Studio Code (Khuyến Nghị)

#### Extensions Cần Thiết

1. **ES7+ React/Redux/React-Native snippets**
   - ID: `dsznajder.es7-react-js-snippets`
   - Snippets cho React

2. **Prettier - Code formatter**
   - ID: `esbenp.prettier-vscode`
   - Format code tự động

3. **ESLint**
   - ID: `dbaeumer.vscode-eslint`
   - Kiểm tra lỗi code

4. **CSS Peek**
   - ID: `pranaygp.vscode-css-peek`
   - Xem CSS definition

5. **Auto Rename Tag**
   - ID: `formulahendry.auto-rename-tag`
   - Tự động đổi tên tag HTML

#### Cài Đặt Extensions

```bash
# Mở VS Code
code .

# Hoặc cài từ command line
code --install-extension dsznajder.es7-react-js-snippets
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
code --install-extension pranaygp.vscode-css-peek
code --install-extension formulahendry.auto-rename-tag
```

#### Settings.json

Tạo file `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "files.associations": {
    "*.css": "css",
    "*.jsx": "javascriptreact"
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  }
}
```

#### Prettier Configuration

Tạo file `.prettierrc`:

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false
}
```

## 🔍 Cấu Trúc Dự Án Chi Tiết

```
vmu-70-nam/
├── .next/                    # Next.js build output (auto-generated)
├── .vscode/                  # VS Code settings
│   └── settings.json
├── node_modules/             # Dependencies (auto-generated)
├── public/                   # Static files
│   ├── images/              # Hình ảnh
│   │   ├── hero/
│   │   ├── projects/
│   │   └── team/
│   └── fonts/               # Custom fonts
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── contact/         # Contact page
│   │   │   ├── page.js
│   │   │   └── contact.css
│   │   ├── page.js          # Landing page (/)
│   │   ├── layout.js        # Root layout
│   │   ├── globals.css      # Global styles
│   │   ├── lab-theme.css    # Lab theme variables
│   │   ├── google-minimal.css  # Google-style minimal
│   │   ├── index.css        # Landing page styles
│   │   └── preloader.css    # Preloader styles
│   ├── components/          # React components
│   │   ├── Nav/             # Navigation
│   │   │   ├── Nav.jsx
│   │   │   └── Nav.css
│   │   ├── AnimatedButton/
│   │   │   ├── AnimatedButton.jsx
│   │   │   └── AnimatedButton.css
│   │   ├── CounterAnimation/
│   │   │   └── CounterAnimation.jsx
│   │   ├── ConditionalFooter/
│   │   │   ├── ConditionalFooter.jsx
│   │   │   └── ConditionalFooter.css
│   │   └── lab/              # Lab-specific components
│   │       ├── HeroLab/
│   │       │   ├── HeroLab.jsx
│   │       │   └── HeroLab.css
│   │       ├── ParticleCanvas/
│   │       │   └── ParticleCanvas.jsx
│   │       ├── ProjectCard/
│   │       │   ├── ProjectCard.jsx
│   │       │   └── ProjectCard.css
│   │       ├── ProjectsGrid/
│   │       │   ├── ProjectsGrid.jsx
│   │       │   └── ProjectsGrid.css
│   │       ├── TeamMemberCard/
│   │       │   ├── TeamMemberCard.jsx
│   │       │   └── TeamMemberCard.css
│   │       ├── TeamGrid/
│   │       │   ├── TeamGrid.jsx
│   │       │   └── TeamGrid.css
│   │       ├── TechIcon/
│   │       │   ├── TechIcon.jsx
│   │       │   └── TechIcon.css
│   │       └── TechStackGrid/
│   │           ├── TechStackGrid.jsx
│   │           └── TechStackGrid.css
│   └── data/                # Data files
│       ├── research-projects.js  # Dự án nghiên cứu
│       ├── team-members.js       # Thành viên team
│       ├── tech-stack.js         # Công nghệ sử dụng
│       └── publications.js       # Bài báo khoa học
├── .gitignore               # Git ignore rules
├── jsconfig.json            # JavaScript config
├── next.config.mjs          # Next.js config
├── package.json             # Dependencies và scripts
├── package-lock.json        # Lock file
├── README.md                # Tài liệu chính
├── CONTRIBUTING.md          # Hướng dẫn đóng góp
└── SETUP.md                 # File này
```

## 🐛 Troubleshooting

### Lỗi: "Cannot find module"

```bash
# Xóa node_modules và cài lại
rm -rf node_modules package-lock.json
npm install
```

### Lỗi: "Port 3000 is already in use"

```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:3000 | xargs kill -9

# Hoặc chạy trên port khác
npm run dev -- -p 3001
```

### Lỗi: "Module not found: Can't resolve '@/...'"

Kiểm tra file `jsconfig.json`:

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

### Lỗi: GSAP animations không hoạt động

```bash
# Kiểm tra GSAP đã được cài đặt
npm list gsap

# Nếu chưa có, cài đặt
npm install gsap @gsap/react
```

### Lỗi: Images không load

1. Kiểm tra đường dẫn trong `public/images/`
2. Đảm bảo sử dụng đúng path:

```javascript
// ✅ Đúng
<img src="/images/hero/hero-bg.jpg" alt="Hero" />

// ❌ Sai
<img src="images/hero/hero-bg.jpg" alt="Hero" />
<img src="./images/hero/hero-bg.jpg" alt="Hero" />
```

### Lỗi: CSS không apply

1. Kiểm tra import CSS trong component:

```javascript
import './ComponentName.css';
```

2. Xóa cache Next.js:

```bash
rm -rf .next
npm run dev
```

### Lỗi: Build failed

```bash
# Kiểm tra lỗi
npm run build

# Xem log chi tiết
npm run build --verbose

# Thử xóa cache và build lại
rm -rf .next
npm run build
```

## 📊 Performance Tips

### 1. Optimize Images

```bash
# Sử dụng Next.js Image component
import Image from 'next/image';

<Image 
  src="/images/hero.jpg" 
  alt="Hero"
  width={1920}
  height={1080}
  priority
/>
```

### 2. Code Splitting

```javascript
// Lazy load components
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>
});
```

### 3. Analyze Bundle Size

```bash
# Cài đặt bundle analyzer
npm install --save-dev @next/bundle-analyzer

# Thêm vào next.config.mjs
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  // config
});

# Chạy analysis
ANALYZE=true npm run build
```

## 🔐 Environment Variables

Tạo file `.env.local`:

```bash
# API URLs
NEXT_PUBLIC_API_URL=https://api.example.com

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Feature Flags
NEXT_PUBLIC_ENABLE_ANALYTICS=true
```

**Lưu ý:** File `.env.local` không được commit lên Git.

## 📱 Mobile Development

### Test trên thiết bị thật

1. Đảm bảo máy tính và điện thoại cùng mạng WiFi
2. Tìm IP của máy tính:

```bash
# Windows
ipconfig

# macOS/Linux
ifconfig
```

3. Truy cập từ điện thoại:
```
http://192.168.1.xxx:3000
```

### Chrome DevTools

1. Mở Chrome DevTools (F12)
2. Click icon "Toggle device toolbar" (Ctrl+Shift+M)
3. Chọn device để test

## 🚀 Next Steps

Sau khi cài đặt xong:

1. Đọc [README.md](README.md) để hiểu về dự án
2. Đọc [CONTRIBUTING.md](CONTRIBUTING.md) để biết quy trình làm việc
3. Xem code trong `src/` để làm quen với cấu trúc
4. Thử chỉnh sửa một component đơn giản
5. Tạo branch mới và bắt đầu code!

## 💬 Cần Trợ Giúp?

- **GitHub Issues**: [Link to issues]
- **Slack**: #vmu-70-nam
- **Email**: dev@vmu.edu.vn

---

Chúc bạn code vui vẻ! 🎉
