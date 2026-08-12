import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Dna, FlaskConical, Microscope, Beaker, GraduationCap, Users, Network, Presentation } from 'lucide-react';

interface ScientificHeroVisualProps {
  concept: 'home' | 'research' | 'services' | 'reagents' | 'internships' | 'workshops' | 'about' | 'contact';
}

const conceptData = {
  home: {
    img: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?q=80&w=1200&auto=format&fit=crop",
    alt: "Molecular Biology & DNA Solutions",
    icon: Dna,
    glowColor: "rgba(255, 77, 0, 0.15)", // Innovac Accent color
  },
  research: {
    img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1200&auto=format&fit=crop",
    alt: "DNA Sequencing and Molecular Analysis",
    icon: Microscope,
    glowColor: "rgba(0, 149, 255, 0.15)", // Blue glow for research
  },
  services: {
    img: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=1200&auto=format&fit=crop",
    alt: "Biotechnology Laboratory Services",
    icon: Network,
    glowColor: "rgba(0, 255, 149, 0.15)", // Greenish glow for services
  },
  reagents: {
    img: "https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=1200&auto=format&fit=crop",
    alt: "Laboratory Reagents and Supplies",
    icon: FlaskConical,
    glowColor: "rgba(255, 179, 0, 0.15)", // Orange-yellow for reagents
  },
  internships: {
    img: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1200&auto=format&fit=crop",
    alt: "Biotechnology Internship Program",
    icon: GraduationCap,
    glowColor: "rgba(179, 0, 255, 0.15)", // Purple glow for internships
  },
  workshops: {
    img: "https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?q=80&w=1200&auto=format&fit=crop",
    alt: "Scientific Biotechnology Workshops",
    icon: Presentation,
    glowColor: "rgba(255, 0, 119, 0.15)", // Pinkish glow for workshops
  },
  about: {
    img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
    alt: "Scientific Innovation and Team",
    icon: Beaker,
    glowColor: "rgba(255, 77, 0, 0.15)", // Accent color
  },
  contact: {
    img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1200&auto=format&fit=crop",
    alt: "Scientific Collaboration & Partnership",
    icon: Users,
    glowColor: "rgba(0, 221, 221, 0.15)", // Cyan glow
  }
};

export function ScientificHeroVisual({ concept }: ScientificHeroVisualProps) {
  const data = conceptData[concept] || conceptData.home;
  const shouldReduceMotion = useReducedMotion();
  const Icon = data.icon;

  // Subtle float animation
  const floatTransition = shouldReduceMotion
    ? {}
    : {
        y: {
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse" as const,
          ease: "easeInOut"
        },
        x: {
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse" as const,
          ease: "easeInOut"
        },
        scale: {
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse" as const,
          ease: "easeInOut"
        }
      };

  const floatVariants = {
    animate: {
      y: shouldReduceMotion ? 0 : [-8, 8, -8],
      x: shouldReduceMotion ? 0 : [-4, 4, -4],
      scale: shouldReduceMotion ? 1 : [1, 1.02, 1],
    }
  };

  // Particles coordinates and drift paths
  const particles = [
    { id: 1, top: "15%", left: "20%", size: 6, delay: 0, xRange: [0, 15, 0], yRange: [0, -15, 0] },
    { id: 2, top: "75%", left: "15%", size: 8, delay: 1, xRange: [0, -12, 0], yRange: [0, 12, 0] },
    { id: 3, top: "25%", left: "80%", size: 5, delay: 2, xRange: [0, 10, 0], yRange: [0, 15, 0] },
    { id: 4, top: "65%", left: "85%", size: 7, delay: 1.5, xRange: [0, -15, 0], yRange: [0, -10, 0] },
  ];

  return (
    <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center select-none pointer-events-none z-10">
      {/* Layer 1: Subtle background glow/light */}
      <motion.div
        animate={shouldReduceMotion ? { opacity: 0.15 } : { opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[80%] h-[80%] rounded-full filter blur-[60px]"
        style={{
          background: `radial-gradient(circle, ${data.glowColor} 0%, transparent 70%)`
        }}
      />

      {/* Layer 2: Main scientific image (masked & blended) */}
      <motion.div
        variants={floatVariants}
        animate="animate"
        transition={floatTransition}
        className="relative w-[85%] h-[85%] rounded-[32px] overflow-hidden border border-white/10 bg-[#000000]/30 shadow-2xl flex items-center justify-center"
        style={{
          // Apply a radial mask to make the borders fade into transparency smoothly
          maskImage: "radial-gradient(circle at center, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 30%, transparent 75%)",
        }}
      >
        <img
          src={data.img}
          alt={data.alt}
          className="w-full h-full object-cover mix-blend-screen opacity-75"
        />
        
        {/* Floating tech badge indicator */}
        <div className="absolute bottom-6 right-6 bg-[#000000]/60 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2 flex items-center gap-2 z-20">
          <div className="w-6 h-6 rounded-full bg-[#FF4D00]/20 flex items-center justify-center border border-[#FF4D00]/30">
            <Icon size={12} className="text-[#FF4D00]" />
          </div>
          <span className="text-[10px] text-white tracking-widest font-semibold uppercase">
            {concept}
          </span>
        </div>
      </motion.div>

      {/* Layer 3: Independent floating scientific particles */}
      {!shouldReduceMotion && particles.map((p) => (
        <motion.div
          key={p.id}
          animate={{
            x: p.xRange,
            y: p.yRange,
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 8 + p.id * 2,
            repeat: Infinity,
            repeatType: "reverse" as const,
            delay: p.delay,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-[#FF4D00]/30 border border-[#FF4D00]/50 backdrop-blur-sm"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            boxShadow: "0 0 10px rgba(255, 77, 0, 0.3)"
          }}
        />
      ))}
    </div>
  );
}
