import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, ArrowRight } from 'lucide-react';
import { EoiDrawer } from '../common/EoiDrawer';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEoiOpen, setIsEoiOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { label: 'Opportunities', path: '/opportunities', badge: 'Pipeline' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Why Joint Bricks', path: '/why-joint-bricks' },
    { label: 'Research', path: '/research' },
    { label: 'About', path: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="sticky top-0 z-50 transition-all duration-300">
        {/* Top Architectural Telemetry & Compliance Bar */}
        <div className="bg-[#0B0B0A] text-[#FAF8F5] border-b border-[#23221E] py-2 px-4 sm:px-8 text-[11px] font-mono tracking-wide">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 truncate">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BFA272]" />
              <span className="text-[#827E74] truncate">
                Joint Bricks Propshare Private Limited <span className="text-[#BCB8AD]">(CIN: U68100RJ2025PTC109627)</span> · Not an SM-REIT · Not SEBI-Registered
              </span>
            </div>
            <Link
              to="/legal"
              className="text-[#BFA272] hover:text-[#D4BA8C] transition-colors inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider flex-shrink-0"
            >
              <span>Regulatory Disclosures</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Main Monograph Navigation Bar */}
        <div
          className={`transition-all duration-300 border-b ${
            isScrolled
              ? 'bg-[#FAF8F5]/96 backdrop-blur-md border-[#DDD5C5] shadow-xs py-3.5'
              : 'bg-[#FAF8F5]/90 backdrop-blur-sm border-[#E8E2D4] py-4'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            
            {/* Brand Monogram & Architectural Identity */}
            <Link to="/" className="flex items-center gap-3.5 group">
              <div className="w-10 h-10 rounded-xs bg-[#0B0B0A] text-[#FAF8F5] border border-[#23221E] group-hover:border-[#BFA272] flex items-center justify-center transition-colors">
                <span className="font-serif-display font-semibold text-lg tracking-widest text-[#BFA272]">
                  JB
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif-display text-xl font-bold tracking-[0.14em] text-[#0F0F0E] group-hover:text-[#BFA272] transition-colors leading-none">
                  JOINT BRICKS
                </span>
                <span className="text-[9px] text-[#827E74] font-mono tracking-[0.22em] uppercase mt-1 leading-none">
                  Commercial Real Estate
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-xs tracking-[0.12em] uppercase font-medium transition-all relative py-1.5 flex items-center gap-1.5 ${
                      active
                        ? 'text-[#0F0F0E] font-semibold'
                        : 'text-[#47453F] hover:text-[#0F0F0E]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded-xs bg-[#BFA272]/12 text-[#967A46] border border-[#BFA272]/30">
                        {link.badge}
                      </span>
                    )}
                    {active && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#BFA272]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Primary Action CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                type="button"
                onClick={() => setIsEoiOpen(true)}
                className="px-6 py-2.5 bg-[#0B0B0A] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.16em] rounded-xs hover:bg-[#BFA272] hover:text-[#0B0B0A] transition-all duration-300 border border-[#0B0B0A] shadow-xs cursor-pointer inline-flex items-center gap-2 group"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xs text-[#0F0F0E] hover:bg-[#EFECE4] transition-colors"
              aria-label="Toggle navigation"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Full-Screen Cinematic Overlay Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              key="mobile-nav-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden fixed inset-0 z-[100] bg-[#0B0B0A] text-[#FAF8F5] flex flex-col justify-between p-6 sm:p-8 overflow-y-auto"
            >
              {/* Overlay Top Bar */}
              <div className="flex items-center justify-between pb-6 border-b border-[#23221E]">
                <div className="flex flex-col">
                  <span className="font-serif-display font-medium tracking-[0.24em] text-sm text-[#FAF8F5]">
                    JOINT BRICKS
                  </span>
                  <span className="text-[9px] font-mono uppercase tracking-[0.24em] text-[#827E74]">
                    PROPSHARE PRIVATE LIMITED
                  </span>
                </div>
                <button
                  type="button"
                  onClick={closeMobileMenu}
                  className="p-2 -mr-2 text-[#827E74] hover:text-[#FAF8F5] transition-colors rounded-xs"
                  aria-label="Close navigation"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Cadastral Telemetry */}
              <div className="py-4 border-b border-[#23221E] flex items-center justify-between text-[10px] font-mono text-[#827E74]">
                <span className="tracking-[0.2em] uppercase text-[#BFA272]">PRE-LAUNCH ALLOCATION</span>
                <span className="tracking-wider">CIN: U68100RJ2025PTC109627</span>
              </div>

              {/* Navigation Index */}
              <div className="flex flex-col py-6 space-y-4 my-auto">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 + 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={closeMobileMenu}
                      className="flex items-center justify-between py-2 text-xl sm:text-2xl font-serif-display tracking-wide text-[#FAF8F5] hover:text-[#BFA272] transition-colors group"
                    >
                      <span className="flex items-baseline gap-3">
                        <span className="text-xs font-mono text-[#827E74] tracking-widest">
                          0{idx + 1}
                        </span>
                        <span>{link.label}</span>
                      </span>
                      {link.badge ? (
                        <span className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-xs bg-[#BFA272]/20 text-[#D4BA8C] border border-[#BFA272]/40">
                          {link.badge}
                        </span>
                      ) : (
                        <ArrowRight className="w-4 h-4 text-[#827E74] group-hover:translate-x-1 group-hover:text-[#BFA272] transition-all" />
                      )}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.04 + 0.05 }}
                >
                  <Link
                    to="/faq"
                    onClick={closeMobileMenu}
                    className="flex items-center justify-between py-2 text-xl sm:text-2xl font-serif-display tracking-wide text-[#FAF8F5] hover:text-[#BFA272] transition-colors group"
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="text-xs font-mono text-[#827E74] tracking-widest">
                        0{navLinks.length + 1}
                      </span>
                      <span>FAQs</span>
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#827E74] group-hover:translate-x-1 group-hover:text-[#BFA272] transition-all" />
                  </Link>
                </motion.div>

                <div className="pt-4 border-t border-[#23221E]">
                  <Link
                    to="/legal"
                    onClick={closeMobileMenu}
                    className="flex items-center justify-between py-2 text-xs font-mono uppercase tracking-widest text-[#827E74] hover:text-[#FAF8F5] transition-colors"
                  >
                    <span>Statutory & Regulatory Disclosures</span>
                    <ArrowUpRight className="w-4 h-4 text-[#BFA272]" />
                  </Link>
                </div>
              </div>

              {/* Bottom Action Drawer */}
              <div className="pt-6 border-t border-[#23221E] space-y-3">
                <button
                  type="button"
                  onClick={() => {
                    closeMobileMenu();
                    setIsEoiOpen(true);
                  }}
                  className="w-full py-4 bg-[#BFA272] text-[#0B0B0A] text-xs font-semibold uppercase tracking-[0.18em] rounded-xs text-center hover:bg-[#D4BA8C] transition-all cursor-pointer shadow-lg"
                >
                  Enquire Now — Private Allocation
                </button>
                <div className="flex items-center justify-between text-[9px] font-mono text-[#827E74]">
                  <span>Not an SM-REIT</span>
                  <span>Direct SPV Equity Holding</span>
                  <span>Min ₹10L</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Global EOI Drawer */}
      <EoiDrawer
        isOpen={isEoiOpen}
        onClose={() => setIsEoiOpen(false)}
        propertyName="Joint Bricks Capital — General Allocation Enquiry"
      />
    </>
  );
};
