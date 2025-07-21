import React from 'react';
import { PageTemplate } from './PageTemplate';
import { useSEO } from '../hooks/useSEO';
import { PageMeta } from '../types/seo';

export function withSEO<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  customMeta?: Partial<PageMeta>
) {
  return function WithSEOComponent(props: P) {
    const { currentMeta } = useSEO(customMeta);
    
    return (
      <PageTemplate meta={currentMeta}>
        <WrappedComponent {...props} />
      </PageTemplate>
    );
  };
} 