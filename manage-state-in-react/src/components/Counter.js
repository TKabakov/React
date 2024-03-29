import { useState } from 'react';

export default function Counter() {
  const [score, setScore] = useState(0);

  function increment() {
    setScore(s=>s + 1);
  }
  //passing an updater function when setting stategit

  return (
    <>
      <button onClick={() => increment()}>+1</button>
      <button onClick={() => {
        increment();
        increment();
        increment();
        increment();
      }}>+4</button>
      <h1>Score: {score}</h1>
    </>
  )
}