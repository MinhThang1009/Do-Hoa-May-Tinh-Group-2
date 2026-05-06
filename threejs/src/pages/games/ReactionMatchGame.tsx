import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, FlaskConical, PlayCircle, RotateCcw, Trophy, XCircle } from "lucide-react";
import { AutoPlayVideo } from "../../components/AutoPlayVideo";
import { MoleculeViewer } from "../../components/MoleculeViewer";
import { SplitTextTitle } from "../../components/SplitTextTitle";

type Choice = {
  id: string;
  text: string;
};

type ReactionChallenge = {
  id: string;
  title: string;
  reactants: string;
  prompt: string;
  correctChoiceId: string;
  choices: Choice[];
  explanation: string;
  videoUrl?: string;
  models: {
    label: string;
    formula: string;
    url: string;
    color: string;
    rgb: string;
  }[];
};

const challenges: ReactionChallenge[] = [
  {
    id: "naoh-hcl",
    title: "Phản ứng trung hòa",
    reactants: "NaOH + HCl",
    prompt: "Chọn sản phẩm đúng của phản ứng.",
    correctChoiceId: "nacl-water",
    choices: [
      { id: "nacl-water", text: "NaCl + H2O" },
      { id: "nah-hclo", text: "NaH + HClO" },
      { id: "na2o-cl2", text: "Na2O + Cl2" },
      { id: "no-reaction", text: "Không phản ứng" },
    ],
    explanation: "H+ của acid kết hợp với OH- của bazơ tạo nước; Na+ và Cl- tạo muối NaCl.",
    videoUrl: "/videos/molecular/3_NaOH_HCl.mp4",
    models: [
      { label: "Chất tham gia", formula: "NaOH", url: "/models/NaOH.glb", color: "#22c55e", rgb: "34, 197, 94" },
      { label: "Chất tham gia", formula: "HCl", url: "/models/HCl.glb", color: "#ef4444", rgb: "239, 68, 68" },
      { label: "Sản phẩm", formula: "NaCl", url: "/models/NaCl.glb", color: "#38bdf8", rgb: "56, 189, 248" },
    ],
  },
  {
    id: "naoh-litmus",
    title: "Bazơ với quỳ tím",
    reactants: "NaOH + quỳ tím",
    prompt: "Hiện tượng nào xảy ra?",
    correctChoiceId: "blue-litmus",
    choices: [
      { id: "red-litmus", text: "Quỳ tím chuyển đỏ" },
      { id: "blue-litmus", text: "Quỳ tím chuyển xanh" },
      { id: "gas", text: "Có khí không màu thoát ra" },
      { id: "precipitate", text: "Xuất hiện kết tủa trắng" },
    ],
    explanation: "Dung dịch NaOH là bazơ mạnh, tạo môi trường kiềm nên làm quỳ tím chuyển xanh.",
    videoUrl: "/videos/2_NaOH_quytim.mp4",
    models: [
      { label: "Bazơ", formula: "NaOH", url: "/models/NaOH.glb", color: "#22c55e", rgb: "34, 197, 94" },
    ],
  },
  {
    id: "hcl-litmus",
    title: "Acid với quỳ tím",
    reactants: "HCl + quỳ tím",
    prompt: "Hiện tượng nào xảy ra?",
    correctChoiceId: "red-litmus",
    choices: [
      { id: "blue-litmus", text: "Quỳ tím chuyển xanh" },
      { id: "red-litmus", text: "Quỳ tím chuyển đỏ" },
      { id: "salt-water", text: "Tạo muối và nước" },
      { id: "green-solution", text: "Dung dịch chuyển xanh lục" },
    ],
    explanation: "Dung dịch HCl là acid, tạo môi trường acid nên làm quỳ tím chuyển đỏ.",
    videoUrl: "/videos/0_HCl_quytim.mp4",
    models: [
      { label: "Acid", formula: "HCl", url: "/models/HCl.glb", color: "#ef4444", rgb: "239, 68, 68" },
    ],
  },
  {
    id: "oxide-acid",
    title: "Oxide bazơ với acid",
    reactants: "Fe2O3 + HCl",
    prompt: "Sản phẩm thuộc dạng nào?",
    correctChoiceId: "salt-water",
    choices: [
      { id: "acid-base", text: "Acid + bazơ" },
      { id: "salt-water", text: "Muối + nước" },
      { id: "oxide-water", text: "Oxide + nước" },
      { id: "metal-hydrogen", text: "Kim loại + hydrogen" },
    ],
    explanation: "Oxide bazơ tác dụng với acid tạo muối và nước.",
    videoUrl: "/videos/5_fe2o3_hcl.mp4",
    models: [
      { label: "Acid", formula: "HCl", url: "/models/HCl.glb", color: "#ef4444", rgb: "239, 68, 68" },
    ],
  },
  {
    id: "mg-hcl",
    title: "Acid tác dụng với kim loại",
    reactants: "Mg + HCl",
    prompt: "Chọn sản phẩm đúng của phản ứng.",
    correctChoiceId: "mgcl2-h2",
    choices: [
      { id: "mgcl2-h2", text: "MgCl2 + H2" },
      { id: "mgo-hcl", text: "MgO + HCl" },
      { id: "mgoh2-cl2", text: "Mg(OH)2 + Cl2" },
      { id: "no-reaction", text: "Không phản ứng" },
    ],
    explanation: "Acid tác dụng với kim loại hoạt động tạo muối và khí hydrogen.",
    videoUrl: "/videos/molecular/1_Mg+HCl.mp4",
    models: [
      { label: "Acid", formula: "HCl", url: "/models/HCl.glb", color: "#ef4444", rgb: "239, 68, 68" },
    ],
  },
  {
    id: "co2-caoh2",
    title: "Oxide acid với dung dịch bazơ",
    reactants: "CO2 + Ca(OH)2",
    prompt: "Hiện tượng/sản phẩm chính ban đầu là gì?",
    correctChoiceId: "caco3-water",
    choices: [
      { id: "caco3-water", text: "CaCO3↓ + H2O" },
      { id: "cao-h2co3", text: "CaO + H2CO3" },
      { id: "ca-h2-o2", text: "Ca + H2 + O2" },
      { id: "blue-litmus", text: "Quỳ tím chuyển xanh" },
    ],
    explanation: "CO2 làm nước vôi trong vẩn đục do tạo kết tủa CaCO3 màu trắng.",
    videoUrl: "/videos/4_tCa(OH)2+CO2.mp4",
    models: [
      { label: "Oxide acid", formula: "CO2", url: "/models/CO2.glb", color: "#8b5cf6", rgb: "139, 92, 246" },
    ],
  },
  {
    id: "fe-cuso4",
    title: "Muối tác dụng với kim loại",
    reactants: "Fe + CuSO4",
    prompt: "Chọn sản phẩm đúng của phản ứng.",
    correctChoiceId: "feso4-cu",
    choices: [
      { id: "feso4-cu", text: "FeSO4 + Cu" },
      { id: "fecl2-cu", text: "FeCl2 + Cu" },
      { id: "cuo-fes", text: "CuO + FeS" },
      { id: "no-reaction", text: "Không phản ứng" },
    ],
    explanation: "Fe hoạt động hóa học mạnh hơn Cu nên đẩy Cu ra khỏi dung dịch CuSO4, tạo FeSO4 và Cu.",
    videoUrl: "/videos/molecular/6_CuSO4+Fe.mp4",
    models: [
      { label: "Muối ban đầu", formula: "CuSO4", url: "/models/CuSO4.glb", color: "#38bdf8", rgb: "56, 189, 248" },
      { label: "Muối mới", formula: "FeSO4", url: "/models/FeSO4.glb", color: "#22c55e", rgb: "34, 197, 94" },
    ],
  },
  {
    id: "bacl2-h2so4",
    title: "Muối tác dụng với acid",
    reactants: "BaCl2 + H2SO4",
    prompt: "Chọn sản phẩm đúng của phản ứng.",
    correctChoiceId: "baso4-hcl",
    choices: [
      { id: "baso4-hcl", text: "BaSO4↓ + 2HCl" },
      { id: "bacl-hso4", text: "BaCl + HSO4" },
      { id: "baoh2-cl2", text: "Ba(OH)2 + Cl2" },
      { id: "no-reaction", text: "Không phản ứng" },
    ],
    explanation: "BaSO4 là chất kết tủa trắng, vì vậy phản ứng trao đổi xảy ra.",
    videoUrl: "/videos/7_BaCl2+H2SO4.mp4",
    models: [
      { label: "Acid", formula: "H2SO4", url: "/models/H2SO4.glb", color: "#ef4444", rgb: "239, 68, 68" },
    ],
  },
  {
    id: "cuso4-naoh",
    title: "Muối tác dụng với bazơ",
    reactants: "CuSO4 + NaOH",
    prompt: "Sản phẩm nào có kết tủa xanh?",
    correctChoiceId: "cuoh2-na2so4",
    choices: [
      { id: "cuoh2-na2so4", text: "Cu(OH)2↓ + Na2SO4" },
      { id: "cuo-na2s", text: "CuO + Na2S" },
      { id: "nacl-cuso4", text: "NaCl + CuSO4" },
      { id: "h2-cu-na", text: "H2 + Cu + Na" },
    ],
    explanation: "Dung dịch muối CuSO4 tác dụng với NaOH tạo kết tủa Cu(OH)2 màu xanh.",
    videoUrl: "/videos/molecular/9_CuSO4+NaOH.mp4",
    models: [
      { label: "Muối", formula: "CuSO4", url: "/models/CuSO4.glb", color: "#38bdf8", rgb: "56, 189, 248" },
      { label: "Bazơ", formula: "NaOH", url: "/models/NaOH.glb", color: "#22c55e", rgb: "34, 197, 94" },
    ],
  },
  {
    id: "na2so4-bacl2",
    title: "Hai muối tác dụng với nhau",
    reactants: "Na2SO4 + BaCl2",
    prompt: "Chọn sản phẩm đúng của phản ứng trao đổi.",
    correctChoiceId: "baso4-nacl",
    choices: [
      { id: "baso4-nacl", text: "BaSO4↓ + 2NaCl" },
      { id: "nacl-baso3", text: "NaCl + BaSO3" },
      { id: "baoh2-na2cl", text: "Ba(OH)2 + Na2Cl" },
      { id: "no-reaction", text: "Không phản ứng" },
    ],
    explanation: "Hai dung dịch muối phản ứng khi tạo chất kết tủa. BaSO4 là kết tủa trắng.",
    videoUrl: "/videos/molecular/8_Na2SO4+BaCl2.mp4",
    models: [
      { label: "Sản phẩm tan", formula: "NaCl", url: "/models/NaCl.glb", color: "#38bdf8", rgb: "56, 189, 248" },
    ],
  },
  {
    id: "h2so4-naoh",
    title: "Acid tác dụng với bazơ",
    reactants: "H2SO4 + NaOH",
    prompt: "Chọn dạng sản phẩm của phản ứng trung hòa.",
    correctChoiceId: "salt-water",
    choices: [
      { id: "salt-water", text: "Muối + nước" },
      { id: "acid-oxide", text: "Acid + oxide" },
      { id: "metal-hydrogen", text: "Kim loại + hydrogen" },
      { id: "salt-gas", text: "Muối + khí CO2" },
    ],
    explanation: "Acid tác dụng với bazơ là phản ứng trung hòa, sản phẩm là muối và nước.",
    models: [
      { label: "Acid", formula: "H2SO4", url: "/models/H2SO4.glb", color: "#ef4444", rgb: "239, 68, 68" },
      { label: "Bazơ", formula: "NaOH", url: "/models/NaOH.glb", color: "#22c55e", rgb: "34, 197, 94" },
    ],
  },
  {
    id: "hcl-naco3",
    title: "Acid tác dụng với muối carbonate",
    reactants: "HCl + Na2CO3",
    prompt: "Khí nào thoát ra trong phản ứng?",
    correctChoiceId: "co2",
    choices: [
      { id: "h2", text: "H2" },
      { id: "co2", text: "CO2" },
      { id: "o2", text: "O2" },
      { id: "cl2", text: "Cl2" },
    ],
    explanation: "Acid tác dụng với muối carbonate tạo muối mới, nước và khí CO2.",
    models: [
      { label: "Acid", formula: "HCl", url: "/models/HCl.glb", color: "#ef4444", rgb: "239, 68, 68" },
      { label: "Khí thoát ra", formula: "CO2", url: "/models/CO2.glb", color: "#8b5cf6", rgb: "139, 92, 246" },
    ],
  },
];

