import React, { Component } from 'react'

export default class TaskForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: null,
            txtName: '',
            txtStatus: true
        }
    }

    componentDidMount() {
        if (this.props.editingTask) {
            var { editingTask } = this.props
            this.setState({
                id: editingTask.id,
                txtName: editingTask.name,
                txtStatus: editingTask.status
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.editingTask) {
            var { editingTask } = nextProps
            this.setState({
                id: editingTask.id,
                txtName: editingTask.name,
                txtStatus: editingTask.status
            })
        } else if (nextProps && nextProps.editingTask === null) {
            this.setState({
                id: null,
                txtName: '',
                txtStatus: true
            })
        }
    }


    onChange = (e) => {
        var name = e.target.name
        var value = e.target.value
        this.setState({
            [name]: value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmitForm(this.state)
    }

    onClear = () => {
        this.setState({
            id: null,
            txtName: '',
            txtStatus: true
        })
    }

    render() {

        var { id, txtName, txtStatus } = this.state

        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">{id ? 'Chỉnh sửa' : 'Thêm Công Việc'}</h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.onSubmit} onReset={this.onClear}>
                            <div className="form-group">
                                <label>Tên :</label>
                                <input type="text" className="form-control" name="txtName" value={txtName} onChange={this.onChange} />
                            </div>
                            <label>Trạng Thái :</label>
                            <select className="form-control" required="required" name="txtStatus" value={txtStatus} onChange={this.onChange}>
                                <option value={true}>Kích Hoạt</option>
                                <option value={false}>Ẩn</option>
                            </select>
                            <br />
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning">{id ? 'Chỉnh sửa' : 'Thêm'}</button>&nbsp;
                                <button type="reset" className="btn btn-danger">Hủy Bỏ</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
