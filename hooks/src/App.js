
import './App.css';
import Objects from './components/Objects';
import Goals from './components/Goals';
import GiftCards from './components/GiftCards';
import MovingDot from './components/MovingDot';
import Person from './components/Person';
import Artwork from './components/Artwork';
import Bitcoin from './components/Bitcoin';
import CustomerData from './components/CustomerData';
import Track from '/components/Track';


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
      <CustomerData />
      <Track />
    </div>
  );
}

export default App;
