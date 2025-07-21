export interface PageMeta {
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

export interface RouteMeta {
  path: string;
  meta: PageMeta;
  component: string;
}

export interface SEOConfig {
  defaultMeta: PageMeta;
  routes: RouteMeta[];
} 