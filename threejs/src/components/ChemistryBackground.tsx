import { useEffect, useRef } from "react";

// Ký hiệu hóa học phong phú cho hiệu ứng nền
const SYMBOLS = [
  "H", "O", "N", "C", "S", "Cl", "Na", "Fe", "Cu", "Zn",
  "H₂O", "CO₂", "O₂", "H⁺", "OH⁻", "Cl⁻", "SO₄²⁻", "NO₃⁻",
  "⚗", "⚛", "🧪", "🔬",
];

// Bảng màu khoa học cho các hạt
const PARTICLE_COLORS = [
  [100, 210, 255],  // cyan / teal
  [167, 139, 250],  // tím nhạt
  [94, 234, 212],   // xanh lá nhạt
  [251, 191, 36],   // vàng amber
  [244, 114, 182],  // hồng
  [129, 140, 248],  // xanh tím
];

// Cấu trúc một hạt trang trí nền
interface Particle {
  x: number;          // Vị trí ngang (px)
  y: number;          // Vị trí dọc (px)
  size: number;       // Kích thước
  speedY: number;     // Tốc độ dọc (trôi lên)
  speedX: number;     // Tốc độ ngang rất nhẹ
  wobbleAmp: number;  // Biên độ lắc
  wobbleSpeed: number;// Tốc độ lắc
  phase: number;      // Pha ban đầu
  opacity: number;    // Độ trong suốt
  type: "bubble" | "hexRing" | "symbol" | "dot"; // Loại hạt
  symbol?: string;    // Ký hiệu (nếu type là symbol)
  color: number[];    // Màu RGB
  life: number;       // Tuổi thọ hiện tại
  maxLife: number;    // Tuổi thọ tối đa (để fade out)
}

// Tạo hạt mới ngẫu nhiên
function spawnParticle(w: number, h: number, fromBottom: boolean): Particle {
  const types: Particle["type"][] = ["bubble", "bubble", "hexRing", "symbol", "dot", "dot", "bubble"];
  const type = types[Math.floor(Math.random() * types.length)];
  const color = PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)];
  const maxLife = 400 + Math.random() * 600;

  return {
    x: Math.random() * w,
    y: fromBottom ? h + 20 + Math.random() * 60 : Math.random() * h,
    size: type === "dot" ? 2 + Math.random() * 3 : type === "bubble" ? 6 + Math.random() * 22 : 11 + Math.random() * 9,
    speedY: 0.2 + Math.random() * 0.5,
    speedX: (Math.random() - 0.5) * 0.15,
    wobbleAmp: 10 + Math.random() * 25,
    wobbleSpeed: 0.5 + Math.random() * 1.2,
    phase: Math.random() * Math.PI * 2,
    opacity: 0.08 + Math.random() * 0.18,
    type,
    symbol: type === "symbol" ? SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)] : undefined,
    color,
    life: 0,
    maxLife,
  };
}

// Vẽ hình lục giác (hexagon) cho hiệu ứng ring hóa học
function drawHexRing(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number, rotation: number) {
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i + rotation;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.stroke();
}

// Component: Hiệu ứng nền Canvas toàn màn hình
// Vẽ bọt khí, hexagon ring, ký hiệu nguyên tố, và chấm sáng trôi nổi
export function ChemistryBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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

    // Số lượng hạt tùy theo kích thước màn hình
    const getMaxParticles = () => Math.min(Math.floor(window.innerWidth / 35), 50);

    // Resize canvas và cập nhật kích thước
    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    resize();
    window.addEventListener("resize", resize);

    // Khởi tạo hạt ban đầu (rải đều khắp màn hình)
    const max = getMaxParticles();
    for (let i = 0; i < max; i++) {
      particles.push(spawnParticle(w, h, false));
    }

    // Vòng lặp animation chính
    const tick = () => {
      raf = requestAnimationFrame(tick);
      time += 1;
      ctx.clearRect(0, 0, w, h);

      const maxP = getMaxParticles();

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life += 1;

        // Di chuyển hạt lên trên
        p.y -= p.speedY;
        p.x += p.speedX;

        // Hiệu ứng lắc ngang (wobble) bằng sin
        const wobbleX = Math.sin(time * 0.02 * p.wobbleSpeed + p.phase) * p.wobbleAmp * 0.08;
        const px = p.x + wobbleX;
        const py = p.y;

        // Fade out khi gần hết tuổi thọ hoặc ra khỏi màn hình
        let alpha = p.opacity;
        // Fade in lúc đầu
        if (p.life < 30) alpha *= p.life / 30;
        // Fade out lúc cuối
        if (p.life > p.maxLife - 60) alpha *= (p.maxLife - p.life) / 60;

        // Xóa hạt khi ra khỏi màn hình hoặc hết tuổi thọ
        if (py < -40 || p.life > p.maxLife || px < -40 || px > w + 40) {
          if (particles.length <= maxP) {
            particles[i] = spawnParticle(w, h, true);
          } else {
            particles.splice(i, 1);
          }
          continue;
        }

        const [r, g, b] = p.color;
        ctx.save();
        ctx.globalAlpha = alpha;

        if (p.type === "bubble") {
          // Bọt khí: viền tròn với highlight phản chiếu
          ctx.beginPath();
          ctx.arc(px, py, p.size, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${r},${g},${b},0.6)`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Highlight phản chiếu nhỏ bên trong bọt
          ctx.beginPath();
          ctx.arc(px - p.size * 0.28, py - p.size * 0.28, p.size * 0.18, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r},${g},${b},0.35)`;
          ctx.fill();

          // Viền glow mờ bên ngoài
          ctx.beginPath();
          ctx.arc(px, py, p.size + 3, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${r},${g},${b},0.08)`;
          ctx.lineWidth = 3;
          ctx.stroke();

        } else if (p.type === "hexRing") {
          // Hexagon ring: hình lục giác xoay chậm (mô phỏng cấu trúc benzene)
          ctx.strokeStyle = `rgba(${r},${g},${b},0.5)`;
          ctx.lineWidth = 1;
          const rotation = time * 0.005 + p.phase;
          drawHexRing(ctx, px, py, p.size, rotation);

          // Vòng hex nhỏ bên trong
          ctx.globalAlpha = alpha * 0.4;
          drawHexRing(ctx, px, py, p.size * 0.5, -rotation);

        } else if (p.type === "symbol" && p.symbol) {
          // Ký hiệu hóa học trôi nổi
          const fontSize = p.size;
          ctx.font = `${fontSize}px 'Inter', 'Segoe UI', sans-serif`;
          ctx.fillStyle = `rgba(${r},${g},${b},0.7)`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(p.symbol, px, py);

        } else if (p.type === "dot") {
          // Chấm sáng nhỏ (như ngôi sao)
          ctx.beginPath();
          ctx.arc(px, py, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r},${g},${b},0.6)`;
          ctx.fill();

          // Glow xung quanh chấm
          ctx.beginPath();
          ctx.arc(px, py, p.size * 3, 0, Math.PI * 2);
          const grad = ctx.createRadialGradient(px, py, 0, px, py, p.size * 3);
          grad.addColorStop(0, `rgba(${r},${g},${b},0.15)`);
          grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
          ctx.fillStyle = grad;
          ctx.fill();
        }

        ctx.restore();
      }

      // Bổ sung hạt mới nếu thiếu
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
