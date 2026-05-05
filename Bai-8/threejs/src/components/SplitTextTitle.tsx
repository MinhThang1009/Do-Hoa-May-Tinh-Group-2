import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SplitTextTitleProps {
    text: string;
    className?: string;
    delay?: number;
    highlightWords?: string[];
    highlightColor?: string;
}

export function SplitTextTitle({ text, className = "", delay = 0, highlightWords = [], highlightColor = "#64d2ff" }: SplitTextTitleProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    const words = text.split(" ");
    // Chấp hành mệnh lệnh Master Design: 
    // Trả Text Base về màu Nhận Diện tự nhiên của Theme (Trắng hoặc Đen) để Cân bằng thị giác
    // Giữ nguyên Neon Glow cho riêng các Highlight Words để nâng tầm Focus.

    return (
        <h1 ref={ref} className={`${className} flex flex-wrap justify-center py-2 px-1`}>
            {words.map((word, wordIndex) => {
                const isHighlight = highlightWords.includes(word.replace(/[,.]/g, ""));
                return (
                    <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
                        {word.split("").map((char, charIndex) => {
                            return (
                                <motion.span
                                    key={`${wordIndex}-${charIndex}`}
                                    initial={{ opacity: 0, y: 40, rotateX: -90 }}
                                    animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                                    transition={{
                                        duration: 0.8,
                                        ease: [0.22, 1, 0.36, 1],
                                        delay: delay + wordIndex * 0.05 + charIndex * 0.02,
                                    }}
                                    className="inline-block"
                                    style={{
                                        color: isHighlight ? highlightColor : "inherit",
                                        textShadow: isHighlight
                                            ? `0 0 25px ${highlightColor}80, 0 0 12px ${highlightColor}60`
                                            : undefined
                                    }}
                                >
                                    {char}
                                </motion.span>
                            );
                        })}
                    </span>
                );
            })}
        </h1>
    );
}
