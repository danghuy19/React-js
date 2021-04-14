import * as Types from '../constants/ActionTypes'

const initialState = {
    by: 'name',
    order: 1
}

export default (state = initialState, action) => {
    switch (action.type) {

        case Types.SORT_TASK:
            state = action.value
            return state

        default:
            return state
    }
}
