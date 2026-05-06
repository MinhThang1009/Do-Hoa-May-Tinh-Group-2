import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, FlaskConical, Gamepad2, RotateCcw, Trophy, XCircle } from "lucide-react";
import { SplitTextTitle } from "../../components/SplitTextTitle";

type CategoryId = "acid" | "base" | "oxide" | "salt";

type Compound = {
  id: string;
  formula: string;
  name: string;
  category: CategoryId;
};

type Category = {
  id: CategoryId;
  title: string;
  hint: string;
  color: string;
  rgb: string;
};

const categories: Category[] = [
  {
    id: "acid",
    title: "Acid",
    hint: "Có H đứng đầu, tan trong nước tạo H+",
    color: "#ef4444",
    rgb: "239, 68, 68",
  },
  {
    id: "base",
    title: "Bazơ",
    hint: "Thường có nhóm OH liên kết với kim loại",
    color: "#22c55e",
    rgb: "34, 197, 94",
  },
  {
    id: "oxide",
    title: "Oxide",
    hint: "Gồm oxygen và một nguyên tố khác",
    color: "#38bdf8",
    rgb: "56, 189, 248",
  },
  {
    id: "salt",
    title: "Muối",
    hint: "Thường gồm ion kim loại và gốc acid",
    color: "#f59e0b",
    rgb: "245, 158, 11",
  },
];

const compounds: Compound[] = [
  { id: "hcl", formula: "HCl", name: "Hydrochloric acid", category: "acid" },
  { id: "h2so4", formula: "H2SO4", name: "Sulfuric acid", category: "acid" },
  { id: "hno3", formula: "HNO3", name: "Nitric acid", category: "acid" },
  { id: "naoh", formula: "NaOH", name: "Sodium hydroxide", category: "base" },
  { id: "baoh2", formula: "Ba(OH)2", name: "Barium hydroxide", category: "base" },
  { id: "caoh2", formula: "Ca(OH)2", name: "Calcium hydroxide", category: "base" },
  { id: "co2", formula: "CO2", name: "Carbon dioxide", category: "oxide" },
  { id: "fe2o3", formula: "Fe2O3", name: "Iron(III) oxide", category: "oxide" },
  { id: "cao", formula: "CaO", name: "Calcium oxide", category: "oxide" },
  { id: "nacl", formula: "NaCl", name: "Sodium chloride", category: "salt" },
  { id: "cuso4", formula: "CuSO4", name: "Copper(II) sulfate", category: "salt" },
  { id: "bacl2", formula: "BaCl2", name: "Barium chloride", category: "salt" },
];

const emptyPlacements = Object.fromEntries(compounds.map((compound) => [compound.id, null])) as Record<
  string,
  CategoryId | null
>;

