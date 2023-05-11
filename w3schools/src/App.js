import './App.css';
import Goal from './components/Goal';
import Garage from './components/Garage';
import Goal2 from './components/Goal2';
import Garage2 from './components/Garage2';
const myCars = ["Ford", "BMW", "Audi", "Toyota"];

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      <Goal isGoal={""}/>
      <Goal2 isGoal={""}/>
      <Garage myCars={ myCars } />
      <Garage2 />
    </div>
    )
}

export default App;
