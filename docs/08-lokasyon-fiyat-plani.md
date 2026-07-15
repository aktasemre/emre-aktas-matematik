# Lokasyon ve Fiyat Bilgisi Planı

## Karar

İlk sürümde lokasyon bilgisi açıkça verilecek. Fiyat bilgisi ise net rakam olarak yazılmayacak; ücretin 90 dakikalık ders modeli, ders formatı ve lokasyona göre netleştiği anlatılacak.

## Neden Lokasyon Eklenmeli?

Matematik Akademi yerel özel ders hizmeti verdiği için lokasyon bilgisi hem SEO hem de veli güveni açısından önemlidir.

İlk görünür lokasyonlar:

- Florya
- Bakırköy
- Başakşehir
- Göktürk
- İstanbul Avrupa Yakası yakın çevre

## Neden Net Fiyat Yazmıyoruz?

Özel ders ücreti öğrencinin sınıfına, sınav hedefine, yüz yüze veya online ders formatına, lokasyona ve haftalık ders sıklığına göre değişebilir.

Bu yüzden ilk sürümde fiyatı şu çerçevede anlatmak daha doğru:

> Dersler 90 dakikalık periyotlarla planlanır. Ücret; öğrencinin sınıfı, hedefi, ders formatı ve lokasyona göre netleştirilir.

## Nerelerde Değişiklik Yapılacak?

### Merkezi Site Verisi

Dosya:

- `src/lib/site.ts`

Eklenecek bilgiler:

- Hizmet verilen semtler
- Fiyat açıklama metni
- İletişim sayfasında kullanılacak kısa ders talebi yönlendirmesi

### Ana Sayfa

Dosya:

- `src/app/page.tsx`

Eklenecek bölüm:

- "Yüz yüze ders bölgeleri ve ücretlendirme" bölümü
- Florya, Bakırköy, Başakşehir ve Göktürk etiketleri
- 90 dakika ve fiyatın neye göre netleştiği açıklaması

### İletişim Sayfası

Dosya:

- `src/lib/content.ts`

Eklenecek içerik:

- Ücretsiz ön görüşme talebinde semt bilgisinin istenmesi
- Yüz yüze veya online ders formatı bilgisinin istenmesi
- Fiyatın bu bilgilere göre netleştiğinin açıklanması

### SEO Planı

Dosya:

- `docs/03-icerik-seo-plani.md`

Eklenecek hedefler:

- Florya matematik özel ders
- Başakşehir matematik özel ders
- Göktürk matematik özel ders
- Bakırköy matematik özel ders

## İkinci Aşama SEO Sayfaları

İlk sürümde semtleri ana sayfa ve iletişim sayfasında göstermek yeterli. Sonraki aşamada talep veya SEO ihtiyacı oluşursa ayrı sayfalar açılabilir:

- `/florya-matematik-ozel-ders`
- `/basaksehir-matematik-ozel-ders`
- `/gokturk-matematik-ozel-ders`
- `/bakirkoy-matematik-ozel-ders`

Bu sayfalar açılırsa her biri özgün metin taşımalı. Sadece semt adını değiştirerek aynı metni kopyalamak SEO açısından zayıf olur.
