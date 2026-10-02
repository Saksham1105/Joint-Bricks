import React from 'react';
import { Building2 } from 'lucide-react';

interface TenantCardProps {
  tenantName?: string;
  industryCategory?: string;
  leaseTenureYears?: number;
  initialLeaseCommitmentYears?: number;
  leaseExpiryDate?: string;
}

export const TenantCard: React.FC<TenantCardProps> = ({
  tenantName = "[TENANT NAME — TO BE CONFIRMED]",
  industryCategory = "Retail / Commercial",
  leaseTenureYears,
  initialLeaseCommitmentYears
}) => {
  return (
    <div className="bg-[#FAF8F5] border border-[#DDD6C9] p-6 rounded-sm space-y-4 shadow-xs">
      <div className="flex items-center gap-3.5">
        <div className="w-10 h-10 rounded-sm bg-[#F4EFEA] border border-[#DDD6C9] flex items-center justify-center text-[#B79A63]">
          <Building2 className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[10px] font-mono font-bold text-[#8D8A82] uppercase tracking-wider block">
            Pre-Leased Operating Tenant Profile
          </span>
          <h4 className="font-serif-display text-xl font-bold text-[#11110F]">
            {tenantName}
          </h4>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[#DDD6C9] text-xs">
        <div>
          <span className="text-[10px] text-[#8D8A82] block font-mono uppercase">Industry Sector</span>
          <span className="font-semibold text-[#11110F]">{industryCategory}</span>
        </div>
        <div>
          <span className="text-[10px] text-[#8D8A82] block font-mono uppercase">Initial Lease Commitment</span>
          <span className="font-semibold text-[#11110F] font-mono-nums">
            {initialLeaseCommitmentYears ? `${initialLeaseCommitmentYears} Years` : '[CONFIRMED ON DOCKET]'}
          </span>
        </div>
        <div>
          <span className="text-[10px] text-[#8D8A82] block font-mono uppercase">Total Lease Tenure</span>
          <span className="font-semibold text-[#11110F] font-mono-nums">
            {leaseTenureYears ? `${leaseTenureYears} Years` : '[CONFIRMED ON DOCKET]'}
          </span>
        </div>
      </div>
    </div>
  );
};
