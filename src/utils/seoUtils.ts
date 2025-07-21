import { PageMeta } from '../types/seo';

export const generateBlogPostMeta = (
  title: string,
  description: string,
  slug: string,
  publishedDate?: string,
  author?: string,
  image?: string,
  category?: string,
  tags?: string[],
  faqs?: Array<{ question: string; answer: string }>
): PageMeta => {
  const baseUrl = 'https://therivieregroup.org';
  
  // Generate relevant FAQs based on the blog post content
  const defaultFaqs = faqs || generateRelevantFaqs(title, category);
  
  return {
    title: `${title} | Riviere Group® Blog`,
    description,
    keywords: `${title.toLowerCase()}, blog, digital marketing, web design, SEO, Riviere Group, ${category || ''}, ${tags?.join(', ') || ''}`,
    ogImage: image || '/riviere-group-og.jpg',
    ogType: 'article',
    ogUrl: `${baseUrl}/blog/${slug}`,
    canonical: `${baseUrl}/blog/${slug}`,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: title,
      description,
      author: {
        '@type': 'Person',
        name: author || 'Riviere Group',
        url: `${baseUrl}/about-us`
      },
      publisher: {
        '@type': 'Organization',
        name: 'Riviere Group®',
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/r.svg`,
          width: 60,
          height: 60
        }
      },
      datePublished: publishedDate,
      dateModified: publishedDate,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${baseUrl}/blog/${slug}`
      },
      image: image ? `${baseUrl}${image}` : `${baseUrl}/riviere-group-og.jpg`,
      articleSection: category || 'Digital Marketing',
      keywords: tags?.join(', ') || 'digital marketing, web design, SEO',
      wordCount: description.length + title.length,
      articleBody: description,
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${baseUrl}/home`
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: `${baseUrl}/blog`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: title,
            item: `${baseUrl}/blog/${slug}`
          }
        ]
      },
      // FAQ Schema for AI suggestions
      mainEntity: {
        '@type': 'FAQPage',
        mainEntity: defaultFaqs.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      }
    }
  };
};

// Generate relevant FAQs based on blog post content
function generateRelevantFaqs(title: string, category?: string): Array<{ question: string; answer: string }> {
  const faqs: Array<{ question: string; answer: string }> = [];
  
  // Add category-specific FAQs
  if (category?.toLowerCase().includes('seo')) {
    faqs.push(
      {
        question: 'How can I improve my website SEO?',
        answer: 'To improve website SEO, focus on quality content, technical optimization, mobile responsiveness, page speed, and building quality backlinks. Our SEO services can help you achieve better rankings.'
      },
      {
        question: 'What are the most important SEO factors?',
        answer: 'The most important SEO factors include quality content, page speed, mobile-friendliness, secure HTTPS, user experience, and quality backlinks. Technical SEO and on-page optimization are also crucial.'
      },
      {
        question: 'How long does it take to see SEO results?',
        answer: 'SEO results typically take 3-6 months to become visible, though some improvements can be seen within weeks. Long-term SEO strategies provide sustainable ranking improvements.'
      }
    );
  }
  
  if (category?.toLowerCase().includes('web design')) {
    faqs.push(
      {
        question: 'What is the cost of web design services?',
        answer: 'Web design costs vary based on project complexity, features, and requirements. Contact us for a personalized quote tailored to your specific needs and goals.'
      },
      {
        question: 'How long does it take to complete a website project?',
        answer: 'Website project timelines typically range from 2-8 weeks depending on complexity, features, and client feedback cycles. We provide detailed timelines during project planning.'
      },
      {
        question: 'Do you provide ongoing support after website launch?',
        answer: 'Yes, we offer ongoing support, maintenance, and updates to ensure your website continues to perform optimally and stays current with the latest technologies and trends.'
      }
    );
  }
  
  if (category?.toLowerCase().includes('branding')) {
    faqs.push(
      {
        question: 'What services does Riviere Group offer?',
        answer: 'Riviere Group offers comprehensive digital services including web design, branding, SEO, AI solutions, and music production. We help brands and artists thrive in the digital landscape.'
      },
      {
        question: 'How can branding improve my business?',
        answer: 'Strong branding creates recognition, builds trust, differentiates your business, and increases customer loyalty. A cohesive brand strategy can significantly impact your business success.'
      },
      {
        question: 'What elements are included in branding services?',
        answer: 'Branding services typically include logo design, color palette, typography, brand guidelines, marketing materials, and brand strategy development to create a cohesive brand identity.'
      }
    );
  }
  
  if (category?.toLowerCase().includes('ai')) {
    faqs.push(
      {
        question: 'How can AI improve my business?',
        answer: 'AI can improve your business through automation, data analysis, customer service chatbots, personalized marketing, and process optimization. Our AI solutions help businesses work smarter.'
      },
      {
        question: 'What AI services do you offer?',
        answer: 'We offer AI integration, automation solutions, chatbot development, data analysis, and custom AI applications tailored to your business needs and goals.'
      },
      {
        question: 'Is AI expensive to implement?',
        answer: 'AI implementation costs vary based on complexity and requirements. We offer scalable solutions that fit different budgets and provide clear ROI through efficiency improvements.'
      }
    );
  }
  
  // Add general FAQs if no specific category matches
  if (faqs.length === 0) {
    faqs.push(
      {
        question: 'What services does Riviere Group offer?',
        answer: 'Riviere Group offers comprehensive digital services including web design, branding, SEO, AI solutions, and music production. We help brands and artists thrive in the digital landscape.'
      },
      {
        question: 'How can I improve my website performance?',
        answer: 'To improve website performance, optimize images, use caching, minimize code, improve server response time, and ensure mobile responsiveness. Our web design services focus on performance.'
      },
      {
        question: 'What makes a successful digital marketing strategy?',
        answer: 'A successful digital marketing strategy includes clear goals, target audience research, quality content, SEO optimization, social media presence, and consistent measurement and optimization.'
      }
    );
  }
  
  return faqs;
}

export const generatePortfolioProjectMeta = (
  projectName: string,
  description: string,
  slug: string,
  image?: string,
  category?: string,
  client?: string,
  completionDate?: string,
  technologies?: string[]
): PageMeta => {
  const baseUrl = 'https://therivieregroup.org';
  
  return {
    title: `${projectName} | Portfolio | Riviere Group®`,
    description,
    keywords: `${projectName.toLowerCase()}, portfolio, case study, web design, branding, ${category || 'digital project'}, Riviere Group, ${technologies?.join(', ') || ''}`,
    ogImage: image || '/riviere-group-og.jpg',
    ogType: 'website',
    ogUrl: `${baseUrl}/portfolio/${slug}`,
    canonical: `${baseUrl}/portfolio/${slug}`,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: projectName,
      description,
      creator: {
        '@type': 'Organization',
        name: 'Riviere Group®',
        url: baseUrl
      },
      image: image ? `${baseUrl}${image}` : `${baseUrl}/riviere-group-og.jpg`,
      url: `${baseUrl}/portfolio/${slug}`,
      dateCreated: completionDate,
      genre: category || 'Digital Design',
      keywords: technologies?.join(', ') || 'web design, branding, digital marketing',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${baseUrl}/home`
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Portfolio',
            item: `${baseUrl}/portfolio`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: projectName,
            item: `${baseUrl}/portfolio/${slug}`
          }
        ]
      },
      ...(client && {
        contributor: {
          '@type': 'Organization',
          name: client
        }
      })
    }
  };
};

