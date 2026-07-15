# Domain ve SEO Hazırlığı

## Domain Kararı

Birincil domain:

> https://www.matematik-akademi.com/

Kök domain:

> https://matematik-akademi.com/

Yayın hedefi, kök domainin `www` adresine kalıcı olarak yönlenmesidir.

## 11 Haziran 2026 Teknik Kontrol

Yapılan hızlı kontrolde:

- `www.matematik-akademi.com` Vercel DNS'e CNAME ile gidiyor.
- `matematik-akademi.com` A kaydı ile Vercel tarafına gidiyor.
- Her iki adres de şu an `402 Payment Required` dönüyor.
- HTTP başlıklarında `Server: Vercel` ve `X-Vercel-Error: DEPLOYMENT_DISABLED` görünüyor.

Bu, alan adının Vercel tarafında mevcut bir projeye veya hesaba bağlı olduğunu, ancak mevcut deployment'ın aktif yayın veremediğini gösterir. Yeni site yayına alınmadan önce domainin doğru Vercel projesine bağlandığı ve eski/disabled deployment durumunun temizlendiği doğrulanmalıdır.

## Canonical URL Kararı

Canonical adreslerde her zaman `www` kullanılacak.

Örnek:

```text
https://www.matematik-akademi.com/lgs-matematik-ozel-ders
```

Kullanılmayacak:

```text
https://matematik-akademi.com/lgs-matematik-ozel-ders
```

## Önerilen URL Yapısı

Ana hizmet sayfaları:

- `/lgs-matematik-ozel-ders`
- `/yks-matematik-ozel-ders`
- `/ara-sinif-matematik-ozel-ders`
- `/kaynaklar`
- `/hakkimda`
- `/iletisim`

İkinci aşama sayfaları:

- `/tyt-matematik-ozel-ders`
- `/ayt-matematik-ozel-ders`
- `/7-sinif-matematik-ozel-ders`
- `/8-sinif-matematik-ozel-ders`
- `/10-sinif-matematik-ozel-ders`
- `/11-sinif-matematik-ozel-ders`
- `/istanbul-avrupa-yakasi-matematik-ozel-ders`

Kaynak sayfaları:

- `/kaynaklar/lgs`
- `/kaynaklar/tyt`
- `/kaynaklar/ayt`
- `/kaynaklar/8-sinif`
- `/kaynaklar/meb-8-sinif-matematik-ornek-sorular`

Blog sayfaları:

- `/blog/lgs-matematikte-netler-nasil-artirilir`
- `/blog/tyt-matematikte-temel-eksikler-nasil-kapatilir`

## İlk Yayın Öncesi Checklist

- Domain doğru Vercel projesine bağlandı.
- `www` production domain olarak ayarlandı.
- Kök domain `www` adresine yönleniyor.
- SSL sertifikası aktif.
- Ana sayfa 200 dönüyor.
- Eski `DEPLOYMENT_DISABLED` durumu kalktı.
- Sitemap erişilebilir.
- Robots.txt erişilebilir.
- Google Search Console'a domain eklendi.
- Google Analytics veya Plausible gibi ölçüm aracı eklendi.
- WhatsApp ve Instagram linkleri doğru çalışıyor.

## Search Console Hazırlığı

Search Console'da domain property eklemek daha doğru olur:

```text
matematik-akademi.com
```

DNS doğrulaması yapılırsa hem kök domain hem `www` hem de ileride eklenebilecek alt alan adları tek mülkte toplanır.
