import React from 'react';
import { ShieldCheck, Lock, FileText, CheckCircle2 } from 'lucide-react';

export const TrustBlock: React.FC = () => {
  const trustPoints = [
    {
      title: "Property-Specific SPV Structure",
      desc: "Each property is ring-fenced within a dedicated Private Limited company. Investor shareholding is recorded and issued strictly proportional to capital contributed.",
      icon: <ShieldCheck className="w-5 h-5 text-[#BFA272]" />,
      tag: "Ring-Fenced Governance"
    },
    {
      title: "11-Point Due Diligence",
      desc: "Comprehensive legal, financial, technical, tenant/lease, and micro-market vetting — complemented by a supplementary bank-financing verification layer.",
      icon: <CheckCircle2 className="w-5 h-5 text-[#BFA272]" />,
      tag: "Institutional Diligence"
    },
    {
      title: "Segregated Capital Handling",
      desc: "Investor capital is segregated from operating funds prior to property acquisition, with allocations directly tied to the property-specific SPV.",
      icon: <Lock className="w-5 h-5 text-[#BFA272]" />,
      tag: "Fund Protection"
    },
    {
      title: "Transparent Reporting Cadence",
      desc: "Structured monthly performance reports and annual audited financials provided to shareholders, ensuring continuous asset visibility.",
      icon: <FileText className="w-5 h-5 text-[#BFA272]" />,
      tag: "Verified Transparency"
    }
  ];

  return (
    <div className="bg-[#0B0B0A] text-[#FAF8F5] border border-[#23221E] rounded-xs p-8 sm:p-14 relative corner-crosshair">
      <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
        <span className="text-[10px] font-mono font-medium text-[#BFA272] uppercase tracking-[0.25em] bg-[#BFA272]/15 px-3 py-1 rounded-xs border border-[#BFA272]/30 inline-block">
          INSTITUTIONAL INTEGRITY
        </span>
        <h3 className="font-serif-display text-3xl sm:text-4xl font-light text-[#FAF8F5]">
          Built on Structure, Not Speculation
        </h3>
        <p className="text-xs sm:text-sm text-[#BCB8AD] leading-relaxed">
          Grounded in corporate governance, legal ring-fencing, and disciplined asset diligence — without promotional hype or unverified claims.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trustPoints.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#141412] border border-[#23221E] p-6 sm:p-7 rounded-xs flex flex-col justify-between hover:border-[#BFA272]/60 transition-colors relative corner-crosshair"
          >
            <div>
              <div className="w-10 h-10 rounded-xs bg-[#0B0B0A] border border-[#23221E] flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <h4 className="font-serif-display text-lg font-medium text-[#FAF8F5] mb-2">
                {item.title}
              </h4>
              <p className="text-xs text-[#827E74] leading-relaxed">
                {item.desc}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#23221E]">
              <span className="text-[9px] font-mono uppercase tracking-wider text-[#BFA272]">
                {item.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
