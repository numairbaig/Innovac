import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface PageHeroProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
}

export function PageHero({ label, title, description, className }: PageHeroProps) {
  return (
    <section className={cn("pt-24 pb-16 lg:pt-28 lg:pb-20 px-6 bg-deep-black text-white border-b border-white/5", className)}>
      <div className="max-w-[1400px] mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-6"
        >
          {label}
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.05] max-w-4xl mb-8"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed font-light"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
