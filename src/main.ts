import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia, PiniaVuePlugin } from 'pinia'

import VueI18n from 'vue-i18n'
import messages from './locales'

import Chakra, { CThemeProvider, CReset } from '@chakra-ui/vue'

import './assets/main.css'
import 'uno.css'

import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/id';

// VueI18n
Vue.use(VueI18n)
const i18n = new VueI18n({
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
})

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
  i18n,
  pinia: createPinia(),
  render: (h) => h(CThemeProvider, [h(CReset), h(App)])
}).$mount('#app')
