import { recipes } from "./SaladsData";

export default function Recipes (){
  const recipeNames = recipes.map(
  (recipe) => {
    return(
      <li key={recipe.id}>
        {recipe.name}
      </li>
    )
  }
  )

  return(
    <div>
      <ul>
          {recipeNames}
      </ul>
    </div>

  )
}



