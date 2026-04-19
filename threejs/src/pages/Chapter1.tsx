import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen } from "lucide-react";
import { MoleculeViewer } from "../components/MoleculeViewer";
import { AnimatedAtom3D } from "../components/AnimatedIcons";
import { SplitTextTitle } from "../components/SplitTextTitle";

const acids = [
  {
    name: "HCl",
    fullName: "Hydrochloric Acid",
    vietnameseName: "Axit Clohidric",
    modelUrl: "/models/HCl.glb",
    color: "#22c55e",
    borderColor: "rgba(34,197,94,0.25)",
    bgGlow: "rgba(34,197,94,0.06)",
    desc: "Phân tử gồm 1 nguyên tử H liên kết với 1 nguyên tử Cl bằng liên kết cộng hóa trị.",
  },
  {
    name: "HNO₃",
    fullName: "Nitric Acid",
    vietnameseName: "Axit Nitric",
    modelUrl: "/models/HNO3.glb",
    color: "#3b82f6",
    borderColor: "rgba(59,130,246,0.25)",
    bgGlow: "rgba(59,130,246,0.06)",
    desc: "Phân tử gồm 1 nguyên tử H, 1 nguyên tử N và 3 nguyên tử O liên kết với nhau.",
  },
  {
    name: "H₂SO₄",
    fullName: "Sulfuric Acid",
    vietnameseName: "Axit Sulfuric",
    modelUrl: "/models/H2SO4.glb",
    color: "#f59e0b",
    borderColor: "rgba(245,158,11,0.25)",
    bgGlow: "rgba(245,158,11,0.06)",
    desc: "Phân tử gồm 2 nguyên tử H, 1 nguyên tử S và 4 nguyên tử O, cấu trúc tứ diện.",
  },
];

export function Chapter1() {
  return (
    <div className="min-h-screen page-enter relative overflow-hidden pb-24">
      <div className="container mx-auto px-4 py-12 relative z-10">

        <div className="text-center mb-14">
          <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full mb-5">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[rgba(var(--accent-rgb),0.12)] to-[rgba(var(--accent-2-rgb),0.08)] border border-[rgba(var(--accent-rgb),0.25)]" />
            <div className="absolute inset-0 rounded-full ring-pulse" />
            <div className="w-14 h-14 relative z-10 drop-shadow-lg chem-icon-glow">
              <AnimatedAtom3D color="#64d2ff" />
            </div>
          </div>
          <SplitTextTitle text="Phần 1: Khái niệm Acid" className="text-5xl font-extrabold mb-3 text-[var(--text)]" highlightWords={["Acid"]} highlightColor="var(--accent)" />
          <p className="max-w-3xl mx-auto mt-4 text-lg text-[var(--muted)] leading-relaxed">
            Acid ban đầu được biết đến là những chất có vị chua như acetic acid có trong giấm ăn,
            citric acid có trong quả chanh, maleic acid có trong quả táo.
            Từ <em className="text-[var(--accent)]">acid</em> xuất phát từ tiếng Latin <em className="text-[var(--accent)]">acidus</em> &mdash; nghĩa là vị chua.
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          {acids.map((acid, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden glass-panel card-hover-lift chem-shimmer-border animated-border-card animate-fade-in-up stagger-${index + 1} flex flex-col ${index === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              style={{ borderColor: acid.borderColor }}
            >
              <div
                className={`relative w-full lg:w-[60%] h-80 flex items-center justify-center overflow-hidden bg-gradient-to-br from-black/5 to-transparent ${index === 1 ? "lg:border-l border-b lg:border-b-0" : "lg:border-r border-b lg:border-b-0"
                  }`}
                style={{
                  background: `radial-gradient(ellipse at center, ${acid.bgGlow} 0%, transparent 70%)`,
                  borderColor: acid.borderColor,
                }}
              >
                <div className="hud-corner hud-corner-tl" style={{ borderColor: acid.color }} />
                <div className="hud-corner hud-corner-tr" style={{ borderColor: acid.color }} />
                <div className="hud-corner hud-corner-bl" style={{ borderColor: acid.color }} />
                <div className="hud-corner hud-corner-br" style={{ borderColor: acid.color }} />

                <div className="hud-scanner" />



                <MoleculeViewer url={acid.modelUrl} className="absolute inset-0 z-10" />

                <div
                  className="absolute inset-0 pointer-events-none opacity-[0.03]"
                  style={{
                    backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
              </div>

              <div className="w-full lg:w-[40%] p-8 flex flex-col justify-center items-center text-center">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-4 border"
                  style={{
                    color: acid.color,
                    borderColor: acid.borderColor,
                    background: acid.bgGlow,
                  }}
                >
                  Mô hình 3D
                </span>
                <h2 className="text-5xl font-extrabold mb-3" style={{ color: acid.color }}>
                  {acid.name}
                </h2>
                <p className="text-lg font-semibold text-[var(--text)] mb-1">{acid.vietnameseName}</p>
                <p className="text-sm text-[var(--muted-2)] italic mb-4">{acid.fullName}</p>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{acid.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-14 rounded-2xl p-8 glass-panel animate-fade-in-up stagger-5 chem-shimmer-border animated-border-card overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[rgba(var(--accent-rgb),0.15)] to-[rgba(var(--accent-purple-rgb),0.10)] border border-[rgba(var(--accent-rgb),0.20)] shrink-0">
              <BookOpen className="w-6 h-6 text-[var(--accent)]" />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-[var(--text)] mb-3">Định nghĩa Acid</h3>
              <p className="text-lg text-[var(--muted)] leading-relaxed">
                Acid là những hợp chất trong phân tử có nguyên tử <strong className="text-[var(--accent)]">hydrogen</strong> liên kết
                với <strong className="text-[var(--accent)]">gốc acid</strong>. Khi tan trong nước, acid tạo ra ion{" "}
                <strong className="text-[var(--accent-2)]">H⁺</strong>.
              </p>
              <div className="mt-4 inline-block px-5 py-3 rounded-xl border border-[rgba(94,234,212,0.20)] bg-[rgba(94,234,212,0.04)]">
                <p className="chem-equation text-xl font-bold text-[var(--accent-2)]">
                  H<sub>n</sub>A → nH⁺ + A<sup>n⁻</sup>
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
