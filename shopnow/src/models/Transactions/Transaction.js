/* eslint-disable no-unused-vars */
import UniquePOSIdentifier from './UniquePOSIdentifier'
import TransactionProcessingSettings from './TransactionProcessingSettings'
import POSCustomerDetails from './POSCustomerDetails'
export default class Transaction {
  constructor () {
    this.TemporaryTransactionNumber = null
    this.FinalTransactionNumber = null
    this.POSCustomerNumber = null
    this.POSCustomerDetails = null
    this.TransactionItems = []
    this.CreditCardPayments = []
    this.ExternalOrderNumber = null
    this.TotalUsedPoints = 0
    this.TotalUsedPointsPriceValue = 0
    this.TotalRequestedUsePoints = 0
    this.LeftToPay = 0
  }
}
