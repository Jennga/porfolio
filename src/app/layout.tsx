import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jennga - Experto en Ciberseguridad | Análisis Forense Digital | Hacking Ético",
  description: "Portafolio profesional de ciberseguridad especializado en análisis forense digital, hacking ético, gestión de incidentes de seguridad y normativa de protección de datos. Experiencia en AWS, Azure, Volatility, Metasploit y más.",
  keywords: [
    "ciberseguridad",
    "análisis forense digital", 
    "hacking ético",
    "pentesting",
    "incidentes de seguridad",
    "volatility",
    "metasploit",
    "autopsy",
    "ftk",
    "aws seguridad",
    "azure seguridad",
    "iso 27001",
    "owasp",
    "wireshark",
    "burp suite",
    "nmap",
    "kali linux",
    "protección datos",
    "normativa ciberseguridad",
    "siem",
    "soc",
    "threat hunting"
  ],
  authors: [{ name: "Jennga" }],
  creator: "Jennga",
  publisher: "Jennga",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tu-dominio.com'), // Cambia por tu dominio real
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Jennga - Experto en Ciberseguridad",
    description: "Especialista en análisis forense digital, hacking ético y gestión de incidentes de seguridad",
    url: 'https://tu-dominio.com', // Cambia por tu dominio real
    siteName: 'Jennga Portfolio',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/caricaturamia.png',
        width: 800,
        height: 600,
        alt: 'Jennga - Experto en Ciberseguridad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Jennga - Experto en Ciberseguridad",
    description: "Especialista en análisis forense digital, hacking ético y gestión de incidentes de seguridad",
    images: ['/caricaturamia.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Google Search Console (agrega tu código de verificación) */}
        {/* <meta name="google-site-verification" content="tu-codigo-de-verificacion" /> */}
        
        {/* Schema.org para el sitio web */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Jennga Portfolio',
              url: 'https://tu-dominio.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://tu-dominio.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string'
              }
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
