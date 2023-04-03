
import './App.css';
import { Greet } from './components/Greet';
import Promo from './components/Promo';

//named import

function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName="Batman">
        <p>This is children props </p>
        </Greet>
      <Greet name="Marry" heroName="Wonder Woman">
        <button>Action</button>
        </Greet>
      <Greet name="Joe" heroName="Superman"/>
      <Promo heading="Don't miss this deal!" promoSubHeading="Subscibe to my newletter and get all the shop items at 50% off!"></Promo>
    </div>
  );
}

export default App;
