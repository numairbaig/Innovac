import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO } from '@/src/components/SEO';
import { Button } from '@/src/components/ui/Button';

export default function NotFound() {
  return (
    <>
      <SEO 
        title="Page Not Found | INNOVAC BIOTECHNOLOGIES" 
        description="The scientific page you're looking for could not be found."
      />
      <section className="relative w-full bg-[#050505] min-h-[80vh] flex items-center justify-center overflow-hidden py-24 px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=2959&auto=format&fit=crop" 
            alt="Molecular Background" 
            className="w-full h-full object-cover opacity-10 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
        </div>
        
        <div className="max-w-2xl mx-auto text-center relative z-10 flex flex-col items-center">
          <span className="text-[#FF4D00] text-sm font-semibold tracking-widest uppercase mb-4 block">
            404 ERROR
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Page Not Found.
          </h1>
          <p className="text-neutral-400 text-lg mb-12">
            The scientific page you're looking for could not be found.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" href="/" className="bg-[#FF4D00] hover:bg-[#E64500] text-white border-none px-8 py-4 text-sm font-semibold uppercase tracking-wider">
              BACK TO HOME &rarr;
            </Button>
            <Button variant="outline" href="/contact" className="text-white border-white/30 hover:bg-white hover:text-black px-8 py-4 text-sm font-semibold uppercase tracking-wider">
              CONTACT US &rarr;
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
