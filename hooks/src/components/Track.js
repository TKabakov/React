import React from 'react';
import { useReducer } from 'react';

const reducer = (state, action) => {
    if (action.type === "buy ingradients") return {money: state.money - 10};
    if (action.type === "sell a meal") return {money: state.money + 10};
    if (actuon.type === "celebrity visit") return {money: state.money + 5000};
    return state;
}

function Track() {

    const initialState = {money: 100};
    const [state, dipatch] = useReducer(reducer, initialState);
    
  return (
    <div>
      
    </div>
  )
}

export default Track
