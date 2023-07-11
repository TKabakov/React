
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
    </div>
  );
}

export default App;
