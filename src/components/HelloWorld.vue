<template>
  <div>
<khi />
  </div>
</template>

<script>
import si from "./si.vue"
export default {
  name: 'HelloWorld',
    components: {
    "khi" : si,
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
