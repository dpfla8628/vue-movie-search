import axios from 'axios'

export default {
    namespaced: true,
    state: () => ({
        title: '',
        loading: false,
        movies: []
    }),
    getters: {},
    mutations: {
        updateState (state, payload) {
            Object
                .keys(payload)
                .forEach(key => {
                    state[key] = payload[key]
            })
        }
    },
    // actions는 비동기 처리가 가능하다
    actions: {
        async searchMovies ({ state, commit }) {
            // state.loading = true
            commit('updateState', {
                loading: true
            })
            let url = `http://www.omdbapi.com/?apikey=e4aaee62&s=${state.title}`
            const search = await axios.get(url)
            // state.loading = false
            commit('updateState', {
                loading: false,
                movies: search.data.Search
            })
        }
    }
}