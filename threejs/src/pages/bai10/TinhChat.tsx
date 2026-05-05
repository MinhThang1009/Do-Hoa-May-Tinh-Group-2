import { Flame, Droplets, FlaskConical, Scale, ShieldAlert, Sparkles } from "lucide-react";
import { AnimatedBeaker } from "../../components/AnimatedIcons";
import { SplitTextTitle } from "../../components/SplitTextTitle";

const properties = [
  {
    title: "1. Oxide acid",
    icon: <Droplets className="w-6 h-6" />,
    accentRgb: "139, 92, 246", // Violet
    content: (
      <>
        <p className="text-[var(--muted)] leading-relaxed mb-4">
          Nhiều oxide acid tác dụng với <strong className="text-[var(--text)]">nước</strong> tạo thành dung dịch acid.
          Ngoài ra, oxide acid tác dụng với <strong className="text-[var(--text)]">base</strong> tạo thành{" "}
          <strong className="text-[var(--text)]">muối</strong> và{" "}
          <strong className="text-[var(--text)]">nước</strong>.
        </p>
        <div className="flex flex-col items-start gap-2">
          <div className="rounded-xl px-4 py-3 border border-[rgba(139,92,246,0.20)] bg-[rgba(139,92,246,0.04)]">
            <p className="chem-equation text-base font-bold text-[var(--text)]">
              CO₂ + Ca(OH)₂ → CaCO₃<span className="text-violet-400">↓</span> + H₂O
            </p>
          </div>
          <div className="rounded-xl px-4 py-3 border border-[rgba(139,92,246,0.15)] bg-[rgba(139,92,246,0.03)]">
            <p className="chem-equation text-base font-bold text-[var(--text)]">
              SO₂ + 2NaOH → Na₂SO₃ + H₂O
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    title: "2. Oxide base",
    icon: <FlaskConical className="w-6 h-6" />,
    accentRgb: "16, 185, 129", // Emerald
    content: (
      <>
        <p className="text-[var(--muted)] leading-relaxed mb-4">
          Một số oxide base tác dụng với <strong className="text-[var(--text)]">nước</strong> tạo thành dung dịch base.
          Hầu hết oxide base tác dụng với <strong className="text-[var(--text)]">acid</strong> tạo thành{" "}
          <strong className="text-[var(--text)]">muối</strong> và{" "}
          <strong className="text-[var(--text)]">nước</strong>.
        </p>
        <div className="flex flex-col items-start gap-2">
          <div className="rounded-xl px-4 py-3 border border-[rgba(16,185,129,0.20)] bg-[rgba(16,185,129,0.04)]">
            <p className="chem-equation text-base font-bold text-[var(--text)]">
              Fe₂O₃ + 6HCl → 2FeCl₃ + 3H₂O
            </p>
          </div>
          <div className="rounded-xl px-4 py-3 border border-[rgba(16,185,129,0.15)] bg-[rgba(16,185,129,0.03)]">
            <p className="chem-equation text-base font-bold text-[var(--text)]">
              CaO + H₂SO₄ → CaSO₄ + H₂O
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    title: "3. Oxide lưỡng tính",
    icon: <Scale className="w-6 h-6" />,
    accentRgb: "245, 158, 11", // Amber
    content: (
      <>
        <p className="text-[var(--muted)] leading-relaxed mb-4">
          Là những oxide có thể tác dụng được với cả <strong className="text-[var(--text)]">dung dịch acid</strong> và{" "}
          <strong className="text-[var(--text)]">dung dịch base</strong> tạo thành muối và nước.
        </p>
        <div className="flex flex-col items-start gap-2">
          <div className="rounded-xl px-4 py-3 border border-[rgba(245,158,11,0.20)] bg-[rgba(245,158,11,0.04)] inline-block w-auto">
             <span className="text-sm text-[var(--muted)] block mb-1">Ví dụ:</span>
             <p className="chem-equation text-base font-bold text-[var(--text)]">
               Al₂O₃, ZnO...
             </p>
          </div>
        </div>
      </>
    ),
  },
  {
    title: "4. Oxide trung tính",
    icon: <Sparkles className="w-6 h-6" />,
    accentRgb: "100, 116, 139", // Slate
    content: (
      <>
        <p className="text-[var(--muted)] leading-relaxed mb-4">
          Còn được gọi là <strong className="text-[var(--text)]">oxide không tạo muối</strong>. 
          Đây là những oxide <strong className="text-[#ef4444]">không tác dụng</strong> với acid, base, nước.
        </p>
        <div className="flex flex-col items-start gap-2">
          <div className="rounded-xl px-4 py-3 border border-[rgba(100,116,139,0.20)] bg-[rgba(100,116,139,0.04)] inline-block w-auto">
             <span className="text-sm text-[var(--muted)] block mb-1">Ví dụ:</span>
             <p className="chem-equation text-base font-bold text-[var(--text)]">
               CO, NO...
             </p>
          </div>
        </div>
      </>
    ),
  },
];

export function TinhChat() {
  return (
    <div className="min-h-screen page-enter relative overflow-hidden pb-24">
      <div className="container mx-auto px-4 py-12 relative z-10">

        <div className="text-center mb-14">
          <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full mb-5">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[rgba(139,92,246,0.12)] to-[rgba(16,185,129,0.08)] border border-[rgba(139,92,246,0.25)]" />
            <div className="absolute inset-0 rounded-full ring-pulse" style={{ borderColor: 'rgba(139,92,246,0.5)' }} />
            <div className="w-14 h-14 relative z-10 drop-shadow-lg chem-icon-glow">
              <AnimatedBeaker color="#8b5cf6" />
            </div>
          </div>
          <SplitTextTitle text="Phần 2: Tính chất hóa học" className="text-5xl font-extrabold mb-3 text-[var(--text)]" highlightWords={["hóa", "học"]} highlightColor="#8b5cf6" />
          <p className="max-w-3xl mx-auto mt-4 text-lg text-[var(--muted)] leading-relaxed">
            Dựa vào tính chất hóa học, oxide được chia thành 4 loại chính. Nắm vững phân loại này giúp hiểu rõ
            cách oxide phản ứng với các chất khác nhau.
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          {properties.map((prop, index) => (
            <div
              key={index}
              className={`group rounded-2xl overflow-hidden glass-panel card-hover-lift chem-shimmer-border animated-border-card animate-fade-in-up stagger-${index + 1}`}
              style={{ borderColor: `rgba(${prop.accentRgb}, 0.18)` }}
            >
              <div
                className="flex items-center gap-4 px-7 py-5 border-b"
                style={{
                  borderBottomColor: `rgba(${prop.accentRgb}, 0.12)`,
                  background: `linear-gradient(135deg, rgba(${prop.accentRgb}, 0.05) 0%, transparent 60%)`,
                }}
              >
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-xl transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `rgba(${prop.accentRgb}, 0.08)`,
                    border: `1px solid rgba(${prop.accentRgb}, 0.18)`,
                    color: `rgba(${prop.accentRgb}, 0.9)`,
                  }}
                >
                  {prop.icon}
                </div>
                <h2 className="text-xl font-bold text-[var(--text)] flex-1">{prop.title}</h2>

              </div>
              <div className="px-7 py-6">{prop.content}</div>
            </div>
          ))}
        </div>

        <div
          className="max-w-4xl mx-auto mt-14 rounded-2xl p-8 glass-panel card-hover-lift animate-fade-in-up chem-shimmer-border animated-border-card overflow-hidden"
          style={{ background: "rgba(6, 182, 212, 0.05)", borderColor: "rgba(6, 182, 212, 0.2)" }}
        >
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[rgba(6,182,212,0.10)] border border-[rgba(6,182,212,0.20)] shrink-0">
              <ShieldAlert className="w-6 h-6 text-[#06b6d4]" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-[var(--text)] mb-3">📝 Tổng kết</h3>
              <p className="text-[var(--muted)] leading-relaxed">
                Tên gọi và tính chất hóa học của oxide phụ thuộc trực tiếp vào nguyên tố kết hợp với oxygen.
                Sự phân loại oxide thành 4 nhóm là cơ sở quan trọng để nghiên cứu các phản ứng hóa học vô cơ.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
