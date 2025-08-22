import { Metadata } from 'next'
import Image from 'next/image'
import { CONTACT_INFO } from '@/constants/contact'

export const metadata: Metadata = {
  title: 'Okula Yardımcı Matematik | Emre Aktaş',
  description: 'Ortaokul ve lise matematik desteği. Okul müfredatına uyumlu, ödev takipli matematik özel dersleri.',
  openGraph: {
    title: 'Okula Yardımcı Matematik | Emre Aktaş',
    description: 'Ortaokul ve lise matematik desteği. Okul müfredatına uyumlu, ödev takipli matematik özel dersleri.',
  },
}

export default function OkulDestekPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="relative mb-8">
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/homework-help.jpg"
              alt="Okula Yardımcı Matematik - Ödev Takibi"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  Okula Yardımcı Matematik
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
                  Ortaokul ve lise matematik desteği. Okul müfredatına uyumlu, ödev takipli matematik özel dersleri.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* İstatistikler */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl text-center">
          <div className="text-3xl font-bold mb-2">%90</div>
          <div className="text-green-100">Not Artışı</div>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl text-center">
          <div className="text-3xl font-bold mb-2">400+</div>
          <div className="text-blue-100">Öğrenci</div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl text-center">
          <div className="text-3xl font-bold mb-2">8+</div>
          <div className="text-purple-100">Yıl Deneyim</div>
        </div>
      </div>

      {/* Hizmet Alanları */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Hizmet Alanlarımız</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-500">
            <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/individual-study.jpg"
                alt="Ortaokul Matematik"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-green-800">Ortaokul Matematik</h3>
            <p className="text-gray-700 mb-4">
              5-8. sınıf öğrencileri için okul müfredatına uyumlu matematik desteği.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Okul müfredatı takibi</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Ödev yardımı ve takibi</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Konu tekrarları</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Sınav hazırlığı</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Temel matematik becerileri</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-500">
            <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/private-lesson.jpg"
                alt="Lise Matematik"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-blue-800">Lise Matematik</h3>
            <p className="text-gray-700 mb-4">
              9-12. sınıf öğrencileri için kapsamlı matematik eğitimi ve destek.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Lise müfredatı takibi</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Ödev ve proje desteği</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Konu anlatımı ve tekrar</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Sınav hazırlığı</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span>Üniversite hazırlık desteği</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Konu Detayları */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Matematik Konuları</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-green-800">Ortaokul Konuları</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-800 mb-2">5. Sınıf</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Doğal sayılar</li>
                  <li>• Kesirler</li>
                  <li>• Ondalık gösterim</li>
                  <li>• Yüzdeler</li>
                  <li>• Geometrik şekiller</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">6. Sınıf</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Tam sayılar</li>
                  <li>• Kesirlerle işlemler</li>
                  <li>• Ondalık kesirler</li>
                  <li>• Oran ve orantı</li>
                  <li>• Cebirsel ifadeler</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">7. Sınıf</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Rasyonel sayılar</li>
                  <li>• Eşitlik ve denklem</li>
                  <li>• Doğrusal denklemler</li>
                  <li>• Çokgenler</li>
                  <li>• Çember ve daire</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">8. Sınıf</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Üslü ifadeler</li>
                  <li>• Kareköklü ifadeler</li>
                  <li>• Olasılık</li>
                  <li>• Geometrik cisimler</li>
                  <li>• Veri analizi</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-blue-800">Lise Konuları</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-800 mb-2">9. Sınıf</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Kümeler</li>
                  <li>• Denklemler ve eşitsizlikler</li>
                  <li>• Fonksiyonlar</li>
                  <li>• Üçgenler</li>
                  <li>• Vektörler</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">10. Sınıf</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Fonksiyonlar</li>
                  <li>• Polinomlar</li>
                  <li>• İkinci dereceden denklemler</li>
                  <li>• Dörtgenler</li>
                  <li>• Çokgenler</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">11. Sınıf</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Trigonometri</li>
                  <li>• Logaritma</li>
                  <li>• Diziler</li>
                  <li>• Limit</li>
                  <li>• Türev</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">12. Sınıf</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Türev uygulamaları</li>
                  <li>• İntegral</li>
                  <li>• Analitik geometri</li>
                  <li>• Uzay geometrisi</li>
                  <li>• Olasılık</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metodoloji */}
      <div className="mb-12 bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Eğitim Metodolojimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
            <h3 className="text-xl font-bold mb-3 text-green-800">Seviye Tespiti</h3>
            <p className="text-gray-700">
              Öğrencinin mevcut matematik seviyesini belirleyerek kişisel çalışma planı oluştururuz.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
            <h3 className="text-xl font-bold mb-3 text-blue-800">Müfredat Takibi</h3>
            <p className="text-gray-700">
              Okul müfredatına uyumlu, okul dersleriyle paralel eğitim veririz.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
            <h3 className="text-xl font-bold mb-3 text-purple-800">Ödev Takibi</h3>
            <p className="text-gray-700">
              Ödevlerin düzenli takibi ve gerekli desteğin sağlanması.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
            <h3 className="text-xl font-bold mb-3 text-orange-800">Sınav Hazırlığı</h3>
            <p className="text-gray-700">
              Okul sınavlarına yönelik özel hazırlık ve konu tekrarları.
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
              "Matematik notlarım 3'ten 5'e çıktı. Emre Hocam sayesinde artık matematikten korkmuyorum 
              ve okul sınavlarında başarılı oluyorum."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                B
              </div>
              <div>
                <div className="font-bold text-gray-800">Berk Y.</div>
                <div className="text-sm text-gray-600">7. Sınıf Öğrencisi</div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
            <p className="text-gray-700 mb-4 italic">
              "Lise 1'de matematikte zorlanıyordum ama Emre Hocam'ın yardımıyla konuları anlamaya başladım. 
              Şimdi matematik en sevdiğim ders."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                Z
              </div>
              <div>
                <div className="font-bold text-gray-800">Zeynep K.</div>
                <div className="text-sm text-gray-600">10. Sınıf Öğrencisi</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-green-600 to-blue-700 text-white p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-4">Okul Başarınızı Artırın!</h2>
        <p className="text-xl mb-6 text-green-100">
          Emre Aktaş ile okula yardımcı matematik dersleri alarak notlarınızı yükseltin.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href={`https://wa.me/${CONTACT_INFO.WHATSAPP}?text=${encodeURIComponent('Okula yardımcı matematik dersleri hakkında bilgi almak istiyorum')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            WhatsApp ile İletişim
          </a>
          <a 
            href={`tel:+${CONTACT_INFO.PHONE}`}
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Hemen Ara
          </a>
        </div>
      </div>
    </main>
  )
}
