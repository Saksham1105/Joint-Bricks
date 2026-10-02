import React from 'react';
import { Building2, UserCheck } from 'lucide-react';
import { TrustBlock } from '../components/common/TrustBlock';
import { SEO } from '../components/common/SEO';

const ABOUT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Joint Bricks — Joint Bricks Propshare Private Limited",
  "description": "Joint Bricks Propshare Private Limited (CIN: U68100RJ2025PTC109627) is incorporated to facilitate collective participation in pre-leased commercial retail real estate through property-specific SPVs. Incorporated 15 December 2025.",
  "url": "https://jointbricks.com/about",
  "mainEntity": {
    "@type": "Organization",
    "name": "Joint Bricks Propshare Private Limited",
    "alternateName": "Joint Bricks",
    "identifier": "U68100RJ2025PTC109627",
    "foundingDate": "2025-12-15",
    "legalName": "Joint Bricks Propshare Private Limited",
    "description": "Commercial real-estate investment business enabling participation in pre-leased commercial retail properties through property-specific SPV shareholding.",
    "areaServed": ["Mumbai", "Delhi NCR", "Pune"]
  }
};

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <SEO
        title="About Joint Bricks — Joint Bricks Propshare Private Limited | CIN: U68100RJ2025PTC109627"
        description="About Joint Bricks Propshare Private Limited (CIN: U68100RJ2025PTC109627, inc. Dec 2025). Commercial real estate participation via property-specific SPV shares."
        canonicalUrl="https://jointbricks.com/about"
        schema={ABOUT_SCHEMA}
      />
      
      {/* Page Header */}
      <div className="bg-[#0B0B0A] text-[#FAF8F5] border border-[#23221E] rounded-xs p-8 sm:p-16 text-center max-w-4xl mx-auto space-y-4 relative corner-crosshair">
        <span className="text-[10px] font-mono font-medium text-[#BFA272] uppercase tracking-[0.25em] bg-[#BFA272]/15 px-3 py-1 rounded-xs border border-[#BFA272]/30 inline-block">
          CORPORATE PHILOSOPHY & PURPOSE
        </span>
        <h1 className="font-serif-display text-4xl sm:text-6xl font-light tracking-tight text-[#FAF8F5]">
          Grounded in Real Estate. Structured for Participation.
        </h1>
        <p className="text-xs sm:text-sm text-[#BCB8AD] max-w-2xl mx-auto leading-relaxed">
          Joint Bricks Propshare Private Limited was incorporated to bridge the divide between institutional commercial real-estate assets and individual capital through legal ring-fencing, conservative diligence, and corporate governance.
        </p>
      </div>

      {/* Brand Meaning & Corporate Identity */}
      <div className="bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative corner-crosshair">
        
        <div className="lg:col-span-7 space-y-4">
          <span className="text-[10px] font-mono font-medium text-[#967A46] uppercase tracking-[0.2em] bg-[#BFA272]/15 px-2.5 py-0.5 rounded-xs border border-[#BFA272]/30">
            Brand Ethos
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-light text-[#0F0F0E]">
            The Meaning of 'Joint' & 'Bricks'
          </h2>
          <div className="space-y-3 text-xs sm:text-sm text-[#47453F] leading-relaxed">
            <p>
              <strong>'Joint'</strong> captures the concept of collective investor participation around a shared property asset, enabling individuals to access commercial real estate opportunities with a ₹10 lakh minimum entry point rather than having to buy and manage an entire property independently.
            </p>
            <p>
              <strong>'Bricks'</strong> represents real estate and physical property assets. A "Brick" is a brand metaphor for participation through SPV shares. It is not a legally defined portion of a property, not registered physical title, and not a specific physical unit.
            </p>
            <p className="font-mono text-xs text-[#0F0F0E] pt-3 border-t border-[#DDD5C5]">
              The metaphor never overrides the legal structure: investors hold shares in the property-specific SPV that owns the underlying property.
            </p>
          </div>
        </div>

        {/* Corporate Fact Dossier */}
        <div className="lg:col-span-5 bg-[#0B0B0A] text-[#FAF8F5] p-6 sm:p-8 rounded-xs border border-[#23221E] space-y-4 text-xs font-mono relative corner-crosshair">
          <div className="flex items-center gap-2 text-[#BFA272] font-semibold text-sm">
            <Building2 className="w-5 h-5" />
            <span className="uppercase tracking-wider">Statutory Registry Facts</span>
          </div>

          <div className="space-y-2.5 text-[#BCB8AD] pt-2">
            <div className="flex justify-between border-b border-[#23221E] pb-2">
              <span className="text-[#827E74]">Legal Entity:</span>
              <span className="text-[#FAF8F5] text-right font-medium">Joint Bricks Propshare Pvt Ltd</span>
            </div>
            <div className="flex justify-between border-b border-[#23221E] pb-2">
              <span className="text-[#827E74]">Brand Name:</span>
              <span className="text-[#FAF8F5]">Joint Bricks</span>
            </div>
            <div className="flex justify-between border-b border-[#23221E] pb-2">
              <span className="text-[#827E74]">Entity Form:</span>
              <span className="text-[#FAF8F5]">Private Limited Company</span>
            </div>
            <div className="flex justify-between border-b border-[#23221E] pb-2">
              <span className="text-[#827E74]">CIN:</span>
              <span className="text-[#FAF8F5] text-right font-mono-nums">U68100RJ2025PTC109627</span>
            </div>
            <div className="flex justify-between border-b border-[#23221E] pb-2">
              <span className="text-[#827E74]">Incorporation:</span>
              <span className="text-[#FAF8F5]">15 December 2025</span>
            </div>
            <div className="flex justify-between border-b border-[#23221E] pb-2">
              <span className="text-[#827E74]">Current Stage:</span>
              <span className="text-[#FAF8F5]">Newly Incorporated / Pre-launch</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#827E74]">Target Metros:</span>
              <span className="text-[#FAF8F5]">Mumbai, Delhi NCR, Pune</span>
            </div>
          </div>
        </div>

      </div>

      {/* Philosophy & Approach */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#FAF8F5] border border-[#DDD5C5] p-8 rounded-xs space-y-3 relative corner-crosshair">
          <span className="text-[10px] font-mono font-medium text-[#BFA272] uppercase tracking-wider block">
            Approach 01
          </span>
          <h3 className="font-serif-display text-2xl font-medium text-[#0F0F0E]">
            SPV Ring-Fencing & Capital Protection
          </h3>
          <p className="text-xs sm:text-sm text-[#47453F] leading-relaxed">
            Joint Bricks oversees sourcing and due diligence, then incorporates a dedicated Private Limited SPV for each specific asset. Investor capital is held segregated prior to property acquisition. Title is registered cleanly to the SPV, and investors hold direct, registered equity shares.
          </p>
        </div>

        <div className="bg-[#FAF8F5] border border-[#DDD5C5] p-8 rounded-xs space-y-3 relative corner-crosshair">
          <span className="text-[10px] font-mono font-medium text-[#BFA272] uppercase tracking-wider block">
            Approach 02
          </span>
          <h3 className="font-serif-display text-2xl font-medium text-[#0F0F0E]">
            Pre-Leased Commercial Retail Specialization
          </h3>
          <p className="text-xs sm:text-sm text-[#47453F] leading-relaxed">
            Rather than generic residential apartments or massive speculative office parks, we specialize in high-street commercial retail shops with operating corporate tenants and contractually escalating leases. Candidate assets must clear our 5% acquisition rental yield hurdle benchmark.
          </p>
        </div>
      </div>

      {/* Target Investor Audience */}
      <div className="bg-[#F4F0E6] border border-[#DDD5C5] rounded-xs p-6 sm:p-8 text-xs text-[#47453F] leading-relaxed max-w-4xl mx-auto space-y-2">
        <span className="font-semibold text-[#0F0F0E] block uppercase tracking-wider text-[11px] font-mono">
          Intended Investor Segments:
        </span>
        <p>
          Our platform is tailored for salaried professionals, business owners, HNIs, NRIs, and experienced real-estate participants seeking structured commercial property exposure without the capital requirement or operational burden of direct single-buyer ownership. <em>(Note: Target investor segments do not constitute formal statutory eligibility rules. Formal investor onboarding is governed by applicable SPV and regulatory documentation.)</em>
        </p>
      </div>

      {/* Trust Block Component */}
      <TrustBlock />

      {/* Governance & Leadership Section (Strictly No Fake Biographies) */}
      <div className="bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs p-8 space-y-6 relative corner-crosshair">
        <div className="border-b border-[#DDD5C5] pb-4">
          <span className="text-[10px] font-mono font-medium text-[#967A46] uppercase tracking-[0.2em] bg-[#BFA272]/15 px-2.5 py-0.5 rounded-xs border border-[#BFA272]/30">
            Corporate Governance
          </span>
          <h2 className="font-serif-display text-2xl sm:text-3xl font-light text-[#0F0F0E] mt-2">
            Board & Operational Governance
          </h2>
          <p className="text-xs text-[#827E74] font-mono mt-1">
            Formal board and executive leadership biographies will be published upon conclusion of pre-launch statutory filings.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { role: "Board of Directors & Management", tag: "TO BE FORMALLY DISCLOSED" },
            { role: "Commercial Real Estate Acquisitions", tag: "TO BE FORMALLY DISCLOSED" },
            { role: "Legal & Corporate Compliance", tag: "TO BE FORMALLY DISCLOSED" }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#F4F0E6] border border-[#DDD5C5] p-6 sm:p-7 rounded-xs text-center space-y-3">
              <div className="w-14 h-14 rounded-xs bg-[#FAF8F5] border border-[#DDD5C5] flex items-center justify-center mx-auto text-[#827E74]">
                <UserCheck className="w-6 h-6 text-[#BFA272]" />
              </div>
              <div>
                <h4 className="font-serif-display text-lg font-medium text-[#0F0F0E]">{item.role}</h4>
                <span className="bg-[#0B0B0A] text-[#FAF8F5] text-[9px] font-mono px-2 py-0.5 rounded-xs uppercase mt-2 inline-block">
                  [{item.tag}]
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
