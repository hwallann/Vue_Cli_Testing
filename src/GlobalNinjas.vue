<template>
  <ul>
  	<li v-for="ninja in ninjas">{{ ninja }}</li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      ninjas: ['G_Yoshi', 'G_Mario', 'G_Ryu']
    }
  },

}
</script>

<style>

</style>
