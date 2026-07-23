import type { Metadata } from "next";
import {
  ArrowRight,
  BookOpenCheck,
  Check,
  Clock3,
  Download,
  ExternalLink,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactActions } from "@/components/contact-actions";
import { HeroMotion } from "@/components/hero-motion";
import {
  getLocationMetadata,
  LocationLessonPage,
} from "@/components/location-lesson-page";
import { ScrollRevealController } from "@/components/scroll-reveal-controller";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrackedExternalLink } from "@/components/tracked-external-link";
import { contentPages, getContentPage, type ContentPage } from "@/lib/content";
import { getLocationPage, locationPages } from "@/lib/locations";
import { buildWhatsAppUrl, siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const pageThemes: Record<
  ContentPage["theme"],
  {
    heroImageClass: string;
    heroOverlayClass: string;
    accentClass: string;
    motionVariant: "progress" | "route" | "foundation";
  }
> = {
  lgs: {
    heroImageClass: "object-cover object-[66%_50%]",
    heroOverlayClass:
      "bg-gradient-to-r from-[#1f2930]/93 via-[#1f2930]/70 to-[#1f2930]/20",
    accentClass: "text-[#f3bf5f]",
    motionVariant: "progress",
  },
  yks: {
    heroImageClass: "object-cover object-[80%_48%]",
    heroOverlayClass:
      "bg-gradient-to-r from-[#182b35]/97 via-[#1f2930]/84 to-[#1f2930]/35",
    accentClass: "text-[#9ed8d1]",
    motionVariant: "route",
  },
  school: {
    heroImageClass: "object-cover object-[68%_55%]",
    heroOverlayClass:
      "bg-gradient-to-r from-[#123f4b]/97 via-[#1f2930]/82 to-[#1f2930]/34",
    accentClass: "text-[#f3bf5f]",
    motionVariant: "foundation",
  },
};

export function generateStaticParams() {
  return [
    ...contentPages.map((page) => ({ slug: page.slug })),
    ...locationPages.map((location) => ({ slug: location.slug })),
  ];
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationPage(slug);

  if (location) {
    return getLocationMetadata(location);
  }

  const page = getContentPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: `/${page.slug}`,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${siteConfig.url}/${page.slug}`,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: siteConfig.heroImage,
          width: 1600,
          height: 900,
          alt: `${page.title} için Matematik Akademi görseli`,
        },
      ],
    },
  };
}

export default async function ContentPage({ params }: PageProps) {
  const { slug } = await params;
  const location = getLocationPage(slug);

  if (location) {
    return <LocationLessonPage location={location} />;
  }

  const page = getContentPage(slug);

  if (!page) {
    notFound();
  }

  const theme = pageThemes[page.theme];
  const whatsappMessage = `Merhaba Emre Hocam, ${page.title} için ücretsiz ön görüşme planlamak istiyorum. Öğrenci ... sınıf. Mevcut durum / net: ... Hedefimiz: ...`;
  const whatsappUrl = buildWhatsAppUrl(whatsappMessage);

  return (
    <div className="min-h-screen bg-[#fbfaf6] text-[#1d252f]">
      <SiteHeader variant="dark" />
      <ScrollRevealController />
      <main>
        <section className="relative overflow-hidden bg-[#1f2930] text-white">
          <Image
            src={siteConfig.heroImage}
            alt=""
            fill
            fetchPriority="high"
            loading="eager"
            sizes="100vw"
            className={theme.heroImageClass}
          />
          <div className={`absolute inset-0 ${theme.heroOverlayClass}`} />
          <HeroMotion variant={theme.motionVariant} />
          <div className="relative z-10 mx-auto flex max-w-6xl flex-col px-5 py-8 sm:px-6 sm:py-16 lg:min-h-[68vh] lg:py-24">
            <div className="hero-copy-reveal max-w-3xl">
              <p className={`text-sm font-semibold uppercase ${theme.accentClass}`}>
                {page.eyebrow}
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-[-0.02em] sm:mt-5 sm:text-5xl lg:text-6xl">
                {page.title}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/84 sm:mt-6 sm:text-lg sm:leading-8">
                {page.intro}
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/76">
                <span className="sm:hidden">Ön görüşme ücretsiz; her birebir seans 90 dakika sürer ve ücretlidir.</span>
                <span className="hidden sm:inline">İlk tanışma ve ön değerlendirme görüşmesi ücretsizdir. Uygunluk sonrası birebir dersler 1 seans / 90 dakika olarak planlanır ve ücretlidir.</span>
              </p>
              <div className="mt-6 sm:mt-8">
                <ContactActions
                  variant="dark"
                  whatsappUrl={whatsappUrl}
                  hidePhoneOnMobile
                  analyticsPlacement="service_hero"
                />
              </div>
            </div>

            <div className="hero-facts-reveal mt-auto grid grid-cols-3 gap-2 pt-7 sm:gap-3 sm:pt-12">
              {page.heroFacts.map((fact) => (
                <p
                  key={fact.label}
                  className="rounded-lg border border-white/15 bg-white/[0.06] px-2 py-2 text-center text-[11px] leading-4 text-white/76 sm:rounded-none sm:border-x-0 sm:border-b-0 sm:bg-transparent sm:px-0 sm:pt-3 sm:text-left sm:text-sm sm:text-white/78"
                >
                  <span className="block text-sm font-semibold text-white sm:text-lg">
                    {fact.value}
                  </span>
                  {fact.label}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section id="ders-yaklasimi" className="bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.42fr_0.58fr] lg:py-24">
            <div data-scroll-reveal>
              <p className="text-sm font-semibold uppercase text-[#147874]">
                Başlangıç noktası
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.015em] sm:text-4xl">
                {page.audienceTitle}
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-[#5b6670]">
                {page.audienceIntro}
              </p>
            </div>

            <div className="border-y border-[#1d252f]/10" data-scroll-reveal-group>
              {page.bullets.map((bullet) => (
                <div
                  key={bullet}
                  className="flex gap-4 border-b border-[#1d252f]/10 py-5 last:border-b-0"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#eaf3ef] text-[#147874]">
                    <Check aria-hidden="true" size={17} strokeWidth={2.5} />
                  </span>
                  <p className="text-base font-medium leading-7 text-[#34424d]">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="kaynaklar" className="bg-[#fbfaf6]">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:py-20">
            <div className="max-w-3xl" data-scroll-reveal>
              <p className="text-sm font-semibold uppercase text-[#147874]">
                Resmî kaynaklar
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.015em] sm:text-4xl">
                Çalışma planındaki kaynağı doğrudan açın
              </h2>
              <p className="mt-5 text-sm leading-7 text-[#5b6670]">
                Kaynak seçimi öğrencinin seviyesine göre yapılır. Kullanılabilecek resmî
                kaynaklara buradan doğrudan ulaşabilirsiniz.
              </p>
            </div>

            <div className="mt-9 grid gap-4 md:grid-cols-2" data-scroll-reveal-group>
              {page.resourceShortcuts.map((shortcut) => (
                <article
                  key={shortcut.title}
                  className="flex min-h-64 flex-col rounded-[8px] border border-[#1d252f]/10 bg-white p-6"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[#eaf3ef] text-[#147874]">
                    <BookOpenCheck aria-hidden="true" size={20} />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold">{shortcut.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#5b6670]">
                    {shortcut.description}
                  </p>
                  {shortcut.external ? (
                    <TrackedExternalLink
                      href={shortcut.href}
                      target="_blank"
                      rel="noreferrer"
                      eventName="resource_open"
                      eventProperties={{
                        placement: "service_shortcut",
                        resource_label: shortcut.title,
                        service: page.theme,
                      }}
                      className="btn btn-ghost mt-auto w-fit pt-6"
                    >
                      <Download aria-hidden="true" size={17} />
                      {shortcut.label}
                      <ExternalLink aria-hidden="true" size={15} />
                      <span className="sr-only"> (yeni sekmede açılır)</span>
                    </TrackedExternalLink>
                  ) : (
                    <Link
                      href={shortcut.href}
                      className="btn btn-ghost mt-auto w-fit pt-6"
                    >
                      {shortcut.label}
                      <ArrowRight aria-hidden="true" size={17} />
                    </Link>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#eaf3ef]">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:py-24">
            <div className="max-w-3xl" data-scroll-reveal>
              <p className="text-sm font-semibold uppercase text-[#147874]">
                Ders sistemi
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.015em] sm:text-4xl">
                {page.processTitle}
              </h2>
            </div>

            <div className="mt-9 grid gap-4 md:grid-cols-3" data-scroll-reveal-group>
              {page.sections.map((section, index) => (
                <article
                  key={section.title}
                  className="rounded-[8px] border border-[#1d252f]/10 bg-white p-6"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[#1f2930] text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <h3 className="mt-6 text-xl font-semibold">{section.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#5b6670]">
                    {section.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#fbfaf6]">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-6 lg:grid-cols-[0.38fr_0.62fr] lg:py-24">
            <div className="relative min-h-72 overflow-hidden rounded-[8px] bg-[#1f2930] sm:min-h-96">
              <Image
                src={siteConfig.teacher.profileImage}
                alt={`Matematik öğretmeni ${siteConfig.teacher.name}`}
                fill
                sizes="(max-width: 1023px) 100vw, 38vw"
                className="object-cover object-[60%_45%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f2930]/88 via-[#1f2930]/20 to-transparent" />
              <p className="absolute inset-x-0 bottom-0 p-6 text-sm font-semibold text-white">
                {siteConfig.teacher.name} | {siteConfig.teacher.experienceYears} yıllık deneyim
              </p>
            </div>

            <div className="self-center">
              <p className="text-sm font-semibold uppercase text-[#985700]">
                Öğretmen eşliği
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.015em] sm:text-4xl">
                Dersin yönünü öğrencinin gerçek performansı belirler
              </h2>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-[#5b6670]">
                {page.teacherNote}
              </p>
              <div className="mt-6 grid gap-3 text-sm text-[#43505d] sm:grid-cols-2">
                <p className="flex items-start gap-2">
                  <BookOpenCheck aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-[#147874]" />
                  {siteConfig.teacher.curriculumNote}
                </p>
                <p className="flex items-start gap-2">
                  <Clock3 aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-[#147874]" />
                  Haftanın 7 günü, 22.00&apos;ye kadar görüşme imkânı
                </p>
              </div>
              <Link
                href="/hakkimda"
                className="btn btn-dark btn-compact mt-7"
              >
                Öğretmen profiline bak
                <ArrowRight aria-hidden="true" size={17} />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#1f2930] text-white">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-6 lg:grid-cols-[0.62fr_0.38fr] lg:items-center lg:py-20">
            <div>
              <p className="text-sm font-semibold uppercase text-[#f3bf5f]">
                Kişisel çalışma planı
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.015em] sm:text-4xl">
                Ders programını başlamadan önce birlikte netleştirelim
              </h2>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-white/76">
                {page.cta}
              </p>
              <div className="mt-7">
                <ContactActions
                  variant="dark"
                  whatsappUrl={whatsappUrl}
                  analyticsPlacement="service_bottom"
                />
              </div>
            </div>
            <div className="grid gap-4 border-t border-white/18 pt-5 text-sm leading-6 text-white/76 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <p className="flex gap-3">
                <MapPin aria-hidden="true" size={18} className="shrink-0 text-[#f3bf5f]" />
                {siteConfig.areaServed} | {siteConfig.serviceAreas.join(", ")}
              </p>
              <p className="flex gap-3">
                <Clock3 aria-hidden="true" size={18} className="shrink-0 text-[#f3bf5f]" />
                {siteConfig.contact.availability}
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
