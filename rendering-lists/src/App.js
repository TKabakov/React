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
      <h1>Recipe 1</h1>
        <Recipes />
      <h1>Recipe 2 </h1>
        <RecipeList />
      <h1>Recipe 3</h1>
        <Recipe />
      <h1>Scientists</h1>
        <List />
      <h1>Sculptures</h1>
        <Sculpture />
      <h1>ShoppingList</h1>
      <ShoppingList />
    </div>
  );
}

export default App;
