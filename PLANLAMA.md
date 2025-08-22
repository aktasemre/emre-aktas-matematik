# Emre Aktaş - Matematik Özel Ders Web Sitesi Planlama Dokümanı

## 📋 Proje Genel Bakış

Bu proje, matematik öğretmeni **Emre Aktaş**'ın kişiselleştirilmiş özel ders hizmetlerini tanıtan profesyonel bir web sitesidir. Site, LGS, TYT/AYT ve okula yardımcı matematik dersleri odaklı olup, potansiyel öğrenci ve velilere ulaşmayı hedeflemektedir.

### 🎯 Ana Hedefler
- Emre Aktaş'ın matematik özel ders hizmetlerini tanıtmak
- Kişiselleştirilmiş eğitim metodolojisini vurgulamak
- LGS, TYT/AYT ve okul başarısı odaklı hedef kitleye ulaşmak
- Profesyonel ve güven veren bir marka imajı oluşturmak
- Potansiyel öğrenci/veli başvurularını artırmak

---

## 🔍 Mevcut Durum Analizi

### ✅ Mevcut Teknolojiler
- **Framework**: Next.js 15.3.0
- **React**: 18.3.1 (React 19 henüz yok)
- **Stil**: CSS Modules
- **Animasyon**: Framer Motion
- **İkonlar**: React Icons
- **Slider**: React Slick

### ❌ Eksik Teknolojiler (Hedeflenen)
- **React**: 19 (yükseltme gerekli)
- **TypeScript**: Henüz kullanılmıyor
- **NextAuth.js**: Kimlik doğrulama yok
- **MongoDB**: Veritabanı yok
- **Cloudinary**: Medya yönetimi yok
- **Lexical Editor**: İçerik editörü yok

### 🚨 Tespit Edilen Sorunlar

#### 1. Konsept Uyumsuzlukları
- **Çok-eğitmen yapısı**: Dokümantasyonda "eğitmen arama/filtreleme" var, ancak tek eğitmen konsepti
- **Çok-branş genelliği**: Matematik dışı branşlar mevcut, sadece matematik odaklı olmalı
- **Genel kurs dili**: Kişisel marka ve bire bir çalışma vurgusu yetersiz

#### 2. Teknik Sorunlar
- **Metadata hatası**: `next.config.mjs` içinde yanlış yerde tanımlanmış
- **Görsel yolları**: OG/Twitter görsellerinde `/public/` öneki hatalı
- **İletişim tutarsızlığı**: Farklı telefon/WhatsApp formatları
- **React 19 uyumsuzluğu**: Henüz React 18 kullanılıyor

#### 3. İçerik Eksiklikleri
- Emre Aktaş biyografi/hakkımda sayfası yok
- LGS, TYT/AYT, okul yardımcı alt sayfaları eksik
- Ücretler sayfası yok
- Referanslar sayfası yok
- Blog/duyuru sistemi yok

---

## 🎯 Önerilen Bilgi Mimarisi

### Ana Sayfalar
1. **Ana Sayfa** (`/`)
   - Hero: "Matematik Öğretmeni Emre Aktaş – Kişiselleştirilmiş Özel Ders"
   - Metodoloji özeti
   - İstatistikler (öğrenci sayısı, başarı oranı)
   - Testimonials
   - Net CTA (WhatsApp/Telefon)

2. **Matematik Özel Ders** (`/matematik`)
   - Faydalar ve avantajlar
   - Metodoloji özeti
   - Sıkça Sorulan Sorular
   - CTA

3. **LGS Hazırlık** (`/lgs`)
   - LGS matematik odaklı program
   - Başarı hikayeleri
   - Çalışma planı örneği
   - CTA

4. **TYT/AYT Hazırlık** (`/tyt-ayt`)
   - TYT/AYT matematik programı
   - Konu dağılımı
   - Sınav stratejileri
   - CTA

5. **Okula Yardımcı** (`/okul-destek`)
   - Ortaokul/Lise matematik desteği
   - Okul müfredatı uyumluluğu
   - Ödev takibi
   - CTA

6. **Metodoloji** (`/metodoloji`)
   - 4 adımlı çalışma döngüsü detayı
   - Kişiselleştirme süreci
   - Veli bilgilendirme sistemi
   - CTA

7. **Hakkımda** (`/hakkimda`)
   - Emre Aktaş biyografisi
   - Eğitim geçmişi
   - Deneyim ve uzmanlık alanları
   - CTA

8. **Ücretler** (`/ucretler`)
   - Şeffaf fiyatlandırma
   - Paket seçenekleri
   - Ödeme koşulları
   - CTA

