import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CONTACT_INFO } from '@/constants/contact'
import Breadcrumb from '@/components/common/Breadcrumb'

export const metadata: Metadata = {
  title: 'Başakşehir Matematik Özel Ders | Emre Aktaş (LGS, TYT/AYT)',
  description: 'Başakşehir\'de 15 yıllık deneyimli matematik öğretmeni Emre Aktaş ile LGS ve TYT/AYT odaklı birebir özel ders. Ücretsiz tanışma görüşmesi. Başakşehir, Bahçeşehir, Kayaşehir ve çevre mahalleler.',
  keywords: [
    'başakşehir matematik özel ders',
    'başakşehir matematik öğretmeni',
    'başakşehir lgs matematik',
    'başakşehir tyt matematik',
    'başakşehir ayt matematik',
    'bahçeşehir matematik özel ders',
    'kayaşehir matematik öğretmeni',
    'başakçılar matematik özel ders',
    'şahintepe matematik öğretmeni',
    'başakşehir emre aktaş',
    'matematik özel ders başakşehir fiyat',
    'başakşehir en iyi matematik öğretmeni',
    'başakşehir matematik kursu',
    'evde matematik dersi başakşehir',
    'online matematik özel ders başakşehir'
  ],
  openGraph: {
    title: 'Başakşehir Matematik Özel Ders | Emre Aktaş',
    description: 'Başakşehir\'de 15 yıllık deneyimli matematik öğretmeni ile birebir özel dersler. LGS, TYT/AYT hazırlık.',
    type: 'website',
    locale: 'tr_TR',
    url: 'https://matematik-akademi.com/basaksehir-matematik-ozel-ders',
    images: [
      {
        url: '/images/teacher-student.jpg',
        width: 1200,
        height: 630,
        alt: 'Başakşehir Matematik Özel Ders',
      },
    ],
  },
  alternates: {
    canonical: '/basaksehir-matematik-ozel-ders',
  },
}

