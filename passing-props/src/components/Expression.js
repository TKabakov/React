//You can pass almost any expression as a props.

//function Expression (props)
function Expression ({toggleBoolean}) {
    return (
        <h2> The value of the toggleBoolean prop is: {toggleBoolean.toString()}</h2>
//      <h2> The value of the toggleBoolean prop is: {props.toggleBoolean.toString()}</h2>
    );
};

export default Expression;