import axios from 'axios'

const API_KEY = 'e4aaee62'

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
        },
        pushIntoMovies (state, movies) {
            state.movies.push(...movies)// 전개 연산자를 통해 item 단위로 넣어준다
        }
    },
    // actions는 비동기 처리가 가능하다
    actions: {
        fetchMovies ({state, commit}, pageNum) {
            // actions은 객체 return이 필요하다
            // eslint-disable-next-line no-async-promise-executor
            return new Promise(async resolve => {
                const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${state.title}&page=${pageNum}`
                const res = await axios.get(url)
                commit('pushIntoMovies', res.data.Search)
                resolve(res.data) //반환
            })
        },
        async searchMovies ({ commit, dispatch }) {
            // state.loading = true
            commit('updateState', {
                loading: true,
                movies: [] // push하기 위해서 데이터를 초기화
            })

            const { totalResults } = await dispatch('fetchMovies', 1) // totalResults는 resolve의 값을 가져온다

            const pageLength = Math.ceil(totalResults / 10)

            if (pageLength > 1) {
                for(let i = 2; i <= pageLength; i++) {
                    if (i > 4) break // 최대 40개만 불러오기
                    await dispatch('fetchMovies', i)
                }
            }

            // state.loading = false
            commit('updateState', {
                loading: false,
            })
        }
    }
}