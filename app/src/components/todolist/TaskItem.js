import React, { Component } from 'react'

export default class TaskItem extends Component {

    onChangeStatus = (id) => {
        this.props.onChangeStatus(id)
    }

    onDeleteStatus = (task) => {
        this.props.onCloseForm()
        if (confirm(`Bạn thật sự muốn xóa ${task.name} ra khỏi danh sách`)) { // eslint-disable-line
            this.props.onDeleteStatus(task.id)
        }
    }

    getEditTask = () => {
        this.props.getEditTask(this.props.task)
    }

    render() {

        var { task,index } = this.props

        return (
            <tr>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span className={task.status === true ? "badge badge-success" : "badge badge-danger"} onClick={() => this.onChangeStatus(task.id)}>
                        {task.status === true ? "Kích Hoạt" : "Ẩn"}
                    </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning" onClick={this.getEditTask} >
                        <span className="fa fa-pencil mr-2"></span>Sửa
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger" onClick={() => this.onDeleteStatus(task)}>
                        <span className="fa fa-trash mr-2"></span>Xóa
                    </button>
                </td>
            </tr>
        )
    }
}
