import React from 'react';
import { useReducer } from 'react';

const reducer = (state, action) => {
    if (action.type === "buy ingradients") return {money: state.money - 10};
    if (action.type === "sell a meal") return {money: state.money + 10};
    if (action.type === "celebrity visit") return {money: state.money + 5000};
    return state;
}

function Track() {

    const initialState = {money: 100};
    const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Wallet: {state.money}</h1>
      <div>
        <button onClick={() => dispatch({type: "buy ingradients"})}>Shopping for veggies!</button>
        <button onClick={() => dispatch({type: "sell a meal"})}>Serve a meal to the customer!</button>
        <button onClick={() => dispatch({type: "celebrity visit"})}>Celebrity visit</button>
      </div>
    </div>
  )
}

export default Track
