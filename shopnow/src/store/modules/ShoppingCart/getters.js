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
    },
    Transaction (state) {
        return state.Transaction
    },
    TransactionItems (state) {
        var transactionItems = []
        var transactionItemsAlreadyExists = state.Transaction && state.Transaction.TransactionItems && state.Transaction.TransactionItems.length > 0
        if (transactionItemsAlreadyExists) {
            transactionItems = state.Transaction.TransactionItems
        }
        return transactionItems
    }
}
