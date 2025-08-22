# SEO ve Analytics Kurulum Rehberi

Bu rehber, Emre Aktaş Matematik web sitesi için SEO ve Analytics kurulumunu detaylandırır.

## ✅ **Tamamlanan Kurulumlar**

### Google Search Console
- ✅ **Doğrulama kodları entegre edildi:**
  - `fU8GiG_ZqzPKVBUJegGQcEfrAB5isOnHhi32WU3t0f4`
  - `UMyzKAip0OjAEJSWajHZicW82U6ZK8URD5v-_GU-QPQ`
- ✅ **HTML doğrulama dosyası:** `google6aad8d5bf8343da0.html`
- ✅ **Meta etiketleri:** Layout.tsx'te yapılandırıldı

## 📊 **Google Analytics 4 (GA4) Kurulumu**

### 1. GA4 Hesabı Oluşturma
1. [Google Analytics](https://analytics.google.com/) adresine gidin
2. "Ölçüm başlat" butonuna tıklayın
3. Hesap adı: "Emre Aktaş Matematik"
4. Mülk adı: "emreaktas-matematik.com"
5. Zaman dilimi: "Türkiye (UTC+3)"
6. Para birimi: "Türk Lirası (TRY)"

### 2. GA4 Ölçüm Kimliği Alma
1. Admin > Veri Akışları > Web
2. Site URL'si: `https://emreaktas-matematik.com`
3. Site adı: "Emre Aktaş Matematik"
4. Ölçüm kimliği (G-XXXXXXXXXX) kopyalayın

### 3. Environment Variable Ekleme
```bash
# .env.local dosyasına ekleyin
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 🏷️ **Google Tag Manager (GTM) Kurulumu**

### 1. GTM Hesabı Oluşturma
1. [Google Tag Manager](https://tagmanager.google.com/) adresine gidin
2. Hesap adı: "Emre Aktaş Matematik"
3. Ülke: "Türkiye"
4. Kapsayıcı adı: "Web Sitesi"
5. Platform: "Web"

### 2. GTM Kapsayıcı Kimliği Alma
1. Kapsayıcı kimliği (GTM-XXXXXXXX) kopyalayın
2. Environment variable ekleyin:

```bash
# .env.local dosyasına ekleyin
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXXX
```

### 3. GTM Doğrulama Sorunu Çözümü
- ❌ **Sorun:** "Sitenizin ana sayfasında Google Etiket Yöneticisi kapsayıcı kimliği bulamadık"
- ✅ **Çözüm:** GTM ID alındıktan sonra otomatik olarak aktif hale gelecek
- ✅ **Geçici çözüm:** GTM ID geçersizse bileşen render edilmiyor

## 🔍 **Google Search Console Kurulumu**

### ✅ Tamamlanan Adımlar
1. ✅ Search Console hesabı oluşturuldu
2. ✅ Site URL'si: `https://emreaktas-matematik.com`
3. ✅ Doğrulama kodları entegre edildi
4. ✅ HTML doğrulama dosyası oluşturuldu

### Doğrulama Yöntemleri
- ✅ **Meta tag:** `fU8GiG_ZqzPKVBUJegGQcEfrAB5isOnHhi32WU3t0f4`
- ✅ **HTML file:** `google6aad8d5bf8343da0.html`
- ✅ **Google Tag Manager:** GTM ID alındıktan sonra

## 📈 **Yandex Webmaster Kurulumu**

### 1. Yandex Webmaster Hesabı
1. [Yandex Webmaster](https://webmaster.yandex.com/) adresine gidin
2. Site ekle: `https://emreaktas-matematik.com`
3. Doğrulama yöntemi: "Meta tag"

### 2. Doğrulama Kodu
```bash
# .env.local dosyasına ekleyin
NEXT_PUBLIC_YANDEX_VERIFICATION=your-yandex-verification-code
```

## 🔍 **Bing Webmaster Kurulumu**

### 1. Bing Webmaster Hesabı
1. [Bing Webmaster](https://www.bing.com/webmasters) adresine gidin
2. Site ekle: `https://emreaktas-matematik.com`
3. Doğrulama yöntemi: "Meta tag"

### 2. Doğrulama Kodu
```bash
# .env.local dosyasına ekleyin
NEXT_PUBLIC_BING_VERIFICATION=your-bing-verification-code
```

## 📱 **Sosyal Medya Meta Etiketleri**

### Open Graph ve Twitter Cards
- ✅ Zaten layout.tsx'te yapılandırıldı
- ✅ og-image.jpg dosyası public klasörüne eklenmeli
- ✅ Favicon dosyaları eklenmeli

## 🎯 **Analytics Events Tracking**

### Mevcut Events
- ✅ WhatsApp tıklamaları
- ✅ Telefon aramaları
- ✅ Sayfa görüntülemeleri
- ✅ İletişim formu gönderimleri

### Eklenebilecek Events
- 📊 Hizmet sayfası görüntülemeleri
- 📊 Fiyat sayfası görüntülemeleri
- 📊 Referans sayfası görüntülemeleri
- 📊 Scroll derinliği
- 📊 Sayfa kalma süresi

## 🔧 **SEO Optimizasyonları**

### Mevcut SEO Özellikleri
- ✅ Meta etiketleri (title, description, keywords)
- ✅ Open Graph ve Twitter Cards
- ✅ Structured Data (JSON-LD)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Hreflang (Türkçe)
- ✅ Google Search Console doğrulama

### Eklenebilecek SEO Özellikleri
- 📊 Breadcrumbs
- 📊 FAQ Schema
- 📊 Local Business Schema
- 📊 Review Schema
- 📊 Video Schema (gelecekte)

## 📊 **Performance Monitoring**

### Core Web Vitals
- ✅ LCP (Largest Contentful Paint)
- ✅ FID (First Input Delay)
- ✅ CLS (Cumulative Layout Shift)

### Monitoring Araçları
- 📊 Google PageSpeed Insights
- 📊 GTmetrix
- 📊 WebPageTest
- 📊 Lighthouse

## 🚀 **Deployment Sonrası Kontroller**

### 1. Analytics Kontrolleri
- [ ] GA4 real-time raporları çalışıyor mu?
- [ ] GTM container yükleniyor mu? (GTM ID alındıktan sonra)
- [ ] Events tracking çalışıyor mu?

### 2. SEO Kontrolleri
- [x] Google Search Console'da site doğrulandı mı?
- [ ] Sitemap.xml erişilebilir mi?
- [ ] Robots.txt doğru mu?
- [ ] Meta etiketleri doğru mu?

### 3. Performance Kontrolleri
- [ ] PageSpeed Insights skorları
- [ ] Core Web Vitals
- [ ] Mobile uyumluluk

## 📋 **Kontrol Listesi**

### Kurulum Öncesi
- [ ] Domain alınmış mı?
- [ ] SSL sertifikası aktif mi?
- [ ] Hosting hazır mı?

### Kurulum Sonrası
- [x] Google Search Console doğrulandı
- [ ] GA4 ölçüm kimliği alındı mı?
- [ ] GTM kapsayıcı kimliği alındı mı?
- [ ] Environment variables ayarlandı mı?
- [ ] Analytics tracking çalışıyor mu?
- [ ] Sitemap gönderildi mi?
- [ ] Robots.txt test edildi mi?

### Sürekli İzleme
- [ ] Haftalık Analytics raporları
- [ ] Aylık SEO performans kontrolü
- [ ] Quarterly Core Web Vitals kontrolü
- [ ] Yıllık domain yenileme

## 🔧 **Hızlı Kurulum Komutları**

### 1. GA4 Ölçüm Kimliği Ekleme
```bash
# .env.local dosyasına ekleyin
echo "NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX" >> .env.local
```

### 2. GTM Kapsayıcı Kimliği Ekleme
```bash
# .env.local dosyasına ekleyin
echo "NEXT_PUBLIC_GTM_ID=GTM-XXXXXXXX" >> .env.local
```

### 3. Projeyi Yeniden Başlatma
```bash
npm run build
npm start
```

## 📞 **Destek**

Herhangi bir sorun yaşarsanız:
- 📧 Email: aktasemre1988@gmail.com
- 📱 WhatsApp: +90 542 451 37 69
- 🌐 Website: https://emreaktas-matematik.com

## 🎯 **Sonraki Adımlar**

1. **GA4 Ölçüm Kimliği Alın**
2. **GTM Kapsayıcı Kimliği Alın**
3. **Environment variables ayarlayın**
4. **Projeyi deploy edin**
5. **Search Console'da sitemap gönderin**
6. **Analytics raporlarını kontrol edin**
