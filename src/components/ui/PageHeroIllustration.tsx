/**
 * PageHeroIllustration
 *
 * A unified inline SVG illustration system for INNOVAC BIOTECHNOLOGIES hero sections.
 * All illustrations share the same visual language as the Home page hero:
 *   - Soft lavender/purple organic leaf shapes as background
 *   - Orange (#FF4D00) accents on DNA, liquids, molecular elements
 *   - Dark navy (#111A3A) scientific equipment
 *   - Clean semi-3D vector style
 *   - Consistent character design
 *   - Same molecular dot-network motif
 *
 * Usage:
 *   <PageHeroIllustration page="services" />
 */

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type PageKey =
  | 'services'
  | 'reagents'
  | 'research'
  | 'internships'
  | 'workshops'
  | 'about'
  | 'contact'
  | 'careers'
  | 'courses'
  | 'team'
  | 'quote';

interface PageHeroIllustrationProps {
  page: PageKey;
  className?: string;
}

// ─── Shared SVG Primitives ─────────────────────────────────────────────────

/** Soft organic leaf blob shapes used as background on every illustration */
const LeafShapes: React.FC<{ variant?: 'left' | 'right' | 'center' }> = ({
  variant = 'right',
}) => {
  if (variant === 'right')
    return (
      <>
        {/* Large right leaf */}
        <ellipse cx="340" cy="220" rx="160" ry="200" fill="#C8CBF0" fillOpacity="0.28" transform="rotate(-20 340 220)" />
        {/* Inner petal lines */}
        <path d="M310,90 Q370,160 340,290 Q320,370 290,300 Q270,230 310,90Z" fill="none" stroke="#A0A4E8" strokeWidth="1.2" strokeOpacity="0.5" />
        <path d="M350,100 Q410,180 370,310" fill="none" stroke="#A0A4E8" strokeWidth="0.9" strokeOpacity="0.4" />
        {/* Small left leaf */}
        <ellipse cx="100" cy="310" rx="90" ry="130" fill="#BFC3F0" fillOpacity="0.20" transform="rotate(15 100 310)" />
        <path d="M80,210 Q120,270 100,380" fill="none" stroke="#A0A4E8" strokeWidth="1.0" strokeOpacity="0.4" />
      </>
    );
  if (variant === 'left')
    return (
      <>
        <ellipse cx="140" cy="230" rx="150" ry="190" fill="#C8CBF0" fillOpacity="0.25" transform="rotate(20 140 230)" />
        <path d="M160,90 Q100,170 130,300 Q150,380 180,290" fill="none" stroke="#A0A4E8" strokeWidth="1.1" strokeOpacity="0.45" />
        <ellipse cx="380" cy="330" rx="80" ry="110" fill="#BFC3F0" fillOpacity="0.18" transform="rotate(-15 380 330)" />
        <path d="M360,250 Q400,310 380,400" fill="none" stroke="#A0A4E8" strokeWidth="0.9" strokeOpacity="0.35" />
      </>
    );
  // center
  return (
    <>
      <ellipse cx="250" cy="220" rx="200" ry="180" fill="#C8CBF0" fillOpacity="0.22" transform="rotate(-10 250 220)" />
      <ellipse cx="250" cy="300" rx="140" ry="120" fill="#BFC3F0" fillOpacity="0.16" transform="rotate(10 250 300)" />
      <path d="M170,100 Q250,180 230,360" fill="none" stroke="#A0A4E8" strokeWidth="1.2" strokeOpacity="0.4" />
      <path d="M290,90 Q340,170 310,350" fill="none" stroke="#A0A4E8" strokeWidth="0.9" strokeOpacity="0.35" />
    </>
  );
};

