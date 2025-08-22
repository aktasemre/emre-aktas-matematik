import { CONTACT_INFO } from '@/constants/contact'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ücretler | Emre Aktaş - Premium Matematik Özel Ders',
  description: 'Emre Aktaş premium matematik özel ders ücretleri. 15 yıllık deneyimle kaliteli eğitim. LGS, TYT, AYT ve okul desteği için profesyonel matematik özel dersleri.',
  keywords: 'premium matematik özel ders, kaliteli matematik eğitimi, LGS matematik özel ders, TYT matematik fiyatı, İstanbul matematik öğretmeni',
}

export default function UcretlerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="block">Premium Kalite</span>
            <span className="block text-yellow-400">Profesyonel Eğitim</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            15 yıllık deneyimle kaliteli matematik eğitimi. Başarı odaklı, 
            kişiselleştirilmiş öğretim metodları ile hedeflerinize ulaşın.
          </p>
        </div>
      </section>

      {/* Ana Ücretlendirme */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Premium Ücretlendirme</h2>
              <p className="text-xl text-gray-600">
                15 yıllık deneyimle kaliteli matematik eğitimi - Başarı garantili
              </p>
            </div>

            {/* Ana Fiyat Kartı */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-2xl p-8 md:p-12 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">Premium Bireysel Özel Ders</h3>
                <div className="text-6xl font-bold mb-2">₺2.500</div>
                <p className="text-xl text-indigo-100">Saatlik</p>
                <p className="text-sm text-indigo-200 mt-2">* Kalite garantili, başarı odaklı</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-yellow-300">Premium Hizmetler</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="text-green-400 text-xl">✓</span>
                      <span>Kişiselleştirilmiş eğitim programı</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-400 text-xl">✓</span>
                      <span>Premium ders materyalleri</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-400 text-xl">✓</span>
                      <span>Detaylı ilerleme raporları</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-400 text-xl">✓</span>
                      <span>7/24 WhatsApp desteği</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-400 text-xl">✓</span>
                      <span>Başarı garantisi</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-400 text-xl">✓</span>
                      <span>Veli bilgilendirme sistemi</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4 text-yellow-300">Uzmanlık Alanları</h4>
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
                    <li className="flex items-center gap-3">
                      <span className="text-blue-300 text-xl">•</span>
                      <span>Sınav Stratejileri</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <a
                  href={`https://wa.me/${CONTACT_INFO.WHATSAPP}?text=${encodeURIComponent('Merhaba! Premium matematik özel ders hakkında bilgi almak istiyorum.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center gap-2"
                >
                  <span>📱 Premium Hizmet İçin İletişime Geç</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kalite Garantisi */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Neden Premium Ücret?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">15 Yıl Deneyim</h3>
                <p className="text-gray-600">
                  1000+ öğrenci ile kanıtlanmış başarı. Deneyimli öğretmenlik.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">%98 Başarı Oranı</h3>
                <p className="text-gray-600">
                  Öğrencilerimizin %98'i hedeflerine ulaşıyor. Kanıtlanmış sonuçlar.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">💎</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Premium Hizmet</h3>
                <p className="text-gray-600">
                  Kişiselleştirilmiş program, 7/24 destek, başarı garantisi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Paketler */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Premium Paket Seçenekleri</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 shadow-lg border-2 border-indigo-200">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Paket</h3>
                  <p className="text-gray-600">10 derslik premium program</p>
                </div>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li>• 10 ders paketi: ₺22.500</li>
                  <li>• Kişisel çalışma planı</li>
                  <li>• Detaylı ilerleme raporu</li>
                  <li>• 7/24 WhatsApp desteği</li>
                </ul>
                <div className="text-center">
                  <span className="text-sm text-green-600 font-semibold">%10 İndirim</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 shadow-lg border-2 border-purple-200 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    En Popüler
                  </span>
                </div>
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">👑</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">VIP Paket</h3>
                  <p className="text-gray-600">20 derslik VIP program</p>
                </div>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li>• 20 ders paketi: ₺42.500</li>
                  <li>• Özel VIP materyaller</li>
                  <li>• Haftalık veli görüşmesi</li>
                  <li>• Öncelikli randevu hakkı</li>
                </ul>
                <div className="text-center">
                  <span className="text-sm text-green-600 font-semibold">%15 İndirim</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 shadow-lg border-2 border-green-200">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">💎</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Elite Paket</h3>
                  <p className="text-gray-600">30 derslik elite program</p>
                </div>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li>• 30 ders paketi: ₺60.000</li>
                  <li>• Elite özel materyaller</li>
                  <li>• Aylık başarı analizi</li>
                  <li>• Özel sınav stratejileri</li>
                </ul>
                <div className="text-center">
                  <span className="text-sm text-green-600 font-semibold">%20 İndirim</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grup Dersleri */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Grup Dersleri</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Premium Grup (2 Kişi)</h3>
                <div className="text-3xl font-bold text-indigo-600 mb-4">Kişi Başı ₺1.500</div>
                <ul className="space-y-3 text-gray-700">
                  <li>• Aynı seviye öğrenciler</li>
                  <li>• Kişiselleştirilmiş grup programı</li>
                  <li>• Bireysel ilerleme takibi</li>
                  <li>• Grup dinamikleri avantajı</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Elite Grup (3 Kişi)</h3>
                <div className="text-3xl font-bold text-indigo-600 mb-4">Kişi Başı ₺1.200</div>
                <ul className="space-y-3 text-gray-700">
                  <li>• Maksimum 3 kişilik grup</li>
                  <li>• Yoğunlaştırılmış program</li>
                  <li>• Rekabet ortamı</li>
                  <li>• Ekonomik avantaj</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Dersler */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Online Premium Dersler</h2>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Zoom/Skype Üzerinden Premium Eğitim</h3>
                <div className="text-3xl font-bold text-indigo-600 mb-2">Saatlik: ₺2.000</div>
                <p className="text-gray-600">Aynı kalitede eğitim, esnek saatler</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Online Avantajları</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Kayıt alma imkanı</li>
                    <li>• Ekran paylaşımı</li>
                    <li>• Dijital materyaller</li>
                    <li>• Zaman tasarrufu</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Teknik Gereksinimler</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Stabil internet bağlantısı</li>
                    <li>• Zoom/Skype uygulaması</li>
                    <li>• Kamera ve mikrofon</li>
                    <li>• Sessiz çalışma ortamı</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ödeme Seçenekleri */}
      <section className="py-16 bg-gray-50">
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
                  <li>• Anında makbuz</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Banka Transferi</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Paket dersler için</li>
                  <li>• Güvenli ödeme</li>
                  <li>• Detaylı makbuz</li>
                  <li>• Taksit seçeneği</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Başarı Garantisi */}
      <section className="py-16 bg-gradient-to-br from-green-500 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Başarı Garantisi</h2>
          <p className="text-xl mb-8 text-green-100">
            İlk dersinizden memnun kalmazsanız, ders ücreti iade edilir. 
            Kaliteli eğitim garantisi ile güvenle başlayın.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-lg">
              <strong>15 yıllık deneyim</strong> ile <strong>%98 başarı oranı</strong> elde ettik. 
              Siz de başarı hikayemizin bir parçası olun.
            </p>
          </div>
        </div>
      </section>

      {/* İletişim CTA */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Premium Hizmet İçin İletişime Geçin</h2>
          <p className="text-xl mb-8 text-gray-200">
            Kaliteli matematik eğitimi ve başarı garantisi için hemen iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${CONTACT_INFO.WHATSAPP}?text=${encodeURIComponent('Merhaba! Premium matematik özel ders hakkında bilgi almak istiyorum.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <span>📱 Premium Hizmet İçin Yaz</span>
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
