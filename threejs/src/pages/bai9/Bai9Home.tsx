import { Link } from "react-router-dom";
import { Atom, BookOpen, FlaskConical, Gauge, TestTubes } from "lucide-react";
import { AnimatedAtom3D, AnimatedBeaker, AnimatedFlask } from "../../components/AnimatedIcons";

const chapters = [
  {
    title: "Phần 1: Khái niệm bazơ",
    path: "/bai-9/phan-1",
    description: "Quan sát mô hình NaOH, Ba(OH)2 và FeOH để nhận ra nhóm hydroxide -OH trong bazơ.",
    icon: <AnimatedAtom3D color="#22c55e" />,
    accentColor: "rgba(34, 197, 94, 0.9)",
    borderColor: "rgba(34, 197, 94, 0.24)",
  },
  {
    title: "Phần 2: Tính chất hóa học",
    path: "/bai-9/phan-2",
    description: "Theo dõi thí nghiệm NaOH làm quỳ tím chuyển xanh và NaOH trung hòa HCl.",
    icon: <AnimatedFlask color="#38bdf8" />,
    accentColor: "rgba(56, 189, 248, 0.9)",
    borderColor: "rgba(56, 189, 248, 0.24)",
  },
  {
    title: "Phần 3: Thang pH",
    path: "/bai-9/phan-3",
    description: "Dùng thang pH 1-14 để phân biệt môi trường acid, trung tính và kiềm.",
    icon: <AnimatedBeaker color="#f59e0b" />,
    accentColor: "rgba(245, 158, 11, 0.9)",
    borderColor: "rgba(245, 158, 11, 0.24)",
  },
];

const lessonGoals = [
  { icon: <Atom className="w-4 h-4" />, text: "Bazơ tan trong nước tạo ion OH-" },
  { icon: <TestTubes className="w-4 h-4" />, text: "NaOH làm quỳ tím chuyển xanh" },
  { icon: <FlaskConical className="w-4 h-4" />, text: "NaOH + HCl tạo muối và nước" },
  { icon: <Gauge className="w-4 h-4" />, text: "pH > 7 biểu thị môi trường kiềm" },
];

export function Bai9Home() {
  return (
    <div className="min-h-screen page-enter">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 relative">
          <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full mb-5">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[rgba(34,197,94,0.14)] to-[rgba(56,189,248,0.10)] border border-[rgba(34,197,94,0.25)]" />
            <div className="absolute inset-0 rounded-full ring-pulse" />
            <BookOpen className="relative w-10 h-10 text-emerald-400 chem-icon-glow" />
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-5 gradient-text leading-tight">
            Bài 9: Bazơ. Thang pH
          </h1>

          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in-up stagger-3">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-[rgba(34,197,94,0.25)] bg-gradient-to-r from-[rgba(34,197,94,0.06)] to-[rgba(56,189,248,0.05)] shadow-[0_0_15px_rgba(34,197,94,0.10)]">
              <p className="text-sm border-r border-slate-300 dark:border-white/10 pr-3 mr-1 font-medium text-[var(--muted)]">
                Nhóm 2
              </p>
              <p className="text-sm md:text-base text-[var(--text)] font-medium tracking-wide">
                Khoa học tự nhiên lớp 8 <span className="text-emerald-400 font-bold mx-1">-</span> Chương II: Một số hợp chất thông dụng
              </p>
            </div>
          </div>

          <p className="max-w-3xl mx-auto text-lg text-[var(--muted)] leading-relaxed">
            Bài học tập trung vào khái niệm bazơ, tính chất của dung dịch NaOH và cách đọc thang pH
            để đánh giá độ acid - bazơ của dung dịch.
          </p>

          <div className="absolute top-0 right-1/4 hidden md:block w-32 h-32 opacity-25 pointer-events-none mix-blend-screen" style={{ animation: "floatY 6s ease-in-out infinite" }}>
            <AnimatedAtom3D color="#22c55e" />
          </div>
          <div className="absolute top-24 left-[14%] hidden md:block w-24 h-24 opacity-20 pointer-events-none mix-blend-screen" style={{ animation: "floatY 8s ease-in-out infinite reverse" }}>
            <AnimatedBeaker color="#38bdf8" />
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {lessonGoals.map((goal, index) => (
            <div
              key={goal.text}
              className={`glass-panel rounded-2xl px-4 py-4 flex items-center gap-3 animate-fade-in-up stagger-${index + 1}`}
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[rgba(34,197,94,0.10)] border border-[rgba(34,197,94,0.22)] text-emerald-400">
                {goal.icon}
              </div>
              <p className="text-sm font-semibold text-[var(--text)] leading-snug">{goal.text}</p>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-7">
          {chapters.map((chapter, index) => (
            <Link
              key={chapter.path}
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
                  }}
                >
                  {chapter.icon}
                </div>

                <span className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: chapter.accentColor }}>
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
