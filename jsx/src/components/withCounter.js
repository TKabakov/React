const UpdatedComponent = (OriginalComponent) => {
  function NewComponent(props){
    return <OriginalComponent />
  }
  return NewComponent;
};

export default UpdatedComponent;