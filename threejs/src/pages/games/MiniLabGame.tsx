import { useMemo, useState } from "react";
import { Beaker, CheckCircle2, Droplets, FlaskConical, PlayCircle, RotateCcw, TestTube2 } from "lucide-react";
import { MoleculeViewer } from "../../components/MoleculeViewer";
import { SplitTextTitle } from "../../components/SplitTextTitle";

type ChemicalId = "naoh" | "hcl" | "litmus";
type ReactionId = "base-litmus" | "acid-litmus" | "neutralization" | "mixed";

type Chemical = {
  id: ChemicalId;
  name: string;
  formula: string;
  color: string;
  rgb: string;
  description: string;
};

type ReactionResult = {
  id: ReactionId;
  title: string;
  equation: string;
  observation: string;
  explanation: string;
  liquidClass: string;
  videoUrl?: string;
  models: {
    label: string;
    formula: string;
    url: string;
    color: string;
    rgb: string;
  }[];
};

const chemicals: Chemical[] = [
  {
    id: "naoh",
    name: "Dung dịch NaOH",
    formula: "NaOH",
    color: "#22c55e",
    rgb: "34, 197, 94",
    description: "Bazơ mạnh, tạo môi trường kiềm.",
  },
  {
    id: "hcl",
    name: "Dung dịch HCl",
    formula: "HCl",
    color: "#ef4444",
    rgb: "239, 68, 68",
    description: "Acid mạnh, tạo môi trường acid.",
  },
  {
    id: "litmus",
    name: "Quỳ tím",
    formula: "Quỳ tím",
    color: "#a855f7",
    rgb: "168, 85, 247",
    description: "Đổi màu trong môi trường acid/bazơ.",
  },
];

const defaultLiquidClass = "from-slate-400/20 via-purple-400/15 to-slate-400/20";

const reactionResults: Record<ReactionId, ReactionResult> = {
  "base-litmus": {
    id: "base-litmus",
    title: "NaOH làm quỳ tím chuyển xanh",
    equation: "NaOH + quỳ tím → quỳ tím màu xanh",
    observation: "Ống nghiệm chuyển sang màu xanh, cho biết dung dịch có môi trường kiềm.",
    explanation: "NaOH là bazơ tan, tạo ion OH- nên làm quỳ tím chuyển xanh.",
    liquidClass: "from-sky-400/65 via-blue-500/50 to-cyan-300/55",
    videoUrl: "/videos/2_NaOH_quytim.mp4",
    models: [
      { label: "Bazơ", formula: "NaOH", url: "/models/NaOH.glb", color: "#22c55e", rgb: "34, 197, 94" },
    ],
  },
  "acid-litmus": {
    id: "acid-litmus",
    title: "HCl làm quỳ tím chuyển đỏ",
    equation: "HCl + quỳ tím → quỳ tím màu đỏ",
    observation: "Ống nghiệm chuyển sang màu đỏ, cho biết dung dịch có môi trường acid.",
    explanation: "HCl là acid, tạo ion H+ trong dung dịch nên làm quỳ tím chuyển đỏ.",
    liquidClass: "from-red-400/65 via-rose-500/50 to-orange-300/55",
    videoUrl: "/videos/0_HCl_quytim.mp4",
    models: [
      { label: "Acid", formula: "HCl", url: "/models/HCl.glb", color: "#ef4444", rgb: "239, 68, 68" },
    ],
  },
  neutralization: {
    id: "neutralization",
    title: "NaOH trung hòa HCl",
    equation: "NaOH + HCl → NaCl + H2O",
    observation: "Acid và bazơ phản ứng với nhau tạo dung dịch muối, môi trường tiến gần trung tính.",
    explanation: "H+ từ HCl kết hợp với OH- từ NaOH tạo nước; Na+ và Cl- tạo muối NaCl.",
    liquidClass: "from-emerald-300/40 via-slate-200/30 to-sky-300/35",
    videoUrl: "/videos/3_NaOH_HCl.mp4",
    models: [
      { label: "Bazơ", formula: "NaOH", url: "/models/NaOH.glb", color: "#22c55e", rgb: "34, 197, 94" },
      { label: "Acid", formula: "HCl", url: "/models/HCl.glb", color: "#ef4444", rgb: "239, 68, 68" },
      { label: "Muối", formula: "NaCl", url: "/models/NaCl.glb", color: "#38bdf8", rgb: "56, 189, 248" },
    ],
  },
  mixed: {
    id: "mixed",
    title: "Hỗn hợp chưa rõ hiện tượng chính",
    equation: "Chọn đúng cặp chất để quan sát phản ứng",
    observation: "Ống nghiệm có nhiều chất nhưng chưa tạo đúng thí nghiệm trọng tâm.",
    explanation: "Hãy làm lại và thử các cặp: NaOH + quỳ tím, HCl + quỳ tím hoặc NaOH + HCl.",
    liquidClass: "from-purple-400/45 via-slate-400/30 to-amber-300/30",
    models: [],
  },
};

