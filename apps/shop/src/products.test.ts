import { describe, expect, it } from 'vitest';
import { products } from './products';

describe('products', () => {
  it('lists three shop items', () => {
    expect(products).toHaveLength(3);
  });
});
