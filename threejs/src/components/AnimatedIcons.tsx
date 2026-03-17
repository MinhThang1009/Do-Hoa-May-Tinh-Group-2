// SVG Component cho phân tử H2O có hiệu ứng rung động nhẹ
export function AnimatedH2O({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`w-full h-full ${className}`}
      style={{ filter: "drop-shadow(0px 4px 8px rgba(94, 234, 212, 0.3))" }}
    >
      <defs>
        <radialGradient id="oxy" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#991b1b" />
        </radialGradient>
        <radialGradient id="hydro" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#f3f4f6" />
          <stop offset="100%" stopColor="#9ca3af" />
        </radialGradient>
        {/* Filter Glow */}
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Liên kết */}
      <line x1="50" y1="50" x2="25" y2="80" stroke="rgba(255,255,255,0.4)" strokeWidth="6" strokeLinecap="round" />
      <line x1="50" y1="50" x2="75" y2="80" stroke="rgba(255,255,255,0.4)" strokeWidth="6" strokeLinecap="round" />

      {/* Oxygen */}
      <circle cx="50" cy="50" r="22" fill="url(#oxy)" filter="url(#glow)">
        <animate attributeName="cy" values="50; 45; 50" dur="4s" repeatCount="indefinite" />
      </circle>
      <text x="50" y="52" fill="white" fontSize="20" fontWeight="bold" textAnchor="middle" alignmentBaseline="middle">
        O
        <animate attributeName="y" values="52; 47; 52" dur="4s" repeatCount="indefinite" />
      </text>

      {/* Hydrogen 1 */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0; -3,3; 0,0" dur="4s" repeatCount="indefinite" />
        <circle cx="25" cy="80" r="14" fill="url(#hydro)" filter="url(#glow)" />
        <text x="25" y="81" fill="#1f2937" fontSize="14" fontWeight="bold" textAnchor="middle" alignmentBaseline="middle">H</text>
      </g>

      {/* Hydrogen 2 */}
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0; 3,3; 0,0" dur="4s" repeatCount="indefinite" />
        <circle cx="75" cy="80" r="14" fill="url(#hydro)" filter="url(#glow)" />
        <text x="75" y="81" fill="#1f2937" fontSize="14" fontWeight="bold" textAnchor="middle" alignmentBaseline="middle">H</text>
      </g>
    </svg>
  );
}

