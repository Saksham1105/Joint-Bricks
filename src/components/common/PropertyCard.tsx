import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { Tooltip } from './Tooltip';

export interface PropertyCardProps {
  id: string;
  name: string;
  location: string;
  status: 'Coming Soon' | 'Pre-Launch' | 'Sample Structure';
  targetedYield: string;
  minInvestment: string;
  propertyValue: string;
  tenant?: string;
  leaseTenure?: string;
  imageUrl?: string;
  isSample?: boolean;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  name,
  location,
  targetedYield,
  minInvestment,
  propertyValue,
  tenant = "Grade-A Retail Brand (Sample)",
  leaseTenure = "9 Years (5-Yr Initial Lease Term)",
  imageUrl = "/images/commercial-retail-facade.jpg",
  isSample = true,
}) => {
  return (
    <div className="dossier-card rounded-xs overflow-hidden flex flex-col justify-between group transition-all duration-300 corner-crosshair">
      <div>
        {/* Photography & Architectural Framing */}
        <div className="relative h-60 bg-[#E5DFC8] overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A] via-[#0B0B0A]/40 to-transparent" />
          
          {/* Top Badges */}
          <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2">
            <span className="bg-[#BFA272]/20 backdrop-blur-md text-[#FAF8F5] border border-[#BFA272]/40 text-[9px] font-mono font-semibold px-2 py-0.5 rounded-xs uppercase tracking-wider">
              PRE-LAUNCH PIPELINE
            </span>
            {isSample && (
              <span className="bg-[#0B0B0A]/90 backdrop-blur-md text-[#BCB8AD] text-[9px] font-mono px-2 py-0.5 rounded-xs border border-[#23221E] uppercase tracking-wider">
                SAMPLE DOSSIER
              </span>
            )}
          </div>

          {/* Bottom Title & Geolocation */}
          <div className="absolute bottom-3 inset-x-3">
            <div className="flex items-center gap-1.5 text-[11px] text-[#D4BA8C] mb-1 font-mono">
              <MapPin className="w-3 h-3 text-[#BFA272]" />
              <span className="truncate">{location}</span>
            </div>
            <h3 className="font-serif-display text-xl font-bold text-[#FAF8F5] leading-snug drop-shadow-sm group-hover:text-[#D4BA8C] transition-colors">
              {name}
            </h3>
          </div>
        </div>

        {/* Financial & Tenancy Metrics Strip */}
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4 pb-4 border-b border-[#DDD5C5]">
            <div>
              <div className="text-[10px] uppercase font-mono font-semibold text-[#827E74] tracking-wider flex items-center gap-1">
                <span>Targeted Yield</span>
                <Tooltip type="yield" term="Targeted Yield" />
              </div>
              <div className="text-2xl font-bold text-[#0F0F0E] font-mono-nums mt-0.5">
                {targetedYield}
              </div>
              <span className="text-[9px] text-[#827E74] font-mono block mt-0.5">
                Screening Benchmark
              </span>
            </div>

            <div>
              <div className="text-[10px] uppercase font-mono font-semibold text-[#827E74] tracking-wider">
                Min Ticket
              </div>
              <div className="text-2xl font-bold text-[#0F0F0E] font-mono-nums mt-0.5">
                {minInvestment}
              </div>
              <span className="text-[9px] text-[#827E74] font-mono block mt-0.5">
                Company Policy
              </span>
            </div>
          </div>

          <div className="space-y-2.5 text-xs text-[#47453F]">
            <div className="flex items-center justify-between">
              <span className="text-[#827E74] font-mono text-[11px]">Illustrative Valuation:</span>
              <span className="font-semibold text-[#0F0F0E] font-mono-nums">{propertyValue}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#827E74] font-mono text-[11px]">Tenant Quality:</span>
              <span className="font-medium text-[#0F0F0E] truncate max-w-[160px]">{tenant}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#827E74] font-mono text-[11px]">Lease Term:</span>
              <span className="font-medium text-[#0F0F0E]">{leaseTenure}</span>
            </div>
          </div>

          {/* Explicit Illustrative Clarification */}
          <div className="pt-3 border-t border-[#DDD5C5]/70 flex items-center gap-1.5 text-[10px] font-mono text-[#827E74]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#BFA272] flex-shrink-0" />
            <span>Sample structure for design reference only. Not an active offering.</span>
          </div>
        </div>
      </div>

      {/* Card Action Link */}
      <div className="p-6 pt-0">
        <Link
          to={`/opportunities/${id}`}
          className="w-full py-3 px-4 bg-[#0B0B0A] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.16em] rounded-xs flex items-center justify-center gap-2 group-hover:bg-[#BFA272] group-hover:text-[#0B0B0A] transition-all duration-300"
        >
          <span>Inspect Sample Dossier</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
