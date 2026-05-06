import { ArrowLeft, Layers, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { SplitTextTitle } from "../../components/SplitTextTitle";
import { AnimatedAtom3D } from "../../components/AnimatedIcons";

const methods = [
  {
    title: "1. Dung dịch acid tác dụng với base",
    equation: "HCl + NaOH → NaCl + H₂O",
    color: "#3b82f6",
    rgb: "59, 130, 246"
  },
  {
    title: "2. Dung dịch acid tác dụng với oxide base",
    equation: "2HNO₃ + CuO → Cu(NO₃)₂ + H₂O",
    color: "#10b981",
    rgb: "16, 185, 129"
  },
  {
    title: "3. Dung dịch acid tác dụng với muối",
    equation: "H₂SO₄ + BaCl₂ → BaSO₄↓ + 2HCl",
    color: "#f59e0b",
    rgb: "245, 158, 11"
  },
  {
    title: "4. Oxide acid tác dụng với dung dịch base",
    equation: "CO₂ + 2NaOH → Na₂CO₃ + H₂O",
    color: "#8b5cf6",
    rgb: "139, 92, 246"
  },
  {
    title: "5. Dung dịch muối tác dụng với dung dịch muối",
    equation: "NaCl + AgNO₃ → AgCl↓ + NaNO₃",
    color: "#ec4899",
    rgb: "236, 72, 153"
  }
];

export function DieuChe() {
  return (
    <div className="min-h-screen page-enter pb-24">


      <div className="container mx-auto px-4 mt-8">
        <header className="text-center mb-16 relative">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.2)] mb-6">
            <Layers className="w-8 h-8 text-emerald-500" />
          </div>
          <SplitTextTitle text="Điều Chế Muối" className="text-5xl md:text-6xl font-extrabold mb-4" />
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto leading-relaxed">
            Muối có thể được điều chế bằng nhiều phương pháp khác nhau. Dưới đây là 5 phương pháp phổ biến nhất.
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {methods.map((method, idx) => (
              <div 
                key={idx}
                className="glass-panel p-6 md:p-8 rounded-3xl border flex flex-col md:flex-row items-center gap-6 group hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                style={{ borderColor: `rgba(${method.rgb}, 0.2)` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                     style={{ backgroundImage: `linear-gradient(to right, rgba(${method.rgb}, 0.05), transparent)` }} 
                />
                
                <div className="w-full md:w-1/2 relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <ShieldCheck className="w-5 h-5" style={{ color: method.color }} />
                    <h3 className="text-xl font-bold text-[var(--text)] group-hover:text-white transition-colors">{method.title}</h3>
                  </div>
                </div>

                <div className="w-full md:w-1/2 relative z-10">
                  <div 
                    className="rounded-2xl px-6 py-4 flex items-center justify-center border bg-[rgba(0,0,0,0.2)] group-hover:bg-[rgba(0,0,0,0.4)] transition-colors"
                    style={{ borderColor: `rgba(${method.rgb}, 0.3)` }}
                  >
                    <p className="chem-equation text-lg md:text-xl font-bold tracking-wide" style={{ color: method.color }}>
                      {method.equation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
