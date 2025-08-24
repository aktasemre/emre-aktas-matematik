import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CONTACT_INFO } from '@/constants/contact'
import Breadcrumb from '@/components/common/Breadcrumb'

export const metadata: Metadata = {
  title: 'Başakşehir LGS Matematik Başarı Rehberi (2025)',
  description: 'Başakşehir\'de LGS matematik hazırlık rehberi. Başarılı çalışma yöntemleri, soru çözme teknikleri ve deneyimli öğretmen tavsiyeleri. Ücretsiz PDF indirme.',
  keywords: [
    'başakşehir lgs matematik',
    'lgs matematik rehberi',
    'lgs matematik çalışma programı',
    'lgs matematik başarı yöntemleri',
    'başakşehir lgs hazırlık',
    'lgs matematik konu anlatımı',
    'lgs matematik soru çözme teknikleri',
    '2025 lgs matematik'
  ],
  openGraph: {
    title: 'Başakşehir LGS Matematik Başarı Rehberi (2025)',
    description: 'LGS matematik hazırlık rehberi. Başarılı çalışma yöntemleri ve soru çözme teknikleri.',
    type: 'article',
    publishedTime: '2024-01-15T00:00:00.000Z',
    authors: ['Emre Aktaş'],
  },
  alternates: {
    canonical: '/blog/basaksehir-lgs-matematik-basari-rehberi',
  },
}

