import React , { useState } from 'react'
import Colours from './Colour'
import Pixel from './Pixel'

export const Canvas = props => {
    const grid = Array(30).fill().map(() => Array(30).fill(0));
    const existing = localStorage.getItem('masterpiece');
    const [matrix, setMatrix] = useState(existing? JSON.parse(existing) : grid);
    const changeColour = (rowIndex, colIndex) => {
        const newMatrix = JSON.parse(JSON.stringify(matrix));
        newMatrix[rowIndex][colIndex] = props.currentColour;
        setMatrix(newMatrix);
    }
    const reset = () => {
        localStorage.clear();
        setMatrix(grid);
    }
    
    return (
        <div className="canvas">
            {matrix.map((row, rowIndex) => 
            row.map((_, colIndex) => {
            return (
            <Pixel 
            background={Colours[matrix[rowIndex][colIndex]]} 
            key={`${rowIndex}-${colIndex}`}
            onClick={e => changeColour(rowIndex, colIndex)}
        />
            )}))}
            <button id="savebutton" onClick={() => localStorage.setItem('masterpiece', JSON.stringify(matrix))}>Save Masterpiece</button>
            <button id="clear" onClick={() => reset()}>Clear Canvas</button>
        </div>
    )
}
