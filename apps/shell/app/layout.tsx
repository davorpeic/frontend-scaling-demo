import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Header } from '../components/header';
import './globals.css';

export const metadata: Metadata = {
  title: 'Frontend architecture demo',
  description: 'Shell that composes shared packages and microfrontends',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="mx-auto max-w-5xl px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
