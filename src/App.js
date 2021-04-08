
import './App.css';
import React, { useState } from 'react'
import { Canvas } from './components/Canvas'
import { ColourPicker } from './components/ColourPicker'

function App() {
  const [colour, setColour] = useState(0)


  return (
    <div className="App">
      <div className="header">Pixel Art Canvas</div>
      <span>
       <ColourPicker currentColour={colour} setColour={colour => setColour(colour)} />
       </span>
       <span>
      <Canvas currentColour={colour}/>
      </span>
    </div>
  );
}

export default App;
