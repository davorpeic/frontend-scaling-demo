import { ShopLoader } from './shop-loader';

export default function ShopPage() {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm font-medium uppercase tracking-wide text-brand">
          React microfrontend
        </p>
        <h1 className="mt-1 font-display text-3xl">Shop</h1>
        <p className="mt-2 text-slate-600">
          The shell dynamically loads <code>@demo/shop</code>. This is
          composition, not just a UI component.
        </p>
      </div>
      <ShopLoader />
    </div>
  );
}
