import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actAddToCart, actDeleteFromCart, actDeleteFromCartMess } from '../../actions'

class CartItem extends Component {

    showTotal = (price, quantity) => {
        var result = 0
        if (quantity > 0) {
            result = price * quantity
        }
        return result
    }

    onDeleteFromCart = (product) => {
        if (confirm(`Xóa ${product.name} ra khỏi giỏ hàng`)) { // eslint-disable-line
            this.props.onDeleteFromCart(product.id)
            this.props.onNotification()
        }
    }

    render() {

        var { product,quantity } = this.props.item

        return (
            <tr>
                <th scope="row">
                    <img src={product.image} alt="" className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{product.name}</strong>
                    </h5>
                </td>
                <td>{product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                            <a>—</a>
                        </label>
                        <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{this.showTotal(product.price, quantity)}$</td>
                <td>
                    <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top" title="" data-original-title="Remove item" onClick={() => this.onDeleteFromCart(product)} >
                        X
                    </button>
                </td>
            </tr>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteFromCart: (id) => {
            dispatch(actDeleteFromCart(id))
        },
        onNotification: () => {
            dispatch(actDeleteFromCartMess())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)
