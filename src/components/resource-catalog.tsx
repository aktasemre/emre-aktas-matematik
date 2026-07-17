"use client";

import {
  ArrowRight,
  BookOpenCheck,
  Download,
  ExternalLink,
  FileText,
  MonitorPlay,
  Search,
  X,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState, useSyncExternalStore } from "react";
import type {
  ArchiveResource,
  ResourceAction,
  ResourceAudience,
  ResourceCategory,
} from "@/lib/resources";

type ResourceCatalogProps = {
  resources: ArchiveResource[];
};

type AudienceFilter = "Tümü" | ResourceAudience;
type CategoryFilter = "Tümü" | ResourceCategory;

const audienceFilters: AudienceFilter[] = [
  "Tümü",
  "LGS",
  "Ara Sınıflar",
  "YKS",
];
const filterChangeEvent = "matematik-akademi:resource-filter-change";

function subscribeToFilterUrl(callback: () => void) {
  window.addEventListener("popstate", callback);
  window.addEventListener(filterChangeEvent, callback);
  return () => {
    window.removeEventListener("popstate", callback);
    window.removeEventListener(filterChangeEvent, callback);
  };
}

function getFilterUrlSnapshot() {
  return window.location.search;
}

function getServerFilterUrlSnapshot() {
  return "";
}

function updateFilterUrl(updates: Record<string, string | null>) {
  const params = new URLSearchParams(window.location.search);

  for (const [name, value] of Object.entries(updates)) {
    if (!value) params.delete(name);
    else params.set(name, value);
  }

  const search = params.toString();
  const nextUrl = `${window.location.pathname}${search ? `?${search}` : ""}${window.location.hash}`;
  window.history.replaceState(window.history.state, "", nextUrl);
  window.dispatchEvent(new Event(filterChangeEvent));
}

function ResourceActionIcon({ kind }: { kind: ResourceAction["kind"] }) {
  const Icon =
    kind === "document"
      ? Download
      : kind === "video"
        ? MonitorPlay
        : kind === "platform"
          ? BookOpenCheck
          : ExternalLink;

  return <Icon aria-hidden="true" size={16} className="shrink-0" />;
}

