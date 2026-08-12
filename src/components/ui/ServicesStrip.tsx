/**
 * ServicesStrip — Premium scroll-driven center-out reveal animation.
 *
 * Animation concept:
 *   • Scroll progress drives the entire reveal (reversible on scroll-up)
 *   • Each cell expands from the CENTER outward using transform-origin
 *   • Left cells (0-2): transformOrigin "right center" → grow leftward from center
 *   • Right cells (3-5): transformOrigin "left center" → grow rightward from center
 *   • Stagger order: 3→4→2→5→1→6 (center first, outer last)
 *   • Deadzone at scroll start guarantees 0% opacity when at top of page (no initial scroll)
 *   • prefers-reduced-motion: static fallback, no animation
 */

import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from 'motion/react';
import {
  type LucideIcon,
  Dna,
  FlaskConical,
  Activity,
  Beaker,
  Search,
  MessageSquare,
} from 'lucide-react';

// ─── Data ─────────────────────────────────────────────────────────────────────

interface ServiceItem {
  icon: LucideIcon;
  label: string;
  tagline: string;
  href: string;
}

const SERVICES: ServiceItem[] = [
  {
    icon: Dna,
    label: 'Nucleic Acid Services',
    tagline: 'DNA · RNA · miRNA',
    href: '/services/nucleic-acid',
  },
  {
    icon: FlaskConical,
    label: 'Protein & Peptide',
    tagline: 'Sequencing · Synthesis',
    href: '/services/protein',
  },
  {
    icon: Activity,
    label: 'Research & Bioinfo',
    tagline: 'In-silico · Analysis',
    href: '/services/research',
  },
  {
    icon: Beaker,
    label: 'Lab Reagents',
    tagline: 'Buffers · Enzymes · Media',
    href: '/reagents',
  },
  {
    icon: Search,
    label: 'Internships',
    tagline: 'Hands-on lab training',
    href: '/internships',
  },
  {
    icon: MessageSquare,
    label: 'Workshops',
    tagline: 'Scientific education',
    href: '/workshops',
  },
];

// ─── Animation Config ──────────────────────────────────────────────────────────

const ORIGINS: string[] = [
  'right center',
  'right center',
  'right center',
  'left center',
  'left center',
  'left center',
];

const STAGGER_DELAY: Record<number, number> = {
  0: 0.14, // Cell 1 — outermost left
  1: 0.07, // Cell 2
  2: 0.00, // Cell 3 — innermost left (FIRST)
  3: 0.00, // Cell 4 — innermost right (FIRST)
  4: 0.07, // Cell 5
  5: 0.14, // Cell 6 — outermost right
};

// ─── Animated Cell ─────────────────────────────────────────────────────────────

interface ServiceCellProps {
  key?: React.Key;
  service: ServiceItem;
  index: number;
  scrollProgress: MotionValue<number>;
}

