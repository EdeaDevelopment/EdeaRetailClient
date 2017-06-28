/* eslint-disable indent */
// We can replace the {commit} with the context object
export default {
    register ({ commit }, userId) {
        setTimeout(() => {
            commit('register', userId)
        }, 1000)
    }
}
