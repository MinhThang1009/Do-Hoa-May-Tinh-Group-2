import { type CSSProperties, useEffect, useRef } from "react";

type AutoPlayVideoProps = {
  src: string;
  className?: string;
  style?: CSSProperties;
  playMode?: "viewport" | "hover";
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  preload?: "none" | "metadata" | "auto";
  threshold?: number;
};

export function AutoPlayVideo({
  src,
  className,
  style,
  playMode = "viewport",
  controls,
  loop = true,
  muted = true,
  preload = "metadata",
  threshold = 0.35,
}: AutoPlayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (playMode !== "viewport") return;

    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Browser autoplay policy can still block playback in rare cases.
          });
          return;
        }

        video.pause();
      },
      { threshold }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [playMode, threshold]);

  const play = () => {
    videoRef.current?.play().catch(() => {
      // Browser autoplay policy can still block playback in rare cases.
    });
  };

  const pause = () => {
    videoRef.current?.pause();
  };

  return (
    <video
      ref={videoRef}
      className={className}
      style={style}
      onMouseEnter={playMode === "hover" ? play : undefined}
      onMouseLeave={playMode === "hover" ? pause : undefined}
      onFocus={playMode === "hover" ? play : undefined}
      onBlur={playMode === "hover" ? pause : undefined}
      controls={controls ?? playMode !== "hover"}
      loop={loop}
      muted={muted}
      preload={preload}
      playsInline
      src={src}
    />
  );
}
