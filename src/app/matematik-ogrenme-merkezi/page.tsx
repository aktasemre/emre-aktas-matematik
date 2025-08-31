import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CONTACT_INFO } from '@/constants/contact'
import Breadcrumb from '@/components/common/Breadcrumb'

export const metadata: Metadata = {
  title: 'Matematik Öğrenme Merkezi | Ücretsiz Kaynaklar | Emre Aktaş',
  description: 'Matematik öğrenme merkezi. Ücretsiz PDF kaynakları, video dersler, çalışma programları ve matematik başarı rehberleri.',
  keywords: [
    'matematik öğrenme merkezi',
    'ücretsiz matematik kaynakları',
    'matematik pdf indir',
    'matematik video dersler',
    'matematik çalışma programı',
    'lgs matematik kaynakları',
    'tyt matematik kaynakları',
    'matematik başarı rehberi'
  ],
  openGraph: {
    title: 'Matematik Öğrenme Merkezi | Ücretsiz Kaynaklar',
    description: 'Ücretsiz matematik kaynakları, PDF\'ler, video dersler ve başarı rehberleri.',
    type: 'website',
  },
  alternates: {
    canonical: '/matematik-ogrenme-merkezi',
  },
}

const resources = [
  {
    id: 'lgs-calisma-programi',
    title: 'LGS Matematik 8 Haftalık Çalışma Programı',
    description: 'LGS matematik hazırlık için detaylı 8 haftalık çalışma programı. Günlük konu dağılımı ve soru hedefleri.',
    type: 'PDF',
    size: '2.3 MB',
    downloads: 1247,
    category: 'LGS Hazırlık',
    categoryColor: 'bg-blue-100 text-blue-800',
    image: '/images/math-books.jpg'
  },
  {
    id: 'tyt-konu-ozeti',
    title: 'TYT Matematik Konu Özeti',
    description: 'TYT matematik tüm konuların özeti. Formüller, önemli noktalar ve çözüm teknikleri.',
    type: 'PDF',
    size: '1.8 MB',
    downloads: 892,
    category: 'TYT Hazırlık',
    categoryColor: 'bg-green-100 text-green-800',
    image: '/images/calculator.jpg'
  },
  {
    id: 'matematik-korkusu-rehberi',
    title: 'Matematik Korkusunu Yenme Rehberi',
    description: 'Matematik korkusunun nedenleri ve üstesinden gelme yöntemleri. Pratik teknikler ve motivasyon ipuçları.',
    type: 'PDF',
    size: '1.5 MB',
    downloads: 567,
    category: 'Eğitim Psikolojisi',
    categoryColor: 'bg-purple-100 text-purple-800',
    image: '/images/student-success.jpg'
  },
  {
    id: 'veli-rehberi',
    title: 'Veliler İçin Matematik Başarı Rehberi',
    description: 'Çocuğunuzun matematik başarısını artırmak için velilere özel ipuçları ve takip yöntemleri.',
    type: 'PDF',
    size: '2.1 MB',
    downloads: 734,
    category: 'Veli Rehberi',
    categoryColor: 'bg-yellow-100 text-yellow-800',
    image: '/images/homework-help.jpg'
  }
]

const videoLessons = [
  {
    id: 'lgs-sayilar',
    title: 'LGS Sayılar ve İşlemler',
    duration: '45 dk',
    views: 2341,
    category: 'LGS Hazırlık',
    thumbnail: '/images/math-tutoring.jpg'
  },
  {
    id: 'tyt-geometri',
    title: 'TYT Geometri Temel Kavramlar',
    duration: '52 dk',
    views: 1892,
    category: 'TYT Hazırlık',
    thumbnail: '/images/classroom.jpg'
  },
  {
    id: 'soru-cozme-teknikleri',
    title: 'Matematik Soru Çözme Teknikleri',
    duration: '38 dk',
    views: 3124,
    category: 'Genel',
    thumbnail: '/images/teacher-student.jpg'
  }
]

