<template>
<div>
<li v-for="(name , cond) in names" v-bind:key="cond" v-on:click="name.cond = !name.cond" >
    <div v-if="name.cond">  {{name.name}} </div>
</li>
</div>
</template>

<script>
export default {
    data () {
        return {
            names : [
                {cond:true , name : "is"},
                {cond:true , name : "isa"},
                {cond:true , name : "isan"},
            ] ,
        }
    }
}
</script>

<style scoped>
div {
    background-color: brown;
    display: block;
    width: 100px;
    margin: 20px;
    height: 40px;
}
</style>

