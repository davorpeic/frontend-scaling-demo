'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/account', label: 'Account' },
];

export function Header() {
  const pathname = usePathname();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <header className="border-b border-slate-200 bg-brand text-brand-foreground">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <p className="font-display text-lg">Demo shell</p>
        <nav className="flex gap-4 text-sm">
          {links.map((link) => {
            const active = ready && pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  active
                    ? 'rounded-md bg-white/20 px-3 py-1 font-medium'
                    : 'rounded-md px-3 py-1 hover:bg-white/10'
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
