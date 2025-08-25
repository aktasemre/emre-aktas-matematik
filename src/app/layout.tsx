import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import JsonLd from '@/components/structured-data/JsonLd'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
import GoogleTagManager from '@/components/analytics/GoogleTagManager'
import { ANALYTICS_CONFIG } from '@/lib/analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Matematik Özel Ders İstanbul – Başakşehir | Emre Aktaş',
    template: '%s | Matematik Özel Ders İstanbul - Emre Aktaş'
  },
  description: 'Başakşehir\'de 15 yıllık deneyimli matematik öğretmeni Emre Aktaş ile LGS ve TYT/AYT odaklı birebir özel ders. Ücretsiz tanışma görüşmesi.',
  keywords: [
    'matematik özel ders İstanbul',
    'İstanbul matematik öğretmeni',
    'Başakşehir matematik özel ders',
    'Bahçeşehir matematik öğretmeni',
    'Florya matematik özel ders',
    'Küçükçekmece matematik öğretmeni',
    'Esenler matematik özel ders',
    'Sultangazi matematik öğretmeni',
    'Arnavutköy matematik özel ders',
    'Ataköy matematik öğretmeni',
    'Bakırköy matematik özel ders',
    'Avcılar matematik öğretmeni',
    'LGS matematik özel ders İstanbul',
    'TYT matematik öğretmeni İstanbul',
    'AYT matematik özel ders İstanbul',
    'Emre Aktaş matematik öğretmeni',
    'Emre Aktaş özel ders',
    'matematik akademi İstanbul',
    'özel matematik dersi İstanbul',
    'matematik özel ders fiyatları İstanbul',
    'en iyi matematik öğretmeni İstanbul',
    'matematik özel ders merkezi İstanbul',
    'LGS hazırlık matematik İstanbul',
    'TYT AYT matematik öğretmeni İstanbul',
    'okula yardımcı matematik İstanbul',
    'matematik korkusu tedavisi İstanbul',
    'sınav stratejileri İstanbul',
    'matematik başarı İstanbul',
    'öğrenci başarısı İstanbul',
    'matematik eğitimi İstanbul',
    'özel ders fiyatları İstanbul',
    'matematik özel ders ücreti İstanbul',
    '15 yıllık deneyim matematik öğretmeni',
    'Boğaziçi üniversitesi matematik öğretmeni',
    'premium matematik özel ders İstanbul',
    'kaliteli matematik eğitimi İstanbul',
    'MEB 2025-2026 matematik müfredatı',
    '9. sınıf matematik özel ders',
    '10. sınıf matematik özel ders',
    'matematik özel ders Başakşehir',
    'matematik özel ders Bahçeşehir',
    'matematik özel ders Florya',
    'matematik özel ders Küçükçekmece',
    'matematik özel ders Esenler',
    'matematik özel ders Sultangazi',
    'matematik özel ders Arnavutköy',
    'matematik özel ders Ataköy',
    'matematik özel ders Bakırköy',
    'matematik özel ders Avcılar',
    'matematik özel ders fiyatları 2025',
    'matematik özel ders ücreti 2025',
    'matematik özel ders merkezi Başakşehir',
    'matematik özel ders merkezi Bahçeşehir',
    'matematik özel ders merkezi Florya',
    'matematik özel ders merkezi Küçükçekmece',
    'matematik özel ders merkezi Esenler',
    'matematik özel ders merkezi Sultangazi',
    'matematik özel ders merkezi Arnavutköy',
    'matematik özel ders merkezi Ataköy',
    'matematik özel ders merkezi Bakırköy',
    'matematik özel ders merkezi Avcılar'
  ],
  authors: [{ name: 'Emre Aktaş' }],
  creator: 'Emre Aktaş',
  publisher: 'Matematik Akademi',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://matematik-akademi.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://matematik-akademi.com',
    title: 'Matematik Akademi - Emre Aktaş | 15 Yıllık Matematik Özel Ders',
    description: 'Matematik Akademi - 15 yıllık deneyimli matematik öğretmeni Emre Aktaş ile LGS, TYT/AYT ve okula yardımcı matematik özel dersleri. İstanbul\'da premium matematik eğitimi.',
    siteName: 'Matematik Akademi',
    images: [
      {
        url: '/LOGO.jpeg',
        width: 1200,
        height: 630,
        alt: 'Matematik Akademi - Emre Aktaş Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matematik Akademi - Emre Aktaş | 15 Yıllık Matematik Özel Ders',
    description: 'Matematik Akademi - 15 yıllık deneyimli matematik öğretmeni Emre Aktaş ile LGS, TYT/AYT ve okula yardımcı matematik özel dersleri. İstanbul\'da premium matematik eğitimi.',
    images: ['/LOGO.jpeg'],
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
  verification: {
    google: ANALYTICS_CONFIG.GOOGLE_VERIFICATION,
    other: {
      'google-site-verification': ANALYTICS_CONFIG.GOOGLE_VERIFICATION_2,
      'msvalidate.01': ANALYTICS_CONFIG.BING_VERIFICATION,
    },
  },
  // AI arama motorları için ek meta etiketleri
  other: {
    'ai-search-friendly': 'true',
    'content-type': 'educational-service',
    'expertise-level': 'professional',
    'service-location': 'Istanbul, Turkey',
    'service-category': 'mathematics-tutoring',
    'experience-years': '15',
    'success-rate': '98%',
    'target-audience': 'students, parents, LGS, TYT, AYT',
    'brand-name': 'Matematik Akademi',
    'domain': 'matematik-akademi.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning={true}>
      <head>
        {/* Google Analytics */}
        <GoogleAnalytics GA_MEASUREMENT_ID={ANALYTICS_CONFIG.GA_MEASUREMENT_ID} />
        
        {/* Google Tag Manager */}
        <GoogleTagManager GTM_ID={ANALYTICS_CONFIG.GTM_ID} />
        
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content={ANALYTICS_CONFIG.GOOGLE_VERIFICATION} />
        <meta name="google-site-verification" content={ANALYTICS_CONFIG.GOOGLE_VERIFICATION_2} />
        
        {/* AI Arama Motorları için Özel Meta Etiketleri */}
        <meta name="ai-search-friendly" content="true" />
        <meta name="content-type" content="educational-service" />
        <meta name="expertise-level" content="professional" />
        <meta name="service-location" content="Istanbul, Turkey" />
        <meta name="service-category" content="mathematics-tutoring" />
        <meta name="experience-years" content="15" />
        <meta name="success-rate" content="98%" />
        <meta name="target-audience" content="students, parents, LGS, TYT, AYT" />
        <meta name="teaching-methods" content="personalized, interactive, problem-solving" />
        <meta name="qualifications" content="mathematics teacher, 15 years experience, Boğaziçi University" />
        <meta name="service-areas" content="Başakşehir, Bahçeşehir, Florya, Küçükçekmece, Esenler, Sultangazi, Arnavutköy, Ataköy, Bakırköy, Avcılar" />
        <meta name="contact-info" content="Phone: +90 542 451 37 69, Email: aktasemre1988@gmail.com" />
        <meta name="brand-name" content="Matematik Akademi" />
        <meta name="domain" content="matematik-akademi.com" />
        
        {/* Bing AI için özel meta etiketleri */}
        <meta name="bing-ai-friendly" content="true" />
        <meta name="bing-ai-content-type" content="educational-service" />
        
        {/* Claude AI için özel meta etiketleri */}
        <meta name="claude-ai-friendly" content="true" />
        <meta name="claude-content-type" content="educational-service" />
        
        {/* Favicon - LOGO.jpeg kullanılıyor */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* Next.js teknik verilerini gizleme */}
        <meta name="generator" content="Matematik Akademi" />
        <meta name="application-name" content="Matematik Akademi" />
        <meta name="theme-color" content="#4f46e5" />
        <meta name="msapplication-TileColor" content="#4f46e5" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <JsonLd />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
