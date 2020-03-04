<template>
  <div id="app">
    <PageHeader/>
    <Notation/>
    <Piano/>
  </div>
</template>

<style lang="scss">
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
ul,ol,li{list-style:none}
a{text-decoration: none;}
img{vertical-align:top;border:none}
#app {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border: 1px saddlebrown solid;
}
</style>

<script>
import PageHeader from '@/components/PageHeader.vue'
import Notation from '@/components/Notation.vue'
import Piano from '@/components/Piano.vue'

export default {
  name: 'App',
  components: {
    PageHeader,
    Notation,
    Piano
  },
  data () {
    return {
    }
  }
}
</script>
