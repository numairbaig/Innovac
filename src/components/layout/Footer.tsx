import { getCtaPath } from '@/src/config/ctaConfig';
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { contactConfig } from '@/src/config/contact';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#050505] text-white pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-24">
          
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="INNOVAC BIOTECHNOLOGIES Logo" className="h-9 w-auto object-contain" />
              <div className="font-medium text-xs leading-[1.1] tracking-wider uppercase">
                Innovac<br />Biotechnologies
              </div>
            </Link>
            <p className="text-neutral-400 text-sm max-w-sm mb-8 leading-relaxed font-light">
              Biotechnology | Molecular Biology <br/>
              Research | Reagents | Training
            </p>
            <div className="flex gap-4">
              {contactConfig.social?.linkedin && contactConfig.social.linkedin !== "#" && (
                <a href={contactConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#FF4D00] hover:border-[#FF4D00] transition-colors">
                  <Linkedin size={18} />
                </a>
              )}
              {contactConfig.social?.twitter && contactConfig.social.twitter !== "#" && (
                <a href={contactConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#FF4D00] hover:border-[#FF4D00] transition-colors">
                  <Twitter size={18} />
                </a>
              )}
              {contactConfig.email && (
                <a href={`mailto:${contactConfig.email}`} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#FF4D00] hover:border-[#FF4D00] transition-colors">
                  <Mail size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-6">Company</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/about-us" className="text-neutral-300 hover:text-[#FF4D00] transition-colors text-sm">About Us</Link></li>
              <li><Link to="/team" className="text-neutral-300 hover:text-[#FF4D00] transition-colors text-sm">Our Team</Link></li>
              <li><Link to="/careers" className="text-neutral-300 hover:text-[#FF4D00] transition-colors text-sm">Careers</Link></li>
              <li><Link to="/contact" className="text-neutral-300 hover:text-[#FF4D00] transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-6">Services</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/services/nucleic-acid" className="text-neutral-300 hover:text-[#FF4D00] transition-colors text-sm">Nucleic Acid Services</Link></li>
              <li><Link to="/services/protein" className="text-neutral-300 hover:text-[#FF4D00] transition-colors text-sm">Protein & Peptide Services</Link></li>
              <li><Link to="/services/research" className="text-neutral-300 hover:text-[#FF4D00] transition-colors text-sm">Research & Computational Biology</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-6">Reagents</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/reagents/synthesis" className="text-neutral-300 hover:text-[#FF4D00] transition-colors text-sm">Synthesis Reagents</Link></li>
              <li><Link to="/reagents/supply" className="text-neutral-300 hover:text-[#FF4D00] transition-colors text-sm">Supply Reagents</Link></li>
              <li><Link to={getCtaPath('REQUEST_QUOTE')} className="text-neutral-300 hover:text-[#FF4D00] transition-colors text-sm">Request a Quote</Link></li>
            </ul>
          </div>
          
        </div>
        
        {/* Desktop extra columns (Training, Contact) placed nicely, or just adjust the grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-24 lg:-mt-16 relative pointer-events-none">
          <div className="hidden lg:block col-start-4 pointer-events-auto">
            <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-6">Training</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/internships" className="text-neutral-300 hover:text-[#FF4D00] transition-colors text-sm">Internships</Link></li>
              <li><Link to="/workshops" className="text-neutral-300 hover:text-[#FF4D00] transition-colors text-sm">Workshops</Link></li>
              <li><Link to="/courses" className="text-neutral-300 hover:text-[#FF4D00] transition-colors text-sm">Courses</Link></li>
            </ul>
          </div>
          <div className="hidden lg:block col-start-5 pointer-events-auto">
            <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-6">Contact</h4>
            <ul className="flex flex-col gap-4">
              <li className="text-neutral-300 text-sm">{contactConfig.email}</li>
              <li className="text-neutral-300 text-sm">{contactConfig.phone}</li>
              <li className="text-neutral-300 text-sm">{contactConfig.address}</li>
            </ul>
          </div>
        </div>
        
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-12 mb-24">
          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-6">Training</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/internships" className="text-neutral-300 hover:text-[#FF4D00] transition-colors text-sm">Internships</Link></li>
              <li><Link to="/workshops" className="text-neutral-300 hover:text-[#FF4D00] transition-colors text-sm">Workshops</Link></li>
              <li><Link to="/courses" className="text-neutral-300 hover:text-[#FF4D00] transition-colors text-sm">Courses</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-6">Contact</h4>
            <ul className="flex flex-col gap-4">
              <li className="text-neutral-300 text-sm">{contactConfig.email}</li>
              <li className="text-neutral-300 text-sm">{contactConfig.phone}</li>
              <li className="text-neutral-300 text-sm">{contactConfig.address}</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {currentYear} INNOVAC BIOTECHNOLOGIES. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
