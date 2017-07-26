/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import HttpClient from '../../common/HttpClient/HttpClient'
export default class TransactionService {
    constructor() {
        this.OpenTransaction = async function (apiUrl, openTransactionRequest) {
            return await HttpClient.postAsync(apiUrl, 'transactions', 'opentransaction', openTransactionRequest, null)
        }
        this.GetPrerequisiteTransactionData = async function (apiUrl, getPrerequisiteTransactionDataRequest) {
            return await HttpClient.postAsync(apiUrl, 'transactions', 'GetPrerequisiteTransactionData', getPrerequisiteTransactionDataRequest, null)
        }
        this.UpdateTransaction = async function (apiUrl, updateTransactionRequest) {
            return await HttpClient.postAsync(apiUrl, 'transactions', 'UpdateTransaction', updateTransactionRequest, null)
        }
    }
}
