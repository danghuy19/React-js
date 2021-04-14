import React, { Component } from 'react'

export default class TaskControl extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            keyword: '',
            sortBy: 'name',
            sortOrder: 1
        }
    }
    

    onChange = (e) => {
        var name = e.target.name
        var value = e.target.value
        this.setState({
            [name]: value
        })
    }

    onSearch = () => {
        this.props.onSearch(this.state.keyword)
    }

    onSort = (sortBy, sortOrder) => {
        this.props.onSort(sortBy, sortOrder)
    }

    render() {

        var { keyword,sortBy,sortOrder } = this.state

        return (
            <div className="row mt-4 mb-3">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Nhập từ khóa..." name="keyword" value={keyword} onChange={this.onChange} />
                        <span className="input-group-btn">
                            <button className="btn btn-primary" type="button" onClick={this.onSearch} >
                                <span className="fa fa-search mr-2"></span>Tìm
                            </button>
                        </span>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="dropdown">
                        <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            Sắp Xếp <span className="fa fa-caret-square-o-down ml-2"></span>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li>
                                <a role="button" style={{cursor: 'pointer'}} href="" onClick={() => this.onSort('name',1)} >
                                    <span className="fa fa-sort-alpha-asc pr-5">
                                        Tên A-Z<i className="fa fa-check" aria-hidden="true"></i>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a role="button" style={{cursor: 'pointer'}} href="" onClick={() => this.onSort('name',-1)} >
                                    <span className="fa fa-sort-alpha-desc pr-5">
                                        Tên Z-A<i className="fa fa-check" aria-hidden="true"></i>
                                    </span>
                                </a>
                            </li>
                            <li role="separator" className="divider"></li>
                            <li><a role="button" style={{cursor: 'pointer'}} href="" onClick={() => this.onSort('status',1)} >
                                Trạng Thái Kích Hoạt
                            </a><i className="fa fa-check" aria-hidden="true"></i></li>
                            <li><a role="button" style={{cursor: 'pointer'}} href="" onClick={() => this.onSort('status',-1)} >
                                Trạng Thái Ẩn
                            </a><i className="fa fa-check" aria-hidden="true"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
