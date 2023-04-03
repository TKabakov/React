
import './App.css';
import { Greet } from './components/Greet';
//named import

function App() {
  return (
    <div className="App">
      <Greet name="Bruce"/>
      <Greet name="Marry"/>
      <Greet name="Joe"/>
      <Greet />
    </div>
  );
}

export default App;
