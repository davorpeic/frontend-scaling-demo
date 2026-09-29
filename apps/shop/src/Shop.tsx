'use client';

import { useState } from 'react';
import { Card } from '@demo/ui';
import { products } from './products';

export function Shop() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <section className="rounded-2xl border-2 border-brand bg-white p-card">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-brand">
            @demo/shop
          </p>
          <h2 className="font-display text-2xl text-slate-900">Team Shop</h2>
          <p className="mt-1 text-sm text-slate-600">
            Independently owned React microfrontend.
          </p>
        </div>
        <p className="rounded-full bg-brand px-3 py-1 text-sm text-brand-foreground">
          Cart: {cartCount}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {products.map((product) => (
          <Card key={product.id} title={product.name}>
            <p>{product.description}</p>
            <p className="mt-2 font-medium text-slate-900">{product.priceLabel}</p>
            <button
              type="button"
              className="mt-3 rounded-md bg-brand px-3 py-1.5 text-sm text-brand-foreground hover:opacity-90"
              onClick={() => setCartCount((count) => count + 1)}
            >
              Add to cart
            </button>
          </Card>
        ))}
      </div>
    </section>
  );
}