/** Molecular dot-and-line network */
const MolecularDots: React.FC<{ x: number; y: number; scale?: number; opacity?: number }> = ({
  x, y, scale = 1, opacity = 1,
}) => (
  <g transform={`translate(${x},${y}) scale(${scale})`} opacity={opacity}>
    <line x1="0" y1="0" x2="40" y2="-25" stroke="#FF4D00" strokeWidth="1.5" strokeOpacity="0.7" />
    <line x1="0" y1="0" x2="-35" y2="-30" stroke="#FF4D00" strokeWidth="1.5" strokeOpacity="0.7" />
    <line x1="0" y1="0" x2="10" y2="40" stroke="#FF4D00" strokeWidth="1.5" strokeOpacity="0.7" />
    <line x1="40" y1="-25" x2="70" y2="-5" stroke="#FF8040" strokeWidth="1.2" strokeOpacity="0.5" />
    <line x1="-35" y1="-30" x2="-60" y2="-10" stroke="#FF8040" strokeWidth="1.2" strokeOpacity="0.5" />
    <circle cx="0" cy="0" r="7" fill="#FF4D00" />
    <circle cx="40" cy="-25" r="5.5" fill="#FF6020" />
    <circle cx="-35" cy="-30" r="5.5" fill="#FF6020" />
    <circle cx="10" cy="40" r="4.5" fill="#FF8040" />
    <circle cx="70" cy="-5" r="4" fill="#FFB080" />
    <circle cx="-60" cy="-10" r="4" fill="#FFB080" />
  </g>
);

/** Orange DNA double helix */
const DnaHelix: React.FC<{ x: number; y: number; scale?: number }> = ({ x, y, scale = 1 }) => (
  <g transform={`translate(${x},${y}) scale(${scale})`}>
    {/* Left strand */}
    <path d="M0,0 Q20,30 0,60 Q-20,90 0,120 Q20,150 0,180" fill="none" stroke="#FF4D00" strokeWidth="3.5" strokeLinecap="round" />
    {/* Right strand */}
    <path d="M40,0 Q20,30 40,60 Q60,90 40,120 Q20,150 40,180" fill="none" stroke="#FF6020" strokeWidth="3.5" strokeLinecap="round" />
    {/* Rungs */}
    {[15, 45, 75, 105, 135, 165].map((ry, i) => (
      <line key={i} x1="2" y1={ry} x2="38" y2={ry} stroke="#FFB080" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
    ))}
    {/* Node dots */}
    {[0, 60, 120, 180].map((ry, i) => (
      <React.Fragment key={i}>
        <circle cx="0" cy={ry} r="5" fill="#FF4D00" />
        <circle cx="40" cy={ry} r="5" fill="#FF6020" />
      </React.Fragment>
    ))}
  </g>
);

/** Dark navy microscope */
const Microscope: React.FC<{ x: number; y: number; scale?: number }> = ({ x, y, scale = 1 }) => (
  <g transform={`translate(${x},${y}) scale(${scale})`}>
    {/* Base */}
    <ellipse cx="50" cy="190" rx="45" ry="10" fill="#1A2240" />
    <rect x="30" y="175" width="40" height="18" rx="4" fill="#111A3A" />
    {/* Arm */}
    <rect x="44" y="80" width="12" height="100" rx="4" fill="#1E2850" />
    {/* Stage */}
    <rect x="22" y="145" width="56" height="10" rx="3" fill="#263060" />
    {/* Head */}
    <rect x="40" y="55" width="20" height="30" rx="5" fill="#111A3A" />
    {/* Eyepiece */}
    <rect x="47" y="30" width="10" height="30" rx="4" fill="#1A2240" />
    <ellipse cx="52" cy="30" rx="8" ry="5" fill="#263060" />
    {/* Objective lens */}
    <rect x="42" y="115" width="16" height="32" rx="4" fill="#111A3A" />
    <ellipse cx="50" cy="148" rx="9" ry="5" fill="#3B4F8A" />
    {/* Highlight */}
    <ellipse cx="50" cy="148" rx="4" ry="2.5" fill="#6080C0" fillOpacity="0.5" />
    {/* Coarse knob */}
    <ellipse cx="34" cy="120" rx="8" ry="5" fill="#1A2240" transform="rotate(-15 34 120)" />
    <ellipse cx="66" cy="120" rx="8" ry="5" fill="#1A2240" transform="rotate(15 66 120)" />
  </g>
);

