import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ isAppReady = true, isIdle = false }: { isAppReady?: boolean, isIdle?: boolean }) {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored === "dark") return true;
      if (stored === "light") return false;
    }
    return false; // Mặc định sử dụng nền sáng nếu không có cấu hình lưu trữ
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = (event: React.MouseEvent) => {
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    const isDarkNext = !isDark;

    const performChange = () => {
      if (isDarkNext) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        if (metaTheme) metaTheme.setAttribute("content", "#060b18");
        setIsDark(true);
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        if (metaTheme) metaTheme.setAttribute("content", "#f8fafc");
        setIsDark(false);
      }
    };

    // Xử lý dự phòng nếu trình duyệt không hỗ trợ View Transitions API
    if (!document.startViewTransition) {
      performChange();
      return;
    }

    // Lấy tọa độ trục X, Y của chuột tại thời điểm click
    const x = event.clientX;
    const y = event.clientY;

    // Tính toán bán kính tối đa từ điểm click tới các góc màn hình
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // Khởi tạo tiến trình View Transition
    const transition = document.startViewTransition(() => {
      performChange();
    });

    // Thực thi hiệu ứng mặt nạ lan tỏa (clip-path) sau khi DOM đã cập nhật
    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];

      document.documentElement.animate(
        {
          clipPath: clipPath,
        },
        {
          duration: 700,
          easing: "cubic-bezier(0.87, 0, 0.13, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className={`ui-control fixed top-4 right-4 md:top-8 md:right-8 z-[100] w-20 h-10 rounded-full glass-panel shadow-[0_8px_32px_rgba(30,40,60,0.15)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:shadow-[0_12px_40px_rgba(var(--accent-rgb),0.25)] hover:scale-[1.02] flex items-center p-1 cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group ${isAppReady && !isIdle ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-12 scale-90 pointer-events-none"
        }`}
      aria-label="Toggle Theme"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[rgba(255,255,255,0.05)] to-transparent pointer-events-none" />

      <div className="absolute inset-0 flex justify-between items-center px-2.5 pointer-events-none">
        <Sun className={`w-4 h-4 text-amber-500 transition-opacity duration-500 ${isDark ? 'opacity-80' : 'opacity-0'}`} />
        <Moon className={`w-4 h-4 text-indigo-400 transition-opacity duration-500 ${isDark ? 'opacity-0' : 'opacity-80'}`} />
      </div>

      <div
        className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-10 ${isDark
          ? "translate-x-10 bg-slate-800 border border-[rgba(100,210,255,0.4)] shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
          : "translate-x-0 bg-white border border-[rgba(200,215,230,1)] shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
          }`}
        style={{ transitionProperty: "transform, background-color, border-color, box-shadow" }}
      >
        <Moon
          className={`absolute w-5 h-5 text-indigo-300 drop-shadow-[0_0_8px_rgba(165,180,252,0.8)] transition-all duration-500 ${isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`}
        />
        <Sun
          className={`absolute w-5 h-5 text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.8)] transition-all duration-500 ${!isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50"}`}
        />
      </div>
    </button>
  );
}
