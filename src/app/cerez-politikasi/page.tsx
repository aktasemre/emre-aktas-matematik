import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Çerez Politikası | Matematik Akademi',
  description: 'Matematik Akademi çerez politikası. Web sitesinde kullanılan çerezler ve amaçları hakkında bilgi.',
  robots: 'noindex, follow',
}

export default function CerezPolitikasi() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-8 text-gray-800">Çerez Politikası</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Son Güncelleme:</strong> 15 Ocak 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Çerez Nedir?</h2>
              <p className="text-gray-700 mb-4">
                Çerezler (cookies), web sitemizi ziyaret ettiğinizde tarayıcınız tarafından 
                bilgisayarınıza kaydedilen küçük metin dosyalarıdır. Bu dosyalar, 
                kullanıcı deneyimini iyileştirmek ve site performansını artırmak için kullanılır.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. Kullandığımız Çerez Türleri</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-700">2.1 Zorunlu Çerezler</h3>
              <p className="text-gray-700 mb-4">
                Bu çerezler web sitesinin düzgün çalışması için gereklidir ve devre dışı bırakılamaz.
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Oturum yönetimi</li>
                <li>Güvenlik kontrolleri</li>
                <li>Temel site fonksiyonları</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-gray-700">2.2 Analitik Çerezler</h3>
              <p className="text-gray-700 mb-4">
                Google Analytics tarafından kullanılan çerezler, site kullanım istatistiklerini 
                toplamak için kullanılır.
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Ziyaretçi sayısı ve davranışları</li>
                <li>Popüler sayfalar</li>
                <li>Site performans metrikleri</li>
                <li>Kullanıcı deneyimi iyileştirmeleri</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-gray-700">2.3 Pazarlama Çerezleri</h3>
              <p className="text-gray-700 mb-4">
                Bu çerezler, size daha ilgili içerik ve reklamlar göstermek için kullanılır.
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Hedefli reklamlar</li>
                <li>Sosyal medya entegrasyonu</li>
                <li>İçerik önerileri</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. Üçüncü Taraf Çerezler</h2>
              <p className="text-gray-700 mb-4">
                Web sitemizde aşağıdaki üçüncü taraf hizmetler kullanılmaktadır:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li><strong>Google Analytics:</strong> Site analitikleri için</li>
                <li><strong>Google Fonts:</strong> Yazı tipi yükleme için</li>
                <li><strong>WhatsApp:</strong> İletişim butonu için</li>
                <li><strong>Vercel:</strong> Hosting ve performans için</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. Çerez Yönetimi</h2>
              <p className="text-gray-700 mb-4">
                Çerezleri yönetmek için aşağıdaki seçenekleriniz bulunmaktadır:
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-700">4.1 Tarayıcı Ayarları</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Çerezleri tamamen devre dışı bırakabilirsiniz</li>
                <li>Belirli çerez türlerini seçebilirsiniz</li>
                <li>Çerezleri otomatik olarak silmeyi ayarlayabilirsiniz</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-gray-700">4.2 Google Analytics Devre Dışı Bırakma</h3>
              <p className="text-gray-700 mb-4">
                Google Analytics çerezlerini devre dışı bırakmak için 
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                  Google Analytics Opt-out Browser Add-on
                </a> kullanabilirsiniz.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. Çerez Kullanımının Faydaları</h2>
              <p className="text-gray-700 mb-4">
                Çerezler sayesinde size daha iyi hizmet verebiliyoruz:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Kişiselleştirilmiş içerik</li>
                <li>Gelişmiş kullanıcı deneyimi</li>
                <li>Site performans optimizasyonu</li>
                <li>Güvenlik artırımı</li>
                <li>Hızlı sayfa yükleme</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">6. Çerez Güvenliği</h2>
              <p className="text-gray-700 mb-4">
                Çerezleriniz güvenli bir şekilde saklanır ve korunur:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>SSL şifreleme ile güvenli aktarım</li>
                <li>Üçüncü taraf erişim kısıtlaması</li>
                <li>Düzenli güvenlik güncellemeleri</li>
                <li>KVKK uyumlu veri işleme</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">7. Çerez Süreleri</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Çerez Türü</th>
                      <th className="text-left py-2">Süre</th>
                      <th className="text-left py-2">Amaç</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">Session Cookies</td>
                      <td className="py-2">Tarayıcı kapanana kadar</td>
                      <td className="py-2">Oturum yönetimi</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Analytics Cookies</td>
                      <td className="py-2">2 yıl</td>
                      <td className="py-2">Site analitikleri</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Marketing Cookies</td>
                      <td className="py-2">1 yıl</td>
                      <td className="py-2">Hedefli reklamlar</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">8. İletişim</h2>
              <p className="text-gray-700 mb-4">
                Çerez politikamız hakkında sorularınız için:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Matematik Akademi - Emre Aktaş</strong></p>
                <p className="text-gray-700 mb-2">E-posta: aktasemre1988@gmail.com</p>
                <p className="text-gray-700 mb-2">Telefon: 0542 451 37 69</p>
                <p className="text-gray-700">Adres: İstanbul, Türkiye</p>
              </div>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link href="/" className="text-indigo-600 hover:text-indigo-800 font-medium">
                ← Ana Sayfaya Dön
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
