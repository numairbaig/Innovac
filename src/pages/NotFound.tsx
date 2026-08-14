import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO } from '@/src/components/SEO';
import { PageHero } from '@/src/components/ui/PageHero';
import { 
  Home as HomeIcon, Search as SearchIcon, Microscope, 
  FlaskConical, Dna, GraduationCap, ArrowRight, HelpCircle, Compass
} from 'lucide-react';

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const quickLinks = [
    {
      title: 'Our Services',
      description: 'Explore DNA/RNA sequencing, protein synthesis & computational biology',
      href: '/services',
      icon: Microscope
    },
    {
      title: 'Biotech Reagents',
      description: 'High-purity molecular biology reagents, enzymes & kits',
      href: '/reagents',
      icon: FlaskConical
    },
    {
      title: 'Research Initiatives',
      description: 'Discover our groundbreaking research in genetic engineering',
      href: '/research',
      icon: Dna
    },
    {
      title: 'Workshops & Training',
      description: 'Hands-on wet lab & bio-computing technical programs',
      href: '/workshops',
      icon: GraduationCap
    }
  ];

  return (
    <>
      <SEO 
        title="404 - Page Not Found | INNOVAC BIOTECHNOLOGIES" 
        description="The scientific page or research pathway you requested could not be found."
      />

      {/* Standardized Hero Section with Breadcrumb */}
      <PageHero
        breadcrumb={[
          { label: 'HOME', href: '/' },
          { label: '404 ERROR' }
        ]}
        pageLabel="PAGE NOT FOUND"
        title="Sequence Not Found"
        description="The scientific page, publication, or resource pathway you requested could not be located in our genome index."
      />

      {/* Main Interactive 404 Section */}
      <section className="relative w-full bg-[#050505] text-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* Subtle Background Scientific Grid & Ambient Glow */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] bg-[length:32px_32px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF4D00]/06 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          
          {/* Hero Visual 404 Display */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            
            {/* Animated 404 Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-[#FF4D00]/30 text-[#FF4D00] text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-md"
            >
              <Compass size={14} className="animate-spin text-[#FF4D00]" style={{ animationDuration: '8s' }} />
              <span>ERROR CODE 404 • PATHWAY UNRESOLVED</span>
            </motion.div>

            {/* Giant 404 Typography with Subtle Gradient */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-7xl sm:text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/30 mb-6 drop-shadow-2xl"
            >
              404
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-neutral-300 font-light max-w-xl mx-auto leading-relaxed mb-10"
            >
              The page you are trying to reach may have been renamed, moved, or deleted from our database.
            </motion.p>

            {/* Integrated Site Search Input */}
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              onSubmit={handleSearch} 
              className="relative max-w-md mx-auto mb-12"
            >
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services, reagents, research..."
                  className="w-full bg-white/[0.04] border border-white/15 focus:border-[#FF4D00] rounded-2xl py-3.5 pl-12 pr-28 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#FF4D00]/20 transition-all backdrop-blur-md"
                />
                <SearchIcon size={18} className="absolute left-4 text-neutral-400" />
                <button
                  type="submit"
                  className="absolute right-2 px-4 py-2 bg-[#FF4D00] hover:bg-[#E64500] text-white font-semibold text-xs rounded-xl uppercase tracking-wider transition-colors shadow-md flex items-center gap-1.5"
                >
                  <span>SEARCH</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </motion.form>

            {/* Primary Navigation Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#FF4D00] hover:bg-[#E64500] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-[0_0_25px_rgba(255,77,0,0.35)] hover:shadow-[0_0_35px_rgba(255,77,0,0.5)] group"
              >
                <HomeIcon size={16} />
                <span>RETURN TO HOMEPAGE</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/10 text-white border border-white/15 hover:border-white/40 text-xs font-bold uppercase tracking-wider transition-all duration-200 backdrop-blur-md group"
              >
                <HelpCircle size={16} />
                <span>CONTACT SUPPORT</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Quick Discovery Cards */}
          <div className="mt-20 pt-16 border-t border-white/10">
            <h2 className="text-center text-xs font-bold tracking-[0.2em] text-[#FF4D00] uppercase mb-10">
              POPULAR SCIENTIFIC DESTINATIONS
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={idx}
                    to={item.href}
                    className="group relative bg-white/[0.03] hover:bg-[#FF4D00]/08 border border-white/10 hover:border-[#FF4D00]/40 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between backdrop-blur-md"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/12 flex items-center justify-center mb-5 group-hover:border-[#FF4D00]/50 group-hover:bg-[#FF4D00]/15 transition-all">
                        <IconComponent size={22} className="text-white group-hover:text-[#FF4D00] transition-colors" />
                      </div>
                      <h3 className="text-base font-bold text-white group-hover:text-[#FF4D00] transition-colors mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-neutral-400 font-light leading-relaxed mb-6">
                        {item.description}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-2 text-xs font-bold text-white group-hover:text-[#FF4D00] uppercase tracking-wider transition-colors pt-4 border-t border-white/08">
                      <span>DISCOVER</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
