import { ArrowLeft, FlaskConical, TestTubes, Atom, Droplets, Flame, ShieldAlert, Zap, Scale } from "lucide-react";
import { AnimatedFlask } from "../components/AnimatedIcons";
import { SplitTextTitle } from "../components/SplitTextTitle";

const properties = [
  {
    title: "Acid làm đổi màu chất chỉ thị",
    icon: <Droplets className="w-6 h-6" />,
    accentRgb: "239, 68, 68",
    content: (
      <>
        <p className="text-[var(--muted)] leading-relaxed mb-4">
          Dung dịch acid làm đổi màu <strong className="text-[var(--text)]">quỳ tím</strong> thành{" "}
          <span className="font-bold" style={{ color: "#ef4444" }}>đỏ</span>.
          Dung dịch acid làm <strong className="text-[var(--text)]">phenolphtalein</strong> không đổi màu.
        </p>
        <div className="flex items-center gap-5 mt-2">
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-14 h-14 rounded-xl shadow-lg" style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)" }} />
            <span className="text-xs text-[var(--muted-2)] font-medium">Quỳ tím</span>
          </div>
          <div className="flex flex-col items-center">
            <Zap className="w-5 h-5 text-[var(--accent)] mb-1" />
            <span className="text-[var(--accent)] text-lg font-bold">→</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-14 h-14 rounded-xl shadow-lg" style={{ background: "linear-gradient(135deg, #dc2626, #f87171)" }} />
            <span className="text-xs text-[var(--muted-2)] font-medium">Chuyển đỏ</span>
          </div>
        </div>
      </>
    ),
  },
  {
    title: "Acid tác dụng với kim loại",
    icon: <Zap className="w-6 h-6" />,
    accentRgb: "59, 130, 246",
    content: (
      <>
        <p className="text-[var(--muted)] leading-relaxed mb-4">
          Acid tác dụng với nhiều kim loại (trước H trong dãy hoạt động) tạo{" "}
          <strong className="text-[var(--text)]">muối</strong> và giải phóng{" "}
          <strong className="text-[var(--text)]">H₂↑</strong>.
        </p>
        <div className="space-y-2">
          <div className="rounded-xl px-4 py-3 border border-[rgba(59,130,246,0.20)] bg-[rgba(59,130,246,0.04)]">
            <p className="chem-equation text-base font-bold text-[var(--text)]">
              Zn + 2HCl → ZnCl₂ + H₂<span className="text-blue-400">↑</span>
            </p>
          </div>
          <div className="rounded-xl px-4 py-3 border border-[rgba(59,130,246,0.15)] bg-[rgba(59,130,246,0.03)]">
            <p className="chem-equation text-base font-bold text-[var(--text)]">
              Fe + H₂SO₄(loãng) → FeSO₄ + H₂<span className="text-blue-400">↑</span>
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    title: "Acid tác dụng với base (Trung hòa)",
    icon: <Scale className="w-6 h-6" />,
    accentRgb: "16, 185, 129",
    content: (
      <>
        <p className="text-[var(--muted)] leading-relaxed mb-4">
          Acid + base → <strong className="text-[var(--text)]">muối</strong> +{" "}
          <strong className="text-[var(--text)]">nước</strong>. Đây là phản ứng{" "}
          <em className="text-[var(--accent-2)] font-semibold">trung hòa</em>.
        </p>
        <div className="space-y-2">
          <div className="rounded-xl px-4 py-3 border border-[rgba(16,185,129,0.20)] bg-[rgba(16,185,129,0.04)]">
            <p className="chem-equation text-base font-bold text-[var(--text)]">
              HCl + NaOH → NaCl + H₂O
            </p>
          </div>
          <div className="rounded-xl px-4 py-3 border border-[rgba(16,185,129,0.15)] bg-[rgba(16,185,129,0.03)]">
            <p className="chem-equation text-base font-bold text-[var(--text)]">
              H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    title: "Acid tác dụng với oxide base",
    icon: <TestTubes className="w-6 h-6" />,
    accentRgb: "168, 85, 247",
    content: (
      <>
        <p className="text-[var(--muted)] leading-relaxed mb-4">
          Acid + oxide base → <strong className="text-[var(--text)]">muối</strong> +{" "}
          <strong className="text-[var(--text)]">nước</strong>.
        </p>
        <div className="space-y-2">
          <div className="rounded-xl px-4 py-3 border border-[rgba(168,85,247,0.20)] bg-[rgba(168,85,247,0.04)]">
            <p className="chem-equation text-base font-bold text-[var(--text)]">
              CuO + H₂SO₄ → CuSO₄ + H₂O
            </p>
          </div>
          <div className="rounded-xl px-4 py-3 border border-[rgba(168,85,247,0.15)] bg-[rgba(168,85,247,0.03)]">
            <p className="chem-equation text-base font-bold text-[var(--text)]">
              Fe₂O₃ + 6HCl → 2FeCl₃ + 3H₂O
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    title: "Acid tác dụng với muối",
    icon: <Flame className="w-6 h-6" />,
    accentRgb: "245, 158, 11",
    content: (
      <>
        <p className="text-[var(--muted)] leading-relaxed mb-4">
          Acid + muối → <strong className="text-[var(--text)]">muối mới</strong> +{" "}
          <strong className="text-[var(--text)]">acid mới</strong>. Điều kiện: có kết tủa, khí thoát ra,
          hoặc chất điện li yếu.
        </p>
        <div className="space-y-2">
          <div className="rounded-xl px-4 py-3 border border-[rgba(245,158,11,0.20)] bg-[rgba(245,158,11,0.04)]">
            <p className="chem-equation text-base font-bold text-[var(--text)]">
              H₂SO₄ + BaCl₂ → BaSO₄<span className="text-amber-400">↓</span> + 2HCl
            </p>
          </div>
          <div className="rounded-xl px-4 py-3 border border-[rgba(245,158,11,0.15)] bg-[rgba(245,158,11,0.03)]">
            <p className="chem-equation text-base font-bold text-[var(--text)]">
              2HCl + Na₂CO₃ → 2NaCl + H₂O + CO₂<span className="text-amber-400">↑</span>
            </p>
          </div>
        </div>
      </>
    ),
  },
];

export function Chapter2() {
  return (
    <div className="min-h-screen page-enter relative overflow-hidden pb-24">
      <div className="container mx-auto px-4 py-12 relative z-10">

        <div className="text-center mb-14">
          <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full mb-5">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[rgba(167,139,250,0.12)] to-[rgba(244,114,182,0.08)] border border-[rgba(167,139,250,0.25)]" />
            <div className="absolute inset-0 rounded-full ring-pulse" />
            <div className="w-14 h-14 relative z-10 drop-shadow-lg chem-icon-glow">
              <AnimatedFlask color="#a78bfa" />
            </div>
          </div>
          <SplitTextTitle text="Phần 2: Tính chất hóa học" className="text-5xl font-extrabold mb-3 text-[var(--text)]" highlightWords={["hóa", "học"]} highlightColor="var(--accent-purple)" />
          <p className="max-w-3xl mx-auto mt-4 text-lg text-[var(--muted)] leading-relaxed">
            Acid có 5 tính chất hóa học đặc trưng. Nắm vững các tính chất này giúp hiểu rõ
            cách acid phản ứng với các chất khác nhau.
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
                  className="flex items-center justify-center w-10 h-10 rounded-xl text-sm font-extrabold transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{
                    background: `rgba(${prop.accentRgb}, 0.12)`,
                    border: `1.5px solid rgba(${prop.accentRgb}, 0.25)`,
                    color: `rgba(${prop.accentRgb}, 1)`,
                  }}
                >
                  {index + 1}
                </div>
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
                <h2 className="text-lg font-bold text-[var(--text)] flex-1">{prop.title}</h2>

              </div>
              <div className="px-7 py-6">{prop.content}</div>
            </div>
          ))}
        </div>

        <div
          className="max-w-4xl mx-auto mt-14 rounded-2xl p-8 glass-panel card-hover-lift animate-fade-in-up chem-shimmer-border animated-border-card overflow-hidden"
          style={{ background: "rgba(251, 191, 36, 0.08)", borderColor: "rgba(251, 191, 36, 0.3)" }}
        >
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[rgba(251,191,36,0.10)] border border-[rgba(251,191,36,0.20)] shrink-0">
              <ShieldAlert className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-[var(--text)] mb-3">⚠ Lưu ý an toàn</h3>
              <p className="text-[var(--muted)] leading-relaxed">
                Khi pha loãng acid đặc (đặc biệt H₂SO₄), phải{" "}
                <strong className="text-amber-300">rót acid vào nước</strong> từ từ và khuấy đều.
                Tuyệt đối không rót nước vào acid đặc vì phản ứng tỏa nhiệt mạnh gây bắn tung tóe.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
