<template>
        <div class="col p-0 card-container text-center">
            <img :src="getPosterImg" alt="film's poster" :class="film.poster_path ? 'poster-img': 'poster-img border'"/>
            <div class="d-flex flex-column align-items-center overlay p-5">
                <h1>{{filmTitle}}</h1> 
                <h3 v-if="filmOriginalTitle">{{filmOriginalTitle}}</h3>
                <img :src="getLangFlag" alt="language's flag" class="w-15">
                <span><i v-for="i in 5" :key="i" :class="i <= getVote ? 'fa fa-star' : 'fa fa-star-o'"></i></span>
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
      const solidStars = Math.round(vote); 
      return solidStars 
    }, 

    getLangFlag(){
      const searchedLang = this.film.original_language;
      if (!this.flags[searchedLang]){
        return require('../assets/img/default.png')
      }
      return require('../assets/img/' + this.flags[searchedLang])
    },

    filmTitle(){
      return this.film.title ? this.film.title : this.film.name
    },

    filmOriginalTitle(){
      const orginal = this.film.original_title ? this.film.original_title : this.film.original_name;

      return orginal === this.filmTitle ? "" : orginal
    }

  }
};
</script>

<style>
</style>