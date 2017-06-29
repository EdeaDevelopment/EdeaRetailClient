/* eslint-disable indent */
export default {
    register (state, userId) {
        const date = new Date()
        const user = state.users.find(user => {
            return user.id === userId
        })
        user.registered = true
        const registration = {
            userId: userId,
            name: user.name,
            date: date.getMonth() + '/' + date.getDay()
        }
        console.log(registration)
        state.registrations.push(registration)
    },
    getTest (state, data) {
        state.testdata.push(data)
    }
}
