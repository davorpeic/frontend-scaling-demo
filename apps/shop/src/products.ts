export type Product = {
  id: string;
  name: string;
  description: string;
  priceLabel: string;
};

export const products: Product[] = [
  {
    id: 'notebook',
    name: 'Field notebook',
    description: 'Dot-grid pages for architecture sketches.',
    priceLabel: '$12',
  },
  {
    id: 'headphones',
    name: 'Studio headphones',
    description: 'Closed-back cans for deep work.',
    priceLabel: '$89',
  },
  {
    id: 'lamp',
    name: 'Desk lamp',
    description: 'Warm light for late-night coding.',
    priceLabel: '$36',
  },
];
