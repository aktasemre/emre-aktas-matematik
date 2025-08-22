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
    default: 'Matematik Akademi - Emre Aktaş | 15 Yıllık Matematik Özel Ders',
    template: '%s | Matematik Akademi - Emre Aktaş'
  },
  description: 'Matematik Akademi - 15 yıllık deneyimli matematik öğretmeni Emre Aktaş ile LGS, TYT/AYT ve okula yardımcı matematik özel dersleri. İstanbul\'da Başakşehir, Bahçeşehir, Florya, Küçükçekmece, Esenler, Sultangazi, Arnavutköy, Ataköy, Bakırköy, Avcılar bölgelerinde premium matematik eğitimi. Kişiselleştirilmiş eğitim metodolojisi ile %98 başarı oranı.',
  keywords: [
    'matematik akademi',
    'matematik özel ders',
    'LGS hazırlık',
    'TYT AYT hazırlık',
    'okula yardımcı matematik',
    'Emre Aktaş',
    'İstanbul matematik öğretmeni',
    'özel ders',
    'matematik dersi',
    'sınav hazırlık',
    'fen lisesi hazırlık',
    'üniversite hazırlık',
    '15 yıllık deneyim',
    'Başakşehir matematik',
    'Bahçeşehir matematik',
    'Florya matematik',
    'Küçükçekmece matematik',
    'Esenler matematik',
    'Sultangazi matematik',
    'Arnavutköy matematik',
    'Ataköy matematik',
    'Bakırköy matematik',
    'Avcılar matematik',
    'premium matematik özel ders',
    'kaliteli matematik eğitimi',
    'matematik öğretmeni İstanbul',
    'özel matematik dersi',
    'LGS matematik özel ders',
    'TYT matematik özel ders',
    'AYT matematik özel ders',
    'matematik korkusu tedavisi',
    'sınav stratejileri',
    'matematik başarı',
    'öğrenci başarısı',
    'matematik eğitimi',
    'özel ders fiyatları',
    'matematik özel ders ücreti',
    'matematik akademi İstanbul',
    'en iyi matematik öğretmeni',
    'matematik özel ders merkezi'
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
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Matematik Akademi - Emre Aktaş | 15 Yıllık Matematik Özel Ders',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matematik Akademi - Emre Aktaş | 15 Yıllık Matematik Özel Ders',
    description: 'Matematik Akademi - 15 yıllık deneyimli matematik öğretmeni Emre Aktaş ile LGS, TYT/AYT ve okula yardımcı matematik özel dersleri. İstanbul\'da premium matematik eğitimi.',
    images: ['/og-image.jpg'],
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
        
        {/* Favicon */}
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
