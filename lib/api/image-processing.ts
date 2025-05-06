import { apiParams, fetchApi, config } from "../functions";

export const imageProcessing = {
  ad: (params: Record<string, any> = {}) => fetchApi.buffer(`${config.apiUrl}/image-processing/ad`, apiParams(params)),

  artify: (params: Record<string, any> = {}) => fetchApi.buffer(`${config.apiUrl}/image-processing/artify`, apiParams(params)),

  beautiful: (params: Record<string, any> = {}) => fetchApi.buffer(`${config.apiUrl}/image-processing/beautiful`, apiParams(params)),

  blur: (params: Record<string, any> = {}) => fetchApi.buffer(`${config.apiUrl}/image-processing/blur`, apiParams(params)),

  clown: (params: Record<string, any> = {}) => fetchApi.buffer(`${config.apiUrl}/image-processing/clown`, apiParams(params)),

  darkness: (params: Record<string, any> = {}) => fetchApi.buffer(`${config.apiUrl}/image-processing/darkness`, apiParams(params)),

  dehaze: (params: Record<string, any> = {}) => fetchApi.buffer(`${config.apiUrl}/image-processing/dehaze`, apiParams(params)),

  drip: (params: Record<string, any> = {}) => fetchApi.buffer(`${config.apiUrl}/image-processing/drip`, apiParams(params)),

  enhance: (params: Record<string, any> = {}) => fetchApi.buffer(`${config.apiUrl}/image-processing/enhance`, apiParams(params)),

  facePalm: (params: Record<string, any> = {}) => fetchApi.buffer(`${config.apiUrl}/image-processing/face-palm`, apiParams(params)),

  greyScale: (params: Record<string, any> = {}) => fetchApi.buffer(`${config.apiUrl}/image-processing/greyscale`, apiParams(params)),

  gunOverLay: (params: Record<string, any> = {}) => fetchApi.buffer(`${config.apiUrl}/image-processing/gun-overlay`, apiParams(params)),

  image2Gta: (params: Record<string, any> = {}) => fetchApi.buffer(`${config.apiUrl}/image-processing/image2gta`, apiParams(params)),

  image2Anime: (params: Record<string, any> = {}) => fetchApi.buffer(`${config.apiUrl}/image-processing/image2anime`, apiParams(params)),

  iphoneAlert: (params: Record<string, any> = {}) => fetchApi.buffer(`${config.apiUrl}/image-processing/fake-alert`, apiParams(params)),

  invert: (params: Record<string, any> = {}) => fetchApi.buffer(`${config.apiUrl}/image-processing/invert`, apiParams(params)),

  jail: (params: Record<string, any> = {}) => fetchApi.buffer(`${config.apiUrl}/image-processing/jail`, apiParams(params)),

  mnm: (params: Record<string, any> = {}) => fetchApi.buffer(`${config.apiUrl}/image-processing/mnm`, apiParams(params)),

  pet: (params: Record<string, any> = {}) => fetchApi.buffer(`${config.apiUrl}/image-processing/pet`, apiParams(params)),

  pixelate: (params: Record<string, any> = {}) => fetchApi.buffer(`${config.apiUrl}/image-processing/pixelate`, apiParams(params)),

  removeBG: (params: Record<string, any> = {}) => fetchApi.buffer(`${config.apiUrl}/image-processing/remove-bg`, apiParams(params)),

  rip: (params: Record<string, any> = {}) => fetchApi.buffer(`${config.apiUrl}/image-processing/rip`, apiParams(params)),

  rainbow: (params: Record<string, any> = {}) => fetchApi.buffer(`${config.apiUrl}/image-processing/rainbow`, apiParams(params)),

  recolor: (params: Record<string, any> = {}) => fetchApi.buffer(`${config.apiUrl}/image-processing/recolor`, apiParams(params)),

  resize: (params: Record<string, any> = {}) => fetchApi.buffer(`${config.apiUrl}/image-processing/resize`, apiParams(params)),

  trigger: (params: Record<string, any> = {}) => fetchApi.buffer(`${config.apiUrl}/image-processing/trigger`, apiParams(params)),

  upscale: (params: Record<string, any> = {}) => fetchApi.buffer(`${config.apiUrl}/image-processing/upscale`, apiParams(params)),

  wasted: (params: Record<string, any> = {}) => fetchApi.buffer(`${config.apiUrl}/image-processing/wasted`, apiParams(params)),

  wanted: (params: Record<string, any> = {}) => fetchApi.buffer(`${config.apiUrl}/image-processing/wanted`, apiParams(params)),
};
