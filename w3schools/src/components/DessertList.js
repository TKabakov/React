function DessertsList(props) {
   /*
    const filterItems = props.data.filter(item => item.calories < 500);

    const sortItems = filterItems.sort((a,b) => a.calories-b.calories);
    */
  const maped=props.data.map((dessert) =>{
    return<li key={dessert.name}>{`${dessert.name} - ${dessert.calories}cal`}</li>
  })
    const filterAndSort = props.data.filter(item => item.calories < 400)
    .sort((a,b) => a.calories-b.calories)
    .map((dessert) => {
      return <li key={dessert.name}>  {`${dessert.name} - ${dessert.calories} cal` }</li>
    })
    
    //map chained

    return (
      <div className="App">
        <h2>Dessert List:</h2>
        <ul>
          { maped }
        </ul>
        <h2>Sort and Filtered</h2>
        <h3>List of low calories desserts:</h3>
        <ul>
            { filterAndSort }
        </ul>
      </div>
  
    );
  }
  
  export default DessertsList;
