/* eslint-disable indent */
// We can replace the {commit} with the context object
import facadeservice from '../common/casfacade/facadeservice'
import GetPrerequisiteTransactionDataRequest from '../models/Transactions/GetPrerequisiteTransactionDataRequest'
export default {
    GetPrerequisiteTransactionData ({ commit, state, rootState }) {
        var getPrerequisiteTransactionDataRequest = new GetPrerequisiteTransactionDataRequest()

        facadeservice.post('https://mobileapi.edea.co.il/EdeaRetailAPI.2.0.10.0/api/transactions/GetPrerequisiteTransactionData', getPrerequisiteTransactionDataRequest, null, function (response) {
            commit('GetPrerequisiteTransactionData', response.data)
        },
        function (response) {
            commit('GetPrerequisiteTransactionData', response.data)
        })
    },
    register1 ({ commit }, userId) {
        setTimeout(() => {
            commit('register1', userId)
        }, 1000)
    }
}
