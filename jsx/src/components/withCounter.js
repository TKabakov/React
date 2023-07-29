const UpdatedComponent = (OriginalComponent) => {
  function NewComponent(props){
    const [counter, setCounter] = useState(10)
    return(
        <OriginalComponent
        name="LogRocket"
        counter ={counter}
        incrementCounter={
          () => setCounte((count) => count +1)
        }
        />
      );
  }
  return NewComponent;
};

export default UpdatedComponent;