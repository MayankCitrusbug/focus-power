import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Focus Power",
  description: "Focus Power Radial Focus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
