import React from 'react';

import SliderImageOne from '../../images/slider-image-1.jpg';

class Slider extends React.Component {
    render() {
        return(
            <div id="Slider-image">
                <div className="slider-image-1">
                    <img src={SliderImageOne}></img>
                </div>
            </div>
        )
    }
}

export default Slider;