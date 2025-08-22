import { CONTACT_INFO } from '@/constants/contact'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'İletişim | Emre Aktaş - Matematik Özel Ders',
  description: 'Emre Aktaş ile iletişime geçin. 15 yıllık deneyimli matematik öğretmeni. LGS, TYT, AYT ve okula yardımcı matematik özel dersleri için randevu alın.',
  keywords: 'Emre Aktaş iletişim, matematik özel ders randevu, İstanbul matematik öğretmeni, LGS matematik özel ders',
}

export default function IletisimPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="block">İletişime</span>
            <span className="block text-yellow-400">Geçin</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Emre Aktaş ile iletişime geçin. 15 yıllık deneyimli matematik öğretmeni. 
            LGS, TYT, AYT ve okula yardımcı matematik özel dersleri için randevu alın.
          </p>
        </div>
      </section>

      {/* İletişim Bilgileri */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-lg text-center">
                <div className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  📞
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Telefon</h3>
                <p className="text-gray-600 mb-2">{CONTACT_INFO.PHONE_DISPLAY}</p>
                <a 
                  href={`tel:+${CONTACT_INFO.PHONE}`}
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Hemen Ara
                </a>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-lg text-center">
                <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  📱
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">WhatsApp</h3>
                <p className="text-gray-600 mb-2">Hızlı İletişim</p>
                <a 
                  href={`https://wa.me/${CONTACT_INFO.WHATSAPP}?text=${encodeURIComponent(CONTACT_INFO.WHATSAPP_DEFAULT_TEXT)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-800 font-semibold"
                >
                  Mesaj Gönder
                </a>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-lg text-center">
                <div className="bg-purple-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  📧
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">E-posta</h3>
                <p className="text-gray-600 mb-2">{CONTACT_INFO.EMAIL}</p>
                <a 
                  href={`mailto:${CONTACT_INFO.EMAIL}`}
                  className="text-purple-600 hover:text-purple-800 font-semibold"
                >
                  E-posta Gönder
                </a>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl shadow-lg text-center">
                <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  🕒
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Çalışma Saatleri</h3>
                <p className="text-gray-600 mb-2">Pazartesi - Pazar</p>
                <p className="text-sm text-gray-500">09:00 - 21:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hizmet Bölgeleri */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Hizmet Bölgeleri</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <p className="text-lg text-gray-700 mb-6 text-center">
                İstanbul genelinde ev dersi, Türkiye genelinde online ders hizmeti veriyoruz. 
                Özellikle aşağıdaki bölgelerde aktif hizmet veriyoruz:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {CONTACT_INFO.SERVICE_AREAS.map((area, index) => (
                  <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-lg text-center">
                    <span className="font-semibold text-gray-800">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Sık Sorulan Sorular</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Dersler nerede yapılıyor?</h3>
                <p className="text-gray-700">
                  Dersler öğrencinin evinde veya uygun bir mekanda yapılır. Online ders seçeneği de mevcuttur.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">İlk ders ücretsiz mi?</h3>
                <p className="text-gray-700">
                  İlk ders ücretlidir ancak memnun kalmazsanız ücret iade edilir. 
                  Kalite garantisi ile güvenle başlayabilirsiniz.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Hangi bölgelerde hizmet veriyorsunuz?</h3>
                <p className="text-gray-700">
                  İstanbul genelinde ev dersi, Türkiye genelinde online ders hizmeti veriyoruz. 
                  Özellikle {CONTACT_INFO.SERVICE_AREAS.slice(0, 5).join(', ')} ve diğer bölgelerde aktif hizmet veriyoruz.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Ders süresi ne kadar?</h3>
                <p className="text-gray-700">
                  Standart ders süresi 60 dakikadır. İhtiyaca göre 90 dakika veya 120 dakika ders seçenekleri de mevcuttur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İletişim CTA */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Hemen İletişime Geçin!</h2>
          <p className="text-xl mb-8 text-gray-200">
            15 yıllık deneyimli matematik öğretmeni Emre Aktaş ile tanışın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`https://wa.me/${CONTACT_INFO.WHATSAPP}?text=${encodeURIComponent(CONTACT_INFO.WHATSAPP_DEFAULT_TEXT)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <span>📱 WhatsApp ile İletişim</span>
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
