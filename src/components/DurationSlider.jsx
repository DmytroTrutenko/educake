import React, {Component} from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import counterpart from 'counterpart';

class DurationSlider extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            month: 0
        }
    }

    handleOnChange = (value) => {
        this.setState({
            month: value
        })
    };

    render() {
        let {month} = this.state;
        return (
            <div className='slider_val'>
                <span className='slid'>0{counterpart.translate('search.mon')}</span>
                <Slider
                    min={0}
                    max={72}
                    step={1}
                    value={month}
                    orientation="horizontal"
                    onChange={this.handleOnChange}
                />
                <span>72{counterpart.translate('search.mon')}</span>
            </div>
        )
    }
}

export default DurationSlider;