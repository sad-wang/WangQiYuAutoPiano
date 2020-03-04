import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as Tone from 'tone'

Vue.config.productionTip = false
var sampler = new Tone.Sampler({ D3: '/assets/piano/A0.mp3' }, function () {
  console.log(123123123)
  sampler.triggerAttack('D3').toMaster()
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
