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
    default: 'Emre Aktaş - 15 Yıllık Matematik Özel Ders',
    template: '%s | Emre Aktaş Matematik'
  },
  description: '15 yıllık deneyimli matematik öğretmeni Emre Aktaş ile LGS, TYT/AYT ve okula yardımcı matematik özel dersleri. Kişiselleştirilmiş eğitim metodolojisi ile başarıya ulaşın.',
  keywords: [
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
    'kaliteli matematik eğitimi'
  ],
  authors: [{ name: 'Emre Aktaş' }],
  creator: 'Emre Aktaş',
  publisher: 'Emre Aktaş',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://emreaktas-matematik.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://emreaktas-matematik.com',
    title: 'Emre Aktaş - 15 Yıllık Matematik Özel Ders',
    description: '15 yıllık deneyimli matematik öğretmeni Emre Aktaş ile LGS, TYT/AYT ve okula yardımcı matematik özel dersleri. Kişiselleştirilmiş eğitim metodolojisi ile başarıya ulaşın.',
    siteName: 'Emre Aktaş Matematik',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Emre Aktaş - 15 Yıllık Matematik Özel Ders',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emre Aktaş - 15 Yıllık Matematik Özel Ders',
    description: '15 yıllık deneyimli matematik öğretmeni Emre Aktaş ile LGS, TYT/AYT ve okula yardımcı matematik özel dersleri. Kişiselleştirilmiş eğitim metodolojisi ile başarıya ulaşın.',
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
