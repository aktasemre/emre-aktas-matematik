import { CONTACT_INFO } from '@/constants/contact'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ücretler | Emre Aktaş - Matematik Özel Ders Fiyatları',
  description: 'Emre Aktaş matematik özel ders ücretleri. LGS, TYT, AYT ve okul desteği için uygun fiyatlı matematik özel dersleri. Saatlik 2500 TL.',
  keywords: 'matematik özel ders ücreti, matematik özel ders fiyatı, LGS matematik ücreti, TYT matematik fiyatı, İstanbul matematik özel ders',
}

export default function UcretlerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="block">Şeffaf ve</span>
            <span className="block text-yellow-400">Uygun Fiyatlı</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Kaliteli matematik eğitimi için makul ücretler. Her bütçeye uygun özel ders seçenekleri.
          </p>
        </div>
      </section>

      {/* Ana Ücretlendirme */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Ücretlendirme</h2>
              <p className="text-xl text-gray-600">
                15 yıllık deneyimle kaliteli matematik eğitimi
              </p>
            </div>

            {/* Ana Fiyat Kartı */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-2xl p-8 md:p-12 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">Bireysel Özel Ders</h3>
                <div className="text-6xl font-bold mb-2">₺2.500</div>
                <p className="text-xl text-indigo-100">Saatlik</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-yellow-300">Dahil Olanlar</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="text-green-400 text-xl">✓</span>
                      <span>Kişiselleştirilmiş eğitim programı</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-400 text-xl">✓</span>
                      <span>Özel ders materyalleri</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-400 text-xl">✓</span>
                      <span>İlerleme raporları</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-400 text-xl">✓</span>
                      <span>WhatsApp desteği</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-400 text-xl">✓</span>
                      <span>Esnek program düzenleme</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4 text-yellow-300">Eğitim Alanları</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="text-blue-300 text-xl">•</span>
                      <span>LGS Matematik Hazırlık</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-blue-300 text-xl">•</span>
                      <span>TYT Matematik</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-blue-300 text-xl">•</span>
                      <span>AYT Matematik</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-blue-300 text-xl">•</span>
                      <span>Okul Desteği</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-blue-300 text-xl">•</span>
                      <span>Matematik Korkusu Tedavisi</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <a
                  href={`https://wa.me/${CONTACT_INFO.WHATSAPP}?text=${encodeURIComponent('Merhaba! Matematik özel ders ücretleri hakkında bilgi almak istiyorum.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center gap-2"
                >
                  <span>📱 Hemen İletişime Geç</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Özel Teklifler */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Özel Teklifler</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Paket Dersler</h3>
                  <p className="text-gray-600">10 derslik paketlerde indirim</p>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li>• 10 ders paketi: ₺22.500</li>
                  <li>• 20 ders paketi: ₺42.500</li>
                  <li>• 30 ders paketi: ₺60.000</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">👥</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Grup Dersleri</h3>
                  <p className="text-gray-600">2-3 kişilik gruplar</p>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li>• 2 kişi: Kişi başı ₺1.500</li>
                  <li>• 3 kişi: Kişi başı ₺1.200</li>
                  <li>• Aynı seviye öğrenciler</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">📚</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Online Dersler</h3>
                  <p className="text-gray-600">Zoom/Skype üzerinden</p>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li>• Saatlik: ₺2.000</li>
                  <li>• Aynı kalitede eğitim</li>
                  <li>• Kayıt alma imkanı</li>
                  <li>• Esnek saatler</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ödeme Seçenekleri */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Ödeme Seçenekleri</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Nakit Ödeme</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Ders sonunda ödeme</li>
                  <li>• Paket derslerde peşin ödeme</li>
                  <li>• İndirimli fiyatlar</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Banka Transferi</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Paket dersler için</li>
                  <li>• Güvenli ödeme</li>
                  <li>• Makbuz verilir</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İletişim CTA */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Hemen İletişime Geçin</h2>
          <p className="text-xl mb-8 text-gray-200">
            Ücretler ve özel teklifler hakkında detaylı bilgi almak için bana ulaşın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${CONTACT_INFO.WHATSAPP}?text=${encodeURIComponent('Merhaba! Matematik özel ders ücretleri hakkında bilgi almak istiyorum.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <span>📱 WhatsApp'tan Yaz</span>
            </a>
            <a
              href={`tel:+${CONTACT_INFO.PHONE}`}
              className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <span>📞 Hemen Ara</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
