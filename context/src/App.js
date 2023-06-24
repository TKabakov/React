
import './App.css';
import MyApp from './ThemeContext';
import User from './UpdatingObject'
import Image from './ImageContext';
import MultipleContexts from './MultipleContexts';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <MyApp />
      <User />
      <Image />
      <MultipleContexts />
      <Todo />
    </div>
  );
}

export default App;
