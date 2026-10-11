/**
 * Portal & Order Management Configuration
 * Connects website service-request actions to the existing Base44 order application.
 */

export const BASE44_ORDER_PORTAL_URL = 'https://innovacpurchases.base44.app/';

/**
 * Generates an order request URL for the Base44 order portal.
 */
export function getOrderPortalUrl(serviceId?: string, serviceName?: string): string {
  return BASE44_ORDER_PORTAL_URL;
}
