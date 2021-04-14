import React, { Component } from 'react'
import ColorPicker from '../components/setting_text/ColorPicker';
import Result from '../components/setting_text/Result';
import SizeSetting from '../components/setting_text/SizeSetting';

export default class SettingTextPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            color: 'red',
            fontSize: 15
        }
    }

    setColor = (color) => {
        this.setState({
            color: color
        })
    }

    setSizing = (value) => {
        if (this.state.fontSize + value > 12 && this.state.fontSize + value < 36) {
            this.setState({
                fontSize: this.state.fontSize + value
            })
        }
    }

    setDefault = () => {
        this.setState({
            color: 'red',
            fontSize: 15
        })
    }

    render() {

        var { color, fontSize } = this.state

        return (
            <div className='container mt-5'>
                <div className='row'>
                    <ColorPicker color={color} setColor={this.setColor} />
                    <SizeSetting fontSize={fontSize} setSizing={this.setSizing} setDefault={this.setDefault} />
                    <Result color={color} fontSize={fontSize} />
                </div>
            </div>
        )
    }
}
