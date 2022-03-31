<template>
  <v-app>
    <v-container>
      <!-- 검색바 -->
      <search-bar></search-bar>
      <!-- 영화 목록 -->
      <movie-list></movie-list>
    </v-container>
  </v-app>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
import MovieList from '@/components/MovieList.vue'
export default {
  components: {
    SearchBar,
    MovieList
  }
};
</script>
