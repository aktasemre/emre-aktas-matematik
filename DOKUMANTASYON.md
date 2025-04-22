# ÖZEL DERS WEB SİTESİ DOKÜMANTASYONU

## 1. Proje Genel Bakış

Bu proje, özel ders vermek isteyen eğitmenler için profesyonel bir web sitesi oluşturmayı amaçlamaktadır. Site, özel ders hizmetlerinin tanıtımını yapmak, potansiyel öğrencilere ulaşmak ve ders kayıtlarını yönetmek için gerekli tüm özellikleri içerecektir.

### 1.1 Kullanılan Teknolojiler

- **Frontend Framework**: Next.js
- **Dil**: JavaScript (TypeScript kullanılmayacak)
- **Stil**: CSS ve CSS Modules
- **İkonlar**: react-icons
- **Slider/Carousel**: react-slick, slick-carousel
- **Dağıtım Platformu**: Vercel/Netlify/Digitalocean

## 2. Sayfa Yapısı

Proje aşağıdaki sayfa yapısına sahip olacaktır:

### 2.1 Ana Sayfa (Homepage)
- Hero Banner (Öne çıkan başlık ve alt metin)
- Neden Biz? (3 Ana Özellik)
- Özel Ders Hizmetleri (Ders Türleri)
- Başarı İstatistikleri (Eğitmen, Öğrenci, Memnuniyet Oranı)
- 3 Adımda Başvuru Süreci
- Referanslar ve Öğrenci Yorumları
- Çağrı Butonu (CTA)

### 2.2 Dersler Sayfaları
- Lise Özel Ders Sayfası
- Ortaokul Özel Ders Sayfası
- İlkokul Özel Ders Sayfası
- Diğer Konu Bazlı Özel Ders Sayfaları (Matematik, Fizik, vb.)

### 2.3 Ücretler Sayfası
- Online ve Yüz Yüze Paketler
- Ders Paketleri (15 Ders, 25 Ders, 50 Ders, 120 Ders)
- Fiyat Hesaplama ve Karşılaştırma
- Özel Paket Talebi Formu

### 2.4 Eğitmenler Sayfası
- Eğitmen Profilleri
- Eğitmen Arama/Filtreleme
- Eğitmen Karşılaştırma
- Eğitmen-Öğrenci Eşleştirme Sistemi

### 2.5 İletişim Sayfası
- İletişim Bilgileri
- Harita
- İletişim Formu
- Sık Sorulan Sorular

## 3. Bileşen Yapısı (Components)

Projede kullanılacak temel bileşenler:

### 3.1 Temel Bileşenler (Core Components)
- Header/Navbar
- Footer
- Layout
- SEO
- Button
- Card
- Modal
- Form Elements
- Alert/Notification

### 3.2 Özelleştirilmiş Bileşenler (Custom Components)
- TeacherCard
- CourseCard
- PricingTable
- TestimonialSlider
- StatsCounter
- ProcessSteps
- FAQAccordion
- ContactForm
- SearchFilter

## 4. Veri Yapısı

### 4.1 Sabit Veriler (Static Data)
- Kurs Türleri
- Fiyat Paketleri
- SSS
- İstatistikler

### 4.2 Dinamik Veriler (Backend veya API ile entegre edilebilir)
- Eğitmen Profilleri
- Öğrenci Yorumları
- Blog/Haberler
- İletişim Formu Kayıtları

## 5. Tasarım Özellikleri

### 5.1 Genel Tasarım Özellikleri
- Duyarlı (Responsive) Tasarım
- Marka Renkleri: Siyah, Beyaz, Kırmızı
- Modern ve Profesyonel Görünüm
- Kolay Kullanılabilir Arayüz

### 5.2 Önemli UI Elementleri
- "Talep Oluştur" Butonu (CTA)
- Ders Paketleri Kartları
- 3 Adım Başvuru Süreci
- İstatistik Sayaçları
- Eğitmen Karşılaştırma Tablosu

## 6. Fonksiyonel Özellikler

