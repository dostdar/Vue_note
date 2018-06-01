<template>
<div>
<li v-for="(name,key) in names" v-bind:key="key">{{name}} </li>
</div>
</template>

<script>
export default {
    data () {
        return {
            names : ["so" ,"di" , "ri"] ,
        }
    }
}
</script>

<style scoped>
li {
    display: inline;
}
</style>

