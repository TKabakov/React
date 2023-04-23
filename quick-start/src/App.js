import './App.css';
import AboutPage from './components/AboutPage';
import MyButton from './components/MyButton';
import Profile from './components/Profile';
import ShoppingList from './components/ShoppingList';

function App() {
  return (
    <div className="App">
      <h1>Werlcome to my app</h1>
      <MyButton />
      <AboutPage />
      <Profile />
      <ShoppingList />
      <MyButton />
    </div>
  );
}

export default App;
