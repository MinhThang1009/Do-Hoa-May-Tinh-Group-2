import { ArrowLeft, FlaskConical, PlayCircle, Lightbulb, Beaker } from "lucide-react";
import { Link } from "react-router-dom";
import { SplitTextTitle } from "../../components/SplitTextTitle";

const properties = [
  {
    order: "6",
    title: "1. Tác dụng với kim loại",
    description: "Dung dịch muối có thể tác dụng với một số kim loại tạo thành muối mới và kim loại mới.",
    equation: "Fe + CuSO₄ → FeSO₄ + Cu↓",
    videoUrl: "/videos/6_CuSO4+Fe.mp4",
    molecularVideoUrl: "/videos/molecular/6_CuSO4+Fe.mp4",
    color: "#3b82f6", // Blue
    rgb: "59, 130, 246"
  },
  {
    order: "7",
    title: "2. Tác dụng với dung dịch acid",
    description: "Muối có thể tác dụng với một số dung dịch acid tạo thành muối mới và acid mới. Sản phẩm tạo thành có ít nhất một chất khí, chất ít tan hoặc không tan.",
    equation: "BaCl₂ + H₂SO₄ → BaSO₄↓ + 2HCl",
    videoUrl: "/videos/7_BaCl2+H2SO4.mp4",
    molecularVideoUrl: "/videos/molecular/7_BaCl2+H2SO4.mp4",
    color: "#10b981", // Emerald
    rgb: "16, 185, 129"
  },
  {
    order: "9",
    title: "3. Tác dụng với dung dịch bazơ",
    description: "Dung dịch muối tác dụng với dung dịch bazơ tạo thành muối mới và bazơ mới, trong đó có ít nhất một sản phẩm là chất khí, ít tan hoặc không tan.",
    equation: "CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄",
    videoUrl: "/videos/molecular/9_CuSO4+NaOH.mp4",
    molecularVideoUrl: "/videos/molecular/9_CuSO4+NaOH.mp4",
    color: "#f59e0b", // Amber
    rgb: "245, 158, 11"
  },
  {
    order: "8",
    title: "4. Tác dụng với dung dịch muối",
    description: "Hai dung dịch muối tác dụng với nhau tạo thành hai muối mới, trong đó ít nhất có một muối không tan hoặc ít tan.",
    equation: "Na₂SO₄ + BaCl₂ → BaSO₄↓ + 2NaCl",
    videoUrl: "/videos/molecular/8_Na2SO4+BaCl2.mp4",
    molecularVideoUrl: "/videos/molecular/8_Na2SO4+BaCl2.mp4",
    color: "#8b5cf6", // Violet
    rgb: "139, 92, 246"
  }
];

export function TinhChat() {
  return (
    <div className="min-h-screen page-enter pb-24">


      <div className="container mx-auto px-4 mt-8">
        <header className="text-center mb-16 relative">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-[rgba(139,92,246,0.1)] border border-[rgba(139,92,246,0.2)] mb-6">
            <FlaskConical className="w-8 h-8 text-violet-500" />
          </div>
          <SplitTextTitle text="Tính Chất Hóa Học" className="text-5xl md:text-6xl font-extrabold mb-4" />
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto leading-relaxed">
            Khám phá 4 tính chất hóa học cơ bản của muối thông qua các thí nghiệm trực quan.
          </p>
        </header>

        <div className="max-w-6xl mx-auto space-y-12">
          {properties.map((prop, idx) => (
            <div 
              key={idx}
              className="glass-panel rounded-3xl overflow-hidden border card-hover-lift"
              style={{ borderColor: `rgba(${prop.rgb}, 0.2)` }}
            >
              <div className="flex flex-col" style={{ background: `linear-gradient(135deg, rgba(${prop.rgb}, 0.06), transparent 60%)` }}>
                
                {/* Videos Row */}
                <div className="flex flex-col lg:flex-row border-b" style={{ borderColor: `rgba(${prop.rgb}, 0.16)` }}>
                  {/* Real Video */}
                  <div className="relative w-full lg:w-1/2 border-b lg:border-b-0 lg:border-r" style={{ borderColor: `rgba(${prop.rgb}, 0.16)` }}>
                    <div className="aspect-video bg-black/20 overflow-hidden">
                      <video
                        className="w-full h-full object-cover"
                        controls
                        preload="metadata"
                        playsInline
                        src={prop.videoUrl}
                      />
                    </div>
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/45 text-white backdrop-blur-md border border-white/15">
                      <PlayCircle className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider">Thí nghiệm {prop.order}</span>
                    </div>
                  </div>

                  {/* Molecular Video */}
                  <div className="relative w-full lg:w-1/2">
                    <div className="aspect-video bg-black/20 overflow-hidden">
                      <video
                        className="w-full h-full object-cover"
                        controls
                        preload="metadata"
                        playsInline
                        src={prop.molecularVideoUrl}
                      />
                    </div>
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/45 text-white backdrop-blur-md border border-cyan-400/30">
                      <PlayCircle className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Phản ứng phân tử</span>
                    </div>
                  </div>
                </div>

                {/* Content Row */}
                <div className="w-full p-7 lg:p-10 flex flex-col lg:flex-row items-start gap-8">
                  <div className="w-full lg:w-1/2">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--text)] mb-4">{prop.title}</h2>
                    <div 
                      className="rounded-xl px-5 py-4 border inline-block"
                      style={{ 
                        borderColor: `rgba(${prop.rgb}, 0.3)`, 
                        backgroundColor: `rgba(${prop.rgb}, 0.08)` 
                      }}
                    >
                      <span className="text-xs font-semibold uppercase tracking-wider block mb-2 opacity-70" style={{ color: prop.color }}>Phương trình hóa học</span>
                      <p className="chem-equation text-xl font-bold text-[var(--text)] tracking-wide">
                        {prop.equation}
                      </p>
                    </div>
                  </div>
                  
                  <div className="w-full lg:w-1/2 lg:mt-2">
                    <div className="flex items-start gap-3">
                      <Beaker className="w-5 h-5 mt-1 shrink-0" style={{ color: prop.color }} />
                      <p className="text-base text-[var(--text)] opacity-90 leading-relaxed">
                        {prop.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
