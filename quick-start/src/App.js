import './App.css';
import MyButton from './components/MyButton';
import Profile from './components/Profile';
import ShoppingList from './components/ShoppingList';
import MyButton2 from './components/MyButton2';
import { useState } from 'react';

function App() {
const[count,setCount]= useState(0);

function handleClick () {
  setCount (count + 1);
}

  return (
    <div className="App">
      <h1>Werlcome to my app</h1>
      <MyButton />
      <MyButton />
      <Profile />
      <ShoppingList />
      <h1>Counters that update separately</h1>
      <MyButton2 count={count} onClick={handleClick}/>
      <MyButton2 count={count} onClick={handleClick}/>
    </div>
  );
}
export default App;
