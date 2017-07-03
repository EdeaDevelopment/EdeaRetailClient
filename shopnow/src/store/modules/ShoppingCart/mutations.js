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
    }
}
