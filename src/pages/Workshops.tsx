import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, ChevronRight, CheckCircle2, Microscope, FlaskConical, Dna, Target, GraduationCap, Laptop, Share2, Layers, Binary, BarChart } from 'lucide-react';
import { SEO } from '@/src/components/SEO';
import { Button } from '@/src/components/ui/Button';
import { Breadcrumb, PageLabel } from '@/src/components/ui/Breadcrumb';
import { workshopCategories, workshopTopics, workshopFormats, workshopProcess, workshopFaqs } from '@/src/data/workshops';
import { cn } from '@/src/lib/utils';
import { supabase } from '@/src/lib/supabase';
import { ScientificHeroVisual } from '@/src/components/ui/ScientificHeroVisual'; // legacy
import { PageHeroIllustration } from '@/src/components/ui/PageHeroIllustration';

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
        message: `Institution: ${institution}\nParticipants: ${participants}\nPreferred Date: ${preferredDate}\n\nMessage: ${message}`,
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
    <>
      <SEO 
        title="Biotechnology Workshops | INNOVAC BIOTECHNOLOGIES" 
        description="Explore professional scientific workshops related to biotechnology, molecular biology, research, protein and peptide science, computational biology, and related services at INNOVAC BIOTECHNOLOGIES."
      />

      {/* SECTION 01 — WORKSHOPS HERO */}
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
              <Breadcrumb items={[{ label: 'Workshops' }]} accentColor="text-[#FF4D00]" />
              <PageLabel accentColor="text-[#FF4D00]">WORKSHOPS AT INNOVAC</PageLabel>
                <h1 className="text-5xl md:text-7xl lg:text-[76px] font-medium tracking-tight leading-[1.05] mb-8 text-white">
                  Learn.<br />
                  Practice.<br />
                  <span className="text-[#FF4D00]">Excel.</span>
                </h1>
                <p className="text-lg text-neutral-300 max-w-2xl mb-16 leading-relaxed font-light">
                  Professional workshops designed to help participants explore scientific knowledge and practical concepts across biotechnology, molecular biology, research, and related scientific services.
                </p>
                
                <div className="flex flex-wrap items-center gap-4">
                  <Button href="#workshop-programs" variant="primary" className="bg-[#FF4D00] hover:bg-[#E64500] text-white border-none px-8 py-4 text-sm font-semibold uppercase tracking-wider">
                    EXPLORE WORKSHOPS &rarr;
                  </Button>
                  <Button href="/contact?type=workshop" variant="outline" className="text-white border-white/30 hover:bg-white hover:text-black px-8 py-4 text-sm font-semibold uppercase tracking-wider">
                    DISCUSS A WORKSHOP &rarr;
                  </Button>
                </div>
              </motion.div>
            </div>
            
            {/* Right Visual Area */}
            <PageHeroIllustration page="workshops" className="lg:w-2/5" />
          </div>
        </div>
      </section>

      {/* SECTION 02 — WORKSHOP INTRODUCTION */}
      <section className="py-24 px-6 bg-[#F5F5F3]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[#FF4D00] text-sm font-semibold tracking-widest uppercase mb-4 block">
              01 / WORKSHOPS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#050505] leading-tight mb-6 max-w-2xl">
              Expand Your Scientific Knowledge.
            </h2>
            <p className="text-neutral-600 max-w-2xl text-lg leading-relaxed">
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
                <motion.div key={i} variants={itemVariants} className="bg-white p-8 rounded-[24px] border border-[#D8D8D5] flex flex-col h-full hover:border-[#FF4D00]/50 transition-colors duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#FF4D00]/10 flex items-center justify-center mb-6">
                    <Icon size={24} className="text-[#FF4D00]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#050505] mb-3">{feature.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SECTION 03 — WORKSHOP AREAS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[#FF4D00] text-sm font-semibold tracking-widest uppercase mb-4 block">
              02 / WORKSHOP AREAS
            </span>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <h2 className="text-4xl md:text-5xl font-bold text-[#050505] leading-tight max-w-2xl">
                Explore Scientific Workshop Areas
              </h2>
              <p className="text-neutral-600 max-w-lg text-lg leading-relaxed">
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
                    <h3 className="text-xl font-bold text-[#050505] mb-4">{area.title}</h3>
                    <p className="text-neutral-600 text-sm mb-6 leading-relaxed flex-grow">
                      {area.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="flex flex-col gap-2">
                        {area.topics.slice(0, 4).map((topic, j) => (
                          <div key={j} className="flex items-center gap-2 text-xs text-neutral-500">
                             <div className="w-1 h-1 rounded-full bg-[#FF4D00] flex-shrink-0" />
                             <span className="truncate">{topic}</span>
                          </div>
                        ))}
                        {area.topics.length > 4 && (
                           <div className="text-xs text-neutral-400 italic mt-1">+ more topics</div>
                        )}
                      </div>
                    </div>
                    
                    <Link to="/contact" className="flex items-center gap-2 text-[#050505] font-semibold text-xs tracking-wider uppercase group-hover:text-[#FF4D00] transition-colors mt-auto w-fit">
                      DISCUSS THIS AREA <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#FF4D00] rounded-[24px] pointer-events-none transition-colors duration-500" />
                </motion.div>
              );
            })}
          </div>
          <p className="text-center text-sm text-neutral-500 mt-10 italic">
            * Potential workshop topics depending on scientific interest.
          </p>
        </div>
      </section>

      {/* SECTION 04 — WORKSHOP TOPICS */}
      <section className="py-24 px-6 bg-[#050505] relative overflow-hidden">
        <div className="absolute left-0 bottom-0 w-1/3 h-full opacity-10 pointer-events-none">
           <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop" alt="Background Texture" className="w-full h-full object-cover mix-blend-screen" />
           <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#050505]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
            <span className="text-[#FF4D00] text-sm font-semibold tracking-widest uppercase mb-4 block">
              03 / TOPICS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 max-w-2xl">
              Science Across Multiple Disciplines.
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed max-w-2xl">
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
                  <span className="text-[#FF4D00] font-mono text-sm">{item.id}</span>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#FF4D00] transition-colors">{item.title}</h3>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  {item.description}
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 05 — WORKSHOP FORMAT */}
      <section className="py-24 px-6 bg-[#F5F5F3]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-[#FF4D00] text-sm font-semibold tracking-widest uppercase mb-4 block">
              04 / WORKSHOP FORMAT
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#050505] leading-tight mb-6">
              Designed Around the Learning Need.
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed">
              Workshop format, topic coverage, and delivery details can be discussed according to the scientific subject and participant requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {workshopFormats.map((format, i) => (
              <div key={i} className="bg-white rounded-[24px] border border-[#D8D8D5] p-10 text-center hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-[#050505] mb-4">{format.title}</h3>
                <p className="text-neutral-600 leading-relaxed">
                  {format.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="primary" href="/contact" className="bg-[#FF4D00] hover:bg-[#E64500] text-white border-none px-8 py-4 text-sm font-semibold uppercase tracking-wider">
              DISCUSS YOUR WORKSHOP &rarr;
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 06 — HOW IT WORKS */}
      <section className="py-24 px-6 bg-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop" 
            alt="Laboratory Workflow" 
            className="w-full h-full object-cover mix-blend-screen grayscale"
          />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
            <span className="text-[#FF4D00] text-sm font-semibold tracking-widest uppercase mb-4 block">
              05 / GET STARTED
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 max-w-2xl">
              Simple. Focused. Scientific.
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 relative">
            {/* Connecting Line (Desktop) */}
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
                <div className="w-14 h-14 rounded-full bg-[#050505] border-2 border-[#FF4D00] flex items-center justify-center text-white font-bold text-lg mb-6 shadow-[0_0_20px_rgba(255,77,0,0.3)]">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-4">{item.title}</h3>
                <p className="text-neutral-400 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 07 — WORKSHOP REQUEST FORM */}
      <section className="py-24 px-6 bg-white" id="request-form">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#FF4D00] text-sm font-semibold tracking-widest uppercase mb-4 block">
              06 / WORKSHOP REQUEST
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#050505] mb-6">
              Plan a Scientific Workshop.
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Tell us what scientific topic you would like to explore and discuss a suitable workshop with INNOVAC BIOTECHNOLOGIES.
            </p>
          </div>

          <div className="bg-[#F5F5F3] rounded-[24px] p-8 md:p-12 border border-[#D8D8D5]">
            {formState === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-[#FF4D00]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[#FF4D00]">
                   <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#050505] mb-4">Request Logged.</h3>
                <p className="text-neutral-600 mb-8 max-w-md mx-auto">
                  Your workshop plan has been received by our science department. We will contact you shortly to refine the itinerary.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setFormState('idle')}
                  className="text-[#050505] border-[#D8D8D5] hover:bg-[#F5F5F3]"
                >
                  DISCUSS ANOTHER WORKSHOP
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {formState === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm">
                    We couldn't submit your request. Please email us at <a href="mailto:info@innovacbiotech.com" className="underline font-medium">info@innovacbiotech.com</a> directly.
                  </div>
                )}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-[#050505] mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="fullName" 
                      name="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-white border border-[#D8D8D5] rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] transition-colors" 
                      placeholder="John Doe"
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#050505] mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white border border-[#D8D8D5] rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] transition-colors" 
                      placeholder="john@example.com"
                      required 
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[#050505] mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white border border-[#D8D8D5] rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] transition-colors" 
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="institution" className="block text-sm font-semibold text-[#050505] mb-2">Institution / Organization</label>
                    <input 
                      type="text" 
                      id="institution" 
                      name="institution"
                      value={institution}
                      onChange={(e) => setInstitution(e.target.value)}
                      className="w-full bg-white border border-[#D8D8D5] rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] transition-colors" 
                      placeholder="Organization Name"
                      required 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="area" className="block text-sm font-semibold text-[#050505] mb-2">Area of Interest</label>
                    <select 
                      id="area" 
                      name="area"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      className="w-full bg-white border border-[#D8D8D5] rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] transition-colors appearance-none" 
                      required
                    >
                      <option value="">Select an area...</option>
                      <option value="molecular-biology">Molecular Biology</option>
                      <option value="protein-peptide">Protein & Peptide</option>
                      <option value="biotechnology">Biotechnology</option>
                      <option value="computational-biology">Computational Biology</option>
                      <option value="research-analysis">Research & Analysis</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="topic" className="block text-sm font-semibold text-[#050505] mb-2">Workshop Topic (Specific)</label>
                    <input 
                      type="text" 
                      id="topic" 
                      name="topic"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="w-full bg-white border border-[#D8D8D5] rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] transition-colors" 
                      placeholder="e.g., PCR Techniques, SPSS Analysis"
                      required 
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                   <div>
                    <label htmlFor="participants" className="block text-sm font-semibold text-[#050505] mb-2">Number of Participants</label>
                    <input 
                      type="number" 
                      id="participants" 
                      name="participants"
                      value={participants}
                      onChange={(e) => setParticipants(e.target.value)}
                      className="w-full bg-white border border-[#D8D8D5] rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] transition-colors" 
                      placeholder="e.g., 5"
                      min="1"
                    />
                  </div>
                   <div>
                    <label htmlFor="date" className="block text-sm font-semibold text-[#050505] mb-2">Preferred Date (Optional)</label>
                    <input 
                      type="text" 
                      id="date" 
                      name="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full bg-white border border-[#D8D8D5] rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] transition-colors" 
                      placeholder="e.g., October 2026"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#050505] mb-2">Message & Learning Goals</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={4} 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white border border-[#D8D8D5] rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] transition-colors resize-none"
                    placeholder="Tell us about the learning requirements and goals for this workshop..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#050505] mb-2">File Upload (Optional Requirements Doc)</label>
                  <div className="w-full bg-white border border-[#D8D8D5] border-dashed rounded-xl px-4 py-8 flex flex-col items-center justify-center cursor-pointer hover:bg-neutral-50 hover:border-[#FF4D00] transition-colors group">
                    <span className="text-sm text-neutral-500 group-hover:text-[#FF4D00] transition-colors font-medium">Click to upload or drag and drop</span>
                    <span className="text-xs text-neutral-400 mt-1">PDF, DOCX up to 5MB</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Button type="submit" variant="primary" className="w-full bg-[#FF4D00] hover:bg-[#E64500] text-white border-none py-4 text-sm font-semibold uppercase tracking-wider">
                    SUBMIT WORKSHOP REQUEST &rarr;
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 08 — FAQ */}
      <section className="py-24 px-6 bg-[#F5F5F3]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#050505] mb-12 text-center">Workshop Information</h2>
          <div className="border-t border-[#D8D8D5]">
            {workshopFaqs.map((faq, index) => {
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

      {/* SECTION 09 — FINAL CTA */}
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
          <span className="text-[#FF4D00] text-sm font-semibold tracking-widest uppercase mb-4 block">
            READY TO LEARN?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Build Your <span className="text-[#FF4D00]">Scientific Knowledge</span>.
          </h2>
          <p className="text-neutral-400 text-lg mb-12 max-w-2xl">
            Discuss your preferred scientific topic and explore a workshop opportunity with INNOVAC BIOTECHNOLOGIES.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" href="/contact" className="bg-[#FF4D00] hover:bg-[#E64500] text-white border-none px-8 py-4 text-sm font-semibold uppercase tracking-wider">
              DISCUSS A WORKSHOP &rarr;
            </Button>
            <Button variant="outline" href="/contact" className="text-white border-white/30 hover:bg-white hover:text-black px-8 py-4 text-sm font-semibold uppercase tracking-wider">
              CONTACT US &rarr;
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
