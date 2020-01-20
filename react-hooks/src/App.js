import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [value, setValue] = useState(0);

  return(
    <div>
      <div>
        <h4>Calculator React-Hooks</h4>
        <input value={value}/>
      </div>
      <div>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>+</button>
      </div>
      <div>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
      </div>
      <div>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>%</button>
      </div>
      <div>
        <button>0</button>
        <button>.</button>
        <button>AC</button>
        <button>X</button>
      </div>
        <button>=</button>
    </div>
  )
};

export default App;
