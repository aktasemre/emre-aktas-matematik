import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fbfaf6] text-[#1d252f]">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 py-20 sm:px-6">
        <p className="text-sm font-semibold uppercase text-[#147874]">404</p>
        <h1 className="mt-4 text-4xl font-semibold">Sayfa bulunamadı</h1>
        <p className="mt-4 max-w-xl text-sm leading-6 text-[#5b6670]">
          Aradığınız sayfa taşınmış veya henüz oluşturulmamış olabilir.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-md bg-[#1f2930] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#31414c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fbfaf6]"
        >
          Ana sayfaya dön
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}
