import React, { Component } from 'react'

export default class Result extends Component {
    render() {

        var { color,fontSize } = this.props

        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <p>Color : {color} - Fontsize : {fontSize}px</p>
                <div id="content" style={{color: this.props.color, fontSize: this.props.fontSize}} >
                    Nội dung setting
                </div>
            </div>
        )
    }
}
