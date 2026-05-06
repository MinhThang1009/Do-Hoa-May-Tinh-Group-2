import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";
import { ArrowLeft, ListChecks } from "lucide-react";

import { Appendix } from "./pages/Appendix";
import { Bai8Home } from "./pages/bai8/Bai8Home";
import { Chapter1 } from "./pages/bai8/Chapter1";
import { Chapter2 } from "./pages/bai8/Chapter2";
import { Chapter3 } from "./pages/bai8/Chapter3";
import { Bai9Home } from "./pages/bai9/Bai9Home";
import { Base as Lesson9Base } from "./pages/bai9/Base";
import { Reactions as Lesson9Reactions } from "./pages/bai9/Reactions";
import { PhScale as Lesson9PhScale } from "./pages/bai9/PhScale";
import { Bai10Home } from "./pages/bai10/Bai10Home";
import { KhaiNiem } from "./pages/bai10/KhaiNiem";
import { TinhChat } from "./pages/bai10/TinhChat";
import { ThongDung } from "./pages/bai10/ThongDung";
import { ComingSoonLesson } from "./pages/ComingSoonLesson";
import { GamesHome } from "./pages/games/GamesHome";
import { ClassificationGame } from "./pages/games/ClassificationGame";
import { ReactionMatchGame } from "./pages/games/ReactionMatchGame";
import { QuickQuizGame } from "./pages/games/QuickQuizGame";
import { MiniLabGame } from "./pages/games/MiniLabGame";

// Bài 11
import { Bai11Home } from "./pages/bai11/Bai11Home";
import { KhaiNiem as Lesson11KhaiNiem } from "./pages/bai11/KhaiNiem";
import { TinhTan } from "./pages/bai11/TinhTan";
import { TinhChat as Lesson11TinhChat } from "./pages/bai11/TinhChat";
import { DieuChe } from "./pages/bai11/DieuChe";
import { MoiQuanHe } from "./pages/bai11/MoiQuanHe";

// Bài 12
import { Bai12Home } from "./pages/bai12/Bai12Home";
import { VaiTro } from "./pages/bai12/VaiTro";
import { PhanBon } from "./pages/bai12/PhanBon";
import { CachSuDung } from "./pages/bai12/CachSuDung";

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

const BackToAppendixButton = ({
  isVisible,
  label,
  title,
  to,
}: {
  isVisible: boolean;
  label: string;
  title: string;
  to: string;
}) => {
  if (!isVisible) return null;

  return (
    <Link
      to={to}
      className="ui-control fixed top-5 left-5 md:top-7 md:left-7 z-[110] inline-flex items-center gap-2 rounded-full px-4 py-2.5 border border-white/40 dark:border-white/10 bg-white/35 dark:bg-[rgba(10,15,30,0.55)] backdrop-blur-2xl shadow-[0_10px_30px_-14px_rgba(0,0,0,0.35)] text-sm font-bold text-slate-700 dark:text-white/85 hover:text-slate-950 dark:hover:text-white hover:bg-white/55 dark:hover:bg-[rgba(10,15,30,0.75)] transition-all duration-300"
      title={title}
    >
      <ArrowLeft className="w-4 h-4" />
      <ListChecks className="w-4 h-4 text-[var(--accent)]" />
      <span>{label}</span>
    </Link>
  );
};

