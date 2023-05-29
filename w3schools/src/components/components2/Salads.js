import { recipes } from "./SaladsData";

export default function Recipes (){
  const recipe = recipes.map(
  (recipe) => {
    return(
      <li key={recipe.id}>
        {recipe.name}.ingrediants.map((ingrediant) => {
          return(
          <li> { ingrediant.ingediants} </li>
          )
        }
      </li>
    )
  }
  )

  return(
    <div>
      <ul>
          {recipe}
      </ul>
    </div>
  )
}



