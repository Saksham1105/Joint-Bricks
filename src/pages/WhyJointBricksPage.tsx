import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ComparisonTable } from '../components/common/ComparisonTable';
import { SEO } from '../components/common/SEO';

const WHY_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Why Joint Bricks — Brand Manifesto & 7 Structural Principles | India",
  "description": "Why participate through Joint Bricks: pre-leased commercial retail focus, 5% targeted yield screening benchmark, supplementary bank-financing review, and property-specific SPV shareholding.",
  "url": "https://jointbricks.com/why-joint-bricks",
  "mainEntity": {
    "@type": "ItemList",
    "name": "Joint Bricks Core Operating Principles",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Pre-Leased Commercial Focus at Acquisition" },
      { "@type": "ListItem", "position": 2, "name": "5% p.a. Minimum Targeted Acquisition Yield Screen" },
      { "@type": "ListItem", "position": 3, "name": "Dual Return Potential: Monthly Net Rental + Capital Appreciation" },
      { "@type": "ListItem", "position": 4, "name": "Selective Focus on High-Street Commercial Retail" },
      { "@type": "ListItem", "position": 5, "name": "Catchment-Based Sourcing in Prime Metros" },
      { "@type": "ListItem", "position": 6, "name": "Dedicated Property-Specific SPV Shareholding Structure" },
      { "@type": "ListItem", "position": 7, "name": "Supplementary Bank-Financing Verification Layer" }
    ]
  }
};

