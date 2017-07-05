/* eslint-disable indent */
// We can replace the {commit} with the context object
import facadeservice from '../../../common/casfacade/facadeservice'

export const getMyId = ({ dispatch, state }) => {
    return 'test me'
}

export default {
    register ({ commit }, userId) {
        facadeservice.get('https://mobileapi.edea.co.il/CrosSale.WebApplication.2.0.3.1/api/TestConnectionService/Test', null, function (response) {
            console.log(getMyId(null, null))
            commit('getTest', response)
        })
        setTimeout(() => {
            commit('register', userId)
        }, 1000)
    },
    getEmployeeDetails ({ commit }, data) {
        facadeservice.get('https://mobileapi.edea.co.il/EdeaRetailAPI.2.0.10.0/api/ProtectedEmployees/GetEmployee?employeeIdNumber=' + data.employeeIdNumber + '&posPassword=' + data.posPassword + '', null,
         function (response) {
            commit('getEmployeeDetails', response)
        },
        function (response) {
            console.log(response)
            commit('getEmployeeDetails', response)
        })
    }
}
