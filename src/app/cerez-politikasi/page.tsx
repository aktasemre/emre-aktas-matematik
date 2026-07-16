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
      "Matematik Akademi reklam, yeniden pazarlama veya ziyaretçi profilleme amacıyla çerez kullanmaz. Sitede Google Analytics bulunmaz; toplulaştırılmış sayfa görüntüleme istatistikleri için çerez kullanmayan Vercel Web Analytics etkindir.",
      "Sitenin temel sayfalarını görüntülemek için ziyaretçinin cihazında kalıcı bir tercih veya pazarlama çerezi oluşturulması gerekmez.",
    ],
  },
  {
    title: "Vercel Web Analytics",
    paragraphs: [
      "Vercel Web Analytics; ziyaret edilen sayfa, yönlendiren adres, cihaz, işletim sistemi, tarayıcı ve yaklaşık konum gibi toplulaştırılmış teknik istatistikler oluşturabilir. Hizmet, ziyaretçileri farklı siteler arasında izleyen üçüncü taraf çerezleri kullanmaz.",
      "Analiz verileri sitenin kullanımını ve teknik deneyimini iyileştirmek amacıyla değerlendirilir; reklam hedefleme amacıyla kullanılmaz.",
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
      intro="Sitede reklam veya ziyaretçi profilleme çerezleri kullanılmaz. Bu sayfa çerezsiz Vercel Web Analytics kullanımını, zorunlu teknik işlemleri ve harici bağlantıların sınırlarını açıklar."
      sections={sections}
    />
  );
}
