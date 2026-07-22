export default function StructuredData() {
  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://www.kalkandoctor.com/#medicalbusiness",
    name: "Kalkan Doctor",
    url: "https://www.kalkandoctor.com",
    telephone: "+90 551 935 48 00",
    description:
      "24/7 English-speaking private medical assistance across Kalkan, Kaş, Patara, Kaputaş and surrounding areas. Hotel, villa and home doctor visits are available.",
    medicalSpecialty: "PrimaryCare",
    availableLanguage: ["English", "Turkish"],
    areaServed: [
      {
        "@type": "Place",
        name: "Kalkan, Antalya, Türkiye",
      },
      {
        "@type": "Place",
        name: "Kaş, Antalya, Türkiye",
      },
      {
        "@type": "Place",
        name: "Patara, Antalya, Türkiye",
      },
      {
        "@type": "Place",
        name: "Kaputaş, Antalya, Türkiye",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+90 551 935 48 00",
      contactType: "medical assistance",
      availableLanguage: ["English", "Turkish"],
      areaServed: "TR",
    },
    sameAs: ["https://wa.me/905519354800"],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.kalkandoctor.com/#website",
    url: "https://www.kalkandoctor.com",
    name: "Kalkan Doctor",
    description:
      "English-speaking private doctor service in Kalkan, Kaş, Patara and Kaputaş.",
    inLanguage: "en",
    publisher: {
      "@id": "https://www.kalkandoctor.com/#medicalbusiness",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalBusinessSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}