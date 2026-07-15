import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description: "Matematik Akademi web sitesindeki çerez ve benzeri teknolojilerin kullanımına ilişkin açıklama.",
  alternates: { canonical: "/cerez-politikasi" },
};

const sections: LegalSection[] = [
  {
    title: "Mevcut kullanım",
    paragraphs: [
      "Matematik Akademi şu anda reklam, yeniden pazarlama veya ziyaretçi profilleme amacıyla çerez kullanmaz. Sitede Google Analytics ya da benzeri bir ziyaretçi analiz aracı etkin değildir.",
      "Sitenin temel sayfalarını görüntülemek için ziyaretçinin cihazında kalıcı bir tercih veya pazarlama çerezi oluşturulması gerekmez.",
    ],
  },
  {
    title: "Zorunlu teknolojiler",
    paragraphs: [
      "Barındırma ve güvenlik altyapısı, isteğin güvenli biçimde işlenmesi veya kötüye kullanımın önlenmesi için zorunlu teknik bilgiler kullanabilir. Bu işlemler pazarlama amacı taşımaz.",
    ],
  },
  {
    title: "Harici hizmetler",
    paragraphs: [
      "WhatsApp, MEB, EBA, MEBİ, ÖSYM veya başka bir harici bağlantıya geçtiğinizde ilgili hizmet kendi çerezlerini ve benzeri teknolojilerini kullanabilir. Bu kullanım ilgili hizmetin politikasına tabidir.",
    ],
  },
  {
    title: "Gelecekteki değişiklikler",
    paragraphs: [
      "Ziyaretçi analizi veya zorunlu olmayan çerezler ileride etkinleştirilirse bu politika, kullanılan hizmetler ve tercih seçenekleri açıklanacak şekilde güncellenecektir. Gerektiğinde ziyaretçiden uygun yöntemle onay alınacaktır.",
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <LegalPage
      eyebrow="Tarayıcı verileri"
      title="Çerez Politikası"
      intro="Sitede şu anda reklam veya ziyaretçi analizi çerezleri kullanılmaz. Bu sayfa mevcut teknik kullanımı ve harici bağlantıların sınırlarını açıklar."
      sections={sections}
    />
  );
}
