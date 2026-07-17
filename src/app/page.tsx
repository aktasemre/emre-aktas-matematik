import type { Metadata } from "next";
import { Award, BookOpenCheck, Clock3, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ContactActions } from "@/components/contact-actions";
import { LearningCycleVisual } from "@/components/learning-cycle-visual";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { locationPages } from "@/lib/locations";
import { consultationSteps, faqs } from "@/lib/marketing";
import { serviceCards, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `İstanbul Avrupa Yakası Matematik Özel Ders | ${siteConfig.teacher.name}`,
  },
  description:
    "İstanbul Avrupa Yakası'nda LGS, YKS ve ara sınıflar için 16 yıllık öğretmenden 90 dakikalık birebir matematik özel ders.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: `İstanbul Avrupa Yakası Matematik Özel Ders | ${siteConfig.teacher.name}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: siteConfig.heroImage,
        width: 1600,
        height: 900,
        alt: "Matematik Akademi birebir ders planı",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.teacher.name,
  jobTitle: siteConfig.teacher.title,
  url: siteConfig.url,
  telephone: `+${siteConfig.contact.phoneE164}`,
  image: `${siteConfig.url}${siteConfig.teacher.profileImage}`,
  sameAs: [siteConfig.instagram.url],
  areaServed: siteConfig.areaServed,
  knowsAbout: ["LGS Matematik", "YKS Matematik", "Ara Sınıf Matematik"],
};

