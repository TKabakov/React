import React from 'react';
import './App.css';
import FeedbackForm from './components/BookingHotel';
import Form from './components/FullName';
import TravalPlan from './components/TravalPlan';
import Counter from './components/Counter';
import ObjectUpdate from './components/ObjectUpdate';
import Data from './components/PersonalData';
import Scoreboard from './components/Scoreboard';
import Canvas from './components/Canvas';
import UpdateArray from './components/UpdatingArray';
import RemoveArray from './components/RemovingArray';
import InsertArray from './components/InsertArray';
import CounterList from './components/RemovingArray';

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
        <ObjectUpdate />
      <h2>Personal Data:</h2>
        <Data />
      <h2>Scoreboard:</h2>
        <Scoreboard />
      <h2>"Deep" state update of nested objects:</h2>
        <Canvas />
        <p>We have an object with two states : color and position.</p>
      <h2>Updating an Array using spread sintax:</h2>
        <UpdateArray />
        <p>An unordered list is generated by the inputs by clicking the Add button.</p>
      <h2>Removing Items of an array with filter function:</h2>
        <RemoveArray />
    </div>
  );
}

export default App
