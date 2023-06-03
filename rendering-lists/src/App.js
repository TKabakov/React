import Recipes from "./components/Salads"; 
import RecipeList from "./components/Recipe";
import Recipe from "./components/Recipe2";
import List from "./components/Scientists";
import Form from "./components/Form";
import './App.css';

function App() {
  return (
    <div className="App">
    <Recipes />
    <RecipeList />
    <Recipe />
    <List />
    <Form />
    </div>
  );
}

export default App;
