#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of pages that need to be updated with SEO
const pagesToUpdate = [
  'src/screens/Services/index.tsx',
  'src/screens/Products/index.tsx',
  'src/screens/Portfolio/index.tsx',
  'src/screens/Blog/index.tsx',
  'src/screens/BlogPost/index.tsx',
  'src/screens/Contact/index.tsx',
  'src/screens/Sturgeon/index.tsx',
  'src/screens/Nicole/index.tsx',
  'src/screens/Mevin/index.tsx',
  'src/screens/Nexus/index.tsx',
  'src/screens/ClientLogin/index.tsx'
];

console.log('🔍 SEO System Update Script');
console.log('============================\n');

pagesToUpdate.forEach((pagePath) => {
  const fullPath = path.join(process.cwd(), pagePath);
  
  if (fs.existsSync(fullPath)) {
    console.log(`✅ Found: ${pagePath}`);
  } else {
    console.log(`❌ Missing: ${pagePath}`);
  }
});

console.log('\n📝 Manual Update Instructions:');
console.log('==============================');
console.log('');
console.log('For each page, you need to:');
console.log('');
console.log('1. Import the withSEO HOC:');
console.log('   import { withSEO } from "../../components/withSEO";');
console.log('');
console.log('2. Rename your component:');
console.log('   const ComponentName = () => { ... }');
console.log('   const ComponentNameComponent = () => { ... }');
console.log('');
console.log('3. Export with SEO wrapper:');
console.log('   export const ComponentName = withSEO(ComponentNameComponent);');
console.log('');
console.log('4. For dynamic pages (like blog posts), you can pass custom meta:');
console.log('   export const ComponentName = withSEO(ComponentNameComponent, customMeta);');
console.log('');
console.log('Example for a blog post:');
console.log('========================');
console.log('');
console.log('import { useParams } from "react-router-dom";');
console.log('import { generateBlogPostMeta } from "../../utils/seoUtils";');
console.log('import { withSEO } from "../../components/withSEO";');
console.log('');
console.log('const BlogPostComponent = () => {');
console.log('  const { slug } = useParams();');
console.log('  const post = getBlogPost(slug);');
console.log('');
console.log('  const customMeta = generateBlogPostMeta(');
console.log('    post.title,');
console.log('    post.description,');
console.log('    slug,');
console.log('    post.publishedDate,');
console.log('    post.author,');
console.log('    post.image');
console.log('  );');
console.log('');
console.log('  return (');
console.log('    <div>');
console.log('      <h1>{post.title}</h1>');
console.log('      <div>{post.content}</div>');
console.log('    </div>');
console.log('  );');
console.log('};');
console.log('');
console.log('export const BlogPost = withSEO(BlogPostComponent, customMeta);');
console.log('');
console.log('🚀 After updating all pages, run: npm run build');
console.log('This will generate SEO-optimized HTML files for all routes!'); 