import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceCartProvider } from "@/context/ServiceCartContext";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NeuroGears | Premium Automobile Service",
  description: "Modern, AI-powered automobile service platform for booking car and bike services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} dark h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans" suppressHydrationWarning>
        <ServiceCartProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ServiceCartProvider>
      </body>
    </html>
  );
}