9. **Referanslar** (`/referanslar`)
   - Öğrenci görüşleri
   - Veli yorumları
   - Başarı hikayeleri
   - CTA

10. **İletişim/Randevu** (`/iletisim`)
    - İletişim formu
    - WhatsApp/Telefon butonları
    - Adres bilgileri
    - CTA

---

## 🛠️ Teknik Yol Haritası

### Faz 0: Stack Uyumu (1-2 gün)
- [ ] React 19 yükseltmesi
- [ ] TypeScript kurulumu ve konfigürasyonu
- [ ] `next-cloudinary` kurulumu (`CLOUDINARY_CLOUD_NAME=dfsxu6i76`)
- [ ] NextAuth.js (JWT) kurulumu ve `auth.ts` köke taşıma
- [ ] MongoDB (Atlas) bağlantısı
- [ ] Lexical Editor temel yapılandırması
- [ ] `.env` dosyası düzenlemesi

### Faz 1: Bilgi Mimarisi ve Sayfa İskeleti (2-3 gün)
- [ ] `app/` altında yeni route'lar oluşturma
- [ ] `force-dynamic` gereken sayfalarda işaretleme
- [ ] Dinamik route parametreleri async uyumu
- [ ] Temel layout ve navigation güncellemesi

### Faz 2: İçerik Bileşenleri (3-4 gün)
- [ ] `Methodology` bileşenini 4 adımlı döngüye göre güncelleme
- [ ] `DersDetayTemplate`'i kişisel markaya göre sadeleştirme
- [ ] `Header/Navbar` ve `Footer` link eşleştirmesi
- [ ] `CONTACT_INFO` merkezi sabiti oluşturma
- [ ] Tekil CTA blokları tasarımı

### Faz 3: Entegrasyonlar (4-5 gün)
- [ ] İletişim/başvuru formu → MongoDB `Lead` koleksiyonu
- [ ] E-posta bildirim sistemi (opsiyonel)
- [ ] `Testimonial` koleksiyonu ve admin paneli
- [ ] Lexical Editor ile içerik CRUD işlemleri
- [ ] Cloudinary medya upload sistemi

### Faz 4: SEO ve Analitik (2-3 gün)
- [ ] Sayfa-bazlı `metadata` doldurma
- [ ] OG/Twitter görsellerini düzeltme
- [ ] `schema.org` yapılandırılmış veri ekleme
- [ ] Google Analytics ve event ölçümü
- [ ] Sitemap oluşturma

### Faz 5: Performans ve Erişilebilirlik (2-3 gün)
- [ ] Görsel optimizasyonu ve `next/image` kullanımı
- [ ] Kritiklik önceliği belirleme
- [ ] A11y: odak, ARIA, kontrast iyileştirmeleri
- [ ] Lighthouse denetimi ve optimizasyon
- [ ] Core Web Vitals iyileştirmeleri

### Faz 6: Yayın ve İterasyon (1-2 gün)
- [ ] Vercel deploy konfigürasyonu
- [ ] Çevresel değişkenler ayarlama
- [ ] Production testleri
- [ ] Geri bildirim döngüsü kurulumu

---

## 📊 Veri Modeli (MongoDB)

### Lead Koleksiyonu
```javascript
{
  _id: ObjectId,
  name: String,
  phone: String,
  email: String,
  grade: String, // "8. Sınıf", "12. Sınıf", vb.
  examTarget: String, // "LGS", "TYT", "AYT", "Okul"
  subject: String, // "Matematik"
  note: String,
  source: String, // "website", "whatsapp", "phone"
  status: String, // "new", "contacted", "converted", "lost"
  createdAt: Date,
  updatedAt: Date
}
```

