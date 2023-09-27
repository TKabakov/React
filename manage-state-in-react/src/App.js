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
import UpdateArray from './components/Array/UpdatingArray';
import RemoveArray from './components/Array/RemovingArray';
import InsertArray from './components/Array/InsertArray';
import CounterList from './components/Array/ReplacingArray';
import ShapeEditor from './components/Array/TransformArray';
import ReverseList from './components/Array/ReverseArray';
import BucketList from './components/Array/ObjectIsideArray';
import ShoppingCart from './components/Array/ShoppjngCart';

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
        <p>
        The easiest way to remove an item from an array is to filter it out. 
        <br/>
        You will produce a new array that will not contain that item. 
        <br/>
        To do this, use the filter method.
        </p>
      <h2>Insert items into an array with slice function</h2>
        <InsertArray />
        <p> To insert an item, you will create an array that spreads the slice before the insertion point, 
          <br/>
          then the new item, and then the rest of the original array.</p>
      <h2>Replacing items from an Array</h2>
        <CounterList />
        <p>To replace an item, create a new array with map. 
          <br/>
          Inside your map call, you will receive the item index as the second argument. 
          <br/>
          Use it to decide whether to return the original item (the first argument) or something else.</p>
      <h2>Transforming an array using map function</h2>
        <ShapeEditor />
        <p>In this example, an array holds coordinates of two circles and a square.
          <br />
          When you press the button, it moves only the circles down by 50 pixels. 
          <br/>
          It does this by producing a new array of data using map()</p>
      <h2>Using reverse and/or sort functions</h2>
        <ReverseList/>
        <p>The JavaScript reverse() and sort() methods are mutating the original array, so you can’t use them directly.
          However, you can copy the array first, and then make changes to it.</p>
      <h2>Updating Objects inside an Array</h2>
        <BucketList/>
      <h2>ShoppingCart</h2>
        <ShoppingCart/>
    </div>
  );
}

export default App
