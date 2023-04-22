const products = [
{title:'Cabbage', id:'1'},
{title:'Garlic', id:'2'},
{title:'Apple', id:'1'},
  ];
  
function ShoppingList (){
  
const listItems = products.map (
  products =>
  <li 
    key={products.id} >
    {products.title}
  </li>
  );

  return (
    <ul>
     {listItems}
     </li>
    )
}