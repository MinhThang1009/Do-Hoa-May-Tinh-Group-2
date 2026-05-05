import { CheckCircle2, Droplets, FlaskConical, PlayCircle, Scale, ShieldAlert, TestTubes } from "lucide-react";
import { AnimatedFlask } from "../components/AnimatedIcons";
import { MoleculeViewer } from "../components/MoleculeViewer";
import { SplitTextTitle } from "../components/SplitTextTitle";

const experiments = [
  {
    order: "2",
    title: "NaOH + quỳ tím",
    subtitle: "Base làm đổi màu chất chỉ thị",
    videoUrl: "/videos/2_NaOH_quytim.mp4",
    color: "#38bdf8",
    rgb: "56, 189, 248",
    equation: "NaOH → Na+ + OH-",
    observation: "Nhỏ dung dịch NaOH vào giấy quỳ tím, giấy quỳ chuyển từ tím sang xanh.",
    conclusion: "Dung dịch base làm quỳ tím chuyển xanh do có môi trường kiềm.",
    icon: <Droplets className="w-6 h-6" />,
  },
  {
    order: "3",
    title: "NaOH + HCl",
    subtitle: "Phản ứng trung hòa",
    videoUrl: "/videos/3_NaOH_HCl.mp4",
    color: "#22c55e",
    rgb: "34, 197, 94",
    equation: "NaOH + HCl → NaCl + H2O",
    observation: "Dung dịch base phản ứng với dung dịch acid, tạo thành dung dịch muối và nước.",
    conclusion: "Base tác dụng với acid tạo muối và nước. Phản ứng này gọi là phản ứng trung hòa.",
    icon: <Scale className="w-6 h-6" />,
  },
];

const moleculeCards = [
  {
    name: "NaOH",
    label: "Base",
    modelUrl: "/models/NaOH.glb",
    color: "#38bdf8",
    rgb: "56, 189, 248",
  },
  {
    name: "HCl",
    label: "Acid",
    modelUrl: "/models/HCl.glb",
    color: "#ef4444",
    rgb: "239, 68, 68",
  },
  {
    name: "NaCl",
    label: "Muối tạo thành",
    modelUrl: "/models/NaCl.glb",
    color: "#22c55e",
    rgb: "34, 197, 94",
  },
];

const molecularReactionVideos = [
  {
    title: "NaOH + quỳ tím",
    videoUrl: "/videos/2_NaOH_quytim.mp4",
    equation: "NaOH → Na+ + OH-",
    description: "Dung dịch NaOH tạo môi trường kiềm, làm quỳ tím chuyển xanh.",
    color: "#38bdf8",
    rgb: "56, 189, 248",
    molecules: ["NaOH", "OH-"],
  },
  {
    title: "NaOH + HCl",
    videoUrl: "/videos/3_NaOH_HCl.mp4",
    equation: "NaOH + HCl → NaCl + H2O",
    description: "Phản ứng trung hòa giữa base và acid tạo muối NaCl cùng nước.",
    color: "#22c55e",
    rgb: "34, 197, 94",
    molecules: ["NaOH", "HCl", "NaCl"],
  },
];

