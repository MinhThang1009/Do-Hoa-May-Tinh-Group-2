import { Link } from "react-router-dom";
import { BookOpen, FlaskConical, Beaker } from "lucide-react";
import { AnimatedAtom3D, AnimatedFlask, AnimatedBeaker } from "../components/AnimatedIcons";

// Dữ liệu 3 phần (chapter) của bài học
const chapters = [
  {
    title: "Phần 1: Khái niệm Acid",
    path: "/phan-1",
    description: "Tìm hiểu định nghĩa, phân loại và cấu tạo phân tử của các Acid thông dụng.",
    icon: <AnimatedAtom3D color="#64d2ff" />,
    gradient: "from-cyan-400/20 to-blue-500/20",
    accentColor: "rgba(100, 210, 255, 0.85)",
    borderColor: "rgba(100, 210, 255, 0.22)",
  },
  {
    title: "Phần 2: Tính chất hóa học",
    path: "/phan-2",
    description: "Nghiên cứu các tính chất hóa học đặc trưng và phản ứng quan trọng của Acid.",
    icon: <AnimatedFlask color="#a78bfa" />,
    gradient: "from-purple-400/20 to-pink-500/20",
    accentColor: "rgba(167, 139, 250, 0.85)",
    borderColor: "rgba(167, 139, 250, 0.22)",
  },
  {
    title: "Phần 3: Một số Acid thông dụng",
    path: "/phan-3",
    description: "Tìm hiểu chi tiết về HCl, HNO₃ và H₂SO₄ cùng mô hình phân tử 3D tương tác.",
    icon: <AnimatedBeaker color="#5eead4" />,
    gradient: "from-emerald-400/20 to-teal-500/20",
    accentColor: "rgba(94, 234, 212, 0.85)",
    borderColor: "rgba(94, 234, 212, 0.22)",
  },
];

