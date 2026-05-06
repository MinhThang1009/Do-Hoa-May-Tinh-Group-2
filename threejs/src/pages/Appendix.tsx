import { Link } from "react-router-dom";
import { ArrowRight, FlaskConical, Gamepad2, ListChecks, Shapes, Timer } from "lucide-react";
import { AnimatedAtom3D, AnimatedBeaker, AnimatedFlask } from "../components/AnimatedIcons";

const lessons = [
  {
    number: "Bài 8",
    title: "Acid",
    description: "Khái niệm acid, tính chất hóa học và một số acid thông dụng.",
    path: "/bai-8",
    color: "#ef4444",
    rgb: "239, 68, 68",
    icon: <AnimatedAtom3D color="#ef4444" />,
    action: "Mở bài 8",
  },
  {
    number: "Bài 9",
    title: "Base. Thang pH",
    description: "Base, NaOH với quỳ tím, phản ứng trung hòa NaOH + HCl và thang pH.",
    path: "/bai-9",
    color: "#22c55e",
    rgb: "34, 197, 94",
    icon: <AnimatedFlask color="#22c55e" />,
    action: "Mở bài 9",
  },
  {
    number: "Bài 10",
    title: "Oxide",
    description: "Phụ lục đã có mục chọn; nội dung chi tiết sẽ được bổ sung khi có bài học.",
    path: "/bai-10",
    color: "#38bdf8",
    rgb: "56, 189, 248",
    icon: <AnimatedBeaker color="#38bdf8" />,
    action: "Mở bài 10",
  },
  {
    number: "Bài 11",
    title: "Muối",
    description: "Khái niệm, tính tan, tính chất hóa học, điều chế muối và mối quan hệ của các hợp chất vô cơ.",
    path: "/bai-11",
    color: "#f59e0b",
    rgb: "245, 158, 11",
    icon: <AnimatedAtom3D color="#f59e0b" />,
    action: "Mở bài 11",
  },
  {
    number: "Bài 12",
    title: "Phân bón hóa học",
    description: "Vai trò của phân bón đối với cây trồng, các loại phân bón thông thường và cách sử dụng hiệu quả.",
    path: "/bai-12",
    color: "#a855f7",
    rgb: "168, 85, 247",
    icon: <AnimatedFlask color="#a855f7" />,
    action: "Mở bài 12",
  },
];

