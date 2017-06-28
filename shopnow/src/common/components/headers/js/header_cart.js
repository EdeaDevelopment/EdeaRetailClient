/* eslint-disable no-unused-vars */
import facadeservice from '../../../casfacade/facadeservice'

export default {
  getDemo (callback) {
    facadeservice.get('https://mobileapi.edea.co.il/CrosSale.WebApplication.2.0.3.1/api/TestConnectionService/Test', null, callback)
  }
}
