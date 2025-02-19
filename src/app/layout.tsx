import { metadata } from './metadata';
import { fredoka, garet } from '@/lib/fonts';
import './globals.css';
import { ReactLenis } from '@/lib/lenis';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

export { metadata };

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body className={`${fredoka.className} ${garet.variable} antialiased`}>
          {children}
          <Analytics />
          <SpeedInsights />
        </body>
      </ReactLenis>
    </html>
  );
}
