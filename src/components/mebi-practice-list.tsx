import { ExternalLink, FileText, KeyRound } from "lucide-react";
import { TrackedExternalLink } from "@/components/tracked-external-link";
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
            <TrackedExternalLink
              href={mebiPracticeArchive.officialVerificationUrl}
              target="_blank"
              rel="noreferrer"
              eventName="resource_open"
              eventProperties={{
                placement: "mebi_verification",
                resource_id: "mebi-2026-lgs-denemeleri",
              }}
              className="btn btn-ghost"
            >
              MEB doğrulama duyurusu
              <ExternalLink aria-hidden="true" size={16} />
              <span className="sr-only"> (yeni sekmede açılır)</span>
            </TrackedExternalLink>
            <TrackedExternalLink
              href={mebiPracticeArchive.sourceUrl}
              target="_blank"
              rel="noreferrer"
              eventName="resource_open"
              eventProperties={{
                placement: "mebi_external_source",
                resource_id: "mebi-2026-lgs-denemeleri",
              }}
              className="btn btn-ghost"
            >
              Harici PDF kaynağı
              <ExternalLink aria-hidden="true" size={16} />
              <span className="sr-only"> (yeni sekmede açılır)</span>
            </TrackedExternalLink>
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
              <TrackedExternalLink
                href={exam.verbalHref}
                download
                eventName="resource_download"
                eventProperties={{ exam_number: exam.number, file_type: "verbal" }}
                aria-label={`MEBİ LGS Deneme ${exam.number} sözel PDF'yi indir`}
                className="btn btn-outline-light btn-compact"
              >
                <FileText aria-hidden="true" size={16} />
                Sözel indir
              </TrackedExternalLink>
              <TrackedExternalLink
                href={exam.quantitativeHref}
                download
                eventName="resource_download"
                eventProperties={{ exam_number: exam.number, file_type: "quantitative" }}
                aria-label={`MEBİ LGS Deneme ${exam.number} sayısal PDF'yi indir`}
                className="btn btn-outline-light btn-compact"
              >
                <FileText aria-hidden="true" size={16} />
                Sayısal indir
              </TrackedExternalLink>
              <TrackedExternalLink
                href={exam.answerKeyHref}
                download
                eventName="resource_download"
                eventProperties={{ exam_number: exam.number, file_type: "answer_key" }}
                aria-label={`MEBİ LGS Deneme ${exam.number} cevap anahtarını indir`}
                className="btn btn-outline-light btn-compact"
              >
                <KeyRound aria-hidden="true" size={16} />
                Cevap anahtarı indir
              </TrackedExternalLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
