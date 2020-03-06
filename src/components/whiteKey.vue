<template>
  <div class="white-key" :class="{active: isActive}" @mousedown="play()" @mouseout="mouseEnd" @mouseup="mouseEnd" ></div>
</template>

<script>
export default {
  name: 'whiteKey',
  props: {
    x: Boolean
  },
  data () {
    return {
    }
  },
  computed: {
    isActive: {
      get: function () {
        return this.x || this.on
      },
      set: function () {
        return false
      }
    }
  },
  mounted () {
  },
  methods: {
    play () {
      this.$emit('play')
    },
    mouseEnd () {
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
.active{
  height: 198px;
  border-right: 1px #0b0b0c solid;
  border-left: 1px #2a2b2c  solid;
}
.active:after{
  content: '';
  position: absolute;
  border-style: solid;
  border-width: 198px 0 0 9px;
  border-color: transparent transparent transparent #62708499;
  bottom: 0;
}
</style>