export const WhyJointBricksPage: React.FC = () => {
  const differentiators = [
    {
      num: "01",
      title: "Pre-Leased at Acquisition",
      desc: "Every prospective asset is tenanted prior to acquisition, eliminating day-one vacancy exposure. (Note: Does not eliminate ongoing future vacancy risk during holding period)."
    },
    {
      num: "02",
      title: "5% p.a. Acquisition Hurdle",
      desc: "We screen candidate properties against a minimum targeted acquisition rental yield benchmark of 5% p.a. This is a selective screening filter, not a guaranteed return."
    },
    {
      num: "03",
      title: "Dual Return Potential",
      desc: "Net rental distributions paid monthly in proportion to SPV shareholding, coupled with long-term capital appreciation potential upon eventual property sale."
    },
    {
      num: "04",
      title: "High-Street Retail Specialization",
      desc: "Targeting ground retail shops and high-street storefronts in prime metropolitan markets: Mumbai, Delhi NCR, and Pune, benefiting from organic consumer footfall."
    },
    {
      num: "05",
      title: "Dense Catchment Sourcing",
      desc: "Focus on commercial retail assets located in or adjacent to mature residential catchments with proven discretionary spending power."
    },
    {
      num: "06",
      title: "Dedicated SPV Ring-Fencing",
      desc: "Each property is isolated within a dedicated Private Limited company under the Companies Act 2013. Investors hold direct equity shares, not physical title."
    },
    {
      num: "07",
      title: "Supplementary Bank Review Layer",
      desc: "A supplementary bank loan evaluation process provides additional external institutional scrutiny alongside full legal and property diligence."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <SEO
        title="Why Joint Bricks — Brand Manifesto & 7 Structural Principles | India"
        description="7 structural principles behind Joint Bricks: pre-leased retail assets, 5% yield screen, bank diligence layer, and SPV shareholding in Mumbai, Delhi NCR & Pune."
        canonicalUrl="https://jointbricks.com/why-joint-bricks"
        schema={WHY_SCHEMA}
      />
      
      {/* Editorial Page Header */}
      <div className="bg-[#0B0B0A] text-[#FAF8F5] border border-[#23221E] rounded-xs p-8 sm:p-16 text-center max-w-4xl mx-auto space-y-4 relative corner-crosshair">
        <span className="text-[10px] font-mono font-medium text-[#BFA272] uppercase tracking-[0.25em] bg-[#BFA272]/15 px-3 py-1 rounded-xs border border-[#BFA272]/30 inline-block">
          BRAND MANIFESTO & ARCHITECTURE
        </span>
        <h1 className="font-serif-display text-4xl sm:text-6xl font-light tracking-tight text-[#FAF8F5]">
          Selective. Diligenced. Structured.
        </h1>
        <p className="text-xs sm:text-sm text-[#BCB8AD] max-w-2xl mx-auto leading-relaxed">
          Joint Bricks was conceived to replace commercial real estate opacity with institutional transparency. We prioritize ring-fenced legal isolation, conservative underwriting, and verifiable footfall corridors over marketing volume.
        </p>
      </div>

      {/* Manifesto Narrative Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#FAF8F5] border border-[#DDD5C5] p-8 rounded-xs space-y-3 relative corner-crosshair">
          <span className="text-[10px] font-mono font-medium text-[#BFA272] uppercase tracking-wider block">
            01 · Structural Clarity
          </span>
          <h3 className="font-serif-display text-2xl font-medium text-[#0F0F0E]">
            The SPV Standard
          </h3>
          <p className="text-xs text-[#47453F] leading-relaxed">
            By establishing dedicated private limited entities for every property, investor capital is isolated from other assets and operational liabilities. Title is held cleanly by the SPV under the Companies Act 2013.
          </p>
        </div>

        <div className="bg-[#FAF8F5] border border-[#DDD5C5] p-8 rounded-xs space-y-3 relative corner-crosshair">
          <span className="text-[10px] font-mono font-medium text-[#BFA272] uppercase tracking-wider block">
            02 · Asset Discipline
          </span>
          <h3 className="font-serif-display text-2xl font-medium text-[#0F0F0E]">
            Pre-Leased Only
          </h3>
          <p className="text-xs text-[#47453F] leading-relaxed">
            We do not acquire speculative under-construction assets or vacant retail shells. Every property must have established, operating corporate tenants at acquisition with verifiable cash flows.
          </p>
        </div>

        <div className="bg-[#FAF8F5] border border-[#DDD5C5] p-8 rounded-xs space-y-3 relative corner-crosshair">
          <span className="text-[10px] font-mono font-medium text-[#BFA272] uppercase tracking-wider block">
            03 · Realistic Communication
          </span>
          <h3 className="font-serif-display text-2xl font-medium text-[#0F0F0E]">
            No Promised Yields
          </h3>
          <p className="text-xs text-[#47453F] leading-relaxed">
            Our 5% screening benchmark is an acquisition-stage hurdle rate, not a promised investor return. We communicate risks, lease terms, and fee structures with institutional clarity.
          </p>
        </div>
      </div>

      {/* 7 Core Operating Principles */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-[10px] font-mono font-medium text-[#967A46] uppercase tracking-[0.2em] bg-[#BFA272]/15 px-2.5 py-0.5 rounded-xs border border-[#BFA272]/30">
            Guiding Philosophy
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-light text-[#0F0F0E]">
            7 Core Operating Principles
          </h2>
          <p className="text-xs text-[#47453F]">
            Grounded in confirmed corporate facts, disciplined underwriting, and transparent corporate governance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item) => (
            <div key={item.num} className="bg-[#FAF8F5] border border-[#DDD5C5] p-6 sm:p-7 rounded-xs space-y-2 hover:border-[#BFA272] transition-colors relative corner-crosshair">
              <span className="font-mono text-[10px] font-bold text-[#BFA272] block">
                PRINCIPLE {item.num}
              </span>
              <h3 className="font-serif-display text-xl font-medium text-[#0F0F0E]">
                {item.title}
              </h3>
              <p className="text-xs text-[#47453F] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

          {/* Regulatory Reminder Box */}
          <div className="bg-[#0B0B0A] text-[#FAF8F5] border border-[#23221E] p-6 sm:p-7 rounded-xs space-y-2 flex flex-col justify-between relative corner-crosshair">
            <div>
              <span className="font-mono text-[10px] font-medium text-[#BFA272] uppercase tracking-wider block">
                Statutory Status
              </span>
              <h3 className="font-serif-display text-xl font-light text-[#FAF8F5] mt-1">
                Not an SM-REIT
              </h3>
              <p className="text-xs text-[#827E74] leading-relaxed mt-2 font-mono">
                Joint Bricks Propshare Private Limited (CIN: U68100RJ2025PTC109627) is not currently operating as a SEBI-registered SM-REIT and has no SM-REIT approval from SEBI.
              </p>
            </div>
            <Link
              to="/legal"
              className="text-[10px] font-mono text-[#BFA272] hover:text-[#D4BA8C] inline-flex items-center gap-1 pt-4"
            >
              <span>View Regulatory Disclosures</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Holding Period & Share Transfer Terms */}
      <div className="bg-[#F4F0E6] border border-[#DDD5C5] rounded-xs p-6 text-xs text-[#47453F] leading-relaxed max-w-4xl mx-auto space-y-2 font-mono">
        <span className="font-semibold text-[#0F0F0E] block uppercase tracking-wider text-[11px]">
          Holding Period & Secondary Transfer Policy:
        </span>
        <p>
          Minimum holding period: 1 year. No early exit before 1 year. After 1 year, exit/transfer is subject to applicable SPV and share-transfer terms. Commercial real-estate shareholdings are illiquid and dependent on market conditions.
        </p>
      </div>

      {/* Direct Property Ownership vs SPV Comparison Table */}
      <ComparisonTable />

      {/* Final Action Bar */}
      <div className="text-center pt-4">
        <Link
          to="/opportunities"
          className="px-8 py-4 bg-[#0B0B0A] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.16em] rounded-xs hover:bg-[#BFA272] hover:text-[#0B0B0A] transition-all duration-300 inline-flex items-center gap-2 group"
        >
          <span>Explore Diligenced Pipeline</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

    </div>
  );
};
