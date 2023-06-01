import Recipes from "./components/Salads"; 
import RecipeList from "./components/Recipe";
import Recipe from "./components/Recipe2"; 
import './App.css';

function App() {
  return (
    <div className="App">
    <Recipes />
    <RecipeList />
    <Recipe />
    </div>
  );
}

export default App;