export function Appendix() {
  return (
    <div className="min-h-screen page-enter">
      <div className="container mx-auto px-4 py-14">
        <header className="text-center mb-14 relative">
          <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full mb-5">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[rgba(56,189,248,0.14)] to-[rgba(34,197,94,0.10)] border border-[rgba(56,189,248,0.25)]" />
            <div className="absolute inset-0 rounded-full ring-pulse" />
            <ListChecks className="relative w-10 h-10 text-sky-400 chem-icon-glow" />
          </div>

          <p className="text-xs font-bold uppercase tracking-[0.28em] text-sky-400 mb-3">
            Phụ lục
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-5 gradient-text leading-tight">
            Chương 2: Một số hợp chất thông dụng
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-[var(--muted)] leading-relaxed">
            Chọn bài cần học. Mỗi bài mở ra một màn riêng để không lẫn nội dung giữa các bài.
          </p>
        </header>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-7">
          {lessons.map((lesson, index) => (
            <Link
              key={lesson.path}
              to={lesson.path}
              className={`group rounded-2xl overflow-hidden glass-panel card-hover-lift chem-shimmer-border animated-border-card animate-fade-in-up stagger-${index + 1}`}
              style={{ borderColor: `rgba(${lesson.rgb}, 0.24)` }}
            >
              <div
                className="p-7 h-full flex flex-col sm:flex-row gap-6"
                style={{ background: `linear-gradient(135deg, rgba(${lesson.rgb}, 0.07), transparent 62%)` }}
              >
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 border"
                  style={{
                    borderColor: `rgba(${lesson.rgb}, 0.24)`,
                    background: `rgba(${lesson.rgb}, 0.08)`,
                  }}
                >
                  <div className="w-14 h-14">{lesson.icon}</div>
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: lesson.color }}>
                    {lesson.number}
                  </p>
                  <h2 className="text-3xl font-extrabold text-[var(--text)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                    {lesson.title}
                  </h2>
                  <p className="text-sm text-[var(--muted)] leading-relaxed mb-5">
                    {lesson.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-bold" style={{ color: lesson.color }}>
                    {lesson.action}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="max-w-6xl mx-auto mt-8 grid lg:grid-cols-3 gap-7">
          <Link
            to="/game"
            className="group block rounded-2xl overflow-hidden glass-panel card-hover-lift chem-shimmer-border animated-border-card animate-fade-in-up stagger-5"
            style={{ borderColor: "rgba(168, 85, 247, 0.28)" }}
          >
            <div className="p-7 h-full flex flex-col sm:flex-row sm:items-center gap-6 bg-gradient-to-r from-purple-500/10 via-sky-500/6 to-amber-500/10">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 border border-purple-400/30 bg-purple-500/10">
                <Gamepad2 className="w-11 h-11 text-purple-300 chem-icon-glow" />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold uppercase tracking-widest text-purple-300 mb-2">
                  Game tổng ôn
                </p>
                <h2 className="text-3xl font-extrabold text-[var(--text)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                  Kéo-thả phân loại chất
                </h2>
                <p className="text-sm text-[var(--muted)] leading-relaxed mb-5">
                  Phân loại công thức vào nhóm Acid, Base, Oxide và Muối để ôn lại Chương 2.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-purple-300">
                  Chơi ngay
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>

          <Link
            to="/reaction-game"
            className="group block rounded-2xl overflow-hidden glass-panel card-hover-lift chem-shimmer-border animated-border-card animate-fade-in-up stagger-5"
            style={{ borderColor: "rgba(34, 197, 94, 0.28)" }}
          >
            <div className="p-7 h-full flex flex-col sm:flex-row sm:items-center gap-6 bg-gradient-to-r from-emerald-500/10 via-sky-500/6 to-red-500/10">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 border border-emerald-400/30 bg-emerald-500/10">
                <FlaskConical className="w-11 h-11 text-emerald-300 chem-icon-glow" />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold uppercase tracking-widest text-emerald-300 mb-2">
                  Game phản ứng
                </p>
                <h2 className="text-3xl font-extrabold text-[var(--text)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                  Ghép sản phẩm phản ứng
                </h2>
                <p className="text-sm text-[var(--muted)] leading-relaxed mb-5">
                  Chọn sản phẩm hoặc hiện tượng đúng, sau đó xem video và mô hình 3D của phản ứng.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-emerald-300">
                  Chơi ngay
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>

          <Link
            to="/quick-quiz"
            className="group block rounded-2xl overflow-hidden glass-panel card-hover-lift chem-shimmer-border animated-border-card animate-fade-in-up stagger-5"
            style={{ borderColor: "rgba(245, 158, 11, 0.28)" }}
          >
            <div className="p-7 h-full flex flex-col sm:flex-row lg:flex-col xl:flex-row sm:items-center gap-6 bg-gradient-to-r from-amber-500/10 via-sky-500/6 to-purple-500/10">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 border border-amber-400/30 bg-amber-500/10">
                <Timer className="w-11 h-11 text-amber-300 chem-icon-glow" />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold uppercase tracking-widest text-amber-300 mb-2">
                  Game tốc độ
                </p>
                <h2 className="text-3xl font-extrabold text-[var(--text)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                  Đố nhanh 60 giây
                </h2>
                <p className="text-sm text-[var(--muted)] leading-relaxed mb-5">
                  Trả lời trắc nghiệm thật nhanh: đúng cộng điểm, sai bị trừ thời gian.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-amber-300">
                  Chơi ngay
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="max-w-md mx-auto mt-16 animate-fade-in-up stagger-5 relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--accent)] via-[var(--accent-purple)] to-[var(--accent-2)] rounded-2xl opacity-30 group-hover:opacity-60 blur-md transition duration-1000 group-hover:duration-200 animate-gradient-slow" />
          <div className="relative rounded-2xl glass-panel py-5 px-8 flex flex-col items-center justify-center overflow-hidden chem-shimmer-border animated-border-card">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.15)] to-transparent -translate-x-[150%] skew-x-[-20deg] group-hover:animate-[shimmer_2s_infinite_ease-in-out]" />
            <h3 className="text-2xl font-black tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] via-[var(--accent-purple)] to-[var(--accent-2)] animate-[gradientShift_4s_ease-in-out_infinite] bg-[length:300%_300%] mb-1.5 dark:drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Đồ họa máy tính
            </h3>
            <div className="flex items-center gap-4 text-[var(--muted)]">
              <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[var(--accent-purple)] opacity-60" />
              <span className="text-lg font-bold tracking-widest text-[var(--text)] relative">
                NHÓM 2
              </span>
              <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[var(--accent-purple)] opacity-60" />
            </div>
          </div>
        </div>

        <div className="absolute top-24 right-[12%] hidden lg:block w-28 h-28 opacity-20 pointer-events-none mix-blend-screen" style={{ animation: "floatY 7s ease-in-out infinite" }}>
          <Shapes className="w-full h-full text-sky-300" />
        </div>
      </div>
    </div>
  );
}
