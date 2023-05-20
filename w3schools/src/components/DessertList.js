function DessertsList(props) {
   /*
    const filterItems = props.data.filter(item => item.calories < 500);

    const sortItems = filterItems.sort((a,b) => a.calories-b.calories);
    */

    const filterAndSort = props.data.filter(item => item.calories < 500)
    .sort((a,b) => a.calories-b.calories)
    .map((dessert) => {
    
      return <li>{`${dessert.name} - ${dessert.calories} cal` }</li>
    })
    
    //map chained
    
    return (
      <ul>
       { filterAndSort }
      </ul>
    );
  }
  
  export default DessertsList;
