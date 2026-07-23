export type ContentSection = {
  title: string;
  body: string;
};

export type HeroFact = {
  value: string;
  label: string;
};

export type ResourceShortcut = {
  title: string;
  description: string;
  href: string;
  label: string;
  external?: boolean;
};

export type ContentPage = {
  slug: string;
  theme: "lgs" | "yks" | "school";
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  audienceTitle: string;
  audienceIntro: string;
  bullets: string[];
  heroFacts: HeroFact[];
  processTitle: string;
  sections: ContentSection[];
  resourceShortcuts: ResourceShortcut[];
  teacherNote: string;
  cta: string;
};

export const contentPages: ContentPage[] = [
  {
    slug: "lgs-matematik-ozel-ders",
    theme: "lgs",
    title: "LGS Matematik Özel Ders",
    description:
      "İstanbul Avrupa Yakası'nda 7. ve 8. sınıf öğrencileri için LGS odaklı, 90 dakikalık birebir matematik özel ders.",
    eyebrow: "LGS Hazırlık",
    intro:
      "LGS matematikte amaç yalnızca konu bitirmek değil, öğrencinin soruyu doğru okuyup doğru stratejiyle çözmesini sağlamaktır.",
    audienceTitle: "LGS matematikte hangi noktadan başlanacağı net olsun",
    audienceIntro:
      "Başlangıç planı öğrencinin notuna göre değil; deneme davranışına, konu eksiklerine ve soruyu çözerken takıldığı adıma göre kurulur.",
    bullets: [
      "MEB kazanımlarına göre konu ve eksik takibi",
      "Yeni nesil sorularda okuma, veri ayıklama ve çözüm planı",
      "Deneme yanlışlarının konu ve hata türüne göre ayrıştırılması",
      "7. sınıftan 8. sınıfa geçişte sağlam temel oluşturma",
    ],
    heroFacts: [
      { value: "7-8", label: "sınıf odağı" },
      { value: "1 seans", label: "90 dakika" },
      { value: "LGS", label: "deneme takibi" },
    ],
    processTitle: "Soru çözümünden deneme analizine uzanan ders düzeni",
    sections: [
      {
        title: "Seviye fotoğrafı",
        body: "Öğrencinin son denemeleri, zorlandığı konu başlıkları ve çözüm alışkanlığı birlikte değerlendirilir. İlk plan, gerçek ihtiyaçlara göre oluşturulur.",
      },
      {
        title: "Yeni nesil soru rutini",
        body: "Soru metnini okuma, veriyi ayıklama, işlem planı kurma ve çözümü kontrol etme adımları ders içinde tekrar eden bir rutin hâline getirilir.",
      },
      {
        title: "Deneme sonrası takip",
        body: "Yanlışlar konu başlığına ve hata türüne göre ayrılır. Bir sonraki dersin önceliği, öğrencinin gerçek eksiklerine göre güncellenir.",
      },
    ],
    resourceShortcuts: [
      {
        title: "2026 LGS matematik çalışma rehberi",
        description:
          "Deneme yanlışlarını sınıflandırma, haftalık çalışma döngüsü ve resmî kaynak seçimi için öğretmen notları.",
        href: "/basaksehir-lgs-matematik-calisma-rehberi",
        label: "Çalışma rehberini oku",
      },
      {
        title: "LGS kaynak arşivi",
        description:
          "MEB örnek soruları, çalışma kitapları, MEBİ bağlantıları ve geçmiş yıllar aynı arşivde.",
        href: "/kaynaklar",
        label: "LGS kaynaklarını aç",
      },
      {
        title: "2025 Şubat sayısal kitapçığı",
        description:
          "MEB'in resmî sayısal PDF'i: 10 matematik ve 10 fen sorusu ile cevap anahtarı.",
        href: "https://cdn.eba.gov.tr/yardimcikaynaklar/2025/02/ornek/sayisal.pdf",
        label: "Sayısal PDF'yi aç",
        external: true,
      },
    ],
    teacherNote:
      "LGS hazırlığında soru sayısı tek başına yeterli değildir. Öğrencinin hangi soruda ve neden zorlandığını görmek, doğru çalışma temposunu kurmanın temelidir.",
    cta: "Öğrencinin mevcut neti, zorlandığı konular ve deneme takvimiyle ilk çalışma önceliklerini birlikte çıkaralım.",
  },
  {
    slug: "yks-matematik-ozel-ders",
    theme: "yks",
    title: "YKS Matematik Özel Ders",
    description:
      "TYT ve AYT matematik için net, hedef bölüm ve sınava kalan süreye göre planlanan 90 dakikalık birebir ders.",
    eyebrow: "TYT-AYT Hazırlık",
    intro:
      "YKS matematik planı öğrencinin mevcut neti, hedef bölümü ve sınava kalan süreye göre oluşturulur.",
    audienceTitle: "TYT ve AYT'yi aynı hedefe bağlayan bir plan",
    audienceIntro:
      "YKS sürecinde temel eksikleri kapatmak, soru çözüm hızını geliştirmek ve AYT derinliğini doğru sıraya koymak birlikte ele alınır.",
    bullets: [
      "TYT işlem becerisi, problem okuma ve temel konu takibi",
      "AYT'de hedef bölüme göre konu derinliği",
      "Net, hedef ve sınava kalan süreyi birlikte değerlendiren tempo",
      "Deneme sonuçları üzerinden güncellenen haftalık çalışma planı",
    ],
    heroFacts: [
      { value: "TYT + AYT", label: "sınav odağı" },
      { value: "1 seans", label: "90 dakika" },
      { value: "Net + hedef", label: "çalışma planı" },
    ],
    processTitle: "Hedef bölümden haftalık soru planına uzanan çalışma sistemi",
    sections: [
      {
        title: "Net, hedef ve süre",
        body: "Mevcut net, hedeflenen bölüm ve sınava kalan süre aynı çerçevede değerlendirilir. Böylece yetişmeyecek bir program yerine uygulanabilir bir tempo kurulur.",
      },
      {
        title: "TYT için temel güçlendirme",
        body: "İşlem becerisi, problem okuma, oran-orantı, denklem ve temel fonksiyon bilgisi düzenli pratik ve hata analiziyle güçlendirilir.",
      },
      {
        title: "AYT için konu derinliği",
        body: "Fonksiyon, trigonometri, limit, türev, integral ve diğer AYT başlıkları öğrencinin hedefine ve ön bilgi düzeyine göre sıralanır.",
      },
    ],
    resourceShortcuts: [
      {
        title: "ÖSYM YKS çıkmış sorular",
        description:
          "TYT ve AYT geçmiş soru kitapçıkları ile cevap anahtarlarına ÖSYM'nin kendi sayfasından ulaşın.",
        href: "https://www.osym.gov.tr/TR,15164/yks-cikmis-sorular.html",
        label: "ÖSYM kaynaklarını aç",
        external: true,
      },
      {
        title: "YKS kaynak arşivi",
        description:
          "Sınav hazırlık planında kullanılabilecek MEB ve ÖSYM kaynaklarını aynı arşivden filtreleyin.",
        href: "/kaynaklar",
        label: "Kaynak arşivini aç",
      },
    ],
    teacherNote:
      "YKS matematikte plan, tek bir konu listesi değildir. Öğrencinin hedefiyle bugünkü seviyesi arasındaki mesafeyi gören ve her denemeden sonra güncellenen bir yol haritasıdır.",
    cta: "Hedef bölüm, mevcut net ve sınava kalan süreyle uygulanabilir ilk TYT-AYT çalışma planını birlikte çıkaralım.",
  },
  {
    slug: "ara-sinif-matematik-ozel-ders",
    theme: "school",
    title: "Ara Sınıf Matematik Özel Ders",
    description:
      "6, 7, 9, 10 ve 11. sınıflarda okul başarısını ve sonraki sınav yıllarını destekleyen 90 dakikalık birebir matematik özel ders.",
    eyebrow: "Okul Destek",
    intro:
      "Ara sınıflarda hedef, öğrencinin matematikle bağını koparmadan sağlam bir temel oluşturmasıdır.",
    audienceTitle: "Yazılı dönemini kurtarmaktan daha fazlası",
    audienceIntro:
      "Ders planı okulda görülen konularla paralel ilerler; yazılı öncesi tekrar ile kalıcı temel çalışması birbirinden ayrılmaz.",
    bullets: [
      "6, 7, 9, 10 ve 11. sınıf düzeyine göre konu planı",
      "Okul sınavları ve yazılı öncesi hedefli tekrar",
      "Temel eksiklerin küçük adımlarla kapatılması",
      "Bir sonraki sınav yılının yükünü azaltan çalışma düzeni",
    ],
    heroFacts: [
      { value: "6-11", label: "sınıf desteği" },
      { value: "1 seans", label: "90 dakika" },
      { value: "Yazılı + temel", label: "çift odak" },
    ],
    processTitle: "Okul ritmine uyum sağlayan, temel oluşturan ders düzeni",
    sections: [
      {
        title: "Okul müfredatına uyum",
        body: "Ders planı öğrencinin okulda gördüğü konularla paralel ilerler. Böylece derste öğrenilen konu, birebir derste daha sağlam hâle gelir.",
      },
      {
        title: "Yazılı öncesi hedefli tekrar",
        body: "Yazılı dönemlerinde konu ve soru seçimi öğrencinin eksiklerine göre daraltılır; son günlere bırakılan tekrar yerine planlı bir hazırlık yapılır.",
      },
      {
        title: "Sınav yılına hazırlık",
        body: "7, 10 ve 11. sınıflarda temel güçlü tutulursa LGS ve YKS senesinde yalnızca eksik kapatmaya değil, sınav becerisine odaklanmak mümkün olur.",
      },
    ],
    resourceShortcuts: [
      {
        title: "MEB temel eğitim kitapları",
        description:
          "6., 7. ve 8. sınıf için beceri temelli testler, çalışma soruları ve matematik kitapları.",
        href: "https://odsgm.meb.gov.tr/www/temel-egitim-kitaplari/icerik/834",
        label: "MEB kitaplarını aç",
        external: true,
      },
      {
        title: "Ortak yazılı kaynakları",
        description:
          "MEB'in ortak yazılılara yönelik örnek konu-soru dağılım tablolarını doğrudan inceleyin.",
        href: "https://odsgm.meb.gov.tr/www/2025-2026-ikinci-donem-ortak-yazili-sinavlara-yonelik-ornek-konu-soru-dagilim-tablolari-yayimlandi/icerik/1534/tr",
        label: "Konu-soru tablolarını aç",
        external: true,
      },
    ],
    teacherNote:
      "Ara sınıflarda doğru zamanda kurulan çalışma alışkanlığı, öğrencinin özgüvenini ve sınav yılı geldiğindeki hareket alanını doğrudan etkiler.",
    cta: "Sınıf düzeyi, okul konuları ve zorlanılan başlıklarla uygun çalışma temposunu birlikte belirleyelim.",
  },
];

export function getContentPage(slug: string) {
  return contentPages.find((page) => page.slug === slug);
}

export const sitemapEntries = [
  "",
  "hakkimda",
  "iletisim",
  "kaynaklar",
  "gizlilik-politikasi",
  "kullanim-kosullari",
  "cerez-politikasi",
  ...contentPages.map((page) => page.slug),
];
