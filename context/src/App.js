
import './App.css';
import MyApp from './ThemeContext';
import User from './UpdatingObject'
import Image from './ImageContext';
import MultipleContexts from './MultipleContexts';
import Todo from './components/Todo';
import { useAlertContext } from './alertContex';
import AlertProvider from './alertContex';

function App() {
  return (
    <div className="App">
      <MyApp />
      <User />
      <Image />
      <MultipleContexts />
      <AlertProvider />
    </div>
  );
}

export default App;
