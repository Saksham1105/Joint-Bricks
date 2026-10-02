import React, { useState } from 'react';
import { Info } from 'lucide-react';

export interface TooltipProps {
  term: string;
  explainer?: string;
  type?: string;
  children?: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({
  term,
  explainer = "Special Purpose Vehicle (Private Limited Company holding legal title to property).",
  children
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <span className="relative inline-block border-b border-dotted border-[#B79A63] cursor-help group">
      <span
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={() => setIsVisible(!isVisible)}
        className="font-semibold text-[#11110F] hover:text-[#B79A63] transition-colors inline-flex items-center gap-0.5"
      >
        {children || term}
        <Info className="w-3 h-3 text-[#B79A63] inline-block opacity-80" />
      </span>

      {isVisible && (
        <span className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-[#11110F] text-[#FAF8F5] text-xs leading-normal rounded-sm shadow-2xl border border-[#2A2A25] block pointer-events-none">
          <span className="font-bold text-[#B79A63] block mb-1 text-[10px] uppercase tracking-wider font-mono">
            {term} Explainer
          </span>
          <span className="text-[#BDB9B0] text-[11px] block">{explainer}</span>
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#11110F]" />
        </span>
      )}
    </span>
  );
};
