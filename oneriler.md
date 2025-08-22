# Özel Ders Projesi İyileştirme Önerileri

Bu doküman, Özel Ders web sitesi projesinin kullanıcı deneyimini ve kod kalitesini artırmak için öneriler içermektedir.

## 1. İletişim Bilgilerinde Tutarsızlık

- **Sorun:** Projede farklı telefon numaraları ve WhatsApp linkleri kullanılmış ("+905XXXXXXXXX", "+905001234567", "+908501234567")
- **Önerilen Çözüm:** Tüm iletişim bilgilerini merkezi bir yerden yönetecek bir `constants.js` dosyası oluşturulmalı:

```javascript
// src/constants.js
export const CONTACT_INFO = {
  PHONE: "+908501234567",
  PHONE_DISPLAY: "(0850) 123 4567",
  WHATSAPP: "908501234567",
  EMAIL: "iletisim@ozelders.com",
  ADDRESS: "PO Plaza K4 Kozyatağı/İstanbul"
};
```

## 2. Buton Stilleri ve Tutarlılık

- **Sorun:** Hem `globals.css`, hem de `Button.module.css`'de buton stilleri tanımlanmış, bazı sayfalarda birbirleriyle uyumsuz butonlar kullanılıyor
- **Önerilen Çözüm:** 
  - Tüm butonlar için `Button` bileşenini kullanmak
  - `Button.module.css`'i ana stil kaynağı olarak belirlemek
  - Bootstrap class'larını kullanmak yerine bileşen prop'larını kullanmak

## 3. Responsive Tasarım İyileştirmeleri

- **Sorun:** Mobil görünümde bazı içerikler ve butonlar düzgün hizalanmıyor
- **Önerilen Çözüm:**
  - Tüm sayfaların mobil görünümünü test etmek
  - `DersDetayTemplate` ve `LgsHazirlikPage.module.css`'te mobil stillerini geliştirilmek
  - Daha tutarlı responsive sınıflar için `.responsive-grid` ve `.responsive-flex` gibi yardımcı sınıflar eklemek

## 4. Sayfa Yönlendirmeleri

- **Sorun:** Header ve Footer'daki bazı linkler örtüşmüyor
- **Önerilen Çözüm:**
  - Sayfalar arası tutarlı menü navigasyonu için tüm linkleri gözden geçirmek
  - Özellikle Header'daki "Özel Dersler" menüsü ile Footer'daki "Özel Dersler" listesinin aynı sayfaları göstermesini sağlamak

## 5. SEO ve Meta Etiketler

- **Sorun:** Meta bilgileri tüm sayfalarda tutarlı değil
- **Önerilen Çözüm:**
  - Tüm sayfalar için uygun `metadata` export'larını tamamlamak
  - Sosyal medya paylaşımları için OpenGraph ve Twitter kartları eklemek

## 6. Kod Tekrarının Azaltılması

- **Sorun:** YKS ve LGS sayfalarındaki benzer kodlar tekrarlanıyor
- **Önerilen Çözüm:**
  - Ortak yapılar için yeni bileşenler oluşturmak (örn: `SubjectGroups.js`)
  - Data-driven yaklaşımla kodu daha kısa ve bakımı kolay hale getirmek

## 7. Hata ve Loading Durumları

- **Sorun:** Olası ağ hataları veya yükleme süreçleri için yeterli görsel geri bildirim yok
- **Önerilen Çözüm:**
  - Veri yüklenmesi sırasında iskelet ekranlar (skeleton screens) göstermek
  - Bileşenlere `isLoading`, `isError` prop'ları eklemek 

## 8. Erişilebilirlik İyileştirmeleri

- **Sorun:** ARIA özellikleri ve klavye navigasyonu için bazı iyileştirmeler gerekli
- **Önerilen Çözüm:**
  - Tüm interaktif öğelere uygun `aria-*` özellikleri eklemek
  - Focus stilleri ve klavye navigasyonunu iyileştirmek

## 9. Performans Optimizasyonu

- **Sorun:** Bazı CSS dosyaları çok büyük ve gereksiz stiller içeriyor
- **Önerilen Çözüm:**
  - CSS kodlarını optimize etmek ve tekrarlayan stilleri birleştirmek
  - Kullanılmayan CSS kodlarını temizlemek

## 10. Sabit İçerik Yönetimi

- **Sorun:** Sabit içerikler (telefon, adres, vs) kodun içine gömülü
- **Önerilen Çözüm:**
  - Bir CMS entegrasyonu veya en azından `data/` klasöründe JSON dosyalarında sabit içerikleri saklamak
  - Böylece içerik değişikliklerinde kod değişikliği gerekmeyecek

## 11. Dark Mode İyileştirmesi

- **Sorun:** Dark mode desteği var ama bazı bileşenler dark mode'a tam uyumlu değil
- **Önerilen Çözüm:**
  - Tüm bileşenlerin dark mode uyumluluğunu test etmek ve iyileştirmek
  - `theme-light` ve `theme-dark` class'larını kullanmak

## 12. Form Validasyon ve Geri Bildirim

- **Sorun:** Form elemanları için yeterli validasyon ve kullanıcı geri bildirimi yok
- **Önerilen Çözüm:**
  - Form validasyonu için tutarlı bir yaklaşım benimsemek
  - Formlar gönderildikten sonra kullanıcıya anlamlı geri bildirimler sağlamak

## 13. Animasyon ve Geçişlerin Optimize Edilmesi

- **Sorun:** Farklı sayfalarda farklı animasyon yaklaşımları kullanılmış
- **Önerilen Çözüm:**
  - `framer-motion` kullanımını tüm sayfalarda standartlaştırmak
  - Performans için `will-change` ve `transform` özelliklerini daha verimli kullanmak

## 14. İçerik Hiyerarşisi

- **Sorun:** Sayfalardaki içerik organizasyonu ve hiyerarşisi daha net olabilir
- **Önerilen Çözüm:**
  - H1, H2, H3 gibi başlık etiketlerinin doğru kullanımını sağlamak
  - Sayfa içeriği daha iyi bölümlere ayırarak okunabilirliği artırmak

## 15. Dokümantasyon İyileştirmesi

- **Sorun:** Proje dökümantasyonu yetersiz
- **Önerilen Çözüm:**
  - README.md dosyasını geliştirmek
  - Bileşenler için kullanım örnekleri ve prop açıklamaları içeren bir dökümantasyon eklemek 