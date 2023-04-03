import axios from "axios";
const baseUrl = process.env.BACKEND_URL;
export default {
    getData: async () => {
        const lang = window.location.search==='?lang=tr'? 'tr' : 'en'
        return await axios.get(baseUrl +'/profile/'+lang).then((response) => {
            return response.data
        })
    },
    getProject: async (name) => {
        const lang = window.location.search==='?lang=tr'? 'tr' : 'en'
        return await axios.get(baseUrl +'/project/' +lang+'/'+name).then((response) => {
            return response.data
        })
    }
}