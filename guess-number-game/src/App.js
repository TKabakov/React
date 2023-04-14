
import './App.css';
import Puppy from './components/Puppy';

function App() {
  function handleClick() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt("Type a number", "0");
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`)
}

  return (
    <div>
      <h1>Task: Add a button and handle a click event</h1>
      <button onClick ={handleClick}>Guess the number between 1 and 3</button>
      <Puppy name="Max" bowlShape="Square" bowlStatus="full"/>
    </div>
  );
}

export default App;

