import { recipes } from "./SaladsData";

export default function NewRecipe() {
  const ingradients = recipes.map((item)=>{
    return(
    <li key={item.id}>{item.ingredients}</li>
      );
    }
  );

  return (
    <div>
      {recipes.map(item=>
        <div key={item.id}>
          <h2>{item.name}</h2>
            <ul>

            </ul>
        </div>
        )
      }   
    </div>
  );
}
