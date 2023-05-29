import { recipes } from "./SaladsData";

export default function Recipes (){
  const recipe = recipes.map(
  (recipe) => {
    return(
      <li key={recipe.id}>
        {recipe.name}
      </li>
    )
  });

  const ingredient = recipe.map(
    (ingredient) => {
    return(
      <li>{ingredient.ingredients}</li>
    )
});

  return(
    <div>
      <ul>
          {recipe}
          <ul>
            {ingredient}
          </ul>
      </ul>
    </div>
  )
}



