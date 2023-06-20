
import './App.css';
import MyApp from './ThemeContext';
import User from './UpdatingObject'
import Image from './ImageContext';
import MultipleContexts from './MultipleContexts';

function App() {
  return (
    <div className="App">
      <MyApp />
      <User />
      <Image />
      <MultipleContexts />
    </div>
  );
}

export default App;
