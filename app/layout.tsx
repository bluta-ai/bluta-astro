import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./components/LanguageContext";
import { languageAlternates } from "./localized-metadata";

export const metadata: Metadata = {
  metadataBase: new URL("https://blutech.io"),
  title: "Blutech — Building AI and IoT for Better Buildings",
  description: "Blutech connects accurate sensing, edge intelligence, wireless networks and building software for safer spaces, leaner operations and better-performing properties.",
  keywords: ["building AI", "building IoT", "smart building", "property management technology", "smart washroom", "smart lighting", "indoor air quality sensor", "LoRaWAN building", "Hong Kong"],
  alternates: { canonical: "/", languages: languageAlternates("/") },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Blutech — Building AI and IoT for Better Buildings",
    description: "Intelligence, built into the building—for owners, property teams and the project teams shaping better buildings.",
    type: "website",
    url: "/",
    siteName: "Blutech",
    locale: "en_HK",
    images: [{ url: "/og-blutech-v4.jpg", width: 1200, height: 630, type: "image/jpeg", alt: "Blutech — Intelligence, built into the building" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blutech — Building AI and IoT for Better Buildings",
    description: "Intelligence, built into the building.",
    images: ["/og-blutech-v4.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const data={"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://blutech.io/#organization",name:"Blutech",url:"https://blutech.io/",logo:{"@type":"ImageObject",url:"https://blutech.io/products/blutech-logo.svg"},description:"Building AI and IoT hardware, software, integration and delivery for owners and property operations.",foundingDate:"2019",email:"enquiry@blutech.io",telephone:"+852 2180 7157",areaServed:["Hong Kong","Mainland China","Middle East"],brand:{"@type":"Brand",name:"BLUTA",url:"https://www.bluta.io/"},knowsAbout:["Building AI","Building IoT","Smart washrooms","Smart lighting","Indoor air quality","LoRaWAN","Bluetooth edge control","Property operations"],location:[{"@type":"Place",name:"Hong Kong Headquarters",address:{"@type":"PostalAddress",addressLocality:"Hong Kong",addressCountry:"HK"}},{"@type":"Place",name:"China Office",address:{"@type":"PostalAddress",addressCountry:"CN"}},{"@type":"Place",name:"Qatar Office",address:{"@type":"PostalAddress",addressCountry:"QA"}}]},{"@type":"WebSite","@id":"https://blutech.io/#website",name:"Blutech",url:"https://blutech.io/",publisher:{"@id":"https://blutech.io/#organization"},inLanguage:["en","zh-Hant","zh-Hans","ar"]}]};
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/><LanguageProvider>{children}</LanguageProvider></body></html>;
}
