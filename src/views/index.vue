<template>
  <div id="app">
    <Notation/>
    <Piano/>
  </div>
</template>

<script>
import Notation from '@/components/Notation.vue'
import Piano from '@/components/Piano.vue'
export default {
  name: 'index',
  components: {
    Notation,
    Piano
  }
}
</script>

<style scoped>

</style>
