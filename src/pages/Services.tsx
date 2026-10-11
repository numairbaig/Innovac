import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/src/components/SEO';
import { Button } from '@/src/components/ui/Button';
import { Breadcrumb, PageLabel } from '@/src/components/ui/Breadcrumb';
import { 
  Dna, Microscope, ShieldCheck, FlaskConical,
  ChevronRight, ArrowRight, Activity, Database,
  BarChart, Share2, Box, GitMerge, Check, Network, Cpu,
  ExternalLink
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { BASE44_ORDER_PORTAL_URL } from '@/src/config/portalConfig';
import { PageHeroIllustration } from '@/src/components/ui/PageHeroIllustration';

export default function Services() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#030B17] text-white">
      <SEO 
        title="Biotechnology Services | INNOVAC BIOTECHNOLOGIES" 
        description="Explore biotechnology, nucleic acid, protein, peptide, molecular biology, bioinformatics, and computational research services from INNOVAC BIOTECHNOLOGIES." 
      />
      
      {/* 1. SERVICES HERO (Biotechnology Deep Navy & Cyan Theme) */}
      <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-20 px-6 bg-[#030B17] text-white overflow-hidden border-b border-[#00E5FF]/20">
        {/* Subtle Radial & Molecular Pattern Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#030B17] via-[#05152F] to-[#030B17]" />
          <div className="absolute right-0 top-0 w-[60%] h-full bg-[radial-gradient(ellipse_at_70%_40%,rgba(0,229,255,0.14)_0%,transparent_65%)]" />
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,#00E5FF_1px,transparent_1px)] bg-[length:32px_32px]" />
        </div>

        <div className="max-w-[1400px] mx-auto relative z-20">
          <Breadcrumb items={[{ label: 'Services' }]} accentColor="text-[#00E5FF]" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-6 lg:mt-2 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl lg:w-3/5"
            >
              <PageLabel accentColor="text-[#00E5FF]">OUR SERVICES</PageLabel>
              <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-medium tracking-tight leading-[1.05] mb-6 text-white">
                Advanced Science.<br /> Reliable <span className="bg-gradient-to-r from-[#00E5FF] to-[#0066FF] bg-clip-text text-transparent">Solutions.</span>
              </h1>
              <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mb-8 leading-relaxed font-light">
                Comprehensive biotechnology and molecular services designed for researchers, laboratories, universities, and organizations working to advance scientific discovery.
              </p>

              {/* Action Buttons: Direct Base44 Portal Request + Quote */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <a 
                  href={BASE44_ORDER_PORTAL_URL}
                  className="h-12 px-7 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#00C2FF] hover:from-[#0055D4] hover:to-[#00E5FF] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-[0_0_25px_rgba(0,194,255,0.35)] transition-all cursor-pointer"
                >
                  <span>ORDER IN CLIENT PORTAL</span>
                  <ExternalLink size={15} />
                </a>
                <Button 
                  href="/quote" 
                  variant="dark"
                  className="border-white/20 text-white hover:border-[#00E5FF] h-12"
                  withArrow
                >
                  REQUEST QUOTE
                </Button>
              </div>

              {/* Feature Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/10">
                {[
                  { label: "Scientific Excellence", icon: Dna },
                  { label: "Advanced Technology", icon: Microscope },
                  { label: "Reliable Results", icon: ShieldCheck },
                  { label: "Research Focused", icon: FlaskConical }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <feature.icon size={20} className="text-[#00E5FF] shrink-0" strokeWidth={1.5} />
                    <span className="text-xs font-medium text-neutral-200">{feature.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Visual Area */}
            <PageHeroIllustration page="services" className="lg:w-2/5" />
          </div>
        </div>
      </section>

      {/* 2. EXPLORE OUR SERVICES CATEGORIES (Biotech Dark Navy & Cyan) */}
      <section className="py-20 lg:py-28 px-6 bg-[#051329] border-b border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#00E5FF] block">
              SERVICE OFFERINGS
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Explore Our Services Categories
            </h2>
            <p className="text-neutral-400 text-sm font-light leading-relaxed">
              Select a service domain below to view complete sub-service details, workflow parameters, and place direct service orders.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Nucleic Acid Services",
                desc: "DNA, RNA & miRNA related laboratory services for molecular biology research.",
                img: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?q=80&w=2925&auto=format&fit=crop",
                link: "/services/nucleic-acid"
              },
              {
                title: "Protein & Peptide Services",
                desc: "Protein sequencing, peptide synthesis and modification services.",
                img: "https://images.unsplash.com/photo-1559757175-9b93db5f8cb4?q=80&w=2831&auto=format&fit=crop",
                link: "/services/protein-peptide"
              },
              {
                title: "Research & Computational Biology",
                desc: "In-silico research, bioinformatics and computational biology solutions.",
                img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2960&auto=format&fit=crop",
                link: "/services/computational"
              }
            ].map((cat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-[#030B17] rounded-[24px] overflow-hidden min-h-[460px] flex flex-col p-8 sm:p-10 border border-white/10 hover:border-[#00E5FF]/60 transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-[0_15px_40px_rgba(0,229,255,0.15)]"
              >
                <div className="absolute inset-0 opacity-40 group-hover:scale-105 transition-transform duration-700">
                  <img src={cat.img} alt={cat.title} className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#030B17] via-[#030B17]/80 to-transparent" />
                
                <div className="relative z-10 mt-auto">
                  <h3 className="text-2xl font-bold text-white mb-3 pr-4 leading-tight group-hover:text-[#00E5FF] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-neutral-300 text-xs font-light mb-6 leading-relaxed">
                    {cat.desc}
                  </p>
                  
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <a 
                      href={BASE44_ORDER_PORTAL_URL}
                      className="flex-1 py-3 px-3 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#00C2FF] hover:from-[#0055D4] hover:to-[#00E5FF] text-white text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(0,102,255,0.3)] transition-all"
                    >
                      <span>ORDER SERVICE</span>
                      <ExternalLink size={13} />
                    </a>
                    <Link
                      to={cat.link}
                      className="py-3 px-4 rounded-xl border border-white/20 hover:border-[#00E5FF] text-white hover:text-[#00E5FF] text-xs font-semibold tracking-wider uppercase transition-colors"
                    >
                      EXPLORE
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. NUCLEIC ACID SERVICES SECTION */}
      <section className="py-20 lg:py-28 px-6 bg-[#030B17] border-b border-white/10 text-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#00E5FF] block">
                NUCLEIC ACID SERVICES
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                Nucleic Acid<br/>Services
              </h2>
              <p className="text-neutral-300 text-sm font-light leading-relaxed">
                We provide a wide range of nucleic acid based services to support your research from sample preparation to genomic analysis.
              </p>
            </div>

            <div className="pt-6">
              <Button href="/services/nucleic-acid" variant="primary" className="bg-gradient-to-r from-[#0066FF] to-[#00C2FF] hover:from-[#0055D4] hover:to-[#00E5FF] text-white border-none px-6 py-3.5 text-xs font-bold uppercase tracking-wider rounded-xl shadow-[0_0_20px_rgba(0,194,255,0.3)]" withArrow>
                VIEW ALL NUCLEIC ACID SERVICES
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "DNA Services",
                icon: Dna,
                desc: "Detection, Primer Design, Sequencing, Docking, Electrophoresis, PCR & Fragment Purification.",
                link: "/services/nucleic-acid/dna",
                items: ["DNA Detection", "Primer Design", "DNA Sequencing", "Molecular Docking", "Gel Electrophoresis"]
              },
              {
                title: "RNA Services",
                icon: Activity,
                desc: "Total RNA Isolation, RNase-free processing, Sequencing, and Docking.",
                link: "/services/nucleic-acid/rna",
                items: ["RNA Extraction", "RNA Processing", "RNA Sequencing", "Molecular Docking", "RIN Integrity Check"]
              },
              {
                title: "miRNA Services",
                icon: Database,
                desc: "Small RNA isolation, stem-loop qPCR detection, and custom oligo synthesis.",
                link: "/services/nucleic-acid/mirna",
                items: ["miRNA Detection", "miRNA Synthesis", "miRNA Quantification", "Target Prediction"]
              }
            ].map((card, i) => (
              <div 
                key={i} 
                className="bg-[#051329] rounded-[24px] p-6 sm:p-8 border border-white/10 shadow-sm relative overflow-hidden group hover:border-[#00E5FF]/50 hover:shadow-[0_10px_30px_rgba(0,229,255,0.1)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-[#0066FF]/15 border border-[#00E5FF]/25 rounded-xl flex items-center justify-center mb-6 text-[#00E5FF] group-hover:bg-[#00E5FF] group-hover:text-[#030B17] transition-colors">
                    <card.icon size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00E5FF] transition-colors">{card.title}</h3>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed mb-6">{card.desc}</p>
                  
                  <div className="space-y-2 pt-4 border-t border-white/10">
                    {card.items.slice(0, 5).map((item, j) => (
                      <div key={j} className="flex items-center gap-2 text-xs text-neutral-300 font-light">
                        <Check size={12} className="text-[#00E5FF] shrink-0" strokeWidth={3} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6 flex items-center gap-2">
                  <a
                    href={BASE44_ORDER_PORTAL_URL}
                    className="flex-1 py-2.5 px-2 rounded-lg bg-gradient-to-r from-[#0066FF] to-[#00C2FF] text-white text-[10px] font-bold uppercase tracking-wider text-center flex items-center justify-center gap-1 shadow-[0_0_10px_rgba(0,102,255,0.3)]"
                  >
                    <span>ORDER</span>
                    <ExternalLink size={11} />
                  </a>
                  <Link
                    to={card.link}
                    className="py-2.5 px-3 rounded-lg border border-white/20 hover:border-[#00E5FF] text-white hover:text-[#00E5FF] text-[10px] font-semibold uppercase tracking-wider transition-colors"
                  >
                    DETAILS
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. PROTEIN & PEPTIDE SERVICES SECTION */}
      <section className="py-20 lg:py-28 px-6 bg-[#051329] text-white overflow-hidden relative border-b border-white/10">
        <div className="max-w-[1400px] mx-auto relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center mb-16">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#00E5FF] block">
                PROTEIN & PEPTIDE SERVICES
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                Protein & Peptide<br/>Services
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed max-w-md">
                High-quality protein sequencing, solid-phase peptide synthesis (SPPS), and chemical modifications using advanced analytical mass spectrometry.
              </p>
            </div>
            <div className="flex justify-start lg:justify-end">
              <a 
                href={BASE44_ORDER_PORTAL_URL}
                className="bg-gradient-to-r from-[#0066FF] to-[#00C2FF] hover:from-[#0055D4] hover:to-[#00E5FF] text-white px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(0,194,255,0.3)] transition-all"
              >
                <span>ORDER PROTEIN / PEPTIDE SERVICE</span>
                <ExternalLink size={15} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: "Protein Sequencing", 
                desc: "Accurate Edman N-terminal & LC-MS/MS protein sequencing services.", 
                icon: Share2,
                link: "/services/protein-peptide/sequencing"
              },
              { 
                title: "Peptide Synthesis", 
                desc: "Custom solid-phase peptide synthesis from short chains to complex sequences.", 
                icon: Box,
                link: "/services/protein-peptide/synthesis"
              },
              { 
                title: "Peptide Modification", 
                desc: "Phosphorylation, biotinylation, fluorescent tagging, and disulfide bonding.", 
                icon: GitMerge,
                link: "/services/protein-peptide/modification"
              }
            ].map((card, i) => (
              <div 
                key={i} 
                className="bg-[#030B17]/90 rounded-[24px] p-8 border border-white/10 hover:border-[#00E5FF]/60 hover:shadow-[0_10px_30px_rgba(0,229,255,0.1)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 bg-[#0066FF]/15 rounded-xl flex items-center justify-center mb-6 border border-[#00E5FF]/25 text-[#00E5FF] group-hover:bg-[#00E5FF] group-hover:text-[#030B17] transition-colors">
                    <card.icon size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00E5FF] transition-colors">{card.title}</h3>
                  <p className="text-neutral-300 text-xs font-light leading-relaxed mb-6">{card.desc}</p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center gap-2">
                  <a
                    href={BASE44_ORDER_PORTAL_URL}
                    className="flex-1 py-2.5 px-2 rounded-lg bg-gradient-to-r from-[#0066FF] to-[#00C2FF] text-white text-[10px] font-bold uppercase tracking-wider text-center flex items-center justify-center gap-1 shadow-[0_0_10px_rgba(0,102,255,0.3)]"
                  >
                    <span>ORDER</span>
                    <ExternalLink size={11} />
                  </a>
                  <Link
                    to={card.link}
                    className="py-2.5 px-3 rounded-lg border border-white/20 hover:border-[#00E5FF] text-white hover:text-[#00E5FF] text-[10px] font-semibold uppercase tracking-wider transition-colors"
                  >
                    DETAILS
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. RESEARCH & COMPUTATIONAL BIOLOGY SECTION */}
      <section className="py-20 lg:py-28 px-6 bg-[#030B17] border-b border-white/10 text-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#00E5FF] block">
                COMPUTATIONAL BIOLOGY
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                Research &<br/>Computational Biology
              </h2>
              <p className="text-neutral-300 text-sm font-light leading-relaxed">
                In-silico research, molecular docking, MD simulations, SPSS statistical data analysis, and custom bioinformatics pipelines.
              </p>
            </div>

            <div className="pt-6">
              <Button href="/services/computational" variant="primary" className="bg-gradient-to-r from-[#0066FF] to-[#00C2FF] hover:from-[#0055D4] hover:to-[#00E5FF] text-white border-none px-6 py-3.5 text-xs font-bold uppercase tracking-wider rounded-xl shadow-[0_0_20px_rgba(0,194,255,0.3)]" withArrow>
                EXPLORE COMPUTATIONAL SERVICES
              </Button>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { 
                title: "In-Silico Research", 
                desc: "Primer design, SPSS biostatistical analysis, molecular docking, and MD simulations.", 
                icon: Network,
                link: "/services/computational/in-silico"
              },
              { 
                title: "Bioinformatics", 
                desc: "Sequence analysis, biological data pipelines, phylogenetic tree building, and gene annotation.", 
                icon: Cpu,
                link: "/services/computational/bioinformatics"
              }
            ].map((card, i) => (
              <div 
                key={i} 
                className="p-8 bg-[#051329] rounded-[24px] border border-white/10 hover:border-[#00E5FF]/60 hover:shadow-[0_10px_30px_rgba(0,229,255,0.1)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 bg-[#0066FF]/15 border border-[#00E5FF]/25 rounded-xl flex items-center justify-center mb-6 text-[#00E5FF] group-hover:bg-[#00E5FF] group-hover:text-[#030B17] transition-colors">
                    <card.icon size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00E5FF] transition-colors">{card.title}</h3>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed mb-6">{card.desc}</p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center gap-2">
                  <a
                    href={BASE44_ORDER_PORTAL_URL}
                    className="flex-1 py-2.5 px-2 rounded-lg bg-gradient-to-r from-[#0066FF] to-[#00C2FF] text-white text-[10px] font-bold uppercase tracking-wider text-center flex items-center justify-center gap-1 shadow-[0_0_10px_rgba(0,102,255,0.3)]"
                  >
                    <span>ORDER</span>
                    <ExternalLink size={11} />
                  </a>
                  <Link
                    to={card.link}
                    className="py-2.5 px-3 rounded-lg border border-white/20 hover:border-[#00E5FF] text-white hover:text-[#00E5FF] text-[10px] font-semibold uppercase tracking-wider transition-colors"
                  >
                    DETAILS
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
