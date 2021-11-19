<template>
  <div class="input-group justify-content-end pe-3">
        <input type="text" class="w-25" v-model="query" @keyup.enter="$emit('search', query)" placeholder="Search..."/> 
        <!-- <button class="btn btn-outline-secondary btn-light" type="button" @click="doubleServerCall('movie', 'tv', query, 'movies', 'series')">Cerca!</button>  -->
    </div>
</template>

<script>
export default {
    name: 'Searchbar',
    data() {
        return {
            query: "",
        }
    }
}
    
</script>

<style>

</style>