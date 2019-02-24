import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuep from 'vuep'
import 'vuep/dist/vuep.css'

import Example from './components/Example.vue'

import VueSlider, { VueSliderMark, VueSliderDot } from '../lib'

import { getTheme } from './utils'

switch (getTheme()) {
  case 'antd':
    require('../lib/theme/antd.scss')
    break
  case 'material':
    require('../lib/theme/material.scss')
    break
  default:
    require('../lib/theme/default.scss')
}

Vue.use(Vuep)

Vue.component('Example', Example)

Vue.component('VueSlider', VueSlider)
Vue.component('VueSliderMark', VueSliderMark)
Vue.component('VueSliderDot', VueSliderDot)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')