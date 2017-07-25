/* eslint-disable no-unused-vars */
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import Vuex from 'vuex'

export default {
  namespaced: true,
  state: {
    ItemSearchDetail: [],
    PrerequisiteTransactionData: null
  },
  actions,
  mutations,
  getters
}
