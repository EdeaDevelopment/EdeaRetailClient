/* eslint-disable no-unused-vars */
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
  }
}
