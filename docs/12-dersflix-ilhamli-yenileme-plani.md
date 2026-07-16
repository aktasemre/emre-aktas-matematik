# Dersflix İlhamlı Yenileme Planı

Tarih: 16 Temmuz 2026

## Amaç

Matematik Akademi'yi Dersflix'in güçlü olduğu ürünleştirme, hareket ve teklif sunumu alanlarında geliştirmek; bunu yaparken Matematik Akademi'nin daha sakin, kişisel ve güvenilir öğretmen markasını korumak.

Bu çalışma Dersflix'in tasarımını, metinlerini, görsellerini veya marka dilini kopyalamayacak. Alınacak şey, profesyonel görünümü oluşturan prensiplerdir:

- tek cümlede anlaşılır değer önerisi,
- hatırlanabilir bir ders sistemi,
- kontrollü ve performanslı hareket,
- fiyatın kapsamıyla birlikte açıklanması,
- ziyaretçiye net bir sonraki adım sunulması.

## Doğrulanmış Mevcut Durum

- `1000+ öğrenci` ve `%98 başarı` iddiaları güncel `src` kodunda bulunmuyor.
- Bu ifadeler yalnızca eski Git geçmişinde yer alıyor. Git geçmişi yeniden yazılmayacak; güncel sitede kullanılmaları otomatik testle engellenecek.
- Güncel ana sayfa tek öğretmen, 16 yıl deneyim, 90 dakikalık ders ve takip sistemi üzerine kurulu.
- Kaynaklar sayfası mobilde ilk 6 kaynağı gösterip kalanları kullanıcı isteğiyle açacak şekilde kısaltıldı.
- Dersflix'in güncel fiyat sayfasında iki farklı seans tanımı bulunuyor:
  - kurum içindeki tek seans: bir föy/konu anlaşılana kadar, sabit dakika belirtilmeden;
  - 5 ve 10 seanslık evde veya online dersler: her biri açıkça 90 dakika ve seans başına 6.000 TL.

Bu nedenle Dersflix fiyatı birebir piyasa ortalaması olarak değil, kurumsal-premium bir referans olarak kullanılacak.

## Tasarım Kararı: Kopyalamak Yerine Uyarlamak

### Alınacak prensipler

- İlk ekranda güçlü başlık + hareketli özgün görsel + net çağrı.
- Ders yönteminin adlandırılması ve şemayla anlatılması.
- Ücretin yalnızca rakam değil, dahil olan hizmetlerle sunulması.
- Sayfanın önemli bölümlerinde tek ve tutarlı dönüşüm çağrısı.
- Sınav veya çalışma takibi gibi kullanışlı, düşük bakım gerektiren araçlar.

### Alınmayacak unsurlar

- Dersflix logosu, renkleri, illüstrasyonları, metinleri veya sayfa düzeninin birebir kopyası.
- Yoğun kampanya, sepet, geri sayım ve satış baskısı.
- Aynı anda çerez kutusu, sohbet balonu ve geri arama bandı gibi ekranı kapatan katmanlar.
- Doğrulanamayan başarı oranları, öğrenci sayıları veya garanti ifadeleri.
- Hareket uğruna büyük video, ağır animasyon kütüphanesi veya sürekli çalışan JavaScript.

## Özgün Görsel ve Hareket Dili

### Dersflix'teki gerçek teknik yapı

Canlı site incelemesinde Dersflix'in hareketli ilk ekranının özel bir 3B veya yapay zekâ teknolojisi olmadığı görüldü:

- Ana görsel alanı jQuery ve Slick Carousel ile çalışan 8 büyük PNG slayttan oluşuyor.
- Slaytlar 6 saniyede bir, 600 milisaniyelik solma geçişiyle otomatik değişiyor.
- Sol alttaki hareketli öğretmen, masaüstü ve mobil için ayrı hazırlanmış 5 saniyelik WebM videodur.
- Video sürekli ve otomatik oynuyor; azaltılmış hareket tercihini dikkate almıyor ve görünür bir duraklatma denetimi sunmuyor.
- Hero PNG'lerinin toplamı yaklaşık 3,14 MB; video masaüstünde yaklaşık 517 KB, mobilde yaklaşık 306 KB.

Bu nedenle aynı teknik yapıyı kopyalamak yerine, daha az veri ve JavaScript kullanan özgün SVG/CSS çözümü seçildi.

İlk aşamada ana sayfanın kahraman alanı iki parçalı olacak:

- Sol taraf: mevcut başlık, kısa açıklama ve iletişim çağrısı.
- Sağ taraf: Matematik Akademi'ye özgü dört aşamalı öğrenme döngüsü.

Önerilen döngü:

1. Seviye
2. Plan
3. Çözüm
4. Analiz

Animasyon yaklaşımı:

- SVG ve CSS ile çizilecek; harici animasyon paketi kullanılmayacak.
- Sadece `transform` ve `opacity` gibi kompozitör dostu özellikler hareket edecek.
- Bağlantı çizgisi ve kartlar ilk yüklemede bir kez, toplam 5 saniyeden kısa ve sakin bir hareket yapacak; sürekli dönmeyecek.
- `prefers-reduced-motion` açık olan kullanıcılar için tüm hareket duracak.
- Görsel dekoratif olacak ve ekran okuyucu akışını bozmayacak.
- Mobilde daha kompakt gösterilecek; metnin veya ana çağrının önüne geçmeyecek.