### Testimonial Koleksiyonu
```javascript
{
  _id: ObjectId,
  author: String,
  relation: String, // "öğrenci", "veli"
  content: Object, // Lexical JSON
  rating: Number, // 1-5
  examType: String, // "LGS", "TYT", "AYT", "Okul"
  isPublished: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Post Koleksiyonu (Opsiyonel)
```javascript
{
  _id: ObjectId,
  title: String,
  slug: String,
  content: Object, // Lexical JSON
  excerpt: String,
  tags: [String],
  coverImage: String, // Cloudinary URL
  isPublished: Boolean,
  publishedAt: Date,
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🎨 İçerik ve Dil Stratejisi

### Ton ve Ses
- **Güven veren**: Deneyim ve uzmanlık vurgusu
- **Net ve kişisel**: Direkt hitap, samimi ama profesyonel
- **Çözüm odaklı**: Problem → Çözüm → Sonuç akışı

### Ana Mesajlar
1. **Kişiselleştirilmiş Plan**: Her öğrenciye özel program
2. **Düzenli Takip**: Haftalık kontrol ve geri bildirim
3. **Ölçülebilir İlerleme**: Net hedefler ve sonuçlar
4. **LGS-TYT Odaklı**: Sınav başarısı garantisi

### Hedef Kitle Hitabı
- **Öğrenciler**: "Matematik artık korkutucu değil"
- **Veliler**: "Çocuğunuzun akademik geleceğini güvence altına alın"
- **LGS Hedefi**: "Hedeflediğiniz liseye bir adım daha yaklaşın"
- **TYT/AYT Hedefi**: "Üniversite hayalinizi gerçekleştirin"

### CTA Stratejisi
- **Tek numara**: Tutarlı telefon numarası
- **Tek WhatsApp**: Standart mesaj şablonu
- **Her sayfada**: Tekrarlı ve tutarlı çağrı butonları
- **Acil eylem**: "Hemen başlayın", "Ücretsiz danışmanlık"

---

## 🔧 Teknik Gereksinimler

### Yeni Paketler
```json
{
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "next": "15.3.0",
    "typescript": "^5.0.0",
    "@types/react": "^19.0.0",
    "@types/node": "^20.0.0",
    "next-auth": "^5.0.0",
    "mongodb": "^6.0.0",
    "next-cloudinary": "^5.0.0",
    "@lexical/react": "^0.12.0",
    "zod": "^3.22.0",
    "react-hook-form": "^7.48.0",
    "@hookform/resolvers": "^3.3.0"
  }
}
```

### Çevresel Değişkenler
```env
# Database
MONGODB_URI=mongodb+srv://...

# Authentication
NEXTAUTH_SECRET=...
NEXTAUTH_URL=http://localhost:3000

# Cloudinary
CLOUDINARY_CLOUD_NAME=dfsxu6i76
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...

# Contact
CONTACT_PHONE=+905XXXXXXXXX
CONTACT_WHATSAPP=905XXXXXXXXX
CONTACT_EMAIL=emre@ozelders.com
```

---

## 📈 Başarı Kriterleri

### Teknik Kriterler
- [ ] Lighthouse Performans > 90
- [ ] Lighthouse SEO > 90
- [ ] Lighthouse Erişilebilirlik > 90
- [ ] Sayfa yükleme süresi < 3 saniye
- [ ] Core Web Vitals yeşil

### İçerik Kriterleri
- [ ] Tüm sayfalarda tutarlı tek telefon/WhatsApp
- [ ] Emre Aktaş odaklı kişisel marka anlatısı
- [ ] Matematik odaklı içerik tutarlılığı
- [ ] Net CTA'lar her sayfada mevcut

### Fonksiyonel Kriterler
- [ ] Başvuru formu MongoDB'ye kayıt
- [ ] WhatsApp/Telefon butonları çalışıyor
- [ ] Tüm sayfalar responsive
- [ ] SEO meta etiketleri doğru

### İş Kriterleri
- [ ] Aylık ziyaretçi artışı %20+
- [ ] Form dönüşüm oranı %5+
- [ ] Sayfa başına kalma süresi 2+ dakika
- [ ] Mobil kullanıcı oranı %60+

---

## 🚨 Acil Düzeltmeler (İlk Sprint)

### 1. Metadata Düzeltmeleri
- [ ] `next.config.mjs`'den metadata kaldırma
- [ ] `app/layout.tsx`'e metadata taşıma
- [ ] OG/Twitter görsel yollarını düzeltme

### 2. İletişim Tutarlılığı
- [ ] `CONTACT_INFO` sabiti oluşturma
- [ ] Tüm sayfalarda tek numara kullanma
- [ ] WhatsApp linklerini standartlaştırma

### 3. Konsept Uyumluluğu
- [ ] Çok-eğitmen referanslarını kaldırma
- [ ] Matematik odaklı içerik filtreleme
- [ ] Kişisel marka diline geçiş

### 4. Sayfa İskeletleri
- [ ] Eksik sayfaları oluşturma
- [ ] Navigation menüsünü güncelleme
- [ ] Footer linklerini düzenleme

---

## 📝 Sonraki Adımlar

1. **Teknik kurulum** (Faz 0) ile başla
2. **İçerik planlaması** paralel yürüt
3. **Tasarım tutarlılığı** kontrol et
4. **Test ve optimizasyon** sürekli yap
5. **Analitik takibi** kur ve izle

Bu planlama dokümanı, projenin gelişimi sürecinde güncellenebilir ve genişletilebilir.
