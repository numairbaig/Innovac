import { getCtaPath } from '@/src/config/ctaConfig';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, ChevronDown, ChevronRight, CheckCircle2, Dna, Microscope, 
  FlaskConical, Target, Binary, Laptop, Layers, Share2, Search, Cpu, Database, 
  Network, Sparkles, ExternalLink 
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/Button';
import { internshipAreas, interestOptions, learningAreas, internshipFaqs } from '../data/internships';
import { cn } from '../lib/utils';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import { PageHeroIllustration } from '@/src/components/ui/PageHeroIllustration';
import { Breadcrumb, PageLabel } from '@/src/components/ui/Breadcrumb';
import { MolecularBackgroundEffect } from '@/src/components/ui/MolecularBackgroundEffect';
import { BASE44_ORDER_PORTAL_URL } from '@/src/config/portalConfig';

export default function Internships() {
  const { user } = useAuth();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [institution, setInstitution] = useState('');
  const [background, setBackground] = useState('');
  const [area, setArea] = useState('');
  const [message, setMessage] = useState('');
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    try {
      const { error } = await supabase.from('enquiries').insert({
        name: fullName,
        email: email,
        subject: `Internship Application - ${area}`,
        message: `Institution: ${institution}\nBackground: ${background}\nPhone: ${phone}\n\nMessage: ${message}`,
        type: 'Internship',
        status: 'New'
      });

      if (error) throw error;
      setFormState('success');
    } catch (err) {
      console.warn('Failed to insert internship to Supabase, fallback to simulation:', err);
      try {
        const localApplications = JSON.parse(localStorage.getItem('internship_applications') || '[]');
        localApplications.push({
          id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(),
          name: fullName,
          email: email,
          phone: phone,
          institution: institution,
          background: background,
          area: area,
          message: message,
          status: 'Submitted',
          created_at: new Date().toISOString()
        });
        localStorage.setItem('internship_applications', JSON.stringify(localApplications));
        setFormState('success');
      } catch (storageErr) {
        setFormState('error');
      }
    }
  };

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
        title="Biotechnology Internships | INNOVAC BIOTECHNOLOGIES" 
        description="Explore internship opportunities related to biotechnology, molecular biology, laboratory services, research, protein and peptide science, and computational biology at INNOVAC BIOTECHNOLOGIES."
      />

      {/* SECTION 01 — INTERNSHIP HERO (Futuristic Laboratory Learning Theme) */}
      <section className="relative w-full pt-28 pb-16 lg:pt-32 lg:pb-24 px-6 bg-[#030B17] text-white overflow-hidden border-b border-[#00E5FF]/20">
        <MolecularBackgroundEffect particleColor="0, 229, 255" lineColor="0, 150, 255" particleCount={45} />

        {/* Ambient Glow */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#030B17] via-[#05152F] to-[#030B17]" />
          <div className="absolute right-0 top-0 w-[60%] h-full bg-[radial-gradient(ellipse_at_70%_40%,rgba(0,229,255,0.14)_0%,transparent_65%)]" />
          <div className="absolute left-1/3 bottom-0 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,#00E5FF_1px,transparent_1px)] bg-[length:32px_32px]" />
        </div>

        <div className="max-w-[1400px] mx-auto relative z-20 w-full">
          <Breadcrumb items={[{ label: 'Internships' }]} accentColor="text-[#00E5FF]" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-6 lg:mt-2 w-full">
            <div className="max-w-3xl lg:w-3/5">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <PageLabel accentColor="text-[#00E5FF]">INTERNSHIPS AT INNOVAC</PageLabel>
                <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-medium tracking-tight leading-[1.05] mb-6 text-white">
                  Learn.<br />
                  Explore.<br />
                  <span className="bg-gradient-to-r from-[#00E5FF] via-[#00C2FF] to-[#0066FF] bg-clip-text text-transparent">Grow.</span>
                </h1>
                <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mb-8 leading-relaxed font-light">
                  Explore internship opportunities connected to biotechnology, molecular biology, laboratory services, research, and computational science.
                </p>
                
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <Button 
                    href="#internship-programs"
                    variant="primary" 
                    className="bg-gradient-to-r from-[#0066FF] to-[#00C2FF] hover:from-[#0055D4] hover:to-[#00E5FF] text-white border-none px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-xl shadow-[0_0_25px_rgba(0,194,255,0.35)]"
                  >
                    EXPLORE INTERNSHIPS &rarr;
                  </Button>
                  <Button 
                    href="#request-form"
                    variant="dark" 
                    className="border-white/30 text-white hover:border-[#00E5FF] px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-xl"
                  >
                    APPLY NOW &rarr;
                  </Button>
                </div>

                <div className="flex items-center gap-6 pt-6 border-t border-white/10 text-xs text-neutral-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
                    <span>Mentorship by Scientists</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00C2FF]" />
                    <span>Real-world Wet-lab & In-silico</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Right Visual Area */}
            <PageHeroIllustration page="internships" className="lg:w-2/5" />
          </div>
        </div>
      </section>

      {/* SECTION 02 — VALUE PILLARS (Dark Biotech Glass Cards) */}
      <section id="internship-programs" className="py-24 px-6 bg-[#051329] border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[#00E5FF] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
              01 / INTERNSHIPS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              Learn Through Scientific Work.
            </h2>
            <p className="text-neutral-300 max-w-2xl text-base md:text-lg leading-relaxed font-light">
              INNOVAC BIOTECHNOLOGIES offers internships related to its scientific services, giving students and aspiring researchers an opportunity to explore areas of biotechnology, molecular biology, laboratory research, and computational biology.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                title: "Scientific Exposure",
                desc: "Explore scientific areas connected to biotechnology and molecular research.",
                icon: Dna
              },
              {
                title: "Research Learning",
                desc: "Develop familiarity with research-oriented scientific workflows.",
                icon: FlaskConical
              },
              {
                title: "Multiple Research Areas",
                desc: "Explore internship opportunities related to different INNOVAC services.",
                icon: Network
              },
              {
                title: "Project Discussion",
                desc: "Discuss your interests and internship requirements with the INNOVAC team.",
                icon: Target
              }
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div 
                  key={i} 
                  variants={itemVariants} 
                  className="bg-[#030B17]/90 p-8 rounded-[24px] border border-white/10 hover:border-[#00E5FF]/60 hover:shadow-[0_10px_30px_rgba(0,229,255,0.15)] flex flex-col h-full transition-all duration-300 hover:-translate-y-1.5 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center mb-6 text-[#00E5FF] group-hover:bg-[#00E5FF] group-hover:text-[#030B17] transition-all duration-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00E5FF] transition-colors">{feature.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed font-light">{feature.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SECTION 03 — INTERNSHIP AREAS (Dark Navy Grid) */}
      <section className="py-24 px-6 bg-[#030B17] border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[#00E5FF] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
              02 / INTERNSHIP AREAS
            </span>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
                Choose Your Research Direction.
              </h2>
              <p className="text-neutral-300 max-w-lg text-base md:text-lg leading-relaxed font-light">
                Internship opportunities can be connected to the scientific services and research areas offered by INNOVAC BIOTECHNOLOGIES.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {internshipAreas.map((area, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#051329] rounded-[24px] overflow-hidden border border-white/10 group flex flex-col h-full relative hover:border-[#00E5FF]/60 hover:shadow-[0_15px_40px_rgba(0,229,255,0.15)] transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00E5FF] transition-colors">{area.title}</h3>
                  <p className="text-neutral-300 mb-8 leading-relaxed flex-grow text-sm md:text-base font-light">
                    {area.description}
                  </p>
                  
                  <div className="mb-10">
                    <h4 className="text-xs font-bold text-[#00E5FF] uppercase tracking-widest mb-4">Potential Topics</h4>
                    <div className="flex flex-wrap gap-2">
                      {area.topics.map((topic, j) => (
                        <span key={j} className="bg-white/5 border border-white/10 text-neutral-300 text-xs font-medium px-3 py-1.5 rounded-lg group-hover:border-[#00E5FF]/30 transition-colors">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a href="#request-form" className="flex items-center gap-2 text-white font-semibold text-xs tracking-wider uppercase group-hover:text-[#00E5FF] transition-colors mt-auto w-fit">
                    DISCUSS THIS AREA <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-xs text-neutral-400 mt-8 italic">
            * Potential internship exposure may relate to relevant laboratory services.
          </p>
        </div>
      </section>

      {/* SECTION 04 — INTERNSHIP BY SCIENTIFIC INTEREST */}
      <section className="py-24 px-6 bg-[#051329] relative overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
            <span className="text-[#00E5FF] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
              03 / FIND YOUR INTEREST
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6 max-w-2xl">
              Where Does Your Interest Lead?
            </h2>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
          >
            {interestOptions.map((item, i) => (
              <motion.div key={i} variants={itemVariants} className="group cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[#00E5FF] font-mono text-sm px-2.5 py-1 rounded-md bg-[#00E5FF]/10 border border-[#00E5FF]/20">{item.id}</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00E5FF] transition-colors">{item.title}</h3>
                </div>
                <p className="text-neutral-400 leading-relaxed mb-6 text-sm font-light">
                  {item.description}
                </p>
                <div className="h-[1px] w-full bg-white/10 group-hover:bg-[#00E5FF]/50 transition-colors relative overflow-hidden">
                  <motion.div 
                    className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-[#0066FF] to-[#00E5FF]"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 flex items-center gap-1.5 text-xs text-[#00E5FF] font-bold">
                  <span>DISCUSS FOCUS</span>
                  <ArrowRight size={14} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 05 — WHAT YOU CAN EXPLORE */}
      <section className="py-24 px-6 bg-[#030B17] border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 sticky top-32">
              <span className="text-[#00E5FF] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
                04 / LEARNING AREAS
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
                Explore Real Scientific Domains.
              </h2>
              <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-10 font-light">
                Internship discussions can be tailored around the scientific services and research interests relevant to your background and goals.
              </p>
            </div>
            
            <div className="lg:col-span-7">
              <div className="bg-[#051329] rounded-[24px] border border-white/10 p-8 md:p-12 shadow-xl">
                <div className="grid md:grid-cols-2 gap-y-6 gap-x-8">
                  {learningAreas.map((area, index) => (
                    <div key={index} className="flex items-center gap-3 group">
                      <CheckCircle2 size={20} className="text-[#00E5FF] flex-shrink-0" />
                      <span className="text-neutral-200 font-medium group-hover:text-[#00E5FF] transition-colors text-sm">{area}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 pt-8 border-t border-white/10">
                  <p className="text-xs text-neutral-400 italic">
                    * Specific internship activities depend on the selected research area and project requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06 — HOW TO APPLY (Step-by-Step Glowing Flow) */}
      <section className="py-24 px-6 bg-[#051329] relative overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
            <span className="text-[#00E5FF] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
              05 / GET STARTED
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6 max-w-2xl">
              Start With a Conversation.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] h-[1px] bg-white/20" />
            
            {[
              {
                step: "01",
                title: "Choose Your Area",
                desc: "Identify the scientific or research area you are interested in."
              },
              {
                step: "02",
                title: "Tell Us About Your Goals",
                desc: "Share your academic background, interests, and internship requirements."
              },
              {
                step: "03",
                title: "Discuss the Opportunity",
                desc: "Contact the INNOVAC team to discuss whether an appropriate internship opportunity is available."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[#030B17] border-2 border-[#00E5FF] flex items-center justify-center text-white font-bold text-lg mb-6 shadow-[0_0_20px_rgba(0,229,255,0.35)]">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-neutral-400 leading-relaxed text-sm max-w-[280px] font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button 
              href="#request-form"
              variant="primary" 
              className="bg-gradient-to-r from-[#0066FF] to-[#00C2FF] hover:from-[#0055D4] hover:to-[#00E5FF] text-white border-none px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-xl shadow-[0_0_20px_rgba(0,194,255,0.35)]"
            >
              DISCUSS AN INTERNSHIP &rarr;
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 07 — INTERNSHIP REQUEST FORM (Dark Modern Biotech Form) */}
      <section className="py-24 px-6 bg-[#030B17] border-b border-white/10" id="request-form">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00E5FF] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
              06 / INTERNSHIP REQUEST
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Tell Us About Your Internship Interest.
            </h2>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light">
              Share a few details about your background and the scientific area you would like to explore.
            </p>
          </div>

          <div className="bg-[#051329] rounded-[24px] p-8 md:p-12 border border-white/10 shadow-2xl">
            {formState === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-[#00E5FF]/10 border border-[#00E5FF]/30 rounded-full flex items-center justify-center mx-auto mb-6 text-[#00E5FF] shadow-[0_0_25px_rgba(0,229,255,0.3)]">
                   <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Application Submitted.</h3>
                <p className="text-neutral-300 mb-8 max-w-md mx-auto font-light">
                  Your internship application was submitted successfully. Our scientific coordinators will review your files shortly.
                </p>
                <Button 
                  variant="dark" 
                  onClick={() => setFormState('idle')}
                  className="text-white border-white/20 hover:border-[#00E5FF]"
                >
                  SUBMIT ANOTHER REQUEST
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Dr. Ayesha Khan" 
                      className="w-full bg-[#030B17] border border-white/10 focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. ayesha@university.edu" 
                      className="w-full bg-[#030B17] border border-white/10 focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">Phone / WhatsApp</label>
                    <input 
                      type="tel" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +92 300 1234567" 
                      className="w-full bg-[#030B17] border border-white/10 focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">Institution / University *</label>
                    <input 
                      type="text" 
                      required
                      value={institution}
                      onChange={(e) => setInstitution(e.target.value)}
                      placeholder="e.g. Punjab University" 
                      className="w-full bg-[#030B17] border border-white/10 focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">Academic Background *</label>
                    <input 
                      type="text" 
                      required
                      value={background}
                      onChange={(e) => setBackground(e.target.value)}
                      placeholder="e.g. BS Biotechnology (Final Year)" 
                      className="w-full bg-[#030B17] border border-white/10 focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">Area of Interest *</label>
                    <select 
                      required
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      className="w-full bg-[#030B17] border border-white/10 focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
                    >
                      <option value="">Select an area...</option>
                      {internshipAreas.map((a, i) => (
                        <option key={i} value={a.title}>{a.title}</option>
                      ))}
                      <option value="General Exploration">General Exploration</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">Statement of Interest / Goals</label>
                  <textarea 
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us what you want to achieve through this internship..." 
                    className="w-full bg-[#030B17] border border-white/10 focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-all"
                  />
                </div>

                {formState === 'error' && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
                    Failed to submit application. Please check your network or reach out via our contact page.
                  </div>
                )}

                <Button 
                  type="submit"
                  disabled={formState === 'submitting'}
                  variant="primary" 
                  className="w-full bg-gradient-to-r from-[#0066FF] to-[#00C2FF] hover:from-[#0055D4] hover:to-[#00E5FF] text-white border-none py-4 text-xs font-bold uppercase tracking-wider rounded-xl shadow-[0_0_20px_rgba(0,194,255,0.35)]"
                >
                  {formState === 'submitting' ? 'SUBMITTING APPLICATION...' : 'SUBMIT APPLICATION &rarr;'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 08 — FAQ */}
      <section className="py-24 px-6 bg-[#051329]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#00E5FF] text-xs font-bold tracking-[0.25em] uppercase mb-3 block">
              QUESTIONS & ANSWERS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Internship Information</h2>
          </div>

          <div className="border-t border-white/10">
            {internshipFaqs.map((faq, index) => {
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
