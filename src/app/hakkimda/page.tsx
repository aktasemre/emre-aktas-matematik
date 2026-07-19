import type { Metadata } from "next";
import { AtSign, BookOpenCheck, CalendarCheck, GraduationCap, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ContactActions } from "@/components/contact-actions";
import { ScrollRevealController } from "@/components/scroll-reveal-controller";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.teacher.name} Hakkında`,
  description: `${siteConfig.teacher.name}, ${siteConfig.teacher.experienceYears} yıllık deneyimiyle LGS, YKS ve ara sınıf matematik özel dersleri veriyor.`,
  alternates: {
    canonical: "/hakkimda",
  },
};

const profilePoints = [
  {
    title: "Seviyeye göre ilerleme",
    text: "Her öğrenci için aynı hızda değil, mevcut seviye ve hedefe göre bir ders planı oluşturulur.",
    icon: GraduationCap,
  },
  {
    title: "Takipli çalışma sistemi",
    text: "Konu anlatımı, öğrenci çözümü ve yanlış analizi aynı ders döngüsü içinde ele alınır.",
    icon: BookOpenCheck,
  },
  {
    title: "Güncel müfredat yaklaşımı",
    text: "LGS, YKS ve Yeni Maarif Modeli gelişmeleri ders planı hazırlanırken dikkate alınır.",
    icon: CalendarCheck,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fbfaf6] text-[#1d252f]">
      <SiteHeader />
      <ScrollRevealController />
      <main>
        <section className="border-b border-[#1d252f]/10 bg-white">
          <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 sm:px-6 sm:py-14 lg:grid-cols-[0.38fr_0.62fr] lg:gap-10 lg:py-24">
            <div className="hero-card-reveal relative order-2 h-48 overflow-hidden rounded-[8px] bg-[#1f2930] sm:h-72 lg:order-1 lg:h-auto lg:min-h-[22rem]">
              <Image
                src={siteConfig.teacher.profileImage}
                alt={`Matematik öğretmeni ${siteConfig.teacher.name}`}
                fill
                loading="eager"
                sizes="(max-width: 1023px) 100vw, 38vw"
                className="object-cover object-[60%_45%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f2930]/92 via-[#1f2930]/24 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                <p className="text-lg font-semibold">{siteConfig.teacher.name}</p>
                <p className="mt-2 text-sm font-semibold text-[#f3bf5f]">
                  {siteConfig.teacher.experienceYears} yıllık öğretmenlik deneyimi
                </p>
                <p className="mt-4 text-sm leading-6 text-white/80">{siteConfig.areaServed}</p>
              </div>
            </div>

            <div className="order-1 self-center lg:order-2">
              <p className="text-sm font-semibold uppercase text-[#147874]">
                Matematik Öğretmeni
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-[-0.02em] sm:text-5xl">
                {siteConfig.teacher.name}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5b6670]">
                {siteConfig.teacher.experienceYears} yıllık öğretmenlik deneyimiyle
                LGS, YKS ve ara sınıf matematikte öğrencinin seviyesine göre
                ilerleyen birebir dersler veriyorum.
              </p>
              <p className="mt-4 hidden max-w-3xl text-sm leading-6 text-[#5b6670] lg:block">
                {siteConfig.teacher.curriculumNote}
              </p>
              <div className="mt-7">
                <ContactActions analyticsPlacement="about_hero" />
              </div>
              <Link
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost mt-5 hidden lg:inline-flex"
              >
                <AtSign aria-hidden="true" size={17} />
                Instagram&apos;da {siteConfig.instagram.handle}
                <span className="sr-only"> (yeni sekmede açılır)</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#eaf3ef]">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:py-24">
            <div className="max-w-3xl" data-scroll-reveal>
              <p className="text-sm font-semibold uppercase text-[#147874]">Ders yaklaşımı</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.015em] sm:text-4xl">
                Öğrencinin ihtiyacını anlayan, takip eden ve somut hedefe bağlayan bir sistem
              </h2>
              <div className="mt-6 lg:hidden">
                <p className="text-sm leading-6 text-[#5b6670]">
                  {siteConfig.teacher.curriculumNote}
                </p>
                <Link
                  href={siteConfig.instagram.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost mt-3"
                >
                  <AtSign aria-hidden="true" size={17} />
                  Instagram&apos;da {siteConfig.instagram.handle}
                  <span className="sr-only"> (yeni sekmede açılır)</span>
                </Link>
              </div>
            </div>
            <div className="mt-9 grid gap-4 md:grid-cols-3" data-scroll-reveal-group>
              {profilePoints.map((point) => {
                const Icon = point.icon;

                return (
                  <article key={point.title} className="rounded-[8px] border border-[#1d252f]/10 bg-white p-6">
                    <Icon aria-hidden="true" size={24} className="text-[#147874]" />
                    <h3 className="mt-5 text-xl font-semibold">{point.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#5b6670]">{point.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
            <div data-scroll-reveal>
              <p className="text-sm font-semibold uppercase text-[#985700]">Ders düzeni</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.015em] sm:text-4xl">
                90 dakikalık birebir ders modeli
              </h2>
            </div>
            <div className="grid gap-4" data-scroll-reveal-group>
              <div className="rounded-[8px] border border-[#1d252f]/10 bg-[#fbfaf6] p-6">
                <h3 className="text-xl font-semibold">Ders öncesi</h3>
                <p className="mt-3 text-sm leading-6 text-[#5b6670]">
                  Öğrencinin hedefi, son deneme/yazılı sonucu ve zorlandığı konu başlıkları değerlendirilir.
                </p>
              </div>
              <div className="rounded-[8px] border border-[#1d252f]/10 bg-[#fbfaf6] p-6">
                <h3 className="text-xl font-semibold">Ders içinde</h3>
                <p className="mt-3 text-sm leading-6 text-[#5b6670]">
                  Konu anlatımı, örnek soru, öğrenci çözümü ve yanlış analizi birlikte ilerler.
                </p>
              </div>
              <div className="rounded-[8px] border border-[#1d252f]/10 bg-[#fbfaf6] p-6">
                <h3 className="text-xl font-semibold">Ders sonrası</h3>
                <p className="mt-3 text-sm leading-6 text-[#5b6670]">
                  Bir sonraki derse kadar izlenecek çalışma hedefi ve soru çözüm önceliği belirlenir.
                </p>
              </div>
              <p className="px-1 text-sm leading-6 text-[#5b6670]">
                İlk tanışma ve ön değerlendirme görüşmesi ücretsizdir. Uygunluk sonrası ders programı, 90 dakikalık ücretli birebir derslerle devam eder.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#fbfaf6]">
          <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-12 sm:px-6 md:flex-row md:items-center md:justify-between lg:py-16">
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold text-[#147874]">
                <MapPin aria-hidden="true" size={17} />
                {siteConfig.areaServed}
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#5b6670]">
                Florya, Bakırköy, Başakşehir, Göktürk ve yakın çevre için yüz yüze ders uygunluğu görüşmede netleştirilir.
              </p>
            </div>
            <ContactActions compact analyticsPlacement="about_bottom" />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
