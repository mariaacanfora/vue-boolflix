<template>
  <div id="app">
    <div class="container text-center">
      <div class="input-group justify-content-center py-5">
        <input type="text" class="w-25" v-model="query" @keyup.enter="serverCall('/search/movie', query, 'movies')" placeholder="Search..."/>
        <button class="btn btn-outline-secondary" type="button" @click="serverCall('/search/movie', query, 'movies')">Cerca!</button>
      </div>

      <ul class="list-unstyled">
        <li v-for="movie in movies" :key="movie.id">
          <h5>{{ movie.title }}</h5>
          <ul class="list-unstyled">
            <li>Titolo orginale: {{ movie.original_title }}</li>
            <li>Lingua: {{ movie.original_language }}</li>
            <li>Voto: {{ movie.vote_average }}</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      apiKey: "bdb91d3c68495961f770560622014e12",
      apiUrl: "https://api.themoviedb.org/3",
      query: "",
      movies: [],
      series: [],
    };
  },

  methods: {
    serverCall(get, query, type) {
      axios
        .get(this.apiUrl + get, {
          params: {
            query: query,
            api_key: this.apiKey,
          },
        })
        .then((resp) => {
          this[type] = resp.data.results;
        });
    },
  },

  /* mounted() {
    this.serverCall("/search/movie", this.query, "movies");
    //this.serverCall("/search/tv", this.query, "series");
  }, */
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