export function ReactionMatchGame() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | null>>({});
  const [selectedModelIndex, setSelectedModelIndex] = useState(0);

  const activeChallenge = challenges[activeIndex];
  const selectedChoiceId = answers[activeChallenge.id] ?? null;
  const selectedChoice = activeChallenge.choices.find((choice) => choice.id === selectedChoiceId) ?? null;
  const isAnswered = selectedChoiceId !== null;
  const isCorrect = selectedChoiceId === activeChallenge.correctChoiceId;
  const selectedModel = activeChallenge.models[selectedModelIndex] ?? activeChallenge.models[0];

  const score = useMemo(
    () =>
      challenges.reduce((total, challenge) => {
        return answers[challenge.id] === challenge.correctChoiceId ? total + 1 : total;
      }, 0),
    [answers]
  );

  const chooseAnswer = (choiceId: string) => {
    setAnswers((current) => ({ ...current, [activeChallenge.id]: choiceId }));
  };

  const goToChallenge = (index: number) => {
    setActiveIndex(index);
    setSelectedModelIndex(0);
  };

  const resetGame = () => {
    setAnswers({});
    setActiveIndex(0);
    setSelectedModelIndex(0);
  };

  return (
    <div className="min-h-screen page-enter relative overflow-hidden pb-24">
      <div className="container mx-auto px-4 py-12 relative z-10">
        <header className="text-center mb-12">
          <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full mb-5">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[rgba(34,197,94,0.14)] to-[rgba(239,68,68,0.10)] border border-[rgba(34,197,94,0.25)]" />
            <div className="absolute inset-0 rounded-full ring-pulse" />
            <FlaskConical className="relative w-10 h-10 text-emerald-400 chem-icon-glow" />
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-400 mb-3">
            Game phản ứng hóa học
          </p>
          <SplitTextTitle
            text="Ghép sản phẩm phản ứng"
            className="text-4xl md:text-6xl font-extrabold mb-5 text-[var(--text)]"
            highlightWords={["sản", "phẩm"]}
            highlightColor="#22c55e"
          />
          <p className="max-w-3xl mx-auto text-lg text-[var(--muted)] leading-relaxed">
            Quan sát chất tham gia, chọn sản phẩm hoặc hiện tượng đúng. Trả lời đúng sẽ mở phần video
            và mô hình 3D liên quan đến phản ứng.
          </p>
        </header>

        <section className="max-w-6xl mx-auto mb-8 grid lg:grid-cols-[1fr_auto] gap-4">
          <div className="glass-panel rounded-2xl p-4 flex flex-wrap gap-2 chem-shimmer-border animated-border-card">
            {challenges.map((challenge, index) => {
              const answer = answers[challenge.id];
              const isActive = index === activeIndex;
              const answeredCorrectly = answer === challenge.correctChoiceId;

              return (
                <button
                  key={challenge.id}
                  type="button"
                  onClick={() => goToChallenge(index)}
                  className={`rounded-full px-4 py-2.5 border text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-emerald-500/20 border-emerald-400/40 text-emerald-200"
                      : "bg-white/5 border-white/10 text-[var(--muted)] hover:bg-white/10"
                  }`}
                >
                  Câu {index + 1}
                  {answer && (
                    answeredCorrectly ? (
                      <CheckCircle2 className="inline-block w-4 h-4 ml-2 text-emerald-400" />
                    ) : (
                      <XCircle className="inline-block w-4 h-4 ml-2 text-red-400" />
                    )
                  )}
                </button>
              );
            })}
          </div>

          <div className="glass-panel rounded-2xl px-6 py-4 flex items-center justify-between gap-5 min-w-72">
            <div className="flex items-center gap-3">
              <Trophy className="w-6 h-6 text-amber-400" />
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-amber-400">Điểm</p>
                <p className="text-2xl font-black text-[var(--text)]">{score}/{challenges.length}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={resetGame}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 bg-white/5 border border-white/10 text-[var(--text)] font-bold hover:bg-white/10 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Làm lại
            </button>
          </div>
        </section>

        <section className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-6">
          <div className="rounded-2xl glass-panel chem-shimmer-border animated-border-card overflow-hidden">
            <div className="p-7 border-b border-white/10 bg-gradient-to-br from-emerald-500/10 to-sky-500/5">
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">
                {activeChallenge.title}
              </p>
              <div className="rounded-2xl border border-emerald-400/25 bg-emerald-500/10 px-5 py-6 text-center mb-5">
                <p className="chem-equation text-4xl md:text-5xl font-black text-[var(--text)]">
                  {activeChallenge.reactants} → ?
                </p>
              </div>
              <p className="text-[var(--muted)] leading-relaxed">{activeChallenge.prompt}</p>
            </div>

            <div className="p-5 space-y-3">
              {activeChallenge.choices.map((choice) => {
                const isSelected = selectedChoiceId === choice.id;
                const isRightChoice = choice.id === activeChallenge.correctChoiceId;
                const showCorrect = isAnswered && isRightChoice;
                const showWrong = isAnswered && isSelected && !isRightChoice;

                return (
                  <button
                    key={choice.id}
                    type="button"
                    onClick={() => chooseAnswer(choice.id)}
                    className={`w-full rounded-2xl px-5 py-4 border text-left transition-all duration-300 ${
                      showCorrect
                        ? "bg-emerald-500/15 border-emerald-400/40"
                        : showWrong
                          ? "bg-red-500/15 border-red-400/40"
                          : isSelected
                            ? "bg-sky-500/15 border-sky-400/40"
                            : "bg-white/5 border-white/10 hover:bg-white/10 hover:scale-[1.01]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="chem-equation text-xl font-extrabold text-[var(--text)]">{choice.text}</span>
                      {showCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
                      {showWrong && <XCircle className="w-5 h-5 text-red-400 shrink-0" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl glass-panel chem-shimmer-border animated-border-card overflow-hidden">
            {!isAnswered && (
              <div className="min-h-[520px] flex flex-col items-center justify-center text-center p-8">
                <FlaskConical className="w-14 h-14 text-[var(--muted)] mb-4 opacity-70" />
                <h2 className="text-2xl font-extrabold text-[var(--text)] mb-3">Chọn một đáp án</h2>
                <p className="max-w-md text-[var(--muted)] leading-relaxed">
                  Sau khi trả lời, phần giải thích, video hoặc mô hình phân tử sẽ hiện ở đây.
                </p>
              </div>
            )}

            {isAnswered && !isCorrect && (
              <div className="min-h-[520px] flex flex-col items-center justify-center text-center p-8">
                <XCircle className="w-14 h-14 text-red-400 mb-4" />
                <h2 className="text-2xl font-extrabold text-[var(--text)] mb-3">Chưa đúng</h2>
                <p className="max-w-md text-[var(--muted)] leading-relaxed mb-5">
                  Bạn đã chọn <span className="chem-equation text-red-300 font-bold">{selectedChoice?.text}</span>.
                  Hãy thử lại để mở video và mô hình của phản ứng.
                </p>
              </div>
            )}

            {isAnswered && isCorrect && (
              <div>
                {activeChallenge.videoUrl && (
                  <div className="relative aspect-video bg-black/20 border-b border-white/10 overflow-hidden">
                    <AutoPlayVideo
                      className="w-full h-full object-cover"
                      controls
                      preload="metadata"
                      src={activeChallenge.videoUrl}
                    />
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/45 text-white backdrop-blur-md border border-white/15">
                      <PlayCircle className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider">Minh họa phản ứng</span>
                    </div>
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-400/25 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-emerald-300" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-extrabold text-[var(--text)] mb-2">Đáp án đúng</h2>
                      <p className="text-sm text-[var(--muted)] leading-relaxed">{activeChallenge.explanation}</p>
                    </div>
                  </div>

                  {activeChallenge.models.length > 0 && (
                    <div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {activeChallenge.models.map((model, index) => {
                          const isSelected = index === selectedModelIndex;

                          return (
                            <button
                              key={`${activeChallenge.id}-${model.formula}-${index}`}
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
              </div>
            )}
          </div>
        </section>

        <div className="max-w-6xl mx-auto mt-8 flex justify-end">
          <button
            type="button"
            onClick={() => goToChallenge((activeIndex + 1) % challenges.length)}
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-sky-500/15 border border-sky-400/30 text-sky-300 font-bold hover:bg-sky-500/25 transition-colors"
          >
            Câu tiếp theo
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
