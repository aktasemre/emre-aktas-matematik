import { BarChart3, ClipboardList, Pencil, Search } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Seviye",
    detail: "Neredeyiz?",
    Icon: Search,
    className: "learning-cycle-step--one left-[4%] top-[18%] sm:left-[7%] sm:top-[15%]",
  },
  {
    number: "02",
    title: "Plan",
    detail: "Ne öncelikli?",
    Icon: ClipboardList,
    className: "learning-cycle-step--two right-[4%] top-[18%] sm:right-[7%] sm:top-[15%]",
  },
  {
    number: "03",
    title: "Çözüm",
    detail: "Nasıl ilerler?",
    Icon: Pencil,
    className: "learning-cycle-step--three bottom-[7%] right-[4%] sm:bottom-[9%] sm:right-[7%]",
  },
  {
    number: "04",
    title: "Analiz",
    detail: "Sırada ne var?",
    Icon: BarChart3,
    className: "learning-cycle-step--four bottom-[7%] left-[4%] sm:bottom-[9%] sm:left-[7%]",
  },
];

export function LearningCycleVisual() {
  return (
    <div
      role="img"
      aria-label="Matematik Akademi Takip Döngüsü: Seviye, Plan, Çözüm ve Analiz."
      className="learning-cycle-visual relative mx-auto h-[13.5rem] w-full max-w-[29rem] overflow-hidden rounded-[20px] border border-white/14 bg-[#172229]/92 shadow-[0_20px_60px_rgba(0,0,0,0.26)] backdrop-blur-sm sm:h-[22rem] sm:rounded-[28px] sm:shadow-[0_28px_90px_rgba(0,0,0,0.3)] lg:h-[25rem]"
    >
      <div aria-hidden="true">
        <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#147874]/28 blur-3xl" />
        <div className="absolute -bottom-20 -left-12 h-52 w-52 rounded-full bg-[#f3bf5f]/16 blur-3xl" />

        <div className="absolute inset-x-0 top-0 flex items-center justify-between px-4 pt-3 text-[9px] font-semibold uppercase tracking-[0.13em] text-white/72 sm:px-6 sm:pt-5 sm:text-[10px] sm:tracking-[0.18em]">
          <span>Takipli öğrenme</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f3bf5f]" />
            Her ders yenilenir
          </span>
        </div>

        <svg
          viewBox="0 0 500 400"
          className="absolute inset-0 h-full w-full"
          focusable="false"
        >
          <circle
            cx="250"
            cy="205"
            r="116"
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1.5"
            strokeDasharray="5 9"
          />
          <circle
            cx="250"
            cy="205"
            r="91"
            fill="rgba(20,120,116,0.08)"
            stroke="rgba(243,191,95,0.2)"
            strokeWidth="1"
          />
          <g className="learning-cycle-orbit">
            <circle cx="250" cy="89" r="5" fill="#f3bf5f" />
            <circle cx="366" cy="205" r="3.5" fill="#72c9c1" />
            <circle cx="250" cy="321" r="3" fill="rgba(255,255,255,0.72)" />
          </g>
        </svg>

        <span className="learning-cycle-halo absolute left-1/2 top-[51%] h-[5.5rem] w-[5.5rem] rounded-full bg-[#147874]/20 sm:h-[10rem] sm:w-[10rem]" />
        <div className="learning-cycle-center absolute left-1/2 top-[51%] flex h-[4.75rem] w-[4.75rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#f3bf5f]/35 bg-[#1f2930]/95 text-center shadow-[0_0_0_7px_rgba(20,120,116,0.08)] sm:h-[8.75rem] sm:w-[8.75rem] sm:shadow-[0_0_0_10px_rgba(20,120,116,0.08)]">
          <span className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-[#f3bf5f] sm:inline">
            Matematik Akademi
          </span>
          <strong className="max-w-16 text-xs leading-4 text-white sm:mt-2 sm:max-w-24 sm:text-lg sm:leading-6">
            Takip Döngüsü
          </strong>
          <span className="mt-2 hidden text-[10px] text-white/72 sm:inline">ölç · uygula · yenile</span>
        </div>

        {steps.map(({ number, title, detail, Icon, className }) => (
          <div
            key={title}
            className={`learning-cycle-step absolute w-[5rem] rounded-lg border border-white/12 bg-[#2b393f]/96 p-2 shadow-[0_10px_22px_rgba(0,0,0,0.18)] sm:w-[8rem] sm:rounded-xl sm:p-3.5 sm:shadow-[0_14px_30px_rgba(0,0,0,0.18)] ${className}`}
          >
            <div className="flex items-center justify-between">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#147874] text-white sm:h-8 sm:w-8 sm:rounded-lg">
                <Icon size={14} strokeWidth={2} />
              </span>
              <span className="text-[9px] font-semibold tracking-[0.1em] text-[#f3bf5f] sm:text-[10px] sm:tracking-[0.12em]">
                {number}
              </span>
            </div>
            <p className="mt-1.5 text-xs font-semibold text-white sm:mt-2 sm:text-sm">{title}</p>
            <p className="mt-0.5 hidden text-[10px] leading-4 text-white/72 sm:block">{detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