export function Chapter2() {
  return (
    <div className="min-h-screen page-enter relative overflow-hidden pb-24">
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-14">
          <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full mb-5">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[rgba(56,189,248,0.14)] to-[rgba(34,197,94,0.08)] border border-[rgba(56,189,248,0.25)]" />
            <div className="absolute inset-0 rounded-full ring-pulse" />
            <div className="w-14 h-14 relative z-10 drop-shadow-lg chem-icon-glow">
              <AnimatedFlask color="#38bdf8" />
            </div>
          </div>
          <SplitTextTitle
            text="Phần 2: Tính chất hóa học"
            className="text-4xl md:text-5xl font-extrabold mb-3 text-[var(--text)]"
            highlightWords={["hóa", "học"]}
            highlightColor="#38bdf8"
          />
          <p className="max-w-3xl mx-auto mt-4 text-lg text-[var(--muted)] leading-relaxed">
            Hai thí nghiệm trọng tâm của Bài 9: NaOH làm quỳ tím chuyển xanh và NaOH phản ứng
            với HCl tạo muối NaCl cùng nước.
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          {experiments.map((experiment, index) => (
            <section
              key={experiment.title}
              className={`rounded-2xl overflow-hidden glass-panel card-hover-lift chem-shimmer-border animated-border-card animate-fade-in-up stagger-${index + 1}`}
              style={{ borderColor: `rgba(${experiment.rgb}, 0.24)` }}
            >
              <div
                className="flex flex-col lg:flex-row"
                style={{ background: `linear-gradient(135deg, rgba(${experiment.rgb}, 0.06), transparent 60%)` }}
              >
                <div
                  className="relative w-full lg:w-[58%] border-b lg:border-b-0 lg:border-r"
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

                <div className="w-full lg:w-[42%] p-7 flex flex-col justify-center">
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
                    className="rounded-xl px-4 py-3 mb-5 border"
                    style={{
                      borderColor: `rgba(${experiment.rgb}, 0.20)`,
                      background: `rgba(${experiment.rgb}, 0.06)`,
                    }}
                  >
                    <p className="chem-equation text-lg font-bold text-[var(--text)]">{experiment.equation}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <TestTubes className="w-5 h-5 mt-0.5 shrink-0" style={{ color: experiment.color }} />
                      <p className="text-sm text-[var(--muted)] leading-relaxed">{experiment.observation}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0 text-emerald-400" />
                      <p className="text-sm text-[var(--muted)] leading-relaxed">{experiment.conclusion}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className="max-w-6xl mx-auto mt-14 grid md:grid-cols-3 gap-6 animate-fade-in-up stagger-3">
          {moleculeCards.map((molecule) => (
            <div
              key={molecule.name}
              className="rounded-2xl overflow-hidden glass-panel card-hover-lift chem-shimmer-border animated-border-card"
              style={{ borderColor: `rgba(${molecule.rgb}, 0.22)` }}
            >
              <div
                className="relative h-72 border-b"
                style={{
                  background: `radial-gradient(ellipse at center, rgba(${molecule.rgb}, 0.08), transparent 70%)`,
                  borderColor: `rgba(${molecule.rgb}, 0.14)`,
                }}
              >
                <MoleculeViewer url={molecule.modelUrl} className="absolute inset-0" />
              </div>
              <div className="p-5 text-center">
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: molecule.color }}>
                  {molecule.label}
                </p>
                <h3 className="chem-equation text-3xl font-extrabold text-[var(--text)]">{molecule.name}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto mt-14 animate-fade-in-up stagger-4">
          <div className="text-center mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-sky-400 mb-2">
              Video phản ứng phân tử
            </p>
            <h2 className="text-3xl font-extrabold text-[var(--text)]">
              Quan sát phản ứng và mô hình liên quan
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-7">
            {molecularReactionVideos.map((reaction) => (
              <div
                key={reaction.title}
                className="rounded-2xl overflow-hidden glass-panel card-hover-lift chem-shimmer-border animated-border-card"
                style={{ borderColor: `rgba(${reaction.rgb}, 0.24)` }}
              >
                <div className="relative aspect-video bg-black/20 overflow-hidden border-b" style={{ borderColor: `rgba(${reaction.rgb}, 0.16)` }}>
                  <video
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                    playsInline
                    src={reaction.videoUrl}
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/45 text-white backdrop-blur-md border border-white/15">
                    <PlayCircle className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Molecular reaction</span>
                  </div>
                </div>
                <div className="p-6" style={{ background: `linear-gradient(135deg, rgba(${reaction.rgb}, 0.06), transparent 65%)` }}>
                  <h3 className="text-2xl font-extrabold text-[var(--text)] mb-3">{reaction.title}</h3>
                  <div
                    className="inline-block rounded-xl px-4 py-3 mb-4 border"
                    style={{
                      borderColor: `rgba(${reaction.rgb}, 0.22)`,
                      background: `rgba(${reaction.rgb}, 0.06)`,
                    }}
                  >
                    <p className="chem-equation text-base font-bold text-[var(--text)]">{reaction.equation}</p>
                  </div>
                  <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">{reaction.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {reaction.molecules.map((molecule) => (
                      <span
                        key={molecule}
                        className="chem-equation rounded-full px-3 py-1.5 text-xs font-bold border"
                        style={{
                          color: reaction.color,
                          borderColor: `rgba(${reaction.rgb}, 0.26)`,
                          background: `rgba(${reaction.rgb}, 0.08)`,
                        }}
                      >
                        {molecule}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="max-w-4xl mx-auto mt-14 rounded-2xl p-8 glass-panel card-hover-lift animate-fade-in-up chem-shimmer-border animated-border-card overflow-hidden"
          style={{ background: "rgba(251, 191, 36, 0.08)", borderColor: "rgba(251, 191, 36, 0.3)" }}
        >
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[rgba(251,191,36,0.10)] border border-[rgba(251,191,36,0.20)] shrink-0">
              <ShieldAlert className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-[var(--text)] mb-3">Lưu ý an toàn</h3>
              <p className="text-[var(--muted)] leading-relaxed">
                NaOH là base mạnh, có thể gây bỏng da. Khi thí nghiệm cần dùng lượng loãng, đeo kính bảo hộ,
                găng tay và không nếm trực tiếp hóa chất.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
