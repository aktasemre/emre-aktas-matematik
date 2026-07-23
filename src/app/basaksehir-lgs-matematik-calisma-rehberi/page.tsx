import type { Metadata } from "next";
import { ArrowRight, BookOpenCheck, CalendarDays, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { ContactActions } from "@/components/contact-actions";
import { ScrollRevealController } from "@/components/scroll-reveal-controller";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  buildBreadcrumbSchema,
  buildOrganizationSchema,
  buildTeacherSchema,
  schemaIds,
  serializeJsonLd,
} from "@/lib/schema";
import { buildWhatsAppUrl, siteConfig } from "@/lib/site";

const canonicalPath = "/basaksehir-lgs-matematik-calisma-rehberi";
const pageUrl = `${siteConfig.url}${canonicalPath}`;
const publishedDate = "2026-07-24";
const title = "Başakşehir 2026 LGS Matematik Çalışma Rehberi";
const description =
  "Başakşehir'deki 7. ve 8. sınıf öğrencileri için deneme analizi, haftalık LGS matematik planı ve resmî kaynak seçimi üzerine öğretmen rehberi.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: canonicalPath },
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "article",
    publishedTime: publishedDate,
    modifiedTime: publishedDate,
    authors: [siteConfig.teacher.name],
    images: [
      {
        url: siteConfig.heroImage,
        width: 1600,
        height: 900,
        alt: "LGS matematik çalışma planı ve deneme analizi",
      },
    ],
  },
};

const weeklyPlan = [
  {
    title: "Denemeyi puan değil, hata türü üzerinden okuyun",
    text: "Yanlış ve boşları konu eksiği, soru metnini yorumlama, işlem hatası ve süre yönetimi olarak ayırın. Aynı hata tekrar ediyorsa ilk çalışma önceliği orasıdır.",
  },
  {
    title: "Eksik konu için kısa ve hedefli tekrar yapın",
    text: "Uzun konu listesine dönmek yerine denemede görülen ihtiyaca odaklanın. Konu özeti sonrasında kolaydan zora birkaç seçilmiş soru ile anlayışı kontrol edin.",
  },
  {
    title: "Benzer sorudan karma soruya geçin",
    text: "Önce aynı kazanımı ölçen sorularla yöntemi oturtun; ardından farklı konuların birlikte kullanıldığı yeni nesil sorulara geçin.",
  },
  {
    title: "Haftayı yeniden ölçerek kapatın",
    text: "Kısa bir karma test veya deneme ile çalışmanın etkisini kontrol edin. Sonuç düzelmediyse yalnızca soru sayısını artırmak yerine çözüm adımını yeniden inceleyin.",
  },
];

const errorTypes = [
  "Kazanımı veya temel işlemi bilmemek",
  "Soru metnindeki veriyi eksik ya da yanlış okumak",
  "Doğru yöntemi seçip işlemi hatalı yürütmek",
  "Süre baskısı nedeniyle çözümü tamamlayamamak",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: title,
      description,
      url: pageUrl,
      mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
      datePublished: publishedDate,
      dateModified: publishedDate,
      author: { "@id": schemaIds.teacher },
      publisher: { "@id": schemaIds.organization },
      inLanguage: "tr-TR",
      about: ["LGS Matematik", "Deneme Analizi", "Başakşehir Matematik Özel Ders"],
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: title,
      description,
      isPartOf: { "@id": schemaIds.website },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${siteConfig.url}${siteConfig.heroImage}`,
      },
      inLanguage: "tr-TR",
    },
    buildOrganizationSchema(),
    buildTeacherSchema(),
    buildBreadcrumbSchema(pageUrl, title),
  ],
};

export default function BasaksehirLgsMatematikCalismaRehberi() {
  const whatsappUrl = buildWhatsAppUrl(
    "Merhaba Emre Hocam, Başakşehir'de LGS matematik çalışma planı için ücretsiz ön görüşme planlamak istiyorum. Öğrencim ... sınıf, son deneme sonucu ...",
  );

  return (
    <div className="min-h-screen bg-[#fbfaf6] text-[#1d252f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <ScrollRevealController />
      <SiteHeader variant="dark" />
      <main>
        <article>
          <header className="bg-[#1f2930] text-white">
            <div className="mx-auto max-w-4xl px-5 py-14 sm:px-6 sm:py-20 lg:py-24">
              <nav aria-label="Sayfa yolu" className="text-xs text-white/66">
                <Link href="/" className="transition hover:text-white">
                  Ana Sayfa
                </Link>
                <span aria-hidden="true" className="mx-2">/</span>
                <span>LGS Matematik Rehberi</span>
              </nav>
              <p className="mt-7 text-sm font-semibold uppercase text-[#f3bf5f]">
                Öğretmen rehberi
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-[-0.025em] sm:text-5xl lg:text-6xl">
                Başakşehir 2026 LGS matematik çalışma rehberi
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">
                Deneme sonucunu doğru okumaktan haftalık çalışma döngüsüne kadar,
                LGS matematik hazırlığını uygulanabilir adımlara ayıran bir öğretmen notu.
              </p>
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/68">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays aria-hidden="true" size={17} />
                  24 Temmuz 2026
                </span>
                <span>{siteConfig.teacher.name} · Matematik Öğretmeni</span>
                <span>{siteConfig.teacher.experienceYears} yıllık deneyim</span>
              </div>
            </div>
          </header>

          <section className="bg-white">
            <div className="mx-auto grid max-w-4xl gap-8 px-5 py-14 sm:px-6 lg:grid-cols-[0.34fr_0.66fr] lg:py-20">
              <div>
                <p className="text-sm font-semibold uppercase text-[#147874]">Başlangıç noktası</p>
                <h2 className="mt-3 text-3xl font-semibold leading-tight">
                  Net sayısı tek başına çalışma planı değildir
                </h2>
              </div>
              <div className="text-base leading-8 text-[#4e5b66]">
                <p>
                  Bir LGS matematik denemesinde aynı net, iki öğrenci için farklı ihtiyaçlar
                  gösterebilir. Biri temel kazanımda zorlanırken diğeri uzun soru metninde
                  veriyi ayıklayamıyor veya süreyi doğru kullanamıyor olabilir.
                </p>
                <p className="mt-5">
                  Bu nedenle ilk iş daha fazla soru çözmek değil, yanlışın hangi adımda
                  oluştuğunu bulmaktır. Başakşehir&apos;deki yüz yüze ders planında da çevrim
                  içi çalışmada da başlangıç önceliği öğrencinin son denemeleri ve çözüm
                  davranışı üzerinden belirlenir.
                </p>
                <Link
                  href="/basaksehir-matematik-ozel-ders"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-[#147874] underline decoration-[#147874]/30 underline-offset-4"
                >
                  Başakşehir matematik özel ders sürecini incele
                  <ArrowRight aria-hidden="true" size={17} />
                </Link>
              </div>
            </div>
          </section>

          <section className="bg-[#eaf3ef]">
            <div className="mx-auto max-w-4xl px-5 py-14 sm:px-6 lg:py-20">
              <p className="text-sm font-semibold uppercase text-[#147874]">Haftalık döngü</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
                Dört adımda ölçülebilir LGS matematik çalışması
              </h2>
              <ol className="mt-9 grid gap-4 md:grid-cols-2">
                {weeklyPlan.map((step, index) => (
                  <li
                    key={step.title}
                    className="rounded-[8px] border border-[#1d252f]/10 bg-white p-6"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[#1f2930] text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#5b6670]">{step.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="bg-white">
            <div className="mx-auto grid max-w-4xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
              <div>
                <p className="text-sm font-semibold uppercase text-[#985700]">Deneme analizi</p>
                <h2 className="mt-3 text-3xl font-semibold leading-tight">
                  Yanlışları dört başlıkta sınıflandırın
                </h2>
                <p className="mt-5 text-sm leading-7 text-[#5b6670]">
                  Aynı yanlış türünün birkaç denemede tekrar etmesi, bir sonraki haftanın
                  önceliğini belirlemek için tek bir net değişiminden daha anlamlıdır.
                </p>
              </div>
              <ul className="grid gap-3">
                {errorTypes.map((errorType) => (
                  <li
                    key={errorType}
                    className="flex gap-3 rounded-[8px] border border-[#1d252f]/10 bg-[#fbfaf6] p-4 text-sm leading-6 text-[#43505d]"
                  >
                    <CheckCircle2
                      aria-hidden="true"
                      size={19}
                      className="mt-0.5 shrink-0 text-[#147874]"
                    />
                    {errorType}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="bg-[#fbfaf6]">
            <div className="mx-auto grid max-w-4xl gap-9 px-5 py-14 sm:px-6 lg:grid-cols-[0.42fr_0.58fr] lg:py-20">
              <div>
                <p className="text-sm font-semibold uppercase text-[#147874]">Kaynak seçimi</p>
                <h2 className="mt-3 text-3xl font-semibold leading-tight">
                  Çok kaynak değil, amacı belli kaynak
                </h2>
              </div>
              <div>
                <p className="text-base leading-8 text-[#4e5b66]">
                  MEB örnek soruları ve resmî çalışma materyalleri sınav dilini görmek için
                  temel başvuru noktalarıdır. Bir kaynak konu tekrarı, biri yeni nesil soru,
                  biri de deneme için seçilebilir; aynı işi yapan çok sayıda kitabı yarım
                  bırakmak yerine seçilen materyali analiz ederek tamamlamak daha sağlıklıdır.
                </p>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <Link
                    href="/kaynaklar/lgs"
                    className="rounded-[8px] border border-[#147874]/25 bg-white p-5 transition hover:border-[#147874]/60"
                  >
                    <BookOpenCheck aria-hidden="true" size={21} className="text-[#147874]" />
                    <span className="mt-4 block font-semibold">LGS kaynak arşivi</span>
                    <span className="mt-2 block text-sm leading-6 text-[#5b6670]">
                      MEB ve MEBİ kaynaklarını tek yerde filtreleyin.
                    </span>
                  </Link>
                  <Link
                    href="/kaynaklar/meb-basic-education-books"
                    className="rounded-[8px] border border-[#147874]/25 bg-white p-5 transition hover:border-[#147874]/60"
                  >
                    <BookOpenCheck aria-hidden="true" size={21} className="text-[#147874]" />
                    <span className="mt-4 block font-semibold">MEB temel eğitim kitapları</span>
                    <span className="mt-2 block text-sm leading-6 text-[#5b6670]">
                      Sınıf düzeyine uygun resmî çalışma kitaplarına ulaşın.
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#1f2930] text-white">
            <div className="mx-auto grid max-w-4xl gap-8 px-5 py-14 sm:px-6 lg:grid-cols-[0.6fr_0.4fr] lg:items-center lg:py-20">
              <div>
                <p className="text-sm font-semibold uppercase text-[#f3bf5f]">
                  Kişisel başlangıç planı
                </p>
                <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                  Son denemeyi birlikte okuyup ilk öncelikleri belirleyelim
                </h2>
                <p className="mt-5 text-sm leading-7 text-white/76">
                  Ücretsiz ön görüşmede öğrencinin sınıfı, son denemeleri, zorlandığı soru
                  türleri ve Başakşehir&apos;deki ders uygunluğu değerlendirilir.
                </p>
              </div>
              <ContactActions
                variant="dark"
                whatsappUrl={whatsappUrl}
                analyticsPlacement="lgs_guide_bottom"
              />
            </div>
          </section>

          <footer className="bg-white">
            <div className="mx-auto max-w-4xl px-5 py-10 text-sm leading-6 text-[#5b6670] sm:px-6">
              <p>
                Bu rehber genel bilgilendirme amacı taşır. Her öğrencinin çalışma süresi,
                konu sırası ve kaynak ihtiyacı mevcut seviyesine göre ayrıca belirlenmelidir.
              </p>
              <Link
                href="/lgs-matematik-ozel-ders"
                className="mt-4 inline-flex items-center gap-2 font-semibold text-[#147874]"
              >
                LGS matematik özel ders yaklaşımını incele
                <ArrowRight aria-hidden="true" size={17} />
              </Link>
            </div>
          </footer>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
