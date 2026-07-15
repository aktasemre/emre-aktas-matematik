import type { Metadata } from "next";
import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  Clock3,
  Laptop,
  MapPin,
  Target,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ContactActions } from "@/components/contact-actions";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";

const canonicalPath = "/basaksehir-matematik-ozel-ders";

export const metadata: Metadata = {
  title: "Başakşehir Matematik Özel Ders",
  description:
    "Başakşehir'de LGS, YKS ve ara sınıflar için 16 yıllık öğretmenlik deneyimiyle 90 dakikalık birebir matematik özel ders.",
  alternates: { canonical: canonicalPath },
  openGraph: {
    title: "Başakşehir Matematik Özel Ders | Emre Aktaş",
    description:
      "LGS, YKS ve ara sınıflar için Başakşehir'de yüz yüze uygunluk değerlendirmesi ve çevrim içi birebir matematik dersi.",
    url: `${siteConfig.url}${canonicalPath}`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: siteConfig.heroImage,
        width: 1600,
        height: 900,
        alt: "Başakşehir matematik özel ders çalışma alanı",
      },
    ],
  },
};

const studentGroups = [
  {
    title: "LGS matematik",
    text: "7. ve 8. sınıfta konu eksikleri, yeni nesil soru çözümü ve deneme yanlışlarının düzenli analizi.",
    href: "/lgs-matematik-ozel-ders",
  },
  {
    title: "TYT-AYT matematik",
    text: "TYT temel ve problem çalışması ile AYT konu derinliğini öğrencinin hedefine göre birleştiren plan.",
    href: "/yks-matematik-ozel-ders",
  },
  {
    title: "Ara sınıf matematik",
    text: "6, 7, 9, 10 ve 11. sınıflarda okul dersleri, yazılı hazırlığı ve sonraki yılın temeli için birebir destek.",
    href: "/ara-sinif-matematik-ozel-ders",
  },
];

const process = [
  "Ücretsiz ön görüşmede öğrencinin sınıfı, hedefi ve mevcut durumu konuşulur.",
  "Yüz yüze ders için Başakşehir'deki semt, ulaşım ve saat uygunluğu birlikte değerlendirilir.",
  "Uygunluk sağlanırsa ücretli 90 dakikalık birebir ders programı oluşturulur.",
  "Konu, soru çözümü ve yanlış analizi bir sonraki dersin önceliklerini belirler.",
];

const faqs = [
  {
    question: "Başakşehir'in her bölgesine yüz yüze ders için geliyor musunuz?",
    answer:
      "Yüz yüze ders uygunluğu semt, ulaşım süresi ve ders saatine göre değerlendirilir. Konumunuzu ön görüşmede paylaştığınızda program uygunluğunu netleştirebiliriz.",
  },
  {
    question: "Dersler kaç dakika?",
    answer:
      "Uygunluk sonrasında başlayan birebir dersler 90 dakikadır ve ücretlidir. İlk tanışma ve ön değerlendirme görüşmesi ücretsizdir.",
  },
  {
    question: "Çevrim içi ders seçeneği var mı?",
    answer:
      "Evet. Yüz yüze dersin lokasyon veya saat açısından uygun olmadığı durumlarda çevrim içi ders seçeneği değerlendirilebilir.",
  },
];

export default function BasaksehirPrivateLessonPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Başakşehir Matematik Özel Ders",
    description: metadata.description,
    url: `${siteConfig.url}${canonicalPath}`,
    provider: {
      "@type": "Person",
      name: siteConfig.teacher.name,
      jobTitle: siteConfig.teacher.title,
      telephone: siteConfig.contact.phoneDisplay,
      sameAs: siteConfig.instagram.url,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Başakşehir, İstanbul",
    },
    serviceType: "Birebir matematik özel ders",
  };

  return (
    <div className="min-h-screen bg-[#fbfaf6] text-[#1d252f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader variant="dark" />
      <main>
        <section className="relative min-h-[68vh] overflow-hidden bg-[#1f2930] text-white">
          <Image
            src={siteConfig.heroImage}
            alt=""
            fill
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-[72%_48%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1f2930]/97 via-[#1f2930]/82 to-[#1f2930]/26" />
          <div className="relative mx-auto flex min-h-[68vh] max-w-6xl flex-col px-5 py-16 sm:px-6 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase text-[#f3bf5f]">
                Başakşehir | Yüz yüze ve çevrim içi
              </p>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
                Başakşehir matematik özel ders
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/84">
                LGS, YKS ve ara sınıflarda öğrencinin seviyesine göre planlanan, konu anlatımı ile yanlış analizini birleştiren birebir matematik dersi.
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/76">
                İlk tanışma ve ön değerlendirme ücretsizdir. Uygunluk sonrası başlayan 90 dakikalık dersler ücretlidir.
              </p>
              <div className="mt-8">
                <ContactActions variant="dark" />
              </div>
            </div>

            <div className="mt-auto grid gap-3 pt-12 sm:grid-cols-3">
              {[
                [`${siteConfig.teacher.experienceYears} yıl`, "öğretmenlik deneyimi"],
                ["90 dakika", "birebir ders süresi"],
                ["22.00'ye kadar", "7 gün iletişim"],
              ].map(([value, label]) => (
                <p key={label} className="border-t border-white/24 pt-3 text-sm text-white/76">
                  <span className="block text-lg font-semibold text-white">{value}</span>
                  {label}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase text-[#147874]">Ders alanları</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                Sınav hedefine ve sınıf düzeyine göre çalışma planı
              </h2>
            </div>
            <div className="mt-9 grid gap-4 md:grid-cols-3">
              {studentGroups.map((group) => (
                <Link
                  key={group.href}
                  href={group.href}
                  className="rounded-[8px] border border-[#1d252f]/10 bg-[#fbfaf6] p-6 transition hover:-translate-y-1 hover:border-[#147874]/55 hover:shadow-[0_16px_36px_rgba(29,37,47,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2"
                >
                  <Target aria-hidden="true" size={22} className="text-[#147874]" />
                  <h3 className="mt-5 text-xl font-semibold">{group.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#5b6670]">{group.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#147874]">
                    Ayrıntıları gör
                    <ArrowRight aria-hidden="true" size={16} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#eaf3ef]">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.4fr_0.6fr] lg:py-24">
            <div>
              <p className="text-sm font-semibold uppercase text-[#147874]">Ders biçimi</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                Lokasyondan önce öğrencinin ihtiyacı netleşsin
              </h2>
              <p className="mt-5 text-sm leading-7 text-[#5b6670]">
                Başakşehir&apos;de yüz yüze ders için semt ve saat uygunluğu ön görüşmede değerlendirilir. Ulaşımın uygun olmadığı durumda çevrim içi ders seçeneği planlanabilir.
              </p>
            </div>
            <div className="grid gap-0 border-y border-[#1d252f]/12 sm:grid-cols-2 sm:divide-x sm:divide-[#1d252f]/12">
              <div className="py-7 sm:pr-7">
                <MapPin aria-hidden="true" size={24} className="text-[#147874]" />
                <h3 className="mt-5 text-xl font-semibold">Yüz yüze ders</h3>
                <p className="mt-3 text-sm leading-6 text-[#5b6670]">
                  Başakşehir&apos;deki konum, ulaşım ve program birlikte değerlendirilir.
                </p>
              </div>
              <div className="border-t border-[#1d252f]/12 py-7 sm:border-t-0 sm:pl-7">
                <Laptop aria-hidden="true" size={24} className="text-[#147874]" />
                <h3 className="mt-5 text-xl font-semibold">Çevrim içi ders</h3>
                <p className="mt-3 text-sm leading-6 text-[#5b6670]">
                  Konumdan bağımsız, aynı 90 dakikalık birebir ders ve takip düzeni.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#fbfaf6]">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.38fr_0.62fr] lg:py-24">
            <div>
              <p className="text-sm font-semibold uppercase text-[#985700]">Çalışma sistemi</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                Ön görüşmeden ders takibine dört adım
              </h2>
            </div>
            <ol className="divide-y divide-[#1d252f]/10 border-y border-[#1d252f]/10">
              {process.map((step, index) => (
                <li key={step} className="grid grid-cols-[44px_1fr] gap-4 py-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[#1f2930] text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <p className="self-center text-sm leading-6 text-[#43505d]">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.38fr_0.62fr] lg:py-24">
            <div>
              <p className="text-sm font-semibold uppercase text-[#147874]">Sıkça sorulanlar</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                Başakşehir&apos;de ders süreci
              </h2>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-[#5b6670]">
                <span className="inline-flex items-center gap-2">
                  <Clock3 aria-hidden="true" size={17} /> 90 dakika
                </span>
                <span className="inline-flex items-center gap-2">
                  <BookOpenCheck aria-hidden="true" size={17} /> Birebir takip
                </span>
              </div>
            </div>
            <div className="grid gap-3">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-[8px] border border-[#1d252f]/10 bg-[#fbfaf6] p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                    <span>{faq.question}</span>
                    <CheckCircle2 aria-hidden="true" size={18} className="shrink-0 text-[#147874]" />
                  </summary>
                  <p className="mt-4 text-sm leading-6 text-[#5b6670]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#1f2930] text-white">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:py-20">
            <p className="text-sm font-semibold uppercase text-[#f3bf5f]">Ücretsiz ön görüşme</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
              Konum, hedef ve ders uygunluğunu birlikte netleştirelim
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/76">
              Öğrencinin sınıfını, hedefini ve Başakşehir&apos;deki konumunuzu paylaşın. Yüz yüze veya çevrim içi ders için uygun seçeneği ön görüşmede belirleyelim.
            </p>
            <div className="mt-7">
              <ContactActions variant="dark" />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
