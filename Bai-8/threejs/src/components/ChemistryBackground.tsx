import { useEffect, useRef } from "react";

const SYMBOLS = [
  "H", "O", "N", "C", "S", "Cl", "Na", "Fe", "Cu", "Zn",
  "H₂O", "CO₂", "O₂", "H⁺", "OH⁻", "Cl⁻", "SO₄²⁻", "NO₃⁻",
  "⚗", "⚛", "🧪", "🔬",
];

const PARTICLE_COLORS = [
  [100, 210, 255],  // cyan / teal
  [167, 139, 250],  // tím nhạt
  [94, 234, 212],   // xanh lá nhạt
  [251, 191, 36],   // vàng amber
  [244, 114, 182],  // hồng
  [129, 140, 248],  // xanh tím
];

interface Particle {
  x: number;          // Vị trí ngang
  y: number;          // Vị trí dọc
  z: number;          // Độ sâu (parallax)
  baseSize: number;   // Kích thước gốc
  speedY: number;     // Tốc độ trôi
  speedX: number;     // Tốc độ ngang
  wobbleAmpX: number; // Biên độ lắc ngang
  wobbleAmpY: number; // Biên độ lắc dọc
  wobbleSpeedX: number;
  wobbleSpeedY: number;
  phaseX: number;     // Pha ban đầu
  phaseY: number;
  rot: number;        // Góc xoay
  rotSpeed: number;   // Tốc độ xoay
  opacity: number;    // Độ trong suốt
  type: "bubble" | "hexRing" | "symbol" | "dot";
  symbol?: string;
  color: number[];
  life: number;
  maxLife: number;
}

function spawnParticle(w: number, h: number, fromBottom: boolean): Particle {
  const types: Particle["type"][] = ["bubble", "bubble", "hexRing", "symbol", "dot", "dot", "dot", "dot", "bubble"];
  const type = types[Math.floor(Math.random() * types.length)];
  const color = PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)];
  const maxLife = 500 + Math.random() * 800;

  return {
    x: Math.random() * w,
    y: fromBottom ? h + 50 + Math.random() * 100 : Math.random() * h,
    z: 0.2 + Math.random() * 0.8, // Chiều sâu từ 0.2 (xa) đến 1.0 (gần)
    baseSize: type === "dot" ? 2 + Math.random() * 4 : type === "bubble" ? 8 + Math.random() * 25 : 12 + Math.random() * 18,
    speedY: 0.2 + Math.random() * 0.7,
    speedX: (Math.random() - 0.5) * 0.4,
    wobbleAmpX: 10 + Math.random() * 40,
    wobbleAmpY: 5 + Math.random() * 20,
    wobbleSpeedX: 0.005 + Math.random() * 0.015,
    wobbleSpeedY: 0.005 + Math.random() * 0.015,
    phaseX: Math.random() * Math.PI * 2,
    phaseY: Math.random() * Math.PI * 2,
    rot: Math.random() * Math.PI * 2,
    rotSpeed: (Math.random() - 0.5) * 0.02,
    opacity: 0.1 + Math.random() * 0.2, // Base opacity
    type,
    symbol: type === "symbol" ? SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)] : undefined,
    color,
    life: 0,
    maxLife,
  };
}

