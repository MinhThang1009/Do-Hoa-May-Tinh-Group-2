import { BookOpen, Layers, CheckCircle2 } from "lucide-react";
import { MoleculeViewer } from "../../components/MoleculeViewer";
import { AnimatedOxideIcon } from "../../components/AnimatedIcons";
import { SplitTextTitle } from "../../components/SplitTextTitle";

const oxideExamples = [
  {
    name: "Barium oxide",
    formula: "BaO",
    type: "metal",
  },
  {
    name: "Carbon dioxide",
    formula: "CO₂",
    type: "nonmetal",
  },
  {
    name: "Zinc oxide",
    formula: "ZnO",
    type: "metal",
  },
  {
    name: "Sulfur trioxide",
    formula: "SO₃",
    type: "nonmetal",
  },
  {
    name: "Aluminium oxide",
    formula: "Al₂O₃",
    type: "metal",
  },
  {
    name: "Diphosphorus pentoxide",
    formula: "P₂O₅",
    type: "nonmetal",
  },
];

const oxideModels = [
  {
    name: "BaO",
    fullName: "Barium oxide",
    vietnameseName: "Barium oxide",
    modelUrl: "/models/BaO.glb",
    color: "#f97316", // orange
    borderColor: "rgba(249,115,22,0.25)",
    bgGlow: "rgba(249,115,22,0.06)",
    desc: "Là một oxide kim loại.",
  },
  {
    name: "CO₂",
    fullName: "Carbon dioxide",
    vietnameseName: "Carbon dioxide",
    modelUrl: "/models/CO2.glb",
    color: "#06b6d4", // cyan
    borderColor: "rgba(6,182,212,0.25)",
    bgGlow: "rgba(6,182,212,0.06)",
    desc: "Là một oxide phi kim.",
  },
  {
    name: "P₂O₅",
    fullName: "Diphosphorus pentoxide",
    vietnameseName: "Điphotpho pentaoxit",
    modelUrl: "/models/P2O5.glb",
    color: "#8b5cf6", // purple
    borderColor: "rgba(139,92,246,0.25)",
    bgGlow: "rgba(139,92,246,0.06)",
    desc: "Là một oxide phi kim.",
  },
];

