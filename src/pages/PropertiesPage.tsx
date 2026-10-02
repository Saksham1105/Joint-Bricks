import React, { useState } from 'react';
import { PropertyCard, type PropertyCardProps } from '../components/common/PropertyCard';
import { EmptyState } from '../components/common/States';
import { SEO } from '../components/common/SEO';
import { Filter, AlertCircle } from 'lucide-react';

const OPPORTUNITIES_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Commercial Retail Opportunities — Pre-Launch Pipeline | Joint Bricks",
  "description": "Pre-launch commercial retail investment opportunities screened against a minimum 5% targeted acquisition yield benchmark in Mumbai, Delhi NCR, and Pune. Joint Bricks SPV structure.",
  "url": "https://jointbricks.com/opportunities"
};

export const PropertiesPage: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>('All');
  const [showSample, setShowSample] = useState(true);

  const sampleProperties: PropertyCardProps[] = [
    {
      id: "sample-mumbai-retail",
      name: "Pre-Leased Commercial Retail Unit — Mumbai Catchment",
      location: "Bandra West, MMR, Mumbai",
      status: "Sample Structure",
      targetedYield: "5.2% p.a.",
      minInvestment: "₹10 Lakh",
      propertyValue: "₹2.5 Crore",
      tenant: "Grade-A Retail Brand (Sample)",
      leaseTenure: "9 Years (5-Yr Initial Lease Commitment)",
      imageUrl: "/images/commercial-retail-facade.jpg",
      isSample: true
    },
    {
      id: "sample-pune-retail",
      name: "High-Street Retail Shop — Pune Commercial Corridor",
      location: "Koregaon Park, Pune",
      status: "Sample Structure",
      targetedYield: "5.0% p.a.",
      minInvestment: "₹10 Lakh",
      propertyValue: "₹1.8 Crore",
      tenant: "Established F&B Retail Tenant (Sample)",
      leaseTenure: "6 Years",
      imageUrl: "/images/urban-commercial-corridor.jpg",
      isSample: true
    },
    {
      id: "sample-delhi-ncr",
      name: "Pre-Leased Commercial Unit — Delhi NCR Corridor",
      location: "Golf Course Road Vicinity, Gurgaon",
      status: "Sample Structure",
      targetedYield: "5.5% p.a.",
      minInvestment: "₹10 Lakh",
      propertyValue: "₹3.2 Crore",
      tenant: "Banking & Financial Services Tenant (Sample)",
      leaseTenure: "12 Years",
      imageUrl: "/images/hero-architecture.jpg",
      isSample: true
    }
  ];

  const filteredProperties = sampleProperties.filter(prop => {
    if (selectedCity === 'All') return true;
    if (selectedCity === 'Mumbai') return prop.location.includes('Mumbai');
    if (selectedCity === 'Pune') return prop.location.includes('Pune');
    if (selectedCity === 'Delhi NCR') return prop.location.includes('Gurgaon') || prop.location.includes('Delhi');
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <SEO
        title="Commercial Retail Opportunities — Pre-Launch Pipeline | Joint Bricks"
        description="Explore pre-launch commercial retail opportunities in Mumbai, Delhi NCR & Pune screened at 5% targeted yield via SPV shares. Policy min ₹10L. Not an SM-REIT."
        canonicalUrl="https://jointbricks.com/opportunities"
        schema={OPPORTUNITIES_SCHEMA}
      />
      
      {/* Page Header Dossier */}
      <div className="bg-[#0B0B0A] text-[#FAF8F5] border border-[#23221E] rounded-xs p-8 sm:p-14 text-center max-w-4xl mx-auto space-y-4 relative corner-crosshair">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#BFA272]/15 border border-[#BFA272]/30 text-[10px] font-mono tracking-[0.25em] text-[#D4BA8C] uppercase">
          <span>PIPELINE ARCHIVE · COMING SOON</span>
        </div>
        <h1 className="font-serif-display text-4xl sm:text-6xl font-light tracking-tight text-[#FAF8F5]">
          Commercial Retail Opportunity Archive
        </h1>
        <p className="text-xs sm:text-sm text-[#BCB8AD] max-w-2xl mx-auto leading-relaxed">
          Joint Bricks is currently preparing its inaugural pipeline. Every prospective property under evaluation is pre-leased, screened against our ≥ 5.0% targeted acquisition rental-yield benchmark, and ring-fenced within a dedicated SPV.
        </p>
      </div>

      {/* Honest Status & Pre-Launch Platform Banner */}
      <div className="bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs relative corner-crosshair">
        <div className="flex items-start gap-3.5">
          <AlertCircle className="w-5 h-5 text-[#BFA272] flex-shrink-0 mt-0.5" />
          <div className="text-xs text-[#47453F] leading-relaxed">
            <span className="font-semibold text-[#0F0F0E] font-mono block mb-1">Pre-Launch Platform Status Notice</span>
            Joint Bricks Propshare Private Limited is newly incorporated and in an early stage; live investments are not active on public record. The dossiers below represent illustrative sample structures designed to demonstrate our SPV modeling, underwriting metrics, and reporting format.
          </div>
        </div>

        <button
          onClick={() => setShowSample(!showSample)}
          className={`px-6 py-2.5 text-xs font-mono font-semibold uppercase tracking-[0.16em] rounded-xs border transition-all whitespace-nowrap cursor-pointer flex-shrink-0 ${
            showSample
              ? 'bg-[#0B0B0A] text-[#FAF8F5] border-[#0B0B0A]'
              : 'bg-[#F4F0E6] text-[#0F0F0E] border-[#DDD5C5] hover:bg-[#EAE4D5]'
          }`}
        >
          {showSample ? "Hide Sample Dockets" : "Inspect Sample Dockets"}
        </button>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-[#F4F0E6] border border-[#DDD5C5] rounded-xs">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-[#827E74]" />
          <span className="text-xs font-mono font-semibold text-[#0F0F0E] uppercase tracking-wider">
            Filter by Corridor:
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {['All', 'Mumbai', 'Delhi NCR', 'Pune'].map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-xs transition-colors cursor-pointer ${
                selectedCity === city
                  ? 'bg-[#0B0B0A] text-[#FAF8F5]'
                  : 'bg-[#FAF8F5] text-[#47453F] border border-[#DDD5C5] hover:bg-[#EAE4D5]'
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      {/* Directory Content */}
      {showSample ? (
        <div className="space-y-6">
          <div className="p-3.5 bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs text-xs font-mono text-[#827E74] text-center">
            <strong>COMPLIANCE NOTICE:</strong> The sample structures below illustrate our underwriting format and diligence metrics. They do not constitute current offers, securities offerings, or live property sales.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProperties.map((prop) => (
              <PropertyCard key={prop.id} {...prop} />
            ))}
          </div>
        </div>
      ) : (
        <EmptyState
          title="Opportunities Preparing for Launch"
          description="Joint Bricks is currently screening pre-leased commercial retail storefronts across Mumbai, Delhi NCR, and Pune. No live properties are listed at this stage. Click below to inspect our illustrative sample SPV structures."
          actionText="Review Sample Opportunity Structures"
          onAction={() => setShowSample(true)}
        />
      )}

      {/* Bottom Legal Guardrail */}
      <div className="p-7 bg-[#0B0B0A] text-[#FAF8F5] border border-[#23221E] rounded-xs text-xs font-mono space-y-2 relative corner-crosshair">
        <span className="text-[#BFA272] font-semibold uppercase tracking-wider block">
          Regulatory & Structural Guardrail
        </span>
        <p className="text-[#BCB8AD] leading-relaxed">
          Joint Bricks is not an SM-REIT and is not SEBI-registered. 5% targeted rental yield is an acquisition-stage screening benchmark, not a guaranteed return. Investors participate through shares in property-specific Private Limited SPVs that own the underlying property; investors do not hold direct physical title. Minimum holding period is 1 year.
        </p>
      </div>

    </div>
  );
};
