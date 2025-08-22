'use client' // Hata bileşenleri İstemci Bileşeni olmalıdır

import { useEffect } from 'react'
import Link from 'next/link'

// Sentry'yi sadece production'da başlat
if (process.env.NODE_ENV === 'production') {
  const Sentry = require('@sentry/react');
  const { BrowserTracing } = require('@sentry/tracing');

  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || 'https://examplePublicKey@o0.ingest.sentry.io/0',
    integrations: [
      new BrowserTracing({
        tracingOrigins: ["localhost", "https://emreaktas-matematik.com"],
      }),
    ],
    tracesSampleRate: 1.0,
    environment: process.env.NODE_ENV,
  });
}

export default function Error({ error, reset }) {
  useEffect(() => {
    // Sadece production'da hata raporlama
    if (process.env.NODE_ENV === 'production' && error) {
      const Sentry = require('@sentry/react');
      Sentry.captureException(error);
    }
    console.error(error);
  }, [error]);

  return (
    <main className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center">
        {/* Görsel Öğe */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-8xl font-bold text-red-500 opacity-20">!</div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-5xl text-red-500">⚠️</div>
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-600">
          Beklenmedik Bir Hata Oluştu
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Üzgünüz, işleminiz sırasında beklenmedik bir sorunla karşılaştık. Lütfen daha sonra tekrar deneyin.
        </p>
        
        {/* Ana Butonlar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Tekrar Dene
          </button>
          <Link 
            href="/" 
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold rounded-lg transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Ana Sayfaya Dön
          </Link>
        </div>
        
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 max-w-2xl mx-auto">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Yardımcı Olabilecek Kaynaklar:</h2>
          <div className="space-y-3">
            <Link href="/matematik" className="block p-3 rounded-lg hover:bg-white transition-colors duration-200">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white mr-3">
                  📚
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-800">Derslerimizi İnceleyin</div>
                  <div className="text-sm text-gray-600">LGS ve YKS hazırlık programlarımız</div>
                </div>
              </div>
            </Link>
            <Link href="/metodoloji" className="block p-3 rounded-lg hover:bg-white transition-colors duration-200">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white mr-3">
                  📊
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-800">Eğitim Metodolojimiz</div>
                  <div className="text-sm text-gray-600">4 adımlı başarı sistemimiz</div>
                </div>
              </div>
            </Link>
            <a href="tel:+905XXXXXXXXX" className="block p-3 rounded-lg hover:bg-white transition-colors duration-200">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center text-white mr-3">
                  📞
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-800">Destek Hattı</div>
                  <div className="text-sm text-gray-600">Sorun yaşıyorsanız bizi arayın</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}