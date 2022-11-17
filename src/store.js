import { reactive } from "vue";

export const store = reactive({
    baseURL: 'https://api.themoviedb.org/3',
    endPoint: '/search/movie',
    params: {
        api_key: '24f3a4eaf12cd16ff49fb04081d7d6e3',
        query: '',
        language: 'it-IT'
    },
    movie: []
})
