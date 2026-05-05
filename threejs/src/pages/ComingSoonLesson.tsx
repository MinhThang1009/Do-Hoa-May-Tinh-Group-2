import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Construction } from "lucide-react";
import { AnimatedBeaker } from "../components/AnimatedIcons";

type ComingSoonLessonProps = {
  lessonNumber: string;
  title: string;
  color: string;
};

export function ComingSoonLesson({ lessonNumber, title, color }: ComingSoonLessonProps) {
  return (
    <div className="min-h-screen page-enter">
      <div className="container mx-auto px-4 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm font-bold text-[var(--muted)] hover:text-[var(--text)] transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Về phụ lục
        </Link>

        <div className="max-w-3xl mx-auto text-center rounded-2xl p-8 md:p-12 glass-panel chem-shimmer-border animated-border-card">
          <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full mb-6">
            <div className="absolute inset-0 rounded-full border" style={{ borderColor: `${color}55`, background: `${color}18` }} />
            <div className="absolute inset-0 rounded-full ring-pulse" />
            <Construction className="relative w-10 h-10 chem-icon-glow" style={{ color }} />
          </div>

          <p className="text-xs font-bold uppercase tracking-[0.28em] mb-3" style={{ color }}>
            {lessonNumber}
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--text)] mb-5">
            {title}
          </h1>
          <p className="text-lg text-[var(--muted)] leading-relaxed mb-8">
            Mục này đã có trong phụ lục để chọn bài, nhưng nội dung chi tiết chưa được dựng.
            Khi có yêu cầu, có thể thêm mô hình 3D, thí nghiệm và phần lý thuyết giống Bài 9.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 text-left">
            <div className="rounded-2xl p-5 border border-[var(--border)] bg-[rgba(255,255,255,0.04)]">
              <BookOpen className="w-5 h-5 mb-3" style={{ color }} />
              <h2 className="text-base font-extrabold text-[var(--text)] mb-2">Đã tạo route riêng</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed">Có thể mở trực tiếp từ phụ lục hoặc bằng URL của bài.</p>
            </div>
            <div className="rounded-2xl p-5 border border-[var(--border)] bg-[rgba(255,255,255,0.04)]">
              <div className="w-6 h-6 mb-3">
                <AnimatedBeaker color={color} />
              </div>
              <h2 className="text-base font-extrabold text-[var(--text)] mb-2">Sẵn sàng mở rộng</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed">Có thể bổ sung nội dung theo cùng cấu trúc React/Three.js hiện có.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
