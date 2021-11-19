<template>
  <header class="py-3 bg-dark d-flex justify-content-between">
      <h1 class="text-danger ps-3">BOOLFLIX</h1>
      <Searchbar @search="passQuery"></Searchbar>
  </header>
</template>

<script>
import Searchbar from './Searchbar.vue'
export default {
    components: { Searchbar },
    name: 'Header',
    data () {
        return {
            query: ""
        }
    },
    
    methods: {
        passQuery(queryString){
            this.query = queryString;
            this.$emit('search', this.query)
        }
    }
}
</script>

<style>

</style>