/* eslint-disable no-unused-vars */
import UniquePOSIdentifier from '../Transactions/UniquePOSIdentifier'
export default class ItemSearchRequest {
  constructor () {
    this.ItemCode = null
    this.Barcode = null
    this.ItemDescription = null
    this.ModelCode = null
    this.FamilyCode = null
    this.Season = null
    this.Year = null
    this.UniquePOSIdentifier = new UniquePOSIdentifier()
  }
}
