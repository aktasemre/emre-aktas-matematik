import { Metadata } from 'next'
import ContactForm from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'İletişim | Emre Aktaş Matematik - 15 Yıllık Deneyim',
  description: 'Emre Aktaş ile iletişime geçin. 15 yıllık deneyimli matematik öğretmeni. LGS, TYT/AYT ve okula yardımcı matematik özel dersleri.',
  openGraph: {
    title: 'İletişim | Emre Aktaş Matematik - 15 Yıllık Deneyim',
    description: 'Emre Aktaş ile iletişime geçin. 15 yıllık deneyimli matematik öğretmeni. LGS, TYT/AYT ve okula yardımcı matematik özel dersleri.',
  },
}

export default function IletisimPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-800 mb-6">
          İletişim
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Emre Aktaş ile iletişime geçin. 15 yıllık deneyimli matematik öğretmeni. 
          LGS, TYT/AYT ve okula yardımcı matematik özel dersleri için randevu alın.
        </p>
      </div>

      {/* İletişim Bilgileri */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <div className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
            📞
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">Telefon</h3>
          <p className="text-gray-600 mb-2">(0542) 451 37 69</p>
          <a 
            href="tel:+905324513769"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            Hemen Ara
          </a>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
            💬
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">WhatsApp</h3>
          <p className="text-gray-600 mb-2">7/24 Mesaj</p>
          <a 
            href="https://wa.me/905324513769?text=Merhaba! Matematik özel ders hakkında bilgi almak istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-800 font-semibold"
          >
            Mesaj Gönder
          </a>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <div className="bg-purple-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
            📧
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">E-posta</h3>
          <p className="text-gray-600 mb-2">aktasemre1988@gmail.com</p>
          <a 
            href="mailto:aktasemre1988@gmail.com"
            className="text-purple-600 hover:text-purple-800 font-semibold"
          >
            E-posta Gönder
          </a>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
            📍
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">Hizmet Bölgeleri</h3>
          <p className="text-gray-600 mb-2">İstanbul, Türkiye</p>
          <p className="text-gray-600 text-sm">Ev/Online ders</p>
        </div>
      </div>

      {/* Ana İletişim Bölümü */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        {/* İletişim Formu */}
        <ContactForm />

        {/* İletişim Bilgileri Detay */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Hızlı İletişim</h3>
            <p className="mb-6 text-indigo-100">
              15 yıllık deneyimli matematik öğretmeni Emre Aktaş ile matematik özel ders hakkında bilgi almak için hemen iletişime geçin. 
              Size en uygun zamanı belirleyelim.
            </p>
            <div className="space-y-4">
              <a 
                href="https://wa.me/905324513769?text=Merhaba! Matematik özel ders hakkında bilgi almak istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                <span className="mr-3">💬</span>
                WhatsApp ile Hızlı Mesaj
              </a>
              <a 
                href="tel:+905324513769"
                className="flex items-center bg-white text-indigo-600 hover:bg-gray-100 py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                <span className="mr-3">📞</span>
                Hemen Ara
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Çalışma Saatleri</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Pazartesi - Cuma</span>
                <span className="font-semibold">09:00 - 21:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Cumartesi</span>
                <span className="font-semibold">09:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Pazar</span>
                <span className="font-semibold">10:00 - 16:00</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <p className="text-green-800 text-sm">
                <strong>Not:</strong> Acil durumlar için 7/24 WhatsApp desteği mevcuttur.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Hizmet Bölgeleri</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span>Online ders (Türkiye geneli)</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span>Ev dersi (İstanbul)</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span>Öğrenci evi dersi</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span>Kütüphane/Çalışma salonu</span>
              </li>
            </ul>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-800 text-sm font-medium">Hizmet Verdiğimiz Bölgeler:</p>
              <p className="text-blue-700 text-sm mt-1">
                Başakşehir, Bahçeşehir, Florya, Küçükçekmece, Esenler, Sultangazi, Arnavutköy
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SSS */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Sık Sorulan Sorular</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-3 text-gray-800">Ders ücretleri nasıl?</h3>
            <p className="text-gray-700">
              Ders ücretleri paket seçiminize göre değişmektedir. Tek ders ₺300, 
              paket alımlarında indirim uygulanmaktadır. Detaylı bilgi için iletişime geçin.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-3 text-gray-800">Online ders yapıyor musunuz?</h3>
            <p className="text-gray-700">
              Evet, online ders seçeneği mevcuttur. Zoom, Teams veya Skype üzerinden 
              yüz yüze ders kalitesinde online eğitim veriyoruz.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-3 text-gray-800">Hangi sınıflara ders veriyorsunuz?</h3>
            <p className="text-gray-700">
              5. sınıftan 12. sınıfa kadar tüm öğrencilere matematik dersi veriyoruz. 
              LGS, TYT/AYT hazırlık ve okula yardımcı dersler.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-3 text-gray-800">Ders süresi ne kadar?</h3>
            <p className="text-gray-700">
              Standart ders süresi 90 dakikadır. Öğrencinin ihtiyacına göre 
              60 veya 120 dakikalık dersler de ayarlanabilir.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-3 text-gray-800">İlk ders ücretsiz mi?</h3>
            <p className="text-gray-700">
              İlk ders ücretlidir ancak memnun kalmazsanız ücret iade edilir. 
              Kalite garantisi ile güvenle başlayabilirsiniz.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-3 text-gray-800">Hangi bölgelerde hizmet veriyorsunuz?</h3>
            <p className="text-gray-700">
              İstanbul genelinde ev dersi, Türkiye genelinde online ders hizmeti veriyoruz. 
              Özellikle Başakşehir, Bahçeşehir, Florya, Küçükçekmece, Esenler, Sultangazi, Arnavutköy bölgelerinde aktif hizmet veriyoruz.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-4">Hemen İletişime Geçin!</h2>
        <p className="text-xl mb-6 text-indigo-100">
          15 yıllık deneyimli matematik öğretmeni Emre Aktaş ile tanışın.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://wa.me/905324513769?text=Merhaba! Matematik özel ders hakkında bilgi almak istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            WhatsApp ile İletişim
          </a>
          <a 
            href="tel:+905324513769"
            className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Hemen Ara
          </a>
        </div>
      </div>
    </main>
  )
}
