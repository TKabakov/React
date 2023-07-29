const UpdatedComponent = (OriginalComponent) => {
  function NewComponent(props){
    return <OriginalComponent name="LogRocket"/>
  }
  return NewComponent;
};

export default UpdatedComponent;