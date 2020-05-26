import axios from "axios";
import store from './store.js';

const arr = store;
const {wrap_api_url, wrap_api_key, university} = arr;

//  функция получения URL для обращения к WrapApi по отдельным дисциплинам по вузу
const getUrlApiDetails = (Id) => {
    const urlUniversApi = wrap_api_url + university[0].url_api_id_endpoint + '?' + 'id=' + Id + '&' + wrap_api_key;
    return urlUniversApi;
};

const urlUnivers = wrap_api_url + university[0].url_api_id_endpoint + '?' + 'id=' + 175191+ '&' + wrap_api_key;

export const univerAPI = {
    getTTU() {
        return axios.get(urlUnivers)
            .then(response => {
                return response.data;
            })
    }
};