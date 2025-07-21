import { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
}

export function generateSEOMetadata({
  title = "Jennga - Experto en Ciberseguridad",
  description = "Especialista en análisis forense digital, hacking ético y gestión de incidentes de seguridad",
  keywords = [],
  canonical,
  ogImage = "/caricaturamia.png"
}: SEOProps): Metadata {
  const baseUrl = 'https://tu-dominio.com' // Cambia por tu dominio real
  
  const defaultKeywords = [
    "ciberseguridad",
    "análisis forense digital", 
    "hacking ético",
    "pentesting",
    "incidentes de seguridad"
  ]

  return {
    title,
    description,
    keywords: [...defaultKeywords, ...keywords],
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonical || '/',
    },
    openGraph: {
      title,
      description,
      url: canonical ? `${baseUrl}${canonical}` : baseUrl,
      siteName: 'Jennga Portfolio',
      locale: 'es_ES',
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 800,
          height: 600,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export const cyberSecurityKeywords = [
  "volatility",
  "metasploit", 
  "autopsy",
  "ftk",
  "wireshark",
  "burp suite",
  "nmap",
  "kali linux",
  "aws seguridad",
  "azure seguridad"
]

export const forensicsKeywords = [
  "análisis forense digital",
  "volatility memory analysis",
  "autopsy digital forensics",
  "ftk forensic toolkit",
  "photorec recovery",
  "testdisk recovery",
  "memoria volátil",
  "evidencia digital"
]

export const hackingKeywords = [
  "hacking ético",
  "pentesting",
  "metasploit framework",
  "john the ripper",
  "hydra brute force",
  "burp suite pro",
  "nmap port scanning",
  "zap proxy",
  "gobuster directory",
  "airodump wifi"
]
