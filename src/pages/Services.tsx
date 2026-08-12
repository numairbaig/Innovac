import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '@/src/components/SEO';
import { Button } from '@/src/components/ui/Button';
import { 
  Dna, Microscope, ShieldCheck, FlaskConical,
  ChevronRight, ArrowRight, Activity, Database,
  BarChart, Share2, Box, GitMerge, Check, Send,
  Network, Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHeroIllustration } from '@/src/components/ui/PageHeroIllustration';

export default function Services() {


  return (
    <div className="bg-[#F5F5F3]">
      <SEO title="Biotechnology Services | INNOVAC BIOTECHNOLOGIES" description="Explore biotechnology, nucleic acid, protein, peptide, molecular biology, bioinformatics, and computational research services from INNOVAC BIOTECHNOLOGIES." />
      
      {/* 1. SERVICES HERO */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 bg-[#050505] text-white overflow-hidden">
        {/* Subtle Radial Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#050505]" />
          <div className="absolute right-0 top-0 w-[60%] h-full bg-[radial-gradient(ellipse_at_70%_40%,rgba(255,77,0,0.08)_0%,transparent_65%)]" />
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] bg-[length:32px_32px]" />
        </div>

        <div className="max-w-[1400px] mx-auto relative z-20">
          <div className="flex items-center gap-2 text-[10px] font-semibold text-neutral-400 uppercase tracking-widest mb-12">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white">Services</span>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-12 lg:mt-0 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl lg:w-3/5"
            >
              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#FF4D00] mb-6">
                Our Services
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-[76px] font-medium tracking-tight leading-[1.05] mb-8">
                Advanced Science.<br /> Reliable <span className="text-[#FF4D00]">Solutions.</span>
              </h1>
              <p className="text-lg text-neutral-300 max-w-2xl mb-16 leading-relaxed font-light">
                Comprehensive biotechnology and molecular services designed for researchers, laboratories, universities, and organizations working to advance scientific discovery.
              </p>

              {/* Feature Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
                {[
                  { label: "Scientific Excellence", icon: Dna },
                  { label: "Advanced Technology", icon: Microscope },
                  { label: "Reliable Results", icon: ShieldCheck },
                  { label: "Research Focused", icon: FlaskConical }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <feature.icon size={20} className="text-[#FF4D00] shrink-0" strokeWidth={1.5} />
                    <span className="text-[13px] font-medium text-neutral-200">{feature.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Visual Area */}
            <PageHeroIllustration page="services" className="lg:w-2/5" />
          </div>
        </div>
      </section>

      {/* 2. SERVICE CATEGORIES */}
      <section className="py-24 md:py-32 px-6 bg-[#F5F5F3]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-center text-sm font-semibold tracking-[0.15em] uppercase text-[#050505] mb-16">
            Explore Our Service Categories
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
                link: "/services/protein"
              },
              {
                title: "Research & Computational Biology",
                desc: "In-silico research, bioinformatics and computational biology solutions.",
                img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2960&auto=format&fit=crop",
                link: "/services/research"
              }
            ].map((cat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-[#050505] rounded-[24px] overflow-hidden h-[420px] flex flex-col p-10 border border-transparent hover:border-[#FF4D00] transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 opacity-50 group-hover:scale-105 transition-transform duration-700">
                  <img src={cat.img} alt={cat.title} className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent" />
                
                <div className="relative z-10 mt-auto">
                  <h3 className="text-2xl font-medium text-white mb-3 pr-4 leading-tight">{cat.title}</h3>
                  <p className="text-neutral-400 text-sm mb-6 leading-relaxed line-clamp-3">{cat.desc}</p>
                  <Button href={cat.link} variant="ghost" className="px-0 text-[#FF4D00] hover:bg-transparent hover:text-white" withArrow>
                    VIEW SERVICES
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. NUCLEIC ACID SERVICES */}
      <section className="py-24 md:py-32 px-6 bg-white border-t border-[#D8D8D5]/60">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
          
          <div className="lg:col-span-4 flex flex-col">
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#FF4D00] mb-6">Nucleic Acid Services</p>
            <h2 className="text-4xl md:text-[44px] font-medium tracking-tight mb-8 leading-[1.1]">Nucleic Acid<br/>Services</h2>
            <p className="text-neutral-600 mb-10 leading-relaxed text-base font-light">
              We provide a wide range of nucleic acid based services to support your research from sample preparation to analysis.
            </p>
            <Button href="/services/nucleic-acid" variant="primary" className="self-start" withArrow>
              VIEW ALL NUCLEIC ACID SERVICES
            </Button>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "DNA Services",
                icon: Dna,
                items: ["Detection", "Primer Design", "Sequencing", "Molecular Docking", "Gel Electrophoresis", "PCR", "Fragment Purification"]
              },
              {
                title: "RNA Services",
                icon: Activity,
                items: ["Extraction", "Docking", "Sequencing", "Sample Processing"]
              },
              {
                title: "miRNA Services",
                icon: Database,
                items: ["Detection", "Synthesis", "Quantification"]
              }
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-[24px] p-8 border border-[#D8D8D5]/60 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                <Dna className="absolute -right-12 -bottom-12 w-48 h-48 text-neutral-100 opacity-60 transform -rotate-12" strokeWidth={1} />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-[#FF4D00]/10 rounded-full flex items-center justify-center mb-6">
                    <card.icon size={20} className="text-[#FF4D00]" />
                  </div>
                  <h3 className="text-lg font-medium mb-6 text-[#050505]">{card.title}</h3>
                  <ul className="space-y-3.5">
                    {card.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-neutral-600">
                        <div className="w-4 h-4 rounded-full bg-[#FF4D00] flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={10} className="text-white" strokeWidth={3} />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. PROTEIN & PEPTIDE SERVICES */}
      <section className="py-24 md:py-32 px-6 bg-[#050505] text-white overflow-hidden relative">
        <div className="max-w-[1400px] mx-auto relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center mb-16 lg:mb-24">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#FF4D00] mb-6">Protein & Peptide Services</p>
              <h2 className="text-4xl md:text-[44px] font-medium tracking-tight mb-8 leading-[1.1]">Protein & Peptide<br/>Services</h2>
              <p className="text-neutral-400 mb-0 leading-relaxed text-base max-w-md font-light">
                High-quality protein and peptide services using advanced techniques and scientific expertise.
              </p>
            </div>
            <div className="relative h-64 md:h-96 lg:h-[400px] w-full flex items-center justify-center lg:justify-end">
              <img 
                src="https://images.unsplash.com/photo-1559757175-9b93db5f8cb4?q=80&w=2831&auto=format&fit=crop" 
                alt="Protein Structure" 
                className="absolute right-0 w-full lg:w-[130%] max-w-none h-full object-cover mix-blend-screen opacity-70 mask-image-gradient"
                style={{ WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 50%, rgba(0,0,0,0))' }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Protein Sequencing", desc: "Accurate protein sequencing services for research and scientific applications.", icon: Share2 },
              { title: "Peptide Synthesis", desc: "Custom peptide synthesis for research and scientific studies.", icon: Box },
              { title: "Peptide Modification", desc: "Peptide modification for improved stability, functionality and research applications.", icon: GitMerge }
            ].map((card, i) => (
              <div key={i} className="bg-white/5 rounded-[24px] p-8 border border-white/10 backdrop-blur-sm">
                <div className="w-12 h-12 bg-[#FF4D00]/10 rounded-xl flex items-center justify-center mb-6 border border-[#FF4D00]/20">
                  <card.icon size={22} className="text-[#FF4D00]" />
                </div>
                <h3 className="text-lg font-medium mb-3">{card.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-8">{card.desc}</p>
                <Link to="/services/protein" className="text-[#FF4D00] text-xs font-semibold tracking-[0.1em] hover:text-white transition-colors flex items-center gap-2 group uppercase">
                  Learn More <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. RESEARCH & COMPUTATIONAL BIOLOGY */}
      <section className="py-24 md:py-32 px-6 bg-white border-t border-[#D8D8D5]/60">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-16">
          
          <div className="lg:col-span-4 flex flex-col">
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#FF4D00] mb-6">Research & Computational Biology</p>
            <h2 className="text-4xl md:text-[44px] font-medium tracking-tight mb-8 leading-[1.1]">Research &<br/>Computational Biology</h2>
            <p className="text-neutral-600 mb-10 leading-relaxed text-base font-light">
              Computational and bioinformatics solutions that accelerate research and scientific discovery.
            </p>
            <Button href="/services/research" variant="primary" className="self-start" withArrow>
              EXPLORE RESEARCH SERVICES
            </Button>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-12">
              {[
                { title: "Primer Design", desc: "Custom primer design for PCR and molecular studies.", icon: Network },
                { title: "SPSS Analysis", desc: "Statistical analysis for research data and results.", icon: BarChart },
                { title: "Molecular Docking", desc: "Molecular docking for structure and interaction analysis.", icon: Share2 },
                { title: "MD Simulations", desc: "Molecular dynamics simulations for advanced research.", icon: Activity },
                { title: "Sequence Alignment", desc: "Sequence alignment and comparative analysis.", icon: GitMerge },
                { title: "Other Computational Research", desc: "Various in-silico research solutions tailored to project requirements.", icon: Cpu }
              ].map((item, i) => (
                <div key={i} className="flex flex-col relative pb-8">
                  {i < 4 && <div className="hidden sm:block absolute bottom-0 left-0 right-0 h-[1px] bg-[#D8D8D5]/60" />}
                  <div className="sm:hidden absolute bottom-0 left-0 right-0 h-[1px] bg-[#D8D8D5]/60" />
                  
                  <item.icon size={26} className="text-[#FF4D00] mb-5" strokeWidth={1.5} />
                  <h3 className="text-lg font-medium mb-2 text-[#050505]">{item.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 6. SPECIALIZED RESEARCH CTA */}
      <section className="py-24 md:py-32 px-6 bg-[#050505] text-white relative overflow-hidden">
        {/* Subtle molecular background */}
        <div className="absolute inset-0 opacity-30 mix-blend-screen">
          <img src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2874&auto=format&fit=crop" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/95 to-transparent z-10" />
        
        <div className="max-w-[1400px] mx-auto relative z-20 flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="flex items-start gap-8 max-w-2xl">
            <div className="w-20 h-20 rounded-full border border-white/20 bg-white/5 flex items-center justify-center flex-shrink-0 hidden sm:flex">
              <Send size={32} className="text-white ml-1" />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium tracking-tight mb-6 leading-[1.1]">
                Looking for a <span className="text-[#FF4D00]">Specialized</span><br/>Research Solution?
              </h2>
              <p className="text-base text-neutral-400 mb-0 font-light leading-relaxed max-w-xl">
                Our team is ready to discuss your project and provide the right scientific solution for your research.
              </p>
            </div>
          </div>
          
          <Button href="/contact" size="lg" className="shrink-0 w-full sm:w-auto px-8 py-4 text-[13px]" withArrow>
            DISCUSS YOUR PROJECT
          </Button>
          
        </div>
      </section>

    </div>
  );
}
