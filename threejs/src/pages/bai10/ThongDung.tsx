import { Link } from "react-router-dom";
import { AlertTriangle, Info, Factory, Microscope } from "lucide-react";
import { MoleculeViewer } from "../../components/MoleculeViewer";
import { AnimatedBeaker } from "../../components/AnimatedIcons";
import { SplitTextTitle } from "../../components/SplitTextTitle";

const oxides = [
  {
    name: "BaO",
    fullName: "Barium oxide",
    vietnameseName: "Barium oxide",
    modelUrl: "/models/BaO.glb",
    color: "#eab308",
    rgb: "234, 179, 8",
    description:
      "Là chất rắn màu trắng, nóng chảy ở nhiệt độ rất cao (1923°C). Phản ứng mãnh liệt với nước tạo thành dung dịch Barium hydroxide (Ba(OH)₂).",
    properties: [
      "Oxide bazơ mạnh điển hình",
      "Chất rắn màu trắng, hút ẩm",
      "Tác dụng mạnh với nước tạo dung dịch bazơ",
      "Hấp thụ CO₂ trong không khí",
    ],
    applications: [
      "Sản xuất thủy tinh quang học đặc biệt",
      "Dùng làm chất hút ẩm, chất xúc tác",
      "Công nghiệp gốm sứ",
      "Làm nguồn tạo oxygen nguyên tử trong một số phản ứng",
    ],
  },
  {
    name: "Al₂O₃",
    fullName: "Aluminium oxide",
    vietnameseName: "Nhôm oxide (Alumina)",
    modelUrl: "/models/Al2O3.glb",
    color: "#06b6d4",
    rgb: "6, 182, 212",
    description:
      "Là chất rắn màu trắng, rất cứng, không tan trong nước. Trong tự nhiên tồn tại dưới dạng quặng bauxite hoặc đá quý như sa phia, hồng ngọc.",
    properties: [
      "Oxide lưỡng tính (tác dụng với acid và bazơ mạnh)",
      "Nhiệt độ nóng chảy rất cao (2072°C)",
      "Rất cứng, bền vững về mặt hóa học",
      "Không phản ứng với nước",
    ],
    applications: [
      "Nguyên liệu chính để sản xuất nhôm",
      "Làm vật liệu chịu lửa, gốm sứ kỹ thuật",
      "Làm vật liệu mài mòn do có độ cứng cao",
      "Làm đồ trang sức (hồng ngọc, sa phia)",
    ],
  },
  {
    name: "CO₂",
    fullName: "Carbon dioxide",
    vietnameseName: "Khí Cacbonic",
    modelUrl: "/models/CO2.glb",
    color: "#8b5cf6",
    rgb: "139, 92, 246",
    description:
      "Là chất khí không màu, không mùi, nặng hơn không khí, không duy trì sự cháy và sự sống. Ở trạng thái rắn gọi là đá khô.",
    properties: [
      "Oxide acid yếu",
      "Khí không màu, không mùi, nặng hơn không khí",
      "Dập tắt sự cháy",
      "Tạo hiệu ứng nhà kính",
    ],
    applications: [
      "Sản xuất nước giải khát có gas",
      "Bảo quản thực phẩm (dạng đá khô)",
      "Dập tắt hỏa hoạn (bình chữa cháy)",
      "Ứng dụng trong y tế và công nghiệp hóa chất",
    ],
  },
];

const comparisonRows = [
  { label: "Công thức", values: ["BaO", "Al₂O₃", "CO₂"] },
  { label: "Phân loại", values: ["Oxide bazơ", "Oxide lưỡng tính", "Oxide acid"] },
  { label: "Trạng thái", values: ["Rắn (trắng)", "Rắn (trắng)", "Khí (không mùi)"] },
  { label: "Tác dụng với H₂O", values: ["Tạo dung dịch bazơ", "Không phản ứng", "Tạo dung dịch acid yếu"] },
  { label: "Tác dụng với Acid/Bazơ", values: ["Tác dụng với Acid", "Tác dụng với cả hai", "Tác dụng với Bazơ"] },
];