export function ClassificationGame() {
  const [placements, setPlacements] = useState<Record<string, CategoryId | null>>(emptyPlacements);
  const [selectedCompoundId, setSelectedCompoundId] = useState<string | null>(null);
  const [hasChecked, setHasChecked] = useState(false);

  const score = useMemo(
    () =>
      compounds.reduce((total, compound) => {
        return placements[compound.id] === compound.category ? total + 1 : total;
      }, 0),
    [placements]
  );

  const placedCount = useMemo(
    () => compounds.filter((compound) => placements[compound.id] !== null).length,
    [placements]
  );

  const selectedCompound = compounds.find((compound) => compound.id === selectedCompoundId) ?? null;

  const placeCompound = (compoundId: string, categoryId: CategoryId | null) => {
    setPlacements((current) => ({ ...current, [compoundId]: categoryId }));
    setSelectedCompoundId(null);
    setHasChecked(false);
  };

  const resetGame = () => {
    setPlacements(emptyPlacements);
    setSelectedCompoundId(null);
    setHasChecked(false);
  };

  const getCompoundsForCategory = (categoryId: CategoryId) =>
    compounds.filter((compound) => placements[compound.id] === categoryId);

  const unplacedCompounds = compounds.filter((compound) => placements[compound.id] === null);

  return (
    <div className="min-h-screen page-enter relative overflow-hidden pb-24">
      <div className="container mx-auto px-4 py-12 relative z-10">
        <header className="text-center mb-12">
          <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full mb-5">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[rgba(56,189,248,0.14)] to-[rgba(245,158,11,0.10)] border border-[rgba(56,189,248,0.25)]" />
            <div className="absolute inset-0 rounded-full ring-pulse" />
            <Gamepad2 className="relative w-10 h-10 text-sky-400 chem-icon-glow" />
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-sky-400 mb-3">
            Game tổng ôn Chương 2
          </p>
          <SplitTextTitle
            text="Phân loại hợp chất"
            className="text-4xl md:text-6xl font-extrabold mb-5 text-[var(--text)]"
            highlightWords={["hợp", "chất"]}
            highlightColor="#38bdf8"
          />
          <p className="max-w-3xl mx-auto text-lg text-[var(--muted)] leading-relaxed">
            Kéo công thức vào đúng nhóm Acid, Bazơ, Oxide hoặc Muối. Trên thiết bị cảm ứng, bấm chọn
            công thức rồi bấm vào nhóm cần đặt.
          </p>
        </header>

        <section className="max-w-6xl mx-auto mb-8 grid lg:grid-cols-[1fr_auto] gap-4 items-stretch">
          <div className="glass-panel rounded-2xl p-5 chem-shimmer-border animated-border-card">
            <div className="flex flex-wrap items-center gap-3">
              {unplacedCompounds.map((compound) => {
                const isSelected = selectedCompoundId === compound.id;

                return (
                  <button
                    key={compound.id}
                    type="button"
                    draggable
                    onClick={() => setSelectedCompoundId(isSelected ? null : compound.id)}
                    onDragStart={(event) => event.dataTransfer.setData("compoundId", compound.id)}
                    className={`chem-equation rounded-2xl px-4 py-3 border text-lg font-extrabold transition-all duration-300 ${
                      isSelected ? "scale-105 bg-sky-500/20 border-sky-400 shadow-[0_0_24px_rgba(56,189,248,0.22)]" : "bg-white/5 border-white/10 hover:scale-105 hover:bg-white/10"
                    }`}
                  >
                    {compound.formula}
                  </button>
                );
              })}

              {unplacedCompounds.length === 0 && (
                <p className="text-sm font-semibold text-[var(--muted)]">
                  Tất cả công thức đã được đặt. Bấm kiểm tra để xem kết quả.
                </p>
              )}
            </div>
          </div>

          <div className="glass-panel rounded-2xl px-6 py-5 flex items-center justify-between lg:justify-center lg:flex-col gap-4 min-w-64">
            <div className="flex items-center gap-3">
              <Trophy className="w-6 h-6 text-amber-400" />
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-amber-400">Điểm</p>
                <p className="text-2xl font-black text-[var(--text)]">
                  {hasChecked ? `${score}/${compounds.length}` : `${placedCount}/${compounds.length}`}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setHasChecked(true)}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 font-bold hover:bg-emerald-500/25 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4" />
                Kiểm tra
              </button>
              <button
                type="button"
                onClick={resetGame}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 bg-white/5 border border-white/10 text-[var(--text)] font-bold hover:bg-white/10 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                Làm lại
              </button>
            </div>
          </div>
        </section>

        {selectedCompound && (
          <div className="max-w-6xl mx-auto mb-6 rounded-2xl border border-sky-400/25 bg-sky-500/10 px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-sm font-semibold text-[var(--text)]">
              Đang chọn <span className="chem-equation text-sky-300 font-extrabold">{selectedCompound.formula}</span>.
              Bấm vào một nhóm bên dưới để thả.
            </p>
            <button
              type="button"
              onClick={() => setSelectedCompoundId(null)}
              className="text-sm font-bold text-sky-300 hover:text-sky-200"
            >
              Bỏ chọn
            </button>
          </div>
        )}

        <section className="max-w-6xl mx-auto grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {categories.map((category) => {
            const categoryCompounds = getCompoundsForCategory(category.id);

            return (
              <div
                key={category.id}
                onDragOver={(event) => event.preventDefault()}
                onDrop={(event) => {
                  event.preventDefault();
                  const compoundId = event.dataTransfer.getData("compoundId");
                  if (compoundId) placeCompound(compoundId, category.id);
                }}
                onClick={() => {
                  if (selectedCompoundId) placeCompound(selectedCompoundId, category.id);
                }}
                className="min-h-[360px] rounded-2xl glass-panel chem-shimmer-border animated-border-card overflow-hidden cursor-pointer"
                style={{ borderColor: `rgba(${category.rgb}, 0.28)` }}
              >
                <div
                  className="p-5 border-b"
                  style={{
                    borderColor: `rgba(${category.rgb}, 0.18)`,
                    background: `linear-gradient(135deg, rgba(${category.rgb}, 0.10), transparent 70%)`,
                  }}
                >
                  <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: category.color }}>
                    Nhóm chất
                  </p>
                  <h2 className="text-3xl font-extrabold text-[var(--text)] mb-2">{category.title}</h2>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{category.hint}</p>
                </div>

                <div className="p-4 space-y-3">
                  {categoryCompounds.map((compound) => {
                    const isCorrect = placements[compound.id] === compound.category;
                    const showResult = hasChecked;

                    return (
                      <button
                        key={compound.id}
                        type="button"
                        draggable
                        onClick={(event) => {
                          event.stopPropagation();
                          placeCompound(compound.id, null);
                        }}
                        onDragStart={(event) => event.dataTransfer.setData("compoundId", compound.id)}
                        className={`w-full rounded-xl px-4 py-3 text-left border transition-all duration-300 ${
                          showResult
                            ? isCorrect
                              ? "bg-emerald-500/15 border-emerald-400/35"
                              : "bg-red-500/15 border-red-400/35"
                            : "bg-white/5 border-white/10 hover:bg-white/10"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="chem-equation text-xl font-extrabold text-[var(--text)]">{compound.formula}</p>
                            <p className="text-xs text-[var(--muted)]">{compound.name}</p>
                          </div>
                          {showResult && (
                            isCorrect ? (
                              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                            ) : (
                              <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                            )
                          )}
                        </div>
                      </button>
                    );
                  })}

                  {categoryCompounds.length === 0 && (
                    <div className="h-40 rounded-xl border border-dashed border-white/15 flex items-center justify-center px-5 text-center">
                      <p className="text-sm text-[var(--muted)]">Thả công thức vào đây</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </section>

        {hasChecked && (
          <div className="max-w-4xl mx-auto mt-10 rounded-2xl p-6 glass-panel chem-shimmer-border animated-border-card">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-400/25 flex items-center justify-center shrink-0">
                <ArrowRight className="w-5 h-5 text-emerald-300" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-[var(--text)] mb-2">
                  {score === compounds.length ? "Hoàn thành chính xác" : "Xem lại các ô màu đỏ"}
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  Mẹo nhớ nhanh: acid thường bắt đầu bằng H; bazơ thường có nhóm OH; oxide có oxygen
                  kết hợp với một nguyên tố khác; muối thường gồm kim loại và gốc acid.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
