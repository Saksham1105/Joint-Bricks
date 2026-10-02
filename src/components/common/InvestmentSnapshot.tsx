import React from 'react';
import { Tooltip } from './Tooltip';
import { ShieldCheck, Info } from 'lucide-react';

interface InvestmentSnapshotProps {
  targetedYield?: string;
  minInvestment?: string;
  propertyValue?: string;
  holdingPeriod?: string;
  spvName?: string;
  isIllustrative?: boolean;
}

export const InvestmentSnapshot: React.FC<InvestmentSnapshotProps> = ({
  targetedYield = "5% p.a. (Targeted)",
  minInvestment = "₹10 Lakh",
  propertyValue = "₹1 Cr – ₹20 Cr (Indicative)",
  holdingPeriod = "Min. 1 Year (No early exit)",
  spvName = "[SPV NAME — PROPERTY SPECIFIC]",
  isIllustrative = true,
}) => {
  return (
    <div className="bg-[#11110F] text-[#FAF8F5] border border-[#2A2A25] rounded-sm p-6 sm:p-8 my-8 relative overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#2A2A25] pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-sm bg-[#181815] text-[#B79A63] border border-[#2A2A25] flex items-center justify-center">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-serif-display text-xl font-bold text-[#FAF8F5]">
              Investment Structure Snapshot
            </h3>
            <span className="text-[11px] font-mono text-[#8D8A82]">
              Property-Specific SPV Financial Metrics
            </span>
          </div>
        </div>

        {isIllustrative && (
          <span className="bg-[#B79A63]/15 text-[#CBB482] border border-[#B79A63]/30 text-[10px] font-mono font-bold px-3 py-1 rounded-xs tracking-wider uppercase flex items-center gap-1.5">
            <Info className="w-3 h-3 text-[#B79A63]" />
            <span>Illustrative Reference · Not Guaranteed</span>
          </span>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {/* Targeted Yield */}
        <div className="bg-[#181815] p-4 rounded-sm border border-[#2A2A25]">
          <div className="flex items-center justify-between text-[#8D8A82] text-[10px] font-mono uppercase tracking-wider mb-1">
            <span>Targeted Yield</span>
            <Tooltip type="yield" term="Targeted Yield" />
          </div>
          <div className="text-xl font-bold text-[#FAF8F5] font-mono-nums">{targetedYield}</div>
          <span className="text-[10px] font-mono text-[#B79A63] block mt-1">
            Acquisition Benchmark
          </span>
        </div>

        {/* Min Investment */}
        <div className="bg-[#181815] p-4 rounded-sm border border-[#2A2A25]">
          <div className="text-[#8D8A82] text-[10px] font-mono uppercase tracking-wider mb-1">
            Min. Investment
          </div>
          <div className="text-xl font-bold text-[#FAF8F5] font-mono-nums">{minInvestment}</div>
          <span className="text-[10px] font-mono text-[#8D8A82] block mt-1">
            Company Policy
          </span>
        </div>

        {/* Property Value */}
        <div className="bg-[#181815] p-4 rounded-sm border border-[#2A2A25]">
          <div className="text-[#8D8A82] text-[10px] font-mono uppercase tracking-wider mb-1">
            Property Value
          </div>
          <div className="text-lg font-bold text-[#FAF8F5] font-mono-nums">{propertyValue}</div>
          <span className="text-[10px] font-mono text-[#8D8A82] block mt-1">
            Indicative Scope
          </span>
        </div>

        {/* Holding Period */}
        <div className="bg-[#181815] p-4 rounded-sm border border-[#2A2A25]">
          <div className="text-[#8D8A82] text-[10px] font-mono uppercase tracking-wider mb-1">
            Holding Period
          </div>
          <div className="text-sm font-semibold text-[#FAF8F5] font-mono-nums truncate mt-0.5">{holdingPeriod}</div>
          <span className="text-[10px] font-mono text-[#8D8A82] block mt-1">
            No Early Exit
          </span>
        </div>

        {/* SPV Name */}
        <div className="bg-[#181815] p-4 rounded-sm border border-[#2A2A25] col-span-2 md:col-span-1">
          <div className="flex items-center justify-between text-[#8D8A82] text-[10px] font-mono uppercase tracking-wider mb-1">
            <span>SPV Entity</span>
            <Tooltip type="spv" term="SPV" />
          </div>
          <div className="text-xs font-mono font-semibold text-[#B79A63] truncate mt-1">{spvName}</div>
          <span className="text-[10px] font-mono text-[#8D8A82] block mt-1">
            Title Holding SPV
          </span>
        </div>
      </div>
    </div>
  );
};
