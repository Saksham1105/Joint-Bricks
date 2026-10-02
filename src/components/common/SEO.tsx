import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  schema?: object | object[];
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = "commercial real estate investment India, SPV real estate, commercial retail real estate, joint bricks, propshare, special purpose vehicle",
  canonicalUrl = window.location.href,
  ogType = "website",
  ogImage = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  schema,
}) => {
  useEffect(() => {
    // 1. Title Tag
    document.title = title;

    // Helper function to set or create meta tag
    const setMetaTag = (attributeName: string, attributeValue: string, content: string) => {
      let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);

    // 3. Open Graph Tags (SEO & Social Discovery)
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:site_name', 'Joint Bricks');

    // 4. Twitter Card Meta Tags (SEO & Social Discovery)
    setMetaTag('property', 'twitter:card', 'summary_large_image');
    setMetaTag('property', 'twitter:title', title);
    setMetaTag('property', 'twitter:description', description);
    setMetaTag('property', 'twitter:image', ogImage);

    // 5. Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', canonicalUrl);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', canonicalUrl);
      document.head.appendChild(canonical);
    }

    // 6. Dynamic JSON-LD Structured Data Schema Insertion (AEO / GEO Engine Optimization)
    const existingSchemaScript = document.getElementById('dynamic-page-schema');
    if (existingSchemaScript) {
      existingSchemaScript.remove();
    }

    if (schema) {
      const script = document.createElement('script');
      script.id = 'dynamic-page-schema';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup dynamic schema on unmount
      const schemaScript = document.getElementById('dynamic-page-schema');
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, [title, description, keywords, canonicalUrl, ogType, ogImage, schema]);

  return null;
};
