import type { Metadata } from 'next';
import '../styles/global.css';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Focus Power',
  description: 'Focus Power Radial Focus',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body className={`font-inter antialiased`}>
        <div className="flex">
          <Sidebar />
          <div className="flex-1 min-w-0">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
