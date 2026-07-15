import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export type LegalSection = {
  title: string;
  paragraphs: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
};

export function LegalPage({ eyebrow, title, intro, sections }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-[#fbfaf6] text-[#1d252f]">
      <SiteHeader />
      <main>
        <section className="border-b border-[#1d252f]/10 bg-white">
          <div className="mx-auto max-w-4xl px-5 py-16 sm:px-6 lg:py-24">
            <p className="text-sm font-semibold uppercase text-[#147874]">{eyebrow}</p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.08] sm:text-5xl">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5b6670]">{intro}</p>
            <p className="mt-5 text-sm font-semibold text-[#985700]">
              Son güncelleme: 15 Temmuz 2026
            </p>
          </div>
        </section>

        <section className="bg-[#fbfaf6]">
          <div className="mx-auto max-w-4xl px-5 py-16 sm:px-6 lg:py-24">
            <div className="divide-y divide-[#1d252f]/10 border-y border-[#1d252f]/10">
              {sections.map((section) => (
                <article key={section.title} className="py-8 sm:grid sm:grid-cols-[0.34fr_0.66fr] sm:gap-8">
                  <h2 className="text-xl font-semibold leading-7">{section.title}</h2>
                  <div className="mt-4 space-y-4 text-sm leading-7 text-[#5b6670] sm:mt-0">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 border-l-4 border-[#f3bf5f] bg-white px-5 py-5 text-sm leading-7 text-[#43505d]">
              Bu metinlerle ilgili sorularınız için
              {" "}
              <Link
                href="/iletisim"
                className="font-semibold text-[#147874] underline decoration-[#147874]/35 underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2"
              >
                iletişim sayfasını
              </Link>
              {" "}
              kullanabilirsiniz.
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
