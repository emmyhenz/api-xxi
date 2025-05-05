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
};

declare const imageProcessing: {
    ad: (params?: Record<string, any>) => Promise<any>;
};

export { apiParams, config, downloader, fetchApi, imageProcessing, islamic, setConfig };
