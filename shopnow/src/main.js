// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable no-unused-vars */
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import Translations from './common/localization/js/i18n.js'
import { store } from './store/store'
import 'es6-promise/auto'

Vue.config.productionTip = false
Vue.use(VueI18n)
// setup locale info for root Vue instance
const i18n = new VueI18n({
  locale: 'en',
  messages: Translations.messages
})

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  store,
  i18n: i18n,
  template: '<App/>',
  components: { App }
})

