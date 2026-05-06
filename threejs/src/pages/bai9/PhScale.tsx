import { Gauge, Info, Leaf, ShieldCheck, TestTube2 } from "lucide-react";
import { AnimatedBeaker } from "../../components/AnimatedIcons";
import { SplitTextTitle } from "../../components/SplitTextTitle";

const phZones = [
  {
    range: "1 - 6",
    title: "Môi trường acid",
    description: "Dung dịch có pH nhỏ hơn 7. pH càng nhỏ, tính acid càng mạnh.",
    color: "#ef4444",
    rgb: "239, 68, 68",
    examples: ["Dịch dạ dày", "Nước chanh", "Giấm ăn"],
  },
  {
    range: "7",
    title: "Môi trường trung tính",
    description: "Dung dịch có pH bằng 7, điển hình là nước tinh khiết ở điều kiện thường.",
    color: "#22c55e",
    rgb: "34, 197, 94",
    examples: ["Nước tinh khiết", "Dung dịch muối loãng"],
  },
  {
    range: "8 - 14",
    title: "Môi trường kiềm",
    description: "Dung dịch có pH lớn hơn 7. NaOH là dung dịch kiềm mạnh.",
    color: "#38bdf8",
    rgb: "56, 189, 248",
    examples: ["Nước xà phòng", "Nước vôi trong", "Dung dịch NaOH"],
  },
];

const phTicks = Array.from({ length: 14 }, (_, index) => index + 1);

function colorForPh(value: number) {
  if (value < 7) return "#ef4444";
  if (value === 7) return "#22c55e";
  return "#38bdf8";
}

function labelForPh(value: number) {
  if (value < 7) return "Acid";
  if (value === 7) return "Trung tính";
  return "Kiềm";
}

const dailyExamples = [
  { value: 2, name: "Dịch dạ dày", note: "Có tính acid mạnh" },
  { value: 5, name: "Nước mưa", note: "Thường hơi acid" },
  { value: 7, name: "Nước tinh khiết", note: "Trung tính" },
  { value: 8, name: "Máu người", note: "Hơi kiềm" },
  { value: 12, name: "Nước xà phòng", note: "Có tính kiềm" },
];

