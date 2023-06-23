const mapping: Record<string, string> = {
  customers: 'customer',
  events: 'event',
  organizations: 'organization',
  purchases: 'purchase',
  tickets: 'ticket',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
