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
import TransactionService from '../../../Services/Transactions/TransactionService'

export default {
    async GetPrerequisiteTransactionData({ commit, state, rootState }) {
        var apiUrl = rootState.RetailChainModel.APIUrlAddress
        var getPrerequisiteTransactionDataResponse = await new TransactionService().GetPrerequisiteTransactionData(apiUrl, new GetPrerequisiteTransactionDataRequest())
        commit('GetPrerequisiteTransactionData', getPrerequisiteTransactionDataResponse)
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

        var apiUrl = rootState.RetailChainModel.APIUrlAddress
        var openTransactionResponse = await new TransactionService().OpenTransaction(apiUrl, openTransactionRequest)
        commit('OpenTransaction', openTransactionResponse)
    },
    async TransactionAddItem({ commit, dispatch, state, rootState }, itemCode) {
        var itemsCode = []
        itemsCode.push(itemCode)
        TransactionAddItems(commit, dispatch, state, rootState, itemsCode)
    },
    async TransactionAddItems({ commit, dispatch, state, rootState }, itemsCode) {
        TransactionAddItems(commit, dispatch, state, rootState, itemsCode)
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

        var apiUrl = rootState.RetailChainModel.APIUrlAddress
        var updateTransactionResponse = await new TransactionService().UpdateTransaction(apiUrl, updateTransactionRequest)
       commit('UpdateTransaction', updateTransactionResponse)
    },

    UpdateTransactionShippingEmail({ commit, state, rootState }, shippingEmail) {
        state.EmailForRecipt = shippingEmail
        var transactionItemsAlreadyExists = state.Transaction
        if (transactionItemsAlreadyExists) {
            state.Transaction.ShippingEmail = shippingEmail
        }
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

export const UpdateTransaction = async(state, rootState, transactionItems) => {
    var updateTransactionRequest = new UpdateTransactionRequest()
    updateTransactionRequest.UniquePOSIdentifier = state.PrerequisiteTransactionData.UniquePOSIdentifier
    updateTransactionRequest.TransactionProcessingSettings.RegisterByGeneralPosCustomer = true
    updateTransactionRequest.temporaryTransactionNumber = state.TemporaryTransactionNumber
    updateTransactionRequest.Transaction.TemporaryTransactionNumber = state.TemporaryTransactionNumber
    updateTransactionRequest.Transaction.TransactionItems = transactionItems

    var apiUrl = rootState.RetailChainModel.APIUrlAddress
    var updateTransactionResponse = await new TransactionService().UpdateTransaction(apiUrl, updateTransactionRequest)

    return updateTransactionResponse
}

export const AddPendingItems = (state, itemsCode) => {
    state.TransactionItemsChecksum = window.vue.guid()

    itemsCode.forEach(function(itemCode) {
        state.PendingTransactionItems.push(itemCode)
    }, this)

    return state.TransactionItemsChecksum
}

export const RemovePendingItems = (state, transactionItemsChecksum) => {
    var isLastAction = transactionItemsChecksum === state.TransactionItemsChecksum

    if (isLastAction) {
        state.PendingTransactionItems = []
    }

    return isLastAction
}

export const TransactionAddItems = async(commit, dispatch, state, rootState, itemsCode) => {
        if (!state.Transaction) {
            await dispatch('OpenTransaction')
        }

        if (itemsCode && itemsCode.length > 0 && state.TemporaryTransactionNumber) {
            rootState.loading = true

            var transactionItemsChecksum = AddPendingItems(state, itemsCode)

            var transactionItems = CurrentTransactionItems(state)

            state.PendingTransactionItems.forEach(function(itemCode) {
                transactionItems.push(FillTransactionItem(state, itemCode))
            }, this)

            var updateTransactionResponse = await UpdateTransaction(state, rootState, transactionItems)

            if (RemovePendingItems(state, transactionItemsChecksum)) {
               commit('UpdateTransaction', updateTransactionResponse)
            }

            rootState.loading = false
        }
}
