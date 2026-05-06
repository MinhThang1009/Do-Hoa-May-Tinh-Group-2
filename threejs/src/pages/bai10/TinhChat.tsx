import { CheckCircle2, Droplets, FlaskConical, PlayCircle, Scale, ShieldAlert, Sparkles, TestTubes } from "lucide-react";
import { AnimatedBeaker } from "../../components/AnimatedIcons";
import { SplitTextTitle } from "../../components/SplitTextTitle";

const experiments = [
  {
    order: "1",
    title: "CO₂ + Ca(OH)₂",
    subtitle: "1. Oxide acid tác dụng với dung dịch base",
    videoUrl: "/videos/4_tCa(OH)2+CO2.mp4",
    molecularVideoUrl: "/videos/molecular/4_phantu.mp4",
    color: "#8b5cf6", // Violet
    rgb: "139, 92, 246",
    equation: (
      <>
        CO₂ + Ca(OH)₂ → CaCO₃<span className="text-violet-400">↓</span> + H₂O
        <br />
        <span className="mt-1 inline-block">CaCO₃ + CO₂ + H₂O → Ca(HCO₃)₂</span>
      </>
    ),
    observation: "Sục khí CO₂ vào dung dịch nước vôi trong (Ca(OH)₂), thấy xuất hiện kết tủa trắng (vẩn đục). Tiếp tục sục thêm khí CO₂ thì kết tủa tan dần, dung dịch trong trở lại.",
    conclusion: "Nhiều oxide acid tác dụng với base tạo thành muối và nước.",
    icon: <Droplets className="w-6 h-6" />,
  },
  {
    order: "2",
    title: "Fe₂O₃ + HCl",
    subtitle: "2. Oxide base tác dụng với dung dịch acid",
    videoUrl: "/videos/5_fe2o3_hcl.mp4",
    molecularVideoUrl: "/videos/molecular/5_phantu.mp4",
    color: "#10b981", // Emerald
    rgb: "16, 185, 129",
    equation: "Fe₂O₃ + 6HCl → 2FeCl₃ + 3H₂O",
    observation: "Bột Fe₂O₃ (màu đỏ nâu) tan dần trong dung dịch HCl tạo thành dung dịch có màu vàng nâu.",
    conclusion: "Hầu hết oxide base tác dụng với acid tạo thành muối và nước.",
    icon: <FlaskConical className="w-6 h-6" />,
  },
];

