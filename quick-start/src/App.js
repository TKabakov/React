import './App.css';
import AboutPage from './components/AboutPage';
import MyButton from './components/MyButton';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <h1>Werlcome to my app</h1>
      <MyButton />
      <AboutPage />
      <Profile />
    </div>
  );
}

export default App;
