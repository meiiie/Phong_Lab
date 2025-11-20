# 🚀 Quick Start - VMU Research Lab

**5 phút để chạy dự án!**

---

## ⚡ Installation

```bash
# 1. Clone repository
git clone https://github.com/meiiie/Phong_Lab.git
cd Phong_Lab

# 2. Install dependencies (IMPORTANT!)
npm install --legacy-peer-deps

# 3. Run development server
npm run dev
```

**⚠️ Lưu ý**: Phải sử dụng `--legacy-peer-deps` flag!

---

## 🌐 Access Website

Mở trình duyệt và truy cập:
- **Local**: http://localhost:3000
- **Network**: http://192.168.1.x:3000

---

## 📚 Documentation

- **README.md** - Tổng quan dự án
- **docs/FINAL-STATUS.md** - Status hiện tại ⭐
- **docs/SETUP.md** - Hướng dẫn cài đặt chi tiết
- **docs/LAB-INFO.md** - Thông tin về lab

---

## 🐛 Troubleshooting

### Lỗi: "ERESOLVE unable to resolve dependency tree"

**Giải pháp:**
```bash
npm install --legacy-peer-deps
```

### Lỗi: "Cannot find module"

**Giải pháp:**
```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### Lỗi: "Port 3000 is already in use"

**Giải pháp:**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Hoặc chạy trên port khác
npm run dev -- -p 3001
```

---

## 📝 Next Steps

1. ✅ Website đang chạy
2. 📖 Đọc `docs/FINAL-STATUS.md`
3. 🎨 Xem design tại http://localhost:3000
4. 💻 Bắt đầu code!

---

## 📞 Need Help?

- **Documentation**: `docs/` folder
- **GitHub**: https://github.com/meiiie/Phong_Lab.git
- **Email**: research.lab@vmu.edu.vn

---

Made with ❤️ by VMU Research Lab Team
