import type { Metadata } from 'next';
import { Baloo_Bhai_2 } from 'next/font/google';
import './globals.css';

const baloo = Baloo_Bhai_2({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
});

const SITE_URL = 'https://cadence.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Cadence — A quiet weekly planner',
    template: '%s · Cadence',
  },
  description:
    'A weekly planner that respects your week. Plan with people you trust. Reflect on what mattered.',
  applicationName: 'Cadence',
  openGraph: {
    title: 'Cadence — A quiet weekly planner',
    description:
      'A weekly planner that respects your week. Plan with people you trust. Reflect on what mattered.',
    url: SITE_URL,
    siteName: 'Cadence',
    images: ['/og-image.svg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cadence — A quiet weekly planner',
    description: 'A weekly planner that respects your week.',
    images: ['/og-image.svg'],
  },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${baloo.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
