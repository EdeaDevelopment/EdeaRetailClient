/* eslint-disable indent */
// We can replace the {commit} with the context object
/* eslint-disable no-unused-vars */
import UniquePOSIdentifier from '../../../models/Transactions/UniquePOSIdentifier'
import GetPrerequisiteTransactionDataRequest from '../../../models/Transactions/GetPrerequisiteTransactionDataRequest'
import ItemSearchRequest from '../../../models/Items/ItemSearchRequest'
import TransactionService from '../../../Services/Transactions/TransactionService'
import ItemsService from '../../../Services/Items/ItemsService'

export default {
    async GetPrerequisiteTransactionData({ commit, state, rootState }) {
        var apiUrl = rootState.RetailChainModel.APIUrlAddress
        var getPrerequisiteTransactionDataResponse = await new TransactionService().GetPrerequisiteTransactionData(apiUrl, new GetPrerequisiteTransactionDataRequest())
        commit('GetPrerequisiteTransactionData', getPrerequisiteTransactionDataResponse)
    },
    async SearchItems({ commit, dispatch, state, rootState }, itemCode) {
        if (!state.PrerequisiteTransactionData) {
            await dispatch('GetPrerequisiteTransactionData')
        }
        if (!state.PrerequisiteTransactionData) {
            return
        }

        var itemSearchRequest = new ItemSearchRequest()
        itemSearchRequest.Barcode = itemCode
        itemSearchRequest.UniquePOSIdentifier = state.PrerequisiteTransactionData.UniquePOSIdentifier

        var apiUrl = rootState.RetailChainModel.APIUrlAddress
        var itemSearchResponse = await new ItemsService().SearchItems(apiUrl, itemSearchRequest)
        commit('SearchItem', itemSearchResponse)
    }
}

