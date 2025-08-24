import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Matematik Özel Ders Başakşehir | LGS TYT AYT | Emre Aktaş',
  description: 'Başakşehir\'de matematik özel ders. LGS, TYT/AYT hazırlık. 15 yıllık deneyimli öğretmen Emre Aktaş ile %98 başarı oranı. Ücretsiz deneme dersi.',
  keywords: [
    'matematik özel ders',
    'başakşehir matematik',
    'lgs matematik hazırlık',
    'tyt matematik özel ders',
    'ayt matematik öğretmeni',
    'matematik kursu başakşehir',
    'özel matematik dersi'
  ],
  openGraph: {
    title: 'Matematik Özel Ders Başakşehir | LGS TYT AYT',
    description: 'Başakşehir\'de matematik özel ders. 15 yıllık deneyimli öğretmen Emre Aktaş ile %98 başarı oranı.',
  },
}

export default function MatematikPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-800 mb-6">
          Matematik Özel Ders
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          LGS, TYT/AYT ve okula yardımcı matematik özel dersleri ile hedeflerinize ulaşın. 
          Kişiselleştirilmiş eğitim metodolojisi ile matematik artık korkutucu değil!
        </p>
      </div>

      {/* İstatistikler */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl text-center">
          <div className="text-3xl font-bold mb-2">%95</div>
          <div className="text-blue-100">Başarı Oranı</div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl text-center">
          <div className="text-3xl font-bold mb-2">500+</div>
          <div className="text-green-100">Öğrenci</div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl text-center">
          <div className="text-3xl font-bold mb-2">10+</div>
          <div className="text-purple-100">Yıl Deneyim</div>
        </div>
      </div>

      {/* Hizmet Alanları */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Hizmet Alanlarımız</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500">
            <h3 className="text-xl font-bold mb-3 text-blue-800">LGS Hazırlık</h3>
            <p className="text-gray-600 mb-4">
              Liseye Geçiş Sınavı için özel matematik hazırlık programı. 
              Hedeflediğiniz liseye yerleşmeniz için kişiselleştirilmiş eğitim.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Temel matematik kavramları</li>
              <li>• Problem çözme teknikleri</li>
              <li>• Deneme sınavları</li>
              <li>• Zaman yönetimi</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500">
            <h3 className="text-xl font-bold mb-3 text-green-800">TYT/AYT Hazırlık</h3>
            <p className="text-gray-600 mb-4">
              Üniversite sınavları için kapsamlı matematik eğitimi. 
              TYT ve AYT matematik konularında uzmanlaşın.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• TYT matematik konuları</li>
              <li>• AYT matematik konuları</li>
              <li>• Geometri ve analitik</li>
              <li>• Sınav stratejileri</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-purple-500">
            <h3 className="text-xl font-bold mb-3 text-purple-800">Okula Yardımcı</h3>
            <p className="text-gray-600 mb-4">
              Okul müfredatına uyumlu matematik desteği. 
              Ödev takibi ve konu tekrarları ile başarıyı artırın.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Müfredat takibi</li>
              <li>• Ödev desteği</li>
              <li>• Konu tekrarları</li>
              <li>• Sınav hazırlığı</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Metodoloji */}
      <div className="mb-12 bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Eğitim Metodolojimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-indigo-800">Kişiselleştirilmiş Yaklaşım</h3>
            <p className="text-gray-700 mb-4">
              Her öğrencinin öğrenme stili ve hızı farklıdır. Bu yüzden her öğrenci için 
              özel bir eğitim planı hazırlarız. Güçlü ve zayıf yönlerinizi belirleyerek 
              size en uygun yöntemle matematik öğretiriz.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li>✓ Seviye tespiti ve analiz</li>
              <li>✓ Kişisel öğrenme planı</li>
              <li>✓ Esnek program düzenleme</li>
              <li>✓ Sürekli geri bildirim</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-indigo-800">Pratik Odaklı Eğitim</h3>
            <p className="text-gray-700 mb-4">
              Matematik sadece teorik bilgi değil, pratik uygulama gerektirir. 
              Bol miktarda örnek ve alıştırma ile konuları pekiştirir, 
              gerçek hayat problemlerini çözme becerisi kazandırırız.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li>✓ Çok sayıda örnek çözümü</li>
              <li>✓ Farklı zorluk seviyeleri</li>
              <li>✓ Gerçek hayat uygulamaları</li>
              <li>✓ Düzenli tekrar ve pekiştirme</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-4">Matematik Başarınızı Artırmaya Hazır mısınız?</h2>
        <p className="text-xl mb-6 text-blue-100">
          Emre Aktaş ile matematik özel ders alarak hedeflerinize ulaşın.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://wa.me/905XXXXXXXXX?text=Matematik özel ders hakkında bilgi almak istiyorum"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            WhatsApp ile İletişim
          </a>
          <a 
            href="tel:+905XXXXXXXXX"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Hemen Ara
          </a>
        </div>
      </div>
    </main>
  )
}