const lessonFlow = [
  "Öğrencinin seviyesi ve hedefi belirlenir.",
  "Konu eksikleri önem sırasına göre planlanır.",
  "Konu anlatımı, örnek çözüm ve öğrenci çözümü birlikte ilerler.",
  "Yanlışlar ve deneme sonuçları bir sonraki ders planını belirler.",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbfaf6] text-[#1d252f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteHeader variant="dark" />
      <section className="relative overflow-hidden bg-[#1f2930] text-white lg:min-h-[72vh]">
        <Image
          src={siteConfig.heroImage}
          alt="Matematik çalışması için hazırlanmış grafik ve notlar"
          fill
          fetchPriority="high"
          loading="eager"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1f2930]/96 via-[#1f2930]/84 to-[#1f2930]/58" />
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col px-5 py-8 sm:px-6 sm:py-16 lg:min-h-[72vh] lg:py-20">
          <div className="grid flex-1 items-center gap-6 sm:gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(22rem,0.92fr)] lg:gap-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase text-[#f3bf5f]">
                {siteConfig.teacher.name} | {siteConfig.teacher.experienceYears} yıllık matematik öğretmeni
              </p>
              <h1 className="mt-4 text-[2rem] font-semibold leading-[1.06] sm:mt-5 sm:text-5xl lg:text-[3.4rem]">
                İstanbul Avrupa Yakası&apos;nda LGS, YKS ve okul matematiği özel ders
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/84 sm:mt-6 sm:text-lg sm:leading-8">
                90 dakikalık birebir derslerde seviye belirleme, öncelikli plan, öğrenci çözümü ve yanlış analizi aynı takip döngüsünde birleşir.
              </p>
              <div className="mt-5 sm:mt-7">
                <ContactActions variant="dark" />
              </div>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/78 sm:mt-4">
                <span className="sm:hidden">İlk ön değerlendirme ücretsizdir.</span>
                <span className="hidden sm:inline">
                  İlk ön değerlendirme ücretsizdir; uygunluk sonrası 90 dakikalık birebir dersler ücretlidir.
                </span>
              </p>
              <Link
                href="/hakkimda"
                className="mt-5 hidden rounded-md px-1 py-2 text-sm font-semibold text-white/84 underline decoration-white/35 underline-offset-4 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f2930] sm:inline-flex"
              >
                {siteConfig.teacher.name} hakkında
              </Link>
            </div>

            <LearningCycleVisual />
          </div>

          <div className="hidden gap-3 pt-10 sm:grid sm:grid-cols-3 lg:pt-12">
            {[
              `${siteConfig.teacher.experienceYears} yıl deneyim`,
              "LGS, YKS ve ara sınıflar",
              siteConfig.contact.availability,
            ].map((item) => (
              <p
                key={item}
                className="flex min-h-14 items-center justify-center rounded-lg border border-white/15 bg-white/[0.06] px-2 py-2 text-center text-[11px] font-semibold leading-4 text-white/88 sm:block sm:min-h-0 sm:rounded-none sm:border-x-0 sm:border-b-0 sm:bg-transparent sm:px-0 sm:pt-3 sm:text-left sm:text-sm"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <main>
        <section className="bg-white">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-6 lg:grid-cols-[0.38fr_0.62fr] lg:py-24">
            <div className="relative min-h-80 overflow-hidden rounded-[8px] bg-[#1f2930] sm:min-h-96">
              <Image
                src={siteConfig.teacher.profileImage}
                alt={`Matematik öğretmeni ${siteConfig.teacher.name}`}
                fill
                sizes="(max-width: 1023px) 100vw, 38vw"
                className="object-cover object-[60%_45%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f2930]/92 via-[#1f2930]/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                <p className="text-sm font-semibold text-[#f3bf5f]">{siteConfig.teacher.name}</p>
                <p className="mt-5 text-5xl font-semibold">{siteConfig.teacher.experienceYears}</p>
                <p className="mt-2 text-sm leading-6 text-white/80">yıllık öğretmenlik deneyimi</p>
                <p className="mt-6 text-sm leading-6 text-white/80">{siteConfig.teacher.expertise}</p>
              </div>
            </div>
            <div className="self-center">
              <p className="text-sm font-semibold uppercase text-[#147874]">Öğretmen profili</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                Matematik Akademi&apos;nin arkasında tek bir öğretmen ve takipli bir sistem var
              </h2>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-[#5b6670]">
                {siteConfig.teacher.name}, öğrencinin sadece kaç net yaptığını değil; hangi konuda, neden zorlandığını ve sonraki adımda neye ihtiyaç duyduğunu takip ederek ilerler.
              </p>
              <div className="mt-6 grid gap-3 text-sm text-[#43505d] sm:grid-cols-2">
                <p className="flex items-center gap-2"><Award aria-hidden="true" size={18} className="text-[#985700]" />{siteConfig.teacher.curriculumNote}</p>
                <p className="flex items-center gap-2"><Clock3 aria-hidden="true" size={18} className="text-[#147874]" />{siteConfig.contact.availability}</p>
                <p className="flex items-center gap-2"><MapPin aria-hidden="true" size={18} className="text-[#147874]" />{siteConfig.areaServed}</p>
                <p className="flex items-center gap-2"><BookOpenCheck aria-hidden="true" size={18} className="text-[#147874]" />90 dakikalık birebir ders modeli</p>
              </div>
              <Link
                href="/hakkimda"
                className="mt-7 inline-flex rounded-md bg-[#1f2930] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#31414c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Öğretmen profiline bak
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#eaf3ef]">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase text-[#147874]">İlk adım</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                Ücretsiz ön görüşmede ne yapıyoruz?
              </h2>
              <p className="mt-5 text-sm leading-7 text-[#5b6670]">
                İlk tanışma ve ön değerlendirme görüşmesi ücretsizdir. Derse başlamadan önce öğrencinin ihtiyacını ve hedefini netleştiriyoruz; uygunluk sonrası başlayan 90 dakikalık birebir dersler ise ücretlidir. Böylece çalışma planı ezbere değil, öğrencinin gerçek durumuna göre kuruluyor.
              </p>
            </div>
            <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {consultationSteps.map((step) => (
                <article key={step.title} className="rounded-[8px] border border-[#1d252f]/10 bg-white p-5">
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#5b6670]">{step.text}</p>
                </article>
              ))}
            </div>
            <div className="mt-8">
              <ContactActions compact />
            </div>
          </div>
        </section>

        <section className="bg-[#fbfaf6]">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase text-[#147874]">Ders alanları</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                Sınıfa ve sınav hedefine göre matematik desteği
              </h2>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {serviceCards.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="rounded-[8px] border border-[#1d252f]/10 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-[#147874]/60 hover:shadow-[0_18px_40px_rgba(29,37,47,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fbfaf6]"
                >
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-[#5b6670]">{card.text}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:py-24">
            <div>
              <p className="text-sm font-semibold uppercase text-[#985700]">Matematik Akademi Takip Döngüsü</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                Ders, konu anlatımıyla bitmez; yanlış analiziyle tamamlanır
              </h2>
            </div>
            <div className="grid gap-4">
              {lessonFlow.map((step, index) => (
                <div key={step} className="grid grid-cols-[44px_1fr] gap-4 rounded-[8px] border border-[#1d252f]/10 bg-[#fbfaf6] p-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-[#147874] text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <p className="self-center text-sm leading-6 text-[#43505d]">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#eaf3ef]">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
            <div>
              <p className="text-sm font-semibold uppercase text-[#147874]">Lokasyon ve ücretlendirme</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                Avrupa Yakası&apos;nda yüz yüze ders için öncelikli bölgeler
              </h2>
            </div>
            <div className="rounded-[8px] border border-[#1d252f]/10 bg-white p-6">
              <div className="flex flex-wrap gap-2">
                {locationPages.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/${area.slug}`}
                    className="rounded-md border border-[#147874]/35 bg-[#eaf3ef] px-3 py-2 text-sm font-semibold text-[#147874] transition hover:border-[#147874]/70 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2"
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-[#5b6670]">
                Yakın çevrelerde yüz yüze ders uygunluğu, semt ve saat bilgisine göre değerlendirilir.
              </p>
              <p className="mt-4 text-sm leading-6 text-[#5b6670]">{siteConfig.pricingNote}</p>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:py-24">
            <div>
              <p className="text-sm font-semibold uppercase text-[#147874]">Sıkça sorulan sorular</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                Ön görüşme ve ders süreci hakkında
              </h2>
            </div>
            <div className="grid gap-3">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-[8px] border border-[#1d252f]/10 bg-[#fbfaf6] p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold">
                    <span>{faq.question}</span>
                    <span aria-hidden="true" className="text-[#147874] transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-sm leading-6 text-[#5b6670]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#fbfaf6]">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-6 lg:grid-cols-[1fr_1fr] lg:py-24">
            <div>
              <p className="text-sm font-semibold uppercase text-[#985700]">Kaynak arşivi</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                MEB ve ÖSYM kaynaklarını düzenli takip eden bir çalışma alanı
              </h2>
            </div>
            <div className="rounded-[8px] border border-[#1d252f]/10 bg-white p-6">
              <p className="text-sm leading-6 text-[#5b6670]">
                LGS, TYT-AYT ve sınıf bazlı kaynaklar öğrencinin ihtiyacına göre seçilir. Arşivde MEB ve ÖSYM&apos;nin resmî sayfalarına doğrudan erişim sunulur.
              </p>
              <Link
                href="/kaynaklar"
                className="mt-5 inline-flex rounded-md bg-[#1f2930] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#31414c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Kaynak arşivini incele
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
