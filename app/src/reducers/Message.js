import * as Mess from '../constants/Messages'

const initialState = 'Welcome to my shop!'

export default (state = initialState, action) => {
    switch (action.type) {

        case Mess.ADD_TO_CART:
            return Mess.ADD_TO_CART
        
        case Mess.DELETE_FORM_CART:
            return Mess.DELETE_FORM_CART

        default:
            return state
    }
}
