import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, 
  ArrowLeft, 
  AlertTriangle 
} from 'lucide-react';
import { InvestmentSnapshot } from '../components/common/InvestmentSnapshot';
import { FinancialBreakdown } from '../components/common/FinancialBreakdown';
import { DueDiligenceChecklist } from '../components/common/DueDiligenceChecklist';
import { TenantCard } from '../components/common/TenantCard';
import { EoiDrawer } from '../components/common/EoiDrawer';
import { SEO } from '../components/common/SEO';

export const PropertyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isEoiOpen, setIsEoiOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <SEO
        title="Sample Commercial Retail SPV Structure Docket | Joint Bricks"
        description="Illustrative commercial retail SPV structure docket showing pre-leased retail tenancy, screening yield benchmarks, and due diligence layers. Joint Bricks."
        canonicalUrl={`https://jointbricks.com/opportunities/${id || 'sample'}`}
      />
      
      {/* Back to archive link */}
      <Link
        to="/opportunities"
        className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#827E74] hover:text-[#0F0F0E] transition-colors"
      >
        <ArrowLeft className="w-4 h-4 text-[#BFA272]" />
        <span>Return to Opportunities Archive</span>
      </Link>

      {/* Property Hero Dossier */}
      <div className="bg-[#0B0B0A] text-[#FAF8F5] border border-[#23221E] rounded-xs p-6 sm:p-12 space-y-8 relative corner-crosshair">
        
        {/* Top Identification Bar */}
        <div className="flex flex-wrap items-center justify-between gap-6 border-b border-[#23221E] pb-8">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-[#BFA272]/20 text-[#D4BA8C] border border-[#BFA272]/40 text-[9px] font-mono font-medium px-2.5 py-0.5 rounded-xs uppercase tracking-wider">
                SAMPLE STRUCTURE · DESIGN REFERENCE ONLY
              </span>
              <span className="bg-[#141412] text-[#827E74] text-[9px] font-mono px-2.5 py-0.5 rounded-xs border border-[#23221E] uppercase">
                SPV DOCKET #{id || 'sample'}
              </span>
            </div>
            <h1 className="font-serif-display text-3xl sm:text-5xl font-light text-[#FAF8F5]">
              Pre-Leased Commercial Retail Unit — MMR Catchment
            </h1>
            <div className="flex items-center gap-2 text-xs text-[#D4BA8C] font-mono">
              <MapPin className="w-3.5 h-3.5 text-[#BFA272]" />
              <span>Bandra West, Mumbai Metropolitan Region (Sample Location Reference)</span>
            </div>
          </div>

          <div className="bg-[#141412] border border-[#23221E] p-5 rounded-xs text-right min-w-[220px]">
            <span className="text-[10px] text-[#827E74] uppercase tracking-wider block font-mono">
              Targeted Acquisition Yield
            </span>
            <div className="text-3xl font-bold text-[#BFA272] font-mono-nums mt-0.5">
              5.2% p.a.
            </div>
            <span className="text-[10px] text-[#827E74] font-mono block mt-1">
              [Screening Benchmark Only]
            </span>
          </div>
        </div>

        {/* Notice of Sample Status */}
        <div className="p-4 bg-[#141412] border border-[#BFA272]/30 rounded-xs text-xs font-mono text-[#BCB8AD] leading-relaxed">
          <strong className="text-[#BFA272]">Illustrative Design Reference:</strong> This document represents an architectural and legal sample structure illustrating how SPV properties are structured, diligenced, and reported. Joint Bricks is newly incorporated; opportunities are currently pre-launch and no live properties are publicly listed.
        </div>

        {/* EOI Primary Call to Action Bar */}
        <div className="bg-[#141412] border border-[#23221E] p-6 rounded-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-xs text-[#FAF8F5] space-y-1">
            <span className="font-mono font-medium text-[#BFA272] block uppercase tracking-wider text-[11px]">
              Pre-Launch Opportunity Notification
            </span>
            <p className="text-[#BCB8AD] max-w-xl">
              Register non-binding interest to receive official property information memoranda and SPV dockets when public offerings are launched.
            </p>
          </div>
          <button
            onClick={() => setIsEoiOpen(true)}
            className="w-full sm:w-auto px-7 py-3.5 bg-[#BFA272] text-[#0B0B0A] text-xs font-semibold uppercase tracking-[0.16em] rounded-xs hover:bg-[#D4BA8C] transition-colors whitespace-nowrap cursor-pointer flex-shrink-0"
          >
            Register Pre-Launch Interest
          </button>
        </div>
      </div>

      {/* Snapshot Component */}
      <InvestmentSnapshot
        targetedYield="5.2% p.a. (Targeted Benchmark)"
        minInvestment="₹10 Lakh"
        propertyValue="₹2.5 Crore"
        holdingPeriod="Min. 1 Year (No early exit)"
        spvName="[PROPERTY-SPECIFIC SPV NAME]"
        isIllustrative={true}
      />

      {/* Tenant Dossier */}
      <TenantCard
        tenantName="Grade-A Retail Brand (Sample)"
        industryCategory="Commercial Fashion & Lifestyle Retail"
        initialLeaseCommitmentYears={5}
        leaseTenureYears={9}
      />

      {/* Financial Breakdown */}
      <FinancialBreakdown />

      {/* Governance & Fee Disclosures */}
      <div className="bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs p-8 space-y-6 relative corner-crosshair">
        <h3 className="font-serif-display text-2xl sm:text-3xl font-light text-[#0F0F0E]">
          Fee & Governance Disclosures
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          <div className="p-5 bg-[#F4F0E6] border border-[#DDD5C5] rounded-xs space-y-2">
            <span className="font-mono font-semibold text-[#0F0F0E] block uppercase tracking-wider">
              Management & Acquisition Fees:
            </span>
            <span className="text-[#827E74] block font-mono text-[11px]">
              Disclosed Per Opportunity Docket
            </span>
            <p className="text-[11px] text-[#47453F] leading-relaxed pt-1">
              Applicable management and property acquisition fees will be disclosed for each opportunity once finalized and published in the applicable property/SPV documentation. No fees are charged on the website at this stage.
            </p>
          </div>

          <div className="p-5 bg-[#F4F0E6] border border-[#DDD5C5] rounded-xs space-y-2">
            <span className="font-mono font-semibold text-[#0F0F0E] block uppercase tracking-wider">
              Fund Handling & Segregation:
            </span>
            <span className="text-[#827E74] block font-mono text-[11px]">
              Segregated Capital Prior to Acquisition
            </span>
            <p className="text-[11px] text-[#47453F] leading-relaxed pt-1">
              Investor capital is intended to be kept separate and segregated from operational company funds prior to property acquisition and share allotment. Detailed operational mechanics are set forth in property-specific documentation.
            </p>
          </div>
        </div>
      </div>

      {/* Due Diligence Checklist */}
      <DueDiligenceChecklist />

      {/* Risk Considerations Section */}
      <div className="bg-[#0B0B0A] text-[#FAF8F5] border border-[#23221E] rounded-xs p-8 space-y-4 relative corner-crosshair">
        <div className="flex items-center gap-2.5 text-[#BFA272]">
          <AlertTriangle className="w-5 h-5" />
          <h3 className="font-serif-display text-2xl font-medium text-[#FAF8F5]">
            Key Investment Risk Factors
          </h3>
        </div>
        <p className="text-xs text-[#BCB8AD] leading-relaxed font-mono">
          Commercial real estate participation carries inherent market, liquidity, and economic risks. Key factors to evaluate before participating:
        </p>
        <ul className="space-y-2.5 text-xs text-[#827E74] font-mono">
          <li className="flex items-start gap-2.5">
            <span className="text-[#BFA272] mt-0.5">•</span>
            <span><strong>Tenant Lease Risk:</strong> While assets are pre-leased at acquisition, future lease fulfillment, rent payments, or vacancy after initial lease commitment expiration cannot be guaranteed.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-[#BFA272] mt-0.5">•</span>
            <span><strong>Illiquidity:</strong> Real-estate SPV shares are illiquid with a mandatory 1-year minimum holding period. Secondary share transfer liquidity depends on willing buyers.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-[#BFA272] mt-0.5">•</span>
            <span><strong>Capital Value Fluctuations:</strong> Property values may appreciate or depreciate based on macroeconomic cycles, interest rate changes, and micro-market dynamics.</span>
          </li>
        </ul>
      </div>

      {/* EOI Drawer */}
      <EoiDrawer
        isOpen={isEoiOpen}
        onClose={() => setIsEoiOpen(false)}
        propertyName="Pre-Leased Commercial Retail Unit — MMR Catchment (Sample)"
      />

    </div>
  );
};
