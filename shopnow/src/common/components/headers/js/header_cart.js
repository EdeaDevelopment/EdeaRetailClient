/* eslint-disable no-unused-vars */
import HttpClient from '../../../HttpClient/HttpClient'

export default {
  getDemo (callback) {
    HttpClient.get('https://mobileapi.edea.co.il/CrosSale.WebApplication.2.0.3.1/api/TestConnectionService/Test', null, callback)
  }
}
