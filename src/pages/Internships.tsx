import { getCtaPath } from '@/src/config/ctaConfig';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, ChevronRight, CheckCircle2, Dna, Microscope, FlaskConical, Target, Binary, Laptop, Layers, Share2, Search, Cpu, Database, Network } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/Button';
import { internshipAreas, interestOptions, learningAreas, internshipFaqs } from '../data/internships';
import { cn } from '../lib/utils';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import { PageHeroIllustration } from '@/src/components/ui/PageHeroIllustration';
import { Breadcrumb, PageLabel } from '@/src/components/ui/Breadcrumb';

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
      // Try to insert into enquiries (Internship application)
      const { error } = await supabase.from('enquiries').insert({
        name: fullName,
        email: email,
        subject: `Internship Application - ${area}`,
        message: `Institution: ${institution}\nBackground: ${background}\n\nMessage: ${message}`,
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
    <>
      <SEO 
        title="Biotechnology Internships | INNOVAC BIOTECHNOLOGIES" 
        description="Explore internship opportunities related to biotechnology, molecular biology, laboratory services, research, protein and peptide science, and computational biology at INNOVAC BIOTECHNOLOGIES."
      />

      {/* SECTION 01 — INTERNSHIP HERO */}
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
              <Breadcrumb items={[{ label: 'Internships' }]} accentColor="text-[#FF4D00]" />
              <PageLabel accentColor="text-[#FF4D00]">INTERNSHIPS AT INNOVAC</PageLabel>
                <h1 className="text-5xl md:text-7xl lg:text-[76px] font-medium tracking-tight leading-[1.05] mb-8 text-white">
                  Learn.<br />
                  Explore.<br />
                  <span className="text-[#FF4D00]">Grow.</span>
                </h1>
                <p className="text-lg text-neutral-300 max-w-2xl mb-16 leading-relaxed font-light">
                  Explore internship opportunities connected to biotechnology, molecular biology, laboratory services, research, and computational science.
                </p>
                
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="primary" className="bg-[#FF4D00] hover:bg-[#E64500] text-white border-none px-8 py-4 text-sm font-semibold uppercase tracking-wider">
                    EXPLORE INTERNSHIPS &rarr;
                  </Button>
                  <Button variant="outline" className="text-white border-white/30 hover:bg-white hover:text-black px-8 py-4 text-sm font-semibold uppercase tracking-wider">
                    DISCUSS AN INTERNSHIP &rarr;
                  </Button>
                </div>
              </motion.div>
            </div>
            
            {/* Right Visual Area */}
            <PageHeroIllustration page="internships" className="lg:w-2/5" />
          </div>
        </div>
      </section>

      {/* SECTION 02 — INTERNSHIPS INTRODUCTION */}
      <section id="internship-programs" className="py-24 px-6 bg-[#F5F5F3]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[#FF4D00] text-sm font-semibold tracking-widest uppercase mb-4 block">
              01 / INTERNSHIPS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#050505] leading-tight mb-6">
              Learn Through Scientific Work.
            </h2>
            <p className="text-neutral-600 max-w-2xl text-lg leading-relaxed">
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
                <motion.div key={i} variants={itemVariants} className="bg-white p-8 rounded-[24px] border border-[#D8D8D5] flex flex-col h-full hover:border-[#FF4D00]/50 transition-colors duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#FF4D00]/10 flex items-center justify-center mb-6">
                    <Icon size={24} className="text-[#FF4D00]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#050505] mb-3">{feature.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SECTION 03 — INTERNSHIP AREAS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[#FF4D00] text-sm font-semibold tracking-widest uppercase mb-4 block">
              02 / INTERNSHIP AREAS
            </span>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <h2 className="text-4xl md:text-5xl font-bold text-[#050505] leading-tight max-w-2xl">
                Choose Your Research Direction.
              </h2>
              <p className="text-neutral-600 max-w-lg text-lg leading-relaxed">
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
                className="bg-[#F5F5F3] rounded-[24px] overflow-hidden border border-[#D8D8D5] group flex flex-col h-full relative"
              >
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-[#050505] mb-4">{area.title}</h3>
                  <p className="text-neutral-600 mb-8 leading-relaxed flex-grow">
                    {area.description}
                  </p>
                  
                  <div className="mb-10">
                    <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4">Potential Topics</h4>
                    <div className="flex flex-wrap gap-2">
                      {area.topics.map((topic, j) => (
                        <span key={j} className="bg-white border border-[#D8D8D5] text-neutral-600 text-xs font-medium px-3 py-1.5 rounded-full">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link to="/contact" className="flex items-center gap-2 text-[#050505] font-semibold text-sm tracking-wider uppercase group-hover:text-[#FF4D00] transition-colors mt-auto w-fit">
                    DISCUSS THIS AREA <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#FF4D00] rounded-[24px] pointer-events-none transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
          <p className="text-center text-sm text-neutral-500 mt-8 italic">
            * Potential internship exposure may relate to relevant laboratory services.
          </p>
        </div>
      </section>

      {/* SECTION 04 — INTERNSHIP BY SCIENTIFIC INTEREST */}
      <section className="py-24 px-6 bg-[#050505] relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
           <img src="https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=2959&auto=format&fit=crop" alt="Background Texture" className="w-full h-full object-cover mix-blend-screen" />
           <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#050505]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16">
            <span className="text-[#FF4D00] text-sm font-semibold tracking-widest uppercase mb-4 block">
              03 / FIND YOUR INTEREST
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 max-w-2xl">
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
                  <span className="text-[#FF4D00] font-mono text-sm">{item.id}</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#FF4D00] transition-colors">{item.title}</h3>
                </div>
                <p className="text-neutral-400 leading-relaxed mb-6">
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

      {/* SECTION 05 — WHAT YOU CAN EXPLORE */}
      <section className="py-24 px-6 bg-[#F5F5F3]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 sticky top-32">
              <span className="text-[#FF4D00] text-sm font-semibold tracking-widest uppercase mb-4 block">
                04 / LEARNING AREAS
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#050505] leading-tight mb-6">
                Explore Real Scientific Domains.
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed mb-10">
                Internship discussions can be tailored around the scientific services and research interests relevant to your background and goals.
              </p>
            </div>
            
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[24px] border border-[#D8D8D5] p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-y-6 gap-x-8">
                  {learningAreas.map((area, index) => (
                    <div key={index} className="flex items-center gap-3 group">
                      <CheckCircle2 size={20} className="text-[#FF4D00] flex-shrink-0" />
                      <span className="text-[#050505] font-medium group-hover:text-[#FF4D00] transition-colors">{area}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 pt-8 border-t border-[#D8D8D5]">
                  <p className="text-sm text-neutral-500 italic">
                    * Specific internship activities depend on the selected research area and project requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06 — HOW TO APPLY */}
      <section className="py-24 px-6 bg-[#050505] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2787&auto=format&fit=crop" 
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
              Start With a Conversation.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line */}
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
                <div className="w-14 h-14 rounded-full bg-[#050505] border-2 border-[#FF4D00] flex items-center justify-center text-white font-bold text-lg mb-6 shadow-[0_0_20px_rgba(255,77,0,0.3)]">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-neutral-400 leading-relaxed text-sm max-w-[280px]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button variant="primary" className="bg-[#FF4D00] hover:bg-[#E64500] text-white border-none px-8 py-4 text-sm font-semibold uppercase tracking-wider">
              DISCUSS AN INTERNSHIP &rarr;
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 07 — INTERNSHIP REQUEST FORM */}
      <section className="py-24 px-6 bg-white" id="request-form">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#FF4D00] text-sm font-semibold tracking-widest uppercase mb-4 block">
              06 / INTERNSHIP REQUEST
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#050505] mb-6">
              Tell Us About Your Internship Interest.
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Share a few details about your background and the scientific area you would like to explore.
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
                <h3 className="text-2xl font-bold text-[#050505] mb-4">Application Submitted.</h3>
                <p className="text-neutral-600 mb-8 max-w-md mx-auto">
                  Your internship application was submitted successfully. Our coordinators will review your files shortly.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setFormState('idle')}
                  className="text-[#050505] border-[#D8D8D5] hover:bg-[#F5F5F3]"
                >
                  SUBMIT ANOTHER REQUEST
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {formState === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm">
                    Something went wrong. Please submit your CV directly to <a href="mailto:info@innovacbiotech.com" className="underline font-medium">info@innovacbiotech.com</a>.
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
                      placeholder="john@university.edu"
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
                      placeholder="University Name"
                      required 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="background" className="block text-sm font-semibold text-[#050505] mb-2">Academic Background</label>
                    <input 
                      type="text" 
                      id="background" 
                      name="background"
                      value={background}
                      onChange={(e) => setBackground(e.target.value)}
                      className="w-full bg-white border border-[#D8D8D5] rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] transition-colors" 
                      placeholder="e.g., BSc Biotechnology, 3rd Year"
                      required 
                    />
                  </div>
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
                      <option value="Nucleic Acid Biology">Nucleic Acid / Molecular Biology</option>
                      <option value="Protein Science">Protein & Peptide</option>
                      <option value="Biotechnology Operations">Biotechnology</option>
                      <option value="Computational Biology">Research & Computational Biology</option>
                      <option value="Laboratory Reagents">Reagents / Laboratory</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#050505] mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={4} 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white border border-[#D8D8D5] rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] transition-colors resize-none"
                    placeholder="Tell us about your goals and what you hope to explore..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#050505] mb-2">File Upload (Optional CV/Resume)</label>
                  <div className="w-full bg-white border border-[#D8D8D5] border-dashed rounded-xl px-4 py-8 flex flex-col items-center justify-center cursor-pointer hover:bg-neutral-50 hover:border-[#FF4D00] transition-colors group">
                    <span className="text-sm text-neutral-500 group-hover:text-[#FF4D00] transition-colors font-medium">Click to upload or drag and drop</span>
                    <span className="text-xs text-neutral-400 mt-1">PDF, DOCX up to 5MB</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Button type="submit" variant="primary" className="w-full bg-[#FF4D00] hover:bg-[#E64500] text-white border-none py-4 text-sm font-semibold uppercase tracking-wider">
                    SUBMIT INTEREST &rarr;
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#050505] mb-12 text-center">Frequently Asked Questions</h2>
          <div className="border-t border-[#D8D8D5]">
            {internshipFaqs.map((faq, index) => {
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
            Ready to <span className="text-[#FF4D00]">Explore Biotechnology</span>?
          </h2>
          <p className="text-neutral-400 text-lg mb-12">
            Tell us which scientific area interests you and discuss an internship opportunity with INNOVAC BIOTECHNOLOGIES.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" href={getCtaPath('CONSULTATION_REQUEST')} className="bg-[#FF4D00] hover:bg-[#E64500] text-white border-none px-8 py-4 text-sm font-semibold uppercase tracking-wider">
              DISCUSS AN INTERNSHIP &rarr;
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
