import { apiParams, fetchApi, config } from "../functions";

export const downloader = {
  apk: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/apk`, apiParams(params), resultOnly),

  aio1: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/aio1`, apiParams(params), resultOnly),

  aio2: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/aio2`, apiParams(params), resultOnly),

  aio3: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/aio3`, apiParams(params), resultOnly),

  biliBili: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/bilibili`, apiParams(params), resultOnly),

  capcut: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/capcut`, apiParams(params), resultOnly),

  douyin: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/douyin`, apiParams(params), resultOnly),

  dailyMotion: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/dailymotion`, apiParams(params), resultOnly),

  facebook: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/facebook`, apiParams(params), resultOnly),

  facebook2: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/facebook2`, apiParams(params), resultOnly),

  goFile: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/gofile`, apiParams(params), resultOnly),

  izLesene: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/izlesene`, apiParams(params), resultOnly),

  instagram: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/instagram`, apiParams(params), resultOnly),

  instagram2: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/instagram2`, apiParams(params), resultOnly),

  instagramStory: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/insta-story`, apiParams(params), resultOnly),

  googleDrive: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/gdrive`, apiParams(params), resultOnly),

  Likee: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/likee`, apiParams(params), resultOnly),

  linkedin: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/linkedin`, apiParams(params), resultOnly),

  mediaFire: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/media-fire`, apiParams(params), resultOnly),

  okRu: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/ok.ru`, apiParams(params), resultOnly),

  pixelDrain: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/pixeldrain`, apiParams(params), resultOnly),

  rumble: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/rumble`, apiParams(params), resultOnly),

  reddit: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/reddit`, apiParams(params), resultOnly),

  ringtone: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/ringtone`, apiParams(params), resultOnly),

  soundCloud: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/sound-cloud`, apiParams(params), resultOnly),

  soundEffects: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/sound-effect`, apiParams(params), resultOnly),

  nineGag: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/9gag`, apiParams(params), resultOnly),

  spotify: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/spotify`, apiParams(params), resultOnly),

  snackVideo: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/snack-video`, apiParams(params), resultOnly),

  smule: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/smule`, apiParams(params), resultOnly),

  shareChat: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/sharechat`, apiParams(params), resultOnly),

  snapChat: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/snapchat`, apiParams(params), resultOnly),

  terabox: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/terabox`, apiParams(params), resultOnly),

  tiktokNoWM: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/tiktok-nowm`, apiParams(params), resultOnly),

  tiktokMusic: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/tiktok-music`, apiParams(params), resultOnly),

  tiktokWM: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/tiktok-wm`, apiParams(params), resultOnly),

  tiktokNoWM2: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/tiktok-nowm2`, apiParams(params), resultOnly),

  tiktokImages: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/tiktok-photo`, apiParams(params), resultOnly),

  threads: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/threads`, apiParams(params), resultOnly),

  twitter: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/twitter`, apiParams(params), resultOnly),

  videy: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/videy`, apiParams(params), resultOnly),

  vimeo: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/vimeo`, apiParams(params), resultOnly),

  waMod: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/wamod`, apiParams(params), resultOnly),

  youtubeVideo: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/yt-video`, apiParams(params), resultOnly),

  youtubeVideo2: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/yt-video2`, apiParams(params), resultOnly),

  youtubeSearch: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/yt-search`, apiParams(params), resultOnly),

  youtubeAudio: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/yt-audio`, apiParams(params), resultOnly),

  youtubeAudio2: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/yt-audio2`, apiParams(params), resultOnly),

  youtubePlay: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/yt-play`, apiParams(params), resultOnly),

  youtubePlay2: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/insta-story`, apiParams(params), resultOnly),

  whatsappStory: (params: Record<string, any> = {}, resultOnly: boolean = false) => fetchApi.json(`${config.apiUrl}/downloader/whatsapp-story`, apiParams(params), resultOnly),
};
