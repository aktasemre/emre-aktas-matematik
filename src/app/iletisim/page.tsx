import type { Metadata } from "next";
import { AtSign, CalendarDays, Clock3, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactActions } from "@/components/contact-actions";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { consultationSteps, suggestedWhatsAppMessage } from "@/lib/marketing";
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
        <p className="flex gap-3"><CalendarDays aria-hidden="true" size={19} className="shrink-0 text-[#f3bf5f]" />90 dakikalık birebir ders periyotları</p>
      </div>
      <p className="mt-5 border-t border-white/15 pt-4 text-sm leading-6 text-white/80 sm:mt-6 sm:pt-5">
        {siteConfig.pricingNote}
      </p>
      <a
        href={siteConfig.instagram.url}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex items-center gap-2 rounded-md border border-white/20 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f2930] sm:mt-6"
      >
        <AtSign aria-hidden="true" size={17} />
        Instagram&apos;da {siteConfig.instagram.handle}
      </a>
    </aside>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#fbfaf6] text-[#1d252f]">
      <SiteHeader />
      <main>
        <section className="border-b border-[#1d252f]/10 bg-white">
          <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 sm:px-6 sm:py-14 lg:grid-cols-[0.62fr_0.38fr] lg:gap-9 lg:py-24">
            <div>
              <p className="text-sm font-semibold uppercase text-[#147874]">Ücretsiz ön görüşme</p>
              <h1 className="mt-4 text-[2.1rem] font-semibold leading-[1.1] sm:text-5xl">
                Önce öğrenciyi tanıyalım, sonra doğru ders planını kuralım
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-[#5b6670] sm:hidden">
                Ücretsiz ön görüşmede öğrencinin seviyesini, hedefini ve ders formatını netleştirir; uygunluk sonrası 90 dakikalık birebir planı birlikte oluştururuz.
              </p>
              <p className="mt-6 hidden max-w-3xl text-lg leading-8 text-[#5b6670] sm:block">
                İlk tanışma ve ön değerlendirme görüşmesi ücretsizdir. Bu görüşmede öğrencinin sınıfını, hedefini, mevcut matematik seviyesini ve ihtiyaçlarını değerlendiriyoruz. Karşılıklı uygunluk sonrası 90 dakikalık ücretli birebir ders planını birlikte netleştiriyoruz.
              </p>
              <div className="mt-6 sm:mt-8">
                <ContactActions />
              </div>
            </div>

            <AvailabilityPanel className="hidden lg:block" />
          </div>
        </section>

        <section className="bg-[#eaf3ef]">
          <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase text-[#147874]">Görüşme kapsamı</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">Ön görüşmede ne konuşuyoruz?</h2>
            </div>
            <AvailabilityPanel className="mt-7 lg:hidden" />
            <div className="mt-7 grid gap-4 sm:mt-9 md:grid-cols-2 lg:grid-cols-4">
              {consultationSteps.map((step) => (
                <article key={step.title} className="rounded-[8px] border border-[#1d252f]/10 bg-white p-5">
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#5b6670]">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
            <div>
              <p className="text-sm font-semibold uppercase text-[#985700]">Hazır mesaj</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">Yazmaya nereden başlayacağınızı düşünmeyin</h2>
            </div>
            <div className="rounded-[8px] border border-[#1d252f]/10 bg-[#fbfaf6] p-6">
              <p className="text-sm leading-7 text-[#43505d]">{suggestedWhatsAppMessage}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={siteConfig.contact.whatsappUrl}
                  className="inline-flex items-center gap-2 rounded-md bg-[#147874] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0f625f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fbfaf6]"
                >
                  <MessageCircle aria-hidden="true" size={17} />
                  Mesajı WhatsApp&apos;ta aç
                </a>
                <a
                  href={siteConfig.contact.phoneUrl}
                  className="inline-flex items-center gap-2 rounded-md border border-[#1d252f]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#1d252f] transition hover:bg-[#ece7dc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fbfaf6]"
                >
                  <Phone aria-hidden="true" size={17} />
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#fbfaf6]">
          <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:py-16">
            <p className="text-sm leading-6 text-[#5b6670]">
              {siteConfig.pricingNote} Yüz yüze ders için öncelikli bölgeler: {siteConfig.serviceAreas.join(", ")}.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