### 6.1 Temel Özellikler
- Ders Talep Formu
- Eğitmen Arama ve Filtreleme
- Fiyat Hesaplama
- İletişim Formu
- Öğrenci Girişi/Üyelik

### 6.2 Gelişmiş Özellikler (İleriki aşamalarda eklenebilir)
- Online Ödeme Sistemi
- Canlı Sohbet Desteği
- Eğitmen-Öğrenci Eşleştirme Algoritması
- Ders Programı Takvimi
- Çevrimiçi Ders Platformu Entegrasyonu

## 7. Performans ve SEO

### 7.1 Performans Hedefleri
- Sayfa Yükleme Süresi: < 3 saniye
- Google Lighthouse Skorları: > 90
- Optimize Edilmiş Görseller
- Kod Bölme (Code Splitting)

### 7.2 SEO Stratejisi
- Anlamlı URL Yapısı
- Meta Etiketleri
- Sitemap
- Yapılandırılmış Veri (Schema.org)
- İçerik Stratejisi
- Alt Etiketleri

## 8. Uygulama Süreci

### 8.1 Geliştirme Aşamaları
1. Proje Kurulumu ve Konfigürasyonu
2. Temel Bileşenlerin Geliştirilmesi
3. Sayfa Yapılarının Oluşturulması
4. Sayfa İçeriklerinin Entegrasyonu
5. Stil ve Animasyonların Uygulanması
6. Test ve Hata Ayıklama
7. SEO Optimizasyonu
8. Dağıtım ve Yayınlama

### 8.2 Dosya Yapısı
```
ozel-ders/
├── src/
│   ├── app/
│   │   ├── page.js           # Ana Sayfa
│   │   ├── layout.js         # Ana Layout
│   │   ├── globals.css       # Global CSS
│   │   ├── dersler/
│   │   │   ├── lise/
│   │   │   ├── ortaokul/
│   │   │   └── ...
│   │   ├── ucretler/
│   │   ├── egitmenler/
│   │   └── iletisim/
│   ├── components/
│   │   ├── common/           # Ortak Bileşenler
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   ├── Button.js
│   │   │   └── ...
│   │   └── sections/         # Sayfa Bölümleri
│   │       ├── Hero.js
│   │       ├── Features.js
│   │       ├── PricingSection.js
│   │       └── ...
│   ├── data/                 # Statik Veriler
│   │   ├── courses.js
│   │   ├── pricing.js
│   │   ├── faq.js
│   │   └── ...
│   ├── styles/               # CSS Modülleri
│   │   ├── Header.module.css
│   │   ├── Button.module.css
│   │   └── ...
│   └── utils/                # Yardımcı Fonksiyonlar
│       ├── api.js
│       ├── helpers.js
│       └── ...
├── public/                   # Statik Dosyalar
│   ├── images/
│   ├── favicon.ico
│   └── ...
├── DOKUMANTASYON.md          # Bu dosya
├── package.json
└── next.config.js
```

## 9. Gelecek Geliştirmeler

### 9.1 Kısa Vadeli Geliştirmeler
- Blog Bölümü Eklemek
- Daha Fazla Dil Desteği
- Gelişmiş Filtreleme Seçenekleri
- Daha Fazla Ödeme Seçeneği

### 9.2 Uzun Vadeli Geliştirmeler
- Admin Paneli
- Mobil Uygulama
- Online Ders Platformu
- Eğitmen Değerlendirme Sistemi
- İçerik Yönetim Sistemi (CMS)

## 10. Sonuç

Bu dokümantasyon, özel ders web sitesi projesinin tüm yönlerini kapsamaktadır. Projenin geliştirilmesi sırasında bu dokümana başvurarak, tutarlı ve eksiksiz bir web sitesi oluşturulabilir. Projede kullanılacak teknolojiler, sayfa yapısı, bileşenler ve veri yapısı açıkça tanımlanmıştır.

Dokümantasyon, projenin ilerleyişine göre güncellenebilir ve genişletilebilir. 