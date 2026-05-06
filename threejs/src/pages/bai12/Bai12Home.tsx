import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Package, ShieldCheck } from "lucide-react";
import { SplitTextTitle } from "../../components/SplitTextTitle";
import { AnimatedAtom3D } from "../../components/AnimatedIcons";

export function Bai12Home() {
  return (
    <div className="min-h-screen page-enter pb-24">
      <div className="container mx-auto px-4 pt-12 md:pt-20">
        <header className="text-center mb-16 relative">
          <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full mb-6">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[rgba(16,185,129,0.15)] to-[rgba(59,130,246,0.1)] border border-[rgba(16,185,129,0.3)]" />
            <div className="absolute inset-0 rounded-full ring-pulse" style={{ borderColor: 'rgba(16,185,129,0.4)' }} />
            <div className="w-16 h-16 relative z-10 drop-shadow-lg chem-icon-glow">
              <AnimatedAtom3D color="#10b981" />
            </div>
          </div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-400 mb-3">Bài 12</p>
          <SplitTextTitle text="Phân bón hóa học" className="text-5xl md:text-7xl font-extrabold mb-6" highlightWords={["bón", "học"]} highlightColor="#10b981" />
          <p className="max-w-2xl mx-auto text-lg text-[var(--muted)] leading-relaxed">
            Khám phá vai trò của các nguyên tố dinh dưỡng đối với sự phát triển của thực vật, các loại phân bón phổ biến và cách sử dụng chúng một cách khoa học.
          </p>
        </header>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          <Link
            to="/bai-12/vai-tro"
            className="group block rounded-3xl overflow-hidden glass-panel border border-[rgba(16,185,129,0.2)] card-hover-lift animate-fade-in-up stagger-1"
          >
            <div className="p-8 h-full flex flex-col bg-gradient-to-br from-[rgba(16,185,129,0.08)] to-transparent relative">
              <div className="w-14 h-14 rounded-2xl bg-[rgba(16,185,129,0.15)] border border-[rgba(16,185,129,0.3)] flex items-center justify-center mb-6 text-emerald-400 shrink-0">
                <Leaf className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-3 group-hover:text-emerald-400 transition-colors">Vai trò của dưỡng chất</h2>
              <p className="text-[var(--muted)] leading-relaxed flex-1 mb-6">
                Các nguyên tố đa lượng, trung lượng, vi lượng và tác dụng của chúng đối với cây trồng.
              </p>
              <div className="flex items-center gap-2 text-sm font-bold text-emerald-400 uppercase tracking-wider">
                Bắt đầu <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          <Link
            to="/bai-12/phan-bon"
            className="group block rounded-3xl overflow-hidden glass-panel border border-[rgba(59,130,246,0.2)] card-hover-lift animate-fade-in-up stagger-2"
          >
            <div className="p-8 h-full flex flex-col bg-gradient-to-br from-[rgba(59,130,246,0.08)] to-transparent relative">
              <div className="w-14 h-14 rounded-2xl bg-[rgba(59,130,246,0.15)] border border-[rgba(59,130,246,0.3)] flex items-center justify-center mb-6 text-blue-400 shrink-0">
                <Package className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-3 group-hover:text-blue-400 transition-colors">Các loại phân bón</h2>
              <p className="text-[var(--muted)] leading-relaxed flex-1 mb-6">
                Tìm hiểu về phân đạm, phân lân, phân kali và phân hỗn hợp NPK.
              </p>
              <div className="flex items-center gap-2 text-sm font-bold text-blue-400 uppercase tracking-wider">
                Tìm hiểu <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          <Link
            to="/bai-12/cach-su-dung"
            className="group block rounded-3xl overflow-hidden glass-panel border border-[rgba(139,92,246,0.2)] card-hover-lift animate-fade-in-up stagger-3"
          >
            <div className="p-8 h-full flex flex-col bg-gradient-to-br from-[rgba(139,92,246,0.08)] to-transparent relative">
              <div className="w-14 h-14 rounded-2xl bg-[rgba(139,92,246,0.15)] border border-[rgba(139,92,246,0.3)] flex items-center justify-center mb-6 text-violet-400 shrink-0">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-3 group-hover:text-violet-400 transition-colors">Cách sử dụng</h2>
              <p className="text-[var(--muted)] leading-relaxed flex-1 mb-6">
                Quy tắc 4 đúng và các biện pháp bảo vệ môi trường khi sử dụng phân bón hóa học.
              </p>
              <div className="flex items-center gap-2 text-sm font-bold text-violet-400 uppercase tracking-wider">
                Khám phá <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
