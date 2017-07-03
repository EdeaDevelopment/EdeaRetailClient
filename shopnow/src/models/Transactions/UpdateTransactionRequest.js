/* eslint-disable no-unused-vars */
import UniquePOSIdentifier from './UniquePOSIdentifier'
import TransactionProcessingSettings from './TransactionProcessingSettings'
import Transaction from './Transaction'

export default class UpdateTransactionRequest {
  constructor () {
    this.UniquePOSIdentifier = new UniquePOSIdentifier()
    this.TransactionProcessingSettings = new TransactionProcessingSettings()
    this.Transaction = new Transaction()
    this.temporaryTransactionNumber = null
  }
}
