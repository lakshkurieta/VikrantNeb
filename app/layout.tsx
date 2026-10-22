import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { ConnectForm } from "@/components/connect/ConnectForm";
import { CopyGuard } from "@/components/layout/CopyGuard";
import { Footer } from "@/components/layout/Footer";
import { Loader } from "@/components/layout/Loader";
import { Navbar } from "@/components/layout/Navbar";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { site } from "@/content/site";
import { themes } from "@/lib/theme";
import { themeInitScript } from "@/lib/theme-mode";
import "./globals.css";

/* Grift for everything set in sans (titles Bold, text Medium), Swarsh Daisy Italic for the accents. */
const grift = localFont({
  src: [
    { path: "./fonts/grift-medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/grift-bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-grift",
});
const swarsh = localFont({
  src: "./fonts/swarsh-daisy-italic.woff2",
  weight: "400",
  style: "italic",
  variable: "--font-swarsh",
  adjustFontFallback: "Times New Roman",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  authors: [{ name: site.name, url: site.url }],
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: themes.light.canvas,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // The theme script and the intro set data attributes on <html> before React hydrates.
    <html lang="en" suppressHydrationWarning className={`${grift.variable} ${swarsh.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        {/* Without JavaScript nothing would ever lift the loader or start the intro. */}
        <noscript>
          <style>{`.loader { display: none } :root :is(.intro-line > span, .intro-fade, .intro-draw) { animation-play-state: running }`}</style>
        </noscript>
        <SmoothScroll />
        <CopyGuard />
        <Loader />
        <Navbar />
        {children}
        <Footer />
        <ConnectForm />
      </body>
    </html>
  );
}
