import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Structure' | 'Returns' | 'Sourcing' | 'Regulation' | 'Risk' | 'General';
  statusTag: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  allowMultiple?: boolean;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items, allowMultiple = false }) => {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || '']);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    } else {
      setOpenIds(prev => prev.includes(id) ? [] : [id]);
    }
  };

  const getStatusBadgeStyle = (status: string) => {
    if (status.includes('CONFIRMED') && !status.includes('NOT')) {
      return 'bg-[#285A42]/10 text-[#285A42] border-[#285A42]/30';
    } else if (status.includes('LEGAL') || status.includes('TAX')) {
      return 'bg-[#8A2E20]/10 text-[#8A2E20] border-[#8A2E20]/30';
    } else if (status.includes('PROPOSED')) {
      return 'bg-[#BFA272]/15 text-[#967A46] border-[#BFA272]/30';
    }
    return 'bg-[#996F20]/10 text-[#996F20] border-[#996F20]/30';
  };

  return (
    <div className="space-y-3.5 my-6">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            className={`border rounded-xs transition-all duration-300 ${
              isOpen
                ? 'bg-[#FAF8F5] border-[#BFA272] shadow-xs'
                : 'bg-[#F4F0E6] border-[#DDD5C5] hover:border-[#BFA272]/50'
            }`}
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-5 focus:outline-none cursor-pointer"
              aria-expanded={isOpen}
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-[10px] font-mono font-medium text-[#827E74] uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-xs border uppercase tracking-wider ${getStatusBadgeStyle(item.statusTag)}`}>
                    {item.statusTag}
                  </span>
                </div>
                <h4 className="font-serif-display text-lg sm:text-xl font-medium text-[#0F0F0E] leading-snug">
                  {item.question}
                </h4>
              </div>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="w-8 h-8 rounded-xs bg-[#FAF8F5] border border-[#DDD5C5] flex items-center justify-center text-[#0F0F0E] flex-shrink-0"
              >
                <ChevronDown className={`w-4 h-4 transition-colors ${isOpen ? 'text-[#BFA272]' : 'text-[#827E74]'}`} />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 sm:px-7 pb-6 pt-0 text-xs sm:text-sm text-[#47453F] leading-relaxed border-t border-[#DDD5C5]/70">
                    <p className="pt-4 font-normal">{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
