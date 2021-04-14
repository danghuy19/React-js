import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { actDeleteFromListRequest } from '../../actions'

class ProductItem extends Component {

    onDelete = (product) => {
        if (confirm(`Xóa ${product.name} ra khỏi danh sách`)) { // eslint-disable-line
            this.props.onDelete(product.id)            
        }
    }

    render() {

        var { product } = this.props

        return (
            <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}$</td>
                <td>{product.inventory}</td>
                <td className={product.status === true ? "badge badge-primary" : "badge badge-danger"}>{product.status === true ? 'Còn hàng' : 'Hết hàng'}</td>
                <td>
                    <Link to={`/productlist/edit/${product.id}`} className="btn btn-primary">Chỉnh sửa</Link>
                    <button className="btn btn-danger" onClick={() => this.onDelete(product)} >Xóa</button>
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
        onDelete: (id) => {
            dispatch(actDeleteFromListRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem)