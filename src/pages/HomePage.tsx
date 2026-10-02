import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Search,
  ShieldCheck,
  Scale,
  Layers,
  Lock,
  Compass
} from 'lucide-react';
import { InvestmentStructureDiagram } from '../components/common/InvestmentStructureDiagram';
import { DueDiligenceChecklist } from '../components/common/DueDiligenceChecklist';
import { PropertyCard, type PropertyCardProps } from '../components/common/PropertyCard';
import { ResearchCard } from '../components/common/ResearchCard';
import { FAQAccordion, type FAQItem } from '../components/common/FAQAccordion';
import { EoiDrawer } from '../components/common/EoiDrawer';
import { SEO } from '../components/common/SEO';


const HOME_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Joint Bricks — Commercial Real Estate Investment India | SPV Model",
  "description": "Joint Bricks enables investors to participate in pre-leased commercial retail properties through shares in dedicated property-specific Special Purpose Vehicles (SPVs), starting at ₹10 lakh per property. Joint Bricks Propshare Private Limited, CIN: U68100RJ2025PTC109627.",
  "url": "https://jointbricks.com/",
  "inLanguage": "en-IN",
  "about": {
    "@type": "Thing",
    "name": "Commercial Real Estate SPV Investment",
    "description": "Property-specific Special Purpose Vehicle shareholding in pre-leased commercial retail assets."
  },
  "mainEntity": {
    "@type": "ItemList",
    "name": "Commercial Real Estate Participation Workflow",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Discover Pre-Leased Commercial Retail Assets" },
      { "@type": "ListItem", "position": 2, "name": "Evaluate Screening Metrics & Due Diligence" },
      { "@type": "ListItem", "position": 3, "name": "Property-Specific SPV Shareholding Allotment" },
      { "@type": "ListItem", "position": 4, "name": "Monthly Net Rental Distributions & Reporting" }
    ]
  }
};

