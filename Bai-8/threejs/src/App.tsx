import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";

import { Home } from "./pages/Home";
import { Chapter1 } from "./pages/Chapter1";
import { Chapter2 } from "./pages/Chapter2";
import { Chapter3 } from "./pages/Chapter3";
import { ChemistryBackground } from "./components/ChemistryBackground";
import { ScrollToTop } from "./components/ScrollToTop";
import { ThemeToggle } from "./components/ThemeToggle";
import { FloatingMenu } from "./components/FloatingMenu";
import { SplashScreen } from "./components/SplashScreen";
import { SoundController } from "./components/SoundController";

// Cải tạo PageWrapper thành Component chuẩn để có thể xài hook context
const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 40, filter: "blur(15px)" }}
    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    exit={{ opacity: 0, y: -30, filter: "blur(10px)", scale: 0.98 }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [appReady, setAppReady] = useState(false);
  const [bgReady, setBgReady] = useState(false);
  const location = useLocation();

  const [isIdle, setIsIdle] = useState(false);

  const handleSplashComplete = useCallback(() => {
    setAppReady(true);
  }, []);

  useEffect(() => {
    // Pre-warm: Khởi động Canvas 2D trước khi Splash kết thúc 800ms. 
    // Tránh việc Vẽ đồ họa và Chạy CSS Blur Fade-out diễn ra cùng 1 Frame gây rớt FPS (Khựng ngắc).
    const timer = setTimeout(() => setBgReady(true), 1400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!appReady) return;

    let idleTimer: ReturnType<typeof setTimeout>;

    const resetIdleTimer = (e?: Event) => {
      setIsIdle(false);
      clearTimeout(idleTimer);

      const target = e?.target as HTMLElement;
      // Tránh đếm giờ nhàn rỗi tự động ẩn nếu chuột đang di trong Vùng Giao diện (HUD)
      if (target && target.closest('.ui-control')) {
        return;
      }

      idleTimer = setTimeout(() => {
        setIsIdle(true);
      }, 2500); // 2.5s không làm gì thì ẩn UI
    };

    resetIdleTimer();

    window.addEventListener("mousemove", resetIdleTimer);
    window.addEventListener("mousedown", resetIdleTimer);
    window.addEventListener("touchstart", resetIdleTimer, { passive: true });
    window.addEventListener("wheel", resetIdleTimer, { passive: true });
    window.addEventListener("keydown", resetIdleTimer);

    return () => {
      clearTimeout(idleTimer);
      window.removeEventListener("mousemove", resetIdleTimer);
      window.removeEventListener("mousedown", resetIdleTimer);
      window.removeEventListener("touchstart", resetIdleTimer);
      window.removeEventListener("wheel", resetIdleTimer);
      window.removeEventListener("keydown", resetIdleTimer);
    };
  }, [appReady]);

  useEffect(() => {
    // Khởi tạo Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Tắt scroll khi chưa Ready, cuộn lại lên đầu sau Splash
    if (!appReady) {
      lenis.stop();
      window.scrollTo(0, 0);
    } else {
      lenis.start();
    }

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [appReady]);

  return (
    <>
      {!appReady && <SplashScreen onComplete={handleSplashComplete} />}

      {/* Nhóm Control Navigation & HUD. Đã tháo gỡ hoàn toàn Thẻ bọc Div Opacity để ngăn chặn 
          Browser GPU phải Render lại lớp kính Backdrop-Filter cực nặng 60 khung hình/giây. 
          Hiệu ứng giật lag sẽ bị tiêu diệt hoàn toàn. */}
      <SoundController isAppReady={appReady} isIdle={isIdle} />
      <ThemeToggle isAppReady={appReady} isIdle={isIdle} />
      <FloatingMenu isAppReady={appReady} isIdle={isIdle} />

      <div style={{ position: "relative", zIndex: 1, pointerEvents: appReady ? "auto" : "none" }}>
        <ChemistryBackground isPaused={!bgReady} />
        <ScrollToTop />
        <AnimatePresence mode="wait">
          {appReady && (
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/phan-1" element={<PageWrapper><Chapter1 /></PageWrapper>} />
              <Route path="/phan-2" element={<PageWrapper><Chapter2 /></PageWrapper>} />
              <Route path="/phan-3" element={<PageWrapper><Chapter3 /></PageWrapper>} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

