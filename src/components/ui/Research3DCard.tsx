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
    
    // Smooth 3D tilt between -6deg and +6deg
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
        className={`relative rounded-[24px] border shadow-lg transition-all duration-500 flex flex-col justify-between min-h-[380px] sm:min-h-[420px] h-full overflow-hidden p-6 sm:p-8 ${
          isDark 
            ? 'border-[#1A3B2B] group-hover:border-[#20C77A]/60 group-hover:shadow-[0_15px_40px_rgba(32,199,122,0.2)]' 
            : 'border-white/20 group-hover:border-[#FF4D00]/60 group-hover:shadow-[0_15px_40px_rgba(255,77,0,0.25)]'
        }`}
        style={{
          transformStyle: 'preserve-3d',
          transform: isHovered 
            ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)` 
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transition: isHovered 
            ? 'transform 0.12s ease-out, border-color 0.3s, box-shadow 0.3s' 
            : 'transform 0.5s ease-out, border-color 0.3s, box-shadow 0.3s'
        }}
      >
        {/* Full-Bleed Card Background Image Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out filter saturate-110" 
          />
          
          {/* Gradient Overlay to Ensure Legibility & Scientific Feel */}
          <div className={`absolute inset-0 transition-opacity duration-300 ${
            isDark 
              ? 'bg-gradient-to-t from-[#04110B] via-[#04110B]/85 to-[#04110B]/60 group-hover:opacity-90' 
              : 'bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/50 group-hover:opacity-90'
          }`} />
          
          {/* Decorative Scientific Grid */}
          <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] bg-[length:24px_24px]" />
        </div>

        {/* Top Header Layer */}
        <div style={{ transform: 'translateZ(25px)' }} className="relative z-10 mb-6 pt-1">
          <div className="flex items-center gap-3 mb-3">
            <span className={`text-xl font-bold tracking-tight ${isDark ? 'text-[#20C77A]' : 'text-[#FF4D00]'}`}>
              {number}
            </span>
            <div className={`h-[2px] w-8 transition-all duration-300 ${
              isDark 
                ? 'bg-[#20C77A]/60 group-hover:w-12 group-hover:bg-[#20C77A]' 
                : 'bg-[#FF4D00]/60 group-hover:w-12 group-hover:bg-[#FF4D00]'
            }`} />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight uppercase leading-snug text-white">
            {title}
          </h3>
        </div>

        {/* Body Content Layer */}
        <div style={{ transform: 'translateZ(20px)' }} className="relative z-10 flex-grow mb-8">
          {description && (
            <p className="text-sm leading-relaxed font-light text-neutral-300 mb-4 drop-shadow-sm">
              {description}
            </p>
          )}

          {services && (
            <ul className="space-y-2.5 font-light">
              {services.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-200">
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isDark ? 'bg-[#20C77A]' : 'bg-[#FF4D00]'}`} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer CTA Layer: Premium EXPLORE RESEARCH Button */}
        <div style={{ transform: 'translateZ(32px)' }} className="relative z-10 pt-4 border-t border-white/15">
          <div 
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              isDark
                ? 'bg-[#20C77A] text-[#04110B] hover:bg-[#2ae08c] group-hover:shadow-[0_0_18px_rgba(32,199,122,0.4)]'
                : 'bg-[#FF4D00] text-white hover:bg-[#E64500] group-hover:shadow-[0_0_18px_rgba(255,77,0,0.4)]'
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
