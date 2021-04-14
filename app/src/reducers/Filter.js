import { actOpenForm } from '../actions'
import * as Types from '../constants/ActionTypes'

const initialState = {
    name: '',
    status: -1
}

export default (state = initialState, action) => {
    switch (action.type) {

        case Types.FILTER_TASK:
            action.value.status = parseInt(action.value.status, 10)
            state = action.value
            return state

        default:
            return state
    }
}
