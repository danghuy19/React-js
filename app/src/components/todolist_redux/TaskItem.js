import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actChangeStatus, actDeleteTask, actGetTask, actOpenForm } from '../../actions'

class TaskItem extends Component {

    onDeleteTask = (task) => {
        if (confirm(`Xóa '${task.name}' ra khỏi danh sách`)) { // eslint-disable-line
            this.props.onDeleteTask(task.id)
        }
    }

    onChangeStatus = (id) => {
        this.props.onChangeStatus(id)
    }

    onGetTask = (task) => {
        this.props.onGetTask(task)
        this.props.onOpenForm()
    }

    render() {
        
        var { task,index } = this.props

        return (
            <tr>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span className={task.status === true ? "badge badge-success" : "badge badge-danger"} onClick={() => this.onChangeStatus(task.id)} >
                        {task.status === true ? 'Kích Hoạt' : 'Ẩn'}
                    </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning" onClick={() => this.onGetTask(task)} >
                        <span className="fa fa-pencil mr-2"></span>Sửa
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger" onClick={() => this.onDeleteTask(task)} >
                        <span className="fa fa-trash mr-2"></span>Xóa
                    </button>
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
        onDeleteTask: (id) => {
            dispatch(actDeleteTask(id))
        },
        onChangeStatus: (id) => {
            dispatch(actChangeStatus(id))
        },
        onGetTask: (task) => {
            dispatch(actGetTask(task))
        },
        onOpenForm: () => {
            dispatch(actOpenForm())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem)
