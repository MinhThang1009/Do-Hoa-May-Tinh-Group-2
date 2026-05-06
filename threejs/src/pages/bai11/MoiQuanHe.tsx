import { ArrowLeft, Repeat } from "lucide-react";
import { Link } from "react-router-dom";
import { SplitTextTitle } from "../../components/SplitTextTitle";

export function MoiQuanHe() {
  return (
    <div className="min-h-screen page-enter pb-24">


      <div className="container mx-auto px-4 mt-8">
        <header className="text-center mb-16 relative">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-[rgba(245,158,11,0.1)] border border-[rgba(245,158,11,0.2)] mb-6">
            <Repeat className="w-8 h-8 text-amber-500" />
          </div>
          <SplitTextTitle text="Mối Quan Hệ Vô Cơ" className="text-5xl md:text-6xl font-extrabold mb-4" />
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto leading-relaxed">
            Sơ đồ biểu diễn sự chuyển đổi qua lại giữa Oxide, Acid, Bazơ và Muối.
          </p>
        </header>

        <div className="max-w-5xl mx-auto">
          {/* Sơ đồ bằng CSS */}
          <div className="glass-panel p-8 md:p-16 rounded-3xl border border-[rgba(245,158,11,0.3)] relative overflow-hidden bg-[#faf8f5] dark:bg-[rgba(10,15,30,0.6)]">
            
            <div className="relative w-full max-w-3xl mx-auto min-h-[500px] flex items-center justify-center">
              
              {/* Central Element: MUỐI */}
              <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="px-10 py-4 bg-[#88d8cc] text-[#115e59] dark:bg-teal-600 dark:text-white font-extrabold text-2xl tracking-widest shadow-lg rounded-sm border-b-4 border-teal-700/30">
                  MUỐI
                </div>
              </div>

              {/* Top Left: OXIDE BASE */}
              <div className="absolute z-20 top-0 left-0">
                <div className="px-6 py-3 bg-[#88d8cc] text-[#115e59] dark:bg-teal-600 dark:text-white font-bold text-lg tracking-wider shadow-md rounded-sm">
                  OXIDE BASE
                </div>
              </div>

              {/* Top Right: OXIDE ACID */}
              <div className="absolute z-20 top-0 right-0">
                <div className="px-6 py-3 bg-[#88d8cc] text-[#115e59] dark:bg-teal-600 dark:text-white font-bold text-lg tracking-wider shadow-md rounded-sm">
                  OXIDE ACID
                </div>
              </div>

              {/* Bottom Left: BASE */}
              <div className="absolute z-20 bottom-0 left-0">
                <div className="px-10 py-3 bg-[#88d8cc] text-[#115e59] dark:bg-teal-600 dark:text-white font-bold text-lg tracking-wider shadow-md rounded-sm">
                  BASE
                </div>
              </div>

              {/* Bottom Right: ACID */}
              <div className="absolute z-20 bottom-0 right-0">
                <div className="px-10 py-3 bg-[#88d8cc] text-[#115e59] dark:bg-teal-600 dark:text-white font-bold text-lg tracking-wider shadow-md rounded-sm">
                  ACID
                </div>
              </div>

              {/* SVG Arrows Layer */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible" style={{ minHeight: '500px' }}>
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" className="text-slate-600 dark:text-slate-400" />
                  </marker>
                </defs>

                {/* Oxide Bazơ -> Muối */}
                <g className="text-slate-600 dark:text-slate-400">
                  <line x1="20%" y1="12%" x2="40%" y2="40%" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                  <text x="25%" y="24%" fill="currentColor" fontSize="14" transform="rotate(35 200 120)" className="font-serif italic">+ Acid</text>
                </g>

                {/* Oxide Acid -> Muối */}
                <g className="text-slate-600 dark:text-slate-400">
                  <line x1="80%" y1="12%" x2="60%" y2="40%" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                  <text x="65%" y="22%" fill="currentColor" fontSize="14" transform="rotate(-35 550 120)" className="font-serif italic">+ Bazơ</text>
                </g>

                {/* Bazơ <-> Muối */}
                <g className="text-slate-600 dark:text-slate-400">
                  {/* Muối -> Bazơ */}
                  <line x1="45%" y1="58%" x2="15%" y2="82%" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                  <text x="25%" y="68%" fill="currentColor" fontSize="14" transform="rotate(38 220 340)" className="font-serif italic">+ Bazơ</text>
                  
                  {/* Bazơ -> Muối */}
                  <line x1="18%" y1="88%" x2="48%" y2="62%" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                  <text x="32%" y="82%" fill="currentColor" fontSize="14" className="font-serif italic">+ Acid</text>
                  <text x="32%" y="90%" fill="currentColor" fontSize="14" className="font-serif italic">+ Oxide acid</text>
                  <text x="32%" y="98%" fill="currentColor" fontSize="14" className="font-serif italic">+ Muối</text>
                </g>

                {/* Muối <-> Acid */}
                <g className="text-slate-600 dark:text-slate-400">
                  {/* Muối -> Acid */}
                  <line x1="55%" y1="58%" x2="85%" y2="82%" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                  <text x="70%" y="68%" fill="currentColor" fontSize="14" transform="rotate(-38 520 340)" className="font-serif italic">+ Acid</text>

                  {/* Acid -> Muối */}
                  <line x1="82%" y1="88%" x2="52%" y2="62%" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                  <text x="60%" y="78%" fill="currentColor" fontSize="14" className="font-serif italic">+ Kim loại</text>
                  <text x="60%" y="86%" fill="currentColor" fontSize="14" className="font-serif italic">+ Bazơ</text>
                  <text x="60%" y="94%" fill="currentColor" fontSize="14" className="font-serif italic">+ Oxide bazơ</text>
                  <text x="60%" y="102%" fill="currentColor" fontSize="14" className="font-serif italic">+ Muối</text>
                </g>
              </svg>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
