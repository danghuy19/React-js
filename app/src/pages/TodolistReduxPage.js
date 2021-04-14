import React, { Component } from 'react'
import { connect } from 'react-redux'
import TaskForm from '../components/todolist_redux/TaskForm'
import TaskControl from '../components/todolist_redux/TaskControl'
import TaskList from '../components/todolist_redux/TaskList'
import { actClearForm, actOpenForm, actToggleForm } from './../actions/index'

class TodolistReduxPage extends Component {

    onToggleForm = () => {
        if (this.props.editingTask) {
            this.props.onOpenForm()
            // console.log('Updating ...')
        } else {
            this.props.onToggleForm()
        }
        this.props.onClearForm()
    }

    render() {
        
        var { formDisplay } = this.props

        return (
            <div className="container mt-5">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                    <hr />
                </div>
                <div className="row">
                    {formDisplay ? <TaskForm /> : ''}
                    <div className={formDisplay ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                        <button type="button" className="btn btn-primary" onClick={this.onToggleForm}>
                            <span className="fa fa-plus mr-2"></span>Thêm Công Việc
                        </button>
                        <TaskControl/>
                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <TaskList/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        formDisplay: state.FormDisplay,
        editingTask: state.EditingTask
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onToggleForm: () => {
            dispatch(actToggleForm())
        },
        onClearForm: () => {
            dispatch(actClearForm())
        },
        onOpenForm: () => {
            dispatch(actOpenForm())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodolistReduxPage)
