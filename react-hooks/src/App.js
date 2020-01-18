import React from 'react';
import './App.css';

import Input from './components/Input/Input';
import CalcItem from './components/CalcItem/CalcItem';

const App = () => {
  return(
    <div>
      <h4>Calculator React-Hooks</h4>
      <Input />
      <CalcItem name={1}/>
      <CalcItem name={2}/>
      <CalcItem name={3}/>
    </div>
  )
};

export default App;
