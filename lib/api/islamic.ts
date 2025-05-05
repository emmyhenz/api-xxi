import { apiParams, fetchApi, config } from "../functions";

let islamicApi = config.apiUrl + "/islamic";

export const islamic = {
  alQuran: (params: Record<string, any> = {}) => fetchApi.buffer(`${islamicApi}/al-quran`, apiParams(params)),

  quranSurah: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${islamicApi}/quran-surah`, apiParams(params), resultOnly),

  asmaUlHusna: (resultOnly: boolean = false) => fetchApi.json(`${islamicApi}/asma-ul-husna`, {}, resultOnly),

  prophetNames: (resultOnly: boolean = false) => fetchApi.json(`${islamicApi}/prophet-names`, {}, resultOnly),

  surahDetails: (resultOnly: boolean = false) => fetchApi.json(`${islamicApi}/surah-details`, {}, resultOnly),

  surahJuz: (resultOnly: boolean = false) => fetchApi.json(`${islamicApi}/surah-juz-details`, {}, resultOnly),

  surahVerse: (resultOnly: boolean = false) => fetchApi.json(`${islamicApi}/quran-surah-verses`, {}, resultOnly),

  prayerTimes: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${islamicApi}/prayer-times`, apiParams(params), resultOnly),

  sahihAlBukhari: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${islamicApi}/hadith-sahih-al-bukhari`, apiParams(params), resultOnly),

  hadithQudsi: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${islamicApi}/hadith-qudsi`, apiParams(params), resultOnly),

  jamiAtTirmidhi: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${islamicApi}/hadith-jami-at-tirmidhi`, apiParams(params), resultOnly),

  sunanAnNasai: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${islamicApi}/hadith-sunan-nasai`, apiParams(params), resultOnly),

  sunanIbnMajah: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${islamicApi}/hadith-ibn-majah`, apiParams(params), resultOnly),

  sunanAbuDawud: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${islamicApi}/hadith-abu-dawud`, apiParams(params), resultOnly),
};
