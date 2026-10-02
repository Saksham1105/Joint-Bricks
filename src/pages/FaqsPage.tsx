import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { FAQAccordion, type FAQItem } from '../components/common/FAQAccordion';
import { SEO } from '../components/common/SEO';
import { Link } from 'react-router-dom';

const FAQS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "name": "Investor FAQ Repository — Joint Bricks",
  "description": "Answers to common investor questions about Joint Bricks SPV structure, ownership model, yields, regulatory status, and distribution mechanics.",
  "url": "https://jointbricks.com/faq",
  "mainEntity": [
    { "@type": "Question", "name": "What is Joint Bricks?", "acceptedAnswer": { "@type": "Answer", "text": "Joint Bricks (Joint Bricks Propshare Private Limited, CIN: U68100RJ2025PTC109627) is a commercial real-estate participation business enabling investors to participate in commercial retail properties through shares in property-specific Special Purpose Vehicles (SPVs)." } },
    { "@type": "Question", "name": "What am I actually buying when I invest through Joint Bricks?", "acceptedAnswer": { "@type": "Answer", "text": "You are purchasing equity shares in a dedicated Special Purpose Vehicle (a Private Limited Company) incorporated specifically to acquire and hold legal title to a single commercial property." } },
    { "@type": "Question", "name": "What is the minimum investment amount?", "acceptedAnswer": { "@type": "Answer", "text": "The minimum investment is ₹10 lakh per property, established as a Joint Bricks company policy (not a statutory or regulatory minimum)." } },
    { "@type": "Question", "name": "Is the 5% rental yield guaranteed?", "acceptedAnswer": { "@type": "Answer", "text": "No. The 5% p.a. figure is an acquisition-stage screening benchmark and is not a guaranteed investor return, rental income, yield, or profit." } },
    { "@type": "Question", "name": "Do I own the physical property directly?", "acceptedAnswer": { "@type": "Answer", "text": "No. You hold registered shares in the property-specific SPV. The SPV holds legal title to the physical property. Investors do not hold direct physical title." } },
    { "@type": "Question", "name": "Is Joint Bricks SEBI registered?", "acceptedAnswer": { "@type": "Answer", "text": "Joint Bricks is not an SM-REIT. It is not currently operating as a SEBI-registered entity and does not have SM-REIT registration or approval from SEBI." } },
    { "@type": "Question", "name": "What are the holding period and exit terms?", "acceptedAnswer": { "@type": "Answer", "text": "The minimum holding period is 1 year. There is no early exit before 1 year. Secondary share transfers after 1 year are subject to applicable SPV documentation." } }
  ]
};

