import Recipes from "./components/Salads"; 
import RecipeList from "./components/Recipe";
import Recipe from "./components/Recipe2";
import List from "./components/Scientists";
import Form from "./components/Form";
import FormControlled from "./components/FormControlled";
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
    </div>
  );
}

export default App;
