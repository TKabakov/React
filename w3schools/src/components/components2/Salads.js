import { recipes } from "./SaladsData";

export default function Recipes (){
  
  const recipe = recipes.map(
  (recipe) => {
    return(
      <li key={recipe.id}>
        {recipe.name}
        {recipe.ingredients.map(
    (type, index) => {
    return(
      <li key={index}>{type}</li>
    )
})}
      </li>
    )
  });

  return(
    <div>
      <ul>
          {recipe}
          <ul>
            {recipe}
          </ul>
      </ul>
    </div>
  )
}



