const store =                                //  Первоначальное хранилище
    {
        wrap_api_url: "https://wrapapi.com/use/univers/",
        wrap_api_key: "wrapAPIKey=ZGCHzznGbqSAaQJe75IBwDlod6Ve2EEQ",
        university: [
            {
                id: "1", name: "TTU", url: "https://www.ttu.ee/", url_api_endpoint: "ttu/english_faculties/0.0.2",
                url_api_id_endpoint: "ttu/english_faculties_details/0.0.1"
            }
        ]
    };


export default store;
window.store = store; //можна смотреть  store в log