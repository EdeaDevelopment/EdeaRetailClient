import 'es6-promise/auto'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable no-unused-vars */
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import Translations from './common/localization/js/i18n.js'
import { store } from './store/store'
// only import the icons you use to reduce bundle size
import 'vue-awesome/icons/shopping-cart'
import 'vue-awesome/icons/trash-o'
import Icon from 'vue-awesome/components/Icon'
import VueHead from 'vue-head'

Vue.config.productionTip = false
Vue.use(VueHead)
Vue.use(VueI18n)

// globally (in your main .js file)
Vue.component('icon', Icon)

Vue.mixin({
  methods: {
    log(msg) {
      console.log(msg)
    }
  }
})

// setup locale info for root Vue instance
const i18n = new VueI18n({
  locale: 'he',
  messages: Translations.messages,
  numberFormats: Translations.numberFormats
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

