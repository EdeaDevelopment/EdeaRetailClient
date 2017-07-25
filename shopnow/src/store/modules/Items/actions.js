/* eslint-disable indent */
// We can replace the {commit} with the context object
/* eslint-disable no-unused-vars */
import HttpClient from '../../../common/HttpClient/HttpClient'
import UniquePOSIdentifier from '../../../models/Transactions/UniquePOSIdentifier'
import GetPrerequisiteTransactionDataRequest from '../../../models/Transactions/GetPrerequisiteTransactionDataRequest'
import ItemSearchRequest from '../../../models/Items/ItemSearchRequest'

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

        await HttpClient.postAsync('https://mobileapi.edea.co.il/EdeaRetailAPI.2.0.10.0/api/Items/SearchItems', itemSearchRequest, null, function (response) {
            console.log('tran: ' + response.data)
            commit('SearchItem', response.data)
        },
        function (response) {
            console.log('tran: ' + response.data)
            commit('SearchItem', response.data)
        })
    }
}