/** Erlenmeyer flask with orange liquid */
const Flask: React.FC<{ x: number; y: number; scale?: number; fillColor?: string }> = ({
  x, y, scale = 1, fillColor = '#FF6020',
}) => (
  <g transform={`translate(${x},${y}) scale(${scale})`}>
    {/* Glass body */}
    <path d="M30,30 L25,80 Q10,110 5,140 Q0,170 50,175 Q100,175 95,140 Q90,110 75,80 L70,30Z"
      fill="white" fillOpacity="0.12" stroke="#D0D8FF" strokeWidth="2" />
    {/* Liquid fill */}
    <path d="M18,105 Q10,130 5,148 Q0,170 50,173 Q100,173 95,148 Q90,130 82,105Z"
      fill={fillColor} fillOpacity="0.9" />
    {/* Bubbles */}
    <circle cx="35" cy="145" r="5" fill="white" fillOpacity="0.3" />
    <circle cx="55" cy="155" r="3.5" fill="white" fillOpacity="0.25" />
    <circle cx="70" cy="138" r="4" fill="white" fillOpacity="0.2" />
    {/* Neck */}
    <rect x="33" y="5" width="34" height="30" rx="6" fill="white" fillOpacity="0.1" stroke="#D0D8FF" strokeWidth="2" />
    {/* Neck top ring */}
    <ellipse cx="50" cy="5" rx="17" ry="5" fill="#C0C8F0" fillOpacity="0.4" />
    {/* Shine */}
    <path d="M20,90 Q18,110 20,130" stroke="white" strokeWidth="2.5" strokeOpacity="0.25" strokeLinecap="round" />
  </g>
);

/** Test tube rack with 3 tubes */
const TestTubeRack: React.FC<{ x: number; y: number; scale?: number }> = ({ x, y, scale = 1 }) => (
  <g transform={`translate(${x},${y}) scale(${scale})`}>
    {/* Rack bar */}
    <rect x="0" y="50" width="90" height="8" rx="4" fill="#2A3560" />
    <rect x="0" y="85" width="90" height="8" rx="4" fill="#2A3560" />
    {/* Tube 1 */}
    <rect x="10" y="10" width="16" height="60" rx="8" fill="white" fillOpacity="0.15" stroke="#C0C8F0" strokeWidth="1.5" />
    <rect x="10" y="40" width="16" height="32" rx="0 0 8 8" fill="#FF4D00" fillOpacity="0.9" />
    <ellipse cx="18" cy="40" rx="8" ry="3" fill="#FF6030" />
    {/* Tube 2 */}
    <rect x="37" y="5" width="16" height="65" rx="8" fill="white" fillOpacity="0.15" stroke="#C0C8F0" strokeWidth="1.5" />
    <rect x="37" y="32" width="16" height="40" rx="0 0 8 8" fill="#FF7030" fillOpacity="0.9" />
    <ellipse cx="45" cy="32" rx="8" ry="3" fill="#FF8040" />
    {/* Tube 3 */}
    <rect x="64" y="12" width="16" height="58" rx="8" fill="white" fillOpacity="0.15" stroke="#C0C8F0" strokeWidth="1.5" />
    <rect x="64" y="42" width="16" height="30" rx="0 0 8 8" fill="#FF5520" fillOpacity="0.9" />
    <ellipse cx="72" cy="42" rx="8" ry="3" fill="#FF6030" />
  </g>
);

