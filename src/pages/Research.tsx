import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, ChevronRight, Beaker, Dna, Laptop, Microscope, Terminal, Target, Search, BarChart, Binary, Cpu, FlaskConical, Share2, Layers } from 'lucide-react';
import { SEO } from '@/src/components/SEO';
import { Button } from '@/src/components/ui/Button';
import { researchFaqs } from '@/src/data/research';
import { cn } from '@/src/lib/utils';
import { PageHeroIllustration } from '@/src/components/ui/PageHeroIllustration';

export default function Research() {
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
    <>
      <SEO 
        title="Biotechnology Research | INNOVAC BIOTECHNOLOGIES" 
        description="Explore biotechnology, molecular biology, and in-silico research activities from INNOVAC BIOTECHNOLOGIES, including vaccine design, aptamer detection, primer design, molecular docking, MD simulations, SPSS analysis, and sequence alignment."
      />

      {/* SECTION 01 — RESEARCH HERO */}
      <section className="relative w-full pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 bg-[#050505] text-white overflow-hidden">
        {/* Subtle Radial Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#050505]" />
          <div className="absolute right-0 top-0 w-[60%] h-full bg-[radial-gradient(ellipse_at_70%_40%,rgba(255,77,0,0.08)_0%,transparent_65%)]" />
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] bg-[length:32px_32px]" />
        </div>

        <div className="max-w-[1400px] mx-auto relative z-20 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-12 lg:mt-0 w-full">
            <div className="max-w-3xl lg:w-3/5">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-2 text-[10px] font-semibold text-neutral-400 uppercase tracking-widest mb-12">
                  <Link to="/" className="hover:text-white transition-colors">Home</Link>
                  <ChevronRight size={12} />
                  <span className="text-white">Research</span>
                </div>
                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#FF4D00] mb-6">
                  OUR RESEARCH
                </p>
                <h1 className="text-5xl md:text-7xl lg:text-[76px] font-medium tracking-tight leading-[1.05] mb-8 text-white">
                  Exploring.<br />
                  Discovering.<br />
                  <span className="text-[#FF4D00]">Innovating.</span>
                </h1>
                <p className="text-lg text-neutral-300 max-w-2xl mb-16 leading-relaxed font-light">
                  Our research activities span biotechnology, molecular biology, and in-silico research, combining experimental and computational approaches to support scientific discovery.
                </p>
                
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="primary" className="bg-[#FF4D00] hover:bg-[#E64500] text-white border-none px-8 py-4 text-sm font-semibold uppercase tracking-wider">
                    EXPLORE OUR RESEARCH &rarr;
                  </Button>
                  <Button variant="outline" className="text-white border-white/30 hover:bg-white hover:text-black px-8 py-4 text-sm font-semibold uppercase tracking-wider">
                    DISCUSS YOUR PROJECT &rarr;
                  </Button>
                </div>
              </motion.div>
            </div>
            
            {/* Right Visual Area */}
            <PageHeroIllustration page="research" className="lg:w-2/5" />
          </div>
        </div>
      </section>

      {/* SECTION 02 — RESEARCH AREAS */}
      <section id="research-areas" className="py-24 px-6 bg-[#F5F5F3]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[#FF4D00] text-sm font-semibold tracking-widest uppercase mb-4 block">
              01 / RESEARCH AREAS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#050505] leading-tight mb-6">
              Our Research Areas
            </h2>
            <p className="text-neutral-600 max-w-2xl text-lg leading-relaxed">
              We focus on cutting-edge research domains to drive innovation, generate impactful results, and contribute to scientific advancement.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Card 01 - Biotech */}
            <motion.div variants={itemVariants} className="bg-white rounded-[24px] overflow-hidden border border-[#D8D8D5] group flex flex-col h-full relative">
              <div className="h-48 overflow-hidden relative border-b border-[#D8D8D5]">
                <img 
                  src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2960&auto=format&fit=crop" 
                  alt="Biotechnology" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#FF4D00]/10 flex items-center justify-center">
                    <FlaskConical size={24} className="text-[#FF4D00]" />
                  </div>
                  <span className="text-3xl font-light text-neutral-300">01</span>
                </div>
                <h3 className="text-2xl font-bold text-[#050505] mb-4">Biotechnology</h3>
                <p className="text-neutral-600 mb-8 leading-relaxed flex-grow">
                  Research focused on consortium development for biogas and other climatic processes.
                </p>
                <Link to="/research/biotech" className="flex items-center gap-2 text-[#050505] font-semibold text-sm tracking-wider uppercase group-hover:text-[#FF4D00] transition-colors mt-auto w-fit">
                  EXPLORE RESEARCH <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#FF4D00] rounded-[24px] pointer-events-none transition-colors duration-500" />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-0 transition-opacity duration-300 shadow-xl pointer-events-none rounded-[24px]" />
            </motion.div>

            {/* Card 02 - Molecular Biology */}
            <motion.div variants={itemVariants} className="bg-white rounded-[24px] overflow-hidden border border-[#D8D8D5] group flex flex-col h-full relative">
              <div className="h-48 overflow-hidden relative border-b border-[#D8D8D5]">
                <img 
                  src="https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?q=80&w=2787&auto=format&fit=crop" 
                  alt="Molecular Biology" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#FF4D00]/10 flex items-center justify-center">
                    <Dna size={24} className="text-[#FF4D00]" />
                  </div>
                  <span className="text-3xl font-light text-neutral-300">02</span>
                </div>
                <h3 className="text-2xl font-bold text-[#050505] mb-4">Molecular Biology</h3>
                <p className="text-neutral-600 mb-8 leading-relaxed flex-grow">
                  Molecular biology research focused on vaccine design and aptamer detection.
                </p>
                <Link to="/research/molecular-biology" className="flex items-center gap-2 text-[#050505] font-semibold text-sm tracking-wider uppercase group-hover:text-[#FF4D00] transition-colors mt-auto w-fit">
                  EXPLORE RESEARCH <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#FF4D00] rounded-[24px] pointer-events-none transition-colors duration-500" />
            </motion.div>

            {/* Card 03 - In-silico Research */}
            <motion.div variants={itemVariants} className="bg-white rounded-[24px] overflow-hidden border border-[#D8D8D5] group flex flex-col h-full relative">
              <div className="h-48 overflow-hidden relative border-b border-[#D8D8D5]">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop" 
                  alt="In-silico Research" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#FF4D00]/10 flex items-center justify-center">
                    <Laptop size={24} className="text-[#FF4D00]" />
                  </div>
                  <span className="text-3xl font-light text-neutral-300">03</span>
                </div>
                <h3 className="text-2xl font-bold text-[#050505] mb-4">In-silico Research</h3>
                <p className="text-neutral-600 mb-8 leading-relaxed flex-grow">
                  Computational research supporting molecular and biological studies.
                </p>
                <Link to="/research/in-silico" className="flex items-center gap-2 text-[#050505] font-semibold text-sm tracking-wider uppercase group-hover:text-[#FF4D00] transition-colors mt-auto w-fit">
                  EXPLORE RESEARCH <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#FF4D00] rounded-[24px] pointer-events-none transition-colors duration-500" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 03 — BIOTECH RESEARCH */}
      <section className="py-24 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] md:h-[600px] rounded-[24px] overflow-hidden order-2 lg:order-1 border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2787&auto=format&fit=crop" 
                alt="Biotechnology Research" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-50" />
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="text-[#FF4D00] text-sm font-semibold tracking-widest uppercase mb-4 block">
                02 / BIOTECHNOLOGY
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                <span className="text-[#FF4D00]">Biotechnology</span> Research
              </h2>
              <p className="text-neutral-400 text-lg leading-relaxed mb-12">
                Our biotechnology research includes consortium development for biogas and other climatic processes.
              </p>
              
              <div className="bg-[#050505] border border-white/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">Consortia Development</h3>
                <p className="text-neutral-400 mb-8 leading-relaxed">
                  Research activities focused on consortium development for biogas and other climatic processes.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-white tracking-wider uppercase hover:text-[#FF4D00] transition-colors">
                  DISCUSS A RESEARCH PROJECT <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04 — MOLECULAR BIOLOGY RESEARCH */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 sticky top-32">
              <span className="text-[#FF4D00] text-sm font-semibold tracking-widest uppercase mb-4 block">
                03 / MOLECULAR BIOLOGY
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#050505] leading-tight mb-6">
                Molecular Biology Research
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed mb-10">
                Research activities focused on molecular approaches including vaccine design and aptamer detection.
              </p>
              <Button variant="primary" className="bg-[#FF4D00] hover:bg-[#E64500] text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider">
                EXPLORE MOLECULAR RESEARCH &rarr;
              </Button>
            </div>
            
            <div className="lg:col-span-7 flex flex-col gap-8">
              {/* Card 01 */}
              <div className="bg-neutral-50 rounded-[24px] border border-[#D8D8D5] p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center group hover:shadow-xl transition-all duration-300">
                <div className="w-full md:w-1/2 h-48 md:h-full min-h-[200px] rounded-xl overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1614935151651-0bea6508db6b?q=80&w=2925&auto=format&fit=crop" alt="Vaccine Design" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-[#050505] mb-4">Vaccine Design</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Research support focused on vaccine design and molecular biology approaches.
                  </p>
                </div>
              </div>

              {/* Card 02 */}
              <div className="bg-neutral-50 rounded-[24px] border border-[#D8D8D5] p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center group hover:shadow-xl transition-all duration-300">
                <div className="w-full md:w-1/2 h-48 md:h-full min-h-[200px] rounded-xl overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=2959&auto=format&fit=crop" alt="Aptamer Detection" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-[#050505] mb-4">Aptamer Detection</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Research focused on aptamer detection within molecular biology applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05 — IN-SILICO RESEARCH */}
      <section className="py-24 px-6 bg-[#050505] relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop" alt="Background Texture" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#050505]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
            <span className="text-[#FF4D00] text-sm font-semibold tracking-widest uppercase mb-4 block">
              04 / IN-SILICO RESEARCH
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Computational Research.<br />
              <span className="text-[#FF4D00]">Molecular Insight.</span>
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed max-w-2xl">
              Our in-silico research activities use computational approaches to support molecular biology and scientific research.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
            {[
              { num: '01', title: 'Primer Design', desc: 'Custom primer design supporting molecular biology and PCR-related research workflows.', icon: Target },
              { num: '02', title: 'SPSS Analysis', desc: 'Statistical analysis supporting research data interpretation.', icon: BarChart },
              { num: '03', title: 'Molecular Docking', desc: 'Computational molecular docking for studying molecular interactions.', icon: Share2 },
              { num: '04', title: 'MD Simulations', desc: 'Molecular dynamics simulations for computational research.', icon: Layers },
              { num: '05', title: 'Sequence Alignment', desc: 'Sequence alignment for comparative molecular and biological analysis.', icon: Binary },
              { num: '06', title: 'Other In-silico Research', desc: 'Additional computational research solutions based on project requirements.', icon: Terminal }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.num} className="group cursor-pointer">
                  <div className="flex gap-6 items-start">
                    <div className="mt-1">
                      <Icon size={24} className="text-[#FF4D00]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-neutral-500 font-mono text-sm">{item.num}</span>
                        <h3 className="text-xl font-bold text-white group-hover:text-[#FF4D00] transition-colors">{item.title}</h3>
                      </div>
                      <p className="text-neutral-400 leading-relaxed mb-6">
                        {item.desc}
                      </p>
                      <div className="h-[1px] w-full bg-white/10 group-hover:bg-[#FF4D00]/50 transition-colors relative overflow-hidden">
                         <motion.div 
                           className="absolute top-0 left-0 h-full w-full bg-[#FF4D00]"
                           initial={{ x: '-100%' }}
                           whileHover={{ x: 0 }}
                           transition={{ duration: 0.4 }}
                         />
                      </div>
                      <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                        <ArrowRight size={20} className="text-[#FF4D00]" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 06 — RESEARCH WORKFLOW */}
      <section className="py-24 px-6 bg-[#F5F5F3]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[#FF4D00] text-sm font-semibold tracking-widest uppercase mb-4 block">
              05 / RESEARCH APPROACH
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#050505] leading-tight mb-6 max-w-2xl">
              From Research Question to Scientific Insight.
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed max-w-2xl">
              Research projects can combine experimental and computational approaches according to the needs of the study.
            </p>
          </div>

          <div className="relative">
            {/* Horizontal connecting line (Desktop only) */}
            <div className="hidden lg:block absolute top-[40px] left-0 w-full h-[1px] bg-[#D8D8D5]" />
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6 relative">
              {[
                { title: 'DEFINE', desc: 'Research question and project requirements.', icon: Target },
                { title: 'EXPLORE', desc: 'Relevant experimental or computational approaches.', icon: Search },
                { title: 'ANALYZE', desc: 'Scientific data and molecular information.', icon: BarChart },
                { title: 'INTERPRET', desc: 'Evaluate findings and research insights.', icon: Microscope },
                { title: 'DISCUSS', desc: 'Determine appropriate next steps for the project.', icon: Share2 }
              ].map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-start lg:items-center text-left lg:text-center relative z-10"
                  >
                    <div className="w-20 h-20 rounded-full bg-white border border-[#D8D8D5] flex items-center justify-center mb-6 lg:mx-auto">
                      <Icon size={32} className="text-[#FF4D00] stroke-[1.5]" />
                    </div>
                    <div className="text-[#FF4D00] text-xs font-bold tracking-widest uppercase mb-3">
                      0{index + 1} &mdash; {step.title}
                    </div>
                    <p className="text-neutral-600 text-sm leading-relaxed max-w-[200px]">
                      {step.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 07 — RESEARCH TOOLS & TECHNIQUES */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#FF4D00] text-sm font-semibold tracking-widest uppercase mb-4 block">
              06 / RESEARCH CAPABILITIES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#050505]">
              Tools for Modern Scientific Research.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {[
              { label: 'Primer Design', icon: Binary },
              { label: 'SPSS Analysis', icon: BarChart },
              { label: 'Molecular Docking', icon: Share2 },
              { label: 'MD Simulations', icon: Layers },
              { label: 'Sequence Alignment', icon: Dna },
              { label: 'Molecular Biology', icon: Beaker },
              { label: 'Biotechnology Research', icon: FlaskConical },
              { label: 'Computational Research', icon: Laptop }
            ].map((tool, i) => {
              const Icon = tool.icon;
              return (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-neutral-50 border border-[#D8D8D5] flex items-center justify-center mb-4 group-hover:border-[#FF4D00] group-hover:bg-[#FF4D00]/5 transition-colors">
                    <Icon size={28} className="text-[#FF4D00] stroke-[1.5]" />
                  </div>
                  <span className="text-[#050505] font-medium text-sm">{tool.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 08 — RESEARCH COLLABORATION */}
      <section className="py-24 px-6 bg-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?q=80&w=2787&auto=format&fit=crop" 
            alt="Molecular" 
            className="w-full h-full object-cover mix-blend-screen"
          />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
          <span className="text-[#FF4D00] text-sm font-semibold tracking-widest uppercase mb-4 block">
            LET'S COLLABORATE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Have a <span className="text-[#FF4D00]">Research Project</span> in Mind?
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed mb-10 max-w-2xl">
            Tell us about your research requirements and discuss how INNOVAC BIOTECHNOLOGIES can support your project.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" className="bg-[#FF4D00] hover:bg-[#E64500] text-white border-none px-8 py-4 text-sm font-semibold uppercase tracking-wider">
              DISCUSS YOUR PROJECT &rarr;
            </Button>
            <Button variant="outline" className="text-white border-white/30 hover:bg-white hover:text-black px-8 py-4 text-sm font-semibold uppercase tracking-wider">
              CONTACT US &rarr;
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 09 — RESEARCH QUESTIONS / FAQ */}
      <section className="py-24 px-6 bg-[#F5F5F3]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#050505] mb-12 text-center">Research Information</h2>
          <div className="border-t border-[#D8D8D5]">
            {researchFaqs.map((faq, index) => {
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

      {/* SECTION 10 — FINAL CTA */}
      <section className="relative py-24 px-6 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop" 
            alt="DNA Molecular Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Explore Your Research Together.
          </h2>
          <p className="text-neutral-400 text-lg mb-12">
            Discuss your scientific research requirements with INNOVAC BIOTECHNOLOGIES.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" className="bg-[#FF4D00] hover:bg-[#E64500] text-white border-none px-8 py-4 text-sm font-semibold uppercase tracking-wider">
              DISCUSS YOUR PROJECT &rarr;
            </Button>
            <Button variant="outline" className="text-white border-white/30 hover:bg-white hover:text-black px-8 py-4 text-sm font-semibold uppercase tracking-wider">
              CONTACT US &rarr;
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
