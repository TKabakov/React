import Btn from "./Btn";
import './App.css';

function App() {
  return (
      <div>
        <Btn />

        <button onClick={function(){console.log("first example")}}>
          An inline anonymus ES5 function event handler
        </button>

        <button onClick={() => console.log("second example")}>
          An inline anonymus ES6 function event handler
        </button>

      </div>
  );
}

export default App;
