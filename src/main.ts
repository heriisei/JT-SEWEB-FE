import Vue from 'vue'
import { createApp } from 'vue-demi'
import App from './App.vue'
import router from './router'
import { createPinia, PiniaVuePlugin } from 'pinia'

import { createI18n } from 'vue-i18n-bridge'
import VueI18n from 'vue-i18n'
import messages from './locales'

import Chakra, { CThemeProvider, CReset } from '@chakra-ui/vue'

import './assets/main.css'
import 'uno.css'

import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/id';

// VueI18n
Vue.use(VueI18n, { bridge: true })
const i18n = createI18n({
  legacy: false,
  locale: 'id',
  messages,
  numberFormats: {
    id: {
      currency: {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0,
      },
    },
    en: {
      currency: {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0,
      },
    },
  },
}, VueI18n)
// For VueI18n Bridge
const app = createApp({
  setup() {
    // Documentation: https://vue-i18n.intlify.dev/guide/migration/vue2.html#composition-api
  }
})
app.use(i18n)

// Dayjs
dayjs.extend(localizedFormat);
dayjs.locale('id');


Vue.use(PiniaVuePlugin)
Vue.use(Chakra, {
  extendTheme: {
    colors: {},
    baseStyles: {
      CSelect: {
        borderColor: "var(--color-border)",
        _focus: {
          boxShadow: '0 0 0 1px var(--brand-base)',
          borderColor: "var(--brand-base)",
        },
      },
      CInput: {
        borderColor: "var(--color-border)",
        _focus: {
          boxShadow: '0 0 0 1px var(--brand-base)',
          borderColor: "var(--brand-base)",
        },
      },
      CButton: {
        bg: "var(--brand-base)",
        px: "12px",
        py: "6px",
        color: "#fff",
        _hover: {
          bg: "var(--brand-darker)",
        }
      },
    }
  }
})

new Vue({
  router,
  pinia: createPinia(),
  render: (h) => h(CThemeProvider, [h(CReset), h(App)])
}).$mount('#app')
