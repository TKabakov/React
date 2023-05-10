import './App.css';
import Goal from './components/Goal';
import Garage from './components/Garage';

const myCars = ["Ford", "BMW", "Audi", "Toyota"];

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      <Goal isGoal={""}/>
      <Garage myCars={ myCars } />
    </div>
    )
}

export default App;
