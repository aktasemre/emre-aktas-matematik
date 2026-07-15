import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Kullanım Koşulları",
  description: "Matematik Akademi web sitesi, kaynak arşivi ve özel ders hizmetlerine ilişkin kullanım koşulları.",
  alternates: { canonical: "/kullanim-kosullari" },
};

const sections: LegalSection[] = [
  {
    title: "Sitenin amacı",
    paragraphs: [
      "Bu site; Matematik Akademi'nin birebir matematik dersleri hakkında bilgi vermek ve MEB, EBA, MEBİ ile ÖSYM'nin yayımladığı eğitim kaynaklarına erişimi kolaylaştırmak amacıyla hazırlanmıştır.",
      "Sitedeki açıklamalar genel bilgilendirme niteliğindedir; belirli bir sınav sonucu, not artışı veya başarı garantisi oluşturmaz.",
    ],
  },
  {
    title: "Ders ve ön görüşme",
    paragraphs: [
      "İlk tanışma ve ön değerlendirme görüşmesi ücretsizdir. Bu görüşmeden sonra uygunluk sağlanırsa başlayan birebir dersler 90 dakika ve ücretlidir.",
      "Ders ücreti; öğrencinin sınıfı, hedefi, ders biçimi, lokasyon ve program uygunluğuna göre ön görüşmede netleştirilir. Web sitesindeki iletişim talebi tek başına ders rezervasyonu veya sözleşme oluşturmaz.",
    ],
  },
  {
    title: "Kaynak arşivi",
    paragraphs: [
      "Arşivdeki belgeler ilgili kurumların resmî sayfalarına bağlantı verir. Belge hakları ve içerik sorumluluğu yayımlayan kuruma aittir.",
      "Harici sayfaların adresleri, erişim koşulları veya içerikleri zaman içinde değişebilir. Bağlantılar düzenli kontrol edilse de kesintisiz erişim garanti edilmez.",
    ],
  },
  {
    title: "Sorumlu kullanım",
    paragraphs: [
      "Ziyaretçiler siteyi hukuka uygun biçimde kullanmalı; hizmetin güvenliğini, erişilebilirliğini veya diğer ziyaretçilerin kullanımını bozacak girişimlerde bulunmamalıdır.",
      "Bu koşullar, sitenin işleyişi veya sunulan hizmetler değiştiğinde güncellenebilir. Güncel metin bu sayfada yayımlandığı tarihten itibaren geçerlidir.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Site ve hizmet"
      title="Kullanım Koşulları"
      intro="Bu koşullar web sitesinin, resmî kaynak bağlantılarının ve ön görüşme ile başlayan özel ders sürecinin kapsamını açıklar."
      sections={sections}
    />
  );
}