/** Simplified scientist character in lab coat */
const Scientist: React.FC<{
  x: number; y: number; scale?: number;
  facing?: 'left' | 'right';
  holdingItem?: 'tubes' | 'clipboard' | 'pipette' | null;
}> = ({ x, y, scale = 1, facing = 'right', holdingItem = null }) => {
  const flip = facing === 'left' ? `scale(-1,1) translate(-${x * 2 + 60},0)` : '';
  return (
    <g transform={`translate(${x},${y}) scale(${scale})`}>
      <g transform={flip}>
        {/* Lab coat body */}
        <path d="M15,70 Q5,90 8,140 L52,140 Q55,90 45,70Z" fill="white" fillOpacity="0.95" />
        {/* Lapels */}
        <path d="M30,70 L22,90 L30,95Z" fill="#E0E4F8" />
        <path d="M30,70 L38,90 L30,95Z" fill="#E0E4F8" />
        {/* Dark shirt under */}
        <rect x="23" y="70" width="14" height="30" rx="2" fill="#1E2850" />
        {/* Pants */}
        <rect x="14" y="138" width="15" height="50" rx="4" fill="#111A3A" />
        <rect x="31" y="138" width="15" height="50" rx="4" fill="#1A2240" />
        {/* Shoes */}
        <ellipse cx="21" cy="190" rx="12" ry="5" fill="#0A0E20" />
        <ellipse cx="38" cy="190" rx="12" ry="5" fill="#111830" />
        {/* Left arm */}
        <path d="M14,75 Q2,95 5,120" fill="none" stroke="white" strokeWidth="13" strokeLinecap="round" />
        <path d="M14,75 Q2,95 5,120" fill="none" stroke="#E8EAF8" strokeWidth="11" strokeLinecap="round" />
        {/* Right arm */}
        <path d="M46,75 Q58,90 55,115" fill="none" stroke="white" strokeWidth="13" strokeLinecap="round" />
        <path d="M46,75 Q58,90 55,115" fill="none" stroke="#E8EAF8" strokeWidth="11" strokeLinecap="round" />
        {/* Head */}
        <circle cx="30" cy="50" r="22" fill="#F5CBA7" />
        {/* Hair */}
        <path d="M10,42 Q12,22 30,20 Q48,22 50,42" fill="#1A1A2E" />
        {/* Eyes */}
        <circle cx="23" cy="50" r="2.5" fill="#1A1A2E" />
        <circle cx="37" cy="50" r="2.5" fill="#1A1A2E" />
        {/* Mouth */}
        <path d="M25,60 Q30,64 35,60" fill="none" stroke="#C0826A" strokeWidth="1.5" strokeLinecap="round" />
        {/* Holding item */}
        {holdingItem === 'tubes' && (
          <g transform="translate(50, 90)">
            <rect x="0" y="-10" width="8" height="35" rx="4" fill="#C0C8F0" fillOpacity="0.4" stroke="#D0D8FF" strokeWidth="1" />
            <rect x="0" y="10" width="8" height="16" rx="0 0 4 4" fill="#FF4D00" fillOpacity="0.9" />
            <rect x="11" y="-14" width="8" height="39" rx="4" fill="#C0C8F0" fillOpacity="0.4" stroke="#D0D8FF" strokeWidth="1" />
            <rect x="11" y="10" width="8" height="18" rx="0 0 4 4" fill="#FF6030" fillOpacity="0.9" />
            <rect x="-1" y="24" width="20" height="4" rx="2" fill="#2A3560" />
          </g>
        )}
        {holdingItem === 'clipboard' && (
          <g transform="translate(48, 85)">
            <rect x="0" y="0" width="28" height="36" rx="3" fill="#E8EAF8" stroke="#C0C8F0" strokeWidth="1.5" />
            <rect x="8" y="-4" width="12" height="6" rx="3" fill="#2A3560" />
            <line x1="5" y1="10" x2="23" y2="10" stroke="#B0B8E0" strokeWidth="1.5" />
            <line x1="5" y1="16" x2="23" y2="16" stroke="#B0B8E0" strokeWidth="1.5" />
            <line x1="5" y1="22" x2="19" y2="22" stroke="#B0B8E0" strokeWidth="1.5" />
            <line x1="5" y1="28" x2="21" y2="28" stroke="#B0B8E0" strokeWidth="1.5" />
          </g>
        )}
        {holdingItem === 'pipette' && (
          <g transform="translate(52, 75) rotate(-30)">
            <rect x="0" y="0" width="7" height="55" rx="3" fill="#D0D8FF" stroke="#B0B8E0" strokeWidth="1" />
            <path d="M1,55 L3.5,75 L6,55Z" fill="#1A2240" />
            <rect x="1" y="40" width="5" height="12" rx="0" fill="#FF4D00" fillOpacity="0.7" />
          </g>
        )}
      </g>
    </g>
  );
};

