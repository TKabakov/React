function MyButton2 (props) {
  return (
    <button onClick={ props.onClick }>
    Clicked { props.count }  times
    </button>
    );
};

export default MyButton2;
