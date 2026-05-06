import { ArrowLeft, Beaker, BookOpen, ChevronRight, Droplets, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { SplitTextTitle } from "../../components/SplitTextTitle";
import { AnimatedBeaker } from "../../components/AnimatedIcons";

const reactions = [
  {
    type: "Kim loại + Acid → Muối + Hydrogen",
    equation: "Zn + 2HCl → ZnCl₂ + H₂↑",
    molecularFormula: "ZnCl₂",
    name: "Zinc chloride",
    cation: "Zn²⁺",
    anion: "Cl⁻"
  },
  {
    type: "Acid + Base → Muối + Nước",
    equation: "H₂SO₄ + Cu(OH)₂ → CuSO₄ + 2H₂O",
    molecularFormula: "CuSO₄",
    name: "Copper(II) sulfate",
    cation: "Cu²⁺",
    anion: "SO₄²⁻"
  },
  {
    type: "Acid + Oxide base → Muối + Nước",
    equation: "H₂SO₄ + FeO → FeSO₄ + H₂O",
    molecularFormula: "FeSO₄",
    name: "Iron(II) sulfate",
    cation: "Fe²⁺",
    anion: "SO₄²⁻"
  }
];

const acidRadicals = [
  { radical: "− Cl", name: "chloride" },
  { radical: "− Br", name: "bromide" },
  { radical: "− I", name: "iodide" },
  { radical: "− NO₃", name: "nitrate" },
  { radical: "= SO₄", name: "sulfate" },
  { radical: "− HSO₄", name: "hydrogensulfate" },
  { radical: "= SO₃", name: "sulfite" },
  { radical: "− CH₃COO", name: "acetate" },
  { radical: "= S", name: "sulfide" },
  { radical: "− HS", name: "hydrogensulfide" },
  { radical: "= CO₃", name: "carbonate" },
  { radical: "− HCO₃", name: "hydrogencarbonate" },
  { radical: "≡ PO₄", name: "phosphate" },
  { radical: "= HPO₄", name: "hydrogenphosphate" },
];

export function KhaiNiem() {
  return (
    <div className="min-h-screen page-enter pb-24">


      <div className="container mx-auto px-4 mt-8">
        <header className="text-center mb-16 relative">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-[rgba(6,182,212,0.1)] border border-[rgba(6,182,212,0.2)] mb-6">
            <BookOpen className="w-8 h-8 text-cyan-500" />
          </div>
          <SplitTextTitle text="Khái Niệm" className="text-5xl md:text-6xl font-extrabold mb-4" />
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto leading-relaxed">
            Tìm hiểu định nghĩa, phản ứng tạo thành và cách gọi tên các loại muối.
          </p>
        </header>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Định nghĩa */}
          <div className="glass-panel p-8 rounded-3xl relative overflow-hidden border border-[rgba(245,158,11,0.2)]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="flex items-start gap-4 relative z-10">
              <div className="p-3 bg-amber-500/20 text-amber-500 rounded-xl shrink-0">
                <Info className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--text)] mb-3">Định nghĩa</h3>
                <p className="text-[var(--text)] leading-relaxed text-lg mb-4">
                  <strong>Muối</strong> là hợp chất được tạo thành từ sự thay thế ion <strong className="text-rose-400">H⁺</strong> của acid bằng ion <strong className="text-amber-500">kim loại</strong> hoặc ion ammonium (<strong className="text-cyan-400">NH₄⁺</strong>).
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="px-4 py-2 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[var(--border)]">
                    <span className="text-sm text-[var(--muted)] mr-2">Ví dụ:</span>
                    <strong className="text-amber-400 chem-equation">Na₂SO₄</strong> (sodium sulfate)
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[var(--border)]">
                    <span className="text-sm text-[var(--muted)] mr-2">Ví dụ:</span>
                    <strong className="text-cyan-400 chem-equation">NH₄Cl</strong> (ammonium chloride)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phản ứng tạo thành muối */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg">
                <Beaker className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--text)]">Phản ứng tạo thành muối, tên gọi và thành phần phân tử</h2>
            </div>
            
            <div className="glass-panel rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.1)]">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[rgba(0,0,0,0.2)]">
                      <th className="p-4 border-b border-[var(--border)] text-sm font-semibold text-[var(--muted)]">Loại phản ứng & Phương trình</th>
                      <th className="p-4 border-b border-[var(--border)] text-sm font-semibold text-[var(--muted)]">Công thức & Tên gọi</th>
                      <th className="p-4 border-b border-[var(--border)] text-sm font-semibold text-[var(--muted)]">Cation kim loại</th>
                      <th className="p-4 border-b border-[var(--border)] text-sm font-semibold text-[var(--muted)]">Anion gốc acid</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reactions.map((rx, idx) => (
                      <tr key={idx} className="border-b border-[var(--border)] hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                        <td className="p-4">
                          <p className="text-xs text-blue-400 font-medium mb-1">{rx.type}</p>
                          <p className="font-bold chem-equation">{rx.equation}</p>
                        </td>
                        <td className="p-4">
                          <p className="font-bold text-amber-400 chem-equation">{rx.molecularFormula}</p>
                          <p className="text-sm text-[var(--muted)]">{rx.name}</p>
                        </td>
                        <td className="p-4">
                          <span className="px-3 py-1 bg-amber-500/10 text-amber-400 rounded-lg text-sm font-bold chem-equation">{rx.cation}</span>
                        </td>
                        <td className="p-4">
                          <span className="px-3 py-1 bg-rose-500/10 text-rose-400 rounded-lg text-sm font-bold chem-equation">{rx.anion}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Cách gọi tên */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg">
                  <AnimatedBeaker className="w-5 h-5" color="#10b981" />
                </div>
                <h2 className="text-2xl font-bold text-[var(--text)]">Quy tắc gọi tên</h2>
              </div>
              <div className="glass-panel p-6 rounded-2xl border border-[rgba(16,185,129,0.2)] h-[calc(100%-4rem)]">
                <p className="text-[var(--text)] mb-6">
                  Công thức phân tử của muối gồm có cation kim loại và anion gốc acid được gọi tên theo quy tắc sau:
                </p>
                <div className="flex flex-col gap-3">
                  <div className="p-4 text-center">
                    <span className="text-amber-400 font-bold text-xl md:text-2xl">Tên kim loại</span>
                    <span className="text-sm md:text-base text-[var(--muted)] block mt-2">(kèm hóa trị nếu kim loại có nhiều hóa trị)</span>
                  </div>
                  <div className="flex justify-center text-[var(--muted)]">
                    <ChevronRight className="w-6 h-6 rotate-90 md:rotate-0" />
                  </div>
                  <div className="p-4 text-center">
                    <span className="text-rose-400 font-bold text-xl md:text-2xl">Tên gốc acid</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-rose-500/20 text-rose-400 rounded-lg">
                  <Droplets className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-[var(--text)]">Tên gọi một số gốc acid</h2>
              </div>
              <div className="glass-panel rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.1)] h-[calc(100%-4rem)] overflow-y-auto max-h-[400px] customized-scrollbar">
                <table className="w-full text-left border-collapse">
                  <thead className="sticky top-0 bg-[rgba(15,20,35,0.95)] backdrop-blur-md z-10">
                    <tr>
                      <th className="p-3 border-b border-[var(--border)] text-sm font-semibold text-[var(--muted)]">Gốc acid</th>
                      <th className="p-3 border-b border-[var(--border)] text-sm font-semibold text-[var(--muted)]">Tên gọi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {acidRadicals.map((rad, idx) => (
                      <tr key={idx} className="border-b border-[var(--border)] hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                        <td className="p-3">
                          <span className="font-bold text-rose-400 chem-equation">{rad.radical}</span>
                        </td>
                        <td className="p-3 text-[var(--text)]">{rad.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
