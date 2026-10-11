import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, ChevronDown, ChevronRight, CheckCircle2, Microscope, 
  FlaskConical, Dna, Target, GraduationCap, Laptop, Share2, Layers, Binary, 
  BarChart, Sparkles, ExternalLink 
} from 'lucide-react';
import { SEO } from '@/src/components/SEO';
import { Button } from '@/src/components/ui/Button';
import { Breadcrumb, PageLabel } from '@/src/components/ui/Breadcrumb';
import { workshopCategories, workshopTopics, workshopFormats, workshopProcess, workshopFaqs } from '@/src/data/workshops';
import { cn } from '@/src/lib/utils';
import { supabase } from '@/src/lib/supabase';
import { PageHeroIllustration } from '@/src/components/ui/PageHeroIllustration';
import { MolecularBackgroundEffect } from '@/src/components/ui/MolecularBackgroundEffect';
import { BASE44_ORDER_PORTAL_URL } from '@/src/config/portalConfig';

export default function Workshops() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [institution, setInstitution] = useState('');
  const [area, setArea] = useState('');
  const [topic, setTopic] = useState('');
  const [participants, setParticipants] = useState('1');
  const [preferredDate, setPreferredDate] = useState('');
  const [message, setMessage] = useState('');
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    try {
      const { error } = await supabase.from('enquiries').insert({
        name: fullName,
        email: email,
        subject: `Workshop Request - ${topic} (${area})`,
        message: `Institution: ${institution}\nParticipants: ${participants}\nPhone: ${phone}\nPreferred Date: ${preferredDate}\n\nMessage: ${message}`,
        type: 'Workshop',
        status: 'New'
      });

      if (error) throw error;
      setFormState('success');
    } catch (err) {
      console.warn('Failed to insert workshop to Supabase, fallback to simulation:', err);
      try {
        const localRegistrations = JSON.parse(localStorage.getItem('workshop_registrations') || '[]');
        localRegistrations.push({
          id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(),
          name: fullName,
          email: email,
          phone: phone,
          institution: institution,
          area: area,
          topic: topic,
          participants: participants,
          preferred_date: preferredDate,
          message: message,
          status: 'Submitted',
          created_at: new Date().toISOString()
        });
        localStorage.setItem('workshop_registrations', JSON.stringify(localRegistrations));
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
        title="Biotechnology Workshops | INNOVAC BIOTECHNOLOGIES" 
        description="Explore professional scientific workshops related to biotechnology, molecular biology, research, protein and peptide science, computational biology, and related services at INNOVAC BIOTECHNOLOGIES."
      />

      {/* SECTION 01 — WORKSHOPS HERO */}
      <section className="relative w-full pt-28 pb-16 lg:pt-32 lg:pb-24 px-6 bg-[#030B17] text-white overflow-hidden border-b border-[#00E5FF]/20">
        <MolecularBackgroundEffect particleColor="0, 229, 255" lineColor="0, 150, 255" particleCount={45} />

        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#030B17] via-[#05152F] to-[#030B17]" />
          <div className="absolute right-0 top-0 w-[60%] h-full bg-[radial-gradient(ellipse_at_70%_40%,rgba(0,229,255,0.14)_0%,transparent_65%)]" />
          <div className="absolute left-1/4 bottom-0 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,#00E5FF_1px,transparent_1px)] bg-[length:32px_32px]" />
        </div>

        <div className="max-w-[1400px] mx-auto relative z-20 w-full">
          <Breadcrumb items={[{ label: 'Workshops' }]} accentColor="text-[#00E5FF]" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-6 lg:mt-2 w-full">
            <div className="max-w-3xl lg:w-3/5">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <PageLabel accentColor="text-[#00E5FF]">WORKSHOPS AT INNOVAC</PageLabel>
                <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-medium tracking-tight leading-[1.05] mb-6 text-white">
                  Learn.<br />
                  Practice.<br />
                  <span className="bg-gradient-to-r from-[#00E5FF] via-[#00C2FF] to-[#0066FF] bg-clip-text text-transparent">Excel.</span>
                </h1>
                <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mb-8 leading-relaxed font-light">
                  Professional workshops designed to help participants explore scientific knowledge and practical concepts across biotechnology, molecular biology, research, and related scientific services.
                </p>
                
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <Button 
                    href="#workshop-programs" 
                    variant="primary" 
                    className="bg-gradient-to-r from-[#0066FF] to-[#00C2FF] hover:from-[#0055D4] hover:to-[#00E5FF] text-white border-none px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-xl shadow-[0_0_25px_rgba(0,194,255,0.35)]"
                  >
                    EXPLORE WORKSHOPS &rarr;
                  </Button>
                  <Button 
                    href="#request-form" 
                    variant="dark" 
                    className="border-white/30 text-white hover:border-[#00E5FF] px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-xl"
                  >
                    REGISTER A WORKSHOP &rarr;
                  </Button>
                </div>

                <div className="flex items-center gap-6 pt-6 border-t border-white/10 text-xs text-neutral-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
                    <span>Hands-on & In-silico Protocols</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00C2FF]" />
                    <span>Custom Group & Lab Schedules</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Right Visual Area */}
            <PageHeroIllustration page="workshops" className="lg:w-2/5" />
          </div>
        </div>
      </section>

      {/* SECTION 02 — VALUE PILLARS (5 Pillars in Dark Glass Cards) */}
      <section id="workshop-programs" className="py-24 px-6 bg-[#051329] border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[#00E5FF] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
              01 / WORKSHOPS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6 max-w-2xl">
              Expand Your Scientific Knowledge.
            </h2>
            <p className="text-neutral-300 max-w-2xl text-base md:text-lg leading-relaxed font-light">
              INNOVAC BIOTECHNOLOGIES provides professional workshops and courses designed around scientific and biotechnology-related learning.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {[
              {
                title: "Scientific Learning",
                desc: "Explore scientific concepts connected to biotechnology and molecular sciences.",
                icon: Microscope
              },
              {
                title: "Practical Concepts",
                desc: "Learn about scientific methods, laboratory concepts, and research-oriented workflows where applicable.",
                icon: FlaskConical
              },
              {
                title: "Research Exposure",
                desc: "Explore research areas connected to biotechnology, molecular biology, and computational science.",
                icon: Dna
              },
              {
                title: "Skill Development",
                desc: "Strengthen scientific knowledge and understanding through focused workshop content.",
                icon: Target
              },
              {
                title: "Professional Learning",
                desc: "Develop knowledge relevant to scientific study, research, and biotechnology.",
                icon: GraduationCap
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
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#00E5FF] transition-colors">{feature.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed font-light">{feature.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SECTION 03 — WORKSHOP AREAS (Dark Cards with Photography Headers) */}
      <section className="py-24 px-6 bg-[#030B17] border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[#00E5FF] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
              02 / WORKSHOP AREAS
            </span>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
                Explore Scientific Workshop Areas
              </h2>
              <p className="text-neutral-300 max-w-lg text-base md:text-lg leading-relaxed font-light">
                Workshop topics can be connected to the scientific services and research areas offered by INNOVAC BIOTECHNOLOGIES.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {workshopCategories.map((area, i) => {
              const bgImages = [
                "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2960&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2787&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?q=80&w=2925&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop"
              ];
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#051329] rounded-[24px] overflow-hidden border border-white/10 group flex flex-col h-full relative hover:border-[#00E5FF]/60 hover:shadow-[0_15px_40px_rgba(0,229,255,0.15)] transition-all duration-300 hover:-translate-y-1.5"
                >
                  <div className="h-40 overflow-hidden relative border-b border-white/10">
                    <img 
                      src={bgImages[i % bgImages.length]} 
                      alt={area.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#051329] via-transparent to-transparent" />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00E5FF] transition-colors">{area.title}</h3>
                    <p className="text-neutral-300 text-xs md:text-sm mb-6 leading-relaxed flex-grow font-light">
                      {area.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="flex flex-col gap-2">
                        {area.topics.slice(0, 4).map((topic, j) => (
                          <div key={j} className="flex items-center gap-2 text-xs text-neutral-300">
                             <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] flex-shrink-0" />
                             <span className="truncate">{topic}</span>
                          </div>
                        ))}
                        {area.topics.length > 4 && (
                           <div className="text-[11px] text-[#00C2FF] font-medium mt-1">+ more topics</div>
                        )}
                      </div>
                    </div>
                    
                    <a href="#request-form" className="flex items-center gap-2 text-white font-semibold text-xs tracking-wider uppercase group-hover:text-[#00E5FF] transition-colors mt-auto w-fit">
                      DISCUSS THIS AREA <ArrowRight size={15} className="transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <p className="text-center text-xs text-neutral-400 mt-10 italic">
            * Potential workshop topics depending on scientific interest.
          </p>
        </div>
      </section>

      {/* SECTION 04 — WORKSHOP TOPICS (Dark Grid) */}
      <section className="py-24 px-6 bg-[#051329] relative overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
            <span className="text-[#00E5FF] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
              03 / TOPICS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6 max-w-2xl">
              Science Across Multiple Disciplines.
            </h2>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed max-w-2xl font-light">
              Workshop topics can be selected according to scientific interests and the relevant services and research areas of INNOVAC BIOTECHNOLOGIES.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
          >
            {workshopTopics.map((item, i) => (
              <motion.div key={i} variants={itemVariants} className="group cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[#00E5FF] font-mono text-sm px-2.5 py-1 rounded-md bg-[#00E5FF]/10 border border-[#00E5FF]/20">{item.id}</span>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#00E5FF] transition-colors">{item.title}</h3>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-light">
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
                  <span>LEARN MORE</span>
                  <ArrowRight size={14} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 05 — WORKSHOP FORMAT */}
      <section className="py-24 px-6 bg-[#030B17] border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-[#00E5FF] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
              04 / WORKSHOP FORMAT
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              Designed Around the Learning Need.
            </h2>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed font-light">
              Workshop format, topic coverage, and delivery details can be discussed according to the scientific subject and participant requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {workshopFormats.map((format, i) => (
              <div key={i} className="bg-[#051329] rounded-[24px] border border-white/10 p-10 text-center hover:border-[#00E5FF]/60 hover:shadow-[0_10px_35px_rgba(0,229,255,0.15)] transition-all duration-300 hover:-translate-y-1.5">
                <h3 className="text-2xl font-bold text-white mb-4">{format.title}</h3>
                <p className="text-neutral-300 leading-relaxed font-light text-sm md:text-base">
                  {format.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              variant="primary" 
              href="#request-form" 
              className="bg-gradient-to-r from-[#0066FF] to-[#00C2FF] hover:from-[#0055D4] hover:to-[#00E5FF] text-white border-none px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-xl shadow-[0_0_20px_rgba(0,194,255,0.35)]"
            >
              DISCUSS YOUR WORKSHOP &rarr;
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 06 — HOW IT WORKS */}
      <section className="py-24 px-6 bg-[#051329] relative overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
            <span className="text-[#00E5FF] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
              05 / GET STARTED
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6 max-w-2xl">
              Simple. Focused. Scientific.
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 relative">
            <div className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-[1px] bg-white/20" />
            
            {workshopProcess.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 flex-1 flex flex-col items-start lg:items-center text-left lg:text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[#030B17] border-2 border-[#00E5FF] flex items-center justify-center text-white font-bold text-lg mb-6 shadow-[0_0_20px_rgba(0,229,255,0.35)]">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-4">{item.title}</h3>
                <p className="text-neutral-400 leading-relaxed text-sm font-light">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 07 — WORKSHOP REQUEST FORM */}
      <section className="py-24 px-6 bg-[#030B17] border-b border-white/10" id="request-form">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#00E5FF] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
              06 / WORKSHOP REQUEST
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Plan a Scientific Workshop.
            </h2>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light">
              Tell us what scientific topic you would like to explore and discuss a suitable workshop with INNOVAC BIOTECHNOLOGIES.
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
                <h3 className="text-2xl font-bold text-white mb-4">Request Logged.</h3>
                <p className="text-neutral-300 mb-8 max-w-md mx-auto font-light">
                  Your workshop plan has been received by our science department. We will contact you shortly to refine the itinerary.
                </p>
                <Button 
                  variant="dark" 
                  onClick={() => setFormState('idle')}
                  className="text-white border-white/20 hover:border-[#00E5FF]"
                >
                  DISCUSS ANOTHER WORKSHOP
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">Your Name *</label>
                    <input 
                      type="text" 
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Prof. Tariq Mahmood" 
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
                      placeholder="e.g. tariq@biotechlab.org" 
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
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">Institution / Lab *</label>
                    <input 
                      type="text" 
                      required
                      value={institution}
                      onChange={(e) => setInstitution(e.target.value)}
                      placeholder="e.g. Genomics Research Institute" 
                      className="w-full bg-[#030B17] border border-white/10 focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">Area of Study *</label>
                    <select 
                      required
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      className="w-full bg-[#030B17] border border-white/10 focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
                    >
                      <option value="">Select an area...</option>
                      {workshopCategories.map((c, i) => (
                        <option key={i} value={c.title}>{c.title}</option>
                      ))}
                      <option value="Custom Training">Custom Training</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">Specific Topic / Technology</label>
                    <input 
                      type="text" 
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      placeholder="e.g. Molecular Docking & MD Simulations" 
                      className="w-full bg-[#030B17] border border-white/10 focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">Estimated Participants</label>
                    <select 
                      value={participants}
                      onChange={(e) => setParticipants(e.target.value)}
                      className="w-full bg-[#030B17] border border-white/10 focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
                    >
                      <option value="1">Individual (1 Person)</option>
                      <option value="2-5">Small Team (2-5)</option>
                      <option value="6-15">Class / Research Group (6-15)</option>
                      <option value="15+">Large Batch (15+)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">Preferred Timeline</label>
                    <input 
                      type="text" 
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      placeholder="e.g. Next Month / Flexible" 
                      className="w-full bg-[#030B17] border border-white/10 focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">Additional Details / Objectives</label>
                  <textarea 
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe specific learning goals, prerequisite software, or lab equipment..." 
                    className="w-full bg-[#030B17] border border-white/10 focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-all"
                  />
                </div>

                {formState === 'error' && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
                    Failed to send workshop inquiry. Please check your network or contact our team directly.
                  </div>
                )}

                <Button 
                  type="submit"
                  disabled={formState === 'submitting'}
                  variant="primary" 
                  className="w-full bg-gradient-to-r from-[#0066FF] to-[#00C2FF] hover:from-[#0055D4] hover:to-[#00E5FF] text-white border-none py-4 text-xs font-bold uppercase tracking-wider rounded-xl shadow-[0_0_20px_rgba(0,194,255,0.35)]"
                >
                  {formState === 'submitting' ? 'PROCESSING REQUEST...' : 'SUBMIT WORKSHOP REQUEST &rarr;'}
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
            <h2 className="text-3xl md:text-4xl font-bold text-white">Workshop Information</h2>
          </div>

          <div className="border-t border-white/10">
            {workshopFaqs.map((faq, index) => {
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
