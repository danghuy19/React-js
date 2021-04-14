import * as Types from '../constants/ActionTypes'

const initialState = ''

export default (state = initialState, action) => {
    switch (action.type) {

        case Types.SEARCH_TASK:
            state = action.keyword
            return state

        default:
            return state
    }
}
