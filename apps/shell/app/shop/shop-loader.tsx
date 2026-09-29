'use client';

import dynamic from 'next/dynamic';

function ShopSkeleton() {
  return (
    <div className="rounded-xl border border-dashed border-slate-300 bg-white p-card">
      <p className="font-medium text-slate-700">Loading shop…</p>
      <p className="mt-1 text-sm text-slate-500">
        Dynamic import of the React microfrontend is in progress.
      </p>
    </div>
  );
}

const Shop = dynamic(
  async () => {
    // Demo-only delay so the loading skeleton is visible on localhost.
    await new Promise((resolve) => setTimeout(resolve, 400));
    // Workspace composition via dynamic import().
    // Independently deployed remotes would use something like Module Federation instead.
    return import('@demo/shop');
  },
  {
    ssr: false,
    loading: () => <ShopSkeleton />,
  },
);

export function ShopLoader() {
  return <Shop />;
}
