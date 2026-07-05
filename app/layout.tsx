import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JK Timbers | Luxury Timber & Premium Furniture Since 1976",
  description:
    "Crafting timeless spaces since 1976. Explore our premium collection of wholesale & retail timber, bespoke furniture, modular kitchens, and architectural wood solutions.",
  keywords:
    "JK Timbers, premium timber, luxury furniture, bespoke furniture, modular kitchens, teak wood, wholesale timber, interior materials, architectural wood",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://jktimbers.com", // Replace with actual domain
    title: "JK Timbers | Luxury Timber & Premium Furniture Since 1976",
    description:
      "Crafting timeless spaces since 1976. Explore our premium collection of wholesale & retail timber, bespoke furniture, modular kitchens, and architectural wood solutions.",
    siteName: "JK Timbers",
    images: [
      {
        url: "/images/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "JK Timbers Luxury Showroom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JK Timbers | Luxury Timber & Premium Furniture Since 1976",
    description:
      "Crafting timeless spaces since 1976. Explore our premium collection of wholesale & retail timber, bespoke furniture, modular kitchens, and architectural wood solutions.",
    images: ["/images/hero-bg.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* The data-theme attribute is handled by next-themes */}
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${cormorant.variable} antialiased`}
        style={{
          // Apply fonts globally via CSS variables mapped to Tailwind in globals.css
          "--font-body": "var(--font-inter), sans-serif",
          "--font-heading": "var(--font-playfair), serif",
        } as React.CSSProperties}
      >
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
