import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actAddToCart, actAddToCartMess } from '../../actions'

class ProductItem extends Component {

    showRating = (rate) => {
        var result = []
        for (let i = 0; i < rate; i++) {
            result.push(<i className="fa fa-star"></i>)
        }
        for (let j = 0; j < (5-rate); j++) {
            result.push(<i className="fa fa-star-o"></i>)
        }
        return result
    }

    onAddToCart = (product) => {
        this.props.onAddToCart(product)
        this.props.onNotification()
    }

    render() {

        var { product } = this.props

        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={product.image} className="img-fluid" alt="" />
                        <a>
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a>{product.name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            <li>
                                {this.showRating(product.rate)}
                            </li>
                        </ul>
                        <p className="card-text">
                            {product.description}
                        </p>
                        <div className="card-footer">
                            <span className="left">{product.price}$</span>
                            <span className="right">
                                <a className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart" onClick={() => this.onAddToCart(product)} >
                                    <i className="fa fa-shopping-cart"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product, quantity) => {
            dispatch(actAddToCart(product, 1))
        },
        onNotification: () => {
            dispatch(actAddToCartMess())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem)