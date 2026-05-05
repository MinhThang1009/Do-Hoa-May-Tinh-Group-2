<p align="center">
  <img src="https://em-content.zobj.net/source/apple/391/test-tube_1f9ea.png" width="80" alt="Logo" />
</p>

<h1 align="center">Interactive Chemistry 3D</h1>
<h3 align="center">Bài 8: Acid — Mô hình phân tử 3D tương tác</h3>

<p align="center">
  <em>Bài Tập Lớn môn Đồ Họa Máy Tính — Nhóm 2</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Three.js-000?style=for-the-badge&logo=three.js&logoColor=fff" />
  <img src="https://img.shields.io/badge/Vite_5-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=fff" />
  <img src="https://img.shields.io/badge/Tailwind_CSS_3-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=fff" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=fff" />
</p>

---

## 📑 Mục lục

- [🔬 Giới thiệu](#-giới-thiệu)
- [✨ Tính năng](#-tính-năng)
- [🏗️ Kiến trúc & Công nghệ](#️-kiến-trúc--công-nghệ)
- [📂 Cấu trúc thư mục](#-cấu-trúc-thư-mục)
- [🚀 Hướng dẫn cài đặt](#-hướng-dẫn-cài-đặt)
- [📦 Build Production](#-build-production)
- [👥 Thành viên nhóm](#-thành-viên-nhóm)

---

## 🔬 Giới thiệu

**Interactive Chemistry 3D** là ứng dụng web trực quan hóa cấu trúc phân tử các hợp chất Acid thông dụng (**HCl**, **HNO₃**, **H₂SO₄**) bằng mô hình 3D tương tác.

Dự án được xây dựng trong khuôn khổ Bài tập lớn môn **Đồ Họa Máy Tính**, kế thừa kiến thức về WebGL và Three.js để tạo trải nghiệm học tập trực quan, sinh động trên nền tảng web.

> 🧪 *Người dùng có thể xoay, phóng to, thu nhỏ mô hình phân tử và hover lên từng nguyên tử để xem thông tin ion.*

---

## ✨ Tính năng

| Tính năng | Mô tả |
|---|---|
| 🌐 **Mô hình 3D tương tác** | Tải và hiển thị mô hình GLTF/GLB, hỗ trợ xoay 360°, zoom, auto-rotate. |
| 🎨 **Light / Dark Mode** | Chuyển đổi giao diện sáng-tối mượt mà với View Transitions API. |
| 🫧 **Nền hạt Hóa học** | Hiệu ứng Canvas 2D với bọt khí, vòng Benzene, ký hiệu nguyên tố trôi nổi. |
| 🔊 **Hệ thống âm thanh** | Web Audio API tạo hiệu ứng hover, click, splash sweep theo phong cách sci-fi. |
| 👁️ **Idle Detection** | Tự động ẩn HUD sau 2.5 giây không tương tác, tối đa hóa vùng nhìn 3D. |
| ⚡ **Tối ưu hiệu năng** | IntersectionObserver, FPS cap 60, off-screen pause, manual chunks. |
| 🖱️ **Tooltip phân tử** | Hover lên nguyên tử hiển thị tên ion với hiệu ứng Lerp mượt mà. |
| 📱 **Responsive** | Tương thích đa thiết bị, tắt Pan trên mobile để tránh xung đột cuộn. |

---

## 🏗️ Kiến trúc & Công nghệ

```
┌─────────────────────────────────────────────────────────┐
│                    Vite Dev Server                       │
├───────────────┬─────────────────┬───────────────────────┤
│  React 18     │  Three.js       │  Framer Motion        │
│  Router DOM   │  OrbitControls  │  Page Transitions     │
│  Components   │  GLTFLoader     │  SplitTextTitle       │
├───────────────┼─────────────────┼───────────────────────┤
│  Tailwind CSS │  Web Audio API  │  Lenis Smooth Scroll  │
│  CSS Vars     │  SoundEngine    │  View Transitions     │
└───────────────┴─────────────────┴───────────────────────┘
```

| Layer | Công nghệ | Phiên bản |
|---|---|---|
| **Framework** | React + Vite | `18.3` · `5.4` |
| **3D Engine** | Three.js + OrbitControls + GLTFLoader | `0.160` |
| **Styling** | Tailwind CSS + CSS Variables | `3.4` |
| **Animation** | Framer Motion + Lenis | `12.x` · `1.3` |
| **Language** | TypeScript | `5.6` |
| **Icons** | Lucide React | `0.542` |

---

## 📂 Cấu trúc thư mục

```
Bai-8/
├── 📄 .gitignore
├── 📄 README.md               ← Bạn đang ở đây
├── 📂 blender/                 # Script Blender tạo mô hình 3D
│   └── hcl_ions_blender_script.py
├── 📂 docs/                    # Tài liệu bổ sung
│   └── context.md
└── 📂 threejs/                 # ⚛ Ứng dụng React chính
    ├── index.html              # HTML entry point
    ├── package.json
    ├── vite.config.ts
    ├── tsconfig.json
    ├── tailwind.config.js
    ├── 📂 public/
    │   └── 📂 models/          # Mô hình phân tử 3D (.glb)
    │       ├── HCl.glb
    │       ├── HNO3.glb
    │       └── H2SO4.glb
    └── 📂 src/
        ├── App.tsx             # Router, Theme, Idle Detection
        ├── main.tsx            # React DOM entry
        ├── index.css           # Design system & animations
        ├── 📂 components/      # UI Components
        │   ├── AnimatedIcons.tsx
        │   ├── ChemistryBackground.tsx
        │   ├── FloatingMenu.tsx
        │   ├── MoleculeViewer.tsx
        │   ├── ScrollToTop.tsx
        │   ├── SoundController.tsx
        │   ├── SplashScreen.tsx
        │   ├── SplitTextTitle.tsx
        │   └── ThemeToggle.tsx
        ├── 📂 pages/           # Các trang nội dung
        │   ├── Home.tsx
        │   ├── Chapter1.tsx    # Khái niệm Acid
        │   ├── Chapter2.tsx    # Tính chất hóa học
        │   └── Chapter3.tsx    # Acid thông dụng
        └── 📂 utils/
            └── SoundEngine.ts  # Web Audio API engine
```

---

## 🚀 Hướng dẫn cài đặt

> **Yêu cầu:** [Node.js](https://nodejs.org/) ≥ 18

```bash
# 1. Clone repository
git clone https://github.com/MinhThang1009/Do-Hoa-May-Tinh-Group-2.git

# 2. Di chuyển vào thư mục dự án
cd Do-Hoa-May-Tinh-Group-2/Bai-8/threejs

# 3. Cài đặt dependencies
npm install

# 4. Khởi chạy dev server
npm run dev
```

Ứng dụng sẽ chạy tại **http://localhost:5173**

---

## 📦 Build Production

```bash
npm run build
```

Output sẽ được tạo trong thư mục `threejs/dist/`.

---

## 👥 Thành viên nhóm

<p align="center">
  <strong>Bài Tập Lớn môn Đồ Họa Máy Tính — Nhóm 2</strong>
</p>

| Đóng góp | Nội dung |
|---|---|
| 🎬 **Kịch bản** | Thiết kế nội dung tương tác & Scrollytelling |
| 🧊 **Mô hình 3D** | Xuất dữ liệu GLTF từ Blender |
| 🎨 **Giao diện** | Thiết kế UI Layout & Component logic |
| ⚡ **Rendering** | Thiết lập WebGL pipeline & tối ưu hiệu năng |

---

<p align="center">
  <sub>Cảm ơn thầy cô và các bạn đã theo dõi dự án! 🎓</sub>
</p>
