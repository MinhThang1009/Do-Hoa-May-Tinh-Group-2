import { AlertTriangle, Info, Factory, Microscope } from "lucide-react";
import { AnimatedBeaker } from "../components/AnimatedIcons";
import { SplitTextTitle } from "../components/SplitTextTitle";

const acids = [
  {
    name: "H₂SO₄",
    fullName: "Sulfuric Acid",
    vietnameseName: "Acid Sulfuric",
    color: "#f59e0b",
    rgb: "245, 158, 11",
    description:
      "Là chất lỏng không màu, không bay hơi, sánh như dầu, nặng gần gấp hai lần nước. Tan vô hạn trong nước và toả nhiều nhiệt.",
    warning: "Không được tự ý pha loãng dung dịch sulfuric acid đặc.",
    properties: [
      "Chất lỏng không màu, không bay hơi",
      "Sánh như dầu, nặng gần gấp đôi nước",
      "Tan vô hạn trong nước, toả nhiệt mạnh",
      "Là hoá chất được tiêu thụ nhiều nhất trên thế giới",
    ],
    applications: [
      "Sản xuất phẩm nhuộm",
      "Sản xuất giấy, tơ sợi",
      "Sản xuất sơn",
      "Sản xuất chất dẻo",
      "Sản xuất chất tẩy rửa",
      "Sản xuất phân bón",
    ],
  },
  {
    name: "HCl",
    fullName: "Hydrochloric Acid",
    vietnameseName: "Acid Clohidric",
    color: "#22c55e",
    rgb: "34, 197, 94",
    description:
      "Dung dịch hydrochloric acid (HCl) là chất lỏng không màu. Hydrochloric acid được sử dụng nhiều trong các ngành công nghiệp và đóng vai trò quan trọng trong quá trình tiêu hoá.",
    warning: "Nếu nồng độ acid trong dạ dày không phù hợp sẽ ảnh hưởng đến chức năng tiêu hoá và sức khoẻ.",
    properties: [
      "Dung dịch không màu, dùng nhiều trong công nghiệp",
      "Thúc đẩy quá trình tiêu hoá thức ăn trong dạ dày",
      "Kích thích ruột non và tuyến tụy sản xuất enzyme tiêu hoá",
      "Phân giải chất béo, protein và tiêu diệt vi khuẩn có hại",
    ],
    applications: [
      "Tẩy gỉ thép",
      "Tổng hợp chất hữu cơ",
      "Xử lí pH nước bể bơi",
    ],
  },
  {
    name: "CH₃COOH",
    fullName: "Acetic Acid",
    vietnameseName: "Acid Acetic",
    color: "#8b5cf6",
    rgb: "139, 92, 246",
    description:
      "Acetic acid là chất lỏng không màu, có vị chua. Trong giấm ăn có chứa acetic acid với nồng độ 2–5%.",
    warning: "Khi dùng sản phẩm chứa acetic acid để tẩy rửa: cần đeo găng tay, không để dính vào da và rửa tay sau khi sử dụng.",
    properties: [
      "Chất lỏng không màu, có vị chua đặc trưng",
      "Trong giấm ăn chứa 2–5% acetic acid",
      "Phản ứng với cặn đá vôi (CaCO₃), dùng làm sạch dụng cụ đun nước",
    ],
    applications: [
      "Sản xuất sợi poly (vinyl acetate)",
      "Sản xuất sơn",
      "Chế biến thực phẩm (giấm ăn)",
      "Sản xuất dược phẩm",
    ],
  },
];

const comparisonRows = [
  { label: "Công thức",    values: ["H₂SO₄",         "HCl",      "CH₃COOH"] },
  { label: "Phân tử khối", values: ["98",             "36,5",     "60"] },
  { label: "Trạng thái",   values: ["Lỏng sánh",      "Khí → dd", "Lỏng"] },
  { label: "Tính acid",    values: ["Mạnh",           "Mạnh",     "Yếu"] },
  { label: "H linh động",  values: ["2",              "1",        "1"] },
  { label: "Gốc acid",     values: ["SO₄²⁻",          "Cl⁻",      "CH₃COO⁻"] },
];

