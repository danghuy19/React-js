import * as Types from '../constants/ActionTypes'

var findIndex = (products, id) => {
    var result = -1
    if (products.length > 0) {
        products.forEach((product, index) => {
            if (product.id === id) {
                result = index
            }
        })
    }
    return result
}
const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {

        case Types.FETCH_PRODUCTS:
            return action.products

        case Types.ADD_TO_LIST:
            state.push(action.product)
            return [...state]

        case Types.UPDATE_PRODUCT_FORM_LIST:
            var index = findIndex(state, action.product.id)
            state[index] = action.product
            return [...state]

        case Types.DELETE_FROM_LIST:
            var index = findIndex(state, action.id)
            state.splice(index, 1)
            return [...state]    

        default:
            return [...state]
    }
}
