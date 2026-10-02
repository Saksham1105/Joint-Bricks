import React from 'react';
import { Scale, ShieldCheck, Clock, Layers, FileText, AlertTriangle } from 'lucide-react';
import { SEO } from '../components/common/SEO';

export const LegalPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <SEO
        title="Legal Disclosures & Statutory Status | Joint Bricks — Not an SM-REIT"
        description="Legal disclosures for Joint Bricks Propshare Private Limited (CIN: U68100RJ2025PTC109627): non-SM-REIT status, non-guaranteed yield rules, and SPV share ownership."
        canonicalUrl="https://jointbricks.com/legal"
      />
      
      {/* Page Header */}
      <div className="bg-[#0B0B0A] text-[#FAF8F5] border border-[#23221E] rounded-xs p-8 sm:p-14 text-center space-y-4 relative corner-crosshair">
        <span className="text-[10px] font-mono font-medium text-[#BFA272] uppercase tracking-[0.25em] bg-[#BFA272]/15 px-3 py-1 rounded-xs border border-[#BFA272]/30 inline-block">
          REGULATORY COMPLIANCE & STATUTORY GUARDRAILS
        </span>
        <h1 className="font-serif-display text-4xl sm:text-5xl font-light tracking-tight text-[#FAF8F5]">
          Legal Disclosures & Statutory Status
        </h1>
        <p className="text-xs sm:text-sm text-[#BCB8AD] max-w-xl mx-auto leading-relaxed font-mono">
          Joint Bricks Propshare Private Limited (CIN: U68100RJ2025PTC109627)
        </p>
      </div>

      {/* CONFIRMED MANDATORY REGULATORY DISCLOSURE BOX */}
      <div className="bg-[#141412] border-2 border-[#BFA272] rounded-xs p-6 sm:p-8 space-y-4 shadow-xl relative corner-crosshair">
        <div className="flex items-center gap-2.5 text-[#BFA272] font-mono font-semibold text-xs uppercase tracking-wider">
          <Scale className="w-5 h-5 text-[#BFA272]" />
          <span>Mandatory SEBI Regulatory Status Disclosure</span>
        </div>

        <div className="bg-[#0B0B0A] border border-[#23221E] p-5 rounded-xs font-mono text-xs sm:text-sm text-[#FAF8F5] leading-relaxed">
          "Joint Bricks is not an SM-REIT. Certain aspects of its business model may be similar to or related to functions within an SM-REIT framework, but these similarities do not constitute SM-REIT registration or SEBI-regulated status."
        </div>

        <div className="text-xs text-[#BCB8AD] leading-relaxed space-y-2 font-mono">
          <p>
            This disclosure is binding across all platform materials and communications. Joint Bricks is not currently operating as a SEBI-registered SM-REIT and does not currently have SM-REIT registration or approval from SEBI.
          </p>
          <p className="text-[11px] text-[#827E74]">
            Final public regulatory wording remains subject to continuous review by qualified corporate legal counsel.
          </p>
        </div>
      </div>

      {/* 1. Corporate Identity & SPV Ownership Model */}
      <div className="bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs p-6 sm:p-8 space-y-3 text-xs sm:text-sm text-[#0F0F0E] leading-relaxed relative corner-crosshair">
        <h2 className="font-serif-display text-2xl font-medium text-[#0F0F0E] flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-[#BFA272]" />
          <span>1. Corporate Identity & SPV Ownership Architecture</span>
        </h2>
        <p className="text-[#47453F]">
          Joint Bricks Propshare Private Limited is a Private Limited Company incorporated under the Companies Act 2013 on 15 December 2025 (CIN: U68100RJ2025PTC109627).
        </p>
        <div className="p-4 bg-[#F4F0E6] border border-[#DDD5C5] rounded-xs space-y-2 font-mono text-xs">
          <span className="font-semibold text-[#0F0F0E] block uppercase tracking-wider text-[10px] text-[#967A46]">
            Controlling Ownership Principle
          </span>
          <p className="text-[#0F0F0E] font-medium">
            Investors participate through equity shares in a property-specific SPV (Private Limited Company) that owns the underlying commercial property. The SPV holds registered legal title to the property. Investors do not hold direct physical title or individual bricks.
          </p>
        </div>
      </div>

      {/* 2. Non-Guaranteed Return Language Rule */}
      <div className="bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs p-6 sm:p-8 space-y-3 text-xs sm:text-sm text-[#0F0F0E] leading-relaxed relative corner-crosshair">
        <h2 className="font-serif-display text-2xl font-medium text-[#0F0F0E] flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-[#8A2E20]" />
          <span>2. Non-Guaranteed Return Language Rule</span>
        </h2>
        <p className="text-[#47453F]">
          The 5% p.a. figure is an acquisition-stage screening benchmark used to filter candidate commercial properties and is not a guaranteed investor return, rental income, yield, or profit.
        </p>
        <p className="font-medium text-[#8A2E20] font-mono text-xs">
          Targeted acquisition yield is distinct from actual investor return. Actual rental distributions depend on tenant lease fulfillment, property occupancy, and net SPV operating expenses and taxes. Capital appreciation is not guaranteed; commercial property values may increase or decrease.
        </p>
      </div>

      {/* 3. Minimum Holding Period & Share Transfer Terms */}
      <div className="bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs p-6 sm:p-8 space-y-3 text-xs sm:text-sm text-[#0F0F0E] leading-relaxed relative corner-crosshair">
        <h2 className="font-serif-display text-2xl font-medium text-[#0F0F0E] flex items-center gap-2">
          <Clock className="w-5 h-5 text-[#BFA272]" />
          <span>3. Minimum Holding Period & Share Transfer Terms</span>
        </h2>
        <p className="text-[#47453F]">
          Minimum holding period: 1 year. No early exit before 1 year.
        </p>
        <p className="text-[#47453F]">
          After 1 year, exit/transfer is subject to applicable SPV and share-transfer terms and the Companies Act 2013. Secondary liquidity depends on market demand and buyer availability.
        </p>
      </div>

      {/* 4. Minimum Investment Policy */}
      <div className="bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs p-6 sm:p-8 space-y-3 text-xs sm:text-sm text-[#0F0F0E] leading-relaxed relative corner-crosshair">
        <h2 className="font-serif-display text-2xl font-medium text-[#0F0F0E] flex items-center gap-2">
          <Layers className="w-5 h-5 text-[#BFA272]" />
          <span>4. Minimum Investment Policy</span>
        </h2>
        <p className="text-[#47453F]">
          The minimum capital contribution of ₹10 lakh per property is a Joint Bricks company business policy, established to maintain institutional-grade shareholder groups. It is not a statutory or regulatory minimum imposed by SEBI or any regulatory agency.
        </p>
      </div>

      {/* 5. Geographic Scope & Pre-Launch Status */}
      <div className="bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs p-6 sm:p-8 space-y-3 text-xs sm:text-sm text-[#0F0F0E] leading-relaxed relative corner-crosshair">
        <h2 className="font-serif-display text-2xl font-medium text-[#0F0F0E] flex items-center gap-2">
          <FileText className="w-5 h-5 text-[#BFA272]" />
          <span>5. Geographic Scope & Early-Stage Status</span>
        </h2>
        <p className="text-[#47453F]">
          Joint Bricks Propshare Private Limited focuses primarily on commercial retail properties in Mumbai, Delhi NCR, and Pune. The company was incorporated on 15 December 2025 and is in an early pre-launch stage. No live properties are offered publicly at this stage. All sample dockets on the website are for illustrative design reference only.
        </p>
      </div>

      {/* Corporate Summary Box */}
      <div className="p-6 bg-[#0B0B0A] text-[#FAF8F5] border border-[#23221E] rounded-xs text-xs font-mono space-y-2 relative corner-crosshair">
        <div className="text-[#BFA272] font-semibold uppercase tracking-wider">
          Joint Bricks Propshare Private Limited
        </div>
        <div className="text-[#827E74]">
          CIN: U68100RJ2025PTC109627 · Incorporated 15 December 2025 · Registered in India
        </div>
      </div>

    </div>
  );
};
