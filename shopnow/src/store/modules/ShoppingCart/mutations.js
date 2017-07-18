/* eslint-disable indent */
export default {
    OpenTransaction(state, openTransactionResponse) {
        if (openTransactionResponse != null && openTransactionResponse.ErrorCode === 0) {
            state.TemporaryTransactionNumber = openTransactionResponse.TemporaryTransactionNumber
        } else if (openTransactionResponse != null && openTransactionResponse.EdeaError != null) {
            state.ErrorMessage = openTransactionResponse.EdeaError.ErrorMessage
        } else {
            state.ErrorMessage = 'Unknown Error'
        }
    },
    UpdateTransaction(state, updateTransactionResponse) {
        if (updateTransactionResponse != null && updateTransactionResponse.ErrorCode === 0) {
            console.log(updateTransactionResponse)
            updateTransactionResponse.Transaction.TransactionItems.forEach(function (item) {
                item.url = 'https://voltagead.com/tapping-ugc-offerpop/'
                item.image = {
                    large: 'http://www.tshirthost.com/products/3/95179.png',
                    small: 'http://www.tshirthost.com/products/3/95179.png'
                }
            }, this)

            state.Transaction = updateTransactionResponse.Transaction
        } else if (updateTransactionResponse != null && updateTransactionResponse.EdeaError != null) {
            state.ErrorMessage = updateTransactionResponse.EdeaError.ErrorMessage
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
