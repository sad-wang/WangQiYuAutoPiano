<template>
  <div>
    <PageHeader/>
    <Notation/>
    <Piano/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
import PageHeader from '@/components/PageHeader.vue'
import Notation from '@/components/Notation.vue'
import Piano from '@/components/Piano.vue'

export default {
  name: 'Home',
  components: {
    PageHeader,
    Notation,
    Piano
  }
}
</script>
