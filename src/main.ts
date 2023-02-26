import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { createPinia, PiniaVuePlugin } from 'pinia'
import Chakra, { CThemeProvider, CReset } from '@chakra-ui/vue'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import messages from './locales'

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'id',
  messages
})

Vue.use(PiniaVuePlugin)
Vue.use(Chakra)

new Vue({
  router,
  i18n,
  pinia: createPinia(),
  render: (h) => h(CThemeProvider, [h(CReset), h(App)])
}).$mount('#app')
