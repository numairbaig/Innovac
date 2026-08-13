import { getCtaPath } from '@/src/config/ctaConfig';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, ChevronRight, Check, ArrowRight, FlaskConical, Beaker, TestTube2, ShieldCheck, Clock, MessageSquare, Microscope } from 'lucide-react';
import { SEO } from '@/src/components/SEO';
import { Button } from '@/src/components/ui/Button';
import { reagentsData, ReagentCategory } from '@/src/data/reagents';
import { cn } from '@/src/lib/utils';
import { PageHeroIllustration } from '@/src/components/ui/PageHeroIllustration';

export default function Reagents() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [sortOrder, setSortOrder] = useState('A-Z');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filteredReagents = reagentsData.filter(reagent => {
    const matchesSearch = reagent.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || reagent.category === activeCategory;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    if (sortOrder === 'A-Z') return a.name.localeCompare(b.name);
    return b.name.localeCompare(a.name);
  });

  const faqs = [
    {
      q: "What types of reagents do you provide?",
      a: "We supply a variety of synthesis and supply reagents tailored for molecular biology and laboratory research applications."
    },
    {
      q: "Can I request a specific reagent?",
      a: "Yes, you can request custom or specific reagents not listed in our catalog through our Custom Request form."
    },
    {
      q: "Do you provide custom reagent synthesis?",
      a: "Our team can discuss specific custom synthesis requirements based on your laboratory's needs."
    },
    {
      q: "Can I request pricing?",
      a: "Yes, please use the quote request form to get pricing, availability, and specific product information."
    },
    {
      q: "How can I discuss bulk requirements?",
      a: "For bulk orders, please contact our support team or indicate your requirements in the quote request form."
    },
    {
      q: "Do you supply reagents for research institutions?",
      a: "Yes, we proudly support universities, research laboratories, and biotechnology organizations."
    }
  ];

  return (
    <>
      <SEO 
        title="Laboratory Reagents | INNOVAC BIOTECHNOLOGIES" 
        description="Explore laboratory reagents, synthesis solutions, restriction enzymes, oligos, polymerases, master mixes, buffers, and research supplies from INNOVAC BIOTECHNOLOGIES."
      />

      {/* SECTION 01 — REAGENTS HERO */}
      <section className="relative w-full pt-24 pb-16 lg:pt-28 lg:pb-20 px-6 bg-[#050505] text-white overflow-hidden">
        {/* Subtle Radial Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#050505]" />
          <div className="absolute right-0 top-0 w-[60%] h-full bg-[radial-gradient(ellipse_at_70%_40%,rgba(255,77,0,0.08)_0%,transparent_65%)]" />
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] bg-[length:32px_32px]" />
        </div>

        <div className="max-w-[1400px] mx-auto relative z-20 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-3xl lg:w-3/5">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-2 text-[10px] font-semibold text-neutral-400 uppercase tracking-widest mb-6">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight size={12} />
                <span className="text-white">Reagents</span>
              </div>
              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#FF4D00] mb-6">
                LABORATORY REAGENTS
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-[76px] font-medium tracking-tight leading-[1.05] mb-8 text-white">
                Laboratory Reagents<br />
                Built for <span className="text-[#FF4D00]">Research.</span>
              </h1>
              <p className="text-lg text-neutral-300 max-w-2xl mb-16 leading-relaxed font-light">
                Reliable laboratory reagents and supplies supporting molecular biology, biotechnology, research, and scientific applications.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Button href={getCtaPath('DISCUSS_REAGENTS')} variant="primary" className="bg-[#FF4D00] hover:bg-[#E64500] text-white border-none px-8 py-4 text-sm font-semibold uppercase tracking-wider">
                  BROWSE REAGENTS &rarr;
                </Button>
                <Button href={getCtaPath('REQUEST_QUOTE')} variant="outline" className="text-white border-white/30 hover:bg-white hover:text-black px-8 py-4 text-sm font-semibold uppercase tracking-wider">
                  REQUEST A QUOTE &rarr;
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Area */}
            <PageHeroIllustration page="reagents" className="lg:w-2/5" />
        </div>
      </section>

      {/* SECTION 02 — REAGENT CATEGORIES */}
      <section className="py-24 px-6 bg-[#F5F5F3]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[#FF4D00] text-sm font-semibold tracking-widest uppercase mb-4 block">
              01 / CATEGORIES
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-[#050505] max-w-md leading-tight">
              Choose the Right<br />Reagent Solution.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 01 - Synthesis */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[24px] overflow-hidden border border-[#D8D8D5] group hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative flex flex-col h-full"
            >
              <div className="p-10 md:p-12 flex flex-col flex-grow">
                <span className="text-6xl font-medium text-[#FF4D00] mb-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">01</span>
                <h3 className="text-3xl font-medium text-[#050505] mb-4">SYNTHESIS</h3>
                <p className="text-neutral-600 mb-8 leading-relaxed">
                  Custom and prepared laboratory reagents for research applications.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2 mb-10 flex-grow">
                  {['Deionized Water', 'TRIzol', 'TAE Buffer', 'TBE Buffer', 'Ethidium Bromide', 'Media Formation'].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm text-neutral-600 font-medium">
                      <Check size={16} className="text-[#FF4D00]" /> {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-[#FF4D00] font-semibold text-sm tracking-wider uppercase group-hover:gap-4 transition-all mt-auto cursor-pointer">
                  EXPLORE SYNTHESIS <ArrowRight size={18} />
                </div>
              </div>
              <div className="h-64 w-full overflow-hidden relative border-t border-[#D8D8D5]">
                <img 
                  src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Synthesis Laboratory" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#FF4D00] rounded-[24px] pointer-events-none transition-colors duration-500" />
            </motion.div>

            {/* Card 02 - Supply */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-black rounded-[24px] overflow-hidden border border-[#D8D8D5] group hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative flex flex-col h-full"
            >
              <div className="p-10 md:p-12 flex flex-col flex-grow">
                <span className="text-6xl font-medium text-[#FF4D00] mb-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">02</span>
                <h3 className="text-3xl font-medium text-white mb-4">SUPPLY</h3>
                <p className="text-neutral-400 mb-8 leading-relaxed">
                  Research-grade laboratory products and essential molecular biology supplies.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2 mb-10 flex-grow">
                  {['Restriction Enzymes', 'Oligos', 'Polymerases', 'Master Mixes', 'Media Supply'].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm text-neutral-300 font-medium">
                      <Check size={16} className="text-[#FF4D00]" /> {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-[#FF4D00] font-semibold text-sm tracking-wider uppercase group-hover:gap-4 transition-all mt-auto cursor-pointer">
                  EXPLORE SUPPLY <ArrowRight size={18} />
                </div>
              </div>
              <div className="h-64 w-full overflow-hidden relative border-t border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1532187643603-ba119ca4109e?q=80&w=2940&auto=format&fit=crop" 
                  alt="Molecular Supply" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" 
                />
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#FF4D00] rounded-[24px] pointer-events-none transition-colors duration-500" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 03 — REAGENT CATALOG */}
      <section id="catalog" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[#FF4D00] text-sm font-semibold tracking-widest uppercase mb-4 block">
              02 / REAGENT CATALOG
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-[#050505] mb-6">
              Explore Our<br />Laboratory Reagents.
            </h2>
            <p className="text-neutral-600 max-w-2xl leading-relaxed">
              Browse our reagent categories and contact our team for availability, specifications, quantities, and pricing.
            </p>
          </div>

          {/* Catalog Toolbar */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-12 bg-neutral-50 p-4 rounded-2xl border border-[#D8D8D5]">
            <div className="relative w-full md:w-96">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input 
                type="text" 
                placeholder="Search Reagents..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-[#D8D8D5] rounded-xl text-sm focus:outline-none focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] transition-colors" 
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative">
                <select 
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="w-full sm:w-48 appearance-none bg-white border border-[#D8D8D5] rounded-xl px-4 py-3 pr-10 text-sm focus:outline-none focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] transition-colors"
                >
                  <option value="All">All Categories</option>
                  <option value="Synthesis">Synthesis</option>
                  <option value="Supply">Supply</option>
                </select>
                <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" />
              </div>
              <div className="relative">
                <select 
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="w-full sm:w-48 appearance-none bg-white border border-[#D8D8D5] rounded-xl px-4 py-3 pr-10 text-sm focus:outline-none focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] transition-colors"
                >
                  <option value="A-Z">Name A–Z</option>
                  <option value="Z-A">Name Z–A</option>
                </select>
                <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Reagent Grid */}
          {filteredReagents.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredReagents.map((reagent, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  key={reagent.id} 
                  className="bg-white border border-[#D8D8D5] rounded-[20px] overflow-hidden group hover:shadow-xl transition-all duration-300 relative flex flex-col"
                >
                  <div className="h-56 overflow-hidden bg-neutral-100 border-b border-[#D8D8D5]">
                    <img 
                      src={reagent.image} 
                      alt={reagent.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-widest bg-neutral-100 px-3 py-1 rounded-full">
                        {reagent.category}
                      </span>
                      <TestTube2 size={18} className="text-[#FF4D00] opacity-50" />
                    </div>
                    <h4 className="text-xl font-medium text-[#050505] mb-3">{reagent.name}</h4>
                    <p className="text-sm text-neutral-600 mb-8 leading-relaxed line-clamp-3">
                      {reagent.description}
                    </p>
                    <div className="mt-auto flex items-center justify-between cursor-pointer">
                      <span className="text-xs font-bold tracking-wider text-[#FF4D00] uppercase">Request a Quote</span>
                      <div className="w-8 h-8 rounded-full bg-[#FF4D00]/10 flex items-center justify-center group-hover:bg-[#FF4D00] transition-colors">
                        <ArrowRight size={14} className="text-[#FF4D00] group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#FF4D00] rounded-[20px] pointer-events-none transition-colors duration-300" />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-neutral-50 rounded-2xl border border-[#D8D8D5]">
              <Search size={40} className="mx-auto text-neutral-300 mb-4" />
              <h3 className="text-xl font-medium text-[#050505] mb-2">No Reagents Found</h3>
              <p className="text-neutral-500">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 04 — SYNTHESIS */}
      <section className="py-24 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-12">
                <span className="text-[#FF4D00] text-sm font-semibold tracking-widest uppercase mb-4 block">
                  03 / SYNTHESIS
                </span>
                <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
                  Prepared for<br /><span className="text-[#FF4D00] font-medium">Scientific Precision.</span>
                </h2>
              </div>
              <ul className="flex flex-col">
                {['Deionized Water', 'TRIzol', 'TAE Buffer', 'TBE Buffer', 'Ethidium Bromide', 'Media Formation'].map((item, i) => (
                  <li key={item} className="group flex items-center justify-between py-6 border-b border-white/10 hover:border-[#FF4D00] transition-colors cursor-pointer">
                    <div className="flex items-center gap-8">
                      <span className="text-xl font-medium text-neutral-600 group-hover:text-[#FF4D00] transition-colors">0{i + 1}</span>
                      <span className="text-2xl font-light text-white group-hover:text-white transition-colors">{item}</span>
                    </div>
                    <ArrowRight className="text-neutral-600 group-hover:text-[#FF4D00] transform group-hover:translate-x-2 transition-all" />
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[600px] rounded-3xl overflow-hidden hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2940&auto=format&fit=crop" 
                alt="Synthesis Precision" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05 — SUPPLY */}
      <section className="py-24 px-6 bg-[#F5F5F3]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[600px] rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2940&auto=format&fit=crop" 
                alt="Laboratory Supply" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="mb-10">
                <span className="text-[#FF4D00] text-sm font-semibold tracking-widest uppercase mb-4 block">
                  04 / SUPPLY
                </span>
                <h2 className="text-4xl md:text-5xl font-light text-[#050505] leading-tight mb-6">
                  Essential Supplies for<br />Molecular Research.
                </h2>
                <p className="text-neutral-600 text-lg leading-relaxed mb-10">
                  A selection of laboratory supplies supporting molecular biology and biotechnology research workflows.
                </p>
                <ul className="space-y-4 mb-12">
                  {['Restriction Enzymes', 'Oligos', 'Polymerases', 'Master Mixes', 'Media Supply'].map(item => (
                    <li key={item} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-white border border-[#D8D8D5] flex items-center justify-center">
                        <Check size={14} className="text-[#FF4D00]" />
                      </div>
                      <span className="text-lg font-medium text-[#050505]">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="primary" className="bg-[#FF4D00] hover:bg-[#E64500] text-white px-8 py-4">
                  REQUEST SUPPLY INFORMATION &rarr;
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06 — WHY INNOVAC REAGENTS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-[#FF4D00] text-sm font-semibold tracking-widest uppercase mb-4 block">
              05 / WHY INNOVAC
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-[#050505]">
              More Than a Reagent Supplier.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Research Focused', desc: 'Solutions designed around laboratory and research needs.', icon: Microscope },
              { num: '02', title: 'Quality Minded', desc: 'A professional approach to reagent preparation and supply.', icon: ShieldCheck },
              { num: '03', title: 'Responsive Support', desc: 'Clear communication for product and research requirements.', icon: Clock },
              { num: '04', title: 'Custom Requirements', desc: 'Discuss specific reagent or supply needs with our team.', icon: MessageSquare }
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="p-8 rounded-3xl bg-neutral-50 border border-[#D8D8D5]">
                  <div className="flex justify-between items-start mb-8">
                    <Icon size={32} className="text-[#FF4D00] font-light stroke-[1.5]" />
                    <span className="text-neutral-300 font-medium">{feature.num}</span>
                  </div>
                  <h4 className="text-xl font-medium text-[#050505] mb-3">{feature.title}</h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 07 — CUSTOM REQUEST */}
      <section className="py-24 px-6 bg-[#050505] relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2874&auto=format&fit=crop" 
            alt="Molecular" 
            className="w-full h-full object-cover mix-blend-screen"
          />
        </div>
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-8">
            <Beaker size={28} className="text-[#FF4D00]" />
          </div>
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6">
            Can't Find<br />What You <span className="text-[#FF4D00] font-medium">Need?</span>
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
            Tell us what reagent, material, or laboratory supply you are looking for and our team can discuss your requirements.
          </p>
          <Button variant="primary" href={getCtaPath('REQUEST_QUOTE')} className="bg-[#FF4D00] hover:bg-[#E64500] text-white px-8 py-4">
            REQUEST A CUSTOM QUOTE &rarr;
          </Button>
        </div>
      </section>

      {/* SECTION 08 — REQUEST FORM */}
      <section className="py-24 px-6 bg-[#F5F5F3]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-[#050505] mb-4">Request Reagent Information.</h2>
            <p className="text-neutral-600">Fill out the form below to receive pricing, specifications, and availability.</p>
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-[24px] border border-[#D8D8D5] shadow-sm">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#050505] mb-2">Full Name</label>
                  <input type="text" className="w-full bg-neutral-50 border border-[#D8D8D5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#050505] mb-2">Email Address</label>
                  <input type="email" className="w-full bg-neutral-50 border border-[#D8D8D5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] transition-colors" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#050505] mb-2">Phone</label>
                  <input type="tel" className="w-full bg-neutral-50 border border-[#D8D8D5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#050505] mb-2">Organization / Laboratory</label>
                  <input type="text" className="w-full bg-neutral-50 border border-[#D8D8D5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] transition-colors" />
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-[#050505] mb-2">Reagent / Product Needed</label>
                  <input type="text" className="w-full bg-neutral-50 border border-[#D8D8D5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#050505] mb-2">Category</label>
                  <div className="relative">
                    <select className="w-full appearance-none bg-neutral-50 border border-[#D8D8D5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] transition-colors">
                      <option>Synthesis</option>
                      <option>Supply</option>
                      <option>Other</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#050505] mb-2">Quantity Required</label>
                  <input type="text" placeholder="e.g., 500ml, 10 units" className="w-full bg-neutral-50 border border-[#D8D8D5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#050505] mb-2">File Upload (Optional)</label>
                  <input type="file" className="w-full bg-neutral-50 border border-[#D8D8D5] rounded-xl px-4 py-2 text-sm text-neutral-500 file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-[#FF4D00]/10 file:text-[#FF4D00] hover:file:bg-[#FF4D00]/20 transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#050505] mb-2">Additional Message or Specifications</label>
                <textarea rows={4} className="w-full bg-neutral-50 border border-[#D8D8D5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] transition-colors"></textarea>
              </div>

              <div className="pt-4">
                <Button variant="primary" type="submit" className="w-full bg-[#FF4D00] hover:bg-[#E64500] text-white py-4 text-base">
                  SEND REQUEST &rarr;
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* SECTION 09 — FAQ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-[#050505] mb-12 text-center">Frequently Asked Questions</h2>
          <div className="border-t border-[#D8D8D5]">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="border-b border-[#D8D8D5]">
                  <button 
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                  >
                    <span className="text-lg font-medium text-[#050505] group-hover:text-[#FF4D00] transition-colors">{faq.q}</span>
                    <ChevronDown size={20} className={cn("text-neutral-400 transition-transform duration-300", isOpen && "rotate-180 text-[#FF4D00]")} />
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
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Ready to Find the<br />Right Research Reagent?
          </h2>
          <p className="text-neutral-400 text-lg mb-12">
            Tell us what your laboratory or research project requires.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href={getCtaPath('REQUEST_QUOTE')} variant="primary" className="bg-[#FF4D00] hover:bg-[#E64500] text-white border-none px-8 py-4">
              REQUEST A QUOTE &rarr;
            </Button>
            <Button href={getCtaPath('CONSULTATION_REQUEST')} variant="outline" className="text-white border-white/30 hover:bg-white hover:text-black px-8 py-4">
              CONTACT US &rarr;
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
