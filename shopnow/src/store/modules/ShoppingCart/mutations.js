/* eslint-disable indent */
export default {
    OpenTransaction (state, openTransactionResponse) {
        if (openTransactionResponse != null && openTransactionResponse.ErrorCode === 0) {
            state.TemporaryTransactionNumber = openTransactionResponse.TemporaryTransactionNumber
        } else if (openTransactionResponse != null && openTransactionResponse.EdeaError != null) {
            state.ErrorMessage = openTransactionResponse.EdeaError.ErrorMessage
        } else {
            state.ErrorMessage = 'Unknown Error'
        }
    },
    UpdateTransaction (state, updateTransactionResponse) {
        if (updateTransactionResponse != null && updateTransactionResponse.ErrorCode === 0) {
            state.Transaction = updateTransactionResponse.Transaction
        } else if (updateTransactionResponse != null && updateTransactionResponse.EdeaError != null) {
            state.ErrorMessage = updateTransactionResponse.EdeaError.ErrorMessage
        } else {
            state.ErrorMessage = 'Unknown Error'
        }
    },
        GetPrerequisiteTransactionData (state, prerequisiteTransactionDataResponse) {
        if (prerequisiteTransactionDataResponse != null && prerequisiteTransactionDataResponse.ErrorCode === 0) {
            state.PrerequisiteTransactionData = prerequisiteTransactionDataResponse
        } else if (prerequisiteTransactionDataResponse != null && prerequisiteTransactionDataResponse.EdeaError != null) {
        } else {
        }
    }
}
