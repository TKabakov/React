//the code is very similar to Recipe.js;

import { recipes } from "./SaladsData";

export default function NewRecipe() {
  return (
    <div>
      {recipes.map(item=>
        <ul key={item.id}>
          <h2>{item.name}</h2>
            <ul>
              {item.ingredients.map(ingredient =>
                <li key={ingredient}>
                  <p>{ingredient}</p>
                </li>
              )}
            </ul>
        </ul>
        )
      }   
    </div>
  );
}
