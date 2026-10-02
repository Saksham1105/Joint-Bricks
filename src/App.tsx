import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { LoadingSpinner, ErrorState } from './components/common/States';

// Lazy-loaded Page Components for Optimal Bundling
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const PropertiesPage = lazy(() => import('./pages/PropertiesPage').then(m => ({ default: m.PropertiesPage })));
const PropertyDetailPage = lazy(() => import('./pages/PropertyDetailPage').then(m => ({ default: m.PropertyDetailPage })));
const HowItWorksPage = lazy(() => import('./pages/HowItWorksPage').then(m => ({ default: m.HowItWorksPage })));
const WhyJointBricksPage = lazy(() => import('./pages/WhyJointBricksPage').then(m => ({ default: m.WhyJointBricksPage })));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage').then(m => ({ default: m.ResourcesPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const FaqsPage = lazy(() => import('./pages/FaqsPage').then(m => ({ default: m.FaqsPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const LegalPage = lazy(() => import('./pages/LegalPage').then(m => ({ default: m.LegalPage })));

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#14171B]">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<LoadingSpinner label="Loading Joint Bricks Platform..." />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              
              {/* Opportunities Directory & Aliases */}
              <Route path="/opportunities" element={<PropertiesPage />} />
              <Route path="/properties" element={<Navigate to="/opportunities" replace />} />
              <Route path="/opportunities/:id" element={<PropertyDetailPage />} />

              {/* Explainer & Brand Differentiation */}
              <Route path="/how-it-works" element={<HowItWorksPage />} />
              <Route path="/why-joint-bricks" element={<WhyJointBricksPage />} />
              <Route path="/why-join-bricks" element={<Navigate to="/why-joint-bricks" replace />} />

              {/* Research Index & Article Routing */}
              <Route path="/research" element={<ResourcesPage />} />
              <Route path="/resources" element={<Navigate to="/research" replace />} />
              <Route path="/research/:slug" element={<ResourcesPage />} />

              {/* Company & FAQs */}
              <Route path="/about" element={<AboutPage />} />
              <Route path="/faq" element={<FaqsPage />} />
              <Route path="/faqs" element={<Navigate to="/faq" replace />} />
              <Route path="/contact" element={<ContactPage />} />

              {/* Legal & Regulatory Disclosures */}
              <Route path="/legal" element={<LegalPage />} />

              {/* Catch-all 404 Route */}
              <Route
                path="*"
                element={
                  <div className="py-20 text-center max-w-lg mx-auto">
                    <ErrorState
                      title="404 — Page Not Found"
                      message="The page or opportunity route you requested could not be located. Please check the URL or return home."
                      onRetry={() => window.location.href = "/"}
                    />
                  </div>
                }
              />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
