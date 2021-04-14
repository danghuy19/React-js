import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actAddToListRequest, actUpdateProductFromListRequest } from '../actions'
import { callAPI } from '../utils/callAPI'

class ProductsListHandlePage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: '',
            txtName: '',
            txtPrice: 0,
            txtInventory: 0,
            status: true
        }
    }

    componentDidMount() {
        if (this.props.match) {
            var { id } = this.props.match.params
            callAPI("GET", `products/${id}`, null).then(res => {
                var { id, name, price, inventory, status } = res.data
                this.setState({
                    id: id,
                    txtName: name,
                    txtPrice: price,
                    txtInventory: inventory,
                    status: status
                })
            })
        }
    }


    onChange = (e) => {
        var name = e.target.name
        var value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        this.setState({
            [name]: value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        if (this.state.id) {
            this.props.onUpdate(this.state)
            this.props.history.goBack()
        } else {
            this.props.onAddToList(this.state)
            this.props.history.goBack()
        }
    }

    render() {

        var { id, txtName, txtPrice, txtInventory, status } = this.state

        return (
            <div className='container mt-5'>
                <div className="row">
                    <div className="col-12">
                        <h1>{id ? 'Chỉnh sửa sản phẩm' : 'Thêm mới sản phẩm'}</h1>
                    </div>
                    <div className="col-6">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Sản phẩm</label>
                                <input type="text" className="form-control" id="name" placeholder="Nhập tên sản phẩm" name="txtName" value={txtName} onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">Giá</label>
                                <input type="number" className="form-control" id="price" placeholder="Nhập tên sản phẩm" name="txtPrice" value={txtPrice} onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inventory">Số lượng</label>
                                <input type="number" className="form-control" id="inventory" placeholder="Nhập tên sản phẩm" name="txtInventory" value={txtInventory} onChange={this.onChange} />
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="status" name="status" value={status} onChange={this.onChange} checked={status} />
                                <label className="form-check-label" for="status">Còn hàng</label>
                            </div>
                            <button type="submit" className="btn btn-primary">{id ? 'Chỉnh sửa' : 'Thêm mới'}</button>
                        </form>
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
        onAddToList: (product) => {
            dispatch(actAddToListRequest(product))
        },
        onUpdate: (product) => {
            dispatch(actUpdateProductFromListRequest(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsListHandlePage)