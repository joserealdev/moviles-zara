import Header from "@/components/Header";
import LocalStorageCartProvider from "@/providers/CartProvider";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mobile Store for Zara - @josereadev",
  description: "Mobile Store for Zara - @josereadev",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#E3E9EF" },
    { media: "(prefers-color-scheme: dark)", color: "#141B22" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LocalStorageCartProvider>
          <Header />
          {children}
        </LocalStorageCartProvider>
      </body>
    </html>
  );
}
