import './App.css';
import Puppy from './components/Puppy';
import Child from './components/Child';

function App() {
  const date = new Date();
  return (
    <div>
      <div>
        <Child message={date.toLocaleTimeString()}/>
      </div>
      <Puppy name="Teo" bowlShape bowlStatus/>
    </div>
  //Check the bowlShape and bowlStatus props in the child Puppy component
  );
}

export default App;
