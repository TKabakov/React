import './App.css';
import AboutPage from './components/AboutPage';
import MyButton from './components/MyButton';
import Profile from './components/Profile';
import ShoppingList from './components/ShoppingList';
import MyButton2 from './components/MyButton2';

const[count,setCount]= useState(0);

function handleClick () {
  setCount (count + 1);
}

function App() {
  return (
    <div className="App">
      <h1>Werlcome to my app</h1>
      <MyButton />
      <MyButton />
      <AboutPage />
      <Profile />
      <ShoppingList />
      <h1>Counters that update separately</h1>
      <MyButton2/>
      <MyButton/>
    </div>
  );
}
export default App;
