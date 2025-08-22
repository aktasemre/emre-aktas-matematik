'use client';

import Link from 'next/link'
import { CONTACT_INFO } from '@/constants/contact'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="block">Matematik Akademi</span>
            <span className="block text-yellow-400">Emre Aktaş</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            15 yıllık deneyimli matematik öğretmeni ile LGS, TYT/AYT ve okula yardımcı matematik özel dersleri
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/iletisim" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              Hemen İletişime Geç
            </Link>
            <Link href="/ucretler" className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">
              Ücretleri Gör
            </Link>
          </div>
        </div>
      </section>

      {/* İstatistikler */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
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
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">LGS Hazırlık</h3>
              <p className="text-gray-600 mb-4">Liselere Geçiş Sınavı için özel hazırlık programları</p>
              <Link href="/lgs" className="text-indigo-600 hover:text-indigo-800 font-semibold">
                Detayları Gör →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">TYT/AYT Hazırlık</h3>
              <p className="text-gray-600 mb-4">Üniversite sınavları için kapsamlı matematik eğitimi</p>
              <Link href="/tyt-ayt" className="text-indigo-600 hover:text-indigo-800 font-semibold">
                Detayları Gör →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
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
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Kişiselleştirilmiş</h3>
              <p className="text-gray-600">Her öğrencinin ihtiyacına özel program</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Sistematik</h3>
              <p className="text-gray-600">Adım adım ilerleyen eğitim sistemi</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Pratik Odaklı</h3>
              <p className="text-gray-600">Bol soru çözümü ve uygulama</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">Bireysel Dersler</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Kişiye özel program</li>
                <li>• Esnek saat seçimi</li>
                <li>• Yoğun odaklanma</li>
                <li>• Hızlı ilerleme</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
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
              <p className="text-gray-600 mb-4">"Matematik Akademi sayesinde LGS'de matematikten tam puan aldım. Emre Hocam'ın sabırlı yaklaşımı çok yardımcı oldu."</p>
              <div className="font-semibold text-indigo-600">- Ahmet Yılmaz, LGS Öğrencisi</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-4">"TYT matematikte 40 sorudan 38'ini doğru yaptım. 15 yıllık deneyim gerçekten fark yaratıyor."</p>
              <div className="font-semibold text-indigo-600">- Elif Kaya, TYT Öğrencisi</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-4">"Matematikten korkuyordum ama şimdi en sevdiğim ders. Teşekkürler Matematik Akademi!"</p>
              <div className="font-semibold text-indigo-600">- Mehmet Demir, 11. Sınıf</div>
            </div>
          </div>
        </div>
      </section>

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
