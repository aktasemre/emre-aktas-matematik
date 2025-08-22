import { CONTACT_INFO } from '@/constants/contact'

export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalService",
    "name": "Matematik Akademi",
    "alternateName": "Matematik Akademi - Emre Aktaş",
    "description": "Matematik Akademi - 15 yıllık deneyimli matematik öğretmeni Emre Aktaş ile LGS, TYT/AYT ve okula yardımcı matematik özel dersleri. Premium kalite, kişiselleştirilmiş eğitim metodolojisi ile başarıya ulaşın.",
    "url": "https://matematik-akademi.com",
    "telephone": `+${CONTACT_INFO.PHONE}`,
    "email": CONTACT_INFO.EMAIL,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "İstanbul",
      "addressCountry": "TR",
      "addressRegion": "İstanbul"
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
      "Premium Matematik Özel Ders",
      "Matematik Korkusu Tedavisi",
      "Sınav Stratejileri"
    ],
    "provider": {
      "@type": "Person",
      "name": "Emre Aktaş",
      "jobTitle": "Matematik Öğretmeni",
      "description": "15 yıl deneyimli matematik öğretmeni",
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Boğaziçi Üniversitesi"
      },
      "knowsAbout": [
        "Matematik Eğitimi",
        "LGS Hazırlık",
        "TYT/AYT Hazırlık",
        "Sınav Stratejileri",
        "Öğrenci Psikolojisi",
        "Matematik Korkusu Tedavisi"
      ],
      "hasCredential": [
        "15 Yıl Deneyim",
        "Boğaziçi Üniversitesi Mezunu",
        "1000+ Öğrenci",
        "%98 Başarı Oranı"
      ]
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
        "reviewBody": "Matematik Akademi sayesinde LGS'de matematikten tam puan aldım. Özellikle yeni nesil sorularda çok yardımı oldu."
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
        "reviewBody": "Matematikten korkuyordum ama Matematik Akademi'nin sabırlı yaklaşımı sayesinde LGS'de matematik alanında %95 başarı elde ettim."
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
        "reviewBody": "Matematik Akademi'nin 15 yıllık deneyimi gerçekten fark yaratıyor. TYT matematikte 40 sorudan 38'ini doğru yaptım."
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
    },
    // AI arama motorları için ek structured data
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Matematik Akademi nedir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Matematik Akademi, 15 yıllık deneyimli matematik öğretmeni Emre Aktaş tarafından kurulan premium matematik eğitim merkezidir. LGS, TYT, AYT ve okula yardımcı matematik dersleri vermektedir."
          }
        },
        {
          "@type": "Question",
          "name": "Emre Aktaş kimdir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Emre Aktaş, Matematik Akademi'nin kurucusu ve 15 yıllık deneyimli matematik öğretmenidir. Boğaziçi Üniversitesi mezunu olup, LGS, TYT, AYT ve okula yardımcı matematik dersleri vermektedir."
          }
        },
        {
          "@type": "Question",
          "name": "Hangi bölgelerde hizmet veriyorsunuz?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Matematik Akademi olarak İstanbul'da Başakşehir, Bahçeşehir, Florya, Küçükçekmece, Esenler, Sultangazi, Arnavutköy, Ataköy, Bakırköy, Avcılar bölgelerinde hizmet veriyoruz."
          }
        },
        {
          "@type": "Question",
          "name": "Ders ücretleri nedir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Matematik Akademi'de premium bireysel ders saatlik 2500 TL, paket derslerde indirim uygulanmaktadır. 10 ders paketi 22.500 TL, 20 ders paketi 42.500 TL, 30 ders paketi 60.000 TL'dir."
          }
        },
        {
          "@type": "Question",
          "name": "Başarı oranınız nedir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Matematik Akademi öğrencilerinin %98'i hedeflerine ulaşmaktadır. 15 yıllık deneyim ve 1000+ öğrenci ile kanıtlanmış başarı elde ettik."
          }
        }
      ]
    },
    "potentialAction": [
      {
        "@type": "ContactAction",
        "name": "İletişime Geç",
        "url": "https://matematik-akademi.com/iletisim",
        "contactType": "customer service"
      },
      {
        "@type": "ContactAction",
        "name": "WhatsApp ile İletişim",
        "url": `https://wa.me/${CONTACT_INFO.WHATSAPP}`,
        "contactType": "customer service"
      }
    ],
    "sameAs": [
      "https://matematik-akademi.com",
      `https://wa.me/${CONTACT_INFO.WHATSAPP}`
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      suppressHydrationWarning={true}
    />
  )
}