export function PhScale() {
  return (
    <div className="min-h-screen page-enter relative overflow-hidden pb-24">
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-14">
          <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full mb-5">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[rgba(245,158,11,0.14)] to-[rgba(56,189,248,0.08)] border border-[rgba(245,158,11,0.25)]" />
            <div className="absolute inset-0 rounded-full ring-pulse" />
            <div className="w-14 h-14 relative z-10 drop-shadow-lg chem-icon-glow">
              <AnimatedBeaker color="#f59e0b" />
            </div>
          </div>
          <SplitTextTitle
            text="Phần 3: Thang pH"
            className="text-4xl md:text-5xl font-extrabold mb-3 text-[var(--text)]"
            highlightWords={["pH"]}
            highlightColor="#f59e0b"
          />
          <p className="max-w-3xl mx-auto mt-4 text-lg text-[var(--muted)] leading-relaxed">
            Thang pH gồm các giá trị từ 1 đến 14, dùng để đánh giá độ acid - base của dung dịch.
            Acid có pH nhỏ hơn 7, trung tính bằng 7 và kiềm lớn hơn 7.
          </p>
        </div>

        <div className="max-w-6xl mx-auto rounded-2xl p-6 md:p-8 glass-panel chem-shimmer-border animated-border-card animate-fade-in-up">
          <div className="flex flex-col lg:flex-row gap-8 lg:items-center">
            <div className="lg:w-[38%]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[rgba(245,158,11,0.10)] border border-[rgba(245,158,11,0.22)] text-amber-400">
                  <Gauge className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-amber-400">Bộ chỉ thị</p>
                  <h2 className="text-2xl font-extrabold text-[var(--text)]">Đọc nhanh thang pH</h2>
                </div>
              </div>
              <p className="text-[var(--muted)] leading-relaxed">
                Mỗi ô pH bên phải là một mức độ acid hoặc kiềm. Hãy so sánh màu và vị trí của giá trị pH
                để xác định môi trường dung dịch.
              </p>
            </div>

            <div className="lg:w-[62%]">
              <div className="grid grid-cols-7 md:grid-cols-14 gap-2">
                {phTicks.map((value) => (
                  <div key={value} className="flex flex-col items-center gap-2">
                    <div
                      className="w-full aspect-square rounded-xl flex items-center justify-center text-white font-black shadow-lg border border-white/20"
                      style={{
                        background: colorForPh(value),
                        boxShadow: `0 12px 24px ${colorForPh(value)}33`,
                      }}
                    >
                      {value}
                    </div>
                    <span className="text-[10px] font-bold text-[var(--muted-2)] uppercase">
                      {labelForPh(value)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid grid-cols-3 text-center text-xs font-bold uppercase tracking-widest overflow-hidden rounded-xl border border-[var(--border)]">
                <div className="py-3 bg-red-500/12 text-red-400">Acid</div>
                <div className="py-3 bg-emerald-500/12 text-emerald-400">Trung tính</div>
                <div className="py-3 bg-sky-500/12 text-sky-400">Kiềm</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-3 gap-6">
          {phZones.map((zone, index) => (
            <div
              key={zone.title}
              className={`rounded-2xl p-6 glass-panel card-hover-lift chem-shimmer-border animated-border-card animate-fade-in-up stagger-${index + 1}`}
              style={{ borderColor: `rgba(${zone.rgb}, 0.24)` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-black mb-5"
                style={{
                  color: zone.color,
                  background: `rgba(${zone.rgb}, 0.10)`,
                  border: `1px solid rgba(${zone.rgb}, 0.22)`,
                }}
              >
                {zone.range}
              </div>
              <h3 className="text-xl font-extrabold text-[var(--text)] mb-3">{zone.title}</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">{zone.description}</p>
              <ul className="space-y-2">
                {zone.examples.map((example) => (
                  <li key={example} className="flex items-center gap-2 text-sm text-[var(--muted)]">
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ background: zone.color }} />
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mt-14 animate-fade-in-up">
          <h2 className="text-2xl font-extrabold text-[var(--text)] mb-6 text-center flex items-center justify-center gap-3">
            <Info className="w-6 h-6 text-amber-400" />
            pH trong đời sống
          </h2>
          <div className="rounded-2xl overflow-hidden glass-panel chem-shimmer-border animated-border-card">
            <table className="w-full min-w-[560px] text-sm">
              <thead>
                <tr className="border-b border-[var(--border)]" style={{ background: "rgba(245,158,11,0.06)" }}>
                  <th className="text-left px-6 py-4 text-[var(--muted-2)] font-bold uppercase tracking-wider text-xs">
                    Dung dịch
                  </th>
                  <th className="text-center px-4 py-4 text-[var(--muted-2)] font-bold uppercase tracking-wider text-xs">
                    pH gần đúng
                  </th>
                  <th className="text-left px-6 py-4 text-[var(--muted-2)] font-bold uppercase tracking-wider text-xs">
                    Nhận xét
                  </th>
                </tr>
              </thead>
              <tbody>
                {dailyExamples.map((example) => (
                  <tr key={example.name} className="border-b border-[rgba(245,158,11,0.08)] hover:bg-[rgba(245,158,11,0.03)] transition-colors">
                    <td className="px-6 py-4 text-[var(--text)] font-semibold">{example.name}</td>
                    <td className="px-4 py-4 text-center">
                      <span
                        className="inline-flex items-center justify-center w-10 h-10 rounded-xl text-white font-black"
                        style={{ background: colorForPh(example.value) }}
                      >
                        {example.value}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-[var(--muted)]">{example.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-14 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-7 glass-panel card-hover-lift chem-shimmer-border animated-border-card">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-[rgba(34,197,94,0.10)] border border-[rgba(34,197,94,0.22)] text-emerald-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-[var(--text)] mb-3">Cách xác định pH</h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              Có thể dùng giấy chỉ thị màu vạn năng, bút đo pH hoặc máy đo pH để xác định giá trị pH
              của dung dịch trong học tập và đời sống.
            </p>
          </div>

          <div className="rounded-2xl p-7 glass-panel card-hover-lift chem-shimmer-border animated-border-card">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-[rgba(56,189,248,0.10)] border border-[rgba(56,189,248,0.22)] text-sky-400">
              <TestTube2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-[var(--text)] mb-3">Liên hệ Bài 9</h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              NaOH là dung dịch kiềm nên pH lớn hơn 7 và làm quỳ tím chuyển xanh.
              Khi phản ứng với HCl, dung dịch tiến gần môi trường trung tính nếu lượng acid và base vừa đủ.
            </p>
          </div>
        </div>

        <div
          className="max-w-4xl mx-auto mt-14 rounded-2xl p-8 glass-panel card-hover-lift animate-fade-in-up chem-shimmer-border animated-border-card overflow-hidden"
          style={{ background: "rgba(34, 197, 94, 0.08)", borderColor: "rgba(34, 197, 94, 0.3)" }}
        >
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[rgba(34,197,94,0.10)] border border-[rgba(34,197,94,0.20)] shrink-0">
              <Leaf className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-[var(--text)] mb-3">Ghi nhớ nhanh</h3>
              <p className="text-[var(--muted)] leading-relaxed">
                pH nhỏ hơn 7 là acid, pH bằng 7 là trung tính, pH lớn hơn 7 là kiềm.
                Thang pH giúp so sánh độ mạnh yếu của các acid hoặc base có cùng nồng độ.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
