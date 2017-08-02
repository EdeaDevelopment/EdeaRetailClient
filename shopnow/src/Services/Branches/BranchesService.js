/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import HttpClient from '../../common/HttpClient/HttpClient'
export default class BranchesService {
    constructor() {
        this.GetPermittedBranches = async function (managementServerUrl, permittedBranchesRequest) {
            return await HttpClient.postAsync(managementServerUrl, 'Branches', 'GetPermittedBranches', permittedBranchesRequest, null)
        }
    }
}
