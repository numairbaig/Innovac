import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { SEO } from '@/src/components/SEO';
import { PageHeroIllustration } from '@/src/components/ui/PageHeroIllustration';
import { Button } from '@/src/components/ui/Button';

export default function Team() {
  return (
    <>
      <SEO title="Our Team | INNOVAC BIOTECHNOLOGIES" />
      
      {/* SECTION 01 — HERO */}
      <section className="relative w-full pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 bg-[#050505] text-white overflow-hidden">
        {/* Subtle Radial Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#050505]" />
          <div className="absolute right-0 top-0 w-[60%] h-full bg-[radial-gradient(ellipse_at_70%_40%,rgba(255,77,0,0.08)_0%,transparent_65%)]" />
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] bg-[length:32px_32px]" />
        </div>

        <div className="max-w-[1400px] mx-auto relative z-20 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-12 lg:mt-0 w-full">
            <div className="max-w-3xl lg:w-3/5">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-2 text-[10px] font-semibold text-neutral-400 uppercase tracking-widest mb-12">
                  <Link to="/" className="hover:text-white transition-colors">Home</Link>
                  <ChevronRight size={12} />
                  <span className="text-white">Our Team</span>
                </div>
                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#FF4D00] mb-6">
                  Scientific Leadership
                </p>
                <h1 className="text-5xl md:text-7xl lg:text-[76px] font-medium tracking-tight leading-[1.05] mb-8 text-white">
                  Scientific<br />
                  <span className="text-[#FF4D00]">Experts.</span>
                </h1>
                <p className="text-lg text-neutral-300 max-w-2xl mb-16 leading-relaxed font-light">
                  Our team consists of dedicated scientists and researchers committed to advancing biotechnology, molecular research, and diagnostics.
                </p>
              </motion.div>
            </div>
            
            {/* Right Visual Area */}
            <PageHeroIllustration page="team" className="lg:w-2/5" />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white text-center">
        <h2 className="text-3xl font-medium mb-6">Our Scientific Leadership</h2>
        <p className="text-neutral-600 mb-12 max-w-2xl mx-auto">
          INNOVAC BIOTECHNOLOGIES is driven by a passionate team of researchers and industry professionals. We collaborate to deliver excellence in molecular biology, bioinformatics, and reagent synthesis.
        </p>
        <Button href="/contact" variant="primary" withArrow>CONTACT THE TEAM</Button>
      </section>
    </>
  );
}