/* eslint-disable indent */
import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)
console.log(getters)
export const store = new Vuex.Store({
    state: {
        registrations: [],
        users: [
            {id: 1, name: 'Max', registered: false},
            {id: 2, name: 'Dvir', registered: false},
            {id: 3, name: 'Ahron', registered: false},
            {id: 4, name: 'Shlomi', registered: false}
        ]
    },
    getters: getters,
    mutations,
    actions
})
