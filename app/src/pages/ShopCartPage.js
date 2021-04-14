import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cart from '../components/shopcart/Cart'
import Footer from '../components/shopcart/Footer'
import ProductItem from '../components/shopcart/ProductItem'

class ShopCartPage extends Component {

    showProducts = (products) => {
        var result = null
        if (products.length > 0) {
            result = products.map((product,index) => {
                return <ProductItem key={index} index={index} product={product} />
            })
        }
        return result
    }

    render() {
        
        var { products,message } = this.props

        return (
            <div>
                <div className="container mt-5">
                    <section className="section">
                        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                        <div className="row">
                            {this.showProducts(products)}
                        </div>
                    </section>
                    <h3>
                        <span className="badge amber darken-2">{message}</span>
                    </h3>
                    <section className="section">
                        <Cart />
                    </section>
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.Products,
        message: state.Message
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopCartPage)
