/* eslint-disable indent */
export default {
    SearchItem(state, searchItemResponse) {
        if (searchItemResponse != null && searchItemResponse.ErrorCode === 0) {
            state.ItemSearchDetail = searchItemResponse.ItemSearchDetail
        } else if (searchItemResponse != null && searchItemResponse.EdeaError != null) {
            state.ErrorMessage = searchItemResponse.EdeaError.ErrorMessage
        } else {
            state.ErrorMessage = 'Unknown Error'
        }
    },
    GetPrerequisiteTransactionData(state, prerequisiteTransactionDataResponse) {
        if (prerequisiteTransactionDataResponse != null && prerequisiteTransactionDataResponse.ErrorCode === 0) {
            state.PrerequisiteTransactionData = prerequisiteTransactionDataResponse
        } else if (prerequisiteTransactionDataResponse != null && prerequisiteTransactionDataResponse.EdeaError != null) {
        } else {
        }
    }
}
