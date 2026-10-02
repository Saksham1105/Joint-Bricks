import React from 'react';
import { Check } from 'lucide-react';
import { Tooltip } from './Tooltip';

export const ComparisonTable: React.FC = () => {
  const comparisons = [
    {
      feature: "Minimum Capital Required",
      direct: "₹1 Crore – ₹20 Crore+ (Sole acquisition of entire asset)",
      spv: "₹10 Lakh per property (Joint Bricks company policy)",
      highlight: true,
    },
    {
      feature: "Ownership Structure",
      direct: "Direct Title Deed (High legal complexity and stamp friction)",
      spv: "Proportionate Equity Shares in dedicated SPV (SPV holds title)",
      tooltipType: "spv",
    },
    {
      feature: "Due Diligence Layer",
      direct: "Self-sourced / Individual legal counsel & architect fees",
      spv: "11-Point Matrix + Supplementary Bank Loan Review",
      highlight: false,
    },
    {
      feature: "Asset Type & Tenancy",
      direct: "Broad / Often unverified leases or vacant units",
      spv: "Pre-Leased Commercial Retail Only (5% Targeted Yield Screen)",
      tooltipType: "yield",
    },
    {
      feature: "Tenant & Facility Management",
      direct: "Full personal landlord liability & tenant coordination",
      spv: "Managed via SPV Structure & Professional Property Management",
    },
    {
      feature: "Portfolio Diversification",
      direct: "Concentrated capital in a single high-value unit",
      spv: "Ability to participate across multiple vetted SPV properties",
    },
    {
      feature: "Ongoing Reporting",
      direct: "Manual accounting and informal tenant records",
      spv: "Structured Monthly Performance & Annual Audited Financials",
    }
  ];

  return (
    <div className="bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs p-6 sm:p-10 my-8 relative corner-crosshair">
      <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
        <span className="text-[10px] font-mono font-medium text-[#967A46] uppercase tracking-[0.2em] bg-[#BFA272]/15 px-2.5 py-0.5 rounded-xs border border-[#BFA272]/30 inline-block">
          Comparative Analysis
        </span>
        <h3 className="font-serif-display text-2xl sm:text-3xl font-light text-[#0F0F0E]">
          Direct Sole Ownership vs. SPV Shareholding
        </h3>
        <p className="text-xs sm:text-sm text-[#47453F] leading-relaxed">
          Evaluating the institutional differences between acquiring a commercial property individually versus participating through a dedicated SPV.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[640px]">
          <thead>
            <tr className="border-b border-[#0F0F0E]">
              <th className="py-4 px-4 text-xs font-mono font-semibold text-[#0F0F0E] uppercase tracking-wider w-1/3">
                Evaluation Parameter
              </th>
              <th className="py-4 px-4 text-xs font-mono font-semibold text-[#827E74] uppercase tracking-wider w-1/3 bg-[#F4F0E6]">
                Direct Commercial Ownership
              </th>
              <th className="py-4 px-4 text-xs font-mono font-semibold text-[#BFA272] uppercase tracking-wider w-1/3 bg-[#0B0B0A] text-[#FAF8F5] rounded-t-xs">
                Joint Bricks SPV Model
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#DDD5C5] text-xs">
            {comparisons.map((row, idx) => (
              <tr key={idx} className={row.highlight ? "bg-[#BFA272]/10 font-semibold" : "hover:bg-[#F4F0E6]/50"}>
                <td className="py-4 px-4 font-medium text-[#0F0F0E] flex items-center gap-1.5">
                  <span>{row.feature}</span>
                  {row.tooltipType && <Tooltip type={row.tooltipType as any} term={row.feature} />}
                </td>
                <td className="py-4 px-4 text-[#47453F] bg-[#F4F0E6]/50 font-mono text-[11px]">
                  {row.direct}
                </td>
                <td className="py-4 px-4 text-[#0F0F0E] bg-[#0B0B0A]/5 font-medium border-l border-[#BFA272]/40">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#285A42] flex-shrink-0 mt-0.5" />
                    <span>{row.spv}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 p-4 bg-[#F4F0E6] border border-[#DDD5C5] rounded-xs text-[11px] text-[#47453F] font-mono text-center">
        Note: Property-specific SPV structures and ₹10 lakh ticket sizes are established mechanisms in commercial real estate. Joint Bricks emphasizes disciplined retail catchment sourcing, a 5% acquisition yield benchmark, and a supplementary bank financing review layer.
      </div>
    </div>
  );
};
