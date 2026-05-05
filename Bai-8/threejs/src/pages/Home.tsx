import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";
import { AnimatedAtom3D, AnimatedFlask, AnimatedBeaker } from "../components/AnimatedIcons";

const chapters = [
  {
    title: "Phần 1: Khái niệm Acid",
    path: "/phan-1",
    description: "Tìm hiểu khái niệm acid, gốc acid và nhận biết qua công thức hoá học của HCl, HNO₃, H₂SO₄.",
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
    description: "Tìm hiểu tính chất và ứng dụng thực tế của H₂SO₄, HCl và CH₃COOH trong đời sống và công nghiệp.",
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

        <div className="text-center mb-20 relative">
          <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full mb-5">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[rgba(var(--accent-rgb),0.15)] to-[rgba(var(--accent-purple-rgb),0.10)] border border-[rgba(var(--accent-rgb),0.25)]" />
            <div className="absolute inset-0 rounded-full ring-pulse" />
            <BookOpen className="relative w-10 h-10 text-[var(--accent)] chem-icon-glow" />
          </div>

          <h1 className="text-6xl font-extrabold mb-5 gradient-text leading-tight">
            Bài 8: Acid
          </h1>
          <div className="flex flex-wrap justify-center gap-4 mb-20 animate-fade-in-up stagger-3">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[rgba(var(--accent-purple-rgb),0.25)] bg-gradient-to-r from-[rgba(var(--accent-purple-rgb),0.05)] to-[rgba(var(--accent-rgb),0.05)] shadow-[0_0_15px_rgba(var(--accent-purple-rgb),0.1)] mb-2 group">
              <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-[var(--accent-purple)] animate-pulse" />
              <p className="text-sm border-r border-slate-300 dark:border-white/10 pr-3 mr-1 font-medium text-[var(--muted)]">Nhóm 2</p>
              <p className="text-sm md:text-base text-[var(--text)] font-medium tracking-wide">
                Khoa học tự nhiên lớp 8 <span className="text-[var(--accent)] font-bold mx-1">&mdash;</span> Chương II: Một số hợp chất thông dụng
              </p>
              <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-[var(--accent-purple)] animate-pulse" />
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="px-3 py-1.5 rounded-full text-xs font-semibold border border-[rgba(var(--accent-rgb),0.20)] bg-[rgba(var(--accent-rgb),0.06)] text-[var(--accent)]">
              ✨ Thiết kế tương tác
            </span>
            <span className="px-3 py-1.5 rounded-full text-xs font-semibold border border-[rgba(167,139,250,0.20)] bg-[rgba(167,139,250,0.06)] text-[var(--accent-purple)]">
              ⚛ Mô hình phân tử 3D
            </span>
            <span className="px-3 py-1.5 rounded-full text-xs font-semibold border border-[rgba(94,234,212,0.20)] bg-[rgba(94,234,212,0.06)] text-[var(--accent-2)]">
              🧪 Thí nghiệm ảo
            </span>
          </div>

          <div className="absolute top-0 right-1/4 hidden md:block w-32 h-32 opacity-30 pointer-events-none mix-blend-screen" style={{ animation: "floatY 6s ease-in-out infinite" }}>
            <AnimatedAtom3D color="#a78bfa" />
          </div>
          <div className="absolute top-20 left-[15%] hidden md:block w-24 h-24 opacity-20 pointer-events-none mix-blend-screen" style={{ animation: "floatY 8s ease-in-out infinite reverse" }}>
            <AnimatedAtom3D color="#5eead4" />
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
              <div className="flex flex-col h-full items-center text-center">
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

        <div className="max-w-md mx-auto mt-20 animate-fade-in-up stagger-5 relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--accent)] via-[var(--accent-purple)] to-[var(--accent-2)] rounded-2xl opacity-30 group-hover:opacity-60 blur-md transition duration-1000 group-hover:duration-200 animate-gradient-slow" />

          <div className="relative rounded-2xl glass-panel py-5 px-8 flex flex-col items-center justify-center overflow-hidden chem-shimmer-border animated-border-card">

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.15)] to-transparent -translate-x-[150%] skew-x-[-20deg] group-hover:animate-[shimmer_2s_infinite_ease-in-out]" />

            <h3 className="text-2xl font-black tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] via-[var(--accent-purple)] to-[var(--accent-2)] animate-[gradientShift_4s_ease-in-out_infinite] bg-[length:300%_300%] mb-1.5 dark:drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Đồ họa máy tính
            </h3>

            <div className="flex items-center gap-4 text-[var(--muted)]">
              <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[var(--accent-purple)] opacity-60"></span>

              <span className="text-lg font-bold tracking-widest text-[var(--text)] relative">
                NHÓM 2
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[var(--accent-purple)] opacity-20 blur-xl pointer-events-none rounded-full" />
              </span>

              <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[var(--accent-purple)] opacity-60"></span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
