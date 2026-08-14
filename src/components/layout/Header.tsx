import { getCtaPath } from '@/src/config/ctaConfig';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Search, User, LogIn, ChevronDown } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useAuth } from '@/src/contexts/AuthContext';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesAccordion, setMobileServicesAccordion] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesAccordion(false);
  }, [location.pathname]);

  const desktopNavLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services', isServices: true },
    { name: 'Reagents', href: '/reagents' },
    { name: 'Research', href: '/research' },
    { name: 'Internships', href: '/internships' },
    { name: 'Workshops', href: '/workshops' },
    { name: 'About Us', href: '/about-us' },
  ];

  const headerBg = isScrolled 
    ? 'bg-[#050505]/88 backdrop-blur-[14px] border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' 
    : 'bg-transparent';

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", headerBg)}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-6 2xl:px-[50px] h-20 flex items-center justify-between gap-2 xl:gap-4 2xl:gap-6 w-full">
          
          {/* LEFT: Logo */}
          <Link to="/" className="flex items-center gap-2.5 2xl:gap-3 z-50 text-white hover:text-white/90 transition-colors shrink-0">
            <img src="/logo.png" alt="INNOVAC BIOTECHNOLOGIES Logo" className="h-8 2xl:h-9 w-auto object-contain" />
            <div className="font-semibold text-xs leading-[1.1] tracking-wider uppercase">
              Innovac<br />Biotechnologies
            </div>
          </Link>

          {/* CENTER: Desktop Nav */}
          <nav className="hidden xl:flex items-center justify-center flex-grow min-w-0">
            <ul className="flex items-center gap-3 xl:gap-4 2xl:gap-7 shrink">
              {desktopNavLinks.map((link) => (
                <li 
                  key={link.name} 
                  className="relative group"
                  onMouseEnter={() => link.isServices && setServicesDropdownOpen(true)}
                  onMouseLeave={() => link.isServices && setServicesDropdownOpen(false)}
                >
                  <Link 
                    to={link.href} 
                    className={cn(
                      "text-xs 2xl:text-sm font-medium transition-colors hover:text-accent relative py-2 flex items-center gap-1 whitespace-nowrap",
                      isActive(link.href) ? "text-accent" : "text-neutral-300 hover:text-white"
                    )}
                  >
                    <span>{link.name}</span>
                    {link.isServices && <ChevronDown size={12} className={cn("transition-transform duration-200", servicesDropdownOpen && "rotate-180 text-accent")} />}
                    {isActive(link.href) && (
                      <motion.div 
                        layoutId="activeNav"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>

                  {/* Desktop Services Mega Menu Dropdown */}
                  {link.isServices && servicesDropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[680px] z-50">
                      <div className="bg-[#0A0A0A] border border-white/15 rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl">
                        <div className="grid grid-cols-3 gap-6 text-left">
                          {/* Column 1 */}
                          <div>
                            <Link to="/services/nucleic-acid" className="text-xs font-bold text-accent uppercase tracking-wider block mb-3 hover:underline">
                              Nucleic Acid Services
                            </Link>
                            <ul className="space-y-2 text-xs">
                              <li><Link to="/services/nucleic-acid/dna" className="text-neutral-300 hover:text-accent transition-colors block py-0.5">DNA Services</Link></li>
                              <li><Link to="/services/nucleic-acid/rna" className="text-neutral-300 hover:text-accent transition-colors block py-0.5">RNA Services</Link></li>
                              <li><Link to="/services/nucleic-acid/mirna" className="text-neutral-300 hover:text-accent transition-colors block py-0.5">miRNA Services</Link></li>
                            </ul>
                          </div>

                          {/* Column 2 */}
                          <div>
                            <Link to="/services/protein-peptide" className="text-xs font-bold text-accent uppercase tracking-wider block mb-3 hover:underline">
                              Protein & Peptide
                            </Link>
                            <ul className="space-y-2 text-xs">
                              <li><Link to="/services/protein-peptide/sequencing" className="text-neutral-300 hover:text-accent transition-colors block py-0.5">Protein Sequencing</Link></li>
                              <li><Link to="/services/protein-peptide/synthesis" className="text-neutral-300 hover:text-accent transition-colors block py-0.5">Peptide Synthesis</Link></li>
                              <li><Link to="/services/protein-peptide/modification" className="text-neutral-300 hover:text-accent transition-colors block py-0.5">Peptide Modification</Link></li>
                            </ul>
                          </div>

                          {/* Column 3 */}
                          <div>
                            <Link to="/services/computational" className="text-xs font-bold text-accent uppercase tracking-wider block mb-3 hover:underline">
                              Computational Biology
                            </Link>
                            <ul className="space-y-2 text-xs">
                              <li><Link to="/services/computational/in-silico" className="text-neutral-300 hover:text-accent transition-colors block py-0.5">In-Silico Research</Link></li>
                              <li><Link to="/services/computational/bioinformatics" className="text-neutral-300 hover:text-accent transition-colors block py-0.5">Bioinformatics</Link></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* RIGHT: Search & CTAs */}
          <div className="hidden xl:flex items-center shrink-0 gap-2.5 xl:gap-3 2xl:gap-5">
            <Link to="/search" className="text-neutral-300 hover:text-accent transition-colors flex items-center justify-center p-1.5 2xl:p-2" aria-label="Search">
              <Search className="w-4 h-4 2xl:w-5 2xl:h-5" />
            </Link>
            
            <div className="flex items-center gap-2 2xl:gap-[11px]">
              <Link 
                to={getCtaPath('REQUEST_QUOTE')} 
                className="h-10 2xl:h-[46px] border border-accent/45 hover:border-accent hover:bg-accent text-white px-3 2xl:px-5 rounded-[10px] text-[11px] 2xl:text-xs font-bold tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 2xl:gap-2 group cursor-pointer shrink-0 whitespace-nowrap"
              >
                <span>REQUEST A QUOTE</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              {user ? (
                <Link 
                  to="/account" 
                  className="h-10 2xl:h-[46px] bg-accent hover:bg-accent-bright text-white px-3 2xl:px-5 rounded-[10px] text-[11px] 2xl:text-xs font-bold tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 2xl:gap-2 shadow-sm hover:shadow-accent/25 hover:shadow-lg group cursor-pointer shrink-0 whitespace-nowrap"
                >
                  <User className="w-3.5 h-3.5" />
                  <span>ACCOUNT</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
                </Link>
              ) : (
                <Link 
                  to="/login" 
                  className="h-10 2xl:h-[46px] bg-accent hover:bg-accent-bright text-white px-3 2xl:px-5 rounded-[10px] text-[11px] 2xl:text-xs font-bold tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 2xl:gap-2 shadow-sm hover:shadow-accent/25 hover:shadow-lg group cursor-pointer shrink-0 whitespace-nowrap"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>LOGIN / SIGNUP</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Right Section */}
          <div className="flex xl:hidden items-center gap-4 z-50 shrink-0">
            <Link 
              to={user ? "/account" : "/login"} 
              className={cn(
                "p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:text-accent hover:border-accent/40 transition-colors flex items-center justify-center",
                (location.pathname.startsWith('/account') || location.pathname.startsWith('/login')) && "text-accent border-accent/40"
              )}
              aria-label={user ? "Account" : "Login"}
            >
              {user ? <User size={20} /> : <LogIn size={20} />}
            </Link>

            <button 
              className="p-2 text-white hover:text-accent transition-colors flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu with Services Expandable Accordion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#050505] pt-24 px-6 sm:px-10 pb-6 overflow-y-auto xl:hidden flex flex-col"
          >
            <nav className="flex flex-col h-full justify-between">
              <ul className="flex flex-col gap-4 mt-6">
                <li>
                  <Link to="/" className="text-xl font-medium tracking-tight text-neutral-300 hover:text-accent py-1 block">Home</Link>
                </li>

                {/* Mobile Services Accordion */}
                <li>
                  <div className="flex items-center justify-between py-1">
                    <Link to="/services" className="text-xl font-medium tracking-tight text-neutral-300 hover:text-accent">Services</Link>
                    <button 
                      onClick={() => setMobileServicesAccordion(!mobileServicesAccordion)}
                      className="p-2 text-neutral-400 hover:text-accent"
                    >
                      <ChevronDown size={18} className={cn("transition-transform duration-200", mobileServicesAccordion && "rotate-180 text-accent")} />
                    </button>
                  </div>

                  {mobileServicesAccordion && (
                    <div className="pl-4 py-2 border-l border-white/10 space-y-3 mt-1 text-sm">
                      <div>
                        <Link to="/services/nucleic-acid" className="font-bold text-accent block mb-1">Nucleic Acid Services</Link>
                        <div className="pl-3 space-y-1 text-neutral-400 text-xs">
                          <Link to="/services/nucleic-acid/dna" className="block hover:text-white py-0.5">DNA Services</Link>
                          <Link to="/services/nucleic-acid/rna" className="block hover:text-white py-0.5">RNA Services</Link>
                          <Link to="/services/nucleic-acid/mirna" className="block hover:text-white py-0.5">miRNA Services</Link>
                        </div>
                      </div>

                      <div>
                        <Link to="/services/protein-peptide" className="font-bold text-accent block mb-1">Protein & Peptide</Link>
                        <div className="pl-3 space-y-1 text-neutral-400 text-xs">
                          <Link to="/services/protein-peptide/sequencing" className="block hover:text-white py-0.5">Protein Sequencing</Link>
                          <Link to="/services/protein-peptide/synthesis" className="block hover:text-white py-0.5">Peptide Synthesis</Link>
                          <Link to="/services/protein-peptide/modification" className="block hover:text-white py-0.5">Peptide Modification</Link>
                        </div>
                      </div>

                      <div>
                        <Link to="/services/computational" className="font-bold text-accent block mb-1">Computational Biology</Link>
                        <div className="pl-3 space-y-1 text-neutral-400 text-xs">
                          <Link to="/services/computational/in-silico" className="block hover:text-white py-0.5">In-Silico Research</Link>
                          <Link to="/services/computational/bioinformatics" className="block hover:text-white py-0.5">Bioinformatics</Link>
                        </div>
                      </div>
                    </div>
                  )}
                </li>

                <li><Link to="/reagents" className="text-xl font-medium tracking-tight text-neutral-300 hover:text-accent py-1 block">Reagents</Link></li>
                <li><Link to="/research" className="text-xl font-medium tracking-tight text-neutral-300 hover:text-accent py-1 block">Research</Link></li>
                <li><Link to="/internships" className="text-xl font-medium tracking-tight text-neutral-300 hover:text-accent py-1 block">Internships</Link></li>
                <li><Link to="/workshops" className="text-xl font-medium tracking-tight text-neutral-300 hover:text-accent py-1 block">Workshops</Link></li>
                <li><Link to="/about-us" className="text-xl font-medium tracking-tight text-neutral-300 hover:text-accent py-1 block">About Us</Link></li>
                <li><Link to="/contact" className="text-xl font-medium tracking-tight text-neutral-300 hover:text-accent py-1 block">Contact</Link></li>
              </ul>

              <div className="mt-8 pt-6 border-t border-white/5 flex flex-col gap-4">
                {/* Search link */}
                <Link 
                  to="/search" 
                  className="flex items-center gap-3 text-neutral-300 hover:text-white py-2 text-sm"
                >
                  <Search size={18} />
                  <span>Search Content</span>
                </Link>

                {/* ACCOUNT or LOGIN button at the bottom */}
                {user ? (
                  <Link 
                    to="/account" 
                    className="bg-accent hover:bg-accent-bright text-white py-4 px-6 rounded-[12px] font-bold tracking-wider text-center flex items-center justify-center gap-2 transition-all duration-200 shadow-md group mt-2"
                  >
                    <User size={18} />
                    <span>ACCOUNT PORTAL</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-200" />
                  </Link>
                ) : (
                  <Link 
                    to="/login" 
                    className="bg-accent hover:bg-accent-bright text-white py-4 px-6 rounded-[12px] font-bold tracking-wider text-center flex items-center justify-center gap-2 transition-all duration-200 shadow-md group mt-2"
                  >
                    <LogIn size={18} />
                    <span>LOGIN / SIGNUP</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-200" />
                  </Link>
                )}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
