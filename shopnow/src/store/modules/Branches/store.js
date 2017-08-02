/* eslint-disable no-unused-vars */
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import Vuex from 'vuex'
import RetailChainBranchModel from '../../../models/Branches/RetailChainBranchModel'
import BranchInfo from '../../../models/Branches/BranchInfo'

export default {
  namespaced: true,
  state: {
    PermittedBranches: [{BranchCode: 'aaa', Branch: {BranchDescription: 'סניף ירושלים'}}, {Branch: {BranchDescription: 'סניף תל אביב'}, BranchCode: 'bbb'}],
    SelectedBranch: ''
  },
  actions,
  mutations,
  getters
}
