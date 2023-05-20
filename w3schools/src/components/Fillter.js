function Fillter(props) {
    const fillterItems = props.data.fillter(
    function (item) {
      return item.calories < 500
    }
  )
    return <p> {fillterItems}</p>
  }

  export default Fillter;