export const FaqsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const allFaqs: FAQItem[] = [
    {
      id: "q1",
      category: "General",
      statusTag: "[CONFIRMED FACT]",
      question: "Q1. What is Joint Bricks?",
      answer: "Joint Bricks (legal entity: Joint Bricks Propshare Private Limited, CIN: U68100RJ2025PTC109627, incorporated 15 December 2025) is an early-stage commercial real-estate participation business enabling investors to participate in commercial retail properties through shares in property-specific Special Purpose Vehicles (SPVs) that own the underlying property."
    },
    {
      id: "q2",
      category: "Structure",
      statusTag: "[CONFIRMED METAPHOR]",
      question: "Q2. What is a 'Brick'?",
      answer: "'Bricks' represents real estate / physical property assets. A 'Brick' is a brand metaphor for participation through SPV shares. It is not a legally defined portion of a property, not registered physical title, and not a specific physical unit. The metaphor must never override the legal structure: investors hold shares in the property-specific SPV that owns the underlying property."
    },
    {
      id: "q3",
      category: "Structure",
      statusTag: "[CONFIRMED FACT]",
      question: "Q3. What am I actually buying when I participate through Joint Bricks?",
      answer: "You are purchasing equity shares in a dedicated Special Purpose Vehicle (a Private Limited Company) incorporated specifically to acquire and hold legal title to a single commercial property. Your shareholding is strictly proportional to your capital contribution. Investors do not directly hold physical title to the property."
    },
    {
      id: "q4",
      category: "Structure",
      statusTag: "[CONFIRMED FACT]",
      question: "Q4. What is an SPV?",
      answer: "A Special Purpose Vehicle (SPV) is a standalone Private Limited Company created to hold legal title to and manage a single property asset. The SPV is the legal owner of the property, providing clear legal segregation and governance under the Companies Act 2013."
    },
    {
      id: "q5",
      category: "Structure",
      statusTag: "[CONFIRMED FACT]",
      question: "Q5. Do I own the physical property directly?",
      answer: "No. You hold registered shares in the property-specific SPV. The SPV holds legal title to the physical property. Direct physical property title is not granted to individual investors."
    },
    {
      id: "q6",
      category: "Structure",
      statusTag: "[CONFIRMED POLICY]",
      question: "Q6. What is the minimum investment amount?",
      answer: "The minimum investment is ₹10 lakh per property, established as a Joint Bricks company business policy (not a statutory or regulatory minimum)."
    },
    {
      id: "q7",
      category: "Returns",
      statusTag: "[CONFIRMED FACT]",
      question: "Q7. Is the 5% rental yield guaranteed?",
      answer: "No. The 5% p.a. figure is an acquisition-stage screening benchmark used when evaluating prospective commercial retail properties. It is not a guaranteed investor return, rental income, yield, or profit. Actual net rental distributions depend on tenant lease fulfillment, property occupancy, and SPV operating expenses."
    },
    {
      id: "q8",
      category: "Regulation",
      statusTag: "[CONFIRMED REGULATORY DISCLOSURE]",
      question: "Q8. Is Joint Bricks an SM-REIT or SEBI registered?",
      answer: "Joint Bricks is not an SM-REIT. Certain aspects of its business model may be similar to or related to functions within an SM-REIT framework, but these similarities do not constitute SM-REIT registration or SEBI-regulated status. Joint Bricks is not currently operating as a SEBI-registered SM-REIT and does not currently have SM-REIT registration or approval from SEBI."
    },
    {
      id: "q9",
      category: "Sourcing",
      statusTag: "[CONFIRMED FACT]",
      question: "Q9. What type of properties does Joint Bricks focus on?",
      answer: "Commercial real estate only, with primary emphasis on retail shops, high-street retail, and commercial retail assets located in Mumbai, Delhi NCR, and Pune."
    },
    {
      id: "q10",
      category: "Sourcing",
      statusTag: "[CONFIRMED FACT]",
      question: "Q10. Are all properties pre-leased at acquisition?",
      answer: "Yes. Every property considered by Joint Bricks is pre-leased or tenanted at the time of acquisition, reducing day-one vacancy exposure. However, future vacancy risk during the holding period cannot be eliminated."
    },
    {
      id: "q11",
      category: "Structure",
      statusTag: "[CONFIRMED FACT]",
      question: "Q11. What are the holding period and exit terms?",
      answer: "Investments have a minimum holding period of 1 year. There is no early exit before the 1-year minimum holding period. After 1 year, share transfers and exits are subject to applicable SPV and share-transfer documentation."
    },
    {
      id: "q12",
      category: "Returns",
      statusTag: "[CONFIRMED FACT]",
      question: "Q12. How and when is rental income distributed?",
      answer: "Where rental income is generated by the underlying commercial tenant, net rental distributions (after expenses, taxes, and deductions) are distributed monthly pro-rata to shareholding."
    },
    {
      id: "q13",
      category: "Sourcing",
      statusTag: "[CONFIRMED FACT]",
      question: "Q13. What is the due diligence process?",
      answer: "Properties undergo an 11-point diligence matrix covering Legal, Financial, Technical, Tenant/Lease, and Market aspects. In addition, a supplementary bank-financing verification layer provides external institutional review alongside full legal diligence."
    },
    {
      id: "q14",
      category: "Structure",
      statusTag: "[CONFIRMED FACT]",
      question: "Q14. How are investor funds handled prior to property acquisition?",
      answer: "Investor capital is held segregated from company operating funds prior to property acquisition and share allotment, with allocations directly tied to the dedicated property SPV."
    },
    {
      id: "q15",
      category: "General",
      statusTag: "[CONFIRMED STATUS]",
      question: "Q15. Are there live investment properties available on the website right now?",
      answer: "No. Joint Bricks is newly incorporated and in an early pre-launch stage; investment opportunities are currently Coming Soon. Real commercial assets will be published as acquisition diligence and SPV structures are finalized."
    }
  ];

  const categories = ['All', 'General', 'Structure', 'Returns', 'Regulation', 'Sourcing'];

  const filteredFaqs = allFaqs.filter(faq => {
    const matchesCat = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <SEO
        title="Investor FAQ Repository — Joint Bricks"
        description="Answers to common investor questions about Joint Bricks SPV structure, ownership model, yields, regulatory status, and distribution mechanics."
        canonicalUrl="https://jointbricks.com/faq"
        schema={FAQS_SCHEMA}
      />
      
      {/* Page Header */}
      <div className="bg-[#0B0B0A] text-[#FAF8F5] border border-[#23221E] rounded-xs p-8 sm:p-16 text-center max-w-4xl mx-auto space-y-4 relative corner-crosshair">
        <span className="text-[10px] font-mono font-medium text-[#BFA272] uppercase tracking-[0.25em] bg-[#BFA272]/15 px-3 py-1 rounded-xs border border-[#BFA272]/30 inline-block">
          KNOWLEDGE BASE & GOVERNANCE
        </span>
        <h1 className="font-serif-display text-4xl sm:text-6xl font-light tracking-tight text-[#FAF8F5]">
          Frequently Addressed Inquiries
        </h1>
        <p className="text-xs sm:text-sm text-[#BCB8AD] max-w-2xl mx-auto leading-relaxed">
          Authoritative answers to core investor questions regarding our SPV structure, legal ownership boundaries, 5% screening hurdle, and regulatory disclosures.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-[#F4F0E6] border border-[#DDD5C5] rounded-xs">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded-xs transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#0B0B0A] text-[#FAF8F5]'
                  : 'bg-[#FAF8F5] text-[#47453F] border border-[#DDD5C5] hover:bg-[#EAE4D5]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-[#827E74] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search answers by keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs text-xs text-[#0F0F0E] focus:outline-none focus:border-[#BFA272] font-sans"
          />
        </div>
      </div>

      {/* Accordion List */}
      <FAQAccordion items={filteredFaqs} />

      {/* Bottom Regulatory Callout */}
      <div className="bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs relative corner-crosshair">
        <div className="space-y-1">
          <span className="text-[10px] font-mono font-medium text-[#967A46] uppercase tracking-wider">
            Still Have Inquiries?
          </span>
          <h3 className="font-serif-display text-2xl font-light text-[#0F0F0E]">
            Speak with Our Allocation Desk
          </h3>
          <p className="text-xs text-[#47453F]">
            Submit a direct query or explore our full regulatory disclosures.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            to="/contact"
            className="px-6 py-3.5 bg-[#0B0B0A] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.16em] rounded-xs hover:bg-[#BFA272] hover:text-[#0B0B0A] transition-colors"
          >
            Submit an Inquiry
          </Link>
          <Link
            to="/legal"
            className="px-6 py-3.5 bg-[#F4F0E6] text-[#0F0F0E] border border-[#DDD5C5] text-xs font-semibold uppercase tracking-[0.16em] rounded-xs hover:bg-[#EAE4D5] transition-colors"
          >
            Legal Disclosures
          </Link>
        </div>
      </div>

    </div>
  );
};
