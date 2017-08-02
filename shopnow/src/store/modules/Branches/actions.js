/* eslint-disable indent */
// We can replace the {commit} with the context object
/* eslint-disable no-unused-vars */
import BranchesService from '../../../Services/Branches/BranchesService'
import GetPermittedBranchesRequest from '../../../models/Branches/GetPermittedBranchesRequest'
export default {
    async GetPermittedBranches({ commit, state, rootState }) {
        var managementServerUrl = 'http://192.168.10.73/SalesView.WebApplication/api'
        var getPermittedBranchesResponse = await new BranchesService().GetPermittedBranches(managementServerUrl, new GetPermittedBranchesRequest())
        commit('GetPermittedBranchesData', getPermittedBranchesResponse)
    },
    async DidSelectBranch({ commit, state, rootState }, branch) {
        commit('DidSelectBranch', branch)
    }
}

