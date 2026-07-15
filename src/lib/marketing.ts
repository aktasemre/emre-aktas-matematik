import { siteConfig } from "@/lib/site";

export const primaryCta = {
  label: "WhatsApp'tan Ön Görüşme",
  href: siteConfig.contact.whatsappUrl,
};

export const consultationSteps = [
  {
    title: "Seviye ve hedef analizi",
    text: "Öğrencinin sınıfı, mevcut matematik seviyesi ve LGS, YKS veya okul hedefi netleştirilir.",
  },
  {
    title: "Eksiklerin önceliklendirilmesi",
    text: "Zorlanılan konu başlıkları belirlenir ve ilk çalışma öncelikleri çıkarılır.",
  },
  {
    title: "Ders formatı ve uyum",
    text: "Yüz yüze veya online ders beklentisi, semt bilgisi ve öğretmen-öğrenci uyumu değerlendirilir.",
  },
  {
    title: "Ders planı ve ücretlendirme",
    text: "Ön görüşmenin ücretsiz olduğu, sonrasında başlayan 90 dakikalık birebir derslerin ücretli olduğu; ders temposu ve ücretin neye göre netleşeceği açıklanır.",
  },
];

export const suggestedWhatsAppMessage =
  siteConfig.contact.whatsappMessage;

export const faqs = [
  {
    question: "Doğrudan derslere başlayabiliyor muyuz?",
    answer:
      "Derslere başlamadan önce kısa bir ücretsiz tanışma ve ön değerlendirme görüşmesi planlamak daha sağlıklı olur. Bu görüşmede öğrencinin seviyesi, hedefi, ders formatı ve uygun çalışma temposu netleştirilir.",
  },
  {
    question: "Ön görüşme ve dersler ücretli mi?",
    answer:
      "İlk tanışma ve ön değerlendirme görüşmesi ücretsizdir. Karşılıklı uygunluk sonrasında başlayan 90 dakikalık birebir dersler ücretlidir.",
  },
  {
    question: "Görüşmeden sonra derse başlamak zorunlu mu?",
    answer:
      "Hayır. Ön görüşme sonrası karşılıklı olarak uygun görülürse ders programı oluşturulur. Amaç, öğrencinin ihtiyacına gerçekten uygun bir plan kurmaktır.",
  },
  {
    question: "Yüz yüze ders hangi bölgelerde yapılabilir?",
    answer: `Yüz yüze ders için öncelikli bölgeler ${siteConfig.serviceAreas.join(
      ", "
    )} ve yakın çevredir. Uygunluk durumu semt ve saat bilgisine göre değerlendirilir.`,
  },
  {
    question: "Ders ücreti nasıl netleşiyor?",
    answer:
      "Ücretli dersler 90 dakikalık periyotlarla planlanır. Ücret; öğrencinin sınıfı, hedefi, dersin yüz yüze veya online olması ve lokasyona göre ön görüşmede netleştirilir.",
  },
];
