import { Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle, Info, Factory, Microscope } from "lucide-react";
import { MoleculeViewer } from "../components/MoleculeViewer";
import { AnimatedBeaker } from "../components/AnimatedIcons";
import { useNavigationVisibility } from "../components/useNavigationVisibility";

// Dữ liệu chi tiết 3 acid thông dụng
const acids = [
  {
    name: "HCl",
    fullName: "Hydrochloric Acid",
    vietnameseName: "Axit Clohidric",
    modelUrl: "/models/HCl.glb",
    color: "#22c55e",
    rgb: "34, 197, 94",
    description:
      "Là chất khí không màu, mùi xốc, tan nhiều trong nước tạo thành dung dịch acid clohidric. Dung dịch HCl đặc (36-38%) bốc khói trong không khí ẩm.",
    properties: [
      "Acid mạnh, phân li hoàn toàn trong nước",
      "Dung dịch không màu, mùi xốc",
      "Có đầy đủ tính chất hóa học của acid",
      "Nồng độ đặc: 36-38%",
    ],
    applications: [
      "Tẩy rỉ sét trong công nghiệp luyện kim",
      "Chế biến thực phẩm (điều chỉnh pH)",
      "Sản xuất hợp chất vô cơ (ZnCl₂, FeCl₃...)",
      "Ứng dụng trong y tế, dược phẩm",
    ],
  },
  {
    name: "HNO₃",
    fullName: "Nitric Acid",
    vietnameseName: "Axit Nitric",
    modelUrl: "/models/HNO3.glb",
    color: "#3b82f6",
    rgb: "59, 130, 246",
    description:
      "Là chất lỏng không màu, bốc khói mạnh trong không khí ẩm. HNO₃ đặc có tính oxy hóa rất mạnh, có thể hòa tan hầu hết kim loại (trừ Au, Pt).",
    properties: [
      "Acid mạnh, có tính oxy hóa mạnh",
      "HNO₃ đặc bốc khói trong không khí",
      "Phân hủy khi đun nóng hoặc chiếu sáng",
      "Hòa tan được hầu hết kim loại",
    ],
    applications: [
      "Sản xuất phân bón (NH₄NO₃)",
      "Sản xuất thuốc nổ (TNT, nitroglycerin)",
      "Sản xuất thuốc nhuộm, dược phẩm",
      "Chế tạo nhiên liệu tên lửa",
    ],
  },
  {
    name: "H₂SO₄",
    fullName: "Sulfuric Acid",
    vietnameseName: "Axit Sulfuric",
    modelUrl: "/models/H2SO4.glb",
    color: "#f59e0b",
    rgb: "245, 158, 11",
    description:
      "Là chất lỏng sánh, không màu, không bay hơi, nặng gần gấp đôi nước. H₂SO₄ đặc có tính háo nước rất mạnh và tỏa nhiệt lớn khi hòa tan trong nước.",
    properties: [
      "Acid mạnh, phân li hoàn toàn (khi loãng)",
      "H₂SO₄ đặc có tính háo nước mạnh",
      "H₂SO₄ đặc nóng có tính oxy hóa mạnh",
      'Được gọi là "vua của các acid"',
    ],
    applications: [
      "Sản xuất phân bón, chất tẩy rửa",
      "Sản xuất pin ắc quy (H₂SO₄ loãng)",
      "Luyện kim, tinh chế dầu mỏ",
      "Sản xuất sơn, chất dẻo, thuốc nhuộm",
    ],
  },
];

// Dữ liệu bảng so sánh
const comparisonRows = [
  { label: "Công thức", values: ["HCl", "HNO₃", "H₂SO₄"] },
  { label: "Phân tử khối", values: ["36,5", "63", "98"] },
  { label: "Trạng thái", values: ["Khí → dd", "Lỏng", "Lỏng sánh"] },
  { label: "Tính oxy hóa", values: ["Yếu", "Rất mạnh", "Mạnh (đặc, nóng)"] },
  { label: "H linh động", values: ["1", "1", "2"] },
  { label: "Gốc acid", values: ["Cl⁻", "NO₃⁻", "SO₄²⁻"] },
];

