/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import HttpClient from '../../common/HttpClient/HttpClient'
export default class ItemsService {
    constructor() {
        this.SearchItems = async function (apiUrl, itemSearchRequest) {
            return await HttpClient.postAsync(apiUrl, 'Items', 'SearchItems', itemSearchRequest, null)
        }
    }
}
