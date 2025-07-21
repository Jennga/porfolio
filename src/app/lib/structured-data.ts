export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jennga',
  jobTitle: 'Especialista en Ciberseguridad',
  description: 'Experto en análisis forense digital, hacking ético, gestión de incidentes de seguridad y normativa de protección de datos',
  url: 'https://tu-dominio.com', // Cambia por tu dominio real
  image: 'https://tu-dominio.com/caricaturamia.png', // Cambia por tu dominio real
  sameAs: [
    // Agrega aquí tus redes sociales profesionales
    // 'https://linkedin.com/in/tu-perfil',
    // 'https://github.com/tu-usuario',
  ],
  knowsAbout: [
    'Ciberseguridad',
    'Análisis Forense Digital',
    'Hacking Ético',
    'Pentesting',
    'Gestión de Incidentes de Seguridad',
    'ISO 27001',
    'OWASP',
    'Volatility',
    'Metasploit',
    'Autopsy',
    'FTK',
    'Wireshark',
    'Burp Suite',
    'Nmap',
    'Kali Linux',
    'AWS Security',
    'Azure Security',
    'Docker',
    'Kubernetes'
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'AWS Cloud Practitioner',
      credentialCategory: 'certification'
    },
    {
      '@type': 'EducationalOccupationalCredential', 
      name: 'AWS Cloud Architect',
      credentialCategory: 'certification'
    }
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance'
  }
}

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Jennga - Servicios de Ciberseguridad',
  description: 'Servicios profesionales de ciberseguridad incluyendo análisis forense digital, pentesting, gestión de incidentes y consultoría en normativa de seguridad',
  url: 'https://tu-dominio.com', // Cambia por tu dominio real
  serviceType: [
    'Análisis Forense Digital',
    'Hacking Ético',
    'Pentesting',
    'Gestión de Incidentes de Seguridad',
    'Consultoría en Ciberseguridad',
    'Auditorías de Seguridad',
    'Implementación ISO 27001'
  ],
  areaServed: 'ES',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Ciberseguridad',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Análisis Forense Digital',
          description: 'Investigación y análisis de evidencias digitales utilizando herramientas como Volatility, Autopsy y FTK'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Pentesting y Hacking Ético',
          description: 'Pruebas de penetración y evaluación de seguridad utilizando Metasploit, Burp Suite, Nmap y otras herramientas especializadas'
        }
      }
    ]
  }
}
