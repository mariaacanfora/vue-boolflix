<template>
  <div id="app">
    <Header @search="receiveQueryString"></Header>
    <Main :query="query"></Main>

  </div>
</template>

<script>
import Main from './components/Main.vue';
import Header from './components/Header.vue';

export default {
  components: { Header, Main },
  name: "App",
  data() {
    return {
      query: "",
    };
  },

  methods: {
    receiveQueryString(queryString){
      this.query = queryString;
    },


    /*

    getVote(origVote){
      const vote = origVote / 2;
      const solidStars = Math.ceil(vote); 
      return solidStars
    }, */

  },

  /* mounted(){
    this.serverCall('/search/movie', this.query, 'movies')
  } */

}
</script>

<style lang="scss">
@import "~font-awesome/css/font-awesome.min.css";
@import "~bootstrap/scss/bootstrap";
@import "./styles/app.scss";

.w-15{
  width: 15%;
}

</style>
