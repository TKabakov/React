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
    <form>
      <fieldset>
        <div className='Field'>
        <h2>Feedback form:</h2>
          <label>Score</label>
          <input type="range" min="0" max="10" />
         <button type='submit'>Submit</button>
         </div>
      </fieldset>
    </form>
    </div>
  );
}

export default App;