export function ThongDung() {
  return (
    <div className="min-h-screen page-enter relative overflow-hidden pb-24">
      <div className="container mx-auto px-4 py-12 relative z-10">

        <div className="text-center mb-14">
          <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full mb-5">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[rgba(249,115,22,0.12)] to-[rgba(6,182,212,0.08)] border border-[rgba(249,115,22,0.25)]" />
            <div className="absolute inset-0 rounded-full ring-pulse" />
            <div className="w-14 h-14 relative z-10 drop-shadow-lg chem-icon-glow">
              <AnimatedBeaker color="#f97316" />
            </div>
          </div>
          <SplitTextTitle text="Phần 3: Các Oxide thông dụng" className="text-5xl font-extrabold mb-3 text-[var(--text)]" highlightWords={["Oxide"]} highlightColor="#f97316" />
          <p className="max-w-3xl mx-auto mt-4 text-lg text-[var(--muted)] leading-relaxed">
            Ba oxide tiêu biểu với những tính chất đặc trưng khác nhau: BaO (Oxide bazơ), Al₂O₃ (oxide lưỡng tính) và CO₂ (oxide acid).
            Khám phá mô hình phân tử 3D tương tác của từng oxide.
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          {oxides.map((oxide, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden glass-panel card-hover-lift chem-shimmer-border animated-border-card animate-fade-in-up stagger-${index + 1}`}
              style={{ borderColor: `rgba(${oxide.rgb}, 0.20)` }}
            >
              <div className={`flex flex-col ${index === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                <div
                  className={`relative w-full lg:w-[55%] h-80 flex items-center justify-center overflow-hidden bg-gradient-to-br from-black/5 to-transparent ${index === 1 ? "lg:border-l border-b lg:border-b-0" : "lg:border-r border-b lg:border-b-0"
                    }`}
                  style={{
                    background: `radial-gradient(ellipse at center, rgba(${oxide.rgb}, 0.06) 0%, transparent 70%)`,
                    borderColor: `rgba(${oxide.rgb}, 0.15)`,
                  }}
                >
                  <div className="hud-corner hud-corner-tl" style={{ borderColor: oxide.color }} />
                  <div className="hud-corner hud-corner-tr" style={{ borderColor: oxide.color }} />
                  <div className="hud-corner hud-corner-bl" style={{ borderColor: oxide.color }} />
                  <div className="hud-corner hud-corner-br" style={{ borderColor: oxide.color }} />

                  <div className="hud-scanner" />



                  <MoleculeViewer url={oxide.modelUrl} className="absolute inset-0 z-10" />
                  <div
                    className="absolute inset-0 pointer-events-none opacity-[0.02]"
                    style={{
                      backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                </div>

                <div className="w-full lg:w-[45%] p-7 flex flex-col justify-center">
                  <span
                    className="inline-block self-start px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-4 border"
                    style={{
                      color: oxide.color,
                      borderColor: `rgba(${oxide.rgb}, 0.25)`,
                      background: `rgba(${oxide.rgb}, 0.06)`,
                    }}
                  >
                    ⚗ Mô hình 3D
                  </span>
                  <h2 className="text-4xl font-extrabold mb-2" style={{ color: oxide.color }}>
                    {oxide.name}
                  </h2>
                  <p className="text-lg font-semibold text-[var(--text)] mb-0.5">{oxide.vietnameseName}</p>
                  <p className="text-sm text-[var(--muted-2)] italic mb-4">{oxide.fullName}</p>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{oxide.description}</p>
                </div>
              </div>

              <div
                className="grid md:grid-cols-2 gap-0 border-t"
                style={{ borderColor: `rgba(${oxide.rgb}, 0.12)` }}
              >
                <div className="p-6 border-r" style={{ borderColor: `rgba(${oxide.rgb}, 0.10)` }}>
                  <h3 className="text-sm font-bold text-[var(--text)] mb-3 flex items-center gap-2 uppercase tracking-wider">
                    <Microscope className="w-4 h-4" style={{ color: oxide.color }} />
                    Tính chất
                  </h3>
                  <ul className="space-y-2.5">
                    {oxide.properties.map((prop, pi) => (
                      <li key={pi} className="flex items-start gap-2.5 text-sm text-[var(--muted)]">
                        <span className="mt-1.5 w-2 h-2 rounded-full shrink-0" style={{ background: oxide.color }} />
                        {prop}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6">
                  <h3 className="text-sm font-bold text-[var(--text)] mb-3 flex items-center gap-2 uppercase tracking-wider">
                    <Factory className="w-4 h-4" style={{ color: oxide.color }} />
                    Ứng dụng
                  </h3>
                  <ul className="space-y-2.5">
                    {oxide.applications.map((app, ai) => (
                      <li key={ai} className="flex items-start gap-2.5 text-sm text-[var(--muted)]">
                        <span className="mt-1.5 w-2 h-2 rounded-full shrink-0" style={{ background: oxide.color }} />
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
            <Info className="w-6 h-6 text-[#f97316]" />
            Bảng so sánh ba oxide thông dụng
          </h2>
          <div className="rounded-2xl overflow-x-auto glass-panel chem-shimmer-border animated-border-card">
            <table className="w-full min-w-[500px] text-sm">
              <thead>
                <tr className="border-b border-[var(--border)]" style={{ background: "rgba(249,115,22,0.04)" }}>
                  <th className="text-left px-6 py-4 text-[var(--muted-2)] font-bold uppercase tracking-wider text-xs w-[28%]">
                    Tiêu chí
                  </th>
                  {oxides.map((o, i) => (
                    <th key={i} className="text-center px-4 py-4 font-extrabold text-base w-[24%]" style={{ color: o.color }}>
                      {o.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, ri) => (
                  <tr
                    key={ri}
                    className="border-b border-[rgba(249,115,22,0.06)] hover:bg-[rgba(249,115,22,0.02)] transition-colors"
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
              <h3 className="text-xl font-extrabold text-[var(--text)] mb-3">🧯 An toàn khi sử dụng Oxide</h3>
              <ul className="space-y-2.5 text-[var(--muted)] leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 w-2 h-2 rounded-full shrink-0 bg-red-400" />
                  Khi làm việc với các oxide bazơ mạnh như <strong className="text-[var(--text)]">BaO</strong>, phải đeo <strong className="text-[var(--text)]">kính và găng tay</strong> vì chúng có tính ăn mòn cao và khi phản ứng với nước tỏa nhiều nhiệt dễ gây bỏng.
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 w-2 h-2 rounded-full shrink-0 bg-red-400" />
                  <strong className="text-[var(--text)]">Bụi Al₂O₃</strong> siêu mịn có thể gây kích ứng đường hô hấp, cần đeo khẩu trang khi mài mòn các vật liệu nhôm oxide.
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 w-2 h-2 rounded-full shrink-0 bg-red-400" />
                  <strong className="text-[var(--text)]">Đá khô (CO₂ rắn)</strong> rất lạnh (-78.5°C), có thể gây bỏng lạnh, tuyệt đối <strong className="text-red-300">không tiếp xúc bằng tay không</strong>.
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
