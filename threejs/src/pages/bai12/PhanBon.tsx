import { ArrowLeft, Package, Sparkles, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SplitTextTitle } from "../../components/SplitTextTitle";
import { MoleculeViewer } from "../../components/MoleculeViewer";

const phanBonTypes = [
  {
    title: "1. Phân đạm",
    element: "Nitrogen (N)",
    color: "#3b82f6", // blue
    rgb: "59, 130, 246",
    ingredients: "Muối nitrate (NaNO₃, Ca(NO₃)₂), ammonium nitrate (NH₄NO₃), urea ((NH₂)₂CO). Đều dễ tan trong nước.",
    effect: "Thúc đẩy quá trình sinh trưởng của cây trồng, giúp cây trồng phát triển thân, rễ, lá.",
  },
  {
    title: "2. Phân lân",
    element: "Phosphorus (P)",
    color: "#f59e0b", // amber
    rgb: "245, 158, 11",
    ingredients: "Lân nung chảy: Ca₃(PO₄)₂ (không tan, tan chậm trong đất chua). Super lân đơn: Ca(H₂PO₄)₂ + CaSO₄ (tan ít). Super lân kép: Ca(H₂PO₄)₂ (tan được).",
    effect: "Dùng bón lót (phát triển bộ rễ) và bón thúc (ra hoa, đậu quả to, kích thích quá trình chín).",
    note: "Super lân: đất không chua hoặc chua ít. Lân nung chảy: đất chua."
  },
  {
    title: "3. Phân kali",
    element: "Potassium (K)",
    color: "#8b5cf6", // violet
    rgb: "139, 92, 246",
    ingredients: "Muối chloride (KCl) hoặc sulfate (K₂SO₄). Ngoài ra có trong phân dơi, tro bếp.",
    effect: "Tăng khả năng hấp thụ nước và dinh dưỡng, giúp cây chịu lạnh tốt, hình thành các mô tế bào giúp cây cứng cáp.",
  },
  {
    title: "4. Phân hỗn hợp NPK",
    element: "N - P - K",
    color: "#10b981", // emerald
    rgb: "16, 185, 129",
    ingredients: "Chứa cả 3 thành phần dinh dưỡng: Đạm, Lân, Kali.",
    effect: "Cung cấp toàn diện dưỡng chất đa lượng, đồng thời có thể bổ sung các nguyên tố trung lượng (Ca, Mg...) và vi lượng (Zn, Cu...).",
  }
];

const phanBonModels = [
  {
    name: "(NH₂)₂CO",
    fullName: "Urea",
    vietnameseName: "Ure",
    modelUrl: "/videos/molecular/bai_12/phan_dam/(NH2)2CO_Urea.glb",
    color: "#3b82f6",
    borderColor: "rgba(59,130,246,0.25)",
    bgGlow: "rgba(59,130,246,0.06)",
    desc: "Thành phần chính của phân đạm Urea, cung cấp Nitrogen cho cây trồng.",
  },
  {
    name: "Ca(NO₃)₂",
    fullName: "Calcium nitrate",
    vietnameseName: "Calcium nitrate",
    modelUrl: "/videos/molecular/bai_12/phan_dam/Ca_NO3_2.glb",
    color: "#3b82f6",
    borderColor: "rgba(59,130,246,0.25)",
    bgGlow: "rgba(59,130,246,0.06)",
    desc: "Một loại phân đạm dễ tan, cung cấp dinh dưỡng nhanh chóng.",
  },
  {
    name: "NH₄NO₃",
    fullName: "Ammonium nitrate",
    vietnameseName: "Ammonium nitrate",
    modelUrl: "/videos/molecular/bai_12/phan_dam/NH4NO3.glb",
    color: "#3b82f6",
    borderColor: "rgba(59,130,246,0.25)",
    bgGlow: "rgba(59,130,246,0.06)",
    desc: "Phân đạm kép chứa cả gốc ammonium và nitrate.",
  },
  {
    name: "NaNO₃",
    fullName: "Sodium nitrate",
    vietnameseName: "Sodium nitrate",
    modelUrl: "/videos/molecular/bai_12/phan_dam/NaNO3.glb",
    color: "#3b82f6",
    borderColor: "rgba(59,130,246,0.25)",
    bgGlow: "rgba(59,130,246,0.06)",
    desc: "Còn gọi là diêm tiêu, một loại phân đạm dễ hấp thụ.",
  },
  {
    name: "Ca₃(PO₄)₂",
    fullName: "Calcium phosphate",
    vietnameseName: "Calcium phosphate",
    modelUrl: "/videos/molecular/bai_12/phan_lan/Ca3_PO4_2.glb",
    color: "#f59e0b",
    borderColor: "rgba(245,158,11,0.25)",
    bgGlow: "rgba(245,158,11,0.06)",
    desc: "Thành phần chính của phân lân nung chảy, không tan trong nước.",
  },
  {
    name: "Ca(H₂PO₄)₂",
    fullName: "Calcium dihydrogen phosphate",
    vietnameseName: "Calcium dihydrogen phosphate",
    modelUrl: "/videos/molecular/bai_12/phan_lan/Ca_H2PO4_2.glb",
    color: "#f59e0b",
    borderColor: "rgba(245,158,11,0.25)",
    bgGlow: "rgba(245,158,11,0.06)",
    desc: "Thành phần dinh dưỡng chính của super lân đơn và super lân kép.",
  },
  {
    name: "CaSO₄",
    fullName: "Calcium sulfate",
    vietnameseName: "Calcium sulfate",
    modelUrl: "/videos/molecular/bai_12/phan_lan/CaSO4.glb",
    color: "#f59e0b",
    borderColor: "rgba(245,158,11,0.25)",
    bgGlow: "rgba(245,158,11,0.06)",
    desc: "Sản phẩm phụ có trong thành phần của super lân đơn.",
  },
  {
    name: "KCl",
    fullName: "Potassium chloride",
    vietnameseName: "Potassium chloride",
    modelUrl: "/videos/molecular/bai_12/phan_kali/KCl.glb",
    color: "#8b5cf6",
    borderColor: "rgba(139,92,246,0.25)",
    bgGlow: "rgba(139,92,246,0.06)",
    desc: "Là loại phân kali phổ biến nhất, cung cấp Potassium cho cây.",
  },
  {
    name: "K₂SO₄",
    fullName: "Potassium sulfate",
    vietnameseName: "Potassium sulfate",
    modelUrl: "/videos/molecular/bai_12/phan_kali/K2SO4.glb",
    color: "#8b5cf6",
    borderColor: "rgba(139,92,246,0.25)",
    bgGlow: "rgba(139,92,246,0.06)",
    desc: "Loại phân kali thích hợp cho các loại cây kỵ chloride.",
  }
];

