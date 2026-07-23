# SEO Uygulama ve İzleme Planı

Güncelleme: 24 Temmuz 2026

## Başlangıç verisi

Yeni site için ilk temiz Search Console dönemi 15-21 Temmuz 2026'dır.

| Gösterge | Değer |
| --- | ---: |
| Google tıklaması | 14 |
| Google gösterimi | 190 |
| Ortalama tıklama oranı | %7,37 |
| Ortalama konum | 9,45 |
| En güçlü sorgu | başakşehir matematik özel ders |

Bu değerler sonraki karşılaştırmalarda başlangıç noktası olarak kullanılacaktır. Veri
henüz kısa bir dönemi kapsadığı için tek günlük değişimler yerine 28 günlük eğilim
izlenmelidir.

## Uygulama görevleri

### P0 — Teknik geçiş ve indeksleme

- [x] Apex alan adından `www` adresine kalıcı 308 yönlendirme tanımla.
- [x] Eski hizmet ve içerik URL'lerinin kalıcı yönlendirmelerini koru.
- [x] Eski Başakşehir blog sonucunu güncel, doğrulanabilir öğretmen rehberine yönlendir.
- [x] Birbiriyle çakışan LGS/8. sınıf ve YKS/TYT/AYT kaynak merkezlerini tek URL altında birleştir.
- [x] Yönlendirilen URL'leri sitemap'ten çıkar.
- [x] Kaynak doğrulama tarihini sayfa değişiklik tarihi gibi gösteren `lastmod` kullanımını kaldır.
- [x] Vercel domain ayarında apex yönlendirmesini 308 yap ve canlıda tek adım olduğunu doğrula.
- [x] Güncel sitemap'i Google Search Console'a yeniden gönder.
- [x] Yeni LGS rehberini Search Console URL denetimiyle öncelikli tarama kuyruğuna ekle.

24 Temmuz 2026'da sitemap yeniden gönderildi. Yeni LGS rehberi Search Console
tarafından keşfedilmiş ancak henüz dizine eklenmemiş görünüyordu; manuel indeksleme
isteği kabul edilerek öncelikli tarama sırasına alındı.

### P1 — Arama niyeti ve içerik kalitesi

- [x] Başakşehir 2026 LGS matematik çalışma rehberi yayımla.
- [x] Başakşehir hizmet sayfasından rehbere bağ kur.
- [x] LGS hizmet sayfasından rehbere ve tekil LGS kaynak merkezine iç bağlantı ver.
- [x] Bahçeşehir ve diğer lokasyon sayfalarına gerçek planlama farklarını gösteren özgün içerik ekle.
- [x] Başakşehir sayfasındaki “Bahçeşehir” ifadesini özel Bahçeşehir sayfasına bağla.
- [x] Kaynak detaylarını öğretmen kullanım notu ve resmî kaynak bağlamıyla zenginleştir.
- [x] Kırık ÖSYM duyuru bağlantılarını çalışan resmî hedeflerle değiştir.

### P1 — Yapılandırılmış veri ve varlık bütünlüğü

- [x] Site, organizasyon ve öğretmen için sabit JSON-LD kimlikleri oluştur.
- [x] Ana hizmet sayfalarına `Service`, `WebPage` ve `BreadcrumbList` ekle.
- [x] Lokasyon sayfalarına bölgeye özel `Service` ve breadcrumb grafı ekle.
- [x] Öğretmen rehberine `Article`, yazar, yayıncı ve güncelleme tarihi ekle.
- [x] Kaynak detaylarına `CreativeWork`, koleksiyon ve breadcrumb ilişkisi ekle.
- [x] Hakkımda ve iletişim sayfalarının Open Graph verisini sayfaya özel hâle getir.

### P1 — Dönüşüm ölçümü

- [x] Telefon, WhatsApp ve Instagram tıklamalarını ortak `contact_click` olayıyla ölç.
- [x] Olaylara `channel`, `path` ve `placement` özelliklerini ekle.
- [x] Kaynak aramasında yalnızca arama uzunluğunu ölç; arama metnini analytics'e gönderme.
- [x] Görüşme hazırlayıcı tamamlanma olayını koru.
- [ ] Ticari kullanım ve özel olay raporları için Vercel Pro ya da tekil GA4 ölçüm sistemine karar ver.

## 28 günlük izleme

Her hafta aynı gün aşağıdaki değerler kaydedilmelidir:

- Google tıklamaları, gösterimleri, tıklama oranı ve ortalama konum
- “başakşehir matematik özel ders” sorgusunun sayfa eşleşmesi
- Bahçeşehir sorgularının özel Bahçeşehir sayfasına geçip geçmediği
- LGS rehberinin gösterim ve indeks durumu
- MEB/MEBİ kaynak sayfalarının ilk 10 ve ilk 20 görünürlüğü
- Mobil Core Web Vitals durumu
- Telefon, WhatsApp ve Instagram tıklamalarının kanal ve yerleşim dağılımı

## Sonraki fırsatlar

- Google Business Profile hizmet alanlarını ve site bağlantısını güncelle.
- Bing Webmaster Tools'u doğrula ve IndexNow kurulumunu değerlendir.
- Gerçek öğrenci sorularından kişisel veri içermeyen yeni öğretmen rehberleri üret.
- Search Console Generative AI raporu hesaba açıldığında sayfa görünürlüğünü ayrıca takip et.
- Yeni lokasyon sayfası açmadan önce sorgunun hizmet bölgesiyle ve gerçek talep verisiyle uyumunu doğrula.
