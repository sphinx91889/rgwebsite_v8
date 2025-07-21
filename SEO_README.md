# SEO Metadata System for Riviere Group Website

This document describes the comprehensive SEO metadata system implemented for the Riviere Group website.

## Overview

The SEO system provides:
- Automatic metadata injection for all routes
- Static HTML generation with proper SEO tags
- Dynamic metadata for blog posts and portfolio projects
- Structured data (JSON-LD) support
- Open Graph and Twitter Card optimization

## File Structure

```
src/
├── types/seo.ts              # TypeScript interfaces for SEO metadata
├── config/pageMetaMap.ts     # Route-specific metadata configuration
├── components/
│   ├── PageTemplate.tsx      # Component for rendering metadata
│   └── withSEO.tsx          # HOC for automatic SEO wrapping
├── hooks/useSEO.ts          # Custom hook for SEO management
└── utils/seoUtils.ts        # Utility functions for dynamic SEO

vite-plugin-seo.ts           # Vite plugin for static HTML generation
```

## Components

### PageTemplate.tsx
Renders SEO metadata using react-helmet-async. Handles:
- Basic meta tags (title, description, keywords)
- Open Graph tags
- Twitter Card tags
- Canonical URLs
- Structured data (JSON-LD)
- Robots meta tags

### withSEO.tsx
Higher-order component that automatically wraps pages with SEO metadata:
```tsx
import { withSEO } from '../components/withSEO';

const MyPage = () => <div>Page content</div>;
export default withSEO(MyPage);
```

### useSEO.ts
Custom hook that manages SEO metadata based on current route:
```tsx
import { useSEO } from '../hooks/useSEO';

const MyComponent = () => {
  const { currentMeta } = useSEO();
  // currentMeta contains the metadata for current route
};
```

## Configuration

### pageMetaMap.ts
Defines metadata for each route:

```tsx
export const seoConfig: SEOConfig = {
  defaultMeta: {
    title: 'Riviere Group® | Web Design, Branding, SEO, AI, & Music Production',
    description: 'Riviere Group® is a full-service media agency...',
    // ... other default metadata
  },
  routes: [
    {
      path: '/home',
      component: 'Homepage',
      meta: {
        title: 'Home | Riviere Group®',
        description: 'Welcome to Riviere Group®...',
        // ... route-specific metadata
      }
    }
    // ... other routes
  ]
};
```

## Vite Plugin

The `vite-plugin-seo.ts` plugin generates static HTML files during build:

```tsx
// vite.config.ts
import { seoPlugin } from './vite-plugin-seo';

export default defineConfig({
  plugins: [
    react(),
    seoPlugin({
      baseUrl: 'https://therivieregroup.org',
      outputDir: 'dist'
    })
  ]
});
```

## Usage Examples

### Basic Page with SEO
```tsx
import { withSEO } from '../components/withSEO';

const AboutPage = () => (
  <div>
    <h1>About Us</h1>
    <p>Our story...</p>
  </div>
);

export default withSEO(AboutPage);
```

### Dynamic Blog Post SEO
```tsx
import { useParams } from 'react-router-dom';
import { generateBlogPostMeta } from '../utils/seoUtils';
import { withSEO } from '../components/withSEO';

const BlogPostComponent = () => {
  const { slug } = useParams();
  const post = getBlogPost(slug); // Your data fetching logic
  
  const customMeta = generateBlogPostMeta(
    post.title,
    post.description,
    slug,
    post.publishedDate,
    post.author,
    post.image
  );
  
  return (
    <div>
      <h1>{post.title}</h1>
      <div>{post.content}</div>
    </div>
  );
};

export default withSEO(BlogPostComponent);
```

### Portfolio Project SEO
```tsx
import { generatePortfolioProjectMeta } from '../utils/seoUtils';
import { withSEO } from '../components/withSEO';

const ProjectComponent = () => {
  const { slug } = useParams();
  const project = getProject(slug);
  
  const customMeta = generatePortfolioProjectMeta(
    project.name,
    project.description,
    slug,
    project.image,
    project.category
  );
  
  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
    </div>
  );
};

export default withSEO(ProjectComponent, customMeta);
```

## Metadata Types

### PageMeta Interface
```tsx
interface PageMeta {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  ogUrl?: string;
  canonical?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterSite?: string;
  twitterCreator?: string;
  structuredData?: Record<string, any>;
}
```

## Build Process

When you run `npm run build`, the system will:

1. Generate static HTML files for each route
2. Inject proper SEO metadata into each HTML file
3. Create optimized meta tags for search engines
4. Include structured data for rich snippets
5. Set up Open Graph tags for social sharing
6. Configure Twitter Card tags for Twitter sharing

## Generated Files

The build process creates:
- `dist/index.html` (homepage)
- `dist/home/index.html`
- `dist/about-us/index.html`
- `dist/services/index.html`
- `dist/products/index.html`
- `dist/portfolio/index.html`
- `dist/blog/index.html`
- `dist/contact/index.html`
- And more...

Each file contains:
- Proper `<title>` tags
- Meta description and keywords
- Open Graph tags
- Twitter Card tags
- Canonical URLs
- Structured data (JSON-LD)
- Robots meta tags

## SEO Features

### Automatic Features
- ✅ Title tag optimization
- ✅ Meta description injection
- ✅ Keywords management
- ✅ Canonical URL setup
- ✅ Open Graph tags
- ✅ Twitter Card optimization
- ✅ Structured data (JSON-LD)
- ✅ Robots meta tags
- ✅ No-index/no-follow support

### Manual Overrides
You can override any metadata by passing custom meta to the `withSEO` HOC:

```tsx
const customMeta = {
  title: 'Custom Title',
  description: 'Custom description',
  noIndex: true
};

export default withSEO(MyComponent, customMeta);
```

## Best Practices

1. **Keep descriptions under 160 characters** for optimal search display
2. **Use unique titles** for each page
3. **Include relevant keywords** naturally in descriptions
4. **Provide high-quality OG images** for social sharing
5. **Use structured data** for rich snippets
6. **Set canonical URLs** to prevent duplicate content issues
7. **Use no-index** for private/client pages

## Testing

To test the SEO system:

1. Run `npm run build`
2. Check generated HTML files in `dist/` directory
3. Verify meta tags are properly injected
4. Test social sharing with Open Graph tags
5. Validate structured data with Google's Rich Results Test

## Maintenance

To add new routes:
1. Add route configuration to `pageMetaMap.ts`
2. Update the route in your React Router setup
3. The system will automatically handle SEO for the new route

To update metadata:
1. Modify the appropriate route in `pageMetaMap.ts`
2. Rebuild the project
3. New metadata will be applied to generated HTML files 