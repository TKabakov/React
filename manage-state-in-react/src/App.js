import React from 'react';
import './App.css';
import Fruits from './components/Fruits';
import FruitsCounter from './components/FruitsCounter';
import FeedbackForm from './components/BookingHotel';
import Form from './components/FullName';

function App() {
      const [fruits] = React.useState([
        {fruitName: 'apple', id: 1},
        {fruitName: 'apple', id: 2},
        {fruitName: 'plum', id: 3},
      ]);
  
  return (
    <div className="App">
      <h1>Where should the state go?</h1>
      <Fruits fruits={fruits}/>
      <FruitsCounter fruits={fruits}/>
    </div>
  );
}

export default App;
