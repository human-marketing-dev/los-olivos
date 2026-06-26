import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display-next",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans-next",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono-next",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Los Olivos · Residencial Campestre",
  description:
    "Lotes campestres entre olivos y sierra en Allende, Nuevo León. Un patrimonio que crece contigo — naturaleza, familia y plusvalía en un mismo lugar.",
  openGraph: {
    title: "Los Olivos · Residencial Campestre",
    description:
      "Lotes campestres entre olivos y sierra. A 40 minutos de Monterrey.",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${outfit.variable} ${ibmPlexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
