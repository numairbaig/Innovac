import { getCtaPath } from '@/src/config/ctaConfig';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll } from 'motion/react';
import { 
  FlaskConical, Dna, GraduationCap, Network, 
  ArrowRight, Search, Check, 
  MessageSquare, FileText, Activity, ShieldCheck, 
  ChevronRight, Beaker, TestTube, Thermometer,
  Target, UsersRound, Droplet, Layers, GitFork,
  Link2, Zap, Pipette, Database, X
} from 'lucide-react';
import { SEO } from '@/src/components/SEO';
import { Button } from '@/src/components/ui/Button';
import { SectionHeading } from '@/src/components/ui/SectionHeading';
import { ServicesStrip } from '@/src/components/ui/ServicesStrip';

function PremiumReagentIcon({ name, className = "w-5 h-5" }: { name: string; className?: string }) {
  switch (name) {
    case "Deionized Water":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <defs>
            <linearGradient id="water-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6EE7A8" />
              <stop offset="100%" stopColor="#20C77A" />
            </linearGradient>
          </defs>
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" fill="url(#water-grad)" opacity="0.85" />
          <path d="M12 5v10m-3-3h6" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
        </svg>
      );
    case "TRIzol":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <defs>
            <linearGradient id="trizol-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6EE7A8" />
              <stop offset="100%" stopColor="#20C77A" />
            </linearGradient>
          </defs>
          <rect x="7" y="9" width="10" height="12" rx="2" fill="url(#trizol-grad)" opacity="0.85" />
          <rect x="10" y="5" width="4" height="4" fill="#E5E5E5" />
          <rect x="9" y="3" width="6" height="2" fill="white" />
          <line x1="9" y1="12" x2="15" y2="12" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
        </svg>
      );
    case "TAE Buffer":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <defs>
            <linearGradient id="tae-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6EE7A8" />
              <stop offset="100%" stopColor="#20C77A" />
            </linearGradient>
          </defs>
          <path d="M12 3h0m-2 0h4M12 3v5m-5.89 9.82A2 2 0 0 0 7.8 21h8.4a2 2 0 0 0 1.7-2.82L14 9V3h-4v6z" stroke="url(#tae-grad)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M8.5 16.5l7 0l-1.5-3.5l-4 0z" fill="url(#tae-grad)" opacity="0.8" />
          <circle cx="11" cy="18" r="1" fill="white" opacity="0.6" />
          <circle cx="13" cy="15" r="0.8" fill="white" opacity="0.5" />
        </svg>
      );
    case "TBE Buffer":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <defs>
            <linearGradient id="tbe-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6EE7A8" />
              <stop offset="100%" stopColor="#20C77A" />
            </linearGradient>
          </defs>
          <path d="M12 3h0m-2 0h4M12 3v5m-5.89 9.82A2 2 0 0 0 7.8 21h8.4a2 2 0 0 0 1.7-2.82L14 9V3h-4v6z" stroke="url(#tbe-grad)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M8.5 16.5l7 0l-1.5-3.5l-4 0z" fill="url(#tbe-grad)" opacity="0.8" />
          <circle cx="11" cy="18" r="1" fill="white" opacity="0.6" />
          <circle cx="13" cy="15" r="0.8" fill="white" opacity="0.5" />
        </svg>
      );
    case "Ethidium Bromide":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <defs>
            <linearGradient id="etbr-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6EE7A8" />
              <stop offset="100%" stopColor="#20C77A" />
            </linearGradient>
          </defs>
          <rect x="9" y="8" width="6" height="12" rx="1.5" stroke="url(#etbr-grad)" strokeWidth="1.5" />
          <rect x="9" y="12" width="6" height="8" rx="0.5" fill="url(#etbr-grad)" opacity="0.8" />
          <path d="M12 3v5m-2-5h4" stroke="white" strokeWidth="1.5" />
          <circle cx="12" cy="15" r="1" fill="white" opacity="0.6" />
        </svg>
      );
    case "Media Formation":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <defs>
            <linearGradient id="media-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6EE7A8" />
              <stop offset="100%" stopColor="#20C77A" />
            </linearGradient>
          </defs>
          <circle cx="12" cy="12" r="9" stroke="url(#media-grad)" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="7" fill="url(#media-grad)" opacity="0.6" />
          <circle cx="9" cy="10" r="1.5" fill="white" opacity="0.8" />
          <circle cx="14" cy="14" r="2" fill="white" opacity="0.8" />
          <circle cx="15" cy="9" r="1" fill="white" opacity="0.6" />
        </svg>
      );
    case "Restriction Enzymes":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <defs>
            <linearGradient id="enz-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6EE7A8" />
              <stop offset="100%" stopColor="#20C77A" />
            </linearGradient>
          </defs>
          <path d="M4.5 10.5C8 10.5 10 13.5 12 13.5s4-3 7.5-3M4.5 13.5C8 13.5 10 10.5 12 10.5s4 3 7.5 3" stroke="url(#enz-grad)" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="8" y1="11.5" x2="8" y2="12.5" stroke="white" strokeWidth="1" />
          <line x1="16" y1="11.5" x2="16" y2="12.5" stroke="white" strokeWidth="1" />
          <circle cx="12" cy="12" r="3" fill="#20C77A" opacity="0.9" className="animate-pulse" />
        </svg>
      );
    case "Oligos":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <defs>
            <linearGradient id="oligo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6EE7A8" />
              <stop offset="100%" stopColor="#20C77A" />
            </linearGradient>
          </defs>
          <path d="M4.5 7.5c3.5 0 5.5 9 7.5 9s4-9 7.5-9M4.5 16.5c3.5 0 5.5-9 7.5-9s4 9 7.5 9" stroke="url(#oligo-grad)" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="7" y1="10.5" x2="7" y2="13.5" stroke="white" strokeWidth="1.2" opacity="0.5" />
          <line x1="12" y1="8" x2="12" y2="16" stroke="white" strokeWidth="1.2" opacity="0.5" />
          <line x1="17" y1="10.5" x2="17" y2="13.5" stroke="white" strokeWidth="1.2" opacity="0.5" />
        </svg>
      );
    case "Polymerases":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <defs>
            <linearGradient id="poly-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6EE7A8" />
              <stop offset="100%" stopColor="#20C77A" />
            </linearGradient>
          </defs>
          <circle cx="12" cy="12" r="5" fill="url(#poly-grad)" opacity="0.8" />
          <circle cx="7" cy="9" r="3.5" fill="url(#poly-grad)" opacity="0.6" />
          <circle cx="17" cy="15" r="4" fill="url(#poly-grad)" opacity="0.7" />
          <circle cx="16" cy="7" r="3" fill="white" opacity="0.4" />
          <circle cx="8" cy="16" r="2.5" fill="white" opacity="0.4" />
        </svg>
      );
    case "Master Mixes":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <defs>
            <linearGradient id="mm-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6EE7A8" />
              <stop offset="100%" stopColor="#20C77A" />
            </linearGradient>
          </defs>
          <path d="M8 4h8M9 4v10l3 6l3-6V4" stroke="url(#mm-grad)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M10 11l2 4l2-4V5H10z" fill="url(#mm-grad)" opacity="0.8" />
          <circle cx="12" cy="10" r="1" fill="white" opacity="0.6" />
        </svg>
      );
    case "Media Supply":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <defs>
            <linearGradient id="supply-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6EE7A8" />
              <stop offset="100%" stopColor="#20C77A" />
            </linearGradient>
          </defs>
          <rect x="7" y="8" width="10" height="13" rx="1.5" fill="url(#supply-grad)" opacity="0.85" />
          <rect x="9" y="4" width="6" height="4" fill="#3A3A3A" />
          <rect x="8" y="2" width="8" height="2" fill="white" />
          <rect x="9" y="11" width="6" height="6" fill="white" opacity="0.9" />
          <line x1="10" y1="13" x2="14" y2="13" stroke="#20C77A" strokeWidth="1" />
          <line x1="10" y1="15" x2="13" y2="15" stroke="#20C77A" strokeWidth="1" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="10" stroke="#20C77A" strokeWidth="1.5" />
        </svg>
      );
  }
}

