import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Hexagon } from "lucide-react";
import { SoundEngine } from "../utils/SoundEngine";

const bootLogs = [
    "[SYS] Khởi động hệ thống...",
    "[GL] Khởi tạo WebGL Renderer...",
    "[AST] Đang nạp mô hình phân tử 3D...",
    "[PHX] Khởi tạo hiệu ứng hóa học...",
    "[RDY] Kết nối thành công. Mở khóa Phòng Thí Nghiệm."
];

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
    const [isVisible, setIsVisible] = useState(true);
    const [progress, setProgress] = useState(0);
    const [currentLog, setCurrentLog] = useState(-1);

    useEffect(() => {
        SoundEngine.init();
        SoundEngine.playSplashSweep();

        let p = 0;
        const interval = setInterval(() => {
            p += Math.floor(Math.random() * 5) + 1;
            if (p > 100) p = 100;
            setProgress(p);

            if (p > 5 && p < 20) setCurrentLog(0);
            if (p >= 20 && p < 50) setCurrentLog(1);
            if (p >= 50 && p < 80) setCurrentLog(2);
            if (p >= 80 && p < 99) setCurrentLog(3);
            if (p === 100) {
                setCurrentLog(4);
                clearInterval(interval);
            }
        }, 50);

        const preCompleteTimer = setTimeout(() => {
            onComplete();
        }, 1900);

        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2600);

        return () => {
            clearTimeout(preCompleteTimer);
            clearTimeout(timer);
            clearInterval(interval);
        };
    }, [onComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    key="splash"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.15, filter: "blur(15px)" }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-slate-50 dark:bg-[#050209] overflow-hidden font-mono transition-colors duration-500"
                >
                    {/* Ánh sáng Aura rực phía sau */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,120,255,0.03)_0%,_transparent_50%)] dark:bg-[radial-gradient(ellipse_at_center,_rgba(100,210,255,0.06)_0%,_transparent_50%)]" />

                    <div className="relative flex flex-col items-center z-10 w-full max-w-lg px-8">
                        {/* Lõi Hexagon Tâm */}
                        <div className="relative w-36 h-36 flex items-center justify-center mb-16">
                            {/* Vòng Radar 1 */}
                            <motion.div
                                animate={{ rotate: 180 }}
                                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                                className="absolute inset-0 border-[2px] border-t-sky-500 dark:border-t-[#64d2ff] border-r-transparent border-b-purple-500/30 dark:border-b-[#a78bfa]/30 border-l-transparent rounded-full"
                            />
                            {/* Vòng Radar 2 */}
                            <motion.div
                                animate={{ rotate: -180 }}
                                transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                                className="absolute inset-2 border border-dashed border-sky-400/40 dark:border-[#64d2ff]/40 rounded-full"
                            />
                            {/* Vòng Radar 3 (Core) */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                                className="absolute inset-6 border-[3px] border-purple-500/20 dark:border-[#a78bfa]/20 border-b-purple-500 dark:border-b-[#a78bfa] rounded-full"
                            />

                            {/* Biểu tượng Tâm */}
                            <motion.div
                                className="relative text-sky-600 dark:text-[#64d2ff]"
                                animate={{ scale: [1, 1.08, 1], filter: ["blur(1px)", "blur(0px)", "blur(1px)"] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            >
                                <Hexagon size={44} strokeWidth={1.5} className="drop-shadow-[0_0_15px_rgba(14,165,233,0.4)] dark:drop-shadow-[0_0_15px_rgba(100,210,255,0.8)]" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 bg-slate-800 dark:bg-white rounded-full animate-ping" />
                                </div>
                            </motion.div>
                        </div>

                        {/* Thanh Tiến Trình Cắt Xén (Progress Bar) */}
                        <div className="w-full h-[2px] bg-slate-300/50 dark:bg-white/5 rounded-full overflow-hidden mb-6 relative">
                            <motion.div
                                className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-purple-500 to-sky-500 dark:from-[#a78bfa] dark:to-[#64d2ff] shadow-[0_0_10px_rgba(14,165,233,0.5)] dark:shadow-[0_0_15px_#64d2ff]"
                                initial={{ width: "0%" }}
                                animate={{ width: `${progress}%` }}
                                transition={{ ease: "linear", duration: 0.1 }}
                            />
                        </div>

                        {/* Terminal Logs & Phần Trăm */}
                        <div className="w-full flex justify-between items-end text-xs text-sky-700/70 dark:text-[#64d2ff]/50 h-[80px]">
                            <div className="flex flex-col gap-[3px] items-start w-3/4">
                                {bootLogs.map((log, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -5 }}
                                        animate={{
                                            opacity: currentLog >= idx ? 1 : 0,
                                            x: currentLog >= idx ? 0 : -5,
                                            scale: currentLog === idx ? 1.05 : 1,
                                            filter: currentLog === idx ? "blur(0px)" : "blur(0.5px)"
                                        }}
                                        className={`transition-all duration-300 origin-left ${idx === 4 && currentLog === 4 ? "text-purple-600 dark:text-[#a78bfa] font-bold drop-shadow-[0_0_8px_rgba(147,51,234,0.3)] dark:drop-shadow-[0_0_8px_rgba(167,139,250,0.8)]" : ""}`}
                                    >
                                        {log}
                                    </motion.div>
                                ))}
                            </div>

                            <div className="text-5xl font-black tracking-tighter text-slate-800 dark:text-white drop-shadow-[0_0_15px_rgba(14,165,233,0.2)] dark:drop-shadow-[0_0_20px_rgba(100,210,255,0.6)] flex items-end">
                                {progress.toString().padStart(2, '0')}
                                <span className="text-xl text-sky-500 dark:text-[#64d2ff] ml-1 mb-1">%</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
