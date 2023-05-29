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

/*
export default Recipes (){
const Names = recipes.map((name) => {
  return <li key={name.id}>{name.name}</li>
})

return (
  <div>
    <h2>List of low calories desserts:</h2>
    <ul>
        { Names }
    </ul>
  </div>

);
}
*/

/*
export default function Recipes (){
  recipes.map((item) => {
  return (
    <ul>{item.name}
    {item.ingredients.map(child => (
     <li>{child.ingrediants}</li>
    ))}
   </ul>
);})}
*/
//Nested Array of Object
/*
export const  testData = [{

    SectionName: "Product", items: [
      { "id": 1, "Name": "MacBook" },
      { "id": 2, "Name": "iPhone" },
      { "id": 3, "Name": "iPad" },
      { "id": 4, "Name": "iWatch" }
    ]
  },
  {
    SectionName: "Company", items: [
      { "id": 1, "Name": "Google" },
      { "id": 2, "Name": "FaceBook" },
      { "id": 3, "Name": "IBM" },
      { "id": 4, "Name": "Cisco" }

    ]
  }
];
*/



