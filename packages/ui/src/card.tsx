import type { ReactNode } from 'react';

type CardProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function Card({ title, children, className = '' }: CardProps) {
  return (
    <article
      className={`rounded-xl border border-slate-200 bg-white p-card shadow-sm ${className}`}
    >
      <h2 className="font-display text-lg text-slate-900">{title}</h2>
      <div className="mt-2 text-sm leading-6 text-slate-600">{children}</div>
    </article>
  );
}