export default function BasaksehirLGSMatematikRehberi() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: 'Ana Sayfa', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: 'Başakşehir LGS Matematik Başarı Rehberi' }
        ]} 
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Başakşehir LGS Matematik Başarı Rehberi (2025)
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              15 Yıllık Deneyimli Matematik Öğretmeni Emre Aktaş'tan<br />
              LGS Matematik Hazırlık Stratejileri
            </p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <span>📅 Ocak 2024</span>
              <span>•</span>
              <span>⏱️ 10 dk okuma</span>
              <span>•</span>
              <span>📚 LGS Hazırlık</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* İçindekiler */}
            <div className="bg-white p-8 rounded-xl shadow-md mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">📋 İçindekiler</h2>
              <ol className="space-y-3 text-gray-700">
                <li><a href="#giris" className="hover:text-indigo-600">1. Giriş: LGS Matematik Neden Önemli?</a></li>
                <li><a href="#konular" className="hover:text-indigo-600">2. LGS Matematik Konuları ve Ağırlıkları</a></li>
                <li><a href="#calisma-plani" className="hover:text-indigo-600">3. Etkili Çalışma Planı Oluşturma</a></li>
                <li><a href="#soru-teknikleri" className="hover:text-indigo-600">4. Soru Çözme Teknikleri</a></li>
                <li><a href="#zaman-yonetimi" className="hover:text-indigo-600">5. Sınav Günü Zaman Yönetimi</a></li>
                <li><a href="#basaksehir-ozel" className="hover:text-indigo-600">6. Başakşehir'de LGS Hazırlık İmkanları</a></li>
                <li><a href="#veliler-icin" className="hover:text-indigo-600">7. Veliler İçin Tavsiyeler</a></li>
                <li><a href="#ucretsiz-kaynak" className="hover:text-indigo-600">8. Ücretsiz Kaynak ve PDF</a></li>
              </ol>
            </div>

            {/* 1. Giriş */}
            <section id="giris" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                1. Giriş: LGS Matematik Neden Önemli?
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Değerli Başakşehirli öğrenci ve veliler, LGS (Liseye Geçiş Sınavı) matematik bölümü, 
                öğrencilerin hayallerindeki liselere yerleşmelerinde kritik bir rol oynamaktadır. 
                90 sorudan 20'sini oluşturan matematik soruları, sadece sayısal beceriyi değil, 
                aynı zamanda analitik düşünme ve problem çözme yeteneklerini de ölçmektedir.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                15 yıllık öğretmenlik deneyimimde, Başakşehir'de yüzlerce öğrencinin LGS matematik 
                başarısına tanık oldum. Bu rehberde, başarılı öğrencilerimin uyguladığı yöntemleri 
                ve kendi geliştirdiğim stratejileri sizlerle paylaşacağım.
              </p>
              <div className="bg-indigo-50 p-6 rounded-lg mb-6">
                <p className="text-indigo-800 font-semibold">
                  💡 Önemli: LGS matematikte başarı = %40 Temel Bilgi + %30 Pratik + %20 Strateji + %10 Sınav Yönetimi
                </p>
              </div>
            </section>

            {/* 2. LGS Matematik Konuları */}
            <section id="konular" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                2. LGS Matematik Konuları ve Ağırlıkları
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                LGS matematik sınavında çıkan konuların ağırlıklarını bilmek, çalışma planınızı 
                doğru yapmanız açısından kritiktir. İşte son 3 yılın analizi:
              </p>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <table className="w-full">
                  <thead className="bg-indigo-600 text-white">
                    <tr>
                      <th className="px-6 py-3 text-left">Konu</th>
                      <th className="px-6 py-3 text-center">Soru Sayısı</th>
                      <th className="px-6 py-3 text-center">Önem</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">Sayılar ve İşlemler</td>
                      <td className="px-6 py-4 text-center">4-5</td>
                      <td className="px-6 py-4 text-center">⭐⭐⭐⭐⭐</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">Cebirsel İfadeler</td>
                      <td className="px-6 py-4 text-center">3-4</td>
                      <td className="px-6 py-4 text-center">⭐⭐⭐⭐</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">Denklemler</td>
                      <td className="px-6 py-4 text-center">2-3</td>
                      <td className="px-6 py-4 text-center">⭐⭐⭐⭐</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">Geometri</td>
                      <td className="px-6 py-4 text-center">4-5</td>
                      <td className="px-6 py-4 text-center">⭐⭐⭐⭐⭐</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">Veri Analizi</td>
                      <td className="px-6 py-4 text-center">2-3</td>
                      <td className="px-6 py-4 text-center">⭐⭐⭐</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">Olasılık</td>
                      <td className="px-6 py-4 text-center">1-2</td>
                      <td className="px-6 py-4 text-center">⭐⭐⭐</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-yellow-800">
                  ⚠️ Dikkat Edilmesi Gerekenler:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Sayılar ve Geometri konuları en yüksek soru sayısına sahiptir</li>
                  <li>• Yeni nesil sorular genellikle günlük hayat problemleri şeklindedir</li>
                  <li>• Görsel yorumlama gerektiren sorular artmaktadır</li>
                  <li>• Çoktan seçmeli mantığı yerine problem çözme odaklı çalışın</li>
                </ul>
              </div>
            </section>

            {/* 3. Çalışma Planı */}
            <section id="calisma-plani" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                3. Etkili Çalışma Planı Oluşturma
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Başakşehir'deki başarılı öğrencilerimle uyguladığımız 8 haftalık LGS matematik 
                çalışma programını sizlerle paylaşıyorum:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-indigo-700">
                    📅 Hafta 1-2: Temel Kavramları Gözden Geçirme
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Günde 2 saat matematik çalışma</li>
                    <li>• Konu özetlerini tekrar etme</li>
                    <li>• Her konu sonrası 20 basit soru çözme</li>
                    <li>• Eksik konuları belirleme</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-green-700">
                    📅 Hafta 3-4: Soru Çözme Pratiği
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Günde 40-50 soru çözme</li>
                    <li>• Yanlışları analiz etme</li>
                    <li>• Zor soruları işaretleme</li>
                    <li>• Çözüm yöntemlerini not alma</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-purple-700">
                    📅 Hafta 5-6: Deneme Sınavları
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Haftada 2 deneme sınavı</li>
                    <li>• Süre tutarak çözme</li>
                    <li>• Hata analizi yapma</li>
                    <li>• Eksik konulara odaklanma</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-red-700">
                    📅 Hafta 7-8: Son Düzlük
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Günde 1 deneme + analiz</li>
                    <li>• Formül tekrarları</li>
                    <li>• Zaman yönetimi pratiği</li>
                    <li>• Motivasyon ve özgüven çalışması</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 4. Soru Çözme Teknikleri */}
            <section id="soru-teknikleri" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                4. Soru Çözme Teknikleri
              </h2>
              
              <div className="bg-indigo-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-indigo-800">
                  🎯 Emre Hoca'nın Altın Kuralları
                </h3>
                <ol className="space-y-4 text-gray-700">
                  <li>
                    <strong>1. Soruyu İyi Oku:</strong> Soruyu 2 kez okuyun. 
                    Verilenler ve istenenler arasındaki ilişkiyi belirleyin.
                  </li>
                  <li>
                    <strong>2. Plan Yap:</strong> Hemen çözüme girişmeyin. 
                    10 saniye düşünün, strateji belirleyin.
                  </li>
                  <li>
                    <strong>3. Kestirme Yolları Kullan:</strong> Şıklardan 
                    eliminasyon, tahmin-kontrol yöntemi.
                  </li>
                  <li>
                    <strong>4. Zaman Yönetimi:</strong> Bir soruya maksimum 
                    3 dakika ayırın. Takılırsanız geçin.
                  </li>
                  <li>
                    <strong>5. Kontrol Et:</strong> Çözümünüzü mutlaka 
                    şıklara göre kontrol edin.
                  </li>
                </ol>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-3 text-green-800">
                    ✅ Doğru Yaklaşımlar
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Önce kolay soruları çöz</li>
                    <li>• İşlem hatalarını minimize et</li>
                    <li>• Şıkları eleme yöntemini kullan</li>
                    <li>• Görsel soruları çizerek çöz</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-3 text-red-800">
                    ❌ Kaçınılması Gerekenler
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Ezbere dayalı çözümler</li>
                    <li>• Panik yaparak acele etmek</li>
                    <li>• Zor sorularda ısrar etmek</li>
                    <li>• Okuduğunu anlamamak</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 5. Zaman Yönetimi */}
            <section id="zaman-yonetimi" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                5. Sınav Günü Zaman Yönetimi
              </h2>
              
              <div className="bg-white p-8 rounded-xl shadow-md mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  ⏰ 20 Matematik Sorusu İçin İdeal Zaman Dağılımı
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span>İlk okuma ve planlama</span>
                    <span className="font-semibold">2 dakika</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span>Kolay sorular (10 soru)</span>
                    <span className="font-semibold">15 dakika</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span>Orta zorluk sorular (7 soru)</span>
                    <span className="font-semibold">21 dakika</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span>Zor sorular (3 soru)</span>
                    <span className="font-semibold">12 dakika</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span>Kontrol ve kodlama</span>
                    <span className="font-semibold">5 dakika</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-indigo-100 rounded">
                    <span className="font-semibold">TOPLAM</span>
                    <span className="font-semibold">55 dakika</span>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <p className="text-yellow-800">
                  <strong>💡 Profesyonel İpucu:</strong> Matematik bölümü için 
                  ayrılan 60 dakikanın 55'ini kullanın, 5 dakikayı diğer 
                  bölümlerde takıldığınız sorular için saklayın.
                </p>
              </div>
            </section>

            {/* 6. Başakşehir'de LGS Hazırlık */}
            <section id="basaksehir-ozel" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                6. Başakşehir'de LGS Hazırlık İmkanları
              </h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Başakşehir, İstanbul'un gelişen eğitim merkezlerinden biri olarak, 
                LGS hazırlık sürecinde öğrencilere birçok imkan sunmaktadır:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-700">
                    📚 Kütüphaneler ve Çalışma Alanları
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Başakşehir Yaşam Vadisi Kütüphanesi</li>
                    <li>• Bahçeşehir Kütüphanesi</li>
                    <li>• Kayaşehir Gençlik Merkezi</li>
                    <li>• Mall of İstanbul çalışma alanları</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-green-700">
                    🏫 Özel Ders İmkanları
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Deneyimli öğretmenler</li>
                    <li>• Evde birebir ders seçeneği</li>
                    <li>• Online ders imkanı</li>
                    <li>• Küçük grup çalışmaları</li>
                  </ul>
                </div>
              </div>

              <div className="bg-indigo-100 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4 text-indigo-800">
                  🎯 Matematik Akademi ile LGS Başarısı
                </h3>
                <p className="text-gray-700 mb-4">
                  15 yıllık deneyimimle Başakşehir'de LGS matematik hazırlığında 
                  öğrencilerime rehberlik ediyorum. Kişiselleştirilmiş eğitim 
                  programları ve düzenli takip ile öğrencilerimin %98'i hedefledikleri 
                  liselere yerleşiyor.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <a 
                    href={`https://wa.me/${CONTACT_INFO.WHATSAPP}?text=${encodeURIComponent('Merhaba! LGS matematik hazırlık hakkında bilgi almak istiyorum.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                  >
                    📱 WhatsApp ile İletişim
                  </a>
                  <Link 
                    href="/basaksehir-matematik-ozel-ders"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                  >
                    📍 Başakşehir Özel Ders
                  </Link>
                </div>
              </div>
            </section>

            {/* 7. Veliler İçin Tavsiyeler */}
            <section id="veliler-icin" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                7. Veliler İçin Tavsiyeler
              </h2>
              
              <div className="bg-purple-50 p-8 rounded-xl mb-8">
                <h3 className="text-xl font-semibold mb-4 text-purple-800">
                  👨‍👩‍👧‍👦 Çocuğunuzu LGS Sürecinde Nasıl Destekleyebilirsiniz?
                </h3>
                <ol className="space-y-4 text-gray-700">
                  <li>
                    <strong>1. Baskı Yapmayın:</strong> Sürekli "çalış" demek 
                    yerine, düzenli çalışma ortamı sağlayın.
                  </li>
                  <li>
                    <strong>2. Motivasyon Sağlayın:</strong> Küçük başarıları 
                    kutlayın, hatalardan ders çıkarmasına yardımcı olun.
                  </li>
                  <li>
                    <strong>3. Beslenmeye Dikkat:</strong> Düzenli ve sağlıklı 
                    beslenme, beyin performansını artırır.
                  </li>
                  <li>
                    <strong>4. Uyku Düzeni:</strong> Günde en az 8 saat uyku, 
                    öğrenme ve hafıza için kritiktir.
                  </li>
                  <li>
                    <strong>5. Sosyal Aktiviteler:</strong> Sadece ders değil, 
                    spor ve hobi için de zaman ayırın.
                  </li>
                </ol>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-100 p-6 rounded-lg text-center">
                  <div className="text-3xl mb-3">✅</div>
                  <h4 className="font-semibold mb-2">Yapılması Gerekenler</h4>
                  <p className="text-sm text-gray-700">
                    Düzenli takip, pozitif yaklaşım, profesyonel destek
                  </p>
                </div>
                <div className="bg-yellow-100 p-6 rounded-lg text-center">
                  <div className="text-3xl mb-3">⚠️</div>
                  <h4 className="font-semibold mb-2">Dikkat Edilmesi Gerekenler</h4>
                  <p className="text-sm text-gray-700">
                    Yorgunluk belirtileri, motivasyon düşüklüğü, stres
                  </p>
                </div>
                <div className="bg-red-100 p-6 rounded-lg text-center">
                  <div className="text-3xl mb-3">❌</div>
                  <h4 className="font-semibold mb-2">Kaçınılması Gerekenler</h4>
                  <p className="text-sm text-gray-700">
                    Aşırı baskı, karşılaştırma, olumsuz eleştiri
                  </p>
                </div>
              </div>
            </section>

            {/* 8. Ücretsiz Kaynak */}
            <section id="ucretsiz-kaynak" className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                8. Ücretsiz Kaynak ve PDF
              </h2>
              
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8 rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-4">
                  🎁 Ücretsiz LGS Matematik Çalışma Takvimi
                </h3>
                <p className="mb-6 text-indigo-100">
                  8 haftalık detaylı LGS matematik çalışma takvimini ücretsiz 
                  olarak indirebilirsiniz. Bu takvim, günlük çalışma konularını, 
                  soru sayılarını ve hedefleri içermektedir.
                </p>
                <div className="bg-white/20 p-6 rounded-lg mb-6">
                  <h4 className="text-xl font-semibold mb-3">📄 PDF İçeriği:</h4>
                  <ul className="space-y-2">
                    <li>✓ 8 haftalık detaylı çalışma programı</li>
                    <li>✓ Günlük konu dağılımı</li>
                    <li>✓ Soru çözme hedefleri</li>
                    <li>✓ Deneme sınavı takvimi</li>
                    <li>✓ Motivasyon notları</li>
                  </ul>
                </div>
                <a 
                  href={`https://wa.me/${CONTACT_INFO.WHATSAPP}?text=${encodeURIComponent('Merhaba! LGS Matematik Çalışma Takvimi PDF\'ini almak istiyorum.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold transition-colors inline-flex items-center gap-2"
                >
                  <span>📥 PDF'i WhatsApp'tan İste</span>
                </a>
              </div>
            </section>

            {/* Sonuç */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Sonuç: Başarı Sizin Elinizde
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Değerli Başakşehirli öğrenci ve veliler, LGS matematik başarısı 
                düzenli çalışma, doğru yöntem ve profesyonel destekle mümkündür. 
                Bu rehberde paylaştığım stratejileri uygulayarak, hedeflerinize 
                ulaşabilirsiniz.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Unutmayın, her öğrenci özeldir ve her öğrencinin öğrenme hızı 
                farklıdır. Önemli olan, kendi hızınızda ilerlemek ve asla pes 
                etmemektir. Matematik Akademi olarak, bu yolda size rehberlik 
                etmekten mutluluk duyarım.
              </p>
              
              <div className="bg-gray-100 p-8 rounded-xl text-center">
                <p className="text-2xl font-semibold mb-4 text-gray-800">
                  Başarıya giden yolda ilk adımı atın!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href={`tel:+${CONTACT_INFO.PHONE}`}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <span>📞 Hemen Ara: 0542 451 37 69</span>
                  </a>
                  <Link 
                    href="/iletisim"
                    className="bg-white text-indigo-600 hover:bg-gray-200 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2 border-2 border-indigo-600"
                  >
                    <span>📧 İletişim Formu</span>
                  </Link>
                </div>
              </div>
            </section>

            {/* Yazar Bilgisi */}
            <div className="bg-indigo-50 p-8 rounded-xl border-2 border-indigo-200">
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    EA
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Emre Aktaş</h3>
                  <p className="text-gray-600 mb-2">
                    Matematik Öğretmeni | 15 Yıl Deneyim | Boğaziçi Üniversitesi
                  </p>
                  <p className="text-sm text-gray-600">
                    Başakşehir'de matematik özel ders veren, 1000+ öğrencinin 
                    matematik başarısına katkıda bulunmuş deneyimli eğitmen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* İlgili İçerikler */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            İlgili İçerikler
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link href="/lgs" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-indigo-600">
                LGS Matematik Hazırlık
              </h3>
              <p className="text-gray-600">
                LGS matematik hazırlık programımız hakkında detaylı bilgi alın.
              </p>
            </Link>
            <Link href="/matematik" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-green-600">
                Matematik Özel Ders
              </h3>
              <p className="text-gray-600">
                Tüm seviyeler için matematik özel ders hizmetlerimizi keşfedin.
              </p>
            </Link>
            <Link href="/basaksehir-matematik-ozel-ders" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-purple-600">
                Başakşehir Özel Ders
              </h3>
              <p className="text-gray-600">
                Başakşehir'de matematik özel ders imkanlarını inceleyin.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
