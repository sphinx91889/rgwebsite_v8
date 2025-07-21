import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { seoConfig } from '../config/pageMetaMap';
import { PageMeta } from '../types/seo';

export const useSEO = (customMeta?: Partial<PageMeta>) => {
  const location = useLocation();
  
  useEffect(() => {
    // Find the route configuration for current path
    const routeConfig = seoConfig.routes.find(route => {
      // Handle dynamic routes like /blog/:slug
      if (route.path.includes(':')) {
        const routePattern = route.path.replace(/:[^/]+/g, '[^/]+');
        const regex = new RegExp(`^${routePattern}$`);
        return regex.test(location.pathname);
      }
      return route.path === location.pathname;
    });

    // Merge default meta with route-specific meta and custom meta
    const finalMeta: PageMeta = {
      ...seoConfig.defaultMeta,
      ...(routeConfig?.meta || {}),
      ...customMeta
    };

    // Update document title
    document.title = finalMeta.title;

    // Update meta description
    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta');
      descriptionMeta.setAttribute('name', 'description');
      document.head.appendChild(descriptionMeta);
    }
    descriptionMeta.setAttribute('content', finalMeta.description);

    // Update keywords
    if (finalMeta.keywords) {
      let keywordsMeta = document.querySelector('meta[name="keywords"]');
      if (!keywordsMeta) {
        keywordsMeta = document.createElement('meta');
        keywordsMeta.setAttribute('name', 'keywords');
        document.head.appendChild(keywordsMeta);
      }
      keywordsMeta.setAttribute('content', finalMeta.keywords);
    }

    // Update Open Graph tags
    const updateOGTag = (property: string, content: string) => {
      let ogMeta = document.querySelector(`meta[property="${property}"]`);
      if (!ogMeta) {
        ogMeta = document.createElement('meta');
        ogMeta.setAttribute('property', property);
        document.head.appendChild(ogMeta);
      }
      ogMeta.setAttribute('content', content);
    };

    updateOGTag('og:title', finalMeta.title);
    updateOGTag('og:description', finalMeta.description);
    updateOGTag('og:type', finalMeta.ogType || 'website');
    if (finalMeta.ogImage) {
      updateOGTag('og:image', finalMeta.ogImage);
    }
    if (finalMeta.ogUrl) {
      updateOGTag('og:url', finalMeta.ogUrl);
    }

    // Update Twitter Card tags
    if (finalMeta.twitterCard) {
      let twitterCardMeta = document.querySelector('meta[name="twitter:card"]');
      if (!twitterCardMeta) {
        twitterCardMeta = document.createElement('meta');
        twitterCardMeta.setAttribute('name', 'twitter:card');
        document.head.appendChild(twitterCardMeta);
      }
      twitterCardMeta.setAttribute('content', finalMeta.twitterCard);
    }

    // Update canonical URL
    if (finalMeta.canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', finalMeta.canonical);
    }

    // Update robots meta tag
    const robotsContent = [
      finalMeta.noIndex ? 'noindex' : 'index',
      finalMeta.noFollow ? 'nofollow' : 'follow'
    ].join(',');
    
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', robotsContent);

    // Update structured data
    if (finalMeta.structuredData) {
      let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
      if (!structuredDataScript) {
        structuredDataScript = document.createElement('script');
        structuredDataScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(structuredDataScript);
      }
      structuredDataScript.textContent = JSON.stringify(finalMeta.structuredData);
    }

  }, [location.pathname, customMeta]);

  return {
    currentMeta: seoConfig.routes.find(route => route.path === location.pathname)?.meta || seoConfig.defaultMeta
  };
}; 