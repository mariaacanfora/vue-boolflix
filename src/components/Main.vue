<template>
  <main>
    <div class="container py-5">
        <h1 v-if="movies.length > 0">Film</h1>
        <div class="row row-cols-3">
            <Card v-for="movie in movies" :key="movie.id" :film="movie"></Card>           
        </div>

        <h1 v-if="movies.length > 0" class="mt-5">Serie TV</h1>
        <div class="row row-cols-3">
            <Card v-for="serie in series" :key="serie.id" :film="serie"></Card>           
        </div>
    </div>  
  </main>
</template>

<script>
import axios from "axios";
import Card from './Card.vue';

export default {
  components: { Card },
  name: "Main",
  data() {
    return {
      apiKey: "bdb91d3c68495961f770560622014e12",
      apiUrl: "https://api.themoviedb.org/3",

      movies: [],
      series: [],      
    };
  },
  props: {
    query: String,
  },

  methods: {
    /**
     * esegue la chiamata al server
     * get: stringa che rappresenta la chiamata all'API
     * query: stringa che contiene titolo o parte del titolo da ricercare
     * type: stringa che rappresenta il tipo di elemento cercato (film o serie tv) e che coincide con il nome dell'array in cui verranno inseriti i risultati trovati
     */
    serverCall(get, query, type) {
      axios
        .get(this.apiUrl + "/search/" + get, {
          params: {
            query: query,
            api_key: this.apiKey,
          },
        })
        .then((resp) => {
          this[type] = resp.data.results;
        });
    },

    doubleServerCall(getM, getT, query, typeM, typeT) {
      this.serverCall(getM, query, typeM);
      this.serverCall(getT, query, typeT);
    },
  },

  watch: {
    query: function (query) {
      this.doubleServerCall('movie', 'tv', query, 'movies', 'series');
    },
  },
};
</script>

<style>
</style>