import { Link } from "react-router-dom";
import { ArrowRight, FlaskConical, Gamepad2, TestTube2, Timer } from "lucide-react";
import { SplitTextTitle } from "../../components/SplitTextTitle";

const games = [
  {
    title: "Kéo-thả phân loại chất",
    label: "Game tổng ôn",
    description: "Phân loại công thức vào nhóm Acid, Bazơ, Oxide và Muối.",
    path: "/games/classification",
    color: "#a855f7",
    rgb: "168, 85, 247",
    icon: Gamepad2,
  },
  {
    title: "Ghép sản phẩm phản ứng",
    label: "Game phản ứng",
    description: "Chọn sản phẩm hoặc hiện tượng đúng, sau đó xem video và mô hình 3D.",
    path: "/games/reaction-match",
    color: "#22c55e",
    rgb: "34, 197, 94",
    icon: FlaskConical,
  },
  {
    title: "Đố nhanh 60 giây",
    label: "Game tốc độ",
    description: "Trả lời trắc nghiệm thật nhanh: đúng cộng điểm, sai bị trừ thời gian.",
    path: "/games/quick-quiz",
    color: "#f59e0b",
    rgb: "245, 158, 11",
    icon: Timer,
  },
  {
    title: "Phòng thí nghiệm mini",
    label: "Mini lab",
    description: "Chọn hóa chất, nhỏ vào ống nghiệm rồi quan sát màu, video và mô hình.",
    path: "/games/mini-lab",
    color: "#38bdf8",
    rgb: "56, 189, 248",
    icon: TestTube2,
  },
];

export function GamesHome() {
  return (
    <div className="min-h-screen page-enter relative overflow-hidden pb-24">
      <div className="container mx-auto px-4 py-12 relative z-10">
        <header className="text-center mb-12">
          <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full mb-5">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[rgba(168,85,247,0.14)] to-[rgba(56,189,248,0.10)] border border-[rgba(168,85,247,0.25)]" />
            <div className="absolute inset-0 rounded-full ring-pulse" />
            <Gamepad2 className="relative w-10 h-10 text-purple-300 chem-icon-glow" />
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-purple-300 mb-3">
            Khu trò chơi
          </p>
          <SplitTextTitle
            text="Chọn game ôn tập"
            className="text-4xl md:text-6xl font-extrabold mb-5 text-[var(--text)]"
            highlightWords={["game", "ôn"]}
            highlightColor="#a855f7"
          />
          <p className="max-w-3xl mx-auto text-lg text-[var(--muted)] leading-relaxed">
            Chọn một trò chơi để luyện nhanh kiến thức Chương 2: phân loại chất, ghép phản ứng,
            đố nhanh hoặc phòng thí nghiệm mini.
          </p>
        </header>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-7">
          {games.map((game, index) => {
            const Icon = game.icon;

            return (
              <Link
                key={game.path}
                to={game.path}
                className={`group rounded-2xl overflow-hidden glass-panel card-hover-lift chem-shimmer-border animated-border-card animate-fade-in-up stagger-${index + 1}`}
                style={{ borderColor: `rgba(${game.rgb}, 0.28)` }}
              >
                <div
                  className="p-7 h-full flex flex-col sm:flex-row gap-6"
                  style={{ background: `linear-gradient(135deg, rgba(${game.rgb}, 0.10), transparent 68%)` }}
                >
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 border"
                    style={{
                      borderColor: `rgba(${game.rgb}, 0.30)`,
                      background: `rgba(${game.rgb}, 0.10)`,
                    }}
                  >
                    <Icon className="w-11 h-11 chem-icon-glow" style={{ color: game.color }} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: game.color }}>
                      {game.label}
                    </p>
                    <h2 className="text-3xl font-extrabold text-[var(--text)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                      {game.title}
                    </h2>
                    <p className="text-sm text-[var(--muted)] leading-relaxed mb-5">
                      {game.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-bold" style={{ color: game.color }}>
                      Chơi ngay
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