export const generateServicePageMeta = (
  serviceName: string,
  description: string,
  slug: string,
  image?: string,
  price?: string,
  duration?: string
): PageMeta => {
  const baseUrl = 'https://therivieregroup.org';
  
  return {
    title: `${serviceName} | Riviere Group®`,
    description,
    keywords: `${serviceName.toLowerCase()}, service, ${slug}, Riviere Group, digital marketing, web design`,
    ogImage: image || '/riviere-group-og.jpg',
    ogType: 'website',
    ogUrl: `${baseUrl}/services/${slug}`,
    canonical: `${baseUrl}/services/${slug}`,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: serviceName,
      description,
      provider: {
        '@type': 'Organization',
        name: 'Riviere Group®',
        url: baseUrl
      },
      serviceType: serviceName,
      areaServed: {
        '@type': 'Country',
        name: 'United States'
      },
      ...(price && {
        offers: {
          '@type': 'Offer',
          price: price,
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock'
        }
      }),
      ...(duration && {
        timeRequired: duration
      }),
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${baseUrl}/home`
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: `${baseUrl}/services`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: serviceName,
            item: `${baseUrl}/services/${slug}`
          }
        ]
      }
    }
  };
};

export const generateFAQPageMeta = (
  title: string,
  description: string,
  faqs: Array<{ question: string; answer: string }>
): PageMeta => {
  const baseUrl = 'https://therivieregroup.org';
  
  return {
    title: `${title} | Riviere Group®`,
    description,
    keywords: `${title.toLowerCase()}, FAQ, frequently asked questions, Riviere Group`,
    ogType: 'website',
    canonical: `${baseUrl}/faq`,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      name: title,
      description,
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    }
  };
};

export const generateLocalBusinessMeta = (
  businessName: string,
  description: string,
  address: string,
  phone: string,
  email: string,
  hours: string
): PageMeta => {
  const baseUrl = 'https://therivieregroup.org';
  
  return {
    title: `${businessName} | Contact & Location`,
    description,
    keywords: `${businessName.toLowerCase()}, contact, location, address, phone, ${address}`,
    ogType: 'website',
    canonical: `${baseUrl}/contact`,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: businessName,
      description,
      url: baseUrl,
      telephone: phone,
      email: email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: address,
        addressCountry: 'US'
      },
      openingHours: hours,
      hasMap: `${baseUrl}/contact#map`,
      sameAs: [
        'https://facebook.com/therivieregroup',
        'https://instagram.com/therivieregroup',
        'https://linkedin.com/company/therivieregroup'
      ]
    }
  };
};

