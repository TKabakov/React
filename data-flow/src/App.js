import './App.css';
import Puppy from './components/Puppy';
import Child from './components/Child';
import InputComponent from './components/InputComponent';
import RegistrationForm from './components/RegistrationForm';
import TextInputWithFocusButton from './components/TextInputWithFocusButton'
import React, { useState } from 'react';
import HookCounter from './components/HookCounter';

function countInitial () {
  console.log('run function')
  return 4
}

function App() {
  const [count, setCount] = useState(() => countInitial());

  function decrementCount () {
    setCount (prevCount => prevCount - 1 )
  }

  function incrementCount (){
    setCount (prevCount => prevCount + 1 )
  }
  const date = new Date();

  return (
    <div>
      <h1>
        <Child message={date.toLocaleTimeString()}/>
      </h1>
      <Puppy name="Max" bowlShape bowlStatus/>
      <div className="hooks">
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>
      </div>
      <div>
        <InputComponent/>
      </div>
      <div>
        <RegistrationForm/>
      </div>
      <div>
        <TextInputWithFocusButton/>
      </div>
      <div>
        <HookCounter/>
      </div>
    </div>
  //Check the bowlShape and bowlStatus props in the child Puppy component
  );
}

export default App;