function MicroscopeCenterpiece() {
  return (
    <div className="relative w-full aspect-square max-w-[340px] sm:max-w-[380px] lg:max-w-[460px] flex items-center justify-center mx-auto">
      {/* Outer soft glowing emerald circle */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(32,199,122,0.12)_0%,transparent_70%)] animate-pulse" />
      
      {/* Secondary glowing dotted rings */}
      <div className="absolute w-[95%] h-[95%] rounded-full border border-[#20C77A]/5 opacity-20 animate-[spin_180s_linear_infinite]" />
      <div className="absolute w-[75%] h-[75%] rounded-full border border-dashed border-[#20C77A]/10 opacity-30 animate-[spin_120s_linear_infinite]" />
      
      {/* Core 3D Microscope PNG Illustration */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-[92%] h-[92%] flex items-center justify-center"
      >
        <img 
          src="/reagents_microscope.png" 
          alt="Microscope" 
          className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(32,199,122,0.25)] select-none"
        />
      </motion.div>
    </div>
  );
}

interface ResearchCardProps {
  number: string;
  badge: { tag: string; label: string };
  title: string;
  description?: string;
  services?: string[];
  image: string;
  href: string;
}

function Research3DCard({ number, badge, title, description, services, image, href }: ResearchCardProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) return;
    
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

  return (
    <div 
      className="group h-full flex flex-col cursor-pointer" 
      style={{ perspective: '1000px' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="relative bg-[#0C2419] rounded-[24px] border border-[#1A3B2B] group-hover:border-[#20C77A]/50 group-hover:bg-[#103322] shadow-sm group-hover:shadow-[0_10px_30px_rgba(32,199,122,0.1)] transition-all duration-500 flex flex-col justify-between h-full overflow-hidden p-6 sm:p-8"
        style={{
          transformStyle: 'preserve-3d',
          transform: isHovered 
            ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)` 
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transition: isHovered ? 'transform 0.12s ease-out, border-color 0.3s, background-color 0.3s, box-shadow 0.3s' : 'transform 0.5s ease-out, border-color 0.3s, background-color 0.3s, box-shadow 0.3s'
        }}
      >
        {/* Subtle decorative scientific grid background */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#1A3B2B_1px,transparent_1px),linear-gradient(to_bottom,#1A3B2B_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

        {/* 3D Floating Scientific Badge (Uiverse inspired date-box adaptation) */}
        <div 
          style={{ transform: 'translateZ(30px)' }}
          className="absolute top-6 right-6 z-20 flex flex-col items-center justify-center bg-[#04110B] text-[#F2F7F4] px-3 py-2 rounded-xl border border-[#1A3B2B] shadow-md group-hover:border-[#20C77A]/50 transition-colors select-none"
        >
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#20C77A] leading-none mb-0.5">{badge.tag}</span>
          <span className="text-[11px] font-bold leading-none tracking-wider text-[#F2F7F4]">{badge.label}</span>
        </div>

        {/* Top Header Layer */}
        <div style={{ transform: 'translateZ(25px)' }} className="relative z-10 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xl font-bold tracking-tight text-[#20C77A]">{number}</span>
            <div className="h-[2px] w-8 bg-[#20C77A]/40 group-hover:w-12 group-hover:bg-[#20C77A] transition-all duration-300" />
          </div>
          <h3 className="text-xl font-bold tracking-tight text-[#F2F7F4] uppercase leading-snug">
            {title}
          </h3>
        </div>

        {/* Body Content Layer */}
        <div style={{ transform: 'translateZ(20px)' }} className="relative z-10 flex-grow mb-6">
          {description && (
            <p className="text-[#A8B8AF] text-sm leading-relaxed font-light">
              {description}
            </p>
          )}

          {services && (
            <ul className="space-y-2 font-light">
              {services.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#A8B8AF]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#20C77A] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Integrated Image Layer */}
        <div 
          style={{ transform: 'translateZ(15px)' }} 
          className="relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden mb-6 border border-[#1A3B2B] group-hover:border-[#20C77A]/30 transition-colors shrink-0 bg-[#081C14]"
        >
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#04110B]/60 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />
        </div>

        {/* Footer CTA Layer */}
        <div style={{ transform: 'translateZ(32px)' }} className="relative z-10 pt-3 border-t border-[#1A3B2B]">
          <Link 
            to={href} 
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F2F7F4] group-hover:text-[#20C77A] transition-colors py-1"
          >
            <span>EXPLORE RESEARCH</span>
            <ArrowRight size={14} className="text-[#20C77A] group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </div>

      </div>
    </div>
  );
}

interface WhoWeAreBlockProps {
  block: { num: string; title: string; desc: string; img: string };
  index: number;
}

function WhoWeAreBlockItem({ block, index }: WhoWeAreBlockProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile: Alternating (01 & 03 from LEFT [-60], 02 & 04 from RIGHT [60])
  // Desktop: All from RIGHT [50] with staggered delay (0.12 * index)
  const initialX = isMobile 
    ? (index % 2 === 0 ? -60 : 60) 
    : 50;

  const delay = isMobile ? 0 : index * 0.12;

  return (
    <motion.div 
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col group/block p-4 sm:p-5 rounded-2xl border border-transparent hover:border-[#E5E5E5] hover:bg-white/60 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-4xl lg:text-5xl font-semibold text-[#050505] group-hover/block:text-[#FF4D00] transition-colors tracking-tight">
          {block.num}
        </span>
        <div className="h-[2px] w-8 bg-[#050505]/20 group-hover/block:w-14 group-hover/block:bg-[#FF4D00] transition-all duration-300" />
      </div>
      
      <div className="flex items-start gap-4 sm:gap-5">
        {block.img && (
          <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center relative select-none">
            <img 
              src={block.img} 
              alt={block.title} 
              className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.06)] group-hover/block:scale-108 transition-transform duration-500 ease-out" 
            />
          </div>
        )}
        <div className="pt-1">
          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#050505] uppercase tracking-wider mb-2 leading-snug group-hover/block:text-[#FF4D00] transition-colors">
            {block.title}
          </h3>
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
            {block.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleReagentClick = (name: string, slug: string) => {
    setSelectedId(name);
    setTimeout(() => {
      navigate(`/reagents/${slug}`);
    }, 300);
  };

  return (
    <div className="bg-background">
      <SEO />
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[100vh] flex items-center bg-[#050505] text-white pt-24 pb-12 overflow-hidden">
        {/* Subtle Radial Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#050505]" />
          {/* Faint orange radial glow behind illustration */}
          <div className="absolute right-0 top-0 w-[60%] h-full bg-[radial-gradient(ellipse_at_70%_40%,rgba(255,77,0,0.08)_0%,transparent_65%)]" />
          {/* Subtle dot grid */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] bg-[length:32px_32px]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-20 w-full flex flex-col h-full justify-center">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-12 lg:mt-0">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl lg:w-3/5"
            >
              <div className="inline-block mb-6">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
                  Innovac Biotechnologies
                </span>
              </div>
              
              <h1 className="text-[clamp(2.25rem,8vw,4.75rem)] font-medium tracking-tight leading-[1.05] mb-8">
                Advanced Biotechnology,<br /> Molecular Biology &<br /> <span className="text-accent">Research Solutions.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-neutral-300 max-w-full sm:max-w-2xl mb-12 leading-relaxed font-light">
                Empowering researchers, laboratories, universities, and biotechnology organizations with reliable laboratory services, research solutions, reagents, computational analysis, internships, and professional scientific training.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-20 lg:mb-0 w-full sm:w-auto">
                <Button href={getCtaPath('EXPLORE_SERVICES')} size="lg" withArrow className="w-full sm:w-auto">EXPLORE SERVICES</Button>
                <Button href={getCtaPath('REQUEST_QUOTE')} variant="dark" size="lg" withArrow className="w-full sm:w-auto">REQUEST A QUOTE</Button>
              </div>
            </motion.div>

            {/* Right Visual Area — Scientist Illustration */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-2/5 flex justify-center lg:justify-end relative"
            >
              {/* Soft glow behind illustration */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,77,0,0.12)_0%,transparent_70%)] pointer-events-none" />

              {/* Floating / alive animation wrapper */}
              <motion.div
                animate={{
                  y: [0, -14, 0],
                  rotate: [0, 0.8, 0, -0.8, 0],
                }}
                transition={{
                  duration: 6,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="relative z-10"
              >
                <img
                  src="/hero-scientist.png"
                  alt="Biotechnology scientist with microscope, DNA helix, and laboratory equipment"
                  className="w-full max-w-[360px] sm:max-w-[480px] lg:max-w-[540px] h-auto object-contain drop-shadow-2xl select-none mx-auto"
                  draggable={false}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* 1. SERVICES & CAPABILITIES SECTION */}
      <section className="py-20 md:py-28 px-6 bg-[#050505] text-white relative overflow-hidden border-t border-white/10">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#FF4D00] text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
              OUR CORE SERVICES & SOLUTIONS
            </span>
            <h2 className="text-[clamp(1.75rem,6vw,3.75rem)] font-bold tracking-tight text-white mb-6 leading-tight">
              Biotechnology Services & <span className="text-[#FF4D00]">Capabilities</span>
            </h2>
            <p className="text-neutral-400 text-base md:text-lg font-light leading-relaxed">
              Explore our core scientific offerings — from nucleic acid and protein research to laboratory reagents, computational analysis, and professional training.
            </p>
          </div>
          <ServicesStrip />
        </div>
      </section>

      {/* 1. OUR SERVICES SECTION */}
      <section className="py-24 md:py-32 px-6 bg-white border-t border-border/40">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
            <SectionHeading 
              label="01 / Our Services" 
              title="Biotechnology Services\nBuilt Around Your Research." 
              highlightWord="Research."
              className="mb-0 md:mb-0"
            />
            <Button href={getCtaPath('EXPLORE_SERVICES')} variant="outline" className="shrink-0 w-full sm:w-auto" withArrow>VIEW ALL SERVICES</Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group relative bg-[#050505] rounded-[24px] overflow-hidden h-[480px] flex flex-col p-10 transition-transform duration-500 hover:-translate-y-2 border border-transparent hover:border-accent">
              <div className="absolute inset-0 opacity-50 group-hover:scale-105 transition-transform duration-700">
                <img src="/service_1.jpg" alt="DNA" className="w-full h-full object-cover object-center" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
              
              <div className="relative z-10 mt-auto">
                <h3 className="text-3xl font-medium text-white mb-2">Nucleic Acid<br/>Services</h3>
                <p className="text-accent text-sm font-semibold tracking-wider mb-6 mt-4">DNA • RNA • miRNA</p>
                <p className="text-neutral-400 text-sm mb-8 leading-relaxed max-w-sm">Comprehensive nucleic acid services supporting molecular biology and research applications.</p>
                <Button href="/services/nucleic-acid" variant="dark" className="bg-white/5 border-white/20 w-auto text-xs h-10 px-4" withArrow>EXPLORE</Button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-[#050505] rounded-[24px] overflow-hidden h-[480px] flex flex-col p-10 transition-transform duration-500 hover:-translate-y-2 border border-transparent hover:border-accent">
              <div className="absolute inset-0 opacity-50 group-hover:scale-105 transition-transform duration-700">
                <img src="/service_2.jpg" alt="Protein" className="w-full h-full object-cover object-center" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
              
              <div className="relative z-10 mt-auto">
                <h3 className="text-3xl font-medium text-white mb-2">Protein & Peptide<br/>Services</h3>
                <p className="text-accent text-sm font-semibold tracking-wider mb-6 mt-4">Sequencing • Synthesis • Modification</p>
                <p className="text-neutral-400 text-sm mb-8 leading-relaxed max-w-sm">Advanced protein and peptide solutions for research and scientific applications.</p>
                <Button href="/services/protein" variant="dark" className="bg-white/5 border-white/20 w-auto text-xs h-10 px-4" withArrow>EXPLORE</Button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-[#050505] rounded-[24px] overflow-hidden h-[480px] flex flex-col p-10 transition-transform duration-500 hover:-translate-y-2 border border-transparent hover:border-accent">
              <div className="absolute inset-0 opacity-50 group-hover:scale-105 transition-transform duration-700">
                <img src="/service_3.jpg" alt="Computational" className="w-full h-full object-cover object-center" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
              
              <div className="relative z-10 mt-auto">
                <h3 className="text-3xl font-medium text-white mb-2">Research &<br/>Computational Biology</h3>
                <p className="text-accent text-sm font-semibold tracking-wider mb-6 mt-4">In-silico • Bioinformatics • Analysis</p>
                <p className="text-neutral-400 text-sm mb-8 leading-relaxed max-w-sm">Computational and bioinformatics solutions to accelerate research and discovery.</p>
                <Button href="/services/research" variant="dark" className="bg-white/5 border-white/20 w-auto text-xs h-10 px-4" withArrow>EXPLORE</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REAGENTS SECTION (Dark Green Theme) */}
      <section className="py-16 md:py-32 px-4 sm:px-6 bg-[#06140F] text-[#F2F7F4] relative overflow-hidden">
        {/* Subtle molecular pattern background - more visible on desktop */}
        <div className="absolute inset-0 opacity-5 lg:opacity-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#183A2B_1px,transparent_1px)] bg-[length:40px_40px]" />
        </div>
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          
          {/* Header block */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-8">
            <div>
              <span className="text-[#20C77A] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
                02 / REAGENTS
              </span>
              <h2 className="text-[clamp(2.25rem,6vw,4.5rem)] font-light tracking-tight leading-[1.05] text-[#F2F7F4]">
                Laboratory Reagents for<br />
                Reliable <span className="text-[#20C77A] font-medium">Research.</span>
              </h2>
              <p className="text-[#A8B8AF] text-base md:text-lg font-light leading-relaxed max-w-2xl mt-6">
                High-quality laboratory reagents and research supplies designed for reliable, reproducible scientific workflows.
              </p>
            </div>
            
            {/* View All Reagents Button - Visible only on mobile here */}
            <Button href={getCtaPath('VIEW_ALL_REAGENTS')} className="md:hidden shrink-0 group flex items-center justify-center gap-2 bg-[#20C77A] text-[#04110B] hover:bg-[#2ae08c] hover:text-[#04110B] border-none hover:shadow-[0_0_20px_rgba(32,199,122,0.25)] transition-all duration-300" withArrow>
              VIEW ALL REAGENTS
            </Button>
          </div>

          {/* Search + View All Reagents Row (perfectly aligned baseline on desktop) */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 md:mb-12">
            <div className="w-full md:max-w-md relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-[#A8B8AF] pointer-events-none">
                <Search size={18} />
              </span>
              <input 
                type="text"
                placeholder="Search reagents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0C2419] border border-[#1A3B2B] focus:border-[#20C77A] focus:ring-1 focus:ring-[#20C77A]/30 outline-none rounded-xl pl-12 pr-10 py-3.5 text-sm text-[#F2F7F4] placeholder-[#71837A] transition-all font-light"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#A8B8AF] hover:text-white transition-colors cursor-pointer"
                  title="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* View All Reagents Button - Visible only on desktop here */}
            <Button href={getCtaPath('VIEW_ALL_REAGENTS')} className="hidden md:flex shrink-0 group flex items-center gap-2 bg-[#20C77A] text-[#04110B] hover:bg-[#2ae08c] hover:text-[#04110B] border-none hover:shadow-[0_0_20px_rgba(32,199,122,0.25)] transition-all duration-300" withArrow>
              VIEW ALL REAGENTS
            </Button>
          </div>

          {/* Reagent Explorer Container */}
          <div className="border border-[#1A3B2B] bg-[#0C2419]/50 rounded-[24px] sm:rounded-[32px] p-4 sm:p-8 lg:p-12 backdrop-blur-md relative overflow-hidden mb-8 md:mb-12 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]">
            
            {/* Dynamic Rendering */}
            {(() => {
              const synthesisReagents = [
                { name: "Deionized Water", type: "Ultrapure Solvent", slug: "deionized-water" },
                { name: "TRIzol", type: "RNA Extraction Reagent", slug: "trizol" },
                { name: "TAE Buffer", type: "Electrophoresis Buffer", slug: "tae-buffer" },
                { name: "TBE Buffer", type: "Electrophoresis Buffer", slug: "tbe-buffer" },
                { name: "Ethidium Bromide", type: "Nucleic Acid Gel Stain", slug: "ethidium-bromide" },
                { name: "Media Formation", type: "Prepared Growth Medium", slug: "media-formation" },
              ];
              
              const supplyReagents = [
                { name: "Restriction Enzymes", type: "DNA Cleaving Enzyme", slug: "restriction-enzymes" },
                { name: "Oligos", type: "Custom Oligonucleotides", slug: "oligos" },
                { name: "Polymerases", type: "Amplification Enzyme", slug: "polymerases" },
                { name: "Master Mixes", type: "Ready-to-Use PCR Mix", slug: "master-mixes" },
                { name: "Media Supply", type: "Cell Culture Media Base", slug: "media-supply" },
              ];

              const filteredSynthesis = searchQuery
                ? synthesisReagents.filter(r => r.name.toLowerCase().includes(searchQuery.toLowerCase()))
                : synthesisReagents;

              const filteredSupply = searchQuery
                ? supplyReagents.filter(r => r.name.toLowerCase().includes(searchQuery.toLowerCase()))
                : supplyReagents;

              const hasNoResults = filteredSynthesis.length === 0 && filteredSupply.length === 0;

              if (hasNoResults) {
                return (
                  <div className="text-center py-20 bg-[#0C2419]/30 border border-[#1A3B2B] rounded-[24px]">
                    <Search size={40} className="mx-auto text-[#71837A] mb-4" />
                    <h3 className="text-xl font-medium text-[#F2F7F4] mb-2">No reagents found</h3>
                    <p className="text-[#A8B8AF] text-sm mb-6 max-w-sm mx-auto">We couldn't find any reagents matching "{searchQuery}". Try revising your search query.</p>
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="px-5 py-2.5 bg-[#20C77A] hover:bg-[#2ae08c] text-[#04110B] font-semibold rounded-xl transition-colors cursor-pointer text-xs uppercase tracking-wider"
                    >
                      Clear Search Query
                    </button>
                  </div>
                );
              }

              return (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 items-center relative z-10">
                  
                  {/* Left Column: Synthesis */}
                  <div className="lg:col-span-4 flex flex-col w-full h-full">
                    <div className="mb-6 group/title">
                      <div className="flex items-center gap-3 mb-2 text-[#20C77A]">
                        <Beaker size={26} className="text-[#20C77A] shrink-0" />
                        <h3 className="text-lg sm:text-xl font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#F2F7F4]">Synthesis</h3>
                      </div>
                      <div className="w-16 h-1 bg-[#20C77A] rounded-full transform origin-left group-hover/title:w-24 transition-all duration-300" />
                    </div>
                    
                    {filteredSynthesis.length > 0 ? (
                      <div className="space-y-4">
                        {filteredSynthesis.map((reagent, i) => {
                          const isSelected = selectedId === reagent.name;
                          return (
                            <motion.div
                              key={reagent.name}
                              initial={{ opacity: 0, y: 15 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.05 }}
                              onClick={() => handleReagentClick(reagent.name, reagent.slug)}
                              className={`group relative flex items-center justify-between p-4 sm:p-5 lg:p-6 rounded-[16px] sm:rounded-[20px] bg-[#0C2419] border transition-all duration-300 cursor-pointer hover:-translate-y-1 shadow-sm hover:shadow-[0_4px_20px_rgba(32,199,122,0.08)] ${
                                isSelected 
                                  ? 'border-[#20C77A] bg-[#103322] shadow-[0_0_15px_rgba(32,199,122,0.15)]' 
                                  : 'border-[#1A3B2B] hover:border-[#20C77A]/30 hover:bg-[#103322]'
                              }`}
                            >
                              {/* Left border active highlight */}
                              <div className={`absolute left-0 top-0 bottom-0 w-[3px] bg-[#20C77A] transition-opacity duration-300 rounded-l-[16px] sm:rounded-l-[20px] ${
                                isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                              }`} />
                              
                              <div className="flex items-center gap-4 sm:gap-5 pl-1">
                                <div className={`w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center transition-colors duration-300 ${
                                  isSelected ? 'bg-[#20C77A] text-[#04110B]' : 'bg-[#081C14] text-[#A8B8AF] group-hover:bg-[#20C77A]/10 group-hover:text-[#20C77A]'
                                }`}>
                                  <PremiumReagentIcon name={reagent.name} className="w-5.5 h-5.5 sm:w-7 sm:h-7" />
                                </div>
                                <div className="text-left">
                                  <h4 className={`text-base sm:text-lg font-semibold transition-colors duration-300 ${
                                    isSelected ? 'text-[#20C77A]' : 'text-[#F2F7F4] group-hover:text-white'
                                  }`}>{reagent.name}</h4>
                                  <p className="text-xs text-[#71837A] font-light mt-1">{reagent.type}</p>
                                </div>
                              </div>
                              <ChevronRight size={22} className={`transition-all duration-300 ${
                                isSelected ? 'text-[#20C77A] translate-x-1.5' : 'text-[#71837A] group-hover:text-[#20C77A] group-hover:translate-x-1'
                              }`} />
                            </motion.div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="py-8 text-center bg-[#0C2419]/20 border border-dashed border-[#1A3B2B] rounded-[14px] text-[#71837A] text-sm">
                        No synthesis reagents match query
                      </div>
                    )}
                  </div>

                  {/* Center Column: Microscope Centerpiece */}
                  <div className="lg:col-span-4 flex justify-center items-center py-4 lg:py-0 w-full">
                    <MicroscopeCenterpiece />
                  </div>

                  {/* Right Column: Supply */}
                  <div className="lg:col-span-4 flex flex-col w-full h-full">
                    <div className="mb-6 group/title">
                      <div className="flex items-center gap-3 mb-2 text-[#20C77A]">
                        <Thermometer size={26} className="text-[#20C77A] shrink-0" />
                        <h3 className="text-lg sm:text-xl font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#F2F7F4]">Supply</h3>
                      </div>
                      <div className="w-16 h-1 bg-[#20C77A] rounded-full transform origin-left group-hover/title:w-24 transition-all duration-300" />
                    </div>

                    {filteredSupply.length > 0 ? (
                      <div className="space-y-4">
                        {filteredSupply.map((reagent, i) => {
                          const isSelected = selectedId === reagent.name;
                          return (
                            <motion.div
                              key={reagent.name}
                              initial={{ opacity: 0, y: 15 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.05 }}
                              onClick={() => handleReagentClick(reagent.name, reagent.slug)}
                              className={`group relative flex items-center justify-between p-4 sm:p-5 lg:p-6 rounded-[16px] sm:rounded-[20px] bg-[#0C2419] border transition-all duration-300 cursor-pointer hover:-translate-y-1 shadow-sm hover:shadow-[0_4px_20px_rgba(32,199,122,0.08)] ${
                                isSelected 
                                  ? 'border-[#20C77A] bg-[#103322] shadow-[0_0_15px_rgba(32,199,122,0.15)]' 
                                  : 'border-[#1A3B2B] hover:border-[#20C77A]/30 hover:bg-[#103322]'
                              }`}
                            >
                              {/* Left border active highlight */}
                              <div className={`absolute left-0 top-0 bottom-0 w-[3px] bg-[#20C77A] transition-opacity duration-300 rounded-l-[16px] sm:rounded-l-[20px] ${
                                isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                              }`} />
                              
                              <div className="flex items-center gap-4 sm:gap-5 pl-1">
                                <div className={`w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center transition-colors duration-300 ${
                                  isSelected ? 'bg-[#20C77A] text-[#04110B]' : 'bg-[#081C14] text-[#A8B8AF] group-hover:bg-[#20C77A]/10 group-hover:text-[#20C77A]'
                                }`}>
                                  <PremiumReagentIcon name={reagent.name} className="w-5.5 h-5.5 sm:w-7 sm:h-7" />
                                </div>
                                <div className="text-left">
                                  <h4 className={`text-base sm:text-lg font-semibold transition-colors duration-300 ${
                                    isSelected ? 'text-[#20C77A]' : 'text-[#F2F7F4] group-hover:text-white'
                                  }`}>{reagent.name}</h4>
                                  <p className="text-xs text-[#71837A] font-light mt-1">{reagent.type}</p>
                                </div>
                              </div>
                              <ChevronRight size={22} className={`transition-all duration-300 ${
                                isSelected ? 'text-[#20C77A] translate-x-1.5' : 'text-[#71837A] group-hover:text-[#20C77A] group-hover:translate-x-1'
                              }`} />
                            </motion.div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="py-8 text-center bg-[#0C2419]/20 border border-dashed border-[#1A3B2B] rounded-[14px] text-[#71837A] text-sm">
                        No supply reagents match query
                      </div>
                    )}
                  </div>
                  
                </div>
              );
            })()}
          </div>

          {/* Premium Quality trust card spanning 12 columns with slow ambient green glow animation */}
          <div className="bg-gradient-to-r from-[#081C14] to-[#0C2419] border border-[#1A3B2B] rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-md shadow-md hover:shadow-[0_10px_30px_rgba(32,199,122,0.03)] transition-all duration-500">
            {/* Ambient slow rotating emerald orbs */}
            <motion.div 
              animate={{
                x: [-15, 15, -15],
                y: [-8, 8, -8],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -right-16 -top-16 w-72 h-72 rounded-full bg-[radial-gradient(circle,#20C77A_0%,transparent_70%)] opacity-[0.06] pointer-events-none blur-2xl z-0"
            />
            <motion.div 
              animate={{
                x: [15, -15, 15],
                y: [8, -8, 8],
                scale: [1.1, 0.9, 1.1],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -left-16 -bottom-16 w-72 h-72 rounded-full bg-[radial-gradient(circle,#20C77A_0%,transparent_70%)] opacity-[0.05] pointer-events-none blur-2xl z-0"
            />

            {/* Subtle scientific grid pattern or decorative wavy lines on the right side */}
            <div className="absolute right-0 top-0 bottom-0 w-[40%] opacity-15 pointer-events-none bg-[radial-gradient(circle_at_right,#20C77A_0%,transparent_60%)]" />
            <div className="absolute right-12 top-1/2 -translate-y-1/2 w-48 h-24 opacity-10 pointer-events-none hidden md:block">
              {/* Mini sine-wave vector lines representing scientific patterns */}
              <svg viewBox="0 0 200 100" fill="none" stroke="#20C77A" strokeWidth="1.2" className="w-full h-full">
                <path d="M0,50 Q25,20 50,50 T100,50 T150,50 T200,50" />
                <path d="M0,60 Q25,30 50,60 T100,60 T150,60 T200,60" opacity="0.4" />
              </svg>
            </div>

            <div className="flex items-center gap-6 relative z-10 flex-col md:flex-row text-center md:text-left">
              <div className="w-16 h-16 bg-[#20C77A]/10 rounded-2xl flex items-center justify-center text-[#20C77A] border border-[#20C77A]/30 shrink-0 shadow-[0_0_15px_rgba(32,199,122,0.15)] animate-pulse">
                <ShieldCheck size={32} />
              </div>
              <div className="relative z-10">
                <h4 className="text-xl font-medium text-[#F2F7F4] mb-2">Quality You Can Trust</h4>
                <p className="text-[#A8B8AF] text-sm max-w-2xl leading-relaxed">
                  High-quality reagents and laboratory supplies for accurate, reliable and reproducible research outcomes.
                </p>
              </div>
            </div>
            
            <div className="relative z-10 shrink-0 w-full md:w-auto">
              <Link to={getCtaPath('REQUEST_QUOTE')} className="w-full md:w-auto bg-[#20C77A] hover:bg-[#2ae08c] text-[#04110B] border-none py-4 px-8 rounded-xl font-semibold flex items-center justify-center gap-3 group transition-all duration-300 hover:shadow-[0_4px_20px_rgba(32,199,122,0.25)] text-sm uppercase tracking-wider">
                REQUEST A QUOTE <ArrowRight size={16} className="transform group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Trust Features Grid - tighter width and alignment on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 md:mt-16 border-t border-[#1A3B2B] pt-12 md:pt-16 lg:max-w-5xl lg:mx-auto lg:gap-12">
            {[
              { title: "Reliable Quality", desc: "Quality-focused scientific solutions.", icon: ShieldCheck },
              { title: "Research Driven", desc: "Focused on practical scientific impact.", icon: Target },
              { title: "Support Every Step", desc: "From planning to project support.", icon: UsersRound },
              { title: "Trusted by Researchers", desc: "Supporting scientists and organizations.", icon: FlaskConical }
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-4 group/feature">
                <div className="w-10 h-10 rounded-xl bg-[#0C2419] border border-[#1A3B2B] flex items-center justify-center text-[#20C77A] shrink-0 shadow-[0_0_10px_rgba(32,199,122,0.05)] group-hover/feature:border-[#20C77A]/50 transition-colors">
                  <feature.icon size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#F2F7F4] mb-1 group-hover/feature:text-[#20C77A] transition-colors">{feature.title}</h4>
                  <p className="text-xs text-[#A8B8AF] font-light leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. WHO WE ARE & STATS SECTION */}
      <section className="py-20 md:py-24 px-6 bg-[#F5F5F3] relative overflow-hidden text-[#050505] border-t border-[#E5E5E5]/40">
        {/* Subtle Molecular / DNA Wave Graphics Background */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.05] pointer-events-none z-0 select-none" aria-hidden="true">
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M50,200 Q100,100 150,200 T250,200 T350,200" stroke="#FF4D00" strokeWidth="2.5" />
            <path d="M50,200 Q100,300 150,200 T250,200 T350,200" stroke="#FF4D00" strokeWidth="2.5" strokeDasharray="5 5" />
            <line x1="100" y1="145" x2="100" y2="255" stroke="#FF4D00" strokeWidth="1" />
            <line x1="150" y1="200" x2="150" y2="200" stroke="#FF4D00" strokeWidth="1" />
            <line x1="200" y1="145" x2="200" y2="255" stroke="#FF4D00" strokeWidth="1" />
            <line x1="250" y1="200" x2="250" y2="200" stroke="#FF4D00" strokeWidth="1" />
            <line x1="300" y1="145" x2="300" y2="255" stroke="#FF4D00" strokeWidth="1" />
          </svg>
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row w-full gap-12 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: PRIMARY CONTENT AREA */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-[45%] flex flex-col justify-start"
            >
              {/* Section Label */}
              <span className="text-[#FF4D00] text-xs font-bold tracking-[0.2em] uppercase mb-4 sm:mb-6 block">
                03 / WHO WE ARE
              </span>

              {/* Main Heading */}
              <h2 className="text-[clamp(2.25rem,5vw,4.25rem)] font-medium text-[#050505] leading-[1.05] tracking-tight mb-6">
                Science That<br />
                Moves Research<br />
                <span className="text-[#FF4D00] italic pr-4">Forward.</span>
              </h2>

              {/* Company Descriptions */}
              <div className="space-y-4 mb-8 max-w-xl">
                <p className="text-base sm:text-lg leading-relaxed text-[#050505] font-medium">
                  INNOVAC BIOTECHNOLOGIES provides biotechnology, molecular biology, protein research, reagents, computational biology, internship, and professional training solutions.
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-neutral-600 font-light">
                  Our goal is to empower researchers and organizations with practical scientific services and innovative biotechnology solutions.
                </p>
              </div>

              {/* Learn More Button */}
              <div className="mt-4 flex justify-start w-full">
                <Link 
                  to="/about-us" 
                  className="inline-flex items-center justify-center gap-3 bg-white border border-[#E5E5E5] hover:border-[#050505] text-[#050505] rounded-full px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 group shadow-sm focus:outline-none whitespace-nowrap"
                >
                  <span>LEARN MORE ABOUT US</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300 shrink-0" />
                </Link>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Supporting Feature Items Grid */}
            <div className="w-full lg:w-[55%] flex flex-col justify-start">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 lg:gap-y-10 content-start">
                {[
                  { num: '01', title: 'Integrated Research Platform', desc: 'Connected scientific services, research support, and expertise.', img: '/who_we_are_1.png' },
                  { num: '02', title: 'Training Pathways', desc: 'Internship, workshop, and professional learning opportunities.', img: '/who_we_are_2.png' },
                  { num: '03', title: 'Core Scientific Areas', desc: 'Focused expertise across key scientific and biotechnology domains.', img: '/who_we_are_3.png' },
                  { num: '04', title: 'Service Categories', desc: 'A broad range of services supporting research and laboratory needs.', img: '/who_we_are_4.png' },
                ].map((block, i) => (
                  <WhoWeAreBlockItem key={i} block={block} index={i} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. RESEARCH SECTION (Deep Forest Green Theme) */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#06140F] text-[#F2F7F4] relative overflow-hidden border-t border-[#1A3B2B]">
        {/* Subtle molecular pattern background */}
        <div className="absolute inset-0 opacity-5 lg:opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#183A2B_1px,transparent_1px)] bg-[length:40px_40px]" />
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-8">
            <div>
              <span className="text-[#20C77A] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
                04 / Research
              </span>
              <h2 className="text-[clamp(2.25rem,6vw,4.5rem)] font-light tracking-tight leading-[1.05] text-[#F2F7F4]">
                Research Across<br />
                Biotechnology & <span className="text-[#20C77A] font-medium">Computational Science.</span>
              </h2>
            </div>
            <Button 
              href={getCtaPath('CONSULTATION_REQUEST')} 
              className="shrink-0 w-full sm:w-auto bg-[#20C77A] text-[#04110B] hover:bg-[#2ae08c] hover:text-[#04110B] border-none hover:shadow-[0_0_20px_rgba(32,199,122,0.25)] transition-all duration-300" 
              withArrow
            >
              DISCUSS YOUR RESEARCH
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {/* Card 1 */}
            <Research3DCard 
              number="01"
              badge={{ tag: "BIO", label: "01" }}
              title="BIOTECHNOLOGY"
              description="Consortia development for biogas and climate-related biological processes."
              image="https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2787&auto=format&fit=crop"
              href="/research"
            />

            {/* Card 2 */}
            <Research3DCard 
              number="02"
              badge={{ tag: "MOL", label: "02" }}
              title="MOLECULAR BIOLOGY"
              services={["Vaccine Design", "Aptamer Detection"]}
              image="https://images.unsplash.com/photo-1614935151651-0bea6508db6b?q=80&w=2925&auto=format&fit=crop"
              href="/research"
            />

            {/* Card 3 */}
            <Research3DCard 
              number="03"
              badge={{ tag: "SILICO", label: "03" }}
              title="IN-SILICO RESEARCH"
              services={["Primer Design", "SPSS Analysis", "Molecular Docking", "MD Simulations", "Sequence Alignment", "Other Computational Research"]}
              image="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2960&auto=format&fit=crop"
              href="/research"
            />
          </div>
        </div>
      </section>

      {/* 6. RESEARCH PROCESS SECTION */}
      <section className="py-24 md:py-32 px-6 bg-white border-t border-border/40">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeading label="Our Process" title="From Research Question\nto Scientific Solution." highlightWord="Solution." />
          
          <div className="relative mt-24">
            {/* Horizontal Connecting line */}
            <div className="hidden lg:block absolute top-[45px] left-0 right-0 h-[2px] bg-border/40 border-t-2 border-dashed border-border" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 relative">
              {[
                { title: "Discuss Your\nRequirement", icon: MessageSquare },
                { title: "Project\nEvaluation", icon: FileText },
                { title: "Scientific\nExecution", icon: FlaskConical },
                { title: "Analysis & Quality\nReview", icon: ShieldCheck },
                { title: "Result\nDelivery", icon: Check }
              ].map((step, index) => (
                <div key={index} className="relative flex flex-col items-center lg:items-center text-center lg:pt-0 pt-6">
                  {/* Vertical connecting line for mobile */}
                  {index !== 4 && <div className="lg:hidden absolute top-24 left-1/2 -translate-x-1/2 w-[2px] h-16 bg-border/40 border-l-2 border-dashed border-border" />}
                  
                  <div className="w-24 h-24 rounded-full bg-white border border-border/60 flex items-center justify-center mb-8 relative z-10 text-primary shadow-sm group hover:border-accent hover:shadow-md transition-all">
                    <step.icon size={32} className="text-primary group-hover:text-accent transition-colors stroke-[1.5]" />
                  </div>
                  <h4 className="text-lg font-medium leading-tight whitespace-pre-line">{step.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. INTERNSHIPS & TRAINING (Interactive Dual Feature Cards) */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-[#F5F5F3] relative overflow-hidden border-t border-[#E5E5E5]/60">
        
        {/* Subtle Decorative Background Wave / DNA SVG */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] opacity-[0.03] pointer-events-none z-0 select-none">
          <svg viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M0,250 C200,100 300,400 500,250 C700,100 800,400 1000,250" stroke="#FF4D00" strokeWidth="2" />
            <path d="M0,250 C200,400 300,100 500,250 C700,400 800,100 1000,250" stroke="#FF4D00" strokeWidth="2" strokeDasharray="6 6" />
          </svg>
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            
            {/* CARD 1: INTERNSHIPS */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-[28px] sm:rounded-[32px] border border-[#E5E5E5] hover:border-[#FF4D00]/40 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between p-8 sm:p-10 lg:p-12 relative overflow-hidden group"
            >
              {/* Subtle background technical grid line */}
              <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#FF4D00_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

              {/* Upper-Right Corner Arrow Badge */}
              <Link 
                to={getCtaPath('APPLY_INTERNSHIP')}
                aria-label="Apply for Internship"
                className="absolute top-8 right-8 z-20 w-11 h-11 rounded-full border border-neutral-200 bg-white/90 group-hover:bg-[#FF4D00] group-hover:border-[#FF4D00] group-hover:text-white transition-all duration-300 flex items-center justify-center text-neutral-700 shadow-sm cursor-pointer"
              >
                <ArrowRight size={18} className="group-hover:translate-x-0.5 group-hover:-rotate-45 transition-transform duration-300" />
              </Link>

              <div>
                {/* Section Badge with Pulse Indicator */}
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#FF4D00] animate-ping opacity-75" />
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FF4D00]">05 / Internships</p>
                </div>

                {/* Main Headline */}
                <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#050505] mb-4 leading-[1.12]">
                  Turn Knowledge Into<br />
                  Practical <span className="text-[#FF4D00]">Experience.</span>
                </h3>

                {/* Description */}
                <p className="text-neutral-600 text-sm sm:text-base font-light leading-relaxed mb-8 max-w-lg">
                  Gain hands-on experience in biotechnology, molecular biology, laboratory techniques, bioinformatics, and scientific research.
                </p>

                {/* CTA Button */}
                <div className="mb-10">
                  <Button 
                    href={getCtaPath('APPLY_INTERNSHIP')} 
                    variant="dark" 
                    className="bg-[#050505] text-white hover:bg-[#FF4D00] hover:text-white border-none py-3.5 px-7 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 shadow-sm" 
                    withArrow
                  >
                    APPLY FOR INTERNSHIP
                  </Button>
                </div>

                {/* Topic Chips Grid */}
                <div className="space-y-3 pt-6 border-t border-[#F0F0EE]">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-3">Core Specialty Domains</p>
                  <div className="flex flex-wrap gap-2.5">
                    {[
                      { name: "Molecular Biology", icon: Dna },
                      { name: "Biotechnology", icon: FlaskConical },
                      { name: "Bioinformatics", icon: Database },
                      { name: "Computational Biology", icon: Network },
                      { name: "Laboratory Techniques", icon: Pipette },
                      { name: "Research & Data Analysis", icon: FileText }
                    ].map((topic, i) => (
                      <div 
                        key={i} 
                        className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FFF6F2] border border-[#FFE6D9] text-xs font-semibold text-neutral-800 hover:bg-[#FF4D00] hover:text-white hover:border-[#FF4D00] transition-all duration-300 shadow-xs group/chip cursor-default"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#FF4D00]/10 group-hover/chip:bg-white/20 flex items-center justify-center text-[#FF4D00] group-hover/chip:text-white transition-colors shrink-0">
                          <topic.icon size={11} />
                        </div>
                        <span>{topic.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Integrated Scientific Image */}
              <div className="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden mt-8 border border-[#E5E5E5]/80 shrink-0 bg-neutral-100">
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2680&auto=format&fit=crop" 
                  alt="Biotechnology Internship" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
              </div>
            </motion.div>

            {/* CARD 2: TRAINING */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-[28px] sm:rounded-[32px] border border-[#E5E5E5] hover:border-[#FF4D00]/40 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between p-8 sm:p-10 lg:p-12 relative overflow-hidden group"
            >
              {/* Subtle background technical grid line */}
              <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#FF4D00_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

              {/* Upper-Right Corner Arrow Badge */}
              <Link 
                to={getCtaPath('VIEW_WORKSHOPS')}
                aria-label="View Workshops"
                className="absolute top-8 right-8 z-20 w-11 h-11 rounded-full border border-neutral-200 bg-white/90 group-hover:bg-[#FF4D00] group-hover:border-[#FF4D00] group-hover:text-white transition-all duration-300 flex items-center justify-center text-neutral-700 shadow-sm cursor-pointer"
              >
                <ArrowRight size={18} className="group-hover:translate-x-0.5 group-hover:-rotate-45 transition-transform duration-300" />
              </Link>

              <div>
                {/* Section Badge with Pulse Indicator */}
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#FF4D00] animate-ping opacity-75" />
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#FF4D00]">06 / Training</p>
                </div>

                {/* Main Headline */}
                <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#050505] mb-4 leading-[1.12]">
                  Learn. Practice.<br />
                  <span className="text-[#FF4D00]">Innovate.</span>
                </h3>

                {/* Description */}
                <p className="text-neutral-600 text-sm sm:text-base font-light leading-relaxed mb-8 max-w-lg">
                  Build practical scientific skills through focused workshops, hands-on lab sessions, and professional biotechnology training.
                </p>

                {/* CTA Button */}
                <div className="mb-10">
                  <Button 
                    href={getCtaPath('VIEW_WORKSHOPS')} 
                    variant="dark" 
                    className="bg-[#050505] text-white hover:bg-[#FF4D00] hover:text-white border-none py-3.5 px-7 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 shadow-sm" 
                    withArrow
                  >
                    VIEW WORKSHOPS
                  </Button>
                </div>

                {/* Topic Chips Grid */}
                <div className="space-y-3 pt-6 border-t border-[#F0F0EE]">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-3">Featured Training Modules</p>
                  <div className="flex flex-wrap gap-2.5">
                    {[
                      { name: "Molecular Biology", icon: Dna },
                      { name: "Computational Biology", icon: Activity },
                      { name: "Research Skills", icon: FileText },
                      { name: "Advanced Workshops", icon: GraduationCap },
                      { name: "Wet Lab Protocols", icon: TestTube },
                      { name: "Data Interpretation", icon: Layers }
                    ].map((topic, i) => (
                      <div 
                        key={i} 
                        className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FFF6F2] border border-[#FFE6D9] text-xs font-semibold text-neutral-800 hover:bg-[#FF4D00] hover:text-white hover:border-[#FF4D00] transition-all duration-300 shadow-xs group/chip cursor-default"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#FF4D00]/10 group-hover/chip:bg-white/20 flex items-center justify-center text-[#FF4D00] group-hover/chip:text-white transition-colors shrink-0">
                          <topic.icon size={11} />
                        </div>
                        <span>{topic.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Integrated Scientific Image */}
              <div className="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden mt-8 border border-[#E5E5E5]/80 shrink-0 bg-neutral-100">
                <img 
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2940&auto=format&fit=crop" 
                  alt="Biotechnology Training & Workshops" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="py-20 md:py-32 px-4 sm:px-6 bg-[#06140F] text-[#F2F7F4] relative overflow-hidden border-t border-[#1A3B2B] border-b border-[#1A3B2B]">
        {/* DNA background image */}
        <div className="absolute inset-0 opacity-30 mix-blend-screen">
          <img src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2874&auto=format&fit=crop" alt="DNA Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#06140F] via-[#06140F]/90 to-transparent z-10" />
        
        <div className="max-w-[1400px] mx-auto relative z-20 flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="flex items-start gap-8 max-w-3xl">
            <div className="w-24 h-24 rounded-full border border-[#1A3B2B] bg-[#0C2419] flex items-center justify-center flex-shrink-0 hidden md:flex">
              <Dna size={40} className="text-[#20C77A]" />
            </div>
            <div>
              <h2 className="text-[clamp(2rem,7vw,4.375rem)] font-medium tracking-tight text-[#F2F7F4] mb-6 leading-[1.1]">
                Have a <span className="text-[#20C77A]">Research</span><br/>Challenge?
              </h2>
              <p className="text-base sm:text-lg text-[#A8B8AF] mb-0 max-w-xl font-light leading-relaxed">
                Tell us what you are working on and our team can help identify the right biotechnology, laboratory, research, or training solution.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
            <Button href={getCtaPath('REQUEST_QUOTE')} size="lg" withArrow className="w-full sm:w-auto bg-[#20C77A] text-[#04110B] hover:bg-[#2ae08c] hover:text-[#04110B] border-none hover:shadow-[0_0_20px_rgba(32,199,122,0.3)] transition-all duration-300">REQUEST A QUOTE</Button>
            <Button href={getCtaPath('CONSULTATION_REQUEST')} size="lg" withArrow className="w-full sm:w-auto bg-[#0C2419] border border-[#1A3B2B] text-[#F2F7F4] hover:border-[#20C77A] hover:text-[#20C77A] hover:bg-[#103322] transition-colors duration-300">
              CONTACT US
            </Button>
          </div>
          
        </div>
      </section>
    </div>
  );
}
