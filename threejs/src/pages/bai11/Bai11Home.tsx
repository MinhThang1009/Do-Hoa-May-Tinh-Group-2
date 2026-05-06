import { Link } from "react-router-dom";
import { BookOpen, Droplets, FlaskConical, Layers, List, Repeat } from "lucide-react";
import { AnimatedAtom3D, AnimatedFlask } from "../../components/AnimatedIcons";

const chapters = [
  {
    title: "Phần 1: Khái niệm",
    path: "/bai-11/khai-niem",
    description: "Định nghĩa muối, phản ứng tạo thành và danh pháp của gốc acid.",
    icon: <BookOpen className="w-6 h-6" />,
    color: "#06b6d4",
    rgb: "6, 182, 212"
  },
  {
    title: "Phần 2: Tính tan",
    path: "/bai-11/tinh-tan",
    description: "Khám phá bảng tính tan trong nước của các loại muối.",
    icon: <Droplets className="w-6 h-6" />,
    color: "#3b82f6",
    rgb: "59, 130, 246"
  },
  {
    title: "Phần 3: Tính chất hoá học",
    path: "/bai-11/tinh-chat",
    description: "Tìm hiểu 4 tính chất hóa học đặc trưng của muối thông qua thí nghiệm.",
    icon: <FlaskConical className="w-6 h-6" />,
    color: "#8b5cf6",
    rgb: "139, 92, 246"
  },
  {
    title: "Phần 4: Điều chế",
    path: "/bai-11/dieu-che",
    description: "5 phương pháp thông dụng để điều chế muối trong phòng thí nghiệm và công nghiệp.",
    icon: <Layers className="w-6 h-6" />,
    color: "#10b981",
    rgb: "16, 185, 129"
  },
  {
    title: "Phần 5: Mối quan hệ",
    path: "/bai-11/moi-quan-he",
    description: "Sơ đồ biểu diễn sự chuyển đổi qua lại giữa các hợp chất vô cơ.",
    icon: <Repeat className="w-6 h-6" />,
    color: "#f59e0b",
    rgb: "245, 158, 11"
  }
];

export function Bai11Home() {
  return (
    <div className="min-h-screen page-enter">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-20 relative">
          <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full mb-5">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[rgba(245,158,11,0.15)] to-[rgba(234,88,12,0.10)] border border-[rgba(245,158,11,0.25)]" />
            <div className="absolute inset-0 rounded-full ring-pulse" style={{ borderColor: 'rgba(245,158,11,0.5)' }} />
            <List className="relative w-10 h-10 text-[#f59e0b] chem-icon-glow" />
          </div>

          <h1 className="text-6xl font-extrabold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-400 leading-tight">
            Bài 11: Muối
          </h1>
          
          <div className="flex flex-wrap justify-center gap-4 mb-20 animate-fade-in-up stagger-3">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[rgba(245,158,11,0.25)] bg-gradient-to-r from-[rgba(245,158,11,0.05)] to-[rgba(234,88,12,0.05)] shadow-[0_0_15px_rgba(245,158,11,0.1)] mb-2 group">
              <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse" />
              <p className="text-sm border-r border-slate-300 dark:border-white/10 pr-3 mr-1 font-medium text-[var(--muted)]">Nhóm 2</p>
              <p className="text-sm md:text-base text-[var(--text)] font-medium tracking-wide">
                Khoa học tự nhiên lớp 8 <span className="text-[#f59e0b] font-bold mx-1">&mdash;</span> Chương II: Một số hợp chất thông dụng
              </p>
              <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse" />
            </div>
          </div>
          
          <div className="absolute top-0 right-1/4 hidden md:block w-32 h-32 opacity-30 pointer-events-none mix-blend-screen" style={{ animation: "floatY 6s ease-in-out infinite" }}>
            <AnimatedAtom3D color="#f59e0b" />
          </div>
          <div className="absolute top-20 left-[15%] hidden md:block w-24 h-24 opacity-20 pointer-events-none mix-blend-screen" style={{ animation: "floatY 8s ease-in-out infinite reverse" }}>
            <AnimatedFlask color="#ea580c" />
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-7 justify-center">
          {chapters.map((chapter, index) => (
            <Link
              key={index}
              to={chapter.path}
              className={`group rounded-2xl transition-all duration-400 p-7 glass-panel card-hover-lift chem-shimmer-border animated-border-card animate-fade-in-up stagger-${index + 1}`}
              style={{ borderColor: `rgba(${chapter.rgb}, 0.22)` }}
            >
              <div className="flex flex-col h-full">
                <div
                  className="flex items-center justify-center w-14 h-14 rounded-2xl mb-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  style={{
                    border: `1.5px solid rgba(${chapter.rgb}, 0.22)`,
                    background: `linear-gradient(135deg, rgba(${chapter.rgb}, 0.22), transparent)`,
                    color: chapter.color,
                    boxShadow: `0 0 0 0 rgba(${chapter.rgb}, 0.22)`,
                  }}
                >
                  {chapter.icon}
                </div>

                <span
                  className="text-xs font-bold tracking-widest uppercase mb-2"
                  style={{ color: chapter.color }}
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
                  style={{ color: chapter.color }}
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
