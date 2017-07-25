/* eslint-disable indent */
// We can replace the {commit} with the context object
/* eslint-disable no-unused-vars */
import HttpClient from '../../../common/HttpClient/HttpClient'
import OpenTransactionRequest from '../../../models/Transactions/OpenTransactionRequest'
import UniquePOSIdentifier from '../../../models/Transactions/UniquePOSIdentifier'
import TransactionProcessingSettings from '../../../models/Transactions/TransactionProcessingSettings'
import UpdateTransactionRequest from '../../../models/Transactions/UpdateTransactionRequest'
import Transaction from '../../../models/Transactions/Transaction'
import TransactionItem from '../../../models/Transactions/TransactionItem'
import GetPrerequisiteTransactionDataRequest from '../../../models/Transactions/GetPrerequisiteTransactionDataRequest'

export default {
    async GetPrerequisiteTransactionData({ commit, state, rootState }) {
        var getPrerequisiteTransactionDataRequest = new GetPrerequisiteTransactionDataRequest()

        await HttpClient.postAsync('https://mobileapi.edea.co.il/EdeaRetailAPI.2.0.10.0/api/transactions/GetPrerequisiteTransactionData', getPrerequisiteTransactionDataRequest, null, function (response) {
            commit('GetPrerequisiteTransactionData', response.data)
        },
        function (response) {
            commit('GetPrerequisiteTransactionData', response.data)
        })
    },
    async OpenTransaction({ commit, dispatch, state, rootState }) {
        if (!state.PrerequisiteTransactionData) {
            await dispatch('GetPrerequisiteTransactionData')
        }
        if (!state.PrerequisiteTransactionData) {
            return
        }

        var openTransactionRequest = new OpenTransactionRequest()

        openTransactionRequest.UniquePOSIdentifier = state.PrerequisiteTransactionData.UniquePOSIdentifier

        await HttpClient.postAsync('https://mobileapi.edea.co.il/EdeaRetailAPI.2.0.10.0/api/transactions/opentransaction', openTransactionRequest, null, function (response) {
            console.log('tran: ' + response.data)
            commit('OpenTransaction', response.data)
        },
        function (response) {
            console.log('tran: ' + response.data)
            commit('OpenTransaction', response.data)
        })
    },
    async TransactionAddItem({ commit, dispatch, state, rootState }, itemCode) {
        rootState.loading = true
        if (!state.Transaction) {
            await dispatch('OpenTransaction')
        }

        if (itemCode && state.TemporaryTransactionNumber) {
            var transactionItems = CurrentTransactionItems(state)
            transactionItems.push(FillTransactionItem(state, itemCode))

            await dispatch('UpdateTransaction', transactionItems)
        }
        rootState.loading = false
    },
    async TransactionAddItems({ commit, dispatch, state, rootState }, items) {
        if (!state.Transaction) {
            await dispatch('OpenTransaction')
        }

        if (items && items.length > 0 && state.TemporaryTransactionNumber) {
            var transactionItems = CurrentTransactionItems(state)

            var newTransactionItems = []
            items.array.forEach(function(itemCode) {
                newTransactionItems.push(FillTransactionItem(state, itemCode))
            }, this)

            transactionItems.push(newTransactionItems)

            dispatch('UpdateTransaction', transactionItems)
        }
    },
    async TransactionRemoveItem({ commit, dispatch, state, rootState }, itemIndex) {
        if (itemIndex > -1 && state.TemporaryTransactionNumber) {
            rootState.loading = true
            var transactionItems = CurrentTransactionItems(state)
            transactionItems.splice(itemIndex, 1)

           await dispatch('UpdateTransaction', transactionItems)
           rootState.loading = false
        }
    },
    async UpdateTransaction({ commit, state, rootState }, transactionItems) {
        var updateTransactionRequest = new UpdateTransactionRequest()
        updateTransactionRequest.UniquePOSIdentifier = state.PrerequisiteTransactionData.UniquePOSIdentifier
        updateTransactionRequest.TransactionProcessingSettings.RegisterByGeneralPosCustomer = true
        updateTransactionRequest.temporaryTransactionNumber = state.TemporaryTransactionNumber
        updateTransactionRequest.Transaction.TemporaryTransactionNumber = state.TemporaryTransactionNumber
        updateTransactionRequest.Transaction.TransactionItems = transactionItems

        await HttpClient.postAsync('https://mobileapi.edea.co.il/EdeaRetailAPI.2.0.10.0/api/transactions/updatetransaction', updateTransactionRequest, null, function (response) {
            commit('UpdateTransaction', response.data)
        },
        function (response) {
            commit('UpdateTransaction', response.data)
        })
    }
}

export const FillTransactionItem = (state, itemCode) => {
    var transactionItem = new TransactionItem()
    transactionItem.ItemCode = itemCode
    transactionItem.VATPercent = state.PrerequisiteTransactionData.VATPercent
    transactionItem.PricePerItem = 10

    return transactionItem
}

export const CurrentTransactionItems = (state) => {
    var transactionItems = []
    var transactionItemsAlreadyExists = state.Transaction && state.Transaction.TransactionItems && state.Transaction.TransactionItems.length > 0
    if (transactionItemsAlreadyExists) {
        transactionItems = state.Transaction.TransactionItems.slice()
    }

    return transactionItems
}
