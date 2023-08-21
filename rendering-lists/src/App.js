import Recipes from "./components/Salads"; 
import RecipeList from "./components/Recipe";
import Recipe from "./components/Recipe2";
import List from "./components/Scientists";
import Sculpture from "./components/Sculpture";
import ShoppingList from "./components/ShoppingList";
import './App.css';

function App() {
 
  return (
    <div className="App">
      <Recipes />
      <RecipeList />
      <Recipe />
      <List />
      <Sculpture />
      <ShoppingList />
    </div>
  );
}

export default App;