export function KhaiNiem() {
  return (
    <div className="min-h-screen page-enter relative overflow-hidden pb-24">
      <div className="container mx-auto px-4 py-12 relative z-10">

        <div className="text-center mb-14">
          <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full mb-5">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[rgba(249,115,22,0.12)] to-[rgba(139,92,246,0.08)] border border-[rgba(249,115,22,0.25)]" />
            <div className="absolute inset-0 rounded-full ring-pulse" style={{ borderColor: 'rgba(249,115,22,0.5)' }} />
            <div className="w-14 h-14 relative z-10 drop-shadow-lg chem-icon-glow">
              <AnimatedOxideIcon color="#f97316" />
            </div>
          </div>
          <SplitTextTitle text="Phần 1: Khái niệm Oxide" className="text-5xl font-extrabold mb-3 text-[var(--text)]" highlightWords={["Oxide"]} highlightColor="#f97316" />
          <p className="max-w-3xl mx-auto mt-4 text-lg text-[var(--muted)] leading-relaxed">
            Tìm hiểu về định nghĩa, công thức hóa học và cách phân loại các <em className="text-[#f97316]">Oxide</em> phổ biến trong tự nhiên.
          </p>
        </div>

        {/* Bảng tên và công thức */}
        <div className="max-w-4xl mx-auto mb-14 animate-fade-in-up stagger-1">
          <div className="glass-panel rounded-2xl overflow-hidden chem-shimmer-border animated-border-card" style={{ borderColor: 'rgba(249,115,22,0.25)' }}>
            <div className="bg-gradient-to-r from-[rgba(249,115,22,0.1)] to-transparent px-6 py-4 border-b border-[rgba(249,115,22,0.15)] flex items-center gap-3">
              <Layers className="w-5 h-5 text-[#f97316]" />
              <h3 className="text-xl font-bold text-[var(--text)]">Tên và công thức hóa học của một số oxide</h3>
            </div>
            <div className="p-1">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="p-4 border-b border-[var(--border)] text-[var(--muted)] font-semibold text-sm uppercase tracking-wider">Tên oxide</th>
                    <th className="p-4 border-b border-[var(--border)] text-[var(--muted)] font-semibold text-sm uppercase tracking-wider">Công thức hóa học</th>
                  </tr>
                </thead>
                <tbody>
                  {oxideExamples.map((item, idx) => (
                    <tr key={idx} className="hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                      <td className="p-4 border-b border-[var(--border)] text-[var(--text)] font-medium">
                        {item.name}
                      </td>
                      <td className="p-4 border-b border-[var(--border)] font-bold">
                        <span className="chem-formula text-[#06b6d4]">{item.formula}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Định nghĩa */}
        <div className="max-w-4xl mx-auto mb-14 rounded-2xl p-8 glass-panel card-hover-lift animate-fade-in-up stagger-2 chem-shimmer-border animated-border-card overflow-hidden" style={{ borderColor: 'rgba(6,182,212,0.25)' }}>
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[rgba(6,182,212,0.15)] to-transparent border border-[rgba(6,182,212,0.20)] shrink-0">
              <BookOpen className="w-6 h-6 text-[#06b6d4]" />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-[var(--text)] mb-3">📖 Định nghĩa Oxide</h3>
              <p className="text-lg text-[var(--muted)] leading-relaxed">
                <strong className="text-[#f97316]">Oxide</strong> là hợp chất của <strong className="text-[#06b6d4]">hai nguyên tố</strong>, 
                trong đó có một nguyên tố là <strong className="text-[#ef4444]">oxygen</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Phân loại */}
        <div className="max-w-4xl mx-auto mb-14 animate-fade-in-up stagger-3">
          <h3 className="text-2xl font-extrabold text-[var(--text)] mb-6 text-center">Phân loại Oxide</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-panel p-6 rounded-xl border border-[rgba(249,115,22,0.25)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[rgba(249,115,22,0.05)] rounded-full blur-3xl group-hover:bg-[rgba(249,115,22,0.1)] transition-colors" />
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <div className="w-8 h-8 rounded-lg bg-[rgba(249,115,22,0.1)] flex items-center justify-center text-[#f97316] font-bold">1</div>
                <h4 className="text-xl font-bold text-[var(--text)]">Oxide kim loại</h4>
              </div>
              <p className="text-[var(--muted)] relative z-10 text-sm leading-relaxed mb-4">
                Có thể được tạo thành từ phản ứng của kim loại với oxygen.
              </p>
              <div className="px-4 py-2 rounded-lg bg-[rgba(249,115,22,0.05)] border border-[rgba(249,115,22,0.1)] inline-block">
                <span className="text-xs text-[var(--muted)] block mb-1">Ví dụ:</span>
                <span className="chem-equation text-sm font-semibold text-[#f97316]">2Ba + O₂ → 2BaO</span>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-xl border border-[rgba(6,182,212,0.25)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[rgba(6,182,212,0.05)] rounded-full blur-3xl group-hover:bg-[rgba(6,182,212,0.1)] transition-colors" />
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <div className="w-8 h-8 rounded-lg bg-[rgba(6,182,212,0.1)] flex items-center justify-center text-[#06b6d4] font-bold">2</div>
                <h4 className="text-xl font-bold text-[var(--text)]">Oxide phi kim</h4>
              </div>
              <p className="text-[var(--muted)] relative z-10 text-sm leading-relaxed mb-4">
                Có thể được tạo thành từ phản ứng của phi kim với oxygen.
              </p>
              <div className="px-4 py-2 rounded-lg bg-[rgba(6,182,212,0.05)] border border-[rgba(6,182,212,0.1)] inline-block">
                <span className="text-xs text-[var(--muted)] block mb-1">Ví dụ:</span>
                <span className="chem-equation text-sm font-semibold text-[#06b6d4]">C + O₂ → CO₂</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mô hình 3D */}
        <div className="max-w-6xl mx-auto flex flex-col gap-10 mt-16">
          <h3 className="text-2xl font-extrabold text-[var(--text)] mb-2 text-center animate-fade-in-up stagger-4">Mô hình 3D một số Oxide</h3>
          {oxideModels.map((model, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden glass-panel card-hover-lift chem-shimmer-border animated-border-card animate-fade-in-up stagger-${index + 5} flex flex-col ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              style={{ borderColor: model.borderColor }}
            >
              <div
                className={`relative w-full lg:w-[60%] h-80 flex items-center justify-center overflow-hidden bg-gradient-to-br from-black/5 to-transparent ${index % 2 !== 0 ? "lg:border-l border-b lg:border-b-0" : "lg:border-r border-b lg:border-b-0"
                  }`}
                style={{
                  background: `radial-gradient(ellipse at center, ${model.bgGlow} 0%, transparent 70%)`,
                  borderColor: model.borderColor,
                }}
              >
                <div className="hud-corner hud-corner-tl" style={{ borderColor: model.color }} />
                <div className="hud-corner hud-corner-tr" style={{ borderColor: model.color }} />
                <div className="hud-corner hud-corner-bl" style={{ borderColor: model.color }} />
                <div className="hud-corner hud-corner-br" style={{ borderColor: model.color }} />

                <div className="hud-scanner" />

                <MoleculeViewer url={model.modelUrl} className="absolute inset-0 z-10" />

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
                    color: model.color,
                    borderColor: model.borderColor,
                    background: model.bgGlow,
                  }}
                >
                  ⚗ Mô hình 3D
                </span>
                <h2 className="text-5xl font-extrabold mb-3" style={{ color: model.color }}>
                  {model.name}
                </h2>
                <p className="text-lg font-semibold text-[var(--text)] mb-1">{model.vietnameseName}</p>
                <p className="text-sm text-[var(--muted-2)] italic mb-4">{model.fullName}</p>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{model.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
