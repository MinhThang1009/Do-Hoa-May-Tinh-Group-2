import { BookOpen, Droplets, Layers, Microscope } from "lucide-react";
import { MoleculeViewer } from "../../components/MoleculeViewer";
import { AnimatedAtom3D } from "../../components/AnimatedIcons";
import { SplitTextTitle } from "../../components/SplitTextTitle";

const bases = [
  {
    name: "NaOH",
    fullName: "Sodium hydroxide",
    vietnameseName: "Sodium hydroxide",
    modelUrl: "/models/NaOH.glb",
    color: "#22c55e",
    rgb: "34, 197, 94",
    desc: "Base tan trong nước, tạo ion Na+ và OH-. Dung dịch NaOH là dung dịch kiềm mạnh.",
  },
  {
    name: "Ba(OH)2",
    fullName: "Barium hydroxide",
    vietnameseName: "Barium hydroxide",
    modelUrl: "/models/Ba_OH_2.glb",
    color: "#38bdf8",
    rgb: "56, 189, 248",
    desc: "Phân tử có một nguyên tử Ba liên kết với hai nhóm hydroxide. Khi tan tạo Ba2+ và OH-.",
  },
  {
    name: "FeOH",
    fullName: "Iron hydroxide",
    vietnameseName: "Iron hydroxide",
    modelUrl: "/models/FeOH.glb",
    color: "#f59e0b",
    rgb: "245, 158, 11",
    desc: "Mô hình minh họa nhóm hydroxide trong base kim loại. Nhiều hydroxide kim loại ít tan trong nước.",
  },
];

const rules = [
  {
    icon: <Layers className="w-5 h-5" />,
    title: "Dạng công thức",
    text: "Base thường gồm nguyên tử kim loại liên kết với một hay nhiều nhóm hydroxide -OH.",
  },
  {
    icon: <Droplets className="w-5 h-5" />,
    title: "Khi tan trong nước",
    text: "Dung dịch base tạo ra ion OH-. Đây là đặc điểm chung cần nhớ của base tan.",
  },
  {
    icon: <Microscope className="w-5 h-5" />,
    title: "Cách gọi tên",
    text: "Tên base được gọi theo cấu trúc: tên kim loại kèm hóa trị nếu cần + hydroxide.",
  },
];

export function Base() {
  return (
    <div className="min-h-screen page-enter relative overflow-hidden pb-24">
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-14">
          <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full mb-5">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[rgba(34,197,94,0.14)] to-[rgba(56,189,248,0.08)] border border-[rgba(34,197,94,0.25)]" />
            <div className="absolute inset-0 rounded-full ring-pulse" />
            <div className="w-14 h-14 relative z-10 drop-shadow-lg chem-icon-glow">
              <AnimatedAtom3D color="#22c55e" />
            </div>
          </div>
          <SplitTextTitle
            text="Phần 1: Khái niệm Base"
            className="text-4xl md:text-5xl font-extrabold mb-3 text-[var(--text)]"
            highlightWords={["Base"]}
            highlightColor="#22c55e"
          />
          <p className="max-w-3xl mx-auto mt-4 text-lg text-[var(--muted)] leading-relaxed">
            Base là hợp chất có nguyên tử kim loại liên kết với nhóm hydroxide. Khi tan trong nước,
            base tạo ra ion OH- làm dung dịch có tính kiềm.
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          {bases.map((base, index) => (
            <div
              key={base.name}
              className={`rounded-2xl overflow-hidden glass-panel card-hover-lift chem-shimmer-border animated-border-card animate-fade-in-up stagger-${index + 1} flex flex-col ${index === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`}
              style={{ borderColor: `rgba(${base.rgb}, 0.24)` }}
            >
              <div
                className={`relative w-full lg:w-[60%] h-80 flex items-center justify-center overflow-hidden ${index === 1 ? "lg:border-l border-b lg:border-b-0" : "lg:border-r border-b lg:border-b-0"}`}
                style={{
                  background: `radial-gradient(ellipse at center, rgba(${base.rgb}, 0.08) 0%, transparent 70%)`,
                  borderColor: `rgba(${base.rgb}, 0.18)`,
                }}
              >
                <div className="hud-corner hud-corner-tl" style={{ borderColor: base.color }} />
                <div className="hud-corner hud-corner-tr" style={{ borderColor: base.color }} />
                <div className="hud-corner hud-corner-bl" style={{ borderColor: base.color }} />
                <div className="hud-corner hud-corner-br" style={{ borderColor: base.color }} />
                <div className="hud-scanner" />
                <MoleculeViewer url={base.modelUrl} className="absolute inset-0 z-10" />
              </div>

              <div className="w-full lg:w-[40%] p-8 flex flex-col justify-center items-center text-center">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-4 border"
                  style={{
                    color: base.color,
                    borderColor: `rgba(${base.rgb}, 0.25)`,
                    background: `rgba(${base.rgb}, 0.07)`,
                  }}
                >
                  Mô hình 3D
                </span>
                <h2 className="chem-equation text-5xl font-extrabold mb-3" style={{ color: base.color }}>
                  {base.name}
                </h2>
                <p className="text-lg font-semibold text-[var(--text)] mb-1">{base.vietnameseName}</p>
                <p className="text-sm text-[var(--muted-2)] italic mb-4">{base.fullName}</p>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{base.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mt-14 grid md:grid-cols-3 gap-5">
          {rules.map((rule, index) => (
            <div
              key={rule.title}
              className={`rounded-2xl p-6 glass-panel card-hover-lift animate-fade-in-up stagger-${index + 2} chem-shimmer-border animated-border-card`}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-[rgba(34,197,94,0.10)] border border-[rgba(34,197,94,0.22)] text-emerald-400">
                {rule.icon}
              </div>
              <h3 className="text-lg font-extrabold text-[var(--text)] mb-2">{rule.title}</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{rule.text}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-14 rounded-2xl p-8 glass-panel card-hover-lift animate-fade-in-up stagger-5 chem-shimmer-border animated-border-card overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[rgba(34,197,94,0.10)] border border-[rgba(34,197,94,0.20)] shrink-0">
              <BookOpen className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-[var(--text)] mb-3">Định nghĩa cần nhớ</h3>
              <p className="text-lg text-[var(--muted)] leading-relaxed">
                Base là những hợp chất trong phân tử có nguyên tử kim loại liên kết với nhóm hydroxide.
                Khi tan trong nước, base tạo ra ion <strong className="text-emerald-400">OH-</strong>.
              </p>
              <div className="mt-4 inline-block px-5 py-3 rounded-xl border border-[rgba(34,197,94,0.22)] bg-[rgba(34,197,94,0.06)]">
                <p className="chem-equation text-xl font-bold text-emerald-400">
                  NaOH → Na+ + OH-
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
