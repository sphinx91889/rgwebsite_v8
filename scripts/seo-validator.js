#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 SEO System Validation');
console.log('=======================\n');

// Check required files
const requiredFiles = [
  'public/robots.txt',
  'public/sitemap.xml',
  'public/sitemap-blog.xml',
  'public/sitemap-portfolio.xml',
  'public/_redirects',
  'src/config/pageMetaMap.ts',
  'src/components/PageTemplate.tsx',
  'src/hooks/useSEO.ts',
  'src/components/withSEO.tsx',
  'src/utils/seoUtils.ts',
  'vite-plugin-seo.ts',
  'vite.config.ts'
];

console.log('📁 Checking Required Files:');
requiredFiles.forEach(file => {
  const fullPath = path.join(__dirname, '..', file);
  if (fs.existsSync(fullPath)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - MISSING`);
  }
});

// Validate robots.txt
console.log('\n🤖 Validating robots.txt:');
const robotsPath = path.join(__dirname, '..', 'public/robots.txt');
if (fs.existsSync(robotsPath)) {
  const robotsContent = fs.readFileSync(robotsPath, 'utf-8');
  const checks = [
    { name: 'User-agent directive', check: robotsContent.includes('User-agent: *') },
    { name: 'Allow directive', check: robotsContent.includes('Allow: /') },
    { name: 'Sitemap reference', check: robotsContent.includes('Sitemap:') },
    { name: 'Disallow for private pages', check: robotsContent.includes('Disallow: /client-login') }
  ];
  
  checks.forEach(({ name, check }) => {
    console.log(check ? `✅ ${name}` : `❌ ${name}`);
  });
}

// Validate sitemap.xml
console.log('\n🗺️ Validating sitemap.xml:');
const sitemapPath = path.join(__dirname, '..', 'public/sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
  const checks = [
    { name: 'XML declaration', check: sitemapContent.includes('<?xml version="1.0"') },
    { name: 'URLset namespace', check: sitemapContent.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"') },
    { name: 'Homepage URL', check: sitemapContent.includes('<loc>https://therivieregroup.org</loc>') },
    { name: 'Services URL', check: sitemapContent.includes('<loc>https://therivieregroup.org/services</loc>') },
    { name: 'Contact URL', check: sitemapContent.includes('<loc>https://therivieregroup.org/contact</loc>') },
    { name: 'Lastmod dates', check: sitemapContent.includes('<lastmod>2024-12-19</lastmod>') }
  ];
  
  checks.forEach(({ name, check }) => {
    console.log(check ? `✅ ${name}` : `❌ ${name}`);
  });
}

// Validate pageMetaMap.ts
console.log('\n📋 Validating pageMetaMap.ts:');
const pageMetaPath = path.join(__dirname, '..', 'src/config/pageMetaMap.ts');
if (fs.existsSync(pageMetaPath)) {
  const pageMetaContent = fs.readFileSync(pageMetaPath, 'utf-8');
  const checks = [
    { name: 'Default meta configuration', check: pageMetaContent.includes('defaultMeta:') },
    { name: 'Routes configuration', check: pageMetaContent.includes('routes:') },
    { name: 'Structured data', check: pageMetaContent.includes('structuredData:') },
    { name: 'Organization schema', check: pageMetaContent.includes('@type": "Organization"') },
    { name: 'Breadcrumb schema', check: pageMetaContent.includes('@type": "BreadcrumbList"') }
  ];
  
  checks.forEach(({ name, check }) => {
    console.log(check ? `✅ ${name}` : `❌ ${name}`);
  });
}

// Check if pages are using withSEO
console.log('\n🔧 Checking Page SEO Integration:');
const pagesToCheck = [
  'src/screens/Homepage/Homepage.tsx',
  'src/screens/AboutUs/index.tsx',
  'src/screens/Services/index.tsx',
  'src/screens/Products/index.tsx',
  'src/screens/Portfolio/index.tsx',
  'src/screens/Blog/index.tsx',
  'src/screens/Contact/index.tsx'
];

pagesToCheck.forEach(pagePath => {
  const fullPath = path.join(__dirname, '..', pagePath);
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, 'utf-8');
    const hasSEO = content.includes('withSEO');
    console.log(hasSEO ? `✅ ${pagePath}` : `❌ ${pagePath} - Needs SEO integration`);
  } else {
    console.log(`⚠️ ${pagePath} - File not found`);
  }
});

// Validate vite.config.ts
console.log('\n⚙️ Validating Vite Configuration:');
const viteConfigPath = path.join(__dirname, '..', 'vite.config.ts');
if (fs.existsSync(viteConfigPath)) {
  const viteContent = fs.readFileSync(viteConfigPath, 'utf-8');
  const checks = [
    { name: 'SEO plugin import', check: viteContent.includes('import { seoPlugin }') },
    { name: 'SEO plugin usage', check: viteContent.includes('seoPlugin(') },
    { name: 'Base URL configuration', check: viteContent.includes('base: "/"') }
  ];
  
  checks.forEach(({ name, check }) => {
    console.log(check ? `✅ ${name}` : `❌ ${name}`);
  });
}

// Check for generated HTML files
console.log('\n📄 Checking Generated HTML Files:');
const distPath = path.join(__dirname, '..', 'dist');
if (fs.existsSync(distPath)) {
  const htmlFiles = [
    'index.html',
    'home/index.html',
    'about-us/index.html',
    'services/index.html',
    'contact/index.html'
  ];
  
  htmlFiles.forEach(file => {
    const fullPath = path.join(distPath, file);
    if (fs.existsSync(fullPath)) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      const checks = [
        { name: 'Title tag', check: content.includes('<title>') },
        { name: 'Meta description', check: content.includes('name="description"') },
        { name: 'Open Graph tags', check: content.includes('property="og:') },
        { name: 'Twitter Card tags', check: content.includes('name="twitter:') },
        { name: 'Canonical URL', check: content.includes('rel="canonical"') },
        { name: 'Structured data', check: content.includes('application/ld+json') }
      ];
      
      console.log(`\n📄 ${file}:`);
      checks.forEach(({ name, check }) => {
        console.log(check ? `  ✅ ${name}` : `  ❌ ${name}`);
      });
    } else {
      console.log(`❌ ${file} - Not generated`);
    }
  });
} else {
  console.log('❌ dist/ directory not found - Run "npm run build" first');
}

console.log('\n🎯 SEO Validation Complete!');
console.log('\nNext Steps:');
console.log('1. Run: node scripts/update-all-pages-seo.js');
console.log('2. Run: npm run build');
console.log('3. Submit sitemap to Google Search Console');
console.log('4. Test rich snippets with Google\'s Rich Results Test');
console.log('5. Monitor performance in Google Search Console'); 