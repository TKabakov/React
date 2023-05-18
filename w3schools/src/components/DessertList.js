function DessertsList(props) {
    const listItems = props.data.map(dessert => {
      const itemText = `${dessert.name} - ${dessert.calories}`
      return <li>{itemText}</li>
    })
    
    const listFilter = listItems.filter(item => item.calories < 500)
    return (
      <ul>
       { listFilter }
      </ul>
    );
  }
  
  export default DessertsList;