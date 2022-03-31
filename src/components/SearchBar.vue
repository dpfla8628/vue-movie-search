<template>
    <div>
        <v-text-field
        v-model="title" 
        outlined
        @keypress.enter="searchMovies">
            <template v-slot:prepend-inner>
                <v-icon>search</v-icon>
            </template>
            <template v-slot:append>
                <v-progress-circular
                v-if="loading"
                size="24"
                indeterminate
                color="primary"
                ></v-progress-circular>
            </template>
        </v-text-field>
    </div>
</template>
<script>

import { mapActions } from 'vuex'

export default {
    name: 'SearchBar',
    computed: {
        title: {
        get () {
            return this.$store.state.movie.title
        },
        set (title) {
            this.$store.commit('movie/updateState', {
            title
            })
        }
        },
        // title () {
        //     // 동적 바인딩 되기때문에 바로 값을 가져와서 수정할 수가 없음
        //     // return this.$store.state.movie.title
        // },
        loading () {
            return this.$store.state.movie.loading
        }
    },
    methods: {
        ...mapActions('movie', ['searchMovies'])
        // ==  this.$store.dispatch('movie/searchMovies')
        
        // async searchMovies () {
        //     this.loading = true

        //     let url = `http://www.omdbapi.com/?apikey=e4aaee62&s=${this.title}`
        //     // await axios.get(url)
        //     // .then((result) => {
        //     //     console.log(result.data.Search)
        //     // });
        //     // 위와 같은 코드이나 then을 사용하지 않는 방법
        //     const search = await axios.get(url)
        //     console.log(search.data.Search)

        //     // 개발자가 확인하는 방법 : f12 network -> slow 3G
        //     this.loading = false
        // }
    }
}
</script>
