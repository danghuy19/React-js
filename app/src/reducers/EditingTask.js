import * as Types from '../constants/ActionTypes'

const initialState = null

export default (state = initialState, action) => {
    switch (action.type) {

        case Types.GET_TASK:
            state = action.task
            return state

        case Types.CLEAR_FORM:
            state = null
            return state    

        default:
            return state
    }
}
