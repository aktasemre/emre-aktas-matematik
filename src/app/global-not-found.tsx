import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı | Matematik Akademi",
  description: "Aradığınız Matematik Akademi sayfası bulunamadı.",
};

export default function GlobalNotFound() {
  return (
    <html lang="tr">
      <body className="min-h-screen bg-[#fbfaf6] text-[#1d252f]">
        <header className="border-b border-[#1d252f]/10">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-6">
            <Link
              href="/"
              className="rounded-md text-lg font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2"
            >
              {siteConfig.name}
            </Link>
            <Link
              href="/kaynaklar"
              className="rounded-md text-sm font-semibold text-[#147874] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2"
            >
              Kaynaklar
            </Link>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:py-28">
          <p className="text-sm font-semibold uppercase text-[#147874]">404</p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
            Aradığınız sayfa bulunamadı
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-[#5b6670]">
            Bağlantı değişmiş veya sayfa henüz oluşturulmamış olabilir. Ana sayfaya ya da kaynak arşivine dönebilirsiniz.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex rounded-md bg-[#1f2930] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#31414c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2"
            >
              Ana sayfaya dön
            </Link>
            <Link
              href="/kaynaklar"
              className="inline-flex rounded-md border border-[#1d252f]/15 bg-white px-5 py-3 text-sm font-semibold text-[#1d252f] transition hover:bg-[#ece7dc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2"
            >
              Kaynak arşivini aç
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
