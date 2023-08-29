
import './App.css';
import Counter from './Counter';

function App() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }
  return (
    <div className="App">
        <Counter />
    </div>
  );
}

export default App;
