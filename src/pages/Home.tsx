import { getCtaPath } from '@/src/config/ctaConfig';
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll } from 'motion/react';
import { 
  FlaskConical, Dna, GraduationCap, Network, 
  ArrowRight, Search, Check, 
  MessageSquare, FileText, Activity, ShieldCheck, 
  ChevronRight, Beaker, TestTube, Thermometer,
  Target, UsersRound
} from 'lucide-react';
import { SEO } from '@/src/components/SEO';
import { Button } from '@/src/components/ui/Button';
import { SectionHeading } from '@/src/components/ui/SectionHeading';
import { ServicesStrip } from '@/src/components/ui/ServicesStrip';

export default function Home() {
  const { scrollYProgress } = useScroll();

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
      <section className="py-24 md:py-32 px-6 bg-[#F5F5F3] relative overflow-hidden text-[#050505] border-t border-[#E5E5E5]/40">
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
          
          <div className="border border-[#E5E5E5]/60 bg-white md:rounded-[32px] overflow-hidden shadow-sm flex flex-col">
            
            <div className="flex flex-col lg:flex-row w-full">
              
              {/* PRIMARY CONTENT AREA */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-7/12 flex flex-col p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-[#E5E5E5]/60"
              >
                {/* Section Label */}
                <span className="text-[#FF4D00] text-[10px] font-bold tracking-[0.2em] uppercase mb-8 block">
                  01 / WHO WE ARE
                </span>

                {/* Main Heading */}
                <h2 className="text-[clamp(2.25rem,6vw,4.5rem)] font-medium text-[#050505] leading-[1.05] tracking-tight mb-8">
                  Science That<br />
                  Moves Research<br />
                  <span className="text-[#FF4D00] italic pr-4">Forward.</span>
                </h2>

                {/* Company Descriptions */}
                <div className="space-y-4 mb-12 max-w-xl">
                  <p className="text-base leading-relaxed text-[#050505] font-medium">
                    INNOVAC BIOTECHNOLOGIES provides biotechnology, molecular biology, protein research, reagents, computational biology, internship, and professional training solutions.
                  </p>
                  <p className="text-sm leading-relaxed text-neutral-500 font-light">
                    Our goal is to empower researchers and organizations with practical scientific services and innovative biotechnology solutions.
                  </p>
                </div>

                {/* Connected Values List */}
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: { transition: { staggerChildren: 0.15 } }
                  }}
                  className="flex flex-col border-t border-[#E5E5E5]/60 mb-12"
                >
                  {[
                    { title: 'RELIABLE QUALITY', desc: 'Quality-focused scientific solutions.', icon: ShieldCheck },
                    { title: 'RESEARCH DRIVEN', desc: 'Focused on practical scientific impact.', icon: Target },
                    { title: 'SUPPORT EVERY STEP', desc: 'From planning to project support.', icon: UsersRound },
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                      }}
                      className="flex items-start gap-4 py-5 border-b border-[#E5E5E5]/60 group/value transition-colors hover:bg-neutral-50/50"
                    >
                      <div className="w-8 h-8 rounded-full border border-[#E5E5E5] bg-white flex items-center justify-center shrink-0 group-hover/value:border-[#FF4D00] transition-colors mt-0.5">
                        <item.icon size={14} className="text-[#050505] group-hover/value:text-[#FF4D00] transition-colors" />
                      </div>
                      <div>
                        <h4 className="text-[11px] font-bold text-[#050505] uppercase tracking-widest mb-1 group-hover/value:text-[#FF4D00] transition-colors">{item.title}</h4>
                        <p className="text-xs text-neutral-500 font-light">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Learn More Button */}
                <div className="mt-auto">
                  <Link 
                    to="/about-us" 
                    className="inline-flex items-center gap-3 bg-white border border-[#E5E5E5] hover:border-[#050505] text-[#050505] rounded-full px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 group shadow-sm focus:outline-none"
                  >
                    <span>LEARN MORE ABOUT US</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>

              {/* RIGHT COLUMN: Supporting Blocks Grid */}
              <div className="w-full lg:w-5/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
                {[
                  { num: '01', title: 'Integrated Research Platform', desc: 'Connected scientific services, research support, and expertise.', icon: Network },
                  { num: '02', title: 'Training Pathways', desc: 'Internship, workshop, and professional learning opportunities.', icon: GraduationCap },
                  { num: '03', title: 'Core Scientific Areas', desc: 'Focused expertise across key scientific and biotechnology domains.', icon: FlaskConical },
                  { num: '20+', title: 'Service Categories', desc: 'A broad range of services supporting research and laboratory needs.', icon: Dna },
                ].map((block, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.1 * i }}
                    className={`p-8 lg:p-10 flex flex-col relative group/block bg-white hover:bg-neutral-50 transition-colors border-[#E5E5E5]/60
                      ${i === 0 ? 'border-b sm:border-r' : i === 1 ? 'border-b' : i === 2 ? 'border-b sm:border-b-0 sm:border-r' : ''}
                    `}
                  >
                    <div className="absolute top-8 right-8 text-[#E5E5E5] group-hover/block:text-[#FF4D00]/10 transition-colors duration-500">
                      <block.icon size={64} strokeWidth={1} className="opacity-30" />
                    </div>
                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <div>
                         <span className="text-3xl font-medium text-[#050505] tracking-tight group-hover/block:text-[#FF4D00] transition-colors">{block.num}</span>
                         <div className="w-6 h-[1px] bg-[#E5E5E5] group-hover/block:bg-[#FF4D00] my-4 transition-colors" />
                      </div>
                      <div className="mt-16 sm:mt-24">
                        <h3 className="text-[11px] font-bold text-[#050505] uppercase tracking-widest mb-2">{block.title}</h3>
                        <p className="text-xs text-neutral-500 font-light max-w-[180px] leading-relaxed">{block.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>

            {/* BOTTOM IMAGE STRIP */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="grid grid-cols-1 sm:grid-cols-3 border-t border-[#E5E5E5]/60 bg-[#F5F5F3]"
            >
              {[
                { img: '/who_we_are_1.png', alt: 'Reliable Quality' },
                { img: '/who_we_are_2.png', alt: 'Research Driven' },
                { img: '/who_we_are_3.png', alt: 'Support Every Step' }
              ].map((img, i) => (
                <div key={i} className={`aspect-[4/3] sm:aspect-auto sm:h-48 lg:h-56 relative p-8 md:p-12 flex items-center justify-center group/img overflow-hidden border-[#E5E5E5]/60 ${i < 2 ? 'border-b sm:border-b-0 sm:border-r' : ''}`}>
                  <img 
                    src={img.img} 
                    alt={img.alt} 
                    className="w-full h-full object-contain drop-shadow-sm group-hover/img:scale-110 transition-transform duration-700 ease-out" 
                  />
                </div>
              ))}
            </motion.div>
            
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
                <img src="https://images.unsplash.com/photo-1614935151651-0bea6508db6b?q=80&w=2925&auto=format&fit=crop" alt="DNA" className="w-full h-full object-cover" />
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
                <img src="https://images.unsplash.com/photo-1559757175-9b93db5f8cb4?q=80&w=2831&auto=format&fit=crop" alt="Protein" className="w-full h-full object-cover" />
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
                <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2960&auto=format&fit=crop" alt="Computational" className="w-full h-full object-cover" />
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
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
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
                      </div>
                      <ChevronRight size={18} className="text-neutral-600 group-hover:text-accent transition-colors transform group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Center: Image */}
            <div className="lg:col-span-4 hidden lg:flex justify-center px-4 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505] z-10" />
              <img 
                src="https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=2959&auto=format&fit=crop" 
                alt="Laboratory Glassware" 
                className="w-full h-[500px] object-cover mix-blend-screen opacity-80"
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
              </div>

              {/* Quality Card */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm mt-8">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <ShieldCheck size={20} className="text-accent" />
                </div>
                <h4 className="text-xl font-medium mb-3">Quality You Can Trust</h4>
                <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                  High-quality reagents and laboratory supplies for accurate, reliable and reproducible research outcomes.
                </p>
                <Link to={getCtaPath('REQUEST_QUOTE')} className="text-accent text-sm font-semibold tracking-wide hover:text-white transition-colors flex items-center gap-2 group">
                  REQUEST A QUOTE <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
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
