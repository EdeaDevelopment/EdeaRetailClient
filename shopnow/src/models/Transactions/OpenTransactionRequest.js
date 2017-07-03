/* eslint-disable no-unused-vars */
import UniquePOSIdentifier from './UniquePOSIdentifier'
import TransactionProcessingSettings from './TransactionProcessingSettings'
export default class OpenTransactionRequest {
  constructor () {
    this.UniquePOSIdentifier = new UniquePOSIdentifier()
    this.TransactionProcessingSettings = new TransactionProcessingSettings()
  }
}
