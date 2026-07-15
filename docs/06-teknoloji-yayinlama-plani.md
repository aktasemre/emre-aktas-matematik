# Teknoloji ve Yayınlama Planı

## Karar Özeti

İlk sürüm için önerilen yapı:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Statik veya yarı statik sayfa üretimi
- Git üzerinden içerik yönetimi
- Vercel üzerinde yayınlama
- Admin paneli, veritabanı ve CMS yok

Bu yapı Matematik Akademi için yeterli olur çünkü ana ihtiyaç hızlı açılan, SEO uyumlu, güven veren ve kolay güncellenebilir bir tanıtım + kaynak arşivi sitesidir.

## Neden Next.js?

- SEO için sayfa bazlı metadata, canonical URL, sitemap ve robots üretimi güçlüdür.
- Vercel ile doğal çalışır.
- Statik sayfalar çok hızlı açılır.
- İleride admin paneli, arama, form, veritabanı veya üyelik gibi ihtiyaçlar eklenirse aynı proje içinde büyüyebilir.
- Blog, kaynak arşivi ve sınıf bazlı sayfalar dosya tabanlı içerikle rahat yönetilebilir.

## İçerik Yönetimi

İlk sürümde içerikler repo içinde tutulacak.

Önerilen yapı:

- `content/pages`: uzun sayfa metinleri
- `content/blog`: blog yazıları
- `content/resources`: MEB, ÖSYM ve çalışma dokümanı kayıtları
- `public`: gerekli görseller ve paylaşılabilir dosyalar

Kaynak kayıtları Markdown, MDX, JSON veya TypeScript veri dosyası olarak tutulabilir. İlk uygulama için TypeScript veri dosyası daha kontrollü olur; blog yazıları için Markdown/MDX daha rahat olur.

## Sayfa Üretim Modeli

Statik üretilecek sayfalar:

- Ana sayfa
- LGS matematik özel ders
- YKS matematik özel ders
- Ara sınıf matematik
- Hakkımda
- İletişim
- Kaynak listeleme sayfaları
- Kaynak detay sayfaları
- Blog yazıları

Bu sayfalar sık değişmediği için veritabanına ihtiyaç yoktur.

## SEO Teknikleri

İlk sürümde yapılacaklar:

- Sayfa bazlı title ve description
- Canonical URL
- Open Graph ve Twitter Card ayarları
- Sitemap
- Robots.txt
- Yapısal veri: LocalBusiness, EducationalOrganization veya Course şemaları
- Temiz URL yapısı
- İç linkleme
- Görsel alt metinleri
- Mobil performans optimizasyonu

## Yayınlama

Hedef platform Vercel olacak.

Yayın akışı:

1. Repo GitHub'a bağlanır.
2. Vercel projesi oluşturulur veya mevcut doğru projeye bağlanır.
3. Production domain olarak `www.matematik-akademi.com` atanır.
4. Kök domain `matematik-akademi.com`, `www` adresine yönlendirilir.
5. Deploy sonrası sitemap ve canonical URL'ler kontrol edilir.

## İlk Kurulumda Gerekenler

- Node.js LTS
- Paket yöneticisi: npm, pnpm veya bun
- Vercel hesabı
- Domain DNS erişimi
- WhatsApp numarası
- Instagram profil URL'si
- Öğretmen adı ve kısa hakkımda metni

## Ertelenenler

- Admin paneli
- Veritabanı
- Üyelik sistemi
- Online ödeme
- Randevu takvimi
- Öğrenci paneli

Bu özellikler ancak gerçek ihtiyaç oluşursa eklenmeli.
