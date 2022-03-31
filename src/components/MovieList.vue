<template>
    <div>
        <ul>
            <li
            v-for="(movie, index) in movies"
            :key="index">
                {{movie}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    computed: {
        movies () {
            return this.$store.state.movie.movies
        }
    }
}
</script>