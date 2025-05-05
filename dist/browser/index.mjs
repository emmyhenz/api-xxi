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
  instagramStory: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/insta-story`, apiParams(params), resultOnly),
  googleDrive: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/gdrive`, apiParams(params), resultOnly),
  Likee: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/likee`, apiParams(params), resultOnly),
  linkedin: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/linkedin`, apiParams(params), resultOnly),
  mediaFire: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/media-fire`, apiParams(params), resultOnly),
  okRu: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/ok.ru`, apiParams(params), resultOnly),
  pixelDrain: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/pixeldrain`, apiParams(params), resultOnly),
  rumble: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/rumble`, apiParams(params), resultOnly),
  reddit: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/reddit`, apiParams(params), resultOnly),
  ringtone: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/ringtone`, apiParams(params), resultOnly),
  soundCloud: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/sound-cloud`, apiParams(params), resultOnly),
  soundEffects: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/sound-effect`, apiParams(params), resultOnly),
  nineGag: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/9gag`, apiParams(params), resultOnly),
  spotify: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/spotify`, apiParams(params), resultOnly),
  snackVideo: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/snack-video`, apiParams(params), resultOnly),
  smule: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/smule`, apiParams(params), resultOnly),
  shareChat: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/sharechat`, apiParams(params), resultOnly),
  snapChat: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/snapchat`, apiParams(params), resultOnly),
  terabox: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/terabox`, apiParams(params), resultOnly),
  tiktokNoWM: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/tiktok-nowm`, apiParams(params), resultOnly),
  tiktokMusic: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/tiktok-music`, apiParams(params), resultOnly),
  tiktokWM: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/tiktok-wm`, apiParams(params), resultOnly),
  tiktokNoWM2: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/tiktok-nowm2`, apiParams(params), resultOnly),
  tiktokImages: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/tiktok-photo`, apiParams(params), resultOnly),
  threads: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/threads`, apiParams(params), resultOnly),
  twitter: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/twitter`, apiParams(params), resultOnly),
  videy: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/videy`, apiParams(params), resultOnly),
  vimeo: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/vimeo`, apiParams(params), resultOnly),
  waMod: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/wamod`, apiParams(params), resultOnly),
  youtubeVideo: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/yt-video`, apiParams(params), resultOnly),
  youtubeVideo2: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/yt-video2`, apiParams(params), resultOnly),
  youtubeSearch: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/yt-search`, apiParams(params), resultOnly),
  youtubeAudio: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/yt-audio`, apiParams(params), resultOnly),
  youtubeAudio2: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/yt-audio2`, apiParams(params), resultOnly),
  youtubePlay: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/yt-play`, apiParams(params), resultOnly),
  youtubePlay2: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/insta-story`, apiParams(params), resultOnly),
  whatsappStory: (params = {}, resultOnly = false) => fetchApi.json(`${downloaderApi}/whatsapp-story`, apiParams(params), resultOnly)
};
export {
  apiParams,
  config,
  downloader,
  fetchApi,
  islamic,
  setConfig
};
