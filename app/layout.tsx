import type { Metadata } from "next";
import type { Viewport } from "next";
import "./globals.css";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Le Troisième Temps — Barber shop à Saint-Ouen",
  description:
    "Le Troisième Temps, barber shop de quartier à Saint-Ouen. Coupes, dégradés et tailles de barbe du mardi au samedi, au 18 avenue Michelet.",
};

export const viewport: Viewport = {
  themeColor: "#141510",
};

const salonSchema = {
  "@context": "https://schema.org",
  "@type": "BarberShop",
  name: "Le Troisième Temps",
  telephone: "+33140119090",
  email: "rdv@letroisiemetemps.fr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "18 avenue Michelet",
    postalCode: "93400",
    addressLocality: "Saint-Ouen-sur-Seine",
    addressCountry: "FR",
  },
  openingHours: "Tu-Sa 10:00-20:00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Inter+Tight:wght@500;600;700&family=Inter:wght@400;500;600&family=Space+Mono&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(salonSchema) }}
        />
      </head>
      <body>
        <a className="skip-link" href="#contenu">
          Aller au contenu
        </a>
        {children}
        <Footer />
      </body>
    </html>
  );
}
