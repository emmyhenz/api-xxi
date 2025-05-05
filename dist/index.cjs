"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// lib/index.ts
var index_exports = {};
__export(index_exports, {
  apiParams: () => apiParams,
  config: () => config,
  downloader: () => downloader,
  fetchApi: () => fetchApi,
  imageProcessing: () => imageProcessing,
  islamic: () => islamic,
  setConfig: () => setConfig
});
module.exports = __toCommonJS(index_exports);

// lib/functions/index.ts
var config = {
  apiUrl: "https://api.nexoracle.com",
  apiKey: null
};
function setConfig({ apiUrl, apiKey }) {
  if (apiUrl) config.apiUrl = apiUrl;
  if (apiKey) config.apiKey = apiKey;
}
function apiParams(params) {
  if (params.apikey) return params;
  if (config.apiKey) return { ...params, apikey: config.apiKey };
  return params;
}
var fetchApi = {
  async json(apiUrl, params = {}, fetchResultOnly = false, method = "GET") {
    try {
      let url = new URL(apiUrl);
      let options = {
        method,
        headers: {
          "Content-Type": "application/json"
        }
      };
      if (method.toUpperCase() === "GET") {
        Object.entries(params).forEach(([key, value]) => {
          url.searchParams.append(key, value);
        });
      } else {
        options.body = JSON.stringify(params);
      }
      const response = await fetch(url.toString(), options);
      if (response.status === 302) {
        return "An Error Occurred";
      }
      const data = await response.json();
      if (fetchResultOnly) {
        if (data && data?.result) {
          return data.result;
        } else {
          return "No Result Found in API Response.";
        }
      } else {
        return data;
      }
    } catch (error) {
      if (fetchResultOnly) {
        if (error.response?.data && error.response?.data?.result) {
          return error.response.data.result;
        } else {
          return "No Result Found in API Response.";
        }
      } else {
        return error.response?.data || "No Result Found in API Response.";
      }
    }
  },
  async buffer(apiUrl, params = {}, method = "GET") {
    try {
      let url = new URL(apiUrl);
      let options = {
        method,
        headers: {}
      };
      if (method.toUpperCase() === "GET") {
        Object.entries(params).forEach(([key, value]) => {
          url.searchParams.append(key, value);
        });
      } else {
        options.headers = {
          "Content-Type": "application/json"
        };
        options.body = JSON.stringify(params);
      }
      const response = await fetch(url.toString(), options);
      const contentType = response.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        const data = await response.json();
        return data.result || "No Results Found";
      } else {
        const arrayBuffer = await response.arrayBuffer();
        return arrayBuffer;
      }
    } catch (error) {
      console.error("Error in NexOracle-APIs:\n", error);
      if (error.response && error.response?.data) {
        try {
          const text = await new Response(error.response.data).text();
          const json = JSON.parse(text);
          return json.result || "No Results Found in API Response.";
        } catch {
          return "No Results Found in API Response.";
        }
      } else {
        return "No Results Found in API Response.";
      }
    }
  }
};

// lib/api/islamic.ts
var islamicApi = config.apiUrl + "/islamic";
var islamic = {
  alQuran: (params = {}) => fetchApi.buffer(`${islamicApi}/al-quran`, apiParams(params)),
  quranSurah: (params = {}, resultOnly = false) => fetchApi.json(`${islamicApi}/quran-surah`, apiParams(params), resultOnly),
  asmaUlHusna: (resultOnly = false) => fetchApi.json(`${islamicApi}/asma-ul-husna`, {}, resultOnly),
  prophetNames: (resultOnly = false) => fetchApi.json(`${islamicApi}/prophet-names`, {}, resultOnly),
  surahDetails: (resultOnly = false) => fetchApi.json(`${islamicApi}/surah-details`, {}, resultOnly),
  surahJuz: (resultOnly = false) => fetchApi.json(`${islamicApi}/surah-juz-details`, {}, resultOnly),
  surahVerse: (resultOnly = false) => fetchApi.json(`${islamicApi}/quran-surah-verses`, {}, resultOnly),
  prayerTimes: (params = {}, resultOnly = false) => fetchApi.json(`${islamicApi}/prayer-times`, apiParams(params), resultOnly),
  sahihAlBukhari: (params = {}, resultOnly = false) => fetchApi.json(`${islamicApi}/hadith-sahih-al-bukhari`, apiParams(params), resultOnly),
  hadithQudsi: (params = {}, resultOnly = false) => fetchApi.json(`${islamicApi}/hadith-qudsi`, apiParams(params), resultOnly),
  jamiAtTirmidhi: (params = {}, resultOnly = false) => fetchApi.json(`${islamicApi}/hadith-jami-at-tirmidhi`, apiParams(params), resultOnly),
  sunanAnNasai: (params = {}, resultOnly = false) => fetchApi.json(`${islamicApi}/hadith-sunan-nasai`, apiParams(params), resultOnly),
  sunanIbnMajah: (params = {}, resultOnly = false) => fetchApi.json(`${islamicApi}/hadith-ibn-majah`, apiParams(params), resultOnly),
  sunanAbuDawud: (params = {}, resultOnly = false) => fetchApi.json(`${islamicApi}/hadith-abu-dawud`, apiParams(params), resultOnly)
};

// lib/api/downloader.ts
var downloaderApi = config.apiUrl + "/downloader";
var downloader = {
  apk: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/apk`, apiParams(params), resultOnly),
  aio1: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/aio1`, apiParams(params), resultOnly),
  aio2: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/aio2`, apiParams(params), resultOnly),
  aio3: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/aio3`, apiParams(params), resultOnly),
  biliBili: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/bilibili`, apiParams(params), resultOnly),
  capcut: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/capcut`, apiParams(params), resultOnly),
  douyin: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/douyin`, apiParams(params), resultOnly),
  dailyMotion: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/dailymotion`, apiParams(params), resultOnly),
  facebook: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/facebook`, apiParams(params), resultOnly),
  facebook2: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/facebook2`, apiParams(params), resultOnly),
  goFile: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/gofile`, apiParams(params), resultOnly),
  izLesene: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/izlesene`, apiParams(params), resultOnly),
  instagram: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/instagram`, apiParams(params), resultOnly),
  instagram2: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/instagram2`, apiParams(params), resultOnly),
  instagramStory: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/insta-story`, apiParams(params), resultOnly)
};

// lib/api/image-processing.ts
var imageProcessingApi = config.apiUrl + "/image-processing";
var imageProcessing = {
  ad: (params = {}) => fetchApi.buffer(`${imageProcessingApi}/ad`, apiParams(params))
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  apiParams,
  config,
  downloader,
  fetchApi,
  imageProcessing,
  islamic,
  setConfig
});
