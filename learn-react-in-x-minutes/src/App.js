import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import Hello from "./components/Hello";
import Example from "./components/Example";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";
import './App.css';
import CurrentMessage from './components/CurrentMessage';


function App() {
  return (
    <div>
      <Header name="Anna" color="purple"/>
      <Main greet="Howdy" />
      <Sidebar greet="Hi"/>
      <Hello />
      <Example></Example>
      <Example2></Example2>
      <Example3></Example3>
      <CurrentMessage />
    </div>
  );
}

export default App;
