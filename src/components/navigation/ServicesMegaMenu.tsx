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
      initial={{ opacity: 0, y: -10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.98 }}
      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      aria-label="Services Mega Menu"
      role="region"
      className="fixed top-20 left-1/2 -translate-x-1/2 w-[94vw] max-w-[1500px] z-50 pt-2 pointer-events-auto"
    >
      {/* Centered Caret Pointer resting above the menu container */}
      <div className="relative">
        <div className="absolute -top-2.5 left-[24.5%] xl:left-[23.5%] 2xl:left-[24.5%] -translate-x-1/2 w-0 h-0 border-l-[9px] border-r-[9px] border-b-[11px] border-l-transparent border-r-transparent border-b-[#50FF96]/30 z-20" />
        <div className="absolute -top-[8px] left-[24.5%] xl:left-[23.5%] 2xl:left-[24.5%] -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[10px] border-l-transparent border-r-transparent border-b-[#03140F] z-30" />

        {/* Main Glassmorphism Mega Menu Container */}
        <div className="relative bg-[#03140F]/96 border border-[#50FF96]/20 rounded-[24px] p-6 lg:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.75),0_0_40px_rgba(0,230,118,0.1)] backdrop-blur-[18px] text-left overflow-hidden">
          
          {/* Subtle Background Biotechnology Atmospheric Grid & Glow */}
          <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_center,#00E676_1px,transparent_1px)] bg-[length:24px_24px] pointer-events-none" />
          <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-[#00E676]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-24 -top-24 w-96 h-96 bg-[#FF5A00]/08 rounded-full blur-3xl pointer-events-none" />

          {/* Three Equal Columns Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            
            {/* COLUMN 1: SCIENTIFIC RESEARCH SERVICES */}
            <div className="space-y-4 pr-0 lg:pr-6 lg:border-r border-[#64FFA0]/12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Microscope size={16} className="text-[#00E676]" />
                  <h3 className="text-xs font-bold tracking-[0.15em] text-[#00E676] uppercase">
                    SCIENTIFIC RESEARCH SERVICES
                  </h3>
                </div>
                <div className="w-10 h-[2px] bg-[#FF5A00] rounded-full mb-5" />

                <div className="space-y-3">
                  {col1Services.map((service, idx) => (
                    <ServiceCard key={idx} data={service} onClose={onClose} />
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-2 border-t border-[#50FF96]/10">
                <Link
                  to="/services/nucleic-acid"
                  onClick={onClose}
                  className="group inline-flex items-center gap-2 text-xs font-bold text-[#00E676] tracking-wider uppercase hover:text-[#19F58A] transition-colors"
                >
                  <span>EXPLORE RESEARCH SERVICES</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* COLUMN 2: PROTEINS & PEPTIDES */}
            <div className="space-y-4 pr-0 lg:pr-6 lg:border-r border-[#64FFA0]/12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Layers size={16} className="text-[#00E676]" />
                  <h3 className="text-xs font-bold tracking-[0.15em] text-[#00E676] uppercase">
                    PROTEINS & PEPTIDES
                  </h3>
                </div>
                <div className="w-10 h-[2px] bg-[#FF5A00] rounded-full mb-5" />

                <div className="space-y-3">
                  {col2Services.map((service, idx) => (
                    <ServiceCard key={idx} data={service} onClose={onClose} />
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-2 border-t border-[#50FF96]/10">
                <Link
                  to="/services/protein-peptide"
                  onClick={onClose}
                  className="group inline-flex items-center gap-2 text-xs font-bold text-[#00E676] tracking-wider uppercase hover:text-[#19F58A] transition-colors"
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
                  <Cpu size={16} className="text-[#00E676]" />
                  <h3 className="text-xs font-bold tracking-[0.15em] text-[#00E676] uppercase">
                    COMPUTATIONAL BIOLOGY
                  </h3>
                </div>
                <div className="w-10 h-[2px] bg-[#FF5A00] rounded-full mb-5" />

                <div className="space-y-3">
                  {col3Services.map((service, idx) => (
                    <ServiceCard key={idx} data={service} onClose={onClose} />
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-2 border-t border-[#50FF96]/10">
                <Link
                  to="/services/computational"
                  onClick={onClose}
                  className="group inline-flex items-center gap-2 text-xs font-bold text-[#00E676] tracking-wider uppercase hover:text-[#19F58A] transition-colors"
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

// Single Compact Service Card Component
function ServiceCard({ data, onClose }: { data: ServiceCardData; onClose: () => void }) {
  return (
    <Link
      to={data.href}
      onClick={onClose}
      className="group relative bg-[#0A2319]/55 hover:bg-[#0F3723]/75 border border-[#50FF96]/10 hover:border-[#00E676]/40 rounded-[14px] p-4 flex items-center gap-4 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,230,118,0.15)] hover:-translate-y-0.5 cursor-pointer block"
    >
      <ServiceIcon icon={data.icon} src={data.iconSrc} alt={data.title} />
      
      <div className="flex-grow min-w-0 pr-1">
        <div className="flex items-center justify-between gap-1 mb-0.5">
          <h4 className="text-sm font-bold text-[#F5F7F5] group-hover:text-[#00E676] transition-colors truncate">
            {data.title}
          </h4>
          <ArrowRight 
            size={14} 
            className="text-[#00E676] opacity-60 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all shrink-0 ml-1" 
          />
        </div>
        <p className="text-[11px] text-[#C7CEC9] font-light leading-snug line-clamp-2">
          {data.description}
        </p>
      </div>
    </Link>
  );
}
