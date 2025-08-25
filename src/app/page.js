'use client';

import Link from 'next/link'
import Image from 'next/image'
import { CONTACT_INFO } from '@/constants/contact'
import RelatedLinks from '@/components/common/RelatedLinks'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
                          <Image
                  src="/images/hero-math.jpg"
                  alt="Matematik Eğitimi"
                  fill
                  className="object-cover"
                  priority
                  sizes="100vw"
                  quality={75}
                  fetchPriority="high"
                />
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="block">Matematik Akademi</span>
                <span className="block text-yellow-400">Emre Aktaş</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto lg:mx-0 mb-8">
                15 yıllık deneyimli matematik öğretmeni ile LGS, TYT/AYT ve okula yardımcı matematik özel dersleri
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/iletisim" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                  Hemen İletişime Geç
                </Link>
                <Link href="/ucretler" className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">
                  Ücretleri Gör
                </Link>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="hidden lg:block">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/teacher-student.jpg"
                  alt="Emre Aktaş - Matematik Öğretmeni"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={75}
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İstatistikler */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">15</div>
              <div className="text-gray-600">Yıl Deneyim</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">1000+</div>
              <div className="text-gray-600">Öğrenci</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">%98</div>
              <div className="text-gray-600">Başarı Oranı</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">10</div>
              <div className="text-gray-600">Hizmet Bölgesi</div>
            </div>
          </div>
        </div>
      </section>

      {/* Hizmetler */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Hizmetlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/classroom.jpg"
                  alt="LGS Hazırlık"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={65}
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">LGS Hazırlık</h3>
              <p className="text-gray-600 mb-4">Liselere Geçiş Sınavı için özel hazırlık programları</p>
              <Link href="/lgs" className="text-indigo-600 hover:text-indigo-800 font-semibold">
                Detayları Gör →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/math-books.jpg"
                  alt="TYT/AYT Hazırlık"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={75}
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">TYT/AYT Hazırlık</h3>
              <p className="text-gray-600 mb-4">Üniversite sınavları için kapsamlı matematik eğitimi</p>
              <Link href="/tyt-ayt" className="text-indigo-600 hover:text-indigo-800 font-semibold">
                Detayları Gör →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/homework-help.jpg"
                  alt="Okula Yardımcı"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={75}
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">Okula Yardımcı</h3>
              <p className="text-gray-600 mb-4">Okul derslerine yardımcı matematik özel dersleri</p>
              <Link href="/okul-destek" className="text-indigo-600 hover:text-indigo-800 font-semibold">
                Detayları Gör →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Öğretim Yöntemleri */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Öğretim Yöntemlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/personalized-learning.jpg"
                  alt="Kişiselleştirilmiş Eğitim"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 25vw"
                  quality={75}
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">Kişiselleştirilmiş</h3>
              <p className="text-gray-600">Her öğrencinin ihtiyacına özel program</p>
            </div>
            <div className="text-center">
              <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/math-books.jpg"
                  alt="Sistematik Eğitim"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 25vw"
                  quality={75}
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">Sistematik</h3>
              <p className="text-gray-600">Adım adım ilerleyen eğitim sistemi</p>
            </div>
            <div className="text-center">
              <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/calculator.jpg"
                  alt="Pratik Odaklı Eğitim"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 25vw"
                  quality={75}
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">Pratik Odaklı</h3>
              <p className="text-gray-600">Bol soru çözümü ve uygulama</p>
            </div>
            <div className="text-center">
              <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/student-success.jpg"
                  alt="Başarı Garantili"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 25vw"
                  quality={75}
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">Başarı Garantili</h3>
              <p className="text-gray-600">%98 başarı oranı ile kanıtlanmış</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sınıf Bazlı Ders Yöntemleri */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Sınıf Bazlı Ders Yöntemlerimiz</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/one-on-one-tutoring.jpg"
                  alt="Bireysel Dersler"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={75}
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">Bireysel Dersler</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Kişiye özel program</li>
                <li>• Esnek saat seçimi</li>
                <li>• Yoğun odaklanma</li>
                <li>• Hızlı ilerleme</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/classroom.jpg"
                  alt="Grup Dersleri"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={75}
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">Grup Dersleri</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 2-3 kişilik gruplar</li>
                <li>• Ekonomik fiyatlar</li>
                <li>• Sosyal öğrenme</li>
                <li>• Motivasyon artışı</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Başarı Hikayeleri */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Başarı Hikayeleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  A
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Ahmet Yılmaz</div>
                  <div className="text-sm text-gray-600">LGS Öğrencisi</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">"Matematik Akademi sayesinde LGS'de matematikten tam puan aldım. Emre Hocam'ın sabırlı yaklaşımı çok yardımcı oldu."</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  E
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Elif Kaya</div>
                  <div className="text-sm text-gray-600">TYT Öğrencisi</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">"TYT matematikte 40 sorudan 38'ini doğru yaptım. 15 yıllık deneyim gerçekten fark yaratıyor."</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  M
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Mehmet Demir</div>
                  <div className="text-sm text-gray-600">11. Sınıf</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">"Matematikten korkuyordum ama şimdi en sevdiğim ders. Teşekkürler Matematik Akademi!"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Başakşehir CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Başakşehir'de Matematik Özel Ders</h2>
          <p className="text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
            Başakşehir ve çevre mahallelerde evde veya online matematik özel ders hizmeti veriyoruz. 
            15 yıllık deneyimimle çocuğunuzun matematik başarısını artırıyoruz.
          </p>
          <Link href="/basaksehir-matematik-ozel-ders" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center gap-2">
            <span>📍 Başakşehir Özel Ders Detayları</span>
          </Link>
        </div>
      </section>

      {/* İlgili Sayfalar */}
      <RelatedLinks 
        title="Popüler Sayfalar ve Rehberler"
        links={[
          {
            href: "/blog/basaksehir-lgs-matematik-basari-rehberi",
            title: "LGS Matematik Başarı Rehberi",
            description: "2025 LGS matematik hazırlık stratejileri ve çalışma programı. Ücretsiz PDF rehber.",
            category: "Blog",
            categoryColor: "bg-blue-100 text-blue-800"
          },
          {
            href: "/basaksehir-matematik-ozel-ders",
            title: "Başakşehir Matematik Özel Ders",
            description: "Başakşehir'de evde veya online matematik özel ders. Ücretsiz deneme dersi.",
            category: "Özel Ders",
            categoryColor: "bg-green-100 text-green-800"
          },
          {
            href: "/metodoloji",
            title: "Öğretim Metodolojimiz",
            description: "15 yıllık deneyimle geliştirilmiş özel matematik öğretim yöntemlerimiz.",
            category: "Eğitim",
            categoryColor: "bg-purple-100 text-purple-800"
          }
        ]}
      />

      {/* CTA Section */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Başarıya Giden Yolda İlk Adımı Atın</h2>
          <p className="text-xl mb-8 text-gray-200">Matematik Akademi ile hedeflerinize ulaşın</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://wa.me/${CONTACT_INFO.WHATSAPP}?text=${encodeURIComponent('Merhaba! Matematik Akademi hakkında bilgi almak istiyorum.')}`} target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
              <span>📱 WhatsApp ile İletişim</span>
            </a>
            <a href={`tel:+${CONTACT_INFO.PHONE}`} className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
              <span>📞 Hemen Ara</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