/** Reagent/sample bottle */
const ReagentBottle: React.FC<{ x: number; y: number; scale?: number; fillColor?: string; label?: string }> = ({
  x, y, scale = 1, fillColor = '#FF6020', label
}) => (
  <g transform={`translate(${x},${y}) scale(${scale})`}>
    {/* Body */}
    <path d="M8,30 Q5,35 5,100 Q5,115 25,115 Q45,115 45,100 Q45,35 42,30Z"
      fill="white" fillOpacity="0.12" stroke="#C0C8F0" strokeWidth="1.5" />
    {/* Liquid */}
    <path d="M6,70 Q5,100 5,100 Q5,113 25,113 Q45,113 45,100 Q45,90 44,70Z"
      fill={fillColor} fillOpacity="0.85" />
    {/* Neck */}
    <rect x="18" y="10" width="14" height="22" rx="3" fill="white" fillOpacity="0.12" stroke="#C0C8F0" strokeWidth="1.5" />
    {/* Cap */}
    <rect x="15" y="4" width="20" height="10" rx="4" fill="#111A3A" />
    {/* Label */}
    {label && (
      <>
        <rect x="9" y="52" width="32" height="22" rx="3" fill="white" fillOpacity="0.8" />
        <text x="25" y="67" textAnchor="middle" fontSize="6" fill="#111A3A" fontFamily="sans-serif" fontWeight="bold">{label}</text>
      </>
    )}
    {/* Shine */}
    <path d="M12,45 Q10,60 12,80" stroke="white" strokeWidth="2" strokeOpacity="0.2" strokeLinecap="round" />
  </g>
);

/** Floating pill capsule */
const Pill: React.FC<{ x: number; y: number; r?: number; color1?: string; color2?: string }> = ({
  x, y, r = 0, color1 = '#111A3A', color2 = '#FF4D00',
}) => (
  <g transform={`translate(${x},${y}) rotate(${r})`}>
    <path d="M-12,0 Q-12,-8 0,-8 L0,8 Q-12,8 -12,0Z" fill={color1} />
    <path d="M12,0 Q12,8 0,8 L0,-8 Q12,-8 12,0Z" fill={color2} />
    <line x1="0" y1="-8" x2="0" y2="8" stroke="white" strokeWidth="0.8" strokeOpacity="0.3" />
  </g>
);

/** Connection node network */
const ConnectionNetwork: React.FC<{ x: number; y: number; scale?: number }> = ({ x, y, scale = 1 }) => (
  <g transform={`translate(${x},${y}) scale(${scale})`}>
    {/* Lines */}
    <line x1="60" y1="60" x2="130" y2="20" stroke="#FF4D00" strokeWidth="1.5" strokeOpacity="0.6" />
    <line x1="60" y1="60" x2="20" y2="120" stroke="#FF4D00" strokeWidth="1.5" strokeOpacity="0.6" />
    <line x1="60" y1="60" x2="130" y2="110" stroke="#FF4D00" strokeWidth="1.5" strokeOpacity="0.6" />
    <line x1="130" y1="20" x2="170" y2="60" stroke="#FF8040" strokeWidth="1.2" strokeOpacity="0.5" />
    <line x1="130" y1="110" x2="170" y2="60" stroke="#FF8040" strokeWidth="1.2" strokeOpacity="0.5" />
    <line x1="20" y1="120" x2="60" y2="160" stroke="#FF8040" strokeWidth="1.2" strokeOpacity="0.5" />
    <line x1="130" y1="110" x2="100" y2="160" stroke="#FF8040" strokeWidth="1.2" strokeOpacity="0.4" />
    {/* Nodes */}
    <circle cx="60" cy="60" r="12" fill="#FF4D00" />
    <circle cx="60" cy="60" r="7" fill="#FF6020" />
    <circle cx="130" cy="20" r="9" fill="#FF6020" />
    <circle cx="20" cy="120" r="8" fill="#FF6020" />
    <circle cx="130" cy="110" r="9" fill="#FF6020" />
    <circle cx="170" cy="60" r="7" fill="#FF8040" />
    <circle cx="60" cy="160" r="7" fill="#FF8040" />
    <circle cx="100" cy="160" r="6" fill="#FFB080" />
    {/* Outer glow ring on center */}
    <circle cx="60" cy="60" r="18" fill="none" stroke="#FF4D00" strokeWidth="1.5" strokeOpacity="0.25" />
    <circle cx="60" cy="60" r="24" fill="none" stroke="#FF4D00" strokeWidth="1" strokeOpacity="0.12" />
  </g>
);

