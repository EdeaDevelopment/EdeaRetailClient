/* eslint-disable no-unused-vars */
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import Vuex from 'vuex'

export default {
  namespaced: true,
  state: {
    registrations: [],
    testdata: [],
    userDetails: '',
    leftToPay: '',
    users: [
      { id: 1, name: 'Max', registered: false },
      { id: 2, name: 'Dvir', registered: false },
      { id: 3, name: 'Ahron', registered: false },
      { id: 4, name: 'Shlomi', registered: false }
    ]
  },
  actions,
  mutations,
  getters
}
