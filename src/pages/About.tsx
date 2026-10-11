import { getCtaPath } from '@/src/config/ctaConfig';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, ChevronDown, ChevronRight, Microscope, FlaskConical, Dna, 
  Target, GraduationCap, Laptop, Share2, Layers, Binary, BarChart, 
  ShieldCheck, Activity, Users, Sparkles, ExternalLink, CheckCircle2 
} from 'lucide-react';
import { SEO } from '@/src/components/SEO';
import { Button } from '@/src/components/ui/Button';
import { Breadcrumb, PageLabel } from '@/src/components/ui/Breadcrumb';
import { ecosystemAreas, whatWeDo, ourApproach, whyInnovac, areasOfExpertise, aboutFaqs } from '@/src/data/about';
import { cn } from '@/src/lib/utils';
import { PageHeroIllustration } from '@/src/components/ui/PageHeroIllustration';
import { MolecularBackgroundEffect } from '@/src/components/ui/MolecularBackgroundEffect';
import { BASE44_ORDER_PORTAL_URL } from '@/src/config/portalConfig';

export default function About() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
        title="About INNOVAC BIOTECHNOLOGIES | Biotechnology & Research" 
        description="Learn about INNOVAC BIOTECHNOLOGIES and its biotechnology, molecular biology, research, reagent, internship, and workshop offerings."
      />

      {/* SECTION 01 — ABOUT HERO */}
      <section className="relative w-full pt-28 pb-16 lg:pt-32 lg:pb-24 px-6 bg-[#030B17] text-white overflow-hidden border-b border-[#00E5FF]/20">
        <MolecularBackgroundEffect particleColor="0, 229, 255" lineColor="0, 150, 255" particleCount={45} />

        {/* Subtle Ambient Radial Halos */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#030B17] via-[#05152F] to-[#030B17]" />
          <div className="absolute right-0 top-0 w-[60%] h-full bg-[radial-gradient(ellipse_at_70%_40%,rgba(0,229,255,0.14)_0%,transparent_65%)]" />
          <div className="absolute left-1/4 bottom-0 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,#00E5FF_1px,transparent_1px)] bg-[length:32px_32px]" />
        </div>

        <div className="max-w-[1400px] mx-auto relative z-20 w-full">
          <Breadcrumb items={[{ label: 'About Us' }]} accentColor="text-[#00E5FF]" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-6 lg:mt-2 w-full">
            <div className="max-w-3xl lg:w-3/5">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <PageLabel accentColor="text-[#00E5FF]">ABOUT INNOVAC BIOTECHNOLOGIES</PageLabel>
                <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-medium tracking-tight leading-[1.05] mb-6 text-white">
                  Science.<br />
                  Innovation.<br />
                  <span className="bg-gradient-to-r from-[#00E5FF] via-[#00C2FF] to-[#0066FF] bg-clip-text text-transparent">Impact.</span>
                </h1>
                <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mb-8 leading-relaxed font-light">
                  INNOVAC BIOTECHNOLOGIES brings together scientific services, research, reagents, and training across biotechnology and molecular biology.
                </p>
                
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <Button 
                    variant="primary" 
                    href={getCtaPath('EXPLORE_SERVICES')} 
                    className="bg-gradient-to-r from-[#0066FF] to-[#00C2FF] hover:from-[#0055D4] hover:to-[#00E5FF] text-white border-none px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-xl shadow-[0_0_25px_rgba(0,194,255,0.35)]"
                  >
                    EXPLORE OUR SERVICES &rarr;
                  </Button>
                  <Button 
                    variant="dark" 
                    href={getCtaPath('CONSULTATION_REQUEST')} 
                    className="border-white/30 text-white hover:border-[#00E5FF] px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-xl"
                  >
                    CONTACT US &rarr;
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 max-w-md">
                  <div>
                    <span className="text-xl font-bold text-[#00E5FF] block">5+</span>
                    <span className="text-xs text-neutral-400">Scientific Pillars</span>
                  </div>
                  <div>
                    <span className="text-xl font-bold text-[#00C2FF] block">100%</span>
                    <span className="text-xs text-neutral-400">Research Focus</span>
                  </div>
                  <div>
                    <span className="text-xl font-bold text-[#0066FF] block">Global</span>
                    <span className="text-xs text-neutral-400">Academic Reach</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Right Visual Area */}
            <PageHeroIllustration page="about" className="lg:w-2/5" />
          </div>
        </div>
      </section>

      {/* SECTION 02 — WHO WE ARE */}
      <section className="py-24 px-6 bg-[#051329] border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <span className="text-[#00E5FF] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
                01 / WHO WE ARE
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
                A Biotechnology Platform Built Around Science.
              </h2>
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-8 font-light">
                INNOVAC BIOTECHNOLOGIES operates across biotechnology, molecular biology, research, reagents, and scientific training. Our website brings these areas together so researchers, laboratories, students, and scientific professionals can explore relevant services, research activities, products, and learning opportunities.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-[#00E5FF] font-semibold text-xs tracking-wider uppercase hover:text-[#00C2FF] transition-colors group">
                DISCUSS A REQUIREMENT <ArrowRight size={16} className="transform group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
            <div className="w-full lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-[28px] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2825&auto=format&fit=crop" 
                  alt="Scientist in Laboratory" 
                  className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030B17]/80 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 — OUR SCIENTIFIC ECOSYSTEM */}
      <section className="py-24 px-6 bg-[#030B17] relative overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
            <span className="text-[#00E5FF] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
              02 / OUR ECOSYSTEM
            </span>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
                One Scientific Ecosystem. Multiple Ways to Explore.
              </h2>
              <p className="text-neutral-300 max-w-md text-base md:text-lg leading-relaxed font-light">
                INNOVAC BIOTECHNOLOGIES connects scientific services, research, reagents, internships, and workshops within one biotechnology-focused platform.
              </p>
            </div>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {ecosystemAreas.map((area, i) => {
               const icons = [Microscope, FlaskConical, Dna, Target, GraduationCap];
               const Icon = icons[i % icons.length];
               return (
                <Link to={area.href} key={i}>
                  <motion.div 
                    variants={itemVariants} 
                    className="bg-[#051329] p-8 rounded-[24px] border border-white/10 flex flex-col h-full hover:border-[#00E5FF]/60 hover:shadow-[0_12px_35px_rgba(0,229,255,0.15)] transition-all duration-300 hover:-translate-y-1.5 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center mb-6 text-[#00E5FF] group-hover:bg-[#00E5FF] group-hover:text-[#030B17] transition-all duration-300">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#00E5FF] transition-colors">{area.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-8 flex-grow font-light">{area.description}</p>
                    <div className="flex items-center justify-between text-[#00E5FF] mt-auto">
                      <span className="text-xs font-semibold tracking-wider uppercase group-hover:text-white transition-colors">Explore {area.title}</span>
                      <ArrowRight size={16} className="transform group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </motion.div>
                </Link>
               );
            })}
          </motion.div>
        </div>
      </section>

      {/* SECTION 04 — WHAT WE DO */}
      <section className="py-24 px-6 bg-[#051329] border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[#00E5FF] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
              03 / WHAT WE DO
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6 max-w-2xl">
              Science Across Multiple Disciplines.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {whatWeDo.map((area, i) => {
              const bgImages = [
                "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2960&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2787&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?q=80&w=2925&auto=format&fit=crop"
              ];
              const icons = [Dna, Microscope, Target, Layers, Laptop];
              const Icon = icons[i % icons.length];

              return (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#030B17] rounded-[24px] overflow-hidden border border-white/10 group flex flex-col h-full relative hover:border-[#00E5FF]/60 hover:shadow-[0_15px_40px_rgba(0,229,255,0.15)] transition-all duration-300 hover:-translate-y-1.5"
                >
                  <div className="h-40 overflow-hidden relative border-b border-white/10">
                    <img 
                      src={bgImages[i % bgImages.length]} 
                      alt={area.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030B17] via-transparent to-transparent" />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <div className="w-10 h-10 rounded-lg bg-[#00E5FF]/10 flex items-center justify-center text-[#00E5FF] mb-4">
                       <Icon size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00E5FF] transition-colors">{area.title}</h3>
                    <p className="text-neutral-400 text-xs md:text-sm mb-6 leading-relaxed flex-grow font-light">
                      {area.description}
                    </p>
                    <Link to="/contact" className="flex items-center justify-between text-neutral-300 group-hover:text-[#00E5FF] transition-colors mt-auto">
                       <span className="text-xs font-semibold uppercase tracking-wider">Inquire</span>
                       <div className="w-8 h-8 rounded-full border border-white/10 group-hover:border-[#00E5FF] flex items-center justify-center transition-colors">
                          <ArrowRight size={14} className="transform group-hover:translate-x-0.5 transition-transform" />
                       </div>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 05 — OUR APPROACH */}
      <section className="py-24 px-6 bg-[#030B17] border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-[#00E5FF] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
              04 / OUR APPROACH
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              From Scientific Need to Scientific Support.
            </h2>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed font-light">
              The INNOVAC ecosystem brings together services, research, reagents, and learning opportunities so visitors can find support relevant to their scientific requirements.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 relative mb-12">
            <div className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-[1px] bg-white/20" />
            
            {ourApproach.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 flex-1 flex flex-col items-start lg:items-center text-left lg:text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[#051329] border-2 border-[#00E5FF] flex items-center justify-center text-[#00E5FF] font-bold text-lg mb-6 shadow-[0_0_20px_rgba(0,229,255,0.35)]">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-4">{item.title}</h3>
                <p className="text-neutral-400 leading-relaxed text-sm font-light">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-xs text-neutral-400 italic">
               * This visual represents the website ecosystem, not a formal project-management methodology.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 06 — WHY INNOVAC */}
      <section className="py-24 px-6 bg-[#051329] relative overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
             <span className="text-[#00E5FF] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
              05 / WHY INNOVAC
            </span>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
                Built Around Scientific Needs.
              </h2>
              <p className="text-neutral-300 max-w-md text-base md:text-lg leading-relaxed font-light">
                INNOVAC BIOTECHNOLOGIES brings multiple scientific capabilities together across services, reagents, research, and training.
              </p>
            </div>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {whyInnovac.map((feature, i) => (
              <motion.div key={i} variants={itemVariants} className="bg-[#030B17] border border-white/10 p-8 rounded-[24px] hover:border-[#00E5FF]/60 hover:shadow-[0_10px_30px_rgba(0,229,255,0.15)] transition-all duration-300 hover:-translate-y-1.5">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00E5FF] animate-pulse" />
                  {feature.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed font-light">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 07 — OUR SCIENTIFIC AREAS */}
      <section className="py-24 px-6 bg-[#030B17] border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <span className="text-[#00E5FF] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
              06 / AREAS OF EXPERTISE
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              What We Work Around
            </h2>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {areasOfExpertise.map((area, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-[#051329] hover:border-[#00E5FF]/50 hover:bg-[#030B17] transition-all group cursor-default"
              >
                <div className="w-8 h-8 rounded-full bg-[#00E5FF]/10 flex items-center justify-center flex-shrink-0 text-[#00E5FF]">
                  <Binary size={14} />
                </div>
                <span className="text-xs sm:text-sm font-medium text-neutral-200 group-hover:text-[#00E5FF] transition-colors">{area}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 08 — SCIENTIFIC COMMUNITY */}
      <section className="py-24 px-6 bg-[#051329] border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
             <div className="w-full lg:w-1/2 order-2 lg:order-1">
               <div className="grid grid-cols-2 gap-4">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                  >
                    <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2940&auto=format&fit=crop" alt="Laboratory" className="w-full h-48 object-cover rounded-[24px] border border-white/10" />
                    <img src="https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?q=80&w=2787&auto=format&fit=crop" alt="DNA" className="w-full h-64 object-cover rounded-[24px] border border-white/10" />
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-4 pt-8"
                  >
                    <img src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop" alt="Microscope" className="w-full h-64 object-cover rounded-[24px] border border-white/10" />
                    <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2940&auto=format&fit=crop" alt="Computing" className="w-full h-48 object-cover rounded-[24px] border border-white/10" />
                  </motion.div>
               </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <span className="text-[#00E5FF] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
                07 / COMMUNITY
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
                Supporting Scientific Learning and Research.
              </h2>
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-8 font-light">
                Through services, reagents, research, internships, and workshops, INNOVAC BIOTECHNOLOGIES provides different ways for researchers, students, laboratories, and scientific professionals to engage with biotechnology and molecular science.
              </p>
              <Button 
                variant="primary" 
                href={getCtaPath('CONSULTATION_REQUEST')} 
                className="bg-gradient-to-r from-[#0066FF] to-[#00C2FF] hover:from-[#0055D4] hover:to-[#00E5FF] text-white border-none px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-xl shadow-[0_0_20px_rgba(0,194,255,0.35)]"
              >
                JOIN THE COMMUNITY &rarr;
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 09 — COMPANY OVERVIEW & EXPLORE MATRIX */}
      <section className="py-24 px-6 bg-[#030B17] border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
             <span className="text-[#00E5FF] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
              08 / INNOVAC
            </span>
          </div>
          
          <div className="bg-[#051329] rounded-[32px] border border-white/10 p-8 md:p-16 flex flex-col lg:flex-row gap-16 shadow-xl">
            <div className="lg:w-2/3">
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                INNOVAC BIOTECHNOLOGIES
              </h2>
              <div className="flex flex-wrap items-center gap-2 mb-8 text-xs font-semibold text-[#00E5FF] uppercase tracking-wider">
                 <span>Biotechnology</span>
                 <span className="text-white/20">|</span>
                 <span>Molecular Biology</span>
                 <span className="text-white/20">|</span>
                 <span>Research</span>
                 <span className="text-white/20">|</span>
                 <span>Reagents</span>
                 <span className="text-white/20">|</span>
                 <span>Training</span>
              </div>
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed max-w-2xl font-light">
                A biotechnology-focused organization bringing together scientific services, laboratory reagents, research activities, internships, and workshops. We aim to support the scientific community across multiple disciplines.
              </p>
            </div>
            
            <div className="lg:w-1/3">
              <div className="bg-[#030B17] p-8 rounded-[24px] h-full border border-white/10">
                 <h3 className="text-xs font-bold tracking-widest uppercase text-[#00E5FF] mb-6 pb-4 border-b border-white/10">EXPLORE INNOVAC</h3>
                 <ul className="space-y-4">
                   <li><Link to="/services" className="text-neutral-300 hover:text-[#00E5FF] transition-colors font-medium flex items-center justify-between text-sm">Services <ArrowRight size={16} /></Link></li>
                   <li><Link to="/reagents" className="text-neutral-300 hover:text-[#00E5FF] transition-colors font-medium flex items-center justify-between text-sm">Reagents <ArrowRight size={16} /></Link></li>
                   <li><Link to="/research" className="text-neutral-300 hover:text-[#00E5FF] transition-colors font-medium flex items-center justify-between text-sm">Research <ArrowRight size={16} /></Link></li>
                   <li><Link to="/internships" className="text-neutral-300 hover:text-[#00E5FF] transition-colors font-medium flex items-center justify-between text-sm">Internships <ArrowRight size={16} /></Link></li>
                   <li><Link to="/workshops" className="text-neutral-300 hover:text-[#00E5FF] transition-colors font-medium flex items-center justify-between text-sm">Workshops <ArrowRight size={16} /></Link></li>
                 </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — FAQ */}
      <section className="py-24 px-6 bg-[#051329]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00E5FF] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
              09 / FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              About INNOVAC
            </h2>
          </div>
          
          <div className="border-t border-white/10">
            {aboutFaqs.map((faq, index) => {
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
    </div>
  );
}
