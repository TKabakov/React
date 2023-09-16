import React from 'react';
import './App.css';
import FeedbackForm from './components/BookingHotel';
import Form from './components/FullName';
import TravalPlan from './components/TravalPlan';
import Counter from './components/Counter';
import Object from './components/ObjectUpdate';
import Data from './components/PersonalData';

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
      <h2>Booking Form</h2>
        <FeedbackForm />
      <h2>Full name form</h2>
        <Form />
      <h2>TravalPlan</h2>
        <TravalPlan />
      <h2>Counter</h2>
        <Counter />
      <h2>Object Update:</h2>
        <Object />
      <h2>Personal Data:</h2>
        <Data />
    </div>
  );
}

export default App
