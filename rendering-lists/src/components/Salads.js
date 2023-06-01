import { recipes } from "./SaladsData";

export default function Recipes (){
  return (
    <div>
      {recipes.map((recipe) =>{
        return <div key={recipe.id}>
        <h1>{recipe.name}</h1>
        {recipe.ingredients.map((type, index) =>{
          return <li key={index}>{type}</li>
        }
          )
        }
        </div>
      }
  )
      }
    </div>
  )
    }

    /*
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

*/

