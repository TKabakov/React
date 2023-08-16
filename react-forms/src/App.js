import Form from "./components/Form";
import FormControlled from "./components/FormControlled";
import Feedback from "./components/Feedback";
import RegForm from "./components/RegForm";
import MyForm from "./components/MyForm";
import Input from "./components/Input";
import ToDoList from "./components/ToDo";
import './App.css';

function App() {
 
  return (
    <div className="App">
      <Form />
      <FormControlled />
      <Feedback />
      <RegForm />
      <MyForm />
      <Input />
      <ToDoList />
    </div>
  );
}

export default App;
