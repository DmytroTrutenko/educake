import React, {Component} from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

class PriceSlider extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            money: 0
        }
    }

    handleOnChange = (value) => {
        this.setState({
            money: value
        })
    };

    render() {
        let {money} = this.state;
        return (<div className='slider_val'>
                <span>0€</span>
                <Slider
                    min={0}
                    max={5000}
                    step={100}
                    value={money}
                    orientation="horizontal"
                    onChange={this.handleOnChange}
                />
                <span>5000€</span>
            </div>

        )
    }
}

export default PriceSlider;