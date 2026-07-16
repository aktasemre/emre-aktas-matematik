# Matematik Akademi Uygulama Görevleri

Tarih: 16 Temmuz 2026
Dayanak: `docs/12-dersflix-ilhamli-yenileme-plani.md`

Bu liste, Dersflix'i birebir kopyalamadan Matematik Akademi'nin teklifini, ilk ekranını ve hareket dilini geliştirmek için uygulanabilir işlere ayrılmıştır.

## Öncelik Sırası

| Kod | Görev | Öncelik | Durum | Bağımlılık |
| --- | --- | --- | --- | --- |
| MA-01 | Doğrulanmamış başarı iddialarına karşı otomatik koruma testi | P0 | Tamamlandı | Yok |
| MA-02 | Dersflix hareket yapısının teknik incelemesi | P0 | Tamamlandı | Yok |
| MA-03 | Özgün öğrenme döngüsü görselini oluşturma | P0 | Tamamlandı | MA-02 |
| MA-04 | Öğrenme döngüsünü ana sayfa ilk ekranına yerleştirme | P0 | Tamamlandı | MA-03 |
| MA-05 | Mobil, erişilebilirlik ve performans doğrulaması | P0 | Tamamlandı | MA-04 |
| MA-06 | Ders yöntemini ürünleştiren ad ve metin sistemi | P1 | Başladı | MA-04 |
| MA-07 | Online ve yüz yüze nihai fiyat kararı | P1 | İşletme kararı bekliyor | Yok |
| MA-08 | Şeffaf fiyat bölümü ve ilgili metinleri güncelleme | P1 | Blokeli | MA-07 |
| MA-09 | Canlı yayın sonrası arama önbelleğini yeniletme | P2 | Bekliyor | Yayın |
| MA-10 | İlk ücretsiz öğrenci aracını seçme ve geliştirme | P2 | Bekliyor | MA-05 |

## Görev Ayrıntıları

### MA-01 — Doğrulanmamış iddiaları engelle

Amaç: Güncel kodda bulunmayan `1000+ öğrenci`, `%98 başarı` ve benzeri doğrulanmamış iddiaların daha sonra yanlışlıkla geri eklenmesini önlemek.

Kabul ölçütleri:

- Test yalnızca yayımlanan uygulama kaynaklarını tarar; dokümanlardaki değerlendirme notlarını yanlış pozitif saymaz.
- Yasaklı ifadelerden biri `src` altına eklendiğinde test başarısız olur.
- Mevcut test paketi başarıyla çalışır.

Not: Eski Git geçmişi silinmeyecek veya yeniden yazılmayacak.

### MA-02 — Dersflix animasyonunu teknik olarak çözümle

Amaç: Sol/sağ ilk ekran hareketinin hangi tekniklerle kurulduğunu ve hangi kısımların performans maliyeti oluşturduğunu belirlemek.

Kabul ölçütleri:

- Slider, SVG, CSS, video veya JavaScript kullanımı sınıflandırılır.
- Mobil davranış, azaltılmış hareket tercihi ve erişilebilirlik kontrol edilir.
- Matematik Akademi için telif açısından özgün ve daha hafif uygulama kararı yazılır.

### MA-03 — Özgün öğrenme döngüsü görselini oluştur

Amaç: Matematik Akademi'nin ders yaklaşımını `Seviye → Plan → Çözüm → Analiz` sırasıyla anlatan özgün bir hareketli görsel üretmek.

Kabul ölçütleri:

- Bileşen Matematik Akademi'nin mevcut lacivert/teal/altın renk diliyle uyumludur.
- Dersflix'in görseli, metni, yerleşimi veya marka unsurları kopyalanmaz.
- Harici animasyon paketi, video ve büyük görsel dosyası eklenmez.
- Hareket yalnızca sakin, sürekli olmayan veya düşük yoğunluklu CSS animasyonlarıyla sağlanır.
- `prefers-reduced-motion` açıkken hareket tamamen durur.

### MA-04 — Ana sayfaya yerleştir

Amaç: İlk ekranı masaüstünde dengeli iki sütunlu, mobilde ise mesaj öncelikli tek akış hâline getirmek.

Kabul ölçütleri:

