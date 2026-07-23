import { AtSign, Clock3, MapPin } from "lucide-react";
import Link from "next/link";
import { ContactActions } from "@/components/contact-actions";
import { locationPages } from "@/lib/locations";
import { navItems, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#1f2930] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="text-lg font-semibold">
            {siteConfig.teacher.name} | {siteConfig.name}
          </p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-white/75">
            {siteConfig.teacher.experienceYears} yıllık deneyimle LGS, YKS ve
            ara sınıf matematikte öğrenci seviyesine göre birebir ders.
          </p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-white/75">
            İlk tanışma ve ön değerlendirme görüşmesi ücretsiz; sonraki birebir dersler 1 seans / 90 dakika olarak planlanır ve ücretlidir.
          </p>
          <div className="mt-5 grid gap-2 text-sm text-white/75 sm:grid-cols-2">
            <p className="flex items-center gap-2">
              <Clock3 aria-hidden="true" size={16} />
              {siteConfig.contact.availability}
            </p>
            <p className="flex items-center gap-2">
              <MapPin aria-hidden="true" size={16} />
              {siteConfig.areaServed}
            </p>
          </div>
          <div className="mt-6">
            <ContactActions variant="dark" compact analyticsPlacement="footer" />
          </div>
          <a
            href={siteConfig.instagram.url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost-dark btn-compact btn-offset-dark mt-5"
          >
            <AtSign aria-hidden="true" size={17} />
            {siteConfig.instagram.handle}
            <span className="sr-only"> (yeni sekmede açılır)</span>
          </a>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase text-[#f3bf5f]">
            Hızlı erişim
          </p>
          <nav aria-label="Alt menü" className="mt-4 flex flex-wrap gap-2 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex min-h-11 items-center rounded-md px-2.5 py-2 text-white/75 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f2930]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <nav
            aria-label="Yasal bağlantılar"
            className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/58"
          >
            {[
              { label: "Gizlilik", href: "/gizlilik-politikasi" },
              { label: "Kullanım koşulları", href: "/kullanim-kosullari" },
              { label: "Çerezler", href: "/cerez-politikasi" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex min-h-11 items-center transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f2930]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="mt-6 text-xs font-semibold uppercase text-white/55">
            Ders bölgeleri
          </p>
          <nav
            aria-label="Matematik özel ders bölgeleri"
            className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-xs"
          >
            {locationPages.map((location) => (
              <Link
                key={location.slug}
                href={`/${location.slug}`}
                className="inline-flex min-h-11 items-center gap-2 text-white/68 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f2930]"
              >
                <MapPin aria-hidden="true" size={13} />
                {location.name}
              </Link>
            ))}
          </nav>
          <p className="mt-8 text-xs leading-5 text-white/55">
            &copy; 2026 {siteConfig.teacher.name} | {siteConfig.teacher.title}
          </p>
        </div>
      </div>
    </footer>
  );
}
