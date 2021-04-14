import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actFilterTask } from '../../actions'
import TaskItem from './TaskItem'

class TaskList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            filterName: '',
            filterStatus: -1
        }
    }

    onFilter = (e) => {
        var name = e.target.name
        var value = e.target.value
        this.setState({
            [name]: value
        })
        var filterValue = {
            name: name === 'filterName' ? value : this.state.filterName,
            status: name === 'filterStatus' ? value : this.state.filterStatus
        }
        this.props.onFilter(filterValue)
    }

    render() {

        var { filterName,filterStatus } = this.state
        var { tasks,sort,keyword,filter } = this.props
        if (sort.by === 'name') {
            tasks.sort((a,b) => {
                if (a.name && b.name) {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return sort.order
                    } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
                        return -sort.order
                    } else {
                        return 0
                    }
                }
            })
        }
        if (sort.by === 'status') {
            tasks.sort((a,b) => {
                if (a.status > b.status) {
                    return -sort.order
                } else if (a.status < b.status) {
                    return sort.order
                } else {
                    return 0
                }
            })
        }
        if (keyword) {
            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
            })
        }
        if (filter.name) {
            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1
            })
        }
        tasks = tasks.filter((task) => {
            if (filter.status === -1) {
                return task
            } else {
                return task.status === (filter.status === 1) ? true : false
            }
        })
        if (tasks.length > 0) {
            var showTasks = tasks.map((task,index) => {
                return <TaskItem key={index} index={index} task={task} />
            })
        }

        return (
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Trạng Thái</th>
                        <th className="text-center">Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input type="text" className="form-control" name="filterName" value={filterName} onChange={this.onFilter} />
                        </td>
                        <td>
                            <select className="form-control" name="filterStatus" value={filterStatus} onChange={this.onFilter} >
                                <option value={-1}>Tất Cả</option>
                                <option value={0}>Ẩn</option>
                                <option value={1}>Kích Hoạt</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    {showTasks}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.Tasks,
        sort: state.Sort,
        keyword: state.Search,
        filter: state.Filter
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFilter: (value) => {
            dispatch(actFilterTask(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
