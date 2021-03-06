/* eslint-disable indent */
export default {
  unregisteredUsers (state) {
      return state.users.filter(user => {
         return !user.registered
        })
    },
    registrations (state) {
        return state.registrations
    },
    totalRegistrations (state) {
        return state.registrations.length
    },
    apidata (state) {
        return state.testdata
    },
    userDetails (state) {
        return state.userDetails
    }
}
