import { ExternalLink, FileText, KeyRound } from "lucide-react";
import { mebiPracticeArchive, mebiPracticeExams } from "@/lib/mebi-practice-exams";

export function MebiPracticeList() {
  return (
    <section aria-labelledby="mebi-practice-heading">
      <div className="grid gap-6 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase text-[#147874]">
            {mebiPracticeArchive.academicYear} MEBİ denemeleri
          </p>
          <h2
            id="mebi-practice-heading"
            className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl"
          >
            12 Türkiye geneli LGS denemesine tek ekrandan ulaşın
          </h2>
        </div>
        <div>
          <p className="text-sm leading-7 text-[#5b6670]">
            Her denemede sözel bölüm, sayısal bölüm ve cevap anahtarı bağlantıları
            ayrı ayrı yer alır. PDF bağlantıları {mebiPracticeArchive.sourceLabel}{" "}
            tarafından hazırlanan harici kaynak listesinden alınır; 12 denemelik
            program MEB duyurusuyla doğrulanır. İndirme düğmesine bastığınızda PDF
            önizleme adımı olmadan doğrudan cihazınıza iner.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
            <a
              href={mebiPracticeArchive.officialVerificationUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#147874] transition hover:text-[#0f625f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#edf4f6]"
            >
              MEB doğrulama duyurusu
              <ExternalLink aria-hidden="true" size={16} />
            </a>
            <a
              href={mebiPracticeArchive.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#43505d] transition hover:text-[#1d252f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#edf4f6]"
            >
              Harici PDF kaynağı
              <ExternalLink aria-hidden="true" size={16} />
            </a>
          </div>
          <p className="mt-3 text-xs leading-5 text-[#5b6670]">
            Son bağlantı kontrolü: {mebiPracticeArchive.lastVerified ?? "Henüz yapılmadı"}
          </p>
        </div>
      </div>

      <div className="mt-9 grid gap-x-8 md:grid-cols-2">
        {mebiPracticeExams.map((exam) => (
          <article
            key={exam.number}
            className="border-t border-[#1d252f]/12 py-5 last:border-b"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-lg font-semibold">
                MEBİ LGS Deneme {String(exam.number).padStart(2, "0")}
              </h3>
              <span className="text-xs font-semibold text-[#5b6670]">3 indirme</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={exam.verbalHref}
                download
                aria-label={`MEBİ LGS Deneme ${exam.number} sözel PDF'yi indir`}
                className="inline-flex min-h-10 items-center gap-2 rounded-md border border-[#1d252f]/14 bg-white px-3 py-2 text-sm font-semibold text-[#34424d] transition hover:border-[#147874]/55 hover:bg-[#eaf3ef] hover:text-[#0f625f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#edf4f6]"
              >
                <FileText aria-hidden="true" size={16} />
                Sözel indir
              </a>
              <a
                href={exam.quantitativeHref}
                download
                aria-label={`MEBİ LGS Deneme ${exam.number} sayısal PDF'yi indir`}
                className="inline-flex min-h-10 items-center gap-2 rounded-md border border-[#1d252f]/14 bg-white px-3 py-2 text-sm font-semibold text-[#34424d] transition hover:border-[#147874]/55 hover:bg-[#eaf3ef] hover:text-[#0f625f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#edf4f6]"
              >
                <FileText aria-hidden="true" size={16} />
                Sayısal indir
              </a>
              <a
                href={exam.answerKeyHref}
                download
                aria-label={`MEBİ LGS Deneme ${exam.number} cevap anahtarını indir`}
                className="inline-flex min-h-10 items-center gap-2 rounded-md border border-[#1d252f]/14 bg-white px-3 py-2 text-sm font-semibold text-[#34424d] transition hover:border-[#147874]/55 hover:bg-[#eaf3ef] hover:text-[#0f625f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#edf4f6]"
              >
                <KeyRound aria-hidden="true" size={16} />
                Cevap anahtarı indir
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
