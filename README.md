# 🧪 Interactive Chemistry 3D - Đồ Họa Máy Tính Group 2

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" />
</p>

## 📜 Mục lục (Table of Contents)
- [Giới thiệu dự án](#-giới-thiệu-dự-án)
- [Tính năng nổi bật (Key Features)](#-tính-năng-nổi-bật)
- [Kiến trúc & Công nghệ (Tech Stack)](#-kiến-trúc--công-nghệ)
- [Hướng dẫn cài đặt (Installation)](#-hướng-dẫn-cài-đặt)
- [Cấu trúc thư mục (Folder Structure)](#-cấu-trúc-thư-mục)
- [Thành viên phát triển (Contributors)](#-thành-viên-phát-triển)

---

## 🌟 Giới thiệu dự án

**Interactive Chemistry 3D** là sản phẩm bài tập lớn môn Đồ Họa Máy Tính được thực hiện bởi Nhóm 2. Dự án là một website giáo dục tương tác không gian 3 chiều (3D WebGL), đưa người dùng vào thế giới khám phá Hóa học phân tử cực kỳ trực quan và sống động. 
Sản phẩm được thiết kế theo định hướng Điện ảnh (Cinematic) kết hợp phong cách Kính Mờ (Glassmorphism), hứa hẹn mang lại trải nghiệm hoàn toàn mới lạ so với các đoạn chữ chết truyền thống. Quá trình phát triển tập trung cực kỳ gay gắt vào việc hoàn thiện mức độ Vi Môn (Micro-interaction) cho mọi Điểm chạm của Người sử dụng! 

## ✨ Tính năng nổi bật

### 1. 🧬 Trải nghiệm 3D Cinematic (Scrollytelling & Interactive Model)
- **WebGL Rendering (60FPS):** Quản lý mô hình 3D không gian (GLTF/GLB) bằng bộ Core Three.js kết hợp React Three Fiber để tối ưu Render Loop cực kỳ mượt mà.
- **Tương tác toàn cảnh (Orbit Controls):** Hỗ trợ Xoay 360 độ, Thu phóng (Zoom), và Fullscreen 3D Modal (Bấm đúp màn hình hoặc phím Maximize) được tích hợp luồng xử lý khóa cứng Thanh cuộn Lenis Smooth Scroll để chống nhiễu loạn (Dual-Scroll Prevention).
- **Hệ thống Pre-Warm Cảnh Báo Sớm:** Tự động nạp trước Texture 3D song song với Splash Screen khởi động Terminal (Booting Component sinh học 2D Canvas) ấn tượng. Trái nghiệm nhập cảnh mượt mà không Drop Frame.

### 2. 🌗 Dark/Light Mode Thematic Toàn Diện (Auto-Sync Adaptation)
Toàn bộ dự án đã đi qua công cuộc **"Thanh tẩy mã màu Cứng"** (Anti Washed-out UI), cho phép Web tự lật trạng thái hoàn mĩ:
- **Menu Mỏ Neo (Floating Navigation):** Nút Home trang bị **Multi-color Glass Gradient** (Ánh sáng 3 tông màu quang phổ: Cyan - Purple - Teal) tương thích đại diện cho bộ 3 Chương học. Text và Border được hòa vào làm một cực đã mắt. 
- **SVG & Biểu tượng Đa sắc:** Cấp quyền nhúng mã CSS Variable (`var(--accent)`) và nhúng trực tiếp lớp phủ nạ `<linearGradient>` lên lõi thẻ Component Line/Stroke của các SVG. Biểu tượng lấp lánh (Neon) vào ban đêm và đậm sắc dìm màu vào ban ngày trên Nền trắng.
- **Canvas Nền Hạt 2D Vận Hành Động:** Thuật toán Bóng Bìa (Shadow/Glow Overlay) cho Bóng bong bóng 2D tự động hắt bóng Đen (đậm) vào ban ngày và viền Trắng (Tỏa sáng) vào ban đêm nhờ nội suy Theme Mode trực tiếp trong Render Loop 60Hz.

### 3. 🧠 Smart HUD (Giao Diện Nổi Tự Động Ẩn)
- Trạng thái Ứng dụng cảm biến Phím/Chuột (User Idle Detection Toàn cục): Cho phép các Giao diện hệ thống (Volume thanh trượt nổi, Trạm Menu đáy, Nút Theme Toggle) tự chìm dần biến mất sau 2.5s khi người dùng thong dong nghỉ tay, trả lại sân khấu không giới hạn (Immersive) cho Nội dung 3D tỏa sáng! 

---

## 🛠 Kiến trúc & Công nghệ
- **Core Framework:** React 18 (Vite Bundler).
- **3D Graphics Engine:** Three.js & `@react-three/fiber` & `@react-three/drei`.
- **Motion & Physics:** `framer-motion` (UI Animation), `lenis` (Mượt thanh cuộn).
- **Đồ họa Styling:** Tailwind CSS V3, Cấu trúc rễ cấp CSS Global `--accent-rgb`, `--accent-purple-rgb`, `--accent-2-rgb`.
- **Icons & Assets:** `lucide-react` & Mảng SVG Pathing Đồ hoạ tĩnh.
- **Biên Dịch Khối:** JS Chunk Size Warning Optimization.

---

## 🚀 Hướng dẫn cài đặt

Để clone và chạy dự án web 3D trên môi trường thiết bị của bạn (Local), vui lòng làm theo các bước tải sau:

```bash
# 1. Clone nhánh kho chứa mã nguồn
git clone https://github.com/MinhThang1009/Do-Hoa-May-Tinh-Group-2.git

# 2. Xuyên vào thư mục ứng dụng Client
cd Do-Hoa-May-Tinh-Group-2/threejs

# 3. Yêu cầu tải Gói thư viện nội thất
npm install

# 4. Kích hoạt môi trường Chạy Thử máy (Tải Trang web tại http://localhost:5173)
npm run dev

# 5. Xuất Sản phẩm Khung Bọc cuối cùng (Tối ưu hóa)
npm run build
```

---

## 📂 Tổ chức Cấu trúc rễ

```text
Do-Hoa-May-Tinh-Group-2/
├── threejs/
│   ├── public/              # Kho Phụ thu chứa Data 3D (.glb, .gltf), âm thanh (.mp3)
│   ├── src/                 # Lõi Cứ điểm Logic
│   │   ├── components/      # Nhà máy linh kiện (MoleculeViewer 3D, Menu Glass, Boot Screen...)
│   │   ├── pages/           # Phân trang nội dung Hóa (Khái niệm, Tính chất, Ứng dụng)
│   │   ├── App.tsx          # Cổng điều hướng Sinh Tồn (Router, Idle Engine, Mode Toggle)
│   │   └── index.css        # Khối điều khiển Variables Màu Sắc Phổ và Keyframe Gradient
│   ├── index.html           # Khung sườn Xương Gốc
│   └── package.json         # Danh sách khai báo Plugin Dependencies
└── README.md                # Tờ Hướng Dẫn Này
```

---

## 👥 Thành viên Phát triển
*Dự án thuộc Bài Tập Lớn chuyên ngành Đồ Họa Máy Tính - Thực hiện bởi đội ngũ Nhóm 2.*

- **Thiết kế Kịch bản Tương tác 3D** (Scrollytelling Flow Control)
- **Hiệu chỉnh Phân mảnh Mô hình 3D** (Blender / GLTF Loader System Optimization)
- **Kiến trúc Giao diện UI/UX** (Tailwind Glassmorphism Architecture)
- **Xử lý Sự kiện Hệ thống** (React Event Loop, Rendering & Bug Fixing)

> "Hoá học không hề khó nhằn khi chúng ta biết cách chiêm ngưỡng vẻ đẹp không gian của nó."  
> Chân thành cảm ơn các bạn đã ghé thăm dự án! 🌟🚀
