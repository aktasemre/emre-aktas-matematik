import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '404 - Sayfa Bulunamadı | Matematik Akademi',
  description: 'Aradığınız sayfa bulunamadı. Ana sayfaya dönün veya matematik özel ders hizmetlerimizi keşfedin.',
  robots: 'noindex, follow',
}

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-indigo-600 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Sayfa Bulunamadı
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Üzgünüz, aradığınız sayfa bulunamadı veya taşınmış olabilir.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Size Yardımcı Olabilecek Sayfalar:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link 
              href="/" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              🏠 Ana Sayfa
            </Link>
            <Link 
              href="/matematik" 
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              📚 Matematik Özel Ders
            </Link>
            <Link 
              href="/basaksehir-matematik-ozel-ders" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              📍 Başakşehir Özel Ders
            </Link>
            <Link 
              href="/iletisim" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              📞 İletişim
            </Link>
          </div>
        </div>

        <div className="text-gray-600 mb-8">
          <p className="mb-4">
            Matematik özel ders almak mı istiyorsunuz?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/905424513769?text=Merhaba! Matematik özel ders hakkında bilgi almak istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              💬 WhatsApp ile İletişim
            </a>
            <a 
              href="tel:+905424513769"
              className="inline-flex items-center bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              📱 Hemen Ara
            </a>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-sm text-gray-500">
            Eğer bu sayfaya bir link üzerinden geldiyseniz, lütfen bize bildirin.
          </p>
        </div>
      </div>
    </main>
  )
}
