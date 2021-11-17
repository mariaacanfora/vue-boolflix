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
            <li class="d-inline-block"><img alt="language's logo" :src="getLanguageFlag[movie.original_language] ? require('./assets/img/' + getLanguageMap[movie.original_language]) : require('./assets/img/default.png')" class="w-15"></li>
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
      query: "ciao",
      movies: [],
      series: [],
      flags: ["en", "it", "fr", "es", "de"]
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

  computed: {
    /**
     * restituisce un oggetto le cui chiavi sono le lingue dei film apparsi nella ricerca e i valori sono stringhe tipo "language.png"
     */
    getLanguageMap(){
      const languageMap = {}
      this.movies.forEach(movie => {
        const {original_language} = movie;

        if (!languageMap[original_language]) {
          languageMap[original_language] = original_language + ".png"
        }
      });
      
      return languageMap
    },

    /**
     * restituisce un oggetto le chiavi sono le lingue dei film apparsi nella ricerca ed i valori sono booleani, a seconda che queste lingue siano presenti o meno nella lista delle bandiere a disposizione (array flags)
     */
    getLanguageFlag(){
      //let thereIsFlag = false;
      const objMap = {...(this.getLanguageMap)}
      //console.log(objMap);

      for (const key in objMap) {
        if (this.flags.includes(key)) {
          objMap[key] = true
        } else {
          objMap[key] = false
        }
      }
      return objMap
    }

  },

  /* mounted(){
    this.serverCall('/search/movie', this.query, 'movies')
  } */

}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
.w-15{
  width: 15%;
}

</style>
