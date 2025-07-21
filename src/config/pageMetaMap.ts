import { SEOConfig } from '../types/seo';

export const seoConfig: SEOConfig = {
  defaultMeta: {
    title: 'Riviere Group® | Web Design, Branding, SEO, AI, & Music Production',
    description: 'Riviere Group® is a full-service media agency specializing in web design, branding, SEO, AI, and music production—empowering brands and artists to thrive.',
    keywords: 'web design, branding, SEO, AI, music production, digital marketing, web development',
    ogImage: '/riviere-group-og.jpg',
    ogType: 'website',
    ogUrl: 'https://therivieregroup.org',
    canonical: 'https://therivieregroup.org',
    twitterCard: 'summary_large_image',
    twitterSite: '@therivieregroup',
    structuredData: {
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
    }
  },
  routes: [
    {
      path: '/',
      component: 'SplashScreen',
      meta: {
        title: 'Riviere Group® | Welcome',
        description: 'Welcome to Riviere Group® - Your partner in digital excellence. Discover our comprehensive services in web design, branding, SEO, AI, and music production.',
        keywords: 'welcome, digital agency, web design, branding, SEO, AI, music production',
        ogType: 'website',
        canonical: 'https://therivieregroup.org',
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Riviere Group® | Welcome',
          description: 'Welcome to Riviere Group® - Your partner in digital excellence',
          url: 'https://therivieregroup.org',
          mainEntity: {
            '@type': 'Organization',
            name: 'Riviere Group®',
            description: 'Full-service media agency specializing in web design, branding, SEO, AI, and music production'
          }
        }
      }
    },
    {
      path: '/home',
      component: 'Homepage',
      meta: {
        title: 'Riviere Group® | Home - Web Design, Branding, SEO, AI, & Music Production',
        description: 'Riviere Group® is a full-service media agency specializing in web design, branding, SEO, AI, and music production—empowering brands and artists to thrive.',
        keywords: 'web design, branding, SEO, AI, music production, digital marketing, web development, media agency',
        ogType: 'website',
        canonical: 'https://therivieregroup.org/home',
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Riviere Group® | Home',
          description: 'Riviere Group® is a full-service media agency specializing in web design, branding, SEO, AI, and music production',
          url: 'https://therivieregroup.org/home',
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://therivieregroup.org/home'
              }
            ]
          }
        }
      }
    },
    {
      path: '/about-us',
      component: 'AboutUs',
      meta: {
        title: 'About Us | Riviere Group® - Our Story & Mission',
        description: 'Learn about Riviere Group® - our mission, values, and the team behind our innovative digital solutions. Discover how we help brands and artists succeed.',
        keywords: 'about us, company story, team, mission, values, digital agency, Riviere Group',
        ogType: 'website',
        canonical: 'https://therivieregroup.org/about-us',
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About Us | Riviere Group®',
          description: 'Learn about Riviere Group® - our mission, values, and the team behind our innovative digital solutions',
          url: 'https://therivieregroup.org/about-us',
          mainEntity: {
            '@type': 'Organization',
            name: 'Riviere Group®',
            description: 'Full-service media agency specializing in web design, branding, SEO, AI, and music production',
            foundingDate: '2020',
            numberOfEmployees: {
              '@type': 'QuantitativeValue',
              value: '10+'
            },
            founder: {
              '@type': 'Person',
              name: 'Mevin Riviere-Lee',
              jobTitle: 'Founder & CEO'
            }
          },
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://therivieregroup.org/home'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'About Us',
                item: 'https://therivieregroup.org/about-us'
              }
            ]
          }
        }
      }
    },
    {
      path: '/services',
      component: 'Services',
      meta: {
        title: 'Our Services | Riviere Group® - Web Design, Branding, SEO, AI & Music Production',
        description: 'Explore our comprehensive range of digital services including web design, branding, SEO optimization, AI solutions, and professional music production.',
        keywords: 'web design services, branding services, SEO services, AI solutions, music production, digital services',
        ogType: 'website',
        canonical: 'https://therivieregroup.org/services',
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Riviere Group® Digital Services',
          description: 'Comprehensive range of digital services including web design, branding, SEO, AI, and music production',
          provider: {
            '@type': 'Organization',
            name: 'Riviere Group®'
          },
          serviceType: 'Digital Marketing Services',
          areaServed: {
            '@type': 'Country',
            name: 'United States'
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
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://therivieregroup.org/home'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Services',
                item: 'https://therivieregroup.org/services'
              }
            ]
          }
        }
      }
    },
    {
      path: '/products',
      component: 'Products',
      meta: {
        title: 'Our Products | Riviere Group® - Digital Solutions & Tools',
        description: 'Discover our innovative digital products and tools designed to enhance your brand presence and streamline your digital operations.',
        keywords: 'digital products, web tools, software solutions, digital tools, brand tools',
        ogType: 'website',
        canonical: 'https://therivieregroup.org/products',
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Our Products | Riviere Group®',
          description: 'Discover our innovative digital products and tools designed to enhance your brand presence',
          url: 'https://therivieregroup.org/products',
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://therivieregroup.org/home'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Products',
                item: 'https://therivieregroup.org/products'
              }
            ]
          }
        }
      }
    },
    {
      path: '/portfolio',
      component: 'Portfolio',
      meta: {
        title: 'Portfolio | Riviere Group® - Our Work & Success Stories',
        description: 'Browse our impressive portfolio of successful projects, showcasing our expertise in web design, branding, and digital marketing solutions.',
        keywords: 'portfolio, case studies, work examples, successful projects, web design portfolio, branding projects',
        ogType: 'website',
        canonical: 'https://therivieregroup.org/portfolio',
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: 'Portfolio | Riviere Group®',
          description: 'Browse our impressive portfolio of successful projects, showcasing our expertise in web design, branding, and digital marketing solutions',
          creator: {
            '@type': 'Organization',
            name: 'Riviere Group®'
          },
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://therivieregroup.org/home'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Portfolio',
                item: 'https://therivieregroup.org/portfolio'
              }
            ]
          }
        }
      }
    },
    {
      path: '/blog',
      component: 'Blog',
      meta: {
        title: 'Blog | Riviere Group® - Digital Marketing Insights & Industry News',
        description: 'Stay updated with the latest digital marketing trends, web design insights, SEO tips, and industry news from Riviere Group®.',
        keywords: 'blog, digital marketing blog, web design blog, SEO tips, industry news, digital insights',
        ogType: 'website',
        canonical: 'https://therivieregroup.org/blog',
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'Blog | Riviere Group®',
          description: 'Stay updated with the latest digital marketing trends, web design insights, SEO tips, and industry news',
          publisher: {
            '@type': 'Organization',
            name: 'Riviere Group®',
            logo: {
              '@type': 'ImageObject',
              url: 'https://therivieregroup.org/r.svg'
            }
          },
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://therivieregroup.org/home'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Blog',
                item: 'https://therivieregroup.org/blog'
              }
            ]
          },
          // FAQ Schema for AI suggestions
          mainEntity: {
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
              }
            ]
          }
        }
      }
    },
    {
      path: '/blog/:slug',
      component: 'BlogPost',
      meta: {
        title: 'Blog Post | Riviere Group®',
        description: 'Read our latest blog post on digital marketing, web design, SEO, and industry insights.',
        keywords: 'blog post, digital marketing, web design, SEO, industry insights',
        ogType: 'article',
        canonical: 'https://therivieregroup.org/blog',
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          name: 'Blog Post | Riviere Group®',
          description: 'Read our latest blog post on digital marketing, web design, SEO, and industry insights',
          publisher: {
            '@type': 'Organization',
            name: 'Riviere Group®',
            logo: {
              '@type': 'ImageObject',
              url: 'https://therivieregroup.org/r.svg'
            }
          },
          // Q&A Schema for individual blog posts
          mainEntity: {
            '@type': 'Question',
            name: 'What insights does this article provide?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'This article provides valuable insights into digital marketing, web design, SEO strategies, and industry trends to help businesses improve their online presence and achieve better results.'
            }
          }
        }
      }
    },
    {
      path: '/contact',
      component: 'Contact',
      meta: {
        title: 'Contact Us | Riviere Group® - Get In Touch',
        description: 'Ready to start your project? Contact Riviere Group® today for a free consultation on web design, branding, SEO, AI, or music production services.',
        keywords: 'contact us, get quote, consultation, web design contact, branding contact, SEO contact',
        ogType: 'website',
        canonical: 'https://therivieregroup.org/contact',
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact Us | Riviere Group®',
          description: 'Ready to start your project? Contact Riviere Group® today for a free consultation',
          url: 'https://therivieregroup.org/contact',
          mainEntity: {
            '@type': 'Organization',
            name: 'Riviere Group®',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+1-866-814-2287',
              contactType: 'customer service',
              availableLanguage: 'English'
            }
          },
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://therivieregroup.org/home'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Contact',
                item: 'https://therivieregroup.org/contact'
              }
            ]
          }
        }
      }
    },
    {
      path: '/sturgeon',
      component: 'Sturgeon',
      meta: {
        title: 'Sturgeon | Riviere Group® - Project Showcase',
        description: 'Explore the Sturgeon project - a showcase of our web design and branding expertise.',
        keywords: 'sturgeon project, case study, web design project, branding project',
        ogType: 'website',
        canonical: 'https://therivieregroup.org/sturgeon',
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: 'Sturgeon Project | Riviere Group®',
          description: 'Explore the Sturgeon project - a showcase of our web design and branding expertise',
          creator: {
            '@type': 'Organization',
            name: 'Riviere Group®'
          },
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://therivieregroup.org/home'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Portfolio',
                item: 'https://therivieregroup.org/portfolio'
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Sturgeon Project',
                item: 'https://therivieregroup.org/sturgeon'
              }
            ]
          }
        }
      }
    },
    {
      path: '/nicole',
      component: 'Nicole',
      meta: {
        title: 'Nicole | Riviere Group® - Project Showcase',
        description: 'Discover the Nicole project - demonstrating our creative approach to web design and digital solutions.',
        keywords: 'nicole project, case study, web design project, creative design',
        ogType: 'website',
        canonical: 'https://therivieregroup.org/nicole',
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: 'Nicole Project | Riviere Group®',
          description: 'Discover the Nicole project - demonstrating our creative approach to web design and digital solutions',
          creator: {
            '@type': 'Organization',
            name: 'Riviere Group®'
          },
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://therivieregroup.org/home'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Portfolio',
                item: 'https://therivieregroup.org/portfolio'
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Nicole Project',
                item: 'https://therivieregroup.org/nicole'
              }
            ]
          }
        }
      }
    },
    {
      path: '/mevin',
      component: 'Mevin',
      meta: {
        title: 'Mevin | Riviere Group® - Project Showcase',
        description: 'Explore the Mevin project - showcasing our expertise in digital branding and web development.',
        keywords: 'mevin project, case study, branding project, web development',
        ogType: 'website',
        canonical: 'https://therivieregroup.org/mevin',
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: 'Mevin Project | Riviere Group®',
          description: 'Explore the Mevin project - showcasing our expertise in digital branding and web development',
          creator: {
            '@type': 'Organization',
            name: 'Riviere Group®'
          },
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://therivieregroup.org/home'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Portfolio',
                item: 'https://therivieregroup.org/portfolio'
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Mevin Project',
                item: 'https://therivieregroup.org/mevin'
              }
            ]
          }
        }
      }
    },
    {
      path: '/nexus',
      component: 'Nexus',
      meta: {
        title: 'Nexus | Riviere Group® - Project Showcase',
        description: 'Discover the Nexus project - highlighting our innovative approach to digital solutions and web design.',
        keywords: 'nexus project, case study, digital solutions, innovative web design',
        ogType: 'website',
        canonical: 'https://therivieregroup.org/nexus',
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: 'Nexus Project | Riviere Group®',
          description: 'Discover the Nexus project - highlighting our innovative approach to digital solutions and web design',
          creator: {
            '@type': 'Organization',
            name: 'Riviere Group®'
          },
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://therivieregroup.org/home'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Portfolio',
                item: 'https://therivieregroup.org/portfolio'
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Nexus Project',
                item: 'https://therivieregroup.org/nexus'
              }
            ]
          }
        }
      }
    },
    {
      path: '/client-login',
      component: 'ClientLogin',
      meta: {
        title: 'Client Login | Riviere Group® - Secure Client Portal',
        description: 'Access your secure client portal to view project updates, files, and communicate with our team.',
        keywords: 'client login, client portal, project management, secure access',
        ogType: 'website',
        canonical: 'https://therivieregroup.org/client-login',
        noIndex: true,
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Client Login | Riviere Group®',
          description: 'Access your secure client portal to view project updates, files, and communicate with our team',
          url: 'https://therivieregroup.org/client-login'
        }
      }
    }
  ]
}; 