export default function BasaksehirMatematikOzelDers() {
  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: 'Ana Sayfa', href: '/' },
          { label: 'Matematik', href: '/matematik' },
          { label: 'Başakşehir Matematik Özel Ders' }
        ]} 
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero-math.jpg"
            alt="Başakşehir Matematik Özel Ders"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Başakşehir'de Matematik Özel Ders
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              15 Yıllık Deneyimli Matematik Öğretmeni Emre Aktaş ile<br />
              LGS, TYT/AYT ve Okula Yardımcı Özel Dersler
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`https://wa.me/${CONTACT_INFO.WHATSAPP}?text=${encodeURIComponent('Merhaba! Başakşehir matematik özel ders hakkında bilgi almak istiyorum.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>📱 WhatsApp ile İletişim</span>
              </a>
              <a 
                href={`tel:+${CONTACT_INFO.PHONE}`}
                className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>📞 Hemen Ara</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Neden Başakşehir'de Emre Aktaş? */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Neden Başakşehir'de Emre Aktaş?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">%98 Başarı Oranı</h3>
              <p className="text-gray-600">Başakşehir'deki öğrencilerimizin başarı oranı</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Yerel Ulaşım</h3>
              <p className="text-gray-600">Başakşehir ve çevre mahallelerde evde ders</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👨‍🏫</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">15 Yıl Deneyim</h3>
              <p className="text-gray-600">Boğaziçi Üniversitesi mezunu uzman öğretmen</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">5/5 Veli Memnuniyeti</h3>
              <p className="text-gray-600">Başakşehir'deki velilerimizden tam puan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hizmet Bölgeleri */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Başakşehir'de Hizmet Verdiğimiz Mahalleler
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              'Başak Mahallesi',
              'Bahçeşehir 1. Kısım',
              'Bahçeşehir 2. Kısım',
              'Kayaşehir',
              'Başakşehir 4. Etap',
              'Başakşehir 5. Etap',
              'Şahintepe Mahallesi',
              'Altınşehir Mahallesi',
              'Ziya Gökalp Mahallesi',
              'Güvercintepe',
              'Başakçılar',
              'Hoşdere'
            ].map((mahalle) => (
              <div key={mahalle} className="bg-white p-4 rounded-lg shadow-md text-center">
                <span className="text-indigo-600 font-medium">{mahalle}</span>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-gray-600">
            <strong>Not:</strong> Başakşehir merkez ve çevre mahallelerde evde veya online ders verilmektedir.
          </p>
        </div>
      </section>

      {/* Ders Modeli ve Ücretler */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Ders Modeli ve Ücretler
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-xl border-2 border-indigo-200">
              <h3 className="text-2xl font-bold text-indigo-800 mb-4">LGS Hazırlık</h3>
              <ul className="text-gray-700 space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Haftada 2-3 ders önerisi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>90 dakikalık ders süresi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Deneme sınavları dahil</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>WhatsApp destek grubu</span>
                </li>
              </ul>
              <div className="text-center">
                <Link href="/ucretler" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block">
                  Ücret Bilgisi
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border-2 border-green-200">
              <h3 className="text-2xl font-bold text-green-800 mb-4">TYT/AYT Hazırlık</h3>
              <ul className="text-gray-700 space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Haftada 2-4 ders önerisi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>120 dakikalık ders süresi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Konu testleri ve denemeler</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>7/24 soru çözüm desteği</span>
                </li>
              </ul>
              <div className="text-center">
                <Link href="/ucretler" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block">
                  Ücret Bilgisi
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border-2 border-purple-200">
              <h3 className="text-2xl font-bold text-purple-800 mb-4">Okula Yardımcı</h3>
              <ul className="text-gray-700 space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Haftada 1-2 ders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>60-90 dakika ders süresi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Ödev takibi ve kontrolü</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Sınav öncesi takviye</span>
                </li>
              </ul>
              <div className="text-center">
                <Link href="/ucretler" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block">
                  Ücret Bilgisi
                </Link>
              </div>
            </div>
          </div>
          <p className="text-center mt-8 text-lg text-gray-700">
            <strong>Ücretsiz Tanışma Görüşmesi:</strong> İlk ders ücretsizdir. Öğrenci seviye tespiti yapılır.
          </p>
        </div>
      </section>

      {/* Sık Sorulan Sorular */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Sık Sorulan Sorular (FAQ)
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-indigo-800">
                Başakşehir'de hangi mahallelerde ders veriyorsunuz?
              </h3>
              <p className="text-gray-700">
                Başakşehir merkez ve tüm etaplar, Bahçeşehir 1-2. Kısım, Kayaşehir, Şahintepe, 
                Altınşehir, Ziya Gökalp, Güvercintepe, Başakçılar ve Hoşdere mahallelerinde 
                evde özel ders veriyoruz. Online ders seçeneği de mevcuttur.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-indigo-800">
                Ders ücretleri ne kadar?
              </h3>
              <p className="text-gray-700">
                Ders ücretlerimiz, ders süresi, sıklığı ve öğrenci seviyesine göre değişmektedir. 
                Detaylı ücret bilgisi için <Link href="/ucretler" className="text-indigo-600 hover:text-indigo-800 font-medium">ücretler sayfamızı</Link> ziyaret 
                edebilir veya bize ulaşabilirsiniz. İlk tanışma dersi ücretsizdir.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-indigo-800">
                Ders süresi ne kadar?
              </h3>
              <p className="text-gray-700">
                LGS öğrencileri için 90 dakika, TYT/AYT öğrencileri için 120 dakika, 
                okula yardımcı dersler için 60-90 dakika önerilmektedir. Öğrenci ihtiyacına 
                göre süre ayarlanabilir.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-indigo-800">
                Evde mi online mı ders veriyorsunuz?
              </h3>
              <p className="text-gray-700">
                Her iki seçenek de mevcuttur. Başakşehir ve çevre mahallelerde evde yüz yüze 
                ders verebiliriz. Ayrıca zoom üzerinden online ders seçeneğimiz de vardır. 
                Tercihinize göre en uygun yöntemi belirleyebiliriz.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-indigo-800">
                Deneme dersi var mı?
              </h3>
              <p className="text-gray-700">
                Evet, ilk dersimiz ücretsiz tanışma ve seviye tespit dersidir. Bu derste 
                öğrenciyi tanır, eksiklerini belirler ve veliye detaylı bir çalışma planı sunarız. 
                Karşılıklı anlaşma sağlanırsa düzenli derslere başlarız.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-indigo-800">
                Ders materyalleri sağlıyor musunuz?
              </h3>
              <p className="text-gray-700">
                Evet, ders notları, çalışma kağıtları, deneme sınavları ve konu testleri 
                tarafımızdan sağlanmaktadır. Ayrıca öğrencinin okul kitapları ve kaynaklarıyla 
                uyumlu çalışmalar yaparız.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Veliler Ne Diyor? */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Veliler Ne Diyor?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {"★★★★★".split('').map((star, i) => (
                    <span key={i} className="text-2xl">{star}</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Oğlum LGS'ye Emre Hoca ile hazırlandı. Başakşehir 4. Etap'ta evimize 
                geliyordu. Çok sabırlı ve ilgili bir öğretmen. Matematik notları 70'lerden 
                95'lere çıktı. Kesinlikle tavsiye ederim."
              </p>
              <div className="font-semibold text-gray-800">Ayşe Hanım</div>
              <div className="text-sm text-gray-600">Başakşehir 4. Etap</div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {"★★★★★".split('').map((star, i) => (
                    <span key={i} className="text-2xl">{star}</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Kızım TYT'ye hazırlanıyor. Emre Hoca sayesinde matematik korkusunu 
                yendi. Bahçeşehir'de oturuyoruz, hoca evimize geliyor. Çok memnunuz, 
                denemelerden yüksek netler geliyor."
              </p>
              <div className="font-semibold text-gray-800">Mehmet Bey</div>
              <div className="text-sm text-gray-600">Bahçeşehir 2. Kısım</div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {"★★★★★".split('').map((star, i) => (
                    <span key={i} className="text-2xl">{star}</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "15 yıllık deneyimi gerçekten belli oluyor. Oğlum 7. sınıf, okul 
                derslerine destek alıyoruz. Kayaşehir'de evimize geliyor. Matematik 
                artık en sevdiği ders oldu."
              </p>
              <div className="font-semibold text-gray-800">Fatma Hanım</div>
              <div className="text-sm text-gray-600">Kayaşehir</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Başakşehir'de Matematik Başarısı İçin İlk Adımı Atın
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
            15 yıllık deneyimli matematik öğretmeni Emre Aktaş ile çocuğunuzun matematik 
            başarısını artırın. İlk ders ücretsiz!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`https://wa.me/${CONTACT_INFO.WHATSAPP}?text=${encodeURIComponent('Merhaba! Başakşehir matematik özel ders için bilgi almak istiyorum.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2 text-lg"
            >
              <span>📱 WhatsApp ile İletişim</span>
            </a>
            <a 
              href={`tel:+${CONTACT_INFO.PHONE}`}
              className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2 text-lg"
            >
              <span>📞 0542 451 37 69</span>
            </a>
          </div>
          <p className="mt-6 text-gray-300">
            Başakşehir, Bahçeşehir, Kayaşehir ve tüm çevre mahallelerde hizmetinizdeyiz.
          </p>
        </div>
      </section>
    </main>
  )
}
