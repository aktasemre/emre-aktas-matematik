import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ücretler | Emre Aktaş Matematik',
  description: 'Matematik özel ders ücretleri. Şeffaf fiyatlandırma ve paket seçenekleri. LGS, TYT/AYT ve okula yardımcı dersler.',
  openGraph: {
    title: 'Ücretler | Emre Aktaş Matematik',
    description: 'Matematik özel ders ücretleri. Şeffaf fiyatlandırma ve paket seçenekleri.',
  },
}

export default function UcretlerPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-800 mb-6">
          Ücretler
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Şeffaf fiyatlandırma ve paket seçenekleri ile matematik özel dersleri. 
          Her bütçeye uygun, kaliteli eğitim seçenekleri.
        </p>
      </div>

      {/* Fiyatlandırma Prensipleri */}
      <div className="mb-12 bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Fiyatlandırma Prensiplerimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-indigo-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">✓</div>
            <h3 className="text-xl font-bold mb-3 text-indigo-800">Şeffaf Fiyatlandırma</h3>
            <p className="text-gray-700">
              Tüm ücretler açık ve net. Gizli maliyet yok, şeffaf fiyatlandırma.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">✓</div>
            <h3 className="text-xl font-bold mb-3 text-green-800">Esnek Paketler</h3>
            <p className="text-gray-700">
              İhtiyacınıza uygun paket seçenekleri. Tek ders veya paket alımı.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">✓</div>
            <h3 className="text-xl font-bold mb-3 text-purple-800">Kalite Garantisi</h3>
            <p className="text-gray-700">
              Memnun kalmazsanız ilk ders ücretsiz. Kalite garantisi.
            </p>
          </div>
        </div>
      </div>

      {/* Paket Seçenekleri */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Paket Seçenekleri</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tek Ders Paketi */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-indigo-500 transition-colors">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Tek Ders</h3>
              <div className="text-4xl font-bold text-indigo-600 mb-2">₺300</div>
              <div className="text-gray-600">90 dakika</div>
            </div>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>90 dakikalık özel ders</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Konu anlatımı</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Soru çözümü</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Ödev takibi</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>WhatsApp desteği</span>
              </li>
            </ul>
            <a 
              href="https://wa.me/905XXXXXXXXX?text=Tek ders paketi hakkında bilgi almak istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg font-semibold text-center block transition-colors"
            >
              İletişime Geç
            </a>
          </div>

          {/* 4 Ders Paketi */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-indigo-500 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                En Popüler
              </span>
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">4 Ders Paketi</h3>
              <div className="text-4xl font-bold text-indigo-600 mb-2">₺1.100</div>
              <div className="text-gray-600">₺275/ders (90 dakika)</div>
              <div className="text-green-600 font-semibold mt-2">%8 İndirim</div>
            </div>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>4 adet 90 dakikalık ders</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Kişisel çalışma planı</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Seviye tespiti</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Ödev takibi</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>7/24 WhatsApp desteği</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>İlerleme raporu</span>
              </li>
            </ul>
            <a 
              href="https://wa.me/905XXXXXXXXX?text=4 ders paketi hakkında bilgi almak istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg font-semibold text-center block transition-colors"
            >
              İletişime Geç
            </a>
          </div>

          {/* 8 Ders Paketi */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-indigo-500 transition-colors">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">8 Ders Paketi</h3>
              <div className="text-4xl font-bold text-indigo-600 mb-2">₺2.000</div>
              <div className="text-gray-600">₺250/ders (90 dakika)</div>
              <div className="text-green-600 font-semibold mt-2">%17 İndirim</div>
            </div>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>8 adet 90 dakikalık ders</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Detaylı kişisel plan</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Seviye tespiti ve analiz</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Ödev ve proje desteği</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>7/24 WhatsApp desteği</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Haftalık ilerleme raporu</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Veli bilgilendirme</span>
              </li>
            </ul>
            <a 
              href="https://wa.me/905XXXXXXXXX?text=8 ders paketi hakkında bilgi almak istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg font-semibold text-center block transition-colors"
            >
              İletişime Geç
            </a>
          </div>
        </div>
      </div>

      {/* Özel Paketler */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Özel Paketler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">LGS Hazırlık Paketi</h3>
            <div className="text-3xl font-bold mb-4">₺4.500</div>
            <p className="mb-6 text-green-100">
              6 aylık kapsamlı LGS hazırlık programı. Tüm matematik konuları, 
              deneme sınavları ve sınav stratejileri dahil.
            </p>
            <ul className="space-y-2 text-green-100 mb-6">
              <li>• 24 adet 90 dakikalık ders</li>
              <li>• 8 adet LGS deneme sınavı</li>
              <li>• Kişisel çalışma programı</li>
              <li>• Veli bilgilendirme toplantıları</li>
              <li>• 7/24 WhatsApp desteği</li>
            </ul>
            <a 
              href="https://wa.me/905XXXXXXXXX?text=LGS hazırlık paketi hakkında bilgi almak istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 hover:bg-gray-100 py-3 px-6 rounded-lg font-semibold inline-block transition-colors"
            >
              Detaylı Bilgi
            </a>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">TYT/AYT Hazırlık Paketi</h3>
            <div className="text-3xl font-bold mb-4">₺6.000</div>
            <p className="mb-6 text-purple-100">
              8 aylık kapsamlı üniversite hazırlık programı. TYT ve AYT matematik 
              konuları, deneme sınavları ve üniversite rehberliği dahil.
            </p>
            <ul className="space-y-2 text-purple-100 mb-6">
              <li>• 32 adet 90 dakikalık ders</li>
              <li>• 12 adet TYT/AYT deneme sınavı</li>
              <li>• Kişisel çalışma programı</li>
              <li>• Üniversite rehberliği</li>
              <li>• 7/24 WhatsApp desteği</li>
            </ul>
            <a 
              href="https://wa.me/905XXXXXXXXX?text=TYT/AYT hazırlık paketi hakkında bilgi almak istiyorum"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 hover:bg-gray-100 py-3 px-6 rounded-lg font-semibold inline-block transition-colors"
            >
              Detaylı Bilgi
            </a>
          </div>
        </div>
      </div>

      {/* Ödeme Seçenekleri */}
      <div className="mb-12 bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Ödeme Seçenekleri</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">💳</div>
            <h3 className="text-xl font-bold mb-3 text-green-800">Nakit Ödeme</h3>
            <p className="text-gray-700">
              Ders sonrası nakit ödeme. En esnek ödeme seçeneği.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">🏦</div>
            <h3 className="text-xl font-bold mb-3 text-blue-800">Banka Transferi</h3>
            <p className="text-gray-700">
              Paket alımlarında banka transferi ile ödeme.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">📱</div>
            <h3 className="text-xl font-bold mb-3 text-purple-800">Taksitli Ödeme</h3>
            <p className="text-gray-700">
              Büyük paketlerde taksitli ödeme seçeneği.
            </p>
          </div>
        </div>
      </div>

      {/* Garanti */}
      <div className="mb-12 bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Kalite Garantisi</h2>
        <div className="text-center">
          <div className="bg-green-500 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">✓</div>
          <p className="text-xl text-gray-700 mb-4">
            İlk dersinizden memnun kalmazsanız, ders ücreti iade edilir.
          </p>
          <p className="text-lg text-gray-600">
            Kaliteli eğitim garantisi ile güvenle başlayın.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-4">Size En Uygun Paketi Seçelim!</h2>
        <p className="text-xl mb-6 text-indigo-100">
          İhtiyaçlarınıza uygun paket seçimi için ücretsiz danışmanlık alın.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://wa.me/905XXXXXXXXX?text=Ücretler ve paketler hakkında bilgi almak istiyorum"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            WhatsApp ile İletişim
          </a>
          <a 
            href="tel:+905XXXXXXXXX"
            className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Hemen Ara
          </a>
        </div>
      </div>
    </main>
  )
}