// SVG Component cho nguyên tử Atom có quỹ đạo xoay tròn (Đại diện cho Khái niệm/Bản chất)
export function AnimatedAtom3D({ className = "", color = "#64d2ff" }: { className?: string, color?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={`w-full h-full ${className}`}>
      <defs>
        <radialGradient id={`coreGlow-${color.replace('#', '')}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff" stopOpacity="1" />
          <stop offset="40%" stopColor={color} stopOpacity="0.8" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Hạt nhân */}
      <circle cx="50" cy="50" r="12" fill={`url(#coreGlow-${color.replace('#', '')})`}>
        <animate attributeName="r" values="10; 14; 10" dur="2s" repeatCount="indefinite" />
      </circle>
      
      {/* Các quỹ đạo electron */}
      <g stroke={color} strokeWidth="1.5" fill="none" opacity="0.6">
        <ellipse cx="50" cy="50" rx="42" ry="14">
          <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="8s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="50" cy="50" rx="42" ry="14">
          <animateTransform attributeName="transform" type="rotate" from="60 50 50" to="420 50 50" dur="8s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="50" cy="50" rx="42" ry="14">
          <animateTransform attributeName="transform" type="rotate" from="120 50 50" to="480 50 50" dur="8s" repeatCount="indefinite" />
        </ellipse>
      </g>

      {/* Electron di chuyển trên quỹ đạo */}
      <g>
        <circle cx="92" cy="50" r="3" fill="#fff" />
        <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="8s" repeatCount="indefinite" />
      </g>
      <g>
        <circle cx="92" cy="50" r="3" fill="#fff" />
        <animateTransform attributeName="transform" type="rotate" from="60 50 50" to="420 50 50" dur="8s" repeatCount="indefinite" />
      </g>
    </svg>
  );
}

// SVG Component mô phỏng Bình tam giác (Erlenmeyer Flask) đang sủi bọt - Phù hợp cho "Tính chất hóa học / Phản ứng"
export function AnimatedFlask({ className = "", color = "#a78bfa" }: { className?: string, color?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={`w-full h-full ${className}`}>
      <defs>
        <linearGradient id={`liquidGradient-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.8" />
          <stop offset="100%" stopColor={color} stopOpacity="0.3" />
        </linearGradient>
        <filter id="flaskGlow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Dung dịch bên trong bình có gợn sóng (animate d) */}
      <path 
        fill={`url(#liquidGradient-${color.replace('#', '')})`} 
        filter="url(#flaskGlow)"
        d="M 35 60 L 25 85 A 10 10 0 0 0 35 95 L 65 95 A 10 10 0 0 0 75 85 L 65 60 Z"
      >
        <animate attributeName="d" 
                 values="M 35 60 Q 50 55 65 60 L 75 85 A 10 10 0 0 1 65 95 L 35 95 A 10 10 0 0 1 25 85 Z;
                         M 35 60 Q 50 65 65 60 L 75 85 A 10 10 0 0 1 65 95 L 35 95 A 10 10 0 0 1 25 85 Z;
                         M 35 60 Q 50 55 65 60 L 75 85 A 10 10 0 0 1 65 95 L 35 95 A 10 10 0 0 1 25 85 Z" 
                 dur="2s" repeatCount="indefinite" />
      </path>

      {/* Viền bình tam giác */}
      <path 
        d="M 45 10 L 55 10 L 55 40 L 75 85 A 10 10 0 0 1 65 95 L 35 95 A 10 10 0 0 1 25 85 L 45 40 Z" 
        fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" 
      />
      
      {/* Cổ bình (Viền ngang) */}
      <line x1="42" y1="18" x2="58" y2="18" stroke="#fff" strokeWidth="3" strokeLinecap="round" />

      {/* Bong bóng sủi lên từ đáy bình */}
      <g fill="#fff" opacity="0.8">
        <circle cx="45" cy="85" r="3">
          <animate attributeName="cy" values="85; 55" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8; 0" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="55" cy="90" r="2.5">
          <animate attributeName="cy" values="90; 60" dur="2s" repeatCount="indefinite" begin="0.5s"/>
          <animate attributeName="opacity" values="0.6; 0" dur="2s" repeatCount="indefinite" begin="0.5s"/>
        </circle>
        <circle cx="50" cy="80" r="3.5">
          <animate attributeName="cy" values="80; 50" dur="1.2s" repeatCount="indefinite" begin="1s"/>
          <animate attributeName="opacity" values="0.7; 0" dur="1.2s" repeatCount="indefinite" begin="1s"/>
        </circle>
      </g>
    </svg>
  );
}

// SVG Component mô phỏng Cốc mỏ (Beaker) bốc khói/khí - Phù hợp cho "Các axit mạnh / hóa chất thực tế"
export function AnimatedBeaker({ className = "", color = "#5eead4" }: { className?: string, color?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={`w-full h-full ${className}`}>
      <defs>
        <linearGradient id={`beakerLiquid-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.8" />
          <stop offset="100%" stopColor={color} stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* Làn khói / khí bốc lên (đặc trưng của Acid đậm đặc như HCl, HNO3) */}
      <g stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6">
        <path d="M 40 40 Q 30 25 45 10">
          <animate attributeName="d" values="M 40 40 Q 30 25 45 10; M 40 40 Q 45 25 35 10; M 40 40 Q 30 25 45 10" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0; 0.6; 0" dur="3s" repeatCount="indefinite" />
        </path>
        <path d="M 60 45 Q 65 30 50 15">
          <animate attributeName="d" values="M 60 45 Q 65 30 50 15; M 60 45 Q 50 30 60 15; M 60 45 Q 65 30 50 15" dur="3s" repeatCount="indefinite" begin="1.5s" />
          <animate attributeName="opacity" values="0; 0.6; 0" dur="3s" repeatCount="indefinite" begin="1.5s" />
        </path>
      </g>

      {/* Dung dịch trong Beaker */}
      <path 
        d="M 30 65 L 30 85 A 8 8 0 0 0 38 93 L 62 93 A 8 8 0 0 0 70 85 L 70 65 Z" 
        fill={`url(#beakerLiquid-${color.replace('#', '')})`} 
      >
        <animate attributeName="d" 
                 values="M 30 65 Q 50 60 70 65 L 70 85 A 8 8 0 0 1 62 93 L 38 93 A 8 8 0 0 1 30 85 Z;
                         M 30 65 Q 50 70 70 65 L 70 85 A 8 8 0 0 1 62 93 L 38 93 A 8 8 0 0 1 30 85 Z;
                         M 30 65 Q 50 60 70 65 L 70 85 A 8 8 0 0 1 62 93 L 38 93 A 8 8 0 0 1 30 85 Z" 
                 dur="2.5s" repeatCount="indefinite" />
      </path>

      {/* Vỏ cốc mỏ */}
      <path 
        d="M 25 35 L 30 35 L 30 85 A 8 8 0 0 0 38 93 L 62 93 A 8 8 0 0 0 70 85 L 70 35 L 75 35" 
        fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" 
      />
      {/* Vòi của cốc mỏ (Spout) */}
      <path d="M 25 35 L 20 28 L 30 35" fill="none" stroke="#fff" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round"/>

      {/* Vạch chia độ (Graduation marks) */}
      <line x1="60" y1="55" x2="70" y2="55" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <line x1="63" y1="65" x2="70" y2="65" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <line x1="60" y1="75" x2="70" y2="75" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}
