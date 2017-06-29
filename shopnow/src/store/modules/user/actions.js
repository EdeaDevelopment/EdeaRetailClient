/* eslint-disable indent */
// We can replace the {commit} with the context object
import facadeservice from '../../../common/casfacade/facadeservice'
export default {
    register ({ commit }, userId) {
        facadeservice.get('https://mobileapi.edea.co.il/CrosSale.WebApplication.2.0.3.1/api/TestConnectionService/Test', null, function (response) {
            console.log(response)
            commit('getTest', response)
        })
        setTimeout(() => {
            commit('register', userId)
        }, 1000)
    }
}
