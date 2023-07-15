
import './App.css';
import Objects from './components/Objects';
import Goals from './components/Goals';
import GiftCards from './components/GiftCards';
import MovingDot from './components/MovingDot';
import Person from './components/Person';
import Artwork from './components/Artwork';
import Bitcoin from './components/Bitcoin';
import Track from './components/Track';
import CustomerData from './components/CustomerData';
import NextDay from './NextDay';
import Form from './components/Form';
import TaskAppState from './components/TaskAppState';
import TaskAppReducer from './components/TasksAppReducer';

function App() {
  return (
    <div className="App">
      <Objects />
      <Goals />
      <GiftCards />
      <MovingDot />
      <Person />
      <Artwork />
      <Bitcoin />
      <Track />
      <CustomerData />
      <NextDay />
      <Form />
      <h1>Using State for a complex task:</h1>
        <TaskAppState />
      <h1>Using reducer for the same complex task:</h1>
      <TaskAppReducer />
    </div>
  );
}

export default App;
