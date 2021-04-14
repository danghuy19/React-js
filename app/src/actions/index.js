import { callAPI } from './../utils/callAPI'
import * as Types from './../constants/ActionTypes'
import * as Mess from './../constants/Messages'

export const actToggleForm = () => {
    return {
        type: Types.TOGGLE_FORM
    }
}

export const actOpenForm = () => {
    return {
        type: Types.OPEN_FORM
    }
}

export const actCloseForm = () => {
    return {
        type: Types.CLOSE_FORM
    }
}

export const actSubmitTask = (task) => {
    return {
        type: Types.SUBMIT_TASK,
        task
    }
}

export const actDeleteTask = (id) => {
    return {
        type: Types.DELETE_TASK,
        id
    }
}

export const actChangeStatus = (id) => {
    return {
        type: Types.CHANGE_STATUS,
        id
    }
}

export const actGetTask = (task) => {
    return {
        type: Types.GET_TASK,
        task
    }
}

export const actSortTask = (value) => {
    return {
        type: Types.SORT_TASK,
        value
    }
}

export const actSearchTask = (keyword) => {
    return {
        type: Types.SEARCH_TASK,
        keyword
    }
}

export const actFilterTask = (value) => {
    return {
        type: Types.FILTER_TASK,
        value
    }
}

export const actClearForm = () => {
    return {
        type: Types.CLEAR_FORM
    }
}

export const actAddToCart = (product, quantity) => {
    return {
        type: Types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actAddToCartMess = () => {
    return {
        type: Mess.ADD_TO_CART
    }
}

export const actDeleteFromCart = (id) => {
    return {
        type: Types.DELETE_FROM_CART,
        id
    }
}

export const actDeleteFromCartMess = () => {
    return {
        type: Mess.DELETE_FORM_CART
    }
}

export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callAPI("GET", "products", null).then(res => {
            dispatch(actFetchProducts(res.data))
        })
    }
}

export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}

export const actAddToListRequest = (product) => {
    return (dispatch) => {
        return callAPI('POST', 'products', {
            name: product.txtName,
            price: parseInt(product.txtPrice, 10),
            inventory: parseInt(product.txtInventory, 10),
            status: product.status
        }).then(res => {
            dispatch(actAddToList(res.data))
        })
    }
}

export const actAddToList = (product) => {
    return {
        type: Types.ADD_TO_LIST,
        product
    }
}

export const actUpdateProductFromListRequest = (product) => {
    return (dispatch) => {
        return callAPI('PUT', `products/${product.id}`, {
            name: product.txtName,
            price: parseInt(product.txtPrice, 10),
            inventory: parseInt(product.txtInventory, 10),
            status: product.status
        }).then(res => {
            dispatch(actUpdateProductFromList(res.data))
        })
    }
}

export const actUpdateProductFromList = (product) => {
    return {
        type: Types.UPDATE_PRODUCT_FORM_LIST,
        product
    }
}

export const actDeleteFromListRequest = (id) => {
    return (dispatch) => {
        return callAPI('DELETE', `products/${id}`, null).then(res => {
            dispatch(actDeleteFromList(id))
        })
    }
}

export const actDeleteFromList = (id) => {
    return {
        type: Types.DELETE_FROM_LIST,
        id
    }
}