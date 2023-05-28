export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
}];

export default function Recipes (){
  recipes.map((item) => {
  return (
    <ul>{item.name}
    {item.items.map(child => (
     <li>{child.ingrediants}</li>
    ))}
   </ul>
);})}

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



