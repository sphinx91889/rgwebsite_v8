#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

console.log('🚀 Auto-Updating All Pages with SEO HOC');
console.log('=====================================\n');

pagesToUpdate.forEach(pagePath => {
  const fullPath = path.join(__dirname, '..', pagePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`❌ File not found: ${pagePath}`);
    return;
  }

  try {
    let content = fs.readFileSync(fullPath, 'utf-8');
    
    // Check if already has withSEO
    if (content.includes('withSEO')) {
      console.log(`✅ Already updated: ${pagePath}`);
      return;
    }

    // Get component name from path
    const componentName = path.basename(path.dirname(pagePath));
    
    // Add import for withSEO
    if (!content.includes('import { withSEO }')) {
      const importStatement = `import { withSEO } from "../../components/withSEO";`;
      content = content.replace(/import.*from.*['"]\.\.\/\.\.\/\.\.\/components\/.*['"];?\n?/g, '$&\n' + importStatement);
    }

    // Find the main component export and wrap it
    const exportRegex = /export\s+(?:const|function)\s+(\w+)\s*[:=]\s*(?:\(\)\s*=>\s*|function\s*\(\)\s*\{)/;
    const match = content.match(exportRegex);
    
    if (match) {
      const componentName = match[1];
      const originalExport = match[0];
      const wrappedExport = `const ${componentName}Component = (): JSX.Element => {`;
      
      // Replace the export with component definition
      content = content.replace(originalExport, wrappedExport);
      
      // Add the wrapped export at the end
      content = content.replace(
        /export\s+{.*?};?\s*$/,
        `export { ${componentName} as ${componentName} };`
      );
      
      // Add the wrapped export before the closing
      content = content.replace(
        /(\s*}\s*)$/,
        `\n\n// Export the component wrapped with SEO\nexport const ${componentName} = withSEO(${componentName}Component);\n$1`
      );
    }

    fs.writeFileSync(fullPath, content);
    console.log(`✅ Updated: ${pagePath}`);
    
  } catch (error) {
    console.log(`❌ Error updating ${pagePath}:`, error.message);
  }
});

console.log('\n🎉 All pages updated!');
console.log('\nNext steps:');
console.log('1. Run: npm run build');
console.log('2. Check the generated HTML files in dist/');
console.log('3. Test SEO with Google Search Console'); 