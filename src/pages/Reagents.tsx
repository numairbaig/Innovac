import { getCtaPath } from '@/src/config/ctaConfig';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, ChevronDown, ChevronRight, Check, ArrowRight, FlaskConical, 
  Beaker, TestTube2, ShieldCheck, Clock, MessageSquare, Microscope, 
  Sparkles, ExternalLink, Filter 
} from 'lucide-react';
import { SEO } from '@/src/components/SEO';
import { Button } from '@/src/components/ui/Button';
import { Breadcrumb, PageLabel } from '@/src/components/ui/Breadcrumb';
import { reagentsData, ReagentCategory } from '@/src/data/reagents';
import { cn } from '@/src/lib/utils';
import { PageHeroIllustration } from '@/src/components/ui/PageHeroIllustration';
import { MolecularBackgroundEffect } from '@/src/components/ui/MolecularBackgroundEffect';
import { BASE44_ORDER_PORTAL_URL } from '@/src/config/portalConfig';

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
    <div className="bg-[#030B17] text-white">
      <SEO 
        title="Laboratory Reagents | INNOVAC BIOTECHNOLOGIES" 
        description="Explore laboratory reagents, synthesis solutions, restriction enzymes, oligos, polymerases, master mixes, buffers, and research supplies from INNOVAC BIOTECHNOLOGIES."
      />

      {/* SECTION 01 — REAGENTS HERO */}
      <section className="relative w-full pt-28 pb-16 lg:pt-32 lg:pb-24 px-6 bg-[#030B17] text-white overflow-hidden border-b border-[#00E5FF]/20">
        <MolecularBackgroundEffect particleColor="0, 229, 255" lineColor="0, 150, 255" particleCount={45} />

        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#030B17] via-[#05152F] to-[#030B17]" />
          <div className="absolute right-0 top-0 w-[60%] h-full bg-[radial-gradient(ellipse_at_70%_40%,rgba(0,229,255,0.14)_0%,transparent_65%)]" />
          <div className="absolute left-1/4 bottom-0 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,#00E5FF_1px,transparent_1px)] bg-[length:32px_32px]" />
        </div>

        <div className="max-w-[1400px] mx-auto relative z-20 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-3xl lg:w-3/5">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Breadcrumb items={[{ label: 'Reagents' }]} accentColor="text-[#00E5FF]" />
              <PageLabel accentColor="text-[#00E5FF]">LABORATORY REAGENTS & SUPPLIES</PageLabel>
              <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-medium tracking-tight leading-[1.05] mb-6 text-white">
                Laboratory Reagents<br />
                Built for <span className="bg-gradient-to-r from-[#00E5FF] via-[#00C2FF] to-[#0066FF] bg-clip-text text-transparent">Research.</span>
              </h1>
              <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mb-8 leading-relaxed font-light">
                Reliable laboratory reagents, buffers, and molecular supplies supporting biotechnology, scientific experiments, and institutional workflows.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <Button 
                  href="#catalog"
                  variant="primary" 
                  className="bg-gradient-to-r from-[#0066FF] to-[#00C2FF] hover:from-[#0055D4] hover:to-[#00E5FF] text-white border-none px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-xl shadow-[0_0_25px_rgba(0,194,255,0.35)]"
                >
                  BROWSE REAGENTS &rarr;
                </Button>
                <a 
                  href={BASE44_ORDER_PORTAL_URL}
                  className="h-12 px-6 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 hover:border-[#00E5FF] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all"
                >
                  <span>ORDER IN PORTAL</span>
                  <ExternalLink size={15} className="text-[#00E5FF]" />
                </a>
                <Button 
                  href={getCtaPath('REQUEST_QUOTE')} 
                  variant="dark" 
                  className="border-white/30 text-white hover:border-[#00E5FF] px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-xl"
                >
                  REQUEST A QUOTE &rarr;
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 max-w-md">
                <div>
                  <span className="text-xl font-bold text-[#00E5FF] block">Synthesis</span>
                  <span className="text-xs text-neutral-400">Custom Buffers</span>
                </div>
                <div>
                  <span className="text-xl font-bold text-[#00C2FF] block">Supply</span>
                  <span className="text-xs text-neutral-400">Enzymes & Oligos</span>
                </div>
                <div>
                  <span className="text-xl font-bold text-[#0066FF] block">Certified</span>
                  <span className="text-xs text-neutral-400">Research Grade</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Area */}
          <PageHeroIllustration page="reagents" className="lg:w-2/5" />
        </div>
      </section>

      {/* SECTION 02 — REAGENT CATEGORIES (Dark Navy & Glowing Cyan Cards) */}
      <section className="py-24 px-6 bg-[#051329] border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[#00E5FF] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
              01 / CATEGORIES
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white max-w-md leading-tight">
              Choose the Right<br />Reagent Solution.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 01 - Synthesis */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#030B17] rounded-[24px] overflow-hidden border border-white/10 group hover:border-[#00E5FF]/60 hover:shadow-[0_15px_40px_rgba(0,229,255,0.15)] hover:-translate-y-1.5 transition-all duration-500 relative flex flex-col h-full"
            >
              <div className="p-8 md:p-12 flex flex-col flex-grow">
                <span className="text-5xl md:text-6xl font-bold text-[#00E5FF] mb-6 opacity-30 group-hover:opacity-100 transition-opacity duration-500 font-mono">01</span>
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#00E5FF] transition-colors">SYNTHESIS</h3>
                <p className="text-neutral-300 mb-8 leading-relaxed font-light">
                  Custom and prepared laboratory reagents for research applications.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2 mb-10 flex-grow">
                  {['Deionized Water', 'TRIzol', 'TAE Buffer', 'TBE Buffer', 'Ethidium Bromide', 'Media Formation'].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm text-neutral-300 font-medium">
                      <div className="w-5 h-5 rounded-full bg-[#00E5FF]/10 flex items-center justify-center text-[#00E5FF] shrink-0">
                        <Check size={13} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#catalog" className="flex items-center gap-2 text-[#00E5FF] font-semibold text-xs tracking-wider uppercase group-hover:gap-4 transition-all mt-auto cursor-pointer">
                  EXPLORE SYNTHESIS <ArrowRight size={16} />
                </a>
              </div>
              <div className="h-64 w-full overflow-hidden relative border-t border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Synthesis Laboratory" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030B17] via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* Card 02 - Supply */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#030B17] rounded-[24px] overflow-hidden border border-white/10 group hover:border-[#00C2FF]/60 hover:shadow-[0_15px_40px_rgba(0,194,255,0.15)] hover:-translate-y-1.5 transition-all duration-500 relative flex flex-col h-full"
            >
              <div className="p-8 md:p-12 flex flex-col flex-grow">
                <span className="text-5xl md:text-6xl font-bold text-[#00C2FF] mb-6 opacity-30 group-hover:opacity-100 transition-opacity duration-500 font-mono">02</span>
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#00C2FF] transition-colors">SUPPLY</h3>
                <p className="text-neutral-300 mb-8 leading-relaxed font-light">
                  Research-grade laboratory products and essential molecular biology supplies.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2 mb-10 flex-grow">
                  {['Restriction Enzymes', 'Oligos', 'Polymerases', 'Master Mixes', 'Media Supply'].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm text-neutral-300 font-medium">
                      <div className="w-5 h-5 rounded-full bg-[#00C2FF]/10 flex items-center justify-center text-[#00C2FF] shrink-0">
                        <Check size={13} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#catalog" className="flex items-center gap-2 text-[#00C2FF] font-semibold text-xs tracking-wider uppercase group-hover:gap-4 transition-all mt-auto cursor-pointer">
                  EXPLORE SUPPLY <ArrowRight size={16} />
                </a>
              </div>
              <div className="h-64 w-full overflow-hidden relative border-t border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1532187643603-ba119ca4109e?q=80&w=2940&auto=format&fit=crop" 
                  alt="Molecular Supply" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030B17] via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 03 — REAGENT CATALOG (Modern Dark Catalog Grid) */}
      <section id="catalog" className="py-24 px-6 bg-[#030B17] border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[#00E5FF] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
              02 / REAGENT CATALOG
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Explore Our<br />Laboratory Reagents.
            </h2>
            <p className="text-neutral-300 max-w-2xl leading-relaxed font-light">
              Browse our reagent categories and contact our team for availability, specifications, quantities, and pricing.
            </p>
          </div>

          {/* Catalog Toolbar */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-12 bg-[#051329] p-4 rounded-2xl border border-white/10">
            <div className="relative w-full md:w-96">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input 
                type="text" 
                placeholder="Search Reagents..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-[#030B17] border border-white/10 text-white rounded-xl text-sm focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-colors placeholder-neutral-500" 
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative">
                <select 
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="w-full sm:w-48 appearance-none bg-[#030B17] border border-white/10 text-white rounded-xl px-4 py-3 pr-10 text-sm focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-colors"
                >
                  <option value="All">All Categories</option>
                  <option value="Synthesis">Synthesis</option>
                  <option value="Supply">Supply</option>
                </select>
                <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
              </div>
              <div className="relative">
                <select 
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="w-full sm:w-48 appearance-none bg-[#030B17] border border-white/10 text-white rounded-xl px-4 py-3 pr-10 text-sm focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-colors"
                >
                  <option value="A-Z">Name A–Z</option>
                  <option value="Z-A">Name Z–A</option>
                </select>
                <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
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
                  className="bg-[#051329] border border-white/10 rounded-[20px] overflow-hidden group hover:border-[#00E5FF]/60 hover:shadow-[0_10px_35px_rgba(0,229,255,0.15)] transition-all duration-300 relative flex flex-col hover:-translate-y-1.5"
                >
                  <Link to={`/reagents/${reagent.slug}`} className="flex flex-col flex-grow">
                    <div className="h-56 overflow-hidden bg-[#030B17] border-b border-white/10 relative">
                      <img 
                        src={reagent.image} 
                        alt={reagent.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#051329] via-transparent to-transparent" />
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-[10px] font-bold text-[#00E5FF] uppercase tracking-widest bg-[#00E5FF]/10 border border-[#00E5FF]/30 px-3 py-1 rounded-full">
                          {reagent.category}
                        </span>
                        <TestTube2 size={18} className="text-[#00E5FF] opacity-70" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#00E5FF] transition-colors">{reagent.name}</h4>
                      <p className="text-xs sm:text-sm text-neutral-400 mb-6 leading-relaxed line-clamp-3 font-light">
                        {reagent.description}
                      </p>
                    </div>
                  </Link>
                  <div className="px-8 pb-8 mt-auto flex items-center justify-between z-10 relative border-t border-white/5 pt-4">
                    <Link to={getCtaPath('REQUEST_QUOTE')} className="flex items-center justify-between w-full group/btn cursor-pointer">
                      <span className="text-xs font-bold tracking-wider text-[#00E5FF] uppercase group-hover/btn:text-[#00C2FF] transition-colors">Request a Quote</span>
                      <div className="w-8 h-8 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center group-hover/btn:bg-[#00E5FF] group-hover/btn:text-[#030B17] transition-all">
                        <ArrowRight size={14} className="text-[#00E5FF] group-hover/btn:text-[#030B17] transition-colors" />
                      </div>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-[#051329] rounded-2xl border border-white/10">
              <Search size={40} className="mx-auto text-neutral-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">No Reagents Found</h3>
              <p className="text-neutral-400 text-sm">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 04 — SYNTHESIS PRECISION */}
      <section className="py-24 px-6 bg-[#051329] border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-12">
                <span className="text-[#00E5FF] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
                  03 / SYNTHESIS
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                  Prepared for<br /><span className="bg-gradient-to-r from-[#00E5FF] to-[#0066FF] bg-clip-text text-transparent font-medium">Scientific Precision.</span>
                </h2>
              </div>
              <div className="flex flex-col">
                {['Deionized Water', 'TRIzol', 'TAE Buffer', 'TBE Buffer', 'Ethidium Bromide', 'Media Formation'].map((item, i) => (
                  <Link to={`/reagents/${item.toLowerCase().replace(/\s+/g, '-')}`} key={item} className="group flex items-center justify-between py-6 border-b border-white/10 hover:border-[#00E5FF] transition-colors cursor-pointer">
                    <div className="flex items-center gap-8">
                      <span className="text-lg font-mono font-bold text-neutral-500 group-hover:text-[#00E5FF] transition-colors">0{i + 1}</span>
                      <span className="text-xl font-light text-white group-hover:text-[#00E5FF] transition-colors">{item}</span>
                    </div>
                    <ArrowRight className="text-neutral-500 group-hover:text-[#00E5FF] transform group-hover:translate-x-2 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative h-[600px] rounded-[28px] overflow-hidden hidden lg:block border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2940&auto=format&fit=crop" 
                alt="Synthesis Precision" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051329]/90 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05 — SUPPLY ESSENTIALS */}
      <section className="py-24 px-6 bg-[#030B17] border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[600px] rounded-[28px] overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2940&auto=format&fit=crop" 
                alt="Laboratory Supply" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030B17]/90 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="mb-10">
                <span className="text-[#00E5FF] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
                  04 / SUPPLY
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
                  Essential Supplies for<br />Molecular Research.
                </h2>
                <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-10 font-light">
                  A selection of laboratory supplies supporting molecular biology and biotechnology research workflows.
                </p>
                <div className="space-y-4 mb-12">
                  {['Restriction Enzymes', 'Oligos', 'Polymerases', 'Master Mixes', 'Media Supply'].map(item => (
                    <Link to={`/reagents/${item.toLowerCase().replace(/\s+/g, '-')}`} key={item} className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-8 h-8 rounded-full bg-[#051329] border border-white/10 flex items-center justify-center group-hover:border-[#00E5FF] transition-colors">
                        <Check size={14} className="text-[#00E5FF]" />
                      </div>
                      <span className="text-lg font-light text-white group-hover:text-[#00E5FF] transition-colors">{item}</span>
                    </Link>
                  ))}
                </div>
                <Button 
                  href={getCtaPath('REQUEST_QUOTE')} 
                  variant="primary" 
                  className="bg-gradient-to-r from-[#0066FF] to-[#00C2FF] hover:from-[#0055D4] hover:to-[#00E5FF] text-white px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-xl shadow-[0_0_20px_rgba(0,194,255,0.35)]"
                >
                  REQUEST SUPPLY INFORMATION &rarr;
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06 — WHY INNOVAC REAGENTS */}
      <section className="py-24 px-6 bg-[#051329] border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-[#00E5FF] text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
              05 / WHY INNOVAC
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
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
                <div key={i} className="p-8 rounded-[24px] bg-[#030B17] border border-white/10 hover:border-[#00E5FF]/60 transition-all duration-300 hover:-translate-y-1.5 shadow-lg">
                  <div className="flex justify-between items-start mb-8">
                    <Icon size={32} className="text-[#00E5FF] stroke-[1.5]" />
                    <span className="text-neutral-500 font-mono font-bold text-sm">{feature.num}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                  <p className="text-sm text-neutral-400 leading-relaxed font-light">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 07 — CUSTOM REQUEST CTA */}
      <section className="py-24 px-6 bg-[#030B17] relative overflow-hidden text-center border-b border-white/10">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2874&auto=format&fit=crop" 
            alt="Molecular" 
            className="w-full h-full object-cover mix-blend-screen"
          />
        </div>
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full border border-[#00E5FF]/40 bg-[#00E5FF]/10 flex items-center justify-center mb-8 text-[#00E5FF] shadow-[0_0_20px_rgba(0,229,255,0.3)]">
            <Beaker size={28} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Can't Find<br />What You <span className="bg-gradient-to-r from-[#00E5FF] to-[#0066FF] bg-clip-text text-transparent font-medium">Need?</span>
          </h2>
          <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-10 max-w-2xl font-light">
            Tell us what reagent, material, or laboratory supply you are looking for and our team can discuss your requirements.
          </p>
          <Button 
            variant="primary" 
            href={getCtaPath('REQUEST_QUOTE')} 
            className="bg-gradient-to-r from-[#0066FF] to-[#00C2FF] hover:from-[#0055D4] hover:to-[#00E5FF] text-white px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-xl shadow-[0_0_20px_rgba(0,194,255,0.35)]"
          >
            REQUEST A CUSTOM QUOTE &rarr;
          </Button>
        </div>
      </section>

      {/* SECTION 08 — REQUEST FORM (Dark Modern Form) */}
      <section className="py-24 px-6 bg-[#051329] border-b border-white/10" id="quote-form">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#00E5FF] text-xs font-bold tracking-[0.25em] uppercase mb-3 block">
              QUICK INQUIRY
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Request Reagent Information.</h2>
            <p className="text-neutral-300 font-light">Fill out the form below to receive pricing, specifications, and availability.</p>
          </div>
          
          <div className="bg-[#030B17] p-8 md:p-12 rounded-[24px] border border-white/10 shadow-2xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">Full Name</label>
                  <input type="text" placeholder="Dr. / Researcher Name" className="w-full bg-[#051329] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-colors placeholder-neutral-500" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">Email Address</label>
                  <input type="email" placeholder="researcher@lab.org" className="w-full bg-[#051329] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-colors placeholder-neutral-500" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">Phone</label>
                  <input type="tel" placeholder="+92 300 1234567" className="w-full bg-[#051329] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-colors placeholder-neutral-500" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">Organization / Laboratory</label>
                  <input type="text" placeholder="Biotech Research Institute" className="w-full bg-[#051329] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-colors placeholder-neutral-500" />
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">Reagent / Product Needed</label>
                  <input type="text" placeholder="e.g. TRIzol Reagent / Restriction Enzymes" className="w-full bg-[#051329] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-colors placeholder-neutral-500" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">Category</label>
                  <div className="relative">
                    <select className="w-full appearance-none bg-[#051329] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-colors">
                      <option>Synthesis</option>
                      <option>Supply</option>
                      <option>Other</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">Quantity Required</label>
                <input type="text" placeholder="e.g., 500ml, 10 units" className="w-full bg-[#051329] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-colors placeholder-neutral-500" />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">Additional Message or Specifications</label>
                <textarea rows={4} placeholder="Purity requirements, delivery timeline, or custom packaging..." className="w-full bg-[#051329] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-colors placeholder-neutral-500"></textarea>
              </div>

              <div className="pt-4">
                <Button 
                  variant="primary" 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-[#0066FF] to-[#00C2FF] hover:from-[#0055D4] hover:to-[#00E5FF] text-white py-4 text-xs font-bold uppercase tracking-wider rounded-xl shadow-[0_0_20px_rgba(0,194,255,0.35)]"
                >
                  SEND REAGENT REQUEST &rarr;
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* SECTION 09 — FAQ */}
      <section className="py-24 px-6 bg-[#030B17] border-b border-white/10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#00E5FF] text-xs font-bold tracking-[0.25em] uppercase mb-3 block">
              SUPPORT & DETAILS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Frequently Asked Questions</h2>
          </div>

          <div className="border-t border-white/10">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="border-b border-white/10">
                  <button 
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                  >
                    <span className="text-base sm:text-lg font-bold text-white group-hover:text-[#00E5FF] transition-colors pr-8">{faq.q}</span>
                    <ChevronDown size={20} className={cn("text-neutral-400 transition-transform duration-300", isOpen && "rotate-180 text-[#00E5FF]")} />
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

      {/* SECTION 10 — FINAL CTA */}
      <section className="relative py-24 px-6 bg-[#051329] overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop" 
            alt="DNA Molecular Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051329] to-transparent" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Find the<br />Right Research Reagent?
          </h2>
          <p className="text-neutral-300 text-base md:text-lg mb-12 font-light">
            Tell us what your laboratory or research project requires.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button 
              href={getCtaPath('REQUEST_QUOTE')} 
              variant="primary" 
              className="bg-gradient-to-r from-[#0066FF] to-[#00C2FF] hover:from-[#0055D4] hover:to-[#00E5FF] text-white border-none px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-xl shadow-[0_0_20px_rgba(0,194,255,0.35)]"
            >
              REQUEST A QUOTE &rarr;
            </Button>
            <Button 
              href={getCtaPath('CONSULTATION_REQUEST')} 
              variant="dark" 
              className="border-white/30 text-white hover:border-[#00E5FF] px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-xl"
            >
              CONTACT US &rarr;
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
