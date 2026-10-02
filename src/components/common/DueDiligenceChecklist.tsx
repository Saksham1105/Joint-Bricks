import React from 'react';
import { CheckCircle2, FileText, Search, Landmark, Scale, Building2 } from 'lucide-react';

export const DueDiligenceChecklist: React.FC = () => {
  const steps = [
    {
      title: "1. Legal Title & Encumbrance",
      icon: <Scale className="w-4 h-4 text-[#BFA272]" />,
      description: "30-year title search, non-encumbrance certificate, pending litigation check, and property-specific SPV corporate structural verification."
    },
    {
      title: "2. Financial & Yield Audit",
      icon: <FileText className="w-4 h-4 text-[#BFA272]" />,
      description: "Historic rent receipts, security deposit terms, tax and municipal cess compliance, and screening against our 5% acquisition yield benchmark."
    },
    {
      title: "3. Technical & Structural Quality",
      icon: <Building2 className="w-4 h-4 text-[#BFA272]" />,
      description: "Physical asset assessment, sanctioned building plans, Occupancy Certificate (OC), structural safety, and maintenance reserve review."
    },
    {
      title: "4. Tenant & Lease Audit",
      icon: <CheckCircle2 className="w-4 h-4 text-[#BFA272]" />,
      description: "Lease agreement terms, minimum lease commitment duration, rent escalation schedule (typically 15% every 3 years), notice periods, and tenant business profile."
    },
    {
      title: "5. Catchment & Footfall Analysis",
      icon: <Search className="w-4 h-4 text-[#BFA272]" />,
      description: "Organic pedestrian footfall density, surrounding residential catchment wealth index, metro/transit proximity, and micro-market rental rates."
    }
  ];

  return (
    <div className="bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs p-6 sm:p-8 my-8 space-y-6 relative corner-crosshair">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#DDD5C5] pb-4">
        <div>
          <span className="text-[10px] font-mono font-medium text-[#967A46] uppercase tracking-[0.2em] bg-[#BFA272]/15 px-2.5 py-0.5 rounded-xs border border-[#BFA272]/30">
            Institutional Vetting Standard
          </span>
          <h3 className="font-serif-display text-2xl sm:text-3xl font-light text-[#0F0F0E] mt-2">
            5-Layer Due Diligence Framework
          </h3>
        </div>
        <div className="text-xs text-[#827E74] font-mono max-w-xs">
          Every commercial property must satisfy all 5 criteria layers prior to SPV acquisition consideration.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-[#F4F0E6] border border-[#DDD5C5] rounded-xs p-5 flex flex-col justify-between hover:border-[#BFA272] transition-colors"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 rounded-xs bg-[#FAF8F5] border border-[#DDD5C5] flex items-center justify-center">
                  {step.icon}
                </div>
                <span className="text-[9px] font-mono font-bold text-[#285A42] bg-[#285A42]/10 px-1.5 py-0.5 rounded-xs">
                  LAYER 0{idx + 1}
                </span>
              </div>
              <h4 className="text-xs font-semibold text-[#0F0F0E] mb-1.5 leading-snug">
                {step.title}
              </h4>
              <p className="text-xs text-[#47453F] leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Supplementary Bank Verification Layer Box */}
      <div className="bg-[#0B0B0A] text-[#FAF8F5] border border-[#23221E] rounded-xs p-6 flex flex-col sm:flex-row items-start gap-5 relative corner-crosshair">
        <div className="w-10 h-10 rounded-xs bg-[#141412] text-[#BFA272] border border-[#23221E] flex items-center justify-center flex-shrink-0">
          <Landmark className="w-5 h-5" />
        </div>
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="font-serif-display text-lg font-medium text-[#FAF8F5]">
              Supplementary Bank-Financing Verification Layer
            </h4>
            <span className="bg-[#BFA272]/20 text-[#D4BA8C] border border-[#BFA272]/40 text-[9px] font-mono font-medium px-2 py-0.5 rounded-xs uppercase">
              SUPPLEMENTARY SCRUTINY
            </span>
          </div>
          <p className="text-xs text-[#BCB8AD] leading-relaxed font-mono">
            A supplementary bank-financing/verification process may provide additional institutional scrutiny alongside, and not in place of, full legal and property due diligence. This additional layer assists in title sanity checking; it does not constitute bank certification, bank approval, or a bank-guaranteed title.
          </p>
        </div>
      </div>
    </div>
  );
};
