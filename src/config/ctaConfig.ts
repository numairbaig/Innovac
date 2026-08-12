export const CTA_ROUTES = {
  CONSULTATION_REQUEST: {
    path: '/contact',
  },
  REQUEST_QUOTE: {
    path: '/quote',
  },
  REQUEST_SERVICE: {
    path: '/contact',
    query: { type: 'service' }
  },
  DISCUSS_REAGENTS: {
    path: '/contact',
    query: { type: 'reagents' }
  },
  EXPLORE_SERVICES: {
    path: '/services',
  },
  VIEW_ALL_SERVICES: {
    path: '/services',
  },
  VIEW_ALL_REAGENTS: {
    path: '/reagents',
  },
  APPLY_INTERNSHIP: {
    path: '/internships',
  },
  VIEW_WORKSHOPS: {
    path: '/workshops',
  },
  LEARN_MORE_ABOUT_US: {
    path: '/about-us',
  }
} as const;

export type CtaAction = keyof typeof CTA_ROUTES;

export function getCtaPath(action: CtaAction): string {
  const route = CTA_ROUTES[action];
  if ('query' in route) {
    const params = new URLSearchParams(route.query);
    return `${route.path}?${params.toString()}`;
  }
  return route.path;
}
