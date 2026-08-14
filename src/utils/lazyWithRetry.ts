import { lazy, ComponentType } from 'react';

/**
 * Enhanced React.lazy wrapper that automatically handles chunk loading errors
 * (e.g. when a new build is deployed and chunk hashes change on production).
 */
export function lazyWithRetry<T extends ComponentType<any>>(
  componentImport: () => Promise<{ default: T }>
) {
  return lazy(async () => {
    const pageHasBeenRefreshed = JSON.parse(
      window.sessionStorage.getItem('page_has_been_refreshed') || 'false'
    );

    try {
      const component = await componentImport();
      window.sessionStorage.setItem('page_has_been_refreshed', 'false');
      return component;
    } catch (error: any) {
      const isChunkFetchError =
        error?.name === 'TypeError' ||
        error?.message?.includes('Failed to fetch dynamically imported module') ||
        error?.message?.includes('Importing a module script failed') ||
        error?.message?.includes('Loading chunk');

      if (isChunkFetchError && !pageHasBeenRefreshed) {
        window.sessionStorage.setItem('page_has_been_refreshed', 'true');
        window.location.reload();
        return new Promise<{ default: T }>(() => {}); // Keep waiting for reload
      }

      throw error;
    }
  });
}
