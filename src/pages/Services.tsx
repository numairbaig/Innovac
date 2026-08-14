import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/src/components/SEO';
import { Button } from '@/src/components/ui/Button';
import { Breadcrumb, PageLabel } from '@/src/components/ui/Breadcrumb';
import { 
  Dna, Microscope, ShieldCheck, FlaskConical,
  ChevronRight, ArrowRight, Activity, Database,
  BarChart, Share2, Box, GitMerge, Check, Network, Cpu
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { PageHeroIllustration } from '@/src/components/ui/PageHeroIllustration';

export default function Services() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F5F5F3]">
      <SEO 
        title="Biotechnology Services | INNOVAC BIOTECHNOLOGIES" 
        description="Explore biotechnology, nucleic acid, protein, peptide, molecular biology, bioinformatics, and computational research services from INNOVAC BIOTECHNOLOGIES." 
      />
      
      {/* 1. SERVICES HERO (Green Biotech Theme) */}
      <section className="relative pt-24 pb-16 lg:pt-28 lg:pb-20 px-6 bg-[#06140F] text-[#F2F7F4] overflow-hidden border-b border-[#1A3B2B]">
        {/* Subtle Radial & Molecular Pattern Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#06140F] via-[#092018] to-[#06140F]" />
          <div className="absolute right-0 top-0 w-[60%] h-full bg-[radial-gradient(ellipse_at_70%_40%,rgba(32,199,122,0.15)_0%,transparent_65%)]" />
          <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_center,#20C77A_1px,transparent_1px)] bg-[length:32px_32px]" />
        </div>

        <div className="max-w-[1400px] mx-auto relative z-20">
          <Breadcrumb items={[{ label: 'Services' }]} accentColor="text-[#20C77A]" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-4 lg:mt-0 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl lg:w-3/5"
            >
              <PageLabel accentColor="text-[#20C77A]">OUR SERVICES</PageLabel>
              <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-medium tracking-tight leading-[1.05] mb-8 text-[#F2F7F4]">
                Advanced Science.<br /> Reliable <span className="text-[#20C77A]">Solutions.</span>
              </h1>
              <p className="text-base sm:text-lg text-[#A8B8AF] max-w-2xl mb-12 leading-relaxed font-light">
                Comprehensive biotechnology and molecular services designed for researchers, laboratories, universities, and organizations working to advance scientific discovery.
              </p>

              {/* Feature Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-[#1A3B2B]">
                {[
                  { label: "Scientific Excellence", icon: Dna },
                  { label: "Advanced Technology", icon: Microscope },
                  { label: "Reliable Results", icon: ShieldCheck },
                  { label: "Research Focused", icon: FlaskConical }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <feature.icon size={20} className="text-[#20C77A] shrink-0" strokeWidth={1.5} />
                    <span className="text-xs font-medium text-[#F2F7F4]">{feature.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Visual Area */}
            <PageHeroIllustration page="services" className="lg:w-2/5" />
          </div>
        </div>
      </section>

      {/* 2. EXPLORE OUR SERVICES CATEGORIES (Light Theme & Clickable Cards) */}
      <section className="py-20 lg:py-28 px-6 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#FF4D00] block">
              SERVICE OFFERINGS
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#050505]">
              Explore Our Services Categories
            </h2>
            <p className="text-neutral-500 text-sm font-light leading-relaxed">
              Select a service domain below to view complete sub-service details, workflow parameters, and formal quotation options.
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
                onClick={() => navigate(cat.link)}
                className="group relative bg-[#050505] rounded-[24px] overflow-hidden h-[440px] flex flex-col p-8 sm:p-10 border border-transparent hover:border-[#FF4D00] transition-all duration-500 hover:-translate-y-2 cursor-pointer shadow-lg"
              >
                <div className="absolute inset-0 opacity-50 group-hover:scale-105 transition-transform duration-700">
                  <img src={cat.img} alt={cat.title} className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent" />
                
                <div className="relative z-10 mt-auto">
                  <h3 className="text-2xl font-bold text-white mb-3 pr-4 leading-tight group-hover:text-[#FF4D00] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-neutral-400 text-xs font-light mb-6 leading-relaxed">
                    {cat.desc}
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF4D00] tracking-wider uppercase group-hover:translate-x-1 transition-transform">
                    <span>VIEW SERVICES</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. NUCLEIC ACID SERVICES SECTION */}
      <section className="py-20 lg:py-28 px-6 bg-[#F5F5F3] border-b border-[#E5E5E5]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#FF4D00] block">
                NUCLEIC ACID SERVICES
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#050505] leading-[1.1]">
                Nucleic Acid<br/>Services
              </h2>
              <p className="text-neutral-600 text-sm font-light leading-relaxed">
                We provide a wide range of nucleic acid based services to support your research from sample preparation to genomic analysis.
              </p>
            </div>

            <div className="pt-6">
              <Button href="/services/nucleic-acid" variant="primary" className="bg-[#FF4D00] hover:bg-[#E64500] text-white border-none px-6 py-3.5 text-xs font-bold uppercase tracking-wider rounded-xl" withArrow>
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
                items: ["DNA Detection", "Primer Design", "DNA Sequencing", "Molecular Docking", "Gel Electrophoresis", "PCR Assays", "Fragment Purification"]
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
                onClick={() => navigate(card.link)}
                className="bg-white rounded-[24px] p-6 sm:p-8 border border-[#E5E5E5] shadow-sm relative overflow-hidden group hover:border-[#FF4D00]/50 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-[#FF4D00]/10 rounded-xl flex items-center justify-center mb-6 text-[#FF4D00] group-hover:bg-[#FF4D00] group-hover:text-white transition-colors">
                    <card.icon size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-[#050505] mb-2 group-hover:text-[#FF4D00] transition-colors">{card.title}</h3>
                  <p className="text-xs text-neutral-500 font-light leading-relaxed mb-6">{card.desc}</p>
                  
                  <div className="space-y-2 pt-4 border-t border-[#E5E5E5]">
                    {card.items.slice(0, 5).map((item, j) => (
                      <div key={j} className="flex items-center gap-2 text-xs text-neutral-700 font-light">
                        <Check size={12} className="text-[#FF4D00] shrink-0" strokeWidth={3} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#E5E5E5] mt-6 flex items-center justify-between text-xs font-bold text-[#FF4D00] uppercase tracking-wider">
                  <span>EXPLORE {card.title.toUpperCase()}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. PROTEIN & PEPTIDE SERVICES SECTION */}
      <section className="py-20 lg:py-28 px-6 bg-[#050505] text-white overflow-hidden relative">
        <div className="max-w-[1400px] mx-auto relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center mb-16">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#FF4D00] block">
                PROTEIN & PEPTIDE SERVICES
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                Protein & Peptide<br/>Services
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed max-w-md">
                High-quality protein sequencing, solid-phase peptide synthesis (SPPS), and chemical modifications using advanced analytical mass spectrometry.
              </p>
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
                onClick={() => navigate(card.link)}
                className="bg-white/5 rounded-[24px] p-8 border border-white/10 backdrop-blur-sm hover:border-[#FF4D00]/60 hover:bg-white/10 transition-all duration-300 cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 bg-[#FF4D00]/10 rounded-xl flex items-center justify-center mb-6 border border-[#FF4D00]/20 text-[#FF4D00] group-hover:bg-[#FF4D00] group-hover:text-white transition-colors">
                    <card.icon size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF4D00] transition-colors">{card.title}</h3>
                  <p className="text-neutral-400 text-xs font-light leading-relaxed mb-6">{card.desc}</p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#FF4D00] uppercase tracking-wider">
                  <span>EXPLORE SERVICE</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. RESEARCH & COMPUTATIONAL BIOLOGY SECTION */}
      <section className="py-20 lg:py-28 px-6 bg-white border-t border-[#E5E5E5]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#FF4D00] block">
                COMPUTATIONAL BIOLOGY
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#050505] leading-[1.1]">
                Research &<br/>Computational Biology
              </h2>
              <p className="text-neutral-600 text-sm font-light leading-relaxed">
                In-silico research, molecular docking, MD simulations, SPSS statistical data analysis, and custom bioinformatics pipelines.
              </p>
            </div>

            <div className="pt-6">
              <Button href="/services/computational" variant="primary" className="bg-[#FF4D00] hover:bg-[#E64500] text-white border-none px-6 py-3.5 text-xs font-bold uppercase tracking-wider rounded-xl" withArrow>
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
                onClick={() => navigate(card.link)}
                className="p-8 bg-[#F9F9F8] rounded-[24px] border border-[#E5E5E5] hover:border-[#FF4D00]/50 hover:bg-white hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 bg-[#FF4D00]/10 rounded-xl flex items-center justify-center mb-6 text-[#FF4D00] group-hover:bg-[#FF4D00] group-hover:text-white transition-colors">
                    <card.icon size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-[#050505] mb-2 group-hover:text-[#FF4D00] transition-colors">{card.title}</h3>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed mb-6">{card.desc}</p>
                </div>

                <div className="pt-6 border-t border-[#E5E5E5] flex items-center justify-between text-xs font-bold text-[#FF4D00] uppercase tracking-wider">
                  <span>EXPLORE SERVICE</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
