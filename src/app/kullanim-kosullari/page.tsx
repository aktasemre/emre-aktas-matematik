import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kullanım Koşulları | Matematik Akademi',
  description: 'Matematik Akademi kullanım koşulları. Web sitesi kullanım şartları ve yasal haklar.',
  robots: 'noindex, follow',
}

export default function KullanimKosullari() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-8 text-gray-800">Kullanım Koşulları</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Son Güncelleme:</strong> 15 Ocak 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Genel Hükümler</h2>
              <p className="text-gray-700 mb-4">
                Bu web sitesi (matematik-akademi.com), Matematik Akademi - Emre Aktaş tarafından 
                işletilmektedir. Siteyi kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. Hizmet Tanımı</h2>
              <p className="text-gray-700 mb-4">
                Matematik Akademi, matematik özel ders hizmetleri sunan bir eğitim kurumudur. 
                Hizmetlerimiz şunları içerir:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>LGS matematik hazırlık özel dersleri</li>
                <li>TYT/AYT matematik hazırlık özel dersleri</li>
                <li>Okula yardımcı matematik özel dersleri</li>
                <li>Online ve yüz yüze ders seçenekleri</li>
                <li>Eğitim danışmanlığı hizmetleri</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. Kullanıcı Sorumlulukları</h2>
              <p className="text-gray-700 mb-4">Site kullanıcıları şu sorumluluklara sahiptir:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Doğru ve güncel bilgi vermek</li>
                <li>Site güvenliğini tehlikeye atmamak</li>
                <li>Telif haklarına saygı göstermek</li>
                <li>Diğer kullanıcıların haklarına saygı göstermek</li>
                <li>Yasal düzenlemelere uymak</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. Fikri Mülkiyet Hakları</h2>
              <p className="text-gray-700 mb-4">
                Bu web sitesindeki tüm içerik, tasarım ve yazılım Matematik Akademi'nin 
                fikri mülkiyeti altındadır. İçeriğin kopyalanması, dağıtılması veya 
                değiştirilmesi yasaktır.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. Hizmet Şartları</h2>
              <h3 className="text-xl font-semibold mb-3 text-gray-700">5.1 Ders Programı</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Ders programları karşılıklı anlaşma ile belirlenir</li>
                <li>24 saat önceden haber verilmeden iptal edilen dersler ücretlendirilir</li>
                <li>Öğretmen tarafından iptal edilen dersler telafi edilir</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-gray-700">5.2 Ödeme Koşulları</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Ödemeler ders öncesi veya anlaşmaya göre yapılır</li>
                <li>Nakit, banka havalesi veya kredi kartı ile ödeme kabul edilir</li>
                <li>Fatura talep edilebilir</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">6. Gizlilik ve Güvenlik</h2>
              <p className="text-gray-700 mb-4">
                Kişisel verilerinizin korunması için detaylı bilgi 
                <Link href="/gizlilik-politikasi" className="text-indigo-600 hover:text-indigo-800 font-medium">
                  Gizlilik Politikamızı
                </Link> inceleyebilirsiniz.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">7. Sorumluluk Sınırları</h2>
              <p className="text-gray-700 mb-4">
                Matematik Akademi, öğrenci başarısını artırmak için elinden geleni yapar, 
                ancak sınav sonuçları garanti edilemez. Öğrenci performansı birçok faktöre 
                bağlıdır.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">8. İletişim ve Destek</h2>
              <p className="text-gray-700 mb-4">
                Sorularınız ve destek talepleriniz için:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Matematik Akademi - Emre Aktaş</strong></p>
                <p className="text-gray-700 mb-2">E-posta: aktasemre1988@gmail.com</p>
                <p className="text-gray-700 mb-2">Telefon: 0542 451 37 69</p>
                <p className="text-gray-700">Adres: İstanbul, Türkiye</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">9. Değişiklikler</h2>
              <p className="text-gray-700 mb-4">
                Bu kullanım koşulları zaman zaman güncellenebilir. Önemli değişiklikler 
                web sitesinde duyurulacaktır.
              </p>
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