function AnimatedServiceCell({ service, index, scrollProgress }: ServiceCellProps) {
  const d = STAGGER_DELAY[index];

  // Clamp helper — keep ranges within [0, 1]
  const clamp = (v: number) => Math.min(v, 1);

  // Primary reveal window for this cell
  const s = d;
  const e = clamp(d + 0.72);

  // ── Cell-level transforms ──────────────────────────────────────────────────
  const scaleX = useTransform(scrollProgress, [s + 0.05, e], [0.60, 1]);
  const scaleY = useTransform(scrollProgress, [s + 0.05, e], [0.90, 1]);

  // Opacity reveal: deadzone at [0, 0.05] ensures 0 opacity before scroll
  const opacity = useTransform(scrollProgress, [0, 0.05 + s * 0.5, clamp(s + 0.38)], [0, 0, 1]);

  const filter = useTransform(
    scrollProgress,
    [s + 0.05, clamp(s + 0.38)],
    ['blur(6px)', 'blur(0px)']
  );

  // ── Icon & Text transforms ──────────────────────────────────────────────────
  const iconOpacity = useTransform(scrollProgress, [clamp(s + 0.10), clamp(s + 0.48)], [0, 1]);
  const iconScale   = useTransform(scrollProgress, [clamp(s + 0.10), clamp(s + 0.54)], [0.60, 1]);

  const titleOpacity   = useTransform(scrollProgress, [clamp(s + 0.18), clamp(s + 0.58)], [0, 1]);
  const taglineOpacity = useTransform(scrollProgress, [clamp(s + 0.28), clamp(s + 0.68)], [0, 1]);

  return (
    <motion.div
      style={{
        scaleX,
        scaleY,
        opacity,
        filter,
        transformOrigin: ORIGINS[index],
      }}
      className="min-w-0 will-change-transform"
    >
      <Link
        to={service.href}
        className="group flex flex-col items-start justify-center gap-2.5 px-6 py-6 xl:px-7 xl:py-7 bg-white/[0.02] hover:bg-[#FF4D00]/10 transition-colors duration-200 cursor-pointer h-full w-full"
      >
        {/* Icon + Title row */}
        <div className="flex items-center gap-3 mb-1">
          <motion.span
            style={{ opacity: iconOpacity, scale: iconScale }}
            className="shrink-0 inline-flex"
          >
            <service.icon
              size={22}
              className="text-[#FF4D00] group-hover:scale-110 transition-transform duration-200"
              strokeWidth={1.8}
            />
          </motion.span>

          <motion.span
            style={{ opacity: titleOpacity }}
            className="text-[12px] xl:text-[13px] font-bold text-white uppercase tracking-wider leading-tight"
          >
            {service.label}
          </motion.span>
        </div>

        {/* Tagline */}
        <motion.span
          style={{ opacity: taglineOpacity }}
          className="text-[11px] xl:text-[12px] text-neutral-400 group-hover:text-neutral-200 transition-colors duration-200 leading-snug tracking-wide"
        >
          {service.tagline}
        </motion.span>
      </Link>
    </motion.div>
  );
}

// ─── Static Cell (prefers-reduced-motion) ─────────────────────────────────────

interface StaticServiceCellProps {
  key?: React.Key;
  service: ServiceItem;
}

function StaticServiceCell({ service }: StaticServiceCellProps) {
  return (
    <Link
      to={service.href}
      className="group flex flex-col items-start justify-center gap-2.5 px-6 py-6 xl:px-7 xl:py-7 bg-white/[0.02] hover:bg-[#FF4D00]/10 transition-colors duration-200 cursor-pointer"
    >
      <div className="flex items-center gap-3 mb-1">
        <service.icon
          size={22}
          className="text-[#FF4D00] shrink-0 group-hover:scale-110 transition-transform duration-200"
          strokeWidth={1.8}
        />
        <span className="text-[12px] xl:text-[13px] font-bold text-white uppercase tracking-wider leading-tight">
          {service.label}
        </span>
      </div>
      <span className="text-[11px] xl:text-[12px] text-neutral-400 group-hover:text-neutral-200 transition-colors duration-200 leading-snug tracking-wide">
        {service.tagline}
      </span>
    </Link>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export function ServicesStrip() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  /**
   * Offset range:
   * Starts tracking when element top reaches 88% of viewport height (as user scrolls down).
   * Completes when element top reaches 25% of viewport height.
   */
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start 88%', 'start 25%'],
  });

  // Outer container scale & opacity: stays 0 opacity until scroll progress > 0.02
  const containerScaleX = useTransform(scrollYProgress, [0.02, 0.90], [0.85, 1]);
  const containerOpacity = useTransform(scrollYProgress, [0, 0.02, 0.35], [0, 0, 1]);
  const dividerOpacity = useTransform(scrollYProgress, [0, 0.02, 0.25], [0, 0, 1]);

  return (
    <div ref={wrapperRef} className="w-full pb-8">
      {/* Hairline divider fades in on scroll */}
      <motion.div
        style={{ opacity: dividerOpacity }}
        className="w-full h-px bg-white/10 mb-8"
      />

      {/* prefers-reduced-motion: skip animations, show static cells */}
      {prefersReducedMotion ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/[0.08]">
          {SERVICES.map((svc, i) => (
            <StaticServiceCell key={i} service={svc} />
          ))}
        </div>
      ) : (
        <motion.div
          style={{ scaleX: containerScaleX, opacity: containerOpacity }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/[0.08]"
        >
          {SERVICES.map((svc, i) => (
            <AnimatedServiceCell
              key={i}
              service={svc}
              index={i}
              scrollProgress={scrollYProgress}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
}
