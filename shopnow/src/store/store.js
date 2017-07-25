/* eslint-disable indent */
import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import userModule from './modules/user/store'
import ShoppingCartModule from './modules/ShoppingCart/store'
import ItemsModule from './modules/Items/store'

Vue.use(Vuex)
console.log(getters)
export const store = new Vuex.Store({
    state: {
        loading: false,
        registrations1: [],
        users1: [
            {id: 1, name: 'Max', registered: false},
            {id: 2, name: 'Dvir', registered: false},
            {id: 3, name: 'Ahron', registered: false},
            {id: 4, name: 'Shlomi', registered: false}
        ]
    },
    getters,
    mutations,
    actions,
    modules: {
      userModule: userModule,
      ShoppingCartModule: ShoppingCartModule,
      ItemsModule: ItemsModule
    }
})
