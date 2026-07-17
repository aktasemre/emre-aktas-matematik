import type { Metadata } from "next";
import { ArrowRight, BookOpen, FileText, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ResourceCatalog } from "@/components/resource-catalog";
import { ContactActions } from "@/components/contact-actions";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  archivePrinciples,
  archiveResources,
  directDocumentCount,
} from "@/lib/resources";
import { siteConfig } from "@/lib/site";

const lgsArchiveYears = new Set(
  archiveResources
    .filter(
      (resource) =>
        resource.audience === "LGS" && resource.academicYear !== "Genel arşiv"
    )
    .map((resource) => resource.academicYear)
).size;

export const metadata: Metadata = {
  title: "MEB ve ÖSYM Matematik Kaynakları",
  description:
    "2021-2022'den 2025-2026'ya MEB LGS örnek soruları, denemeler, çalışma kitapları ve ÖSYM YKS kaynakları.",
  alternates: {
    canonical: "/kaynaklar",
  },
  openGraph: {
    title: "MEB ve ÖSYM Matematik Kaynakları",
    description:
      "MEB LGS örnek soruları, MEBİ denemeleri, çalışma kitapları ve ÖSYM YKS kaynakları.",
    url: `${siteConfig.url}/kaynaklar`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: siteConfig.heroImage,
        width: 1600,
        height: 900,
        alt: "Matematik Akademi kaynak arşivi görseli",
      },
    ],
  },
};

export default function ResourcesPage() {
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
            loading="eager"
            sizes="100vw"
            className="object-cover object-[74%_48%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1f2930]/97 via-[#1f2930]/83 to-[#1f2930]/32" />
          <div className="relative mx-auto flex max-w-6xl flex-col px-5 py-10 sm:px-6 sm:py-16 lg:min-h-[58vh] lg:py-20">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase text-[#f3bf5f]">
                Kaynak arşivi
              </p>
              <h1 className="mt-3 text-3xl font-semibold leading-[1.08] sm:mt-5 sm:text-5xl lg:text-6xl">
                MEB kaynaklarını doğrudan açın
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/84 sm:mt-6 sm:text-lg sm:leading-8">
                2021-2022&apos;den 2025-2026&apos;ya uzanan MEB LGS örnek soruları, çalışma kitapları ve denemeleri; ayrıca ara sınıf ve YKS kaynakları tek arşivde.
              </p>
              <p className="mt-3 hidden max-w-2xl text-sm leading-6 text-white/76 sm:block">
                Uygun olduğunda duyuru sayfasına uğramadan doğrudan PDF&apos;i, çözüm videosunu veya MEBİ&apos;yi açın.
              </p>
              <a
                href="#kaynak-ara"
                className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-md bg-[#f3bf5f] px-4 py-2.5 text-sm font-semibold text-[#1f2930] transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f2930] sm:hidden"
              >
                Kaynaklarda ara
                <ArrowRight aria-hidden="true" size={17} />
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 sm:mt-auto sm:pt-12">
              {[
                [`${lgsArchiveYears} eğitim yılı`, "MEB LGS arşivi"],
                [`${archiveResources.length} kaynak`, "resmî bağlantı"],
                [`${directDocumentCount} doğrudan PDF`, "resmî EBA belgesi"],
              ].map(([value, label]) => (
                <p key={label} className="border-t border-white/25 pt-2 text-xs leading-5 text-white/78 sm:pt-3 sm:text-sm">
                  <span className="block text-sm font-semibold text-white sm:text-lg">{value}</span>
                  <span className="hidden sm:inline">{label}</span>
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-5 py-8 sm:px-6 sm:py-16 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase text-[#147874]">
                MEB ve ÖSYM arşivi
              </p>
              <h2 className="mt-2 text-2xl font-semibold leading-tight sm:mt-3 sm:text-4xl">
                Hedefe, yıla ve kaynak türüne göre seçin; sonra doğrudan açın
              </h2>
              <p className="mt-5 hidden text-sm leading-7 text-[#5b6670] sm:block">
                LGS için son beş eğitim öğretim yılındaki MEB örnek sorularını, MEBİ denemelerini ve çalışma kitaplarını; ara sınıf ve YKS için resmî kaynakları aynı yerde topladım. Bir kaynakta PDF veya çözüm bağlantısı varsa, karttan doğrudan açılır.
              </p>
            </div>
            <ResourceCatalog resources={archiveResources} />
          </div>
        </section>

        <section className="bg-[#fbfaf6]">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-6 lg:grid-cols-[0.38fr_0.62fr] lg:py-24">
            <div>
              <p className="text-sm font-semibold uppercase text-[#985700]">
                Arşiv yaklaşımı
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                Kaynağın kendisi kadar sırası da önemli
              </h2>
            </div>
            <div className="grid gap-0 border-y border-[#1d252f]/10">
              {archivePrinciples.map((principle, index) => {
                const Icon = [ShieldCheck, FileText, BookOpen][index];

                return (
                  <article
                    key={principle.title}
                    className="grid grid-cols-[40px_1fr] gap-4 border-b border-[#1d252f]/10 py-6 last:border-b-0"
                  >
                    <Icon aria-hidden="true" size={22} className="mt-0.5 text-[#147874]" />
                    <div>
                      <h3 className="text-xl font-semibold">{principle.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-[#5b6670]">
                        {principle.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#1f2930] text-white">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-6 lg:grid-cols-[0.56fr_0.44fr] lg:items-center lg:py-20">
            <div>
              <p className="text-sm font-semibold uppercase text-[#f3bf5f]">
                Kaynak planı
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                Öğrenciye uygun kaynak sırasını birlikte belirleyelim
              </h2>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-white/76">
                Aynı kaynak bir öğrenci için başlangıç, başka bir öğrenci için tekrar materyali olabilir. Ücretsiz ön görüşmede sınıf, hedef ve konu eksiğine göre kaynak sırasını birlikte netleştirebiliriz.
              </p>
              <div className="mt-7">
                <ContactActions variant="dark" />
              </div>
            </div>
            <Link
              href="/iletisim"
              className="inline-flex w-fit items-center gap-2 rounded-md border border-white/22 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f2930]"
            >
              Ön görüşme ayrıntılarına bak
              <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
