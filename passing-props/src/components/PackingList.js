function Item({ name, isPacked, importance }) {
//  let itemContent = name;
// if(isPacked){
//  itemContent = (
//    <del>
//       {name + " ✔ "} 
//   </del>      
//  )
//}
  return (
    <li className="item">{name}{importance>0 &&<i>(Importance: {importance})</i>}</li>
//    <li className="item">
//      {itemContent}
//    </li>
  //<li className="item">{itemContent}</li>
  //<li className="item">{name}{isPacked && "✔"}</li>
  //<li className="item">{isPacked ? name + "✔": name}</li>
  // isPacked&&<li className="item">{name}✔</li>
  // !isPacked&&<li className="item">{name}</li>
  )
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit"
          importance={9}
        />
        <Item
          isPacked={true} 
          name="Helmet with a golden leaf" 
          importance={0}
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam"
          importance={6}
        />
      </ul>
    </section>
  );
}
