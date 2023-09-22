function DessertsList(props) {
   /*
    const filterItems = props.data.filter(item => item.calories < 500);

    const sortItems = filterItems.sort((a,b) => a.calories-b.calories);
    */
  const map=props.map((dessert) =>{
    return<li key={dessert.name}>{`${dessert.name} - ${dessert.calories}cal`}</li>
  })
    const filterAndSort = props.data.filter(item => item.calories < 400)
    .sort((a,b) => a.calories-b.calories)
    .map((dessert) => {
      return <li key={dessert.name}>  {`${dessert.name} - ${dessert.calories} cal` }</li>
    })
    
    //map chained

    return (
      <div>
        <h2>Dessert List:</h2>
        <ul>
          { map }
        </ul>
        <h2>Sort and Filtered</h2>
        <h2>List of low calories desserts:</h2>
        <ul>
            { filterAndSort }
        </ul>
      </div>
  
    );
  }
  
  export default DessertsList;
