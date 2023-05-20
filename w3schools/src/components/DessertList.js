function DessertsList(props) {
   /*
    const filterItems = props.data.filter(item => item.calories < 500);

    const sortItems = filterItems.sort((a,b) => a.calories-b.calories);
    */

    const filterAndSort = props.data.filter(item => item.calories < 500)
    .sort((a,b) => a.calories-b.calories);

    //Filter and Sort are chained in one statement;

    const listItems = filterAndSort.map(dessert => {
      const itemText = `${dessert.name} - ${dessert.calories}`
      return <li>{itemText}</li>
    })
    
    return (
      <ul>
       { listItems }
      </ul>
    );
  }
  
  export default DessertsList;
