import React, { useState } from 'react';
import { Info, ShieldAlert } from 'lucide-react';
import { Tooltip } from './Tooltip';

interface FinancialBreakdownProps {
  initialPropertyVal?: number;
  initialInvestorTicket?: number;
}

export const FinancialBreakdown: React.FC<FinancialBreakdownProps> = ({
  initialPropertyVal = 10000000, // ₹1 crore illustrative reference
  initialInvestorTicket = 1000000, // ₹10 lakh minimum company policy
}) => {
  const [ticket, setTicket] = useState<number>(initialInvestorTicket);

  const spvSharePct = (ticket / initialPropertyVal) * 100;
  // Based strictly on 5% minimum acquisition screening benchmark (not a guaranteed return)
  const illustrativeGrossAnnual = ticket * 0.05;
  const illustrativeGrossMonthly = illustrativeGrossAnnual / 12;

  return (
    <div className="bg-[#FAF8F5] border border-[#DDD6C9] rounded-sm p-6 sm:p-8 my-8 space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#DDD6C9] pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-mono font-bold text-[#917743] uppercase tracking-wider bg-[#B79A63]/15 px-2.5 py-0.5 rounded-xs border border-[#B79A63]/30">
              Hypothetical Screening Model
            </span>
            <span className="bg-[#11110F] text-[#FAF8F5] text-[10px] font-mono px-2 py-0.5 rounded-xs uppercase tracking-wider">
              Illustrative Only
            </span>
          </div>
          <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#11110F] mt-1">
            Proportional Participation Mechanics
          </h3>
        </div>

        <div className="bg-[#B79A63]/10 text-[#917743] border border-[#B79A63]/30 text-xs font-semibold px-3 py-1.5 rounded flex items-center gap-1.5">
          <Info className="w-4 h-4 flex-shrink-0 text-[#B79A63]" />
          <span>Mechanics demonstration — not an investment forecast</span>
        </div>
      </div>

      {/* Immediate Prominent Explanatory Banner */}
      <div className="p-3.5 bg-[#FAF8F5] border-l-2 border-[#B79A63] text-xs text-[#4A4843] leading-relaxed">
        <strong>Illustrative only.</strong> This model does not represent a guaranteed return, projected investor payout, or property-specific investment recommendation. It demonstrates how proportional shareholding functions mathematically in a hypothetical ₹1 Crore property-specific SPV.
      </div>

      {/* Interactive Controls Section */}
      <div className="bg-[#F4EFEA] p-6 rounded-sm border border-[#DDD6C9] space-y-5">
        <div className="text-xs font-mono font-bold text-[#11110F] tracking-wide border-b border-[#DDD6C9] pb-2 uppercase">
          Sample Contribution Parameter
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center text-xs font-semibold text-[#11110F]">
            <span>Illustrative Investor Contribution</span>
            <span className="font-mono-nums text-base font-bold text-[#917743]">
              ₹{(ticket / 100000).toFixed(1)} Lakh
            </span>
          </div>
          <input
            type="range"
            min={1000000}
            max={5000000}
            step={100000}
            value={ticket}
            onChange={(e) => setTicket(Number(e.target.value))}
            aria-label="Illustrative Investor Contribution in Rupees"
            className="w-full cursor-pointer accent-[#B79A63]"
          />
          <div className="flex justify-between text-[11px] text-[#8D8A82] font-mono-nums pt-1">
            <span>₹10 Lakh (Company Minimum Policy)</span>
            <span>₹50 Lakh (Illustrative Cap)</span>
          </div>
        </div>
      </div>

      {/* Calculated Results Grid — Proportional Mechanics */}
      <div>
        <div className="text-xs font-mono font-bold text-[#8D8A82] tracking-wider mb-3 uppercase">
          Proportional Shareholding Mechanics (Sample ₹1 Cr SPV)
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* SPV Shareholding */}
          <div className="bg-[#FAF8F5] p-5 rounded-sm border border-[#DDD6C9] space-y-1">
            <span className="text-[10px] font-mono uppercase font-bold text-[#8D8A82] tracking-wider block">
              Proportional Equity
            </span>
            <div className="text-2xl font-bold text-[#11110F] font-mono-nums">
              {spvSharePct.toFixed(1)}%
            </div>
            <span className="text-[11px] text-[#4A4843] block">
              Equity shareholding in SPV
            </span>
          </div>

          {/* Screening Benchmark Gross Annual Share */}
          <div className="bg-[#FAF8F5] p-5 rounded-sm border border-[#DDD6C9] space-y-1">
            <div className="flex items-center justify-between text-[10px] font-mono uppercase font-bold text-[#8D8A82] tracking-wider">
              <span>Gross Benchmark Share</span>
              <Tooltip type="yield" term="Benchmark" />
            </div>
            <div className="text-2xl font-bold text-[#2F634A] font-mono-nums">
              ~₹{Math.round(illustrativeGrossAnnual).toLocaleString('en-IN')}/yr
            </div>
            <span className="text-[11px] text-[#4A4843] block">
              At 5% acquisition benchmark
            </span>
          </div>

          {/* Monthly Gross Pro-rata Share */}
          <div className="bg-[#FAF8F5] p-5 rounded-sm border border-[#DDD6C9] space-y-1">
            <span className="text-[10px] font-mono uppercase font-bold text-[#8D8A82] tracking-wider block">
              Indicative Monthly Share
            </span>
            <div className="text-2xl font-bold text-[#11110F] font-mono-nums">
              ~₹{Math.round(illustrativeGrossMonthly).toLocaleString('en-IN')}/mo
            </div>
            <span className="text-[11px] text-[#4A4843] block">
              Before net deductions
            </span>
          </div>

          {/* Holding Period Requirement */}
          <div className="bg-[#B79A63]/10 p-5 rounded-sm border border-[#B79A63] space-y-1">
            <span className="text-[10px] font-mono uppercase font-bold text-[#917743] tracking-wider block">
              Holding Requirement
            </span>
            <div className="text-xl font-bold text-[#11110F] font-mono-nums">
              Min. 1 Year
            </div>
            <span className="text-[11px] font-medium text-[#4A4843] block">
              No early exit before 1 year
            </span>
          </div>
        </div>
      </div>

      {/* Mandatory Statutory Disclaimer Box */}
      <div className="p-4 bg-[#11110F] text-[#FAF8F5] rounded-sm text-xs leading-relaxed flex items-start gap-3 border border-[#2A2A25]">
        <ShieldAlert className="w-5 h-5 text-[#B79A63] flex-shrink-0 mt-0.5" />
        <div className="font-mono text-[11px] space-y-1">
          <span className="font-bold text-[#B79A63] block tracking-wider uppercase">
            Mandatory Illustrative Disclaimer
          </span>
          <p>
            Illustrative only. This model does not represent a guaranteed return, projected investor payout, or property-specific investment recommendation. 5% represents Joint Bricks&apos; targeted acquisition screening benchmark for property evaluation, not an assured return. Actual distributions are net of applicable property management, tax, insurance, and SPV maintenance expenses. Minimum holding period: 1 year. No early exit before 1 year. After 1 year, exit/transfer is subject to applicable SPV and share-transfer terms.
          </p>
        </div>
      </div>
    </div>
  );
};
