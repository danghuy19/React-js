import axios from "axios"

export const callAPI = (method = 'GET', endpoint, data) => {
    return axios({
        method: method,
        url: `http://localhost:3000/${endpoint}`,
        data: data
    }).catch(err => {
        console.log(err)
    })
}