import { ClipboardCheck, ListChecks, NotebookTabs, RotateCcw } from "lucide-react";

const trackingFields = [
  {
    title: "Başlangıç fotoğrafı",
    text: "Son deneme veya yazılı sonucu, zorlanılan konu ve hedef not edilir.",
    icon: ClipboardCheck,
  },
  {
    title: "Ders içi gözlem",
    text: "Soruyu okuma, çözüm planı ve işlem hataları ayrı başlıklarda izlenir.",
    icon: ListChecks,
  },
  {
    title: "Yanlış analizi",
    text: "Konu eksiği, işlem hatası ve soru okuma sorunu birbirinden ayrılır.",
    icon: RotateCcw,
  },
  {
    title: "Sonraki adım",
    text: "Bir sonraki derse kadar çalışma hedefi ve soru önceliği belirlenir.",
    icon: NotebookTabs,
  },
];

export function TrackingProof() {
  return (
    <section className="bg-[#fbfaf6]">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-6 lg:grid-cols-[0.42fr_0.58fr] lg:py-20">
        <div data-scroll-reveal>
          <p className="text-sm font-semibold uppercase text-[#985700]">Sürecin somut karşılığı</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.015em] sm:text-4xl">
            Her dersin ardından neyin değişeceği kayda geçer
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#5b6670]">
            Aşağıdaki kart, ders takibinde kullanılan başlıkların örneğidir. Öğrenciye göre içerik değişir; bu bölüm bir sonuç vaadi değil, çalışma sürecinin nasıl görünür hâle getirildiğini gösterir.
          </p>
        </div>

        <div className="rounded-[12px] border border-[#1d252f]/10 bg-white p-5 sm:p-7" data-scroll-reveal>
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#1d252f]/10 pb-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#147874]">Örnek takip kaydı</p>
              <p className="mt-1 text-sm text-[#5b6670]">Öğrenciye göre ders sonunda güncellenir</p>
            </div>
            <span className="rounded-md bg-[#eaf3ef] px-3 py-2 text-xs font-semibold text-[#147874]">Örnek</span>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {trackingFields.map((field) => {
              const Icon = field.icon;

              return (
                <article key={field.title} className="grid grid-cols-[36px_1fr] gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#1f2930] text-white">
                    <Icon aria-hidden="true" size={17} />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-[#1d252f]">{field.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#5b6670]">{field.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
