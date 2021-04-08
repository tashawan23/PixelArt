import React from 'react'
import Colour from './Colour'
import Pixel from './Pixel'


export const ColourPicker = props => {
    return (
        <div className="colourpicker">
            {Colour.map((colour,index) => {
            return (
            <Pixel 
            onClick={e => props.setColour(index)}
            background={colour} 
            key={index}
            current={Colour[props.currentColour] === colour}
             /> 
            )
            })}
        </div>
    )
}
