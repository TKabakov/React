import Recipes from "./components/Salads"; 
import RecipeList from "./components/Recipe";
import Recipe from "./components/Recipe2";
import List from "./components/Scientists";
import Form from "./components/Form";
import FormControlled from "./components/FormControlled";
import Feedback from "./components/Feedback";
import RegForm from "./components/RegForm";
import MyForm from "./components/MyForm";
import Input from "./components/Input";
import Sculpture from "./components/Sculpture";
import ToDo from "./components"
import './App.css';
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([
    {
    id: 'todo1',
    createdAt: '18:00',
  }

    {
      id: 'todo2',
      createdAt: '20:00'
    }
])
  return (
    <div className="App">
    <Recipes />
    <RecipeList />
    <Recipe />
    <List />
    <Form />
    <FormControlled />
    <Feedback />
    <RegForm />
    <MyForm />
    <Input />
    <Sculpture />
    <ToDo />
    </div>
  );
}

export default App;
