import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import Hello from "./components/Hello";
import Example from "./components/Example";
import './App.css';



function App() {
  return (
    <div>
      <Header name="Anna" color="purple"/>
      <Main greet="Howdy" />
      <Sidebar greet="Hi"/>
      <Hello />
      <Example></Example>
    </div>
  );
}

export default App;
