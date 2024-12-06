import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kelayakan Pinjaman",
  description: "Tsukamoto Fuzzy Inference System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}