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
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { contentPages, getContentPage, type ContentPage } from "@/lib/content";
import { siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const pageThemes: Record<
  ContentPage["theme"],
  { heroImageClass: string; heroOverlayClass: string; accentClass: string }
> = {
  lgs: {
    heroImageClass: "object-cover object-[66%_50%]",
    heroOverlayClass:
      "bg-gradient-to-r from-[#1f2930]/93 via-[#1f2930]/70 to-[#1f2930]/20",
    accentClass: "text-[#f3bf5f]",
  },
  yks: {
    heroImageClass: "object-cover object-[80%_48%]",
    heroOverlayClass:
      "bg-gradient-to-r from-[#182b35]/97 via-[#1f2930]/84 to-[#1f2930]/35",
    accentClass: "text-[#9ed8d1]",
  },
  school: {
    heroImageClass: "object-cover object-[68%_55%]",
    heroOverlayClass:
      "bg-gradient-to-r from-[#123f4b]/97 via-[#1f2930]/82 to-[#1f2930]/34",
    accentClass: "text-[#f3bf5f]",
  },
};

export function generateStaticParams() {
  return contentPages.map((page) => ({ slug: page.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
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
  const page = getContentPage(slug);

  if (!page) {
    notFound();
  }

  const theme = pageThemes[page.theme];

  return (
    <div className="min-h-screen bg-[#fbfaf6] text-[#1d252f]">
      <SiteHeader variant="dark" />
      <main>
        <section className="relative overflow-hidden bg-[#1f2930] text-white">
          <Image
            src={siteConfig.heroImage}
            alt=""
            fill
            fetchPriority="high"
            sizes="100vw"
            className={theme.heroImageClass}
          />
          <div className={`absolute inset-0 ${theme.heroOverlayClass}`} />
          <div className="relative mx-auto flex min-h-[68vh] max-w-6xl flex-col px-5 py-16 sm:px-6 lg:py-24">
            <div className="max-w-3xl">
              <p className={`text-sm font-semibold uppercase ${theme.accentClass}`}>
                {page.eyebrow}
              </p>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
                {page.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/84">
                {page.intro}
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/76">
                İlk tanışma ve ön değerlendirme görüşmesi ücretsizdir. Uygunluk sonrası başlayan 90 dakikalık birebir dersler ücretlidir.
              </p>
              <div className="mt-8">
                <ContactActions variant="dark" />
              </div>
            </div>

            <div className="mt-auto grid gap-3 pt-12 sm:grid-cols-3">
              {page.heroFacts.map((fact) => (
                <p
                  key={fact.label}
                  className="border-t border-white/25 pt-3 text-sm text-white/78"
                >
                  <span className="block text-lg font-semibold text-white">
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
            <div>
              <p className="text-sm font-semibold uppercase text-[#147874]">
                Başlangıç noktası
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                {page.audienceTitle}
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-[#5b6670]">
                {page.audienceIntro}
              </p>
            </div>

            <div className="border-y border-[#1d252f]/10">
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
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase text-[#147874]">
                Resmî kaynaklar
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                Çalışma planındaki kaynağı doğrudan açın
              </h2>
              <p className="mt-5 text-sm leading-7 text-[#5b6670]">
                Kaynak seçimi öğrencinin seviyesine göre yapılır. Kullanılabilecek resmî
                kaynaklara buradan doğrudan ulaşabilirsiniz.
              </p>
            </div>

            <div className="mt-9 grid gap-4 md:grid-cols-2">
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
                    <a
                      href={shortcut.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-sm font-semibold text-[#147874] transition hover:text-[#0f625f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    >
                      <Download aria-hidden="true" size={17} />
                      {shortcut.label}
                      <ExternalLink aria-hidden="true" size={15} />
                    </a>
                  ) : (
                    <Link
                      href={shortcut.href}
                      className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-sm font-semibold text-[#147874] transition hover:text-[#0f625f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
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
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase text-[#147874]">
                Ders sistemi
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                {page.processTitle}
              </h2>
            </div>

            <div className="mt-9 grid gap-4 md:grid-cols-3">
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
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
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
                className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#1f2930] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#31414c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fbfaf6]"
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
                Ücretsiz ön görüşme
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                Ders programını başlamadan önce birlikte netleştirelim
              </h2>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-white/76">
                {page.cta}
              </p>
              <div className="mt-7">
                <ContactActions variant="dark" />
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
