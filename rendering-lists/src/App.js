import Recipes from "./components/Salads"; 
import RecipeList from "./components/Recipe";
import Recipe from "./components/Recipe2";
import List from "./components/Scientists";
import Form from "./components/Form";
import FormControlled from "./components/FormControlled";
import Feedback from "./components/Feedback";
import RegForm from "./components/RegForm";
import MyForm from "./components/MyForm";
import './App.css';

function App() {
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
    </div>
  );
}

export default App;
