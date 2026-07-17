"use client";

import { track } from "@vercel/analytics";
import { MessageCircle, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";
import { buildWhatsAppUrl } from "@/lib/site";

const gradeOptions = ["6", "7", "8", "9", "10", "11", "12 / Mezun"];
const goalOptions = ["LGS", "TYT-AYT", "Okul / yazılı"];
const formatOptions = ["Yüz yüze", "Online", "Kararsızım"];

type OptionGroupProps = {
  legend: string;
  name: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

function OptionGroup({
  legend,
  name,
  options,
  value,
  onChange,
}: OptionGroupProps) {
  return (
    <fieldset>
      <legend className="text-sm font-semibold text-[#34424d]">{legend}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => (
          <label key={option} className="cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
              className="peer sr-only"
            />
            <span className="inline-flex min-h-11 items-center rounded-md border border-[#1d252f]/14 bg-white px-3 py-2 text-sm font-semibold text-[#43505d] transition hover:border-[#147874]/45 hover:bg-[#eaf3ef] peer-checked:border-[#147874] peer-checked:bg-[#147874] peer-checked:text-white peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-[#f3bf5f] peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-[#fbfaf6]">
              {option}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function ConsultationBuilder() {
  const [grade, setGrade] = useState("");
  const [goal, setGoal] = useState("");
  const [lessonFormat, setLessonFormat] = useState("");
  const [location, setLocation] = useState("");
  const [currentState, setCurrentState] = useState("");
  const isReady = Boolean(grade && goal && lessonFormat);

  const message = useMemo(() => {
    if (!isReady) {
      return "Sınıf, hedef ve ders biçimini seçtiğinizde mesajınız burada hazırlanır.";
    }

    const locationNote = location.trim() || "henüz net değil";
    const currentStateNote = currentState.trim() || "ön görüşmede paylaşacağım";

    return `Merhaba Emre Hocam, Matematik Akademi için ücretsiz ön görüşme planlamak istiyorum. Öğrenci: ${grade}. sınıf. Hedef: ${goal}. Ders tercihi: ${lessonFormat}. Semt: ${locationNote}. Mevcut durum / zorlandığı konular: ${currentStateNote}.`;
  }, [currentState, goal, grade, isReady, lessonFormat, location]);

  return (
    <div className="rounded-[12px] border border-[#1d252f]/10 bg-[#fbfaf6] p-5 sm:p-7">
      <div className="grid gap-6">
        <OptionGroup
          legend="1. Öğrencinin sınıfı"
          name="grade"
          options={gradeOptions}
          value={grade}
          onChange={setGrade}
        />
        <OptionGroup
          legend="2. Çalışma hedefi"
          name="goal"
          options={goalOptions}
          value={goal}
          onChange={setGoal}
        />
        <OptionGroup
          legend="3. Ders biçimi"
          name="lesson-format"
          options={formatOptions}
          value={lessonFormat}
          onChange={setLessonFormat}
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-semibold text-[#34424d]">Semt</span>
            <input
              type="text"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              placeholder="Örn. Başakşehir"
              className="mt-2 h-11 w-full rounded-md border border-[#1d252f]/15 bg-white px-3 text-sm text-[#1d252f] outline-none transition placeholder:text-[#7f8a94] focus:border-[#147874] focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fbfaf6]"
            />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-[#34424d]">
              Mevcut durum veya zorlandığı konu
            </span>
            <input
              type="text"
              value={currentState}
              onChange={(event) => setCurrentState(event.target.value)}
              placeholder="Örn. problemler, 8 net"
              className="mt-2 h-11 w-full rounded-md border border-[#1d252f]/15 bg-white px-3 text-sm text-[#1d252f] outline-none transition placeholder:text-[#7f8a94] focus:border-[#147874] focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fbfaf6]"
            />
          </label>
        </div>

        <div className="rounded-lg border border-[#147874]/18 bg-[#eaf3ef] p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#147874]">
            Hazırlanan mesaj
          </p>
          <p className="mt-2 text-sm leading-6 text-[#43505d]" aria-live="polite">
            {message}
          </p>
        </div>

        <div>
          {isReady ? (
            <a
              href={buildWhatsAppUrl(message)}
              onClick={() =>
                track("consultation_builder_complete", {
                  grade,
                  goal,
                  lesson_format: lessonFormat,
                })
              }
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#147874] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0f625f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3bf5f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fbfaf6] sm:w-auto"
            >
              <MessageCircle aria-hidden="true" size={18} strokeWidth={2.25} />
              Hazırlanan mesajı WhatsApp&apos;ta aç
            </a>
          ) : (
            <span
              aria-disabled="true"
              className="inline-flex min-h-12 w-full cursor-not-allowed items-center justify-center gap-2 rounded-md bg-[#1d252f]/10 px-5 py-3 text-sm font-semibold text-[#5b6670] sm:w-auto"
            >
              <MessageCircle aria-hidden="true" size={18} strokeWidth={2.25} />
              Önce üç seçimi tamamlayın
            </span>
          )}
          <p className="mt-3 flex items-start gap-2 text-xs leading-5 text-[#5b6670]">
            <ShieldCheck aria-hidden="true" size={15} className="mt-0.5 shrink-0 text-[#147874]" />
            Bilgiler sitede kaydedilmez; yalnızca cihazınızda WhatsApp mesajına dönüştürülür.
          </p>
        </div>
      </div>
    </div>
  );
}
