import type { Metadata } from "next";
import "../styles/global.css";
import Aside from "@/components/aside";
import Header from "@/components/header";

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
        <div className="flex"> 
      <Aside />
      <div className="flex-1">
        <Header />
        {children}
      </div>
    </div>
      </body>
    </html>
  );
}
