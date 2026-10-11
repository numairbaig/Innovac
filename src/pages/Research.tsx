import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, ChevronDown, ChevronRight, Beaker, Dna, Laptop, Microscope, 
  Terminal, Target, Search, BarChart, BarChart3, Binary, Cpu, FlaskConical, 
  Share2, Layers, GitMerge, Activity, Sparkles, ExternalLink, CheckCircle2 
} from 'lucide-react';
import { SEO } from '@/src/components/SEO';
import { Button } from '@/src/components/ui/Button';
import { Breadcrumb, PageLabel } from '@/src/components/ui/Breadcrumb';
import { researchFaqs } from '@/src/data/research';
import { cn } from '@/src/lib/utils';
import { PageHeroIllustration } from '@/src/components/ui/PageHeroIllustration';
import { MolecularBackgroundEffect } from '@/src/components/ui/MolecularBackgroundEffect';
import { BASE44_ORDER_PORTAL_URL } from '@/src/config/portalConfig';

export default function Research() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="bg-[#030B17] text-white">
      <SEO 
        title="Biotechnology Research | INNOVAC BIOTECHNOLOGIES" 
        description="Explore biotechnology, molecular biology, and in-silico research activities from INNOVAC BIOTECHNOLOGIES, including vaccine design, aptamer detection, primer design, molecular docking, MD simulations, SPSS analysis, and sequence alignment."
      />

      {/* SECTION 01 — RESEARCH HERO (Futuristic Biotech Dark Navy & Cyan) */}
      <section className="relative w-full pt-28 pb-16 lg:pt-32 lg:pb-24 px-6 bg-[#030B17] text-white overflow-hidden border-b border-[#00E5FF]/20">
        <MolecularBackgroundEffect particleColor="0, 229, 255" lineColor="0, 150, 255" particleCount={50} />

        {/* Ambient Gradient Halos */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#030B17] via-[#05152F] to-[#030B17]" />
          <div className="absolute right-0 top-0 w-[60%] h-full bg-[radial-gradient(ellipse_at_70%_40%,rgba(0,229,255,0.14)_0%,transparent_65%)]" />
          <div className="absolute left-1/4 bottom-0 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,#00E5FF_1px,transparent_1px)] bg-[length:32px_32px]" />
        </div>

        <div className="max-w-[1400px] mx-auto relative z-20 w-full">
          <Breadcrumb items={[{ label: 'Research' }]} accentColor="text-[#00E5FF]" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-6 lg:mt-2 w-full">
            <div className="max-w-3xl lg:w-3/5">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <PageLabel accentColor="text-[#00E5FF]">OUR RESEARCH INITIATIVES</PageLabel>
                <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-medium tracking-tight leading-[1.05] mb-6 text-white">
                  Exploring.<br />
                  Discovering.<br />
                  <span className="bg-gradient-to-r from-[#00E5FF] via-[#00C2FF] to-[#0066FF] bg-clip-text text-transparent">Innovating.</span>
                </h1>
                <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mb-8 leading-relaxed font-light">
                  Our research activities span biotechnology, molecular biology, and in-silico research, combining experimental precision and computational modeling to support scientific discovery.
                </p>
                
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <Button 
                    href="/quote" 
                    variant="primary" 
                    className="bg-gradient-to-r from-[#0066FF] to-[#00C2FF] hover:from-[#0055D4] hover:to-[#00E5FF] text-white border-none px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-xl shadow-[0_0_25px_rgba(0,194,255,0.35)]" 
                    withArrow
                  >
                    DISCUSS YOUR PROJECT
                  </Button>
                  <a 
                    href={BASE44_ORDER_PORTAL_URL}
                    className="h-12 px-6 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 hover:border-[#00E5FF] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all"
                  >
                    <span>CLIENT PORTAL</span>
                    <ExternalLink size={15} className="text-[#00E5FF]" />
                  </a>
                </div>

                {/* Quick stats / pillar tags */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-lg">
                  <div>
                    <span className="text-[#00E5FF] text-lg font-bold block">01</span>
                    <span className="text-neutral-400 text-xs">Biotechnology</span>
                  </div>
                  <div>
                    <span className="text-[#00C2FF] text-lg font-bold block">02</span>
                    <span className="text-neutral-400 text-xs">Molecular Biology</span>
                  </div>
                  <div>
                    <span className="text-[#0066FF] text-lg font-bold block">03</span>
                    <span className="text-neutral-400 text-xs">In-Silico Modeling</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Right Visual Area */}
            <PageHeroIllustration page="research" className="lg:w-2/5" />
          </div>
        </div>
      </section>

      {/* SECTION 02 — RESEARCH AREAS (Biotech Dark Navy Cards) */}
      <section id="research-areas" className="py-24 px-6 bg-[#051329] border-b border-white/10 relative">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <span className="text-[#00E5FF] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
              01 / RESEARCH AREAS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              Our Research Areas
            </h2>
            <p className="text-neutral-300 max-w-2xl text-base md:text-lg leading-relaxed font-light">
              We focus on cutting-edge research domains to drive innovation, generate impactful results, and contribute to scientific advancement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* Card 01 - Biotech */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onClick={() => navigate('/research/biotech')}
              className="bg-[#030B17]/90 rounded-[24px] overflow-hidden border border-white/10 hover:border-[#20C77A]/60 transition-all duration-300 group cursor-pointer shadow-xl hover:shadow-[0_15px_40px_rgba(32,199,122,0.2)] hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="h-48 overflow-hidden relative border-b border-white/10">
                  <img 
                    src="/images/research_card_2.jpg" 
                    alt="Biotechnology" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030B17] via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 text-[10px] font-bold text-[#20C77A] bg-[#0C2419]/90 border border-[#1A3B2B] px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                    BIO &bull; 01
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#20C77A] transition-colors">Biotechnology</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                    Research focused on consortium development for biogas and other climatic processes.
                  </p>
                </div>
              </div>
              <div className="px-8 pb-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-[#20C77A] uppercase tracking-wider">
                <span>EXPLORE BIOTECHNOLOGY</span>
                <ArrowRight size={15} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.div>

            {/* Card 02 - Molecular Biology */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              onClick={() => navigate('/research/molecular-biology')}
              className="bg-[#030B17]/90 rounded-[24px] overflow-hidden border border-white/10 hover:border-[#00E5FF]/60 transition-all duration-300 group cursor-pointer shadow-xl hover:shadow-[0_15px_40px_rgba(0,229,255,0.2)] hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="h-48 overflow-hidden relative border-b border-white/10">
                  <img 
                    src="/images/research_card_1.jpg" 
                    alt="Molecular Biology" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030B17] via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 text-[10px] font-bold text-[#00E5FF] bg-[#030B17]/90 border border-[#00E5FF]/30 px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                    MOL &bull; 02
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00E5FF] transition-colors">Molecular Biology</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    Molecular biology research focused on vaccine design and aptamer detection.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Vaccine Design", "Aptamer Detection"].map((svc, i) => (
                      <span key={i} className="text-[11px] font-medium text-neutral-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg">
                        {svc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="px-8 pb-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-[#00E5FF] uppercase tracking-wider">
                <span>EXPLORE MOLECULAR BIOLOGY</span>
                <ArrowRight size={15} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.div>

            {/* Card 03 - In-silico Research */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onClick={() => navigate('/research/in-silico')}
              className="bg-[#030B17]/90 rounded-[24px] overflow-hidden border border-white/10 hover:border-[#00C2FF]/60 transition-all duration-300 group cursor-pointer shadow-xl hover:shadow-[0_15px_40px_rgba(0,194,255,0.2)] hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="h-48 overflow-hidden relative border-b border-white/10">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop" 
                    alt="In-silico Research" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030B17] via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 text-[10px] font-bold text-[#00C2FF] bg-[#030B17]/90 border border-[#00C2FF]/30 px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                    SILICO &bull; 03
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00C2FF] transition-colors">In-silico Research</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    Computational research supporting molecular and biological studies.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Primer Design", "Molecular Docking", "MD Simulations"].map((svc, i) => (
                      <span key={i} className="text-[11px] font-medium text-neutral-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg">
                        {svc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="px-8 pb-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-[#00C2FF] uppercase tracking-wider">
                <span>EXPLORE IN-SILICO</span>
                <ArrowRight size={15} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 03 — BIOTECH RESEARCH (Green Biotech Theme) */}
      <section className="py-20 lg:py-28 px-6 bg-[#04140E] text-[#F2F7F4] relative overflow-hidden border-t border-[#1A3B2B]">
        <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#20C77A_1px,transparent_1px)] bg-[length:36px_36px]" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#20C77A]/15 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Image Area */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 order-2 lg:order-1 relative group"
            >
              <div className="relative h-[380px] sm:h-[480px] lg:h-[540px] rounded-[28px] overflow-hidden border border-[#1A3B2B] group-hover:border-[#20C77A]/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 bg-[#0C2419]">
                <img 
                  src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2787&auto=format&fit=crop" 
                  alt="Biotechnology Research" 
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out filter saturate-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04140E]/95 via-[#04140E]/30 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#0C2419]/90 backdrop-blur-md border border-[#1A3B2B] flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#20C77A]">EXPERIMENTAL BIOTECH</span>
                    <h4 className="text-base font-bold text-[#F2F7F4]">Consortia & Bioprocess Engineering</h4>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#20C77A]/10 border border-[#20C77A]/30 flex items-center justify-center text-[#20C77A] shrink-0">
                    <FlaskConical size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Right Text Content Hierarchy */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="lg:col-span-6 order-1 lg:order-2 space-y-6"
            >
              <span className="text-[#20C77A] text-xs font-bold tracking-[0.25em] uppercase block">
                02 / BIOTECHNOLOGY
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F2F7F4] leading-[1.1]">
                Biotechnology <span className="text-[#20C77A] font-medium">Research</span>
              </h2>
              <p className="text-[#A8B8AF] text-base sm:text-lg font-light leading-relaxed">
                Our biotechnology research integrates experimental microbial studies with advanced biological process optimization to solve biological and climatic challenges.
              </p>
              
              <div className="p-6 sm:p-8 rounded-[24px] bg-[#0C2419] border border-[#1A3B2B] space-y-4 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#20C77A]/5 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-center gap-3 text-[#20C77A]">
                  <span className="w-2 h-2 rounded-full bg-[#20C77A] animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider">Key Research Focus</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#F2F7F4]">Consortia Development</h3>
                <p className="text-[#A8B8AF] text-sm font-light leading-relaxed">
                  Dedicated research activities focused on specialized microbial consortium development for biogas yield enhancement, waste treatment, and biological environmental processes.
                </p>
                <div className="pt-2">
                  <Link 
                    to="/research/biotech" 
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#20C77A] tracking-wider uppercase hover:text-[#6EE7A8] transition-colors group"
                  >
                    <span>EXPLORE BIOTECH RESEARCH</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </div>

              <div className="pt-2">
                <Button 
                  href="/quote" 
                  className="bg-[#20C77A] text-[#04110B] hover:bg-[#2ae08c] hover:text-[#04110B] border-none px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-xl shadow-[0_0_20px_rgba(32,199,122,0.3)] transition-all duration-300" 
                  withArrow
                >
                  DISCUSS YOUR RESEARCH
                </Button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 04 — MOLECULAR BIOLOGY RESEARCH (Deep Navy & Cyan Theme) */}
      <section className="py-20 lg:py-28 px-6 bg-[#030B17] text-white relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,#00E5FF_1px,transparent_1px)] bg-[length:32px_32px] pointer-events-none" />
        <div className="absolute right-0 top-1/3 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Header */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 space-y-6"
            >
              <span className="text-[#00E5FF] text-xs font-bold tracking-[0.25em] uppercase block">
                03 / MOLECULAR BIOLOGY
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                Molecular Biology <span className="bg-gradient-to-r from-[#00E5FF] to-[#0066FF] bg-clip-text text-transparent font-medium">Research</span>
              </h2>
              <p className="text-neutral-300 text-base sm:text-lg font-light leading-relaxed">
                Advanced research solutions focusing on molecular detection, immunoinformatics-based vaccine design, and high-affinity aptamer selection.
              </p>

              <div className="pt-2">
                <Button 
                  href="/quote" 
                  variant="primary"
                  className="bg-gradient-to-r from-[#0066FF] to-[#00C2FF] hover:from-[#0055D4] hover:to-[#00E5FF] text-white border-none px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-xl shadow-[0_0_20px_rgba(0,194,255,0.3)] transition-all duration-300"
                  withArrow
                >
                  DISCUSS YOUR RESEARCH
                </Button>
              </div>
            </motion.div>

            {/* Right Side: 2 Interactive Research Cards */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6 items-stretch">
              
              {/* Card 01: Vaccine Design */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                onClick={() => navigate('/research/molecular-biology/vaccine-design')}
                className="p-6 rounded-[24px] bg-[#051329] border border-white/10 hover:border-[#00E5FF]/60 hover:shadow-[0_15px_35px_rgba(0,229,255,0.15)] transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1.5"
              >
                <div className="space-y-5">
                  <div className="h-44 rounded-xl overflow-hidden relative border border-white/10 group-hover:border-[#00E5FF]/30">
                    <img 
                      src="https://images.unsplash.com/photo-1614935151651-0bea6508db6b?q=80&w=2925&auto=format&fit=crop" 
                      alt="Vaccine Design Research" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#051329] via-transparent to-transparent" />
                    <span className="absolute top-3 right-3 text-[10px] font-bold text-[#00E5FF] bg-[#030B17]/90 border border-[#00E5FF]/30 px-2.5 py-1 rounded-lg uppercase tracking-wider shadow-sm">
                      VAC
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00E5FF] transition-colors">
                      Vaccine Design
                    </h3>
                    <p className="text-xs text-neutral-400 font-light leading-relaxed">
                      Multi-epitope & subunit vaccine candidate modeling, immunoinformatics, allergenicity screening, and immune docking.
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between text-xs font-bold text-[#00E5FF] uppercase tracking-wider">
                  <span>EXPLORE VACCINE DESIGN</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                </div>
              </motion.div>

              {/* Card 02: Aptamer Detection */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.22 }}
                onClick={() => navigate('/research/molecular-biology/aptamer-detection')}
                className="p-6 rounded-[24px] bg-[#051329] border border-white/10 hover:border-[#00C2FF]/60 hover:shadow-[0_15px_35px_rgba(0,194,255,0.15)] transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1.5"
              >
                <div className="space-y-5">
                  <div className="h-44 rounded-xl overflow-hidden relative border border-white/10 group-hover:border-[#00C2FF]/30">
                    <img 
                      src="https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=2959&auto=format&fit=crop" 
                      alt="Aptamer Detection Research" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#051329] via-transparent to-transparent" />
                    <span className="absolute top-3 right-3 text-[10px] font-bold text-[#00C2FF] bg-[#030B17]/90 border border-[#00C2FF]/30 px-2.5 py-1 rounded-lg uppercase tracking-wider shadow-sm">
                      APT
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00C2FF] transition-colors">
                      Aptamer Detection
                    </h3>
                    <p className="text-xs text-neutral-400 font-light leading-relaxed">
                      Single-stranded RNA/DNA aptamer selection, 3D structural folding, target recognition modeling, and binding affinity assays.
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between text-xs font-bold text-[#00C2FF] uppercase tracking-wider">
                  <span>EXPLORE APTAMER DETECTION</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05 — IN-SILICO RESEARCH (Deep Biotech Navy + Neon Glow Cells) */}
      <section className="py-20 lg:py-28 px-6 bg-[#051329] text-white relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 opacity-15 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00E5FF_1px,transparent_1px)] bg-[length:32px_32px]" />
          <div className="absolute left-1/4 top-1/3 w-96 h-96 bg-[#0066FF]/20 rounded-full blur-[100px]" />
          <div className="absolute right-1/4 bottom-1/4 w-96 h-96 bg-[#00E5FF]/15 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="mb-16 max-w-3xl">
            <span className="text-[#00E5FF] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
              04 / IN-SILICO RESEARCH
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Computational Research.<br />
              <span className="bg-gradient-to-r from-[#00E5FF] to-[#0066FF] bg-clip-text text-transparent font-medium">Molecular Insight.</span>
            </h2>
            <p className="text-neutral-300 text-base sm:text-lg font-light leading-relaxed">
              Our in-silico research activities use advanced computational modeling, structural bioinformatics, and statistical workflows to accelerate biological discovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {[
              { id: 'primer-design', num: '01', title: 'Primer Design', desc: 'Custom PCR and qPCR primer specification, thermodynamic validation, and secondary structure analysis.', icon: Dna, href: '/research/in-silico/primer-design' },
              { id: 'spss-analysis', num: '02', title: 'SPSS Analysis', desc: 'Rigorous biological data management, biostatistical testing, regression analysis, and publication-ready charts.', icon: BarChart3, href: '/research/in-silico/spss-analysis' },
              { id: 'molecular-docking', num: '03', title: 'Molecular Docking', desc: 'Protein-ligand & protein-protein interaction modeling, binding energy calculation, and active site mapping.', icon: Share2, href: '/research/in-silico/molecular-docking' },
              { id: 'md-simulations', num: '04', title: 'MD Simulations', desc: 'Nanosecond to microsecond molecular dynamics trajectory analysis, RMSD/RMSF profiling, and conformational stability.', icon: Activity, href: '/research/in-silico/md-simulations' },
              { id: 'sequence-alignment', num: '05', title: 'Sequence Alignment', desc: 'Multiple sequence alignment, phylogenetic tree reconstruction, domain annotation, and conservation analysis.', icon: GitMerge, href: '/research/in-silico/sequence-alignment' },
              { id: 'other-computational', num: '06', title: 'Other In-Silico Research', desc: 'Custom bioinformatics pipelines, Virtual Screening, homology modeling, and tailored computational support.', icon: Cpu, href: '/research/in-silico/other-computational' }
            ].map((cell, index) => {
              const Icon = cell.icon;
              return (
                <motion.div 
                  key={cell.id}
                  initial={{ opacity: 0, y: 30, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => navigate(cell.href)}
                  className="bg-[#030B17]/90 backdrop-blur-md border border-white/10 hover:border-[#00E5FF]/60 rounded-[24px] p-8 transition-all duration-300 group cursor-pointer shadow-lg hover:-translate-y-1.5 hover:shadow-[0_12px_35px_rgba(0,229,255,0.18)] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] group-hover:scale-110 group-hover:bg-[#00E5FF] group-hover:text-[#030B17] transition-all duration-300 shrink-0 shadow-sm relative overflow-hidden">
                        <Icon size={22} className="stroke-[1.75]" />
                      </div>
                      <span className="text-xs font-bold text-[#00E5FF] font-mono tracking-widest px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20">
                        {cell.num}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00E5FF] transition-colors">
                      {cell.title}
                    </h3>
                    <p className="text-xs text-neutral-400 font-light leading-relaxed mb-6">
                      {cell.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#00E5FF] uppercase tracking-wider group-hover:text-[#00C2FF] transition-colors">
                    <span>EXPLORE TOPIC</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 06 — RESEARCH APPROACH (Dark Process Timeline) */}
      <section className="py-20 lg:py-28 px-6 bg-[#030B17] border-t border-white/10 relative">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <span className="text-[#00E5FF] text-xs font-bold tracking-[0.25em] uppercase mb-3 block">
              05 / RESEARCH APPROACH
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6 max-w-2xl">
              From Research Question to Scientific Insight.
            </h2>
            <p className="text-neutral-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
              Our structured process seamlessly combines experimental methodologies and computational analysis tailored to project objectives.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-[44px] left-0 right-0 h-[2px] bg-white/10 -z-0" />
            <div className="lg:hidden absolute left-[31px] top-6 bottom-6 w-[2px] bg-white/10 -z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
              {[
                { step: '01', title: 'DEFINE', desc: 'Clarify research objectives, experimental parameters, and technical requirements.', icon: Target },
                { step: '02', title: 'EXPLORE', desc: 'Identify optimal wet-lab protocols or in-silico computational modeling strategies.', icon: Search },
                { step: '03', title: 'ANALYZE', desc: 'Execute biological assays or computational simulations to extract structured data.', icon: BarChart3 },
                { step: '04', title: 'INTERPRET', desc: 'Rigorously evaluate findings, validate statistical confidence, and compile insights.', icon: Microscope },
                { step: '05', title: 'DISCUSS', desc: 'Deliver publication-grade reports and determine future research directions.', icon: Share2 }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={item.step}
                    initial={{ opacity: 0, y: 25, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.12 }}
                    className="flex flex-row lg:flex-col items-start lg:items-center gap-6 lg:gap-0 text-left lg:text-center group"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#051329] border-2 border-white/20 group-hover:border-[#00E5FF] group-hover:shadow-[0_0_20px_rgba(0,229,255,0.35)] flex items-center justify-center shrink-0 mb-0 lg:mb-6 transition-all duration-300 shadow-sm">
                      <Icon size={26} className="text-[#00E5FF] group-hover:scale-110 transition-transform duration-300 stroke-[1.75]" />
                    </div>

                    <div className="flex-1 pt-1 lg:pt-0">
                      <div className="text-[#00E5FF] text-xs font-bold tracking-widest uppercase mb-2">
                        {item.step} &mdash; {item.title}
                      </div>
                      <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed max-w-xs lg:mx-auto">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 07 — RESEARCH CAPABILITIES (Dark Matrix) */}
      <section className="py-20 lg:py-28 px-6 bg-[#051329] border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <span className="text-[#00E5FF] text-xs font-bold tracking-[0.25em] uppercase mb-3 block">
              06 / RESEARCH CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Tools for Modern Scientific Research
            </h2>
            <p className="text-neutral-400 text-sm font-light mt-2 max-w-xl">
              Comprehensive analytical, laboratory, and computational tools powering research workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {[
              { label: 'Primer Design', desc: 'PCR & qPCR primer design and specificity modeling.', icon: Dna, href: '/research/in-silico/primer-design' },
              { label: 'SPSS Analysis', desc: 'Biostatistical modeling and data visualization.', icon: BarChart3, href: '/research/in-silico/spss-analysis' },
              { label: 'Molecular Docking', desc: 'Conformational binding affinity & target interaction.', icon: Share2, href: '/research/in-silico/molecular-docking' },
              { label: 'MD Simulations', desc: 'Structural trajectory dynamics & stability testing.', icon: Activity, href: '/research/in-silico/md-simulations' },
              { label: 'Sequence Alignment', desc: 'Multiple sequence alignment & phylogenetic profiling.', icon: GitMerge, href: '/research/in-silico/sequence-alignment' },
              { label: 'Molecular Biology', desc: 'Vaccine candidate engineering & aptamer selection.', icon: Beaker, href: '/research/molecular-biology' },
              { label: 'Biotechnology Research', desc: 'Microbial consortia & bioprocess engineering.', icon: FlaskConical, href: '/research/biotech' },
              { label: 'Computational Research', desc: 'Custom bioinformatics and in-silico workflows.', icon: Laptop, href: '/research/in-silico' }
            ].map((tool, i) => {
              const Icon = tool.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  onClick={() => navigate(tool.href)}
                  className="p-6 rounded-[20px] bg-[#030B17]/90 border border-white/10 hover:border-[#00E5FF]/60 hover:shadow-[0_10px_30px_rgba(0,229,255,0.15)] transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1.5"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-[#051329] border border-white/10 flex items-center justify-center text-[#00E5FF] group-hover:bg-[#00E5FF] group-hover:text-[#030B17] transition-all duration-300 shadow-sm overflow-hidden mb-4 shrink-0 relative">
                      <Icon size={24} className="stroke-[1.75] transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#00E5FF] transition-colors">
                      {tool.label}
                    </h3>
                    <p className="text-xs text-neutral-400 font-light leading-relaxed">
                      {tool.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-[#00E5FF] uppercase tracking-wider">
                    <span>LEARN MORE</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 08 — RESEARCH COLLABORATION CTA */}
      <section className="py-24 px-6 bg-[#030B17] relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?q=80&w=2787&auto=format&fit=crop" 
            alt="Molecular" 
            className="w-full h-full object-cover mix-blend-screen"
          />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
          <span className="text-[#00E5FF] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
            LET'S COLLABORATE
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Have a <span className="bg-gradient-to-r from-[#00E5FF] to-[#0066FF] bg-clip-text text-transparent">Research Project</span> in Mind?
          </h2>
          <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-10 max-w-2xl font-light">
            Tell us about your research requirements and discuss how INNOVAC BIOTECHNOLOGIES can support your project.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button 
              href="/quote"
              variant="primary" 
              className="bg-gradient-to-r from-[#0066FF] to-[#00C2FF] hover:from-[#0055D4] hover:to-[#00E5FF] text-white border-none px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-xl shadow-[0_0_20px_rgba(0,194,255,0.35)]"
            >
              DISCUSS YOUR PROJECT &rarr;
            </Button>
            <Button 
              href="/contact" 
              variant="dark" 
              className="border-white/30 text-white hover:border-[#00E5FF] px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-xl"
            >
              CONTACT US &rarr;
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 09 — RESEARCH FAQ */}
      <section className="py-24 px-6 bg-[#051329] border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#00E5FF] text-xs font-bold tracking-[0.25em] uppercase mb-3 block">
              COMMON QUESTIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Research Information</h2>
          </div>

          <div className="border-t border-white/10">
            {researchFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="border-b border-white/10">
                  <button 
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                  >
                    <span className="text-base sm:text-lg font-bold text-white group-hover:text-[#00E5FF] transition-colors pr-8">{faq.q}</span>
                    <ChevronDown size={20} className={cn("text-neutral-400 transition-transform duration-300 flex-shrink-0", isOpen && "rotate-180 text-[#00E5FF]")} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-neutral-300 leading-relaxed font-light text-sm sm:text-base">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 10 — FINAL CTA */}
      <section className="relative py-24 px-6 bg-[#030B17] overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop" 
            alt="DNA Molecular Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030B17] to-transparent" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Let's Explore Your Research Together.
          </h2>
          <p className="text-neutral-300 text-base md:text-lg mb-12 font-light">
            Discuss your scientific research requirements with INNOVAC BIOTECHNOLOGIES.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button 
              href="/quote"
              variant="primary" 
              className="bg-gradient-to-r from-[#0066FF] to-[#00C2FF] hover:from-[#0055D4] hover:to-[#00E5FF] text-white border-none px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-xl shadow-[0_0_20px_rgba(0,194,255,0.35)]"
            >
              DISCUSS YOUR PROJECT &rarr;
            </Button>
            <Button 
              href="/contact" 
              variant="dark" 
              className="border-white/30 text-white hover:border-[#00E5FF] px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-xl"
            >
              CONTACT US &rarr;
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
