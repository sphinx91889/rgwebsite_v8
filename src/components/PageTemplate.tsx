import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageMeta } from '../types/seo';

interface PageTemplateProps {
  meta: PageMeta;
  children: React.ReactNode;
}

export const PageTemplate: React.FC<PageTemplateProps> = ({ meta, children }) => {
  // Update document title and meta tags
  useEffect(() => {
    // Set robots meta tag based on noIndex and noFollow
    const robotsContent = [
      meta.noIndex ? 'noindex' : 'index',
      meta.noFollow ? 'nofollow' : 'follow'
    ].join(',');
    
    // Update or create robots meta tag
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', robotsContent);
  }, [meta]);

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        {meta.keywords && <meta name="keywords" content={meta.keywords} />}
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content={meta.ogType || 'website'} />
        {meta.ogImage && <meta property="og:image" content={meta.ogImage} />}
        {meta.ogUrl && <meta property="og:url" content={meta.ogUrl} />}
        
        {/* Twitter Card Meta Tags */}
        {meta.twitterCard && <meta name="twitter:card" content={meta.twitterCard} />}
        {meta.twitterSite && <meta name="twitter:site" content={meta.twitterSite} />}
        {meta.twitterCreator && <meta name="twitter:creator" content={meta.twitterCreator} />}
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        {meta.ogImage && <meta name="twitter:image" content={meta.ogImage} />}
        
        {/* Canonical URL */}
        {meta.canonical && <link rel="canonical" href={meta.canonical} />}
        
        {/* Structured Data */}
        {meta.structuredData && (
          <script type="application/ld+json">
            {JSON.stringify(meta.structuredData)}
          </script>
        )}
      </Helmet>
      {children}
    </>
  );
}; 