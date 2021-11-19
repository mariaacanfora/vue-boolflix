<template>
        <div class="col p-0 card-container text-center">
            <img :src="getPosterImg" alt="film's poster"  class="poster-img"/>
            <div class="d-flex flex-column align-items-center overlay p-5">
                <h1>{{film.title}}</h1> <!-- se è una serie serve film.name -->
                <h3 v-if="film.title !== film.original_title">{{film.original_title}}</h3>
                <img :src="getLangFlag" alt="language's flag" class="w-15">
                <span><i class="fa fa-star" aria-hidden="true" v-for="(star, i) in getVote" :key="i"></i>
                <i class="fa fa-star-o" aria-hidden="true" v-for="(star, i) in (5 - getVote)" :key="'A' + i"></i></span>
                <!-- <p class="text-center">{{ film.vote_average }}</p> -->
                <p class="text-center">{{film.overview}}</p>
            </div> 
        </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    film: Object,
  },

  data() {
    return {
      imgUrl: "https://image.tmdb.org/t/p/",
      flags: {
        en: "en.png",
        it: "it.png",
        fr: "fr.png",
        es: "es.png",
      },
    };
  },

  computed: {
    getPosterImg() {
      const path = this.film.poster_path;

      if (path === null) {
        return require("../assets/img/default_poster.png");
      }
      return this.imgUrl + 'w342' + path;
    },

    getVote(){
      const origVote = this.film.vote_average
      const vote = origVote / 2;
      const solidStars = Math.ceil(vote); 
      return solidStars
    },

    getLangFlag(){
      const searchedLang = this.film.original_language;
      if (!this.flags[searchedLang]){
        return require('../assets/img/default.png')
      }
      return require('../assets/img/' + this.flags[searchedLang])
    },
  }
};
</script>

<style>
</style>