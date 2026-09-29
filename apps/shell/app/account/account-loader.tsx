'use client';

import { useEffect, useState } from 'react';

export function AccountLoader() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    import('@demo/account').then((mod) => {
      mod.register();
      if (!cancelled) {
        setReady(true);
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  if (!ready) {
    return (
      <div className="rounded-xl border border-dashed border-slate-300 bg-white p-card">
        <p className="font-medium text-slate-700">Loading account…</p>
        <p className="mt-1 text-sm text-slate-500">
          Registering the Vue custom element.
        </p>
      </div>
    );
  }

  return <account-mfe />;
}
