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
      href: '/services/nucleic-acid/dna',
      icon: Dna
    },
    {
      title: 'RNA Services',
      href: '/services/nucleic-acid/rna',
      icon: Activity
    },
    {
      title: 'miRNA Services',
      href: '/services/nucleic-acid/mirna',
      icon: Database
    }
  ];

  const col2Services: ServiceCardData[] = [
    {
      title: 'Protein Sequencing',
      href: '/services/protein-peptide/sequencing',
      icon: Share2
    },
    {
      title: 'Peptide Synthesis',
      href: '/services/protein-peptide/synthesis',
      icon: Box
    },
    {
      title: 'Peptide Modification',
      href: '/services/protein-peptide/modification',
      icon: GitMerge
    }
  ];

  const col3Services: ServiceCardData[] = [
    {
      title: 'In-Silico Research',
      href: '/services/computational/in-silico',
      icon: Network
    },
    {
      title: 'Bioinformatics',
      href: '/services/computational/bioinformatics',
      icon: Cpu
    },
    {
      title: 'Molecular Docking',
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
      className="fixed top-20 left-1/2 -translate-x-1/2 w-[94vw] max-w-[1450px] z-50 pt-2 pointer-events-auto"
    >
      {/* Caret Pointer pointing directly at the 'Services' link */}
      <div className="relative">
        <div className="absolute -top-2.5 left-[30.2%] xl:left-[30.0%] 2xl:left-[30.5%] -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[10px] border-l-transparent border-r-transparent border-b-white/25 z-20" />
        <div className="absolute -top-[8px] left-[30.2%] xl:left-[30.0%] 2xl:left-[30.5%] -translate-x-1/2 w-0 h-0 border-l-[7px] border-r-[7px] border-b-[9px] border-l-transparent border-r-transparent border-b-[#050505] z-30" />

        {/* Premium Glassmorphic Mega Menu Container */}
        <div className="relative bg-[#050505]/92 border border-white/15 rounded-[24px] p-6 lg:p-8 xl:p-9 shadow-[0_25px_70px_rgba(0,0,0,0.95)] backdrop-blur-2xl text-left overflow-hidden">
          
          {/* Subtle Glass Ambient Glow & Grid */}
          <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] bg-[length:24px_24px] pointer-events-none" />
          <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-[#FF4D00]/06 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-24 -top-24 w-96 h-96 bg-[#FF4D00]/06 rounded-full blur-3xl pointer-events-none" />

          {/* Three Equal Columns Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12">
            
            {/* COLUMN 1: SCIENTIFIC RESEARCH SERVICES */}
            <div className="space-y-4 pr-0 lg:pr-6 xl:pr-8 lg:border-r border-white/10 flex flex-col justify-between">
              <div>
                <Link to="/services/nucleic-acid" onClick={onClose} className="group/head flex items-center gap-2.5 mb-1.5 inline-flex">
                  <Microscope size={18} className="text-white group-hover/head:text-[#FF4D00] transition-colors shrink-0" />
                  <h3 className="text-sm font-bold tracking-[0.14em] text-white group-hover/head:text-[#FF4D00] uppercase transition-colors">
                    SCIENTIFIC RESEARCH SERVICES
                  </h3>
                </Link>
                <div className="w-10 h-[2.5px] bg-[#FF4D00] rounded-full mb-5" />

                <div className="space-y-3">
                  {col1Services.map((service, idx) => (
                    <ServiceCard key={idx} data={service} onClose={onClose} />
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-3 border-t border-white/10">
                <Link
                  to="/services/nucleic-acid"
                  onClick={onClose}
                  className="group inline-flex items-center gap-2 text-sm font-bold text-white tracking-wider uppercase hover:text-[#FF4D00] transition-colors"
                >
                  <span>EXPLORE RESEARCH SERVICES</span>
                  <ArrowRight size={16} className="text-white group-hover:text-[#FF4D00] group-hover:translate-x-1.5 transition-all" />
                </Link>
              </div>
            </div>

            {/* COLUMN 2: PROTEINS & PEPTIDES */}
            <div className="space-y-4 pr-0 lg:pr-6 xl:pr-8 lg:border-r border-white/10 flex flex-col justify-between">
              <div>
                <Link to="/services/protein-peptide" onClick={onClose} className="group/head flex items-center gap-2.5 mb-1.5 inline-flex">
                  <Layers size={18} className="text-white group-hover/head:text-[#FF4D00] transition-colors shrink-0" />
                  <h3 className="text-sm font-bold tracking-[0.14em] text-white group-hover/head:text-[#FF4D00] uppercase transition-colors">
                    PROTEINS & PEPTIDES
                  </h3>
                </Link>
                <div className="w-10 h-[2.5px] bg-[#FF4D00] rounded-full mb-5" />

                <div className="space-y-3">
                  {col2Services.map((service, idx) => (
                    <ServiceCard key={idx} data={service} onClose={onClose} />
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-3 border-t border-white/10">
                <Link
                  to="/services/protein-peptide"
                  onClick={onClose}
                  className="group inline-flex items-center gap-2 text-sm font-bold text-white tracking-wider uppercase hover:text-[#FF4D00] transition-colors"
                >
                  <span>VIEW ALL PRODUCTS</span>
                  <ArrowRight size={16} className="text-white group-hover:text-[#FF4D00] group-hover:translate-x-1.5 transition-all" />
                </Link>
              </div>
            </div>

            {/* COLUMN 3: COMPUTATIONAL BIOLOGY */}
            <div className="space-y-4 flex flex-col justify-between">
              <div>
                <Link to="/services/computational" onClick={onClose} className="group/head flex items-center gap-2.5 mb-1.5 inline-flex">
                  <Cpu size={18} className="text-white group-hover/head:text-[#FF4D00] transition-colors shrink-0" />
                  <h3 className="text-sm font-bold tracking-[0.14em] text-white group-hover/head:text-[#FF4D00] uppercase transition-colors">
                    COMPUTATIONAL BIOLOGY
                  </h3>
                </Link>
                <div className="w-10 h-[2.5px] bg-[#FF4D00] rounded-full mb-5" />

                <div className="space-y-3">
                  {col3Services.map((service, idx) => (
                    <ServiceCard key={idx} data={service} onClose={onClose} />
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-3 border-t border-white/10">
                <Link
                  to="/services/computational"
                  onClick={onClose}
                  className="group inline-flex items-center gap-2 text-sm font-bold text-white tracking-wider uppercase hover:text-[#FF4D00] transition-colors"
                >
                  <span>EXPLORE SOLUTIONS</span>
                  <ArrowRight size={16} className="text-white group-hover:text-[#FF4D00] group-hover:translate-x-1.5 transition-all" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Single Glassmorphic Service Card (Pure White Base + Orange Hover Highlight)
function ServiceCard({ data, onClose }: { data: ServiceCardData; onClose: () => void }) {
  return (
    <Link
      to={data.href}
      onClick={onClose}
      className="group relative bg-white/[0.03] backdrop-blur-md hover:bg-[#FF4D00]/10 border border-white/12 hover:border-[#FF4D00]/50 rounded-[16px] px-4.5 py-3.5 flex items-center justify-between gap-4 transition-all duration-200 cursor-pointer block hover:shadow-[0_8px_25px_rgba(255,77,0,0.15)]"
    >
      <div className="flex items-center gap-4 min-w-0 flex-grow">
        <ServiceIcon 
          icon={data.icon} 
          src={data.iconSrc} 
          alt={data.title}
          containerClassName="w-[44px] h-[44px]"
        />
        <h4 className="text-[15px] sm:text-base font-semibold text-white group-hover:text-[#FF4D00] transition-colors truncate">
          {data.title}
        </h4>
      </div>
      <ArrowRight 
        size={16} 
        className="text-neutral-300 group-hover:text-[#FF4D00] opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all shrink-0 ml-1" 
      />
    </Link>
  );
}
