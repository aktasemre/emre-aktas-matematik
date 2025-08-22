import { CONTACT_INFO } from '@/constants/contact'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Emre Aktaş - 15 Yıllık Deneyimli Matematik Öğretmeni | Hakkımda',
  description: '15 yıllık deneyimli matematik öğretmeni Emre Aktaş\'ın eğitim geçmişi, deneyimi ve başarıları. LGS, TYT, AYT ve okul desteği için özel matematik dersleri.',
  keywords: 'Emre Aktaş, matematik öğretmeni, 15 yıllık deneyim, LGS matematik, TYT matematik, AYT matematik, özel ders, İstanbul',
}

export default function HakkimdaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Sol taraf - Metin */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="block">Emre Aktaş</span>
                  <span className="block text-yellow-400">Matematik Öğretmeni</span>
                </h1>
                <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                  15 yıldır matematik öğretmenliği yapıyorum. Her öğrencinin kendine özgü öğrenme tarzı olduğuna inanıyorum ve 
                  bu doğrultuda kişiselleştirilmiş eğitim programları hazırlıyorum.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`https://wa.me/${CONTACT_INFO.WHATSAPP}?text=${encodeURIComponent(CONTACT_INFO.WHATSAPP_DEFAULT_TEXT)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <span>📱 WhatsApp'tan Yaz</span>
                  </a>
                  <a
                    href={`tel:+${CONTACT_INFO.PHONE}`}
                    className="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <span>📞 Hemen Ara</span>
                  </a>
                </div>
              </div>
              
              {/* Sağ taraf - Resim */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/profil/emreaktas.jpg"
                    alt="Emre Aktaş - Matematik Öğretmeni"
                    width={400}
                    height={500}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İstatistikler */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">15+</div>
                <div className="text-gray-600 font-medium">Yıl Deneyim</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">1000+</div>
                <div className="text-gray-600 font-medium">Öğrenci</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">%98</div>
                <div className="text-gray-600 font-medium">Başarı Oranı</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">5000+</div>
                <div className="text-gray-600 font-medium">Ders Saati</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deneyim ve Uzmanlık */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Deneyim ve Uzmanlık</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-indigo-600">Öğretim Deneyimi</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>15 yıldır aktif matematik öğretmenliği</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>LGS, TYT, AYT sınav hazırlık deneyimi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>Okul müfredatına uygun destek dersleri</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>Bireysel ve grup dersleri</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-indigo-600">Uzmanlık Alanları</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-xl">•</span>
                    <span>LGS Matematik Hazırlık</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-xl">•</span>
                    <span>TYT Matematik</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-xl">•</span>
                    <span>AYT Matematik</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-xl">•</span>
                    <span>Okul Desteği ve Takviye</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-xl">•</span>
                    <span>Matematik Korkusu Tedavisi</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eğitim Felsefesi */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Eğitim Felsefesi</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              "Her öğrenci benzersizdir ve kendine özgü öğrenme tarzı vardır. Matematik korkutucu değil, 
              anlaşılabilir bir dildir. Amacım, öğrencilerimin bu dili sevmesini sağlamak ve 
              matematiksel düşünme becerilerini geliştirmektir."
            </p>
            <div className="text-right">
              <p className="text-lg font-semibold text-indigo-600">- Emre Aktaş</p>
            </div>
          </div>
        </div>
      </section>

      {/* İletişim CTA */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Hemen İletişime Geçin</h2>
          <p className="text-xl mb-8 text-gray-200">
            Matematik başarınızı artırmak için size yardımcı olmaya hazırım.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${CONTACT_INFO.WHATSAPP}?text=${encodeURIComponent(CONTACT_INFO.WHATSAPP_DEFAULT_TEXT)}`}
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
