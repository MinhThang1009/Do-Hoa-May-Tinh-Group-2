import { ArrowLeft, Droplets, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { SplitTextTitle } from "../../components/SplitTextTitle";

const metals = [
  { symbol: "K", valency: "I" },
  { symbol: "Na", valency: "I" },
  { symbol: "Ag", valency: "I" },
  { symbol: "Mg", valency: "II" },
  { symbol: "Ca", valency: "II" },
  { symbol: "Ba", valency: "II" },
  { symbol: "Zn", valency: "II" },
  { symbol: "Pb", valency: "II" },
  { symbol: "Cu", valency: "II" },
  { symbol: "Fe", valency: "II" },
  { symbol: "Fe", valency: "III" },
  { symbol: "Al", valency: "III" },
];

const solubilityData = [
  { radical: "− Cl", values: ["t", "t", "k", "t", "t", "t", "t", "i", "t", "t", "t", "t"] },
  { radical: "− NO₃", values: ["t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t"] },
  { radical: "= SO₄", values: ["t", "t", "i", "t", "i", "k", "t", "k", "t", "t", "t", "t"] },
  { radical: "= CO₃", values: ["t", "t", "k", "k", "k", "k", "k", "k", "-", "k", "-", "-"] },
  { radical: "≡ PO₄", values: ["t", "t", "k", "k", "k", "k", "k", "k", "k", "k", "k", "k"] },
];

const legend = [
  { key: "t", label: "Chất dễ tan trong nước", colorClass: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
  { key: "k", label: "Chất không tan (độ tan < 0,01g/100g nước)", colorClass: "bg-rose-500/20 text-rose-400 border-rose-500/30" },
  { key: "i", label: "Chất ít tan (độ tan < 1g/100g nước)", colorClass: "bg-amber-500/20 text-amber-400 border-amber-500/30" },
  { key: "-", label: "Chất không tồn tại / bị phân huỷ", colorClass: "bg-slate-500/20 text-slate-400 border-slate-500/30" },
];

const getCellColor = (value: string) => {
  switch (value) {
    case "t": return "bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/30";
    case "k": return "bg-rose-500/10 text-rose-400 hover:bg-rose-500/30";
    case "i": return "bg-amber-500/10 text-amber-400 hover:bg-amber-500/30";
    case "-": return "bg-slate-500/10 text-slate-400 hover:bg-slate-500/30";
    default: return "";
  }
};

export function TinhTan() {
  return (
    <div className="min-h-screen page-enter pb-24">


      <div className="container mx-auto px-4 mt-8">
        <header className="text-center mb-12 relative">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)] mb-6">
            <Droplets className="w-8 h-8 text-blue-500" />
          </div>
          <SplitTextTitle text="Tính Tan Của Muối" className="text-5xl md:text-6xl font-extrabold mb-4" />
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto leading-relaxed">
            Đa số các muối là chất rắn, có những muối không tan trong nước, có muối ít tan, có muối tan tốt trong nước.
          </p>
        </header>

        <div className="max-w-6xl mx-auto">
          {/* Legend */}
          <div className="glass-panel p-6 rounded-2xl border border-[rgba(255,255,255,0.1)] mb-8 flex flex-wrap gap-4 justify-center">
            {legend.map((item) => (
              <div key={item.key} className="flex items-center gap-2">
                <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm border ${item.colorClass}`}>
                  {item.key}
                </span>
                <span className="text-sm text-[var(--muted)]">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="glass-panel rounded-3xl overflow-hidden border border-[rgba(255,255,255,0.1)] shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none" />
            
            <div className="overflow-x-auto relative z-10 p-2 md:p-6">
              <table className="w-full text-center border-separate border-spacing-1 md:border-spacing-2">
                <thead>
                  <tr>
                    <th className="p-3 rounded-xl bg-[rgba(0,0,0,0.3)] text-[var(--muted)] font-semibold text-sm w-24">
                      Gốc acid
                    </th>
                    <th colSpan={metals.length} className="p-3 rounded-xl bg-[rgba(0,0,0,0.3)] text-amber-400 font-bold text-sm tracking-wider">
                      CÁC KIM LOẠI
                    </th>
                  </tr>
                  <tr>
                    <th className="p-2"></th>
                    {metals.map((metal, idx) => (
                      <th key={idx} className="p-2 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] w-12 md:w-16">
                        <div className="flex flex-col items-center justify-center">
                          <span className="font-bold text-lg text-amber-400 chem-equation">{metal.symbol}</span>
                          <span className="text-[10px] md:text-xs text-[var(--muted)] mt-1">{metal.valency}</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {solubilityData.map((row, idx) => (
                    <tr key={idx}>
                      <td className="p-3 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] text-left">
                        <span className="font-bold text-rose-400 chem-equation whitespace-nowrap">{row.radical}</span>
                      </td>
                      {row.values.map((val, vIdx) => (
                        <td key={vIdx} className={`p-2 rounded-xl border border-[rgba(255,255,255,0.02)] transition-all duration-300 cursor-default font-bold text-lg ${getCellColor(val)}`}>
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-6 flex items-center justify-center gap-2 text-[var(--muted)] text-sm">
            <Info className="w-4 h-4 text-blue-400" />
            <p>Bảng tính tan giúp dự đoán sự tạo thành kết tủa trong các phản ứng trao đổi.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
