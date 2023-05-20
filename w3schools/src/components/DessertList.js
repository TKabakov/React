
function DessertsList(props) {
    const listItems = props.data.map(dessert => {
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