export const mergeMeta = (baseMeta: PageMeta, customMeta: Partial<PageMeta>): PageMeta => {
  return {
    ...baseMeta,
    ...customMeta,
    structuredData: {
      ...baseMeta.structuredData,
      ...customMeta.structuredData
    }
  };
};

export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Riviere Group®',
  alternateName: 'Riviere Group',
  description: 'Full-service media agency specializing in web design, branding, SEO, AI, and music production',
  url: 'https://therivieregroup.org',
  logo: {
    '@type': 'ImageObject',
    url: 'https://therivieregroup.org/r.svg',
    width: 60,
    height: 60
  },
  image: {
    '@type': 'ImageObject',
    url: 'https://therivieregroup.org/riviere-group-og.jpg',
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
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Design & Development',
          description: 'Custom website design and development services'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Branding & Design',
          description: 'Comprehensive branding and graphic design services'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SEO & Digital Marketing',
          description: 'Search engine optimization and digital marketing services'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Solutions',
          description: 'Artificial intelligence integration and automation services'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Music Production',
          description: 'Professional music production and audio engineering services'
        }
      }
    ]
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States'
  },
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 40.7128,
      longitude: -74.0060
    },
    geoRadius: '5000'
  }
});

// Generate comprehensive FAQ for AI suggestions
export const generateComprehensiveFAQ = () => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What services does Riviere Group offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Riviere Group offers comprehensive digital services including web design, branding, SEO, AI solutions, and music production. We help brands and artists thrive in the digital landscape.'
      }
    },
    {
      '@type': 'Question',
      name: 'How can I improve my website SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To improve website SEO, focus on quality content, technical optimization, mobile responsiveness, page speed, and building quality backlinks. Our SEO services can help you achieve better rankings.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the cost of web design services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Web design costs vary based on project complexity, features, and requirements. Contact us for a personalized quote tailored to your specific needs and goals.'
      }
    },
    {
      '@type': 'Question',
      name: 'How long does it take to complete a website project?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Website project timelines typically range from 2-8 weeks depending on complexity, features, and client feedback cycles. We provide detailed timelines during project planning.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you provide ongoing support after website launch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer ongoing support, maintenance, and updates to ensure your website continues to perform optimally and stays current with the latest technologies and trends.'
      }
    },
    {
      '@type': 'Question',
      name: 'How can AI improve my business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI can improve your business through automation, data analysis, customer service chatbots, personalized marketing, and process optimization. Our AI solutions help businesses work smarter.'
      }
    },
    {
      '@type': 'Question',
      name: 'What makes a successful digital marketing strategy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A successful digital marketing strategy includes clear goals, target audience research, quality content, SEO optimization, social media presence, and consistent measurement and optimization.'
      }
    },
    {
      '@type': 'Question',
      name: 'How can branding improve my business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Strong branding creates recognition, builds trust, differentiates your business, and increases customer loyalty. A cohesive brand strategy can significantly impact your business success.'
      }
    }
  ]
}); 