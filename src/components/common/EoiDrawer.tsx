import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface EoiDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  propertyName?: string;
  minInvestment?: string;
}

export const EoiDrawer: React.FC<EoiDrawerProps> = ({
  isOpen,
  onClose,
  propertyName = "Pre-Leased Commercial Retail Pipeline",
  minInvestment = "₹10 Lakh",
}) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    investmentAmount: minInvestment,
    investorType: 'Salaried Professional',
    acceptedTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const resetAndClose = () => {
    setStep(1);
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-[110] flex justify-end overflow-hidden ${
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="eoi-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-[#0B0B0A]/80 backdrop-blur-xs cursor-pointer"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="eoi-drawer-panel"
            initial={{ x: '100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-lg bg-[#FAF8F5] h-full shadow-2xl border-l border-[#DDD5C5] flex flex-col justify-between overflow-y-auto"
          >
            <div>
              {/* Header */}
              <div className="p-6 sm:p-8 bg-[#0B0B0A] text-[#FAF8F5] flex items-start justify-between border-b border-[#23221E] relative corner-crosshair">
                <div className="space-y-1.5 pr-4">
                  <span className="text-[9px] font-mono font-medium text-[#BFA272] uppercase tracking-[0.2em] bg-[#BFA272]/15 px-2.5 py-0.5 rounded-xs border border-[#BFA272]/30 inline-block">
                    PRIVATE CONSULTATION · PRE-LAUNCH
                  </span>
                  <h3 className="font-serif-display text-2xl sm:text-3xl font-light text-[#FAF8F5] leading-snug">
                    Commercial Real Estate <br />
                    <span className="italic text-[#D4BA8C]">Allocation Enquiry</span>
                  </h3>
                  <p className="text-[11px] font-mono text-[#827E74] truncate">{propertyName}</p>
                </div>
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="p-1.5 rounded-xs text-[#827E74] hover:text-[#FAF8F5] hover:bg-[#1C1C19] transition-colors cursor-pointer"
                  aria-label="Close drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {step === 1 ? (
                <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5 text-xs">
                  <div className="p-4 bg-[#F4F0E6] border border-[#DDD5C5] rounded-xs text-[11px] text-[#47453F] leading-relaxed flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-[#BFA272] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#0F0F0E] block font-mono">Institutional Inquiry Protocol</span>
                      Expressing interest enables our capital advisory desk to share property dossiers, SPV governing documents, and due-diligence summaries once formally unlocked. This is an information request and does not constitute a transaction, portal login, or financial obligation.
                    </div>
                  </div>

                  <div>
                    <label htmlFor="eoiFullName" className="block font-mono text-[11px] uppercase tracking-wider text-[#0F0F0E] mb-1.5">
                      Full Legal Name *
                    </label>
                    <input
                      id="eoiFullName"
                      name="fullName"
                      type="text"
                      required
                      placeholder="e.g. Vikram Sharma"
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full p-3 bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs text-xs text-[#0F0F0E] focus:border-[#BFA272] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="eoiEmail" className="block font-mono text-[11px] uppercase tracking-wider text-[#0F0F0E] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="eoiEmail"
                        name="email"
                        type="email"
                        required
                        placeholder="e.g. vikram@example.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-3 bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs text-xs text-[#0F0F0E] focus:border-[#BFA272] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="eoiPhone" className="block font-mono text-[11px] uppercase tracking-wider text-[#0F0F0E] mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        id="eoiPhone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-3 bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs text-xs text-[#0F0F0E] focus:border-[#BFA272] focus:outline-none font-mono transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="eoiInvestmentAmount" className="block font-mono text-[11px] uppercase tracking-wider text-[#0F0F0E] mb-1.5">
                      Proposed Allocation Ticket
                    </label>
                    <select
                      id="eoiInvestmentAmount"
                      name="investmentAmount"
                      value={formData.investmentAmount}
                      onChange={e => setFormData({ ...formData, investmentAmount: e.target.value })}
                      className="w-full p-3 bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs text-xs text-[#0F0F0E] focus:border-[#BFA272] focus:outline-none font-mono-nums"
                    >
                      <option value="₹10 Lakh">₹10 Lakh per property (Joint Bricks Company Policy Minimum)</option>
                      <option value="₹25 Lakh">₹25 Lakh</option>
                      <option value="₹50 Lakh">₹50 Lakh</option>
                      <option value="₹1 Crore+">₹1 Crore+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="eoiInvestorType" className="block font-mono text-[11px] uppercase tracking-wider text-[#0F0F0E] mb-1.5">
                      Investor Profile Classification
                    </label>
                    <select
                      id="eoiInvestorType"
                      name="investorType"
                      value={formData.investorType}
                      onChange={e => setFormData({ ...formData, investorType: e.target.value })}
                      className="w-full p-3 bg-[#FAF8F5] border border-[#DDD5C5] rounded-xs text-xs text-[#0F0F0E] focus:border-[#BFA272] focus:outline-none"
                    >
                      <option value="Salaried Professional">Salaried Professional / Executive</option>
                      <option value="Business Owner">Business Owner / Entrepreneur</option>
                      <option value="HNI / Private Wealth">HNI / Private Wealth Family Office</option>
                      <option value="NRI Investor">Non-Resident Indian (NRI)</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={formData.acceptedTerms}
                        onChange={e => setFormData({ ...formData, acceptedTerms: e.target.checked })}
                        className="mt-0.5 accent-[#BFA272]"
                      />
                      <span className="text-[10px] text-[#47453F] leading-normal font-mono">
                        I acknowledge that Joint Bricks is not an SM-REIT and is not SEBI-registered. The 5% targeted yield is a screening hurdle rate, not a guaranteed return. Investors hold shares in a property-specific SPV, not direct physical property title. Minimum holding period is 1 year with no early exit.
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#0B0B0A] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.16em] rounded-xs hover:bg-[#BFA272] hover:text-[#0B0B0A] transition-all duration-300 mt-4 cursor-pointer flex items-center justify-center gap-2 group"
                  >
                    <span>Submit Allocation Enquiry</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              ) : (
                <div className="p-8 sm:p-10 text-center space-y-5">
                  <div className="w-14 h-14 rounded-xs bg-[#285A42]/10 text-[#285A42] border border-[#285A42]/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-serif-display text-2xl sm:text-3xl font-light text-[#0F0F0E]">
                    Enquiry Logged Successfully
                  </h4>
                  <p className="text-xs text-[#47453F] leading-relaxed max-w-sm mx-auto">
                    Thank you, {formData.fullName}. Your interest in {propertyName} has been recorded with our capital advisory desk. A dedicated representative will reach out with the architectural dossier upon release.
                  </p>
                  <button
                    onClick={resetAndClose}
                    className="w-full py-3 bg-[#0B0B0A] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.16em] rounded-xs hover:bg-[#BFA272] hover:text-[#0B0B0A] transition-colors cursor-pointer"
                  >
                    Return to Platform
                  </button>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 bg-[#F4F0E6] border-t border-[#DDD5C5] text-[10px] text-[#827E74] font-mono text-center">
              Joint Bricks Propshare Private Limited (CIN: U68100RJ2025PTC109627)
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