export const HomePage: React.FC = () => {
  const [isEoiOpen, setIsEoiOpen] = useState(false);
  const [selectedPropertyForEoi, setSelectedPropertyForEoi] = useState("Joint Bricks Capital — General Allocation Enquiry");
  const [faqCategory, setFaqCategory] = useState<string>("All");
  const [faqSearch, setFaqSearch] = useState<string>("");
  const [activeCriterion, setActiveCriterion] = useState<number>(0);

  const samplePipelineProperties: PropertyCardProps[] = [
    {
      id: "sample-retail-mumbai",
      name: "Pre-Leased Retail Shop — Mumbai Catchment",
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
      id: "sample-retail-pune",
      name: "High-Street Retail Unit — Pune Corridor",
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
      id: "sample-retail-delhi",
      name: "Pre-Leased Commercial Unit — Delhi NCR",
      location: "Golf Course Road Vicinity, Gurgaon",
      status: "Sample Structure",
      targetedYield: "5.5% p.a.",
      minInvestment: "₹10 Lakh",
      propertyValue: "₹3.2 Crore",
      tenant: "Banking & Financial Branch (Sample)",
      leaseTenure: "12 Years",
      imageUrl: "/images/hero-architecture.jpg",
      isSample: true
    }
  ];

  const screeningCriteria = [
    { num: "01", name: "Prime Micro-Market Location", desc: "Established commercial high-streets and vibrant retail corridors with dense pedestrian footfall." },
    { num: "02", name: "Footfall Density", desc: "Verifiable, organic daily pedestrian traffic and sustained consumer volume from surrounding residential belts." },
    { num: "03", name: "Transit & Metro Connectivity", desc: "Immediate access to arterial roads, metro stations, and primary urban transit intersections." },
    { num: "04", name: "Street Frontage & Visibility", desc: "Unobstructed high-street sightlines, prominent ground-floor frontage, and high vehicular exposure." },
    { num: "05", name: "Catchment Discretionary Wealth", desc: "Affluent residential catchments with verified purchasing power and resilient discretionary retail spend." },
    { num: "06", name: "Grade-A Corporate Tenant Quality", desc: "Multinational retail brands, corporate retail chains, and essential banking institutions with solid balance sheets." },
    { num: "07", name: "Lease Term & Contractual Commitments", desc: "Multi-year commercial lease agreements with contractually binding lease terms and security deposits." },
    { num: "08", name: "Rental Escalation Provisions", desc: "Contractually stipulated escalations (typically 15% every 3 years) protecting against inflationary erosion." },
    { num: "09", name: "Acquisition Price vs Market Fair Value", desc: "Strict acquisition underwriting at or below fair independent institutional valuation benchmarks." },
    { num: "10", name: "Secondary Market Tenant Liquidity", desc: "Strong micro-market tenant demand ensuring rapid re-leasing in the event of tenant transition." },
    { num: "11", name: "Long-Term Capital Preservation", desc: "Clear institutional exit pathways, intrinsic underlying land value, and long-term asset resiliency." },
  ];

  const researchArticles = [
    {
      slug: "understanding-spv-real-estate-investment",
      title: "Understanding SPV-Based Real Estate Investment",
      excerpt: "How dedicated private limited companies isolate commercial property title while enabling fractional equity shareholding under the Companies Act 2013.",
      category: "Investment Education",
      readTime: "6 min read",
      date: "[DATE — TO BE PROVIDED]",
      author: "Joint Bricks Research Desk",
      imageUrl: "/images/commercial-retail-facade.jpg"
    },
    {
      slug: "what-makes-retail-property-investment-grade",
      title: "What Makes a Commercial Retail Property Investment-Grade",
      excerpt: "Evaluating high-street catchment density, footfall indices, retail frontage, and long-term lease commitment structures in urban India.",
      category: "Commercial Retail",
      readTime: "7 min read",
      date: "[DATE — TO BE PROVIDED]",
      author: "Joint Bricks Research Desk",
      imageUrl: "/images/urban-commercial-corridor.jpg"
    },
    {
      slug: "reit-vs-sm-reit-vs-spv-fractional-ownership",
      title: "REIT vs. SM-REIT vs. SPV-Based Fractional Ownership",
      excerpt: "An educational framework comparing public REITs, Small & Medium REITs (SM-REITs), and private SPV fractional shareholding.",
      category: "Regulatory Education",
      readTime: "8 min read",
      date: "[DATE — TO BE PROVIDED]",
      author: "Joint Bricks Research Desk",
      imageUrl: "/images/hero-architecture.jpg"
    }
  ];

  const homepageFaqs: FAQItem[] = [
    {
      id: "q1",
      category: "General",
      statusTag: "[CONFIRMED FACT]",
      question: "What is Joint Bricks?",
      answer: "Joint Bricks (Joint Bricks Propshare Private Limited, CIN: U68100RJ2025PTC109627) is a commercial real-estate participation business that enables individual investors to participate in pre-leased commercial retail real estate through equity shares in dedicated, property-specific Special Purpose Vehicles (SPVs)."
    },
    {
      id: "q2",
      category: "Structure",
      statusTag: "[CONFIRMED FACT]",
      question: "What am I actually buying when I participate through Joint Bricks?",
      answer: "When you participate, you acquire registered equity shares in a dedicated Special Purpose Vehicle (a Private Limited Company) incorporated specifically to acquire and hold legal title to a single commercial property. The SPV owns the real estate; investors hold shares in the SPV pro-rata to capital contributed. Investors do not hold direct physical property title."
    },
    {
      id: "q3",
      category: "Returns",
      statusTag: "[CONFIRMED FACT]",
      question: "Is the 5% rental yield guaranteed?",
      answer: "No. The 5% p.a. figure is an acquisition-stage screening benchmark used to filter prospective commercial retail assets. It is not a guaranteed investor return, rental income, yield, or profit. Actual distributions depend on tenant lease fulfillment, property occupancy, and net SPV operating expenses."
    },
    {
      id: "q4",
      category: "Regulation",
      statusTag: "[CONFIRMED REGULATORY DISCLOSURE]",
      question: "Is Joint Bricks an SM-REIT or SEBI registered?",
      answer: "Joint Bricks is not an SM-REIT. Certain aspects of its business model may be similar to or related to functions within an SM-REIT framework, but these similarities do not constitute SM-REIT registration or SEBI-regulated status. Joint Bricks is not currently operating as a SEBI-registered SM-REIT and does not currently have SM-REIT registration or approval from SEBI."
    },
    {
      id: "q5",
      category: "Structure",
      statusTag: "[CONFIRMED METAPHOR]",
      question: "What is a 'Brick'?",
      answer: "'Bricks' represents real estate and physical property assets. A 'Brick' is a brand metaphor for participation through SPV shares. It is not a legally defined portion of a property, not registered physical title, and not a specific physical unit. The metaphor never overrides the legal structure: investors hold shares in the property-specific SPV that owns the underlying property."
    },
    {
      id: "q6",
      category: "Structure",
      statusTag: "[CONFIRMED FACT]",
      question: "What are the holding period and exit terms?",
      answer: "Investments have a minimum holding period of 1 year. There is no early exit before the 1-year minimum holding period. After 1 year, investors can exit or transfer shares subject to applicable SPV and share-transfer terms. On eventual property sale, net proceeds are distributed pro-rata."
    }
  ];

  const filteredFaqs = homepageFaqs.filter(faq => {
    const matchesCat = faqCategory === "All" || faq.category === faqCategory;
    const matchesSearch = faqSearch === "" || 
      faq.question.toLowerCase().includes(faqSearch.toLowerCase()) || 
      faq.answer.toLowerCase().includes(faqSearch.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleOpenEoi = (propertyTitle?: string) => {
    if (propertyTitle) {
      setSelectedPropertyForEoi(propertyTitle);
    } else {
      setSelectedPropertyForEoi("Joint Bricks Capital — General Allocation Enquiry");
    }
    setIsEoiOpen(true);
  };

  return (
    <div className="space-y-28 sm:space-y-36 pb-20">
      <SEO
        title="Joint Bricks — Commercial Real Estate Investment India | SPV Model"
        description="Participate in pre-leased commercial retail real estate through property-specific SPV shares. Minimum ₹10 lakh policy. Not an SM-REIT. CIN: U68100RJ2025PTC109627."
        canonicalUrl="https://jointbricks.com/"
        schema={HOME_SCHEMA}
      />

      {/* ======================================================== */}
      {/* CHAPTER 01: HERO — ARCHITECTURAL OPENING SEQUENCE         */}
      {/* ======================================================== */}
      <section className="relative min-h-[92vh] flex items-center bg-[#0B0B0A] text-[#FAF8F5] overflow-hidden border-b border-[#23221E]">
        {/* Layered Architectural Blueprint Grid & Visual */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-architecture.jpg"
            alt="Commercial Real Estate Architecture"
            className="w-full h-full object-cover opacity-25 object-center scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0A] via-[#0B0B0A]/90 to-[#0B0B0A]/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-60 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-28 w-full">
          
          {/* Top Cadastral Telemetry Coordinates Bar */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-between gap-3 pb-8 mb-8 border-b border-[#23221E] text-[10px] font-mono text-[#827E74]"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BFA272] animate-pulse" />
              <span className="text-[#BCB8AD] tracking-[0.2em] uppercase font-medium">
                CADASTRE: SPV-DIRECT EQUITY
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-[#827E74]">
              <span>MUMBAI 18.92°N 72.83°E</span>
              <span>·</span>
              <span>DELHI NCR 28.61°N 77.20°E</span>
              <span>·</span>
              <span>PUNE 18.52°N 73.85°E</span>
            </div>
            <div className="text-[#BFA272] tracking-[0.16em]">
              PRE-LAUNCH MONOGRAPH
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left 8 Cols: Editorial Typography & Intentional CTAs */}
            <div className="lg:col-span-8 space-y-7">
              
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#BFA272]/15 border border-[#BFA272]/30 text-[10px] font-mono tracking-[0.25em] text-[#D4BA8C] uppercase"
              >
                <span>COMMERCIAL REAL ESTATE. STRUCTURED DIFFERENTLY.</span>
              </motion.div>

              {/* Large Editorial Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif-display text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#FAF8F5] leading-[1.06]"
              >
                High-Street Commercial Assets. <br />
                <span className="italic font-normal text-[#D4BA8C]">
                  Ring-Fenced in Dedicated SPVs.
                </span>
              </motion.h1>

              {/* Supporting Statement */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-base sm:text-lg text-[#BCB8AD] leading-relaxed max-w-2xl font-normal"
              >
                Joint Bricks enables individual investors to participate in pre-leased commercial retail properties through registered shares in dedicated, property-specific Special Purpose Vehicles (SPVs) — starting at ₹10 lakh per property (company policy).
              </motion.p>

              {/* Actions */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <button
                  type="button"
                  onClick={() => handleOpenEoi()}
                  className="px-8 py-4 bg-[#BFA272] text-[#0B0B0A] text-xs font-semibold uppercase tracking-[0.16em] rounded-xs hover:bg-[#D4BA8C] transition-all duration-300 inline-flex items-center gap-2.5 shadow-lg shadow-black/40 cursor-pointer group"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  to="/opportunities"
                  className="px-8 py-4 bg-[#141412] text-[#FAF8F5] border border-[#23221E] text-xs font-semibold uppercase tracking-[0.16em] rounded-xs hover:bg-[#FAF8F5] hover:text-[#0B0B0A] transition-all duration-300 inline-flex items-center gap-2"
                >
                  <span>Explore Opportunities</span>
                </Link>
              </motion.div>

              {/* Statutory Microcopy */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-[11px] font-mono text-[#827E74] leading-relaxed pt-1"
              >
                *The 5% targeted acquisition rental yield is a screening benchmark, not a guaranteed return. Investors hold shares in the property-specific SPV, not direct physical property title.
              </motion.p>

            </div>

            {/* Right 4 Cols: Architectural Monograph Dossier Framing Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4 bg-[#141412] border border-[#23221E] rounded-xs p-7 sm:p-8 space-y-6 relative corner-crosshair shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-[#23221E] pb-3 text-[10px] font-mono">
                <span className="text-[#827E74] uppercase tracking-widest">DOSSIER MONOGRAPH</span>
                <span className="text-[#BFA272]">JB-CAP-2026</span>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase text-[#827E74] tracking-wider block">Legal Structure</span>
                  <h4 className="font-serif-display text-xl text-[#FAF8F5] font-medium">Single-Asset SPV</h4>
                  <p className="text-xs text-[#BCB8AD] leading-relaxed">
                    Companies Act 2013 registered Private Limited Company. Ring-fenced legal title.
                  </p>
                </div>

                <div className="space-y-1 border-t border-[#23221E] pt-3">
                  <span className="text-[10px] font-mono uppercase text-[#827E74] tracking-wider block">Acquisition Mandate</span>
                  <h4 className="font-serif-display text-xl text-[#FAF8F5] font-medium">Pre-Leased Commercial Retail</h4>
                  <p className="text-xs text-[#BCB8AD] leading-relaxed">
                    High-street storefronts with verified pedestrian footfall and contractual escalations.
                  </p>
                </div>

                <div className="space-y-1 border-t border-[#23221E] pt-3">
                  <span className="text-[10px] font-mono uppercase text-[#827E74] tracking-wider block">Regulatory Classification</span>
                  <p className="text-xs font-mono text-[#D4BA8C] leading-relaxed">
                    Not an SM-REIT. Not SEBI-registered. Pure private equity SPV shareholding.
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-[#23221E]">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#827E74]">
                  <span>CIN:</span>
                  <span className="text-[#FAF8F5] font-mono-nums">U68100RJ2025PTC109627</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Institutional Metric Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 pt-8 border-t border-[#23221E] grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-[#827E74] tracking-widest block">Minimum Allocation</span>
              <div className="text-2xl sm:text-3xl font-bold text-[#FAF8F5] font-mono-nums">₹10 Lakh</div>
              <span className="text-[10px] font-mono text-[#BFA272]">Company Policy Minimum</span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-[#827E74] tracking-widest block">Target Yield Screen</span>
              <div className="text-2xl sm:text-3xl font-bold text-[#FAF8F5] font-mono-nums">≥ 5.0% p.a.</div>
              <span className="text-[10px] font-mono text-[#BFA272]">Acquisition Hurdle Rate</span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-[#827E74] tracking-widest block">Asset Specialization</span>
              <div className="text-2xl sm:text-3xl font-bold text-[#FAF8F5]">Commercial Retail</div>
              <span className="text-[10px] font-mono text-[#BFA272]">Pre-Leased at Acquisition</span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-[#827E74] tracking-widest block">Focus Corridors</span>
              <div className="text-2xl sm:text-3xl font-bold text-[#FAF8F5]">Mumbai · NCR · Pune</div>
              <span className="text-[10px] font-mono text-[#BFA272]">High-Density Catchments</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* CHAPTER 01: WHY COMMERCIAL REAL ESTATE (THE THESIS)       */}
      {/* ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <span className="text-4xl sm:text-5xl font-serif-display font-light text-[#BFA272]">01</span>
              <span className="text-[10px] font-mono font-medium text-[#967A46] uppercase tracking-[0.2em] bg-[#BFA272]/15 px-2.5 py-0.5 rounded-xs border border-[#BFA272]/30">
                The Thesis
              </span>
            </div>

            <h2 className="font-serif-display text-3xl sm:text-5xl font-light text-[#0F0F0E] leading-tight">
              Institutional real estate has historically required <br />
              <span className="italic font-normal text-[#967A46]">institutional balance sheets.</span>
            </h2>

            <p className="text-sm text-[#47453F] leading-relaxed">
              Prime commercial retail storefronts — anchored by dense consumer footfall and established corporate brands — offer predictable rental yield potential and long lease commitments. However, acquiring an entire building requires ₹5 Cr to ₹50 Cr+ in capital, excluding discerning individual investors.
            </p>

            <div className="pt-2">
              <Link
                to="/why-joint-bricks"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#0F0F0E] hover:text-[#BFA272] transition-colors group"
              >
                <span>Read Full Strategic Rationale</span>
                <ArrowRight className="w-4 h-4 text-[#BFA272] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#F4F0E6] border border-[#DDD5C5] p-8 sm:p-12 rounded-xs space-y-8 relative corner-crosshair">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#827E74] tracking-wider block mb-1">
                Commercial Retail vs Other Asset Classes
              </span>
              <h3 className="font-serif-display text-2xl sm:text-3xl font-medium text-[#0F0F0E]">
                Why High-Street Commercial Retail Outperforms
              </h3>
              <p className="text-xs sm:text-sm text-[#47453F] leading-relaxed mt-2">
                Unlike residential real estate with 2%–3% gross yields and high tenant turnover, or fixed deposits exposed to inflationary erosion, commercial retail properties in mature urban catchments combine regular rental income with contractual 15% escalations every 3 years.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="bg-[#FAF8F5] p-5 border border-[#DDD5C5] rounded-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#BFA272] font-semibold uppercase">Pillar 01</span>
                  <Lock className="w-3.5 h-3.5 text-[#BFA272]" />
                </div>
                <h4 className="font-serif-display text-base font-semibold text-[#0F0F0E]">Long Leases</h4>
                <p className="text-[11px] text-[#47453F] leading-relaxed">
                  Multi-year corporate tenant lease commitments with contractual lease terms.
                </p>
              </div>

              <div className="bg-[#FAF8F5] p-5 border border-[#DDD5C5] rounded-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#BFA272] font-semibold uppercase">Pillar 02</span>
                  <Compass className="w-3.5 h-3.5 text-[#BFA272]" />
                </div>
                <h4 className="font-serif-display text-base font-semibold text-[#0F0F0E]">Inflation Defense</h4>
                <p className="text-[11px] text-[#47453F] leading-relaxed">
                  Built-in contractual rental escalations protect real distribution yields.
                </p>
              </div>

              <div className="bg-[#FAF8F5] p-5 border border-[#DDD5C5] rounded-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#BFA272] font-semibold uppercase">Pillar 03</span>
                  <Layers className="w-3.5 h-3.5 text-[#BFA272]" />
                </div>
                <h4 className="font-serif-display text-base font-semibold text-[#0F0F0E]">Catchment Moat</h4>
                <p className="text-[11px] text-[#47453F] leading-relaxed">
                  Irreplaceable ground-floor high-street visibility with organic daily footfall.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* CHAPTER 02: HOW JOINT BRICKS STRUCTURES OWNERSHIP         */}
      {/* ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F5] border border-[#DDD5C5] p-8 sm:p-12 lg:p-14 rounded-xs space-y-8 relative corner-crosshair">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#DDD5C5] pb-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-4xl sm:text-5xl font-serif-display font-light text-[#BFA272]">02</span>
                <span className="text-[10px] font-mono font-medium text-[#967A46] uppercase tracking-[0.2em] bg-[#BFA272]/15 px-2.5 py-0.5 rounded-xs border border-[#BFA272]/30">
                  Ownership Architecture
                </span>
              </div>
              <h2 className="font-serif-display text-3xl sm:text-5xl font-light text-[#0F0F0E] leading-tight">
                How Joint Bricks Structures Ownership: <br />
                <span className="italic font-normal text-[#967A46]">The Dedicated SPV Standard</span>
              </h2>
            </div>
            <p className="text-xs text-[#827E74] font-mono max-w-sm leading-relaxed">
              Investors hold registered shares in a property-specific Private Limited Company incorporated under the Companies Act 2013. Investors do NOT hold direct physical property title.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#F4F0E6] p-6 border border-[#DDD5C5] rounded-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#BFA272] font-semibold uppercase">Principle 01</span>
                <Lock className="w-4 h-4 text-[#BFA272]" />
              </div>
              <h4 className="font-serif-display text-lg font-semibold text-[#0F0F0E]">Single-Asset Ring-Fencing</h4>
              <p className="text-xs text-[#47453F] leading-relaxed">
                One property per SPV. Zero commingling of debt, operational liabilities, or capital across different properties or platform activities.
              </p>
            </div>

            <div className="bg-[#F4F0E6] p-6 border border-[#DDD5C5] rounded-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#BFA272] font-semibold uppercase">Principle 02</span>
                <Scale className="w-4 h-4 text-[#BFA272]" />
              </div>
              <h4 className="font-serif-display text-lg font-semibold text-[#0F0F0E]">Pro-Rata Equity Shares</h4>
              <p className="text-xs text-[#47453F] leading-relaxed">
                Investors receive ordinary equity shares matching their capital contribution relative to total SPV equity. Clear statutory ownership recorded in MCA registries.
              </p>
            </div>

            <div className="bg-[#F4F0E6] p-6 border border-[#DDD5C5] rounded-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#BFA272] font-semibold uppercase">Principle 03</span>
                <ShieldCheck className="w-4 h-4 text-[#BFA272]" />
              </div>
              <h4 className="font-serif-display text-lg font-semibold text-[#0F0F0E]">Clean Legal Title</h4>
              <p className="text-xs text-[#47453F] leading-relaxed">
                The SPV holds 100% registered, unencumbered property title. Net rental income and eventual exit capital flow directly to shareholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* CHAPTER 03: THE 11-POINT PROPERTY SELECTION MATRIX        */}
      {/* ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#DDD5C5] pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-4xl sm:text-5xl font-serif-display font-light text-[#BFA272]">03</span>
              <span className="text-[10px] font-mono font-medium text-[#967A46] uppercase tracking-[0.2em] bg-[#BFA272]/15 px-2.5 py-0.5 rounded-xs border border-[#BFA272]/30">
                Underwriting Discipline
              </span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-5xl font-light text-[#0F0F0E] leading-tight">
              The 11-Point Property <br />
              <span className="italic font-normal text-[#967A46]">Selection Matrix</span>
            </h2>
          </div>
          <p className="text-xs text-[#827E74] font-mono max-w-sm leading-relaxed">
            We evaluate dozens of commercial properties across Mumbai, Delhi NCR, and Pune to select only the top tier meeting all 11 institutional benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Criteria Selector List */}
          <div className="lg:col-span-5 space-y-2">
            {screeningCriteria.map((c, idx) => {
              const isSelected = activeCriterion === idx;
              return (
                <button
                  key={c.num}
                  type="button"
                  onClick={() => setActiveCriterion(idx)}
                  className={`w-full text-left p-3.5 rounded-xs border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-[#0B0B0A] text-[#FAF8F5] border-[#0B0B0A] shadow-md'
                      : 'bg-[#F4F0E6] text-[#0F0F0E] border-[#DDD5C5] hover:border-[#BFA272]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-[#BFA272]' : 'text-[#827E74]'}`}>
                      {c.num}
                    </span>
                    <span className="text-xs font-medium truncate max-w-[240px] sm:max-w-xs">
                      {c.name}
                    </span>
                  </div>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'text-[#BFA272] translate-x-1' : 'text-[#827E74]'}`} />
                </button>
              );
            })}
          </div>

          {/* Active Criterion Monograph Inspection */}
          <div className="lg:col-span-7 bg-[#0B0B0A] text-[#FAF8F5] border border-[#23221E] rounded-xs p-8 sm:p-12 relative corner-crosshair">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#23221E] pb-4">
                <span className="text-[10px] font-mono text-[#BFA272] uppercase tracking-[0.2em]">
                  CRITERION {screeningCriteria[activeCriterion].num} OF 11
                </span>
                <span className="text-[10px] font-mono text-[#827E74]">
                  UNDERWRITING CODE: DD-{screeningCriteria[activeCriterion].num}
                </span>
              </div>

              <h3 className="font-serif-display text-3xl sm:text-4xl font-light text-[#FAF8F5]">
                {screeningCriteria[activeCriterion].name}
              </h3>

              <p className="text-sm sm:text-base text-[#BCB8AD] leading-relaxed">
                {screeningCriteria[activeCriterion].desc}
              </p>

              {/* Supplementary Institutional Bank Review Callout */}
              <div className="p-5 bg-[#141412] border border-[#23221E] rounded-xs space-y-2 mt-6">
                <div className="flex items-center gap-2 text-[#BFA272]">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-[10px] font-mono font-bold tracking-[0.16em] uppercase">
                    Supplementary Institutional Bank Review Layer
                  </span>
                </div>
                <p className="text-xs text-[#BCB8AD] leading-relaxed font-mono">
                  In addition to our internal 11-point diligence, each prospective asset undergoes independent bank loan evaluation. If an institutional commercial lender will not underwrite the title, lease covenant, and valuation, Joint Bricks will not proceed.
                </p>
              </div>

              <div className="pt-4 border-t border-[#23221E] flex flex-wrap items-center justify-between text-[11px] font-mono text-[#827E74]">
                <span>Allotment Rule: 100% Pre-Leased at Acquisition</span>
                <span className="text-[#BFA272]">Zero Speculative Construction</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* CHAPTER 04: INSTITUTIONAL DUE DILIGENCE                   */}
      {/* ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="text-4xl sm:text-5xl font-serif-display font-light text-[#BFA272]">04</span>
          <span className="text-[10px] font-mono font-medium text-[#967A46] uppercase tracking-[0.2em] bg-[#BFA272]/15 px-2.5 py-0.5 rounded-xs border border-[#BFA272]/30">
            Diligence Verification
          </span>
        </div>
        <DueDiligenceChecklist />
      </section>

      {/* ======================================================== */}
      {/* CHAPTER 05: THE 5% SCREENING BENCHMARK (SHOWPIECE)        */}
      {/* ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F5] border-2 border-[#DDD5C5] rounded-xs p-8 sm:p-14 relative corner-crosshair shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left 5 Cols: Dramatic Typographic Monolith */}
            <div className="lg:col-span-5 text-center lg:text-left space-y-3 border-b lg:border-b-0 lg:border-r border-[#DDD5C5] pb-8 lg:pb-0 lg:pr-10">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="text-3xl font-serif-display font-light text-[#BFA272]">05</span>
                <span className="text-[10px] font-mono font-bold text-[#967A46] uppercase tracking-[0.25em] bg-[#BFA272]/15 px-3 py-1 rounded-xs border border-[#BFA272]/30 inline-block">
                  ACQUISITION SCREENING HURDLE
                </span>
              </div>
              <div className="font-serif-display text-7xl sm:text-8xl lg:text-9xl font-light text-[#0F0F0E] tracking-tighter leading-none">
                5.0<span className="text-[#BFA272] font-normal">%</span>
              </div>
              <h3 className="font-serif-display text-xl sm:text-2xl font-medium text-[#0F0F0E] leading-snug">
                Targeted Acquisition Rental-Yield Screening Benchmark
              </h3>
            </div>

            {/* Right 7 Cols: Rigorous Explanation & Compliance Disclosure */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Mandatory Non-Guaranteed Return Callout */}
              <div className="p-4 bg-[#8A2E20]/10 border border-[#8A2E20]/30 rounded-xs space-y-1.5">
                <div className="flex items-center gap-2 text-[#8A2E20]">
                  <Scale className="w-4 h-4 flex-shrink-0" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.16em]">
                    Mandatory Regulatory Clarification
                  </span>
                </div>
                <p className="text-xs font-mono text-[#0F0F0E] leading-relaxed">
                  "This 5% p.a. figure is an acquisition-stage screening benchmark used to filter prospective commercial retail assets. It does NOT represent a guaranteed investor return, promised rental income, yield, or profit. Actual distributions depend on tenant lease fulfillment, property occupancy, and net SPV operating expenses."
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#47453F] leading-relaxed">
                <p>
                  <strong>Why 5%?</strong> In prime commercial retail corridors across Mumbai, Delhi NCR, and Pune, unencumbered Grade-A retail properties tenanted by premier corporate brands realistically trade at initial capitalization rates between 5.0% and 6.0%.
                </p>
                <p>
                  Promising higher speculative yields (e.g. 8%–10%) in urban commercial centers almost invariably indicates distressed secondary micro-markets, uncreditworthy tenants, or high vacancy risk. The 5% benchmark protects investor capital by focusing exclusively on institutional-grade core assets.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#DDD5C5]">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase text-[#827E74] block">Screening Function</span>
                  <span className="text-xs font-semibold text-[#0F0F0E]">Quality & Location Hurdle</span>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase text-[#827E74] block">Holding Period</span>
                  <span className="text-xs font-semibold text-[#0F0F0E]">1-Year Minimum (No Early Exit)</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* CHAPTER 06: SIGNATURE SPV VISUALIZATION (THE BLUEPRINT)   */}
      {/* ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-3">
          <span className="text-4xl sm:text-5xl font-serif-display font-light text-[#BFA272]">06</span>
          <span className="text-[10px] font-mono font-medium text-[#967A46] uppercase tracking-[0.2em] bg-[#BFA272]/15 px-2.5 py-0.5 rounded-xs border border-[#BFA272]/30">
            Ownership Architecture
          </span>
        </div>
        <InvestmentStructureDiagram />
      </section>

      {/* ======================================================== */}
      {/* CHAPTER 07: SAMPLE OPPORTUNITY DOSSIERS (PRE-LAUNCH)      */}
      {/* ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#DDD5C5] pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-4xl sm:text-5xl font-serif-display font-light text-[#BFA272]">07</span>
              <span className="text-[10px] font-mono font-medium text-[#967A46] uppercase tracking-[0.2em] bg-[#BFA272]/15 px-2.5 py-0.5 rounded-xs border border-[#BFA272]/30">
                Pipeline Dossiers
              </span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-5xl font-light text-[#0F0F0E]">
              Sample Asset Dossiers
            </h2>
          </div>
          <div className="max-w-sm space-y-1 text-right">
            <span className="text-[10px] font-mono text-[#827E74] block">
              STATUS: PRE-LAUNCH PIPELINE · COMING SOON
            </span>
            <span className="text-[10px] font-mono text-[#BFA272] block">
              *Sample structures for design reference only. Not an active offering.
            </span>
          </div>
        </div>

        {/* 3 Pipeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {samplePipelineProperties.map((prop) => (
            <PropertyCard key={prop.id} {...prop} />
          ))}
        </div>

        {/* Informational Callout Bar */}
        <div className="p-6 bg-[#0B0B0A] text-[#FAF8F5] border border-[#23221E] rounded-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif-display text-lg text-[#FAF8F5] font-medium">
              Want priority notification upon formal launch?
            </h4>
            <p className="text-xs text-[#BCB8AD] font-mono">
              Register non-binding interest to receive individual property dockets once released.
            </p>
          </div>
          <button
            type="button"
            onClick={() => handleOpenEoi("Pre-Launch Pipeline Priority Access")}
            className="px-6 py-2.5 bg-[#BFA272] text-[#0B0B0A] text-xs font-semibold uppercase tracking-[0.16em] rounded-xs hover:bg-[#D4BA8C] transition-colors cursor-pointer flex-shrink-0"
          >
            Register Priority EOI
          </button>
        </div>
      </section>

      {/* ======================================================== */}
      {/* CHAPTER 08: RESEARCH & INTELLIGENCE DESK                  */}
      {/* ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#DDD5C5] pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-4xl sm:text-5xl font-serif-display font-light text-[#BFA272]">08</span>
              <span className="text-[10px] font-mono font-medium text-[#967A46] uppercase tracking-[0.2em] bg-[#BFA272]/15 px-2.5 py-0.5 rounded-xs border border-[#BFA272]/30">
                Intelligence Desk
              </span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-5xl font-light text-[#0F0F0E]">
              Research & Perspectives
            </h2>
          </div>
          <Link
            to="/research"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0F0F0E] hover:text-[#BFA272] transition-colors inline-flex items-center gap-1.5"
          >
            <span>View All Research</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#BFA272]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchArticles.map((article) => (
            <ResearchCard key={article.slug} {...article} />
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* CHAPTER 09: INVESTOR FAQS REPOSITORY                      */}
      {/* ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#DDD5C5] pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-4xl sm:text-5xl font-serif-display font-light text-[#BFA272]">09</span>
              <span className="text-[10px] font-mono font-medium text-[#967A46] uppercase tracking-[0.2em] bg-[#BFA272]/15 px-2.5 py-0.5 rounded-xs border border-[#BFA272]/30">
                Statutory FAQ
              </span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-5xl font-light text-[#0F0F0E]">
              Frequently Addressed Inquiries
            </h2>
          </div>
          <div className="w-full md:w-72">
            <div className="relative">
              <Search className="w-4 h-4 text-[#827E74] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={faqSearch}
                onChange={e => setFaqSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-[#F4F0E6] border border-[#DDD5C5] rounded-xs text-xs text-[#0F0F0E] focus:border-[#BFA272] focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {['All', 'General', 'Structure', 'Returns', 'Regulation'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFaqCategory(cat)}
              className={`px-3 py-1 text-xs font-mono rounded-xs border transition-colors cursor-pointer ${
                faqCategory === cat
                  ? 'bg-[#0B0B0A] text-[#FAF8F5] border-[#0B0B0A]'
                  : 'bg-[#F4F0E6] text-[#47453F] border-[#DDD5C5] hover:border-[#BFA272]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <FAQAccordion items={filteredFaqs} />
      </section>

      {/* ======================================================== */}
      {/* CHAPTER 10: PRIVATE CAPITAL INVITATION (THE CLOSER)       */}
      {/* ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B0B0A] text-[#FAF8F5] border border-[#23221E] rounded-xs p-8 sm:p-14 relative corner-crosshair overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-40" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2.5">
              <span className="text-2xl font-serif-display font-light text-[#BFA272]">10</span>
              <span className="text-[10px] font-mono font-medium text-[#BFA272] uppercase tracking-[0.25em] bg-[#BFA272]/15 px-3 py-1 rounded-xs border border-[#BFA272]/30 inline-block">
                PRIVATE CAPITAL INVITATION
              </span>
            </div>

            <h2 className="font-serif-display text-3xl sm:text-5xl lg:text-6xl font-light text-[#FAF8F5] leading-tight">
              Begin Your Commercial Real Estate <br />
              <span className="italic font-normal text-[#D4BA8C]">Allocation Journey</span>
            </h2>

            <p className="text-xs sm:text-base text-[#BCB8AD] leading-relaxed max-w-2xl mx-auto">
              Joint Bricks is currently accepting expressions of interest from discerning investors. Explore how dedicated SPVs give you institutional commercial retail exposure from ₹10 Lakh.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                type="button"
                onClick={() => handleOpenEoi("Private Capital Allocation Invitation")}
                className="px-8 py-4 bg-[#BFA272] text-[#0B0B0A] text-xs font-semibold uppercase tracking-[0.16em] rounded-xs hover:bg-[#D4BA8C] transition-all duration-300 inline-flex items-center gap-2 group cursor-pointer shadow-lg"
              >
                <span>Request Private Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                to="/how-it-works"
                className="px-8 py-4 bg-[#141412] text-[#FAF8F5] border border-[#23221E] text-xs font-semibold uppercase tracking-[0.16em] rounded-xs hover:bg-[#FAF8F5] hover:text-[#0B0B0A] transition-all duration-300"
              >
                Inspect 9-Step Process
              </Link>
            </div>

            <p className="text-[10px] font-mono text-[#827E74] pt-2">
              Joint Bricks Propshare Private Limited (CIN: U68100RJ2025PTC109627) · Incorporated 15 Dec 2025
            </p>
          </div>
        </div>
      </section>

      {/* Global EOI Consultation Drawer */}
      <EoiDrawer
        isOpen={isEoiOpen}
        onClose={() => setIsEoiOpen(false)}
        propertyName={selectedPropertyForEoi}
      />
    </div>
  );
};
