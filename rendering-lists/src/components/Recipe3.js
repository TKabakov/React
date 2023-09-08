import { recipes } from './data.js';

export default function RecipeList() {
  const recipe = recipes.map((item)=>{
    return(
    <li key={item.id}>{item}</li>
      );
  }
  return (
    <div>
      <h1>Recipes</h1>
      <ul>{recipe}</ul>
    </div>
  );
}
