const baseUrl = "https://portfolio-git-backend-erdodo.vercel.app/";
export default {
    getData: async () => {
        const response = await fetch(baseUrl);
        return await response.json();
    },
    getProject: async (name) => {
        const response = await fetch(baseUrl+"project/"+name);
        return await response.json();
    }
}