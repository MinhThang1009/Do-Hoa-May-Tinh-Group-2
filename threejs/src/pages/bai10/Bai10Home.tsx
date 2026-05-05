import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";
import { AnimatedOxideIcon, AnimatedBeaker, AnimatedFlask } from "../../components/AnimatedIcons";

const chapters = [
  {
    title: "Phần 1: Khái niệm Oxide",
    path: "/bai-10/khai-niem",
    description: "Tìm hiểu định nghĩa, phân loại và quy tắc gọi tên của các Oxide.",
    icon: <AnimatedOxideIcon color="#06b6d4" />,
    gradient: "from-cyan-400/20 to-blue-500/20",
    accentColor: "rgba(6, 182, 212, 0.85)",
    borderColor: "rgba(6, 182, 212, 0.22)",
  },
  {
    title: "Phần 2: Tính chất hóa học",
    path: "/bai-10/tinh-chat",
    description: "Nghiên cứu tính chất hóa học của Oxide acid, Oxide base, lưỡng tính và trung tính.",
    icon: <AnimatedBeaker color="#8b5cf6" />,
    gradient: "from-purple-400/20 to-pink-500/20",
    accentColor: "rgba(139, 92, 246, 0.85)",
    borderColor: "rgba(139, 92, 246, 0.22)",
  },
  {
    title: "Phần 3: Một số oxide thông dụng",
    path: "/bai-10/thong-dung",
    description: "Khám phá chi tiết và mô hình phân tử 3D tương tác của CaO, SO₂ và CO₂.",
    icon: <AnimatedFlask color="#10b981" />,
    gradient: "from-emerald-400/20 to-teal-500/20",
    accentColor: "rgba(16, 185, 129, 0.85)",
    borderColor: "rgba(16, 185, 129, 0.22)",
  }
];

export function Bai10Home() {
  return (
    <div className="min-h-screen page-enter">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-20 relative">
          <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full mb-5">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[rgba(249,115,22,0.15)] to-[rgba(139,92,246,0.10)] border border-[rgba(249,115,22,0.25)]" />
            <div className="absolute inset-0 rounded-full ring-pulse" style={{ borderColor: 'rgba(249,115,22,0.5)' }} />
            <BookOpen className="relative w-10 h-10 text-[#f97316] chem-icon-glow" />
          </div>

          <h1 className="text-6xl font-extrabold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-400 leading-tight">
            Bài 10: Oxide
          </h1>
          <div className="flex flex-wrap justify-center gap-4 mb-20 animate-fade-in-up stagger-3">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[rgba(249,115,22,0.25)] bg-gradient-to-r from-[rgba(249,115,22,0.05)] to-[rgba(245,158,11,0.05)] shadow-[0_0_15px_rgba(249,115,22,0.1)] mb-2 group">
              <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-[#f97316] animate-pulse" />
              <p className="text-sm border-r border-slate-300 dark:border-white/10 pr-3 mr-1 font-medium text-[var(--muted)]">Nhóm 2</p>
              <p className="text-sm md:text-base text-[var(--text)] font-medium tracking-wide">
                Khoa học tự nhiên lớp 8 <span className="text-[#f97316] font-bold mx-1">&mdash;</span> Chương II: Một số hợp chất thông dụng
              </p>
              <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-[#f97316] animate-pulse" />
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="px-3 py-1.5 rounded-full text-xs font-semibold border border-[rgba(249,115,22,0.20)] bg-[rgba(249,115,22,0.06)] text-[#f97316]">
              ✨ Interactive Design
            </span>
            <span className="px-3 py-1.5 rounded-full text-xs font-semibold border border-[rgba(6,182,212,0.20)] bg-[rgba(6,182,212,0.06)] text-[#06b6d4]">
              ⚛ Tương tác
            </span>
            <span className="px-3 py-1.5 rounded-full text-xs font-semibold border border-[rgba(139,92,246,0.20)] bg-[rgba(139,92,246,0.06)] text-[#8b5cf6]">
              🧪 Thí nghiệm ảo
            </span>
          </div>

          <div className="absolute top-0 right-1/4 hidden md:block w-32 h-32 opacity-30 pointer-events-none mix-blend-screen" style={{ animation: "floatY 6s ease-in-out infinite" }}>
            <AnimatedOxideIcon color="#f97316" />
          </div>
          <div className="absolute top-20 left-[15%] hidden md:block w-24 h-24 opacity-20 pointer-events-none mix-blend-screen" style={{ animation: "floatY 8s ease-in-out infinite reverse" }}>
            <AnimatedOxideIcon color="#06b6d4" />
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-7">
          {chapters.map((chapter, index) => (
            <Link
              key={index}
              to={chapter.path}
              className={`group rounded-2xl transition-all duration-400 p-7 glass-panel card-hover-lift chem-shimmer-border animated-border-card animate-fade-in-up stagger-${index + 1}`}
              style={{ borderColor: chapter.borderColor }}
            >
              <div className="flex flex-col h-full">
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

                <span
                  className="text-xs font-bold tracking-widest uppercase mb-2"
                  style={{ color: chapter.accentColor }}
                >
                  Phần {index + 1}
                </span>

                <h2 className="text-xl font-bold text-[var(--text)] mb-3 transition-colors group-hover:text-[var(--accent)]">
                  {chapter.title.split(": ")[1]}
                </h2>

                <p className="text-[var(--muted)] text-sm flex-grow leading-relaxed">
                  {chapter.description}
                </p>

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
      </div>
    </div>
  );
}
