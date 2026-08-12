import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp } from 'lucide-react';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={scrollToTop}
          className="fixed z-50 rounded-full bg-[#050505] hover:bg-[#FF4D00] text-white border border-white/20 hover:border-[#FF4D00] shadow-[0_6px_24px_rgba(0,0,0,0.25)] select-none cursor-pointer flex items-center justify-center transition-all duration-200 hover:-translate-y-[3px] focus:outline-none
            bottom-5 right-4 w-[46px] h-[46px]
            md:bottom-7 md:right-7 md:w-[52px] md:h-[52px]"
          aria-label="Back to top"
          title="Back to top"
        >
          {/* Premium Orange Accent Inner Ring */}
          <div className="absolute inset-[3px] rounded-full border border-[#FF4D00]/40 group-hover:border-transparent transition-colors pointer-events-none" />
          
          <ChevronUp className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
