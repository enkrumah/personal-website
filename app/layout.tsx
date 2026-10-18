import type { Metadata, Viewport } from "next";
import { Geist, Newsreader } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { site } from "@/content/site";
import "./globals.css";

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const serif = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  variable: "--font-newsreader",
  display: "swap",
});

const socialImages = site.url
  ? [
      {
        url: `${site.url}/og`,
        width: 1200,
        height: 630,
        alt: `${site.name}, ${site.role}`,
      },
    ]
  : undefined;

export const metadata: Metadata = {
  ...(site.url ? { metadataBase: new URL(site.url) } : {}),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    title: site.title,
    description: site.description,
    ...(site.url ? { url: site.url } : {}),
    ...(socialImages ? { images: socialImages } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    ...(socialImages ? { images: socialImages } : {}),
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f0ea" },
    { media: "(prefers-color-scheme: dark)", color: "#12110f" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sans.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <ThemeProvider>
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
