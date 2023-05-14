import './App.css';

import Goal from './components/Goal';
import Garage from './components/Garage';
import Goal2 from './components/Goal2';
import GarageCar from './components/GarageCar';
import GarageCar2 from './components/GarageCar2';
import MyForm from './components/MyForm';
import MyTextarea from './components/MyTextarea';
import MySelect from './components/MySelect';

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      <Goal />
      <Goal2 />
      <Garage />
      <GarageCar />
      <GarageCar2 />
      <MyForm />
      <MyTextarea />
      <MySelect />
    </div>
    )
}

export default App;
