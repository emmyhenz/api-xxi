import { apiParams, fetchApi, config } from "../functions";

export const islamic = {
  alQuran: (params: Record<string, any> = {}) => fetchApi.buffer(`${config.apiUrl}/islamic/al-quran`, apiParams(params)),

  quranSurah: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/islamic/quran-surah`, apiParams(params), resultOnly),

  asmaUlHusna: (resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/islamic/asma-ul-husna`, {}, resultOnly),

  prophetNames: (resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/islamic/prophet-names`, {}, resultOnly),

  surahDetails: (resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/islamic/surah-details`, {}, resultOnly),

  surahJuz: (resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/islamic/surah-juz-details`, {}, resultOnly),

  surahVerse: (resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/islamic/quran-surah-verses`, {}, resultOnly),

  prayerTimes: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/islamic/prayer-times`, apiParams(params), resultOnly),

  sahihAlBukhari: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/islamic/hadith-sahih-al-bukhari`, apiParams(params), resultOnly),

  hadithQudsi: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/islamic/hadith-qudsi`, apiParams(params), resultOnly),

  jamiAtTirmidhi: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/islamic/hadith-jami-at-tirmidhi`, apiParams(params), resultOnly),

  sunanAnNasai: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/islamic/hadith-sunan-nasai`, apiParams(params), resultOnly),

  sunanIbnMajah: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/islamic/hadith-ibn-majah`, apiParams(params), resultOnly),

  sunanAbuDawud: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/islamic/hadith-abu-dawud`, apiParams(params), resultOnly),
};
