import React, { Component } from 'react'

export default class SizeSetting extends Component {

    textSizing = (value) => {
        this.props.setSizing(value)
    }

    setDefault = () => {
        this.props.setDefault()
    }

    render() {

        var { fontSize } = this.props

        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title" style={{fontSize: fontSize}}>Size : {fontSize}px</h3>
                    </div>
                    <div className="panel-body">
                        <button type="button" className="btn btn-success" onClick={() => this.textSizing(-2)}  >Giảm</button>&nbsp;
                        <button type="button" className="btn btn-success" onClick={() => this.textSizing(2)}  >Tăng</button>
                    </div>
                </div>
                <button type="button" className="btn btn-primary mt-2" onClick={this.setDefault} >reset</button>
            </div>
        )
    }
}
