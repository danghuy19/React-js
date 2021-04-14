import React, { Component } from 'react'
import { actSearchTask, actSortTask } from '../../actions'
import { connect } from 'react-redux'

class TaskControl extends Component {

    constructor(props) {
        super(props)

        this.state = {
            keyword: ''
        }
    }


    onSort = (sortBy, sortOrder) => {
        var sortValue = {
            by: sortBy,
            order: sortOrder
        }
        this.props.onSortTask(sortValue)
    }

    getKeyword = (e) => {
        var name = e.target.name
        var value = e.target.value
        this.setState({
            [name]: value
        })
    }

    onSearch = () => {
        this.props.onSearchTask(this.state.keyword)
    }

    render() {
        
        var { keyword } = this.state

        return (
            <div className="row mt-4 mb-3">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Nhập từ khóa..." name="keyword" value={keyword} onChange={this.getKeyword} />
                        <span className="input-group-btn">
                            <button className="btn btn-primary" type="button" onClick={this.onSearch}>
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
                                <a role="button" style={{ cursor: 'pointer' }} onClick={() => this.onSort('name', 1)}>
                                    <span className="fa fa-sort-alpha-asc pr-5">
                                        Tên A-Z
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a role="button" style={{ cursor: 'pointer' }} onClick={() => this.onSort('name', -1)}>
                                    <span className="fa fa-sort-alpha-desc pr-5">
                                        Tên Z-A
                                    </span>
                                </a>
                            </li>
                            <li role="separator" className="divider"></li>
                            <li><a role="button" style={{ cursor: 'pointer' }} onClick={() => this.onSort('status', 1)}>Trạng Thái Kích Hoạt</a></li>
                            <li><a role="button" style={{ cursor: 'pointer' }} onClick={() => this.onSort('status', -1)}>Trạng Thái Ẩn</a></li>
                        </ul>
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
        onSortTask: (value) => {
            dispatch(actSortTask(value))
        },
        onSearchTask: (keyword) => {
            dispatch(actSearchTask(keyword))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskControl)
