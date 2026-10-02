// Sample Reference Dockets aligned with Joint Bricks Master Company Profile
// Pre-launch design reference structures only.

export interface SampleProperty {
  id: string;
  slug: string;
  title: string;
  location: string;
  city: 'Mumbai' | 'Delhi NCR' | 'Pune';
  assetType: 'Commercial Retail';
  status: 'Pre-Launch / Coming Soon';
  targetedYield: string;
  minimumInvestment: string;
  minimumInvestmentNum: number;
  tenure: string;
  holdingPeriod: string;
  tenant: {
    name: string;
    industry: string;
    leaseTenure: string;
  };
  spvType: string;
  isSample: boolean;
}

export const PROPERTIES_DATA: SampleProperty[] = [
  {
    id: 'sample-retail-mumbai',
    slug: 'sample-retail-mumbai',
    title: 'Pre-Leased Commercial Retail Unit — Mumbai Catchment (Sample)',
    location: 'Bandra West, MMR, Mumbai',
    city: 'Mumbai',
    assetType: 'Commercial Retail',
    status: 'Pre-Launch / Coming Soon',
    targetedYield: '5.2% p.a. (Targeted Benchmark)',
    minimumInvestment: '₹10 Lakh',
    minimumInvestmentNum: 1000000,
    tenure: 'Minimum 1 Year',
    holdingPeriod: 'Minimum holding period: 1 year (No early exit before 1 year)',
    tenant: {
      name: 'Grade-A Retail Brand (Sample)',
      industry: 'Fashion / Lifestyle Retail',
      leaseTenure: '9 Years (5-Yr Tenant Lease Term)'
    },
    spvType: 'Dedicated Private Limited SPV',
    isSample: true
  },
  {
    id: 'sample-retail-pune',
    slug: 'sample-retail-pune',
    title: 'High-Street Retail Shop — Pune Commercial Corridor (Sample)',
    location: 'Koregaon Park, Pune',
    city: 'Pune',
    assetType: 'Commercial Retail',
    status: 'Pre-Launch / Coming Soon',
    targetedYield: '5.0% p.a. (Targeted Benchmark)',
    minimumInvestment: '₹10 Lakh',
    minimumInvestmentNum: 1000000,
    tenure: 'Minimum 1 Year',
    holdingPeriod: 'Minimum holding period: 1 year (No early exit before 1 year)',
    tenant: {
      name: 'Established F&B Retail Tenant (Sample)',
      industry: 'Food & Beverage',
      leaseTenure: '6 Years (3-Yr Tenant Lease Term)'
    },
    spvType: 'Dedicated Private Limited SPV',
    isSample: true
  },
  {
    id: 'sample-retail-delhi-ncr',
    slug: 'sample-retail-delhi-ncr',
    title: 'Pre-Leased Commercial Unit — Delhi NCR (Sample)',
    location: 'Golf Course Road Vicinity, Gurgaon',
    city: 'Delhi NCR',
    assetType: 'Commercial Retail',
    status: 'Pre-Launch / Coming Soon',
    targetedYield: '5.5% p.a. (Targeted Benchmark)',
    minimumInvestment: '₹10 Lakh',
    minimumInvestmentNum: 1000000,
    tenure: 'Minimum 1 Year',
    holdingPeriod: 'Minimum holding period: 1 year (No early exit before 1 year)',
    tenant: {
      name: 'Banking & Financial Services Tenant (Sample)',
      industry: 'Banking / Retail',
      leaseTenure: '12 Years (5-Yr Tenant Lease Term)'
    },
    spvType: 'Dedicated Private Limited SPV',
    isSample: true
  }
];
