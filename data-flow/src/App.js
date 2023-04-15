import './App.css';
import Puppy from './components/Puppy';
import Child from './components/Child';

function App() {
  const date = new Date();
  return (
    <div>
      <h1>
        <Child message={date.toLocaleTimeString()}/>
      </h1>
      <Puppy name="Teo" bowlShape bowlStatus/>
    </div>
  //Check the bowlShape and bowlStatus props in the child Puppy component
  );
}

export default App;
