import Recipes from "./components/Salads"; 
import RecipeList from "./components/Recipe";
import Recipe from "./components/Recipe2";
import List from "./components/Scientists";
import './App.css';

function App() {
  return (
    <div className="App">
    <Recipes />
    <RecipeList />
    <Recipe />
    <List />
    </div>
  );
}

export default App;
