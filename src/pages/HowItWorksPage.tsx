import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Layers } from 'lucide-react';
import { InvestmentStructureDiagram } from '../components/common/InvestmentStructureDiagram';
import { DueDiligenceChecklist } from '../components/common/DueDiligenceChecklist';
import { SEO } from '../components/common/SEO';

const HOW_IT_WORKS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How Joint Bricks Works — 9-Step Commercial Real Estate SPV Investment Process",
  "description": "A 9-step guide to participating in pre-leased commercial retail properties through equity shares in dedicated property-specific Special Purpose Vehicles (SPVs) via Joint Bricks.",
  "url": "https://jointbricks.com/how-it-works",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Discover", "text": "Browse screened commercial retail opportunities in Mumbai, Delhi NCR, and Pune pre-leased at acquisition." },
    { "@type": "HowToStep", "position": 2, "name": "Due Diligence", "text": "Review comprehensive 5-layer due diligence and supplementary bank-financing verification." },
    { "@type": "HowToStep", "position": 3, "name": "Evaluate", "text": "Analyze catchment footfall, tenant lease quality, and the 5% targeted yield hurdle benchmark." },
    { "@type": "HowToStep", "position": 4, "name": "Structure", "text": "Property is ring-fenced within a dedicated Private Limited SPV incorporated under the Companies Act 2013." },
    { "@type": "HowToStep", "position": 5, "name": "Participate", "text": "Contribute capital (minimum ₹10 lakh policy) into dedicated property-specific accounts prior to acquisition." },
    { "@type": "HowToStep", "position": 6, "name": "Hold SPV Shares", "text": "Receive registered equity shares in the property-specific SPV. The SPV owns registered property title." },
    { "@type": "HowToStep", "position": 7, "name": "Receive Monthly Net Distributions", "text": "Where generated, net rental income after expenses is distributed monthly pro-rata to shareholders." },
    { "@type": "HowToStep", "position": 8, "name": "Ongoing Reporting", "text": "Receive regular monthly property updates and annual audited financial statements." },
    { "@type": "HowToStep", "position": 9, "name": "Holding Period & Exit Realization", "text": "Minimum holding period: 1 year. No early exit before 1 year. After 1 year, exit/transfer is subject to applicable SPV and share-transfer terms." }
  ]
};