export function Chapter3() {
  const { showTopNav, showBottomNav, topMarkerRef, bottomMarkerRef } = useNavigationVisibility();

  return (
    <div className="min-h-screen page-enter relative overflow-hidden">
      {/* Vị trí neo quan sát phần ĐẦU TRANG */}
      <div ref={topMarkerRef} className="absolute top-0 left-0 w-full h-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Điều hướng */}
        <div className={`max-w-4xl mx-auto mt-2 mb-8 flex justify-between transition-opacity duration-300 ${showTopNav ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <Link
            to="/phan-2"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-[var(--accent)] border border-[var(--border)] bg-[var(--card)] hover:border-[var(--border-strong)] transition-all duration-300 hover:-translate-x-1 glow-border-hover"
          >
            ← Phần 2: Tính chất hóa học
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-[var(--accent)] border border-[var(--border)] bg-[var(--card)] hover:border-[var(--border-strong)] transition-all duration-300 hover:translate-x-1 glow-border-hover"
          >
            Trang chủ →
          </Link>
        </div>

        {/* Header gradient title */}
        <div className="text-center mb-14">
          <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full mb-5">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[rgba(94,234,212,0.12)] to-[rgba(251,191,36,0.08)] border border-[rgba(94,234,212,0.25)]" />
            <div className="absolute inset-0 rounded-full ring-pulse" />
            <div className="w-14 h-14 relative z-10 drop-shadow-lg chem-icon-glow">
              <AnimatedBeaker color="#5eead4" />
            </div>
          </div>
          <h1 className="text-5xl font-extrabold mb-3 gradient-text">
            Phần 3: Một số Acid thông dụng
          </h1>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-[var(--muted)] leading-relaxed">
            Ba acid phổ biến nhất trong đời sống và công nghiệp: HCl, HNO₃ và H₂SO₄.
            Khám phá mô hình phân tử 3D tương tác của từng acid.
          </p>
        </div>

        {/* Danh sách 3 acid chi tiết với mô hình 3D */}
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          {acids.map((acid, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden border bg-[var(--card-2)] backdrop-blur-sm card-hover-lift chem-shimmer-border animated-border-card animate-fade-in-up stagger-${index + 1}`}
              style={{ borderColor: `rgba(${acid.rgb}, 0.20)` }}
            >
              {/* Phần trên: Mô hình 3D + Thông tin chính */}
              <div className={`flex ${index === 1 ? "flex-row-reverse" : "flex-row"}`}>
                {/* Mô hình phân tử 3D */}
                <div
                  className={`relative w-[55%] h-80 flex items-center justify-center overflow-hidden ${
                    index === 1 ? "border-l" : "border-r"
                  }`}
                  style={{
                    background: `radial-gradient(ellipse at center, rgba(${acid.rgb}, 0.06) 0%, transparent 70%)`,
                    borderColor: `rgba(${acid.rgb}, 0.15)`,
                  }}
                >
                  <MoleculeViewer url={acid.modelUrl} className="absolute inset-0" />
                  {/* Lab grid pattern overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-[0.02]"
                    style={{
                      backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  {/* (Đã bỏ thẻ tooltip Xoay & Zoom) */}
                </div>

                {/* Thông tin acid */}
                <div className="w-[45%] p-7 flex flex-col justify-center">
                  {/* Badge */}
                  <span
                    className="inline-block self-start px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-4 border"
                    style={{
                      color: acid.color,
                      borderColor: `rgba(${acid.rgb}, 0.25)`,
                      background: `rgba(${acid.rgb}, 0.06)`,
                    }}
                  >
                    ⚗ Mô hình 3D
                  </span>
                  {/* Tên acid */}
                  <h2 className="text-4xl font-extrabold mb-2" style={{ color: acid.color }}>
                    {acid.name}
                  </h2>
                  <p className="text-lg font-semibold text-[var(--text)] mb-0.5">{acid.vietnameseName}</p>
                  <p className="text-sm text-[var(--muted-2)] italic mb-4">{acid.fullName}</p>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{acid.description}</p>
                </div>
              </div>

              {/* Phần dưới: Tính chất + Ứng dụng */}
              <div
                className="grid md:grid-cols-2 gap-0 border-t"
                style={{ borderColor: `rgba(${acid.rgb}, 0.12)` }}
              >
                {/* Cột trái: Tính chất */}
                <div className="p-6 border-r" style={{ borderColor: `rgba(${acid.rgb}, 0.10)` }}>
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
                {/* Cột phải: Ứng dụng */}
                <div className="p-6">
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

        {/* Bảng so sánh 3 acid */}
        <div className="max-w-5xl mx-auto mt-16 animate-fade-in-up">
          <h2 className="text-2xl font-extrabold text-[var(--text)] mb-6 text-center flex items-center justify-center gap-3">
            <Info className="w-6 h-6 text-[var(--accent)]" />
            Bảng so sánh ba acid thông dụng
          </h2>
          <div className="rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card-2)] backdrop-blur-sm chem-shimmer-border animated-border-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--border)]" style={{ background: "rgba(100,210,255,0.04)" }}>
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
                    className="border-b border-[rgba(100,210,255,0.06)] hover:bg-[rgba(100,210,255,0.02)] transition-colors"
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

        {/* Card cảnh báo an toàn */}
        <div className="max-w-4xl mx-auto mt-14 rounded-2xl p-8 border border-[rgba(239,68,68,0.18)] bg-[rgba(239,68,68,0.03)] backdrop-blur-sm animate-fade-in-up chem-shimmer-border animated-border-card overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[rgba(239,68,68,0.10)] border border-[rgba(239,68,68,0.20)] shrink-0">
              <AlertTriangle className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-[var(--text)] mb-3">🧯 An toàn khi sử dụng Acid</h3>
              <ul className="space-y-2.5 text-[var(--muted)] leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 w-2 h-2 rounded-full shrink-0 bg-red-400" />
                  Luôn đeo <strong className="text-[var(--text)]">kính bảo hộ</strong> và{" "}
                  <strong className="text-[var(--text)]">găng tay</strong> khi thí nghiệm.
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 w-2 h-2 rounded-full shrink-0 bg-red-400" />
                  Pha loãng H₂SO₄ đặc: <strong className="text-red-300">rót từ từ acid vào nước</strong>, không làm ngược.
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 w-2 h-2 rounded-full shrink-0 bg-red-400" />
                  Bảo quản trong <strong className="text-[var(--text)]">chai lọ chuyên dụng</strong>, có nhãn rõ ràng.
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5 w-2 h-2 rounded-full shrink-0 bg-red-400" />
                  Nếu dính acid vào da, rửa ngay bằng <strong className="text-[var(--text)]">nhiều nước sạch</strong>.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Điều hướng */}
        <div className={`max-w-4xl mx-auto mt-12 flex justify-between transition-opacity duration-300 ${showBottomNav ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <Link
            to="/phan-2"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-[var(--accent)] border border-[var(--border)] bg-[var(--card)] hover:border-[var(--border-strong)] transition-all duration-300 hover:-translate-x-1 glow-border-hover"
          >
            ← Phần 2: Tính chất hóa học
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-[var(--accent)] border border-[var(--border)] bg-[var(--card)] hover:border-[var(--border-strong)] transition-all duration-300 hover:translate-x-1 glow-border-hover"
          >
            Trang chủ →
          </Link>
        </div>
      </div>

      {/* Vị trí neo quan sát phần ĐÁY TRANG */}
      <div ref={bottomMarkerRef} className="w-full h-[100px] pointer-events-none border-t border-[rgba(255,255,255,0.02)] border-dashed border-b-0 -mt-[50px] bg-transparent flex items-end justify-center" />
    </div>
  );
}
