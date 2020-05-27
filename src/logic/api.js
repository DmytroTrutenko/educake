import _ from 'lodash';


const wrap_api_url = "https://wrapapi.com/use/univers/";
const wrap_api_key = "wrapAPIKey=ZGCHzznGbqSAaQJe75IBwDlod6Ve2EEQ";
export let arrayUniverDiscId = [];   // массив временного хранения всех загруженных специальностей с WrapApi
export let FullArray = [];


const university = [
    {
        id: "0", name: "TTU", url: "https://www.ttu.ee/", url_api_endpoint: "ttu/english_faculties/0.0.3",
        url_api_id_endpoint: "ttu/english_faculties_detail/0.0.2"
    }
];


async function requestApiForEachUnivers() {
    _.each(university, (item) => {
        fetch(getUrlApiUnivers(item))      // получение по вузу названия специальностей.
            .then(response => response.json())
            .then(json => json.data.data).then(disc => {
            FullArray = disc;
        })
            .then(() => _.each(FullArray, (disc_Id) => fetch(getUrlApiDetails(item, disc_Id.id)).then(response => response.json())
                .then(json => (json.success) ? json.data : console.log('Error'))
                .then(disc => {
                    arrayUniverDiscId.push({...disc, Id: disc_Id.Id, university: item.name, title: disc_Id.title});
                    if (arrayUniverDiscId.length == FullArray.length) return console.log('+');
                })
            ))
    });
}


const getUrlApiUnivers = (index) => {             //  функция получения URL для обращения к WrapApi по вузу
    const urlUniversApi = wrap_api_url + index.url_api_endpoint + '?' + wrap_api_key;
    return urlUniversApi;
};

const getUrlApiDetails = (index, Id_Disc) => {  //  функция получения URL для обращения к WrapApi по отдельным дисциплинам по вузу
    const urlUniversApi = wrap_api_url + index.url_api_id_endpoint + '?' + 'url=' + Id_Disc + '&' + wrap_api_key;
    return urlUniversApi;
};

export default requestApiForEachUnivers;