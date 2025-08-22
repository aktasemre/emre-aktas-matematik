import { CONTACT_INFO } from '@/constants/contact'

export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalService",
    "name": "Emre Aktaş Matematik Özel Ders",
    "description": "15 yıllık deneyimli matematik öğretmeni Emre Aktaş ile LGS, TYT/AYT ve okula yardımcı matematik özel dersleri. Premium kalite, kişiselleştirilmiş eğitim metodolojisi ile başarıya ulaşın.",
    "url": "https://emreaktas-matematik.com",
    "telephone": `+${CONTACT_INFO.PHONE}`,
    "email": CONTACT_INFO.EMAIL,
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
    "paymentAccepted": "Cash, Bank Transfer",
    "areaServed": [
      {
        "@type": "City",
        "name": "Başakşehir"
      },
      {
        "@type": "City", 
        "name": "Bahçeşehir"
      },
      {
        "@type": "City",
        "name": "Florya"
      },
      {
        "@type": "City",
        "name": "Küçükçekmece"
      },
      {
        "@type": "City",
        "name": "Esenler"
      },
      {
        "@type": "City",
        "name": "Sultangazi"
      },
      {
        "@type": "City",
        "name": "Arnavutköy"
      },
      {
        "@type": "City",
        "name": "Ataköy"
      },
      {
        "@type": "City",
        "name": "Bakırköy"
      },
      {
        "@type": "City",
        "name": "Avcılar"
      }
    ],
    "serviceType": [
      "LGS Hazırlık",
      "TYT/AYT Hazırlık", 
      "Okula Yardımcı Matematik",
      "Premium Matematik Özel Ders"
    ],
    "provider": {
      "@type": "Person",
      "name": "Emre Aktaş",
      "jobTitle": "Matematik Öğretmeni",
      "description": "15 yıl deneyimli matematik öğretmeni",
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Boğaziçi Üniversitesi"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1000",
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
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Mehmet Demir"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "15 yıllık deneyimi gerçekten fark yaratıyor. TYT matematikte 40 sorudan 38'ini doğru yaptım."
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Premium Matematik Özel Ders Paketleri",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Premium Bireysel Ders",
            "description": "60 dakikalık premium matematik özel dersi"
          },
          "price": "2500",
          "priceCurrency": "TRY"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Premium Paket (10 Ders)",
            "description": "10 adet 60 dakikalık premium matematik dersi"
          },
          "price": "22500",
          "priceCurrency": "TRY"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "VIP Paket (20 Ders)", 
            "description": "20 adet 60 dakikalık VIP matematik dersi"
          },
          "price": "42500",
          "priceCurrency": "TRY"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Elite Paket (30 Ders)",
            "description": "30 adet 60 dakikalık elite matematik dersi"
          },
          "price": "60000",
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
