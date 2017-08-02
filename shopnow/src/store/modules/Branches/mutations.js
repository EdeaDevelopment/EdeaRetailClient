/* eslint-disable indent */
export default {
    GetPermittedBranchesData(state, getPermittedBranchesResponse) {
        if (getPermittedBranchesResponse != null) {
            state.PermittedBranches = getPermittedBranchesResponse.PermittedBranches
        } else {
        }
    },
    DidSelectBranch(state, branch) {
        state.SelectedBranch = branch
    }

}
