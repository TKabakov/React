
import './App.css';
import Objects from './components/Objects';
import Goals from './components/Goals';
import GiftCards from './components/GiftCards';
import MovingDot from './components/MovingDot';
import Person from './components/Person';
import Artwork from './components/Artwork';

function App() {
  return (
    <div className="App">
      <Objects />
      <Goals />
      <GiftCards />
      <MovingDot />
      <Person />
      <Artwork />
    </div>
  );
}

export default App;
