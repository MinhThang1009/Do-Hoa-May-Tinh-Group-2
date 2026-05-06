import { ArrowLeft, ShieldCheck, AlertTriangle, CheckCircle2, Recycle } from "lucide-react";
import { Link } from "react-router-dom";
import { SplitTextTitle } from "../../components/SplitTextTitle";

export function CachSuDung() {
  return (
    <div className="min-h-screen page-enter pb-24">
      <div className="container mx-auto px-4 pt-6 animate-fade-in-up">
        <Link 
          to="/bai-12"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-panel text-[var(--muted)] hover:text-[var(--text)] transition-colors chem-shimmer-border"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-semibold">Bài 12: Phân bón hóa học</span>
        </Link>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <header className="text-center mb-16 relative">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-[rgba(139,92,246,0.1)] border border-[rgba(139,92,246,0.2)] mb-6">
            <ShieldCheck className="w-8 h-8 text-violet-500" />
          </div>
          <SplitTextTitle text="Cách Sử Dụng Phân Bón" className="text-4xl md:text-6xl font-extrabold mb-4" />
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto leading-relaxed">
            Sử dụng phân bón đúng cách để tăng năng suất cây trồng, bảo vệ môi trường và sức khỏe con người.
          </p>
        </header>

        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* Cảnh báo Section */}
          <div className="glass-panel rounded-3xl p-8 md:p-10 border border-rose-500/30 card-hover-lift relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-500 shrink-0">
                <AlertTriangle className="w-7 h-7" />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--text)]">Hậu quả khi lạm dụng</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 relative z-10">
              <div className="bg-rose-500/5 border border-rose-500/10 rounded-2xl p-6">
                <h3 className="text-rose-400 font-bold uppercase tracking-wider mb-3">Ô nhiễm môi trường</h3>
                <p className="text-[var(--text)] opacity-90 leading-relaxed">
                  Phân bón dư thừa sẽ bị rửa trôi, ngấm vào mạch nước ngầm, sông hồ gây ô nhiễm đất và nước. Phân hủy ra khí ammonia, nitrogen oxide gây ô nhiễm không khí.
                </p>
              </div>
              <div className="bg-rose-500/5 border border-rose-500/10 rounded-2xl p-6">
                <h3 className="text-rose-400 font-bold uppercase tracking-wider mb-3">Ảnh hưởng sức khỏe</h3>
                <p className="text-[var(--text)] opacity-90 leading-relaxed">
                  Việc lạm dụng phân bón hóa học có thể gây tồn dư hóa chất độc hại trong nông sản và thực phẩm, đe dọa trực tiếp đến sức khỏe con người.
                </p>
              </div>
            </div>
          </div>

          {/* Giải pháp Section */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-panel rounded-3xl p-8 border border-emerald-500/30 card-hover-lift">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-500 shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--text)]">Quy tắc "4 Đúng"</h3>
              </div>
              
              <p className="text-[var(--text)] opacity-90 leading-relaxed mb-6">
                Để giảm thiểu ô nhiễm, cần bón phân không vượt quá khả năng hấp thụ của đất và cây trồng theo 4 nguyên tắc:
              </p>
              
              <ul className="space-y-4">
                {['Đúng liều lượng', 'Đúng loại phân', 'Đúng lúc (thời điểm)', 'Đúng nơi (vị trí)'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] p-3 rounded-xl">
                    <span className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black">
                      {idx + 1}
                    </span>
                    <span className="font-semibold text-[var(--text)] tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-panel rounded-3xl p-8 border border-teal-500/30 card-hover-lift flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400 shrink-0">
                  <Recycle className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--text)]">Giải pháp hữu cơ</h3>
              </div>
              
              <div className="flex-1 bg-teal-500/5 border border-teal-500/10 rounded-2xl p-6">
                <p className="text-[var(--text)] opacity-90 leading-relaxed mb-4">
                  Cần giảm thiểu sử dụng phân bón hóa học bằng cách tăng cường sản xuất và sử dụng <strong className="text-teal-400">phân bón hữu cơ</strong> (phân hủy từ rác thải hữu cơ, phân chuồng, phân xanh...).
                </p>
                <div className="space-y-2 mt-6">
                  <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
                    <CheckCircle2 className="w-4 h-4 text-teal-500" />
                    <span>Giàu chất dinh dưỡng tự nhiên</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
                    <CheckCircle2 className="w-4 h-4 text-teal-500" />
                    <span>Giúp đất tơi xốp, màu mỡ lâu dài</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
                    <CheckCircle2 className="w-4 h-4 text-teal-500" />
                    <span>Cây trồng dễ hấp thụ, an toàn khi sử dụng</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