function ResourceActionLinks({
  resource,
  limit = 4,
}: {
  resource: ArchiveResource;
  limit?: number;
}) {
  const actions = resource.actions.slice(0, limit);

  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {actions.map((action) => (
        <a
          key={`${resource.id}-${action.kind}-${action.href}`}
          href={action.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-10 items-center gap-2 rounded-md border border-[#1d252f]/14 bg-white px-3 py-2 text-sm font-semibold text-[#34424d] transition hover:border-[#147874]/55 hover:bg-[#eaf3ef] hover:text-[#0f625f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          <ResourceActionIcon kind={action.kind} />
          {action.label}
        </a>
      ))}
      {resource.actions.length > limit ? (
        <Link
          href={`/kaynaklar/${resource.id}`}
          className="inline-flex min-h-10 items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-[#147874] transition hover:bg-[#eaf3ef] hover:text-[#0f625f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2"
        >
          +{resource.actions.length - limit} bağlantı
          <ArrowRight aria-hidden="true" size={16} />
        </Link>
      ) : null}
    </div>
  );
}

function ResourceFilters({
  academicYears,
  categories,
  query,
  audience,
  academicYear,
  category,
  hasActiveFilters,
  onClear,
}: {
  academicYears: string[];
  categories: ResourceCategory[];
  query: string;
  audience: AudienceFilter;
  academicYear: string;
  category: CategoryFilter;
  hasActiveFilters: boolean;
  onClear: () => void;
}) {
  return (
    <div className="rounded-[8px] border border-[#1d252f]/10 bg-[#fbfaf6] p-4 sm:p-5">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-[1.5fr_0.8fr_0.8fr_auto] lg:items-end">
        <label className="col-span-2 block lg:col-span-1">
          <span className="text-sm font-semibold text-[#43505d]">Kaynak ara</span>
          <span className="relative mt-2 block">
            <Search
              aria-hidden="true"
              size={18}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#5b6670]"
            />
            <input
              type="search"
              value={query}
              onChange={(event) =>
                updateFilterUrl({ ara: event.target.value || null })
              }
              placeholder="Yıl, kaynak veya konu ara"
              className="h-11 w-full rounded-md border border-[#1d252f]/15 bg-white pl-10 pr-3 text-sm text-[#1d252f] outline-none transition placeholder:text-[#7f8a94] focus:border-[#147874] focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fbfaf6]"
            />
          </span>
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-[#43505d]">Eğitim yılı</span>
          <select
            value={academicYear}
            onChange={(event) =>
              updateFilterUrl({
                yil: event.target.value === "Tümü" ? null : event.target.value,
              })
            }
            className="mt-2 h-11 w-full rounded-md border border-[#1d252f]/15 bg-white px-3 text-sm text-[#1d252f] outline-none transition focus:border-[#147874] focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fbfaf6]"
          >
            <option value="Tümü">Tüm yıllar</option>
            {academicYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-[#43505d]">Kaynak türü</span>
          <select
            value={category}
            onChange={(event) =>
              updateFilterUrl({
                tur: event.target.value === "Tümü" ? null : event.target.value,
              })
            }
            className="mt-2 h-11 w-full rounded-md border border-[#1d252f]/15 bg-white px-3 text-sm text-[#1d252f] outline-none transition focus:border-[#147874] focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fbfaf6]"
          >
            <option value="Tümü">Tüm türler</option>
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        {hasActiveFilters ? (
          <button
            type="button"
            onClick={onClear}
            className="col-span-2 inline-flex h-11 w-full items-center justify-center gap-2 self-end rounded-md border border-[#1d252f]/15 bg-white px-3 text-sm font-semibold text-[#43505d] transition hover:bg-[#ece7dc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fbfaf6] lg:col-span-1 lg:w-11 lg:px-0"
            aria-label="Filtreleri temizle"
            title="Filtreleri temizle"
          >
            <X aria-hidden="true" size={18} />
            <span className="lg:sr-only">Filtreleri temizle</span>
          </button>
        ) : (
          <div className="hidden h-11 w-11 lg:block" aria-hidden="true" />
        )}
      </div>

      <div
        className="mt-4 flex flex-wrap gap-2 sm:mt-5"
        role="group"
        aria-label="Hedefe göre kaynaklar"
      >
        {audienceFilters.map((item) => {
          const isActive = audience === item;

          return (
            <button
              key={item}
              type="button"
              onClick={() =>
                updateFilterUrl({ hedef: item === "Tümü" ? null : item })
              }
              aria-pressed={isActive}
              className={`rounded-md px-3 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fbfaf6] ${
                isActive
                  ? "bg-[#1f2930] text-white"
                  : "border border-[#1d252f]/12 bg-white text-[#43505d] hover:bg-[#ece7dc]"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function ResourceCatalog({ resources }: ResourceCatalogProps) {
  const [expandedMobileSnapshot, setExpandedMobileSnapshot] = useState<
    string | null
  >(null);
  const academicYears = useMemo(
    () =>
      Array.from(
        new Set(
          resources
            .map((resource) => resource.academicYear)
            .filter((year) => year !== "Genel arşiv")
        )
      ),
    [resources]
  );

  const categories = useMemo(
    () => Array.from(new Set(resources.map((resource) => resource.category))),
    [resources]
  );
  const urlSnapshot = useSyncExternalStore(
    subscribeToFilterUrl,
    getFilterUrlSnapshot,
    getServerFilterUrlSnapshot
  );
  const urlParams = useMemo(() => new URLSearchParams(urlSnapshot), [urlSnapshot]);
  const query = urlParams.get("ara") ?? "";
  const requestedAudience = urlParams.get("hedef") as AudienceFilter | null;
  const requestedYear = urlParams.get("yil");
  const requestedCategory = urlParams.get("tur") as CategoryFilter | null;
  const audience =
    requestedAudience && audienceFilters.includes(requestedAudience)
      ? requestedAudience
      : "Tümü";
  const academicYear =
    requestedYear && academicYears.includes(requestedYear) ? requestedYear : "Tümü";
  const category =
    requestedCategory && categories.includes(requestedCategory as ResourceCategory)
      ? requestedCategory
      : "Tümü";

  const featuredResources = useMemo(
    () => resources.filter((resource) => resource.featured),
    [resources]
  );

  const filteredResources = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("tr-TR");

    return resources.filter((resource) => {
      const matchesAudience = audience === "Tümü" || resource.audience === audience;
      const matchesYear =
        academicYear === "Tümü" || resource.academicYear === academicYear;
      const matchesCategory =
        category === "Tümü" || resource.category === category;
      const searchableText = [
        resource.title,
        resource.description,
        resource.provider,
        resource.category,
        resource.academicYear,
        resource.published,
        ...resource.actions.map((action) => action.label),
      ]
        .join(" ")
        .toLocaleLowerCase("tr-TR");

      return (
        matchesAudience &&
        matchesYear &&
        matchesCategory &&
        (!normalizedQuery || searchableText.includes(normalizedQuery))
      );
    });
  }, [academicYear, audience, category, query, resources]);

  const hasActiveFilters = Boolean(
    query || audience !== "Tümü" || academicYear !== "Tümü" || category !== "Tümü"
  );
  const isMobileListExpanded = expandedMobileSnapshot === urlSnapshot;
  const hiddenMobileResourceCount = Math.max(filteredResources.length - 6, 0);

  const clearFilters = () => {
    updateFilterUrl({ ara: null, hedef: null, yil: null, tur: null });
  };

  return (
    <div id="kaynak-ara" className="scroll-mt-24 mt-5 sm:mt-8 lg:mt-10">
      <ResourceFilters
        academicYears={academicYears}
        categories={categories}
        query={query}
        audience={audience}
        academicYear={academicYear}
        category={category}
        hasActiveFilters={hasActiveFilters}
        onClear={clearFilters}
      />

      {!hasActiveFilters && featuredResources.length ? (
        <section
          aria-labelledby="quick-access-heading"
          className="mt-6 border-y border-[#1d252f]/12 py-6 sm:mt-8 sm:py-10"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-[#985700]">Hızlı erişim</p>
            <h3 id="quick-access-heading" className="mt-2 text-xl font-semibold sm:text-3xl">
              PDF, çözüm ve MEBİ bağlantıları tek adımda
            </h3>
            <p className="mt-3 hidden text-sm leading-6 text-[#5b6670] sm:block">
              En çok kullanılan kaynaklara önce yönlendirme sayfası olmadan ulaşın.
            </p>
          </div>

          <div className="mt-5 grid gap-4 sm:mt-6 lg:grid-cols-2">
            {featuredResources.map((resource) => (
              <article
                key={resource.id}
                className="rounded-[8px] border border-[#147874]/22 bg-[#eaf3ef] p-4 sm:p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="inline-flex rounded-md bg-white px-3 py-2 text-xs font-semibold text-[#147874]">
                    {resource.provider}
                  </span>
                  <span className="text-xs font-semibold text-[#5b6670]">
                    {resource.academicYear}
                  </span>
                </div>
                <h4 className="mt-4 text-lg font-semibold leading-7 sm:mt-5 sm:text-xl">{resource.title}</h4>
                <p className="mt-2 text-sm leading-6 text-[#4e5b65] sm:mt-3">
                  {resource.description}
                </p>
                <ResourceActionLinks resource={resource} />
                <Link
                  href={`/kaynaklar/${resource.id}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#147874] transition hover:text-[#0f625f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2"
                >
                  Kaynak ayrıntıları
                  <ArrowRight aria-hidden="true" size={16} />
                </Link>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <div className="mt-6 flex items-center justify-between gap-4">
        <p
          className="text-sm font-semibold text-[#43505d]"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          {filteredResources.length} kaynak
        </p>
        {academicYear !== "Tümü" ? (
          <p className="text-sm text-[#5b6670]">{academicYear}</p>
        ) : null}
      </div>

      {filteredResources.length ? (
        <>
          <div
            id="resource-results"
            className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
          >
            {filteredResources.map((resource, index) => (
              <article
                key={resource.id}
                className={`${index >= 6 && !isMobileListExpanded ? "hidden md:flex" : "flex"} flex-col rounded-[8px] border border-[#1d252f]/10 bg-white p-4 transition duration-200 hover:-translate-y-1 hover:border-[#147874]/60 hover:shadow-[0_18px_40px_rgba(29,37,47,0.12)] sm:p-5 md:min-h-[22rem]`}
              >
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex rounded-md bg-[#eaf3ef] px-3 py-2 text-xs font-semibold text-[#147874]">
                  {resource.provider}
                </span>
                <FileText aria-hidden="true" size={19} className="shrink-0 text-[#5b6670]" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-[#5b6670] sm:mt-6">
                <span>{resource.academicYear}</span>
                <span aria-hidden="true">•</span>
                <span>{resource.category}</span>
                <span aria-hidden="true">•</span>
                <span>{resource.published}</span>
              </div>
              <h3 className="mt-3 text-xl font-semibold leading-7">{resource.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#5b6670]">
                {resource.description}
              </p>
              <div className="mt-auto border-t border-[#1d252f]/10 pt-4">
                <div className="flex items-center justify-between gap-3 text-xs font-semibold text-[#5b6670]">
                  <span>{resource.format}</span>
                  <span className="text-[#147874]">Hızlı bağlantılar</span>
                </div>
                <ResourceActionLinks resource={resource} />
                <Link
                  href={`/kaynaklar/${resource.id}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#147874] transition hover:text-[#0f625f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  Kaynak ayrıntıları
                  <ArrowRight aria-hidden="true" size={16} />
                </Link>
              </div>
              </article>
            ))}
          </div>
          {hiddenMobileResourceCount ? (
            <button
              type="button"
              onClick={() =>
                setExpandedMobileSnapshot(isMobileListExpanded ? null : urlSnapshot)
              }
              aria-controls="resource-results"
              aria-expanded={isMobileListExpanded}
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-md border border-[#147874]/30 bg-[#eaf3ef] px-4 py-3 text-sm font-semibold text-[#147874] transition hover:border-[#147874]/60 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2 md:hidden"
            >
              {isMobileListExpanded
                ? "Daha az kaynak göster"
                : `${hiddenMobileResourceCount} kaynak daha göster`}
            </button>
          ) : null}
        </>
      ) : (
        <div className="mt-5 border border-dashed border-[#1d252f]/20 bg-white px-5 py-12 text-center">
          <p className="text-lg font-semibold">Uygun kaynak bulunamadı</p>
          <button
            type="button"
            onClick={clearFilters}
            className="mt-4 text-sm font-semibold text-[#147874] underline decoration-[#147874]/35 underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Filtreleri temizle
          </button>
        </div>
      )}
    </div>
  );
}
