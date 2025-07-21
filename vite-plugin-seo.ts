import { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';
import { seoConfig } from './src/config/pageMetaMap';

interface SEOPluginOptions {
  baseUrl?: string;
  outputDir?: string;
}

export function seoPlugin(options: SEOPluginOptions = {}): Plugin {
  const { baseUrl = 'https://therivieregroup.org', outputDir = 'dist' } = options;

  return {
    name: 'vite-plugin-seo',
    apply: 'build',
    
    generateBundle() {
      const htmlTemplate = fs.readFileSync('index.html', 'utf-8');
      
      seoConfig.routes.forEach(route => {
        // Skip dynamic routes for static generation
        if (route.path.includes(':')) {
          return;
        }

        const meta = {
          ...seoConfig.defaultMeta,
          ...route.meta
        };

        // Generate HTML content with proper meta tags
        let htmlContent = htmlTemplate;

        // Replace title
        htmlContent = htmlContent.replace(
          /<title>.*?<\/title>/,
          `<title>${meta.title}</title>`
        );

        // Replace or add meta description
        if (htmlContent.includes('name="description"')) {
          htmlContent = htmlContent.replace(
            /<meta name="description" content=".*?"/,
            `<meta name="description" content="${meta.description}"`
          );
        } else {
          htmlContent = htmlContent.replace(
            /<meta name="viewport"/,
            `<meta name="description" content="${meta.description}" />\n    <meta name="viewport"`
          );
        }

        // Add or update keywords
        if (meta.keywords) {
          if (htmlContent.includes('name="keywords"')) {
            htmlContent = htmlContent.replace(
              /<meta name="keywords" content=".*?"/,
              `<meta name="keywords" content="${meta.keywords}"`
            );
          } else {
            htmlContent = htmlContent.replace(
              /<meta name="description" content=".*?"/,
              `<meta name="description" content="${meta.description}" />\n    <meta name="keywords" content="${meta.keywords}"`
            );
          }
        }

        // Update Open Graph tags
        const ogTags = [
          `<meta property="og:title" content="${meta.title}" />`,
          `<meta property="og:description" content="${meta.description}" />`,
          `<meta property="og:type" content="${meta.ogType || 'website'}" />`,
          meta.ogImage ? `<meta property="og:image" content="${baseUrl}${meta.ogImage}" />` : '',
          meta.ogUrl ? `<meta property="og:url" content="${meta.ogUrl}" />` : ''
        ].filter(Boolean).join('\n    ');

        // Remove existing og tags and add new ones
        htmlContent = htmlContent.replace(
          /<meta property="og:[^>]*>/g,
          ''
        );
        htmlContent = htmlContent.replace(
          /<meta name="viewport"/,
          `${ogTags}\n    <meta name="viewport"`
        );

        // Add Twitter Card tags
        if (meta.twitterCard) {
          const twitterTags = [
            `<meta name="twitter:card" content="${meta.twitterCard}" />`,
            meta.twitterSite ? `<meta name="twitter:site" content="${meta.twitterSite}" />` : '',
            meta.twitterCreator ? `<meta name="twitter:creator" content="${meta.twitterCreator}" />` : '',
            `<meta name="twitter:title" content="${meta.title}" />`,
            `<meta name="twitter:description" content="${meta.description}" />`,
            meta.ogImage ? `<meta name="twitter:image" content="${baseUrl}${meta.ogImage}" />` : ''
          ].filter(Boolean).join('\n    ');

          htmlContent = htmlContent.replace(
            /<meta name="viewport"/,
            `${twitterTags}\n    <meta name="viewport"`
          );
        }

        // Update canonical URL
        if (meta.canonical) {
          if (htmlContent.includes('rel="canonical"')) {
            htmlContent = htmlContent.replace(
              /<link rel="canonical" href=".*?"/,
              `<link rel="canonical" href="${meta.canonical}"`
            );
          } else {
            htmlContent = htmlContent.replace(
              /<link rel="icon"/,
              `<link rel="canonical" href="${meta.canonical}" />\n    <link rel="icon"`
            );
          }
        }

        // Add robots meta tag
        const robotsContent = [
          meta.noIndex ? 'noindex' : 'index',
          meta.noFollow ? 'nofollow' : 'follow'
        ].join(',');
        
        htmlContent = htmlContent.replace(
          /<meta name="viewport"/,
          `<meta name="robots" content="${robotsContent}" />\n    <meta name="viewport"`
        );

        // Add comprehensive structured data
        if (meta.structuredData) {
          const structuredDataScript = `<script type="application/ld+json">${JSON.stringify(meta.structuredData)}</script>`;
          htmlContent = htmlContent.replace(
            /<link rel="icon"/,
            `${structuredDataScript}\n    <link rel="icon"`
          );
        }

        // Add additional schema markup for rich snippets
        const additionalSchema = generateAdditionalSchema(route.path, meta);
        if (additionalSchema) {
          const additionalSchemaScript = `<script type="application/ld+json">${JSON.stringify(additionalSchema)}</script>`;
          htmlContent = htmlContent.replace(
            /<link rel="icon"/,
            `${additionalSchemaScript}\n    <link rel="icon"`
          );
        }

        // Determine output path
        let outputPath = route.path === '/' ? '/index.html' : `${route.path}/index.html`;
        outputPath = path.join(outputDir, outputPath);

        // Ensure directory exists
        const outputDirPath = path.dirname(outputPath);
        if (!fs.existsSync(outputDirPath)) {
          fs.mkdirSync(outputDirPath, { recursive: true });
        }

        // Write the HTML file
        fs.writeFileSync(outputPath, htmlContent);
        console.log(`Generated SEO-optimized HTML: ${outputPath}`);
      });
    }
  };
}

function generateAdditionalSchema(path: string, meta: any) {
  const baseUrl = 'https://therivieregroup.org';
  
  // Organization schema for all pages
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Riviere Group®',
    alternateName: 'Riviere Group',
    description: 'Full-service media agency specializing in web design, branding, SEO, AI, and music production',
    url: baseUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/r.svg`,
      width: 60,
      height: 60
    },
    image: {
      '@type': 'ImageObject',
      url: `${baseUrl}/riviere-group-og.jpg`,
      width: 1200,
      height: 630
    },
    sameAs: [
      'https://facebook.com/therivieregroup',
      'https://instagram.com/therivieregroup',
      'https://linkedin.com/company/therivieregroup',
      'https://twitter.com/therivieregroup',
      'https://youtube.com/@therivieregroup'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-866-814-2287',
      contactType: 'customer service',
      availableLanguage: 'English'
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US'
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States'
    }
  };

  // Page-specific additional schema
  switch (path) {
    case '/services':
      return {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Digital Services',
        description: 'Comprehensive range of digital services offered by Riviere Group®',
        itemListElement: [
          {
            '@type': 'Service',
            position: 1,
            name: 'Web Design & Development',
            description: 'Custom website design and development services',
            provider: {
              '@type': 'Organization',
              name: 'Riviere Group®'
            }
          },
          {
            '@type': 'Service',
            position: 2,
            name: 'Branding & Design',
            description: 'Comprehensive branding and graphic design services',
            provider: {
              '@type': 'Organization',
              name: 'Riviere Group®'
            }
          },
          {
            '@type': 'Service',
            position: 3,
            name: 'SEO & Digital Marketing',
            description: 'Search engine optimization and digital marketing services',
            provider: {
              '@type': 'Organization',
              name: 'Riviere Group®'
            }
          },
          {
            '@type': 'Service',
            position: 4,
            name: 'AI Solutions',
            description: 'Artificial intelligence integration and automation services',
            provider: {
              '@type': 'Organization',
              name: 'Riviere Group®'
            }
          },
          {
            '@type': 'Service',
            position: 5,
            name: 'Music Production',
            description: 'Professional music production and audio engineering services',
            provider: {
              '@type': 'Organization',
              name: 'Riviere Group®'
            }
          }
        ]
      };

    case '/contact':
      return {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Riviere Group®',
        description: 'Full-service media agency specializing in web design, branding, SEO, AI, and music production',
        url: baseUrl,
        telephone: '+1-866-814-2287',
        email: 'contact@therivieregroup.org',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'US'
        },
        openingHours: 'Mo-Fr 09:00-18:00',
        hasMap: `${baseUrl}/contact#map`,
        sameAs: [
          'https://facebook.com/therivieregroup',
          'https://instagram.com/therivieregroup',
          'https://linkedin.com/company/therivieregroup'
        ]
      };

    case '/about-us':
      return {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Mevin Riviere-Lee',
        jobTitle: 'Founder & CEO',
        worksFor: {
          '@type': 'Organization',
          name: 'Riviere Group®'
        },
        description: 'Visionary leader and primary architect of Riviere Group\'s platforms, branding, and strategic direction',
        url: `${baseUrl}/about-us`,
        sameAs: [
          'https://linkedin.com/in/mevinrivierelee'
        ]
      };

    case '/portfolio':
    case '/sturgeon':
    case '/nicole':
    case '/mevin':
    case '/nexus':
      return {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Portfolio Projects',
        description: 'Showcase of successful projects and case studies',
        itemListElement: [
          {
            '@type': 'CreativeWork',
            position: 1,
            name: 'Sturgeon Project',
            description: 'Web design and branding expertise showcase',
            creator: {
              '@type': 'Organization',
              name: 'Riviere Group®'
            },
            url: `${baseUrl}/sturgeon`
          },
          {
            '@type': 'CreativeWork',
            position: 2,
            name: 'Nicole Project',
            description: 'Creative approach to web design and digital solutions',
            creator: {
              '@type': 'Organization',
              name: 'Riviere Group®'
            },
            url: `${baseUrl}/nicole`
          },
          {
            '@type': 'CreativeWork',
            position: 3,
            name: 'Mevin Project',
            description: 'Digital branding and web development expertise',
            creator: {
              '@type': 'Organization',
              name: 'Riviere Group®'
            },
            url: `${baseUrl}/mevin`
          },
          {
            '@type': 'CreativeWork',
            position: 4,
            name: 'Nexus Project',
            description: 'Innovative approach to digital solutions and web design',
            creator: {
              '@type': 'Organization',
              name: 'Riviere Group®'
            },
            url: `${baseUrl}/nexus`
          }
        ]
      };

    default:
      return organizationSchema;
  }
} 