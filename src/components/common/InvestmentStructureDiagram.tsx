import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, FileCheck2, Layers, Building2, Store, Shield } from 'lucide-react';

interface StageDetail {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  description: string;
  legalFact: string;
  metrics: { label: string; value: string }[];
  icon: React.ReactNode;
}

export const InvestmentStructureDiagram: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(2); // Default to SPV stage

  const stages: StageDetail[] = [
    {
      id: 'investor',
      step: '01',
      title: 'Individual / Corporate Investors',
      subtitle: 'Direct Capital Participants',
      description: 'Discerning investors deploy capital starting at ₹10 Lakh per property (company policy). Participants include salaried professionals, business owners, HNIs, and NRIs seeking commercial retail real estate exposure without property-management overhead.',
      legalFact: 'Investors contribute capital directly into the specific SPV capital call. No commingling with platform operating accounts.',
      metrics: [
        { label: 'Minimum Allocation', value: '₹10 Lakh' },
        { label: 'Eligible Parties', value: 'Indian Residents & NRIs' },
        { label: 'Holding Period', value: '≥ 1 Year Minimum' }
      ],
      icon: <Users className="w-5 h-5" />
    },
    {
      id: 'shareholding',
      step: '02',
      title: 'Pro-Rata Equity Shareholding',
      subtitle: 'Registered Capital Stock',
      description: 'Capital contributed is allotted as registered equity shares in the dedicated SPV. Each investor’s percentage ownership in the SPV corresponds exactly to their capital contribution relative to the total SPV capital table.',
      legalFact: 'Investors hold registered ordinary equity shares in the Private Limited Company. Investors do NOT hold direct physical property title.',
      metrics: [
        { label: 'Instrument', value: 'Ordinary Equity Shares' },
        { label: 'Allotment Basis', value: 'Pro-Rata to Capital' },
        { label: 'Evidence', value: 'Share Allotment & Demat/Cert' }
      ],
      icon: <FileCheck2 className="w-5 h-5" />
    },
    {
      id: 'spv',
      step: '03',
      title: 'Property-Specific SPV',
      subtitle: 'Single-Asset Private Limited Company',
      description: 'A dedicated Special Purpose Vehicle (Private Limited Company incorporated under the Companies Act 2013) is established exclusively for each property. The SPV has a ring-fenced balance sheet and zero liabilities from any other asset or platform activities.',
      legalFact: 'The SPV holds 100% legal, unencumbered title to the commercial real estate on behalf of its shareholding body.',
      metrics: [
        { label: 'Governing Law', value: 'Companies Act 2013' },
        { label: 'Asset Ring-Fencing', value: 'Single-Asset Isolation' },
        { label: 'External Audit', value: 'Independent Statutory CA' }
      ],
      icon: <Layers className="w-5 h-5" />
    },
    {
      id: 'property',
      step: '04',
      title: 'Commercial Retail Property',
      subtitle: 'Physical Prime Real Estate Asset',
      description: 'Prime, pre-leased commercial retail property in high-density corridors across Mumbai, Delhi NCR, or Pune. Acquired only after passing our 11-point diligence matrix and supplementary institutional bank loan evaluation.',
      legalFact: '100% registered sale deed executed directly in the name of the dedicated SPV. Free from third-party developer encumbrance.',
      metrics: [
        { label: 'Asset Focus', value: 'Commercial High-Street Retail' },
        { label: 'Screening Benchmark', value: '≥ 5.0% Initial Yield' },
        { label: 'Target Metros', value: 'Mumbai · NCR · Pune' }
      ],
      icon: <Building2 className="w-5 h-5" />
    },
    {
      id: 'income',
      step: '05',
      title: 'Grade-A Tenant / Rental Income',
      subtitle: 'Contractual Lease Revenue & Distributions',
      description: 'Corporate retail brands, national chains, or essential banking services occupy the space under multi-year registered commercial leases. Monthly rent is paid directly into the SPV bank account, and net distributions flow pro-rata to shareholders.',
      legalFact: '5% targeted acquisition rental yield is a screening benchmark, not a guaranteed return. Net distributions reflect actual rent received less SPV expenses.',
      metrics: [
        { label: 'Lease Tenure', value: 'Multi-Year Long Term' },
        { label: 'Escalations', value: 'Typically 15% / 3 Yrs' },
        { label: 'Distribution Route', value: 'Pro-Rata to SPV Shareholders' }
      ],
      icon: <Store className="w-5 h-5" />
    }
  ];

  const currentStage = stages[activeStageIndex];

  return (
    <div className="bg-[#0B0B0A] text-[#FAF8F5] border border-[#23221E] rounded-xs p-6 sm:p-10 lg:p-14 relative overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-50" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 relative z-10 space-y-3">
        <span className="text-[10px] font-mono font-medium text-[#BFA272] uppercase tracking-[0.25em] bg-[#BFA272]/10 px-3.5 py-1 rounded-xs border border-[#BFA272]/30 inline-block">
          Signature Structural Architecture
        </span>
        <h3 className="font-serif-display text-3xl sm:text-5xl font-light text-[#FAF8F5] leading-tight">
          How Ownership Flows: <br />
          <span className="italic font-normal text-[#D4BA8C]">The 5-Stage SPV Paradigm</span>
        </h3>
        <p className="text-xs sm:text-sm text-[#BCB8AD] leading-relaxed max-w-2xl mx-auto">
          Explore the legal and financial isolation ring-fencing every commercial real estate acquisition at Joint Bricks. Click any stage to inspect governing mechanics.
        </p>
      </div>

      {/* 5-Stage Interactive Flow Ribbon */}
      <div className="relative z-10 max-w-5xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
          {stages.map((stage, idx) => {
            const isSelected = activeStageIndex === idx;
            return (
              <motion.button
                key={stage.id}
                type="button"
                onClick={() => setActiveStageIndex(idx)}
                whileHover={{ y: -2 }}
                className={`relative text-left p-4 rounded-xs border transition-all duration-300 cursor-pointer flex flex-col justify-between h-full ${
                  isSelected
                    ? 'bg-[#1C1C19] border-[#BFA272] shadow-lg shadow-black/50'
                    : 'bg-[#141412] border-[#23221E] hover:border-[#383630]'
                }`}
              >
                {/* Active Indicator Top Notch */}
                {isSelected && (
                  <motion.div
                    layoutId="activeStageGlow"
                    className="absolute -top-[1px] inset-x-0 h-[2px] bg-[#BFA272]"
                  />
                )}

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono tracking-widest uppercase ${
                      isSelected ? 'text-[#BFA272] font-bold' : 'text-[#827E74]'
                    }`}>
                      STAGE {stage.step}
                    </span>
                    <div className={`p-1.5 rounded-xs ${
                      isSelected ? 'bg-[#BFA272] text-[#0B0B0A]' : 'bg-[#0B0B0A] text-[#827E74]'
                    }`}>
                      {stage.icon}
                    </div>
                  </div>

                  <h4 className="font-serif-display text-base font-semibold leading-snug text-[#FAF8F5]">
                    {stage.title}
                  </h4>
                </div>

                <div className="pt-3 mt-3 border-t border-[#23221E] flex items-center justify-between text-[10px] font-mono">
                  <span className={isSelected ? 'text-[#D4BA8C]' : 'text-[#827E74]'}>
                    {stage.subtitle}
                  </span>
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BFA272] animate-pulse" />
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Desktop Connector Flow Bar */}
        <div className="hidden md:flex items-center justify-between px-10 pt-4 text-[#827E74]">
          <div className="flex-1 h-[1px] bg-[#23221E] relative">
            <div
              className="absolute top-0 h-[1px] bg-[#BFA272] transition-all duration-500"
              style={{ width: `${(activeStageIndex / 4) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Selected Stage Monograph Inspection Dossier */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStage.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#141412] border border-[#23221E] rounded-xs p-6 sm:p-8 relative corner-crosshair"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Stage Explanation & Legal Fact */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-xs bg-[#BFA272]/15 border border-[#BFA272]/30 text-[10px] font-mono text-[#D4BA8C] uppercase tracking-wider">
                  <span>STAGE {currentStage.step} OF 05</span>
                  <span className="text-[#827E74]">·</span>
                  <span>{currentStage.subtitle}</span>
                </div>

                <h4 className="font-serif-display text-2xl sm:text-3xl font-medium text-[#FAF8F5]">
                  {currentStage.title}
                </h4>

                <p className="text-sm text-[#BCB8AD] leading-relaxed">
                  {currentStage.description}
                </p>

                {/* Statutory Guardrail Callout */}
                <div className="p-4 bg-[#0B0B0A] border border-[#23221E] rounded-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-[#BFA272]">
                    <Shield className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-mono font-bold tracking-[0.16em] uppercase">
                      Statutory & Governance Standard
                    </span>
                  </div>
                  <p className="text-xs text-[#FAF8F5] font-mono leading-relaxed">
                    {currentStage.legalFact}
                  </p>
                </div>
              </div>

              {/* Right Column: Architectural Metadata Telemetry */}
              <div className="lg:col-span-5 bg-[#0B0B0A] border border-[#23221E] rounded-xs p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-[#23221E] pb-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#827E74]">
                    Specification Table
                  </span>
                  <span className="text-[10px] font-mono text-[#BFA272]">
                    DOC REF: SPV-{currentStage.step}
                  </span>
                </div>

                <div className="space-y-3">
                  {currentStage.metrics.map((m) => (
                    <div key={m.label} className="flex items-center justify-between text-xs py-1 border-b border-[#1C1C19]">
                      <span className="text-[#827E74] font-mono text-[11px]">{m.label}</span>
                      <span className="text-[#FAF8F5] font-mono font-medium text-right">{m.value}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-[10px] font-mono text-[#827E74] leading-relaxed">
                  Every property acquired is governed under its individual charter and Articles of Association.
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mandatory Non-SM-REIT Regulatory Footer Note */}
      <div className="mt-10 pt-6 border-t border-[#23221E] text-center max-w-3xl mx-auto">
        <p className="text-[11px] font-mono text-[#827E74] leading-relaxed">
          Joint Bricks Propshare Private Limited (CIN: U68100RJ2025PTC109627) is not an SM-REIT and is not SEBI-registered. 5% targeted yield is a screening hurdle rate and not a guaranteed investor return.
        </p>
      </div>

    </div>
  );
};
