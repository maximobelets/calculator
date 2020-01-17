import React from 'react';
import './App.css';

import Input from './components/Input/Input';
import CalcItem from './components/CalcItem/CalcItem';

const App = () => {
  return(
    <div>
      <h4>Calculator React-Hooks</h4>
      <Input />
      <CalcItem />
      <CalcItem />
      <CalcItem />
    </div>
  )
};

export default App;
