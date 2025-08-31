import { Metadata } from 'next'
import Image from 'next/image'
import { CONTACT_INFO } from '@/constants/contact'

export const metadata: Metadata = {
  title: 'LGS Hazırlık | Emre Aktaş Matematik',
  description: 'LGS matematik hazırlık programı. Hedeflediğiniz liseye yerleşmeniz için kişiselleştirilmiş LGS matematik eğitimi.',
  openGraph: {
    title: 'LGS Hazırlık | Emre Aktaş Matematik',
    description: 'LGS matematik hazırlık programı. Hedeflediğiniz liseye yerleşmeniz için kişiselleştirilmiş LGS matematik eğitimi.',
  },
}

export default function LgsPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="relative mb-8">
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/math-tutoring-2.jpg"
              alt="LGS Hazırlık - Matematik Eğitimi"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  LGS Hazırlık Programı
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
                  Hedeflediğiniz liseye yerleşmeniz için kişiselleştirilmiş, kapsamlı ve etkili LGS hazırlık eğitimi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Başarı İstatistikleri */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl text-center">
          <div className="text-3xl font-bold mb-2">%98</div>
          <div className="text-blue-100">Başarı Oranı</div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl text-center">
          <div className="text-3xl font-bold mb-2">250+</div>
          <div className="text-green-100">LGS Öğrencisi</div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl text-center">
          <div className="text-3xl font-bold mb-2">15+</div>
          <div className="text-purple-100">Fen Lisesi</div>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl text-center">
          <div className="text-3xl font-bold mb-2">8+</div>
          <div className="text-orange-100">Yıl Deneyim</div>
        </div>
      </div>

      {/* Program Detayları */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">LGS Hazırlık Programımız</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/math-tutoring-3.jpg"
                alt="LGS Program İçeriği"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-blue-800">Program İçeriği</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Tüm LGS matematik konularının detaylı anlatımı</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Yeni nesil soru çözme teknikleri</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Düzenli LGS deneme sınavları</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Zaman yönetimi stratejileri</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Sınav kaygısı ile başa çıkma yöntemleri</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Veli bilgilendirme toplantıları</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/calculator.jpg"
                alt="LGS Matematik Konuları"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-blue-800">Matematik Konuları</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Sayılar ve İşlemler</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Doğal sayılar</li>
                  <li>• Tam sayılar</li>
                  <li>• Rasyonel sayılar</li>
                  <li>• Üslü ifadeler</li>
                  <li>• Köklü ifadeler</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Cebirsel İfadeler</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Özdeşlikler</li>
                  <li>• Denklemler</li>
                  <li>• Eşitsizlikler</li>
                  <li>• Fonksiyonlar</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Geometri</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Açılar</li>
                  <li>• Üçgenler</li>
                  <li>• Dörtgenler</li>
                  <li>• Çember</li>
                  <li>• Alan ve hacim</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Veri İşleme</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Grafikler</li>
                  <li>• Olasılık</li>
                  <li>• İstatistik</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metodoloji */}
      <div className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">LGS Hazırlık Metodolojimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
            <h3 className="text-xl font-bold mb-3 text-blue-800">Seviye Tespiti</h3>
            <p className="text-gray-700">
              Öğrencinin mevcut matematik seviyesini belirleyerek kişisel çalışma planı oluştururuz.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
            <h3 className="text-xl font-bold mb-3 text-green-800">Konu Anlatımı</h3>
            <p className="text-gray-700">
              LGS müfredatına uygun, anlaşılır ve detaylı konu anlatımları yaparız.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
            <h3 className="text-xl font-bold mb-3 text-purple-800">Soru Çözümü</h3>
            <p className="text-gray-700">
              Yeni nesil sorular dahil, farklı zorluk seviyelerinde soru çözümleri.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
            <h3 className="text-xl font-bold mb-3 text-orange-800">Deneme Sınavları</h3>
            <p className="text-gray-700">
              Düzenli LGS deneme sınavları ile gelişimi takip eder ve eksikleri gideririz.
            </p>
          </div>
        </div>
      </div>

      {/* Başarı Hikayeleri */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Başarı Hikayeleri</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
            <p className="text-gray-700 mb-4 italic">
              "Emre Hocam sayesinde LGS'de matematikten 20 doğru yaptım ve hayalimdeki fen lisesine yerleştim. 
              Özellikle yeni nesil sorularda çok yardımı oldu."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                A
              </div>
              <div>
                <div className="font-bold text-gray-800">Ahmet Y.</div>
                <div className="text-sm text-gray-600">Fen Lisesi Öğrencisi</div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
            <p className="text-gray-700 mb-4 italic">
              "Matematikten korkuyordum ama Emre Hocam'ın sabırlı yaklaşımı sayesinde 
              LGS'de matematik alanında %95 başarı elde ettim."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                E
              </div>
              <div>
                <div className="font-bold text-gray-800">Elif K.</div>
                <div className="text-sm text-gray-600">Anadolu Lisesi Öğrencisi</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-4">LGS Başarınızı Garantileyin!</h2>
        <p className="text-xl mb-6 text-blue-100">
          Emre Aktaş ile LGS hazırlık programına başlayarak hedeflediğiniz liseye yerleşin.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href={`https://wa.me/${CONTACT_INFO.WHATSAPP}?text=${encodeURIComponent('LGS hazırlık programı hakkında bilgi almak istiyorum')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            WhatsApp ile İletişim
          </a>
          <a 
            href={`tel:+${CONTACT_INFO.PHONE}`}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Hemen Ara
          </a>
        </div>
      </div>
    </main>
  )
}
