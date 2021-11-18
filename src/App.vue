<template>
  <div id="app">

    <div class="container text-center">
      <div class="input-group justify-content-center py-5">
        <!-- <input type="text" class="w-25" v-model="query" @keyup.enter="serverCall('movie', query, 'movies')" placeholder="Search..."/> 
        <button class="btn btn-outline-secondary" type="button" @click="serverCall('movie', query, 'movies')">Cerca!</button>  -->

        <input type="text" class="w-25" v-model="query" @keyup.enter="doubleServerCall('movie', 'tv', query, 'movies', 'series')" placeholder="Search..."/> 
        <button class="btn btn-outline-secondary" type="button" @click="doubleServerCall('movie', 'tv', query, 'movies', 'series')">Cerca!</button> 
      </div>

      <ul class="list-unstyled">

        <li v-for="movie in movies" :key="movie.id">
          <h5>{{ movie.title }}</h5>

          <ul class="list-unstyled">
            <li>Titolo orginale: {{ movie.original_title }}</li>
            <li class="d-inline-block"><img :src="getLangFlag(movie.original_language)" alt="language's flag" class="w-15"></li>            
            <li>Voto: {{ movie.vote_average }}</li>
            <li><img :src="getPosterImg('/w342', movie.poster_path)" alt="movie's poster"></li>
            <i class="fa fa-star" aria-hidden="true" v-for="(star, i) in getVote(movie.vote_average)" :key="i"></i>
            <i class="fa fa-star-o" aria-hidden="true" v-for="(star, i) in (5 - getVote(movie.vote_average))" :key="'A' + i"></i>
             
          </ul>
        </li>

      </ul>
      
      <h1 style="color: red;">SERIE TV</h1>
      <ul class="list-unstyled">

        <li v-for="serie in series" :key="serie.id">
          <h5>{{ serie.name }}</h5>

          <ul class="list-unstyled">
            <li>Titolo orginale: {{ serie.original_name }}</li>
            <li class="d-inline-block"><img :src="getLangFlag(serie.original_language)" alt="language's flag" class="w-15"></li>
            <li>Voto: {{ serie.vote_average }}</li> 
            <li><img :src="getPosterImg('/w342', serie.poster_path)" alt="serie's poster"></li>
            <i class="fa fa-star" aria-hidden="true" v-for="(star, i) in getVote(serie.vote_average)" :key="'B' + i"></i>
            <i class="fa fa-star-o" aria-hidden="true" v-for="(star, i) in (5 - getVote(serie.vote_average))" :key="'C' + i"></i>
             
          </ul>
        </li>

      </ul>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      apiKey: "bdb91d3c68495961f770560622014e12",
      apiUrl: "https://api.themoviedb.org/3",
      imgUrl: "https://image.tmdb.org/t/p/",
      query: "",
      movies: [],
      series: [],
      flags: {
        en: "en.png",
        it: "it.png",
        fr: "fr.png",
        es: "es.png"
      },
      totalStars: []
    };
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
        .get(this.apiUrl + '/search/' + get, {
          params: {
            query: query,
            api_key: this.apiKey,
          },
        })
        .then((resp) => {
          this[type] = resp.data.results;
        });
    },

    doubleServerCall(getM, getT, query, typeM, typeT){
      this.serverCall(getM, query, typeM)
      this.serverCall(getT, query, typeT)
    },

    getLangFlag(searchedLang){
      if (!this.flags[searchedLang]){
        return require('./assets/img/default.png')
      }
      return require('./assets/img/' + this.flags[searchedLang])
    },

    getPosterImg(dimension, path){
      if(!path){
        return "https://www.google.it/url?sa=i&url=http%3A%2F%2Fwww.theprintworks.com%2Ffilm%2Ftotal-dhamaal%2F%3Fdoing_wp_cron%3D1613302612.3904678821563720703125&psig=AOvVaw0BvrSTDMMnkcavTKMhZ3D_&ust=1637326474534000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCww8z6ofQCFQAAAAAdAAAAABAD"
      }
      return this.imgUrl + dimension + path
    },

    getVote(origVote){
      const vote = origVote / 2;
      const solidStars = Math.ceil(vote); 
      return solidStars
    },

  },

  computed: {
    /**
     * restituisce un oggetto le cui chiavi sono le lingue dei film apparsi nella ricerca e i valori sono stringhe tipo "en.png" o "it.pgn" ecc
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
  },

  /* mounted(){
    this.serverCall('/search/movie', this.query, 'movies')
  } */

}
</script>

<style lang="scss">
@import "~font-awesome/css/font-awesome.min.css";
@import "~bootstrap/scss/bootstrap";
.w-15{
  width: 15%;
}

</style>
