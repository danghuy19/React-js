import React, { Component } from 'react'
import TaskItem from './TaskItem'

export default class TaskList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            txtFilterName: '',
            txtFilterStatus: -1
        }
    }

    onChange = (e) => {
        var name = e.target.name
        var value = e.target.value
        this.setState({
            [name]: value
        })
        this.props.onFilterTasks(name === 'txtFilterName' ? value : this.state.txtFilterName, 
            name === 'txtFilterStatus' ? value : this.state.txtFilterStatus)
    }

    render() {

        var { tasks,onChangeStatus,onDeleteStatus,onCloseForm,getEditTask } = this.props
        var { txtFilterName,txtFilterStatus } = this.state
        var showTasks = tasks.map((task, index) => {
            return <TaskItem key={index} index={index} task={task} onChangeStatus={onChangeStatus} onDeleteStatus={onDeleteStatus} onCloseForm={onCloseForm} getEditTask={getEditTask} />
        })

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
                            <input type="text" className="form-control" name="txtFilterName" value={txtFilterName} onChange={this.onChange} />
                        </td>
                        <td>
                            <select className="form-control" name="txtFilterStatus" value={txtFilterStatus} onChange={this.onChange} >
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
