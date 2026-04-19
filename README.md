# Interactive Chemistry 3D - Đồ Họa Máy Tính Group 2

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" />
</p>

## Mục lục
- [Giới thiệu dự án](#giới-thiệu-dự-án)
- [Tính năng chính](#tính-năng-chính)
- [Kiến trúc & Công nghệ](#kiến-trúc--công-nghệ)
- [Hướng dẫn cài đặt](#hướng-dẫn-cài-đặt)
- [Cấu trúc thư mục](#cấu-trúc-thư-mục)
- [Thành viên](#thành-viên)

---

## Giới thiệu dự án

**Interactive Chemistry 3D** là bài tập lớn môn Đồ Họa Máy Tính của Nhóm 2. Kế thừa các kiến thức về WebGL và Three.js, ứng dụng này được xây dựng để trực quan hóa cấu trúc của các hợp chất Hóa học (chủ yếu là Acid) trên nền tảng web. 

Ứng dụng giúp người dùng tương tác trực tiếp với các mô hình phân tử 3D trong không gian đa chiều, kết hợp hiệu ứng giao diện hiện đại nhằm nâng cao trải nghiệm học tập và minh họa trực quan.

## Tính năng chính

### 1. Tương tác 3D (Interactive 3D View)
- Tích hợp mô hình phân tử 3D ở định dạng GLTF/GLB vào môi trường web.
- Hỗ trợ thao tác OrbitControls (Xoay 360 độ, phóng to, thu nhỏ) người dùng tương tác với từng nguyên tử.
- Render loop 60FPS mượt mà tương thích đa thiết bị. Khóa thanh cuộn màn hình khi đang tương tác mô hình để tránh nhảy trang.

### 2. Giao diện Light / Dark Mode
- Chuyển đổi linh hoạt giữa giao diện Sáng và Tối (Theme Toggle).
- Các thành phần UI như bảng tính, sidebar, menu điều hướng và cấu trúc hạt nền (particle background) cũng được tự động thay đổi màu sắc để ăn khớp với theme của máy ngữ cảnh.
- Bộ Icon SVG hỗ trợ thay đổi màu nội tuyến dựa vào CSS variables (`var(--accent)`).

### 3. Trải nghiệm người dùng (UX)
- **Idle Detection:** Trình ẩn giao diện (HUD) tự động khi người dùng không tương tác trong vòng 2.5 giây, để tối đa hoá vùng không gian hiển thị 3D.
- Transition và Animation: Hiệu ứng Fade-in, Scroll-progress bar và Hover transitions xây dựng bằng Tailwind và Framer Motion.

---

## Kiến trúc & Công nghệ

Dự án sử dụng các framework và thư viện sau:
- **Core Framework:** React 18, Vite.
- **3D Engine:** Three.js, `@react-three/fiber`, `@react-three/drei`.
- **Styling:** Tailwind CSS.
- **Motion:** `framer-motion`, `lenis` (smooth scrolling).
- **Icons:** `lucide-react`.

---

## Hướng dẫn cài đặt

Để clone và chạy đồ án trên máy tính cá nhân, yêu cầu đã cài đặt **Node.js**:

```bash
# 1. Clone repository về máy
git clone https://github.com/MinhThang1009/Do-Hoa-May-Tinh-Group-2.git

# 2. Di chuyển vào thư mục threejs
cd Do-Hoa-May-Tinh-Group-2/threejs

# 3. Cài đặt các thư viện phụ thuộc (dependencies)
npm install

# 4. Khởi chạy server development
npm run dev

# 5. Truy cập tại địa chỉ được cấp (thường là http://localhost:5173)
```

**Lệnh Build để deploy lên Production:**
```bash
npm run build
```

---

## Cấu trúc thư mục cốt lõi

```text
threejs/
├── public/                 # Chứa assets tĩnh: mô hình 3D (.glb), file audio.
├── src/                    
│   ├── components/         # Các UI component (MoleculeViewer, FloatingMenu, ThemeToggle...)
│   ├── pages/              # Trang nội dung các chương Hóa học
│   ├── App.tsx             # Setup React Router, Theme Logic, Idle Detection
│   └── index.css           # Cấu hình Global variables và Tailwind class
├── index.html              # HTML DOM entry
└── package.json            # Cấu hình node modules
```

---

## Thành viên
_Bài Tập Lớn chuyên ngành Đồ Họa Máy Tính - Nhóm 2._

Đóng góp của nhóm bao gồm:
- Kịch bản tương tác và thiết kế nội dung (Scrollytelling).
- Xuất dữ liệu mô hình GLTF 3D.
- Thiết kế UI Layout và Component logic.
- Thiết lập Rendering WebGL và tối ưu hóa hiệu năng.

Cảm ơn thầy cô và các bạn đã theo dõi dự án!
