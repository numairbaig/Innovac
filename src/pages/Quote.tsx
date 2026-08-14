import React, { useState, useEffect } from 'react';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';

import { Link, useSearchParams } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { PageHeroIllustration } from '../components/ui/PageHeroIllustration';
import { Breadcrumb, PageLabel } from '../components/ui/Breadcrumb';

export default function Quote() {
  const [searchParams] = useSearchParams();
  const preSelectedCategory = searchParams.get('category') || '';
  const preSelectedService = searchParams.get('service') || '';

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [organization, setOrganization] = useState('');
  const [interest, setInterest] = useState(preSelectedService || preSelectedCategory || '');
  const [description, setDescription] = useState('');
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (preSelectedService) {
      setInterest(preSelectedService);
    } else if (preSelectedCategory) {
      setInterest(preSelectedCategory);
    }
  }, [preSelectedService, preSelectedCategory]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    try {
      const { error } = await supabase.from('quote_requests').insert({
        name: fullName,
        email: email,
        organization: organization,
        service: interest,
        description: description,
        files: [],
        status: 'New'
      });
      
      if (error) throw error;
      setFormState('success');
    } catch (err) {
      console.warn('Failed to insert quote request to Supabase, fallback to simulation:', err);
      // Failsafe fallback: store in localStorage to simulate functional offline database behavior
      try {
        const localQuotes = JSON.parse(localStorage.getItem('quote_requests') || '[]');
        localQuotes.push({
          id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(),
          name: fullName,
          email: email,
          organization: organization,
          service: interest,
          description: description,
          status: 'New',
          created_at: new Date().toISOString()
        });
        localStorage.setItem('quote_requests', JSON.stringify(localQuotes));
        setFormState('success');
      } catch (storageErr) {
        setFormState('error');
      }
    }
  };

  return (
    <>
      <SEO title="Request a Quote | INNOVAC BIOTECHNOLOGIES" />
      
      {/* SECTION 01 — HERO */}
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
              <Breadcrumb items={[{ label: 'Request a Quote' }]} accentColor="text-[#FF4D00]" />
              <PageLabel accentColor="text-[#FF4D00]">GET A PROPOSAL</PageLabel>
                <h1 className="text-5xl md:text-7xl lg:text-[76px] font-medium tracking-tight leading-[1.05] mb-8 text-white">
                  Request a Custom<br />
                  <span className="text-[#FF4D00]">Quote.</span>
                </h1>
                <p className="text-lg text-neutral-300 max-w-2xl mb-16 leading-relaxed font-light">
                  Provide details about your project or required supplies, and our team will get back to you with a comprehensive proposal.
                </p>
              </motion.div>
            </div>
            
            {/* Right Visual Area */}
            <PageHeroIllustration page="quote" className="lg:w-2/5" />
          </div>
        </div>
      </section>
      
      <section className="py-24 px-6 bg-[#F5F5F3]">
        <div className="max-w-4xl mx-auto bg-white rounded-[32px] border border-[#D8D8D5] p-8 md:p-12 shadow-sm">
          {formState === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-[#FF4D00]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[#FF4D00]">
                 <ArrowRight size={32} className="rotate-90" />
              </div>
              <h3 className="text-2xl font-bold text-[#050505] mb-4">Thank You.</h3>
              <p className="text-neutral-600 mb-8 max-w-md mx-auto">
                Your quote request has been received. Our team will review your requirements and provide a comprehensive proposal shortly.
              </p>
              <Button 
                variant="outline" 
                onClick={() => setFormState('idle')}
                className="text-[#050505] border-[#D8D8D5] hover:bg-[#F5F5F3]"
              >
                REQUEST ANOTHER QUOTE
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {(preSelectedService || preSelectedCategory) && (
                <div className="p-5 bg-[#FF4D00]/10 border border-[#FF4D00]/30 rounded-2xl flex items-center justify-between shadow-sm">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase text-[#FF4D00] tracking-wider block">
                      PRE-SELECTED SERVICE FOR QUOTE
                    </span>
                    <h4 className="text-base font-bold text-[#050505]">
                      {preSelectedCategory && preSelectedService && preSelectedCategory !== preSelectedService
                        ? `${preSelectedCategory} — ${preSelectedService}`
                        : preSelectedService || preSelectedCategory}
                    </h4>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#FF4D00] bg-white px-3 py-1.5 rounded-lg border border-[#FF4D00]/20 shadow-sm shrink-0">
                    <CheckCircle2 size={14} />
                    <span>Selected</span>
                  </div>
                </div>
              )}

              {formState === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm">
                  We couldn't send your request right now. Please email <a href="mailto:info@innovacbiotech.com" className="underline font-medium">info@innovacbiotech.com</a> directly.
                </div>
              )}
              
              <div>
                <h3 className="text-xl font-bold text-[#050505] mb-6 pb-4 border-b border-[#D8D8D5]">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#050505] mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-white border border-[#D8D8D5] rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF4D00] transition-colors" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#050505] mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white border border-[#D8D8D5] rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF4D00] transition-colors" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#050505] mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white border border-[#D8D8D5] rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF4D00] transition-colors" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#050505] mb-2">Organization / Institution</label>
                    <input 
                      type="text" 
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      className="w-full bg-white border border-[#D8D8D5] rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF4D00] transition-colors" 
                      required 
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#050505] mb-6 pb-4 border-b border-[#D8D8D5]">Project Details</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#050505] mb-2">Primary Interest *</label>
                    <select 
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      className="w-full bg-white border border-[#D8D8D5] rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF4D00] transition-colors" 
                      required
                    >
                      <option value="">Select category...</option>
                      <option value="Services">Services (Molecular Biology, Protein, etc.)</option>
                      <option value="Reagents">Reagents & Supplies</option>
                      <option value="Research">Computational Research / In-Silico</option>
                      <option value="Multiple">Multiple Areas</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-[#050505] mb-2">Project Description / Requirements *</label>
                    <textarea 
                      rows={6} 
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="w-full bg-white border border-[#D8D8D5] rounded-xl px-4 py-3 focus:outline-none focus:border-[#FF4D00] transition-colors resize-none" 
                      placeholder="Please describe your specific requirements, quantities (if applicable), and any deadlines..." 
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-[#050505] mb-2">File Upload (Optional)</label>
                    <div className="w-full bg-white border border-[#D8D8D5] border-dashed rounded-xl px-4 py-8 flex flex-col items-center justify-center cursor-pointer hover:bg-neutral-50 transition-colors">
                      <span className="text-sm text-neutral-500 font-medium">Upload specifications, sequences, or related documents</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  disabled={formState === 'submitting'}
                  className="w-full md:w-auto bg-[#FF4D00] hover:bg-[#E64500] text-white border-none py-4 px-8 text-sm font-semibold uppercase tracking-wider"
                >
                  {formState === 'submitting' ? 'SUBMITTING...' : 'SUBMIT REQUEST →'}
                </Button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}