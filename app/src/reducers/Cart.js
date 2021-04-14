import * as Types from '../constants/ActionTypes'

var findProductInCart = (product, cart) => {
    var result = -1
    for (let i = 0; i < cart.length; i++) {
        if (product.id === cart[i].product.id) {
            result = i
            break
        }
    }
    return result
}
var findIndex = (cart, id) => {
    var result = -1
    if (cart.length > 0) {
        cart.forEach((item, index) => {
            if (item.product.id === id) {
                result = index
            }
        })
    }
    return result
}
var data = JSON.parse(localStorage.getItem('Cart'))
const initialState = data ? data : []

export default (state = initialState, action) => {
    switch (action.type) {

        case Types.ADD_TO_CART:
            var index = findProductInCart(action.product, state)
            if (index !== -1) {
                state[index].quantity += 1 
            } else {
                var cartItem = {
                    product: action.product,
                    quantity: action.quantity
                }
                state.push(cartItem)
            }
            localStorage.setItem('Cart', JSON.stringify(state))
            return [...state]

        case Types.DELETE_FROM_CART:
            var index = findIndex(state, action.id)
            state.splice(index, 1)
            localStorage.setItem('Cart', JSON.stringify(state))
            return [...state]

        default:
            return [...state]
    }
}
