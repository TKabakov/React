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
      <h2>Uncontrolled forms</h2>
        <Form />
      <h2>Controlled forms</h2>
      <p>the form accepts its value as a prop and a callback to change that value. The input value is saved as a state</p>
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
