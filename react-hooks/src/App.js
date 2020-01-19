import React from 'react';
import './App.css';

import Input from './components/Input/Input';
import CalcItem from './components/CalcItem/CalcItem';

const App = () => {
  return(
    <div>
      <h4>Calculator React-Hooks</h4>
      <Input />
      <div>
        <CalcItem name={7}/>
        <CalcItem name={8}/>
        <CalcItem name={9}/>
        <CalcItem name={'+'}/>
      </div>
      <div>
        <CalcItem name={4}/>
        <CalcItem name={5}/>
        <CalcItem name={6}/>
        <CalcItem name={'-'}/>
      </div>
      <div>
        <CalcItem name={1}/>
        <CalcItem name={2}/>
        <CalcItem name={3}/>
        <CalcItem name={'%'}/>
      </div>
      <div>
        <CalcItem name={0}/>
        <CalcItem name={'.'}/>
        <CalcItem name={'AC'}/>
        <CalcItem name={'X'}/>
      </div>
      <CalcItem name={'='}/>
    </div>
  )
};

export default App;
