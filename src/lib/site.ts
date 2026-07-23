const whatsappMessage =
  "Merhaba Emre Hocam, Matematik Akademi için ücretsiz ön görüşme planlamak istiyorum. Öğrencim ... sınıf, hedefimiz ...";

const phoneE164 = "905424513769";

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${phoneE164}?text=${encodeURIComponent(message)}`;
}

export const siteConfig = {
  name: "Matematik Akademi",
  url: "https://www.matematik-akademi.com",
  locale: "tr_TR",
  areaServed: "İstanbul Avrupa Yakası",
  serviceAreas: [
    "Başakşehir",
    "Florya",
    "Bahçeşehir",
    "Göktürk",
    "Atakent",
    "Ispartakule",
  ],
  teacher: {
    name: "Emre Aktaş",
    title: "Matematik Öğretmeni",
    experienceYears: 16,
    profileImage: "/images/profil/emre-aktas-ogretmen.png",
    expertise: "LGS, YKS ve ara sınıf matematik",
    curriculumNote:
      "Yeni Maarif Modeli güncellemelerini takip eden, öğrenci seviyesine göre ilerleyen ders yaklaşımı.",
  },
  contact: {
    phoneDisplay: "0542 451 37 69",
    phoneE164,
    phoneUrl: `tel:+${phoneE164}`,
    whatsappMessage,
    whatsappUrl: buildWhatsAppUrl(whatsappMessage),
    availability: "Haftanın 7 günü, 22.00'ye kadar",
  },
  instagram: {
    url: "https://www.instagram.com/matematik.akademi.emre/",
    handle: "@matematik.akademi.emre",
    bio: "Emre Aktaş | Matematik Öğretmeni\nLGS • YKS • Ara Sınıflar\n16 yıl deneyim | İstanbul Avrupa Yakası\nÜcretsiz ön görüşme için WhatsApp ↓",
    profileName: "Emre Aktaş | Matematik Öğretmeni",
  },
  pricingNote:
    "İlk tanışma ve ön değerlendirme ücretsizdir. Birebir ders ücreti, öğrencinin ihtiyacı ve ders planı netleştikten sonra paylaşılır.",
  pricingFactors: [
    "Sınıf ve çalışma hedefi",
    "Yüz yüze veya online ders",
    "Semt ve ulaşım süresi",
    "Ders sıklığı ve program uygunluğu",
  ],
  lessonRequestNote:
    "İlk tanışma ve ön değerlendirme görüşmesi ücretsizdir. Bu görüşmede öğrencinin sınıfı, hedefi, mevcut matematik seviyesi, semt bilgisi ve ders beklentisi birlikte değerlendirilir.",
  description:
    "Emre Aktaş ile İstanbul Avrupa Yakası'nda LGS, YKS ve ara sınıflar için 90 dakikalık birebir matematik özel ders.",
  heroImage: "/images/math-lesson-clean-hero.png",
};

export const navItems = [
  { label: "LGS", href: "/lgs-matematik-ozel-ders" },
  { label: "YKS", href: "/yks-matematik-ozel-ders" },
  { label: "Ara Sınıflar", href: "/ara-sinif-matematik-ozel-ders" },
  { label: "Kaynaklar", href: "/kaynaklar" },
  { label: "Hakkımda", href: "/hakkimda" },
  { label: "Ön Görüşme", href: "/iletisim" },
];

export const serviceCards = [
  {
    title: "LGS Matematik",
    href: "/lgs-matematik-ozel-ders",
    text: "7. ve 8. sınıf öğrencileri için MEB kazanımları, yeni nesil soru çözümü ve deneme analizi.",
  },
  {
    title: "TYT-AYT Matematik",
    href: "/yks-matematik-ozel-ders",
    text: "Temel eksik kapatma, problem pratiği, AYT konu derinliği ve hedefe göre sınav planı.",
  },
  {
    title: "Ara Sınıf Desteği",
    href: "/ara-sinif-matematik-ozel-ders",
    text: "6, 7, 9, 10 ve 11. sınıflarda okul sınavı, yazılı hazırlığı ve kalıcı matematik temeli.",
  },
];
