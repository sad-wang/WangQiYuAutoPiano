import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as Tone from 'tone'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  mounted () {
    const synth = new Tone.Synth().toMaster()
    synth.triggerAttackRelease('a5', '9n')
  }
}).$mount('#app')
