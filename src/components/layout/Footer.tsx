import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, ShieldCheck, MapPin, Mail, Phone, ArrowUpRight, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0B0A] text-[#FAF8F5] border-t border-[#23221E] pt-20 pb-14 font-sans relative overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Editorial Closing Banner */}
        <div className="border-b border-[#23221E] pb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[10px] font-mono font-medium text-[#BFA272] uppercase tracking-[0.25em] block">
              Architectural Monograph & Institutional Capital
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#FAF8F5] leading-tight">
              Commercial Real Estate. <br />
              <span className="italic font-normal text-[#D4BA8C]">Structured Differently.</span>
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              onClick={scrollToTop}
              className="px-7 py-3.5 bg-[#BFA272] text-[#0B0B0A] text-xs font-semibold uppercase tracking-[0.16em] rounded-xs hover:bg-[#D4BA8C] transition-all duration-300 inline-flex items-center gap-2 group cursor-pointer"
            >
              <span>Request Private Allocation</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Multi-Column Corporate & Structural Index */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Col 1 & 2: Entity & Brand Manifesto */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" onClick={scrollToTop} className="flex items-center gap-3.5 group">
              <div className="w-10 h-10 rounded-xs bg-[#141412] border border-[#23221E] group-hover:border-[#BFA272] flex items-center justify-center transition-colors">
                <span className="font-serif-display font-semibold text-lg tracking-widest text-[#BFA272]">
                  JB
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif-display text-2xl font-bold tracking-[0.14em] text-[#FAF8F5] leading-none">
                  JOINT BRICKS
                </span>
                <span className="text-[9px] text-[#827E74] font-mono tracking-[0.22em] uppercase mt-1 leading-none">
                  Propshare Private Limited
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#BCB8AD] leading-relaxed max-w-sm">
              An institutional-grade commercial real estate participation platform. We structure direct equity participation in pre-leased commercial retail assets via dedicated property-specific Special Purpose Vehicles (SPVs).
            </p>

            <div className="p-4 bg-[#141412] border border-[#23221E] rounded-xs text-xs space-y-2 font-mono text-[#827E74]">
              <div className="flex justify-between border-b border-[#23221E] pb-1.5">
                <span>Corporate CIN:</span>
                <span className="text-[#FAF8F5] font-mono-nums">U68100RJ2025PTC109627</span>
              </div>
              <div className="flex justify-between border-b border-[#23221E] pb-1.5">
                <span>Incorporation:</span>
                <span className="text-[#FAF8F5]">15 December 2025</span>
              </div>
              <div className="flex justify-between">
                <span>Jurisdiction:</span>
                <span className="text-[#FAF8F5]">Companies Act 2013 · India</span>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation Directory */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-mono font-semibold text-[#BFA272] uppercase tracking-[0.2em]">
              Directory Index
            </h4>
            <ul className="space-y-3 text-xs text-[#BCB8AD]">
              <li>
                <Link to="/" onClick={scrollToTop} className="hover:text-[#FAF8F5] transition-colors block py-0.5">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/opportunities" onClick={scrollToTop} className="hover:text-[#FAF8F5] transition-colors flex items-center justify-between py-0.5">
                  <span>Opportunities</span>
                  <span className="text-[9px] font-mono text-[#BFA272] bg-[#BFA272]/15 px-1.5 py-0.5 rounded-xs border border-[#BFA272]/30">Pipeline</span>
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" onClick={scrollToTop} className="hover:text-[#FAF8F5] transition-colors block py-0.5">
                  How It Works (9 Steps)
                </Link>
              </li>
              <li>
                <Link to="/why-joint-bricks" onClick={scrollToTop} className="hover:text-[#FAF8F5] transition-colors block py-0.5">
                  Why Joint Bricks
                </Link>
              </li>
              <li>
                <Link to="/research" onClick={scrollToTop} className="hover:text-[#FAF8F5] transition-colors block py-0.5">
                  Research & Intelligence
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop} className="hover:text-[#FAF8F5] transition-colors block py-0.5">
                  About the Entity
                </Link>
              </li>
              <li>
                <Link to="/faq" onClick={scrollToTop} className="hover:text-[#FAF8F5] transition-colors block py-0.5">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop} className="hover:text-[#FAF8F5] transition-colors block py-0.5">
                  Contact / Allocation Desk
                </Link>
              </li>
              <li>
                <Link to="/legal" onClick={scrollToTop} className="hover:text-[#FAF8F5] transition-colors block py-0.5">
                  Legal & Disclosures
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Structural Guardrails */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-mono font-semibold text-[#BFA272] uppercase tracking-[0.2em]">
              Structural Rules
            </h4>
            <ul className="space-y-2.5 text-xs text-[#827E74]">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BFA272] mt-1.5 flex-shrink-0" />
                <span>Property-Specific SPV Shareholding Model</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BFA272] mt-1.5 flex-shrink-0" />
                <span>5% Target Acquisition Yield Screening Benchmark</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BFA272] mt-1.5 flex-shrink-0" />
                <span>Pre-Leased Commercial Retail Specialization</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BFA272] mt-1.5 flex-shrink-0" />
                <span>₹10 Lakh Policy Ticket Minimum</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BFA272] mt-1.5 flex-shrink-0" />
                <span>1-Year Minimum Holding (No Early Exit)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BFA272] mt-1.5 flex-shrink-0" />
                <span>Target Focus: Mumbai, Delhi NCR, Pune</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Communication Desk */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-mono font-semibold text-[#BFA272] uppercase tracking-[0.2em]">
              Allocation Desk
            </h4>
            <div className="p-4 bg-[#141412] border border-[#23221E] rounded-xs text-xs text-[#BCB8AD] space-y-3 font-mono">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#BFA272] mt-0.5 flex-shrink-0" />
                <span className="text-[11px] leading-relaxed">Offices: Mumbai · Delhi NCR · Pune [Pending Official Address Release]</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#BFA272] flex-shrink-0" />
                <span className="text-[11px]">inquiries@jointbricks.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#BFA272] flex-shrink-0" />
                <span className="text-[11px]">Desk: [PROVISIONING PENDING]</span>
              </div>
              <div className="pt-2 border-t border-[#23221E] text-[10px] text-[#827E74]">
                Pre-launch inquiries are routed through our private EOI consultation workflow.
              </div>
            </div>
          </div>

        </div>

        {/* Locked Institutional Regulatory Disclosures */}
        <div className="bg-[#141412] border border-[#23221E] rounded-xs p-6 sm:p-8 space-y-4 relative corner-crosshair">
          <div className="flex items-center gap-2.5 text-[#BFA272]">
            <Scale className="w-4 h-4" />
            <span className="text-xs font-mono font-bold tracking-[0.16em] uppercase">
              Mandatory Statutory & Regulatory Disclosures
            </span>
          </div>
          <div className="text-xs text-[#BCB8AD] font-mono leading-relaxed space-y-3 border-t border-[#23221E] pt-4">
            <p className="text-[#FAF8F5]">
              "Joint Bricks is not an SM-REIT. Certain aspects of its business model may be similar to or related to functions within an SM-REIT framework, but these similarities do not constitute SM-REIT registration or SEBI-regulated status. Joint Bricks is not currently operating as a SEBI-registered SM-REIT and does not currently have SM-REIT registration or approval from SEBI."
            </p>
            <p className="text-[#827E74]">
              Non-Guaranteed Return Rule: The 5% p.a. figure is an acquisition-stage screening benchmark and is not a guaranteed investor return, rental income, yield, or profit. Investors hold shares in a property-specific SPV (Private Limited Company) that owns the underlying property. Investors do not hold direct physical property title.
            </p>
            <p className="text-[#827E74]">
              Holding Period: Minimum 1 year. No early exit before 1 year. Secondary share transfers after 1 year are subject to applicable SPV documentation, governance procedures, and board approval.
            </p>
          </div>
        </div>

        {/* Bottom Hairline & Legal Bar with Developed by MAZRIK Credit */}
        <div className="pt-8 border-t border-[#23221E] flex flex-col md:flex-row items-center justify-between text-[11px] text-[#827E74] gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#BFA272]" />
              <span>© {new Date().getFullYear()} Joint Bricks Propshare Private Limited. All rights reserved.</span>
            </div>
            <span className="hidden sm:inline text-[#23221E]">|</span>
            <div className="text-[11px] text-[#827E74]">
              Developed by{' '}
              <a
                href="https://mazrik.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#BFA272] hover:text-[#D4BA8C] transition-colors underline-offset-2 hover:underline font-medium"
              >
                MAZRIK
              </a>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/legal" onClick={scrollToTop} className="hover:text-[#FAF8F5] transition-colors inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider">
              <span>Legal Disclosures</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
            <Link to="/faq" onClick={scrollToTop} className="hover:text-[#FAF8F5] transition-colors font-mono text-[10px] uppercase tracking-wider">
              FAQ
            </Link>
            <Link to="/contact" onClick={scrollToTop} className="hover:text-[#FAF8F5] transition-colors font-mono text-[10px] uppercase tracking-wider">
              Enquiry Desk
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
