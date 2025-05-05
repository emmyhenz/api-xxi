import { apiParams, fetchApi, config } from "../functions";

let imageProcessingApi = config.apiUrl + "/image-processing"

export const imageProcessing = {
      ad: (params: Record<string, any> = {}) =>
        fetchApi.buffer(`${imageProcessingApi}/ad`, apiParams(params)),
}