// ─── Page Illustrations ────────────────────────────────────────────────────

const ServicesIllustration = () => (
  <img
    src="/services-hero.png"
    alt="Biotechnology laboratory services illustration showing scientists, DNA double helix, microscope, and scientific equipment"
    className="w-full max-w-[480px] lg:max-w-[540px] h-auto object-contain drop-shadow-2xl select-none pointer-events-none"
    draggable={false}
  />
);

const ReagentsIllustration = () => (
  <img
    src="/reagents-hero.png"
    alt="Laboratory reagents microscope and molecular cell analysis illustration"
    className="w-full max-w-[480px] lg:max-w-[540px] h-auto object-contain drop-shadow-2xl select-none pointer-events-none"
    draggable={false}
  />
);

const ResearchIllustration = () => (
  <img
    src="/research-hero.png"
    alt="Biotechnology research microscope with magnified cellular and microbiological analysis"
    className="w-full max-w-[480px] lg:max-w-[540px] h-auto object-contain drop-shadow-2xl select-none pointer-events-none"
    draggable={false}
  />
);

const InternshipsIllustration = () => (
  <img
    src="/internships-hero.png"
    alt="Biotechnology internship researcher working with pipette, petri dish, and laboratory sprouts"
    className="w-full max-w-[480px] lg:max-w-[540px] h-auto object-contain drop-shadow-2xl select-none pointer-events-none"
    draggable={false}
  />
);

const WorkshopsIllustration = () => (
  <img
    src="/workshops-hero.png"
    alt="Scientific workshop presentation and interactive training session illustration"
    className="w-full max-w-[480px] lg:max-w-[540px] h-auto object-contain drop-shadow-2xl select-none pointer-events-none"
    draggable={false}
  />
);

const AboutIllustration = () => (
  <img
    src="/about-hero.png"
    alt="INNOVAC BIOTECHNOLOGIES about us scientific discovery illustration"
    className="w-full max-w-[480px] lg:max-w-[540px] h-auto object-contain drop-shadow-2xl select-none pointer-events-none"
    draggable={false}
  />
);

const ContactIllustration = () => (
  <img
    src="/contact-hero.png"
    alt="INNOVAC BIOTECHNOLOGIES scientific support and communication illustration"
    className="w-full max-w-[480px] lg:max-w-[540px] h-auto object-contain drop-shadow-2xl select-none pointer-events-none"
    draggable={false}
  />
);
const CareersIllustration = () => (
  <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <LeafShapes variant="left" />
    <DnaHelix x={80} y={120} scale={1.0} />
    <Scientist x={190} y={230} scale={1.0} facing="right" holdingItem="pipette" />
    <MolecularDots x={360} y={150} scale={0.9} opacity={0.8} />
    <Pill x={120} y={350} r={15} color1="#111A3A" color2="#FF4D00" />
    <Flask x={350} y={280} scale={0.9} fillColor="#FF4D00" />
    {/* Career path/nodes representation */}
    <g transform="translate(60, 260)" opacity="0.85">
      <circle cx="20" cy="80" r="14" fill="#FF4D00" fillOpacity="0.15" stroke="#FF4D00" strokeWidth="1.5" />
      <line x1="20" y1="66" x2="50" y2="30" stroke="#FF4D00" strokeWidth="2" strokeDasharray="3 3" />
      <circle cx="50" cy="30" r="8" fill="#FF4D00" />
      <line x1="50" y1="30" x2="110" y2="20" stroke="#FF4D00" strokeWidth="2" />
      <circle cx="110" cy="20" r="10" fill="#FF6020" />
    </g>
  </svg>
);

