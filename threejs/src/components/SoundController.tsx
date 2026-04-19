import { useEffect, useState } from "react";
import { Volume2, Volume1, VolumeX } from "lucide-react";
import { SoundEngine } from "../utils/SoundEngine";
import { motion, AnimatePresence } from "framer-motion";

export function SoundController({ isAppReady = true, isIdle = false }: { isAppReady?: boolean, isIdle?: boolean }) {
    const [volume, setVolume] = useState(SoundEngine.volume);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        setTimeout(() => setVolume(SoundEngine.volume), 0);

        const checkInteractive = (e: MouseEvent | TouchEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('.sound-controller-exclude')) return false;
            return target.closest('a, button, [role="button"], input, .interactive') !== null;
        };

        const onMouseOver = (e: MouseEvent) => {
            if (checkInteractive(e)) {
                SoundEngine.init();
                SoundEngine.playHover();
            }
        };

        const onMouseDown = (e: MouseEvent | TouchEvent) => {
            SoundEngine.init();
            if (checkInteractive(e)) {
                SoundEngine.playClick();
            }
        };

        if (window.matchMedia("(pointer: fine)").matches) {
            window.addEventListener("mouseover", onMouseOver);
        }

        window.addEventListener("mousedown", onMouseDown);
        window.addEventListener("touchstart", onMouseDown, { passive: true });

        return () => {
            window.removeEventListener("mouseover", onMouseOver);
            window.removeEventListener("mousedown", onMouseDown);
            window.removeEventListener("touchstart", onMouseDown);
        };
    }, []);

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = parseFloat(e.target.value);
        setVolume(val);
        SoundEngine.setVolume(val);
    };

    const handleToggleMute = () => {
        SoundEngine.toggleMute();
        setVolume(SoundEngine.volume);
    };

    const getIcon = () => {
        if (volume === 0) return <VolumeX size={18} strokeWidth={2.5} />;
        if (volume < 0.5) return <Volume1 size={18} strokeWidth={2.5} />;
        return <Volume2 size={18} strokeWidth={2.5} />;
    };

    return (
        <motion.div
            className="ui-control sound-controller-exclude fixed bottom-6 right-6 z-[99999] flex flex-col-reverse items-center justify-start bg-white/40 dark:bg-[rgba(15,20,30,0.65)] border border-white/60 dark:border-white/10 rounded-[28px] p-[6px] shadow-[inset_0_1px_4px_rgba(255,255,255,0.6),0_8px_32px_rgba(0,0,0,0.15)] dark:shadow-[inset_0_1px_4px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-[24px] transition-colors duration-500 hover:bg-white/60 dark:hover:bg-[rgba(15,20,30,0.85)]"
            initial={{ height: 48, width: 48, y: 50, scale: 0.8, opacity: 0 }}
            animate={{
                height: isHovered ? 180 : 48,
                width: 48,
                y: isAppReady && !isIdle ? 0 : 50,
                scale: isAppReady && !isIdle ? 1 : 0.8,
                opacity: isAppReady && !isIdle ? 1 : 0
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ overflow: "hidden" }}
        >
            {/* Nút bấm tròn (Giao diện gốc) */}
            <button
                onClick={handleToggleMute}
                className="flex-shrink-0 flex items-center justify-center w-9 h-9 text-slate-700 dark:text-white/70 hover:text-sky-500 dark:hover:text-white transition-colors focus:outline-none rounded-full drop-shadow-sm z-10"
                aria-label="Toggle Mute"
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={volume === 0 ? 'mute' : volume < 0.5 ? 'low' : 'high'}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.15 }}
                    >
                        {getIcon()}
                    </motion.div>
                </AnimatePresence>
            </button>

            {/* Không gian Slider khi kéo bung */}
            <motion.div
                className="flex-grow flex flex-col items-center justify-center w-full mb-3 mt-1"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                style={{ pointerEvents: isHovered ? 'auto' : 'none' }}
            >
                {/* Text Volume (Premium UI) */}
                <div className="text-[12px] font-bold text-slate-700 dark:text-white/90 mb-3 drop-shadow-md">
                    {Math.round(volume * 100)}
                </div>

                {/* Ống Neon (Lõi) */}
                <div className="w-[12px] h-[80px] relative rounded-full bg-slate-400/20 dark:bg-black/60 overflow-hidden shadow-[inset_0_2px_8px_rgba(0,0,0,0.15)] dark:shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] cursor-pointer group">

                    {/* Liquid Fill */}
                    <div
                        className="absolute bottom-0 w-full bg-gradient-to-t from-sky-400 to-sky-300 dark:from-indigo-500 dark:to-cyan-400 shadow-[inset_1px_0_2px_rgba(255,255,255,0.4)] dark:shadow-[0_0_10px_rgba(100,210,255,0.6),inset_1px_0_2px_rgba(255,255,255,0.3)] transition-all duration-75"
                        style={{ height: `${volume * 100}%` }}
                    >
                        {/* Glossy Edge / Phản quang */}
                        <div className="absolute top-0 right-[1px] bottom-0 w-[3px] bg-white/40 rounded-full blur-[0.5px]" />

                        {/* Chấm tròn chóp (Thumb Tracker) */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[12px] h-[12px] bg-white rounded-full shadow-[0_1px_4px_rgba(0,0,0,0.3)] ring-1 ring-black/5" />
                    </div>

                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="absolute top-1/2 left-1/2 w-[80px] h-[24px] opacity-0 cursor-ns-resize -translate-x-1/2 -translate-y-1/2 -rotate-90 z-20"
                        aria-label="Volume Slider"
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}
