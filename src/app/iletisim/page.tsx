import type { Metadata } from "next";
import { ArrowDown, AtSign, CalendarDays, Clock3, MapPin, Phone } from "lucide-react";
import { ConsultationBuilder } from "@/components/consultation-builder";
import { ScrollRevealController } from "@/components/scroll-reveal-controller";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrackedExternalLink } from "@/components/tracked-external-link";
import { consultationSteps } from "@/lib/marketing";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ücretsiz Ön Görüşme",
  description: `${siteConfig.teacher.name} ile LGS, YKS ve ara sınıf matematik için ücretsiz ön görüşme planlayın.`,
  alternates: {
    canonical: "/iletisim",
  },
};

function AvailabilityPanel({ className = "" }: { className?: string }) {
  return (
    <aside className={`hero-card-reveal rounded-[8px] bg-[#1f2930] p-5 text-white sm:p-7 ${className}`}>
      <p className="text-sm font-semibold text-[#f3bf5f]">Ulaşılabilirlik</p>
      <div className="mt-4 grid gap-4 text-sm leading-6 text-white/80 sm:mt-6 sm:gap-5">
        <p className="flex gap-3"><Clock3 aria-hidden="true" size={19} className="shrink-0 text-[#f3bf5f]" />{siteConfig.contact.availability}</p>
        <p className="flex gap-3"><MapPin aria-hidden="true" size={19} className="shrink-0 text-[#f3bf5f]" />{siteConfig.areaServed}</p>
        <p className="flex gap-3"><CalendarDays aria-hidden="true" size={19} className="shrink-0 text-[#f3bf5f]" />1 seans / 90 dakika birebir ders</p>
      </div>
      <div className="mt-5 border-t border-white/15 pt-4 sm:mt-6 sm:pt-5">
        <p className="text-sm leading-6 text-white/80">{siteConfig.pricingNote}</p>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.08em] text-[#f3bf5f]">
          Ücreti belirleyen bilgiler
        </p>
        <ul className="mt-3 grid gap-2 text-sm text-white/78 sm:grid-cols-2 lg:grid-cols-1">
          {siteConfig.pricingFactors.map((factor) => (
            <li key={factor} className="flex items-start gap-2">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f3bf5f]" />
              {factor}
            </li>
          ))}
        </ul>
      </div>
      <a
        href={siteConfig.instagram.url}
        target="_blank"
        rel="noreferrer"
        className="btn btn-outline-dark btn-compact btn-offset-dark mt-5 sm:mt-6"
      >
        <AtSign aria-hidden="true" size={17} />
        Instagram&apos;da {siteConfig.instagram.handle}
        <span className="sr-only"> (yeni sekmede açılır)</span>
      </a>
    </aside>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#fbfaf6] text-[#1d252f]">
      <SiteHeader />
      <ScrollRevealController />
      <main>
        <section className="border-b border-[#1d252f]/10 bg-white">
          <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 sm:px-6 sm:py-14 lg:grid-cols-[0.62fr_0.38fr] lg:gap-9 lg:py-24">
            <div>
              <p className="text-sm font-semibold uppercase text-[#147874]">Ücretsiz ön görüşme</p>
              <h1 className="mt-4 text-[2.1rem] font-semibold leading-[1.1] tracking-[-0.02em] sm:text-5xl">
                Önce öğrenciyi tanıyalım, sonra doğru ders planını kuralım
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-[#5b6670] sm:hidden">
                Ücretsiz ön görüşmede öğrencinin seviyesini, hedefini ve ders formatını netleştirir; uygunluk sonrası 1 seans / 90 dakika esasına dayanan birebir planı birlikte oluştururuz.
              </p>
              <p className="mt-6 hidden max-w-3xl text-lg leading-8 text-[#5b6670] sm:block">
                İlk tanışma ve ön değerlendirme görüşmesi ücretsizdir. Bu görüşmede öğrencinin sınıfını, hedefini, mevcut matematik seviyesini ve ihtiyaçlarını değerlendiriyoruz. Karşılıklı uygunluk sonrası her biri 90 dakika süren ücretli birebir seansların planını birlikte netleştiriyoruz.
              </p>
              <div className="mt-6 sm:mt-8">
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#gorusme-hazirlayici"
                    className="btn btn-secondary btn-lg"
                  >
                    Görüşme mesajını hazırla
                    <ArrowDown aria-hidden="true" size={17} />
                  </a>
                  <TrackedExternalLink
                    href={siteConfig.contact.phoneUrl}
                    eventName="contact_click"
                    eventProperties={{
                      channel: "phone",
                      path: "/iletisim",
                      placement: "contact_hero",
                    }}
                    className="btn btn-outline-light btn-lg"
                  >
                    <Phone aria-hidden="true" size={17} />
                    {siteConfig.contact.phoneDisplay}
                  </TrackedExternalLink>
                </div>
              </div>
            </div>

            <AvailabilityPanel className="hidden lg:block" />
          </div>
        </section>

        <section className="bg-[#eaf3ef]">
          <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:py-24">
            <div className="max-w-3xl" data-scroll-reveal>
              <p className="text-sm font-semibold uppercase text-[#147874]">Görüşme kapsamı</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.015em] sm:text-4xl">Ön görüşmede ne konuşuyoruz?</h2>
            </div>
            <AvailabilityPanel className="mt-7 lg:hidden" />
            <div className="mt-7 grid gap-4 sm:mt-9 md:grid-cols-2 lg:grid-cols-4" data-scroll-reveal-group>
              {consultationSteps.map((step) => (
                <article key={step.title} className="rounded-[8px] border border-[#1d252f]/10 bg-white p-5">
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#5b6670]">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="gorusme-hazirlayici" className="scroll-mt-24 bg-white">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:py-24">
            <div data-scroll-reveal>
              <p className="text-sm font-semibold uppercase text-[#985700]">Görüşme hazırlayıcı</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.015em] sm:text-4xl">Üç seçimle görüşme mesajınızı hazırlayın</h2>
              <p className="mt-5 text-sm leading-7 text-[#5b6670]">
                Sınıf, hedef ve ders biçimini seçin. Semt ve mevcut durum bilgisi isteğe bağlıdır; mesajınız doğrudan WhatsApp&apos;ta açılır.
              </p>
            </div>
            <div data-scroll-reveal>
              <ConsultationBuilder />
            </div>
          </div>
        </section>

        <section className="bg-[#fbfaf6]">
          <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:py-16">
            <p className="text-sm leading-6 text-[#5b6670]">
              Yüz yüze ders için öncelikli bölgeler: {siteConfig.serviceAreas.join(", ")}.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
