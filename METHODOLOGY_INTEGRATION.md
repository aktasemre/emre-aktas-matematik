# Öğretim Metodolojisi Entegrasyon Planı

Bu doküman, web sitesine özel ders verme metodolojisini entegre etmek için planlanan adımları özetlemektedir.

## Genel Amaç

Sitenin içeriğini ve yapısını, sunulan detaylı ve yapılandırılmış özel ders sürecini (özellikle LGS/YKS odaklı) yansıtacak şekilde güncellemek.

## Plan Adımları

1.  **Header Güncellemesi:**
    *   Navigasyon linklerini gözden geçir.
    *   LGS ve YKS hazırlık süreçlerini vurgulamak için "Özel Dersler" altına veya ayrı bir başlık olarak ilgili linkleri ekle.

2.  **"Nasıl Çalışıyoruz?" (`ProcessSteps`) Bölümünü Güncelleme:**
    *   Mevcut 4 adımı, öğretim döngüsünü (Tespit -> Plan -> Ödev -> Kontrol/Yeni Konu) daha iyi yansıtacak şekilde yeniden adlandır ve açıkla.
    *   Vurgu: Kişisel haftalık planlama ve takip.

3.  **Yeni Bölüm Ekleme: "Başarı Metodolojimiz" / "Sınavlara Nasıl Hazırlıyoruz?"**
    *   Yeni bir React bileşeni (`Methodology.js`) ve CSS modülü (`Methodology.module.css`) oluştur.
    *   İçerik:
        *   4 adımlık haftalık çalışma döngüsünün detaylı açıklaması.
        *   Faydaların vurgulanması (kaygı azaltma, net ilerleme, LGS/YKS odaklılık).
        *   Hedef kitle belirtilmesi (Ortaokul/Lise - LGS/YKS).
        *   Velilere yönelik mesajın profesyonel bir dille eklenmesi ("Sınav sürecinin yönetimini bize bırakın...").
    *   Görsel öğeler ekle (infografik veya ikonlar).
    *   Bu yeni bileşeni `ClientComponents.js`'e ekle ve `page.js` içinde uygun bir yere yerleştir (örn. `ProcessSteps`'ten sonra).

4.  **Mevcut Metinleri Gözden Geçirme:**
    *   `Hero.js` ve `Cta.js` gibi bileşenlerdeki metinleri, yeni metodoloji vurgusuyla uyumlu hale getirmek için gerekirse güncelle.

5.  **Son Kontrol:**
    *   Tüm değişikliklerin hatasız çalıştığından ve görsel tutarlılığın korunduğundan emin ol.

## Uygulama Sırası

1.  Dokümantasyon dosyası oluşturuldu.
2.  Header linkleri güncellenecek.
3.  `ProcessSteps.js` içeriği güncellenecek.
4.  `Methodology.js` ve `Methodology.module.css` oluşturulacak ve stillendirilecek.
5.  Yeni bölüm `ClientComponents.js` ve `page.js`'e eklenecek.
6.  Diğer metinler (Hero/Cta) gözden geçirilecek.
7.  Son kontroller yapılacak. 