export function Home() {
  return (
    <div className="min-h-screen page-enter">
      <div className="container mx-auto px-4 py-16">

        {/* ---- Hero Section: Tiêu đề chính + icon trang trí ---- */}
        <div className="text-center mb-20 relative">
          {/* Icon chính với hiệu ứng glow + ring pulse */}
          <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full mb-8">
            {/* Vòng tròn nền gradient */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[rgba(100,210,255,0.15)] to-[rgba(167,139,250,0.10)] border border-[rgba(100,210,255,0.25)]" />
            {/* Vòng ring pulse animation */}
            <div className="absolute inset-0 rounded-full ring-pulse" />
            {/* Icon BookOpen */}
            <BookOpen className="relative w-11 h-11 text-[var(--accent)] chem-icon-glow" />
          </div>

          {/* Tiêu đề gradient chuyển động */}
          <h1 className="text-6xl font-extrabold mb-5 gradient-text leading-tight">
            Bài 8: Acid
          </h1>
          {/* Phụ đề với giao diện badge đẹp mắt */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[rgba(167,139,250,0.25)] bg-gradient-to-r from-[rgba(167,139,250,0.05)] to-[rgba(100,210,255,0.05)] shadow-[0_0_15px_rgba(167,139,250,0.1)] mb-2 group">
            <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[var(--accent-purple)] animate-pulse" />
            <p className="text-sm md:text-base text-[var(--text)] font-medium tracking-wide">
              Khoa học tự nhiên lớp 8 <span className="text-[var(--accent)] font-bold mx-1">&mdash;</span> Chương II: Một số hợp chất thông dụng
            </p>
          </div>
          {/* Tag badges */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="px-3 py-1.5 rounded-full text-xs font-semibold border border-[rgba(100,210,255,0.20)] bg-[rgba(100,210,255,0.06)] text-[var(--accent)]">
              ⚗ Mô hình 3D
            </span>
            <span className="px-3 py-1.5 rounded-full text-xs font-semibold border border-[rgba(167,139,250,0.20)] bg-[rgba(167,139,250,0.06)] text-[var(--accent-purple)]">
              ⚛ Tương tác
            </span>
            <span className="px-3 py-1.5 rounded-full text-xs font-semibold border border-[rgba(94,234,212,0.20)] bg-[rgba(94,234,212,0.06)] text-[var(--accent-2)]">
              🧪 Thí nghiệm ảo
            </span>
          </div>

          {/* Decorative orbit icon: xoay quỹ đạo động chân thực */}
          <div className="absolute top-0 right-1/4 hidden md:block w-32 h-32 opacity-30 pointer-events-none mix-blend-screen" style={{ animation: "floatY 6s ease-in-out infinite" }}>
            <AnimatedAtom3D color="#a78bfa" />
          </div>
          <div className="absolute top-20 left-[15%] hidden md:block w-24 h-24 opacity-20 pointer-events-none mix-blend-screen" style={{ animation: "floatY 8s ease-in-out infinite reverse" }}>
            <AnimatedAtom3D color="#5eead4" />
          </div>
        </div>

        {/* ---- Danh sách 3 phần (chapters) ---- */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-7">
          {chapters.map((chapter, index) => (
            <Link
              key={index}
              to={chapter.path}
              className={`group rounded-2xl transition-all duration-400 p-7 border bg-[var(--card)] backdrop-blur-sm card-hover-lift chem-shimmer-border animated-border-card animate-fade-in-up stagger-${index + 1}`}
              style={{ borderColor: chapter.borderColor }}
            >
              <div className="flex flex-col h-full">
                {/* Icon badge hình lục giác */}
                <div
                  className="flex items-center justify-center w-14 h-14 rounded-2xl mb-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  style={{
                    border: `1.5px solid ${chapter.borderColor}`,
                    background: `linear-gradient(135deg, ${chapter.borderColor}, transparent)`,
                    color: chapter.accentColor,
                    boxShadow: `0 0 0 0 ${chapter.borderColor}`,
                  }}
                >
                  {chapter.icon}
                </div>

                {/* Số thứ tự */}
                <span
                  className="text-xs font-bold tracking-widest uppercase mb-2"
                  style={{ color: chapter.accentColor }}
                >
                  Phần {index + 1}
                </span>

                {/* Tiêu đề chapter */}
                <h2 className="text-xl font-bold text-[var(--text)] mb-3 transition-colors group-hover:text-white">
                  {chapter.title.split(": ")[1]}
                </h2>

                {/* Mô tả ngắn */}
                <p className="text-[var(--muted)] text-sm flex-grow leading-relaxed">
                  {chapter.description}
                </p>

                {/* Link "Xem chi tiết" với hiệu ứng di chuyển */}
                <div
                  className="mt-5 text-sm font-bold group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-1.5"
                  style={{ color: chapter.accentColor }}
                >
                  Bắt đầu học
                  <span className="text-lg">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="max-w-md mx-auto mt-20 animate-fade-in-up stagger-5 relative group">
          {/* Lớp nền phát sáng khi hover */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--accent)] via-[var(--accent-purple)] to-[var(--accent-2)] rounded-2xl opacity-30 group-hover:opacity-60 blur-md transition duration-1000 group-hover:duration-200 animate-gradient-slow" />
          
          {/* Card chứa nội dung thực tế (Glassmorphism) */}
          <div className="relative rounded-2xl bg-[#0c1425] bg-opacity-80 backdrop-blur-xl border border-[rgba(255,255,255,0.08)] py-5 px-8 flex flex-col items-center justify-center overflow-hidden chem-shimmer-border animated-border-card">
            
            {/* Vệt sáng chạy ngang (Shimmer Effect) */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.15)] to-transparent -translate-x-[150%] skew-x-[-20deg] group-hover:animate-[shimmer_2s_infinite_ease-in-out]" />

            <h3 className="text-2xl font-black tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] via-[var(--accent-purple)] to-[var(--accent-2)] animate-[gradientShift_4s_ease-in-out_infinite] bg-[length:300%_300%] mb-1.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Đồ họa máy tính
            </h3>

            <div className="flex items-center gap-4 text-[var(--muted)]">
              {/* Dấu gạch dóng hàng */}
              <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[var(--accent-purple)] opacity-60"></span>
              
              <span className="text-lg font-bold tracking-widest text-[#e2e8f0] relative">
                NHÓM 2
                {/* Chấm tròn glow sau text Nhóm 2 */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[var(--accent-purple)] opacity-20 blur-xl pointer-events-none rounded-full" />
              </span>
              
              {/* Dấu gạch dóng hàng */}
              <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[var(--accent-purple)] opacity-60"></span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
