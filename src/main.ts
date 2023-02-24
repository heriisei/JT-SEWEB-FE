import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import Chakra, { CThemeProvider, CReset } from '@chakra-ui/vue'

import App from './App.vue'
import router from './router'

import './assets/main.css'

Vue.use(PiniaVuePlugin)
Vue.use(Chakra)

new Vue({
  router,
  pinia: createPinia(),
  render: (h) => h(CThemeProvider, [h(CReset), h(App)])
}).$mount('#app')
