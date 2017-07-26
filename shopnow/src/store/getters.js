/* eslint-disable indent */
export default {
  unregisteredUsers1 (state) {
      return state.users.filter(user => {
         return !user.registered
        })
    },
    registrations1 (state) {
        return state.registrations1
    },
    totalRegistrations1 (state) {
        return state.registrations1.length
    },
    loading (state) {
        return state.loading
    },
    ApiUrlAddress (state) {
        return state.RetailChainModel.ApiUrlAddress
    }
}
