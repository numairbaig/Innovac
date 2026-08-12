import React from 'react';
import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';

interface SectionHeadingProps {
  label: string;
  title: string;
  highlightWord?: string;
  className?: string;
  light?: boolean;
}

export function SectionHeading({ label, title, highlightWord, className, light = false }: SectionHeadingProps) {
  
  // Helper to render title with optional highlight
  const renderTitle = () => {
    if (!highlightWord) {
      return title.split('\n').map((line, i) => (
        <React.Fragment key={i}>
          {line}
          <br />
        </React.Fragment>
      ));
    }

    const parts = title.split(highlightWord);
    return (
      <>
        {parts[0]}
        <span className="text-accent">{highlightWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={cn("mb-16 md:mb-24", className)}>
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 md:mb-6 text-accent"
      >
        {label}
      </motion.p>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn(
          "text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] max-w-4xl",
          light ? "text-white" : "text-primary"
        )}
      >
        {renderTitle()}
      </motion.h2>
    </div>
  );
}