function getReactionResult(addedChemicalIds: ChemicalId[]): ReactionResult | null {
  const uniqueIds = Array.from(new Set(addedChemicalIds));
  const hasNaoh = uniqueIds.includes("naoh");
  const hasHcl = uniqueIds.includes("hcl");
  const hasLitmus = uniqueIds.includes("litmus");

  if (uniqueIds.length < 2) return null;
  if (hasNaoh && hasHcl && !hasLitmus) return reactionResults.neutralization;
  if (hasNaoh && hasLitmus && !hasHcl) return reactionResults["base-litmus"];
  if (hasHcl && hasLitmus && !hasNaoh) return reactionResults["acid-litmus"];

  return reactionResults.mixed;
}

export function MiniLabGame() {
  const [selectedChemicalId, setSelectedChemicalId] = useState<ChemicalId>("naoh");
  const [addedChemicalIds, setAddedChemicalIds] = useState<ChemicalId[]>([]);
  const [dropAnimationKey, setDropAnimationKey] = useState(0);
  const [selectedModelIndex, setSelectedModelIndex] = useState(0);

  const selectedChemical = chemicals.find((chemical) => chemical.id === selectedChemicalId) ?? chemicals[0];
  const reactionResult = useMemo(() => getReactionResult(addedChemicalIds), [addedChemicalIds]);
  const selectedModel = reactionResult?.models[selectedModelIndex] ?? reactionResult?.models[0] ?? null;

  const addChemicalToTube = () => {
    setAddedChemicalIds((current) => [...current, selectedChemicalId]);
    setDropAnimationKey((current) => current + 1);
    setSelectedModelIndex(0);
  };

  const resetExperiment = () => {
    setAddedChemicalIds([]);
    setDropAnimationKey(0);
    setSelectedModelIndex(0);
  };

  const addedChemicals = addedChemicalIds.map(
    (chemicalId, index) => chemicals.find((chemical) => chemical.id === chemicalId) ?? chemicals[index % chemicals.length]
  );
  const liquidClass = reactionResult?.liquidClass ?? (addedChemicalIds.length > 0 ? "from-purple-400/35 via-sky-400/25 to-emerald-300/25" : defaultLiquidClass);

  return (
    <div className="min-h-screen page-enter relative overflow-hidden pb-24">
      <div className="container mx-auto px-4 py-12 relative z-10">
        <header className="text-center mb-12">
          <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full mb-5">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[rgba(56,189,248,0.14)] to-[rgba(34,197,94,0.10)] border border-[rgba(56,189,248,0.25)]" />
            <div className="absolute inset-0 rounded-full ring-pulse" />
            <TestTube2 className="relative w-10 h-10 text-sky-400 chem-icon-glow" />
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-sky-400 mb-3">
            Phòng thí nghiệm mini
          </p>
          <SplitTextTitle
            text="Thử phản ứng Bài 9"
            className="text-4xl md:text-6xl font-extrabold mb-5 text-[var(--text)]"
            highlightWords={["phản", "ứng"]}
            highlightColor="#38bdf8"
          />
          <p className="max-w-3xl mx-auto text-lg text-[var(--muted)] leading-relaxed">
            Chọn hóa chất, nhỏ vào ống nghiệm và quan sát hiện tượng. Các phản ứng đúng sẽ mở video
            và mô hình 3D liên quan.
          </p>
        </header>

        <section className="max-w-6xl mx-auto grid xl:grid-cols-[0.85fr_1.15fr] gap-6">
          <div className="space-y-6">
            <div className="rounded-2xl glass-panel chem-shimmer-border animated-border-card overflow-hidden">
              <div className="p-6 border-b border-white/10">
                <p className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-2">Tủ hóa chất</p>
                <h2 className="text-2xl font-extrabold text-[var(--text)]">Chọn chất cần nhỏ</h2>
              </div>

              <div className="p-5 space-y-3">
                {chemicals.map((chemical) => {
                  const isSelected = selectedChemicalId === chemical.id;

                  return (
                    <button
                      key={chemical.id}
                      type="button"
                      onClick={() => setSelectedChemicalId(chemical.id)}
                      className="w-full rounded-2xl p-4 border text-left transition-all duration-300 hover:scale-[1.01]"
                      style={{
                        borderColor: `rgba(${chemical.rgb}, ${isSelected ? 0.58 : 0.18})`,
                        background: isSelected ? `rgba(${chemical.rgb}, 0.15)` : "rgba(255,255,255,0.04)",
                        boxShadow: isSelected ? `0 12px 30px rgba(${chemical.rgb}, 0.16)` : "none",
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border"
                          style={{
                            borderColor: `rgba(${chemical.rgb}, 0.3)`,
                            background: `rgba(${chemical.rgb}, 0.12)`,
                            color: chemical.color,
                          }}
                        >
                          <Droplets className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="chem-equation text-2xl font-extrabold text-[var(--text)]">{chemical.formula}</p>
                          <p className="text-sm font-bold mb-1" style={{ color: chemical.color }}>{chemical.name}</p>
                          <p className="text-xs text-[var(--muted)] leading-relaxed">{chemical.description}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl glass-panel p-5 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={addChemicalToTube}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 bg-sky-500/15 border border-sky-400/30 text-sky-300 font-bold hover:bg-sky-500/25 transition-colors"
              >
                <Droplets className="w-4 h-4" />
                Nhỏ vào ống nghiệm
              </button>
              <button
                type="button"
                onClick={resetExperiment}
                className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 bg-white/5 border border-white/10 text-[var(--text)] font-bold hover:bg-white/10 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                Làm lại
              </button>
            </div>
          </div>

          <div className="rounded-2xl glass-panel chem-shimmer-border animated-border-card overflow-hidden">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] min-h-[560px]">
              <div className="relative border-b lg:border-b-0 lg:border-r border-white/10 p-7 flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/8 via-transparent to-emerald-500/8" />

                {dropAnimationKey > 0 && (
                  <div
                    key={dropAnimationKey}
                    className="absolute top-24 left-1/2 w-5 h-8 rounded-full z-20 animate-[dropFall_0.75s_ease-in_forwards]"
                    style={{ background: selectedChemical.color, boxShadow: `0 0 24px rgba(${selectedChemical.rgb}, 0.55)` }}
                  />
                )}

                <div className="relative w-56 h-[430px]">
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 w-40 h-8 rounded-full border-4 border-white/35 bg-white/10 backdrop-blur-sm z-20" />
                  <div className="absolute left-1/2 -translate-x-1/2 top-3 w-36 h-[380px] rounded-b-[4rem] rounded-t-3xl border-4 border-white/25 bg-white/5 overflow-hidden shadow-[inset_0_0_24px_rgba(255,255,255,0.12)]">
                    <div className={`absolute bottom-0 left-0 right-0 h-[58%] bg-gradient-to-b ${liquidClass} transition-all duration-700`}>
                      <div className="absolute inset-x-0 top-0 h-6 bg-white/25 blur-sm" />
                      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.7),transparent_18%),radial-gradient(circle_at_70%_55%,rgba(255,255,255,0.45),transparent_15%)]" />
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-52 h-8 rounded-full bg-black/20 blur-md" />
                </div>

                <div className="relative mt-6 w-full">
                  <p className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-3 text-center">
                    Đã nhỏ vào ống nghiệm
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 min-h-10">
                    {addedChemicals.length === 0 && (
                      <span className="text-sm text-[var(--muted)]">Chưa có hóa chất</span>
                    )}
                    {addedChemicals.map((chemical, index) => (
                      <span
                        key={`${chemical.id}-${index}`}
                        className="chem-equation rounded-full px-3 py-1.5 text-sm font-bold border"
                        style={{
                          color: chemical.color,
                          borderColor: `rgba(${chemical.rgb}, 0.28)`,
                          background: `rgba(${chemical.rgb}, 0.08)`,
                        }}
                      >
                        {chemical.formula}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-7">
                {!reactionResult && (
                  <div className="h-full min-h-[420px] flex flex-col items-center justify-center text-center">
                    <FlaskConical className="w-14 h-14 text-[var(--muted)] mb-4 opacity-70" />
                    <h2 className="text-2xl font-extrabold text-[var(--text)] mb-3">Bắt đầu thí nghiệm</h2>
                    <p className="max-w-md text-[var(--muted)] leading-relaxed">
                      Hãy nhỏ ít nhất hai chất vào ống nghiệm. Thử `NaOH + quỳ tím` hoặc `NaOH + HCl`.
                    </p>
                  </div>
                )}

                {reactionResult && (
                  <div>
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-400/25 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-emerald-300" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">Kết quả</p>
                        <h2 className="text-3xl font-extrabold text-[var(--text)] mb-3">{reactionResult.title}</h2>
                        <p className="chem-equation text-xl font-extrabold text-[var(--text)] mb-3">{reactionResult.equation}</p>
                        <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">{reactionResult.observation}</p>
                        <p className="text-sm text-[var(--muted)] leading-relaxed">{reactionResult.explanation}</p>
                      </div>
                    </div>

                    {reactionResult.videoUrl && (
                      <div className="relative aspect-video bg-black/20 rounded-2xl border border-white/10 overflow-hidden mb-6">
                        <video
                          className="w-full h-full object-cover"
                          controls
                          preload="metadata"
                          playsInline
                          src={reactionResult.videoUrl}
                        />
                        <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/45 text-white backdrop-blur-md border border-white/15">
                          <PlayCircle className="w-4 h-4" />
                          <span className="text-xs font-bold uppercase tracking-wider">Video thí nghiệm</span>
                        </div>
                      </div>
                    )}

                    {reactionResult.models.length > 0 && selectedModel && (
                      <div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {reactionResult.models.map((model, index) => {
                            const isSelected = index === selectedModelIndex;

                            return (
                              <button
                                key={`${reactionResult.id}-${model.formula}-${index}`}
                                type="button"
                                onClick={() => setSelectedModelIndex(index)}
                                className="chem-equation rounded-full px-4 py-2 text-sm font-bold border transition-all duration-300 hover:scale-105"
                                style={{
                                  color: isSelected ? "#fff" : model.color,
                                  borderColor: `rgba(${model.rgb}, ${isSelected ? 0.7 : 0.28})`,
                                  background: isSelected ? model.color : `rgba(${model.rgb}, 0.08)`,
                                  boxShadow: isSelected ? `0 10px 24px rgba(${model.rgb}, 0.24)` : "none",
                                }}
                              >
                                {model.formula}
                              </button>
                            );
                          })}
                        </div>

                        <div className="rounded-2xl overflow-hidden border" style={{ borderColor: `rgba(${selectedModel.rgb}, 0.22)` }}>
                          <div
                            className="relative h-72"
                            style={{
                              background: `radial-gradient(ellipse at center, rgba(${selectedModel.rgb}, 0.08), transparent 70%)`,
                            }}
                          >
                            <MoleculeViewer url={selectedModel.url} className="absolute inset-0" />
                          </div>
                          <div className="p-4 text-center border-t" style={{ borderColor: `rgba(${selectedModel.rgb}, 0.16)` }}>
                            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: selectedModel.color }}>
                              {selectedModel.label}
                            </p>
                            <h3 className="chem-equation text-3xl font-extrabold text-[var(--text)]">{selectedModel.formula}</h3>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
