/* eslint-disable no-unused-vars */
import BranchInfo from './BranchInfo'
export default class RetailChainBranchModel {
  constructor () {
    this.Branch = new BranchInfo()
    this.ChainCode = null
    this.BranchCode = null
    this.IsSalesViewPOSDefine = 0
    this.SalesViewPOSCode = null
    this.BranchRequireProximityIdentification = 0
    this.BranchDetectedByProximityIdentification = 0
  }
}
