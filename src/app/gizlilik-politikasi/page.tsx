import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gizlilik Politikası | Matematik Akademi',
  description: 'Matematik Akademi gizlilik politikası. Kişisel verilerinizin korunması ve kullanımı hakkında bilgiler.',
  robots: 'noindex, follow',
}

export default function GizlilikPolitikasi() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-8 text-gray-800">Gizlilik Politikası</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Son Güncelleme:</strong> 15 Ocak 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Giriş</h2>
              <p className="text-gray-700 mb-4">
                Matematik Akademi ("biz", "bizim") olarak, kullanıcılarımızın gizliliğini korumayı taahhüt ediyoruz. 
                Bu gizlilik politikası, matematik-akademi.com web sitesini ziyaret ettiğinizde hangi bilgileri 
                topladığımızı, nasıl kullandığımızı ve koruduğumuzu açıklar.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. Toplanan Bilgiler</h2>
              <h3 className="text-xl font-semibold mb-3 text-gray-700">2.1 İletişim Bilgileri</h3>
              <p className="text-gray-700 mb-4">
                İletişim formunu doldurduğunuzda veya WhatsApp üzerinden iletişime geçtiğinizde:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Ad ve Soyad</li>
                <li>Telefon Numarası</li>
                <li>E-posta Adresi</li>
                <li>Mesaj İçeriği</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-gray-700">2.2 Otomatik Toplanan Bilgiler</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>IP Adresi</li>
                <li>Tarayıcı Türü ve Versiyonu</li>
                <li>Ziyaret Edilen Sayfalar</li>
                <li>Ziyaret Tarihi ve Saati</li>
                <li>Referans Kaynağı</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. Bilgilerin Kullanımı</h2>
              <p className="text-gray-700 mb-4">Toplanan bilgiler şu amaçlarla kullanılır:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Matematik özel ders hizmetleri hakkında bilgi vermek</li>
                <li>Randevu ve ders programı ayarlamak</li>
                <li>İletişim taleplerini yanıtlamak</li>
                <li>Hizmet kalitesini iyileştirmek</li>
                <li>Yasal yükümlülükleri yerine getirmek</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. Çerezler (Cookies)</h2>
              <p className="text-gray-700 mb-4">
                Web sitemiz, kullanıcı deneyimini iyileştirmek için çerezler kullanır:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li><strong>Zorunlu Çerezler:</strong> Web sitesinin düzgün çalışması için gerekli</li>
                <li><strong>Analitik Çerezler:</strong> Google Analytics ile ziyaretçi istatistikleri</li>
                <li><strong>Pazarlama Çerezleri:</strong> İlgili reklamların gösterilmesi için</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. Veri Güvenliği</h2>
              <p className="text-gray-700 mb-4">
                Kişisel verilerinizin güvenliği bizim için önemlidir. Verilerinizi korumak için:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>SSL şifreleme kullanıyoruz</li>
                <li>Düzenli güvenlik güncellemeleri yapıyoruz</li>
                <li>Sadece yetkili personel verilere erişebilir</li>
                <li>Üçüncü şahıslarla veri paylaşımı yapmıyoruz</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">6. Kullanıcı Hakları</h2>
              <p className="text-gray-700 mb-4">KVKK kapsamında sahip olduğunuz haklar:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                <li>İşlenen veriler hakkında bilgi talep etme</li>
                <li>Verilerin işlenme amacını öğrenme</li>
                <li>Yanlış verilerin düzeltilmesini isteme</li>
                <li>Verilerin silinmesini talep etme</li>
                <li>İşlenen verilerin aktarıldığı üçüncü kişileri bilme</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">7. Çocukların Gizliliği</h2>
              <p className="text-gray-700 mb-4">
                18 yaş altı kullanıcıların kişisel bilgilerini toplarken ebeveyn veya veli onayı alınır. 
                Çocukların güvenliği ve gizliliği konusunda azami özen gösterilir.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">8. Değişiklikler</h2>
              <p className="text-gray-700 mb-4">
                Bu gizlilik politikası zaman zaman güncellenebilir. Önemli değişiklikler web sitesinde 
                duyurulacaktır. Son güncelleme tarihini kontrol etmenizi öneririz.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">9. İletişim</h2>
              <p className="text-gray-700 mb-4">
                Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:
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
