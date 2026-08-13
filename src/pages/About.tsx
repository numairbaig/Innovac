import { getCtaPath } from '@/src/config/ctaConfig';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, ChevronRight, Microscope, FlaskConical, Dna, Target, GraduationCap, Laptop, Share2, Layers, Binary, BarChart } from 'lucide-react';
import { SEO } from '@/src/components/SEO';
import { Button } from '@/src/components/ui/Button';
import { ecosystemAreas, whatWeDo, ourApproach, whyInnovac, areasOfExpertise, aboutFaqs } from '@/src/data/about';
import { cn } from '@/src/lib/utils';
import { ScientificHeroVisual } from '@/src/components/ui/ScientificHeroVisual'; // legacy
import { PageHeroIllustration } from '@/src/components/ui/PageHeroIllustration';

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
    <>
      <SEO 
        title="About INNOVAC BIOTECHNOLOGIES | Biotechnology & Research" 
        description="Learn about INNOVAC BIOTECHNOLOGIES and its biotechnology, molecular biology, research, reagent, internship, and workshop offerings."
      />

      {/* SECTION 01 — ABOUT HERO */}
      <section className="relative w-full pt-24 pb-16 lg:pt-28 lg:pb-20 px-6 bg-[#050505] text-white overflow-hidden">
        {/* Subtle Radial Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#050505]" />
          <div className="absolute right-0 top-0 w-[60%] h-full bg-[radial-gradient(ellipse_at_70%_40%,rgba(255,77,0,0.08)_0%,transparent_65%)]" />
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] bg-[length:32px_32px]" />
        </div>

        <div className="max-w-[1400px] mx-auto relative z-20 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-4 lg:mt-0 w-full">
            <div className="max-w-3xl lg:w-3/5">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-2 text-[10px] font-semibold text-neutral-400 uppercase tracking-widest mb-6">
                  <Link to="/" className="hover:text-white transition-colors">Home</Link>
                  <ChevronRight size={12} />
                  <span className="text-white">About Us</span>
                </div>
                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#FF4D00] mb-6">
                  ABOUT INNOVAC
                </p>
                <h1 className="text-5xl md:text-7xl lg:text-[76px] font-medium tracking-tight leading-[1.05] mb-8 text-white">
                  Science.<br />
                  Innovation.<br />
                  <span className="text-[#FF4D00]">Impact.</span>
                </h1>
                <p className="text-lg text-neutral-300 max-w-2xl mb-16 leading-relaxed font-light">
                  INNOVAC BIOTECHNOLOGIES brings together scientific services, research, reagents, and training across biotechnology and molecular biology.
                </p>
                
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="primary" href={getCtaPath('EXPLORE_SERVICES')} className="bg-[#FF4D00] hover:bg-[#E64500] text-white border-none px-8 py-4 text-sm font-semibold uppercase tracking-wider">
                    EXPLORE OUR SERVICES &rarr;
                  </Button>
                  <Button variant="outline" href={getCtaPath('CONSULTATION_REQUEST')} className="text-white border-white/30 hover:bg-white hover:text-black px-8 py-4 text-sm font-semibold uppercase tracking-wider">
                    CONTACT US &rarr;
                  </Button>
                </div>
              </motion.div>
            </div>
            
            {/* Right Visual Area */}
            <PageHeroIllustration page="about" className="lg:w-2/5" />
          </div>
        </div>
      </section>

      {/* SECTION 02 — WHO WE ARE */}
      <section className="py-24 px-6 bg-[#F5F5F3]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <span className="text-[#FF4D00] text-sm font-semibold tracking-widest uppercase mb-4 block">
                01 / WHO WE ARE
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#050505] leading-tight mb-8">
                A Biotechnology Platform Built Around Science.
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed mb-8">
                INNOVAC BIOTECHNOLOGIES operates across biotechnology, molecular biology, research, reagents, and scientific training. Our website brings these areas together so researchers, laboratories, students, and scientific professionals can explore relevant services, research activities, products, and learning opportunities.
              </p>
              <Link to="/contact" className="flex items-center gap-2 text-[#050505] font-semibold text-xs tracking-wider uppercase hover:text-[#FF4D00] transition-colors group">
                DISCUSS A REQUIREMENT <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="w-full lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-[24px] overflow-hidden"
              >
                <img 
                  src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2825&auto=format&fit=crop" 
                  alt="Scientist in Laboratory" 
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 border border-[#050505]/10 rounded-[24px] pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 — OUR SCIENTIFIC ECOSYSTEM */}
      <section className="py-24 px-6 bg-[#050505] relative overflow-hidden">
         <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1614935151651-0bea6508db6b?q=80&w=2925&auto=format&fit=crop" 
            alt="Scientific Background" 
            className="w-full h-full object-cover mix-blend-overlay grayscale"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
            <span className="text-[#FF4D00] text-sm font-semibold tracking-widest uppercase mb-4 block">
              02 / OUR ECOSYSTEM
            </span>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
                One Scientific Ecosystem. Multiple Ways to Explore.
              </h2>
              <p className="text-neutral-400 max-w-md text-lg leading-relaxed">
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
                    className="bg-white/5 backdrop-blur-sm p-8 rounded-[24px] border border-white/10 flex flex-col h-full hover:border-[#FF4D00]/50 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#FF4D00]/10 flex items-center justify-center mb-6">
                      <Icon size={24} className="text-[#FF4D00]" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{area.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-8 flex-grow">{area.description}</p>
                    <div className="flex items-center justify-between text-[#FF4D00] mt-auto">
                      <span className="text-xs font-semibold tracking-wider uppercase group-hover:text-white transition-colors">Explore {area.title}</span>
                      <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                </Link>
               );
            })}
          </motion.div>
        </div>
      </section>

      {/* SECTION 04 — WHAT WE DO */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[#FF4D00] text-sm font-semibold tracking-widest uppercase mb-4 block">
              03 / WHAT WE DO
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#050505] leading-tight mb-6 max-w-2xl">
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
                  className="bg-[#F5F5F3] rounded-[24px] overflow-hidden border border-[#D8D8D5] group flex flex-col h-full relative"
                >
                  <div className="h-40 overflow-hidden relative border-b border-[#D8D8D5]">
                    <img 
                      src={bgImages[i % bgImages.length]} 
                      alt={area.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="mb-4">
                       <Icon size={24} className="text-[#FF4D00]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#050505] mb-4">{area.title}</h3>
                    <p className="text-neutral-600 text-sm mb-8 leading-relaxed flex-grow">
                      {area.description}
                    </p>
                    <Link to="/contact" className="flex items-center justify-between text-[#050505] group-hover:text-[#FF4D00] transition-colors mt-auto">
                       <div className="w-8 h-8 rounded-full border border-[#D8D8D5] group-hover:border-[#FF4D00] flex items-center justify-center transition-colors">
                          <ArrowRight size={14} className="transform group-hover:translate-x-px transition-transform" />
                       </div>
                    </Link>
                  </div>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#FF4D00] rounded-[24px] pointer-events-none transition-colors duration-500" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 05 — OUR APPROACH */}
      <section className="py-24 px-6 bg-[#F5F5F3]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-[#FF4D00] text-sm font-semibold tracking-widest uppercase mb-4 block">
              04 / OUR APPROACH
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#050505] leading-tight mb-6">
              From Scientific Need to Scientific Support.
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed">
              The INNOVAC ecosystem brings together services, research, reagents, and learning opportunities so visitors can find support relevant to their scientific requirements.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 relative mb-12">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-[1px] bg-[#D8D8D5]" />
            
            {ourApproach.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 flex-1 flex flex-col items-start lg:items-center text-left lg:text-center"
              >
                <div className="w-14 h-14 rounded-full bg-white border-2 border-[#FF4D00] flex items-center justify-center text-[#FF4D00] font-bold text-lg mb-6 shadow-sm">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-[#050505] mb-4">{item.title}</h3>
                <p className="text-neutral-600 leading-relaxed text-sm">
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
      <section className="py-24 px-6 bg-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop" 
            alt="Molecular Background" 
            className="w-full h-full object-cover mix-blend-screen grayscale"
          />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
             <span className="text-[#FF4D00] text-sm font-semibold tracking-widest uppercase mb-4 block">
              05 / WHY INNOVAC
            </span>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
                Built Around Scientific Needs.
              </h2>
              <p className="text-neutral-400 max-w-md text-lg leading-relaxed">
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
              <motion.div key={i} variants={itemVariants} className="bg-white/5 border border-white/10 p-8 rounded-[24px] hover:border-[#FF4D00]/50 transition-colors">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FF4D00]" />
                  {feature.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 07 — OUR SCIENTIFIC AREAS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <span className="text-[#FF4D00] text-sm font-semibold tracking-widest uppercase mb-4 block">
              06 / AREAS OF EXPERTISE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#050505] leading-tight">
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
                className="flex items-center gap-3 p-4 rounded-xl border border-[#D8D8D5] bg-[#F5F5F3] hover:border-[#FF4D00]/50 hover:bg-white transition-all group cursor-default"
              >
                <div className="w-8 h-8 rounded-full bg-[#FF4D00]/10 flex items-center justify-center flex-shrink-0">
                  <Binary size={14} className="text-[#FF4D00]" />
                </div>
                <span className="text-sm font-medium text-[#050505] group-hover:text-[#FF4D00] transition-colors">{area}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 08 — SCIENTIFIC COMMUNITY */}
      <section className="py-24 px-6 bg-[#050505]">
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
                    <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2940&auto=format&fit=crop" alt="Laboratory" className="w-full h-48 object-cover rounded-[24px]" />
                    <img src="https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?q=80&w=2787&auto=format&fit=crop" alt="DNA" className="w-full h-64 object-cover rounded-[24px]" />
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-4 pt-8"
                  >
                    <img src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop" alt="Microscope" className="w-full h-64 object-cover rounded-[24px]" />
                    <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2940&auto=format&fit=crop" alt="Computing" className="w-full h-48 object-cover rounded-[24px]" />
                  </motion.div>
               </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <span className="text-[#FF4D00] text-sm font-semibold tracking-widest uppercase mb-4 block">
                07 / COMMUNITY
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
                Supporting Scientific Learning and Research.
              </h2>
              <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                Through services, reagents, research, internships, and workshops, INNOVAC BIOTECHNOLOGIES provides different ways for researchers, students, laboratories, and scientific professionals to engage with biotechnology and molecular science.
              </p>
              <Button variant="primary" href={getCtaPath('CONSULTATION_REQUEST')} className="bg-[#FF4D00] hover:bg-[#E64500] text-white border-none px-8 py-4 text-sm font-semibold uppercase tracking-wider">
                JOIN THE COMMUNITY &rarr;
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 09 — COMPANY INFORMATION */}
      <section className="py-24 px-6 bg-[#F5F5F3]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
             <span className="text-[#FF4D00] text-sm font-semibold tracking-widest uppercase mb-4 block">
              08 / INNOVAC
            </span>
          </div>
          
          <div className="bg-white rounded-[32px] border border-[#D8D8D5] p-8 md:p-16 flex flex-col lg:flex-row gap-16 shadow-sm">
            <div className="lg:w-2/3">
               <h2 className="text-3xl md:text-4xl font-bold text-[#050505] mb-6">
                INNOVAC BIOTECHNOLOGIES
              </h2>
              <div className="flex flex-wrap items-center gap-2 mb-8 text-sm font-semibold text-[#050505] uppercase tracking-wider">
                 <span>Biotechnology</span>
                 <span className="text-[#D8D8D5]">|</span>
                 <span>Molecular Biology</span>
                 <span className="text-[#D8D8D5]">|</span>
                 <span>Research</span>
                 <span className="text-[#D8D8D5]">|</span>
                 <span>Reagents</span>
                 <span className="text-[#D8D8D5]">|</span>
                 <span>Training</span>
              </div>
              <p className="text-neutral-600 text-lg leading-relaxed max-w-2xl">
                A biotechnology-focused organization bringing together scientific services, laboratory reagents, research activities, internships, and workshops. We aim to support the scientific community across multiple disciplines.
              </p>
            </div>
            
            <div className="lg:w-1/3">
              <div className="bg-[#F5F5F3] p-8 rounded-[24px] h-full border border-[#D8D8D5]">
                 <h3 className="text-sm font-semibold tracking-widest uppercase text-[#050505] mb-6 pb-4 border-b border-[#D8D8D5]">EXPLORE</h3>
                 <ul className="space-y-4">
                   <li><Link to="/services" className="text-neutral-600 hover:text-[#FF4D00] transition-colors font-medium flex items-center justify-between">Services <ArrowRight size={16} /></Link></li>
                   <li><Link to="/reagents" className="text-neutral-600 hover:text-[#FF4D00] transition-colors font-medium flex items-center justify-between">Reagents <ArrowRight size={16} /></Link></li>
                   <li><Link to="/research" className="text-neutral-600 hover:text-[#FF4D00] transition-colors font-medium flex items-center justify-between">Research <ArrowRight size={16} /></Link></li>
                   <li><Link to="/internships" className="text-neutral-600 hover:text-[#FF4D00] transition-colors font-medium flex items-center justify-between">Internships <ArrowRight size={16} /></Link></li>
                   <li><Link to="/workshops" className="text-neutral-600 hover:text-[#FF4D00] transition-colors font-medium flex items-center justify-between">Workshops <ArrowRight size={16} /></Link></li>
                 </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — CONTACT / COLLABORATION CTA */}
      <section className="relative py-24 px-6 bg-[#050505] overflow-hidden">
         <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?q=80&w=2787&auto=format&fit=crop" 
            alt="Molecular Background" 
            className="w-full h-full object-cover mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="text-[#FF4D00] text-sm font-semibold tracking-widest uppercase mb-4 block">
              LET'S WORK TOGETHER
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Have a <span className="text-[#FF4D00]">Scientific Requirement</span>?
            </h2>
            <p className="text-neutral-400 text-lg mb-12 leading-relaxed">
              Tell us what you are looking for and discuss the appropriate scientific service, research area, reagent, internship, or workshop with INNOVAC BIOTECHNOLOGIES.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" href={getCtaPath('CONSULTATION_REQUEST')} className="bg-[#FF4D00] hover:bg-[#E64500] text-white border-none px-8 py-4 text-sm font-semibold uppercase tracking-wider">
                CONTACT US &rarr;
              </Button>
              <Button variant="outline" href={getCtaPath('REQUEST_QUOTE')} className="text-white border-white/30 hover:bg-white hover:text-black px-8 py-4 text-sm font-semibold uppercase tracking-wider">
                REQUEST A QUOTE &rarr;
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11 — FAQ */}
      <section className="py-24 px-6 bg-[#F5F5F3]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#FF4D00] text-sm font-semibold tracking-widest uppercase mb-4 block">
              09 / FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#050505]">
              About INNOVAC
            </h2>
          </div>
          
          <div className="border-t border-[#D8D8D5]">
            {aboutFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="border-b border-[#D8D8D5]">
                  <button 
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                  >
                    <span className="text-lg font-bold text-[#050505] group-hover:text-[#FF4D00] transition-colors pr-8">{faq.q}</span>
                    <ChevronDown size={20} className={cn("text-neutral-400 transition-transform duration-300 flex-shrink-0", isOpen && "rotate-180 text-[#FF4D00]")} />
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
                        <p className="pb-6 text-neutral-600 leading-relaxed">
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

      {/* SECTION 12 — FINAL CTA */}
      <section className="relative py-24 px-6 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=2959&auto=format&fit=crop" 
            alt="Molecular Background" 
            className="w-full h-full object-cover mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Science. Innovation. <span className="text-[#FF4D00]">What's Next?</span>
          </h2>
          <p className="text-neutral-400 text-lg mb-12 max-w-2xl">
            Explore the INNOVAC BIOTECHNOLOGIES ecosystem and find the scientific support relevant to your next project.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" href={getCtaPath('EXPLORE_SERVICES')} className="bg-[#FF4D00] hover:bg-[#E64500] text-white border-none px-8 py-4 text-sm font-semibold uppercase tracking-wider">
              EXPLORE SERVICES &rarr;
            </Button>
            <Button variant="outline" href={getCtaPath('CONSULTATION_REQUEST')} className="text-white border-white/30 hover:bg-white hover:text-black px-8 py-4 text-sm font-semibold uppercase tracking-wider">
              CONTACT US &rarr;
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