const otherProperties = [
  {
    title: "3. Oxide lưỡng tính",
    icon: <Scale className="w-6 h-6" />,
    accentRgb: "245, 158, 11", // Amber
    content: (
      <>
        <p className="text-[var(--muted)] leading-relaxed mb-4">
          Là những oxide có thể tác dụng được với cả <strong className="text-[var(--text)]">dung dịch acid</strong> và{" "}
          <strong className="text-[var(--text)]">dung dịch base</strong> tạo thành muối và nước.
        </p>
        <div className="flex flex-col items-start gap-2">
          <div className="rounded-xl px-4 py-3 border border-[rgba(245,158,11,0.20)] bg-[rgba(245,158,11,0.04)] inline-block w-auto">
            <span className="text-sm text-[var(--muted)] block mb-1">Ví dụ:</span>
            <p className="chem-equation text-base font-bold text-[var(--text)]">
              Al₂O₃, ZnO...
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    title: "4. Oxide trung tính",
    icon: <Sparkles className="w-6 h-6" />,
    accentRgb: "100, 116, 139", // Slate
    content: (
      <>
        <p className="text-[var(--muted)] leading-relaxed mb-4">
          Còn được gọi là <strong className="text-[var(--text)]">oxide không tạo muối</strong>.
          Đây là những oxide <strong className="text-[#ef4444]">không tác dụng</strong> với acid, base, nước.
        </p>
        <div className="flex flex-col items-start gap-2">
          <div className="rounded-xl px-4 py-3 border border-[rgba(100,116,139,0.20)] bg-[rgba(100,116,139,0.04)] inline-block w-auto">
            <span className="text-sm text-[var(--muted)] block mb-1">Ví dụ:</span>
            <p className="chem-equation text-base font-bold text-[var(--text)]">
              CO, NO...
            </p>
          </div>
        </div>
      </>
    ),
  },
];

export function TinhChat() {
  return (
    <div className="min-h-screen page-enter relative overflow-hidden pb-24">
      <div className="container mx-auto px-4 py-12 relative z-10">

        <div className="text-center mb-14">
          <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full mb-5">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[rgba(139,92,246,0.12)] to-[rgba(16,185,129,0.08)] border border-[rgba(139,92,246,0.25)]" />
            <div className="absolute inset-0 rounded-full ring-pulse" style={{ borderColor: 'rgba(139,92,246,0.5)' }} />
            <div className="w-14 h-14 relative z-10 drop-shadow-lg chem-icon-glow">
              <AnimatedBeaker color="#8b5cf6" />
            </div>
          </div>
          <SplitTextTitle text="Phần 2: Tính chất hóa học" className="text-5xl font-extrabold mb-3 text-[var(--text)]" highlightWords={["hóa", "học"]} highlightColor="#8b5cf6" />
          <p className="max-w-3xl mx-auto mt-4 text-lg text-[var(--muted)] leading-relaxed">
            Quan sát hai thí nghiệm minh họa cho tính chất của Oxide acid và Oxide base, từ đó tìm hiểu cách
            oxide phản ứng với các chất khác nhau.
          </p>
        </div>

        {/* Video Experiments Section */}
        <div className="max-w-6xl mx-auto flex flex-col gap-10 mb-14">
          {experiments.map((experiment, index) => (
            <section
              key={experiment.title}
              className={`rounded-2xl overflow-hidden glass-panel card-hover-lift chem-shimmer-border animated-border-card animate-fade-in-up stagger-${index + 1}`}
              style={{ borderColor: `rgba(${experiment.rgb}, 0.24)` }}
            >
              <div
                className="flex flex-col"
                style={{ background: `linear-gradient(135deg, rgba(${experiment.rgb}, 0.06), transparent 60%)` }}
              >
                {/* Videos Row */}
                <div className="flex flex-col lg:flex-row border-b" style={{ borderColor: `rgba(${experiment.rgb}, 0.16)` }}>
                  {/* Real Video */}
                  <div
                    className="relative w-full lg:w-1/2 border-b lg:border-b-0 lg:border-r"
                    style={{ borderColor: `rgba(${experiment.rgb}, 0.16)` }}
                  >
                    <div className="aspect-video bg-black/20 overflow-hidden">
                      <video
                        className="w-full h-full object-cover"
                        controls
                        preload="metadata"
                        playsInline
                        src={experiment.videoUrl}
                      />
                    </div>
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/45 text-white backdrop-blur-md border border-white/15">
                      <PlayCircle className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider">Thí nghiệm {experiment.order}</span>
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
                        src={experiment.molecularVideoUrl}
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
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{
                        color: experiment.color,
                        background: `rgba(${experiment.rgb}, 0.10)`,
                        border: `1px solid rgba(${experiment.rgb}, 0.22)`,
                      }}
                    >
                      {experiment.icon}
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: experiment.color }}>
                      {experiment.subtitle}
                    </p>
                    <h2 className="text-3xl font-extrabold text-[var(--text)] mb-4">{experiment.title}</h2>
                    <div
                      className="rounded-xl px-4 py-3 border inline-block"
                      style={{
                        borderColor: `rgba(${experiment.rgb}, 0.20)`,
                        background: `rgba(${experiment.rgb}, 0.06)`,
                      }}
                    >
                      <p className="chem-equation text-lg font-bold text-[var(--text)]">{experiment.equation}</p>
                    </div>
                  </div>
                  
                  <div className="w-full lg:w-1/2 space-y-5 lg:mt-6">
                    <div className="flex items-start gap-3">
                      <TestTubes className="w-5 h-5 mt-0.5 shrink-0" style={{ color: experiment.color }} />
                      <p className="text-base text-[var(--muted)] leading-relaxed">{experiment.observation}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0 text-emerald-400" />
                      <p className="text-base text-[var(--muted)] leading-relaxed">{experiment.conclusion}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Other Properties Section */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {otherProperties.map((prop, index) => (
            <div
              key={index}
              className={`group rounded-2xl overflow-hidden glass-panel card-hover-lift chem-shimmer-border animated-border-card animate-fade-in-up stagger-${index + 3}`}
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
                  className="flex items-center justify-center w-10 h-10 rounded-xl transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `rgba(${prop.accentRgb}, 0.08)`,
                    border: `1px solid rgba(${prop.accentRgb}, 0.18)`,
                    color: `rgba(${prop.accentRgb}, 0.9)`,
                  }}
                >
                  {prop.icon}
                </div>
                <h2 className="text-xl font-bold text-[var(--text)] flex-1">{prop.title}</h2>

              </div>
              <div className="px-7 py-6">{prop.content}</div>
            </div>
          ))}
        </div>

        <div
          className="max-w-4xl mx-auto mt-14 rounded-2xl p-8 glass-panel card-hover-lift animate-fade-in-up chem-shimmer-border animated-border-card overflow-hidden"
          style={{ background: "rgba(6, 182, 212, 0.05)", borderColor: "rgba(6, 182, 212, 0.2)" }}
        >
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[rgba(6,182,212,0.10)] border border-[rgba(6,182,212,0.20)] shrink-0">
              <ShieldAlert className="w-6 h-6 text-[#06b6d4]" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-[var(--text)] mb-3">📝 Tổng kết</h3>
              <p className="text-[var(--muted)] leading-relaxed">
                Tên gọi và tính chất hóa học của oxide phụ thuộc trực tiếp vào nguyên tố kết hợp với oxygen.
                Sự phân loại oxide thành 4 nhóm là cơ sở quan trọng để nghiên cứu các phản ứng hóa học vô cơ.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
