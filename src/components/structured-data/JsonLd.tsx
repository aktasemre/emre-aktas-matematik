import { CONTACT_INFO } from '@/constants/contact'

export default function JsonLd() {
  const educationalService = {
    "@context": "https://schema.org",
    "@type": "EducationalService",
    "name": "Matematik Akademi",
    "alternateName": "Matematik Akademi - Emre Aktaş",
    "description": "Matematik Akademi - 15 yıllık deneyimli matematik öğretmeni Emre Aktaş ile LGS, TYT/AYT ve okula yardımcı matematik özel dersleri. Premium kalite, kişiselleştirilmiş eğitim metodolojisi ile başarıya ulaşın.",
    "url": "https://matematik-akademi.com",
    "logo": "https://matematik-akademi.com/LOGO.jpeg",
    "image": "https://matematik-akademi.com/LOGO.jpeg",
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

  // LocalBusiness Schema - Güçlendirilmiş
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Matematik Akademi - Emre Aktaş",
    "alternateName": "Emre Aktaş Matematik Özel Ders",
    "description": "15 yıllık deneyimli matematik öğretmeni Emre Aktaş ile LGS, TYT/AYT ve okula yardımcı matematik özel dersleri. Başakşehir'de premium matematik eğitimi.",
    "url": "https://matematik-akademi.com",
    "telephone": "+90 542 451 37 69",
    "email": "aktasemre1988@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Başakşehir",
      "addressLocality": "İstanbul",
      "addressRegion": "İstanbul",
      "postalCode": "34480",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.0082,
      "longitude": 28.9784
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "21:00"
      }
    ],
    "priceRange": "₺₺₺",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "currenciesAccepted": "TRY",
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
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 41.0082,
        "longitude": 28.9784
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Matematik Özel Ders Hizmetleri",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "LGS Matematik Özel Ders",
            "description": "LGS sınavına hazırlık matematik özel dersleri"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "TYT AYT Matematik Özel Ders",
            "description": "Üniversite sınavına hazırlık matematik özel dersleri"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Okula Yardımcı Matematik",
            "description": "9. ve 10. sınıf okula yardımcı matematik özel dersleri"
          }
        }
      ]
    },
    "founder": {
      "@type": "Person",
      "name": "Emre Aktaş",
      "jobTitle": "Matematik Öğretmeni",
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Boğaziçi Üniversitesi"
      },
      "knowsAbout": ["Matematik", "Eğitim", "LGS", "TYT", "AYT", "Özel Ders"],
      "description": "15 yıllık deneyimli matematik öğretmeni"
    },
    "foundingDate": "2010",
    "numberOfEmployees": "1",
    "slogan": "Matematik Başarısı İçin Profesyonel Çözüm",
    "brand": {
      "@type": "Brand",
      "name": "Matematik Akademi"
    },
    "sameAs": [
      "https://www.facebook.com/matematikakademi",
      "https://www.instagram.com/matematikakademi",
      "https://www.youtube.com/@matematikakademi"
    ]
  };

  // Organization Schema - Ek SEO gücü
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Matematik Akademi",
    "alternateName": "Emre Aktaş Matematik Özel Ders",
    "url": "https://matematik-akademi.com",
    "logo": "https://matematik-akademi.com/ozel_ders_web_logo.png",
    "description": "15 yıllık deneyimli matematik öğretmeni Emre Aktaş ile premium matematik özel dersleri",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Başakşehir",
      "addressLocality": "İstanbul",
      "addressRegion": "İstanbul",
      "postalCode": "34480",
      "addressCountry": "TR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90 542 451 37 69",
      "contactType": "customer service",
      "availableLanguage": "Turkish",
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "21:00"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Eğitim Hizmetleri",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "LGS Matematik Hazırlık",
            "description": "LGS sınavına hazırlık matematik kursu",
            "provider": {
              "@type": "Organization",
              "name": "Matematik Akademi"
            },
            "educationalLevel": "Secondary Education"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "TYT AYT Matematik Hazırlık",
            "description": "Üniversite sınavına hazırlık matematik kursu",
            "provider": {
              "@type": "Organization",
              "name": "Matematik Akademi"
            },
            "educationalLevel": "Higher Education"
          }
        }
      ]
    }
  };

  // FAQ schema for Başakşehir page
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Başakşehir'de hangi mahallelerde matematik özel ders veriyorsunuz?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Başakşehir merkez ve tüm etaplar, Bahçeşehir 1-2. Kısım, Kayaşehir, Şahintepe, Altınşehir, Ziya Gökalp, Güvercintepe, Başakçılar ve Hoşdere mahallelerinde evde özel ders veriyoruz. Online ders seçeneği de mevcuttur."
        }
      },
      {
        "@type": "Question",
        "name": "Matematik özel ders ücretleri ne kadar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ders ücretlerimiz, ders süresi, sıklığı ve öğrenci seviyesine göre değişmektedir. İlk tanışma dersi ücretsizdir. Detaylı ücret bilgisi için iletişime geçebilirsiniz."
        }
      },
      {
        "@type": "Question",
        "name": "Matematik özel ders süresi ne kadar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "LGS öğrencileri için 90 dakika, TYT/AYT öğrencileri için 120 dakika, okula yardımcı dersler için 60-90 dakika önerilmektedir. Öğrenci ihtiyacına göre süre ayarlanabilir."
        }
      },
      {
        "@type": "Question",
        "name": "Evde mi online mı matematik dersi veriyorsunuz?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Her iki seçenek de mevcuttur. Başakşehir ve çevre mahallelerde evde yüz yüze ders verebiliriz. Ayrıca zoom üzerinden online ders seçeneğimiz de vardır."
        }
      },
      {
        "@type": "Question",
        "name": "Matematik özel ders için deneme dersi var mı?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet, ilk dersimiz ücretsiz tanışma ve seviye tespit dersidir. Bu derste öğrenciyi tanır, eksiklerini belirler ve veliye detaylı bir çalışma planı sunarız."
        }
      }
    ]
  }

  // Course schema for educational programs
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "LGS Matematik Hazırlık Kursu",
    "description": "Liseye Geçiş Sınavı (LGS) için kapsamlı matematik hazırlık programı",
    "provider": {
      "@type": "Organization",
      "name": "Matematik Akademi",
      "sameAs": "https://matematik-akademi.com"
    },
    "courseMode": ["onsite", "online"],
    "educationalLevel": "Ortaokul",
    "teaches": "Matematik",
    "inLanguage": "tr",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "89"
    }
  }

  // Review schema for testimonials
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "EducationalService",
      "name": "Matematik Akademi - Emre Aktaş"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Ayşe Hanım"
    },
    "reviewBody": "Oğlum LGS'ye Emre Hoca ile hazırlandı. Başakşehir 4. Etap'ta evimize geliyordu. Çok sabırlı ve ilgili bir öğretmen. Matematik notları 70'lerden 95'lere çıktı. Kesinlikle tavsiye ederim.",
    "datePublished": "2024-01-15",
    "publisher": {
      "@type": "Organization",
      "name": "Matematik Akademi"
    }
  }

  // AggregateRating schema for overall rating
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "itemReviewed": {
      "@type": "EducationalService",
      "name": "Matematik Akademi - Emre Aktaş"
    },
    "ratingValue": "4.9",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "127",
    "reviewCount": "98"
  }

  // Event schema for free trial lessons
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Ücretsiz Matematik Deneme Dersi",
    "description": "Başakşehir'de ücretsiz matematik deneme dersi. Öğrenci seviye tespiti ve veli görüşmesi.",
    "startDate": "2024-01-20T10:00:00+03:00",
    "endDate": "2024-01-20T11:30:00+03:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Başakşehir, İstanbul",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Başakşehir",
        "addressRegion": "İstanbul",
        "addressCountry": "TR"
      }
    },
    "organizer": {
      "@type": "Person",
      "name": "Emre Aktaş",
      "telephone": "+905424513769",
      "email": "aktasemre1988@gmail.com"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "TRY",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-15T00:00:00+03:00"
    },
    "performer": {
      "@type": "Person",
      "name": "Emre Aktaş",
      "jobTitle": "Matematik Öğretmeni",
      "worksFor": {
        "@type": "Organization",
        "name": "Matematik Akademi"
      }
    }
  }

  // Combine all schemas
  const allSchemas = [educationalService, localBusinessSchema, organizationSchema, faqSchema, courseSchema, reviewSchema, aggregateRatingSchema, eventSchema]

  return (
    <>
      {allSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          suppressHydrationWarning={true}
        />
      ))}
    </>
  )
}
