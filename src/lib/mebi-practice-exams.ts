import generatedMebiPractice from "@/data/mebi-practice.generated.json";

export type MebiPracticeExam = {
  number: number;
  verbalHref: string;
  quantitativeHref: string;
  answerKeyHref: string;
};

export type MebiPracticeArchive = {
  sourceUrl: string;
  sourceLabel: string;
  sourceType: string;
  academicYear: string;
  officialVerificationUrl: string;
  officialVerificationNote: string;
  lastVerified: string | null;
  exams: MebiPracticeExam[];
};

export const mebiPracticeArchive = generatedMebiPractice as MebiPracticeArchive;
export const mebiPracticeExams = mebiPracticeArchive.exams;