export const HowItWorksPage: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Discover Screened Opportunities",
      desc: "Browse pre-leased commercial retail assets across Mumbai, Delhi NCR, and Pune selected for catchment footfall and strong corporate tenant profiles."
    },
    {
      num: "02",
      title: "Review 5-Layer Diligence",
      desc: "Inspect 30-year legal title searches, financial audits, technical structural inspections, tenant lease commitments, and catchment footfall data."
    },
    {
      num: "03",
      title: "Evaluate Underwriting Thesis",
      desc: "Assess the asset against our ≥ 5.0% p.a. minimum targeted acquisition yield screening hurdle and contractually escalating lease terms."
    },
    {
      num: "04",
      title: "Dedicated SPV Formation",
      desc: "A separate Private Limited Company is established under Companies Act 2013 exclusively to hold the real estate, isolating all asset liabilities cleanly."
    },
    {
      num: "05",
      title: "Capital Contribution (Min. ₹10L)",
      desc: "Contribute capital starting at ₹10 Lakh per property (Joint Bricks policy). Investor funds are held segregated prior to acquisition."
    },
    {
      num: "06",
      title: "Receive Direct SPV Shares",
      desc: "Receive registered equity shares in the property-specific SPV proportional to your contribution. The SPV holds 100% registered title to the real estate."
    },
    {
      num: "07",
      title: "Monthly Net Distributions",
      desc: "Where the tenant fulfills lease obligations and rental income is generated, net rent after deductions is distributed monthly pro-rata to shareholders."
    },
    {
      num: "08",
      title: "Structured Ongoing Reporting",
      desc: "Track asset performance via monthly shareholder updates and formal annual statutory audited financials from the property SPV."
    },
    {
      num: "09",
      title: "Holding Period & Exit Terms",
      desc: "Minimum holding period: 1 year. No early exit before 1 year. After 1 year, exit/transfer is subject to applicable SPV governance and share-transfer terms."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <SEO
        title="How Joint Bricks Works — 9-Step SPV Investment Process | India"
        description="Understand the 9-step SPV investment process: from retail asset screening and diligence to capital allocation, monthly net distributions, and exit. Joint Bricks."
        canonicalUrl="https://jointbricks.com/how-it-works"
        schema={HOW_IT_WORKS_SCHEMA}
      />
      
      {/* Page Header */}
      <div className="bg-[#0B0B0A] text-[#FAF8F5] border border-[#23221E] rounded-xs p-8 sm:p-16 text-center max-w-4xl mx-auto space-y-4 relative corner-crosshair">
        <span className="text-[10px] font-mono font-medium text-[#BFA272] uppercase tracking-[0.25em] bg-[#BFA272]/15 px-3 py-1 rounded-xs border border-[#BFA272]/30 inline-block">
          THE OPERATIONAL MECHANISM
        </span>
        <h1 className="font-serif-display text-4xl sm:text-6xl font-light tracking-tight text-[#FAF8F5]">
          From Sourcing to Distribution
        </h1>
        <p className="text-xs sm:text-sm text-[#BCB8AD] max-w-2xl mx-auto leading-relaxed">
          Joint Bricks operates a property-specific SPV model. Here is the comprehensive, transparent journey from initial screening to monthly rental distributions and eventual exit realization.
        </p>
      </div>

      {/* Visual Blueprint Diagram */}
      <InvestmentStructureDiagram />

      {/* Deep-Dive: What Is an SPV & What a Brick Means */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* SPV Definition */}
        <div className="bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs p-8 space-y-4 relative corner-crosshair">
          <div className="flex items-center gap-2.5 text-[#0F0F0E]">
            <Building2 className="w-5 h-5 text-[#BFA272]" />
            <h3 className="font-serif-display text-2xl font-medium">
              What Is a Special Purpose Vehicle (SPV)?
            </h3>
          </div>
          <p className="text-xs text-[#47453F] leading-relaxed">
            A Special Purpose Vehicle (SPV) is a standalone Private Limited Company incorporated under the Indian Companies Act 2013 exclusively to acquire, hold, and manage a single commercial real-estate asset.
          </p>
          <div className="p-4 bg-[#F4F0E6] border border-[#DDD5C5] rounded-xs text-xs font-mono text-[#0F0F0E] space-y-1">
            <span className="font-semibold block text-[#967A46] uppercase tracking-wider text-[10px]">
              Core Structural Fact
            </span>
            <p>
              Investors participate through registered shares in the property-specific SPV. The SPV holds registered legal title to the property. Investors do not hold direct physical title.
            </p>
          </div>
        </div>

        {/* What a Brick Means */}
        <div className="bg-[#0B0B0A] text-[#FAF8F5] border border-[#23221E] rounded-xs p-8 space-y-4 relative corner-crosshair">
          <div className="flex items-center gap-2.5 text-[#BFA272]">
            <Layers className="w-5 h-5" />
            <h3 className="font-serif-display text-2xl font-light text-[#FAF8F5]">
              What a "Brick" Means (Brand Metaphor)
            </h3>
          </div>
          <p className="text-xs text-[#BCB8AD] leading-relaxed">
            "Bricks" represents physical real-estate assets. In Joint Bricks communication, a "Brick" is a brand metaphor for participation through SPV shares.
          </p>
          <div className="p-4 bg-[#141412] border border-[#23221E] rounded-xs text-xs font-mono text-[#827E74] space-y-1">
            <span className="font-semibold block text-[#BFA272] uppercase tracking-wider text-[10px]">
              Legal & Brand Guardrail
            </span>
            <p>
              A "Brick" is not a legally defined portion of a property, not registered physical title, and not a specific physical unit. The metaphor never overrides the legal reality: investors hold SPV shares.
            </p>
          </div>
        </div>

      </div>

      {/* The 9 Sequential Stages */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-[10px] font-mono font-medium text-[#967A46] uppercase tracking-[0.2em] bg-[#BFA272]/15 px-2.5 py-0.5 rounded-xs border border-[#BFA272]/30">
            Chronological Sequence
          </span>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-light text-[#0F0F0E]">
            The 9-Step Investment Journey
          </h2>
          <p className="text-xs text-[#47453F]">
            A structured workflow ensuring asset diligence, legal segregation, and ongoing investor updates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-[#FAF8F5] border border-[#DDD5C5] p-6 sm:p-7 rounded-xs space-y-3 hover:border-[#BFA272] transition-colors relative corner-crosshair"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#BFA272]">
                  STEP {step.num}
                </span>
                <span className="text-[9px] font-mono text-[#827E74]">APPROVED WORKFLOW</span>
              </div>
              <h3 className="font-serif-display text-xl font-medium text-[#0F0F0E]">
                {step.title}
              </h3>
              <p className="text-xs text-[#47453F] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Due Diligence Checklist Component */}
      <DueDiligenceChecklist />

      {/* Holding Period Policy Box */}
      <div className="bg-[#F4F0E6] border border-[#DDD5C5] rounded-xs p-6 text-xs text-[#47453F] leading-relaxed max-w-4xl mx-auto space-y-2 font-mono">
        <span className="font-semibold text-[#0F0F0E] block uppercase tracking-wider text-[11px]">
          1-Year Minimum Holding Period Policy:
        </span>
        <p>
          Minimum holding period: 1 year. No early exit before 1 year. After 1 year, exit/transfer is subject to applicable SPV and share-transfer terms. On eventual property sale, net proceeds (after liabilities, transaction costs, and taxes) are distributed pro-rata.
        </p>
      </div>

      {/* CTA Footer */}
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
