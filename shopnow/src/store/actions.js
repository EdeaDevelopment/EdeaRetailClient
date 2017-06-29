/* eslint-disable indent */
// We can replace the {commit} with the context object
export default {
    register1 ({ commit }, userId) {
        setTimeout(() => {
            commit('register1', userId)
        }, 1000)
    }
}
