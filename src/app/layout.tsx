import type { Metadata } from "next";
import { Mitr } from 'next/font/google'
import "./globals.css";
const mitr = Mitr({
  subsets: ["thai", "latin"], 
  weight: ["400", "700"], 
  display: "swap",
});


export const metadata: Metadata = {
  title: "LazyCat Software🐱",
  description: "LazyCat Software🐱",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="retro">
      <body
        className={`${mitr.className}`}
      >
        {children}
      </body>
    </html>
  );
}