export default function MatematikOgrenmeMerkezi() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <Breadcrumb 
        items={[
          { label: 'Ana Sayfa', href: '/' },
          { label: 'Matematik Öğrenme Merkezi' }
        ]} 
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Matematik Öğrenme Merkezi
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Ücretsiz matematik kaynakları, video dersler ve başarı rehberleri ile<br />
              matematik başarınızı artırın
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">📚 4 Ücretsiz PDF</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">🎥 3 Video Ders</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">📊 3,400+ İndirme</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ücretsiz PDF Kaynakları */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              📚 Ücretsiz PDF Kaynakları
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {resources.map((resource) => (
                <div key={resource.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="relative w-20 h-20 flex-shrink-0">
                      <Image
                        src={resource.image}
                        alt={resource.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${resource.categoryColor}`}>
                          {resource.category}
                        </span>
                        <span className="text-gray-500 text-sm">{resource.type}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-800">
                        {resource.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {resource.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          <span>📥 {resource.downloads} indirme</span>
                          <span className="mx-2">•</span>
                          <span>{resource.size}</span>
                        </div>
                        <a 
                          href={`https://wa.me/${CONTACT_INFO.WHATSAPP}?text=${encodeURIComponent(`Merhaba! ${resource.title} PDF'ini almak istiyorum.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        >
                          PDF İste
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MEB LGS Örnek Soruları */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              📋 MEB LGS Örnek Soruları
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              MEB tarafından yayınlanan resmi LGS örnek soruları. Aşağıdaki linklerden 
              MEB'in resmi sayfasına giderek güncel örnek soruları indirebilirsiniz.
            </p>
            
            {/* MEB Ana Linkler */}
            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <h3 className="text-xl font-bold mb-6 text-gray-800 text-center">
                🔗 MEB Resmi Kaynakları
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a href="https://odsgm.meb.gov.tr" target="_blank" rel="noopener noreferrer" className="bg-blue-50 p-6 rounded-lg hover:bg-blue-100 transition-colors text-center">
                  <div className="text-3xl mb-3">🏛️</div>
                  <h4 className="font-semibold text-blue-800 mb-2">ODSGM Ana Sayfası</h4>
                  <p className="text-sm text-blue-600">MEB Ölçme Değerlendirme ve Sınav Hizmetleri</p>
                </a>
                <a href="https://www.meb.gov.tr/lgs-merkez-sinavina-yonelik-yeni-ornek-sorulari-yayimlandi/haber/35444/tr" target="_blank" rel="noopener noreferrer" className="bg-green-50 p-6 rounded-lg hover:bg-green-100 transition-colors text-center">
                  <div className="text-3xl mb-3">🆕</div>
                  <h4 className="font-semibold text-green-800 mb-2">2024-2025 LGS Örnek Soruları</h4>
                  <p className="text-sm text-green-600">En güncel LGS örnek soruları duyurusu</p>
                </a>
                <a href="https://www.meb.gov.tr/lgskapsamindakimerkezisinavailiskinorneksorularerisimeacildi/haber/27799/tr" target="_blank" rel="noopener noreferrer" className="bg-purple-50 p-6 rounded-lg hover:bg-purple-100 transition-colors text-center">
                  <div className="text-3xl mb-3">📋</div>
                  <h4 className="font-semibold text-purple-800 mb-2">LGS Örnek Sorular Duyurusu</h4>
                  <p className="text-sm text-purple-600">MEB'in resmi LGS örnek soru duyurusu</p>
                </a>
              </div>
            </div>

            {/* EBA LGS Örnek Soru PDF'leri */}
            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <h3 className="text-xl font-bold mb-6 text-gray-800 text-center">
                📄 EBA LGS Örnek Soru PDF'leri
              </h3>
              <p className="text-center text-gray-600 mb-6">
                MEB EBA platformundan direkt PDF indirme linkleri. Test edilmiş ve çalıştığı doğrulanmıştır.
              </p>
              
              {/* 2025 Yılı */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4 text-blue-800 flex items-center gap-2">
                  <span className="bg-blue-100 px-3 py-1 rounded-full text-sm">2025</span>
                  LGS Örnek Soruları
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="https://cdn.eba.gov.tr/yardimcikaynaklar/2025/04/ornek/sayisall.pdf" target="_blank" rel="noopener noreferrer" className="bg-red-50 p-4 rounded-lg hover:bg-red-100 transition-colors text-center border-2 border-red-200">
                    <div className="text-2xl mb-2">🔢</div>
                    <h5 className="font-semibold text-red-800 mb-1">Nisan 2025 - Sayısal Bölüm</h5>
                    <p className="text-xs text-red-600">PDF İndir</p>
                  </a>
                  <a href="https://cdn.eba.gov.tr/yardimcikaynaklar/2025/04/ornek/sozel.pdf" target="_blank" rel="noopener noreferrer" className="bg-green-50 p-4 rounded-lg hover:bg-green-100 transition-colors text-center border-2 border-green-200">
                    <div className="text-2xl mb-2">📝</div>
                    <h5 className="font-semibold text-green-800 mb-1">Nisan 2025 - Sözel Bölüm</h5>
                    <p className="text-xs text-green-600">PDF İndir</p>
                  </a>
                  <a href="https://cdn.eba.gov.tr/yardimcikaynaklar/2025/03/ornek/sayisall.pdf" target="_blank" rel="noopener noreferrer" className="bg-red-50 p-4 rounded-lg hover:bg-red-100 transition-colors text-center border-2 border-red-200">
                    <div className="text-2xl mb-2">🔢</div>
                    <h5 className="font-semibold text-red-800 mb-1">Mart 2025 - Sayısal Bölüm</h5>
                    <p className="text-xs text-red-600">PDF İndir</p>
                  </a>
                  <a href="https://cdn.eba.gov.tr/yardimcikaynaklar/2025/03/ornek/sozel.pdf" target="_blank" rel="noopener noreferrer" className="bg-green-50 p-4 rounded-lg hover:bg-green-100 transition-colors text-center border-2 border-green-200">
                    <div className="text-2xl mb-2">📝</div>
                    <h5 className="font-semibold text-green-800 mb-1">Mart 2025 - Sözel Bölüm</h5>
                    <p className="text-xs text-green-600">PDF İndir</p>
                  </a>
                </div>
              </div>

              {/* ODSGM Linkleri */}
              <div className="border-t pt-6">
                <h4 className="text-lg font-semibold mb-4 text-purple-800">📋 ODSGM Örnek Sorular</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <a href="https://odsgm.meb.gov.tr/www/ornek-sorular/icerik/1425" target="_blank" rel="noopener noreferrer" className="bg-purple-50 p-4 rounded-lg hover:bg-purple-100 transition-colors text-center">
                    <div className="text-2xl mb-2">📚</div>
                    <h5 className="font-semibold text-purple-800 mb-1">Üçüncü Örnek Soru Kitapçığı</h5>
                    <p className="text-xs text-purple-600">Sözel ve Sayısal Bölüm</p>
                  </a>
                  <a href="https://odsgm.meb.gov.tr/www/ornek-sorular/icerik/1424" target="_blank" rel="noopener noreferrer" className="bg-indigo-50 p-4 rounded-lg hover:bg-indigo-100 transition-colors text-center">
                    <div className="text-2xl mb-2">📖</div>
                    <h5 className="font-semibold text-indigo-800 mb-1">İkinci Örnek Soru Kitapçığı</h5>
                    <p className="text-xs text-indigo-600">LGS Hazırlık Örnek Soruları</p>
                  </a>
                  <a href="https://odsgm.meb.gov.tr/www/ornek-sorular/icerik/1423" target="_blank" rel="noopener noreferrer" className="bg-teal-50 p-4 rounded-lg hover:bg-teal-100 transition-colors text-center">
                    <div className="text-2xl mb-2">📝</div>
                    <h5 className="font-semibold text-teal-800 mb-1">Birinci Örnek Soru Kitapçığı</h5>
                    <p className="text-xs text-teal-600">LGS Örnek Soruları</p>
                  </a>
                </div>
              </div>
            </div>

            {/* Popüler Eğitim Siteleri */}
            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <h3 className="text-xl font-bold mb-6 text-gray-800 text-center">
                🌟 Popüler Eğitim Siteleri
              </h3>
              <p className="text-center text-gray-600 mb-6">
                Bu siteler MEB LGS örnek sorularını organize eder ve güncel linkleri toplar.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a href="https://kerimhoca.com/lgs" target="_blank" rel="noopener noreferrer" className="bg-orange-50 p-6 rounded-lg hover:bg-orange-100 transition-colors text-center border-2 border-orange-200">
                  <div className="text-3xl mb-3">👨‍🏫</div>
                  <h4 className="font-semibold text-orange-800 mb-2">Kerimhoca.com</h4>
                  <p className="text-sm text-orange-600">LGS hazırlık ve örnek sorular</p>
                </a>
                <a href="https://matematikciler.com/lgs-ornek-sorular" target="_blank" rel="noopener noreferrer" className="bg-cyan-50 p-6 rounded-lg hover:bg-cyan-100 transition-colors text-center border-2 border-cyan-200">
                  <div className="text-3xl mb-3">📚</div>
                  <h4 className="font-semibold text-cyan-800 mb-2">Matematikciler.com</h4>
                  <p className="text-sm text-cyan-600">Matematik odaklı LGS kaynakları</p>
                </a>
              </div>
            </div>

            {/* Bilgilendirme */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
              <div className="flex items-start">
                <div className="text-yellow-400 text-2xl mr-3">⚠️</div>
                <div>
                  <h4 className="text-yellow-800 font-semibold mb-2">Önemli Bilgi</h4>
                  <p className="text-yellow-700 text-sm">
                    MEB'in örnek soru linkleri sürekli güncellenmektedir. En güncel örnek sorulara 
                    erişmek için yukarıdaki MEB resmi linklerini veya popüler eğitim sitelerini 
                    kullanarak aylık örnek soruları indirebilirsiniz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Dersler */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              🎥 Video Dersler
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {videoLessons.map((video) => (
                <div key={video.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                        <span className="text-white text-2xl">▶️</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs">
                        {video.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">
                      {video.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>⏱️ {video.duration}</span>
                      <span>👁️ {video.views} görüntüleme</span>
                    </div>
                    <a 
                      href={`https://wa.me/${CONTACT_INFO.WHATSAPP}?text=${encodeURIComponent(`Merhaba! ${video.title} video dersini izlemek istiyorum.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-center font-medium transition-colors inline-block"
                    >
                      Video İste
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* E-kitap İndirme */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              🎁 Ücretsiz E-kitap: "Matematik Başarı Rehberi"
            </h2>
            <p className="text-xl mb-8 text-indigo-100">
              50 sayfalık kapsamlı matematik başarı rehberi. Çalışma teknikleri, 
              motivasyon ipuçları ve başarı hikayeleri.
            </p>
            <div className="bg-white/20 p-8 rounded-xl mb-8">
              <h3 className="text-xl font-semibold mb-4">📖 E-kitap İçeriği:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <ul className="space-y-2">
                  <li>✓ Etkili çalışma yöntemleri</li>
                  <li>✓ Zaman yönetimi teknikleri</li>
                  <li>✓ Motivasyon artırma yolları</li>
                  <li>✓ Sınav stratejileri</li>
                </ul>
                <ul className="space-y-2">
                  <li>✓ Başarı hikayeleri</li>
                  <li>✓ Veli rehberi</li>
                  <li>✓ Çalışma programı şablonları</li>
                  <li>✓ Pratik ipuçları</li>
                </ul>
              </div>
            </div>
            <a 
              href={`https://wa.me/${CONTACT_INFO.WHATSAPP}?text=${encodeURIComponent('Merhaba! Matematik Başarı Rehberi E-kitabını almak istiyorum.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold transition-colors inline-flex items-center gap-2 text-lg"
            >
              <span>📥 E-kitabı WhatsApp'tan İste</span>
            </a>
          </div>
        </div>
      </section>

      {/* İletişim CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Özel Ders ile Başarınızı Artırın
            </h2>
            <p className="text-xl mb-8 text-gray-600">
              Ücretsiz kaynaklarımızı indirdikten sonra, kişiselleştirilmiş özel ders 
              ile matematik başarınızı maksimum seviyeye çıkarın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`https://wa.me/${CONTACT_INFO.WHATSAPP}?text=${encodeURIComponent('Merhaba! Matematik özel ders hakkında bilgi almak istiyorum.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
              >
                <span>💬 WhatsApp ile İletişim</span>
              </a>
              <Link 
                href="/basaksehir-matematik-ozel-ders"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
              >
                <span>📍 Özel Ders Detayları</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
