import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export interface ResearchCardProps {
  number: string;
  badge: { tag: string; label: string };
  title: string;
  description?: string;
  services?: string[];
  image: string;
  href: string;
  variant?: 'dark' | 'light';
}

export function Research3DCard({ 
  number, 
  badge, 
  title, 
  description, 
  services, 
  image, 
  href,
  variant = 'dark' 
}: ResearchCardProps) {
  const navigate = useNavigate();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const isDark = variant === 'dark';

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 1024) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    }
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Smooth, subtle 3D tilt between -6deg and +6deg
    const rotateX = -((y - centerY) / centerY) * 6;
    const rotateY = ((x - centerX) / centerX) * 6;
    
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const handleCardClick = () => {
    navigate(href);
  };

  return (
    <div 
      className="group h-full flex flex-col cursor-pointer select-none" 
      style={{ perspective: '1000px' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          navigate(href);
        }
      }}
    >
      <div 
        className={`relative rounded-[24px] border shadow-sm transition-all duration-500 flex flex-col justify-between h-full overflow-hidden p-6 sm:p-8 ${
          isDark 
            ? 'bg-[#0C2419] border-[#1A3B2B] group-hover:border-[#20C77A]/50 group-hover:bg-[#103322] group-hover:shadow-[0_10px_30px_rgba(32,199,122,0.12)]' 
            : 'bg-white border-[#E5E5E5] group-hover:border-[#FF4D00]/40 group-hover:shadow-2xl'
        }`}
        style={{
          transformStyle: 'preserve-3d',
          transform: isHovered 
            ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)` 
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transition: isHovered 
            ? 'transform 0.12s ease-out, border-color 0.3s, background-color 0.3s, box-shadow 0.3s' 
            : 'transform 0.5s ease-out, border-color 0.3s, background-color 0.3s, box-shadow 0.3s'
        }}
      >
        {/* Subtle decorative scientific grid background */}
        <div 
          className={`absolute inset-0 opacity-[0.04] bg-[size:20px_20px] pointer-events-none ${
            isDark 
              ? 'bg-[linear-gradient(to_right,#1A3B2B_1px,transparent_1px),linear-gradient(to_bottom,#1A3B2B_1px,transparent_1px)]'
              : 'bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]'
          }`} 
        />

        {/* 3D Floating Scientific Badge */}
        <div 
          style={{ transform: 'translateZ(30px)' }}
          className={`absolute top-6 right-6 z-20 flex flex-col items-center justify-center px-3 py-2 rounded-xl border shadow-md transition-colors select-none ${
            isDark
              ? 'bg-[#04110B] text-[#F2F7F4] border-[#1A3B2B] group-hover:border-[#20C77A]/50'
              : 'bg-[#050505] text-white border-neutral-800 group-hover:border-[#FF4D00]/50'
          }`}
        >
          <span className={`text-[10px] font-bold uppercase tracking-widest leading-none mb-0.5 ${isDark ? 'text-[#20C77A]' : 'text-[#FF4D00]'}`}>
            {badge.tag}
          </span>
          <span className="text-[11px] font-bold leading-none tracking-wider">
            {badge.label}
          </span>
        </div>

        {/* Top Header Layer */}
        <div style={{ transform: 'translateZ(25px)' }} className="relative z-10 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <span className={`text-xl font-bold tracking-tight ${isDark ? 'text-[#20C77A]' : 'text-[#FF4D00]'}`}>
              {number}
            </span>
            <div className={`h-[2px] w-8 transition-all duration-300 ${
              isDark 
                ? 'bg-[#20C77A]/40 group-hover:w-12 group-hover:bg-[#20C77A]' 
                : 'bg-[#FF4D00]/30 group-hover:w-12 group-hover:bg-[#FF4D00]'
            }`} />
          </div>
          <h3 className={`text-xl sm:text-2xl font-bold tracking-tight uppercase leading-snug ${isDark ? 'text-[#F2F7F4]' : 'text-[#050505]'}`}>
            {title}
          </h3>
        </div>

        {/* Body Content Layer */}
        <div style={{ transform: 'translateZ(20px)' }} className="relative z-10 flex-grow mb-6">
          {description && (
            <p className={`text-sm leading-relaxed font-light ${isDark ? 'text-[#A8B8AF]' : 'text-neutral-600'}`}>
              {description}
            </p>
          )}

          {services && (
            <ul className="space-y-2.5 font-light">
              {services.map((item, idx) => (
                <li key={idx} className={`flex items-center gap-2.5 text-xs sm:text-sm ${isDark ? 'text-[#A8B8AF]' : 'text-neutral-700'}`}>
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isDark ? 'bg-[#20C77A]' : 'bg-[#FF4D00]'}`} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Integrated Image Layer */}
        <div 
          style={{ transform: 'translateZ(15px)' }} 
          className={`relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden mb-6 border transition-colors shrink-0 ${
            isDark 
              ? 'border-[#1A3B2B] group-hover:border-[#20C77A]/30 bg-[#081C14]' 
              : 'border-[#E5E5E5] group-hover:border-neutral-300 bg-neutral-100'
          }`}
        >
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out" 
          />
          <div className={`absolute inset-0 transition-opacity ${
            isDark 
              ? 'bg-gradient-to-t from-[#04110B]/60 via-transparent to-transparent opacity-70 group-hover:opacity-40' 
              : 'bg-gradient-to-t from-[#050505]/40 via-transparent to-transparent opacity-60 group-hover:opacity-30'
          }`} />
        </div>

        {/* Footer CTA Layer: Modern Premium EXPLORE RESEARCH Button */}
        <div style={{ transform: 'translateZ(32px)' }} className={`relative z-10 pt-4 border-t ${isDark ? 'border-[#1A3B2B]' : 'border-[#F0F0EE]'}`}>
          <div 
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              isDark
                ? 'bg-[#20C77A] text-[#04110B] hover:bg-[#2ae08c] group-hover:shadow-[0_0_15px_rgba(32,199,122,0.3)]'
                : 'bg-[#050505] text-white group-hover:bg-[#FF4D00] shadow-sm'
            }`}
          >
            <span>EXPLORE RESEARCH</span>
            <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300 shrink-0" />
          </div>
        </div>

      </div>
    </div>
  );
}
