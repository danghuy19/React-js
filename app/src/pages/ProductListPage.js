import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { actFetchProductsRequest } from '../actions'
import ProductItem from '../components/productlist/ProductItem'

class ProductListPage extends Component {

    componentDidMount() {
        this.props.onFetchProducts()
    }


    render() {

        var { products } = this.props
        var showProducts = products.map((product, index) => {
            return <ProductItem key={index} index={index} product={product} />
        })

        return (
            <div className='container mt-5'>
                <div className="row">
                    <div className="col-12">
                        <h1>Product List Page (API)</h1>
                    </div>
                    <div className="col-12">
                        <Link to="/productlist/add" className="btn btn-secondary">Thêm mới +</Link>
                    </div>
                    <div className="col-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Sản phẩm</th>
                                    <th>Giá</th>
                                    <th>Số lượng</th>
                                    <th>Trạng thái</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {showProducts}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.ProductsAPI
    }   
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFetchProducts: () => {
            dispatch(actFetchProductsRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage)
