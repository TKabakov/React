
import './App.css';
import { Greet } from './components/Greet';
//named import

function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName="Batman"/>
      <Greet name="Marry" heroName="Wonder Woman"/>
      <Greet name="Joe" heroName="Superman"/>
      <Greet />
    </div>
  );
}

export default App;
