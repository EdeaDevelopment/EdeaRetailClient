/* eslint-disable indent */
// We can replace the {commit} with the context object
/* eslint-disable no-unused-vars */
import BranchesService from '../../../Services/Branches/BranchesService'
import GetPermittedBranchesRequest from '../../../models/Branches/GetPermittedBranchesRequest'
import SMPOSService from '../../../Services/SMPOS/SMPOSService'
export default {
    async GetPermittedBranches({ commit, state, rootState }) {
        var managementServerUrl = 'http://192.168.10.73/SalesView.WebApplication/api'
        var getPermittedBranchesResponse = await new BranchesService().GetPermittedBranches(managementServerUrl, new GetPermittedBranchesRequest())
        commit('GetPermittedBranchesData', getPermittedBranchesResponse)
    },
    DidSelectBranch({ commit, state, rootState }, branch) {
        new SMPOSService().SetBranch(branch.Branch.BranchDescription)
        commit('DidSelectBranch', branch)
    },
    SetPermittedBranches({ commit, state, rootState }, branches) {
        commit('SetPermittedBranches', branches)
    }

}

