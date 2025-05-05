import { apiParams, fetchApi, config } from "../functions";

let downloaderApi = config.apiUrl + "/downloader";

export const downloader = {
  apk: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/apk`, apiParams(params), resultOnly),

  aio1: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/aio1`, apiParams(params), resultOnly),

  aio2: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/aio2`, apiParams(params), resultOnly),

  aio3: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/aio3`, apiParams(params), resultOnly),

  biliBili: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/bilibili`, apiParams(params), resultOnly),

  capcut: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/capcut`, apiParams(params), resultOnly),

  douyin: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/douyin`, apiParams(params), resultOnly),

  dailyMotion: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/dailymotion`, apiParams(params), resultOnly),

  facebook: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/facebook`, apiParams(params), resultOnly),

  facebook2: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/facebook2`, apiParams(params), resultOnly),

  goFile: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/gofile`, apiParams(params), resultOnly),

  izLesene: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/izlesene`, apiParams(params), resultOnly),

  instagram: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/instagram`, apiParams(params), resultOnly),

  instagram2: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/instagram2`, apiParams(params), resultOnly),

  instagramStory: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/insta-story`, apiParams(params), resultOnly),

  googleDrive: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/gdrive`, apiParams(params), resultOnly),

  Likee: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/likee`, apiParams(params), resultOnly),

  linkedin: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/linkedin`, apiParams(params), resultOnly),

  mediaFire: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/media-fire`, apiParams(params), resultOnly),

  okRu: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/ok.ru`, apiParams(params), resultOnly),

  pixelDrain: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/pixeldrain`, apiParams(params), resultOnly),

  rumble: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/rumble`, apiParams(params), resultOnly),

  reddit: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/reddit`, apiParams(params), resultOnly),

  ringtone: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/ringtone`, apiParams(params), resultOnly),

  soundCloud: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/sound-cloud`, apiParams(params), resultOnly),

  soundEffects: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/sound-effect`, apiParams(params), resultOnly),

  nineGag: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/9gag`, apiParams(params), resultOnly),

  spotify: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/spotify`, apiParams(params), resultOnly),

  snackVideo: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/snack-video`, apiParams(params), resultOnly),

  smule: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/smule`, apiParams(params), resultOnly),

  shareChat: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/sharechat`, apiParams(params), resultOnly),

  snapChat: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/snapchat`, apiParams(params), resultOnly),

  terabox: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/terabox`, apiParams(params), resultOnly),

  tiktokNoWM: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/tiktok-nowm`, apiParams(params), resultOnly),

  tiktokMusic: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/tiktok-music`, apiParams(params), resultOnly),

  tiktokWM: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/tiktok-wm`, apiParams(params), resultOnly),

  tiktokNoWM2: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/tiktok-nowm2`, apiParams(params), resultOnly),

  tiktokImages: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/tiktok-photo`, apiParams(params), resultOnly),

  threads: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/threads`, apiParams(params), resultOnly),

  twitter: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/twitter`, apiParams(params), resultOnly),

  videy: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/videy`, apiParams(params), resultOnly),

  vimeo: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/vimeo`, apiParams(params), resultOnly),

  waMod: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/wamod`, apiParams(params), resultOnly),

  youtubeVideo: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/yt-video`, apiParams(params), resultOnly),

  youtubeVideo2: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/yt-video2`, apiParams(params), resultOnly),

  youtubeSearch: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/yt-search`, apiParams(params), resultOnly),

  youtubeAudio: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/yt-audio`, apiParams(params), resultOnly),

  youtubeAudio2: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/yt-audio2`, apiParams(params), resultOnly),

  youtubePlay: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/yt-play`, apiParams(params), resultOnly),

  youtubePlay2: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/insta-story`, apiParams(params), resultOnly),

  whatsappStory: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${downloaderApi}/whatsapp-story`, apiParams(params), resultOnly),
};
