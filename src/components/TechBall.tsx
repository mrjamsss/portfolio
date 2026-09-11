import React, { useState, useRef } from 'react';

export interface TechItem {
  id: string;
  name: string;
  category: string;
  icon: React.ReactNode;
}

interface TechBallProps {
  item: TechItem;
  delayIndex?: number;
}

export const TechBall: React.FC<TechBallProps> = ({ item, delayIndex = 0 }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation angle (max 22 degrees)
    const rotateX = ((y - centerY) / centerY) * -22;
    const rotateY = ((x - centerX) / centerX) * 22;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div className="flex flex-col items-center group relative select-none">
      {/* 3D Ball Container */}
      <div
        ref={cardRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isHovered
            ? `perspective(600px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.15, 1.15, 1.15)`
            : `perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
          transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.5s ease-out',
          animationDelay: `${(delayIndex % 5) * 0.4}s`,
        }}
        className="w-20 h-20 sm:w-24 sm:h-24 relative flex items-center justify-center cursor-pointer will-change-transform"
      >
        {/* Low-Poly Faceted 3D Ball SVG */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:drop-shadow-[0_15px_25px_rgba(99,102,241,0.25)]"
        >
          <defs>
            {/* Shading gradients for facets */}
            <linearGradient id="facet-light" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>
            <linearGradient id="facet-mid" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>
            <linearGradient id="facet-shadow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#64748b" />
            </linearGradient>
            <linearGradient id="facet-dark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#64748b" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
            <linearGradient id="facet-highlight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#f8fafc" stopOpacity="0.6" />
            </linearGradient>
          </defs>

          {/* Low-Poly Facets approximating a 3D Icosahedron sphere */}
          {/* Top Left Highlights */}
          <polygon points="50,6 23,17 32,38" fill="#ffffff" />
          <polygon points="50,6 32,38 50,34" fill="#f8fafc" />
          <polygon points="50,6 50,34 68,38" fill="#f1f5f9" />
          <polygon points="50,6 68,38 77,17" fill="#e2e8f0" />

          {/* Upper Outer Ring */}
          <polygon points="23,17 6,40 18,52" fill="#f1f5f9" />
          <polygon points="23,17 18,52 32,38" fill="#ffffff" />
          <polygon points="77,17 68,38 82,52" fill="#cbd5e1" />
          <polygon points="77,17 82,52 94,40" fill="#94a3b8" />

          {/* Center Mid-tone Facets */}
          <polygon points="18,52 32,38 35,65" fill="#f8fafc" />
          <polygon points="32,38 50,34 50,68" fill="url(#facet-light)" />
          <polygon points="32,38 50,68 35,65" fill="#e2e8f0" />
          <polygon points="50,34 68,38 50,68" fill="url(#facet-mid)" />
          <polygon points="68,38 65,65 50,68" fill="#cbd5e1" />
          <polygon points="68,38 82,52 65,65" fill="#94a3b8" />

          {/* Lower Outer Ring */}
          <polygon points="6,40 18,52 10,65" fill="#e2e8f0" />
          <polygon points="18,52 35,65 24,84" fill="#cbd5e1" />
          <polygon points="18,52 24,84 10,65" fill="#94a3b8" />
          <polygon points="94,40 82,52 90,65" fill="#64748b" />
          <polygon points="82,52 76,84 65,65" fill="#64748b" />
          <polygon points="82,52 90,65 76,84" fill="#475569" />

          {/* Bottom Shadow Facets */}
          <polygon points="35,65 50,68 50,94" fill="#94a3b8" />
          <polygon points="35,65 50,94 24,84" fill="url(#facet-shadow)" />
          <polygon points="50,68 65,65 50,94" fill="url(#facet-shadow)" />
          <polygon points="65,65 76,84 50,94" fill="url(#facet-dark)" />

          {/* Bottom Caps */}
          <polygon points="10,65 24,84 18,88" fill="#64748b" />
          <polygon points="24,84 50,94 36,97" fill="#475569" />
          <polygon points="50,94 76,84 64,97" fill="#334155" />
          <polygon points="76,84 90,65 82,88" fill="#334155" />

          {/* Central Facet Glow/Reflection Accent */}
          <circle cx="45" cy="45" r="30" fill="url(#facet-highlight)" opacity="0.15" />
        </svg>

        {/* Tech Icon Overlay in Center */}
        <div
          style={{
            transform: isHovered
              ? `translateZ(20px) scale(1.08)`
              : `translateZ(0px) scale(1)`,
            transition: 'transform 0.15s ease-out',
          }}
          className="absolute inset-0 flex items-center justify-center p-5 pointer-events-none drop-shadow-md"
        >
          {item.icon}
        </div>
      </div>

      {/* Floating Shadow Underneath */}
      <div
        style={{
          transform: isHovered ? 'scale(0.8)' : 'scale(1)',
          opacity: isHovered ? 0.3 : 0.6,
          transition: 'all 0.3s ease',
        }}
        className="w-12 sm:w-14 h-2 rounded-full bg-black/60 blur-[3px] -mt-1"
      />

      {/* Name Tooltip on Hover */}
      <div
        className={`absolute -bottom-8 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-slate-900/95 border border-white/[0.1] text-white text-[11px] font-mono whitespace-nowrap pointer-events-none shadow-xl transition-all duration-200 z-20 ${
          isHovered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-1 scale-95'
        }`}
      >
        <span className="font-semibold text-indigo-300">{item.name}</span>
        <span className="text-slate-400 text-[9px] ml-1.5 font-sans">({item.category})</span>
      </div>
    </div>
  );
};
