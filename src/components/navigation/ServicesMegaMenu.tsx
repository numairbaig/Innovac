import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Dna, Activity, Database, Share2, Box, GitMerge, Network, Cpu, 
  ArrowRight, Microscope, FlaskConical, Layers
} from 'lucide-react';
import { ServiceIcon } from '@/src/components/ui/ServiceIcon';

interface ServiceCardData {
  title: string;
  description: string;
  href: string;
  icon?: any;
  iconSrc?: string;
}

interface ServicesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ServicesMegaMenu({ isOpen, onClose }: ServicesMegaMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on Escape key press or Outside Click
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const col1Services: ServiceCardData[] = [
    {
      title: 'DNA Services',
      description: 'Advanced DNA analysis and sequencing',
      href: '/services/nucleic-acid/dna',
      icon: Dna
    },
    {
      title: 'RNA Services',
      description: 'Comprehensive RNA research solutions',
      href: '/services/nucleic-acid/rna',
      icon: Activity
    },
    {
      title: 'miRNA Services',
      description: 'MicroRNA profiling and functional analysis',
      href: '/services/nucleic-acid/mirna',
      icon: Database
    }
  ];

  const col2Services: ServiceCardData[] = [
    {
      title: 'Protein Sequencing',
      description: 'Protein analysis and sequencing solutions',
      href: '/services/protein-peptide/sequencing',
      icon: Share2
    },
    {
      title: 'Peptide Synthesis',
      description: 'Custom peptide synthesis solutions',
      href: '/services/protein-peptide/synthesis',
      icon: Box
    },
    {
      title: 'Peptide Modification',
      description: 'Advanced peptide modification services',
      href: '/services/protein-peptide/modification',
      icon: GitMerge
    }
  ];

  const col3Services: ServiceCardData[] = [
    {
      title: 'In-Silico Research',
      description: 'Computational modeling and simulation',
      href: '/services/computational/in-silico',
      icon: Network
    },
    {
      title: 'Bioinformatics',
      description: 'Data analysis and bioinformatics solutions',
      href: '/services/computational/bioinformatics',
      icon: Cpu
    },
    {
      title: 'Molecular Docking',
      description: 'Molecular interaction and docking analysis',
      href: '/services/computational/in-silico',
      icon: Share2
    }
  ];

  return (
    <motion.div
      ref={menuRef}
      initial={{ opacity: 0, y: -8, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.99 }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      aria-label="Services Mega Menu"
      role="region"
      className="fixed top-20 left-1/2 -translate-x-1/2 w-[94vw] max-w-[1440px] z-50 pt-2 pointer-events-auto"
    >
      {/* Centered Caret Pointer pointing directly at the 'Services' link */}
      <div className="relative">
        <div className="absolute -top-2.5 left-[37.2%] xl:left-[37.5%] 2xl:left-[37.8%] -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[10px] border-l-transparent border-r-transparent border-b-white/15 z-20" />
        <div className="absolute -top-[8px] left-[37.2%] xl:left-[37.5%] 2xl:left-[37.8%] -translate-x-1/2 w-0 h-0 border-l-[7px] border-r-[7px] border-b-[9px] border-l-transparent border-r-transparent border-b-[#080E0C] z-30" />

        {/* Main Clean Dark Mega Menu Container */}
        <div className="relative bg-[#080E0C]/98 border border-white/12 rounded-[24px] p-6 lg:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.85)] backdrop-blur-xl text-left overflow-hidden">
          
          {/* Subtle Subtle Ambient Glow & Scientific Grid */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] bg-[length:24px_24px] pointer-events-none" />
          <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-[#20C77A]/05 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-24 -top-24 w-96 h-96 bg-[#FF4D00]/05 rounded-full blur-3xl pointer-events-none" />

          {/* Three Equal Columns Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            
            {/* COLUMN 1: SCIENTIFIC RESEARCH SERVICES */}
            <div className="space-y-4 pr-0 lg:pr-6 lg:border-r border-white/08 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Microscope size={16} className="text-[#20C77A]" />
                  <h3 className="text-xs font-bold tracking-[0.15em] text-[#20C77A] uppercase">
                    SCIENTIFIC RESEARCH SERVICES
                  </h3>
                </div>
                <div className="w-8 h-[2px] bg-[#FF4D00] rounded-full mb-5" />

                <div className="space-y-2.5">
                  {col1Services.map((service, idx) => (
                    <ServiceCard key={idx} data={service} onClose={onClose} />
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-2 border-t border-white/08">
                <Link
                  to="/services/nucleic-acid"
                  onClick={onClose}
                  className="group inline-flex items-center gap-2 text-xs font-bold text-[#20C77A] tracking-wider uppercase hover:text-white transition-colors"
                >
                  <span>EXPLORE RESEARCH SERVICES</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* COLUMN 2: PROTEINS & PEPTIDES */}
            <div className="space-y-4 pr-0 lg:pr-6 lg:border-r border-white/08 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Layers size={16} className="text-[#20C77A]" />
                  <h3 className="text-xs font-bold tracking-[0.15em] text-[#20C77A] uppercase">
                    PROTEINS & PEPTIDES
                  </h3>
                </div>
                <div className="w-8 h-[2px] bg-[#FF4D00] rounded-full mb-5" />

                <div className="space-y-2.5">
                  {col2Services.map((service, idx) => (
                    <ServiceCard key={idx} data={service} onClose={onClose} />
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-2 border-t border-white/08">
                <Link
                  to="/services/protein-peptide"
                  onClick={onClose}
                  className="group inline-flex items-center gap-2 text-xs font-bold text-[#20C77A] tracking-wider uppercase hover:text-white transition-colors"
                >
                  <span>VIEW ALL PRODUCTS</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* COLUMN 3: COMPUTATIONAL BIOLOGY */}
            <div className="space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Cpu size={16} className="text-[#20C77A]" />
                  <h3 className="text-xs font-bold tracking-[0.15em] text-[#20C77A] uppercase">
                    COMPUTATIONAL BIOLOGY
                  </h3>
                </div>
                <div className="w-8 h-[2px] bg-[#FF4D00] rounded-full mb-5" />

                <div className="space-y-2.5">
                  {col3Services.map((service, idx) => (
                    <ServiceCard key={idx} data={service} onClose={onClose} />
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-2 border-t border-white/08">
                <Link
                  to="/services/computational"
                  onClick={onClose}
                  className="group inline-flex items-center gap-2 text-xs font-bold text-[#20C77A] tracking-wider uppercase hover:text-white transition-colors"
                >
                  <span>EXPLORE SOLUTIONS</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Single Clean Service Card Component
function ServiceCard({ data, onClose }: { data: ServiceCardData; onClose: () => void }) {
  return (
    <Link
      to={data.href}
      onClick={onClose}
      className="group relative bg-white/[0.03] hover:bg-[#20C77A]/08 border border-white/08 hover:border-[#20C77A]/40 rounded-[14px] p-3.5 flex items-center gap-3.5 transition-all duration-200 cursor-pointer block"
    >
      <ServiceIcon icon={data.icon} src={data.iconSrc} alt={data.title} />
      
      <div className="flex-grow min-w-0 pr-1">
        <div className="flex items-center justify-between gap-1 mb-0.5">
          <h4 className="text-sm font-semibold text-white group-hover:text-[#20C77A] transition-colors truncate">
            {data.title}
          </h4>
          <ArrowRight 
            size={14} 
            className="text-neutral-400 group-hover:text-[#20C77A] opacity-60 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all shrink-0 ml-1" 
          />
        </div>
        <p className="text-[11px] text-neutral-400 font-light leading-snug line-clamp-2">
          {data.description}
        </p>
      </div>
    </Link>
  );
}