export function ChemistryBackground({ isPaused = false }: { isPaused?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pausedRef = useRef(isPaused);

  useEffect(() => {
    pausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    let particles: Particle[] = [];
    let time = 0;

    const getMaxParticles = () => Math.min(Math.floor(window.innerWidth / 45), 35);

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    resize();
    window.addEventListener("resize", resize);

    const max = getMaxParticles() * 1.5; // Tăng x1.5 lượng hạt để nối mạng phân tử dày hơn
    for (let i = 0; i < max; i++) {
      particles.push(spawnParticle(w, h, false));
    }

    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (pausedRef.current) return; // Chống tràn CPU: Đóng băng Hóa học nền khi màn Splash Screen che lấp

      time += 1;
      ctx.clearRect(0, 0, w, h);

      const maxP = getMaxParticles() * 1.1; // Giảm số lượng hạt một chút để tối ưu hiệu năng

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life += 1;

        p.y -= p.speedY * p.z;
        p.x += p.speedX * p.z;
        p.rot += p.rotSpeed;

        if (p.y < -100 || p.life > p.maxLife || p.x < -100 || p.x > w + 100) {
          if (particles.length <= maxP) {
            particles[i] = spawnParticle(w, h, true);
          } else {
            particles.splice(i, 1);
          }
        }
      }

      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        if (particles[i].type !== 'dot') continue;
        const p1 = particles[i];

        const px1 = p1.x + Math.sin(time * p1.wobbleSpeedX + p1.phaseX) * p1.wobbleAmpX;
        const py1 = p1.y + Math.cos(time * p1.wobbleSpeedY + p1.phaseY) * p1.wobbleAmpY;

        for (let j = i + 1; j < particles.length; j++) {
          if (particles[j].type !== 'dot') continue;
          const p2 = particles[j];

          if (Math.abs(p1.z - p2.z) > 0.3) continue;

          const px2 = p2.x + Math.sin(time * p2.wobbleSpeedX + p2.phaseX) * p2.wobbleAmpX;
          const py2 = p2.y + Math.cos(time * p2.wobbleSpeedY + p2.phaseY) * p2.wobbleAmpY;

          const dx = px1 - px2;
          const dy = py1 - py2;
          const distSq = dx * dx + dy * dy;

          if (distSq < 15000) { // dist < ~122
            const dist = Math.sqrt(distSq);
            const lineAlpha = (1 - dist / 122) * 0.35 * Math.min(p1.opacity, p2.opacity);
            ctx.beginPath();
            ctx.moveTo(px1, py1);
            ctx.lineTo(px2, py2);
            ctx.strokeStyle = `rgba(${p1.color[0]},${p1.color[1]},${p1.color[2]},${lineAlpha})`;
            ctx.stroke();
          }
        }
      }

      const isDark = document.documentElement.classList.contains("dark");
      const lightMul = isDark ? 1 : 1.5; // Tăng cường độ màu sắc trên nền sáng
      const highlightColor = isDark ? 255 : 0; // Trắng (Dark Mode) hoặc Đen (Light Mode)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        const px = p.x + Math.sin(time * p.wobbleSpeedX + p.phaseX) * p.wobbleAmpX;
        const py = p.y + Math.cos(time * p.wobbleSpeedY + p.phaseY) * p.wobbleAmpY;
        const size = p.baseSize * p.z; // Tỉ lệ kích thước theo độ xa gần

        let alpha = p.opacity * p.z; // Hạt ở xa mờ hơn một chút
        if (p.life < 40) alpha *= p.life / 40;
        if (p.life > p.maxLife - 60) alpha *= (p.maxLife - p.life) / 60;

        const [r, g, b] = p.color;
        ctx.save();
        ctx.globalAlpha = Math.max(0, alpha);

        ctx.beginPath();
        ctx.arc(px, py, size * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${0.15 * alpha * p.z})`;
        ctx.fill();

        if (p.type === "bubble") {

          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r},${g},${b},${0.2 * alpha * lightMul})`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(px - size * 0.25, py - size * 0.25, size * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${highlightColor},${highlightColor},${highlightColor},${(isDark ? 0.3 : 0.08) * alpha})`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${highlightColor},${highlightColor},${highlightColor},${(isDark ? 0.4 : 0.15) * alpha})`;
          ctx.lineWidth = 1 * p.z;
          ctx.stroke();

        } else if (p.type === "hexRing") {
          ctx.beginPath();
          for (let k = 0; k < 6; k++) {
            const angle = (Math.PI / 3) * k + p.rot;
            const hx = px + size * Math.cos(angle);
            const hy = py + size * Math.sin(angle);
            if (k === 0) ctx.moveTo(hx, hy);
            else ctx.lineTo(hx, hy);
          }
          ctx.closePath();
          ctx.strokeStyle = `rgba(${r},${g},${b},${0.7 * alpha})`;
          ctx.lineWidth = 1.5 * p.z;
          ctx.stroke();

          for (let k = 0; k < 6; k++) {
            const angle = (Math.PI / 3) * k + p.rot;
            const hx = px + size * Math.cos(angle);
            const hy = py + size * Math.sin(angle);
            ctx.beginPath();
            const atomSize = (k === 3 && p.z > 0.5) ? size * 0.3 : size * 0.15;
            ctx.arc(hx, hy, Math.max(1, atomSize), 0, Math.PI * 2);
            ctx.fillStyle = k === 3 ? `rgba(${r},${g},${b},${alpha * lightMul})` : `rgba(${highlightColor},${highlightColor},${highlightColor},${alpha * (isDark ? 0.8 : 0.2)})`;
            ctx.fill();
          }

        } else if (p.type === "symbol" && p.symbol) {
          ctx.font = `600 ${Math.max(10, size)}px system-ui, -apple-system, sans-serif`;
          ctx.fillStyle = `rgba(${r},${g},${b},${alpha * 0.9})`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";

          ctx.translate(px, py);
          ctx.rotate(p.rot * 0.5); // Ký hiệu quay rất chậm
          ctx.fillText(p.symbol, 0, 0);

        } else if (p.type === "dot") {
          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(px, py, size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r},${g},${b},${0.2 * alpha})`;
          ctx.fill();
        }

        ctx.restore();
      }

      while (particles.length < maxP) {
        particles.push(spawnParticle(w, h, true));
      }
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
