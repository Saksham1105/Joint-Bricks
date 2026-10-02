import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Building2, MapPin, Scale } from 'lucide-react';
import { SEO } from '../components/common/SEO';

export const ContactPage: React.FC = () => {
  const [inquiryType, setInquiryType] = useState<'investor' | 'owner' | 'general'>('investor');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: 'Mumbai',
    ticketSize: '₹10 Lakh',
    propertyDetails: '',
    message: '',
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const CONTACT_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Joint Bricks — Corporate Inquiry Desk",
    "description": "Contact Joint Bricks for investor inquiries and commercial retail property owner submissions. Joint Bricks Propshare Private Limited (CIN: U68100RJ2025PTC109627).",
    "url": "https://jointbricks.com/contact"
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <SEO
        title="Contact Joint Bricks — Investor Enquiries & Property Submissions | India"
        description="Contact Joint Bricks for investor inquiries and commercial retail property owner submissions. Joint Bricks Propshare Private Limited (CIN: U68100RJ2025PTC109627)."
        canonicalUrl="https://jointbricks.com/contact"
        schema={CONTACT_SCHEMA}
      />
      
      {/* Editorial Page Header */}
      <div className="bg-[#0B0B0A] text-[#FAF8F5] border border-[#23221E] rounded-xs p-8 sm:p-14 text-center max-w-4xl mx-auto space-y-3 relative corner-crosshair">
        <span className="text-[10px] font-mono font-medium text-[#BFA272] uppercase tracking-[0.25em] bg-[#BFA272]/15 px-3 py-1 rounded-xs border border-[#BFA272]/30 inline-block">
          CAPITAL ALLOCATION DESK
        </span>
        <h1 className="font-serif-display text-4xl sm:text-6xl font-light tracking-tight text-[#FAF8F5]">
          Let's discuss real estate.
        </h1>
        <p className="text-xs sm:text-sm text-[#BCB8AD] max-w-xl mx-auto leading-relaxed">
          For prospective investor inquiries, pre-launch opportunity updates, or commercial retail property submissions in Mumbai, Delhi NCR, and Pune.
        </p>
      </div>

      {/* Split Editorial Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* LEFT COLUMN: Editorial Context, Facts, Communication Desk */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#FAF8F5] border border-[#DDD5C5] p-8 rounded-xs space-y-5 relative corner-crosshair">
            <span className="text-[10px] font-mono font-medium text-[#967A46] uppercase tracking-wider block">
              Inquiry Desk Overview
            </span>
            <h3 className="font-serif-display text-2xl sm:text-3xl font-light text-[#0F0F0E]">
              Direct Communication, Institutional Discretion
            </h3>
            <p className="text-xs text-[#47453F] leading-relaxed">
              Joint Bricks does not operate an automated retail portal or public trading desk. All inquiries are reviewed directly by our management team to ensure alignment with our property screening benchmarks and SPV structure.
            </p>

            <div className="pt-3 border-t border-[#DDD5C5] space-y-3.5 text-xs font-mono text-[#0F0F0E]">
              <div className="flex items-start gap-3">
                <Building2 className="w-4 h-4 text-[#BFA272] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block">Joint Bricks Propshare Private Limited</span>
                  <span className="text-[#827E74]">CIN: U68100RJ2025PTC109627</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#BFA272] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block">Target Commercial Metros</span>
                  <span className="text-[#827E74]">Mumbai MMR · Delhi NCR · Pune</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#BFA272] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block">Policy Minimum Allocation</span>
                  <span className="text-[#827E74]">₹10 Lakh per Property (Company Policy)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Locked Regulatory Notice Box */}
          <div className="bg-[#0B0B0A] text-[#FAF8F5] border border-[#23221E] p-6 sm:p-7 rounded-xs space-y-2 text-xs font-mono relative corner-crosshair">
            <div className="flex items-center gap-2 text-[#BFA272] font-semibold">
              <Scale className="w-4 h-4" />
              <span className="uppercase text-[10px] tracking-wider">Statutory Notice</span>
            </div>
            <p className="text-[#BCB8AD] text-[11px] leading-relaxed">
              Joint Bricks is not an SM-REIT and is not currently SEBI-registered. 5% targeted yield is an acquisition screening hurdle, not a guaranteed return. Investors participate through equity shares in property-specific SPVs, not physical title. Minimum holding period is 1 year.
            </p>
          </div>

          {/* Communication Channel Status (WhatsApp Inactive) */}
          <div className="p-4 bg-[#F4F0E6] border border-[#DDD5C5] rounded-xs text-[11px] font-mono text-[#827E74] space-y-1">
            <span className="text-[#0F0F0E] font-semibold block uppercase tracking-wider text-[10px]">
              Channel Availability Notice:
            </span>
            <p>
              Direct contact details: <code>[CONTACT DETAILS — TO BE PROVIDED]</code>. Our official WhatsApp business channel is currently being provisioned and will be enabled centrally once officially verified.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Inquiry Form */}
        <div className="lg:col-span-7 bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs p-8 sm:p-10 shadow-xs relative corner-crosshair">
          
          {/* Segment Selector Tabs */}
          <div className="flex flex-wrap border-b border-[#DDD5C5] pb-4 mb-6 gap-2">
            <button
              onClick={() => { setInquiryType('investor'); setSubmitted(false); }}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-xs transition-colors cursor-pointer ${
                inquiryType === 'investor'
                  ? 'bg-[#0B0B0A] text-[#FAF8F5]'
                  : 'bg-[#F4F0E6] text-[#47453F] border border-[#DDD5C5] hover:bg-[#EAE4D5]'
              }`}
            >
              Upcoming Opportunities
            </button>
            <button
              onClick={() => { setInquiryType('owner'); setSubmitted(false); }}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-xs transition-colors cursor-pointer ${
                inquiryType === 'owner'
                  ? 'bg-[#0B0B0A] text-[#FAF8F5]'
                  : 'bg-[#F4F0E6] text-[#47453F] border border-[#DDD5C5] hover:bg-[#EAE4D5]'
              }`}
            >
              Property Submission
            </button>
            <button
              onClick={() => { setInquiryType('general'); setSubmitted(false); }}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-xs transition-colors cursor-pointer ${
                inquiryType === 'general'
                  ? 'bg-[#0B0B0A] text-[#FAF8F5]'
                  : 'bg-[#F4F0E6] text-[#47453F] border border-[#DDD5C5] hover:bg-[#EAE4D5]'
              }`}
            >
              General Inquiry
            </button>
          </div>

          {submitted ? (
            <div className="p-10 text-center space-y-4 bg-[#F4F0E6] border border-[#DDD5C5] rounded-xs">
              <div className="w-14 h-14 rounded-xs bg-[#285A42]/10 text-[#285A42] border border-[#285A42]/30 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="font-serif-display text-3xl font-light text-[#0F0F0E]">
                Inquiry Logged
              </h3>
              <p className="text-xs text-[#47453F] leading-relaxed max-w-md mx-auto">
                Thank you, {formData.name || "Inquirer"}. Your message has been received by Joint Bricks Propshare Private Limited. Our corporate desk will review your inquiry and follow up via email.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#0B0B0A] text-[#FAF8F5] text-xs font-mono uppercase tracking-wider rounded-xs hover:bg-[#BFA272] hover:text-[#0B0B0A] transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="inquiryName" className="block font-mono text-[11px] uppercase tracking-wider text-[#0F0F0E] mb-1.5">
                    Full Legal Name *
                  </label>
                  <input
                    id="inquiryName"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Vikram Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs text-xs text-[#0F0F0E] focus:border-[#BFA272] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="inquiryEmail" className="block font-mono text-[11px] uppercase tracking-wider text-[#0F0F0E] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    id="inquiryEmail"
                    name="email"
                    type="email"
                    required
                    placeholder="e.g. vikram@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs text-xs text-[#0F0F0E] focus:border-[#BFA272] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="inquiryPhone" className="block font-mono text-[11px] uppercase tracking-wider text-[#0F0F0E] mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    id="inquiryPhone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-3 bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs text-xs text-[#0F0F0E] focus:border-[#BFA272] focus:outline-none font-mono transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="inquiryCity" className="block font-mono text-[11px] uppercase tracking-wider text-[#0F0F0E] mb-1.5">
                    Preferred Metro
                  </label>
                  <select
                    id="inquiryCity"
                    name="city"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full p-3 bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs text-xs text-[#0F0F0E] focus:border-[#BFA272] focus:outline-none"
                  >
                    <option value="Mumbai">Mumbai MMR</option>
                    <option value="Delhi NCR">Delhi NCR (Gurgaon / Noida / Delhi)</option>
                    <option value="Pune">Pune</option>
                    <option value="Other">Other Metro</option>
                  </select>
                </div>
              </div>

              {inquiryType === 'investor' && (
                <div>
                  <label htmlFor="inquiryTicketSize" className="block font-mono text-[11px] uppercase tracking-wider text-[#0F0F0E] mb-1.5">
                    Target Capital Allocation
                  </label>
                  <select
                    id="inquiryTicketSize"
                    name="ticketSize"
                    value={formData.ticketSize}
                    onChange={(e) => setFormData({ ...formData, ticketSize: e.target.value })}
                    className="w-full p-3 bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs text-xs text-[#0F0F0E] focus:border-[#BFA272] focus:outline-none font-mono-nums"
                  >
                    <option value="₹10 Lakh">₹10 Lakh per property (Joint Bricks Policy Minimum)</option>
                    <option value="₹25 Lakh">₹25 Lakh</option>
                    <option value="₹50 Lakh">₹50 Lakh</option>
                    <option value="₹1 Crore+">₹1 Crore+</option>
                  </select>
                </div>
              )}

              {inquiryType === 'owner' && (
                <div>
                  <label htmlFor="inquiryPropertyDetails" className="block font-mono text-[11px] uppercase tracking-wider text-[#0F0F0E] mb-1.5">
                    Property Location & Tenancy Details *
                  </label>
                  <textarea
                    id="inquiryPropertyDetails"
                    name="propertyDetails"
                    rows={3}
                    required
                    placeholder="Provide micro-market location, carpet area, tenant name/category, monthly rent, and remaining lease commitment..."
                    value={formData.propertyDetails}
                    onChange={(e) => setFormData({ ...formData, propertyDetails: e.target.value })}
                    className="w-full p-3 bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs text-xs text-[#0F0F0E] focus:border-[#BFA272] focus:outline-none font-sans"
                  />
                </div>
              )}

              <div>
                <label htmlFor="inquiryMessage" className="block font-mono text-[11px] uppercase tracking-wider text-[#0F0F0E] mb-1.5">
                  Message / Comments (Optional)
                </label>
                <textarea
                  id="inquiryMessage"
                  name="message"
                  rows={3}
                  placeholder="Share any specific questions regarding SPV structuring or diligence criteria..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs text-xs text-[#0F0F0E] focus:border-[#BFA272] focus:outline-none font-sans"
                />
              </div>

              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-0.5 accent-[#BFA272]"
                  />
                  <span className="text-[10px] text-[#47453F] leading-normal font-mono">
                    I understand that Joint Bricks is newly incorporated and opportunities are currently pre-launch / Coming Soon. Joint Bricks is not an SM-REIT and is not SEBI-registered. 5% targeted yield is a screening benchmark, not a guaranteed return. Minimum holding period is 1 year.
                  </span>
                </label>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#0B0B0A] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.16em] rounded-xs hover:bg-[#BFA272] hover:text-[#0B0B0A] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Inquiry to Allocation Desk</span>
                </button>
              </div>
            </form>
          )}

        </div>

      </div>

    </div>
  );
};
