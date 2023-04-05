import './App.css';
import Expression from './components/Expression';
import Expression2 from './components/Expression2';

function Header () {
  return <h1>Hello world</h1>
}

const bool=true;
const str1="just";

function App() {
  return (
    <div>
        <Header />;
        <Expression
          toggleBoolean={!bool}
        />
        <Expression2
          toggleBoolean={!bool}
          math = {(20 + 30) / 10}
          str = {str1+" another "+"string"}
        />
        </div>
  )
        
}

export default App;
