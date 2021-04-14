import React, { Component } from 'react'
import TaskControl from '../components/todolist/TaskControl'
import TaskForm from '../components/todolist/TaskForm'
import TaskList from '../components/todolist/TaskList'

export default class TodolistPage extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            tasks: [],
            editingTask: null,
            formDisplay: false,
            filter: {
                name: '',
                status: -1,
            },
            keyword: '',
            sort: {
                by: 'name',
                order: 1
            }
        }
    }

    componentDidMount() {
        if (localStorage && localStorage.getItem('Tasks')) {
            var data = JSON.parse(localStorage.getItem('Tasks'))
            this.setState({
                tasks: data
            })
        }
    }

    s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
    }

    generateID = () => {
        return this.s4() + this.s4() + ' - ' + this.s4() + ' - ' + this.s4() + ' - ' + this.s4() + this.s4() + this.s4()
    }

    findIndex = (tasks,id) => {
        var result = -1
        if (tasks.length > 0) {
            tasks.forEach((task, index) => {
                if (task.id === id) {
                    result = index
                }
            })
        }
        return result
    }
    
    onToggleForm = () => {
        if (this.state.editingTask !== null) {
            this.onOpenForm()
        } else {
            this.setState({
                formDisplay: !this.state.formDisplay
            })
        }
        this.onClearForm()
    }

    onOpenForm = () => {
        this.setState({
            formDisplay: true
        })
    }

    onCloseForm = () => {
        this.setState({
            formDisplay: false
        })
    }

    onClearForm = () => {
        this.setState({
            editingTask: null
        })
    }

    onSubmitForm = (task) => {
        var { tasks } = this.state
        var newTask = {
            name: task.txtName,
            status: (task.txtStatus === "true" || task.txtStatus === true) ? true : false 
        }
        if (task.id) {
            newTask.id = task.id
            var index = this.findIndex(tasks,task.id)
            tasks[index] = newTask
        } else {
            newTask.id = this.generateID()
            tasks.push(newTask)
        }
        this.setState({
            tasks: tasks
        })
        localStorage.setItem('Tasks', JSON.stringify(tasks))
        this.onCloseForm()
        this.onClearForm()
    }

    onChangeStatus = (id) => {
        var { tasks } = this.state
        var index = this.findIndex(tasks,id)
        if (index !== -1) {
            tasks[index].status = !tasks[index].status
            this.setState({
                tasks: tasks
            })
            localStorage.setItem('Tasks', JSON.stringify(tasks))
        }
    }

    onDeleteStatus = (id) => {
        var { tasks } = this.state
        var index = this.findIndex(tasks,id)
        if (index !== -1) {
            tasks.splice(index, 1)
            this.setState({
                tasks: tasks
            })
            localStorage.setItem('Tasks', JSON.stringify(tasks))
        }
    }

    onFilterTasks = (filterName, filterStatus) => {
        this.setState({
            filter: {
                name: filterName,
                status: parseInt(filterStatus, 10)
            }
        })
    }

    onSearch = (keyword) => {
        this.setState({
            keyword: keyword
        })
    }

    onSort = (sortBy, sortOrder) => {
        this.setState({
            sort: {
                by: sortBy,
                order: sortOrder
            }
        })
    }

    getEditTask = (task) => {
        this.setState({
            editingTask: task
        })
        this.onOpenForm()
    }

    render() {

        var { tasks,formDisplay,filter,keyword,sort,editingTask } = this.state
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
        if (keyword) {
            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
            })
        }
        if (sort.by === 'name') {
            tasks.sort((a, b) => {
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
            tasks.sort((a, b) => {
                if (a.status > b.status) {
                    return -sort.order
                } else if (a.status < b.status) {
                    return sort.order
                } else {
                    return 0
                }
            })
        }

        return (
            <div className="container mt-5">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                    <hr />
                </div>
                <div className="row">
                    {formDisplay ? <TaskForm onSubmitForm={this.onSubmitForm} editingTask={editingTask} /> : ''}
                    <div className={formDisplay ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                        <button type="button" className="btn btn-primary" onClick={this.onToggleForm}>
                            <span className="fa fa-plus mr-2"></span>Thêm Công Việc
                        </button>
                        <TaskControl onSearch={this.onSearch} onSort={this.onSort} />
                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <TaskList tasks={tasks} onChangeStatus={this.onChangeStatus} onDeleteStatus={this.onDeleteStatus} onCloseForm={this.onCloseForm} onFilterTasks={this.onFilterTasks} getEditTask={this.getEditTask} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
