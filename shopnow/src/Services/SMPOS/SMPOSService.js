/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable no-undef */
export default class SMPOSService {
    constructor() {
        this.OpenCatalog = function (headerHeight) {
            this.UrlAction('OpenCatalog', headerHeight)
            if (typeof SMPOS !== 'undefined') {
                SMPOS.OpenCatalog(headerHeight)
            }
        }
        this.SetBranch = function (branchName) {
            this.UrlAction('SetBranchName', branchName)
             if (typeof SMPOS !== 'undefined') {
                SMPOS.SetBranchName(branchName)
            }
        }
        this.UrlAction = function (action, value) {
            var parameters = {}
            parameters[action] = value
            this.SetUrl(parameters)
        }
        this.SetUrl = function (parameters) {
            var url = window.location.href
            url = this.UrlAddParameters(url, parameters)
            window.location.href = url
        }
        this.UrlAddParameters = function(url, parameters) {
            var urlparts = url.split('?')
            if (urlparts.length >= 2) {
                url = urlparts[0]
            }

            url += '?'
            Object.keys(parameters).forEach(function(key, index) {
                url += key + '=' + parameters[key] + '&'
            }, parameters)

            return url
        }
        this.VirtualJsAction = function (actionName, actionValue) {
            VirtualJsFile.actionName(actionValue)
        }
    }
}
