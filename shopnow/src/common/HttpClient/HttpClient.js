/* eslint-disable no-unused-vars */
/* eslint-disable indent */

import axios from 'axios'

export const HTTP = axios.create({
  baseURL: 'baseUrl',
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})

export default {
  get (url, config, successCallback, errorCallback) {
    HTTP.get(url).then(successCallback).catch(errorCallback)
  },
  post (url, data, config, successCallback, errorCallback) {
    axios.post(url, data).then(successCallback).catch(errorCallback)
  },
  async getAsync (url, config, successCallback, errorCallback) {
    await HTTP.get(url).then(successCallback).catch(errorCallback)
  },
  async postAsyncCallback (url, data, config, successCallback, errorCallback) {
    await axios.post(url, data).then(successCallback).catch(errorCallback)
  },
  async postAsync (url, controllerName, actionName, data, config) {
    var apiUrl = url + '/' + controllerName + '/' + actionName

    var responseAsync = null
    var successCallback = function (response) {
       responseAsync = response.data
    }
    var errorCallback = function (response) {
       responseAsync = response.data
    }

    await axios.post(apiUrl, data).then(successCallback).catch(errorCallback)

    return responseAsync
  }
}
