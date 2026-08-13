import { getCtaPath } from '@/src/config/ctaConfig';
import React, { useState } from 'react';
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

function MicroscopeCenterpiece() {
  return (
    <div className="relative w-full aspect-square max-w-[340px] lg:max-w-[400px] flex items-center justify-center mx-auto">
      {/* Outer soft glowing orange circle */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,77,0,0.1)_0%,transparent_70%)] animate-pulse" />
      
      {/* Secondary glowing dotted rings */}
      <div className="absolute w-[85%] h-[85%] rounded-full border border-[#FF4D00]/5 opacity-20 animate-[spin_180s_linear_infinite]" />
      <div className="absolute w-[70%] h-[70%] rounded-full border border-dashed border-[#FF4D00]/10 opacity-30 animate-[spin_120s_linear_infinite]" />
      
      {/* Floating Beakers / Flasks */}
      {/* Flask Left (Erlenmeyer) */}
      <motion.div 
        animate={{ y: [0, -10, 0], x: [0, 4, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-4 top-1/4 z-20 w-10 h-10 text-[#FF4D00] opacity-40 hover:opacity-80 transition-opacity"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full filter drop-shadow-[0_0_8px_rgba(255,77,0,0.3)]">
          <path d="M6 3h12" />
          <path d="M12 3v6" />
          <path d="m14 9 5.89 9.82A2 2 0 0 1 18.2 22H5.8a2 2 0 0 1-1.7-3.18L10 9V3" />
        </svg>
      </motion.div>

      {/* Tube Right (Test Tube) */}
      <motion.div 
        animate={{ y: [0, 12, 0], x: [0, -4, 0] }}
        transition={{ duration: 7, delay: 1, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-4 top-1/3 z-20 w-8 h-8 text-[#FF4D00] opacity-35 hover:opacity-80 transition-opacity"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full filter drop-shadow-[0_0_8px_rgba(255,77,0,0.3)]">
          <path d="M8 2h8" />
          <path d="M10 2v17.5a2.5 2.5 0 0 0 5 0V2" />
          <path d="M10 6h4" />
          <path d="M10 11h4" />
        </svg>
      </motion.div>

      {/* Beaker Bottom Left */}
      <motion.div 
        animate={{ y: [0, -8, 0], x: [0, -6, 0] }}
        transition={{ duration: 8, delay: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-8 bottom-8 z-20 w-8 h-8 text-[#FF4D00] opacity-30 hover:opacity-80 transition-opacity"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full filter drop-shadow-[0_0_8px_rgba(255,77,0,0.3)]">
          <path d="M19 22H5V4h14v18z" />
          <path d="M5 8h14" />
          <path d="M5 14h14" />
        </svg>
      </motion.div>

      {/* Core Microscope Illustration */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-[200px] h-[260px] flex items-center justify-center"
      >
        <svg viewBox="0 0 100 120" fill="none" className="w-full h-full text-neutral-300 filter drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]">
          {/* Base */}
          <path d="M25 105 h50 v6 a2 2 0 0 1-2 2 h-46 a2 2 0 0 1-2-2 z" fill="#1e1e1e" stroke="#444" strokeWidth="2" />
          <path d="M30 105 h40 v-4 h-40 z" fill="#2d2d2d" stroke="#555" strokeWidth="1.5" />
          
          {/* Pillar / Arm */}
          <path d="M62 101 c5-20 0-45-12-55 c-2-2-5-2-7 0 c-2 2-2 5 0 7 c8 8 12 25 8 48 z" fill="url(#metallic-grad)" stroke="#444" strokeWidth="2" />
          
          {/* Stage */}
          <path d="M22 75 h46 l4 4 h-50 z" fill="#151515" stroke="#333" strokeWidth="1.5" />
          <rect x="42" y="73" width="8" height="2" fill="#FF4D00" opacity="0.8" className="animate-pulse" />
          
          {/* Condenser / Light Source */}
          <path d="M41 81 h10 v8 h-10 z" fill="#2a2a2a" stroke="#555" strokeWidth="1" />
          <path d="M43 89 h6 v3 h-6 z" fill="#FF4D00" opacity="0.3" />
          
          {/* Objectives Turret */}
          <path d="M34 50 a12 12 0 0 1 24 0 z" fill="#252525" stroke="#444" strokeWidth="1.5" />
          
          {/* Objectives */}
          <rect x="38" y="50" width="6" height="12" rx="1" fill="#3a3a3a" stroke="#FF4D00" strokeWidth="0.5" />
          <rect x="47" y="50" width="8" height="15" rx="1.5" fill="#4a4a4a" stroke="#666" strokeWidth="0.5" />
          <rect x="57" y="50" width="5" height="10" rx="1" fill="#3a3a3a" stroke="#FF4D00" strokeWidth="0.5" />
          
          {/* Coaxial Controls */}
          <circle cx="61" cy="90" r="5" fill="#2a2a2a" stroke="#555" strokeWidth="1" />
          <circle cx="61" cy="90" r="2.5" fill="#FF4D00" />
          
          {/* Eyepiece / Body Tube */}
          <path d="M37 25 l12 20 h6 l-12-20 z" fill="url(#metallic-grad)" stroke="#555" strokeWidth="1.5" />
          <rect x="33" y="15" width="10" height="12" rx="1" fill="#1e1e1e" stroke="#444" strokeWidth="1.5" />
          <rect x="35" y="10" width="6" height="5" fill="#333" stroke="#FF4D00" strokeWidth="0.5" />
          
          {/* Glowing Sample Laser */}
          <line x1="51" y1="65" x2="51" y2="74" stroke="#FF4D00" strokeWidth="2.5" strokeLinecap="round" className="animate-pulse" />
          <circle cx="51" cy="75" r="3" fill="#FF4D00" className="animate-ping" />
          
          {/* Gradients */}
          <defs>
            <linearGradient id="metallic-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3d3d3d" />
              <stop offset="50%" stopColor="#6e6e6e" />
              <stop offset="100%" stopColor="#242424" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </div>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleReagentClick = (name: string, path: string) => {
    setSelectedId(name);
    setTimeout(() => {
      navigate(path);
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
{/* 2. SERVICES & CAPABILITIES SECTION */}
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
      {/* 2. WHO WE ARE & STATS SECTION */}
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
          <div className="flex flex-col lg:flex-row w-full gap-12 lg:gap-20">
            
            {/* LEFT COLUMN: PRIMARY CONTENT AREA */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-[45%] flex flex-col"
            >
              {/* Section Label */}
              <span className="text-[#FF4D00] text-[10px] font-bold tracking-[0.2em] uppercase mb-4 sm:mb-6 block">
                01 / WHO WE ARE
              </span>

              {/* Main Heading */}
              <h2 className="text-[clamp(2.25rem,6vw,4.5rem)] font-medium text-[#050505] leading-[1.05] tracking-tight mb-6">
                Science That<br />
                Moves Research<br />
                <span className="text-[#FF4D00] italic pr-4">Forward.</span>
              </h2>

              {/* Company Descriptions */}
              <div className="space-y-4 mb-8 sm:mb-10 max-w-xl">
                <p className="text-base leading-relaxed text-[#050505] font-medium">
                  INNOVAC BIOTECHNOLOGIES provides biotechnology, molecular biology, protein research, reagents, computational biology, internship, and professional training solutions.
                </p>
                <p className="text-sm leading-relaxed text-neutral-500 font-light">
                  Our goal is to empower researchers and organizations with practical scientific services and innovative biotechnology solutions.
                </p>
              </div>

              {/* Learn More Button (Mobile only) */}
              <div className="mt-8 sm:mt-12 flex justify-start w-full lg:hidden">
                <Link 
                  to="/about-us" 
                  className="inline-flex items-center justify-center gap-3 bg-white border border-[#E5E5E5] hover:border-[#050505] text-[#050505] rounded-full px-8 py-4 text-[11px] sm:text-xs font-bold uppercase tracking-widest transition-all duration-300 group shadow-sm focus:outline-none whitespace-nowrap"
                >
                  <span>LEARN MORE ABOUT US</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300 shrink-0" />
                </Link>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Supporting Blocks Grid */}
            <div className="w-full lg:w-[55%] flex flex-col mt-12 lg:mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 lg:gap-y-12 content-start">
                {[
                  { num: '01', title: 'Integrated Research Platform', desc: 'Connected scientific services, research support, and expertise.', img: '/who_we_are_1.png' },
                  { num: '02', title: 'Training Pathways', desc: 'Internship, workshop, and professional learning opportunities.', img: '/who_we_are_2.png' },
                  { num: '03', title: 'Core Scientific Areas', desc: 'Focused expertise across key scientific and biotechnology domains.', img: '/who_we_are_3.png' },
                  { num: '04', title: 'Service Categories', desc: 'A broad range of services supporting research and laboratory needs.', img: '/who_we_are_4.png' },
                ].map((block, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.1 * i }}
                    className="flex flex-col group/block"
                  >
                    <div className="mb-2">
                       <span className="text-3xl font-medium text-[#050505] tracking-tight group-hover/block:text-[#FF4D00] transition-colors">{block.num}</span>
                       <div className="w-6 h-[1px] bg-[#050505]/20 group-hover/block:bg-[#FF4D00] mt-3 mb-5 transition-colors" />
                    </div>
                    
                    <div className="flex items-start gap-4 sm:gap-5">
                      {block.img ? (
                        <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-white rounded-[12px] border border-[#E5E5E5]/60 flex items-center justify-center p-2 sm:p-2.5 shadow-sm group-hover/block:border-[#FF4D00]/30 transition-colors">
                          <img src={block.img} alt={block.title} className="w-full h-full object-contain group-hover/block:scale-110 transition-transform duration-500" />
                        </div>
                      ) : (
                        <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-white rounded-[12px] border border-[#E5E5E5]/60 flex items-center justify-center p-2 sm:p-2.5 shadow-sm group-hover/block:border-[#FF4D00]/30 transition-colors relative overflow-hidden">
                          <div className="absolute inset-0 bg-[#F5F5F3] opacity-50" />
                        </div>
                      )}
                      <div className="pt-1">
                        <h3 className="text-[11px] sm:text-xs font-bold text-[#050505] uppercase tracking-widest mb-1.5 leading-tight">{block.title}</h3>
                        <p className="text-[11px] sm:text-xs text-neutral-500 font-light leading-relaxed">{block.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Learn More Button (Desktop only) */}
              <div className="hidden lg:flex justify-center w-full mt-10 sm:mt-12">
                <Link 
                  to="/about-us" 
                  className="inline-flex items-center justify-center gap-3 bg-white border border-[#E5E5E5] hover:border-[#050505] text-[#050505] rounded-full px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 group shadow-sm focus:outline-none whitespace-nowrap"
                >
                  <span>LEARN MORE ABOUT US</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300 shrink-0" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="py-24 md:py-32 px-6 bg-white border-t border-border/40">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
            <SectionHeading 
              label="02 / Our Services" 
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

      {/* 4. REAGENTS SECTION (Dark) */}
      <section className="py-24 md:py-32 px-6 bg-[#050505] text-white relative overflow-hidden">
        {/* Subtle molecular pattern background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] bg-[length:40px_40px]" />
        </div>
        
        <div className="max-w-[1400px] mx-auto relative z-10">
<<<<<<< HEAD
=======
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
            <SectionHeading 
              label="03 / Reagents" 
              title="Laboratory Reagents\nFor Reliable Research." 
              light 
              highlightWord="Research." 
              className="mb-0 md:mb-0"
            />
            <Button href={getCtaPath('VIEW_ALL_REAGENTS')} variant="dark" className="shrink-0 w-full sm:w-auto" withArrow>VIEW ALL REAGENTS</Button>
          </div>
>>>>>>> 8cffe425185edb12729bdb0b517020f35c29bdd3
          
          {/* Header block */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
            <div>
              <span className="text-[#FF4D00] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
                03 / Reagents
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-white">
                Laboratory Reagents for<br />
                Reliable <span className="text-[#FF4D00] font-medium">Research.</span>
              </h2>
              <p className="text-neutral-400 text-base md:text-lg font-light leading-relaxed max-w-2xl mt-6">
                High-quality laboratory reagents and research supplies designed for reliable, reproducible scientific workflows.
              </p>
            </div>
            
<<<<<<< HEAD
            <Button href={getCtaPath('VIEW_ALL_REAGENTS')} variant="dark" className="shrink-0 group flex items-center gap-2 border-white/20 hover:border-[#FF4D00] hover:text-[#FF4D00] transition-colors" withArrow>
              VIEW ALL REAGENTS
            </Button>
          </div>

          {/* Search interaction */}
          <div className="mb-12 max-w-md relative">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-neutral-500 pointer-events-none">
              <Search size={18} />
            </span>
            <input 
              type="text"
              placeholder="Search reagents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/10 focus:border-[#FF4D00] outline-none rounded-xl pl-12 pr-10 py-3.5 text-sm text-white placeholder-neutral-500 transition-all font-light"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-neutral-400 hover:text-white transition-colors cursor-pointer"
                title="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Reagents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
            
            {/* Dynamic Rendering */}
            {(() => {
              const synthesisReagents = [
                { name: "Deionized Water", type: "Ultrapure Solvent", icon: Droplet, path: "/reagents/synthesis" },
                { name: "TRIzol", type: "RNA Extraction Reagent", icon: FlaskConical, path: "/reagents/synthesis" },
                { name: "TAE Buffer", type: "Electrophoresis Buffer", icon: Dna, path: "/reagents/synthesis" },
                { name: "TBE Buffer", type: "Electrophoresis Buffer", icon: Dna, path: "/reagents/synthesis" },
                { name: "Ethidium Bromide", type: "Nucleic Acid Gel Stain", icon: FlaskConical, path: "/reagents/synthesis" },
                { name: "Media Formation", type: "Prepared Growth Medium", icon: Layers, path: "/reagents/synthesis" },
              ];
              
              const supplyReagents = [
                { name: "Restriction Enzymes", type: "DNA Cleaving Enzyme", icon: GitFork, path: "/reagents/supply" },
                { name: "Oligos", type: "Custom Oligonucleotides", icon: Link2, path: "/reagents/supply" },
                { name: "Polymerases", type: "Amplification Enzyme", icon: Zap, path: "/reagents/supply" },
                { name: "Master Mixes", type: "Ready-to-Use PCR Mix", icon: Pipette, path: "/reagents/supply" },
                { name: "Media Supply", type: "Cell Culture Media Base", icon: Database, path: "/reagents/supply" },
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
                  <div className="col-span-12 text-center py-20 bg-white/[0.01] border border-white/5 rounded-[24px]">
                    <Search size={40} className="mx-auto text-neutral-600 mb-4" />
                    <h3 className="text-xl font-medium text-white mb-2">No reagents found</h3>
                    <p className="text-neutral-400 text-sm mb-6 max-w-sm mx-auto">We couldn't find any reagents matching "{searchQuery}". Try revising your search query.</p>
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="px-5 py-2.5 bg-[#FF4D00] hover:bg-[#E64500] text-white font-semibold rounded-xl transition-colors cursor-pointer text-xs uppercase tracking-wider"
                    >
                      Clear Search Query
                    </button>
                  </div>
                );
              }

              return (
                <>
                  {/* Synthesis List */}
                  <div className="lg:col-span-4 flex flex-col w-full h-full">
                    <div className="mb-6 group/title">
                      <div className="flex items-center gap-3 mb-2 text-[#FF4D00]">
                        <Beaker size={20} />
                        <h3 className="text-sm font-bold uppercase tracking-[0.25em]">Synthesis</h3>
=======
            {/* Left: Synthesis */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-8 text-accent">
                <Beaker size={24} />
                <h3 className="text-xl font-medium uppercase tracking-widest">Synthesis</h3>
              </div>
              <ul className="space-y-4">
                {["Deionized Water", "TRIzol", "TAE Buffer", "TBE Buffer", "Ethidium Bromide", "Media Formation"].map((item, i) => (
                  <li key={i} className="group">
                    <Link to={`/reagents/${item.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center justify-between py-4 border-b border-white/10 hover:border-accent transition-colors">
                      <div className="flex items-center gap-4">
                        <TestTube size={18} className="text-neutral-500 group-hover:text-accent transition-colors" />
                        <span className="text-lg text-neutral-300 group-hover:text-white transition-colors">{item}</span>
>>>>>>> 8cffe425185edb12729bdb0b517020f35c29bdd3
                      </div>
                      <div className="w-12 h-0.5 bg-[#FF4D00] rounded-full transform origin-left group-hover/title:w-20 transition-all duration-300" />
                    </div>
                    
                    {filteredSynthesis.length > 0 ? (
                      <div className="space-y-3">
                        {filteredSynthesis.map((reagent, i) => {
                          const ReagentIcon = reagent.icon;
                          const isSelected = selectedId === reagent.name;
                          return (
                            <motion.div
                              key={reagent.name}
                              initial={{ opacity: 0, y: 15 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.05 }}
                              onClick={() => handleReagentClick(reagent.name, reagent.path)}
                              className={`group relative flex items-center justify-between p-4 rounded-[14px] bg-white/[0.02] border transition-all duration-300 cursor-pointer ${
                                isSelected 
                                  ? 'border-[#FF4D00] bg-[#FF4D00]/10 shadow-[0_0_15px_rgba(255,77,0,0.1)]' 
                                  : 'border-white/5 hover:border-[#FF4D00]/30 hover:bg-white/[0.04]'
                              }`}
                            >
                              {/* Left border active highlight */}
                              <div className={`absolute left-0 top-0 bottom-0 w-[3px] bg-[#FF4D00] transition-opacity duration-300 rounded-l-[14px] ${
                                isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                              }`} />
                              
                              <div className="flex items-center gap-4 pl-1">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                                  isSelected ? 'bg-[#FF4D00] text-white' : 'bg-white/[0.03] text-neutral-400 group-hover:bg-[#FF4D00]/10 group-hover:text-[#FF4D00]'
                                }`}>
                                  <ReagentIcon size={18} />
                                </div>
                                <div className="text-left">
                                  <h4 className={`text-base font-semibold transition-colors duration-300 ${
                                    isSelected ? 'text-[#FF4D00]' : 'text-neutral-200 group-hover:text-white'
                                  }`}>{reagent.name}</h4>
                                  <p className="text-[11px] text-neutral-500 font-light mt-0.5">{reagent.type}</p>
                                </div>
                              </div>
                              <ChevronRight size={18} className={`transition-all duration-300 ${
                                isSelected ? 'text-[#FF4D00] translate-x-1.5' : 'text-neutral-600 group-hover:text-[#FF4D00] group-hover:translate-x-1'
                              }`} />
                            </motion.div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="py-8 text-center bg-white/[0.01] border border-dashed border-white/5 rounded-[14px] text-neutral-500 text-sm">
                        No synthesis reagents match query
                      </div>
                    )}
                  </div>

<<<<<<< HEAD
                  {/* Center scientific visual centerpiece */}
                  <div className="lg:col-span-4 hidden lg:flex justify-center items-center py-6">
                    <MicroscopeCenterpiece />
                  </div>

                  {/* Supply List */}
                  <div className="lg:col-span-4 flex flex-col w-full h-full">
                    <div className="mb-6 group/title">
                      <div className="flex items-center gap-3 mb-2 text-[#FF4D00]">
                        <Thermometer size={20} />
                        <h3 className="text-sm font-bold uppercase tracking-[0.25em]">Supply</h3>
                      </div>
                      <div className="w-12 h-0.5 bg-[#FF4D00] rounded-full transform origin-left group-hover/title:w-20 transition-all duration-300" />
                    </div>

                    {filteredSupply.length > 0 ? (
                      <div className="space-y-3">
                        {filteredSupply.map((reagent, i) => {
                          const ReagentIcon = reagent.icon;
                          const isSelected = selectedId === reagent.name;
                          return (
                            <motion.div
                              key={reagent.name}
                              initial={{ opacity: 0, y: 15 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.05 }}
                              onClick={() => handleReagentClick(reagent.name, reagent.path)}
                              className={`group relative flex items-center justify-between p-4 rounded-[14px] bg-white/[0.02] border transition-all duration-300 cursor-pointer ${
                                isSelected 
                                  ? 'border-[#FF4D00] bg-[#FF4D00]/10 shadow-[0_0_15px_rgba(255,77,0,0.1)]' 
                                  : 'border-white/5 hover:border-[#FF4D00]/30 hover:bg-white/[0.04]'
                              }`}
                            >
                              {/* Left border active highlight */}
                              <div className={`absolute left-0 top-0 bottom-0 w-[3px] bg-[#FF4D00] transition-opacity duration-300 rounded-l-[14px] ${
                                isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                              }`} />
                              
                              <div className="flex items-center gap-4 pl-1">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                                  isSelected ? 'bg-[#FF4D00] text-white' : 'bg-white/[0.03] text-neutral-400 group-hover:bg-[#FF4D00]/10 group-hover:text-[#FF4D00]'
                                }`}>
                                  <ReagentIcon size={18} />
                                </div>
                                <div className="text-left">
                                  <h4 className={`text-base font-semibold transition-colors duration-300 ${
                                    isSelected ? 'text-[#FF4D00]' : 'text-neutral-200 group-hover:text-white'
                                  }`}>{reagent.name}</h4>
                                  <p className="text-[11px] text-neutral-500 font-light mt-0.5">{reagent.type}</p>
                                </div>
                              </div>
                              <ChevronRight size={18} className={`transition-all duration-300 ${
                                isSelected ? 'text-[#FF4D00] translate-x-1.5' : 'text-neutral-600 group-hover:text-[#FF4D00] group-hover:translate-x-1'
                              }`} />
                            </motion.div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="py-8 text-center bg-white/[0.01] border border-dashed border-white/5 rounded-[14px] text-neutral-500 text-sm">
                        No supply reagents match query
                      </div>
                    )}
                  </div>
                </>
              );
            })()}

            {/* Premium Quality trust card spanning 12 columns */}
            <div className="col-span-12 mt-12 bg-gradient-to-r from-white/[0.02] to-white/[0.04] border border-white/10 rounded-[32px] p-8 md:p-10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-md">
              {/* Subtle scientific grid pattern or decorative wavy lines on the right side */}
              <div className="absolute right-0 top-0 bottom-0 w-[40%] opacity-15 pointer-events-none bg-[radial-gradient(circle_at_right,#FF4D00_0%,transparent_60%)]" />
              <div className="absolute right-12 top-1/2 -translate-y-1/2 w-48 h-24 opacity-10 pointer-events-none hidden md:block">
                {/* Mini sine-wave vector lines representing scientific patterns */}
                <svg viewBox="0 0 200 100" fill="none" stroke="#FF4D00" strokeWidth="1.2" className="w-full h-full">
                  <path d="M0,50 Q25,20 50,50 T100,50 T150,50 T200,50" />
                  <path d="M0,60 Q25,30 50,60 T100,60 T150,60 T200,60" opacity="0.4" />
                </svg>
=======
            {/* Center: Image */}
            <div className="lg:col-span-4 hidden lg:flex items-center justify-center px-4 relative">
              <img 
                src="/reagents_microscope.png" 
                alt="Microscope" 
                className="w-full max-w-[320px] h-auto object-contain opacity-95 drop-shadow-[0_20px_50px_rgba(255,77,0,0.15)] select-none"
              />
            </div>

            {/* Right: Supply */}
            <div className="lg:col-span-4 flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center gap-3 mb-8 text-accent">
                  <Thermometer size={24} />
                  <h3 className="text-xl font-medium uppercase tracking-widest">Supply</h3>
                </div>
                <ul className="space-y-4 mb-12">
                  {["Restriction Enzymes", "Oligos", "Polymerases", "Master Mixes", "Media Supply"].map((item, i) => (
                    <li key={i} className="group">
                      <Link to={`/reagents/${item.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center justify-between py-4 border-b border-white/10 hover:border-accent transition-colors">
                        <div className="flex items-center gap-4">
                          <TestTube size={18} className="text-neutral-500 group-hover:text-accent transition-colors" />
                          <span className="text-lg text-neutral-300 group-hover:text-white transition-colors">{item}</span>
                        </div>
                        <ChevronRight size={18} className="text-neutral-600 group-hover:text-accent transition-colors transform group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}
                </ul>
>>>>>>> 8cffe425185edb12729bdb0b517020f35c29bdd3
              </div>

              <div className="flex items-center gap-6 relative z-10 flex-col md:flex-row text-center md:text-left">
                <div className="w-16 h-16 bg-[#FF4D00]/10 rounded-2xl flex items-center justify-center text-[#FF4D00] border border-[#FF4D00]/30 shrink-0 shadow-[0_0_15px_rgba(255,77,0,0.15)]">
                  <ShieldCheck size={32} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF4D00] mb-2">Quality You Can Trust</h4>
                  <p className="text-neutral-300 text-lg font-light max-w-2xl leading-relaxed">
                    High-quality reagents and laboratory supplies for accurate, reliable and reproducible research outcomes.
                  </p>
                </div>
              </div>
              
              <div className="relative z-10 shrink-0 w-full md:w-auto">
                <Link to={getCtaPath('REQUEST_QUOTE')} className="w-full md:w-auto bg-[#FF4D00] hover:bg-[#E64500] text-white border-none py-4 px-8 rounded-xl font-semibold flex items-center justify-center gap-3 group transition-all duration-300 hover:shadow-[0_4px_20px_rgba(255,77,0,0.25)] text-sm uppercase tracking-wider">
                  REQUEST A QUOTE <ArrowRight size={16} className="transform group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. RESEARCH SECTION */}
      <section className="py-24 md:py-32 px-6 bg-background">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
            <SectionHeading 
              label="04 / Research" 
              title="Research Across\nBiotechnology &\nComputational Science." 
              highlightWord="Science."
              className="mb-0 md:mb-0"
            />
            <Button href={getCtaPath('CONSULTATION_REQUEST')} variant="outline" className="shrink-0 w-full sm:w-auto" withArrow>DISCUSS YOUR RESEARCH</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-[24px] border border-border/50 overflow-hidden flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
              <div className="p-10 flex-grow">
                <span className="text-2xl font-medium text-primary mb-6 block">01</span>
                <h3 className="text-lg font-bold tracking-wide uppercase text-primary mb-6">Biotechnology</h3>
                <p className="text-neutral-600 leading-relaxed text-sm">
                  Consortia development for biogas and climate-related biological processes.
                </p>
              </div>
              <div className="h-48 w-full relative overflow-hidden bg-neutral-100">
                <img src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2787&auto=format&fit=crop" alt="Biotech" className="w-full h-full object-cover mix-blend-multiply" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[24px] border border-border/50 overflow-hidden flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
              <div className="p-10 flex-grow">
                <span className="text-2xl font-medium text-primary mb-6 block">02</span>
                <h3 className="text-lg font-bold tracking-wide uppercase text-primary mb-6">Molecular Biology</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-neutral-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" /> Vaccine Design
                  </li>
                  <li className="flex items-center gap-3 text-sm text-neutral-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" /> Aptamer Detection
                  </li>
                </ul>
              </div>
              <div className="h-48 w-full relative overflow-hidden bg-neutral-100">
                <img src="https://images.unsplash.com/photo-1614935151651-0bea6508db6b?q=80&w=2925&auto=format&fit=crop" alt="Molecular" className="w-full h-full object-cover mix-blend-multiply" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[24px] border border-border/50 overflow-hidden flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
              <div className="p-10 flex-grow">
                <span className="text-2xl font-medium text-primary mb-6 block">03</span>
                <h3 className="text-lg font-bold tracking-wide uppercase text-primary mb-6">In-Silico Research</h3>
                <ul className="space-y-2">
                  {["Primer Design", "SPSS Analysis", "Molecular Docking", "MD Simulations", "Sequence Alignment", "Other Computational Research"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-neutral-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="h-48 w-full relative overflow-hidden bg-neutral-100">
                <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2960&auto=format&fit=crop" alt="Computational" className="w-full h-full object-cover mix-blend-multiply" />
              </div>
            </div>
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

      {/* 7. INTERNSHIPS & TRAINING (Split Layout) */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Internships */}
          <div className="bg-white rounded-[32px] overflow-hidden border border-border/50 shadow-sm flex flex-col">
            <div className="p-10 md:p-14 flex-grow">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-6">05 / Internships</p>
              <h3 className="text-[clamp(1.75rem,6vw,3rem)] font-medium tracking-tight mb-8 leading-tight">Turn Knowledge Into<br/>Practical <span className="text-accent">Experience.</span></h3>
              <Button href={getCtaPath('APPLY_INTERNSHIP')} variant="outline" className="mb-12 w-full sm:w-auto" withArrow>APPLY FOR INTERNSHIP</Button>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {[
                  "Molecular Biology", "Biotechnology", "Bioinformatics", 
                  "Computational Biology", "Laboratory Techniques", "Research & Data Analysis"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-neutral-600 font-medium">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Network size={12} className="text-accent" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="h-64 w-full relative">
              <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2680&auto=format&fit=crop" alt="Internship" className="w-full h-full object-cover object-top" />
            </div>
          </div>

          {/* Training */}
          <div className="bg-white rounded-[32px] overflow-hidden border border-border/50 shadow-sm flex flex-col">
            <div className="p-10 md:p-14 flex-grow">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-6">06 / Training</p>
              <h3 className="text-[clamp(1.75rem,6vw,3rem)] font-medium tracking-tight mb-8 leading-tight">Learn. Practice.<br/><span className="text-accent">Innovate.</span></h3>
              <Button href={getCtaPath('VIEW_WORKSHOPS')} variant="outline" className="mb-12 w-full sm:w-auto" withArrow>VIEW WORKSHOPS</Button>
              
              <div className="grid grid-cols-1 gap-y-6">
                {[
                  { title: "Molecular Biology", icon: Dna },
                  { title: "Computational Biology", icon: Activity },
                  { title: "Research Skills", icon: FileText }
                ].map((cat, i) => (
                  <div key={i} className="flex items-center gap-4 text-neutral-700 font-medium">
                    <div className="w-10 h-10 rounded-xl bg-background border border-border/50 flex items-center justify-center flex-shrink-0">
                      <cat.icon size={18} className="text-accent" />
                    </div>
                    {cat.title}
                  </div>
                ))}
              </div>
            </div>
            <div className="h-64 w-full relative">
              <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2940&auto=format&fit=crop" alt="Training" className="w-full h-full object-cover object-center" />
            </div>
          </div>

        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="py-32 md:py-40 px-6 bg-[#050505] text-white relative overflow-hidden border-t border-white/10 border-b border-white/10">
        {/* DNA background image */}
        <div className="absolute inset-0 opacity-30 mix-blend-screen">
          <img src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2874&auto=format&fit=crop" alt="DNA Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent z-10" />
        
        <div className="max-w-[1400px] mx-auto relative z-20 flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="flex items-start gap-8 max-w-3xl">
            <div className="w-24 h-24 rounded-full border border-white/20 bg-white/5 flex items-center justify-center flex-shrink-0 hidden md:flex">
              <Dna size={40} className="text-accent" />
            </div>
            <div>
              <h2 className="text-[clamp(2rem,7vw,4.375rem)] font-medium tracking-tight mb-6 leading-[1.1]">
                Have a <span className="text-accent">Research</span><br/>Challenge?
              </h2>
              <p className="text-base sm:text-lg text-neutral-400 mb-0 max-w-xl font-light leading-relaxed">
                Tell us what you are working on and our team can help identify the right biotechnology, laboratory, research, or training solution.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
            <Button href={getCtaPath('REQUEST_QUOTE')} size="lg" withArrow className="w-full sm:w-auto">REQUEST A QUOTE</Button>
            <Button href={getCtaPath('CONSULTATION_REQUEST')} variant="dark" size="lg" withArrow className="w-full sm:w-auto">
              CONTACT US
            </Button>
          </div>
          
        </div>
      </section>
    </div>
  );
}
