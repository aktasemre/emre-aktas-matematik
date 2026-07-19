import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fbfaf6] text-[#1d252f]">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 py-20 sm:px-6">
        <p className="text-sm font-semibold uppercase text-[#147874]">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.02em]">
          Sayfa bulunamadı
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-6 text-[#5b6670]">
          Aradığınız sayfa taşınmış veya henüz oluşturulmamış olabilir.
        </p>
        <Link
          href="/"
          className="btn btn-dark btn-lg mt-8"
        >
          Ana sayfaya dön
        </Link>
        <div className="mt-10 border-t border-[#1d252f]/10 pt-6">
          <p className="text-sm font-semibold text-[#43505d]">Popüler sayfalar</p>
          <nav
            aria-label="Popüler sayfalar"
            className="mt-3 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold"
          >
            {[
              { label: "LGS matematik özel ders", href: "/lgs-matematik-ozel-ders" },
              { label: "YKS matematik özel ders", href: "/yks-matematik-ozel-ders" },
              { label: "Kaynak arşivi", href: "/kaynaklar" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="btn btn-ghost"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
