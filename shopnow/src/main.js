import 'es6-promise/auto'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable no-unused-vars */
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import Translations from './common/localization/js/i18n.js'
import {
  store
} from './store/store'
// only import the icons you use to reduce bundle size
import 'vue-awesome/icons/shopping-cart'
import 'vue-awesome/icons/envelope'
import 'vue-awesome/icons/credit-card'
import 'vue-awesome/icons/gift'
import 'vue-awesome/icons/bluetooth'
import Icon from 'vue-awesome/components/Icon'
import VueHead from 'vue-head'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import VueFloatLabel from 'vue-float-label'
import VueEventBus from 'vue-event-bus'
import VeeValidate, {
  Validator
} from 'vee-validate'
import he from 'vee-validate/dist/locale/he'

Vue.config.productionTip = false
Vue.use(VueHead)
Vue.use(VueI18n)
Vue.use(Buefy)
Vue.use(VueFloatLabel)
Vue.use(VueEventBus)

//  Add locale helper.
Validator.addLocale(he)

Vue.use(VeeValidate, {
  locale: 'he'
})
// globally (in your main .js file)
Vue.component('icon', Icon)

Vue.config.devtools = true

Vue.mixin({
  methods: {
    log(msg) {
      console.log(msg)
    },
    isRtl() {
      return true
    }
  }
})

// setup locale info for root Vue instance
const i18n = new VueI18n({
  locale: 'he',
  fallbackLocale: 'en',
  messages: Translations.messages,
  numberFormats: Translations.numberFormats
})

/* eslint-disable no-new */
/* eslint-disable no-undef */
const app = new Vue({
  el: '#app',
  router,
  store,
  i18n: i18n,
  template: '<App/>',
  components: {
    App
  },
  methods: {
    SearchItem: async function (itemCode) {
      await store.dispatch('ItemsModule/SearchItems', itemCode)
      var Items = store.getters['ItemsModule/ItemSearchDetail']
      var itemsCount = Items.length
      if (itemsCount > 0 && itemsCount < 2) {
        var item = Items[0]
        console.log(JSON.stringify(item))
        // SMPOS.SetItemDetails(JSON.stringify(item))
      }
      return true
    },
    TransactionAddItem: function (itemCode) {
      store.dispatch('ShoppingCartModule/TransactionAddItem', itemCode)
      return true
    },
    TransactionAddItems: function (items) {
      var itemsCode = JSON.parse(items)
      store.dispatch('ShoppingCartModule/TransactionAddItems', itemsCode)
      return true
    },
    SetBranches: function (branchesJson) {
      var branches = JSON.parse(branchesJson)
      store.dispatch('BranchesModule/SetPermittedBranches', branches)
      return true
    }
  }
})

window.vue = app
