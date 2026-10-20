import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Fraunces, Geist } from "next/font/google";
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

/* Titles in Bricolage Grotesque, everything else in Geist, the accents in Fraunces italic. */
const display = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin"] });
const sans = Geist({ variable: "--font-geist", subsets: ["latin"] });
const serif = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], style: ["italic"] });

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
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${sans.variable} ${serif.variable}`}>
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
