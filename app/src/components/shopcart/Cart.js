import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartItem from './CartItem'
import * as Mess from './../../constants/Messages'

class Cart extends Component {

    showCartItem = (items) => {
        var result = Mess.EMPTY_CART
        if (items.length > 0) {
            result = items.map((item,index) => {
                return <CartItem key={index} index={index} item={item} />
            })
        }
        return result
    }

    render() {

        var { cartItems } = this.props

        return (
            <div className="table-responsive">
                <table className="table product-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Sản Phẩm</th>
                            <th>Giá</th>
                            <th>Số Lượng</th>
                            <th>Tổng Cộng</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showCartItem(cartItems)}
                        <tr>
                            <td colSpan="3"></td>
                            <td>
                                <h4>
                                    <strong>Tổng Tiền</strong>
                                </h4>
                            </td>
                            <td>
                                <h4>
                                    <strong>15$</strong>
                                </h4>
                            </td>
                            <td colSpan="3">
                                <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                                            <i className="fa fa-angle-right right"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.Cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)