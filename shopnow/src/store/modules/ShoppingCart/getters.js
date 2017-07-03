/* eslint-disable indent */
export default {
    TemporaryTransactionNumber (state) {
        return state.TemporaryTransactionNumber
    },
    LeftToPay (state) {
        var leftToPay = 0
        if (state.Transaction) {
            leftToPay = state.Transaction.LeftToPay
        }
        return leftToPay
    },
    PrerequisiteTransactionData (state) {
        return state.PrerequisiteTransactionData
    }
}
