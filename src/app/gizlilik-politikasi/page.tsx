import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "Matematik Akademi web sitesinin kişisel veri ve gizlilik yaklaşımı.",
  alternates: { canonical: "/gizlilik-politikasi" },
};

const sections: LegalSection[] = [
  {
    title: "Toplanan bilgiler",
    paragraphs: [
      "Bu web sitesinde üyelik, kullanıcı hesabı veya iletişim formu bulunmaz. Bu nedenle site üzerinden ad, e-posta adresi ya da öğrenci bilgisi doğrudan toplanmaz.",
      "Barındırma altyapısı; güvenlik, hata tespiti ve hizmetin çalışması için IP adresi, tarayıcı türü, istek zamanı ve ziyaret edilen sayfa gibi sınırlı teknik sunucu kayıtları oluşturabilir.",
    ],
  },
  {
    title: "Ziyaretçi analizi",
    paragraphs: [
      "Site, hangi sayfaların ve cihaz türlerinin daha çok kullanıldığını toplu olarak görebilmek için Vercel Web Analytics kullanır. Bu hizmet üçüncü taraf pazarlama çerezi kullanmaz ve sayfa görüntüleme verilerini kişisel bir ziyaretçi profili oluşturmak amacıyla işlemez.",
      "Analiz kapsamında ziyaret edilen yol, yönlendiren sayfa, cihaz ve tarayıcı türü ile yaklaşık ülke veya şehir gibi toplulaştırılmış teknik bilgiler işlenebilir. Site üzerinde kişisel bilgi içeren kullanıcı hesabı, profil adresi veya özel URL oluşturulmaz.",
    ],
  },
  {
    title: "Telefon, WhatsApp ve Instagram",
    paragraphs: [
      "Telefon veya WhatsApp üzerinden paylaştığınız bilgiler yalnızca ön görüşme, ders uygunluğu ve iletişim talebinizin yürütülmesi amacıyla kullanılır.",
      "WhatsApp bağlantısını kullandığınızda iletişim Meta tarafından işletilen harici bir hizmet üzerinden gerçekleşir. Bu hizmetteki veri işleme süreçleri WhatsApp ve Meta'nın kendi koşulları ile gizlilik politikasına tabidir.",
      "Instagram profil bağlantısını kullandığınızda Instagram'ın kendi gizlilik ve çerez koşulları geçerli olur. Matematik Akademi, Instagram'ın ziyaretçi verilerini nasıl işlediğini kontrol etmez.",
    ],
  },
  {
    title: "Dış bağlantılar",
    paragraphs: [
      "Kaynak arşivindeki MEB, EBA, MEBİ, ÖSYM ve diğer resmî sayfalara ait bağlantılar üçüncü taraf sitelere yönlendirir. Bu sitelerin içerik ve veri uygulamalarından ilgili kurumlar sorumludur.",
    ],
  },
  {
    title: "Saklama ve haklar",
    paragraphs: [
      "İletişim sırasında paylaşılan bilgiler, talebin ve olası ders sürecinin gerektirdiği süre boyunca tutulur; artık gerekli olmadığında silinir veya güvenli şekilde erişim dışı bırakılır.",
      "Paylaştığınız bilgiler hakkında erişim, düzeltme veya silme talebinizi iletişim sayfasındaki telefon numarası üzerinden iletebilirsiniz.",
      "Vercel Web Analytics verileri kişisel kullanıcı hesabıyla eşleştirilmez; analiz hizmetinin teknik saklama ve güvenlik uygulamalarında Vercel'in güncel gizlilik yaklaşımı geçerlidir.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Kişisel veriler"
      title="Gizlilik Politikası"
      intro="Matematik Akademi, ziyaretçiden yalnızca iletişim ve ders süreci için gerekli bilgileri ister; web sitesi üzerinde kullanıcı hesabı veya bilgi toplayan bir form kullanmaz. Ziyaret istatistikleri çerezsiz ve toplulaştırılmış analizle ölçülür."
      sections={sections}
    />
  );
}