export function PhanBon() {
  return (
    <div className="min-h-screen page-enter pb-24">
      <div className="container mx-auto px-4 pt-6 animate-fade-in-up">
        <Link 
          to="/bai-12"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-panel text-[var(--muted)] hover:text-[var(--text)] transition-colors chem-shimmer-border"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-semibold">Bài 12: Phân bón hóa học</span>
        </Link>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <header className="text-center mb-16 relative">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)] mb-6">
            <Package className="w-8 h-8 text-blue-500" />
          </div>
          <SplitTextTitle text="Một Số Loại Phân Bón" className="text-4xl md:text-6xl font-extrabold mb-4" />
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto leading-relaxed">
            Tìm hiểu 4 loại phân bón thông dụng, thành phần hóa học và tác dụng của từng loại đối với cây trồng.
          </p>
        </header>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {phanBonTypes.map((item, idx) => (
            <div 
              key={idx}
              className="glass-panel rounded-3xl p-8 border card-hover-lift animate-fade-in-up"
              style={{ 
                borderColor: `rgba(${item.rgb}, 0.25)`,
                animationDelay: `${idx * 150}ms`
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{ 
                    backgroundColor: item.color,
                    boxShadow: `0 10px 25px -5px rgba(${item.rgb}, 0.4)`
                  }}
                >
                  <span className="text-2xl font-black text-white">{item.element.match(/\((.*?)\)/)?.[1] || item.element}</span>
                </div>
                <div>
                  <h2 className="text-3xl font-extrabold text-[var(--text)]">{item.title}</h2>
                  <p className="text-sm font-bold uppercase tracking-widest mt-1" style={{ color: item.color }}>
                    Cung cấp {item.element}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div 
                  className="rounded-2xl p-5 border"
                  style={{ 
                    backgroundColor: `rgba(${item.rgb}, 0.05)`,
                    borderColor: `rgba(${item.rgb}, 0.15)`
                  }}
                >
                  <h3 className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: item.color }}>Thành phần chính</h3>
                  <p className="text-[var(--text)] opacity-90 leading-relaxed font-medium">
                    {item.ingredients}
                  </p>
                  {item.note && (
                    <div className="mt-3 text-sm text-[var(--muted)] flex gap-2 items-start border-t border-[rgba(255,255,255,0.05)] pt-3">
                      <Sparkles className="w-4 h-4 shrink-0 mt-0.5" style={{ color: item.color }} />
                      <p>{item.note}</p>
                    </div>
                  )}
                </div>

                <div 
                  className="rounded-2xl p-5 border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)]"
                >
                  <h3 className="text-sm font-bold uppercase tracking-wider mb-2 text-[var(--muted)]">Tác dụng với cây</h3>
                  <div className="flex gap-3">
                    <ChevronRight className="w-5 h-5 shrink-0 mt-0.5" style={{ color: item.color }} />
                    <p className="text-[var(--text)] leading-relaxed">
                      {item.effect}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mô hình 3D */}
        <div className="max-w-6xl mx-auto flex flex-col gap-10 mt-16">
          <h3 className="text-3xl font-extrabold text-[var(--text)] mb-6 text-center animate-fade-in-up stagger-4">Mô hình 3D các hợp chất phân bón</h3>
          {phanBonModels.map((model, index) => (
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
