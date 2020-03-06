<template>
  <div  :class="[{active: isActive || down}, type ? 'white-key' : 'black-key']" @mousedown="play()" @mouseout="mouseEnd" @mouseup="mouseEnd" ></div>
</template>

<script>
export default {
  name: 'key',
  props: {
    type: String,
    down: Boolean
  },
  data () {
    return {
      isActive: false
    }
  },
  mounted () {
  },
  methods: {
    play () {
      this.$emit('play')
      this.isActive = true
    },
    mouseEnd () {
      this.isActive = false
    }
  }
}
</script>

<style scoped>
.white-key{
  width: calc(1192px / 36);
  height: 195px;
  background-color: #dfdfe4;
  border-right: 1px #0b0b0c solid;
  border-left: 1px #2a2b2c  solid;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  position: relative;
}
.white-key.active{
  height: 198px;
  border-right: 1px #0b0b0c solid;
  border-left: 1px #2a2b2c  solid;
}
.white-key.active:after{
  content: '';
  position: absolute;
  border-style: solid;
  border-width: 198px 0 0 9px;
  border-color: transparent transparent transparent #62708499;
  bottom: 0;
}
.black-key{
  position: absolute;
  width: 18px;
  height: 135px;
  left: -10px;
  top:0;
  background-image: linear-gradient(to bottom, #101112 0%, #1b2127 10%, #1b2127 10%);
  border-top: #1a1e25 5px solid;
  border-left: #232223 4px solid;
  border-bottom: #3e3e40 13px solid;
  border-right: 5px #010203 solid;
  box-shadow: #364b62 10px 2px 5px ;
}
.black-key.active{
  border-top: #1a1e25 8px solid;
  border-left: #232223 4px solid;
  border-bottom: #3e3e40 8px solid;
  border-right: 5px #010203 solid;
  box-shadow: #364b62 5px 2px 5px ;
}
</style>
