interface Config {
    apiUrl: string;
    apiKey: string | null;
}
interface Params {
    [key: string]: any;
    apikey?: string;
}
declare let config: Config;
declare function setConfig({ apiUrl, apiKey }: {
    apiUrl?: string;
    apiKey?: string;
}): void;
declare function apiParams(params: Params): Params;
declare const fetchApi: {
    json(apiUrl: string, params?: Params, fetchResultOnly?: boolean, method?: "GET" | "POST" | "PUT"): Promise<any>;
    buffer(apiUrl: string, params?: Params, method?: "GET" | "POST" | "PUT"): Promise<any>;
};

declare const islamic: {
    alQuran: (params?: Record<string, any>) => Promise<any>;
    quranSurah: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    asmaUlHusna: (resultOnly?: boolean) => Promise<any>;
    prophetNames: (resultOnly?: boolean) => Promise<any>;
    surahDetails: (resultOnly?: boolean) => Promise<any>;
    surahJuz: (resultOnly?: boolean) => Promise<any>;
    surahVerse: (resultOnly?: boolean) => Promise<any>;
    prayerTimes: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    sahihAlBukhari: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    hadithQudsi: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    jamiAtTirmidhi: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    sunanAnNasai: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    sunanIbnMajah: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    sunanAbuDawud: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
};

declare const downloader: {
    apk: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    aio1: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    aio2: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    aio3: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    biliBili: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    capcut: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    douyin: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    dailyMotion: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    facebook: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    facebook2: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    goFile: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    izLesene: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    instagram: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    instagram2: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    instagramStory: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    googleDrive: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    Likee: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    linkedin: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    mediaFire: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    okRu: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    pixelDrain: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    rumble: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    reddit: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    ringtone: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    soundCloud: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    soundEffects: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    nineGag: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    spotify: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    snackVideo: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    smule: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    shareChat: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    snapChat: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    terabox: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    tiktokNoWM: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    tiktokMusic: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    tiktokWM: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    tiktokNoWM2: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    tiktokImages: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    threads: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    twitter: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    videy: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    vimeo: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    waMod: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    youtubeVideo: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    youtubeVideo2: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    youtubeSearch: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    youtubeAudio: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    youtubeAudio2: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    youtubePlay: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    youtubePlay2: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
    whatsappStory: (params?: Record<string, any>, resultOnly?: boolean) => Promise<any>;
};

declare const imageProcessing: {
    ad: (params?: Record<string, any>) => Promise<any>;
};

export { apiParams, config, downloader, fetchApi, imageProcessing, islamic, setConfig };
