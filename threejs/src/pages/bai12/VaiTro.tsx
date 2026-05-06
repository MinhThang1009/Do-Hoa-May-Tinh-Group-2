import { ArrowLeft, Leaf, Droplets, Info, Sun, Sprout } from "lucide-react";
import { Link } from "react-router-dom";
import { SplitTextTitle } from "../../components/SplitTextTitle";

const daLuong = [
  {
    element: "Nitrogen",
    symbol: "N",
    role: "Đảm bảo cho cây sinh trưởng và phát triển tốt, tham gia điều tiết các quá trình trao đổi chất của cây.",
    color: "#3b82f6", // blue
    rgb: "59, 130, 246",
    icon: <Leaf className="w-6 h-6" />
  },
  {
    element: "Phosphorus",
    symbol: "P",
    role: "Cần cho cây trồng nở hoa, đậu quả và phát triển bộ rễ.",
    color: "#f59e0b", // amber
    rgb: "245, 158, 11",
    icon: <Sprout className="w-6 h-6" />
  },
  {
    element: "Potassium",
    symbol: "K",
    role: "Chuyển hoá năng lượng trong quá trình đồng hoá các chất trong cây, làm cho cây ra nhiều nhánh, phân cành nhiều.",
    color: "#8b5cf6", // violet
    rgb: "139, 92, 246",
    icon: <Sun className="w-6 h-6" />
  }
];

export function VaiTro() {
  return (
    <div className="min-h-screen page-enter pb-24">
      {/* Navigation Breadcrumb */}
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
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.2)] mb-6">
            <Leaf className="w-8 h-8 text-emerald-500" />
          </div>
          <SplitTextTitle text="Vai Trò Của Dưỡng Chất" className="text-4xl md:text-6xl font-extrabold mb-4" />
          <p className="text-lg text-[var(--muted)] max-w-3xl mx-auto leading-relaxed">
            Cây trồng cần các nguyên tố đa lượng, trung lượng và vi lượng để cấu tạo nên tế bào, điều chỉnh trao đổi chất và tăng cường sức đề kháng.
          </p>
        </header>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Section 1: Đa lượng */}
          <div className="glass-panel rounded-3xl p-8 md:p-10 border border-emerald-500/20 card-hover-lift">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--text)] mb-8 flex items-center gap-3">
              <span className="w-2 h-8 rounded-full bg-emerald-500 block"></span>
              Vai trò của nguyên tố Đa lượng
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {daLuong.map((item, idx) => (
                <div 
                  key={idx} 
                  className="rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1"
                  style={{ 
                    borderColor: `rgba(${item.rgb}, 0.3)`, 
                    backgroundColor: `rgba(${item.rgb}, 0.05)` 
                  }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ 
                        color: item.color, 
                        backgroundColor: `rgba(${item.rgb}, 0.15)`,
                        borderColor: `rgba(${item.rgb}, 0.3)`,
                        borderWidth: 1
                      }}
                    >
                      <span className="text-xl font-black">{item.symbol}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--text)]">{item.element}</h3>
                    </div>
                  </div>
                  <p className="text-[var(--text)] opacity-90 leading-relaxed text-sm">
                    {item.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Vi lượng & Nhu cầu */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-panel rounded-3xl p-8 border border-sky-500/20 card-hover-lift">
              <div className="w-12 h-12 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center mb-6 text-sky-400">
                <Droplets className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--text)] mb-4">Nguyên tố vi lượng</h3>
              <p className="text-[var(--text)] opacity-90 leading-relaxed mb-4">
                Các nguyên tố vi lượng như <strong className="text-sky-400">Zn, Mn, Fe, Cu...</strong> tuy cần hàm lượng ít nhưng không thể thiếu đối với cây trồng.
              </p>
              <div className="bg-sky-500/10 border border-sky-500/20 rounded-xl p-4 flex gap-3">
                <Info className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <p className="text-sm text-[var(--text)] opacity-80">
                  Chúng giúp kích thích quá trình sinh trưởng và trao đổi chất của cây trồng.
                </p>
              </div>
            </div>

            <div className="glass-panel rounded-3xl p-8 border border-amber-500/20 card-hover-lift">
              <h3 className="text-2xl font-bold text-[var(--text)] mb-4">Khái niệm Phân bón hóa học</h3>
              <p className="text-[var(--text)] opacity-90 leading-relaxed mb-6">
                Nhu cầu nước và muối khoáng ở từng loài và từng giai đoạn phát triển của cây là khác nhau. Để sinh trưởng và phát triển tốt, đảm bảo năng suất, cây trồng cần được bổ sung thêm các nguyên tố khoáng.
              </p>
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5 border-l-4 border-l-amber-500">
                <p className="text-base text-[var(--text)] font-semibold leading-relaxed">
                  Phân bón hoá học là những hoá chất có chứa các nguyên tố dinh dưỡng, được bón cho cây nhằm nâng cao năng suất cây trồng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
