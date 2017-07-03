/* eslint-disable indent */
// We can replace the {commit} with the context object
/* eslint-disable no-unused-vars */
import facadeservice from '../../../common/casfacade/facadeservice'
import OpenTransactionRequest from '../../../models/Transactions/OpenTransactionRequest'
import UniquePOSIdentifier from '../../../models/Transactions/UniquePOSIdentifier'
import TransactionProcessingSettings from '../../../models/Transactions/TransactionProcessingSettings'
import UpdateTransactionRequest from '../../../models/Transactions/UpdateTransactionRequest'
import Transaction from '../../../models/Transactions/Transaction'
import TransactionItem from '../../../models/Transactions/TransactionItem'
import GetPrerequisiteTransactionDataRequest from '../../../models/Transactions/GetPrerequisiteTransactionDataRequest'

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
    OpenTransaction ({ commit, state, rootState }) {
        var openTransactionRequest = new OpenTransactionRequest()

        openTransactionRequest.UniquePOSIdentifier = state.PrerequisiteTransactionData.UniquePOSIdentifier

        facadeservice.post('https://mobileapi.edea.co.il/EdeaRetailAPI.2.0.10.0/api/transactions/opentransaction', openTransactionRequest, null, function (response) {
            commit('OpenTransaction', response.data)
        },
        function (response) {
            commit('OpenTransaction', response.data)
        })
    },
    UpdateTransaction ({ commit, state, rootState }, itemCode) {
        if (itemCode && state.TemporaryTransactionNumber) {
            var updateTransactionRequest = new UpdateTransactionRequest()

            updateTransactionRequest.UniquePOSIdentifier = state.PrerequisiteTransactionData.UniquePOSIdentifier

            updateTransactionRequest.TransactionProcessingSettings.RegisterByGeneralPosCustomer = true

            updateTransactionRequest.temporaryTransactionNumber = state.TemporaryTransactionNumber

            updateTransactionRequest.Transaction.TemporaryTransactionNumber = state.TemporaryTransactionNumber

            var transactionItem = new TransactionItem()
            transactionItem.ItemCode = itemCode
            transactionItem.VATPercent = state.PrerequisiteTransactionData.VATPercent
            transactionItem.PricePerItem = 10

            var transactionItemsAlreadyExists = state.Transaction && state.Transaction.TransactionItems && state.Transaction.TransactionItems.length > 0
            if (transactionItemsAlreadyExists) {
                updateTransactionRequest.Transaction.TransactionItems = state.Transaction.TransactionItems
            } else {
                updateTransactionRequest.Transaction.TransactionItems = []
            }
            updateTransactionRequest.Transaction.TransactionItems.push(transactionItem)

            facadeservice.post('https://mobileapi.edea.co.il/EdeaRetailAPI.2.0.10.0/api/transactions/updatetransaction', updateTransactionRequest, null, function (response) {
                commit('UpdateTransaction', response.data)
            },
            function (response) {
                commit('UpdateTransaction', response.data)
            })
        }
    }
}