const CoursesIllustration = () => (
  <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <LeafShapes variant="center" />
    {/* Stylized monitor/laptop with scientific code */}
    <g transform="translate(110, 180)">
      <rect x="0" y="0" width="280" height="170" rx="16" fill="#111A3A" stroke="#C0C8F0" strokeWidth="3" />
      <rect x="10" y="10" width="260" height="130" rx="8" fill="#050815" />
      {/* Screen details */}
      <path d="M25,25 Q45,55 25,85 Q5,115 25,145" fill="none" stroke="#FF4D00" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
      <path d="M45,25 Q65,55 45,85" fill="none" stroke="#FF7030" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      {/* Code line visuals */}
      <line x1="90" y1="35" x2="230" y2="35" stroke="#C8CBF0" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
      <line x1="90" y1="55" x2="190" y2="55" stroke="#FF4D00" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
      <line x1="90" y1="75" x2="210" y2="75" stroke="#C8CBF0" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
      <line x1="90" y1="95" x2="160" y2="95" stroke="#FF6020" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
      {/* Monitor base */}
      <path d="M110,170 L170,170 L180,200 L100,200 Z" fill="#1E2850" />
      <rect x="80" y="200" width="120" height="10" rx="3" fill="#111A3A" />
    </g>
    {/* Stylized Graduation Cap hovering above screen */}
    <g transform="translate(250, 100) rotate(-10)">
      <polygon points="50,10 100,30 50,50 0,30" fill="#111A3A" stroke="#FF4D00" strokeWidth="2" />
      <rect x="35" y="38" width="30" height="15" fill="#1E2850" stroke="#FF4D00" strokeWidth="1.5" />
      <path d="M90,32 L95,65 Q85,75 80,65" fill="none" stroke="#FF6020" strokeWidth="2" />
      <circle cx="50" cy="30" r="3" fill="#FF4D00" />
    </g>
    <MolecularDots x={70} y={130} scale={0.8} />
    <MolecularDots x={410} y={320} scale={0.8} />
  </svg>
);

const TeamIllustration = () => (
  <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <LeafShapes variant="right" />
    {/* Multiple scientists collaborating */}
    <Scientist x={110} y={230} scale={0.85} facing="right" holdingItem="tubes" />
    <Scientist x={260} y={220} scale={0.9} facing="left" holdingItem="clipboard" />
    <DnaHelix x={220} y={60} scale={0.9} />
    <ConnectionNetwork x={180} y={150} scale={0.8} />
    <MolecularDots x={390} y={180} scale={0.8} />
    <MolecularDots x={80} y={180} scale={0.7} />
  </svg>
);

const QuoteIllustration = () => (
  <img
    src="/enquiry-hero.png"
    alt="INNOVAC BIOTECHNOLOGIES quote and custom project enquiry illustration"
    className="w-full max-w-[480px] lg:max-w-[540px] h-auto object-contain drop-shadow-2xl select-none pointer-events-none"
    draggable={false}
  />
);

// ─── Illustration Registry ────────────────────────────────────────────────

const illustrations: Record<PageKey, React.FC> = {
  services: ServicesIllustration,
  reagents: ReagentsIllustration,
  research: ResearchIllustration,
  internships: InternshipsIllustration,
  workshops: WorkshopsIllustration,
  about: AboutIllustration,
  contact: ContactIllustration,
  careers: CareersIllustration,
  courses: CoursesIllustration,
  team: TeamIllustration,
  quote: QuoteIllustration,
};

// ─── Main Component ───────────────────────────────────────────────────────

export function PageHeroIllustration({ page, className = '' }: PageHeroIllustrationProps) {
  const IllustrationComponent = illustrations[page];
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`relative w-full flex justify-center lg:justify-end ${className}`}>
      {/* Soft radial glow behind illustration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,77,0,0.10)_0%,transparent_70%)] pointer-events-none" />

      {/* Entrance animation wrapper */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 40, scale: 0.96 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-[460px] lg:max-w-[520px]"
      >
        {/* Floating / alive animation */}
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, -12, 0], rotate: [0, 0.5, 0, -0.5, 0] }}
          transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop' }}
        >
          <IllustrationComponent />
        </motion.div>
      </motion.div>
    </div>
  );
}
