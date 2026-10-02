// Verified FAQ Data aligned with Joint Bricks Master Company Profile v1.0
export interface FaqData {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const FAQS_DATA: FaqData[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'What is Joint Bricks?',
    answer: 'Joint Bricks (Joint Bricks Propshare Private Limited, CIN: U68100RJ2025PTC109627) is a commercial real-estate investment business enabling investors to participate in commercial real estate through shares in a dedicated property-specific SPV/company that owns the underlying property.'
  },
  {
    id: 'faq-2',
    category: 'Structure',
    question: 'What am I actually buying when I invest through Joint Bricks?',
    answer: 'You are purchasing equity shares in a dedicated Special Purpose Vehicle (a Private Limited Company) incorporated specifically to acquire and hold legal title to a single commercial property. The SPV owns legal title to the property; investors do not directly hold physical title.'
  },
  {
    id: 'faq-3',
    category: 'Investment',
    question: 'What is the minimum investment amount?',
    answer: 'The minimum investment is ₹10 lakh per property. This is a Joint Bricks company business policy, not a statutory, SEBI-mandated, or regulatory minimum.'
  },
  {
    id: 'faq-4',
    category: 'Returns',
    question: 'Is the 5% rental yield guaranteed?',
    answer: 'No. The 5% p.a. figure is an acquisition-stage screening benchmark and is not a guaranteed investor return, rental income, yield, or profit.'
  },
  {
    id: 'faq-5',
    category: 'Regulatory',
    question: 'Is Joint Bricks an SM-REIT or SEBI registered?',
    answer: 'Joint Bricks is not an SM-REIT. It is not currently operating as a SEBI-registered entity and does not have SM-REIT registration or approval from SEBI. Certain aspects of its business model may be similar to or related to functions within an SM-REIT framework, but these similarities do not constitute SM-REIT registration or SEBI-regulated status.'
  },
  {
    id: 'faq-6',
    category: 'Exit',
    question: 'What is the holding period and exit policy?',
    answer: 'Investments carry a minimum holding period of 1 year, with no early exit before 1 year. After 1 year, investors can exit or transfer shares subject to applicable SPV and share-transfer terms and documentation.'
  }
];
