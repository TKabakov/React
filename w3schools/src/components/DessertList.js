
function DessertsList(props) {
    const filterItems = props.data.filter(item => item.calories < 500);

    const sortItems = filterItems.sort((a,b) => a.calories-b.calories);

    const listItems = sortItems.map(dessert => {
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
