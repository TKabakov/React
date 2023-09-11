import Header from './components/Header'
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Hello from "./components/Hello";
import Example from "./components/Example";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";
import './App.css';
import LogicalAndExample from './components/LogicalAndExample';


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
      <LogicalAndExample />
    </div>
  );
}

export default App;