## Fiyatlandırma Çerçevesi

Fiyatı tek başına Dersflix'e göre belirlemek doğru değil. Dersflix kurum, öğretmen havuzu, kütüphane, koçluk ve farklı paketleri olan başka bir ürün sunuyor. Matematik Akademi'de fiyatın dayanağı doğrudan Emre Aktaş ile birebir çalışma olmalı.

Önerilen başlangıç modeli:

| Hizmet | Önerilen fiyat | Gerekçe |
| --- | ---: | --- |
| 90 dakika online birebir ders | 4.500 TL | Ulaşım yok; premium fakat erişilebilir giriş |
| 90 dakika yüz yüze birebir ders | 5.500 TL | Ulaşım, zaman blokajı ve yerinde ders dahil |
| 4 × 90 dakika online düzenli program | 16.000 TL | Ders başına 4.000 TL |
| 4 × 90 dakika yüz yüze düzenli program | 20.000 TL | Ders başına 5.000 TL |

Fiyat sayfasında veya bölümünde şu kapsam açıkça yazılmalı:

- ders öncesi kısa ihtiyaç ve materyal planlaması,
- 90 dakika birebir çalışma,
- konu anlatımı + öğrenci çözümü + yanlış analizi,
- ders sonunda bir sonraki çalışma önceliği.

`5.500 TL'den başlayan` ifadesi kullanılmayacak; online ve yüz yüze fiyat gerçekten farklıysa iki fiyat ayrı gösterilecek. Nihai rakamlar işletme kararı olduğu için kod değişikliği açık fiyat onayından sonra yapılacak.

## Yapılacaklar

### Aşama 1 — Temizlik ve koruma

- [x] Güncel kaynak kodda ve canlı sitemap'teki 41 adreste eski başarı iddialarının bulunmadığını doğrula.
- [x] `1000+`, `%98` ve benzeri doğrulanmamış iddiaların yeniden eklenmesini engelleyen test yaz.
- [ ] Eski arama sonucu önbelleklerinin güncellenmesi için canlı yayın sonrası yeniden tarama görevini kaydet.

### Aşama 2 — Profesyonel ilk ekran

- [x] Özgün “Seviye → Plan → Çözüm → Analiz” animasyon bileşenini oluştur.
- [x] Bileşeni ana sayfanın kahraman alanına yerleştir.
- [x] 320, 390 ve 1440 piksel genişliklerde kırılımları ayrı doğrula.
- [x] Azaltılmış hareket tercihinde animasyonların durduğunu ve görselin tek, açıklayıcı erişilebilir ada sahip olduğunu doğrula.
- [x] Yatay taşma olmadığını ve hareketin yalnızca `transform` ile `opacity` kullandığını doğrula.
- [x] Lint, tip kontrolü, 9 test ve 46 sayfalık üretim derlemesini başarıyla tamamla.
- [x] Kaynaklar dahil 111 dış bağlantının erişilebilir olduğunu yeniden doğrula.

### Aşama 3 — Teklifi ürünleştirme

- [x] İlk çalışma adı olarak “Matematik Akademi Takip Döngüsü”nü seç ve ana sayfaya uygula.
- [ ] Sistemin dört adımını ana sayfa ve hizmet sayfalarında aynı dille kullan.
- [ ] Ücretsiz ön görüşmenin somut çıktısını açıkla: seviye fotoğrafı, öncelikli eksikler ve önerilen tempo.

### Aşama 4 — Şeffaf fiyat

- [ ] Online ve yüz yüze fiyat kararını kesinleştir.
- [ ] Fiyatla birlikte hizmet kapsamını gösteren sade bölüm oluştur.
- [ ] Sıkça sorulan sorular ve kullanım koşullarındaki eski “görüşmede netleşir” metinlerini güncelle.
- [ ] WhatsApp hazır mesajında online/yüz yüze tercih alanı ekle.

### Aşama 5 — Kullanışlı araçlar

- [ ] LGS/YKS sınav sayacı için veri kaynağı ve bakım yöntemi belirle.
- [ ] İndirilebilir haftalık çalışma planı veya deneme-net takip tablosundan birini ilk araç olarak seç.
- [ ] Aracı kaynak arşiviyle iç bağlantılar üzerinden bağla.

## Başarı Ölçütleri

- İlk ekranın ana mesajı 5 saniye içinde anlaşılmalı.
- Mobilde yatay taşma olmamalı.
- Hareket kapatıldığında içerik ve anlam eksilmemeli.
- Lighthouse performansında animasyon nedeniyle belirgin gerileme olmamalı.
- Doğrulanmamış öğrenci sayısı, başarı oranı veya garanti iddiası bulunmamalı.
- Fiyat yayımlanırsa süre, format, kapsam ve vergi durumu belirsiz kalmamalı.

## Referanslar

- Dersflix ana sayfa: https://www.dersflix.com/
- Dersflix fiyatlar: https://www.dersflix.com/kayit-fiyatlar/online-satis-detay
- Dersflix K.Ö.K. modeli: https://www.dersflix.com/fark/kok-modeli
- Dersflix matematik özel ders: https://www.dersflix.com/tyt-ayt/ozel-dersler/matematik-ozel-ders
