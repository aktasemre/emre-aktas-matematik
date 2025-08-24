import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Matematik Eğitimi Blog | Emre Aktaş',
  description: 'Matematik öğrenme teknikleri, LGS ve TYT/AYT hazırlık ipuçları, eğitim rehberleri. Deneyimli matematik öğretmeni Emre Aktaş\'ın yazıları.',
  keywords: [
    'matematik blog',
    'matematik eğitimi',
    'lgs hazırlık',
    'tyt matematik',
    'matematik öğrenme teknikleri',
    'matematik başarı hikayeleri'
  ],
  openGraph: {
    title: 'Matematik Eğitimi Blog | Matematik Akademi',
    description: 'Matematik öğrenme teknikleri ve eğitim rehberleri',
    type: 'website',
  },
  alternates: {
    canonical: '/blog',
  },
}

const blogPosts = [
  {
    slug: 'basaksehir-lgs-matematik-basari-rehberi',
    title: 'Başakşehir LGS Matematik Başarı Rehberi (2025)',
    excerpt: 'LGS matematik hazırlık stratejileri, çalışma programı ve başarı yöntemleri. 15 yıllık deneyimle hazırlanmış kapsamlı rehber.',
    date: '15 Ocak 2024',
    readTime: '10 dk',
    category: 'LGS Hazırlık',
    categoryColor: 'bg-blue-100 text-blue-800',
    image: '/images/math-books.jpg'
  },
  {
    slug: 'tyt-matematik-en-cok-hata-yapilan-konular',
    title: 'TYT Matematikte En Çok Hata Yapılan 10 Konu',
    excerpt: 'TYT matematik sınavında öğrencilerin en çok hata yaptığı konular ve çözüm önerileri. Ücretsiz PDF konu özeti hediye!',
    date: '20 Ocak 2024',
    readTime: '8 dk',
    category: 'TYT Hazırlık',
    categoryColor: 'bg-green-100 text-green-800',
    image: '/images/calculator.jpg',
    comingSoon: true
  },
  {
    slug: 'veliler-icin-matematik-calisma-plani',
    title: 'Veliler için Matematikte Çalışma Planı – 8 Hafta Şablonu',
    excerpt: 'Çocuğunuzun matematik başarısını artırmak için 8 haftalık detaylı çalışma planı. Velilere özel ipuçları ve takip yöntemleri.',
    date: '25 Ocak 2024',
    readTime: '12 dk',
    category: 'Veli Rehberi',
    categoryColor: 'bg-purple-100 text-purple-800',
    image: '/images/homework-help.jpg',
    comingSoon: true
  },
  {
    slug: 'matematik-korkusu-nasil-yenilir',
    title: 'Matematik Korkusu Nasıl Yenilir? Pratik Yöntemler',
    excerpt: 'Matematik korkusunun nedenleri ve üstesinden gelme yöntemleri. 15 yıllık deneyimle test edilmiş teknikler.',
    date: '30 Ocak 2024',
    readTime: '7 dk',
    category: 'Eğitim Psikolojisi',
    categoryColor: 'bg-yellow-100 text-yellow-800',
    image: '/images/student-success.jpg',
    comingSoon: true
  },
  {
    slug: 'online-matematik-dersi-avantajlari',
    title: 'Online Matematik Dersinin 7 Büyük Avantajı',
    excerpt: 'Pandemi sonrası dönemde online matematik eğitiminin avantajları ve etkili online ders alma teknikleri.',
    date: '5 Şubat 2024',
    readTime: '6 dk',
    category: 'Online Eğitim',
    categoryColor: 'bg-indigo-100 text-indigo-800',
    image: '/images/online-education.jpg',
    comingSoon: true
  },
  {
    slug: 'basaksehir-egitim-imkanlari',
    title: 'Başakşehir\'de Eğitim: Fırsatlar ve İmkanlar',
    excerpt: 'Başakşehir\'in sunduğu eğitim olanakları, kütüphaneler, çalışma alanları ve özel ders imkanları hakkında detaylı bilgi.',
    date: '10 Şubat 2024',
    readTime: '9 dk',
    category: 'Bölgesel',
    categoryColor: 'bg-red-100 text-red-800',
    image: '/images/classroom.jpg',
    comingSoon: true
  }
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Matematik Eğitimi Blog
            </h1>
            <p className="text-xl text-gray-200">
              Matematik öğrenme teknikleri, sınav hazırlık stratejileri ve eğitim rehberleri
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Featured Post */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-gray-800">📌 Öne Çıkan Yazı</h2>
              <Link href={`/blog/${blogPosts[0].slug}`} className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-64 lg:h-auto">
                      <Image
                        src={blogPosts[0].image}
                        alt={blogPosts[0].title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm ${blogPosts[0].categoryColor}`}>
                          {blogPosts[0].category}
                        </span>
                        <span className="text-gray-500 text-sm">{blogPosts[0].date}</span>
                        <span className="text-gray-500 text-sm">⏱️ {blogPosts[0].readTime}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-indigo-600 transition-colors">
                        {blogPosts[0].title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {blogPosts[0].excerpt}
                      </p>
                      <span className="text-indigo-600 font-semibold group-hover:underline">
                        Devamını Oku →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Other Posts */}
            <div>
              <h2 className="text-2xl font-bold mb-8 text-gray-800">📚 Tüm Yazılar</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.slice(1).map((post) => (
                  <div key={post.slug} className={`${post.comingSoon ? 'opacity-75' : ''}`}>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                      <div className="relative h-48">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                        {post.comingSoon && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <span className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold">
                              Yakında
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`px-2 py-1 rounded-full text-xs ${post.categoryColor}`}>
                            {post.category}
                          </span>
                          <span className="text-gray-500 text-xs">{post.date}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 flex-1">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-500 text-sm">⏱️ {post.readTime}</span>
                          {!post.comingSoon && (
                            <Link href={`/blog/${post.slug}`} className="text-indigo-600 font-medium hover:underline">
                              Oku →
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter CTA */}
            <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Yeni Yazılardan Haberdar Olun
              </h2>
              <p className="text-lg mb-6 text-indigo-100">
                Matematik eğitimi hakkında faydalı içerikler ve özel ders fırsatları için bizi takip edin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <a 
                  href={`https://wa.me/${CONTACT_INFO.WHATSAPP}?text=${encodeURIComponent('Merhaba! Blog yazılarından haberdar olmak istiyorum.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  WhatsApp Grubuna Katıl
                </a>
                <Link 
                  href="/iletisim"
                  className="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  İletişime Geç
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
