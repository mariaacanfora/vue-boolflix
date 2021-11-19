<template>
  <div class="input-group justify-content-end pe-3 align-items-center">
        <input type="text" v-model="query" @keyup.enter="startSearch" placeholder="Search..." aria-label="Recipient's username" aria-describedby="button-addon2">  
        <button @click="startSearch" class="btn btn-outline-danger text-danger" type="button" id="button-addon2">Cerca!</button>
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
    },
    methods: {
        startSearch(){
            this.$emit('search', this.query);
            this.query=""
        }
    }
}
    
</script>

<style>

</style>