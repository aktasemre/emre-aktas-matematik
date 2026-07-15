import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  BookOpenCheck,
  CalendarDays,
  Download,
  ExternalLink,
  FileText,
  MonitorPlay,
  ShieldCheck,
  Tag,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactActions } from "@/components/contact-actions";
import { MebiPracticeList } from "@/components/mebi-practice-list";
import { ResourceCatalog } from "@/components/resource-catalog";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  archiveResources,
  getArchiveResource,
  getResourceHub,
  getResourceSuitability,
  getResourceTags,
  getResourceUsage,
  resourceHubs,
  type ArchiveResource,
  type ResourceAction,
  type ResourceHub,
} from "@/lib/resources";
import { siteConfig } from "@/lib/site";

type ResourcePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...resourceHubs.map(({ slug }) => ({ slug })),
    ...archiveResources.map(({ id }) => ({ slug: id })),
  ];
}

export async function generateMetadata({ params }: ResourcePageProps): Promise<Metadata> {
  const { slug } = await params;
  const hub = getResourceHub(slug);
  const resource = getArchiveResource(slug);

  if (!hub && !resource) notFound();

  const title = hub?.title ?? resource?.title ?? "Matematik Kaynağı";
  const description = hub?.description ?? resource?.description ?? siteConfig.description;
  const canonical = `/kaynaklar/${slug}`;

  return {
    title,
    description,
    keywords: hub?.keywords ?? (resource ? getResourceTags(resource) : undefined),
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}${canonical}`,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "article",
      images: [
        {
          url: siteConfig.heroImage,
          width: 1600,
          height: 900,
          alt: `${title} kaynak sayfası`,
        },
      ],
    },
  };
}

function ActionIcon({ kind }: { kind: ResourceAction["kind"] }) {
  const Icon =
    kind === "document"
      ? Download
      : kind === "video"
        ? MonitorPlay
        : kind === "platform"
          ? BookOpenCheck
          : ExternalLink;

  return <Icon aria-hidden="true" size={19} className="shrink-0" />;
}

function Breadcrumbs({ current }: { current: string }) {
  return (
    <nav aria-label="İçerik yolu" className="flex flex-wrap items-center gap-2 text-sm text-white/72">
      <Link href="/" className="transition hover:text-white">
        Ana sayfa
      </Link>
      <span aria-hidden="true">/</span>
      <Link href="/kaynaklar" className="transition hover:text-white">
        Kaynaklar
      </Link>
      <span aria-hidden="true">/</span>
      <span aria-current="page" className="text-white">
        {current}
      </span>
    </nav>
  );
}

function HubPage({ hub }: { hub: ResourceHub }) {
  const audienceResources = archiveResources.filter(
    (resource) => resource.audience === hub.audience
  );
  const examPart = hub.slug === "tyt" ? "TYT" : hub.slug === "ayt" ? "AYT" : null;
  const resources = examPart
    ? audienceResources.map((resource) => ({
        ...resource,
        actions: resource.actions.filter(
          (action) => action.kind === "source" || action.label.includes(examPart)
        ),
      }))
    : audienceResources;
  const directLinks = resources.reduce(
    (count, resource) =>
      count + resource.actions.filter((action) => action.kind === "document").length,
    0
  );

  return (
    <>
      <section className="bg-[#1f2930] text-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:py-20">
          <Breadcrumbs current={hub.eyebrow} />
          <div className="mt-12 max-w-4xl">
            <p className="text-sm font-semibold uppercase text-[#f3bf5f]">{hub.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
              {hub.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">{hub.description}</p>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-3">
            <p className="border-t border-white/25 pt-3 text-sm text-white/72">
              <span className="block text-lg font-semibold text-white">{resources.length}</span>
              kaynak kaydı
            </p>
            <p className="border-t border-white/25 pt-3 text-sm text-white/72">
              <span className="block text-lg font-semibold text-white">{directLinks}</span>
              doğrudan PDF
            </p>
            <p className="border-t border-white/25 pt-3 text-sm text-white/72">
              <span className="block text-lg font-semibold text-white">Resmî</span>
              MEB ve ÖSYM bağlantıları
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-[#147874]">Kaynak listesi</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Yıla ve kaynak türüne göre inceleyin
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#5b6670]">
              Her karttan doğrudan belgeyi açabilir veya kaynak ayrıntılarına geçerek kullanım önerisini ve doğrulama bilgisini görebilirsiniz.
            </p>
          </div>
          <ResourceCatalog resources={resources} />
        </div>
      </section>
    </>
  );
}

function ResourceDetailPage({ resource }: { resource: ArchiveResource }) {
  const tags = getResourceTags(resource);
  const related = archiveResources
    .filter(
      (candidate) =>
        candidate.id !== resource.id && candidate.audience === resource.audience
    )
    .slice(0, 3);
  const detailUrl = `${siteConfig.url}/kaynaklar/${resource.id}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: resource.title,
    description: resource.description,
    url: detailUrl,
    sameAs: resource.href,
    isAccessibleForFree: true,
    inLanguage: "tr-TR",
    educationalLevel: resource.audience,
    provider: {
      "@type": "Organization",
      name: resource.provider,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <section className="bg-[#1f2930] text-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:py-20">
          <Breadcrumbs current={resource.title} />
          <div className="mt-12 max-w-4xl">
            <p className="text-sm font-semibold uppercase text-[#f3bf5f]">
              {resource.provider} | {resource.academicYear}
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
              {resource.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
              {resource.description}
            </p>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [resource.category, "kaynak türü"],
              [resource.published, "yayın dönemi"],
              [resource.format, "erişim biçimi"],
              [resource.lastVerified ?? "Bekliyor", "son bağlantı kontrolü"],
            ].map(([value, label]) => (
              <p key={label} className="border-t border-white/25 pt-3 text-sm text-white/72">
                <span className="block text-base font-semibold text-white">{value}</span>
                {label}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr]">
            <div>
              <p className="text-sm font-semibold uppercase text-[#147874]">Doğrudan erişim</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight">Belgeyi veya çözümü açın</h2>
              <p className="mt-5 text-sm leading-7 text-[#5b6670]">
                Bağlantılar resmî kaynak sayfasından alınır. Kaynak sayfası ayrıca son seçenek olarak listelenir.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {resource.actions.map((action) => (
                <a
                  key={`${action.kind}-${action.href}`}
                  href={action.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-20 items-center justify-between gap-4 rounded-[8px] border border-[#1d252f]/12 bg-[#fbfaf6] px-5 py-4 text-sm font-semibold text-[#34424d] transition hover:-translate-y-0.5 hover:border-[#147874]/55 hover:bg-[#eaf3ef] hover:text-[#0f625f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  <span className="flex items-center gap-3">
                    <ActionIcon kind={action.kind} />
                    {action.label}
                  </span>
                  <ExternalLink aria-hidden="true" size={16} className="shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {resource.id === "mebi-2026-lgs-denemeleri" ? (
        <section className="bg-[#edf4f6]">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:py-20">
            <MebiPracticeList />
          </div>
        </section>
      ) : null}

      <section className="bg-[#edf4f6]">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <article className="border-t border-[#1d252f]/14 pt-6">
            <ShieldCheck aria-hidden="true" size={24} className="text-[#147874]" />
            <h2 className="mt-5 text-2xl font-semibold">Kimler için uygun?</h2>
            <p className="mt-4 text-sm leading-7 text-[#5b6670]">
              {getResourceSuitability(resource)}
            </p>
          </article>
          <article className="border-t border-[#1d252f]/14 pt-6">
            <BookOpenCheck aria-hidden="true" size={24} className="text-[#147874]" />
            <h2 className="mt-5 text-2xl font-semibold">Nasıl kullanılabilir?</h2>
            <p className="mt-4 text-sm leading-7 text-[#5b6670]">
              {getResourceUsage(resource)}
            </p>
          </article>
        </div>
      </section>

      <section className="bg-[#fbfaf6]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
            <div>
              <p className="text-sm font-semibold uppercase text-[#985700]">Kaynak bilgisi</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight">Aramada ve planda kullanılacak etiketler</h2>
            </div>
            <div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-2 rounded-md border border-[#147874]/22 bg-white px-3 py-2 text-sm font-semibold text-[#147874]"
                  >
                    <Tag aria-hidden="true" size={15} />
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-6 flex items-center gap-2 text-sm text-[#5b6670]">
                <CalendarDays aria-hidden="true" size={17} />
                Son bağlantı kontrolü: {resource.lastVerified ?? "Henüz yapılmadı"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {related.length ? (
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:py-24">
            <h2 className="text-3xl font-semibold leading-tight">İlgili kaynaklar</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={`/kaynaklar/${item.id}`}
                  className="rounded-[8px] border border-[#1d252f]/10 bg-[#fbfaf6] p-5 transition hover:-translate-y-1 hover:border-[#147874]/55 hover:shadow-[0_16px_36px_rgba(29,37,47,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2"
                >
                  <FileText aria-hidden="true" size={20} className="text-[#147874]" />
                  <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#5b6670]">{item.academicYear}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#147874]">
                    Ayrıntıları aç
                    <ArrowRight aria-hidden="true" size={16} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}

export default async function ResourcePage({ params }: ResourcePageProps) {
  const { slug } = await params;
  const hub = getResourceHub(slug);
  const resource = getArchiveResource(slug);

  if (!hub && !resource) notFound();

  return (
    <div className="min-h-screen bg-[#fbfaf6] text-[#1d252f]">
      <SiteHeader variant="dark" />
      <main>{hub ? <HubPage hub={hub} /> : <ResourceDetailPage resource={resource!} />}</main>
      <section className="bg-[#1f2930] text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-6 lg:grid-cols-[0.64fr_0.36fr] lg:items-center lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase text-[#f3bf5f]">Kaynak planı</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Öğrenciye uygun çalışma sırasını birlikte belirleyelim
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/76">
              Ücretsiz ön görüşmede sınıf, hedef ve konu eksiğine göre kaynak sırasını netleştirebiliriz.
            </p>
            <div className="mt-7">
              <ContactActions variant="dark" />
            </div>
          </div>
          <Link
            href="/kaynaklar"
            className="inline-flex w-fit items-center gap-2 rounded-md border border-white/22 px-4 py-3 text-sm font-semibold transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f2930]"
          >
            <ArrowLeft aria-hidden="true" size={17} />
            Tüm kaynaklara dön
          </Link>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
