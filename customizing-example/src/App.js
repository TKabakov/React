
import './App.css';
import { Greet } from './components/Greet';
//named import

function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName="Batman">
        <p>This is children props </p>
        </Greet>
      <Greet name="Marry" heroName="Wonder Woman">
        <button>Action</button>
        </Greet>
      <Greet name="Joe" heroName="Superman"/>
    </div>
  );
}

export default App;