- Başlık, açıklama ve ana iletişim düğmesi ilk bakışta görünür kalır.
- Görsel masaüstünde metni destekler; mobilde çağrı düğmesinin önüne geçmez.
- 320 px genişlikten itibaren yatay taşma oluşmaz.
- JavaScript kapalıyken bile görselin anlamı kaybolmaz.

### MA-05 — Kalite doğrulaması

Amaç: Yeni ilk ekranın tasarım, erişilebilirlik ve performans açısından güvenli olduğunu kanıtlamak.

Kabul ölçütleri:

- 390 px mobil ve 1440 px masaüstü ekran görüntüleri incelenir.
- Yatay taşma, kesilmiş metin ve üst üste binme bulunmaz.
- Dekoratif görsel ekran okuyucu akışına ek gürültü katmaz.
- Hareket azaltma kuralı kaynak kodda doğrulanır.
- Lint, tip kontrolü, testler ve üretim derlemesi geçer.

### MA-06 — Ders yöntemini adlandır

Amaç: Tek seansı değil, sürekli ölçüm ve takip sistemini anlatan hatırlanabilir bir ürün dili oluşturmak.

İlk çalışma adı: **Matematik Akademi Takip Döngüsü**.

Kabul ölçütleri:

- Ad, kayıtlı başka markayı taklit etmez ve Dersflix'in K.Ö.K. ifadesini kullanmaz.
- Dört adım ana sayfada ve hizmet sayfalarında aynı sırayla anlatılır.
- Ücretsiz ön görüşmenin çıktıları somutlaştırılır: seviye fotoğrafı, öncelikli eksikler ve önerilen çalışma temposu.

### MA-07 — Fiyat kararını kesinleştir

Amaç: Kullanıcıya sürpriz yaratmayan, format ve kapsamı açık bir fiyat modeli seçmek.

Karar adayı:

- Online 90 dakika: 4.500 TL
- Yüz yüze 90 dakika: 5.500 TL
- Dört derslik online düzenli program: 16.000 TL
- Dört derslik yüz yüze düzenli program: 20.000 TL

Bu rakamlar onaylanmadan fiyat kodu değiştirilmeyecek.

Karar sırasında netleştirilecekler:

- Fiyatlara KDV dahil olup olmadığı.
- Yol/konum sınırları ve varsa ek ulaşım bedeli.
- İptal veya erteleme süresi.
- Paket geçerlilik süresi ve ödeme biçimi.

### MA-08 — Şeffaf fiyatı uygula

Amaç: “Görüşmede netleşir” ifadesini kapsamı belli fiyat kartlarıyla değiştirmek.

Kabul ölçütleri:

- Fiyat, 90 dakikalık süre ve online/yüz yüze format açıkça görünür.
- Ders öncesi planlama, ders içi çalışma ve ders sonu yönlendirme kapsamı yazılır.
- Ana sayfa, SSS, kullanım koşulları ve WhatsApp hazır mesajı birbiriyle tutarlıdır.
- Gizli ücret veya muğlak “başlayan fiyat” ifadesi bulunmaz.

### MA-09 — Eski arama metinlerini yenilet

Amaç: Eski sürümdeki iddiaların arama motoru önbelleklerinden kaldırılmasını hızlandırmak.

Kabul ölçütleri:

- Güncel sürüm canlıda doğrulanır.
- Site haritası yeniden gönderilir.
- Ana sayfa için yeniden dizine ekleme isteği oluşturulur.
- Arama sonucu başlık ve açıklaması yeniden kontrol edilir.

### MA-10 — İlk ücretsiz aracı geliştir

Amaç: Kaynak arşivinin yanına öğrencinin tekrar gelmesini sağlayacak gerçek faydalı bir araç eklemek.

İlk adaylar:

1. Haftalık çalışma planı oluşturucu.
2. Deneme net takip tablosu.
3. Resmî tarihe bağlı LGS/YKS sayacı.

İlk tercih, tarih bakım yükü yaratmadığı için haftalık çalışma planı oluşturucudur.

## Bu Turda Başlanacak İşler

- [x] MA-01 doğrulanmamış iddia koruma testi
- [x] MA-02 teknik animasyon incelemesini tamamlama
- [x] MA-03 özgün öğrenme döngüsü bileşeni
- [x] MA-04 ana sayfa entegrasyonu
- [x] MA-05 mobil/masaüstü kalite doğrulaması

MA-07 ve MA-08, fiyat modelinin işletme açısından nihai onayı verilene kadar uygulanmayacak.
