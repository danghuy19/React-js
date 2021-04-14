import React, { Component } from 'react'

export default class ColorPicker extends Component {

    onClick = (color) => {
        this.props.setColor(color)
    }

    render() {

        var colors = ['red','blue','green','yellow']
        var colorPick = colors.map((color, index) => {
            return <span key={index} className={this.props.color === color ? "square mr-3 square-active" : "square mr-3"} 
            style={{backgroundColor: color}} onClick={() => this.onClick(color)}/>
        })

        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Color Picker</h3>
                    </div>
                    <div className="panel-body">
                        <hr />
                        {colorPick}
                    </div>
                </div>
            </div>
        )
    }
}
