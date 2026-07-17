import type { Metadata } from "next";
import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  Clock3,
  Laptop,
  MapPin,
  Route,
  Target,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ContactActions } from "@/components/contact-actions";
import { HeroMotion } from "@/components/hero-motion";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { locationPages, type LocationPageData } from "@/lib/locations";
import { siteConfig } from "@/lib/site";

type LocationLessonPageProps = {
  location: LocationPageData;
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

export function getLocationMetadata(location: LocationPageData): Metadata {
  const canonicalPath = `/${location.slug}`;

  return {
    title: `${location.name} Matematik Özel Ders`,
    description: location.description,
    alternates: { canonical: canonicalPath },
    openGraph: {
      title: `${location.name} Matematik Özel Ders | ${siteConfig.teacher.name}`,
      description: location.description,
      url: `${siteConfig.url}${canonicalPath}`,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: siteConfig.heroImage,
          width: 1600,
          height: 900,
          alt: `${location.name} matematik özel ders çalışma alanı`,
        },
      ],
    },
  };
}

export function LocationLessonPage({ location }: LocationLessonPageProps) {
  const whatsappMessage = `Merhaba Emre Hocam, ${location.name} için ücretsiz ön görüşme planlamak istiyorum. Öğrencim ... sınıf, hedefimiz ...`;
  const whatsappUrl = `https://wa.me/${siteConfig.contact.phoneE164}?text=${encodeURIComponent(whatsappMessage)}`;
  const process = [
    "Ücretsiz ön görüşmede öğrencinin sınıfı, hedefi ve mevcut matematik seviyesi konuşulur.",
    `${location.name}'deki açık adres, ulaşım ve ders saati uygunluğu birlikte değerlendirilir.`,
    "Uygunluk sağlanırsa ücretli 90 dakikalık birebir ders programı oluşturulur.",
    "Konu, soru çözümü ve yanlış analizi bir sonraki dersin önceliklerini belirler.",
  ];
  const faqs = [
    {
      question: location.localFaqQuestion,
      answer: location.localFaqAnswer,
    },
    {
      question: "Dersler kaç dakika ve ön görüşme ücretli mi?",
      answer:
        "İlk tanışma ve ön değerlendirme görüşmesi ücretsizdir. Uygunluk sonrasında başlayan birebir dersler 90 dakikadır ve ücretlidir.",
    },
    {
      question: "Çevrim içi ders seçeneği var mı?",
      answer:
        "Evet. Yüz yüze dersin lokasyon veya saat açısından uygun olmadığı durumlarda aynı takip düzeniyle çevrim içi ders planlanabilir.",
    },
  ];
  const otherLocations = locationPages.filter((item) => item.slug !== location.slug);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${location.name} Matematik Özel Ders`,
    description: location.description,
    url: `${siteConfig.url}/${location.slug}`,
    provider: {
      "@type": "Person",
      name: siteConfig.teacher.name,
      jobTitle: siteConfig.teacher.title,
      telephone: `+${siteConfig.contact.phoneE164}`,
      image: `${siteConfig.url}${siteConfig.teacher.profileImage}`,
      sameAs: [siteConfig.instagram.url],
    },
    areaServed: {
      "@type": "Place",
      name: location.schemaAreaName,
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
        <section className="relative overflow-hidden bg-[#1f2930] text-white lg:min-h-[68vh]">
          <Image
            src={siteConfig.heroImage}
            alt=""
            fill
            fetchPriority="high"
            loading="eager"
            sizes="100vw"
            className="object-cover object-[72%_48%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1f2930]/97 via-[#1f2930]/82 to-[#1f2930]/26" />
          <HeroMotion variant="route" />
          <div className="relative z-10 mx-auto flex max-w-6xl flex-col px-5 py-10 sm:px-6 sm:py-16 lg:min-h-[68vh] lg:py-24">
            <div className="hero-copy-reveal max-w-3xl">
              <p className="text-sm font-semibold uppercase text-[#f3bf5f]">
                {location.eyebrow}
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-[1.08] sm:mt-5 sm:text-5xl lg:text-6xl">
                {location.name} matematik özel ders
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/84 sm:mt-6 sm:text-lg sm:leading-8">
                {location.intro}
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/76">
                İlk tanışma ve ön değerlendirme ücretsizdir. Uygunluk sonrasında başlayan 90 dakikalık birebir dersler ücretlidir.
              </p>
              <div className="mt-6 sm:mt-8">
                <ContactActions variant="dark" whatsappUrl={whatsappUrl} />
              </div>
            </div>

            <div className="hero-facts-reveal mt-auto grid grid-cols-3 gap-2 pt-7 sm:gap-3 sm:pt-12">
              {[
                [`${siteConfig.teacher.experienceYears} yıl`, "öğretmenlik deneyimi"],
                ["90 dakika", "birebir ders süresi"],
                ["22.00'ye kadar", "7 gün iletişim"],
              ].map(([value, label]) => (
                <p key={label} className="rounded-lg border border-white/15 bg-white/[0.06] px-2 py-2 text-center text-[11px] leading-4 text-white/76 sm:rounded-none sm:border-x-0 sm:border-b-0 sm:bg-transparent sm:px-0 sm:pt-3 sm:text-left sm:text-sm">
                  <span className="block text-sm font-semibold text-white sm:text-lg">{value}</span>
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
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.38fr_0.62fr] lg:py-24">
            <div>
              <p className="text-sm font-semibold uppercase text-[#147874]">Bölge planı</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                {location.name}&apos;de yüz yüze ders nasıl planlanır?
              </h2>
              <p className="mt-5 text-sm leading-7 text-[#5b6670]">
                {location.locationSummary}
              </p>
            </div>
            <div className="border-y border-[#1d252f]/12">
              <div className="grid gap-0 sm:grid-cols-2 sm:divide-x sm:divide-[#1d252f]/12">
                <div className="py-7 sm:pr-7">
                  <Route aria-hidden="true" size={24} className="text-[#147874]" />
                  <h3 className="mt-5 text-xl font-semibold">Ulaşım ve saat</h3>
                  <p className="mt-3 text-sm leading-6 text-[#5b6670]">
                    {location.planningNote}
                  </p>
                </div>
                <div className="border-t border-[#1d252f]/12 py-7 sm:border-t-0 sm:pl-7">
                  <MapPin aria-hidden="true" size={24} className="text-[#147874]" />
                  <h3 className="mt-5 text-xl font-semibold">Yakın çevre</h3>
                  <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-[#5b6670]">
                    {location.nearbyAreas.map((area) => (
                      <li key={area}>{area}</li>
                    ))}
                  </ul>
                </div>
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
                {location.name}&apos;de ders süreci
              </h2>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-[#5b6670]">
                <span className="inline-flex items-center gap-2">
                  <Clock3 aria-hidden="true" size={17} /> 90 dakika
                </span>
                <span className="inline-flex items-center gap-2">
                  <BookOpenCheck aria-hidden="true" size={17} /> Birebir takip
                </span>
                <span className="inline-flex items-center gap-2">
                  <Laptop aria-hidden="true" size={17} /> Çevrim içi seçenek
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

        <section className="border-y border-[#1d252f]/10 bg-[#fbfaf6]">
          <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:py-16">
            <p className="text-sm font-semibold uppercase text-[#147874]">Diğer ders bölgeleri</p>
            <nav aria-label="Diğer matematik özel ders bölgeleri" className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {otherLocations.map((item) => (
                <Link
                  key={item.slug}
                  href={`/${item.slug}`}
                  className="flex min-h-12 items-center justify-between gap-3 border-b border-[#1d252f]/12 py-3 text-sm font-semibold transition hover:border-[#147874] hover:text-[#147874] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2"
                >
                  {item.name}
                  <ArrowRight aria-hidden="true" size={16} />
                </Link>
              ))}
            </nav>
          </div>
        </section>

        <section className="bg-[#1f2930] text-white">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:py-20">
            <p className="text-sm font-semibold uppercase text-[#f3bf5f]">Ücretsiz ön görüşme</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
              Konum, hedef ve ders uygunluğunu birlikte netleştirelim
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/76">
              {location.cta}
            </p>
            <div className="mt-7">
              <ContactActions variant="dark" whatsappUrl={whatsappUrl} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
