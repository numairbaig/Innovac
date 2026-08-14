import { getCtaPath } from '@/src/config/ctaConfig';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, ChevronRight, Mail, Phone, MapPin, MessageCircle, Microscope, FlaskConical, Dna, GraduationCap, Presentation } from 'lucide-react';
import { SEO } from '@/src/components/SEO';
import { Button } from '@/src/components/ui/Button';
import { Breadcrumb, PageLabel } from '@/src/components/ui/Breadcrumb';
import { useSearchParams } from 'react-router-dom';
import { contactConfig } from '../config/contact';
import { enquiryTypes, interestAreas, scientificAreas, contactFaqs, contactOptions, servicePaths } from '../data/contact';
import { cn } from '../lib/utils';
import { supabase } from '../lib/supabase';
import { ScientificHeroVisual } from '@/src/components/ui/ScientificHeroVisual'; // legacy
import { PageHeroIllustration } from '@/src/components/ui/PageHeroIllustration';

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get('type');
  let defaultEnquiryType = "";
  if (initialType === "general") defaultEnquiryType = "General Request";
  else if (initialType === "service") defaultEnquiryType = "Scientific Service";
  else if (initialType === "reagents") defaultEnquiryType = "Reagents";
  else if (initialType === "research") defaultEnquiryType = "Research";
  else if (initialType === "internship") defaultEnquiryType = "Internship";
  else if (initialType === "workshop") defaultEnquiryType = "Workshop";
  else if (initialType === "enquire" || initialType === "quote") defaultEnquiryType = "Quote Request";

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [organization, setOrganization] = useState('');
  const [enquiryType, setEnquiryType] = useState(defaultEnquiryType || 'General Request');
  const [interestArea, setInterestArea] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

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

  const icons: Record<string, React.ElementType> = {
    MessageCircle,
    Microscope,
    FlaskConical,
    Dna,
    GraduationCap,
    Presentation
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    try {
      const { error } = await supabase.from('enquiries').insert({
        name: fullName,
        email,
        subject,
        message,
        type: enquiryType,
        status: 'New'
      });
      
      if (error) throw error;
      setFormState('success');
    } catch (err) {
      console.warn('Failed to insert contact request to Supabase, fallback to simulation:', err);
      try {
        const localEnquiries = JSON.parse(localStorage.getItem('enquiries') || '[]');
        localEnquiries.push({
          id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(),
          name: fullName,
          email,
          subject,
          message,
          type: enquiryType,
          status: 'New',
          created_at: new Date().toISOString()
        });
        localStorage.setItem('enquiries', JSON.stringify(localEnquiries));
        setFormState('success');
      } catch (storageErr) {
        setFormState('error');
      }
    }
  };

  return (
    <>
      <SEO 
        title="Contact INNOVAC BIOTECHNOLOGIES | Scientific Enquiries" 
        description="Contact INNOVAC BIOTECHNOLOGIES for biotechnology, molecular biology, research, reagent, internship, workshop, and scientific service enquiries."
      />

      {/* SECTION 01 — CONTACT HERO */}
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
              <Breadcrumb items={[{ label: 'Contact' }]} accentColor="text-[#FF4D00]" />
              <PageLabel accentColor="text-[#FF4D00]">CONNECT WITH US</PageLabel>
                <h1 className="text-5xl md:text-7xl lg:text-[76px] font-medium tracking-tight leading-[1.05] mb-8 text-white">
                  Innovating science <br />
                  <span className="text-[#FF4D00]">demands connection.</span>
                </h1>
                <p className="text-lg text-neutral-300 max-w-xl mb-16 leading-relaxed font-light">
                  Have a scientific project, research request, or supply request? Get in touch with our team of specialists.
                </p>
              </motion.div>
            </div>
            
            {/* Right Visual Area */}
            <PageHeroIllustration page="contact" className="lg:w-2/5" />
          </div>
        </div>
      </section>

      {/* SECTION 02 — CONTACT CHANNELS */}
      <section className="py-24 px-6 bg-white border-b border-[#D8D8D5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left: Contact Info & Channels */}
            <div className="lg:col-span-1 space-y-12">
              <div>
                <span className="text-[#FF4D00] text-sm font-semibold tracking-widest uppercase mb-4 block">
                  02 / CHANNELS
                </span>
                <h2 className="text-3xl font-bold text-[#050505] tracking-tight mb-6">
                  Direct Enquiries
                </h2>
                <p className="text-neutral-600 mb-8 font-light leading-relaxed">
                  We look forward to collaborating on molecular biology, custom reagents, diagnostics, and scientific research.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#FF4D00]/5 border border-[#FF4D00]/10 rounded-lg flex items-center justify-center text-[#FF4D00]">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#050505] mb-1">Email Support</h4>
                    <a href={`mailto:${contactConfig.email}`} className="text-neutral-600 hover:text-[#FF4D00] transition-colors text-sm font-light">
                      {contactConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#FF4D00]/5 border border-[#FF4D00]/10 rounded-lg flex items-center justify-center text-[#FF4D00]">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#050505] mb-1">Call Representative</h4>
                    <a href={`tel:${contactConfig.phone.replace(/[^0-9+]/g, '')}`} className="text-neutral-600 hover:text-[#FF4D00] transition-colors text-sm font-light">
                      {contactConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#FF4D00]/5 border border-[#FF4D00]/10 rounded-lg flex items-center justify-center text-[#FF4D00]">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#050505] mb-1">Laboratory Head Office</h4>
                    <p className="text-neutral-600 text-sm font-light leading-relaxed">
                      {contactConfig.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive Form */}
            <div className="lg:col-span-2">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-[#F5F5F3] border border-[#D8D8D5] rounded-3xl p-8 md:p-12 shadow-sm"
              >
                {formState === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-50 border border-green-200 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                      <Mail size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#050505] mb-4">Message Transmitted.</h3>
                    <p className="text-neutral-600 mb-8 max-w-md mx-auto">
                      Thank you for contacting INNOVAC BIOTECHNOLOGIES. Your scientific request has been logged successfully. A specialist will review your parameters shortly.
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => setFormState('idle')}
                      className="text-[#050505] border-[#D8D8D5] hover:bg-neutral-50"
                    >
                      SEND ANOTHER MESSAGE
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {formState === 'error' && (
                      <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm">
                        Transmission failed. Please reach us at <a href={`mailto:${contactConfig.email}`} className="underline font-medium">{contactConfig.email}</a> directly.
                      </div>
                    )}
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-[#050505] mb-2">Full Name *</label>
                        <input 
                          type="text" 
                          id="name" 
                          autoComplete="name"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full bg-white border border-[#D8D8D5] rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-[#050505] mb-2">Email Address *</label>
                        <input 
                          type="email" 
                          id="email" 
                          autoComplete="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-white border border-[#D8D8D5] rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-[#050505] mb-2">Phone Number</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          autoComplete="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-white border border-[#D8D8D5] rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="organization" className="block text-sm font-semibold text-[#050505] mb-2">Organization / Institution</label>
                        <input 
                          type="text" 
                          id="organization" 
                          autoComplete="organization"
                          value={organization}
                          onChange={(e) => setOrganization(e.target.value)}
                          className="w-full bg-white border border-[#D8D8D5] rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="enquiryType" className="block text-sm font-semibold text-[#050505] mb-2">Request Type *</label>
                        <select 
                          value={enquiryType}
                          onChange={(e) => setEnquiryType(e.target.value)}
                          id="enquiryType" 
                          required
                          className="w-full bg-white border border-[#D8D8D5] rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] transition-colors appearance-none"
                        >
                          <option value="">Select an option...</option>
                          {enquiryTypes.map((type, i) => (
                            <option key={i} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="interestArea" className="block text-sm font-semibold text-[#050505] mb-2">Area of Interest</label>
                        <select 
                          value={interestArea}
                          onChange={(e) => setInterestArea(e.target.value)}
                          id="interestArea" 
                          className="w-full bg-white border border-[#D8D8D5] rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] transition-colors appearance-none"
                        >
                          <option value="">Select an area...</option>
                          {interestAreas.map((area, i) => (
                            <option key={i} value={area}>{area}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-[#050505] mb-2">Subject *</label>
                      <input 
                        type="text" 
                        id="subject" 
                        required
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full bg-white border border-[#D8D8D5] rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-[#050505] mb-2">Message *</label>
                      <textarea 
                        id="message" 
                        rows={6}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-white border border-[#D8D8D5] rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] transition-colors resize-none"
                      ></textarea>
                    </div>

                    <div className="pt-6">
                      <Button 
                        type="submit" 
                        disabled={formState === 'submitting'}
                        className="w-full md:w-auto bg-[#FF4D00] hover:bg-[#E64500] text-white border-none py-4 px-8 text-sm font-semibold uppercase tracking-wider"
                      >
                        {formState === 'submitting' ? 'SENDING...' : 'SEND REQUEST →'}
                      </Button>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 05 — WHAT CAN WE HELP WITH? */}
      <section className="py-24 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[#FF4D00] text-sm font-semibold tracking-widest uppercase mb-4 block">
              04 / SCIENTIFIC AREAS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              One Conversation. Multiple Scientific Directions.
            </h2>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden"
          >
            {scientificAreas.map((area, i) => (
              <motion.div key={i} variants={itemVariants} className="bg-[#050505] p-8 group relative overflow-hidden">
                <Link to={area.href} className="absolute inset-0 z-10" />
                <div className="text-[#FF4D00] font-mono text-sm mb-4 opacity-50">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{area.title}</h3>
                
                <div className="absolute bottom-8 right-8 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowRight size={20} className="text-[#FF4D00]" />
                </div>
                
                <div className="absolute inset-0 border border-transparent group-hover:border-[#FF4D00] pointer-events-none transition-colors duration-300 z-20" />
                <div className="absolute inset-0 bg-[#FF4D00]/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 06 — SERVICE-BASED CONTACT PATH */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <span className="text-[#FF4D00] text-sm font-semibold tracking-widest uppercase mb-4 block">
              05 / WHERE TO START
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#050505] leading-tight mb-6">
              Not Sure Where to Start?
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Choose the area closest to your requirement and explore the relevant INNOVAC page before contacting the team.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {servicePaths.map((path, i) => (
              <motion.div key={i} variants={itemVariants} className="bg-[#F5F5F3] p-8 rounded-[24px] border border-[#D8D8D5] flex flex-col items-center text-center group hover:bg-white hover:border-[#FF4D00]/50 transition-colors duration-300 shadow-sm hover:shadow-md h-full">
                <h3 className="text-xl font-bold text-[#050505] mb-6 flex-grow flex items-center justify-center">
                  {path.title}
                </h3>
                <Link to={path.href} className="flex items-center gap-2 text-[#050505] font-semibold text-xs tracking-wider uppercase group-hover:text-[#FF4D00] transition-colors">
                  {path.cta} <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 07 — VISUAL PANEL (No Map if not verified) */}
      <section className="py-24 px-6 bg-[#F5F5F3]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[32px] overflow-hidden border border-[#D8D8D5] flex flex-col md:flex-row min-h-[400px]">
            <div className="w-full md:w-1/2 p-12 lg:p-16 flex flex-col justify-center bg-[#050505] text-white">
              <span className="text-[#FF4D00] text-sm font-semibold tracking-widest uppercase mb-4 block">
                VISIT / CONTACT
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Connect With Our Team.
              </h2>
              <p className="text-neutral-400 mb-8 leading-relaxed max-w-sm">
                For in-person meetings, collaborations, or specific enquiries, please reach out via our contact channels to schedule an appointment.
              </p>
              {contactConfig.email !== "Email details to be added" && (
                <div className="flex items-center gap-3 mb-4">
                  <Mail size={18} className="text-[#FF4D00]" />
                  <span className="text-neutral-300 text-sm">{contactConfig.email}</span>
                </div>
              )}
              {contactConfig.phone !== "Phone details to be added" && (
                 <div className="flex items-center gap-3">
                  <Phone size={18} className="text-[#FF4D00]" />
                  <span className="text-neutral-300 text-sm">{contactConfig.phone}</span>
                </div>
              )}
            </div>
            <div className="w-full md:w-1/2 relative h-64 md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2787&auto=format&fit=crop" 
                alt="Research facility"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#050505]/50 md:to-[#050505]" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 08 — FAQ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#FF4D00] text-sm font-semibold tracking-widest uppercase mb-4 block">
              06 / FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#050505]">
              Contact Information
            </h2>
          </div>
          
          <div className="border-t border-[#D8D8D5]">
            {contactFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="border-b border-[#D8D8D5]">
                  <button 
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                    aria-expanded={isOpen}
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
            LET'S CONNECT
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Your Next <span className="text-[#FF4D00]">Scientific Conversation</span> Starts Here.
          </h2>
          <p className="text-neutral-400 text-lg mb-12 max-w-2xl">
            Tell INNOVAC BIOTECHNOLOGIES what you are working on and explore the right scientific direction for your requirement.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" href="#contact-form" className="bg-[#FF4D00] hover:bg-[#E64500] text-white border-none px-8 py-4 text-sm font-semibold uppercase tracking-wider">
              SEND A REQUEST &rarr;
            </Button>
            <Button variant="outline" href={getCtaPath('REQUEST_QUOTE')} className="text-white border-white/30 hover:bg-white hover:text-black px-8 py-4 text-sm font-semibold uppercase tracking-wider">
              REQUEST A QUOTE &rarr;
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
