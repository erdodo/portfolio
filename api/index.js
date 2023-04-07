import axios from "axios";
const baseUrl = process.env.BACKEND_URL;
export default {
    getData: async () => {

        return await axios.get(baseUrl + window.location.search).then((response) => {
            return response.data
        })
    },
    getProject: async (name) => {

        return await axios.get(baseUrl +'/project/'+name+window.location.search).then((response) => {
            return response.data
        })
    }
}
