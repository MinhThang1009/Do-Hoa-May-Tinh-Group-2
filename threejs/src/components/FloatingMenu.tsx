import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { Atom, FlaskConical, Beaker, BookOpen, Home, Factory } from "lucide-react";

export function FloatingMenu({ isAppReady = true, isIdle = false }: { isAppReady?: boolean, isIdle?: boolean }) {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    if (!isAppReady) {
      setIsVisible(false);
      return;
    }

    // Nếu AppReady true, Menu trồi lên
    setIsVisible(true);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      if (window.innerHeight + currentScrollY >= document.body.offsetHeight - 50) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isAppReady]);

  const isLesson8 = location.pathname.startsWith("/bai-8") || location.pathname.startsWith("/phan-");
  const isLesson9 = location.pathname.startsWith("/bai-9");
  const isBai10 = location.pathname.startsWith("/bai-10");

  const lesson8NavItems = [
    {
      name: "Bài 8", path: "/bai-8", icon: BookOpen,
      textClass: "text-sky-600 dark:text-sky-300",
      iconClass: "text-sky-600 dark:text-sky-300",
      bgClass: "bg-sky-500/10 dark:bg-sky-300/10",
      borderClass: "border-sky-500/30 dark:border-sky-300/30",
      indicatorClass: "bg-gradient-to-t from-sky-500 to-sky-500/20 dark:from-sky-300 dark:to-sky-300/20"
    },
    {
      name: "Khái niệm", path: "/bai-8/phan-1", icon: Atom,
      textClass: "text-blue-600 dark:text-[#64d2ff]",
      iconClass: "text-blue-600 dark:text-[#64d2ff]",
      bgClass: "bg-blue-500/10 dark:bg-[#64d2ff]/10",
      borderClass: "border-blue-500/30 dark:border-[#64d2ff]/30",
      indicatorClass: "bg-gradient-to-t from-blue-500 to-blue-500/20 dark:from-[#64d2ff] dark:to-[#64d2ff]/20"
    },
    {
      name: "Tính chất", path: "/bai-8/phan-2", icon: FlaskConical,
      textClass: "text-purple-600 dark:text-[#a78bfa]",
      iconClass: "text-purple-600 dark:text-[#a78bfa]",
      bgClass: "bg-purple-500/10 dark:bg-[#a78bfa]/10",
      borderClass: "border-purple-500/30 dark:border-[#a78bfa]/30",
      indicatorClass: "bg-gradient-to-t from-purple-500 to-purple-500/20 dark:from-[#a78bfa] dark:to-[#a78bfa]/20"
    },
    {
      name: "Acid", path: "/bai-8/phan-3", icon: Beaker,
      textClass: "text-teal-600 dark:text-[#5eead4]",
      iconClass: "text-teal-600 dark:text-[#5eead4]",
      bgClass: "bg-teal-500/10 dark:bg-[#5eead4]/10",
      borderClass: "border-teal-500/30 dark:border-[#5eead4]/30",
      indicatorClass: "bg-gradient-to-t from-teal-500 to-teal-500/20 dark:from-[#5eead4] dark:to-[#5eead4]/20"
    },
  ];

  const bai10NavItems = [
    {
      name: "Trang chủ", path: "/bai-10", icon: Home,
      textClass: "text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 dark:from-[#f97316] dark:to-[#f59e0b]",
      iconClass: "",
      bgClass: "bg-gradient-to-r from-orange-500/10 to-amber-500/10 dark:from-[#f97316]/10 dark:to-[#f59e0b]/10",
      borderClass: "border-orange-500/30 dark:border-orange-500/30",
      indicatorClass: "bg-gradient-to-r from-orange-500 to-amber-500 dark:from-[#f97316] dark:to-[#f59e0b]"
    },
    {
      name: "Khái niệm", path: "/bai-10/khai-niem", icon: Atom,
      textClass: "text-cyan-600 dark:text-[#06b6d4]",
      iconClass: "text-cyan-600 dark:text-[#06b6d4]",
      bgClass: "bg-cyan-500/10 dark:bg-[#06b6d4]/10",
      borderClass: "border-cyan-500/30 dark:border-[#06b6d4]/30",
      indicatorClass: "bg-gradient-to-t from-cyan-500 to-cyan-500/20 dark:from-[#06b6d4] dark:to-[#06b6d4]/20"
    },
    {
      name: "Tính chất", path: "/bai-10/tinh-chat", icon: FlaskConical,
      textClass: "text-purple-600 dark:text-[#8b5cf6]",
      iconClass: "text-purple-600 dark:text-[#8b5cf6]",
      bgClass: "bg-purple-500/10 dark:bg-[#8b5cf6]/10",
      borderClass: "border-purple-500/30 dark:border-[#8b5cf6]/30",
      indicatorClass: "bg-gradient-to-t from-purple-500 to-purple-500/20 dark:from-[#8b5cf6] dark:to-[#8b5cf6]/20"
    },
    {
      name: "Thông dụng", path: "/bai-10/thong-dung", icon: Beaker,
      textClass: "text-emerald-600 dark:text-[#10b981]",
      iconClass: "text-emerald-600 dark:text-[#10b981]",
      bgClass: "bg-emerald-500/10 dark:bg-[#10b981]/10",
      borderClass: "border-emerald-500/30 dark:border-[#10b981]/30",
      indicatorClass: "bg-gradient-to-t from-emerald-500 to-emerald-500/20 dark:from-[#10b981] dark:to-[#10b981]/20"
    },
  ];

  const lesson9NavItems = [
    {
      name: "Bài 9", path: "/bai-9", icon: BookOpen,
      textClass: "text-emerald-600 dark:text-emerald-300",
      iconClass: "text-emerald-600 dark:text-emerald-300",
      bgClass: "bg-emerald-500/10 dark:bg-emerald-300/10",
      borderClass: "border-emerald-500/30 dark:border-emerald-300/30",
      indicatorClass: "bg-gradient-to-t from-emerald-500 to-emerald-500/20 dark:from-emerald-300 dark:to-emerald-300/20"
    },
    {
      name: "Khái niệm", path: "/bai-9/phan-1", icon: Atom,
      textClass: "text-emerald-600 dark:text-emerald-300",
      iconClass: "text-emerald-600 dark:text-emerald-300",
      bgClass: "bg-emerald-500/10 dark:bg-emerald-300/10",
      borderClass: "border-emerald-500/30 dark:border-emerald-300/30",
      indicatorClass: "bg-gradient-to-t from-emerald-500 to-emerald-500/20 dark:from-emerald-300 dark:to-emerald-300/20"
    },
    {
      name: "Phản ứng", path: "/bai-9/phan-2", icon: FlaskConical,
      textClass: "text-sky-600 dark:text-sky-300",
      iconClass: "text-sky-600 dark:text-sky-300",
      bgClass: "bg-sky-500/10 dark:bg-sky-300/10",
      borderClass: "border-sky-500/30 dark:border-sky-300/30",
      indicatorClass: "bg-gradient-to-t from-sky-500 to-sky-500/20 dark:from-sky-300 dark:to-sky-300/20"
    },
    {
      name: "Thang pH", path: "/bai-9/phan-3", icon: Beaker,
      textClass: "text-amber-600 dark:text-amber-300",
      iconClass: "text-amber-600 dark:text-amber-300",
      bgClass: "bg-amber-500/10 dark:bg-amber-300/10",
      borderClass: "border-amber-500/30 dark:border-amber-300/30",
      indicatorClass: "bg-gradient-to-t from-amber-500 to-amber-500/20 dark:from-amber-300 dark:to-amber-300/20"
    },
  ];

  const navItems = isBai10 ? bai10NavItems : isLesson9 ? lesson9NavItems : isLesson8 ? lesson8NavItems : [];

  if (navItems.length === 0) return null;

  return (
    <div
      className={`ui-control fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-[100] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isAppReady && isVisible && !isIdle ? "translate-y-0 opacity-100 scale-100" : "translate-y-28 opacity-0 pointer-events-none scale-95"
        }`}
    >
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          <linearGradient id="multi-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "var(--accent)" }} />
            <stop offset="50%" style={{ stopColor: "var(--accent-purple)" }} />
            <stop offset="100%" style={{ stopColor: "var(--accent-2)" }} />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute -inset-1 blur-2xl rounded-full bg-gradient-to-r from-[rgba(var(--accent-rgb),0.25)] via-[rgba(var(--accent-purple-rgb),0.25)] to-[rgba(var(--accent-2-rgb),0.25)] opacity-50 dark:opacity-40 animate-pulse mix-blend-screen pointer-events-none" />

      <nav className="relative flex items-center gap-1.5 md:gap-3 px-3 py-2.5 rounded-full overflow-hidden
                      border border-white/40 dark:border-[rgba(255,255,255,0.08)] 
                      bg-white/30 dark:bg-[rgba(10,15,30,0.5)] backdrop-blur-2xl 
                      shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] 
                      hover:bg-white/40 dark:hover:bg-[rgba(10,15,30,0.65)] transition-colors duration-500">

        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.15)] to-transparent -translate-x-[150%] skew-x-[-20deg] animate-[shimmer_3s_infinite_ease-in-out_2s] pointer-events-none" />

        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`relative flex items-center justify-center gap-2.5 px-5 py-3 rounded-full outline-none transition-all duration-300 ease-out group ${isActive
                ? item.bgClass + " shadow-md border " + item.borderClass
                : "hover:scale-[1.02] hover:shadow-lg hover:bg-black/5 dark:hover:bg-white/5 active:scale-95 border border-transparent"
                }`}
              title={item.name}
            >
              <Icon
                className={`w-[22px] h-[22px] transition-all duration-300 ${isActive
                  ? "scale-110 " + item.iconClass
                  : "text-slate-500 dark:text-white/60 group-hover:scale-110 opacity-70 group-hover:opacity-100 group-hover:text-slate-800 dark:group-hover:text-white"
                  }`}
              />
              <span
                className={`text-[15px] font-bold whitespace-nowrap tracking-wide transition-all duration-300 max-sm:hidden ${isActive ? "opacity-100 " + item.textClass : "opacity-70 group-hover:opacity-100 text-slate-500 dark:text-[var(--text)] group-hover:text-slate-800 dark:group-hover:text-white"
                  }`}
              >
                {item.name}
              </span>

              {isActive && (
                <span
                  className={`absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-8 h-1 rounded-t-full transition-all duration-300 ${item.indicatorClass}`}
                />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