export default function App() {
  const [appReady, setAppReady] = useState(false);
  const [bgReady, setBgReady] = useState(false);
  const location = useLocation();

  const [isIdle, setIsIdle] = useState(false);
  const isLegacyGameRoute =
    location.pathname === "/game" ||
    location.pathname === "/reaction-game" ||
    location.pathname === "/quick-quiz" ||
    location.pathname === "/mini-lab";
  const showAppendixBack =
    location.pathname.startsWith("/bai-8") ||
    location.pathname.startsWith("/bai-9") ||
    location.pathname.startsWith("/bai-10") ||
    location.pathname.startsWith("/bai-11") ||
    location.pathname.startsWith("/bai-12") ||
    location.pathname.startsWith("/game") ||
    location.pathname.startsWith("/reaction-game") ||
    location.pathname.startsWith("/quick-quiz");
  location.pathname.startsWith("/games") ||
    isLegacyGameRoute;
  const isGameDetailPage = location.pathname.startsWith("/games/") || isLegacyGameRoute;
  const backButtonTarget = isGameDetailPage ? "/games" : "/";
  const backButtonLabel = isGameDetailPage ? "Game" : "Phụ lục";
  const backButtonTitle = isGameDetailPage ? "Về khu trò chơi" : "Về phụ lục";

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
      if (target && target.closest(".ui-control")) {
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
      {appReady && (
        <BackToAppendixButton
          isVisible={showAppendixBack}
          label={backButtonLabel}
          title={backButtonTitle}
          to={backButtonTarget}
        />
      )}
      <FloatingMenu isAppReady={appReady} isIdle={isIdle} />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          pointerEvents: appReady ? "auto" : "none",
        }}
      >
        <ChemistryBackground isPaused={!bgReady} />
        <ScrollToTop />
        <AnimatePresence mode="wait">
          {appReady && (
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <PageWrapper>
                    <Appendix />
                  </PageWrapper>
                }
              />
              <Route
                path="/games"
                element={
                  <PageWrapper>
                    <GamesHome />
                  </PageWrapper>
                }
              />
              <Route
                path="/games/classification"
                element={
                  <PageWrapper>
                    <ClassificationGame />
                  </PageWrapper>
                }
              />
              <Route
                path="/games/reaction-match"
                element={
                  <PageWrapper>
                    <ReactionMatchGame />
                  </PageWrapper>
                }
              />
              <Route
                path="/games/quick-quiz"
                element={
                  <PageWrapper>
                    <QuickQuizGame />
                  </PageWrapper>
                }
              />
              <Route
                path="/games/mini-lab"
                element={
                  <PageWrapper>
                    <MiniLabGame />
                  </PageWrapper>
                }
              />
              <Route path="/game" element={<Navigate to="/games/classification" replace />} />
              <Route path="/reaction-game" element={<Navigate to="/games/reaction-match" replace />} />
              <Route path="/quick-quiz" element={<Navigate to="/games/quick-quiz" replace />} />
              <Route path="/mini-lab" element={<Navigate to="/games/mini-lab" replace />} />

              <Route
                path="/bai-8"
                element={
                  <PageWrapper>
                    <Bai8Home />
                  </PageWrapper>
                }
              />
              <Route
                path="/bai-8/phan-1"
                element={
                  <PageWrapper>
                    <Chapter1 />
                  </PageWrapper>
                }
              />
              <Route
                path="/bai-8/phan-2"
                element={
                  <PageWrapper>
                    <Chapter2 />
                  </PageWrapper>
                }
              />
              <Route
                path="/bai-8/phan-3"
                element={
                  <PageWrapper>
                    <Chapter3 />
                  </PageWrapper>
                }
              />

              <Route
                path="/bai-9"
                element={
                  <PageWrapper>
                    <Bai9Home />
                  </PageWrapper>
                }
              />
              <Route
                path="/bai-9/phan-1"
                element={
                  <PageWrapper>
                    <Lesson9Base />
                  </PageWrapper>
                }
              />
              <Route
                path="/bai-9/phan-2"
                element={
                  <PageWrapper>
                    <Lesson9Reactions />
                  </PageWrapper>
                }
              />
              <Route
                path="/bai-9/phan-3"
                element={
                  <PageWrapper>
                    <Lesson9PhScale />
                  </PageWrapper>
                }
              />

              {/* Bài 10: Oxide */}
              <Route
                path="/bai-10"
                element={
                  <PageWrapper>
                    <Bai10Home />
                  </PageWrapper>
                }
              />
              <Route
                path="/bai-10/khai-niem"
                element={
                  <PageWrapper>
                    <KhaiNiem />
                  </PageWrapper>
                }
              />
              <Route
                path="/bai-10/tinh-chat"
                element={
                  <PageWrapper>
                    <TinhChat />
                  </PageWrapper>
                }
              />
              <Route
                path="/bai-10/thong-dung"
                element={
                  <PageWrapper>
                    <ThongDung />
                  </PageWrapper>
                }
              />

              {/* Bài 11: Muối */}
              <Route
                path="/bai-11"
                element={
                  <PageWrapper>
                    <Bai11Home />
                  </PageWrapper>
                }
              />
              <Route
                path="/bai-11/khai-niem"
                element={
                  <PageWrapper>
                    <Lesson11KhaiNiem />
                  </PageWrapper>
                }
              />
              <Route
                path="/bai-11/tinh-tan"
                element={
                  <PageWrapper>
                    <TinhTan />
                  </PageWrapper>
                }
              />
              <Route
                path="/bai-11/tinh-chat"
                element={
                  <PageWrapper>
                    <Lesson11TinhChat />
                  </PageWrapper>
                }
              />
              <Route
                path="/bai-11/dieu-che"
                element={
                  <PageWrapper>
                    <DieuChe />
                  </PageWrapper>
                }
              />
              <Route
                path="/bai-11/moi-quan-he"
                element={
                  <PageWrapper>
                    <MoiQuanHe />
                  </PageWrapper>
                }
              />

              {/* Bài 12: Phân bón hóa học */}
              <Route
                path="/bai-12"
                element={
                  <PageWrapper>
                    <Bai12Home />
                  </PageWrapper>
                }
              />
              <Route
                path="/bai-12/vai-tro"
                element={
                  <PageWrapper>
                    <VaiTro />
                  </PageWrapper>
                }
              />
              <Route
                path="/bai-12/phan-bon"
                element={
                  <PageWrapper>
                    <PhanBon />
                  </PageWrapper>
                }
              />
              <Route
                path="/bai-12/cach-su-dung"
                element={
                  <PageWrapper>
                    <CachSuDung />
                  </PageWrapper>
                }
              />

              <Route
                path="/phan-1"
                element={<Navigate to="/bai-8/phan-1" replace />}
              />
              <Route
                path="/phan-2"
                element={<Navigate to="/bai-8/phan-2" replace />}
              />
              <Route
                path="/phan-3"
                element={<Navigate to="/bai-8/phan-3" replace />}
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
