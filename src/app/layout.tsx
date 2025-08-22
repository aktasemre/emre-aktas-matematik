import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import JsonLd from '@/components/structured-data/JsonLd'

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
    'Arnavutköy matematik'
  ],
  authors: [{ name: 'Emre Aktaş' }],
  creator: 'Emre Aktaş',
  publisher: 'Emre Aktaş',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://emreaktas-matematik.com'), // Önerilen alan adı
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
        url: '/og-image.jpg', // Bu dosyayı public klasörüne ekleyin
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
    images: ['/og-image.jpg'], // Bu dosyayı public klasörüne ekleyin
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
    google: 'your-google-verification-code', // Google Search Console'dan alınacak
    yandex: 'your-yandex-verification-code', // Yandex Webmaster'dan alınacak
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning={true}>
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
