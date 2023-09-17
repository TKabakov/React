import React from 'react';
import './App.css';
import FeedbackForm from './components/BookingHotel';
import Form from './components/FullName';
import TravalPlan from './components/TravalPlan';
import Counter from './components/Counter';
import Object from './components/ObjectUpdate';
import Data from './components/PersonalData';
import Scoreboard from './components/Scoreboard';
function App() {
  return (
    <div className="App">

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
      <h2>Scoreboard:</h2>
        <Scoreboard />
    </div>
  );
}

export default App
