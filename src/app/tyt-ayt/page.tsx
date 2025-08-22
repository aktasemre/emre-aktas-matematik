import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TYT/AYT Hazırlık | Emre Aktaş Matematik',
  description: 'TYT ve AYT matematik hazırlık programı. Üniversite hayalinizi gerçekleştirmek için kişiselleştirilmiş matematik eğitimi.',
  openGraph: {
    title: 'TYT/AYT Hazırlık | Emre Aktaş Matematik',
    description: 'TYT ve AYT matematik hazırlık programı. Üniversite hayalinizi gerçekleştirmek için kişiselleştirilmiş matematik eğitimi.',
  },
}

export default function TytAytPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-800 mb-6">
          TYT/AYT Hazırlık Programı
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Üniversite hayalinizi gerçekleştirmek için kapsamlı TYT ve AYT matematik hazırlık eğitimi. 
          Kişiselleştirilmiş program ile hedeflediğiniz bölüme yerleşin.
        </p>
      </div>

      {/* Başarı İstatistikleri */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl text-center">
          <div className="text-3xl font-bold mb-2">%96</div>
          <div className="text-purple-100">Başarı Oranı</div>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl text-center">
          <div className="text-3xl font-bold mb-2">300+</div>
          <div className="text-blue-100">Üniversite Öğrencisi</div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl text-center">
          <div className="text-3xl font-bold mb-2">25+</div>
          <div className="text-green-100">Tıp/Mühendislik</div>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl text-center">
          <div className="text-3xl font-bold mb-2">10+</div>
          <div className="text-orange-100">Yıl Deneyim</div>
        </div>
      </div>

      {/* Program Detayları */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">TYT/AYT Hazırlık Programımız</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-purple-800">TYT Matematik</h3>
            <p className="text-gray-700 mb-4">
              Temel Yeterlilik Testi matematik konularına odaklanarak temel matematik becerilerinizi geliştiririz.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Temel matematik kavramları</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Sayılar ve işlemler</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Cebirsel ifadeler</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Geometri ve ölçme</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Veri işleme ve olasılık</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>TYT deneme sınavları</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-purple-800">AYT Matematik</h3>
            <p className="text-gray-700 mb-4">
              Alan Yeterlilik Testi matematik konularında derinlemesine eğitim ile üniversite hedeflerinize ulaşın.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Fonksiyonlar ve grafikleri</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Limit ve süreklilik</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Türev ve uygulamaları</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>İntegral ve uygulamaları</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Analitik geometri</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>AYT deneme sınavları</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Konu Detayları */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Matematik Konuları</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-purple-800">TYT Matematik Konuları</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Sayılar ve İşlemler</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Doğal sayılar ve tam sayılar</li>
                  <li>• Rasyonel sayılar</li>
                  <li>• Üslü ifadeler</li>
                  <li>• Köklü ifadeler</li>
                  <li>• Mutlak değer</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Cebirsel İfadeler</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Özdeşlikler</li>
                  <li>• Birinci dereceden denklemler</li>
                  <li>• Birinci dereceden eşitsizlikler</li>
                  <li>• Mutlak değerli denklemler</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Geometri</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Açılar ve üçgenler</li>
                  <li>• Dörtgenler</li>
                  <li>• Çember ve daire</li>
                  <li>• Katı cisimler</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-blue-800">AYT Matematik Konuları</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Fonksiyonlar</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Fonksiyon kavramı</li>
                  <li>• Polinom fonksiyonlar</li>
                  <li>• Trigonometrik fonksiyonlar</li>
                  <li>• Logaritma fonksiyonu</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Analiz</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Limit ve süreklilik</li>
                  <li>• Türev ve uygulamaları</li>
                  <li>• İntegral ve uygulamaları</li>
                  <li>• Belirsiz integral</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Geometri</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Analitik geometri</li>
                  <li>• Vektörler</li>
                  <li>• Uzay geometrisi</li>
                  <li>• Dönüşümler</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metodoloji */}
      <div className="mb-12 bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">TYT/AYT Hazırlık Metodolojimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-purple-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
            <h3 className="text-xl font-bold mb-3 text-purple-800">Seviye Analizi</h3>
            <p className="text-gray-700">
              Mevcut matematik seviyenizi belirleyerek kişisel çalışma programı oluştururuz.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
            <h3 className="text-xl font-bold mb-3 text-blue-800">Konu Anlatımı</h3>
            <p className="text-gray-700">
              TYT ve AYT müfredatına uygun, detaylı ve anlaşılır konu anlatımları.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
            <h3 className="text-xl font-bold mb-3 text-green-800">Soru Çözümü</h3>
            <p className="text-gray-700">
              Farklı zorluk seviyelerinde soru çözümleri ve pratik teknikler.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
            <h3 className="text-xl font-bold mb-3 text-orange-800">Deneme Sınavları</h3>
            <p className="text-gray-700">
              Düzenli TYT/AYT deneme sınavları ile gelişimi takip ederiz.
            </p>
          </div>
        </div>
      </div>

      {/* Başarı Hikayeleri */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Başarı Hikayeleri</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
            <p className="text-gray-700 mb-4 italic">
              "Emre Hocam sayesinde TYT'de matematikten 35 doğru yaptım ve hayalimdeki tıp fakültesine yerleştim. 
              Özellikle AYT matematik konularında çok yardımı oldu."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                M
              </div>
              <div>
                <div className="font-bold text-gray-800">Mehmet A.</div>
                <div className="text-sm text-gray-600">Tıp Fakültesi Öğrencisi</div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
            <p className="text-gray-700 mb-4 italic">
              "AYT matematik konularında zorlanıyordum ama Emre Hocam'ın sistematik yaklaşımı sayesinde 
              mühendislik fakültesine yerleştim."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                S
              </div>
              <div>
                <div className="font-bold text-gray-800">Selin K.</div>
                <div className="text-sm text-gray-600">Mühendislik Fakültesi Öğrencisi</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-purple-600 to-blue-700 text-white p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-4">Üniversite Hayalinizi Gerçekleştirin!</h2>
        <p className="text-xl mb-6 text-purple-100">
          Emre Aktaş ile TYT/AYT hazırlık programına başlayarak hedeflediğiniz bölüme yerleşin.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://wa.me/905XXXXXXXXX?text=TYT/AYT hazırlık programı hakkında bilgi almak istiyorum"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            WhatsApp ile İletişim
          </a>
          <a 
            href="tel:+905XXXXXXXXX"
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Hemen Ara
          </a>
        </div>
      </div>
    </main>
  )
}
