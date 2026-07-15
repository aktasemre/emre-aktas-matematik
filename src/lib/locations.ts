export type LocationPageData = {
  slug: string;
  name: string;
  schemaAreaName: string;
  eyebrow: string;
  description: string;
  intro: string;
  locationSummary: string;
  planningNote: string;
  nearbyAreas: string[];
  localFaqQuestion: string;
  localFaqAnswer: string;
  cta: string;
};

export const locationPages: LocationPageData[] = [
  {
    slug: "basaksehir-matematik-ozel-ders",
    name: "Başakşehir",
    schemaAreaName: "Başakşehir, İstanbul",
    eyebrow: "Başakşehir | Yüz yüze ve çevrim içi",
    description:
      "Başakşehir'de LGS, YKS ve ara sınıflar için 16 yıllık deneyimle 90 dakikalık birebir matematik özel ders ve ücretsiz ön görüşme.",
    intro:
      "LGS, YKS ve ara sınıflarda öğrencinin seviyesine göre planlanan; konu anlatımı, soru çözümü ve yanlış analizini birleştiren birebir matematik dersi.",
    locationSummary:
      "Başakşehir geniş bir yerleşim alanı olduğu için yüz yüze ders planında öğrencinin semti, okul çıkış saati ve haftalık programı birlikte değerlendirilir.",
    planningNote:
      "Ders günü ve saati belirlenirken ulaşım süresi de hesaba katılır. Uygun bir yüz yüze program oluşmazsa aynı takip düzeni çevrim içi dersle sürdürülebilir.",
    nearbyAreas: ["Başakşehir merkez", "Kayaşehir", "Bahçeşehir", "İkitelli"],
    localFaqQuestion: "Başakşehir'in her bölgesine yüz yüze ders için geliyor musunuz?",
    localFaqAnswer:
      "Yüz yüze ders uygunluğu semt, ulaşım süresi ve ders saatine göre değerlendirilir. Konumunuzu ön görüşmede paylaştığınızda program uygunluğunu netleştirebiliriz.",
    cta:
      "Öğrencinin sınıfını, hedefini ve Başakşehir'deki konumunuzu paylaşın. Yüz yüze veya çevrim içi ders için uygun seçeneği ön görüşmede belirleyelim.",
  },
  {
    slug: "florya-matematik-ozel-ders",
    name: "Florya",
    schemaAreaName: "Florya, İstanbul",
    eyebrow: "Florya | Yüz yüze ve çevrim içi",
    description:
      "Florya'da LGS, YKS ve ara sınıflar için 16 yıllık deneyimle 90 dakikalık birebir matematik özel ders ve ücretsiz ön görüşme.",
    intro:
      "Florya ve yakın çevresindeki öğrenciler için okul programı, sınav hedefi ve mevcut matematik seviyesine göre şekillenen birebir ders süreci.",
    locationSummary:
      "Florya çevresinde okul çıkışı ve akşam saatlerindeki yoğunluk değişebildiği için ders saati, öğrencinin haftalık düzeniyle birlikte planlanır.",
    planningNote:
      "Yüz yüze ders için açık adres ve uygun saat ön görüşmede değerlendirilir. Böylece 90 dakikalık dersin ulaşım nedeniyle aksamasının önüne geçilir.",
    nearbyAreas: ["Şenlikköy", "Yeşilköy", "Basınköy", "Ataköy"],
    localFaqQuestion: "Florya çevresinde yüz yüze ders hangi saatlerde planlanabilir?",
    localFaqAnswer:
      "Hafta içi ve hafta sonu seçenekleri öğrencinin okul programı, açık adresi ve ulaşım süresine göre değerlendirilir. Uygun saat ücretsiz ön görüşmede netleştirilir.",
    cta:
      "Öğrencinin sınıfını, hedefini ve Florya'daki konumunuzu gönderin; ders biçimini ve uygun saatleri ücretsiz ön görüşmede birlikte netleştirelim.",
  },
  {
    slug: "bahcesehir-matematik-ozel-ders",
    name: "Bahçeşehir",
    schemaAreaName: "Bahçeşehir, İstanbul",
    eyebrow: "Bahçeşehir | Yüz yüze ve çevrim içi",
    description:
      "Bahçeşehir'de LGS, YKS ve ara sınıflar için 16 yıllık deneyimle 90 dakikalık birebir matematik özel ders ve ücretsiz ön görüşme.",
    intro:
      "Bahçeşehir'de LGS, TYT-AYT ve okul matematiği için öğrencinin eksiklerine göre ilerleyen, düzenli soru ve deneme analizi içeren birebir ders.",
    locationSummary:
      "Bahçeşehir'deki site yerleşimleri ve yoğun saatler nedeniyle yüz yüze ders programı açık adres, okul çıkış saati ve haftalık ders sıklığı birlikte ele alınarak oluşturulur.",
    planningNote:
      "Düzenli devam edebilecek bir saat bulunması önceliklidir. Ulaşımın elvermediği haftalarda çevrim içi ders seçeneği programın sürekliliğini koruyabilir.",
    nearbyAreas: ["Bahçeşehir 1. Kısım", "Bahçeşehir 2. Kısım", "Boğazköy", "Esenkent"],
    localFaqQuestion: "Bahçeşehir'de site içinde yüz yüze ders planlanabiliyor mu?",
    localFaqAnswer:
      "Site ve açık adres bilgisi ön görüşmede değerlendirilir. Ulaşım ve saat uygunluğu sağlanırsa yüz yüze, sağlanmazsa çevrim içi ders programı oluşturulabilir.",
    cta:
      "Bahçeşehir'deki konumunuzu, öğrencinin sınıfını ve hedefini paylaşın; sürdürülebilir yüz yüze veya çevrim içi programı birlikte belirleyelim.",
  },
  {
    slug: "gokturk-matematik-ozel-ders",
    name: "Göktürk",
    schemaAreaName: "Göktürk, İstanbul",
    eyebrow: "Göktürk | Yüz yüze ve çevrim içi",
    description:
      "Göktürk'te LGS, YKS ve ara sınıflar için 16 yıllık deneyimle 90 dakikalık birebir matematik özel ders ve ücretsiz ön görüşme.",
    intro:
      "Göktürk'teki ortaokul ve lise öğrencileri için konu eksiği, yeni nesil soru, problem ve deneme performansını birlikte ele alan birebir matematik dersi.",
    locationSummary:
      "Göktürk için yüz yüze ders planı yapılırken açık adres, dersin başlangıç saati ve haftalık devamlılık birlikte değerlendirilir.",
    planningNote:
      "Ulaşım süresi ders gününe göre değişebildiğinden program ön görüşmede netleştirilir. Çevrim içi seçenek, konumdan bağımsız olarak aynı 90 dakikalık çalışma düzenini sunar.",
    nearbyAreas: ["Göktürk merkez", "Kemerburgaz", "Mithatpaşa", "Eyüpsultan"],
    localFaqQuestion: "Göktürk ve Kemerburgaz çevresinde yüz yüze ders veriyor musunuz?",
    localFaqAnswer:
      "Konum ve saat uygunluğuna göre yüz yüze ders değerlendirilebilir. Açık adresi ön görüşmede paylaştığınızda ulaşım ve program durumu netleştirilir.",
    cta:
      "Göktürk'teki konumunuzu ve öğrencinin hedefini gönderin; yüz yüze ders uygunluğunu veya çevrim içi alternatifi ücretsiz görüşmede değerlendirelim.",
  },
  {
    slug: "atakent-matematik-ozel-ders",
    name: "Atakent",
    schemaAreaName: "Atakent, Küçükçekmece, İstanbul",
    eyebrow: "Atakent, Küçükçekmece | Yüz yüze ve çevrim içi",
    description:
      "Atakent Küçükçekmece'de LGS, YKS ve ara sınıflar için 90 dakikalık birebir matematik özel ders ve ücretsiz ön görüşme.",
    intro:
      "Atakent ve Halkalı çevresindeki öğrenciler için okul dersleriyle sınav hedefini aynı planda buluşturan, seviyeye göre birebir matematik desteği.",
    locationSummary:
      "Atakent'te öğrencinin okul programı ve site konumu ders saatini doğrudan etkileyebilir. Bu nedenle düzenli devam edilebilecek gün ve saat baştan belirlenir.",
    planningNote:
      "Yüz yüze ders için konum ve ulaşım uygunluğu değerlendirilir; sınav dönemlerinde programın aksamaması için çevrim içi seçenek de açık tutulur.",
    nearbyAreas: ["Atakent", "Halkalı", "Küçükçekmece", "Tema çevresi"],
    localFaqQuestion: "Atakent ve Halkalı'da yüz yüze ders uygunluğu nasıl belirleniyor?",
    localFaqAnswer:
      "Öğrencinin açık adresi, okul çıkış saati ve talep edilen ders günü birlikte değerlendirilir. Uygunluk sağlanırsa 90 dakikalık yüz yüze program oluşturulur.",
    cta:
      "Atakent'teki konumunuzu, sınıf düzeyini ve hedefi paylaşın; ücretsiz ön görüşmede ders gününü ve çalışma biçimini netleştirelim.",
  },
  {
    slug: "ispartakule-matematik-ozel-ders",
    name: "Ispartakule",
    schemaAreaName: "Ispartakule, İstanbul",
    eyebrow: "Ispartakule | Yüz yüze ve çevrim içi",
    description:
      "Ispartakule'de LGS, YKS ve ara sınıflar için 16 yıllık deneyimle 90 dakikalık birebir matematik özel ders ve ücretsiz ön görüşme.",
    intro:
      "Ispartakule'deki ortaokul ve lise öğrencileri için konu eksiklerini, soru çözüm hızını ve sınav takibini aynı programda birleştiren birebir matematik dersi.",
    locationSummary:
      "Ispartakule'deki yerleşim ve site konumu yüz yüze dersin ulaşım süresini etkileyebilir. Açık adres ve uygun saat ilk görüşmede birlikte değerlendirilir.",
    planningNote:
      "Dersin 90 dakikalık çalışma bütünlüğünü koruyacak, haftadan haftaya sürdürülebilir bir saat seçilir. Gerekli durumlarda çevrim içi dersle devamlılık sağlanabilir.",
    nearbyAreas: ["Ispartakule", "Tahtakale", "Bahçeşehir", "Esenkent"],
    localFaqQuestion: "Ispartakule'deki sitelerde yüz yüze ders planlanabiliyor mu?",
    localFaqAnswer:
      "Açık adres, siteye ulaşım ve talep edilen saat değerlendirilerek yüz yüze ders uygunluğu belirlenir. Uygun olmayan saatlerde çevrim içi seçenek planlanabilir.",
    cta:
      "Ispartakule'deki konumunuzu ve öğrencinin çalışma hedefini gönderin; uygun ders biçimini ve programı ücretsiz ön görüşmede birlikte belirleyelim.",
  },
];

export function getLocationPage(slug: string) {
  return locationPages.find((location) => location.slug === slug);
}