export function Chapter3() {
  return (
    <div className="min-h-screen page-enter relative overflow-hidden pb-24">
      <div className="container mx-auto px-4 py-12 relative z-10">

        <div className="text-center mb-14">
          <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full mb-5">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[rgba(94,234,212,0.12)] to-[rgba(251,191,36,0.08)] border border-[rgba(94,234,212,0.25)]" />
            <div className="absolute inset-0 rounded-full ring-pulse" />
            <div className="w-14 h-14 relative z-10 drop-shadow-lg chem-icon-glow">
              <AnimatedBeaker color="#5eead4" />
            </div>
          </div>
          <SplitTextTitle
            text="Phần 3: Một số Acid thông dụng"
            className="text-5xl font-extrabold mb-3 text-[var(--text)]"
            highlightWords={["Acid"]}
            highlightColor="var(--accent-2)"
          />
          <p className="max-w-3xl mx-auto mt-4 text-lg text-[var(--muted)] leading-relaxed">
            Ba acid thông dụng trong đời sống và công nghiệp: H₂SO₄, HCl và CH₃COOH.
          </p>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col gap-10">
          {acids.map((acid, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden glass-panel card-hover-lift chem-shimmer-border animated-border-card animate-fade-in-up stagger-${index + 1}`}
              style={{ borderColor: `rgba(${acid.rgb}, 0.20)` }}
            >
              {/* Header */}
              <div
                className="p-7 border-b"
                style={{
                  borderBottomColor: `rgba(${acid.rgb}, 0.12)`,
                  background: `linear-gradient(135deg, rgba(${acid.rgb}, 0.05) 0%, transparent 60%)`,
                }}
              >
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-4 border"
                  style={{
                    color: acid.color,
                    borderColor: `rgba(${acid.rgb}, 0.25)`,
                    background: `rgba(${acid.rgb}, 0.06)`,
                  }}
                >
                  ⚗ Acid thông dụng
                </span>
                <div className="flex flex-col sm:flex-row sm:items-end gap-2 mb-3">
                  <h2 className="text-4xl font-extrabold" style={{ color: acid.color }}>
                    {acid.name}
                  </h2>
                  <div className="sm:mb-1">
                    <span className="text-lg font-semibold text-[var(--text)]">{acid.vietnameseName}</span>
                    <span className="text-sm text-[var(--muted-2)] italic ml-2">({acid.fullName})</span>
                  </div>
                </div>
                <p className="text-sm text-[var(--muted)] leading-relaxed max-w-3xl">
                  {acid.description}
                </p>
                {acid.warning && (
                  <div
                    className="mt-4 flex items-start gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium"
                    style={{
                      color: acid.color,
                      borderColor: `rgba(${acid.rgb}, 0.25)`,
                      background: `rgba(${acid.rgb}, 0.06)`,
                    }}
                  >
                    <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                    {acid.warning}
                  </div>
                )}
              </div>

              {/* Properties + Applications */}
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-6 md:border-r" style={{ borderColor: `rgba(${acid.rgb}, 0.10)` }}>
                  <h3 className="text-sm font-bold text-[var(--text)] mb-3 flex items-center gap-2 uppercase tracking-wider">
                    <Microscope className="w-4 h-4" style={{ color: acid.color }} />
                    Tính chất
                  </h3>
                  <ul className="space-y-2.5">
                    {acid.properties.map((prop, pi) => (
                      <li key={pi} className="flex items-start gap-2.5 text-sm text-[var(--muted)]">
                        <span className="mt-1.5 w-2 h-2 rounded-full shrink-0" style={{ background: acid.color }} />
                        {prop}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 border-t md:border-t-0" style={{ borderColor: `rgba(${acid.rgb}, 0.10)` }}>
                  <h3 className="text-sm font-bold text-[var(--text)] mb-3 flex items-center gap-2 uppercase tracking-wider">
                    <Factory className="w-4 h-4" style={{ color: acid.color }} />
                    Ứng dụng
                  </h3>
                  <ul className="space-y-2.5">
                    {acid.applications.map((app, ai) => (
                      <li key={ai} className="flex items-start gap-2.5 text-sm text-[var(--muted)]">
                        <span className="mt-1.5 w-2 h-2 rounded-full shrink-0" style={{ background: acid.color }} />
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mt-16 animate-fade-in-up">
          <h2 className="text-2xl font-extrabold text-[var(--text)] mb-6 text-center flex items-center justify-center gap-3">
            <Info className="w-6 h-6 text-[var(--accent)]" />
            Bảng so sánh ba acid thông dụng
          </h2>
          <div className="rounded-2xl overflow-x-auto glass-panel chem-shimmer-border animated-border-card">
            <table className="w-full min-w-[500px] text-sm">
              <thead>
                <tr className="border-b border-[var(--border)]" style={{ background: "rgba(var(--accent-rgb),0.04)" }}>
                  <th className="text-left px-6 py-4 text-[var(--muted-2)] font-bold uppercase tracking-wider text-xs w-[28%]">
                    Tiêu chí
                  </th>
                  {acids.map((a, i) => (
                    <th key={i} className="text-center px-4 py-4 font-extrabold text-base w-[24%]" style={{ color: a.color }}>
                      {a.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, ri) => (
                  <tr
                    key={ri}
                    className="border-b border-[rgba(var(--accent-rgb),0.06)] hover:bg-[rgba(var(--accent-rgb),0.02)] transition-colors"
                  >
                    <td className="px-6 py-3.5 text-[var(--muted)] font-medium">{row.label}</td>
                    {row.values.map((v, vi) => (
                      <td key={vi} className="text-center px-4 py-3.5 text-[var(--text)] chem-equation font-medium">
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div
          className="max-w-4xl mx-auto mt-14 rounded-2xl p-8 glass-panel card-hover-lift animate-fade-in-up chem-shimmer-border animated-border-card overflow-hidden"
          style={{ background: "rgba(239, 68, 68, 0.08)", borderColor: "rgba(239, 68, 68, 0.3)" }}
        >
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[rgba(239,68,68,0.10)] border border-[rgba(239,68,68,0.20)] shrink-0">
              <AlertTriangle className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-[var(--text)] mb-3">🧯 An toàn khi sử dụng Acid</h3>
              <ul className="space-y-2.5 text-[var(--muted)] leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 w-2 h-2 rounded-full shrink-0 bg-red-400" />
                  <span>Luôn đeo <strong className="text-[var(--text)]">kính bảo hộ</strong> và <strong className="text-[var(--text)]">găng tay</strong> khi thí nghiệm.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 w-2 h-2 rounded-full shrink-0 bg-red-400" />
                  <span>Pha loãng H₂SO₄ đặc: <strong className="text-red-300">rót từ từ acid vào nước</strong>, không làm ngược.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 w-2 h-2 rounded-full shrink-0 bg-red-400" />
                  <span>Không để sản phẩm có acid mạnh dính vào <strong className="text-[var(--text)]">da, quần áo</strong>; đọc kỹ hướng dẫn sử dụng.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 w-2 h-2 rounded-full shrink-0 bg-red-400" />
                  <span>Nếu dính acid vào da, rửa ngay bằng <strong className="text-[var(--text)]">nhiều nước sạch</strong>.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
