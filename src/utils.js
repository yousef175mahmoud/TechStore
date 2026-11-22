// Store rules: change them here and every page updates.
export const FREE_SHIPPING_MIN = 100;
export const SHIPPING_FEE = 8;

export const money = (n) =>
  '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// Shown when a product image fails to load.
export const fallback =
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80';

export const img = (id, w = 700) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;

// First visit: follow the device setting (dark or light). After that, the saved choice wins.
export const systemTheme = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
