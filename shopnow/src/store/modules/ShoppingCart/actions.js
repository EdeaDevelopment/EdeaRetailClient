/* eslint-disable indent */
// We can replace the {commit} with the context object
/* eslint-disable no-unused-vars */
import facadeservice from '../../../common/casfacade/facadeservice'
import OpenTransactionRequest from '../../../models/Transactions/OpenTransactionRequest'
import UniquePOSIdentifier from '../../../models/Transactions/UniquePOSIdentifier'
import TransactionProcessingSettings from '../../../models/Transactions/TransactionProcessingSettings'
import UpdateTransactionRequest from '../../../models/Transactions/UpdateTransactionRequest'

export default {
    OpenTransaction ({ commit }) {
        var openTransactionRequest = new OpenTransactionRequest()
        openTransactionRequest.UniquePOSIdentifier = new UniquePOSIdentifier()
        openTransactionRequest.UniquePOSIdentifier.BranchNumber = '002'
        openTransactionRequest.UniquePOSIdentifier.POSNumber = '1'
        openTransactionRequest.UniquePOSIdentifier.UniqueIdentifier = 'MobileWebApi'

        facadeservice.post('https://mobileapi.edea.co.il/EdeaRetailAPI.2.0.10.0/api/transactions/opentransaction', openTransactionRequest, null, function (response) {
            commit('OpenTransaction', response.data)
        },
        function (response) {
            commit('OpenTransaction', response.data)
        })
    },
    UpdateTransaction ({ commit }, ItemCode) {
        var updateTransactionRequest = new UpdateTransactionRequest()
        updateTransactionRequest.UniquePOSIdentifier = new UniquePOSIdentifier()
        updateTransactionRequest.UniquePOSIdentifier.BranchNumber = '002'
        updateTransactionRequest.UniquePOSIdentifier.POSNumber = '1'
        updateTransactionRequest.UniquePOSIdentifier.UniqueIdentifier = 'MobileWebApi'

        facadeservice.post('https://mobileapi.edea.co.il/EdeaRetailAPI.2.0.10.0/api/transactions/updatetransaction', updateTransactionRequest, null, function (response) {
            commit('UpdateTransaction', response.data)
        },
        function (response) {
            commit('UpdateTransaction', response.data)
        })
    }
}
