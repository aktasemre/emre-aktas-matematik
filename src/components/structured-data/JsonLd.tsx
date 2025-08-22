export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalService",
    "name": "Emre Aktaş Matematik Özel Ders",
    "description": "LGS, TYT/AYT ve okula yardımcı matematik özel dersleri. Kişiselleştirilmiş eğitim metodolojisi ile başarıya ulaşın.",
    "url": "https://emreaktas-matematik.com",
    "telephone": "+905XXXXXXXXX",
    "email": "emre@ozelders.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "İstanbul",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "41.0082",
      "longitude": "28.9784"
    },
    "openingHours": [
      "Mo-Fr 09:00-21:00",
      "Sa 09:00-18:00",
      "Su 10:00-16:00"
    ],
    "priceRange": "₺₺₺",
    "currenciesAccepted": "TRY",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "areaServed": {
      "@type": "City",
      "name": "İstanbul"
    },
    "serviceType": [
      "LGS Hazırlık",
      "TYT/AYT Hazırlık", 
      "Okula Yardımcı Matematik"
    ],
    "provider": {
      "@type": "Person",
      "name": "Emre Aktaş",
      "jobTitle": "Matematik Öğretmeni",
      "description": "10+ yıl deneyimli matematik öğretmeni",
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Boğaziçi Üniversitesi"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Ahmet Yılmaz"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Emre Hocam sayesinde LGS'de matematikten tam puan aldım. Özellikle yeni nesil sorularda çok yardımı oldu."
      },
      {
        "@type": "Review", 
        "author": {
          "@type": "Person",
          "name": "Elif Kaya"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Matematikten korkuyordum ama Emre Hocam'ın sabırlı yaklaşımı sayesinde LGS'de matematik alanında %95 başarı elde ettim."
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Matematik Özel Ders Paketleri",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tek Ders",
            "description": "90 dakikalık özel matematik dersi"
          },
          "price": "300",
          "priceCurrency": "TRY"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "4 Ders Paketi",
            "description": "4 adet 90 dakikalık matematik dersi"
          },
          "price": "1100",
          "priceCurrency": "TRY"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "8 Ders Paketi", 
            "description": "8 adet 90 dakikalık matematik dersi"
          },
          "price": "2000",
          "priceCurrency": "TRY"
        }
      ]
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      suppressHydrationWarning={true}
    />
  )
}
